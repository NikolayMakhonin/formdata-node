'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var node_File = require('./File.cjs');
require('tslib');
require('./Blob.cjs');
require('web-streams-polyfill');
require('./isFunction.cjs');
require('./blobHelpers.cjs');

/**
 * Checks if given value is a File, Blob or file-look-a-like object.
 *
 * @param value A value to test
 */
const isFile = (value) => value instanceof node_File.File;

exports.isFile = isFile;
