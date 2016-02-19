# pkg-json-git-repo [![npm version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![Coverage status][coveralls-image]][coveralls-url] [![Dependency Status][gemnasium-image]][gemnasium-url]

> Get the Git repo out of a package.json.

## Installation

```sh
npm install pkg-json-git-repo
```

## Usage

```js
const pkgJsonGitRepo = require('pkg-json-git-repo');

pkgJsonGitRepo('/path/to/package.json');
// git+https://github.com/alefteris/pkg-json-git-repo.git
```

## License

[MIT](http://opensource.org/licenses/mit-license.php)

[npm-image]: https://img.shields.io/npm/v/pkg-json-git-repo.svg
[npm-url]: https://npmjs.org/package/pkg-json-git-repo
[travis-image]: https://travis-ci.org/alefteris/pkg-json-git-repo.svg?branch=master
[travis-url]: https://travis-ci.org/alefteris/pkg-json-git-repo
[coveralls-image]: https://coveralls.io/repos/github/alefteris/pkg-json-git-repo/badge.svg
[coveralls-url]: https://coveralls.io/github/alefteris/pkg-json-git-repo
[gemnasium-image]: https://img.shields.io/gemnasium/alefteris/pkg-json-git-repo.svg
[gemnasium-url]: https://gemnasium.com/alefteris/pkg-json-git-repo
