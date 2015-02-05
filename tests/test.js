var fs = require('fs');
var assert = require('assert');
var gutil = require('gulp-util');
var parker = require('..');

describe('parker()', function() {
  it('should analyse files', function(cb) {
    var stream = fs.createReadStream('./css/a.css')
                  .pipe(parker());
    var buffer = [];

    stream.on('data', function(file) {
      buffer.push(file);
    });

    stream.on('end', function() {
      console.log(buffer);
      cb();
    });

    stream.end();
  });

  it('should use a subset of metrics', function(cb) {
    var stream = fs.createReadStream('./css/a.css').pipe(parker({
      metrics: [
        'TotalRules',
        'TotalStylesheets'
      ]
    }));
    var buffer = [];

    stream.on('data', function(file) {
      console.log(file);
    });

    stream.on('end', function() {
      console.log(buffer);
      cb();
    });

    stream.end();
  });

  /*it('should format as human readable text', function(cb) {
    var stream = parker({
      format: 'human'
    });
  });

  it('should use numeric agenda', function(cb) {
    var stream = parker({
      format: 'human'
    });
  });*/
});
