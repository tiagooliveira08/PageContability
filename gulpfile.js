"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const watch = require("gulp-watch");
const browserSync = require("browser-sync");
const autoprefix = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");



gulp.task("sass", () => (
    gulp.src("src/scss/**")
    .pipe(sass({
        outputStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(autoprefix({
        browsers: ["last 2 versions"],
        cascade: false
    }, ))
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.reload({
        stream: true
    })).on("finish", () => console.log("Css Atualizado com sucesso!!"))
));


gulp.task("compress-javascript", () => (
    gulp.src("src/js/*.js")
    .pipe(babel({
        presets: ["es2015"]
    }))
    .pipe(uglify().on("error", e => console.log(e)))
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("public/js/"))
    .pipe(browserSync.reload({
        stream: true
    }))
));



gulp.task("server", ["build"], () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })

    gulp.watch("index.html").on("change", browserSync.reload);
    gulp.watch("src/scss/**/*.scss", ["sass"]);
    gulp.watch("src/js/script.js", ["compress-javascript"]);
});

gulp.task("build", ["sass", "compress-javascript"]);

gulp.task("default", ["server"]);