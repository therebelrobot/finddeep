var expect = require('chai').expect
var _ = require('lodash')

var find = require('../finddeep')

/* Definitions for JS Standard */
/* global describe, it */

describe('finddeep', function () {
  it('should find the value of a named value in a 3-tier object', function (done) {
    var obj = {
      subObj: {
        subSubObj: {
          foo: 'bar'
        }
      },
      subObj2: {
        subSubObj2: {
          foo2: 'bar2'
        }
      },
      subObj3: {
        subSubObj3: {
          foo3: 'bar3'
        }
      }
    }
    var subSubObj3 = find('subSubObj3', obj)
    expect(subSubObj3.value).to.be.an('object')
    expect(subSubObj3.value.foo3).to.equal('bar3')
    done()
  })
  it('should find the path of a named value in a 3-tier object', function (done) {
    var obj = {
      subObj: {
        subSubObj: {
          foo: 'bar'
        }
      },
      subObj2: {
        subSubObj2: {
          foo2: 'bar2'
        }
      },
      subObj3: {
        subSubObj3: {
          foo3: 'bar3'
        }
      }
    }
    var subSubObj3 = find('subSubObj3', obj)
    expect(subSubObj3.path).to.be.a('string')
    expect(subSubObj3.path).to.equal('subObj3.subSubObj3')
    expect(_.get(obj, subSubObj3.path).foo3).to.be.a('string')
    expect(_.get(obj, subSubObj3.path).foo3).to.equal('bar3')
    done()
  })
  it('should return a proper reference to the original object', function (done) {
    var obj = {
      subObj: {
        subSubObj: {
          foo: 'bar'
        }
      },
      subObj2: {
        subSubObj2: {
          foo2: 'bar2'
        }
      },
      subObj3: {
        subSubObj3: {
          foo3: 'bar3'
        }
      }
    }
    var subSubObj3 = find('subSubObj3', obj)
    subSubObj3.foo3 = 'bar4'
    expect(obj.subObj3.subSubObj3.foo3).to.be.a('string')
    expect(obj.subObj3.subSubObj3.foo3).to.equal(subSubObj3.foo3)
    done()
  })
})
