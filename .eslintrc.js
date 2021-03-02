'use strict'

module.exports = {
  'root': true
, 'ignorePatterns': [
    'node_modules/'
  , 'coverage/'
  ]
, 'extends': 'codedependant'
, 'parserOptions': {
    ecmaVersion: 2019
  , type: 'script'
  }
, 'rules': {
    'sensible/check-require': [2, 'always', {
      root: __dirname
    }]
  , 'no-unused-vars': [2, {
      vars: 'all'
    , args: 'none'
    , varsIgnorePattern: '^_$'
    }]
  }
}
