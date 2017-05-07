# Popsicle Prefix

[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/popsicle-prefix.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Prefix all Popsicle HTTP requests.

## Installation

```
npm install popsicle-prefix --save
```

## Usage

```javascript
var request = require('popsicle')
var prefix = require('popsicle-prefix')

request('/users.json')
  .use(prefix('http://example.com'))
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/popsicle-prefix.svg?style=flat
[npm-url]: https://npmjs.org/package/popsicle-prefix
[downloads-image]: https://img.shields.io/npm/dm/popsicle-prefix.svg?style=flat
[downloads-url]: https://npmjs.org/package/popsicle-prefix
[travis-image]: https://img.shields.io/travis/blakeembrey/popsicle-prefix.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/popsicle-prefix
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/popsicle-prefix.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/popsicle-prefix?branch=master
