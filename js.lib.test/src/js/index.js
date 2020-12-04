/*
*   js.lib
*
*                           // TODO:
*                           // TODO: tests on other methods.
*   Art Brown, art.brown@qutet.com
*/
// May/31/2020: we are really in a jungle..
// Babel 7 - ReferenceError: regeneratorRuntime is not defined
// https://babeljs.io/docs/en/babel-polyfill
// https://stackoverflow.com/questions/53558916/babel-7-referenceerror-regeneratorruntime-is-not-defined
import '@babel/polyfill';
const u = require('utils'),
  s = require('serializers');
u.isNode
  ? (u['rl'] = s.rl, u['serializers'] = s, u['BinaryTree'] = require('utils.node').BinaryTree)
  : u['$'] = require('jquery');
module.exports = u;
