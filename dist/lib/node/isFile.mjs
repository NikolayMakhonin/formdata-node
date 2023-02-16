import { File } from './File.mjs';
import 'tslib';
import './Blob.mjs';
import 'web-streams-polyfill';
import './isFunction.mjs';
import './blobHelpers.mjs';

/**
 * Checks if given value is a File, Blob or file-look-a-like object.
 *
 * @param value A value to test
 */
const isFile = (value) => value instanceof File;

export { isFile };
