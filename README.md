## release-config-npm

<!-- vim-markdown-toc GFM -->

* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Authors](#authors)

<!-- vim-markdown-toc -->

Shareable semantic-release configuration for internal projects with which to
publish npm packages to the internal github registry.
It extends the [baseline](../release-config-core/READEME.md) configuration.

The shareable configuration can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

## Installation

```shell
$ npm install --save-dev @codedependant/release-config-npm
```

## Usage
```json
{
  "release": {
    "branches": ["main"],
    "extends": ["@codedependant/release-config-npm"]
  }
}
```

## Features

* Parse un-merged commits to determine next release version
  * The version number is dictated by the commit with the highest semver level
* Increments the version of `package.json`
* Generates + updates Changelog
  * Includes links to commit sha
  * Organizes changes by type
* Publishes package to `npm.pkg.github.com`
* Commits standardized `release` commit back upstream


## Authors

* [**Eric Satterwhite**](mailto:esatterwhite@wi.rr.com) &lt;esatterwhite@wi.rr.com&gt;

