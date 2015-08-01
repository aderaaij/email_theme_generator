var config = require('./')

module.exports = {
  source: config.buildPath+'**/*.html',
  dest: config.buildPath
}