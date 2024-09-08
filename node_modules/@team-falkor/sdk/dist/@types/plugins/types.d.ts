export declare enum PluginType {
    "provider" = 0
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
//# sourceMappingURL=types.d.ts.map