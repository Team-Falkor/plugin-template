import {
  ProviderInfoResponse,
  ProviderPagination,
  ProviderSearchResponse,
  ProviderSourceRequest,
  ProviderSourceResponse,
  SearchQuery,
} from "../../@types";
import { BasePlugin } from "../basePlugin";

export abstract class BaseProvider extends BasePlugin {
  /**
   * Searches the provider for results matching the given query.
   * @param query The search query to use.
   * @returns A promise that resolves to an array of paginated search results.
   */
  abstract search(
    query: SearchQuery
  ): Promise<Array<ProviderPagination<ProviderSearchResponse>>>;

  /**
   * Fetches information about the given provider item.
   * @param name The name of the item to fetch information for.
   * @returns A promise that resolves to an array of provider information responses.
   *
   * some mapping might be needed to get from title -> correct item from site
   */
  abstract info(name: string): Promise<Array<ProviderInfoResponse>>;

  /**
   * Fetches sources for the given item.
   * @param request The request to use when fetching sources.
   * @returns A promise that resolves to an array of provider source responses
   * .
   * some mapping might be needed to get from title -> correct item from site
   */
  abstract sources(
    request: ProviderSourceRequest
  ): Promise<Array<ProviderSourceResponse>>;
}
