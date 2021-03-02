## semantic-release-tools

Monorepo containing various packages specific to [semantic-release][] configurations
and plugins

<!-- vim-markdown-toc GFM -->

* [Installation](#installation)
* [Packages](#packages)
* [Feature Sets](#feature-sets)
* [Testing](#testing)
* [Authors](#authors)

<!-- vim-markdown-toc -->

## Installation

This project is managed with the [pnpm][] package manager. It allows for local testing and
development of local packages without having to publish them. It additionally allows for centralized
dependency management while maintaining the strict isolation rules of a conceptual package.
[pnpm][] is only a development time dependency. Published packages do not required it to be used.

```shell
$ npm install -g pnpm@5
```

[pnpm][] operates on the concept of `workspaces`. Most all commands can be passed the `--recursive` or `-r`
flag to run the command against all packages in every workspace. To install all dependencies
of all packages in this repo you can run a single install command

```shell
$ pnpm install -r
```

## Packages

* [semantic-release-core](./packages/semantic-release-core) - the baseline configuration for defining common release rules,
  changelog formatting, release commits, etc, that can be applied to all projects independent of their release workflow
* [release-config-npm](./packages/release-config-npm) - Configuration for publishing npm packages and associating a tarball to
  the final github release

## Feature Sets

| package                                                       | changelog support  | auto versioning    | npm publish        | docker publish     | github release     |
|---------------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| [release-config-core](./packages/release-config-core)     | :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                | :heavy_check_mark: |
| [release-config-npm](./packages/release-config-npm)           | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                | :heavy_check_mark: |

## Testing

All testing is isolated in each respective package and run in isolation.
All tests can be run in parallel with a recursive [pnpm][] command

```sh
$ pnpm run -r test
```

## Authors

* [**Eric Satterwhite**](mailto:esatterwhite@wi.rr..com) &lt;esatterwhite@wi.rr.com&gt;


[pnpm]: https://pnpmjs.org
[semantic-release]: https://semantic-release.gitbook.io/semantic-release
