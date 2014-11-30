var jshint = require("gulp-jshint"),
    gulp = require("gulp"),
    mocha = require('gulp-mocha');

gulp.task("jshint", function() {
    return gulp.src([
        "*.js",
        "admin/**/*.js",
        "!admin/client/libraries/**/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("mocha", function() {
    process.env.DEBUG = true;

    return gulp.src([
        "*Spec.js",
        "data/**/*Spec.js",
        "admin/**/*Spec.js"])
        .pipe(mocha({reporter: "spec"}));
});
