module.exports = {
  plugins: [],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      console.log(env)
      if (env !== 'production') {
        webpackConfig.devtool = 'source-map';
      } else {
        console.log('hi')
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
