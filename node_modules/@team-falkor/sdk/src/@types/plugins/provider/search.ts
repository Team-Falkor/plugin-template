export type SearchQuery = {
  query: string;
  page: number;
};

export type ProviderSearchResponse = {
  title: string;
  id: string;
  image?: string;
  url?: string;
};
