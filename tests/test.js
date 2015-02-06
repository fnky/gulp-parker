var fs = require('fs');
var path = require('path');
var assert = require('assert');
var gulp = require('gulp');
var gutil = require('gulp-util');
var parker = require('..');

describe('parker()', function() {
  it('should analyse files', function(cb) {

    var stream = fs.createReadStream('./tests/css/a.css')
                   .pipe(parker());

    var buffer = [];

    stream.on('data', function(file) {
      buffer.push(file);
    });

    stream.on('end', function() {
      console.log(buffer);
      assert.equal(buffer.length, 1);
      cb();
    });

    stream.end();
  });

  /*it('should analyse files from a set of metrics', function(cb) {

    var stream = parker({
      metrics: [
        'TotalRules',
        'TotalStylesheets'
      ]
    });

    var buffer = [];

    stream.on('data', function(file) {
      buffer.push(file);
    });

    stream.on('end', function() {
      assert.equal(buffer.length, 1);
      cb();
    });

    stream.end();
  });*/

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
