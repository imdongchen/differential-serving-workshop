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
1. In `index.js`, add `import '@babel/polyfill'`
2. Rebuild js. `npm run build`
3. Refresh in IE. Everything should be working!
4. Observe size of the output js. `npm run analyze`
5. To fix the bloating size issue, add `useBuiltIns: usage` in `babel.config.js`
