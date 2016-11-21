var register = require('babel-core/register');

register({
    presets: ['es2015', 'stage-3'],
    plugins: [
    ["transform-runtime", {
      polyfill: false,
      regenerator: true
    }]
  ]
});

require('./app.js');
