'use strict'

const {test, threw} = require('tap')
const {transform} = require('../../../lib/commit.js')

test('commit#transform', async (t) => {
  const commit = {
    commit: {
      'long': 'c644dd5aa62fa579bef2d793b6bc9d711f308a9b'
    , 'short': 'c644dd5'
    }
  , notes: [{
      title: '**BREAKING CHANGES**'
    , text: 'This will break things'
    }]
  , hash: 'c644dd5aa62fa579bef2d793b6bc9d711f308a9b'
  , type: 'feat'
  , scope: 'core'
  , header: 'feat(core): this is a simple commit'
  , references: [{
      issue: '1000'
    , raw: 'Ref: gh-1000'
    , prefix: 'gh-'
    }]
  }

  t.match(transform(commit), {
    type: 'Features'
  , shortHash: commit.commit.short
  , notes: [{
      title: '**BREAKING CHANGES**'
    , text: 'This will break things'
    }]
  , references: [{
      issue: '1000'
    , prefix: 'gh'
    }]
  })
}).catch(threw)
