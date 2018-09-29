var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

plugins.htmllint = require('gulp-htmllint');
plugins.jsonlint =  require('gulp-jsonlint');
plugins.minimist = require('minimist');

function getTask(task) {
    return require('./gulp/' + task)(gulp, plugins);
}

gulp.task('html-lint', getTask('lint/html-lint'));
gulp.task('json-lint', getTask('lint/json-lint'));
