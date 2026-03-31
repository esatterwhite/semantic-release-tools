'use strict'

const {test, threw} = require('tap')
const {typeOf} = require('../../../lib/commit.js')

test('commit#typeOf', async (t) => {
  t.same(
    typeOf('build')
  , 'Build System'
  , 'build -> Build System'
  )

  t.same(
    typeOf('chore')
  , 'Chores'
  , 'chore -> Chores'
  )

  t.same(
    typeOf('ci')
  , 'Continuous Integration'
  , 'ci -> Continuous Integration'
  )

  t.same(
    typeOf('doc')
  , 'Documentation'
  , 'doc -> Documentation'
  )

  t.same(
    typeOf('feat')
  , 'Features'
  , 'feat -> Features'
  )

  t.same(
    typeOf('fix')
  , 'Bug Fixes'
  , 'fix -> Bug Fixes'
  )

  t.same(
    typeOf('lint')
  , 'Lint'
  , 'lint -> Lint'
  )

  t.same(
    typeOf('perf')
  , 'Performance Improvements'
  , 'perf -> Performance Improvements'
  )

  t.same(
    typeOf('refactor')
  , 'Code Refactoring'
  , 'refactor -> Code Refactoring'
  )

  t.same(
    typeOf('revert')
  , 'Reverts'
  , 'revert -> Reverts'
  )

  t.same(
    typeOf('style')
  , 'Style'
  , 'style -> Style'
  )

  t.same(
    typeOf('test')
  , 'Tests'
  , 'test -> Tests'
  )

  t.same(
    typeOf('unknown')
  , 'Miscellaneous'
  , 'unknown -> Miscellaneous'
  )

  t.same(
    typeOf('foobar')
  , 'Miscellaneous'
  , 'foobar -> Miscellaneous'
  )
}).catch(threw)
