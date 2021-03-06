var path = require('path');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var livereload = require('gulp-livereload');


var source = './src';
var destination = './dist';

var configWebpack = {
  output: {
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.resolve(__dirname, 'src/app'),
        loader : 'babel'
      }
    ]
  }
};


gulp.task('compileCSS', function () {
  return gulp.src(source + '/ressources/styles/index.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(destination + '/ressources/styles/'))
    .pipe(livereload());
});


gulp.task('copyHTML', function() {
  return gulp.src(source + '/index.html')
  .pipe(gulp.dest(destination))
  .pipe(livereload());
});


gulp.task('minifyCSS', function () {
  return gulp.src(destination + '/ressources/styles/index.css')
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(destination + '/ressources/styles/'));
});


gulp.task('minifyJS', function() {
  return gulp.src(destination + '/ressources/scripts/bundle.js')
    .pipe(plugins.uglify())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(destination + '/ressources/scripts/'));
});


gulp.task('minifyHTML', function() {
  return gulp.src(destination + '/index.html')
    .pipe(plugins.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(destination + '/'));
});


gulp.task('webpack', function() {
  return gulp.src('src/app/index.jsx')
    .pipe(plugins.webpack(configWebpack))
    .pipe(gulp.dest('dist/ressources/scripts'))
    .pipe(livereload());
});


gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(source + '/ressources/styles/*.scss', ['compileCSS']);
  gulp.watch(source + '/app/*.js', ['webpack']);
  gulp.watch(source + '/index.html',  ['copyHTML']);
});


gulp.task('build', ['webpack', 'compileCSS', 'copyHTML']);
gulp.task('minify', ['minifyCSS', 'minifyJS', 'minifyHTML']);
gulp.task('prod', ['build',  'minify']);
gulp.task('default', ['build']);
