'use strict';

const scratchBlocks = require('..');
const assert = require('assert').strict;

assert.strictEqual(scratchBlocks(), 'Hello from scratchBlocks');
console.info('scratchBlocks tests passed');
