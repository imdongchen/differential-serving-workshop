# Differential serving workshop - step 1. Setup

See [decks](https://slides.com/dongchen-1/differential-serving)

The app includes a basic setup of webpack and babel. A few useful commands:

- `npm run build`: build js 
- `npm start`: open the web page (you need to build first)
- `npm run analyze`: visualize js bundle

`index.js` is main javascript file, and it contains 
- ES2015+ syntax: object deconstruction `...`
- ES2015+ function: `Array.includes`

In `babel.config.js`, we have specified `targets` to IE10, so syntax will be transpiled by `@babel/preset-env`. But we need to provide polyfill!

Follow these steps:
1. Create a preset function in `babel.config.js`

```javascript
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
```

2. Add two babel env in `babel.config.js`

```javascript
module.exports = {
  env: {
    'modern': { presets: getPresets('modern') },
    'legacy': { presets: getPresets('legacy') },
  },
}
```

3. Pass down babel env to `babel-loader` using `babelOptions.envName` in `webpack.config.js` 
4. Create a config function in `webpack.config.js` and export an array of configs.
5. Build JS and you should see two js bundles. 
6. Include these two js bundles in `index.html` with `type=module` and `nomodule`
7. You are done!
