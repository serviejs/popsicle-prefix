# Popsicle Prefix

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Prefix all Popsicle HTTP requests.

## Installation

```bash
npm install popsicle-prefix --save
```

## Usage

```javascript
var request = require('popsicle');
var prefix  = require('popsicle-prefix');

request('/users.json')
  .use(prefix('http://example.com'));
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/popsicle-prefix.svg?style=flat
[npm-url]: https://npmjs.org/package/popsicle-prefix
[travis-image]: https://img.shields.io/travis/blakeembrey/popsicle-prefix.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/popsicle-prefix
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/popsicle-prefix.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/popsicle-prefix?branch=master
