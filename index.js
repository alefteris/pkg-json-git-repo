'use strict';

const readPkgJson = require('read-package-json');

/**
 * Get the Git repo that is defined in a package.json file.
 *
 * @param {string} pkgJsonPath The file path to the package.json file.
 * @return {promise} Promise with the Git repo URL.
 */
module.exports = function pkgJsonGitRepo (pkgJsonPath) {
  return new Promise((resolve, reject) => {
    readPkgJson(pkgJsonPath, null, false, (err, data) => {
      if (err) {
        return reject(err);
      }
      const repo = data.repository;
      if (!repo) {
        return reject(Error('No repository property in package.json'));
      }
      if (repo.type !== 'git') {
        return reject(Error("Repository in package.json isn't for Git"));
      }
      return resolve(repo.url);
    });
  });
};
