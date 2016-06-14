var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
//指定文件输入和输出路径
var path = {
    HTML: 'src/index.html',
    MINIFIED_OUT: 'build.min.js',
    OUT: 'build.js',
    DEST: 'dist',
    DEST_BUILD: 'dist/build',
    DEST_SRC: 'dist/js',
    ENTRY_POINT: './src/jsx/App.js'
};

////复制index.html文件
//gulp.task('copy', function(){
//    gulp.src(path.HTML)
//        .pipe(gulp.dest(path.DEST));
//});

gulp.task('replaceHtml', function(){
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': 'js/' + path.OUT
        }))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', ['replaceHtml'], function() {
    gulp.watch(path.HTML, ['replaceHtml']); //1、监视index.html，一有变动执行replaceHtml任务

    var watcher  = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {}, 
		packageCache: {}, 
		fullPaths: true
    }));

    return watcher.on('update', function () {
            watcher.bundle()
                .pipe(source(path.OUT))
                .pipe(gulp.dest(path.DEST_SRC))
            console.log('Updated');
        })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_SRC));
});
//默认任务
gulp.task('default', ['watch']);

//***************production生产版**********
gulp.task('build',  function(){
    browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify]
    })
        .bundle()
        .pipe(source(path.MINIFIED_OUT))
        .pipe(streamify(uglify(path.MINIFIED_OUT)))
        .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function(){
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': 'build/' + path.MINIFIED_OUT
        }))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('production', ['replaceHTML', 'build']);