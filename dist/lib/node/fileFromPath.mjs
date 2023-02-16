import { __awaiter, __classPrivateFieldSet, __classPrivateFieldGet, __asyncGenerator, __await, __asyncDelegator, __asyncValues } from 'tslib';
import { statSync, createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { basename } from 'node:path';
import DOMException from 'node-domexception';
import { File } from './File.mjs';
import isPlainObject from './isPlainObject.mjs';
export { isFile } from './isFile.mjs';
import './Blob.mjs';
import 'web-streams-polyfill';
import './isFunction.mjs';
import './blobHelpers.mjs';

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
        __classPrivateFieldSet(this, _FileFromPath_path, input.path, "f");
        __classPrivateFieldSet(this, _FileFromPath_start, input.start || 0, "f");
        this.name = basename(__classPrivateFieldGet(this, _FileFromPath_path, "f"));
        this.size = input.size;
        this.lastModified = input.lastModified;
    }
    slice(start, end) {
        return new FileFromPath({
            path: __classPrivateFieldGet(this, _FileFromPath_path, "f"),
            lastModified: this.lastModified,
            start: __classPrivateFieldGet(this, _FileFromPath_start, "f") + start,
            size: end - start,
        });
    }
    stream() {
        return __asyncGenerator(this, arguments, function* stream_1() {
            const { mtimeMs } = yield __await(stat(__classPrivateFieldGet(this, _FileFromPath_path, "f")));
            if (mtimeMs > this.lastModified) {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw new DOMException(MESSAGE, 'NotReadableError');
            }
            if (this.size) {
                yield __await(yield* __asyncDelegator(__asyncValues(createReadStream(__classPrivateFieldGet(this, _FileFromPath_path, "f"), {
                    start: __classPrivateFieldGet(this, _FileFromPath_start, "f"),
                    end: __classPrivateFieldGet(this, _FileFromPath_start, "f") + this.size - 1,
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
    if (isPlainObject(filenameOrOptions)) {
        [options, filename] = [filenameOrOptions, undefined];
    }
    else {
        filename = filenameOrOptions;
    }
    const file = new FileFromPath({ path, size, lastModified: mtimeMs });
    if (!filename) {
        filename = file.name;
    }
    return new File([file], filename, Object.assign(Object.assign({}, options), { lastModified: file.lastModified }));
}
function fileFromPathSync(path, filenameOrOptions, options = {}) {
    const stats = statSync(path);
    return createFileFromPath(path, stats, filenameOrOptions, options);
}
function fileFromPath(path, filenameOrOptions, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = yield stat(path);
        return createFileFromPath(path, stats, filenameOrOptions, options);
    });
}

export { fileFromPath, fileFromPathSync };
