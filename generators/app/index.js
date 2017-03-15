'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(chalk.green(
      '🍺 Welcome to the generator-webpack-babel!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Are you ready?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('*'),
      this.destinationRoot(),
      {globOptions: {dot: true}}
    );
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );
    this.fs.copy(
      this.templatePath('src/assets/images/yeoman-logo.png'),
      this.destinationPath('src/assets/images/yeoman-logo.png')
    );
  },

  install: function () {
    this.installDependencies({
      bower: false,
      npm: false,
      yarn: true
    });
  },

  end: function () {
    this.log(chalk.green(
      '🍺 Everything is done!'
    ));
  }
});
