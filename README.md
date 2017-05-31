# Popsicle Prefix

[![NPM version](https://img.shields.io/npm/v/popsicle-prefix.svg?style=flat)](https://npmjs.org/package/popsicle-prefix)
[![NPM downloads](https://img.shields.io/npm/dm/popsicle-prefix.svg?style=flat)](https://npmjs.org/package/popsicle-prefix)
[![Build status](https://img.shields.io/travis/blakeembrey/popsicle-prefix.svg?style=flat)](https://travis-ci.org/blakeembrey/popsicle-prefix)
[![Test coverage](https://img.shields.io/coveralls/blakeembrey/popsicle-prefix.svg?style=flat)](https://coveralls.io/r/blakeembrey/popsicle-prefix?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/popsicle-prefix.svg)](https://greenkeeper.io/)

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
