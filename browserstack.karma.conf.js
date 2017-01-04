/* global require, module, process */

const package = require('./package.json')
const base = require('./base.karma.conf')
const customLaunchers = require('./browserstack.launchers.conf.js')
const testDate = (new Date()).toISOString()

Object.keys(customLaunchers).forEach(function (key) {
  customLaunchers[key].base = 'BrowserStack'
})

module.exports = function (config) {
  if (!process.env.BROWSER_STACK_USERNAME || !process.env.BROWSER_STACK_ACCESS_KEY) {
    console.log('Make sure the BROWSER_STACK_USERNAME and BROWSER_STACK_ACCESS_KEY environment variables are set.')
    process.exit(1)
  }

  base.reporters = ['mocha', 'BrowserStack']

  base.browsers = Object.keys(customLaunchers)

  base.customLaunchers = customLaunchers

  base.concurrency = 2
  //base.browserDisconnectTolerance = 10
  //base.browserDisconnectTimeout = 360000
  //base.browserNoActivityTimeout = 360000

  base.browserStack = {}
  base.browserStack.build = `unit-test-${testDate}`
  base.browserStack.project = package.name
  base.browserStack.timeout = 1800
  base.browserStack.captureTimeout = 1800
  base.browserStack.startTunnel = true

  base.singleRun = true

  config.set(base);
};
