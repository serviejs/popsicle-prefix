# Popsicle Prefix

[![NPM version](https://img.shields.io/npm/v/popsicle-prefix.svg?style=flat)](https://npmjs.org/package/popsicle-prefix)
[![NPM downloads](https://img.shields.io/npm/dm/popsicle-prefix.svg?style=flat)](https://npmjs.org/package/popsicle-prefix)
[![Build status](https://img.shields.io/travis/serviejs/popsicle-prefix.svg?style=flat)](https://travis-ci.org/serviejs/popsicle-prefix)
[![Test coverage](https://img.shields.io/coveralls/serviejs/popsicle-prefix.svg?style=flat)](https://coveralls.io/r/serviejs/popsicle-prefix?branch=master)

> Prefix all Popsicle HTTP requests.

## Installation

```
npm install popsicle-prefix --save
```

## Usage

```js
import { middleware, toFetch } from "popsicle";
import { Request } from "popsicle/dist/node";
import { auth } from "popsicle-prefix";

const fetch = toFetch([prefix("http://example.com"), middleware], Request);

fetch("/users.json"); //=> Request("http://example.com/users.json")
fetch("http://foo.com/users.json"); //=> Request("http://example.com/http://foo.com/users.json")
```

## License

MIT
