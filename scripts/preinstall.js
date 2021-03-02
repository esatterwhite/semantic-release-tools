#!/usr/bin/env node
'use strict'

const agent = process.env.npm_config_user_agent

if (isPNPM(agent)) return

console.log(`
#############     NOTICE      #################
This project uses pnpm as its main package manager.
Use "pnpm install" for installation in this project.
If you don't have pnpm, install it via "npm i -g pnpm".
For more details, go to https://pnpm.js.org/
#############   END NOTICE    ##################
`)
process.exit(1)

function isPNPM(agent) {
  const {name} = parse(agent)
  return name === 'pnpm'
}

function parse(ua) {
  const str = ua.split(' ')[0]
  const separatorPos = str.lastIndexOf('/')
  return {
    name: str.substr(0, separatorPos)
  , version: str.substr(separatorPos + 1)
  }
}
