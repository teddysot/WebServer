const gulp = require('gulp');

// Stage 1
gulp.task('code', done => {
    done();
});

// Stage 2
gulp.task('markup', done => {
    done();
});

// Stage 3 - other processing
gulp.task('art', done => {
    done();
});

// Stage 4 Release
gulp.task('release', done => {
    done();
});

// Stage 5
gulp.task('watch', done => {
    done();
});

// 4. default task to start it off...
var SRC = 'C://Users//Public//Build/Src' // Assume the p4 client workspace pulls source here
var RELEASE = 'C://Users//Public//Build//Release'

gulp.task('clean it up', done => {
    gulp.src(SRC)
        .pipe(del())
    done();
});

// 2. Sync perforce
gulp.task('p4 sync', done => {
    gulp.src(`${SRC}/**/**`)
        .pipe(exec('p4 sync ...'))
        .dest(RELEASE);

    // copy the plugins from my folder
    done();
});

// 3. Build it
gulp.task('build it', done => {
    exec('rexec server build.sh');
    done();
})

// 4. Generate release-candidate
gulp.task('generate-release', done => {
    gulp.src('./**/**')
        .pipe(exec(''));
    done();
})

// On the network drive
// 5. Migrate releases
gulp.task('migrate release', done => { });

var taskList = ['clean it up', 'sync p4', 'build it', 'generate-release', 'migrate-release'];
gulp.task('default', gulp.series(taskList));