/* global describe, it, require */

var assert = require('assert')
var callFunctionByName = require('../../src/helper/call-function-by-name')

describe('callFunctionByName', function () {
  it('should be called', function () {
    this.hello = function () {
      return 'world'
    }

    assert.equal(callFunctionByName('hello', this), 'world')
  })

  it('should be thrown exception', function () {
    try {
      callFunctionByName('hello', window)
    } catch (e) {
      assert.notEqual(e, null)
    }
  })
})
