"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePlugin = void 0;
class BasePlugin {
    /**
     * Constructor for the BasePlugin.
     * Accepts a fetch function to be injected.
     *
     * @param fetch The fetch function to be used by the plugin.
     */
    constructor(fetch) {
        this.fetch = fetch;
    }
}
exports.BasePlugin = BasePlugin;
