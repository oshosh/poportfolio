module.exports = {
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: 3,
          // Other options such as targets, modules, etc. can also be specified here.
        },
      ],
    ],
  },
};