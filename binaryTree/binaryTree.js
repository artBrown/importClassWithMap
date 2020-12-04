/*
*   binaryTree.js
*
*   rev 1.0.0 May 31 2020 binaryTree.js
*
*   Art Brown, art.brown@qutet.com
*/
import utils from 'js.lib.test';
const {BinaryTree:BT, serializers:SZ, assert, console, isBrowser:B, isNode:N} = utils,
  $ = B ? $ = utils.$ : null,
  bine = "./data", base = 'btree0.txt', stop1 = 'btree1.txt', stop2 = 'btree2.txt';
if (B) {
  $((async () => await f(0)))();
} else {
  (async () => await f(0))();
}
(async () => {
  const ba = [], sa = [];
  await SZ.readStringFmFile(ba, bine, base);
  await SZ.readStringFmFile(sa, bine, stop2);
  await assert.strictEqual(ba[0], sa[0]);
})().catch(e => console.log(`err: ${e}`));

async function f(n) {
  const bt = new BT(n);
  bt.propagateSeedMethod(bt._nd, 13, BT._d);
  bt.rakeEntryNodeInTree(bt._nd);
  if (N) await bt.writeBinaryTree(bt._nd, bine, stop1);
  else console.log(stop1);
  const bto = new BT();
  bto._nd = await bt.readBinaryTree(bto._nd, bine, stop1);
  if (N) await bt.writeBinaryTree(bt._nd, bine, stop2);
  else console.log(stop2);
}
