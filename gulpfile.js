const gulp = require('gulp')
const del = require('del')
const log = require('fancy-log')
const path = require('path')
const { spawn } = require('child_process')

const TEMPLATES_DIR = 'templates'
const STATIC_DIR = 'static'
const TEST_DIR = 'test/themes/suka'

function cleanTestTemplates () {
  return del(`${TEST_DIR}/${TEMPLATES_DIR}/**/*`, {
    cwd: __dirname
  })
}

function cleanTestStatic () {
  return del(`${TEST_DIR}/${STATIC_DIR}/**/*`, {
    cwd: __dirname
  })
}

function sync (act, file) {
  if (act === '-') {
    log.info('\u001b[31m-\u001b[39m "%s"', path.basename(file))

    return del(path.resolve(TEST_DIR, path.relative(__dirname, file)))
  } else if (act === '+' || act === '*') {
    log.info('\u001b[%dm%s\u001b[39m "%s"',
      act === '*' ? 33 : 32, act, path.basename(file))
  
    return gulp.src(file, {
      base: __dirname
    })
      .pipe(gulp.dest(TEST_DIR))
  }
}

function copyTemplates () {
  return gulp.src(`${TEMPLATES_DIR}/**/*`)
    .pipe(gulp.dest(`${TEST_DIR}/${TEMPLATES_DIR}`))
}

function copyStatic () {
  return gulp.src(`${STATIC_DIR}/**/*`)
    .pipe(gulp.dest(`${TEST_DIR}/${STATIC_DIR}`))
}

const makeTemplates = gulp.series(cleanTestTemplates, copyTemplates)
const makeStatic = gulp.series(cleanTestStatic, copyStatic)

function startVeripressPreview () {
  const proc = spawn(
    'veripress',
    [
      'preview',
      '--debug'
    ],
    {
      cwd: path.resolve(__dirname, 'test'),
      stdio: 'pipe',
      windowsHide: true
    }
  )

  process.on('SIGINT', () => {
    proc.kill('SIGINT')
  })

  function logChunk (src, chunk) {
    chunk.toString().split('\n').forEach(function (m) {
      if (src === 'stdout') {
        log.info('\u001b[32m%s\u001b[39m', m)
      } else {
        log.error('\u001b[31m%s\u001b[39m', m)
      }
    })
  }

  proc.stdout.on('data', logChunk.bind(undefined, 'stdout'))
  proc.stderr.on('data', logChunk.bind(undefined, 'stderr'))

  return proc
}

function watchFiles () {
  return new Promise(function (resolve, reject) {
    const watcher = gulp.watch(
      [
        `${TEMPLATES_DIR}/**/*`,
        `${STATIC_DIR}/**/*`
      ],
      {
        useFsEvents: false,
        usePolling: false
      }
    )
      .on('change', sync.bind(undefined, '*'))
      .on('add', sync.bind(undefined, '+'))
      .on('unlink', sync.bind(undefined, '-'))
      .on('close', resolve)
      .on('error', reject)
  
    process.on('SIGINT', () => {
      watcher.emit('close')
      watcher.close()
    })
  })
}

const dev = gulp.series(
  gulp.parallel(makeStatic, makeTemplates),
  gulp.parallel(watchFiles, startVeripressPreview)
)

async function listTask () {
  log.info('************************')
  gulp.tree().nodes.forEach(n => {
    log.info('- Task "%s"', n)
  })
  log.info('************************')
}

module.exports = {
  cleanTestTemplates,
  cleanTestStatic,
  copyTemplates,
  copyStatic,
  makeTemplates,
  makeStatic,
  dev,
  default: listTask
}
