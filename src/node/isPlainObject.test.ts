// Convert to mocha with expect
// import test from 'ava'

import isPlainObject from './isPlainObject'

describe('isPlainObject', function () {
  // test('Returns true when object literal given', t => {
  //   t.true(isPlainObject({}))
  // })
  it('Returns true when object literal given', function () {
    expect(isPlainObject({})).toBe(true)
  })
  // test('Returns true when Object.create(null) result given', t => {
  //   t.true(isPlainObject(Object.create(null)))
  // })
  it('Returns true when Object.create(null) result given', function () {
    expect(isPlainObject(Object.create(null))).toBe(true)
  })
  // test('Returns false when array-like object given', t => {
  //   t.false(isPlainObject([]))
  // })
  it('Returns false when array-like object given', function () {
    expect(isPlainObject([])).toBe(false)
  })
  // test('Returns false when any other non-plain object passed', t => {
  //   class Noop { }
  //
  //   t.false(isPlainObject(new Map()))
  //   t.false(isPlainObject(new Noop()))
  //   t.false(isPlainObject(/[a-z0-9-_]+/i))
  // })
  it('Returns false when any other non-plain object passed', function () {
    class Noop { }
    expect(isPlainObject(new Map())).toBe(false)
    expect(isPlainObject(new Noop())).toBe(false)
    expect(isPlainObject(/[a-z\d-_]+/i)).toBe(false)
  })
  // test('Returns false when scalar type given', t => {
  //   t.false(isPlainObject(null))
  //   t.false(isPlainObject(undefined))
  //   t.false(isPlainObject(true))
  //   t.false(isPlainObject(42))
  //   t.false(isPlainObject('noop'))
  // })
  it('Returns false when scalar type given', function () {
    expect(isPlainObject(null)).toBe(false)
    expect(isPlainObject(undefined)).toBe(false)
    expect(isPlainObject(true)).toBe(false)
    expect(isPlainObject(42)).toBe(false)
    expect(isPlainObject('noop')).toBe(false)
  })
})
