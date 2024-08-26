'use strict';

const reactProject = require('..');
const assert = require('assert').strict;

assert.strictEqual(reactProject(), 'Hello from reactProject');
console.info('reactProject tests passed');
