# jstransformer-escape-html

[escape-html](http://npm.im/escape-html) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-escape-html/master.svg)](https://travis-ci.org/jstransformers/jstransformer-escape-html)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-escape-html/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-escape-html)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-escape-html/master.svg)](http://david-dm.org/jstransformers/jstransformer-escape-html)
[![NPM version](https://img.shields.io/npm/v/jstransformer-escape-html.svg)](https://www.npmjs.org/package/jstransformer-escape-html)

## Installation

    npm install jstransformer-escape-html

## API

```js
var escape = require('jstransformer')(require('jstransformer-escape-html'))

escape.render('foo & bar').body
//=> 'foo &amp; bar'
```

## License

MIT
