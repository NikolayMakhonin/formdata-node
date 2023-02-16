'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable func-names */
/* eslint-disable no-undef, no-restricted-globals */
const globalObject = (function () {
    // new standardized access to the global object
    if (typeof globalThis !== 'undefined') {
        return globalThis;
    }
    // WebWorker specific access
    if (typeof self !== 'undefined') {
        return self;
    }
    return window;
})();
const { FormData, Blob, File } = globalObject;

exports.Blob = Blob;
exports.File = File;
exports.FormData = FormData;
