'use strict'

const {test, threw} = require('tap')
const config = require('../../index.js')
const constants = require('../../lib/constants.js')

function sortByType(a, b) {
  return a.type < b.type ? -1 : 1
}

test('release-config-logdna', async (t) => {
  const plugins = config.plugins.map((plugin) => {
    return plugin[0]
  })

  t.strictEqual(config.npmPublish, false, 'npmPublish = false by default')
  t.match(config.parserOpts, {
    noteKeywords: ['BREAKING CHANGES', 'BREAKING CHANGE', 'BREAKING']
  , headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/
  , breakingHeaderPattern: constants.BREAKING_HEADER_REGEX
  , headerCorrespondence: ['type', 'scope', 'subject']
  , issuePrefixes: ['#', 'gh-']
  , changelogTitle: '## Changelog'
  , referenceActions: [
      'close', 'closes', 'closed', 'fix'
    , 'fixes', 'fixed', 'resolve', 'resolves'
    , 'resolved', 'ref'
    ]
  }, 'default commit parser options')

  t.deepEqual(config.releaseRules.sort(sortByType), [
    {breaking: true, release: 'major'}
  , {revert: true, release: 'patch'}
  , {type: 'build', release: 'patch'}
  , {type: 'ci', release: 'patch'}
  , {type: 'chore', release: 'patch'}
  , {type: 'refactor', release: 'patch'}
  , {type: 'test', release: 'patch'}
  , {type: 'doc', release: 'patch'}
  , {type: 'fix', release: 'patch'}
  , {type: 'lib', release: 'patch'}
  , {type: 'perf', release: 'minor'}
  , {type: 'style', release: 'patch'}
  ].sort(sortByType), 'expected default release rules')

  t.deepEqual(plugins, [
    '@semantic-release/commit-analyzer'
  , '@semantic-release/release-notes-generator'
  , '@semantic-release/changelog'
  , '@semantic-release/npm'
  , '@semantic-release/git'
  , '@semantic-release/github'
  ], 'expected default plugins')
}).catch(threw)
