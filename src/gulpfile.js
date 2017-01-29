var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var cleanCss = require("gulp-clean-css");
var rename = require("gulp-rename");
var sass = require("gulp-sass");

gulp.task("styles", function() {
    return gulp.src("./Styles/Bundled.scss")
        .pipe(sass())
        .on("error", function(e) {
            console.log(e);
            this.emit("end");
        })
        .pipe(autoprefixer({ browsers: ["> 1%", "last 2 versions"] }))
        .pipe(rename("blog.min.css"))
        .pipe(cleanCss())
        .pipe(gulp.dest("./wwwroot/styles/"));
});

gulp.task("default", ["styles"], function() {
    gulp.watch("./Styles/**/*.scss", ["styles"]);
});
