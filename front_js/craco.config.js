
console.log(process.env.NODE_ENV)
module.exports = {
  plugins: [],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (env === 'production') {
        webpackConfig.devtool = 'source-map';
      } else {
        webpackConfig.devtool = 'eval-source-map';
      }

      return webpackConfig;
    }
  },
  babel: {
    plugins: [
      [
        'transform-remove-console',
        { exclude: ['info', 'error'] },
      ],
    ],
  },
};
