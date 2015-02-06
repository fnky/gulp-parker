var gulp = require('gulp');
var parker = require('..');

var mediaQueriesMetric = {
    id: 'media-queries',
    name: 'Media Queries',
    type: 'mediaquery',
    aggregate: 'list',
    format: 'list',
    measure: function (query) {
        return query;
    },
    filter: function (value, index, self) {
        return self.indexOf(value) === index;
    }
};

gulp.task('parker', function() {
  var s = gulp.src('./css/a.css')
    .pipe(parker({ metrics: [
      'TotalStylesheets',
      mediaQueriesMetric
    ], format: 'human' }))
  return s;
});

gulp.task('default', ['parker']);
