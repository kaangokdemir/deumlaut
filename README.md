# Deumlaut

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![npm package](https://img.shields.io/npm/v/deumlaut.svg)](https://www.npmjs.org/package/deumlaut) [![downloads](https://img.shields.io/npm/dt/deumlaut.svg)](https://www.npmjs.com/package/deumlaut) [![size](https://img.shields.io/bundlephobia/minzip/deumlaut)](https://www.npmjs.com/package/deumlaut)

> A lightweight zero dependency libray to replace [Umlauts (Diacritics)](<https://en.wikipedia.org/wiki/Diaeresis_(diacritic)/>) from your strings.

<img src="https://raw.githubusercontent.com/kaangokdemir/deumlaut/master/static/logo.jpeg" width="200" height="200">

```bash
npm i deumlaut

# or

yarn deumlaut
```

## Usage

```javascript
const { deumlaut } = require('deumlaut')

//  or

import { deumlaut } from 'deumlaut'

deumlaut('Tschüss') // Tschuess
deumlaut('Çarşı') // Carsi
```

## Parameters

| Position | Name    | Description                                   | Required | Type                     |
| -------- | ------- | --------------------------------------------- | -------- | ------------------------ |
| 1        | Text    | Text to remove diacritics                     | `true`   | `string`                 |
| 2        | Locale  | Your language to parse                        | `false`  | `'de'` or `'tr'`         |
| 3        | Options | Deumlaut options. See Options for the details | `false`  | `DeumlautOptions` object |

## Options

| Name         | Type      | Default Value | Description                            |
| ------------ | --------- | ------------- | -------------------------------------- |
| `capitalize` | `boolean` | `false`       | Capitalizes the diacritic equilavants. |

## Supported Languages

- Currently only German and Turkish are supported.

## Contributing

Please check [CONTRIBUTING.md](https://raw.githubusercontent.com/kaangokdemir/deumlaut/master/CONTRIBUTING.md)

## TODO

- Improve Documentation
- Add More Unit tests
- Improve support for other languages

## Contributors

Kaan Gökdemir - Author ([@kaangokdemir](https://linkedin.com/kaan-gokdemir)) - [kaangokdemir.com](https://kaangokdemir.com)

## License

[MIT](https://opensource.org/licenses/MIT)
