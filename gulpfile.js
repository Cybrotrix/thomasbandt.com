var jshint = require("gulp-jshint");
var gulp = require("gulp");
var mocha = require('gulp-mocha');

gulp.task("jshint", function() {
    return gulp.src([
        "*.js",
        "admin/**/*.js",
        "!admin/client/libraries/**/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("mocha", function() {
    return gulp.src([
        "*Spec.js",
        "admin/**/*Spec.js"])
        .pipe(mocha({reporter: "spec"}));
});
