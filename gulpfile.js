var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function(){
    var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('.built/'));
});

gulp.task('watch',['build'],function(){
    gulp.watch('./**/*.ts',['build']);
});