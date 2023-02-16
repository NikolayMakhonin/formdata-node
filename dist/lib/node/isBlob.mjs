import { Blob } from './Blob.mjs';
import 'tslib';
import 'web-streams-polyfill';
import './isFunction.mjs';
import './blobHelpers.mjs';

const isBlob = (value) => value instanceof Blob;

export { isBlob };
