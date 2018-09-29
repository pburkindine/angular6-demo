module.exports = function (gulp, plugins) {
  gulp.src([
            '!node_modules',
            '!node_modules/**',
            '!src/assets/js/vendor/**',
            './**/*.json'
          ],
          { dot: true }
        )
        .pipe(plugins.jsonlint())
        .pipe(plugins.jsonlint.failAfterError())
        .pipe(plugins.jsonlint.reporter());
};
