var path = require('path');
var _ = require('lodash');
var chalk = require('chalk');

module.exports.object = function(results, file, enc) {
  return results;
};

module.exports.json = function(results, file, enc) {
  return console.log(results);
};

var humanize = function(file, results) {

  var colors = {
    title: chalk.black.bold,
    value: chalk.black,
    error: chalk.bold.red,
    rating: {
      high: chalk.green,
      medium: chalk.yellow,
      low: chalk.red
    }
  };

  var styles = {
    heading: function() {
      return _.pad(colors.title.apply(this, arguments), 70, '—');
    },
    title: function (rating) {
      var args = Array.prototype.pop.call(arguments);
      return colors.rating[rating](_.padRight(args, 50, '.'));
    },
    value: function (value) {
      return _.padLeft(value, 4);
    },
  };

  console.log(styles.heading('[', path.basename(file.path), ']'));

  _.forEach(results, function(value, name) {
    name = _.startCase(name);

    if (_.isArray(value)) {
      if(value.length > 0) {
        console.log(styles.title('high', name), styles.value(value.join(', ')));
      } else {
        console.log(styles.title('low', name), styles.value('none'));
      }
    } else {
      value = chalk.black.bold(value);
      console.log(styles.title('medium', name),
        styles.value(value));
    }
  });
};

module.exports.human = function(results, file, enc) {
  return humanize(file, results);
};

module.exports.markdown = function(results, file, enc) {
  return false;
};
