/* global require, module */

const base = require('./base.karma.conf')

module.exports = function (config) {
  base.browsers = ['PhantomJS', 'Chrome', 'Safari']
  config.set(base);
};
