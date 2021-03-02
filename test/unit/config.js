'use strict'

const {test, threw} = require('tap')
const base = require('@codedependant/release-config-core')
const config = require('../../index.js')

function sortByType(a, b) {
  return a.type < b.type ? -1 : 1
}

test('release-config-npm', async (t) => {
  t.type(config, 'object', 'package exports an object')
  t.strictEqual(config.npmPublish, true, 'npmPublish = true by default')
  const plugins = config.plugins.map((plugin) => {
    return plugin[0]
  })

  t.deepEqual(
    config.parserOpts
  , base.parserOpts
  , 'default commit parser options'
  )

  t.deepEqual(
    config.releaseRules.sort(sortByType)
  , base.releaseRules.sort(sortByType)
  , 'expected default release rules'
  )

  t.deepEqual(plugins, [
    '@semantic-release/commit-analyzer'
  , '@semantic-release/release-notes-generator'
  , '@semantic-release/changelog'
  , '@semantic-release/npm'
  , '@semantic-release/git'
  , '@semantic-release/github'
  ], 'expected default plugins')

  const [github] = config.plugins.filter((plugin) => {
    return plugin[0] === '@semantic-release/github'
  })
  t.deepEqual(github[1], {
    assets: 'dist/*.tgz'
  , tarballDir: 'dist'
  }, 'github assets pickup dist/*.tgz')
}).catch(threw)
