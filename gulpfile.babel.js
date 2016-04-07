const argv       = require('yargs').argv
const browserify = require('browserify')
const source     = require('vinyl-source-stream')

const gulp       = require('gulp')
const babel      = require('gulp-babel')
const jade       = require('gulp-jade')
const gutil      = require('gulp-util')
const stylus     = require('gulp-stylus')
const rename     = require('gulp-rename')
const uglify     = require('gulp-uglify')
const rimraf     = require('gulp-rimraf')
const sequence   = require('gulp-sequence')
const livereload = require('gulp-livereload')

let isBuild      = argv._[0] === 'build'

// Global method
function logError (err) {
  var stack = unescape(err.stack)
  delete err.stack
  if (err.stream != null) {
    delete err.stream
  }
  if (err.codeFrame != null) {
    delete err.codeFrame
  }
  gutil.log(err)
  gutil.log(stack)
  this.emit('end')
}

/* ==== Tasks ==== */
gulp.task('clean', () =>
  gulp.src(['browser', 'es5', 'gh-pages'], {read: false})
    .pipe(rimraf({
      force: true
    }))
)

gulp.task('scripts', () =>
  gulp.src('src/scripts/**/*.js')
    .pipe(babel())
    .on('error', logError)
    .pipe(gulp.dest('es5'))
)

gulp.task('script-browser', () =>
    browserify({
      entries: 'src/scripts/browser.js',
      cache: {},
      packageCache: {},
      debug: !isBuild
    })
    .transform('babelify')
    .bundle()
    .on('error', logError)
    .pipe(source('moha.js'))
    .pipe(gulp.dest('browser'))
)

gulp.task('script-browser-min', () =>
  gulp.src('browser/moha.js')
    .pipe(uglify())
    .pipe(rename('moha.min.js'))
    .pipe(gulp.dest('browser'))
)

gulp.task('ghPages-index', () => null)
gulp.task('ghPages-style', () => null)
gulp.task('ghPages-script', () => null)

// Watch & Serve
gulp.task('watch', () => {
  livereload.listen(23333)
  gulp.watch('src/scripts/**/*.js', ['dev'])
})

gulp.task('serve', ['watch'], () => {

})

// Tasks sequence
gulp.task('dev', (cb) => sequence('clean', ['scripts', 'script-browser'])(cb))

gulp.task('ghPages', (cb) => sequence(['ghPages-index', 'ghPages-style', 'ghPages-script'])(cb))

gulp.task('build', (cb) => sequence('dev', 'ghPages','script-browser-min')(cb))

gulp.task('default', ['build'])
