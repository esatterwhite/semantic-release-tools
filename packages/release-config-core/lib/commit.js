'use strict'

const COMMIT_TYPES = new Map([
  ['build', 'Build System']
, ['chore', 'Chores']
, ['ci', 'Continuous Integration']
, ['doc', 'Documentation']
, ['default', 'Miscellaneous']
, ['feat', 'Features']
, ['fix', 'Bug Fixes']
, ['lint', 'Lint']
, ['perf', 'Performance Improvements']
, ['refactor', 'Code Refactoring']
, ['revert', 'Reverts']
, ['style', 'Style']
, ['test', 'Tests']
])

module.exports = {
  typeOf
, transform
}

function typeOf(type) {
  return COMMIT_TYPES.get(type) || COMMIT_TYPES.get('default')
}

function transform(commit) {
  commit.type = typeOf(commit.type)
  commit.shortHash = commit.hash.substring(0, 7)

  for (const note of commit.notes) {
    note.title = '**BREAKING CHANGES**'
  }
  return commit
}
