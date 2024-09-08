export enum PluginType {
  "provider",
}

export interface PluginMetadata {
  name: string;
  version: string;
  type: PluginType;
  creator?: {
    name: string;
    url?: string;
    image?: string;
    github?: {
      username: string;
      url?: string;
    };
  };
}
