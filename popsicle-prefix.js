module.exports = prefixPopsicle

function prefixPopsicle (prefix) {
  prefix = prefix.replace(/\/$/, '')

  return function (request, next) {
    request.url = prefix + '/' + request.url.replace(/^\//, '')

    return next()
  }
}
