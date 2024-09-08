import type {
  PluginMetadata,
  ProviderID,
  ProviderInfoResponse,
  ProviderPagination,
  ProviderSearchResponse,
  ProviderSourceRequest,
  ProviderSourceResponse,
  SearchQuery,
} from "@team-falkor/sdk";

const BaseProvider = window.FalkorSDK.BaseProvider;
const PluginType = window.FalkorSDK.PluginType;
const fetch = window.FalkorFetch;

export default class PluginTemplate extends BaseProvider {
  metadata: PluginMetadata = {
    name: "Plugin Template",
    version: "1.0.0",
    type: PluginType.provider,
  };

  search(
    query: SearchQuery
  ): Promise<Array<ProviderPagination<ProviderSearchResponse>>> {
    const returnData: ProviderPagination<ProviderSearchResponse> = {
      page: 1,
      items: [
        {
          id: "1",
          title: "Plugin Template",
          image: "https://example.com",
          url: "https://example.com",
        },
      ],
    };

    return Promise.resolve([returnData]);
  }

  info(id: ProviderID): Promise<Array<ProviderInfoResponse>> {
    const returnData: ProviderInfoResponse = {
      id: "1",
      name: "Plugin Template",
      description: "Plugin Template",
    };

    return Promise.resolve([returnData]);
  }

  sources(
    request: ProviderSourceRequest
  ): Promise<Array<ProviderSourceResponse>> {
    throw new Error("Method not implemented.");
  }

  initialize(): void {
    throw new Error("Method not implemented.");
  }

  destroy(): void {
    throw new Error("Method not implemented.");
  }
}
