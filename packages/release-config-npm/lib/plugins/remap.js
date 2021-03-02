'use strict'

module.exports = remap

function remap(plugins) {
  const remapped = []

  for (const [name, config] of plugins) {
    if (name === '@semantic-release/github') {
      remapped.push([
        '@semantic-release/github', {
          ...(config || {})
        , tarballDir: 'dist'
        , assets: 'dist/*.tgz'
        }
      ])
      continue
    }

    remapped.push([name, config])
  }

  return remapped
}
