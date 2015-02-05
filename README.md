# gulp-parker
![Travis Build Status](https://travis-ci.org/fnky/gulp-parker.svg)

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

### `due: callback`

Does something very cool.

## Contributing

You can pitch in by submitting issues and pull requests. But before you do so, make sure it is specific to this wrapper, otherwise report issues at [Parker's issue tracker](https://github.com/katiefenn/parker/issues).