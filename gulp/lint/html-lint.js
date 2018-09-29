module.exports = function (gulp, plugins) {
    gulp.src([
          '!node_modules',
          '!node_modules/**',
          '!src/assets/js/vendor/**',
          './**/*.{html,htm}'
          ],
          { dot: true }
        )
        .pipe(plugins.htmllint({config: '.htmllintrc.json', failOnError: true}));
};
