/*
*   utils.js
*                           // need tests on methods.
*
*   Art Brown, art.brown@qutet.com
*/
import assert from 'assert';
const isNode = (new Function("try {return this===global;}catch(e){return false;}"))();
const isBrowser = (new Function("try {return this===window;}catch(e){return false;}"))();
const console = isNode ? global.console : window.console;
const me = this !== undefined
  ? this
  : globalThis !== undefined
    ? globalThis
    : undefined;

const BinarySearchTree = class {}

module.exports = {
  isNode: isNode,
  isBrowser: isBrowser,
  console: console,
  me: me,
  BinarySearchTree: BinarySearchTree,
  assert:assert
};
