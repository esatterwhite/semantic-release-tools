'use strict'

const config = require('@codedependant/release-config-npm')
const remap = require('./lib/plugins/remap.js')

module.exports = {
  ...config
, npmPublish: false
, dockerLogin: true
, dockerRegistry: 'quay.io'
, dockerProject: 'esatterwhite'
, dockerTags: [
    '{major}-latest'
  , '{major}.{minor}-latest'
  , 'latest'
  , '{version}'
  ]
, dockerFile: 'Dockerfile'
, dockerArgs: {
    GITHUB_TOKEN: true
  , NPM_TOKEN: true
  , BUILD_DATE: '{now}'
  , BUILD_VERSION: '{git_tag}'
  , VCR_REF: '{pkg.repository.url}'
  , REPO: '{pkg.name}'
  }
, plugins: remap(config.plugins)
}
