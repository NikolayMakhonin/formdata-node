'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var node_Blob = require('./Blob.cjs');
require('tslib');
require('web-streams-polyfill');
require('./isFunction.cjs');
require('./blobHelpers.cjs');

const isBlob = (value) => value instanceof node_Blob.Blob;

exports.isBlob = isBlob;
