var
  browserSync             = require('browser-sync'),
  gulp                    = require('gulp'),
  config                  = require('../config/index'),
  templates               = require('../config/templates'),
  styles                  = require('../config/styles'),
  images                  = require('../config/images'),
  inlinecss               = require('../config/inline-css'),
  plugins                 = require('gulp-load-plugins')();

gulp.task('watch', ['browserSync','setWatch', 'templates'], function() {

  // Watch all the things with the gulp-watch plugin
  plugins.watch(templates.source, function() { gulp.start('jade-watch'); });
  plugins.watch(styles.base, function() { gulp.start(['styles']); });
  plugins.watch(images.source, function() { gulp.start('images'); });
});
