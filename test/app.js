'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-webpack-babel:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      path.join(__dirname, '../generators/app/templates/.babelrc'),
      path.join(__dirname, '../generators/app/templates/.gitignore'),
      path.join(__dirname, '../generators/app/templates/.npmrc'),
      path.join(__dirname, '../generators/app/templates/build.js'),
      path.join(__dirname, '../generators/app/templates/package.json'),
      path.join(__dirname, '../generators/app/templates/README.md'),
      path.join(__dirname, '../generators/app/templates/yarn.lock'),
      path.join(__dirname, '../generators/app/templates/src/index.html')
    ]);
  });
});
