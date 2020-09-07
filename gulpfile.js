"use strict";

const gulp = require("gulp");
const gulp_base = require("./gulpfile-base");

gulp.task("tsc", gulp_base.tsc);

gulp.task("clean", gulp_base.clean);

gulp.task("copyFiles", gulp_base.copyFiles);

gulp.task("models", gulp_base.models);

gulp.task("installModules", gulp_base.installModules); 


gulp.task("default", gulp.series("clean", gulp.parallel(["tsc",  "installModules"])));
gulp.task("release", gulp.series("default"));
