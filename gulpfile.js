var jshint = require("gulp-jshint"),
    gulp = require("gulp"),
    mocha = require("gulp-mocha"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    sass = require("gulp-sass"),
    minifyCSS = require("gulp-minify-css"),
    watch = require("gulp-watch");

gulp.task("jshint", function() {
    return gulp.src([
        "*.js",
        "**/*.js",
        "!node_modules/**/*.js",
        "!blog/client/libraries/**/*.js",
        "!admin/client/dist/*.js",
        "!admin/client/libraries/**/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("mocha", function() {
    require("./data/database").connect().then(function() {
        process.env.DEBUG = true;

        return gulp.src([
            "*Spec.js",
            "data/**/*Spec.js",
            "blog/**/*Spec.js",
            "utils/*Spec.js",
            "admin/**/*Spec.js"])
            .pipe(mocha({reporter: "spec"}));
    });
});

gulp.task("minify", function() {
    var libraries =
        [
            "admin/client/libraries/jquery/dist/jquery.js",
            "admin/client/libraries/bootstrap/dist/js/bootstrap.js",
            "admin/client/libraries/flat-ui/dist/js/flat-ui.js",
            "admin/client/libraries/angular/angular.js",
            "admin/client/libraries/angular-messages/angular-messages.js",
            "admin/client/libraries/underscore/underscore.js",
            "admin/client/libraries/markdown-js/dist/markdown.js",
            "admin/client/libraries/bootstrap-markdown/js/bootstrap-markdown.js",
            "admin/client/libraries/moment/moment.js",
            "admin/client/libraries/angular-moment/angular-moment.js",
            "admin/client/libraries/sugarjs/release/sugar-full.development.js"
        ];

    gulp.src(libraries)
        .pipe(concat("libs.min.js"))
        .pipe(gulp.dest("admin/client/dist"));

    var app =
        [
            "admin/client/app/*.js",
            "admin/client/app/**/*.js"
        ];

    gulp.src(app)
        .pipe(watch(app, function (files) {
            return files
                .pipe(uglify({ mangle: false }))
                .pipe(concat("app.min.js"))
                .pipe(gulp.dest("admin/client/dist"));
        }));

    var styles =
        [
            "admin/client/styles/**/*.scss",
            "admin/client/styles/*.scss"
        ];

    gulp.src(styles)
        .pipe(watch(styles, function(files) {
            return files
                .pipe(sass())
                .pipe(concat("all.min.css"))
                .pipe(minifyCSS())
                .pipe(gulp.dest("admin/client/dist"));
        }));
});
