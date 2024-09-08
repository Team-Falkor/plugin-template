export type ProviderServer = {
  id: string;
  name: string;
  description?: string;
};

export type ProviderServerResponse = {
  links: Array<ProviderServerLink>;
  headers?: Record<string, string>;
};

export type ProviderServerLink = {
  id: string;
  url: string;
  type: "ddl" | "torrent" | "magnet";
  headers?: Record<string, string>;
};

export type ProviderServerRequest = {
  item_id: string;
  game_name: string;
  game_id?: string;
  source_id?: string;
  server_id?: string;
};
