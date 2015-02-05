var gulp = require('gulp');
var parker = require('..');

gulp.task('parker', function() {
  var s = gulp.src('./css/*.css')
    .pipe(parker({
      metrics: [
        'TotalRules',
        'TotalStylesheets'
      ],
      format: 'json'
    })).on('data', function(data) {
      console.log(data);
    }).on('error', function(data) {
      console.log(data);
    });

  //console.log(s);
  return s;
});

gulp.task('default', ['parker']);
