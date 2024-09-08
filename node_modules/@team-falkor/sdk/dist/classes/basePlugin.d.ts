import { PluginMetadata } from "../@types";
export declare abstract class BasePlugin {
    abstract readonly metadata: PluginMetadata;
    /**
     * This method is responsible for initializing the plugin.
     * It is called when the plugin is registered with the plugin manager.
     *
     * @return {void} This function does not return anything.
     */
    abstract initialize(): void;
    /**
     * This method is responsible for cleaning up and destroying the plugin.
     * It is called when the plugin is unregistered from the plugin manager.
     *
     * @return {void} This function does not return anything.
     */
    abstract destroy(): void;
}
//# sourceMappingURL=basePlugin.d.ts.map