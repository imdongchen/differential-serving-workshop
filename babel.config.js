module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ['ie 10', 'ios 7'],
        },
        useBuiltIns: 'usage',
      }
    ]
  ]
};
