import { fetch as TauriFetch } from "@tauri-apps/plugin-http";
import { PluginMetadata } from "../@types";

export abstract class BasePlugin {
  // Fetch property to be used in derived classes
  protected readonly fetch: typeof TauriFetch;

  // Metadata for the plugin
  abstract readonly metadata: PluginMetadata;

  /**
   * Constructor for the BasePlugin.
   * Accepts a fetch function to be injected.
   *
   * @param fetch The fetch function to be used by the plugin.
   */
  constructor(fetch: typeof TauriFetch) {
    this.fetch = fetch;
  }

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
