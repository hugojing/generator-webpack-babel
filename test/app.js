'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-webpack-babel:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    const tplPath = path.resolve(__dirname, '../generators/app/templates');
    assert.file([
      '.babelrc',
      '.gitignore',
      '.npmrc',
      'package.json',
      'README.md',
      'yarn.lock',
      'src/index.html',
      'build/base.js'
    ].map(f => path.join(tplPath, f)));
  });
});
