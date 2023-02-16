import { __asyncGenerator, __await, __asyncDelegator, __asyncValues } from 'tslib';
import { isFunction } from './isFunction.mjs';

/*! Based on fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> & David Frank */
const CHUNK_SIZE = 65536; // 64 KiB (same size chrome slice theirs blob into Uint8array's)
// eslint-disable-next-line @typescript-eslint/require-await
function clonePart(part) {
    return __asyncGenerator(this, arguments, function* clonePart_1() {
        const end = part.byteOffset + part.byteLength;
        let position = part.byteOffset;
        while (position !== end) {
            const size = Math.min(end - position, CHUNK_SIZE);
            const chunk = part.buffer.slice(position, position + size);
            position += chunk.byteLength;
            yield yield __await(new Uint8Array(chunk));
        }
    });
}
/**
 * Consumes builtin Node.js Blob that does not have stream method.
 */
/* c8 ignore start */
function consumeNodeBlob(blob) {
    return __asyncGenerator(this, arguments, function* consumeNodeBlob_1() {
        let position = 0;
        while (position !== blob.size) {
            const chunk = blob.slice(position, Math.min(blob.size, position + CHUNK_SIZE));
            const buffer = yield __await(chunk.arrayBuffer());
            position += buffer.byteLength;
            yield yield __await(new Uint8Array(buffer));
        }
    });
}
/* c8 ignore stop */
/**
 * Creates an iterator allowing to go through blob parts and consume their content
 *
 * @param parts blob parts from Blob class
 */
function consumeBlobParts(parts, clone = false) {
    return __asyncGenerator(this, arguments, function* consumeBlobParts_1() {
        for (const part of parts) {
            if (ArrayBuffer.isView(part)) {
                if (clone) {
                    yield __await(yield* __asyncDelegator(__asyncValues(clonePart(part))));
                }
                else {
                    yield yield __await(part);
                }
            }
            else if (isFunction(part.stream)) {
                yield __await(yield* __asyncDelegator(__asyncValues(part.stream()))
                /* c8 ignore start */
                );
                /* c8 ignore start */
            }
            else {
                // Special case for an old Node.js Blob that have no stream() method.
                yield __await(yield* __asyncDelegator(__asyncValues(consumeNodeBlob(part))));
            }
            /* c8 ignore stop */
        }
    });
}
function* sliceBlob(blobParts, blobSize, start = 0, end) {
    end !== null && end !== void 0 ? end : (end = blobSize);
    let relativeStart = start < 0
        ? Math.max(blobSize + start, 0)
        : Math.min(start, blobSize);
    let relativeEnd = end < 0
        ? Math.max(blobSize + end, 0)
        : Math.min(end, blobSize);
    const span = Math.max(relativeEnd - relativeStart, 0);
    let added = 0;
    for (const part of blobParts) {
        if (added >= span) {
            break;
        }
        const partSize = ArrayBuffer.isView(part) ? part.byteLength : part.size;
        if (relativeStart && partSize <= relativeStart) {
            // Skip the beginning and change the relative
            // start & end position as we skip the unwanted parts
            relativeStart -= partSize;
            relativeEnd -= partSize;
        }
        else {
            let chunk;
            if (ArrayBuffer.isView(part)) {
                chunk = part.subarray(relativeStart, Math.min(partSize, relativeEnd));
                added += chunk.byteLength;
            }
            else {
                chunk = part.slice(relativeStart, Math.min(partSize, relativeEnd));
                added += chunk.size;
            }
            relativeEnd -= partSize;
            relativeStart = 0;
            yield chunk;
        }
    }
}

export { consumeBlobParts, sliceBlob };
