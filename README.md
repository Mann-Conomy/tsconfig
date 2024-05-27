# ts-config

A sharable TypeScript config for the Mann-Conomy Project.

[![npm version](https://img.shields.io/npm/v/@mann-conomy/tsconfig.svg?style=flat-square)](https://npmjs.com/package/@mann-conomy/tsconfig)
[![npm test](https://img.shields.io/github/actions/workflow/status/SnaBe/node-@mann-conomy/tsconfig/test.yml?logo=github&branch=main&style=flat-square)](https://github.com/SnaBe/node-@mann-conomy/tsconfig/actions/workflows/test.yml)
[![npm downloads](https://img.shields.io/npm/dm/@mann-conomy/tsconfig.svg?style=flat-square)](https://npmjs.com/package/@mann-conomy/tsconfig)
[![node version](https://img.shields.io/node/v/@mann-conomy/tsconfig?style=flat-square)](https://nodejs.org/en/about/releases/)
[![license](https://img.shields.io/npm/l/@mann-conomy/tsconfig.svg?style=flat-square)](https://github.com/SnaBe/node-@mann-conomy/tsconfig/blob/master/LICENSE)

## Installation

Using [npm](https://www.npmjs.com/package/@mann-conomy/tsconfig):

```bash
$ npm install --save-dev @mann-conomy/tsconfig
```

Using [yarn](https://yarnpkg.com/package/@mann-conomy/tsconfig):

```bash
$ yarn add --dev @mann-conomy/tsconfig
```

## Usage

```json
{
	"extends": "@mann-conomy/tsconfig",
	"compilerOptions": {
		"outDir": "dist"
	}
}
```

When targeting a [higher version of Node.js](https://nodejs.org/en/about/previous-releases), you can override the target with the corresponding [ECMAScript version](https://webreference.com/javascript/basics/versions/).

```json
{
	"extends": "@mann-conomy/tsconfig",
	"compilerOptions": {
		"outDir": "dist",
		"target": "ES2022"
	}
}
```

For reference, you can find the complete [tsconfig here](https://github.com/Mann-Conomy/tsconfig/blob/main/tsconfig.json).

## License

[MIT](LICENSE)

Copyright 2024, The Mann-Conomy Project
