'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MeanisGenerator = module.exports = function MeanisGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MeanisGenerator, yeoman.generators.Base);

MeanisGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);
  
  cb();
};

MeanisGenerator.prototype.app = function app() {
  //App Folders
  this.mkdir('app');
  this.mkdir('app/controllers');
  this.mkdir('app/models');
  this.mkdir('app/views');
  this.mkdir('app/views/includes');
  this.mkdir('app/views/layouts');
  this.mkdir('app/views/users');

  this.directory('app');

  //Config Folders
  this.mkdir('config');
  this.mkdir('config/env');
  this.mkdir('config/middlewares');

  this.directory('config');

  //Public Folders
  this.mkdir('public');
  this.mkdir('public/css');
  this.mkdir('public/css/views');
  this.mkdir('public/img');
  this.mkdir('public/img/apple');
  this.mkdir('public/img/icons');
  this.mkdir('public/img/loaders');
  this.mkdir('public/img/sprites');
  this.mkdir('public/js');
  this.mkdir('public/js/controllers');
  this.mkdir('public/js/services');
  this.mkdir('public/views');
  this.mkdir('public/views/articles');

  this.directory('public');
  
  //Test Folder
  this.mkdir('test/article');
  this.mkdir('test/user');

  this.directory('test');
};

MeanisGenerator.prototype.projectfiles = function projectfiles() {
  //Copy Files
  this.copy('_bower.json', 'bower.json');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_package.json', 'package.json');
  this.copy('_Procfile', 'Procfile');
  this.copy('_README.md', 'README.md');
  this.copy('_server.js', 'server.js');
  this.copy('editorconfig', '.editorconfig');
  this.copy('gitignore', '.gitignore');
  this.copy('jshintrc', '.jshintrc');
  this.copy('slugignore', '.slugignore');
  this.copy('travis.yml', '.travis.yml');
};
