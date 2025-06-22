# git-commit-pro

A CLI tool to write clear and conventional commit messages in seconds.

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
