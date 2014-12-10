var popsicle = require('popsicle');
var expect   = require('chai').expect;
var prefix   = require('./');

describe('popsicle prefix', function () {
  it('should prefix all urls', function () {
    var req = popsicle('http://example.com')
      .use(prefix('/proxy'));

    expect(req.url).to.equal('/proxy/http://example.com');
  });
});
