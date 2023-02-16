// Convert to mocha with expect
// import test from 'ava'

import {Blob} from './Blob'
import {File} from './File'

describe('Blob', function () {
  // test('Blob object is recognized as Blob', t => {
  //   const blob = new Blob()
  //
  //   t.true(blob instanceof Blob)
  // })
  it('Blob object is recognized as Blob', function () {
    const blob = new Blob()
    expect(blob instanceof Blob).toBe(true)
  })
  // test('Blob object is not recognized as File', t => {
  //   const blob = new Blob()
  //
  //   t.false(blob instanceof File)
  // })
  it('Blob object is not recognized as File', function () {
    const blob = new Blob()
    expect(blob instanceof File).toBe(false)
  })
  // test('Blob-ish object is recognized as Blob', t => {
  //   const blob = {
  //     [Symbol.toStringTag]: 'Blob',
  //     stream() { },
  //   }
  //
  //   t.true(blob instanceof Blob)
  // })
  it('Blob-ish object is recognized as Blob', function () {
    const blob = {
      [Symbol.toStringTag]: 'Blob',
      stream() { },
    }
    expect(blob instanceof Blob).toBe(true)
  })
  // test(
  //   'Blob-ish objects with only arrayBuffer method is recognized as Blob',
  //
  //   t => {
  //     const blobAlike = {
  //       arrayBuffer() { },
  //       [Symbol.toStringTag]: 'Blob',
  //     }
  //
  //     t.true(blobAlike instanceof Blob)
  //   },
  // )
  it('Blob-ish objects with only arrayBuffer method is recognized as Blob', function () {
    const blobAlike = {
      arrayBuffer() { },
      [Symbol.toStringTag]: 'Blob',
    }
    expect(blobAlike instanceof Blob).toBe(true)
  })
  // test('Blob-ish object is not recognized as File', t => {
  //   const blob = {
  //     [Symbol.toStringTag]: 'Blob',
  //     stream() { },
  //   }
  //
  //   t.false(blob instanceof File)
  // })
  it('Blob-ish object is not recognized as File', function () {
    const blob = {
      [Symbol.toStringTag]: 'Blob',
      stream() { },
    }
    expect(blob instanceof File).toBe(false)
  })
  // test(
  //   'Blob-ish objects with only arrayBuffer method is not recognized as File',
  //
  //   t => {
  //     const blobAlike = {
  //       arrayBuffer() { },
  //       [Symbol.toStringTag]: 'Blob',
  //     }
  //
  //     t.false(blobAlike instanceof File)
  //   },
  // )
  it('Blob-ish objects with only arrayBuffer method is not recognized as File', function () {
    const blobAlike = {
      arrayBuffer() { },
      [Symbol.toStringTag]: 'Blob',
    }
    expect(blobAlike instanceof File).toBe(false)
  })
  // test('File is recognized as Blob instance', t => {
  //   const file = new File([], 'file.txt')
  //
  //   t.true(file instanceof Blob)
  // })
  it('File is recognized as Blob instance', function () {
    const file = new File([], 'file.txt')
    expect(file instanceof Blob).toBe(true)
  })
  // test('File is recognized as File instance', t => {
  //   const file = new File([], 'file.txt')
  //
  //   t.true(file instanceof File)
  // })
  it('File is recognized as File instance', function () {
    const file = new File([], 'file.txt')
    expect(file instanceof File).toBe(true)
  })
  // test('File-ish object is recognized as Blob', t => {
  //   const file = {
  //     name                : '',
  //     [Symbol.toStringTag]: 'File',
  //     stream() { },
  //   }
  //
  //   t.true(file instanceof Blob)
  // })
  it('File-ish object is recognized as Blob', function () {
    const file = {
      name                : '',
      [Symbol.toStringTag]: 'File',
      stream() { },
    }
    expect(file instanceof Blob).toBe(true)
  })
  // test('File-ish object is recognized as File', t => {
  //   const file = {
  //     name                : '',
  //     [Symbol.toStringTag]: 'File',
  //     stream() { },
  //   }
  //
  //   t.true(file instanceof File)
  // })
  it('File-ish object is recognized as File', function () {
    const file = {
      name                : '',
      [Symbol.toStringTag]: 'File',
      stream() { },
    }
    expect(file instanceof File).toBe(true)
  })
})
