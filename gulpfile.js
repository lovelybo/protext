//首先引入gulp模块
var gulp = require('gulp');

var stylus = require('gulp-stylus');

var minifycss = require('gulp-minify-css')

var uglify = require('gulp-uglify')

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var nodemon = require('gulp-nodemon')



gulp.task('stylus',function(){
//	gulp.src('./stylus/*.styl');
    return gulp.src('./stylus/**/*.styl')
    //	执行stylus编译
        .pipe(stylus())
        //		输出编译后的文件
        .pipe(gulp.dest('./public/css'))
})



gulp.task('minifycss',['stylus'],function(){
    return gulp.src('./public/css/**/*.css')  //需要压缩的文件
        .pipe(minifycss()) 			//执行压缩操作
        .pipe(gulp.dest('./public/mincss/'))
})

gulp.task('watcher',['browserSync','stylus','minifycss'],function(){
    gulp.watch('./stylus/**/*.styl',['stylus']);
//	gulp.watch('./public/js/**/*.js',['uglify']);
    gulp.watch('./public/mincss/**/*.js',['minifycss']);
    gulp.watch(['./public/css/**/*.css','./public/js/**/*.js']).on('change',function(){
        reload();
    });
})

//gulp.task('uglify',function(){
//	return gulp.src('./public/js/**/*.js')
//			.pipe(uglify())
//			.pipe(gulp.dest('./public/minjs/'))
//})
gulp.task('nodemon',function(ab){
    var ft = false;
    return nodemon({
        script:'./app.js'
    }).on('start',function(){
        if(!ft){
            ab();
            tf = true;
        }
    })
})

gulp.task('browserSync',['nodemon'],function(){
    browserSync.init({
        proxy:{
            target:'http://127.0.0.1:8000'
        },
        port:8001,
        open:false,
        files:['*']
    })
})