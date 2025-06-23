# git-commit-pro

[![npm version](https://img.shields.io/npm/v/git-commit-pro.svg)](https://www.npmjs.com/package/git-commit-pro)
[![license](https://img.shields.io/npm/l/git-commit-pro.svg)](https://github.com/orianc/git-commit-pro/blob/main/LICENSE)
[![downloads](https://img.shields.io/npm/dm/git-commit-pro.svg)](https://www.npmjs.com/package/git-commit-pro)

[![Node](https://img.shields.io/node/v/git-commit-pro)](https://nodejs.org)
[![Types](https://img.shields.io/npm/types/git-commit-pro)](https://www.npmjs.com/package/git-commit-pro)
[![Install size](https://badgen.net/packagephobia/install/git-commit-pro)](https://packagephobia.com/result?p=git-commit-pro)
[![GitHub issues](https://img.shields.io/github/issues/orianc/git-commit-pro)](https://github.com/orianc/git-commit-pro/issues)
[![GitHub stars](https://img.shields.io/github/stars/orianc/git-commit-pro)](https://github.com/orianc/git-commit-pro/stargazers)

A CLI tool to write clear and conventional commit messages in seconds.

👉 [Watch demo video](./demo.mov)

## Features

- Supports [Conventional Commits](https://www.conventionalcommits.org)
- Interactive CLI prompt with message preview
- Optional `.gitcommitrc.json` config to customize allowed commit types
- Written in TypeScript with tests using vitest
- Works globally via npm i -g git-commit-pro

## Installation

```bash
$ npm install -g git-commit-pro
```

## Usage

### Basic

```bash
$ gitc
```

### Launch an interactive prompt :

- type choice (feat, fix, etc.)
- scope optionnel
- message

### Options

```bash
$ gitc -t feat -s api -m "add login endpoint"
$ gitc --dry-run # Show the message without commit
$ gitc --types # Show the description of each type
```

## Conventional Commit Types

| Type     | Description                                             |
| -------- | ------------------------------------------------------- |
| feat     | A new feature                                           |
| fix      | A bug fix                                               |
| docs     | Documentation only changes                              |
| style    | Code style change (formatting, no logic change)         |
| refactor | Code change that neither fixes a bug nor adds a feature |
| perf     | Code change that improves performance                   |
| test     | Adding or updating tests                                |
| build    | Build system or dependency changes                      |
| ci       | CI configuration changes                                |
| chore    | Maintenance changes                                     |
| revert   | Reverts a previous commit                               |

## Configuration : `.gitcommitrc.json`

You can create a `.gitcommitrc.json` file at the root of your project:

```json
{
  "commitTypes": ["feat", "fix", "docs", "ux"]
}
```

This will limit the available types to those listed here.

## Tests

```bash
$ npm run test
```

## Licence

MIT — © [Orian Cros](mailto:contact@oriancros.com)
