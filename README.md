# gulp-parker
[![Travis Build Status](https://travis-ci.org/fnky/gulp-parker.svg?branch=master)](https://travis-ci.org/fnky/gulp-parker)

Gulp plugin for [Parker](https://github.com/katiefenn/parker), a stylesheet analysis tool.

## Install

```bash
npm install --save-dev gulp-parker
```

## Usage

```js
var gulp = require('gulp');
var parker = require('gulp-parker');

gulp.task('parker', function() {
    return gulp.src('./css/*.css')
        .pipe(parker());
});
```

Options are passed into `parker()` as an object and will be passed to parker aswell.

## Options

#### `metrics: array`

Default: **All**

Define a range of metrics you'd like to run. [See a list of available metrics](https://github.com/katiefenn/parker/blob/master/docs/metrics/readme.md#bundled-metrics) for Parker

#### `format: string`

Default: **json**

Define which format the results should be printed in. Currently supported:

- json
- human
- object (will not print, used to e.g. pipe)

## Todos

- Defining custom metrics
- Defining custom formats
- Proper error checking

## Contributing

You can pitch in by submitting issues and pull requests. But before you do so, make sure it is specific to this wrapper, otherwise report issues at [Parker's issue tracker](https://github.com/katiefenn/parker/issues).
