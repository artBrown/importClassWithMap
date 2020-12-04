/*
*   utils.node.js
*                           // need tests on methods.
*
*   Art Brown, art.brown@qutet.com
*/
import serializers from "serializers";
const BT = (() => {
  return class {
    static _a = 1;
    static _d = -1;
    static _u = 0;
    constructor(e = null) {
      this._nd = new BT.Nd(e);
    }
    static Nd = class {
      constructor(e) {
        this._l = null;
        this._r = null;
        this._e = e;
      }
    };
    appendEntryInNodeTree(nd, e) {
      if (nd === undefined)
        this._nd = this.appendEntryInNodeTree(this._nd, e);
      if (nd === null) {
        nd = new BT.Nd(e);
      } else {
        if (nd._e <= e) {
          nd._r = this.appendEntryInNodeTree(nd._r, e);
        } else {
          nd._l = this.appendEntryInNodeTree(nd._l, e);
        }
      }
      return nd;
    }
    rakeEntryNodeInTree(nd, d) {
      if (d === undefined)
        return this.rakeEntryNodeInTree(nd, 0);
      else if (nd === null)
        return null;
      else {
        if (nd._r !== null)
          this.rakeEntryNodeInTree(nd._r, d + 1);
        if (nd._l !== null)
          this.rakeEntryNodeInTree(nd._l, d + 1);
        console.log(this.genIndentSpaces(d) + '' + nd._e);
      }
      return null;
    }
    propagateSeedMethod(nd, sd, ascDsc) {
      if (ascDsc === BT._u)
        this.appendEntryInNodeTree(nd, sd);
      if (sd < 0 && ascDsc === BT._a || 0 < sd && ascDsc === BT._d) {
        this.appendEntryInNodeTree(nd, sd);
        if (ascDsc === BT._a) sd++; else sd--;
        this.propagateSeedMethod(nd, sd, ascDsc);
      }
    }
    genIndentSpaces(d) {
      let i = "";
      while (d-- !== 0) i += " ";
      return i;
    }
    async writeBinaryTree(nd, base, serd) {
      const s = this.writeBinaryTreeNode(nd, "");
      try {
        await serializers.writeStringToFile(s, base, serd);
      } catch (e) {
        console.log(e);
      }
    }
    writeBinaryTreeNode(nd, s) {
      if (nd === null) {
        s += "# ";
      } else {
        s += nd._e.toString() + " ";
        s = this.writeBinaryTreeNode(nd._l, s);
        s = this.writeBinaryTreeNode(nd._r, s);
      }
      return s;
    }
    async readBinaryTree(spon, base, serd) {
      const alFlat = [];
      try {
        await serializers.readStringFmFile(alFlat, base, serd);
      } catch (e) {
        console.log(e);
      }
      const flat = alFlat[0];
      const m = flat ? flat.match(/(?:\d+|#)\s/g) : undefined;
      const tick = [];
      if (m)
        m.forEach(e => tick.push(e));
      const ti = serializers.makeIterator(tick);
      const rg = new RegExp(/-?[0-9]*\.?[0-9]+\s/g);
      spon = this.readBinaryTreeNode(spon, ti, rg);
      return spon;
    }
    readBinaryTreeNode(spon, ti, rg) {
      if (!ti.hasNext()) return spon;
      const chad = ti.next();
      const m = chad.match(rg);
      let e;
      if (m)
        e = parseInt(chad.trim());
      else return spon;
      spon = new BT.Nd(e);
      spon._l = this.readBinaryTreeNode(spon._l, ti, rg);
      spon._r = this.readBinaryTreeNode(spon._r, ti, rg);
      return spon;
    }
  };
})();
module.exports = {
  BinaryTree: BT,
};
