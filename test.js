/* global describe, it */

require('es6-promise').polyfill()

var popsicle = require('popsicle')
var nock = require('nock')
var expect = require('chai').expect
var prefix = require('./')

describe('popsicle prefix', function () {
  nock('http://prefix.com')
    .get('/http://example.com/')
    .reply(200)

  it('should prefix all urls', function () {
    return popsicle.get('http://example.com')
      .use(prefix('http://prefix.com'))
      .then(function (res) {
        expect(res.url).to.equal('http://prefix.com/http://example.com/')
      })
  })
})
