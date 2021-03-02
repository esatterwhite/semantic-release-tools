'use strict'

const {test, threw} = require('tap')
const constants = require('../../lib/constants.js')

test('constants', async (t) => {
  t.strictEqual(Object.keys(constants).length, 1, 'expected number of constants')

  t.match(constants, {
    BREAKING_HEADER_REGEX: RegExp
  })

  t.test('BREAKING_HEADER_REGEX', async (t) => {
    const {BREAKING_HEADER_REGEX} = constants
    t.test('breaking change w/o scope', async (t) => {
      const match = BREAKING_HEADER_REGEX.exec('test!: this is breaking')
      const [_, type, scope, subject] = match
      t.strictEqual(type, 'test', 'commit type')
      t.strictEqual(scope, undefined, 'commit scope')
      t.strictEqual(subject, 'this is breaking', 'commit subject')
    })
    t.test('breaking change w/ scope', async (t) => {
      const match = BREAKING_HEADER_REGEX.exec('doc(readme)!: this is breaking')
      const [_, type, scope, subject] = match
      t.strictEqual(type, 'doc', 'commit type')
      t.strictEqual(scope, 'readme', 'commit scope')
      t.strictEqual(subject, 'this is breaking', 'commit subject')
    })
    t.test('non-breaking change', async (t) => {
      const match = BREAKING_HEADER_REGEX.exec('doc(readme): this is breaking')
      t.notOk(match, 'no match found')
    })
  })
}).catch(threw)
