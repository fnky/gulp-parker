var fs = require('fs');
var path = require('path');
var assert = require('assert');
var gulp = require('gulp');
var gutil = require('gulp-util');
var parker = require('..');

describe('parker()', function() {
  it('should analyse files', function(cb) {

    var stream = parker({ format: 'object' });
    var buffer = [];

    stream.on('data', function(file) {
      buffer.push(file);
    });

    stream.on('end', function() {
      assert.equal(buffer.length, 1);
      assert.equal(buffer[0]['unique-colours'][0], '#AAAAAA');
      cb()
    });

    stream.write(new gutil.File({
      cwd: __dirname,
      base: __dirname + '/fixture',
      path: __dirname + '/fixture/fixture.css',
      contents: new Buffer('body { color: #aaa }')
    }));

    stream.end();
  });

  it('should analyse files by a set of metrics', function(cb) {

    var stream = parker({ metrics: [
      'UniqueColours',
      'TotalStylesheets'
    ], format: 'object' });
    var buffer = [];

    stream.on('data', function(file) {
      buffer.push(file);
    });

    stream.on('end', function() {
      assert.equal(buffer.length, 1);
      assert.deepEqual(buffer[0], { 'total-stylesheets': 1, 'unique-colours': [ '#AAAAAA' ] });
      cb()
    });

    stream.write(new gutil.File({
      cwd: __dirname,
      base: __dirname + '/fixture',
      path: __dirname + '/fixture/fixture.css',
      contents: new Buffer('body { color: #aaa }')
    }));

    stream.end();
  });
});
