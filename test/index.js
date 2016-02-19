'use strict';

const path = require('path');

const test = require('tape');

const pkgJsonGitRepo = require('../index');

test('Package.json with Git repo must return the URL', t => {
  t.plan(1);
  pkgJsonGitRepo(path.join(__dirname, 'data/with-git-repo.json')).then(url => {
    t.equal(url, 'git+https://github.com/alefteris/pkg-json-git-repo.git');
  });
});

test('Invalid file path must return an error', t => {
  t.plan(1);
  pkgJsonGitRepo('invalid').catch(err => {
    t.ok(err instanceof Error);
  });
});

test('No repo in package.json must return an error', t => {
  t.plan(2);
  pkgJsonGitRepo(path.join(__dirname, 'data/no-repo.json')).catch(err => {
    t.ok(err instanceof Error);
    t.equal(err.message, 'No repository property in package.json');
  });
});

test('No Git repo in package.json must return an error', t => {
  t.plan(2);
  pkgJsonGitRepo(path.join(__dirname, 'data/no-git-repo.json')).catch(err => {
    t.ok(err instanceof Error);
    t.equal(err.message, "Repository in package.json isn't for Git");
  });
});
