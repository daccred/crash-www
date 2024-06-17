'use strict';

const scratchVm = require('..');
const assert = require('assert').strict;

assert.strictEqual(scratchVm(), 'Hello from scratchVm');
console.info('scratchVm tests passed');
