var _ = require('lodash');
var gutil = require('gulp-util');
var through = require('through2');
var Parker = require('parker');

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
      if(_.isString(metric)) {
        includedMetrics.push(require('./node_modules/parker/metrics/' + metric + '.js'));
      } else {
        includedMetrics.push(metric);
      }
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

  return through.obj(function(file, enc, cb) {

    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-parker', 'Streaming not supported'));
      return;
    }

    var results;
    try {
      results = parker.run(file.contents.toString());
      this.push(formats[options.format](results, file, enc));
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-parker', err, { fileName: file.path }));
    }

    cb();
  });
};
