/* global require, module */

const webpackOptions = require('./webpack.config.js')

webpackOptions.resolve = {
  modulesDirectories: [
    "",
    "src",
    "node_modules"
  ]
}

module.exports = {
  files: [
    'test/**/*.spec.js'
  ],

  // frameworks to use
  frameworks: ['mocha'],

  preprocessors: {
    // only specify one entry point
    // and require all tests in there
    'src/**/*.js': ['webpack'],
    'test/**/*.spec.js': ['webpack']
  },

  reporters: ['mocha'],

  coverageReporter: {
    type: 'html',
    dir: 'build/coverage/'
  },

  webpack: webpackOptions,

  webpackMiddleware: {
    // webpack-dev-middleware configuration
    noInfo: true
  },

  singleRun: true
}
