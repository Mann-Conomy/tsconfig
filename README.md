# ts-config

A sharable TypeScript config for the Mann-Conomy Project.

[![npm version](https://img.shields.io/npm/v/%40mann-conomy%2Ftsconfig?style=flat-square&logo=npm)](https://npmjs.com/package/@mann-conomy/tsconfig)
[![npm downloads](https://img.shields.io/npm/d18m/%40mann-conomy%2Ftsconfig?style=flat-square&logo=npm)](https://npmjs.com/package/@mann-conomy/tsconfig)
[![Node.js version](https://img.shields.io/node/v/%40mann-conomy%2Ftsconfig?style=flat-square&logo=nodedotjs)](https://nodejs.org/en/about/releases/)
[![GitHub actions](https://img.shields.io/github/actions/workflow/status/Mann-Conomy/tsconfig/test.yml?branch=main&style=flat-square&logo=github&label=test)](https://github.com/Mann-Conomy/tsconfig/blob/main/.github/workflows/test.yml)
[![GitHub license](https://img.shields.io/github/license/Mann-Conomy/tsconfig?style=flat-square&logo=github)](https://github.com/Mann-Conomy/tsconfig/blob/main/LICENSE)

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
