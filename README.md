# gulp-parker2
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status](https://david-dm.org/wearefractal/vinyl.png?theme=shields.io)](https://david-dm.org/wearefractal/vinyl)

Gulp plugin for [Parker](https://github.com/katiefenn/parker), a stylesheet analysis tool.

## Install

```bash
npm install --save-dev gulp-parker2
```

> **NOTE**: Since `gulp-parker` were already taken, I had to rename my plugin to `gulp-parker2`.

## Usage

```js
var gulp = require('gulp');
var parker = require('gulp-parker2');

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

- --Defining custom metrics--
- Defining custom formats
- --Proper error checking--
- Implement latest Parker features

## Contributing

You can pitch in by submitting issues and pull requests. But before you do so, make sure it is specific to this wrapper, otherwise report issues at [Parker's issue tracker](https://github.com/katiefenn/parker/issues).

[npm-url]: https://npmjs.org/package/gulp-parker2
[npm-image]: https://badge.fury.io/js/gulp-parker2.svg
[travis-url]: https://travis-ci.org/fnky/gulp-parker
[travis-image]: https://travis-ci.org/fnky/gulp-parker.svg?branch=master
[depstat-url]: https://david-dm.org/fnky/gulp-parker
[depstat-image]: https://david-dm.org/fnky/gulp-parker.svg
