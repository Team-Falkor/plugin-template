var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// index.ts
var BaseProvider = window.FalkorSDK.BaseProvider;
var PluginType = window.FalkorSDK.PluginType;
var PluginTemplate = class extends BaseProvider {
  constructor() {
    super(...arguments);
    __publicField(this, "metadata", {
      name: "Plugin Template",
      version: "1.0.0",
      type: PluginType.provider
    });
  }
  search(query) {
    const returnData = {
      page: 1,
      items: [
        {
          id: "1",
          title: "Plugin Template",
          image: "https://example.com",
          url: "https://example.com"
        }
      ]
    };
    return Promise.resolve([returnData]);
  }
  info(id) {
    const returnData = {
      id: "1",
      name: "Plugin Template",
      description: "Plugin Template"
    };
    return Promise.resolve([returnData]);
  }
  sources(request) {
    const returnData = {
      id: "1",
      name: "Plugin Template",
      description: "Plugin Template",
      servers: [
        {
          id: "1",
          name: "Plugin Template",
          description: "Plugin Template"
        }
      ]
    };
    return Promise.resolve([returnData]);
  }
  servers(request) {
    throw new Error("Method not implemented.");
  }
  initialize() {
    throw new Error("Method not implemented.");
  }
  destroy() {
    throw new Error("Method not implemented.");
  }
};
export {
  PluginTemplate as default
};
