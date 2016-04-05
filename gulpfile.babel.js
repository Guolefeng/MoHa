const argv       = require('yargs').argv
const watchify   = require('watchify')
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
let isWatching   = argv._[0] === 'serve'

// Global method
let logError     = (err) => {
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
  gulp.src([
      'browser',
      'es5'
    ], {read: false})
      .pipe(rimraf({
        force: true
      }))
)

gulp.task('scripts', () =>
  gulp.src('src/scripts/**.js')
    .pipe(babel())
    .pipe(gulp.dest('es5'))
)

// Browserify setup
var b = browserify({
  entries: 'src/scripts/_browser.js',
  cache: {},
  packageCache: {},
  debug: !isBuild
})

if (isWatching) {
  b = watchify(b)
  b.on('update', browserifyBundle)
  b.on('log', gutil.log)
  browserifyBundle()
}

let browserifyBundle = () =>
  b.transform('babelify')
    .bundle()
    .on('error', logError)
    .pipe(source('moha.js'))
    .pipe(gulp.dest('browser'))
    .pipe(livereload())

gulp.task('script-browser', () =>
  browserifyBundle()
)

gulp.task('script-browser-min', () =>
  gulp.src('browser/moha.js')
    .pipe(uglify())
    .pipe(rename('moha.min.js'))
    .pipe(gulp.dest('browser'))
)

gulp.task('generator-index', () => null )
gulp.task('generator-style', () => null )
gulp.task('generator-script', () => null )

// Serve

// Tasks sequence
gulp.task('dev', sequence('clean', ['scripts', 'script-browser']))

gulp.task('generator', sequence(['generator-index', 'generator-style', 'generator-script']))

gulp.task('build', sequence('dev', 'generator','script-browser-min'))

gulp.task('default', ['build'])
