var jshint = require("gulp-jshint"),
    gulp = require("gulp"),
    mocha = require("gulp-mocha"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    gzip = require("gulp-gzip"),
    watch = require("gulp-watch");

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

gulp.task("minify", function() {
    var scriptsToBeMinified =
    [
        "admin/client/libraries/jquery/dist/jquery.min.js",
        "admin/client/libraries/bootstrap/dist/js/bootstrap.min.js",
        "admin/client/libraries/flat-ui/dist/js/flat-ui.min.js",
        "admin/client/libraries/angular/angular.min.js",
        "admin/client/libraries/angular-messages/angular-messages.min.js",
        "admin/client/libraries/underscore/underscore-min.js",
        "admin/client/libraries/markdown-js/dist/markdown.min.js",
        "admin/client/libraries/bootstrap-markdown/js/bootstrap-markdown.js",
        "admin/client/scripts/**/*.js"
    ];

    gulp.src(scriptsToBeMinified)
        .pipe(watch(scriptsToBeMinified, function(files) {
            return files
                .pipe(uglify())
                .pipe(concat("all.min.js"))
                .pipe(gzip({ append: false }))
                .pipe(gulp.dest("admin/client/dist"));
        }));
});
