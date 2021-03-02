'use strict'

const config = require('@codedependant/release-config-core')
const remap = require('./lib/plugins/remap.js')

module.exports = {
  ...config
, npmPublish: true
, plugins: remap(config.plugins)
}
