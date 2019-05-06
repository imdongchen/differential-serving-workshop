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
1. Build js. `npm run build`
2. Open app in Chrome. `npm start`. Everything should be working.
3. Open in IE. You should see `syntax error` message because IE does not support `Array.includes`
