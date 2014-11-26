var jshint = require("gulp-jshint");
var gulp = require("gulp");

gulp.task("lint", function() {
    return gulp.src([
        "*.js",
        "admin/**/*.js",
        "!admin/client/libraries/**/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});
