const { name } = require('./package.json');

module.exports = {
  webpack: function override(config, env) {
    // config.entry = config.entry.filter(
    //     (e) => !e.includes('webpackHotDevClient')
    // );
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    // config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`; // 该工程为webpack5配置，jsonpFunction已更名为'chunkLoadingGlobal'
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};
