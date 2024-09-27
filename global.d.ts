import * as FalkorSDK from "@team-falkor/sdk";

declare global {
  interface Window {
    FalkorSDK: typeof FalkorSDK;
  }
}

export {};
