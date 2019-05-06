function getPresets(env) {
  const isModern = env === 'modern'
  return [
    [
      "@babel/preset-env",
      {
        targets: {
          ...!isModern && {browsers: ['ie 10', 'ios 7']},
          ...isModern && {esmodules: true},
        },
        useBuiltIns: 'usage',
        debug: true,
      }
    ]
  ]
}
module.exports = {
  env: {
    'modern': { presets: getPresets('modern') },
    'legacy': { presets: getPresets('legacy') }
  }
};
