import { ProviderServerLink } from "./server";
import type { ProviderID } from "./types";
export type ProviderSourceRequest = {
    item_id?: ProviderID;
    game_id: string;
    game_name: string;
};
export type ProviderSourceResponse = {
    id: string;
    name: string;
    description?: string;
    sources: Array<ProviderServerLink>;
};
//# sourceMappingURL=source.d.ts.map