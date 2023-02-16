'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var webStreamsPolyfill = require('web-streams-polyfill');
var node_isFunction = require('./isFunction.cjs');
var node_blobHelpers = require('./blobHelpers.cjs');

/*! Based on fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> & David Frank */
var _Blob_parts, _Blob_type, _Blob_size;
/**
 * The **Blob** object represents a blob, which is a file-like object of immutable, raw data;
 * they can be read as text or binary data, or converted into a ReadableStream
 * so its methods can be used for processing the data.
 */
class Blob {
    /**
     * Returns a new [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object.
     * The content of the blob consists of the concatenation of the values given in the parameter array.
     *
     * @param blobParts An `Array` strings, or [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView), [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) objects, or a mix of any of such objects, that will be put inside the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob).
     * @param options An optional object of type `BlobPropertyBag`.
     */
    constructor(blobParts = [], options = {}) {
        /**
         * An `Array` of [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView) or [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) objects, or a mix of any of such objects, that will be put inside the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob).
         */
        _Blob_parts.set(this, []
        /**
         * Returns the [`MIME type`](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File).
         */
        );
        /**
         * Returns the [`MIME type`](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File).
         */
        _Blob_type.set(this, ''
        /**
         * Returns the size of the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) in bytes.
         */
        );
        /**
         * Returns the size of the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) in bytes.
         */
        _Blob_size.set(this, 0);
        options !== null && options !== void 0 ? options : (options = {});
        if (typeof blobParts !== 'object' || blobParts === null) {
            throw new TypeError("Failed to construct 'Blob': "
                + 'The provided value cannot be converted to a sequence.');
        }
        if (!node_isFunction.isFunction(blobParts[Symbol.iterator])) {
            throw new TypeError("Failed to construct 'Blob': "
                + 'The object must have a callable @@iterator property.');
        }
        if (typeof options !== 'object' && !node_isFunction.isFunction(options)) {
            throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        }
        // Normalize blobParts first
        const encoder = new TextEncoder();
        for (const raw of blobParts) {
            let part;
            if (ArrayBuffer.isView(raw)) {
                part = new Uint8Array(raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength));
            }
            else if (raw instanceof ArrayBuffer) {
                part = new Uint8Array(raw.slice(0));
            }
            else if (raw instanceof Blob) {
                part = raw;
            }
            else {
                part = encoder.encode(String(raw));
            }
            tslib.__classPrivateFieldSet(this, _Blob_size, tslib.__classPrivateFieldGet(this, _Blob_size, "f") + (ArrayBuffer.isView(part) ? part.byteLength : part.size), "f");
            tslib.__classPrivateFieldGet(this, _Blob_parts, "f").push(part);
        }
        const type = options.type === undefined ? '' : String(options.type);
        tslib.__classPrivateFieldSet(this, _Blob_type, /^[\x20-\x7E]*$/.test(type) ? type : '', "f");
    }
    static [(_Blob_parts = new WeakMap(), _Blob_type = new WeakMap(), _Blob_size = new WeakMap(), Symbol.hasInstance)](value) {
        return Boolean(value
            && typeof value === 'object'
            && node_isFunction.isFunction(value.constructor)
            && (node_isFunction.isFunction(value.stream)
                || node_isFunction.isFunction(value.arrayBuffer))
            && /^(Blob|File)$/.test(value[Symbol.toStringTag]));
    }
    /**
     * Returns the [`MIME type`](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File).
     */
    get type() {
        return tslib.__classPrivateFieldGet(this, _Blob_type, "f");
    }
    /**
     * Returns the size of the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) in bytes.
     */
    get size() {
        return tslib.__classPrivateFieldGet(this, _Blob_size, "f");
    }
    /**
     * Creates and returns a new [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object which contains data from a subset of the blob on which it's called.
     *
     * @param start An index into the Blob indicating the first byte to include in the new Blob. If you specify a negative value, it's treated as an offset from the end of the Blob toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is 0. If you specify a value for start that is larger than the size of the source Blob, the returned Blob has size 0 and contains no data.
     * @param end An index into the Blob indicating the first byte that will *not* be included in the new Blob (i.e. the byte exactly at this index is not included). If you specify a negative value, it's treated as an offset from the end of the Blob toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is size.
     * @param contentType The content type to assign to the new Blob; this will be the value of its type property. The default value is an empty string.
     */
    slice(start, end, contentType) {
        return new Blob(node_blobHelpers.sliceBlob(tslib.__classPrivateFieldGet(this, _Blob_parts, "f"), this.size, start, end), {
            type: contentType,
        });
    }
    /**
     * Returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves with a string containing the contents of the blob, interpreted as UTF-8.
     */
    text() {
        var e_1, _a;
        return tslib.__awaiter(this, void 0, void 0, function* () {
            const decoder = new TextDecoder();
            let result = '';
            try {
                for (var _b = tslib.__asyncValues(node_blobHelpers.consumeBlobParts(tslib.__classPrivateFieldGet(this, _Blob_parts, "f"))), _c; _c = yield _b.next(), !_c.done;) {
                    const chunk = _c.value;
                    result += decoder.decode(chunk, { stream: true });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            result += decoder.decode();
            return result;
        });
    }
    /**
     * Returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves with the contents of the blob as binary data contained in an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).
     */
    arrayBuffer() {
        var e_2, _a;
        return tslib.__awaiter(this, void 0, void 0, function* () {
            const view = new Uint8Array(this.size);
            let offset = 0;
            try {
                for (var _b = tslib.__asyncValues(node_blobHelpers.consumeBlobParts(tslib.__classPrivateFieldGet(this, _Blob_parts, "f"))), _c; _c = yield _b.next(), !_c.done;) {
                    const chunk = _c.value;
                    view.set(chunk, offset);
                    offset += chunk.length;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return view.buffer;
        });
    }
    /**
     * Returns a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) which upon reading returns the data contained within the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob).
     */
    stream() {
        const iterator = node_blobHelpers.consumeBlobParts(tslib.__classPrivateFieldGet(this, _Blob_parts, "f"), true);
        return new webStreamsPolyfill.ReadableStream({
            pull(controller) {
                return tslib.__awaiter(this, void 0, void 0, function* () {
                    const { value, done } = yield iterator.next();
                    if (done) {
                        queueMicrotask(() => {
                            controller.close();
                        });
                        return;
                    }
                    controller.enqueue(value);
                });
            },
            cancel() {
                return tslib.__awaiter(this, void 0, void 0, function* () {
                    yield iterator.return();
                });
            },
        });
    }
    get [Symbol.toStringTag]() {
        return 'Blob';
    }
}
// Not sure why, but these properties are enumerable.
// Also fetch-blob defines "size", "type" and "slice" as such
Object.defineProperties(Blob.prototype, {
    type: { enumerable: true },
    size: { enumerable: true },
    slice: { enumerable: true },
    stream: { enumerable: true },
    text: { enumerable: true },
    arrayBuffer: { enumerable: true },
});

exports.Blob = Blob;
