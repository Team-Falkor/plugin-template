import { PluginMetadata } from "../@types";

export abstract class BasePlugin {
  // Metadata for the plugin
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
