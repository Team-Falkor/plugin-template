import { SearchQuery, ProviderPagination, ProviderSearchResponse, ProviderID, ProviderInfoResponse, ProviderSourceRequest, ProviderSourceResponse, ProviderServerRequest, ProviderServerResponse } from "../../@types";
import { BasePlugin } from "../basePlugin";
export declare abstract class BaseProvider extends BasePlugin {
    /**
     * Searches the provider for results matching the given query.
     * @param query The search query to use.
     * @returns A promise that resolves to an array of paginated search results.
     */
    abstract search(query: SearchQuery): Promise<Array<ProviderPagination<ProviderSearchResponse>>>;
    /**
     * Fetches information about the given provider item.
     * @param id The ID of the item to fetch information for.
     * @returns A promise that resolves to an array of provider information responses.
     */
    abstract info(id: ProviderID): Promise<Array<ProviderInfoResponse>>;
    /**
     * Fetches sources for the given item.
     * @param request The request to use when fetching sources.
     * @returns A promise that resolves to an array of provider source responses.
     */
    abstract sources(request: ProviderSourceRequest): Promise<Array<ProviderSourceResponse>>;
    /**
     * Fetches servers for the given item.
     * @param request The request to use when fetching servers.
     * @returns A promise that resolves to an array of provider server responses.
     */
    abstract servers(request: ProviderServerRequest): Promise<Array<ProviderServerResponse>>;
}
//# sourceMappingURL=index.d.ts.map