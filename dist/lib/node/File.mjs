import { __classPrivateFieldSet, __classPrivateFieldGet } from 'tslib';
import { Blob } from './Blob.mjs';
import 'web-streams-polyfill';
import './isFunction.mjs';
import './blobHelpers.mjs';

var _File_name, _File_lastModified;
/**
 * The **File** interface provides information about files and allows JavaScript to access their content.
 */
class File extends Blob {
    /**
     * Creates a new File instance.
     *
     * @param fileBits An `Array` strings, or [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView), [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) objects, or a mix of any of such objects, that will be put inside the [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File).
     * @param name The name of the file.
     * @param options An options object containing optional attributes for the file.
     */
    constructor(fileBits, name, options = {}) {
        super(fileBits, options);
        /**
         * Returns the name of the file referenced by the File object.
         */
        _File_name.set(this, void 0);
        /**
         * The last modified date of the file as the number of milliseconds since the Unix epoch (January 1, 1970 at midnight). Files without a known last modified date return the current date.
         */
        _File_lastModified.set(this, 0
        /**
         * Creates a new File instance.
         *
         * @param fileBits An `Array` strings, or [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView), [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) objects, or a mix of any of such objects, that will be put inside the [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File).
         * @param name The name of the file.
         * @param options An options object containing optional attributes for the file.
         */
        );
        if (arguments.length < 2) {
            throw new TypeError("Failed to construct 'File': 2 arguments required, "
                + `but only ${arguments.length} present.`);
        }
        __classPrivateFieldSet(this, _File_name, String(name), "f");
        // Simulate WebIDL type casting for NaN value in lastModified option.
        const lastModified = options.lastModified === undefined
            ? Date.now()
            : Number(options.lastModified);
        if (!Number.isNaN(lastModified)) {
            __classPrivateFieldSet(this, _File_lastModified, lastModified, "f");
        }
    }
    static [(_File_name = new WeakMap(), _File_lastModified = new WeakMap(), Symbol.hasInstance)](value) {
        return value instanceof Blob
            && value[Symbol.toStringTag] === 'File'
            && typeof value.name === 'string';
    }
    /**
     * Name of the file referenced by the File object.
     */
    get name() {
        return __classPrivateFieldGet(this, _File_name, "f");
    }
    /* c8 ignore next 3 */
    get webkitRelativePath() {
        return '';
    }
    /**
     * The last modified date of the file as the number of milliseconds since the Unix epoch (January 1, 1970 at midnight). Files without a known last modified date return the current date.
     */
    get lastModified() {
        return __classPrivateFieldGet(this, _File_lastModified, "f");
    }
    get [Symbol.toStringTag]() {
        return 'File';
    }
}

export { File };
