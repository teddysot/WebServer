// Copyright (C) 2019 Scott Henshaw. GGWP
const Gulp = require('gulp');
const Concat = require('gulp-concat');
const Uglify = require('gulp-uglify-es');
const Rename = require('gulp-rename');
const rm = require('gulp-rm');

// 4 methods
// gulp.task()
// gulp.watch()
// gulp.src()
// gulp.dest()

Gulp.task('scripts', done => {
    Gulp.src('./scripts/*.js')
        .pipe(Concat('main.js'))
        .pipe(Rename('main.min.js'))
        .pipe(Gulp.dest('./build/scripts'));
    done();
});

Gulp.task('clean', done => {
    Gulp.src('./build')
        .pipe(rm());
    done();
})

// Execution begin here
Gulp.task('default', Gulp.series('clean', 'scripts'));