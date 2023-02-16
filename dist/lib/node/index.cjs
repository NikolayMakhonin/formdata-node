'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var node_FormData = require('./FormData.cjs');
var node_Blob = require('./Blob.cjs');
var node_File = require('./File.cjs');
require('tslib');
require('./isFunction.cjs');
require('./isBlob.cjs');
require('web-streams-polyfill');
require('./blobHelpers.cjs');
require('./isFile.cjs');



exports.FormData = node_FormData.FormData;
exports.Blob = node_Blob.Blob;
exports.File = node_File.File;
