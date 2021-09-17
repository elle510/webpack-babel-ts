module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        shippedProposals: true,
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    '@babel/plugin-transform-async-to-generator',
    // [
    //   '@babel/plugin-transform-runtime',
    //   {
    //     absoluteRuntime: false,
    //     corejs: false,
    //     helpers: true,
    //     regenerator: true,
    //     // useESModules: true,
    //     // version: '7.0.0-beta.0',
    //   },
    // ],
    '@babel/plugin-syntax-dynamic-import',
  ],
  comments: false,
};
