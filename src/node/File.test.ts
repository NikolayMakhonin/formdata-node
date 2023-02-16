// Convert to mocha with expect
// import test from 'ava'

import {File} from './File'

describe('File', function () {
  // test('Takes a name as the second argument', t => {
  //   const expected = 'file.txt'
  //   const file = new File(['Some content'], expected)
  //
  //   t.is(file.name, expected)
  // })
  it('Takes a name as the second argument', function () {
    const expected = 'file.txt'
    const file = new File(['Some content'], expected)
    expect(file.name).toBe(expected)
  })
  // test('Casts the name argument to string', t => {
  //   // @ts-expect-error
  //   const file = new File(['Some content'], 42)
  //
  //   t.is(file.name, '42')
  // })
  it('Casts the name argument to string', function () {
    // @ts-expect-error
    const file = new File(['Some content'], 42)
    expect(file.name).toBe('42')
  })
  // test('The name property keeps its value after being reassigned', t => {
  //   const expected = 'file.txt'
  //   const file = new File(['Some content'], expected)
  //
  //   // Browsers won't throw errors in this case,
  //   // even though they seem to use the same approach with getters
  //   // to make the property read-only. But in Node.js the reassignment will cause an error.
  //   // Maybe it's platform specific behaviour?
  //   try {
  //     // @ts-expect-error
  //     file.name = 'another-file.txt'
  //   }
  //   catch { /* noop */ }
  //
  //   t.is(file.name, expected)
  // })
  it('The name property keeps its value after being reassigned', function () {
    const expected = 'file.txt'
    const file = new File(['Some content'], expected)
    // Browsers won't throw errors in this case,
    // even though they seem to use the same approach with getters
    // to make the property read-only. But in Node.js the reassignment will cause an error.
    // Maybe it's platform specific behaviour?
    try {
      // @ts-expect-error
      file.name = 'another-file.txt'
    }
    catch { /* noop */ }
    expect(file.name).toBe(expected)
  })
  // test('Has the lastModified field', t => {
  //   const file = new File(['Some content'], 'file.txt')
  //
  //   t.is(typeof file.lastModified, 'number')
  // })
  it('Has the lastModified field', function () {
    const file = new File(['Some content'], 'file.txt')
    expect(typeof file.lastModified).toBe('number')
  })
  // test('The lastModified property keeps its value after being reassigned', t => {
  //   const file = new File(['Some content'], 'file.txt')
  //
  //   const {lastModified: expected} = file
  //
  //   try {
  //     // @ts-expect-error
  //     file.lastModified = Date.now() + 3000
  //   }
  //   catch { /* noop */ }
  //
  //   t.is(file.lastModified, expected)
  // })
  it('The lastModified property keeps its value after being reassigned', function () {
    const file = new File(['Some content'], 'file.txt')
    const {lastModified: expected} = file
    try {
      // @ts-expect-error
      file.lastModified = Date.now() + 3000
    }
    catch { /* noop */ }
    expect(file.lastModified).toBe(expected)
  })
  // test('Takes the lastModified value from options', t => {
  //   const expected = Date.now() + 3000
  //   const file = new File(['Some content'], 'file.txt', {lastModified: expected})
  //
  //   t.is(file.lastModified, expected)
  // })
  it('Takes the lastModified value from options', function () {
    const expected = Date.now() + 3000
    const file = new File(['Some content'], 'file.txt', {lastModified: expected})
    expect(file.lastModified).toBe(expected)
  })
  // test('Converts Date object in lastModified option to a number', t => {
  //   const now = new Date()
  //
  //   // @ts-expect-error
  //   const file = new File(['Some content'], 'file.txt', {lastModified: now})
  //
  //   t.is(file.lastModified, Number(now))
  // })
  it('Converts Date object in lastModified option to a number', function () {
    const now = new Date()
    // @ts-expect-error
    const file = new File(['Some content'], 'file.txt', {lastModified: now})
    expect(file.lastModified).toBe(Number(now))
  })
  // test('Interpretes undefined value in lastModified option as Date.now()', t => {
  //   const lastModified = new File(['Some content'], 'file.txt', {
  //     lastModified: undefined,
  //   }).lastModified - Date.now()
  //
  //   t.true(lastModified <= 0 && lastModified >= -20)
  // })
  it('Interpretes undefined value in lastModified option as Date.now()', function () {
    const lastModified = new File(['Some content'], 'file.txt', {
      lastModified: undefined,
    }).lastModified - Date.now()
    expect(lastModified <= 0 && lastModified >= -20).toBe(true)
  })
  // test('Interpretes true value in lastModified option as 1', t => {
  //   // @ts-expect-error
  //   const file = new File(['Some content'], 'file.txt', {lastModified: true})
  //
  //   t.is(file.lastModified, 1)
  // })
  it('Interpretes true value in lastModified option as 1', function () {
    // @ts-expect-error
    const file = new File(['Some content'], 'file.txt', {lastModified: true})
    expect(file.lastModified).toBe(1)
  })
  // test('Interpretes null value in lastModified option as 0', t => {
  //   const file = new File(['Some content'], 'file.txt', {lastModified: null})
  //
  //   t.is(file.lastModified, 0)
  // })
  it('Interpretes null value in lastModified option as 0', function () {
    const file = new File(['Some content'], 'file.txt', {lastModified: null})
    expect(file.lastModified).toBe(0)
  })
  // test('Interpretes NaN value in lastModified option as 0', t => {
  //   t.plan(3)
  //
  //   const values = ['Not a Number', [], {}]
  //
  //   // I can't really see anything about this in the spec,
  //   // but this is how browsers handle type casting for this option...
  //   values.forEach(lastModified => {
  //     // @ts-expect-error
  //     const file = new File(['Some content'], 'file.txt', {lastModified})
  //
  //     t.is(file.lastModified, 0)
  //   })
  // })
  it('Interpretes NaN value in lastModified option as 0', function () {
    const values = ['Not a Number', [], {}]
    // I can't really see anything about this in the spec,
    // but this is how browsers handle type casting for this option...
    values.forEach(lastModified => {
      // @ts-expect-error
      const file = new File(['Some content'], 'file.txt', {lastModified})
      expect(file.lastModified).toBe(0)
    })
  })
  // test('Throws TypeError when constructed with less than 2 arguments', t => {
  //   // @ts-expect-error
  //   const trap = () => new File(['Some content'])
  //
  //   t.throws(trap, {
  //     instanceOf: TypeError,
  //     message   : "Failed to construct 'File': "
  //       + '2 arguments required, but only 1 present.',
  //   })
  // })
  it('Throws TypeError when constructed with less than 2 arguments', function () {
    // @ts-expect-error
    const trap = () => new File(['Some content'])
    expect(() => trap()).toThrowError(TypeError)
  })
  // test('Throws TypeError when constructed without arguments', t => {
  //   // @ts-expect-error
  //   const trap = () => new File()
  //
  //   t.throws(trap, {
  //     instanceOf: TypeError,
  //     message   : "Failed to construct 'File': "
  //       + '2 arguments required, but only 0 present.',
  //   })
  // })
  it('Throws TypeError when constructed without arguments', function () {
    // @ts-expect-error
    const trap = () => new File()
    expect(() => trap()).toThrowError(TypeError)
  })
})
