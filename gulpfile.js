'use strict';
const gulp = require('gulp');
const markdown = require('gulp-markdown');
const rimraf = require('rimraf');
const runSequence = require('run-sequence');

gulp.task('markdown', function() {
    return gulp.src('docs/**/*')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(done) {
    rimraf('dist', { force: true }, done);
});

gulp.task('default', function() {
    return runSequence([
        'clean',
        'markdown'
    ]);
});