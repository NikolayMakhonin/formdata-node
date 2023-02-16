// Convert to mocha with expect
// import test from 'ava'
// import {ReadableStream} from 'web-streams-polyfill'
import {ReadableStream} from 'web-streams-polyfill'
// import {Blob} from './Blob'
import {Blob} from './Blob'
describe('Blob', function () {
  // test('Constructor creates a new Blob when called without arguments', t => {
  //   const blob = new Blob()
  //
  //   t.true(blob instanceof Blob)
  // })
  it('Constructor creates a new Blob when called without arguments', function () {
    const blob = new Blob()
    expect(blob instanceof Blob).toBe(true)
  })
  // test('Empty Blob returned by Blob constructor has the size of 0', t => {
  //   const blob = new Blob()
  //
  //   t.is(blob.size, 0)
  // })
  it('Empty Blob returned by Blob constructor has the size of 0', function () {
    const blob = new Blob()
    expect(blob.size).toBe(0)
  })
  // test('The size property is read-only', t => {
  //   const blob = new Blob()
  //
  //   try {
  //     // @ts-expect-error
  //     blob.size = 42
  //   }
  //   catch { /* noop */ }
  //
  //   t.is(blob.size, 0)
  // })
  it('The size property is read-only', function () {
    const blob = new Blob()
    try {
      // @ts-expect-error
      blob.size = 42
    }
    catch { /* noop */ }
    expect(blob.size).toBe(0)
  })
  // test('The size property cannot be removed', t => {
  //   const blob = new Blob()
  //
  //   try {
  //     // @ts-expect-error
  //     delete blob.size
  //   }
  //   catch { /* noop */ }
  //
  //   t.true('size' in blob)
  // })
  it('The size property cannot be removed', function () {
    const blob = new Blob()
    try {
      // @ts-expect-error
      delete blob.size
    }
    catch { /* noop */ }
    expect('size' in blob).toBe(true)
  })
  // test('Blob type is an empty string by default', t => {
  //   const blob = new Blob()
  //
  //   t.is(blob.type, '')
  // })
  it('Blob type is an empty string by default', function () {
    const blob = new Blob()
    expect(blob.type).toBe('')
  })
  // test('The type property is read-only', t => {
  //   const expected = 'text/plain'
  //   const blob = new Blob([], {type: expected})
  //
  //   try {
  //     // @ts-expect-error
  //     blob.type = 'application/json'
  //   }
  //   catch { /* noop */ }
  //
  //   t.is(blob.type, expected)
  // })
  it('The type property is read-only', function () {
    const expected = 'text/plain'
    const blob = new Blob([], {type: expected})
    try {
      // @ts-expect-error
      blob.type = 'application/json'
    }
    catch { /* noop */ }
    expect(blob.type).toBe(expected)
  })
  // test('The type property cannot be removed', t => {
  //   const blob = new Blob()
  //
  //   try {
  //     // @ts-expect-error
  //     delete blob.type
  //   }
  //   catch { /* noop */ }
  //
  //   t.true('type' in blob)
  // })
  it('The type property cannot be removed', function () {
    const blob = new Blob()
    try {
      // @ts-expect-error
      delete blob.type
    }
    catch { /* noop */ }
    expect('type' in blob).toBe(true)
  })
  // test(
  //   'Constructor throws an error when first argument is not an object',
  //
  //   t => {
  //     const rounds: unknown[] = [null, true, false, 0, 1, 1.5, 'FAIL']
  //
  //     rounds.forEach(round => {
  //       // @ts-expect-error
  //       const trap = () => new Blob(round)
  //
  //       t.throws(trap, {
  //         instanceOf: TypeError,
  //         message   : "Failed to construct 'Blob': "
  //           + 'The provided value cannot be converted to a sequence.',
  //       })
  //     })
  //   },
  // )
  it('Constructor throws an error when first argument is not an object', function () {
    const rounds: unknown[] = [null, true, false, 0, 1, 1.5, 'FAIL']
    rounds.forEach(round => {
      // @ts-expect-error
      const trap = () => new Blob(round)
      expect(trap).toThrow(new TypeError(`Failed to construct 'Blob': The provided value cannot be converted to a sequence.`))
    })
  })
  // test(
  //   'Constructor throws an error when first argument is not an iterable object',
  //
  //   t => {
  //     // eslint-disable-next-line prefer-regex-literals
  //     const rounds = [new Date(), new RegExp(''), {}, {'0': 'FAIL', length: 1}]
  //
  //     rounds.forEach(round => {
  //       // @ts-expect-error
  //       const trap = () => new Blob(round)
  //
  //       t.throws(trap, {
  //         instanceOf: TypeError,
  //         message   : "Failed to construct 'Blob': "
  //           + 'The object must have a callable @@iterator property.',
  //       })
  //     })
  //   },
  // )
  it('Constructor throws an error when first argument is not an iterable object', function () {
    // eslint-disable-next-line prefer-regex-literals
    const rounds = [new Date(), new RegExp(''), {}, {'0': 'FAIL', length: 1}]
    rounds.forEach(round => {
      // @ts-expect-error
      const trap = () => new Blob(round)
      expect(trap).toThrow(new TypeError(`Failed to construct 'Blob': The object must have a callable @@iterator property.`))
    })
  })
  // test('Creates a new Blob from an array of strings', async t => {
  //   const source = ['one', 'two', 'three']
  //   const blob = new Blob(source)
  //
  //   t.is(await blob.text(), source.join(''))
  // })
  it('Creates a new Blob from an array of strings', async function () {
    const source = ['one', 'two', 'three']
    const blob = new Blob(source)
    expect(await blob.text()).toBe(source.join(''))
  })
  // test('Creates a new Blob from an array of Uint8Array', async t => {
  //   const encoder = new TextEncoder()
  //   const source = ['one', 'two', 'three']
  //
  //   const blob = new Blob(source.map(part => encoder.encode(part)))
  //
  //   t.is(await blob.text(), source.join(''))
  // })
  it('Creates a new Blob from an array of Uint8Array', async function () {
    const encoder = new TextEncoder()
    const source = ['one', 'two', 'three']
    const blob = new Blob(source.map(part => encoder.encode(part)))
    expect(await blob.text()).toBe(source.join(''))
  })
  // test('Creates a new Blob from an array of ArrayBuffer', async t => {
  //   const encoder = new TextEncoder()
  //   const source = ['one', 'two', 'three']
  //
  //   const blob = new Blob(source.map(part => encoder.encode(part).buffer))
  //
  //   t.is(await blob.text(), source.join(''))
  // })
  it('Creates a new Blob from an array of ArrayBuffer', async function () {
    const encoder = new TextEncoder()
    const source = ['one', 'two', 'three']
    const blob = new Blob(source.map(part => encoder.encode(part).buffer))
    expect(await blob.text()).toBe(source.join(''))
  })
  // test('Creates a new Blob from an array of Blob', async t => {
  //   const source = ['one', 'two', 'three']
  //
  //   const blob = new Blob(source.map(part => new Blob([part])))
  //
  //   t.is(await blob.text(), source.join(''))
  // })
  it('Creates a new Blob from an array of Blob', async function () {
    const source = ['one', 'two', 'three']
    const blob = new Blob(source.map(part => new Blob([part])))
    expect(await blob.text()).toBe(source.join(''))
  })
  // test('Accepts a String object as a sequence', async t => {
  //   const expected = 'abc'
  //
  //   // eslint-disable-next-line no-new-wrappers
  //   const blob = new Blob(new String(expected))
  //
  //   t.is(await blob.text(), expected)
  // })
  it('Accepts a String object as a sequence', async function () {
    const expected = 'abc'
    // eslint-disable-next-line no-new-wrappers
    const blob = new Blob(new String(expected))
    expect(await blob.text()).toBe(expected)
  })
  // test('Accepts Uint8Array as a sequence', async t => {
  //   const expected = [1, 2, 3]
  //   const blob = new Blob(new Uint8Array(expected))
  //
  //   t.is(await blob.text(), expected.join(''))
  // })
  it('Accepts Uint8Array as a sequence', async function () {
    const expected = [1, 2, 3]
    const blob = new Blob(new Uint8Array(expected))
    expect(await blob.text()).toBe(expected.join(''))
  })
  // test('Accepts iterable object as a sequence', async t => {
  //   const blob = new Blob({[Symbol.iterator]: Array.prototype[Symbol.iterator]})
  //
  //   t.is(blob.size, 0)
  //   t.is(await blob.text(), '')
  // })
  it('Accepts iterable object as a sequence', async function () {
    const blob = new Blob({[Symbol.iterator]: Array.prototype[Symbol.iterator]})
    expect(blob.size).toBe(0)
    expect(await blob.text()).toBe('')
  })
  // test('Constructor reads blobParts from iterable object', async t => {
  //   const source = ['one', 'two', 'three']
  //   const expected = source.join('')
  //
  //   const blob = new Blob({
  //     *[Symbol.iterator]() {
  //       yield* source
  //     },
  //   })
  //
  //   t.is(blob.size, new TextEncoder().encode(expected).byteLength)
  //   t.is(await blob.text(), expected)
  // })
  it('Constructor reads blobParts from iterable object', async function () {
    const source = ['one', 'two', 'three']
    const expected = source.join('')
    const blob = new Blob({
      *[Symbol.iterator]() {
        yield* source
      },
    })
    expect(blob.size).toBe(new TextEncoder().encode(expected).byteLength)
    expect(await blob.text()).toBe(expected)
  })
  // test('Blob has the size measured from the blobParts', t => {
  //   const source = ['one', 'two', 'three']
  //   const expected = new TextEncoder().encode(source.join('')).byteLength
  //
  //   const blob = new Blob(source)
  //
  //   t.is(blob.size, expected)
  // })
  it('Blob has the size measured from the blobParts', function () {
    const source = ['one', 'two', 'three']
    const expected = new TextEncoder().encode(source.join('')).byteLength
    const blob = new Blob(source)
    expect(blob.size).toBe(expected)
  })
  // test('Accepts type for Blob as an option in the second argument', t => {
  //   const expected = 'text/markdown'
  //
  //   const blob = new Blob(['Some *Markdown* content'], {type: expected})
  //
  //   t.is(blob.type, expected)
  // })
  it('Accepts type for Blob as an option in the second argument', function () {
    const expected = 'text/markdown'
    const blob = new Blob(['Some *Markdown* content'], {type: expected})
    expect(blob.type).toBe(expected)
  })
  // test('Casts elements of the blobPart array to a string', async t => {
  //   const source: unknown[] = [
  //     null,
  //     undefined,
  //     true,
  //     false,
  //     0,
  //     1,
  //
  //     // eslint-disable-next-line no-new-wrappers
  //     new String('string object'),
  //
  //     [],
  //     {'0': 'FAIL', length: 1},
  //     {toString() {
  //       return 'stringA'
  //     }},
  //     {toString: undefined,
  //       valueOf() {
  //         return 'stringB'
  //       }},
  //   ]
  //
  //   const expected = source.map(element => String(element)).join('')
  //
  //   const blob = new Blob(source)
  //
  //   t.is(await blob.text(), expected)
  // })
  it('Casts elements of the blobPart array to a string', async function () {
    const source: unknown[] = [
      null,
      undefined,
      true,
      false,
      0,
      1,

      // eslint-disable-next-line no-new-wrappers
      new String('string object'),
      [],

      {'0': 'FAIL', length: 1},
      {toString() {
        return 'stringA'
      }},
      {toString: undefined,
        valueOf() {
          return 'stringB'
        }},
    ]
    const expected = source.map(element => String(element)).join('')
    const blob = new Blob(source)
    expect(await blob.text()).toBe(expected)
  })
  // test('undefined value has no affect on property bag argument', t => {
  //   const blob = new Blob([], undefined)
  //
  //   t.is(blob.type, '')
  // })
  it('undefined value has no affect on property bag argument', function () {
    const blob = new Blob([], undefined)
    expect(blob.type).toBe('')
  })
  // test('null value has no affect on property bag argument', t => {
  //   const blob = new Blob([], null)
  //
  //   t.is(blob.type, '')
  // })
  it('null value has no affect on property bag argument', function () {
    const blob = new Blob([], null)
    expect(blob.type).toBe('')
  })
  // test('Invalid type in property bag will result in an empty string', t => {
  //   const blob = new Blob([], {type: '\u001Ftext/plain'})
  //
  //   t.is(blob.type, '')
  // })
  it('Invalid type in property bag will result in an empty string', function () {
    const blob = new Blob([], {type: '\u001Ftext/plain'})
    expect(blob.type).toBe('')
  })
  // test(
  //   'Throws an error if invalid property bag passed',
  //
  //   t => {
  //     const rounds = [
  //       123,
  //       123.4,
  //       true,
  //       false,
  //       'FAIL',
  //     ]
  //
  //     rounds.forEach(round => {
  //       // @ts-expect-error
  //       const trap = () => new Blob([], round)
  //
  //       t.throws(trap, {
  //         instanceOf: TypeError,
  //         message   : "Failed to construct 'Blob': "
  //           + 'parameter 2 cannot convert to dictionary.',
  //       })
  //     })
  //   },
  // )
  it('Throws an error if invalid property bag passed', function () {
    const rounds = [
      123,
      123.4,
      true,
      false,
      'FAIL',
    ]
    rounds.forEach(round => {
      // @ts-expect-error
      const trap = () => new Blob([], round)
      expect(trap).toThrowError(TypeError)
    })
  })
  // test('.slice() a new blob when called without arguments', async t => {
  //   const blob = new Blob(['a', 'b', 'c'])
  //   const sliced = blob.slice()
  //
  //   t.is(sliced.size, blob.size)
  //   t.is(await sliced.text(), await blob.text())
  // })
  it('.slice() a new blob when called without arguments', async function () {
    const blob = new Blob(['a', 'b', 'c'])
    const sliced = blob.slice()
    expect(sliced.size).toBe(blob.size)
    expect(await sliced.text()).toBe(await blob.text())
  })
  // test('.slice() an empty blob with the start and the end set to 0', async t => {
  //   const blob = new Blob(['a', 'b', 'c'])
  //   const sliced = blob.slice(0, 0)
  //
  //   t.is(sliced.size, 0)
  //   t.is(await sliced.text(), '')
  // })
  it('.slice() an empty blob with the start and the end set to 0', async function () {
    const blob = new Blob(['a', 'b', 'c'])
    const sliced = blob.slice(0, 0)
    expect(sliced.size).toBe(0)
    expect(await sliced.text()).toBe('')
  })
  // test('.slice() slices the Blob within given range', async t => {
  //   const text = 'The MIT License'
  //   const blob = new Blob([text]).slice(0, 3)
  //
  //   t.is(await blob.text(), 'The')
  // })
  it('.slice() slices the Blob within given range', async function () {
    const text = 'The MIT License'
    const blob = new Blob([text]).slice(0, 3)
    expect(await blob.text()).toBe('The')
  })
  // test('.slice() slices the Blob from arbitary start', async t => {
  //   const text = 'The MIT License'
  //   const blob = new Blob([text]).slice(4, 15)
  //
  //   t.is(await blob.text(), 'MIT License')
  // })
  it('.slice() slices the Blob from arbitary start', async function () {
    const text = 'The MIT License'
    const blob = new Blob([text]).slice(4, 15)
    expect(await blob.text()).toBe('MIT License')
  })
  // test(
  //   '.slice() slices the Blob from the end when start argument is negative',
  //
  //   async t => {
  //     const text = 'The MIT License'
  //     const blob = new Blob([text]).slice(-7)
  //
  //     t.is(await blob.text(), 'License')
  //   },
  // )
  it('.slice() slices the Blob from the end when start argument is negative', async function () {
    const text = 'The MIT License'
    const blob = new Blob([text]).slice(-7)
    expect(await blob.text()).toBe('License')
  })
  // test(
  //   '.slice() slices the Blob from the start when end argument is negative',
  //
  //   async t => {
  //     const text = 'The MIT License'
  //     const blob = new Blob([text]).slice(0, -8)
  //
  //     t.is(await blob.text(), 'The MIT')
  //   },
  // )
  it('.slice() slices the Blob from the start when end argument is negative', async function () {
    const text = 'The MIT License'
    const blob = new Blob([text]).slice(0, -8)
    expect(await blob.text()).toBe('The MIT')
  })
  // test('.slice() slices Blob in blob parts', async t => {
  //   const text = 'The MIT License'
  //   const blob = new Blob([new Blob([text]), new Blob([text])]).slice(8, 18)
  //
  //   t.is(await blob.text(), 'LicenseThe')
  // })
  it('.slice() slices Blob in blob parts', async function () {
    const text = 'The MIT License'
    const blob = new Blob([new Blob([text]), new Blob([text])]).slice(8, 18)
    expect(await blob.text()).toBe('LicenseThe')
  })
  // test('.slice() slices within multiple parts', async t => {
  //   const blob = new Blob(['Hello', 'world']).slice(4, 7)
  //
  //   t.is(await blob.text(), 'owo')
  // })
  it('.slice() slices within multiple parts', async function () {
    const blob = new Blob(['Hello', 'world']).slice(4, 7)
    expect(await blob.text()).toBe('owo')
  })
  // test('.slice() throws away unwanted parts', async t => {
  //   const blob = new Blob(['a', 'b', 'c']).slice(1, 2)
  //
  //   t.is(await blob.text(), 'b')
  // })
  it('.slice() throws away unwanted parts', async function () {
    const blob = new Blob(['a', 'b', 'c']).slice(1, 2)
    expect(await blob.text()).toBe('b')
  })
  // test('.slice() takes type as the 3rd argument', t => {
  //   const expected = 'text/plain'
  //   const blob = new Blob([], {type: 'text/html'}).slice(0, 0, expected)
  //
  //   t.is(blob.type, expected)
  // })
  it('.slice() takes type as the 3rd argument', function () {
    const expected = 'text/plain'
    const blob = new Blob([], {type: 'text/html'}).slice(0, 0, expected)
    expect(blob.type).toBe(expected)
  })
  // test(
  //   '.text() returns a the Blob content as string when awaited',
  //
  //   async t => {
  //     const blob = new Blob([
  //       'a',
  //       new TextEncoder().encode('b'),
  //       new Blob(['c']),
  //       new TextEncoder().encode('d').buffer,
  //     ])
  //
  //     t.is(await blob.text(), 'abcd')
  //   },
  // )
  it('.text() returns a the Blob content as string when awaited', async function () {
    const blob = new Blob([
      'a',
      new TextEncoder().encode('b'),
      new Blob(['c']),
      new TextEncoder().encode('d').buffer,
    ])
    expect(await blob.text()).toBe('abcd')
  })
  // test(
  //   '.arrayBuffer() returns the Blob content as ArrayBuffer when awaited',
  //
  //   async t => {
  //     const source = new TextEncoder().encode('abc')
  //     const blob = new Blob([source])
  //
  //     t.true(Buffer.from(await blob.arrayBuffer()).equals(source))
  //   },
  // )
  it('.arrayBuffer() returns the Blob content as ArrayBuffer when awaited', async function () {
    const source = new TextEncoder().encode('abc')
    const blob = new Blob([source])
    expect(Buffer.from(await blob.arrayBuffer()).equals(source)).toBe(true)
  })
  // test('.stream() returns ReadableStream', t => {
  //   const stream = new Blob().stream()
  //
  //   t.true(stream instanceof ReadableStream)
  // })
  it('.stream() returns ReadableStream', function () {
    const stream = new Blob().stream()
    expect(stream instanceof ReadableStream).toBe(true)
  })
  // test('.stream() allows to read Blob as a stream', async t => {
  //   const source = Buffer.from('Some content')
  //
  //   const stream = new Blob([source]).stream()
  //
  //   const chunks: Uint8Array[] = []
  //   for await (const chunk of stream) {
  //     chunks.push(chunk)
  //   }
  //
  //   t.true(Buffer.concat(chunks).equals(source))
  // })
  it('.stream() allows to read Blob as a stream', async function () {
    const source = Buffer.from('Some content')
    const stream = new Blob([source]).stream()
    const chunks: Uint8Array[] = []
    for await (const chunk of stream) {
      chunks.push(chunk)
    }
    expect(Buffer.concat(chunks).equals(source)).toBe(true)
  })
  // test('.stream() returned ReadableStream can be cancelled', async t => {
  //   const stream = new Blob(['Some content']).stream()
  //
  //   // Cancel the stream before start reading, or this will throw an error
  //   await stream.cancel()
  //
  //   const reader = stream.getReader()
  //
  //   const {done, value: chunk} = await reader.read()
  //
  //   t.true(done)
  //   t.is(chunk, undefined)
  // })
  it('.stream() returned ReadableStream can be cancelled', async function () {
    const stream = new Blob(['Some content']).stream()
    // Cancel the stream before start reading, or this will throw an error
    await stream.cancel()
    const reader = stream.getReader()
    const {done, value: chunk} = await reader.read()
    expect(done).toBe(true)
    expect(chunk).toBe(undefined)
  })
})
