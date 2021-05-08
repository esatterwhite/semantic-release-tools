'use strict'

module.exports = remap

function remap(plugins) {
  const remapped = []

  for (const [name, config] of plugins) {
    if (name === '@semantic-release/npm') {
      remapped.push(
        [name, config]
      , ['@codedependant/semantic-release-docker', null]
      )
      continue
    }

    remapped.push([name, config])
  }

  return remapped
}
