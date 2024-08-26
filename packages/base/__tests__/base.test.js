'use strict';

const base = require('../src/base');
const assert = require('assert').strict;

assert.strictEqual(base(), 'Hello from base');
console.info('base tests passed');
