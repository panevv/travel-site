const gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
postcssVars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import");

gulp.task("styles", () => {
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssImport, nested, postcssVars, autoprefixer]))
        .on("error", errorMsg => {
            console.log(errorMsg.toString());
            this.emit("end");
        })
        .pipe(gulp.dest("./app/temp/styles"));
});