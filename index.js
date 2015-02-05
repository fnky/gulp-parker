var gutil = require('gulp-util');
var fs = require('fs');
var _ = require('lodash');
var through = require('through2');
var Parker = require('parker');
var path = require('path');
var ext = gutil.replaceExtension;

module.exports = function(options) {
  options = _.defaults(options || {}, {
    metrics: 'all',
    format: 'json',
  });

  var metrics = options.metrics;
  var includedMetrics = [];

  // @TODO allow for custom metrics (anonymous functions)
  if (_.isArray(metrics)) {
    _.forEach(metrics, function(metric) {
      includedMetrics.push(require('./node_modules/parker/metrics/' + metric + '.js'));
    });
  } else {
    includedMetrics = require('./node_modules/parker/metrics/All.js');
  }

  var parker = new Parker(includedMetrics);

  var parsedMetrics = {};
  _.forEach(includedMetrics, function(parsedMetric) {
    parsedMetrics[parsedMetric.id] = parsedMetric;
  });

  var formats = require('./formats');

  var stream = through.obj(function(file, enc, cb) {
    var results = parker.run(file.relative);
    var obj = {};

    cb(null, formats[options.format](results, file, enc));
  });

  return stream;
};