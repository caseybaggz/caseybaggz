const gulp          = require('gulp');
const autoprefixer  = require('gulp-autoprefixer');
const browserSync   = require('browser-sync').create();
const htmlmin       = require('gulp-htmlmin');
const imagemin      = require('gulp-imagemin');
const named         = require('vinyl-named');
const sass          = require("gulp-ruby-sass");
const scsslint      = require('gulp-scss-lint');
const webpack       = require('webpack-stream');
const webpackConfig = require('./webpack.config');


gulp.task('styles', function () {
  return sass('./stylesheets/app.scss')
    .on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./docs'));
});


gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});


gulp.task('html', () => {
  return gulp.src('./index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./docs'));
});


gulp.task('images', () =>
  gulp.src('./images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./docs/images'))
);


gulp.task('scss-lint', () => {
  return gulp.src('./stylesheets/app.scss')
    .pipe(scsslint({
      'config': 'scss_config.yml'
    }));
});


gulp.task('scripts', () => {
  return gulp.src('javascripts/App.js')
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('docs/'));
});


// DEFAULTS


gulp.task('watch', ['html', 'images', 'scss-lint', 'styles', 'scripts'], function() {
    gulp.watch("./stylesheets/**/*.scss", ['scss-lint', 'styles', 'images']).on('change', browserSync.reload);
    gulp.watch("./javascripts/**/*.js", ['scripts']).on('change', browserSync.reload);
    gulp.watch("./*.html", ['html', 'images']).on('change', browserSync.reload);
});

gulp.task('default', ['html', 'images', 'styles', 'scripts']);
gulp.task('heroku:production', ['default']);
