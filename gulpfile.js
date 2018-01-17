const gulp = require("gulp");
const connect = require("gulp-connect");
const babel = require("gulp-babel");
const sass = require("gulp-sass-china");

gulp.task("html", () => {
    gulp.src(["src/**/*.html"])
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
});

gulp.task("script", () => {
    gulp.src(["src/scripts/*.js", "src/scripts/libs/*.js", "src/scripts/module/*.js", "!node_modules/**/*"])
    .pipe(gulp.dest("dist/scripts"));
});

gulp.task("es6", () => {
    gulp.src("src/scripts/es6/*.js")
    .pipe(babel({
        presets: ["env"]
    }))
    .pipe(gulp.dest("dist/scripts"));
});

gulp.task("sass", () => {
    gulp.src("src/scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
});

gulp.task("server", () => {
    connect.server({
        root: "dist",
        port: 82,
        livereload: true
    });
});

gulp.task("watch", () => {
    gulp.watch(["src/**/*.html", "!node_modules/**/*"], ["html"]);
    gulp.watch(["src/**/*.js", "!node_modules/**/*"], ["script"]);
    gulp.watch(["src/scss/*.scss", "!node_modules/**/*"], ["sass"]);
    // gulp.watch(["src/scripts/es6", "!node_modules/**/*"], ["es6"]);
});

gulp.task("default", ["watch", "server"]);