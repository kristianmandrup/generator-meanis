/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('meanis generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('meanis:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      
      'app/controllers/articles.js',
      'app/controllers/index.js',
      'app/controllers/users.js',
      'app/models/article.js',
      'app/models/user.js',
      'app/views/includes/foot.jade',
      'app/views/includes/head.jade',
      'app/views/layouts/default.jade',
      'app/views/users/auth.jade',
      'app/views/users/signin.jade',
      'app/views/users/signup.jade',
      'app/views/404.jade',
      'app/views/500.jade',
      'app/views/index.jade',
      'config/env/all.js',
      'config/env/development.json',
      'config/env/production.json',
      'config/env/test.json',
      'config/env/travis.json',
      'config/middlewares/authorization.js',
      'config/config.js',
      'config/express.js',
      'config/passport.js',
      'config/routes.js',
      'config/socket.io.js',
      'public/css/views/articles.css',
      'public/css/common.css',
      'public/img/apple/apple-touch-icon-57x57-precomposed.png',
      'public/img/apple/apple-touch-icon-72x72-precomposed.png',
      'public/img/apple/apple-touch-icon-114x114-precomposed.png',
      'public/img/apple/apple-touch-icon-144x144-precomposed.png',
      'public/img/apple/apple-touch-icon-precomposed.png',
      'public/img/apple/apple-touch-icon.png',
      'public/img/apple/splash.png',
      'public/img/apple/splash2x.png',
      'public/img/icons/facebook.png',
      'public/img/icons/favicon.ico',
      'public/img/icons/github.png',
      'public/img/icons/google.png',
      'public/img/icons/twitter.png',
      'public/img/loaders/loader.gif',
      'public/img/sprites/glyphicons-halflings-white.png',
      'public/img/sprites/glyphicons-halflings.png',
      'public/js/controllers/articles.js',
      'public/js/controllers/header.js',
      'public/js/controllers/index.js',
      'public/js/services/articles.js',
      'public/js/services/global.js',
      'public/js/services/socket.io.js',
      'public/js/app.js',
      'public/js/config.js',
      'public/js/directives.js',
      'public/js/filters.js',
      'public/js/init.js',
      'public/views/articles/create.html',
      'public/views/articles/edit.html',
      'public/views/articles/list.html',
      'public/views/articles/view.html',
      'public/views/header.html',
      'public/views/index.html',
      'public/humans.txt',
      'public/robots.txt',
      'test/article/model.js',
      'test/user/model.js',
      'bower.json',
      'Gruntfile.js',
      'package.json',
      'Procfile',
      'README.md',
      'server.js',
      '.bowerrc',
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      '.slugignore',
      '.travis.yml',
    ];

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
