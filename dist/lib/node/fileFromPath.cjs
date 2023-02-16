'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var node_fs = require('node:fs');
var promises = require('node:fs/promises');
var node_path = require('node:path');
var DOMException = require('node-domexception');
var node_File = require('./File.cjs');
var node_isPlainObject = require('./isPlainObject.cjs');
var node_isFile = require('./isFile.cjs');
require('./Blob.cjs');
require('web-streams-polyfill');
require('./isFunction.cjs');
require('./blobHelpers.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var DOMException__default = /*#__PURE__*/_interopDefaultLegacy(DOMException);

var _FileFromPath_path, _FileFromPath_start;
const MESSAGE = 'The requested file could not be read, '
    + 'typically due to permission problems that have occurred after a reference '
    + 'to a file was acquired.';
/**
 * Represends an object referencing a file on a disk
 * Based on [`fetch-blob/from.js`](https://github.com/node-fetch/fetch-blob/blob/a3b0d62b9d88e0fa80af2e36f50ce25222535692/from.js#L32-L72) implementation
 *
 * @api private
 */
class FileFromPath {
    constructor(input) {
        _FileFromPath_path.set(this, void 0);
        _FileFromPath_start.set(this, void 0);
        tslib.__classPrivateFieldSet(this, _FileFromPath_path, input.path, "f");
        tslib.__classPrivateFieldSet(this, _FileFromPath_start, input.start || 0, "f");
        this.name = node_path.basename(tslib.__classPrivateFieldGet(this, _FileFromPath_path, "f"));
        this.size = input.size;
        this.lastModified = input.lastModified;
    }
    slice(start, end) {
        return new FileFromPath({
            path: tslib.__classPrivateFieldGet(this, _FileFromPath_path, "f"),
            lastModified: this.lastModified,
            start: tslib.__classPrivateFieldGet(this, _FileFromPath_start, "f") + start,
            size: end - start,
        });
    }
    stream() {
        return tslib.__asyncGenerator(this, arguments, function* stream_1() {
            const { mtimeMs } = yield tslib.__await(promises.stat(tslib.__classPrivateFieldGet(this, _FileFromPath_path, "f")));
            if (mtimeMs > this.lastModified) {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw new DOMException__default["default"](MESSAGE, 'NotReadableError');
            }
            if (this.size) {
                yield tslib.__await(yield* tslib.__asyncDelegator(tslib.__asyncValues(node_fs.createReadStream(tslib.__classPrivateFieldGet(this, _FileFromPath_path, "f"), {
                    start: tslib.__classPrivateFieldGet(this, _FileFromPath_start, "f"),
                    end: tslib.__classPrivateFieldGet(this, _FileFromPath_start, "f") + this.size - 1,
                }))));
            }
        });
    }
    get [(_FileFromPath_path = new WeakMap(), _FileFromPath_start = new WeakMap(), Symbol.toStringTag)]() {
        return 'File';
    }
}
function createFileFromPath(path, { mtimeMs, size }, filenameOrOptions, options = {}) {
    let filename;
    if (node_isPlainObject["default"](filenameOrOptions)) {
        [options, filename] = [filenameOrOptions, undefined];
    }
    else {
        filename = filenameOrOptions;
    }
    const file = new FileFromPath({ path, size, lastModified: mtimeMs });
    if (!filename) {
        filename = file.name;
    }
    return new node_File.File([file], filename, Object.assign(Object.assign({}, options), { lastModified: file.lastModified }));
}
function fileFromPathSync(path, filenameOrOptions, options = {}) {
    const stats = node_fs.statSync(path);
    return createFileFromPath(path, stats, filenameOrOptions, options);
}
function fileFromPath(path, filenameOrOptions, options) {
    return tslib.__awaiter(this, void 0, void 0, function* () {
        const stats = yield promises.stat(path);
        return createFileFromPath(path, stats, filenameOrOptions, options);
    });
}

exports.isFile = node_isFile.isFile;
exports.fileFromPath = fileFromPath;
exports.fileFromPathSync = fileFromPathSync;
