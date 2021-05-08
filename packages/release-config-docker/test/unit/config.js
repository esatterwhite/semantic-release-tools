'use strict'

const {test, threw} = require('tap')
const base = require('@codedependant/release-config-npm')
const config = require('../../index.js')

function sortByType(a, b) {
  return a.type < b.type ? -1 : 1
}

test('release-config-docker', async (t) => {
  t.type(config, 'object', 'package exports an object')
  t.equal(config.npmPublish, false, 'npmPublish = false by default')
  t.equal(config.dockerLogin, true, 'dockerLogin = false by default')
  const plugins = config.plugins.map((plugin) => {
    return plugin[0]
  })

  t.same(config.parserOpts, base.parserOpts, 'default commit parser options')

  t.same(
    config.releaseRules.sort(sortByType)
  , base.releaseRules.sort(sortByType)
  , 'expected default release rules'
  )

  t.match(config, {
    dockerLogin: true
  , npmPublish: false
  , dockerRegistry: 'quay.io'
  , dockerProject: 'esatterwhite'
  , dockerTags: ['{major}-latest', '{major}.{minor}-latest', 'latest', '{version}']
  , dockerFile: 'Dockerfile'
  , dockerArgs: {
      NPM_TOKEN: true
    , GITHUB_TOKEN: true
    , BUILD_DATE: '{now}'
    , BUILD_VERSION: '{git_tag}'
    , VCR_REF: '{pkg.repository.url}'
    , REPO: '{pkg.name}'
    }
  }, 'expected docker config')

  t.same(plugins, [
    '@semantic-release/commit-analyzer'
  , '@semantic-release/release-notes-generator'
  , '@semantic-release/changelog'
  , '@semantic-release/npm'
  , '@codedependant/semantic-release-docker'
  , '@semantic-release/git'
  , '@semantic-release/github'
  ], 'expected default plugins')
}).catch(threw)
