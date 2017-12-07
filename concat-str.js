'use strict'

/*
 * Create a function `concatStr` that takes 2 arguments and concatenate them
 *
 * @notions Functions, Operators
 * @next get
 */

// Your code :
const sco1 = 'ray1'
const sco2 = 'ray2'
const concatStr = (sco1, sco2) => sco1 + sco2
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof concatStr, 'function', 'Should be a function')
assert.strictEqual(concatStr.length, 2, 'Should takes 2 arguments')
assert.strictEqual(concatStr('a', 'b'), 'ab')
assert.strictEqual(concatStr('yolo', 'swag'), 'yoloswag')
// End of tests */
