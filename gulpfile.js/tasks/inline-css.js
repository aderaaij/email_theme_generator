var
  browserSync         = require('browser-sync'),
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/inline-css');

gulp.task('inlinecss',['styles', 'templates'], function() {
  return gulp.src(config.source)

    .pipe(plugins.inlineCss({
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: true,
      removeLinkTags: true
    }))

    .pipe(gulp.dest(config.dest))

    .pipe(plugins.if(global.isWatching, plugins.notify({ message: 'Inline CSS task complete' })));
});