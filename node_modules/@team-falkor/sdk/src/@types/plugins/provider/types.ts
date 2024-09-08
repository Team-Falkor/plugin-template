export type ProviderID = string;

export type ProviderPagination<T> = {
  page: number;
  total_pages?: number;
  next_page?: number;
  last_page?: number;
  items: Array<T>;
};

export type ProviderInfoResponse = {
  id: string;
  name: string;
  description?: string;
};
