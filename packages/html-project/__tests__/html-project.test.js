'use strict';

const htmlProject = require('..');
const assert = require('assert').strict;

assert.strictEqual(htmlProject(), 'Hello from htmlProject');
console.info('htmlProject tests passed');
