'use strict'

const {test, threw} = require('tap')
const {typeOf} = require('../../../lib/commit.js')

test('commit#typeOf', async (t) => {
  t.strictEqual(
    typeOf('build')
  , 'Build System'
  , 'build -> Build System'
  )

  t.strictEqual(
    typeOf('chore')
  , 'Chores'
  , 'chore -> Chores'
  )

  t.strictEqual(
    typeOf('ci')
  , 'Continuous Integration'
  , 'ci -> Continuous Integration'
  )

  t.strictEqual(
    typeOf('doc')
  , 'Documentation'
  , 'doc -> Documentation'
  )

  t.strictEqual(
    typeOf('feat')
  , 'Features'
  , 'feat -> Features'
  )

  t.strictEqual(
    typeOf('fix')
  , 'Bug Fixes'
  , 'fix -> Bug Fixes'
  )

  t.strictEqual(
    typeOf('lint')
  , 'Lint'
  , 'lint -> Lint'
  )

  t.strictEqual(
    typeOf('perf')
  , 'Performance Improvements'
  , 'perf -> Performance Improvements'
  )

  t.strictEqual(
    typeOf('refactor')
  , 'Code Refactoring'
  , 'refactor -> Code Refactoring'
  )

  t.strictEqual(
    typeOf('revert')
  , 'Reverts'
  , 'revert -> Reverts'
  )

  t.strictEqual(
    typeOf('style')
  , 'Style'
  , 'style -> Style'
  )

  t.strictEqual(
    typeOf('test')
  , 'Tests'
  , 'test -> Tests'
  )

  t.strictEqual(
    typeOf('unknown')
  , 'Miscellaneous'
  , 'unknown -> Miscellaneous'
  )

  t.strictEqual(
    typeOf('foobar')
  , 'Miscellaneous'
  , 'foobar -> Miscellaneous'
  )
}).catch(threw)
