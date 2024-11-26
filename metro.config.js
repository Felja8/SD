const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Add 'db' to assetExts
  config.resolver.assetExts.push("db");

  // Add the '@' alias
  config.resolver.alias = {
    "@": __dirname,
  };

  return config;
})();
