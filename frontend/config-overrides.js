import webpack from "webpack";
// eslint-disable-next-line no-undef
module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    // eslint-disable-next-line no-undef
    crypto: require.resolve("crypto-browserify"),
    // eslint-disable-next-line no-undef
    stream: require.resolve("stream-browserify"),
    // eslint-disable-next-line no-undef
    assert: require.resolve("assert"),
    // eslint-disable-next-line no-undef
    http: require.resolve("stream-http"),
    // eslint-disable-next-line no-undef
    https: require.resolve("https-browserify"),
    // eslint-disable-next-line no-undef
    os: require.resolve("os-browserify"),
    // eslint-disable-next-line no-undef
    url: require.resolve("url"),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  return config;
};
