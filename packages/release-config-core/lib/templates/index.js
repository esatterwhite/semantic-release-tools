'use strict'

const path = require('path')
const fs = require('fs')

module.exports = {
  commit: fs.readFileSync(path.join(__dirname, 'commit.hbs'), 'utf8')
}
