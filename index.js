'use strict'

const templates = require('./lib/templates/index.js')
const commit = require('./lib/commit.js')
const constants = require('./lib/constants.js')
const now = new Date()
const year = now.getFullYear()
const day = String(now.getDate()).padStart(2, '0')
const month = String(now.getMonth() + 1).padStart(2, '0')

module.exports = {
  npmPublish: false
, parserOpts: {
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
  }
, writerOpts: {
    transform: commit.transform
  , commitPartial: templates.commit
  }
, releaseRules: [
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
  ]
, plugins: [
    ['@semantic-release/commit-analyzer', null]
  , ['@semantic-release/release-notes-generator', null]
  , ['@semantic-release/changelog', null]
  , ['@semantic-release/npm', null]
  , ['@semantic-release/git', {
      assets: ['package.json', 'CHANGELOG.md', '!**/node_modules/**']
    , message: `release: ${year}-${month}-${day}, `
        + 'Version <%= nextRelease.version %> [skip ci]'
    }]
  , ['@semantic-release/github', null]
  ]
}
