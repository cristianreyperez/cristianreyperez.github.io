import "./chunk-BUSYA2B4.js";

// node_modules/@flowko/tw-to-css/dist/index.mjs.js
var Ap = Object.create;
var gr = Object.defineProperty;
var Ep = Object.getOwnPropertyDescriptor;
var Cp = Object.getOwnPropertyNames;
var _p = Object.getPrototypeOf;
var Tp = Object.prototype.hasOwnProperty;
var Ye = (t, e) => () => (t && (e = t(t = 0)), e);
var S = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var dt = (t, e) => {
  for (var r in e) gr(t, r, { get: e[r], enumerable: true });
};
var Ca = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of Cp(e)) !Tp.call(t, i) && i !== r && gr(t, i, { get: () => e[i], enumerable: !(n = Ep(e, i)) || n.enumerable });
  return t;
};
var Y = (t, e, r) => (r = t != null ? Ap(_p(t)) : {}, Ca(e || !t || !t.__esModule ? gr(r, "default", { value: t, enumerable: true }) : r, t));
var _e = (t) => Ca(gr({}, "__esModule", { value: true }), t);
var Pa;
var Ta = Ye(() => {
  Pa = {};
});
var Ra = {};
dt(Ra, { default: () => ht });
var ht;
var yr = Ye(() => {
  Ta();
  ht = { readFileSync: () => Pa };
});
var Da = S((yb, Ia) => {
  "use strict";
  var qn = class {
    constructor(e = {}) {
      if (!(e.maxSize && e.maxSize > 0)) throw new TypeError("`maxSize` must be a number greater than 0");
      this.maxSize = e.maxSize, this.onEviction = e.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(), this._size = 0;
    }
    _set(e, r) {
      if (this.cache.set(e, r), this._size++, this._size >= this.maxSize) {
        if (this._size = 0, typeof this.onEviction == "function") for (let [n, i] of this.oldCache.entries()) this.onEviction(n, i);
        this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map();
      }
    }
    get(e) {
      if (this.cache.has(e)) return this.cache.get(e);
      if (this.oldCache.has(e)) {
        let r = this.oldCache.get(e);
        return this.oldCache.delete(e), this._set(e, r), r;
      }
    }
    set(e, r) {
      return this.cache.has(e) ? this.cache.set(e, r) : this._set(e, r), this;
    }
    has(e) {
      return this.cache.has(e) || this.oldCache.has(e);
    }
    peek(e) {
      if (this.cache.has(e)) return this.cache.get(e);
      if (this.oldCache.has(e)) return this.oldCache.get(e);
    }
    delete(e) {
      let r = this.cache.delete(e);
      return r && this._size--, this.oldCache.delete(e) || r;
    }
    clear() {
      this.cache.clear(), this.oldCache.clear(), this._size = 0;
    }
    *keys() {
      for (let [e] of this) yield e;
    }
    *values() {
      for (let [, e] of this) yield e;
    }
    *[Symbol.iterator]() {
      for (let e of this.cache) yield e;
      for (let e of this.oldCache) {
        let [r] = e;
        this.cache.has(r) || (yield e);
      }
    }
    get size() {
      let e = 0;
      for (let r of this.oldCache.keys()) this.cache.has(r) || e++;
      return Math.min(this._size + e, this.maxSize);
    }
  };
  Ia.exports = qn;
});
var Na = {};
dt(Na, { default: () => Vn });
var Vn;
var zn = Ye(() => {
  Vn = { yellow: (t) => t };
});
var Wn = S(() => {
});
var wr = S((Sb, $a) => {
  "use strict";
  var Fa = (zn(), _e(Na)), qa = Wn(), Ue = class extends Error {
    constructor(e, r, n, i, a, s) {
      super(e), this.name = "CssSyntaxError", this.reason = e, a && (this.file = a), i && (this.source = i), s && (this.plugin = s), typeof r < "u" && typeof n < "u" && (typeof r == "number" ? (this.line = r, this.column = n) : (this.line = r.line, this.column = r.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Ue);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(e) {
      if (!this.source) return "";
      let r = this.source;
      e == null && (e = Fa.isColorSupported), qa && e && (r = qa(r));
      let n = r.split(/\r?\n/), i = Math.max(this.line - 3, 0), a = Math.min(this.line + 2, n.length), s = String(a).length, o, l;
      if (e) {
        let { bold: u, red: f, gray: p } = Fa.createColors(true);
        o = (c) => u(f(c)), l = (c) => p(c);
      } else o = l = (u) => u;
      return n.slice(i, a).map((u, f) => {
        let p = i + 1 + f, c = " " + (" " + p).slice(-s) + " | ";
        if (p === this.line) {
          let d = l(c.replace(/\d/g, " ")) + u.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return o(">") + l(c) + u + `
 ` + d + o("^");
        }
        return " " + l(c) + u;
      }).join(`
`);
    }
    toString() {
      let e = this.showSourceCode();
      return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
    }
  };
  $a.exports = Ue;
  Ue.default = Ue;
});
var br = S((kb, Bn) => {
  "use strict";
  Bn.exports.isClean = Symbol("isClean");
  Bn.exports.my = Symbol("my");
});
var Gn = S((Ob, ja) => {
  "use strict";
  var Ua = { colon: ": ", indent: "    ", beforeDecl: `
`, beforeRule: `
`, beforeOpen: " ", beforeClose: `
`, beforeComment: `
`, after: `
`, emptyBody: "", commentLeft: " ", commentRight: " ", semicolon: false };
  function Mp(t) {
    return t[0].toUpperCase() + t.slice(1);
  }
  var gt = class {
    constructor(e) {
      this.builder = e;
    }
    stringify(e, r) {
      if (!this[e.type]) throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
      this[e.type](e, r);
    }
    document(e) {
      this.body(e);
    }
    root(e) {
      this.body(e), e.raws.after && this.builder(e.raws.after);
    }
    comment(e) {
      let r = this.raw(e, "left", "commentLeft"), n = this.raw(e, "right", "commentRight");
      this.builder("/*" + r + e.text + n + "*/", e);
    }
    decl(e, r) {
      let n = this.raw(e, "between", "colon"), i = e.prop + n + this.rawValue(e, "value");
      e.important && (i += e.raws.important || " !important"), r && (i += ";"), this.builder(i, e);
    }
    rule(e) {
      this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
    }
    atrule(e, r) {
      let n = "@" + e.name, i = e.params ? this.rawValue(e, "params") : "";
      if (typeof e.raws.afterName < "u" ? n += e.raws.afterName : i && (n += " "), e.nodes) this.block(e, n + i);
      else {
        let a = (e.raws.between || "") + (r ? ";" : "");
        this.builder(n + i + a, e);
      }
    }
    body(e) {
      let r = e.nodes.length - 1;
      for (; r > 0 && e.nodes[r].type === "comment"; ) r -= 1;
      let n = this.raw(e, "semicolon");
      for (let i = 0; i < e.nodes.length; i++) {
        let a = e.nodes[i], s = this.raw(a, "before");
        s && this.builder(s), this.stringify(a, r !== i || n);
      }
    }
    block(e, r) {
      let n = this.raw(e, "between", "beforeOpen");
      this.builder(r + n + "{", e, "start");
      let i;
      e.nodes && e.nodes.length ? (this.body(e), i = this.raw(e, "after")) : i = this.raw(e, "after", "emptyBody"), i && this.builder(i), this.builder("}", e, "end");
    }
    raw(e, r, n) {
      let i;
      if (n || (n = r), r && (i = e.raws[r], typeof i < "u")) return i;
      let a = e.parent;
      if (n === "before" && (!a || a.type === "root" && a.first === e || a && a.type === "document")) return "";
      if (!a) return Ua[n];
      let s = e.root();
      if (s.rawCache || (s.rawCache = {}), typeof s.rawCache[n] < "u") return s.rawCache[n];
      if (n === "before" || n === "after") return this.beforeAfter(e, n);
      {
        let o = "raw" + Mp(n);
        this[o] ? i = this[o](s, e) : s.walk((l) => {
          if (i = l.raws[r], typeof i < "u") return false;
        });
      }
      return typeof i > "u" && (i = Ua[n]), s.rawCache[n] = i, i;
    }
    rawSemicolon(e) {
      let r;
      return e.walk((n) => {
        if (n.nodes && n.nodes.length && n.last.type === "decl" && (r = n.raws.semicolon, typeof r < "u")) return false;
      }), r;
    }
    rawEmptyBody(e) {
      let r;
      return e.walk((n) => {
        if (n.nodes && n.nodes.length === 0 && (r = n.raws.after, typeof r < "u")) return false;
      }), r;
    }
    rawIndent(e) {
      if (e.raws.indent) return e.raws.indent;
      let r;
      return e.walk((n) => {
        let i = n.parent;
        if (i && i !== e && i.parent && i.parent === e && typeof n.raws.before < "u") {
          let a = n.raws.before.split(`
`);
          return r = a[a.length - 1], r = r.replace(/\S/g, ""), false;
        }
      }), r;
    }
    rawBeforeComment(e, r) {
      let n;
      return e.walkComments((i) => {
        if (typeof i.raws.before < "u") return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), false;
      }), typeof n > "u" ? n = this.raw(r, null, "beforeDecl") : n && (n = n.replace(/\S/g, "")), n;
    }
    rawBeforeDecl(e, r) {
      let n;
      return e.walkDecls((i) => {
        if (typeof i.raws.before < "u") return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), false;
      }), typeof n > "u" ? n = this.raw(r, null, "beforeRule") : n && (n = n.replace(/\S/g, "")), n;
    }
    rawBeforeRule(e) {
      let r;
      return e.walk((n) => {
        if (n.nodes && (n.parent !== e || e.first !== n) && typeof n.raws.before < "u") return r = n.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), false;
      }), r && (r = r.replace(/\S/g, "")), r;
    }
    rawBeforeClose(e) {
      let r;
      return e.walk((n) => {
        if (n.nodes && n.nodes.length > 0 && typeof n.raws.after < "u") return r = n.raws.after, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), false;
      }), r && (r = r.replace(/\S/g, "")), r;
    }
    rawBeforeOpen(e) {
      let r;
      return e.walk((n) => {
        if (n.type !== "decl" && (r = n.raws.between, typeof r < "u")) return false;
      }), r;
    }
    rawColon(e) {
      let r;
      return e.walkDecls((n) => {
        if (typeof n.raws.between < "u") return r = n.raws.between.replace(/[^\s:]/g, ""), false;
      }), r;
    }
    beforeAfter(e, r) {
      let n;
      e.type === "decl" ? n = this.raw(e, null, "beforeDecl") : e.type === "comment" ? n = this.raw(e, null, "beforeComment") : r === "before" ? n = this.raw(e, null, "beforeRule") : n = this.raw(e, null, "beforeClose");
      let i = e.parent, a = 0;
      for (; i && i.type !== "root"; ) a += 1, i = i.parent;
      if (n.includes(`
`)) {
        let s = this.raw(e, null, "indent");
        if (s.length) for (let o = 0; o < a; o++) n += s;
      }
      return n;
    }
    rawValue(e, r) {
      let n = e[r], i = e.raws[r];
      return i && i.value === n ? i.raw : n;
    }
  };
  ja.exports = gt;
  gt.default = gt;
});
var yt = S((Ab, Va) => {
  "use strict";
  var Lp = Gn();
  function Yn(t, e) {
    new Lp(e).stringify(t);
  }
  Va.exports = Yn;
  Yn.default = Yn;
});
var wt = S((Eb, za) => {
  "use strict";
  var { isClean: xr, my: Np } = br(), Fp = wr(), qp = Gn(), $p = yt();
  function Hn(t, e) {
    let r = new t.constructor();
    for (let n in t) {
      if (!Object.prototype.hasOwnProperty.call(t, n) || n === "proxyCache") continue;
      let i = t[n], a = typeof i;
      n === "parent" && a === "object" ? e && (r[n] = e) : n === "source" ? r[n] = i : Array.isArray(i) ? r[n] = i.map((s) => Hn(s, r)) : (a === "object" && i !== null && (i = Hn(i)), r[n] = i);
    }
    return r;
  }
  var vt = class {
    constructor(e = {}) {
      this.raws = {}, this[xr] = false, this[Np] = true;
      for (let r in e) if (r === "nodes") {
        this.nodes = [];
        for (let n of e[r]) typeof n.clone == "function" ? this.append(n.clone()) : this.append(n);
      } else this[r] = e[r];
    }
    error(e, r = {}) {
      if (this.source) {
        let { start: n, end: i } = this.rangeBy(r);
        return this.source.input.error(e, { line: n.line, column: n.column }, { line: i.line, column: i.column }, r);
      }
      return new Fp(e);
    }
    warn(e, r, n) {
      let i = { node: this };
      for (let a in n) i[a] = n[a];
      return e.warn(r, i);
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    toString(e = $p) {
      e.stringify && (e = e.stringify);
      let r = "";
      return e(this, (n) => {
        r += n;
      }), r;
    }
    assign(e = {}) {
      for (let r in e) this[r] = e[r];
      return this;
    }
    clone(e = {}) {
      let r = Hn(this);
      for (let n in e) r[n] = e[n];
      return r;
    }
    cloneBefore(e = {}) {
      let r = this.clone(e);
      return this.parent.insertBefore(this, r), r;
    }
    cloneAfter(e = {}) {
      let r = this.clone(e);
      return this.parent.insertAfter(this, r), r;
    }
    replaceWith(...e) {
      if (this.parent) {
        let r = this, n = false;
        for (let i of e) i === this ? n = true : n ? (this.parent.insertAfter(r, i), r = i) : this.parent.insertBefore(r, i);
        n || this.remove();
      }
      return this;
    }
    next() {
      if (!this.parent) return;
      let e = this.parent.index(this);
      return this.parent.nodes[e + 1];
    }
    prev() {
      if (!this.parent) return;
      let e = this.parent.index(this);
      return this.parent.nodes[e - 1];
    }
    before(e) {
      return this.parent.insertBefore(this, e), this;
    }
    after(e) {
      return this.parent.insertAfter(this, e), this;
    }
    root() {
      let e = this;
      for (; e.parent && e.parent.type !== "document"; ) e = e.parent;
      return e;
    }
    raw(e, r) {
      return new qp().raw(this, e, r);
    }
    cleanRaws(e) {
      delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
    }
    toJSON(e, r) {
      let n = {}, i = r == null;
      r = r || /* @__PURE__ */ new Map();
      let a = 0;
      for (let s in this) {
        if (!Object.prototype.hasOwnProperty.call(this, s) || s === "parent" || s === "proxyCache") continue;
        let o = this[s];
        if (Array.isArray(o)) n[s] = o.map((l) => typeof l == "object" && l.toJSON ? l.toJSON(null, r) : l);
        else if (typeof o == "object" && o.toJSON) n[s] = o.toJSON(null, r);
        else if (s === "source") {
          let l = r.get(o.input);
          l == null && (l = a, r.set(o.input, a), a++), n[s] = { inputId: l, start: o.start, end: o.end };
        } else n[s] = o;
      }
      return i && (n.inputs = [...r.keys()].map((s) => s.toJSON())), n;
    }
    positionInside(e) {
      let r = this.toString(), n = this.source.start.column, i = this.source.start.line;
      for (let a = 0; a < e; a++) r[a] === `
` ? (n = 1, i += 1) : n += 1;
      return { line: i, column: n };
    }
    positionBy(e) {
      let r = this.source.start;
      if (e.index) r = this.positionInside(e.index);
      else if (e.word) {
        let n = this.toString().indexOf(e.word);
        n !== -1 && (r = this.positionInside(n));
      }
      return r;
    }
    rangeBy(e) {
      let r = { line: this.source.start.line, column: this.source.start.column }, n = this.source.end ? { line: this.source.end.line, column: this.source.end.column + 1 } : { line: r.line, column: r.column + 1 };
      if (e.word) {
        let i = this.toString().indexOf(e.word);
        i !== -1 && (r = this.positionInside(i), n = this.positionInside(i + e.word.length));
      } else e.start ? r = { line: e.start.line, column: e.start.column } : e.index && (r = this.positionInside(e.index)), e.end ? n = { line: e.end.line, column: e.end.column } : e.endIndex ? n = this.positionInside(e.endIndex) : e.index && (n = this.positionInside(e.index + 1));
      return (n.line < r.line || n.line === r.line && n.column <= r.column) && (n = { line: r.line, column: r.column + 1 }), { start: r, end: n };
    }
    getProxyProcessor() {
      return { set(e, r, n) {
        return e[r] === n || (e[r] = n, (r === "prop" || r === "value" || r === "name" || r === "params" || r === "important" || r === "text") && e.markDirty()), true;
      }, get(e, r) {
        return r === "proxyOf" ? e : r === "root" ? () => e.root().toProxy() : e[r];
      } };
    }
    toProxy() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    addToError(e) {
      if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
        let r = this.source;
        e.stack = e.stack.replace(/\n\s{4}at /, `$&${r.input.from}:${r.start.line}:${r.start.column}$&`);
      }
      return e;
    }
    markDirty() {
      if (this[xr]) {
        this[xr] = false;
        let e = this;
        for (; e = e.parent; ) e[xr] = false;
      }
    }
    get proxyOf() {
      return this;
    }
  };
  za.exports = vt;
  vt.default = vt;
});
var xt = S((Cb, Wa) => {
  "use strict";
  var Up = wt(), bt = class extends Up {
    constructor(e) {
      e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
    }
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
  };
  Wa.exports = bt;
  bt.default = bt;
});
var Sr = S(() => {
});
var St = {};
dt(St, { join: () => Qn });
var Qn;
var kt = Ye(() => {
  Qn = () => "";
});
var Jn = {};
dt(Jn, { default: () => jp });
var jp;
var Xn = Ye(() => {
  jp = null;
});
var Ga = S((Pb, Ba) => {
  var Vp = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", zp = (t, e = 21) => (r = e) => {
    let n = "", i = r;
    for (; i--; ) n += t[Math.random() * t.length | 0];
    return n;
  }, Wp = (t = 21) => {
    let e = "", r = t;
    for (; r--; ) e += Vp[Math.random() * 64 | 0];
    return e;
  };
  Ba.exports = { nanoid: Wp, customAlphabet: zp };
});
var Zn = S((Rb, Qa) => {
  "use strict";
  var { SourceMapConsumer: Ya, SourceMapGenerator: Ha } = Sr(), { existsSync: Bp, readFileSync: Gp } = (yr(), _e(Ra)), { dirname: Kn, join: Yp } = (kt(), _e(St));
  function Hp(t) {
    return Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
  }
  var Ot = class {
    constructor(e, r) {
      if (r.map === false) return;
      this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
      let n = r.map ? r.map.prev : void 0, i = this.loadMap(r.from, n);
      !this.mapFile && r.from && (this.mapFile = r.from), this.mapFile && (this.root = Kn(this.mapFile)), i && (this.text = i);
    }
    consumer() {
      return this.consumerCache || (this.consumerCache = new Ya(this.text)), this.consumerCache;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
    startWith(e, r) {
      return e ? e.substr(0, r.length) === r : false;
    }
    getAnnotationURL(e) {
      return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    loadAnnotation(e) {
      let r = e.match(/\/\*\s*# sourceMappingURL=/gm);
      if (!r) return;
      let n = e.lastIndexOf(r.pop()), i = e.indexOf("*/", n);
      n > -1 && i > -1 && (this.annotation = this.getAnnotationURL(e.substring(n, i)));
    }
    decodeInline(e) {
      let r = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, a = /^data:application\/json,/;
      if (i.test(e) || a.test(e)) return decodeURIComponent(e.substr(RegExp.lastMatch.length));
      if (r.test(e) || n.test(e)) return Hp(e.substr(RegExp.lastMatch.length));
      let s = e.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + s);
    }
    loadFile(e) {
      if (this.root = Kn(e), Bp(e)) return this.mapFile = e, Gp(e, "utf-8").toString().trim();
    }
    loadMap(e, r) {
      if (r === false) return false;
      if (r) {
        if (typeof r == "string") return r;
        if (typeof r == "function") {
          let n = r(e);
          if (n) {
            let i = this.loadFile(n);
            if (!i) throw new Error("Unable to load previous source map: " + n.toString());
            return i;
          }
        } else {
          if (r instanceof Ya) return Ha.fromSourceMap(r).toString();
          if (r instanceof Ha) return r.toString();
          if (this.isMap(r)) return JSON.stringify(r);
          throw new Error("Unsupported previous source map format: " + r.toString());
        }
      } else {
        if (this.inline) return this.decodeInline(this.annotation);
        if (this.annotation) {
          let n = this.annotation;
          return e && (n = Yp(Kn(e), n)), this.loadFile(n);
        }
      }
    }
    isMap(e) {
      return typeof e != "object" ? false : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
    }
  };
  Qa.exports = Ot;
  Ot.default = Ot;
});
var At = S((Ib, Za) => {
  "use strict";
  var { SourceMapConsumer: Qp, SourceMapGenerator: Jp } = Sr(), { fileURLToPath: Ja, pathToFileURL: kr } = (Xn(), _e(Jn)), { resolve: ri, isAbsolute: ni } = (kt(), _e(St)), { nanoid: Xp } = Ga(), ei = Wn(), Xa = wr(), Kp = Zn(), ti = Symbol("fromOffsetCache"), Zp = Boolean(Qp && Jp), Ka = Boolean(ri && ni), He = class {
    constructor(e, r = {}) {
      if (e === null || typeof e > "u" || typeof e == "object" && !e.toString) throw new Error(`PostCSS received ${e} instead of CSS string`);
      if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, r.from && (!Ka || /^\w+:\/\//.test(r.from) || ni(r.from) ? this.file = r.from : this.file = ri(r.from)), Ka && Zp) {
        let n = new Kp(this.css, r);
        if (n.text) {
          this.map = n;
          let i = n.consumer().file;
          !this.file && i && (this.file = this.mapResolve(i));
        }
      }
      this.file || (this.id = "<input css " + Xp(6) + ">"), this.map && (this.map.file = this.from);
    }
    fromOffset(e) {
      let r, n;
      if (this[ti]) n = this[ti];
      else {
        let a = this.css.split(`
`);
        n = new Array(a.length);
        let s = 0;
        for (let o = 0, l = a.length; o < l; o++) n[o] = s, s += a[o].length + 1;
        this[ti] = n;
      }
      r = n[n.length - 1];
      let i = 0;
      if (e >= r) i = n.length - 1;
      else {
        let a = n.length - 2, s;
        for (; i < a; ) if (s = i + (a - i >> 1), e < n[s]) a = s - 1;
        else if (e >= n[s + 1]) i = s + 1;
        else {
          i = s;
          break;
        }
      }
      return { line: i + 1, col: e - n[i] + 1 };
    }
    error(e, r, n, i = {}) {
      let a, s, o;
      if (r && typeof r == "object") {
        let u = r, f = n;
        if (typeof u.offset == "number") {
          let p = this.fromOffset(u.offset);
          r = p.line, n = p.col;
        } else r = u.line, n = u.column;
        if (typeof f.offset == "number") {
          let p = this.fromOffset(f.offset);
          s = p.line, o = p.col;
        } else s = f.line, o = f.column;
      } else if (!n) {
        let u = this.fromOffset(r);
        r = u.line, n = u.col;
      }
      let l = this.origin(r, n, s, o);
      return l ? a = new Xa(e, l.endLine === void 0 ? l.line : { line: l.line, column: l.column }, l.endLine === void 0 ? l.column : { line: l.endLine, column: l.endColumn }, l.source, l.file, i.plugin) : a = new Xa(e, s === void 0 ? r : { line: r, column: n }, s === void 0 ? n : { line: s, column: o }, this.css, this.file, i.plugin), a.input = { line: r, column: n, endLine: s, endColumn: o, source: this.css }, this.file && (kr && (a.input.url = kr(this.file).toString()), a.input.file = this.file), a;
    }
    origin(e, r, n, i) {
      if (!this.map) return false;
      let a = this.map.consumer(), s = a.originalPositionFor({ line: e, column: r });
      if (!s.source) return false;
      let o;
      typeof n == "number" && (o = a.originalPositionFor({ line: n, column: i }));
      let l;
      ni(s.source) ? l = kr(s.source) : l = new URL(s.source, this.map.consumer().sourceRoot || kr(this.map.mapFile));
      let u = { url: l.toString(), line: s.line, column: s.column, endLine: o && o.line, endColumn: o && o.column };
      if (l.protocol === "file:") if (Ja) u.file = Ja(l);
      else throw new Error("file: protocol is not available in this PostCSS build");
      let f = a.sourceContentFor(s.source);
      return f && (u.source = f), u;
    }
    mapResolve(e) {
      return /^\w+:\/\//.test(e) ? e : ri(this.map.consumer().sourceRoot || this.map.root || ".", e);
    }
    get from() {
      return this.file || this.id;
    }
    toJSON() {
      let e = {};
      for (let r of ["hasBOM", "css", "file", "id"]) this[r] != null && (e[r] = this[r]);
      return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
    }
  };
  Za.exports = He;
  He.default = He;
  ei && ei.registerInput && ei.registerInput(He);
});
var si = S((Db, so) => {
  "use strict";
  var { SourceMapConsumer: to, SourceMapGenerator: Or } = Sr(), { dirname: Ar, resolve: ro, relative: no, sep: io } = (kt(), _e(St)), { pathToFileURL: eo } = (Xn(), _e(Jn)), ed = At(), td = Boolean(to && Or), rd = Boolean(Ar && ro && no && io), ii = class {
    constructor(e, r, n, i) {
      this.stringify = e, this.mapOpts = n.map || {}, this.root = r, this.opts = n, this.css = i, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
    }
    isMap() {
      return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
    }
    previous() {
      if (!this.previousMaps) if (this.previousMaps = [], this.root) this.root.walk((e) => {
        if (e.source && e.source.input.map) {
          let r = e.source.input.map;
          this.previousMaps.includes(r) || this.previousMaps.push(r);
        }
      });
      else {
        let e = new ed(this.css, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
      return this.previousMaps;
    }
    isInline() {
      if (typeof this.mapOpts.inline < "u") return this.mapOpts.inline;
      let e = this.mapOpts.annotation;
      return typeof e < "u" && e !== true ? false : this.previous().length ? this.previous().some((r) => r.inline) : true;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : true;
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== false) if (this.root) {
        let e;
        for (let r = this.root.nodes.length - 1; r >= 0; r--) e = this.root.nodes[r], e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(r);
      } else this.css && (this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    setSourcesContent() {
      let e = {};
      if (this.root) this.root.walk((r) => {
        if (r.source) {
          let n = r.source.input.from;
          if (n && !e[n]) {
            e[n] = true;
            let i = this.usesFileUrls ? this.toFileUrl(n) : this.toUrl(this.path(n));
            this.map.setSourceContent(i, r.source.input.css);
          }
        }
      });
      else if (this.css) {
        let r = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(r, this.css);
      }
    }
    applyPrevMaps() {
      for (let e of this.previous()) {
        let r = this.toUrl(this.path(e.file)), n = e.root || Ar(e.file), i;
        this.mapOpts.sourcesContent === false ? (i = new to(e.text), i.sourcesContent && (i.sourcesContent = i.sourcesContent.map(() => null))) : i = e.consumer(), this.map.applySourceMap(i, r, this.toUrl(this.path(n)));
      }
    }
    isAnnotation() {
      return this.isInline() ? true : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : true;
    }
    toBase64(e) {
      return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
    }
    addAnnotation() {
      let e;
      this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
      let r = `
`;
      this.css.includes(`\r
`) && (r = `\r
`), this.css += r + "/*# sourceMappingURL=" + e + " */";
    }
    outputFile() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }
    generateMap() {
      if (this.root) this.generateString();
      else if (this.previous().length === 1) {
        let e = this.previous()[0].consumer();
        e.file = this.outputFile(), this.map = Or.fromSourceMap(e);
      } else this.map = new Or({ file: this.outputFile() }), this.map.addMapping({ source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>", generated: { line: 1, column: 0 }, original: { line: 1, column: 0 } });
      return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
    }
    path(e) {
      if (e.indexOf("<") === 0 || /^\w+:\/\//.test(e) || this.mapOpts.absolute) return e;
      let r = this.opts.to ? Ar(this.opts.to) : ".";
      return typeof this.mapOpts.annotation == "string" && (r = Ar(ro(r, this.mapOpts.annotation))), e = no(r, e), e;
    }
    toUrl(e) {
      return io === "\\" && (e = e.replace(/\\/g, "/")), encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    }
    toFileUrl(e) {
      if (eo) return eo(e).toString();
      throw new Error("`map.absolute` option is not available in this PostCSS build");
    }
    sourcePath(e) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
    }
    generateString() {
      this.css = "", this.map = new Or({ file: this.outputFile() });
      let e = 1, r = 1, n = "<no source>", i = { source: "", generated: { line: 0, column: 0 }, original: { line: 0, column: 0 } }, a, s;
      this.stringify(this.root, (o, l, u) => {
        if (this.css += o, l && u !== "end" && (i.generated.line = e, i.generated.column = r - 1, l.source && l.source.start ? (i.source = this.sourcePath(l), i.original.line = l.source.start.line, i.original.column = l.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), a = o.match(/\n/g), a ? (e += a.length, s = o.lastIndexOf(`
`), r = o.length - s) : r += o.length, l && u !== "start") {
          let f = l.parent || { raws: {} };
          (!(l.type === "decl" || l.type === "atrule" && !l.nodes) || l !== f.last || f.raws.semicolon) && (l.source && l.source.end ? (i.source = this.sourcePath(l), i.original.line = l.source.end.line, i.original.column = l.source.end.column - 1, i.generated.line = e, i.generated.column = r - 2, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, i.generated.line = e, i.generated.column = r - 1, this.map.addMapping(i)));
        }
      });
    }
    generate() {
      if (this.clearAnnotation(), rd && td && this.isMap()) return this.generateMap();
      {
        let e = "";
        return this.stringify(this.root, (r) => {
          e += r;
        }), [e];
      }
    }
  };
  so.exports = ii;
});
var Ct = S((Mb, ao) => {
  "use strict";
  var nd = wt(), Et = class extends nd {
    constructor(e) {
      super(e), this.type = "comment";
    }
  };
  ao.exports = Et;
  Et.default = Et;
});
var Te = S((Lb, go) => {
  "use strict";
  var { isClean: oo, my: lo } = br(), uo = xt(), fo = Ct(), id = wt(), co, ai, oi, po;
  function ho(t) {
    return t.map((e) => (e.nodes && (e.nodes = ho(e.nodes)), delete e.source, e));
  }
  function mo(t) {
    if (t[oo] = false, t.proxyOf.nodes) for (let e of t.proxyOf.nodes) mo(e);
  }
  var ae = class extends id {
    push(e) {
      return e.parent = this, this.proxyOf.nodes.push(e), this;
    }
    each(e) {
      if (!this.proxyOf.nodes) return;
      let r = this.getIterator(), n, i;
      for (; this.indexes[r] < this.proxyOf.nodes.length && (n = this.indexes[r], i = e(this.proxyOf.nodes[n], n), i !== false); ) this.indexes[r] += 1;
      return delete this.indexes[r], i;
    }
    walk(e) {
      return this.each((r, n) => {
        let i;
        try {
          i = e(r, n);
        } catch (a) {
          throw r.addToError(a);
        }
        return i !== false && r.walk && (i = r.walk(e)), i;
      });
    }
    walkDecls(e, r) {
      return r ? e instanceof RegExp ? this.walk((n, i) => {
        if (n.type === "decl" && e.test(n.prop)) return r(n, i);
      }) : this.walk((n, i) => {
        if (n.type === "decl" && n.prop === e) return r(n, i);
      }) : (r = e, this.walk((n, i) => {
        if (n.type === "decl") return r(n, i);
      }));
    }
    walkRules(e, r) {
      return r ? e instanceof RegExp ? this.walk((n, i) => {
        if (n.type === "rule" && e.test(n.selector)) return r(n, i);
      }) : this.walk((n, i) => {
        if (n.type === "rule" && n.selector === e) return r(n, i);
      }) : (r = e, this.walk((n, i) => {
        if (n.type === "rule") return r(n, i);
      }));
    }
    walkAtRules(e, r) {
      return r ? e instanceof RegExp ? this.walk((n, i) => {
        if (n.type === "atrule" && e.test(n.name)) return r(n, i);
      }) : this.walk((n, i) => {
        if (n.type === "atrule" && n.name === e) return r(n, i);
      }) : (r = e, this.walk((n, i) => {
        if (n.type === "atrule") return r(n, i);
      }));
    }
    walkComments(e) {
      return this.walk((r, n) => {
        if (r.type === "comment") return e(r, n);
      });
    }
    append(...e) {
      for (let r of e) {
        let n = this.normalize(r, this.last);
        for (let i of n) this.proxyOf.nodes.push(i);
      }
      return this.markDirty(), this;
    }
    prepend(...e) {
      e = e.reverse();
      for (let r of e) {
        let n = this.normalize(r, this.first, "prepend").reverse();
        for (let i of n) this.proxyOf.nodes.unshift(i);
        for (let i in this.indexes) this.indexes[i] = this.indexes[i] + n.length;
      }
      return this.markDirty(), this;
    }
    cleanRaws(e) {
      if (super.cleanRaws(e), this.nodes) for (let r of this.nodes) r.cleanRaws(e);
    }
    insertBefore(e, r) {
      let n = this.index(e), i = n === 0 ? "prepend" : false, a = this.normalize(r, this.proxyOf.nodes[n], i).reverse();
      n = this.index(e);
      for (let o of a) this.proxyOf.nodes.splice(n, 0, o);
      let s;
      for (let o in this.indexes) s = this.indexes[o], n <= s && (this.indexes[o] = s + a.length);
      return this.markDirty(), this;
    }
    insertAfter(e, r) {
      let n = this.index(e), i = this.normalize(r, this.proxyOf.nodes[n]).reverse();
      n = this.index(e);
      for (let s of i) this.proxyOf.nodes.splice(n + 1, 0, s);
      let a;
      for (let s in this.indexes) a = this.indexes[s], n < a && (this.indexes[s] = a + i.length);
      return this.markDirty(), this;
    }
    removeChild(e) {
      e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
      let r;
      for (let n in this.indexes) r = this.indexes[n], r >= e && (this.indexes[n] = r - 1);
      return this.markDirty(), this;
    }
    removeAll() {
      for (let e of this.proxyOf.nodes) e.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    replaceValues(e, r, n) {
      return n || (n = r, r = {}), this.walkDecls((i) => {
        r.props && !r.props.includes(i.prop) || r.fast && !i.value.includes(r.fast) || (i.value = i.value.replace(e, n));
      }), this.markDirty(), this;
    }
    every(e) {
      return this.nodes.every(e);
    }
    some(e) {
      return this.nodes.some(e);
    }
    index(e) {
      return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
    }
    get first() {
      if (!!this.proxyOf.nodes) return this.proxyOf.nodes[0];
    }
    get last() {
      if (!!this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    normalize(e, r) {
      if (typeof e == "string") e = ho(co(e).nodes);
      else if (Array.isArray(e)) {
        e = e.slice(0);
        for (let i of e) i.parent && i.parent.removeChild(i, "ignore");
      } else if (e.type === "root" && this.type !== "document") {
        e = e.nodes.slice(0);
        for (let i of e) i.parent && i.parent.removeChild(i, "ignore");
      } else if (e.type) e = [e];
      else if (e.prop) {
        if (typeof e.value > "u") throw new Error("Value field is missed in node creation");
        typeof e.value != "string" && (e.value = String(e.value)), e = [new uo(e)];
      } else if (e.selector) e = [new ai(e)];
      else if (e.name) e = [new oi(e)];
      else if (e.text) e = [new fo(e)];
      else throw new Error("Unknown node type in node creation");
      return e.map((i) => (i[lo] || ae.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[oo] && mo(i), typeof i.raws.before > "u" && r && typeof r.raws.before < "u" && (i.raws.before = r.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
    }
    getProxyProcessor() {
      return { set(e, r, n) {
        return e[r] === n || (e[r] = n, (r === "name" || r === "params" || r === "selector") && e.markDirty()), true;
      }, get(e, r) {
        return r === "proxyOf" ? e : e[r] ? r === "each" || typeof r == "string" && r.startsWith("walk") ? (...n) => e[r](...n.map((i) => typeof i == "function" ? (a, s) => i(a.toProxy(), s) : i)) : r === "every" || r === "some" ? (n) => e[r]((i, ...a) => n(i.toProxy(), ...a)) : r === "root" ? () => e.root().toProxy() : r === "nodes" ? e.nodes.map((n) => n.toProxy()) : r === "first" || r === "last" ? e[r].toProxy() : e[r] : e[r];
      } };
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let e = this.lastEach;
      return this.indexes[e] = 0, e;
    }
  };
  ae.registerParse = (t) => {
    co = t;
  };
  ae.registerRule = (t) => {
    ai = t;
  };
  ae.registerAtRule = (t) => {
    oi = t;
  };
  ae.registerRoot = (t) => {
    po = t;
  };
  go.exports = ae;
  ae.default = ae;
  ae.rebuild = (t) => {
    t.type === "atrule" ? Object.setPrototypeOf(t, oi.prototype) : t.type === "rule" ? Object.setPrototypeOf(t, ai.prototype) : t.type === "decl" ? Object.setPrototypeOf(t, uo.prototype) : t.type === "comment" ? Object.setPrototypeOf(t, fo.prototype) : t.type === "root" && Object.setPrototypeOf(t, po.prototype), t[lo] = true, t.nodes && t.nodes.forEach((e) => {
      ae.rebuild(e);
    });
  };
});
var Er = S((Nb, wo) => {
  "use strict";
  var sd = Te(), yo, vo, je = class extends sd {
    constructor(e) {
      super({ type: "document", ...e }), this.nodes || (this.nodes = []);
    }
    toResult(e = {}) {
      return new yo(new vo(), this, e).stringify();
    }
  };
  je.registerLazyResult = (t) => {
    yo = t;
  };
  je.registerProcessor = (t) => {
    vo = t;
  };
  wo.exports = je;
  je.default = je;
});
var li = S((Fb, xo) => {
  "use strict";
  var bo = {};
  xo.exports = function(e) {
    bo[e] || (bo[e] = true, typeof console < "u" && console.warn && console.warn(e));
  };
});
var ui = S((qb, So) => {
  "use strict";
  var _t = class {
    constructor(e, r = {}) {
      if (this.type = "warning", this.text = e, r.node && r.node.source) {
        let n = r.node.rangeBy(r);
        this.line = n.start.line, this.column = n.start.column, this.endLine = n.end.line, this.endColumn = n.end.column;
      }
      for (let n in r) this[n] = r[n];
    }
    toString() {
      return this.node ? this.node.error(this.text, { plugin: this.plugin, index: this.index, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
  };
  So.exports = _t;
  _t.default = _t;
});
var Cr = S(($b, ko) => {
  "use strict";
  var ad = ui(), Tt = class {
    constructor(e, r, n) {
      this.processor = e, this.messages = [], this.root = r, this.opts = n, this.css = void 0, this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(e, r = {}) {
      r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
      let n = new ad(e, r);
      return this.messages.push(n), n;
    }
    warnings() {
      return this.messages.filter((e) => e.type === "warning");
    }
    get content() {
      return this.css;
    }
  };
  ko.exports = Tt;
  Tt.default = Tt;
});
var _o = S((Ub, Co) => {
  "use strict";
  var fi = "'".charCodeAt(0), Oo = '"'.charCodeAt(0), _r = "\\".charCodeAt(0), Ao = "/".charCodeAt(0), Tr = `
`.charCodeAt(0), Pt = " ".charCodeAt(0), Pr = "\f".charCodeAt(0), Rr = "	".charCodeAt(0), Ir = "\r".charCodeAt(0), od = "[".charCodeAt(0), ld = "]".charCodeAt(0), ud = "(".charCodeAt(0), fd = ")".charCodeAt(0), cd = "{".charCodeAt(0), pd = "}".charCodeAt(0), dd = ";".charCodeAt(0), hd = "*".charCodeAt(0), md = ":".charCodeAt(0), gd = "@".charCodeAt(0), Dr = /[\t\n\f\r "#'()/;[\\\]{}]/g, Mr = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, yd = /.[\n"'(/\\]/, Eo = /[\da-f]/i;
  Co.exports = function(e, r = {}) {
    let n = e.css.valueOf(), i = r.ignoreErrors, a, s, o, l, u, f, p, c, d, h, y = n.length, m = 0, g = [], v = [];
    function b() {
      return m;
    }
    function w(A) {
      throw e.error("Unclosed " + A, m);
    }
    function O() {
      return v.length === 0 && m >= y;
    }
    function x(A) {
      if (v.length) return v.pop();
      if (m >= y) return;
      let R = A ? A.ignoreUnclosed : false;
      switch (a = n.charCodeAt(m), a) {
        case Tr:
        case Pt:
        case Rr:
        case Ir:
        case Pr: {
          s = m;
          do
            s += 1, a = n.charCodeAt(s);
          while (a === Pt || a === Tr || a === Rr || a === Ir || a === Pr);
          h = ["space", n.slice(m, s)], m = s - 1;
          break;
        }
        case od:
        case ld:
        case cd:
        case pd:
        case md:
        case dd:
        case fd: {
          let L = String.fromCharCode(a);
          h = [L, L, m];
          break;
        }
        case ud: {
          if (c = g.length ? g.pop()[1] : "", d = n.charCodeAt(m + 1), c === "url" && d !== fi && d !== Oo && d !== Pt && d !== Tr && d !== Rr && d !== Pr && d !== Ir) {
            s = m;
            do {
              if (f = false, s = n.indexOf(")", s + 1), s === -1) if (i || R) {
                s = m;
                break;
              } else w("bracket");
              for (p = s; n.charCodeAt(p - 1) === _r; ) p -= 1, f = !f;
            } while (f);
            h = ["brackets", n.slice(m, s + 1), m, s], m = s;
          } else s = n.indexOf(")", m + 1), l = n.slice(m, s + 1), s === -1 || yd.test(l) ? h = ["(", "(", m] : (h = ["brackets", l, m, s], m = s);
          break;
        }
        case fi:
        case Oo: {
          o = a === fi ? "'" : '"', s = m;
          do {
            if (f = false, s = n.indexOf(o, s + 1), s === -1) if (i || R) {
              s = m + 1;
              break;
            } else w("string");
            for (p = s; n.charCodeAt(p - 1) === _r; ) p -= 1, f = !f;
          } while (f);
          h = ["string", n.slice(m, s + 1), m, s], m = s;
          break;
        }
        case gd: {
          Dr.lastIndex = m + 1, Dr.test(n), Dr.lastIndex === 0 ? s = n.length - 1 : s = Dr.lastIndex - 2, h = ["at-word", n.slice(m, s + 1), m, s], m = s;
          break;
        }
        case _r: {
          for (s = m, u = true; n.charCodeAt(s + 1) === _r; ) s += 1, u = !u;
          if (a = n.charCodeAt(s + 1), u && a !== Ao && a !== Pt && a !== Tr && a !== Rr && a !== Ir && a !== Pr && (s += 1, Eo.test(n.charAt(s)))) {
            for (; Eo.test(n.charAt(s + 1)); ) s += 1;
            n.charCodeAt(s + 1) === Pt && (s += 1);
          }
          h = ["word", n.slice(m, s + 1), m, s], m = s;
          break;
        }
        default: {
          a === Ao && n.charCodeAt(m + 1) === hd ? (s = n.indexOf("*/", m + 2) + 1, s === 0 && (i || R ? s = n.length : w("comment")), h = ["comment", n.slice(m, s + 1), m, s], m = s) : (Mr.lastIndex = m + 1, Mr.test(n), Mr.lastIndex === 0 ? s = n.length - 1 : s = Mr.lastIndex - 2, h = ["word", n.slice(m, s + 1), m, s], g.push(h), m = s);
          break;
        }
      }
      return m++, h;
    }
    function C(A) {
      v.push(A);
    }
    return { back: C, nextToken: x, endOfFile: O, position: b };
  };
});
var Lr = S((jb, Po) => {
  "use strict";
  var To = Te(), Qe = class extends To {
    constructor(e) {
      super(e), this.type = "atrule";
    }
    append(...e) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
    }
    prepend(...e) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
    }
  };
  Po.exports = Qe;
  Qe.default = Qe;
  To.registerAtRule(Qe);
});
var Je = S((Vb, Mo) => {
  "use strict";
  var Ro = Te(), Io, Do, Pe = class extends Ro {
    constructor(e) {
      super(e), this.type = "root", this.nodes || (this.nodes = []);
    }
    removeChild(e, r) {
      let n = this.index(e);
      return !r && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e);
    }
    normalize(e, r, n) {
      let i = super.normalize(e);
      if (r) {
        if (n === "prepend") this.nodes.length > 1 ? r.raws.before = this.nodes[1].raws.before : delete r.raws.before;
        else if (this.first !== r) for (let a of i) a.raws.before = r.raws.before;
      }
      return i;
    }
    toResult(e = {}) {
      return new Io(new Do(), this, e).stringify();
    }
  };
  Pe.registerLazyResult = (t) => {
    Io = t;
  };
  Pe.registerProcessor = (t) => {
    Do = t;
  };
  Mo.exports = Pe;
  Pe.default = Pe;
  Ro.registerRoot(Pe);
});
var ci = S((zb, Lo) => {
  "use strict";
  var Rt = { split(t, e, r) {
    let n = [], i = "", a = false, s = 0, o = false, l = "", u = false;
    for (let f of t) u ? u = false : f === "\\" ? u = true : o ? f === l && (o = false) : f === '"' || f === "'" ? (o = true, l = f) : f === "(" ? s += 1 : f === ")" ? s > 0 && (s -= 1) : s === 0 && e.includes(f) && (a = true), a ? (i !== "" && n.push(i.trim()), i = "", a = false) : i += f;
    return (r || i !== "") && n.push(i.trim()), n;
  }, space(t) {
    let e = [" ", `
`, "	"];
    return Rt.split(t, e);
  }, comma(t) {
    return Rt.split(t, [","], true);
  } };
  Lo.exports = Rt;
  Rt.default = Rt;
});
var Nr = S((Wb, Fo) => {
  "use strict";
  var No = Te(), vd = ci(), Xe = class extends No {
    constructor(e) {
      super(e), this.type = "rule", this.nodes || (this.nodes = []);
    }
    get selectors() {
      return vd.comma(this.selector);
    }
    set selectors(e) {
      let r = this.selector ? this.selector.match(/,\s*/) : null, n = r ? r[0] : "," + this.raw("between", "beforeOpen");
      this.selector = e.join(n);
    }
  };
  Fo.exports = Xe;
  Xe.default = Xe;
  No.registerRule(Xe);
});
var jo = S((Bb, Uo) => {
  "use strict";
  var wd = xt(), bd = _o(), xd = Ct(), Sd = Lr(), kd = Je(), qo = Nr(), $o = { empty: true, space: true };
  function Od(t) {
    for (let e = t.length - 1; e >= 0; e--) {
      let r = t[e], n = r[3] || r[2];
      if (n) return n;
    }
  }
  var pi = class {
    constructor(e) {
      this.input = e, this.root = new kd(), this.current = this.root, this.spaces = "", this.semicolon = false, this.customProperty = false, this.createTokenizer(), this.root.source = { input: e, start: { offset: 0, line: 1, column: 1 } };
    }
    createTokenizer() {
      this.tokenizer = bd(this.input);
    }
    parse() {
      let e;
      for (; !this.tokenizer.endOfFile(); ) switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
      this.endFile();
    }
    comment(e) {
      let r = new xd();
      this.init(r, e[2]), r.source.end = this.getPosition(e[3] || e[2]);
      let n = e[1].slice(2, -2);
      if (/^\s*$/.test(n)) r.text = "", r.raws.left = n, r.raws.right = "";
      else {
        let i = n.match(/^(\s*)([^]*\S)(\s*)$/);
        r.text = i[2], r.raws.left = i[1], r.raws.right = i[3];
      }
    }
    emptyRule(e) {
      let r = new qo();
      this.init(r, e[2]), r.selector = "", r.raws.between = "", this.current = r;
    }
    other(e) {
      let r = false, n = null, i = false, a = null, s = [], o = e[1].startsWith("--"), l = [], u = e;
      for (; u; ) {
        if (n = u[0], l.push(u), n === "(" || n === "[") a || (a = u), s.push(n === "(" ? ")" : "]");
        else if (o && i && n === "{") a || (a = u), s.push("}");
        else if (s.length === 0) if (n === ";") if (i) {
          this.decl(l, o);
          return;
        } else break;
        else if (n === "{") {
          this.rule(l);
          return;
        } else if (n === "}") {
          this.tokenizer.back(l.pop()), r = true;
          break;
        } else n === ":" && (i = true);
        else n === s[s.length - 1] && (s.pop(), s.length === 0 && (a = null));
        u = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (r = true), s.length > 0 && this.unclosedBracket(a), r && i) {
        if (!o) for (; l.length && (u = l[l.length - 1][0], !(u !== "space" && u !== "comment")); ) this.tokenizer.back(l.pop());
        this.decl(l, o);
      } else this.unknownWord(l);
    }
    rule(e) {
      e.pop();
      let r = new qo();
      this.init(r, e[0][2]), r.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(r, "selector", e), this.current = r;
    }
    decl(e, r) {
      let n = new wd();
      this.init(n, e[0][2]);
      let i = e[e.length - 1];
      for (i[0] === ";" && (this.semicolon = true, e.pop()), n.source.end = this.getPosition(i[3] || i[2] || Od(e)); e[0][0] !== "word"; ) e.length === 1 && this.unknownWord(e), n.raws.before += e.shift()[1];
      for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length; ) {
        let u = e[0][0];
        if (u === ":" || u === "space" || u === "comment") break;
        n.prop += e.shift()[1];
      }
      n.raws.between = "";
      let a;
      for (; e.length; ) if (a = e.shift(), a[0] === ":") {
        n.raws.between += a[1];
        break;
      } else a[0] === "word" && /\w/.test(a[1]) && this.unknownWord([a]), n.raws.between += a[1];
      (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
      let s = [], o;
      for (; e.length && (o = e[0][0], !(o !== "space" && o !== "comment")); ) s.push(e.shift());
      this.precheckMissedSemicolon(e);
      for (let u = e.length - 1; u >= 0; u--) {
        if (a = e[u], a[1].toLowerCase() === "!important") {
          n.important = true;
          let f = this.stringFrom(e, u);
          f = this.spacesFromEnd(e) + f, f !== " !important" && (n.raws.important = f);
          break;
        } else if (a[1].toLowerCase() === "important") {
          let f = e.slice(0), p = "";
          for (let c = u; c > 0; c--) {
            let d = f[c][0];
            if (p.trim().indexOf("!") === 0 && d !== "space") break;
            p = f.pop()[1] + p;
          }
          p.trim().indexOf("!") === 0 && (n.important = true, n.raws.important = p, e = f);
        }
        if (a[0] !== "space" && a[0] !== "comment") break;
      }
      e.some((u) => u[0] !== "space" && u[0] !== "comment") && (n.raws.between += s.map((u) => u[1]).join(""), s = []), this.raw(n, "value", s.concat(e), r), n.value.includes(":") && !r && this.checkMissedSemicolon(e);
    }
    atrule(e) {
      let r = new Sd();
      r.name = e[1].slice(1), r.name === "" && this.unnamedAtrule(r, e), this.init(r, e[2]);
      let n, i, a, s = false, o = false, l = [], u = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (e = this.tokenizer.nextToken(), n = e[0], n === "(" || n === "[" ? u.push(n === "(" ? ")" : "]") : n === "{" && u.length > 0 ? u.push("}") : n === u[u.length - 1] && u.pop(), u.length === 0) if (n === ";") {
          r.source.end = this.getPosition(e[2]), this.semicolon = true;
          break;
        } else if (n === "{") {
          o = true;
          break;
        } else if (n === "}") {
          if (l.length > 0) {
            for (a = l.length - 1, i = l[a]; i && i[0] === "space"; ) i = l[--a];
            i && (r.source.end = this.getPosition(i[3] || i[2]));
          }
          this.end(e);
          break;
        } else l.push(e);
        else l.push(e);
        if (this.tokenizer.endOfFile()) {
          s = true;
          break;
        }
      }
      r.raws.between = this.spacesAndCommentsFromEnd(l), l.length ? (r.raws.afterName = this.spacesAndCommentsFromStart(l), this.raw(r, "params", l), s && (e = l[l.length - 1], r.source.end = this.getPosition(e[3] || e[2]), this.spaces = r.raws.between, r.raws.between = "")) : (r.raws.afterName = "", r.params = ""), o && (r.nodes = [], this.current = r);
    }
    end(e) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current = this.current.parent) : this.unexpectedClose(e);
    }
    endFile() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    }
    freeSemicolon(e) {
      if (this.spaces += e[1], this.current.nodes) {
        let r = this.current.nodes[this.current.nodes.length - 1];
        r && r.type === "rule" && !r.raws.ownSemicolon && (r.raws.ownSemicolon = this.spaces, this.spaces = "");
      }
    }
    getPosition(e) {
      let r = this.input.fromOffset(e);
      return { offset: e, line: r.line, column: r.col };
    }
    init(e, r) {
      this.current.push(e), e.source = { start: this.getPosition(r), input: this.input }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = false);
    }
    raw(e, r, n, i) {
      let a, s, o = n.length, l = "", u = true, f, p;
      for (let c = 0; c < o; c += 1) a = n[c], s = a[0], s === "space" && c === o - 1 && !i ? u = false : s === "comment" ? (p = n[c - 1] ? n[c - 1][0] : "empty", f = n[c + 1] ? n[c + 1][0] : "empty", !$o[p] && !$o[f] ? l.slice(-1) === "," ? u = false : l += a[1] : u = false) : l += a[1];
      if (!u) {
        let c = n.reduce((d, h) => d + h[1], "");
        e.raws[r] = { value: l, raw: c };
      }
      e[r] = l;
    }
    spacesAndCommentsFromEnd(e) {
      let r, n = "";
      for (; e.length && (r = e[e.length - 1][0], !(r !== "space" && r !== "comment")); ) n = e.pop()[1] + n;
      return n;
    }
    spacesAndCommentsFromStart(e) {
      let r, n = "";
      for (; e.length && (r = e[0][0], !(r !== "space" && r !== "comment")); ) n += e.shift()[1];
      return n;
    }
    spacesFromEnd(e) {
      let r, n = "";
      for (; e.length && (r = e[e.length - 1][0], r === "space"); ) n = e.pop()[1] + n;
      return n;
    }
    stringFrom(e, r) {
      let n = "";
      for (let i = r; i < e.length; i++) n += e[i][1];
      return e.splice(r, e.length - r), n;
    }
    colon(e) {
      let r = 0, n, i, a;
      for (let [s, o] of e.entries()) {
        if (n = o, i = n[0], i === "(" && (r += 1), i === ")" && (r -= 1), r === 0 && i === ":") if (!a) this.doubleColon(n);
        else {
          if (a[0] === "word" && a[1] === "progid") continue;
          return s;
        }
        a = n;
      }
      return false;
    }
    unclosedBracket(e) {
      throw this.input.error("Unclosed bracket", { offset: e[2] }, { offset: e[2] + 1 });
    }
    unknownWord(e) {
      throw this.input.error("Unknown word", { offset: e[0][2] }, { offset: e[0][2] + e[0][1].length });
    }
    unexpectedClose(e) {
      throw this.input.error("Unexpected }", { offset: e[2] }, { offset: e[2] + 1 });
    }
    unclosedBlock() {
      let e = this.current.source.start;
      throw this.input.error("Unclosed block", e.line, e.column);
    }
    doubleColon(e) {
      throw this.input.error("Double colon", { offset: e[2] }, { offset: e[2] + e[1].length });
    }
    unnamedAtrule(e, r) {
      throw this.input.error("At-rule without name", { offset: r[2] }, { offset: r[2] + r[1].length });
    }
    precheckMissedSemicolon() {
    }
    checkMissedSemicolon(e) {
      let r = this.colon(e);
      if (r === false) return;
      let n = 0, i;
      for (let a = r - 1; a >= 0 && (i = e[a], !(i[0] !== "space" && (n += 1, n === 2))); a--) ;
      throw this.input.error("Missed semicolon", i[0] === "word" ? i[3] + 1 : i[2]);
    }
  };
  Uo.exports = pi;
});
var qr = S((Gb, Vo) => {
  "use strict";
  var Ad = Te(), Ed = jo(), Cd = At();
  function Fr(t, e) {
    let r = new Cd(t, e), n = new Ed(r);
    try {
      n.parse();
    } catch (i) {
      throw i;
    }
    return n.root;
  }
  Vo.exports = Fr;
  Fr.default = Fr;
  Ad.registerParse(Fr);
});
var mi = S((Hb, Go) => {
  "use strict";
  var { isClean: ge, my: _d } = br(), Td = si(), Pd = yt(), Rd = Te(), Id = Er(), Yb = li(), zo = Cr(), Dd = qr(), Md = Je(), Ld = { document: "Document", root: "Root", atrule: "AtRule", rule: "Rule", decl: "Declaration", comment: "Comment" }, Nd = { postcssPlugin: true, prepare: true, Once: true, Document: true, Root: true, Declaration: true, Rule: true, AtRule: true, Comment: true, DeclarationExit: true, RuleExit: true, AtRuleExit: true, CommentExit: true, RootExit: true, DocumentExit: true, OnceExit: true }, Fd = { postcssPlugin: true, prepare: true, Once: true }, Ke = 0;
  function It(t) {
    return typeof t == "object" && typeof t.then == "function";
  }
  function Bo(t) {
    let e = false, r = Ld[t.type];
    return t.type === "decl" ? e = t.prop.toLowerCase() : t.type === "atrule" && (e = t.name.toLowerCase()), e && t.append ? [r, r + "-" + e, Ke, r + "Exit", r + "Exit-" + e] : e ? [r, r + "-" + e, r + "Exit", r + "Exit-" + e] : t.append ? [r, Ke, r + "Exit"] : [r, r + "Exit"];
  }
  function Wo(t) {
    let e;
    return t.type === "document" ? e = ["Document", Ke, "DocumentExit"] : t.type === "root" ? e = ["Root", Ke, "RootExit"] : e = Bo(t), { node: t, events: e, eventIndex: 0, visitors: [], visitorIndex: 0, iterator: 0 };
  }
  function di(t) {
    return t[ge] = false, t.nodes && t.nodes.forEach((e) => di(e)), t;
  }
  var hi = {}, ye = class {
    constructor(e, r, n) {
      this.stringified = false, this.processed = false;
      let i;
      if (typeof r == "object" && r !== null && (r.type === "root" || r.type === "document")) i = di(r);
      else if (r instanceof ye || r instanceof zo) i = di(r.root), r.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = false), n.map.prev = r.map);
      else {
        let a = Dd;
        n.syntax && (a = n.syntax.parse), n.parser && (a = n.parser), a.parse && (a = a.parse);
        try {
          i = a(r, n);
        } catch (s) {
          this.processed = true, this.error = s;
        }
        i && !i[_d] && Rd.rebuild(i);
      }
      this.result = new zo(e, i, n), this.helpers = { ...hi, result: this.result, postcss: hi }, this.plugins = this.processor.plugins.map((a) => typeof a == "object" && a.prepare ? { ...a, ...a.prepare(this.result) } : a);
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
    get processor() {
      return this.result.processor;
    }
    get opts() {
      return this.result.opts;
    }
    get css() {
      return this.stringify().css;
    }
    get content() {
      return this.stringify().content;
    }
    get map() {
      return this.stringify().map;
    }
    get root() {
      return this.sync().root;
    }
    get messages() {
      return this.sync().messages;
    }
    warnings() {
      return this.sync().warnings();
    }
    toString() {
      return this.css;
    }
    then(e, r) {
      return this.async().then(e, r);
    }
    catch(e) {
      return this.async().catch(e);
    }
    finally(e) {
      return this.async().then(e, e);
    }
    async() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = true, this.processing) throw this.getAsyncError();
      for (let e of this.plugins) {
        let r = this.runOnRoot(e);
        if (It(r)) throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        let e = this.result.root;
        for (; !e[ge]; ) e[ge] = true, this.walkSync(e);
        if (this.listeners.OnceExit) if (e.type === "document") for (let r of e.nodes) this.visitSync(this.listeners.OnceExit, r);
        else this.visitSync(this.listeners.OnceExit, e);
      }
      return this.result;
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true, this.sync();
      let e = this.result.opts, r = Pd;
      e.syntax && (r = e.syntax.stringify), e.stringifier && (r = e.stringifier), r.stringify && (r = r.stringify);
      let i = new Td(r, this.result.root, this.result.opts).generate();
      return this.result.css = i[0], this.result.map = i[1], this.result;
    }
    walkSync(e) {
      e[ge] = true;
      let r = Bo(e);
      for (let n of r) if (n === Ke) e.nodes && e.each((i) => {
        i[ge] || this.walkSync(i);
      });
      else {
        let i = this.listeners[n];
        if (i && this.visitSync(i, e.toProxy())) return;
      }
    }
    visitSync(e, r) {
      for (let [n, i] of e) {
        this.result.lastPlugin = n;
        let a;
        try {
          a = i(r, this.helpers);
        } catch (s) {
          throw this.handleError(s, r.proxyOf);
        }
        if (r.type !== "root" && r.type !== "document" && !r.parent) return true;
        if (It(a)) throw this.getAsyncError();
      }
    }
    runOnRoot(e) {
      this.result.lastPlugin = e;
      try {
        if (typeof e == "object" && e.Once) {
          if (this.result.root.type === "document") {
            let r = this.result.root.nodes.map((n) => e.Once(n, this.helpers));
            return It(r[0]) ? Promise.all(r) : r;
          }
          return e.Once(this.result.root, this.helpers);
        } else if (typeof e == "function") return e(this.result.root, this.result);
      } catch (r) {
        throw this.handleError(r);
      }
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(e, r) {
      let n = this.result.lastPlugin;
      try {
        r && r.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin ? (e.plugin = n.postcssPlugin, e.setMessage()) : n.postcssVersion;
      } catch (i) {
        console && console.error && console.error(i);
      }
      return e;
    }
    async runAsync() {
      this.plugin = 0;
      for (let e = 0; e < this.plugins.length; e++) {
        let r = this.plugins[e], n = this.runOnRoot(r);
        if (It(n)) try {
          await n;
        } catch (i) {
          throw this.handleError(i);
        }
      }
      if (this.prepareVisitors(), this.hasListener) {
        let e = this.result.root;
        for (; !e[ge]; ) {
          e[ge] = true;
          let r = [Wo(e)];
          for (; r.length > 0; ) {
            let n = this.visitTick(r);
            if (It(n)) try {
              await n;
            } catch (i) {
              let a = r[r.length - 1].node;
              throw this.handleError(i, a);
            }
          }
        }
        if (this.listeners.OnceExit) for (let [r, n] of this.listeners.OnceExit) {
          this.result.lastPlugin = r;
          try {
            if (e.type === "document") {
              let i = e.nodes.map((a) => n(a, this.helpers));
              await Promise.all(i);
            } else await n(e, this.helpers);
          } catch (i) {
            throw this.handleError(i);
          }
        }
      }
      return this.processed = true, this.stringify();
    }
    prepareVisitors() {
      this.listeners = {};
      let e = (r, n, i) => {
        this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push([r, i]);
      };
      for (let r of this.plugins) if (typeof r == "object") for (let n in r) {
        if (!Nd[n] && /^[A-Z]/.test(n)) throw new Error(`Unknown event ${n} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
        if (!Fd[n]) if (typeof r[n] == "object") for (let i in r[n]) i === "*" ? e(r, n, r[n][i]) : e(r, n + "-" + i.toLowerCase(), r[n][i]);
        else typeof r[n] == "function" && e(r, n, r[n]);
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    visitTick(e) {
      let r = e[e.length - 1], { node: n, visitors: i } = r;
      if (n.type !== "root" && n.type !== "document" && !n.parent) {
        e.pop();
        return;
      }
      if (i.length > 0 && r.visitorIndex < i.length) {
        let [s, o] = i[r.visitorIndex];
        r.visitorIndex += 1, r.visitorIndex === i.length && (r.visitors = [], r.visitorIndex = 0), this.result.lastPlugin = s;
        try {
          return o(n.toProxy(), this.helpers);
        } catch (l) {
          throw this.handleError(l, n);
        }
      }
      if (r.iterator !== 0) {
        let s = r.iterator, o;
        for (; o = n.nodes[n.indexes[s]]; ) if (n.indexes[s] += 1, !o[ge]) {
          o[ge] = true, e.push(Wo(o));
          return;
        }
        r.iterator = 0, delete n.indexes[s];
      }
      let a = r.events;
      for (; r.eventIndex < a.length; ) {
        let s = a[r.eventIndex];
        if (r.eventIndex += 1, s === Ke) {
          n.nodes && n.nodes.length && (n[ge] = true, r.iterator = n.getIterator());
          return;
        } else if (this.listeners[s]) {
          r.visitors = this.listeners[s];
          return;
        }
      }
      e.pop();
    }
  };
  ye.registerPostcss = (t) => {
    hi = t;
  };
  Go.exports = ye;
  ye.default = ye;
  Md.registerLazyResult(ye);
  Id.registerLazyResult(ye);
});
var Ho = S((Jb, Yo) => {
  "use strict";
  var qd = si(), $d = yt(), Qb = li(), Ud = qr(), jd = Cr(), Dt = class {
    constructor(e, r, n) {
      r = r.toString(), this.stringified = false, this._processor = e, this._css = r, this._opts = n, this._map = void 0;
      let i, a = $d;
      this.result = new jd(this._processor, i, this._opts), this.result.css = r;
      let s = this;
      Object.defineProperty(this.result, "root", { get() {
        return s.root;
      } });
      let o = new qd(a, i, this._opts, r);
      if (o.isMap()) {
        let [l, u] = o.generate();
        l && (this.result.css = l), u && (this.result.map = u);
      }
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
    get processor() {
      return this.result.processor;
    }
    get opts() {
      return this.result.opts;
    }
    get css() {
      return this.result.css;
    }
    get content() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get root() {
      if (this._root) return this._root;
      let e, r = Ud;
      try {
        e = r(this._css, this._opts);
      } catch (n) {
        this.error = n;
      }
      if (this.error) throw this.error;
      return this._root = e, e;
    }
    get messages() {
      return [];
    }
    warnings() {
      return [];
    }
    toString() {
      return this._css;
    }
    then(e, r) {
      return this.async().then(e, r);
    }
    catch(e) {
      return this.async().catch(e);
    }
    finally(e) {
      return this.async().then(e, e);
    }
    async() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
  };
  Yo.exports = Dt;
  Dt.default = Dt;
});
var Jo = S((Xb, Qo) => {
  "use strict";
  var Vd = Ho(), zd = mi(), Wd = Er(), Bd = Je(), Ve = class {
    constructor(e = []) {
      this.version = "8.4.21", this.plugins = this.normalize(e);
    }
    use(e) {
      return this.plugins = this.plugins.concat(this.normalize([e])), this;
    }
    process(e, r = {}) {
      return this.plugins.length === 0 && typeof r.parser > "u" && typeof r.stringifier > "u" && typeof r.syntax > "u" ? new Vd(this, e, r) : new zd(this, e, r);
    }
    normalize(e) {
      let r = [];
      for (let n of e) if (n.postcss === true ? n = n() : n.postcss && (n = n.postcss), typeof n == "object" && Array.isArray(n.plugins)) r = r.concat(n.plugins);
      else if (typeof n == "object" && n.postcssPlugin) r.push(n);
      else if (typeof n == "function") r.push(n);
      else if (!(typeof n == "object" && (n.parse || n.stringify))) throw new Error(n + " is not a PostCSS plugin");
      return r;
    }
  };
  Qo.exports = Ve;
  Ve.default = Ve;
  Bd.registerProcessor(Ve);
  Wd.registerProcessor(Ve);
});
var Ko = S((Kb, Xo) => {
  "use strict";
  var Gd = xt(), Yd = Zn(), Hd = Ct(), Qd = Lr(), Jd = At(), Xd = Je(), Kd = Nr();
  function Mt(t, e) {
    if (Array.isArray(t)) return t.map((i) => Mt(i));
    let { inputs: r, ...n } = t;
    if (r) {
      e = [];
      for (let i of r) {
        let a = { ...i, __proto__: Jd.prototype };
        a.map && (a.map = { ...a.map, __proto__: Yd.prototype }), e.push(a);
      }
    }
    if (n.nodes && (n.nodes = t.nodes.map((i) => Mt(i, e))), n.source) {
      let { inputId: i, ...a } = n.source;
      n.source = a, i != null && (n.source.input = e[i]);
    }
    if (n.type === "root") return new Xd(n);
    if (n.type === "decl") return new Gd(n);
    if (n.type === "rule") return new Kd(n);
    if (n.type === "comment") return new Hd(n);
    if (n.type === "atrule") return new Qd(n);
    throw new Error("Unknown node type: " + t.type);
  }
  Xo.exports = Mt;
  Mt.default = Mt;
});
var Ze = S((Zb, sl) => {
  "use strict";
  var Zd = wr(), Zo = xt(), eh = mi(), th = Te(), gi = Jo(), rh = yt(), nh = Ko(), el = Er(), ih = ui(), tl = Ct(), rl = Lr(), sh = Cr(), ah = At(), oh = qr(), lh = ci(), nl = Nr(), il = Je(), uh = wt();
  function N(...t) {
    return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new gi(t);
  }
  N.plugin = function(e, r) {
    let n = false;
    function i(...s) {
      console && console.warn && !n && (n = true, console.warn(e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));
      let o = r(...s);
      return o.postcssPlugin = e, o.postcssVersion = new gi().version, o;
    }
    let a;
    return Object.defineProperty(i, "postcss", { get() {
      return a || (a = i()), a;
    } }), i.process = function(s, o, l) {
      return N([i(l)]).process(s, o);
    }, i;
  };
  N.stringify = rh;
  N.parse = oh;
  N.fromJSON = nh;
  N.list = lh;
  N.comment = (t) => new tl(t);
  N.atRule = (t) => new rl(t);
  N.decl = (t) => new Zo(t);
  N.rule = (t) => new nl(t);
  N.root = (t) => new il(t);
  N.document = (t) => new el(t);
  N.CssSyntaxError = Zd;
  N.Declaration = Zo;
  N.Container = th;
  N.Processor = gi;
  N.Document = el;
  N.Comment = tl;
  N.Warning = ih;
  N.AtRule = rl;
  N.Result = sh;
  N.Input = ah;
  N.Rule = nl;
  N.Root = il;
  N.Node = uh;
  eh.registerPostcss(N);
  sl.exports = N;
  N.default = N;
});
var Ur = S(($r, al) => {
  "use strict";
  $r.__esModule = true;
  $r.default = ph;
  function fh(t) {
    for (var e = t.toLowerCase(), r = "", n = false, i = 0; i < 6 && e[i] !== void 0; i++) {
      var a = e.charCodeAt(i), s = a >= 97 && a <= 102 || a >= 48 && a <= 57;
      if (n = a === 32, !s) break;
      r += e[i];
    }
    if (r.length !== 0) {
      var o = parseInt(r, 16), l = o >= 55296 && o <= 57343;
      return l || o === 0 || o > 1114111 ? ["�", r.length + (n ? 1 : 0)] : [String.fromCodePoint(o), r.length + (n ? 1 : 0)];
    }
  }
  var ch = /\\/;
  function ph(t) {
    var e = ch.test(t);
    if (!e) return t;
    for (var r = "", n = 0; n < t.length; n++) {
      if (t[n] === "\\") {
        var i = fh(t.slice(n + 1, n + 7));
        if (i !== void 0) {
          r += i[0], n += i[1];
          continue;
        }
        if (t[n + 1] === "\\") {
          r += "\\", n++;
          continue;
        }
        t.length === n + 1 && (r += t[n]);
        continue;
      }
      r += t[n];
    }
    return r;
  }
  al.exports = $r.default;
});
var ll = S((jr, ol) => {
  "use strict";
  jr.__esModule = true;
  jr.default = dh;
  function dh(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
    for (; r.length > 0; ) {
      var i = r.shift();
      if (!t[i]) return;
      t = t[i];
    }
    return t;
  }
  ol.exports = jr.default;
});
var fl = S((Vr, ul) => {
  "use strict";
  Vr.__esModule = true;
  Vr.default = hh;
  function hh(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
    for (; r.length > 0; ) {
      var i = r.shift();
      t[i] || (t[i] = {}), t = t[i];
    }
  }
  ul.exports = Vr.default;
});
var pl = S((zr, cl) => {
  "use strict";
  zr.__esModule = true;
  zr.default = mh;
  function mh(t) {
    for (var e = "", r = t.indexOf("/*"), n = 0; r >= 0; ) {
      e = e + t.slice(n, r);
      var i = t.indexOf("*/", r + 2);
      if (i < 0) return e;
      n = i + 2, r = t.indexOf("/*", n);
    }
    return e = e + t.slice(n), e;
  }
  cl.exports = zr.default;
});
var Lt = S((ve) => {
  "use strict";
  ve.__esModule = true;
  ve.unesc = ve.stripComments = ve.getProp = ve.ensureObject = void 0;
  var gh = Wr(Ur());
  ve.unesc = gh.default;
  var yh = Wr(ll());
  ve.getProp = yh.default;
  var vh = Wr(fl());
  ve.ensureObject = vh.default;
  var wh = Wr(pl());
  ve.stripComments = wh.default;
  function Wr(t) {
    return t && t.__esModule ? t : { default: t };
  }
});
var Oe = S((Nt, ml) => {
  "use strict";
  Nt.__esModule = true;
  Nt.default = void 0;
  var dl = Lt();
  function hl(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, n.key, n);
    }
  }
  function bh(t, e, r) {
    return e && hl(t.prototype, e), r && hl(t, r), Object.defineProperty(t, "prototype", { writable: false }), t;
  }
  var xh = function t(e, r) {
    if (typeof e != "object" || e === null) return e;
    var n = new e.constructor();
    for (var i in e) if (!!e.hasOwnProperty(i)) {
      var a = e[i], s = typeof a;
      i === "parent" && s === "object" ? r && (n[i] = r) : a instanceof Array ? n[i] = a.map(function(o) {
        return t(o, n);
      }) : n[i] = t(a, n);
    }
    return n;
  }, Sh = function() {
    function t(r) {
      r === void 0 && (r = {}), Object.assign(this, r), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || "", this.spaces.after = this.spaces.after || "";
    }
    var e = t.prototype;
    return e.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, e.replaceWith = function() {
      if (this.parent) {
        for (var n in arguments) this.parent.insertBefore(this, arguments[n]);
        this.remove();
      }
      return this;
    }, e.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, e.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, e.clone = function(n) {
      n === void 0 && (n = {});
      var i = xh(this);
      for (var a in n) i[a] = n[a];
      return i;
    }, e.appendToPropertyAndEscape = function(n, i, a) {
      this.raws || (this.raws = {});
      var s = this[n], o = this.raws[n];
      this[n] = s + i, o || a !== i ? this.raws[n] = (o || s) + a : delete this.raws[n];
    }, e.setPropertyAndEscape = function(n, i, a) {
      this.raws || (this.raws = {}), this[n] = i, this.raws[n] = a;
    }, e.setPropertyWithoutEscape = function(n, i) {
      this[n] = i, this.raws && delete this.raws[n];
    }, e.isAtPosition = function(n, i) {
      if (this.source && this.source.start && this.source.end) return !(this.source.start.line > n || this.source.end.line < n || this.source.start.line === n && this.source.start.column > i || this.source.end.line === n && this.source.end.column < i);
    }, e.stringifyProperty = function(n) {
      return this.raws && this.raws[n] || this[n];
    }, e.valueToString = function() {
      return String(this.stringifyProperty("value"));
    }, e.toString = function() {
      return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join("");
    }, bh(t, [{ key: "rawSpaceBefore", get: function() {
      var n = this.raws && this.raws.spaces && this.raws.spaces.before;
      return n === void 0 && (n = this.spaces && this.spaces.before), n || "";
    }, set: function(n) {
      (0, dl.ensureObject)(this, "raws", "spaces"), this.raws.spaces.before = n;
    } }, { key: "rawSpaceAfter", get: function() {
      var n = this.raws && this.raws.spaces && this.raws.spaces.after;
      return n === void 0 && (n = this.spaces.after), n || "";
    }, set: function(n) {
      (0, dl.ensureObject)(this, "raws", "spaces"), this.raws.spaces.after = n;
    } }]), t;
  }();
  Nt.default = Sh;
  ml.exports = Nt.default;
});
var J = S((U) => {
  "use strict";
  U.__esModule = true;
  U.UNIVERSAL = U.TAG = U.STRING = U.SELECTOR = U.ROOT = U.PSEUDO = U.NESTING = U.ID = U.COMMENT = U.COMBINATOR = U.CLASS = U.ATTRIBUTE = void 0;
  var kh = "tag";
  U.TAG = kh;
  var Oh = "string";
  U.STRING = Oh;
  var Ah = "selector";
  U.SELECTOR = Ah;
  var Eh = "root";
  U.ROOT = Eh;
  var Ch = "pseudo";
  U.PSEUDO = Ch;
  var _h = "nesting";
  U.NESTING = _h;
  var Th = "id";
  U.ID = Th;
  var Ph = "comment";
  U.COMMENT = Ph;
  var Rh = "combinator";
  U.COMBINATOR = Rh;
  var Ih = "class";
  U.CLASS = Ih;
  var Dh = "attribute";
  U.ATTRIBUTE = Dh;
  var Mh = "universal";
  U.UNIVERSAL = Mh;
});
var Br = S((Ft, wl) => {
  "use strict";
  Ft.__esModule = true;
  Ft.default = void 0;
  var Lh = Fh(Oe()), Ae = Nh(J());
  function vl(t) {
    if (typeof WeakMap != "function") return null;
    var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
    return (vl = function(i) {
      return i ? r : e;
    })(t);
  }
  function Nh(t, e) {
    if (!e && t && t.__esModule) return t;
    if (t === null || typeof t != "object" && typeof t != "function") return { default: t };
    var r = vl(e);
    if (r && r.has(t)) return r.get(t);
    var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in t) if (a !== "default" && Object.prototype.hasOwnProperty.call(t, a)) {
      var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a];
    }
    return n.default = t, r && r.set(t, n), n;
  }
  function Fh(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function qh(t, e) {
    var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r) return (r = r.call(t)).next.bind(r);
    if (Array.isArray(t) || (r = $h(t)) || e && t && typeof t.length == "number") {
      r && (t = r);
      var n = 0;
      return function() {
        return n >= t.length ? { done: true } : { done: false, value: t[n++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function $h(t, e) {
    if (!!t) {
      if (typeof t == "string") return gl(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gl(t, e);
    }
  }
  function gl(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  function yl(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, n.key, n);
    }
  }
  function Uh(t, e, r) {
    return e && yl(t.prototype, e), r && yl(t, r), Object.defineProperty(t, "prototype", { writable: false }), t;
  }
  function jh(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, yi(t, e);
  }
  function yi(t, e) {
    return yi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, yi(t, e);
  }
  var Vh = function(t) {
    jh(e, t);
    function e(n) {
      var i;
      return i = t.call(this, n) || this, i.nodes || (i.nodes = []), i;
    }
    var r = e.prototype;
    return r.append = function(i) {
      return i.parent = this, this.nodes.push(i), this;
    }, r.prepend = function(i) {
      return i.parent = this, this.nodes.unshift(i), this;
    }, r.at = function(i) {
      return this.nodes[i];
    }, r.index = function(i) {
      return typeof i == "number" ? i : this.nodes.indexOf(i);
    }, r.removeChild = function(i) {
      i = this.index(i), this.at(i).parent = void 0, this.nodes.splice(i, 1);
      var a;
      for (var s in this.indexes) a = this.indexes[s], a >= i && (this.indexes[s] = a - 1);
      return this;
    }, r.removeAll = function() {
      for (var i = qh(this.nodes), a; !(a = i()).done; ) {
        var s = a.value;
        s.parent = void 0;
      }
      return this.nodes = [], this;
    }, r.empty = function() {
      return this.removeAll();
    }, r.insertAfter = function(i, a) {
      a.parent = this;
      var s = this.index(i);
      this.nodes.splice(s + 1, 0, a), a.parent = this;
      var o;
      for (var l in this.indexes) o = this.indexes[l], s <= o && (this.indexes[l] = o + 1);
      return this;
    }, r.insertBefore = function(i, a) {
      a.parent = this;
      var s = this.index(i);
      this.nodes.splice(s, 0, a), a.parent = this;
      var o;
      for (var l in this.indexes) o = this.indexes[l], o <= s && (this.indexes[l] = o + 1);
      return this;
    }, r._findChildAtPosition = function(i, a) {
      var s = void 0;
      return this.each(function(o) {
        if (o.atPosition) {
          var l = o.atPosition(i, a);
          if (l) return s = l, false;
        } else if (o.isAtPosition(i, a)) return s = o, false;
      }), s;
    }, r.atPosition = function(i, a) {
      if (this.isAtPosition(i, a)) return this._findChildAtPosition(i, a) || this;
    }, r._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, r.each = function(i) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var a = this.lastEach;
      if (this.indexes[a] = 0, !!this.length) {
        for (var s, o; this.indexes[a] < this.length && (s = this.indexes[a], o = i(this.at(s), s), o !== false); ) this.indexes[a] += 1;
        if (delete this.indexes[a], o === false) return false;
      }
    }, r.walk = function(i) {
      return this.each(function(a, s) {
        var o = i(a, s);
        if (o !== false && a.length && (o = a.walk(i)), o === false) return false;
      });
    }, r.walkAttributes = function(i) {
      var a = this;
      return this.walk(function(s) {
        if (s.type === Ae.ATTRIBUTE) return i.call(a, s);
      });
    }, r.walkClasses = function(i) {
      var a = this;
      return this.walk(function(s) {
        if (s.type === Ae.CLASS) return i.call(a, s);
      });
    }, r.walkCombinators = function(i) {
      var a = this;
      return this.walk(function(s) {
        if (s.type === Ae.COMBINATOR) return i.call(a, s);
      });
    }, r.walkComments = function(i) {
      var a = this;
      return this.walk(function(s) {
        if (s.type === Ae.COMMENT) return i.call(a, s);
      });
    }, r.walkIds = function(i) {
      var a = this;
      return this.walk(function(s) {
        if (s.type === Ae.ID) return i.call(a, s);
      });
    }, r.walkNesting = function(i) {
      var a = this;
      return this.walk(function(s) {
        if (s.type === Ae.NESTING) return i.call(a, s);
      });
    }, r.walkPseudos = function(i) {
      var a = this;
      return this.walk(function(s) {
        if (s.type === Ae.PSEUDO) return i.call(a, s);
      });
    }, r.walkTags = function(i) {
      var a = this;
      return this.walk(function(s) {
        if (s.type === Ae.TAG) return i.call(a, s);
      });
    }, r.walkUniversals = function(i) {
      var a = this;
      return this.walk(function(s) {
        if (s.type === Ae.UNIVERSAL) return i.call(a, s);
      });
    }, r.split = function(i) {
      var a = this, s = [];
      return this.reduce(function(o, l, u) {
        var f = i.call(a, l);
        return s.push(l), f ? (o.push(s), s = []) : u === a.length - 1 && o.push(s), o;
      }, []);
    }, r.map = function(i) {
      return this.nodes.map(i);
    }, r.reduce = function(i, a) {
      return this.nodes.reduce(i, a);
    }, r.every = function(i) {
      return this.nodes.every(i);
    }, r.some = function(i) {
      return this.nodes.some(i);
    }, r.filter = function(i) {
      return this.nodes.filter(i);
    }, r.sort = function(i) {
      return this.nodes.sort(i);
    }, r.toString = function() {
      return this.map(String).join("");
    }, Uh(e, [{ key: "first", get: function() {
      return this.at(0);
    } }, { key: "last", get: function() {
      return this.at(this.length - 1);
    } }, { key: "length", get: function() {
      return this.nodes.length;
    } }]), e;
  }(Lh.default);
  Ft.default = Vh;
  wl.exports = Ft.default;
});
var wi = S((qt, xl) => {
  "use strict";
  qt.__esModule = true;
  qt.default = void 0;
  var zh = Bh(Br()), Wh = J();
  function Bh(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function bl(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, n.key, n);
    }
  }
  function Gh(t, e, r) {
    return e && bl(t.prototype, e), r && bl(t, r), Object.defineProperty(t, "prototype", { writable: false }), t;
  }
  function Yh(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, vi(t, e);
  }
  function vi(t, e) {
    return vi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, vi(t, e);
  }
  var Hh = function(t) {
    Yh(e, t);
    function e(n) {
      var i;
      return i = t.call(this, n) || this, i.type = Wh.ROOT, i;
    }
    var r = e.prototype;
    return r.toString = function() {
      var i = this.reduce(function(a, s) {
        return a.push(String(s)), a;
      }, []).join(",");
      return this.trailingComma ? i + "," : i;
    }, r.error = function(i, a) {
      return this._error ? this._error(i, a) : new Error(i);
    }, Gh(e, [{ key: "errorGenerator", set: function(i) {
      this._error = i;
    } }]), e;
  }(zh.default);
  qt.default = Hh;
  xl.exports = qt.default;
});
var xi = S(($t, Sl) => {
  "use strict";
  $t.__esModule = true;
  $t.default = void 0;
  var Qh = Xh(Br()), Jh = J();
  function Xh(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Kh(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, bi(t, e);
  }
  function bi(t, e) {
    return bi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, bi(t, e);
  }
  var Zh = function(t) {
    Kh(e, t);
    function e(r) {
      var n;
      return n = t.call(this, r) || this, n.type = Jh.SELECTOR, n;
    }
    return e;
  }(Qh.default);
  $t.default = Zh;
  Sl.exports = $t.default;
});
var Gr = S((Cx, kl) => {
  "use strict";
  var em = {}, tm = em.hasOwnProperty, rm = function(e, r) {
    if (!e) return r;
    var n = {};
    for (var i in r) n[i] = tm.call(e, i) ? e[i] : r[i];
    return n;
  }, nm = /[ -,\.\/:-@\[-\^`\{-~]/, im = /[ -,\.\/:-@\[\]\^`\{-~]/, sm = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, Si = function t(e, r) {
    r = rm(r, t.options), r.quotes != "single" && r.quotes != "double" && (r.quotes = "single");
    for (var n = r.quotes == "double" ? '"' : "'", i = r.isIdentifier, a = e.charAt(0), s = "", o = 0, l = e.length; o < l; ) {
      var u = e.charAt(o++), f = u.charCodeAt(), p = void 0;
      if (f < 32 || f > 126) {
        if (f >= 55296 && f <= 56319 && o < l) {
          var c = e.charCodeAt(o++);
          (c & 64512) == 56320 ? f = ((f & 1023) << 10) + (c & 1023) + 65536 : o--;
        }
        p = "\\" + f.toString(16).toUpperCase() + " ";
      } else r.escapeEverything ? nm.test(u) ? p = "\\" + u : p = "\\" + f.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(u) ? p = "\\" + f.toString(16).toUpperCase() + " " : u == "\\" || !i && (u == '"' && n == u || u == "'" && n == u) || i && im.test(u) ? p = "\\" + u : p = u;
      s += p;
    }
    return i && (/^-[-\d]/.test(s) ? s = "\\-" + s.slice(1) : /\d/.test(a) && (s = "\\3" + a + " " + s.slice(1))), s = s.replace(sm, function(d, h, y) {
      return h && h.length % 2 ? d : (h || "") + y;
    }), !i && r.wrap ? n + s + n : s;
  };
  Si.options = { escapeEverything: false, isIdentifier: false, quotes: "single", wrap: false };
  Si.version = "3.0.0";
  kl.exports = Si;
});
var Oi = S((Ut, El) => {
  "use strict";
  Ut.__esModule = true;
  Ut.default = void 0;
  var am = Al(Gr()), om = Lt(), lm = Al(Oe()), um = J();
  function Al(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Ol(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, n.key, n);
    }
  }
  function fm(t, e, r) {
    return e && Ol(t.prototype, e), r && Ol(t, r), Object.defineProperty(t, "prototype", { writable: false }), t;
  }
  function cm(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, ki(t, e);
  }
  function ki(t, e) {
    return ki = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, ki(t, e);
  }
  var pm = function(t) {
    cm(e, t);
    function e(n) {
      var i;
      return i = t.call(this, n) || this, i.type = um.CLASS, i._constructed = true, i;
    }
    var r = e.prototype;
    return r.valueToString = function() {
      return "." + t.prototype.valueToString.call(this);
    }, fm(e, [{ key: "value", get: function() {
      return this._value;
    }, set: function(i) {
      if (this._constructed) {
        var a = (0, am.default)(i, { isIdentifier: true });
        a !== i ? ((0, om.ensureObject)(this, "raws"), this.raws.value = a) : this.raws && delete this.raws.value;
      }
      this._value = i;
    } }]), e;
  }(lm.default);
  Ut.default = pm;
  El.exports = Ut.default;
});
var Ei = S((jt, Cl) => {
  "use strict";
  jt.__esModule = true;
  jt.default = void 0;
  var dm = mm(Oe()), hm = J();
  function mm(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function gm(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Ai(t, e);
  }
  function Ai(t, e) {
    return Ai = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, Ai(t, e);
  }
  var ym = function(t) {
    gm(e, t);
    function e(r) {
      var n;
      return n = t.call(this, r) || this, n.type = hm.COMMENT, n;
    }
    return e;
  }(dm.default);
  jt.default = ym;
  Cl.exports = jt.default;
});
var _i = S((Vt, _l) => {
  "use strict";
  Vt.__esModule = true;
  Vt.default = void 0;
  var vm = bm(Oe()), wm = J();
  function bm(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function xm(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Ci(t, e);
  }
  function Ci(t, e) {
    return Ci = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, Ci(t, e);
  }
  var Sm = function(t) {
    xm(e, t);
    function e(n) {
      var i;
      return i = t.call(this, n) || this, i.type = wm.ID, i;
    }
    var r = e.prototype;
    return r.valueToString = function() {
      return "#" + t.prototype.valueToString.call(this);
    }, e;
  }(vm.default);
  Vt.default = Sm;
  _l.exports = Vt.default;
});
var Yr = S((zt, Rl) => {
  "use strict";
  zt.__esModule = true;
  zt.default = void 0;
  var km = Pl(Gr()), Om = Lt(), Am = Pl(Oe());
  function Pl(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Tl(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, n.key, n);
    }
  }
  function Em(t, e, r) {
    return e && Tl(t.prototype, e), r && Tl(t, r), Object.defineProperty(t, "prototype", { writable: false }), t;
  }
  function Cm(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Ti(t, e);
  }
  function Ti(t, e) {
    return Ti = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, Ti(t, e);
  }
  var _m = function(t) {
    Cm(e, t);
    function e() {
      return t.apply(this, arguments) || this;
    }
    var r = e.prototype;
    return r.qualifiedName = function(i) {
      return this.namespace ? this.namespaceString + "|" + i : i;
    }, r.valueToString = function() {
      return this.qualifiedName(t.prototype.valueToString.call(this));
    }, Em(e, [{ key: "namespace", get: function() {
      return this._namespace;
    }, set: function(i) {
      if (i === true || i === "*" || i === "&") {
        this._namespace = i, this.raws && delete this.raws.namespace;
        return;
      }
      var a = (0, km.default)(i, { isIdentifier: true });
      this._namespace = i, a !== i ? ((0, Om.ensureObject)(this, "raws"), this.raws.namespace = a) : this.raws && delete this.raws.namespace;
    } }, { key: "ns", get: function() {
      return this._namespace;
    }, set: function(i) {
      this.namespace = i;
    } }, { key: "namespaceString", get: function() {
      if (this.namespace) {
        var i = this.stringifyProperty("namespace");
        return i === true ? "" : i;
      } else return "";
    } }]), e;
  }(Am.default);
  zt.default = _m;
  Rl.exports = zt.default;
});
var Ri = S((Wt, Il) => {
  "use strict";
  Wt.__esModule = true;
  Wt.default = void 0;
  var Tm = Rm(Yr()), Pm = J();
  function Rm(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Im(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Pi(t, e);
  }
  function Pi(t, e) {
    return Pi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, Pi(t, e);
  }
  var Dm = function(t) {
    Im(e, t);
    function e(r) {
      var n;
      return n = t.call(this, r) || this, n.type = Pm.TAG, n;
    }
    return e;
  }(Tm.default);
  Wt.default = Dm;
  Il.exports = Wt.default;
});
var Di = S((Bt, Dl) => {
  "use strict";
  Bt.__esModule = true;
  Bt.default = void 0;
  var Mm = Nm(Oe()), Lm = J();
  function Nm(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Fm(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Ii(t, e);
  }
  function Ii(t, e) {
    return Ii = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, Ii(t, e);
  }
  var qm = function(t) {
    Fm(e, t);
    function e(r) {
      var n;
      return n = t.call(this, r) || this, n.type = Lm.STRING, n;
    }
    return e;
  }(Mm.default);
  Bt.default = qm;
  Dl.exports = Bt.default;
});
var Li = S((Gt, Ml) => {
  "use strict";
  Gt.__esModule = true;
  Gt.default = void 0;
  var $m = jm(Br()), Um = J();
  function jm(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Vm(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Mi(t, e);
  }
  function Mi(t, e) {
    return Mi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, Mi(t, e);
  }
  var zm = function(t) {
    Vm(e, t);
    function e(n) {
      var i;
      return i = t.call(this, n) || this, i.type = Um.PSEUDO, i;
    }
    var r = e.prototype;
    return r.toString = function() {
      var i = this.length ? "(" + this.map(String).join(",") + ")" : "";
      return [this.rawSpaceBefore, this.stringifyProperty("value"), i, this.rawSpaceAfter].join("");
    }, e;
  }($m.default);
  Gt.default = zm;
  Ml.exports = Gt.default;
});
var Nl = S((_x, Ll) => {
  Ll.exports = Wm;
  function Wm(t, e) {
    if (Ni("noDeprecation")) return t;
    var r = false;
    function n() {
      if (!r) {
        if (Ni("throwDeprecation")) throw new Error(e);
        Ni("traceDeprecation") ? console.trace(e) : console.warn(e), r = true;
      }
      return t.apply(this, arguments);
    }
    return n;
  }
  function Ni(t) {
    try {
      if (!global.localStorage) return false;
    } catch {
      return false;
    }
    var e = global.localStorage[t];
    return e == null ? false : String(e).toLowerCase() === "true";
  }
});
var Vi = S((Qt) => {
  "use strict";
  Qt.__esModule = true;
  Qt.default = void 0;
  Qt.unescapeValue = ji;
  var Yt = Ui(Gr()), Bm = Ui(Ur()), Gm = Ui(Yr()), Ym = J(), Fi;
  function Ui(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Fl(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, n.key, n);
    }
  }
  function Hm(t, e, r) {
    return e && Fl(t.prototype, e), r && Fl(t, r), Object.defineProperty(t, "prototype", { writable: false }), t;
  }
  function Qm(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, $i(t, e);
  }
  function $i(t, e) {
    return $i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, $i(t, e);
  }
  var Ht = Nl(), Jm = /^('|")([^]*)\1$/, Xm = Ht(function() {
  }, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."), Km = Ht(function() {
  }, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."), Zm = Ht(function() {
  }, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
  function ji(t) {
    var e = false, r = null, n = t, i = n.match(Jm);
    return i && (r = i[1], n = i[2]), n = (0, Bm.default)(n), n !== t && (e = true), { deprecatedUsage: e, unescaped: n, quoteMark: r };
  }
  function eg(t) {
    if (t.quoteMark !== void 0 || t.value === void 0) return t;
    Zm();
    var e = ji(t.value), r = e.quoteMark, n = e.unescaped;
    return t.raws || (t.raws = {}), t.raws.value === void 0 && (t.raws.value = t.value), t.value = n, t.quoteMark = r, t;
  }
  var Hr = function(t) {
    Qm(e, t);
    function e(n) {
      var i;
      return n === void 0 && (n = {}), i = t.call(this, eg(n)) || this, i.type = Ym.ATTRIBUTE, i.raws = i.raws || {}, Object.defineProperty(i.raws, "unquoted", { get: Ht(function() {
        return i.value;
      }, "attr.raws.unquoted is deprecated. Call attr.value instead."), set: Ht(function() {
        return i.value;
      }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.") }), i._constructed = true, i;
    }
    var r = e.prototype;
    return r.getQuotedValue = function(i) {
      i === void 0 && (i = {});
      var a = this._determineQuoteMark(i), s = qi[a], o = (0, Yt.default)(this._value, s);
      return o;
    }, r._determineQuoteMark = function(i) {
      return i.smart ? this.smartQuoteMark(i) : this.preferredQuoteMark(i);
    }, r.setValue = function(i, a) {
      a === void 0 && (a = {}), this._value = i, this._quoteMark = this._determineQuoteMark(a), this._syncRawValue();
    }, r.smartQuoteMark = function(i) {
      var a = this.value, s = a.replace(/[^']/g, "").length, o = a.replace(/[^"]/g, "").length;
      if (s + o === 0) {
        var l = (0, Yt.default)(a, { isIdentifier: true });
        if (l === a) return e.NO_QUOTE;
        var u = this.preferredQuoteMark(i);
        if (u === e.NO_QUOTE) {
          var f = this.quoteMark || i.quoteMark || e.DOUBLE_QUOTE, p = qi[f], c = (0, Yt.default)(a, p);
          if (c.length < l.length) return f;
        }
        return u;
      } else return o === s ? this.preferredQuoteMark(i) : o < s ? e.DOUBLE_QUOTE : e.SINGLE_QUOTE;
    }, r.preferredQuoteMark = function(i) {
      var a = i.preferCurrentQuoteMark ? this.quoteMark : i.quoteMark;
      return a === void 0 && (a = i.preferCurrentQuoteMark ? i.quoteMark : this.quoteMark), a === void 0 && (a = e.DOUBLE_QUOTE), a;
    }, r._syncRawValue = function() {
      var i = (0, Yt.default)(this._value, qi[this.quoteMark]);
      i === this._value ? this.raws && delete this.raws.value : this.raws.value = i;
    }, r._handleEscapes = function(i, a) {
      if (this._constructed) {
        var s = (0, Yt.default)(a, { isIdentifier: true });
        s !== a ? this.raws[i] = s : delete this.raws[i];
      }
    }, r._spacesFor = function(i) {
      var a = { before: "", after: "" }, s = this.spaces[i] || {}, o = this.raws.spaces && this.raws.spaces[i] || {};
      return Object.assign(a, s, o);
    }, r._stringFor = function(i, a, s) {
      a === void 0 && (a = i), s === void 0 && (s = ql);
      var o = this._spacesFor(a);
      return s(this.stringifyProperty(i), o);
    }, r.offsetOf = function(i) {
      var a = 1, s = this._spacesFor("attribute");
      if (a += s.before.length, i === "namespace" || i === "ns") return this.namespace ? a : -1;
      if (i === "attributeNS" || (a += this.namespaceString.length, this.namespace && (a += 1), i === "attribute")) return a;
      a += this.stringifyProperty("attribute").length, a += s.after.length;
      var o = this._spacesFor("operator");
      a += o.before.length;
      var l = this.stringifyProperty("operator");
      if (i === "operator") return l ? a : -1;
      a += l.length, a += o.after.length;
      var u = this._spacesFor("value");
      a += u.before.length;
      var f = this.stringifyProperty("value");
      if (i === "value") return f ? a : -1;
      a += f.length, a += u.after.length;
      var p = this._spacesFor("insensitive");
      return a += p.before.length, i === "insensitive" && this.insensitive ? a : -1;
    }, r.toString = function() {
      var i = this, a = [this.rawSpaceBefore, "["];
      return a.push(this._stringFor("qualifiedAttribute", "attribute")), this.operator && (this.value || this.value === "") && (a.push(this._stringFor("operator")), a.push(this._stringFor("value")), a.push(this._stringFor("insensitiveFlag", "insensitive", function(s, o) {
        return s.length > 0 && !i.quoted && o.before.length === 0 && !(i.spaces.value && i.spaces.value.after) && (o.before = " "), ql(s, o);
      }))), a.push("]"), a.push(this.rawSpaceAfter), a.join("");
    }, Hm(e, [{ key: "quoted", get: function() {
      var i = this.quoteMark;
      return i === "'" || i === '"';
    }, set: function(i) {
      Km();
    } }, { key: "quoteMark", get: function() {
      return this._quoteMark;
    }, set: function(i) {
      if (!this._constructed) {
        this._quoteMark = i;
        return;
      }
      this._quoteMark !== i && (this._quoteMark = i, this._syncRawValue());
    } }, { key: "qualifiedAttribute", get: function() {
      return this.qualifiedName(this.raws.attribute || this.attribute);
    } }, { key: "insensitiveFlag", get: function() {
      return this.insensitive ? "i" : "";
    } }, { key: "value", get: function() {
      return this._value;
    }, set: function(i) {
      if (this._constructed) {
        var a = ji(i), s = a.deprecatedUsage, o = a.unescaped, l = a.quoteMark;
        if (s && Xm(), o === this._value && l === this._quoteMark) return;
        this._value = o, this._quoteMark = l, this._syncRawValue();
      } else this._value = i;
    } }, { key: "insensitive", get: function() {
      return this._insensitive;
    }, set: function(i) {
      i || (this._insensitive = false, this.raws && (this.raws.insensitiveFlag === "I" || this.raws.insensitiveFlag === "i") && (this.raws.insensitiveFlag = void 0)), this._insensitive = i;
    } }, { key: "attribute", get: function() {
      return this._attribute;
    }, set: function(i) {
      this._handleEscapes("attribute", i), this._attribute = i;
    } }]), e;
  }(Gm.default);
  Qt.default = Hr;
  Hr.NO_QUOTE = null;
  Hr.SINGLE_QUOTE = "'";
  Hr.DOUBLE_QUOTE = '"';
  var qi = (Fi = { "'": { quotes: "single", wrap: true }, '"': { quotes: "double", wrap: true } }, Fi[null] = { isIdentifier: true }, Fi);
  function ql(t, e) {
    return "" + e.before + t + e.after;
  }
});
var Wi = S((Jt, $l) => {
  "use strict";
  Jt.__esModule = true;
  Jt.default = void 0;
  var tg = ng(Yr()), rg = J();
  function ng(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function ig(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, zi(t, e);
  }
  function zi(t, e) {
    return zi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, zi(t, e);
  }
  var sg = function(t) {
    ig(e, t);
    function e(r) {
      var n;
      return n = t.call(this, r) || this, n.type = rg.UNIVERSAL, n.value = "*", n;
    }
    return e;
  }(tg.default);
  Jt.default = sg;
  $l.exports = Jt.default;
});
var Gi = S((Xt, Ul) => {
  "use strict";
  Xt.__esModule = true;
  Xt.default = void 0;
  var ag = lg(Oe()), og = J();
  function lg(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function ug(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Bi(t, e);
  }
  function Bi(t, e) {
    return Bi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, Bi(t, e);
  }
  var fg = function(t) {
    ug(e, t);
    function e(r) {
      var n;
      return n = t.call(this, r) || this, n.type = og.COMBINATOR, n;
    }
    return e;
  }(ag.default);
  Xt.default = fg;
  Ul.exports = Xt.default;
});
var Hi = S((Kt, jl) => {
  "use strict";
  Kt.__esModule = true;
  Kt.default = void 0;
  var cg = dg(Oe()), pg = J();
  function dg(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function hg(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Yi(t, e);
  }
  function Yi(t, e) {
    return Yi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
      return n.__proto__ = i, n;
    }, Yi(t, e);
  }
  var mg = function(t) {
    hg(e, t);
    function e(r) {
      var n;
      return n = t.call(this, r) || this, n.type = pg.NESTING, n.value = "&", n;
    }
    return e;
  }(cg.default);
  Kt.default = mg;
  jl.exports = Kt.default;
});
var zl = S((Qr, Vl) => {
  "use strict";
  Qr.__esModule = true;
  Qr.default = gg;
  function gg(t) {
    return t.sort(function(e, r) {
      return e - r;
    });
  }
  Vl.exports = Qr.default;
});
var Qi = S((P) => {
  "use strict";
  P.__esModule = true;
  P.word = P.tilde = P.tab = P.str = P.space = P.slash = P.singleQuote = P.semicolon = P.plus = P.pipe = P.openSquare = P.openParenthesis = P.newline = P.greaterThan = P.feed = P.equals = P.doubleQuote = P.dollar = P.cr = P.comment = P.comma = P.combinator = P.colon = P.closeSquare = P.closeParenthesis = P.caret = P.bang = P.backslash = P.at = P.asterisk = P.ampersand = void 0;
  var yg = 38;
  P.ampersand = yg;
  var vg = 42;
  P.asterisk = vg;
  var wg = 64;
  P.at = wg;
  var bg = 44;
  P.comma = bg;
  var xg = 58;
  P.colon = xg;
  var Sg = 59;
  P.semicolon = Sg;
  var kg = 40;
  P.openParenthesis = kg;
  var Og = 41;
  P.closeParenthesis = Og;
  var Ag = 91;
  P.openSquare = Ag;
  var Eg = 93;
  P.closeSquare = Eg;
  var Cg = 36;
  P.dollar = Cg;
  var _g = 126;
  P.tilde = _g;
  var Tg = 94;
  P.caret = Tg;
  var Pg = 43;
  P.plus = Pg;
  var Rg = 61;
  P.equals = Rg;
  var Ig = 124;
  P.pipe = Ig;
  var Dg = 62;
  P.greaterThan = Dg;
  var Mg = 32;
  P.space = Mg;
  var Wl = 39;
  P.singleQuote = Wl;
  var Lg = 34;
  P.doubleQuote = Lg;
  var Ng = 47;
  P.slash = Ng;
  var Fg = 33;
  P.bang = Fg;
  var qg = 92;
  P.backslash = qg;
  var $g = 13;
  P.cr = $g;
  var Ug = 12;
  P.feed = Ug;
  var jg = 10;
  P.newline = jg;
  var Vg = 9;
  P.tab = Vg;
  var zg = Wl;
  P.str = zg;
  var Wg = -1;
  P.comment = Wg;
  var Bg = -2;
  P.word = Bg;
  var Gg = -3;
  P.combinator = Gg;
});
var Yl = S((Zt) => {
  "use strict";
  Zt.__esModule = true;
  Zt.FIELDS = void 0;
  Zt.default = Zg;
  var E = Yg(Qi()), et, q;
  function Gl(t) {
    if (typeof WeakMap != "function") return null;
    var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
    return (Gl = function(i) {
      return i ? r : e;
    })(t);
  }
  function Yg(t, e) {
    if (!e && t && t.__esModule) return t;
    if (t === null || typeof t != "object" && typeof t != "function") return { default: t };
    var r = Gl(e);
    if (r && r.has(t)) return r.get(t);
    var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in t) if (a !== "default" && Object.prototype.hasOwnProperty.call(t, a)) {
      var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a];
    }
    return n.default = t, r && r.set(t, n), n;
  }
  var Hg = (et = {}, et[E.tab] = true, et[E.newline] = true, et[E.cr] = true, et[E.feed] = true, et), Qg = (q = {}, q[E.space] = true, q[E.tab] = true, q[E.newline] = true, q[E.cr] = true, q[E.feed] = true, q[E.ampersand] = true, q[E.asterisk] = true, q[E.bang] = true, q[E.comma] = true, q[E.colon] = true, q[E.semicolon] = true, q[E.openParenthesis] = true, q[E.closeParenthesis] = true, q[E.openSquare] = true, q[E.closeSquare] = true, q[E.singleQuote] = true, q[E.doubleQuote] = true, q[E.plus] = true, q[E.pipe] = true, q[E.tilde] = true, q[E.greaterThan] = true, q[E.equals] = true, q[E.dollar] = true, q[E.caret] = true, q[E.slash] = true, q), Ji = {}, Bl = "0123456789abcdefABCDEF";
  for (Jr = 0; Jr < Bl.length; Jr++) Ji[Bl.charCodeAt(Jr)] = true;
  var Jr;
  function Jg(t, e) {
    var r = e, n;
    do {
      if (n = t.charCodeAt(r), Qg[n]) return r - 1;
      n === E.backslash ? r = Xg(t, r) + 1 : r++;
    } while (r < t.length);
    return r - 1;
  }
  function Xg(t, e) {
    var r = e, n = t.charCodeAt(r + 1);
    if (!Hg[n]) if (Ji[n]) {
      var i = 0;
      do
        r++, i++, n = t.charCodeAt(r + 1);
      while (Ji[n] && i < 6);
      i < 6 && n === E.space && r++;
    } else r++;
    return r;
  }
  var Kg = { TYPE: 0, START_LINE: 1, START_COL: 2, END_LINE: 3, END_COL: 4, START_POS: 5, END_POS: 6 };
  Zt.FIELDS = Kg;
  function Zg(t) {
    var e = [], r = t.css.valueOf(), n = r, i = n.length, a = -1, s = 1, o = 0, l = 0, u, f, p, c, d, h, y, m, g, v, b, w, O;
    function x(C, A) {
      if (t.safe) r += A, g = r.length - 1;
      else throw t.error("Unclosed " + C, s, o - a, o);
    }
    for (; o < i; ) {
      switch (u = r.charCodeAt(o), u === E.newline && (a = o, s += 1), u) {
        case E.space:
        case E.tab:
        case E.newline:
        case E.cr:
        case E.feed:
          g = o;
          do
            g += 1, u = r.charCodeAt(g), u === E.newline && (a = g, s += 1);
          while (u === E.space || u === E.newline || u === E.tab || u === E.cr || u === E.feed);
          O = E.space, c = s, p = g - a - 1, l = g;
          break;
        case E.plus:
        case E.greaterThan:
        case E.tilde:
        case E.pipe:
          g = o;
          do
            g += 1, u = r.charCodeAt(g);
          while (u === E.plus || u === E.greaterThan || u === E.tilde || u === E.pipe);
          O = E.combinator, c = s, p = o - a, l = g;
          break;
        case E.asterisk:
        case E.ampersand:
        case E.bang:
        case E.comma:
        case E.equals:
        case E.dollar:
        case E.caret:
        case E.openSquare:
        case E.closeSquare:
        case E.colon:
        case E.semicolon:
        case E.openParenthesis:
        case E.closeParenthesis:
          g = o, O = u, c = s, p = o - a, l = g + 1;
          break;
        case E.singleQuote:
        case E.doubleQuote:
          w = u === E.singleQuote ? "'" : '"', g = o;
          do
            for (d = false, g = r.indexOf(w, g + 1), g === -1 && x("quote", w), h = g; r.charCodeAt(h - 1) === E.backslash; ) h -= 1, d = !d;
          while (d);
          O = E.str, c = s, p = o - a, l = g + 1;
          break;
        default:
          u === E.slash && r.charCodeAt(o + 1) === E.asterisk ? (g = r.indexOf("*/", o + 2) + 1, g === 0 && x("comment", "*/"), f = r.slice(o, g + 1), m = f.split(`
`), y = m.length - 1, y > 0 ? (v = s + y, b = g - m[y].length) : (v = s, b = a), O = E.comment, s = v, c = v, p = g - b) : u === E.slash ? (g = o, O = u, c = s, p = o - a, l = g + 1) : (g = Jg(r, o), O = E.word, c = s, p = g - a), l = g + 1;
          break;
      }
      e.push([O, s, o - a, c, p, o, l]), b && (a = b, b = null), o = l;
    }
    return e;
  }
});
var tu = S((er, eu) => {
  "use strict";
  er.__esModule = true;
  er.default = void 0;
  var ey = le(wi()), Xi = le(xi()), ty = le(Oi()), Hl = le(Ei()), ry = le(_i()), ny = le(Ri()), Ki = le(Di()), iy = le(Li()), Ql = Xr(Vi()), sy = le(Wi()), Zi = le(Gi()), ay = le(Hi()), oy = le(zl()), k = Xr(Yl()), _ = Xr(Qi()), ly = Xr(J()), z = Lt(), ze, es;
  function Zl(t) {
    if (typeof WeakMap != "function") return null;
    var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
    return (Zl = function(i) {
      return i ? r : e;
    })(t);
  }
  function Xr(t, e) {
    if (!e && t && t.__esModule) return t;
    if (t === null || typeof t != "object" && typeof t != "function") return { default: t };
    var r = Zl(e);
    if (r && r.has(t)) return r.get(t);
    var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in t) if (a !== "default" && Object.prototype.hasOwnProperty.call(t, a)) {
      var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a];
    }
    return n.default = t, r && r.set(t, n), n;
  }
  function le(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Jl(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, n.key, n);
    }
  }
  function uy(t, e, r) {
    return e && Jl(t.prototype, e), r && Jl(t, r), Object.defineProperty(t, "prototype", { writable: false }), t;
  }
  var ns = (ze = {}, ze[_.space] = true, ze[_.cr] = true, ze[_.feed] = true, ze[_.newline] = true, ze[_.tab] = true, ze), fy = Object.assign({}, ns, (es = {}, es[_.comment] = true, es));
  function Xl(t) {
    return { line: t[k.FIELDS.START_LINE], column: t[k.FIELDS.START_COL] };
  }
  function Kl(t) {
    return { line: t[k.FIELDS.END_LINE], column: t[k.FIELDS.END_COL] };
  }
  function We(t, e, r, n) {
    return { start: { line: t, column: e }, end: { line: r, column: n } };
  }
  function tt(t) {
    return We(t[k.FIELDS.START_LINE], t[k.FIELDS.START_COL], t[k.FIELDS.END_LINE], t[k.FIELDS.END_COL]);
  }
  function ts(t, e) {
    if (!!t) return We(t[k.FIELDS.START_LINE], t[k.FIELDS.START_COL], e[k.FIELDS.END_LINE], e[k.FIELDS.END_COL]);
  }
  function rt(t, e) {
    var r = t[e];
    if (typeof r == "string") return r.indexOf("\\") !== -1 && ((0, z.ensureObject)(t, "raws"), t[e] = (0, z.unesc)(r), t.raws[e] === void 0 && (t.raws[e] = r)), t;
  }
  function rs(t, e) {
    for (var r = -1, n = []; (r = t.indexOf(e, r + 1)) !== -1; ) n.push(r);
    return n;
  }
  function cy() {
    var t = Array.prototype.concat.apply([], arguments);
    return t.filter(function(e, r) {
      return r === t.indexOf(e);
    });
  }
  var py = function() {
    function t(r, n) {
      n === void 0 && (n = {}), this.rule = r, this.options = Object.assign({ lossy: false, safe: false }, n), this.position = 0, this.css = typeof this.rule == "string" ? this.rule : this.rule.selector, this.tokens = (0, k.default)({ css: this.css, error: this._errorGenerator(), safe: this.options.safe });
      var i = ts(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new ey.default({ source: i }), this.root.errorGenerator = this._errorGenerator();
      var a = new Xi.default({ source: { start: { line: 1, column: 1 } } });
      this.root.append(a), this.current = a, this.loop();
    }
    var e = t.prototype;
    return e._errorGenerator = function() {
      var n = this;
      return function(i, a) {
        return typeof n.rule == "string" ? new Error(i) : n.rule.error(i, a);
      };
    }, e.attribute = function() {
      var n = [], i = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[k.FIELDS.TYPE] !== _.closeSquare; ) n.push(this.currToken), this.position++;
      if (this.currToken[k.FIELDS.TYPE] !== _.closeSquare) return this.expected("closing square bracket", this.currToken[k.FIELDS.START_POS]);
      var a = n.length, s = { source: We(i[1], i[2], this.currToken[3], this.currToken[4]), sourceIndex: i[k.FIELDS.START_POS] };
      if (a === 1 && !~[_.word].indexOf(n[0][k.FIELDS.TYPE])) return this.expected("attribute", n[0][k.FIELDS.START_POS]);
      for (var o = 0, l = "", u = "", f = null, p = false; o < a; ) {
        var c = n[o], d = this.content(c), h = n[o + 1];
        switch (c[k.FIELDS.TYPE]) {
          case _.space:
            if (p = true, this.options.lossy) break;
            if (f) {
              (0, z.ensureObject)(s, "spaces", f);
              var y = s.spaces[f].after || "";
              s.spaces[f].after = y + d;
              var m = (0, z.getProp)(s, "raws", "spaces", f, "after") || null;
              m && (s.raws.spaces[f].after = m + d);
            } else l = l + d, u = u + d;
            break;
          case _.asterisk:
            if (h[k.FIELDS.TYPE] === _.equals) s.operator = d, f = "operator";
            else if ((!s.namespace || f === "namespace" && !p) && h) {
              l && ((0, z.ensureObject)(s, "spaces", "attribute"), s.spaces.attribute.before = l, l = ""), u && ((0, z.ensureObject)(s, "raws", "spaces", "attribute"), s.raws.spaces.attribute.before = l, u = ""), s.namespace = (s.namespace || "") + d;
              var g = (0, z.getProp)(s, "raws", "namespace") || null;
              g && (s.raws.namespace += d), f = "namespace";
            }
            p = false;
            break;
          case _.dollar:
            if (f === "value") {
              var v = (0, z.getProp)(s, "raws", "value");
              s.value += "$", v && (s.raws.value = v + "$");
              break;
            }
          case _.caret:
            h[k.FIELDS.TYPE] === _.equals && (s.operator = d, f = "operator"), p = false;
            break;
          case _.combinator:
            if (d === "~" && h[k.FIELDS.TYPE] === _.equals && (s.operator = d, f = "operator"), d !== "|") {
              p = false;
              break;
            }
            h[k.FIELDS.TYPE] === _.equals ? (s.operator = d, f = "operator") : !s.namespace && !s.attribute && (s.namespace = true), p = false;
            break;
          case _.word:
            if (h && this.content(h) === "|" && n[o + 2] && n[o + 2][k.FIELDS.TYPE] !== _.equals && !s.operator && !s.namespace) s.namespace = d, f = "namespace";
            else if (!s.attribute || f === "attribute" && !p) {
              l && ((0, z.ensureObject)(s, "spaces", "attribute"), s.spaces.attribute.before = l, l = ""), u && ((0, z.ensureObject)(s, "raws", "spaces", "attribute"), s.raws.spaces.attribute.before = u, u = ""), s.attribute = (s.attribute || "") + d;
              var b = (0, z.getProp)(s, "raws", "attribute") || null;
              b && (s.raws.attribute += d), f = "attribute";
            } else if (!s.value && s.value !== "" || f === "value" && !(p || s.quoteMark)) {
              var w = (0, z.unesc)(d), O = (0, z.getProp)(s, "raws", "value") || "", x = s.value || "";
              s.value = x + w, s.quoteMark = null, (w !== d || O) && ((0, z.ensureObject)(s, "raws"), s.raws.value = (O || x) + d), f = "value";
            } else {
              var C = d === "i" || d === "I";
              (s.value || s.value === "") && (s.quoteMark || p) ? (s.insensitive = C, (!C || d === "I") && ((0, z.ensureObject)(s, "raws"), s.raws.insensitiveFlag = d), f = "insensitive", l && ((0, z.ensureObject)(s, "spaces", "insensitive"), s.spaces.insensitive.before = l, l = ""), u && ((0, z.ensureObject)(s, "raws", "spaces", "insensitive"), s.raws.spaces.insensitive.before = u, u = "")) : (s.value || s.value === "") && (f = "value", s.value += d, s.raws.value && (s.raws.value += d));
            }
            p = false;
            break;
          case _.str:
            if (!s.attribute || !s.operator) return this.error("Expected an attribute followed by an operator preceding the string.", { index: c[k.FIELDS.START_POS] });
            var A = (0, Ql.unescapeValue)(d), R = A.unescaped, L = A.quoteMark;
            s.value = R, s.quoteMark = L, f = "value", (0, z.ensureObject)(s, "raws"), s.raws.value = d, p = false;
            break;
          case _.equals:
            if (!s.attribute) return this.expected("attribute", c[k.FIELDS.START_POS], d);
            if (s.value) return this.error('Unexpected "=" found; an operator was already defined.', { index: c[k.FIELDS.START_POS] });
            s.operator = s.operator ? s.operator + d : d, f = "operator", p = false;
            break;
          case _.comment:
            if (f) if (p || h && h[k.FIELDS.TYPE] === _.space || f === "insensitive") {
              var B = (0, z.getProp)(s, "spaces", f, "after") || "", Q = (0, z.getProp)(s, "raws", "spaces", f, "after") || B;
              (0, z.ensureObject)(s, "raws", "spaces", f), s.raws.spaces[f].after = Q + d;
            } else {
              var K = s[f] || "", $e = (0, z.getProp)(s, "raws", f) || K;
              (0, z.ensureObject)(s, "raws"), s.raws[f] = $e + d;
            }
            else u = u + d;
            break;
          default:
            return this.error('Unexpected "' + d + '" found.', { index: c[k.FIELDS.START_POS] });
        }
        o++;
      }
      rt(s, "attribute"), rt(s, "namespace"), this.newNode(new Ql.default(s)), this.position++;
    }, e.parseWhitespaceEquivalentTokens = function(n) {
      n < 0 && (n = this.tokens.length);
      var i = this.position, a = [], s = "", o = void 0;
      do
        if (ns[this.currToken[k.FIELDS.TYPE]]) this.options.lossy || (s += this.content());
        else if (this.currToken[k.FIELDS.TYPE] === _.comment) {
          var l = {};
          s && (l.before = s, s = ""), o = new Hl.default({ value: this.content(), source: tt(this.currToken), sourceIndex: this.currToken[k.FIELDS.START_POS], spaces: l }), a.push(o);
        }
      while (++this.position < n);
      if (s) {
        if (o) o.spaces.after = s;
        else if (!this.options.lossy) {
          var u = this.tokens[i], f = this.tokens[this.position - 1];
          a.push(new Ki.default({ value: "", source: We(u[k.FIELDS.START_LINE], u[k.FIELDS.START_COL], f[k.FIELDS.END_LINE], f[k.FIELDS.END_COL]), sourceIndex: u[k.FIELDS.START_POS], spaces: { before: s, after: "" } }));
        }
      }
      return a;
    }, e.convertWhitespaceNodesToSpace = function(n, i) {
      var a = this;
      i === void 0 && (i = false);
      var s = "", o = "";
      n.forEach(function(u) {
        var f = a.lossySpace(u.spaces.before, i), p = a.lossySpace(u.rawSpaceBefore, i);
        s += f + a.lossySpace(u.spaces.after, i && f.length === 0), o += f + u.value + a.lossySpace(u.rawSpaceAfter, i && p.length === 0);
      }), o === s && (o = void 0);
      var l = { space: s, rawSpace: o };
      return l;
    }, e.isNamedCombinator = function(n) {
      return n === void 0 && (n = this.position), this.tokens[n + 0] && this.tokens[n + 0][k.FIELDS.TYPE] === _.slash && this.tokens[n + 1] && this.tokens[n + 1][k.FIELDS.TYPE] === _.word && this.tokens[n + 2] && this.tokens[n + 2][k.FIELDS.TYPE] === _.slash;
    }, e.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var n = this.content(this.tokens[this.position + 1]), i = (0, z.unesc)(n).toLowerCase(), a = {};
        i !== n && (a.value = "/" + n + "/");
        var s = new Zi.default({ value: "/" + i + "/", source: We(this.currToken[k.FIELDS.START_LINE], this.currToken[k.FIELDS.START_COL], this.tokens[this.position + 2][k.FIELDS.END_LINE], this.tokens[this.position + 2][k.FIELDS.END_COL]), sourceIndex: this.currToken[k.FIELDS.START_POS], raws: a });
        return this.position = this.position + 3, s;
      } else this.unexpected();
    }, e.combinator = function() {
      var n = this;
      if (this.content() === "|") return this.namespace();
      var i = this.locateNextMeaningfulToken(this.position);
      if (i < 0 || this.tokens[i][k.FIELDS.TYPE] === _.comma) {
        var a = this.parseWhitespaceEquivalentTokens(i);
        if (a.length > 0) {
          var s = this.current.last;
          if (s) {
            var o = this.convertWhitespaceNodesToSpace(a), l = o.space, u = o.rawSpace;
            u !== void 0 && (s.rawSpaceAfter += u), s.spaces.after += l;
          } else a.forEach(function(O) {
            return n.newNode(O);
          });
        }
        return;
      }
      var f = this.currToken, p = void 0;
      i > this.position && (p = this.parseWhitespaceEquivalentTokens(i));
      var c;
      if (this.isNamedCombinator() ? c = this.namedCombinator() : this.currToken[k.FIELDS.TYPE] === _.combinator ? (c = new Zi.default({ value: this.content(), source: tt(this.currToken), sourceIndex: this.currToken[k.FIELDS.START_POS] }), this.position++) : ns[this.currToken[k.FIELDS.TYPE]] || p || this.unexpected(), c) {
        if (p) {
          var d = this.convertWhitespaceNodesToSpace(p), h = d.space, y = d.rawSpace;
          c.spaces.before = h, c.rawSpaceBefore = y;
        }
      } else {
        var m = this.convertWhitespaceNodesToSpace(p, true), g = m.space, v = m.rawSpace;
        v || (v = g);
        var b = {}, w = { spaces: {} };
        g.endsWith(" ") && v.endsWith(" ") ? (b.before = g.slice(0, g.length - 1), w.spaces.before = v.slice(0, v.length - 1)) : g.startsWith(" ") && v.startsWith(" ") ? (b.after = g.slice(1), w.spaces.after = v.slice(1)) : w.value = v, c = new Zi.default({ value: " ", source: ts(f, this.tokens[this.position - 1]), sourceIndex: f[k.FIELDS.START_POS], spaces: b, raws: w });
      }
      return this.currToken && this.currToken[k.FIELDS.TYPE] === _.space && (c.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(c);
    }, e.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = true, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var n = new Xi.default({ source: { start: Xl(this.tokens[this.position + 1]) } });
      this.current.parent.append(n), this.current = n, this.position++;
    }, e.comment = function() {
      var n = this.currToken;
      this.newNode(new Hl.default({ value: this.content(), source: tt(n), sourceIndex: n[k.FIELDS.START_POS] })), this.position++;
    }, e.error = function(n, i) {
      throw this.root.error(n, i);
    }, e.missingBackslash = function() {
      return this.error("Expected a backslash preceding the semicolon.", { index: this.currToken[k.FIELDS.START_POS] });
    }, e.missingParenthesis = function() {
      return this.expected("opening parenthesis", this.currToken[k.FIELDS.START_POS]);
    }, e.missingSquareBracket = function() {
      return this.expected("opening square bracket", this.currToken[k.FIELDS.START_POS]);
    }, e.unexpected = function() {
      return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[k.FIELDS.START_POS]);
    }, e.unexpectedPipe = function() {
      return this.error("Unexpected '|'.", this.currToken[k.FIELDS.START_POS]);
    }, e.namespace = function() {
      var n = this.prevToken && this.content(this.prevToken) || true;
      if (this.nextToken[k.FIELDS.TYPE] === _.word) return this.position++, this.word(n);
      if (this.nextToken[k.FIELDS.TYPE] === _.asterisk) return this.position++, this.universal(n);
      this.unexpectedPipe();
    }, e.nesting = function() {
      if (this.nextToken) {
        var n = this.content(this.nextToken);
        if (n === "|") {
          this.position++;
          return;
        }
      }
      var i = this.currToken;
      this.newNode(new ay.default({ value: this.content(), source: tt(i), sourceIndex: i[k.FIELDS.START_POS] })), this.position++;
    }, e.parentheses = function() {
      var n = this.current.last, i = 1;
      if (this.position++, n && n.type === ly.PSEUDO) {
        var a = new Xi.default({ source: { start: Xl(this.tokens[this.position - 1]) } }), s = this.current;
        for (n.append(a), this.current = a; this.position < this.tokens.length && i; ) this.currToken[k.FIELDS.TYPE] === _.openParenthesis && i++, this.currToken[k.FIELDS.TYPE] === _.closeParenthesis && i--, i ? this.parse() : (this.current.source.end = Kl(this.currToken), this.current.parent.source.end = Kl(this.currToken), this.position++);
        this.current = s;
      } else {
        for (var o = this.currToken, l = "(", u; this.position < this.tokens.length && i; ) this.currToken[k.FIELDS.TYPE] === _.openParenthesis && i++, this.currToken[k.FIELDS.TYPE] === _.closeParenthesis && i--, u = this.currToken, l += this.parseParenthesisToken(this.currToken), this.position++;
        n ? n.appendToPropertyAndEscape("value", l, l) : this.newNode(new Ki.default({ value: l, source: We(o[k.FIELDS.START_LINE], o[k.FIELDS.START_COL], u[k.FIELDS.END_LINE], u[k.FIELDS.END_COL]), sourceIndex: o[k.FIELDS.START_POS] }));
      }
      if (i) return this.expected("closing parenthesis", this.currToken[k.FIELDS.START_POS]);
    }, e.pseudo = function() {
      for (var n = this, i = "", a = this.currToken; this.currToken && this.currToken[k.FIELDS.TYPE] === _.colon; ) i += this.content(), this.position++;
      if (!this.currToken) return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
      if (this.currToken[k.FIELDS.TYPE] === _.word) this.splitWord(false, function(s, o) {
        i += s, n.newNode(new iy.default({ value: i, source: ts(a, n.currToken), sourceIndex: a[k.FIELDS.START_POS] })), o > 1 && n.nextToken && n.nextToken[k.FIELDS.TYPE] === _.openParenthesis && n.error("Misplaced parenthesis.", { index: n.nextToken[k.FIELDS.START_POS] });
      });
      else return this.expected(["pseudo-class", "pseudo-element"], this.currToken[k.FIELDS.START_POS]);
    }, e.space = function() {
      var n = this.content();
      this.position === 0 || this.prevToken[k.FIELDS.TYPE] === _.comma || this.prevToken[k.FIELDS.TYPE] === _.openParenthesis || this.current.nodes.every(function(i) {
        return i.type === "comment";
      }) ? (this.spaces = this.optionalSpace(n), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[k.FIELDS.TYPE] === _.comma || this.nextToken[k.FIELDS.TYPE] === _.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(n), this.position++) : this.combinator();
    }, e.string = function() {
      var n = this.currToken;
      this.newNode(new Ki.default({ value: this.content(), source: tt(n), sourceIndex: n[k.FIELDS.START_POS] })), this.position++;
    }, e.universal = function(n) {
      var i = this.nextToken;
      if (i && this.content(i) === "|") return this.position++, this.namespace();
      var a = this.currToken;
      this.newNode(new sy.default({ value: this.content(), source: tt(a), sourceIndex: a[k.FIELDS.START_POS] }), n), this.position++;
    }, e.splitWord = function(n, i) {
      for (var a = this, s = this.nextToken, o = this.content(); s && ~[_.dollar, _.caret, _.equals, _.word].indexOf(s[k.FIELDS.TYPE]); ) {
        this.position++;
        var l = this.content();
        if (o += l, l.lastIndexOf("\\") === l.length - 1) {
          var u = this.nextToken;
          u && u[k.FIELDS.TYPE] === _.space && (o += this.requiredSpace(this.content(u)), this.position++);
        }
        s = this.nextToken;
      }
      var f = rs(o, ".").filter(function(h) {
        var y = o[h - 1] === "\\", m = /^\d+\.\d+%$/.test(o);
        return !y && !m;
      }), p = rs(o, "#").filter(function(h) {
        return o[h - 1] !== "\\";
      }), c = rs(o, "#{");
      c.length && (p = p.filter(function(h) {
        return !~c.indexOf(h);
      }));
      var d = (0, oy.default)(cy([0].concat(f, p)));
      d.forEach(function(h, y) {
        var m = d[y + 1] || o.length, g = o.slice(h, m);
        if (y === 0 && i) return i.call(a, g, d.length);
        var v, b = a.currToken, w = b[k.FIELDS.START_POS] + d[y], O = We(b[1], b[2] + h, b[3], b[2] + (m - 1));
        if (~f.indexOf(h)) {
          var x = { value: g.slice(1), source: O, sourceIndex: w };
          v = new ty.default(rt(x, "value"));
        } else if (~p.indexOf(h)) {
          var C = { value: g.slice(1), source: O, sourceIndex: w };
          v = new ry.default(rt(C, "value"));
        } else {
          var A = { value: g, source: O, sourceIndex: w };
          rt(A, "value"), v = new ny.default(A);
        }
        a.newNode(v, n), n = null;
      }), this.position++;
    }, e.word = function(n) {
      var i = this.nextToken;
      return i && this.content(i) === "|" ? (this.position++, this.namespace()) : this.splitWord(n);
    }, e.loop = function() {
      for (; this.position < this.tokens.length; ) this.parse(true);
      return this.current._inferEndPosition(), this.root;
    }, e.parse = function(n) {
      switch (this.currToken[k.FIELDS.TYPE]) {
        case _.space:
          this.space();
          break;
        case _.comment:
          this.comment();
          break;
        case _.openParenthesis:
          this.parentheses();
          break;
        case _.closeParenthesis:
          n && this.missingParenthesis();
          break;
        case _.openSquare:
          this.attribute();
          break;
        case _.dollar:
        case _.caret:
        case _.equals:
        case _.word:
          this.word();
          break;
        case _.colon:
          this.pseudo();
          break;
        case _.comma:
          this.comma();
          break;
        case _.asterisk:
          this.universal();
          break;
        case _.ampersand:
          this.nesting();
          break;
        case _.slash:
        case _.combinator:
          this.combinator();
          break;
        case _.str:
          this.string();
          break;
        case _.closeSquare:
          this.missingSquareBracket();
        case _.semicolon:
          this.missingBackslash();
        default:
          this.unexpected();
      }
    }, e.expected = function(n, i, a) {
      if (Array.isArray(n)) {
        var s = n.pop();
        n = n.join(", ") + " or " + s;
      }
      var o = /^[aeiou]/.test(n[0]) ? "an" : "a";
      return a ? this.error("Expected " + o + " " + n + ', found "' + a + '" instead.', { index: i }) : this.error("Expected " + o + " " + n + ".", { index: i });
    }, e.requiredSpace = function(n) {
      return this.options.lossy ? " " : n;
    }, e.optionalSpace = function(n) {
      return this.options.lossy ? "" : n;
    }, e.lossySpace = function(n, i) {
      return this.options.lossy ? i ? " " : "" : n;
    }, e.parseParenthesisToken = function(n) {
      var i = this.content(n);
      return n[k.FIELDS.TYPE] === _.space ? this.requiredSpace(i) : i;
    }, e.newNode = function(n, i) {
      return i && (/^ +$/.test(i) && (this.options.lossy || (this.spaces = (this.spaces || "") + i), i = true), n.namespace = i, rt(n, "namespace")), this.spaces && (n.spaces.before = this.spaces, this.spaces = ""), this.current.append(n);
    }, e.content = function(n) {
      return n === void 0 && (n = this.currToken), this.css.slice(n[k.FIELDS.START_POS], n[k.FIELDS.END_POS]);
    }, e.locateNextMeaningfulToken = function(n) {
      n === void 0 && (n = this.position + 1);
      for (var i = n; i < this.tokens.length; ) if (fy[this.tokens[i][k.FIELDS.TYPE]]) {
        i++;
        continue;
      } else return i;
      return -1;
    }, uy(t, [{ key: "currToken", get: function() {
      return this.tokens[this.position];
    } }, { key: "nextToken", get: function() {
      return this.tokens[this.position + 1];
    } }, { key: "prevToken", get: function() {
      return this.tokens[this.position - 1];
    } }]), t;
  }();
  er.default = py;
  eu.exports = er.default;
});
var nu = S((tr, ru) => {
  "use strict";
  tr.__esModule = true;
  tr.default = void 0;
  var dy = hy(tu());
  function hy(t) {
    return t && t.__esModule ? t : { default: t };
  }
  var my = function() {
    function t(r, n) {
      this.func = r || function() {
      }, this.funcRes = null, this.options = n;
    }
    var e = t.prototype;
    return e._shouldUpdateSelector = function(n, i) {
      i === void 0 && (i = {});
      var a = Object.assign({}, this.options, i);
      return a.updateSelector === false ? false : typeof n != "string";
    }, e._isLossy = function(n) {
      n === void 0 && (n = {});
      var i = Object.assign({}, this.options, n);
      return i.lossless === false;
    }, e._root = function(n, i) {
      i === void 0 && (i = {});
      var a = new dy.default(n, this._parseOptions(i));
      return a.root;
    }, e._parseOptions = function(n) {
      return { lossy: this._isLossy(n) };
    }, e._run = function(n, i) {
      var a = this;
      return i === void 0 && (i = {}), new Promise(function(s, o) {
        try {
          var l = a._root(n, i);
          Promise.resolve(a.func(l)).then(function(u) {
            var f = void 0;
            return a._shouldUpdateSelector(n, i) && (f = l.toString(), n.selector = f), { transform: u, root: l, string: f };
          }).then(s, o);
        } catch (u) {
          o(u);
          return;
        }
      });
    }, e._runSync = function(n, i) {
      i === void 0 && (i = {});
      var a = this._root(n, i), s = this.func(a);
      if (s && typeof s.then == "function") throw new Error("Selector processor returned a promise to a synchronous call.");
      var o = void 0;
      return i.updateSelector && typeof n != "string" && (o = a.toString(), n.selector = o), { transform: s, root: a, string: o };
    }, e.ast = function(n, i) {
      return this._run(n, i).then(function(a) {
        return a.root;
      });
    }, e.astSync = function(n, i) {
      return this._runSync(n, i).root;
    }, e.transform = function(n, i) {
      return this._run(n, i).then(function(a) {
        return a.transform;
      });
    }, e.transformSync = function(n, i) {
      return this._runSync(n, i).transform;
    }, e.process = function(n, i) {
      return this._run(n, i).then(function(a) {
        return a.string || a.root.toString();
      });
    }, e.processSync = function(n, i) {
      var a = this._runSync(n, i);
      return a.string || a.root.toString();
    }, t;
  }();
  tr.default = my;
  ru.exports = tr.default;
});
var iu = S((j) => {
  "use strict";
  j.__esModule = true;
  j.universal = j.tag = j.string = j.selector = j.root = j.pseudo = j.nesting = j.id = j.comment = j.combinator = j.className = j.attribute = void 0;
  var gy = ue(Vi()), yy = ue(Oi()), vy = ue(Gi()), wy = ue(Ei()), by = ue(_i()), xy = ue(Hi()), Sy = ue(Li()), ky = ue(wi()), Oy = ue(xi()), Ay = ue(Di()), Ey = ue(Ri()), Cy = ue(Wi());
  function ue(t) {
    return t && t.__esModule ? t : { default: t };
  }
  var _y = function(e) {
    return new gy.default(e);
  };
  j.attribute = _y;
  var Ty = function(e) {
    return new yy.default(e);
  };
  j.className = Ty;
  var Py = function(e) {
    return new vy.default(e);
  };
  j.combinator = Py;
  var Ry = function(e) {
    return new wy.default(e);
  };
  j.comment = Ry;
  var Iy = function(e) {
    return new by.default(e);
  };
  j.id = Iy;
  var Dy = function(e) {
    return new xy.default(e);
  };
  j.nesting = Dy;
  var My = function(e) {
    return new Sy.default(e);
  };
  j.pseudo = My;
  var Ly = function(e) {
    return new ky.default(e);
  };
  j.root = Ly;
  var Ny = function(e) {
    return new Oy.default(e);
  };
  j.selector = Ny;
  var Fy = function(e) {
    return new Ay.default(e);
  };
  j.string = Fy;
  var qy = function(e) {
    return new Ey.default(e);
  };
  j.tag = qy;
  var $y = function(e) {
    return new Cy.default(e);
  };
  j.universal = $y;
});
var lu = S((M) => {
  "use strict";
  M.__esModule = true;
  M.isComment = M.isCombinator = M.isClassName = M.isAttribute = void 0;
  M.isContainer = Xy;
  M.isIdentifier = void 0;
  M.isNamespace = Ky;
  M.isNesting = void 0;
  M.isNode = is;
  M.isPseudo = void 0;
  M.isPseudoClass = Jy;
  M.isPseudoElement = ou;
  M.isUniversal = M.isTag = M.isString = M.isSelector = M.isRoot = void 0;
  var W = J(), Z, Uy = (Z = {}, Z[W.ATTRIBUTE] = true, Z[W.CLASS] = true, Z[W.COMBINATOR] = true, Z[W.COMMENT] = true, Z[W.ID] = true, Z[W.NESTING] = true, Z[W.PSEUDO] = true, Z[W.ROOT] = true, Z[W.SELECTOR] = true, Z[W.STRING] = true, Z[W.TAG] = true, Z[W.UNIVERSAL] = true, Z);
  function is(t) {
    return typeof t == "object" && Uy[t.type];
  }
  function fe(t, e) {
    return is(e) && e.type === t;
  }
  var su = fe.bind(null, W.ATTRIBUTE);
  M.isAttribute = su;
  var jy = fe.bind(null, W.CLASS);
  M.isClassName = jy;
  var Vy = fe.bind(null, W.COMBINATOR);
  M.isCombinator = Vy;
  var zy = fe.bind(null, W.COMMENT);
  M.isComment = zy;
  var Wy = fe.bind(null, W.ID);
  M.isIdentifier = Wy;
  var By = fe.bind(null, W.NESTING);
  M.isNesting = By;
  var ss = fe.bind(null, W.PSEUDO);
  M.isPseudo = ss;
  var Gy = fe.bind(null, W.ROOT);
  M.isRoot = Gy;
  var Yy = fe.bind(null, W.SELECTOR);
  M.isSelector = Yy;
  var Hy = fe.bind(null, W.STRING);
  M.isString = Hy;
  var au = fe.bind(null, W.TAG);
  M.isTag = au;
  var Qy = fe.bind(null, W.UNIVERSAL);
  M.isUniversal = Qy;
  function ou(t) {
    return ss(t) && t.value && (t.value.startsWith("::") || t.value.toLowerCase() === ":before" || t.value.toLowerCase() === ":after" || t.value.toLowerCase() === ":first-letter" || t.value.toLowerCase() === ":first-line");
  }
  function Jy(t) {
    return ss(t) && !ou(t);
  }
  function Xy(t) {
    return !!(is(t) && t.walk);
  }
  function Ky(t) {
    return su(t) || au(t);
  }
});
var uu = S((de) => {
  "use strict";
  de.__esModule = true;
  var as = J();
  Object.keys(as).forEach(function(t) {
    t === "default" || t === "__esModule" || t in de && de[t] === as[t] || (de[t] = as[t]);
  });
  var os = iu();
  Object.keys(os).forEach(function(t) {
    t === "default" || t === "__esModule" || t in de && de[t] === os[t] || (de[t] = os[t]);
  });
  var ls = lu();
  Object.keys(ls).forEach(function(t) {
    t === "default" || t === "__esModule" || t in de && de[t] === ls[t] || (de[t] = ls[t]);
  });
});
var Ee = S((rr, cu) => {
  "use strict";
  rr.__esModule = true;
  rr.default = void 0;
  var Zy = rv(nu()), ev = tv(uu());
  function fu(t) {
    if (typeof WeakMap != "function") return null;
    var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
    return (fu = function(i) {
      return i ? r : e;
    })(t);
  }
  function tv(t, e) {
    if (!e && t && t.__esModule) return t;
    if (t === null || typeof t != "object" && typeof t != "function") return { default: t };
    var r = fu(e);
    if (r && r.has(t)) return r.get(t);
    var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in t) if (a !== "default" && Object.prototype.hasOwnProperty.call(t, a)) {
      var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a];
    }
    return n.default = t, r && r.set(t, n), n;
  }
  function rv(t) {
    return t && t.__esModule ? t : { default: t };
  }
  var us = function(e) {
    return new Zy.default(e);
  };
  Object.assign(us, ev);
  delete us.__esModule;
  var nv = us;
  rr.default = nv;
  cu.exports = rr.default;
});
var vu = S((Lx, hs) => {
  var { Rule: du, AtRule: iv } = Ze(), hu = Ee();
  function ps(t, e) {
    let r;
    try {
      hu((n) => {
        r = n;
      }).processSync(t);
    } catch (n) {
      throw t.includes(":") ? e ? e.error("Missed semicolon") : n : e ? e.error(n.message) : n;
    }
    return r.at(0);
  }
  function mu(t, e) {
    let r = false;
    return t.each((n) => {
      if (n.type === "nesting") {
        let i = e.clone({});
        n.value !== "&" ? n.replaceWith(ps(n.value.replace("&", i.toString()))) : n.replaceWith(i), r = true;
      } else "nodes" in n && n.nodes && mu(n, e) && (r = true);
    }), r;
  }
  function gu(t, e) {
    let r = [];
    return t.selectors.forEach((n) => {
      let i = ps(n, t);
      e.selectors.forEach((a) => {
        if (!a) return;
        let s = ps(a, e);
        mu(s, i) || (s.prepend(hu.combinator({ value: " " })), s.prepend(i.clone({}))), r.push(s.toString());
      });
    }), r;
  }
  function Kr(t, e) {
    let r = t.prev();
    for (e.after(t); r && r.type === "comment"; ) {
      let n = r.prev();
      e.after(r), r = n;
    }
    return t;
  }
  function sv(t) {
    return function e(r, n, i, a = i) {
      let s = [];
      if (n.each((o) => {
        o.type === "rule" && i ? a && (o.selectors = gu(r, o)) : o.type === "atrule" && o.nodes ? t[o.name] ? e(r, o, a) : n[ds] !== false && s.push(o) : s.push(o);
      }), i && s.length) {
        let o = r.clone({ nodes: [] });
        for (let l of s) o.append(l);
        n.prepend(o);
      }
    };
  }
  function fs(t, e, r) {
    let n = new du({ selector: t, nodes: [] });
    return n.append(e), r.after(n), n;
  }
  function pu(t, e) {
    let r = {};
    for (let n of t) r[n] = true;
    if (e) for (let n of e) r[n.replace(/^@/, "")] = true;
    return r;
  }
  function av(t) {
    t = t.trim();
    let e = t.match(/^\((.*)\)$/);
    if (!e) return { type: "basic", selector: t };
    let r = e[1].match(/^(with(?:out)?):(.+)$/);
    if (r) {
      let n = r[1] === "with", i = Object.fromEntries(r[2].trim().split(/\s+/).map((s) => [s, true]));
      if (n && i.all) return { type: "noop" };
      let a = (s) => !!i[s];
      return i.all ? a = () => true : n && (a = (s) => s === "all" ? false : !i[s]), { type: "withrules", escapes: a };
    }
    return { type: "unknown" };
  }
  function ov(t) {
    let e = [], r = t.parent;
    for (; r && r instanceof iv; ) e.push(r), r = r.parent;
    return e;
  }
  function lv(t) {
    let e = t[yu];
    if (!e) t.after(t.nodes);
    else {
      let r = t.nodes, n, i = -1, a, s, o, l = ov(t);
      if (l.forEach((u, f) => {
        if (e(u.name)) n = u, i = f, s = o;
        else {
          let p = o;
          o = u.clone({ nodes: [] }), p && o.append(p), a = a || o;
        }
      }), n ? s ? (a.append(r), n.after(s)) : n.after(r) : t.after(r), t.next() && n) {
        let u;
        l.slice(0, i + 1).forEach((f, p, c) => {
          let d = u;
          u = f.clone({ nodes: [] }), d && u.append(d);
          let h = [], m = (c[p - 1] || t).next();
          for (; m; ) h.push(m), m = m.next();
          u.append(h);
        }), u && (s || r[r.length - 1]).after(u);
      }
    }
    t.remove();
  }
  var ds = Symbol("rootRuleMergeSel"), yu = Symbol("rootRuleEscapes");
  function uv(t) {
    let { params: e } = t, { type: r, selector: n, escapes: i } = av(e);
    if (r === "unknown") throw t.error(`Unknown @${t.name} parameter ${JSON.stringify(e)}`);
    if (r === "basic" && n) {
      let a = new du({ selector: n, nodes: t.nodes });
      t.removeAll(), t.append(a);
    }
    t[yu] = i, t[ds] = i ? !i("all") : r === "noop";
  }
  var cs = Symbol("hasRootRule");
  hs.exports = (t = {}) => {
    let e = pu(["media", "supports", "layer"], t.bubble), r = sv(e), n = pu(["document", "font-face", "keyframes", "-webkit-keyframes", "-moz-keyframes"], t.unwrap), i = (t.rootRuleName || "at-root").replace(/^@/, ""), a = t.preserveEmpty;
    return { postcssPlugin: "postcss-nested", Once(s) {
      s.walkAtRules(i, (o) => {
        uv(o), s[cs] = true;
      });
    }, Rule(s) {
      let o = false, l = s, u = false, f = [];
      s.each((p) => {
        p.type === "rule" ? (f.length && (l = fs(s.selector, f, l), f = []), u = true, o = true, p.selectors = gu(s, p), l = Kr(p, l)) : p.type === "atrule" ? (f.length && (l = fs(s.selector, f, l), f = []), p.name === i ? (o = true, r(s, p, true, p[ds]), l = Kr(p, l)) : e[p.name] ? (u = true, o = true, r(s, p, true), l = Kr(p, l)) : n[p.name] ? (u = true, o = true, r(s, p, false), l = Kr(p, l)) : u && f.push(p)) : p.type === "decl" && u && f.push(p);
      }), f.length && (l = fs(s.selector, f, l)), o && a !== true && (s.raws.semicolon = true, s.nodes.length === 0 && s.remove());
    }, RootExit(s) {
      s[cs] && (s.walkAtRules(i, lv), s[cs] = false);
    } };
  };
  hs.exports.postcss = true;
});
var Su = S((Nx, xu) => {
  "use strict";
  var wu = /-(\w|$)/g, bu = function(e, r) {
    return r.toUpperCase();
  }, fv = function(e) {
    return e = e.toLowerCase(), e === "float" ? "cssFloat" : e.charCodeAt(0) === 45 && e.charCodeAt(1) === 109 && e.charCodeAt(2) === 115 && e.charCodeAt(3) === 45 ? e.substr(1).replace(wu, bu) : e.replace(wu, bu);
  };
  xu.exports = fv;
});
var ys = S((Fx, ku) => {
  var cv = Su(), pv = { boxFlex: true, boxFlexGroup: true, columnCount: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, strokeDashoffset: true, strokeOpacity: true, strokeWidth: true };
  function ms(t) {
    return typeof t.nodes > "u" ? true : gs(t);
  }
  function gs(t) {
    let e, r = {};
    return t.each((n) => {
      if (n.type === "atrule") e = "@" + n.name, n.params && (e += " " + n.params), typeof r[e] > "u" ? r[e] = ms(n) : Array.isArray(r[e]) ? r[e].push(ms(n)) : r[e] = [r[e], ms(n)];
      else if (n.type === "rule") {
        let i = gs(n);
        if (r[n.selector]) for (let a in i) r[n.selector][a] = i[a];
        else r[n.selector] = i;
      } else if (n.type === "decl") {
        n.prop[0] === "-" && n.prop[1] === "-" || n.parent && n.parent.selector === ":export" ? e = n.prop : e = cv(n.prop);
        let i = n.value;
        !isNaN(n.value) && pv[e] && (i = parseFloat(n.value)), n.important && (i += " !important"), typeof r[e] > "u" ? r[e] = i : Array.isArray(r[e]) ? r[e].push(i) : r[e] = [r[e], i];
      }
    }), r;
  }
  ku.exports = gs;
});
var Zr = S((qx, Cu) => {
  var nr = Ze(), Ou = /\s*!important\s*$/i, dv = { "box-flex": true, "box-flex-group": true, "column-count": true, flex: true, "flex-grow": true, "flex-positive": true, "flex-shrink": true, "flex-negative": true, "font-weight": true, "line-clamp": true, "line-height": true, opacity: true, order: true, orphans: true, "tab-size": true, widows: true, "z-index": true, zoom: true, "fill-opacity": true, "stroke-dashoffset": true, "stroke-opacity": true, "stroke-width": true };
  function hv(t) {
    return t.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase();
  }
  function Au(t, e, r) {
    r === false || r === null || (e.startsWith("--") || (e = hv(e)), typeof r == "number" && (r === 0 || dv[e] ? r = r.toString() : r += "px"), e === "css-float" && (e = "float"), Ou.test(r) ? (r = r.replace(Ou, ""), t.push(nr.decl({ prop: e, value: r, important: true }))) : t.push(nr.decl({ prop: e, value: r })));
  }
  function Eu(t, e, r) {
    let n = nr.atRule({ name: e[1], params: e[3] || "" });
    typeof r == "object" && (n.nodes = [], vs(r, n)), t.push(n);
  }
  function vs(t, e) {
    let r, n, i;
    for (r in t) if (n = t[r], !(n === null || typeof n > "u")) if (r[0] === "@") {
      let a = r.match(/@(\S+)(\s+([\W\w]*)\s*)?/);
      if (Array.isArray(n)) for (let s of n) Eu(e, a, s);
      else Eu(e, a, n);
    } else if (Array.isArray(n)) for (let a of n) Au(e, r, a);
    else typeof n == "object" ? (i = nr.rule({ selector: r }), vs(n, i), e.push(i)) : Au(e, r, n);
  }
  Cu.exports = function(t) {
    let e = nr.root();
    return vs(t, e), e;
  };
});
var ws = S(($x, _u) => {
  var mv = ys();
  _u.exports = function(e) {
    return console && console.warn && e.warnings().forEach((r) => {
      let n = r.plugin || "PostCSS";
      console.warn(n + ": " + r.text);
    }), mv(e.root);
  };
});
var Pu = S((Ux, Tu) => {
  var gv = Ze(), yv = ws(), vv = Zr();
  Tu.exports = function(e) {
    let r = gv(e);
    return async (n) => {
      let i = await r.process(n, { parser: vv, from: void 0 });
      return yv(i);
    };
  };
});
var Iu = S((jx, Ru) => {
  var wv = Ze(), bv = ws(), xv = Zr();
  Ru.exports = function(t) {
    let e = wv(t);
    return (r) => {
      let n = e.process(r, { parser: xv, from: void 0 });
      return bv(n);
    };
  };
});
var Mu = S((Vx, Du) => {
  var Sv = ys(), kv = Zr(), Ov = Pu(), Av = Iu();
  Du.exports = { objectify: Sv, parse: kv, async: Ov, sync: Av };
});
var qu = S((e1, Fu) => {
  "use strict";
  Fu.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
});
var Ms = S((Is, Ds) => {
  (function(t, e) {
    typeof Is == "object" && typeof Ds < "u" ? Ds.exports = function(r, n, i, a, s) {
      for (n = n.split ? n.split(".") : n, a = 0; a < n.length; a++) r = r ? r[n[a]] : s;
      return r === s ? i : r;
    } : typeof define == "function" && define.amd ? define(function() {
      return function(r, n, i, a, s) {
        for (n = n.split ? n.split(".") : n, a = 0; a < n.length; a++) r = r ? r[n[a]] : s;
        return r === s ? i : r;
      };
    }) : t.dlv = function(r, n, i, a, s) {
      for (n = n.split ? n.split(".") : n, a = 0; a < n.length; a++) r = r ? r[n[a]] : s;
      return r === s ? i : r;
    };
  })(Is);
});
var Df = {};
dt(Df, { default: () => Fw });
var Fw;
var Mf = Ye(() => {
  Fw = null;
});
var zf = S((hk, xn) => {
  (function() {
    "use strict";
    function t(n, i, a) {
      if (!n) return null;
      t.caseSensitive || (n = n.toLowerCase());
      var s = t.threshold === null ? null : t.threshold * n.length, o = t.thresholdAbsolute, l;
      s !== null && o !== null ? l = Math.min(s, o) : s !== null ? l = s : o !== null ? l = o : l = null;
      var u, f, p, c, d, h = i.length;
      for (d = 0; d < h; d++) if (f = i[d], a && (f = f[a]), !!f && (t.caseSensitive ? p = f : p = f.toLowerCase(), c = r(n, p, l), (l === null || c < l) && (l = c, a && t.returnWinningObject ? u = i[d] : u = f, t.returnFirstMatch))) return u;
      return u || t.nullResultValue;
    }
    t.threshold = 0.4, t.thresholdAbsolute = 20, t.caseSensitive = false, t.nullResultValue = null, t.returnWinningObject = null, t.returnFirstMatch = false, typeof xn < "u" && xn.exports ? xn.exports = t : window.didYouMean = t;
    var e = Math.pow(2, 32) - 1;
    function r(n, i, a) {
      a = a || a === 0 ? a : e;
      var s = n.length, o = i.length;
      if (s === 0) return Math.min(a + 1, o);
      if (o === 0) return Math.min(a + 1, s);
      if (Math.abs(s - o) > a) return a + 1;
      var l = [], u, f, p, c, d;
      for (u = 0; u <= o; u++) l[u] = [u];
      for (f = 0; f <= s; f++) l[0][f] = f;
      for (u = 1; u <= o; u++) {
        for (p = e, c = 1, u > a && (c = u - a), d = o + 1, d > a + u && (d = a + u), f = 1; f <= s; f++) f < c || f > d ? l[u][f] = a + 1 : i.charAt(u - 1) === n.charAt(f - 1) ? l[u][f] = l[u - 1][f - 1] : l[u][f] = Math.min(l[u - 1][f - 1] + 1, Math.min(l[u][f - 1] + 1, l[u - 1][f] + 1)), l[u][f] < p && (p = l[u][f]);
        if (p > a) return a + 1;
      }
      return l[o][s];
    }
  })();
});
var Bf = S((mk, Wf) => {
  var Hs = "(".charCodeAt(0), Qs = ")".charCodeAt(0), Sn = "'".charCodeAt(0), Js = '"'.charCodeAt(0), Xs = "\\".charCodeAt(0), ft = "/".charCodeAt(0), Ks = ",".charCodeAt(0), Zs = ":".charCodeAt(0), kn = "*".charCodeAt(0), Qw = "u".charCodeAt(0), Jw = "U".charCodeAt(0), Xw = "+".charCodeAt(0), Kw = /^[a-f0-9?-]+$/i;
  Wf.exports = function(t) {
    for (var e = [], r = t, n, i, a, s, o, l, u, f, p = 0, c = r.charCodeAt(p), d = r.length, h = [{ nodes: e }], y = 0, m, g = "", v = "", b = ""; p < d; ) if (c <= 32) {
      n = p;
      do
        n += 1, c = r.charCodeAt(n);
      while (c <= 32);
      s = r.slice(p, n), a = e[e.length - 1], c === Qs && y ? b = s : a && a.type === "div" ? (a.after = s, a.sourceEndIndex += s.length) : c === Ks || c === Zs || c === ft && r.charCodeAt(n + 1) !== kn && (!m || m && m.type === "function" && m.value !== "calc") ? v = s : e.push({ type: "space", sourceIndex: p, sourceEndIndex: n, value: s }), p = n;
    } else if (c === Sn || c === Js) {
      n = p, i = c === Sn ? "'" : '"', s = { type: "string", sourceIndex: p, quote: i };
      do
        if (o = false, n = r.indexOf(i, n + 1), ~n) for (l = n; r.charCodeAt(l - 1) === Xs; ) l -= 1, o = !o;
        else r += i, n = r.length - 1, s.unclosed = true;
      while (o);
      s.value = r.slice(p + 1, n), s.sourceEndIndex = s.unclosed ? n : n + 1, e.push(s), p = n + 1, c = r.charCodeAt(p);
    } else if (c === ft && r.charCodeAt(p + 1) === kn) n = r.indexOf("*/", p), s = { type: "comment", sourceIndex: p, sourceEndIndex: n + 2 }, n === -1 && (s.unclosed = true, n = r.length, s.sourceEndIndex = n), s.value = r.slice(p + 2, n), e.push(s), p = n + 2, c = r.charCodeAt(p);
    else if ((c === ft || c === kn) && m && m.type === "function" && m.value === "calc") s = r[p], e.push({ type: "word", sourceIndex: p - v.length, sourceEndIndex: p + s.length, value: s }), p += 1, c = r.charCodeAt(p);
    else if (c === ft || c === Ks || c === Zs) s = r[p], e.push({ type: "div", sourceIndex: p - v.length, sourceEndIndex: p + s.length, value: s, before: v, after: "" }), v = "", p += 1, c = r.charCodeAt(p);
    else if (Hs === c) {
      n = p;
      do
        n += 1, c = r.charCodeAt(n);
      while (c <= 32);
      if (f = p, s = { type: "function", sourceIndex: p - g.length, value: g, before: r.slice(f + 1, n) }, p = n, g === "url" && c !== Sn && c !== Js) {
        n -= 1;
        do
          if (o = false, n = r.indexOf(")", n + 1), ~n) for (l = n; r.charCodeAt(l - 1) === Xs; ) l -= 1, o = !o;
          else r += ")", n = r.length - 1, s.unclosed = true;
        while (o);
        u = n;
        do
          u -= 1, c = r.charCodeAt(u);
        while (c <= 32);
        f < u ? (p !== u + 1 ? s.nodes = [{ type: "word", sourceIndex: p, sourceEndIndex: u + 1, value: r.slice(p, u + 1) }] : s.nodes = [], s.unclosed && u + 1 !== n ? (s.after = "", s.nodes.push({ type: "space", sourceIndex: u + 1, sourceEndIndex: n, value: r.slice(u + 1, n) })) : (s.after = r.slice(u + 1, n), s.sourceEndIndex = n)) : (s.after = "", s.nodes = []), p = n + 1, s.sourceEndIndex = s.unclosed ? n : p, c = r.charCodeAt(p), e.push(s);
      } else y += 1, s.after = "", s.sourceEndIndex = p + 1, e.push(s), h.push(s), e = s.nodes = [], m = s;
      g = "";
    } else if (Qs === c && y) p += 1, c = r.charCodeAt(p), m.after = b, m.sourceEndIndex += b.length, b = "", y -= 1, h[h.length - 1].sourceEndIndex = p, h.pop(), m = h[y], e = m.nodes;
    else {
      n = p;
      do
        c === Xs && (n += 1), n += 1, c = r.charCodeAt(n);
      while (n < d && !(c <= 32 || c === Sn || c === Js || c === Ks || c === Zs || c === ft || c === Hs || c === kn && m && m.type === "function" && m.value === "calc" || c === ft && m.type === "function" && m.value === "calc" || c === Qs && y));
      s = r.slice(p, n), Hs === c ? g = s : (Qw === s.charCodeAt(0) || Jw === s.charCodeAt(0)) && Xw === s.charCodeAt(1) && Kw.test(s.slice(2)) ? e.push({ type: "unicode-range", sourceIndex: p, sourceEndIndex: n, value: s }) : e.push({ type: "word", sourceIndex: p, sourceEndIndex: n, value: s }), p = n;
    }
    for (p = h.length - 1; p; p -= 1) h[p].unclosed = true, h[p].sourceEndIndex = r.length;
    return h[0].nodes;
  };
});
var Yf = S((gk, Gf) => {
  Gf.exports = function t(e, r, n) {
    var i, a, s, o;
    for (i = 0, a = e.length; i < a; i += 1) s = e[i], n || (o = r(s, i, e)), o !== false && s.type === "function" && Array.isArray(s.nodes) && t(s.nodes, r, n), n && r(s, i, e);
  };
});
var Xf = S((yk, Jf) => {
  function Hf(t, e) {
    var r = t.type, n = t.value, i, a;
    return e && (a = e(t)) !== void 0 ? a : r === "word" || r === "space" ? n : r === "string" ? (i = t.quote || "", i + n + (t.unclosed ? "" : i)) : r === "comment" ? "/*" + n + (t.unclosed ? "" : "*/") : r === "div" ? (t.before || "") + n + (t.after || "") : Array.isArray(t.nodes) ? (i = Qf(t.nodes, e), r !== "function" ? i : n + "(" + (t.before || "") + i + (t.after || "") + (t.unclosed ? "" : ")")) : n;
  }
  function Qf(t, e) {
    var r, n;
    if (Array.isArray(t)) {
      for (r = "", n = t.length - 1; ~n; n -= 1) r = Hf(t[n], e) + r;
      return r;
    }
    return Hf(t, e);
  }
  Jf.exports = Qf;
});
var Zf = S((vk, Kf) => {
  var On = "-".charCodeAt(0), An = "+".charCodeAt(0), ea = ".".charCodeAt(0), Zw = "e".charCodeAt(0), e0 = "E".charCodeAt(0);
  function t0(t) {
    var e = t.charCodeAt(0), r;
    if (e === An || e === On) {
      if (r = t.charCodeAt(1), r >= 48 && r <= 57) return true;
      var n = t.charCodeAt(2);
      return r === ea && n >= 48 && n <= 57;
    }
    return e === ea ? (r = t.charCodeAt(1), r >= 48 && r <= 57) : e >= 48 && e <= 57;
  }
  Kf.exports = function(t) {
    var e = 0, r = t.length, n, i, a;
    if (r === 0 || !t0(t)) return false;
    for (n = t.charCodeAt(e), (n === An || n === On) && e++; e < r && (n = t.charCodeAt(e), !(n < 48 || n > 57)); ) e += 1;
    if (n = t.charCodeAt(e), i = t.charCodeAt(e + 1), n === ea && i >= 48 && i <= 57) for (e += 2; e < r && (n = t.charCodeAt(e), !(n < 48 || n > 57)); ) e += 1;
    if (n = t.charCodeAt(e), i = t.charCodeAt(e + 1), a = t.charCodeAt(e + 2), (n === Zw || n === e0) && (i >= 48 && i <= 57 || (i === An || i === On) && a >= 48 && a <= 57)) for (e += i === An || i === On ? 3 : 2; e < r && (n = t.charCodeAt(e), !(n < 48 || n > 57)); ) e += 1;
    return { number: t.slice(0, e), unit: t.slice(e) };
  };
});
var nc = S((wk, rc) => {
  var r0 = Bf(), ec = Yf(), tc = Xf();
  function qe(t) {
    return this instanceof qe ? (this.nodes = r0(t), this) : new qe(t);
  }
  qe.prototype.toString = function() {
    return Array.isArray(this.nodes) ? tc(this.nodes) : "";
  };
  qe.prototype.walk = function(t, e) {
    return ec(this.nodes, t, e), this;
  };
  qe.unit = Zf();
  qe.walk = ec;
  qe.stringify = tc;
  rc.exports = qe;
});
var bc = S((wO, wc) => {
  wc.exports = { content: [], presets: [], darkMode: "media", theme: { accentColor: ({ theme: t }) => ({ ...t("colors"), auto: "auto" }), animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aria: { checked: 'checked="true"', disabled: 'disabled="true"', expanded: 'expanded="true"', hidden: 'hidden="true"', pressed: 'pressed="true"', readonly: 'readonly="true"', required: 'required="true"', selected: 'selected="true"' }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9" }, backdropBlur: ({ theme: t }) => t("blur"), backdropBrightness: ({ theme: t }) => t("brightness"), backdropContrast: ({ theme: t }) => t("contrast"), backdropGrayscale: ({ theme: t }) => t("grayscale"), backdropHueRotate: ({ theme: t }) => t("hueRotate"), backdropInvert: ({ theme: t }) => t("invert"), backdropOpacity: ({ theme: t }) => t("opacity"), backdropSaturate: ({ theme: t }) => t("saturate"), backdropSepia: ({ theme: t }) => t("sepia"), backgroundColor: ({ theme: t }) => t("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: t }) => t("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, borderColor: ({ theme: t }) => ({ ...t("colors"), DEFAULT: t("colors.gray.200", "currentColor") }), borderOpacity: ({ theme: t }) => t("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderSpacing: ({ theme: t }) => ({ ...t("spacing") }), borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px" }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: t }) => t("colors"), brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2" }, caretColor: ({ theme: t }) => t("colors"), colors: ({ colors: t }) => ({ inherit: t.inherit, current: t.current, transparent: t.transparent, black: t.black, white: t.white, slate: t.slate, gray: t.gray, zinc: t.zinc, neutral: t.neutral, stone: t.stone, red: t.red, orange: t.orange, amber: t.amber, yellow: t.yellow, lime: t.lime, green: t.green, emerald: t.emerald, teal: t.teal, cyan: t.cyan, sky: t.sky, blue: t.blue, indigo: t.indigo, violet: t.violet, purple: t.purple, fuchsia: t.fuchsia, pink: t.pink, rose: t.rose }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, container: {}, content: { none: "none" }, contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2" }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: t }) => t("borderColor"), divideOpacity: ({ theme: t }) => t("borderOpacity"), divideWidth: ({ theme: t }) => t("borderWidth"), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: t }) => ({ none: "none", ...t("colors") }), flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: t }) => ({ auto: "auto", ...t("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%" }), flexGrow: { 0: "0", DEFAULT: "1" }, flexShrink: { 0: "0", DEFAULT: "1" }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: t }) => t("spacing"), gradientColorStops: ({ theme: t }) => t("colors"), grayscale: { 0: "0", DEFAULT: "100%" }, gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-full": "1 / -1" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7" }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7" }, gridTemplateColumns: { none: "none", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))" }, gridTemplateRows: { none: "none", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))" }, height: ({ theme: t }) => ({ auto: "auto", ...t("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }), hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, inset: ({ theme: t }) => ({ auto: "auto", ...t("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), invert: { 0: "0", DEFAULT: "100%" }, keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, margin: ({ theme: t }) => ({ auto: "auto", ...t("spacing") }), maxHeight: ({ theme: t }) => ({ ...t("spacing"), none: "none", full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }), maxWidth: ({ theme: t, breakpoints: e }) => ({ none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch", ...e(t("screens")) }), minHeight: { 0: "0px", full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 20: "0.2", 25: "0.25", 30: "0.3", 40: "0.4", 50: "0.5", 60: "0.6", 70: "0.7", 75: "0.75", 80: "0.8", 90: "0.9", 95: "0.95", 100: "1" }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12" }, outlineColor: ({ theme: t }) => t("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, padding: ({ theme: t }) => t("spacing"), placeholderColor: ({ theme: t }) => t("colors"), placeholderOpacity: ({ theme: t }) => t("opacity"), ringColor: ({ theme: t }) => ({ DEFAULT: t("colors.blue.500", "#3b82f6"), ...t("colors") }), ringOffsetColor: ({ theme: t }) => t("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, ringOpacity: ({ theme: t }) => ({ DEFAULT: "0.5", ...t("opacity") }), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg" }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5" }, screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, scrollMargin: ({ theme: t }) => ({ ...t("spacing") }), scrollPadding: ({ theme: t }) => t("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg" }, space: ({ theme: t }) => ({ ...t("spacing") }), spacing: { px: "1px", 0: "0px", 0.5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, stroke: ({ theme: t }) => ({ none: "none", ...t("colors") }), strokeWidth: { 0: "0", 1: "1", 2: "2" }, supports: {}, data: {}, textColor: ({ theme: t }) => t("colors"), textDecorationColor: ({ theme: t }) => t("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, textIndent: ({ theme: t }) => ({ ...t("spacing") }), textOpacity: ({ theme: t }) => t("opacity"), textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionDuration: { DEFAULT: "150ms", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: t }) => ({ ...t("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), width: ({ theme: t }) => ({ auto: "auto", ...t("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", min: "min-content", max: "max-content", fit: "fit-content" }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50" } }, plugins: [] };
});
var Rc = S((_O, Pc) => {
  "use strict";
  var Pn = Object.prototype.hasOwnProperty, Tc = Object.prototype.toString, kc = Object.defineProperty, Oc = Object.getOwnPropertyDescriptor, Ac = function(e) {
    return typeof Array.isArray == "function" ? Array.isArray(e) : Tc.call(e) === "[object Array]";
  }, Ec = function(e) {
    if (!e || Tc.call(e) !== "[object Object]") return false;
    var r = Pn.call(e, "constructor"), n = e.constructor && e.constructor.prototype && Pn.call(e.constructor.prototype, "isPrototypeOf");
    if (e.constructor && !r && !n) return false;
    var i;
    for (i in e) ;
    return typeof i > "u" || Pn.call(e, i);
  }, Cc = function(e, r) {
    kc && r.name === "__proto__" ? kc(e, r.name, { enumerable: true, configurable: true, value: r.newValue, writable: true }) : e[r.name] = r.newValue;
  }, _c = function(e, r) {
    if (r === "__proto__") if (Pn.call(e, r)) {
      if (Oc) return Oc(e, r).value;
    } else return;
    return e[r];
  };
  Pc.exports = function t() {
    var e, r, n, i, a, s, o = arguments[0], l = 1, u = arguments.length, f = false;
    for (typeof o == "boolean" && (f = o, o = arguments[1] || {}, l = 2), (o == null || typeof o != "object" && typeof o != "function") && (o = {}); l < u; ++l) if (e = arguments[l], e != null) for (r in e) n = _c(o, r), i = _c(e, r), o !== i && (f && i && (Ec(i) || (a = Ac(i))) ? (a ? (a = false, s = n && Ac(n) ? n : []) : s = n && Ec(n) ? n : {}, Cc(o, { name: r, newValue: t(f, s, i) })) : typeof i < "u" && Cc(o, { name: r, newValue: i }));
    return o;
  };
});
var Rn = S((TO, Ic) => {
  var da = function(t, e) {
    var r = new t.constructor();
    return Object.keys(t).forEach(function(n) {
      if (!!t.hasOwnProperty(n)) {
        var i = t[n], a = typeof i;
        n === "parent" && a === "object" ? e && (r[n] = e) : n === "source" ? r[n] = i : i instanceof Array ? n === "nodes" ? r[n] = [] : r[n] = i.map(function(s) {
          da(s, r);
        }) : n !== "before" && n !== "after" && n !== "between" && n !== "semicolon" && (a === "object" && (i = da(i)), r[n] = i);
      }
    }), r;
  };
  Ic.exports = da;
});
var Fc = S((PO, Nc) => {
  "use strict";
  Nc.exports = Mc;
  function Mc(t, e, r) {
    t instanceof RegExp && (t = Dc(t, r)), e instanceof RegExp && (e = Dc(e, r));
    var n = Lc(t, e, r);
    return n && { start: n[0], end: n[1], pre: r.slice(0, n[0]), body: r.slice(n[0] + t.length, n[1]), post: r.slice(n[1] + e.length) };
  }
  function Dc(t, e) {
    var r = e.match(t);
    return r ? r[0] : null;
  }
  Mc.range = Lc;
  function Lc(t, e, r) {
    var n, i, a, s, o, l = r.indexOf(t), u = r.indexOf(e, l + 1), f = l;
    if (l >= 0 && u > 0) {
      if (t === e) return [l, u];
      for (n = [], a = r.length; f >= 0 && !o; ) f == l ? (n.push(f), l = r.indexOf(t, f + 1)) : n.length == 1 ? o = [n.pop(), u] : (i = n.pop(), i < a && (a = i, s = u), u = r.indexOf(e, f + 1)), f = l < u && l >= 0 ? l : u;
      n.length && (o = [a, s]);
    }
    return o;
  }
});
var $c = S((RO, qc) => {
  var E0 = /(.*?(?:(?:\([^\)]+\)|\[[^\]]+\]|(?![><+~\s]).)+)(?:(?:(?:\s(?!>>))|(?:\t(?!>>))|(?:\s?>>\s?))(?!\s+))(?![><+~][\s]+?))/, C0 = function(t) {
    return t.split(E0).filter(function(e) {
      return e.length > 0;
    }).map(function(e) {
      return e.trim().replace(/\s*?>>\s*?/g, "");
    });
  };
  qc.exports = C0;
});
var dr = S((IO, Uc) => {
  var _0 = $c(), T0 = function(t, e) {
    e = e || false;
    for (var r = [[]], n = e ? t : t.parent; n; ) {
      var i = (n.selectors || []).map(function(s) {
        return { value: s, type: "selector" };
      });
      n.type === "atrule" && (i = [].concat(n.params).map(function(s) {
        return { value: "@" + n.name + " " + s, type: "atrule" };
      }));
      var a = (i.length > 0 ? i : [1]).map(function() {
        return r.map(function(s) {
          return s.slice(0);
        });
      });
      i.forEach(function(s, o) {
        a[o] = a[o].map(function(l) {
          var u = [s.value];
          return s.type === "selector" && (u = _0(s.value)), l.unshift.apply(l, u), l;
        });
      }), r = [], a.forEach(function(s) {
        r = r.concat(s);
      }), n = n.parent;
    }
    return r;
  };
  Uc.exports = T0;
});
var Vc = S((DO, jc) => {
  "use strict";
  var P0 = /[|\\{}()[\]^$+*?.]/g;
  jc.exports = function(t) {
    if (typeof t != "string") throw new TypeError("Expected a string");
    return t.replace(P0, "\\$&");
  };
});
var Wc = S((MO, zc) => {
  var R0 = { "*": true, ":root": true, html: true }, I0 = function(t) {
    return !!R0[t];
  };
  zc.exports = I0;
});
var Gc = S((LO, Bc) => {
  var D0 = /(.*?(?:(?:\([^\)]+\)|\[[^\]]+\]|(?!>>|<|\+|~|\s).)+)(?:(?:(?:>(?!>))|(?:\s?>(?!>)\s?))(?!\s+))(?!(?:>>|<|\+|~)[\s]+?))/, M0 = function(t) {
    return t.split(D0).filter(function(e) {
      return e.length > 0;
    }).map(function(e) {
      return e.trim().replace(/\s*?>\s*?/g, "");
    });
  };
  Bc.exports = M0;
});
var ha = S((NO, Zc) => {
  var L0 = Vc(), Yc = Wc(), Hc = Gc(), N0 = /^@.*/, Jc = /([^\s:]+)((?::|::)[^\s]*?)(\s+|$)/;
  function Xc(t, e) {
    var r, n, i = e.some(function(a) {
      return t.some(function(s) {
        r = null;
        var o = true;
        for (n = 0; n < a.length; n++) {
          for (var l = a[n], u = r || 0, f = -1, p = s.slice(u), c = 0; c < p.length; c++) {
            var d = p[c], h = u + c;
            if (new RegExp(L0(l) + "$").test(d)) {
              f = h;
              break;
            }
            if (Yc(l) || Yc(d)) {
              f = h;
              break;
            }
            var y = Hc(d);
            if (y.length > 1) {
              var m = [].concat([y]), g = [].concat([a.slice(n).reduce(function(w, O) {
                return w.concat(Hc(O));
              }, [])]), v = Xc(m, g);
              (v.doesMatchScope || n + 1 < a.length) && (f = h, n += v.scopePieceIndex - 1);
              break;
            }
          }
          var b = f >= u;
          if (r = f + 1, o = o && b, !o) break;
        }
        return o;
      });
    });
    return { doesMatchScope: i, nodeScopePieceIndex: r - 1, scopePieceIndex: n };
  }
  var Qc = function(t) {
    return t.map(function(e) {
      return e.map(function(r) {
        return N0.test(r) ? r : r.replace(new RegExp(Jc.source, "g"), function(n, i, a, s) {
          return i + s;
        });
      });
    });
  }, Kc = function(t, e, r) {
    return t = Qc(t), r && (e = Qc(e)), Xc(t, e).doesMatchScope;
  };
  Kc.RE_PSEUDO_SELECTOR = Jc;
  Zc.exports = Kc;
});
var ma = S((FO, tp) => {
  var F0 = ha(), ep = dr(), q0 = function(t, e, r) {
    var n = ep(t, true), i = ep(e, true);
    return F0(n, i, r);
  };
  tp.exports = q0;
});
var ga = S((qO, np) => {
  var rp = function(t, e, r) {
    r = r || [];
    var n = false;
    return t && (r = t.reduce(function(i, a) {
      var s = !!e[a], o = s ? i.some(function(l) {
        return e[a].some(function(u) {
          return l === u;
        });
      }) : false;
      return n = n || o, s && !n && (i = i.concat(e[a]), (e[a] || []).forEach(function(l) {
        var u = rp(l.variablesUsed, e, i);
        i = u.deps, n = n || u.hasCircularOrSelfReference;
      })), i;
    }, r)), { deps: r, hasCircularOrSelfReference: n };
  };
  np.exports = rp;
});
var ya = S(($O, ip) => {
  var $0 = dr(), U0 = function(t, e) {
    for (var r, n = e; n.parent && !r; ) {
      var i = $0(n.clone(), true);
      i.some(function(a) {
        return a.some(function(s) {
          return s === t ? (r = n, true) : false;
        });
      }), n = n.parent;
    }
    return r;
  };
  ip.exports = U0;
});
var va = S((UO, ap) => {
  var sp = Rn(), j0 = function(t, e, r) {
    r = r || function() {
      return true;
    };
    for (var n = [], i = t, a = false; i && !a; ) i.type === "decl" ? n.push(i.clone()) : n.push(sp(i)), a = r(i), i = i.parent;
    for (var s = [], o = e; o; ) s.push(sp(o)), o = o.parent;
    return s.forEach(function(l, u, f) {
      u + 1 < f.length && (l.parent = f[u + 1]);
    }), n.forEach(function(l, u, f) {
      u + 1 < f.length ? l.parent = f[u + 1] : (s.slice(-1)[0].parent = i, l.parent = s[0]);
    }), n[0];
  };
  ap.exports = j0;
});
var wa = S((jO, lp) => {
  var V0 = Fc(), z0 = dr(), op = ma(), W0 = ga(), B0 = ya(), G0 = va(), Y0 = /var\(\s*(--[^,\s)]+)/;
  function H0(t) {
    return String(t);
  }
  function In(t) {
    var e = V0("(", ")", t);
    if (e) {
      if (/(?:^|[^\w-])var$/.test(e.pre)) return { pre: e.pre.slice(0, -3), body: e.body, post: e.post };
      var r = In(e.body);
      if (r) return { pre: e.pre + "(" + r.pre, body: r.body, post: r.post + ")" + e.post };
      var n = In(e.post);
      if (n) return { pre: e.pre + "(" + e.body + ")" + n.pre, body: n.body, post: n.post };
    }
  }
  var Dn = function(t, e, r, n) {
    for (var i = n ? "	" : "", a = void 0, s = H0(t.value), o = [], l = {}, u = s; a = In(u); ) {
      var f = a.body.split(","), p = f[0].trim();
      l[p] = true, u = (a.pre || "") + a.body.replace(p, "") + (a.post || "");
    }
    u = void 0;
    for (var c = Object.keys(l), d = false; a = In(s); ) {
      var h = void 0, f = a.body.split(","), p = f[0].trim(), y = f.length > 1 ? f.slice(1).join(",").trim() : void 0;
      (e[p] || []).forEach(function(C) {
        var A = C.parent.type === "root" || C.parent.selectors[0] === ":root", R = op(t.parent, C.parent), L = op(t.parent, C.parent, r);
        L && (!(h || {}).isImportant || C.isImportant) && (h = C);
      });
      var m = (h || {}).calculatedInPlaceValue || function() {
        var C = y;
        if (y) {
          var A = t.clone({ parent: t.parent, value: y });
          C = Dn(A, e, false, true).value;
        }
        return C;
      }();
      if (h !== void 0 && !W0(c, e).hasCircularOrSelfReference) {
        var g = z0(t.parent.parent, true), v = g[0].slice(-1)[0], b = B0(v, h.decl.parent), w = G0(h.decl, t.parent.parent, function(C) {
          return C === b;
        });
        m = Dn(w, e, false, true).value;
      }
      d = m === void 0, d && o.push(["variable " + p + " is undefined and used without a fallback", { node: t }]), s = (a.pre || "") + m + (a.post || "");
    }
    return { value: d ? void 0 : s, variablesUsed: c, warnings: o };
  };
  Dn.RE_VAR_FUNC = Y0;
  lp.exports = Dn;
});
var pp = S((VO, cp) => {
  var up = wa(), Q0 = dr(), J0 = ga(), fp = ha(), X0 = ma(), Mn = Rn(), K0 = ya(), Z0 = va();
  function eb(t, e, r, n) {
    t.forEach(function(i) {
      J0(t, e).deps.forEach(function(a) {
        var s;
        if (a.isUnderAtRule) {
          var o = Q0(a.parent, true), l = o[0].slice(-1)[0], u = K0(l, r.parent), f = a.parent.parent;
          s = Z0(r, f, function(h) {
            return h === u;
          });
        } else if (fp.RE_PSEUDO_SELECTOR.test(a.parent.selector)) {
          var p = Mn(r.parent);
          p.parent = r.parent.parent, s = r.clone(), p.append(s);
          var c = a.parent.selector.match(new RegExp(fp.RE_PSEUDO_SELECTOR.source + "$")), d = c ? c[2] : "";
          p.selector += d;
        }
        s && X0(s, a.parent, true) && n(s, a);
      });
    });
  }
  function tb(t, e, r, n, i) {
    r = (typeof r == "function" ? r(t) : r) || false, n = n || false;
    var a = function(l) {
      return i && i(l), l;
    }, s = a(up(t, e)), o;
    eb(s.variablesUsed, e, t, function(l, u) {
      var f = Mn(t.parent), p = t.clone();
      f.append(p);
      let c;
      if (typeof r == "function" ? c = r(t) : c = r, c === true && p.cloneAfter(), p.value = a(up(l, e, true)).value, u.isUnderAtRule) {
        var d = Mn(u.parent.parent);
        d.append(f);
        for (var h = d, y = u.parent.parent; y.parent.type === "atrule"; ) {
          var m = Mn(y.parent);
          m.append(h), h = m, y = y.parent;
        }
        t.parent.parent.insertAfter(n && o || t.parent, h), o = h;
      } else f.selector = l.parent.selector, t.parent.parent.insertAfter(n && o || t.parent, f);
    }), r === true && t.value !== s.value && t.cloneAfter(), s.value === void 0 && (s.value = "undefined"), t.value = s.value;
  }
  cp.exports = tb;
});
var gp = S((zO, ba) => {
  var dp = Rc(), rb = Rn(), hp = wa(), nb = pp(), mp = /(--(.+))/;
  function ib(t, e) {
    t.walkDecls(function(r) {
      mp.test(r.prop) && e(r);
    });
  }
  function sb(t) {
    for (var e = t; e && e.nodes.length <= 0; ) {
      var r = e.type !== "root" ? e : null;
      r ? (e = r.parent, r.remove()) : e = null;
    }
  }
  var ab = { preserve: false, variables: {}, preserveInjectedVariables: true, preserveAtRulesOrder: false };
  ba.exports = (t = {}) => {
    var e = dp({}, ab, t);
    return { postcssPlugin: "postcss-css-variables", Once(r, { decl: n, result: i, rule: a }) {
      var s = [], o = [], l = {};
      l = dp(l, Object.keys(e.variables).reduce(function(p, c) {
        var d = e.variables[c];
        c = c.slice(0, 2) === "--" ? c : "--" + c;
        var h = (d || {}).value || d, y = (d || {}).isImportant || false, m = a({ selector: ":root" });
        r.root().prepend(m);
        var g = n({ prop: c, value: h, important: y });
        return m.append(g), e.preserveInjectedVariables || o.push(g), p[c] = (p[c] || []).concat({ decl: g, prop: c, calculatedInPlaceValue: h, isImportant: y, variablesUsed: [], parent: m, isUnderAtRule: false }), p;
      }, {}));
      var u = function(p) {
        var c = [].concat(p.warnings);
        return c.forEach(function(d) {
          d = [].concat(d), i.warn.apply(i, d);
        }), p;
      };
      ib(r, function(p) {
        var c = p.parent, d = u(hp(p, l));
        p.parent.selectors.forEach(function(y) {
          var m = rb(p.parent);
          m.selector = y, m.parent = p.parent.parent;
          var g = p.clone();
          m.append(g);
          var v = p.prop;
          l[v] = (l[v] || []).concat({ decl: g, prop: v, calculatedInPlaceValue: d.value, isImportant: p.important || false, variablesUsed: d.variablesUsed, parent: m, isUnderAtRule: m.parent.type === "atrule" });
        });
        let h;
        typeof e.preserve == "function" ? h = e.preserve(p) : h = e.preserve, h ? h === "computed" && (p.value = d.value) : p.remove(), c.nodes.length <= 0 && s.push(c);
      });
      var f = [];
      r.walk(function(p) {
        if (p.nodes !== void 0) {
          var c = p.nodes.some(function(d) {
            if (d.type === "decl") {
              var h = d;
              if (hp.RE_VAR_FUNC.test(h.value) && !mp.test(h.prop)) return true;
            }
            return false;
          });
          c && f.push(p);
        }
      }), f.forEach(function(p) {
        var c = [].concat(p);
        p.type === "rule" && p.selectors.length > 1 && (c = p.selectors.reverse().map(function(d) {
          var h = p.cloneAfter();
          return h.selector = d, h;
        }), p.remove()), c.forEach(function(d) {
          d.nodes.slice(0).forEach(function(h) {
            if (h.type === "decl") {
              var y = h;
              nb(y, l, e.preserve, e.preserveAtRulesOrder, u);
            }
          });
        });
      }), s.forEach(sb), o.forEach(function(p) {
        p.remove();
      });
    } };
  };
  ba.exports.postcss = true;
});
var _a = (t) => ({ extractCSS(e, r = false) {
  let n = /(?:[\s\r\n]*)?(?<prop>[\w-]+)\s*:\s*(?<value>[^;\r\n]+)/gm, i, a = {};
  for (; (i = n.exec(e)) !== null; ) {
    let { prop: s, value: o } = i.groups;
    a[s] = o;
  }
  return Object.entries(a).reduce((s, [o, l]) => s + `${r ? "	" : ""}${o}: ${l}; 
\r`, "");
}, merge() {
  let e = new RegExp("(?<=\\.)[^{]+\\s*\\{(?<content>[^{}]*(?:(?<=;)\\s*\\n\\r?[^{}]*)*)\\s*\\}", "gm"), r, n = "";
  for (; (r = e.exec(t)) !== null; ) {
    let { content: o } = r.groups;
    n += o;
  }
  let i = this.extractCSS(n), a = /(?<media>@media\s*\([^\)]*\))\s*\{(?<content>[^\}]*)\}/gm, s;
  for (; (s = a.exec(t)) !== null; ) {
    let { media: o, content: l } = s.groups;
    i += `
\r${o} {
\r${this.extractCSS(l, true)}}
\r`;
  }
  return t = i, this;
}, removeUndefined() {
  let e = /^[^{}]*(?:[.#][a-zA-Z0-9_-]+)[^{]*{[^}]*\b(?:[a-z-]+):\s*undefined\s*;?[^}]*}/gm;
  return t = t.replace(e, ""), this;
}, combineMediaQueries() {
  let e = new RegExp("@media\\s*(?<conditions>\\([^)]+\\))\\s*{(?<content>(?:[^{}]+|{(?:[^{}]+|{[^{}]*})*})+)}", "gs"), r = /* @__PURE__ */ new Map(), n = (a) => a.replace(e, (s, o, l) => {
    var f;
    let u = (f = r.get(o)) != null ? f : "";
    return r.set(o, u + n(l.trim())), n(l), "";
  }), i = [];
  return i.push(n(t)), i.push(...Array.from(r, ([a, s]) => `@media${a}{${s}}`)), t = i.join(""), this;
}, minify() {
  return t = t.replace(/\/\*[\s\S]*?\*\//gm, "").replace(/;\s+/gm, ";").replace(/:\s+/gm, ":").replace(/\)\s*{/gm, "){").replace(/\s+\(/gm, "(").replace(/{\s+/gm, "{").replace(/}\s+/gm, "}").replace(/\s*{/gm, "{").replace(/;?\s*}/gm, "}"), this;
}, fixRGB() {
  let e = /rgb\(\s*(?<red>\d+)\s*(?<green>\d+)\s*(?<blue>\d+)(?:\s*\/\s*(?<alpha>[\d%.]+))?\s*\)/gm, r;
  for (; (r = e.exec(t)) !== null; ) {
    let [n] = r, { red: i, green: a, blue: s, alpha: o = 1 } = r.groups;
    t = t.replace(n, `rgb(${i},${a},${s}${o === "1" ? "" : `,${o}`})`);
  }
  return this;
}, removeMediaQueries() {
  return t = t.replace(/@media[^\{]+\{[^@]+\}/g, ""), this;
}, get() {
  return t;
} });
function Nn() {
}
var D = { info: Nn, warn: Nn, risk: Nn };
function Fn(t) {
  let e = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  if (t.walkAtRules((i) => {
    i.name === "apply" && n.add(i), i.name === "import" && (i.params === '"tailwindcss/base"' || i.params === "'tailwindcss/base'" ? (i.name = "tailwind", i.params = "base") : i.params === '"tailwindcss/components"' || i.params === "'tailwindcss/components'" ? (i.name = "tailwind", i.params = "components") : i.params === '"tailwindcss/utilities"' || i.params === "'tailwindcss/utilities'" ? (i.name = "tailwind", i.params = "utilities") : (i.params === '"tailwindcss/screens"' || i.params === "'tailwindcss/screens'" || i.params === '"tailwindcss/variants"' || i.params === "'tailwindcss/variants'") && (i.name = "tailwind", i.params = "variants")), i.name === "tailwind" && (i.params === "screens" && (i.params = "variants"), e.add(i.params)), ["layer", "responsive", "variants"].includes(i.name) && (["responsive", "variants"].includes(i.name) && D.warn(`${i.name}-at-rule-deprecated`, [`The \`@${i.name}\` directive has been deprecated in Tailwind CSS v3.0.`, "Use `@layer utilities` or `@layer components` instead.", "https://tailwindcss.com/docs/upgrade-guide#replace-variants-with-layer"]), r.add(i));
  }), !e.has("base") || !e.has("components") || !e.has("utilities")) {
    for (let i of r) if (i.name === "layer" && ["base", "components", "utilities"].includes(i.params)) {
      if (!e.has(i.params)) throw i.error(`\`@layer ${i.params}\` is used but no matching \`@tailwind ${i.params}\` directive is present.`);
    } else if (i.name === "responsive") {
      if (!e.has("utilities")) throw i.error("`@responsive` is used but `@tailwind utilities` is missing.");
    } else if (i.name === "variants" && !e.has("utilities")) throw i.error("`@variants` is used but `@tailwind utilities` is missing.");
  }
  return { tailwindDirectives: e, applyDirectives: n };
}
yr();
var Ff = Y(Da());
var La = "3.2.7";
var $n = { name: "tailwindcss", version: La, description: "A utility-first CSS framework for rapidly building custom user interfaces.", license: "MIT", main: "lib/index.js", types: "types/index.d.ts", repository: "https://github.com/tailwindlabs/tailwindcss.git", bugs: "https://github.com/tailwindlabs/tailwindcss/issues", homepage: "https://tailwindcss.com", bin: { tailwind: "lib/cli.js", tailwindcss: "lib/cli.js" }, tailwindcss: { engine: "stable" }, scripts: { prebuild: "npm run generate && rimraf lib", build: "swc src --out-dir lib --copy-files", postbuild: "esbuild lib/cli-peer-dependencies.js --bundle --platform=node --outfile=peers/index.js --define:process.env.CSS_TRANSFORMER_WASM=false", "rebuild-fixtures": "npm run build && node -r @swc/register scripts/rebuildFixtures.js", style: "eslint .", pretest: "npm run generate", test: "jest", "test:integrations": "npm run test --prefix ./integrations", "install:integrations": "node scripts/install-integrations.js", "generate:plugin-list": "node -r @swc/register scripts/create-plugin-list.js", "generate:types": "node -r @swc/register scripts/generate-types.js", generate: "npm run generate:plugin-list && npm run generate:types", "release-channel": "node ./scripts/release-channel.js", "release-notes": "node ./scripts/release-notes.js", prepublishOnly: "npm install --force && npm run build" }, files: ["src/*", "cli/*", "lib/*", "peers/*", "scripts/*.js", "stubs/*.stub.js", "nesting/*", "types/**/*", "*.d.ts", "*.css", "*.js"], devDependencies: { "@swc/cli": "0.1.59", "@swc/core": "1.3.24", "@swc/jest": "0.2.24", "@swc/register": "0.1.10", autoprefixer: "^10.4.13", browserslist: "^4.21.4", concurrently: "^7.5.0", cssnano: "^5.1.14", esbuild: "^0.16.10", eslint: "^8.31.0", "eslint-config-prettier": "^8.6.0", "eslint-plugin-prettier": "^4.2.1", jest: "^28.1.3", "jest-diff": "^28.1.3", lightningcss: "^1.18.0", prettier: "^2.8.1", rimraf: "^3.0.0", "source-map-js": "^1.0.2", turbo: "^1.6.3" }, peerDependencies: { postcss: "^8.0.9" }, dependencies: { arg: "^5.0.2", chokidar: "^3.5.3", "color-name": "^1.1.4", detective: "^5.2.1", didyoumean: "^1.2.2", dlv: "^1.1.3", "fast-glob": "^3.2.12", "glob-parent": "^6.0.2", "is-glob": "^4.0.3", lilconfig: "^2.0.6", micromatch: "^4.0.5", "normalize-path": "^3.0.0", "object-hash": "^3.0.0", picocolors: "^1.0.0", postcss: "^8.0.9", "postcss-import": "^14.1.0", "postcss-js": "^4.0.0", "postcss-load-config": "^3.1.4", "postcss-nested": "6.0.0", "postcss-selector-parser": "^6.0.11", "postcss-value-parser": "^4.2.0", "quick-lru": "^5.1.1", resolve: "^1.22.1" }, browserslist: ["> 1%", "not edge <= 18", "not ie 11", "not op_mini all"], jest: { testTimeout: 3e4, setupFilesAfterEnv: ["<rootDir>/jest/customMatchers.js"], testPathIgnorePatterns: ["/node_modules/", "/integrations/", "/standalone-cli/", "\\.test\\.skip\\.js$"], transformIgnorePatterns: ["node_modules/(?!lightningcss)"], transform: { "\\.js$": "@swc/jest", "\\.ts$": "@swc/jest" } }, engines: { node: ">=12.13.0" } };
var Rp = $n.tailwindcss.engine === "oxide";
var Un = { NODE_ENV: "production", DEBUG: Dp(void 0), ENGINE: $n.tailwindcss.engine, OXIDE: Ip(void 0, Rp) };
var jn = /* @__PURE__ */ new Map();
var ke = new String("*");
var mt = Symbol("__NONE__");
function Ip(t, e) {
  return t === void 0 ? e : !(t === "0" || t === "false");
}
function Dp(t) {
  if (t === void 0) return false;
  if (t === "true" || t === "1") return true;
  if (t === "false" || t === "0") return false;
  if (t === "*") return true;
  let e = t.split(",").map((r) => r.split(":")[0]);
  return e.includes("-tailwindcss") ? false : !!e.includes("tailwindcss");
}
var $ = Y(Ze(), 1);
var I = $.default;
var ex = $.default.stringify;
var tx = $.default.fromJSON;
var rx = $.default.plugin;
var nx = $.default.parse;
var ix = $.default.list;
var sx = $.default.document;
var ax = $.default.comment;
var ox = $.default.atRule;
var lx = $.default.rule;
var ux = $.default.decl;
var fx = $.default.root;
var cx = $.default.CssSyntaxError;
var px = $.default.Declaration;
var dx = $.default.Container;
var hx = $.default.Processor;
var mx = $.default.Document;
var gx = $.default.Comment;
var yx = $.default.Warning;
var vx = $.default.AtRule;
var wx = $.default.Result;
var bx = $.default.Input;
var xx = $.default.Rule;
var Sx = $.default.Root;
var kx = $.default.Node;
var yn = Y(Ee());
var Lu = Y(vu());
var nt = Y(Mu(), 1);
var en = nt.default;
var zx = nt.default.objectify;
var Wx = nt.default.parse;
var Bx = nt.default.async;
var Gx = nt.default.sync;
function it(t) {
  return Array.isArray(t) ? t.flatMap((e) => I([(0, Lu.default)({ bubble: ["screen"] })]).process(e, { parser: en }).root.nodes) : it([t]);
}
function X(t) {
  if (Object.prototype.toString.call(t) !== "[object Object]") return false;
  let e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
var Nu = Y(Ee());
function st(t, e, r = false) {
  if (t === "") return e;
  let n = typeof e == "string" ? (0, Nu.default)().astSync(e) : e;
  return n.walkClasses((i) => {
    let a = i.value, s = r && a.startsWith("-");
    i.value = s ? `-${t}${a.slice(1)}` : `${t}${a}`;
  }), typeof e == "string" ? n.toString() : n;
}
function Be(t) {
  return t.replace(/\\,/g, "\\2c ");
}
var bs = Y(qu());
var Ev = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
var Cv = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
var Re = /(?:\d+|\d*\.\d+)%?/;
var tn = /(?:\s*,\s*|\s+)/;
var $u = /\s*[,/]\s*/;
var Ie = /var\(--(?:[^ )]*?)\)/;
var _v = new RegExp(`^(rgba?)\\(\\s*(${Re.source}|${Ie.source})(?:${tn.source}(${Re.source}|${Ie.source}))?(?:${tn.source}(${Re.source}|${Ie.source}))?(?:${$u.source}(${Re.source}|${Ie.source}))?\\s*\\)$`);
var Tv = new RegExp(`^(hsla?)\\(\\s*((?:${Re.source})(?:deg|rad|grad|turn)?|${Ie.source})(?:${tn.source}(${Re.source}|${Ie.source}))?(?:${tn.source}(${Re.source}|${Ie.source}))?(?:${$u.source}(${Re.source}|${Ie.source}))?\\s*\\)$`);
function ir(t, { loose: e = false } = {}) {
  var a, s, o;
  if (typeof t != "string") return null;
  if (t = t.trim(), t === "transparent") return { mode: "rgb", color: ["0", "0", "0"], alpha: "0" };
  if (t in bs.default) return { mode: "rgb", color: bs.default[t].map((l) => l.toString()) };
  let r = t.replace(Cv, (l, u, f, p, c) => ["#", u, u, f, f, p, p, c ? c + c : ""].join("")).match(Ev);
  if (r !== null) return { mode: "rgb", color: [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)].map((l) => l.toString()), alpha: r[4] ? (parseInt(r[4], 16) / 255).toString() : void 0 };
  let n = (a = t.match(_v)) != null ? a : t.match(Tv);
  if (n === null) return null;
  let i = [n[2], n[3], n[4]].filter(Boolean).map((l) => l.toString());
  return i.length === 2 && i[0].startsWith("var(") ? { mode: n[1], color: [i[0]], alpha: i[1] } : !e && i.length !== 3 || i.length < 3 && !i.some((l) => /^var\(.*?\)$/.test(l)) ? null : { mode: n[1], color: i, alpha: (o = (s = n[5]) == null ? void 0 : s.toString) == null ? void 0 : o.call(s) };
}
function xs({ mode: t, color: e, alpha: r }) {
  let n = r !== void 0;
  return t === "rgba" || t === "hsla" ? `${t}(${e.join(", ")}${n ? `, ${r}` : ""})` : `${t}(${e.join(" ")}${n ? ` / ${r}` : ""})`;
}
function we(t, e, r) {
  if (typeof t == "function") return t({ opacityValue: e });
  let n = ir(t, { loose: true });
  return n === null ? r : xs({ ...n, alpha: e });
}
function ee({ color: t, property: e, variable: r }) {
  let n = [].concat(e);
  if (typeof t == "function") return { [r]: "1", ...Object.fromEntries(n.map((a) => [a, t({ opacityVariable: r, opacityValue: `var(${r})` })])) };
  let i = ir(t);
  return i === null ? Object.fromEntries(n.map((a) => [a, t])) : i.alpha !== void 0 ? Object.fromEntries(n.map((a) => [a, t])) : { [r]: "1", ...Object.fromEntries(n.map((a) => [a, xs({ ...i, alpha: `var(${r})` })])) };
}
function te(t, e) {
  let r = [], n = [], i = 0;
  for (let a = 0; a < t.length; a++) {
    let s = t[a];
    r.length === 0 && s === e[0] && (e.length === 1 || t.slice(a, a + e.length) === e) && (n.push(t.slice(i, a)), i = a + e.length), s === "(" || s === "[" || s === "{" ? r.push(s) : (s === ")" && r[r.length - 1] === "(" || s === "]" && r[r.length - 1] === "[" || s === "}" && r[r.length - 1] === "{") && r.pop();
  }
  return n.push(t.slice(i)), n;
}
var Pv = /* @__PURE__ */ new Set(["inset", "inherit", "initial", "revert", "unset"]);
var Rv = /\ +(?![^(]*\))/g;
var Uu = /^-?(\d+|\.\d+)(.*?)$/g;
function rn(t) {
  return te(t, ",").map((r) => {
    let n = r.trim(), i = { raw: n }, a = n.split(Rv), s = /* @__PURE__ */ new Set();
    for (let o of a) Uu.lastIndex = 0, !s.has("KEYWORD") && Pv.has(o) ? (i.keyword = o, s.add("KEYWORD")) : Uu.test(o) ? s.has("X") ? s.has("Y") ? s.has("BLUR") ? s.has("SPREAD") || (i.spread = o, s.add("SPREAD")) : (i.blur = o, s.add("BLUR")) : (i.y = o, s.add("Y")) : (i.x = o, s.add("X")) : i.color ? (i.unknown || (i.unknown = []), i.unknown.push(o)) : i.color = o;
    return i.valid = i.x !== void 0 && i.y !== void 0, i;
  });
}
function ju(t) {
  return t.map((e) => e.valid ? [e.keyword, e.x, e.y, e.blur, e.spread, e.color].filter(Boolean).join(" ") : e.raw).join(", ");
}
var Iv = ["min", "max", "clamp", "calc"];
function Ss(t) {
  return Iv.some((e) => new RegExp(`^${e}\\(.*\\)`).test(t));
}
var Vu = "--tw-placeholder";
var Dv = new RegExp(Vu, "g");
function V(t, e = true) {
  return t.includes("url(") ? t.split(/(url\(.*?\))/g).filter(Boolean).map((r) => /^url\(.*?\)$/.test(r) ? r : V(r, false)).join("") : (t = t.replace(/([^\\])_+/g, (r, n) => n + " ".repeat(r.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), e && (t = t.trim()), t = t.replace(/(calc|min|max|clamp)\(.+\)/g, (r) => {
    let n = [];
    return r.replace(/var\((--.+?)[,)]/g, (i, a) => (n.push(a), i.replace(a, Vu))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(Dv, () => n.shift());
  }), t);
}
function ks(t) {
  return t.startsWith("url(");
}
function Os(t) {
  return !isNaN(Number(t)) || Ss(t);
}
function sr(t) {
  return t.endsWith("%") && Os(t.slice(0, -1)) || Ss(t);
}
var Mv = ["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "rlh", "vw", "vh", "vmin", "vmax", "vb", "vi", "svw", "svh", "lvw", "lvh", "dvw", "dvh", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"];
var Lv = `(?:${Mv.join("|")})`;
function ar(t) {
  return t === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${Lv}$`).test(t) || Ss(t);
}
var Nv = /* @__PURE__ */ new Set(["thin", "medium", "thick"]);
function zu(t) {
  return Nv.has(t);
}
function Wu(t) {
  let e = rn(V(t));
  for (let r of e) if (!r.valid) return false;
  return true;
}
function Bu(t) {
  let e = 0;
  return te(t, "_").every((n) => (n = V(n), n.startsWith("var(") ? true : ir(n, { loose: true }) !== null ? (e++, true) : false)) ? e > 0 : false;
}
function Gu(t) {
  let e = 0;
  return te(t, ",").every((n) => (n = V(n), n.startsWith("var(") ? true : ks(n) || qv(n) || ["element(", "image(", "cross-fade(", "image-set("].some((i) => n.startsWith(i)) ? (e++, true) : false)) ? e > 0 : false;
}
var Fv = /* @__PURE__ */ new Set(["linear-gradient", "radial-gradient", "repeating-linear-gradient", "repeating-radial-gradient", "conic-gradient"]);
function qv(t) {
  t = V(t);
  for (let e of Fv) if (t.startsWith(`${e}(`)) return true;
  return false;
}
var $v = /* @__PURE__ */ new Set(["center", "top", "right", "bottom", "left"]);
function Yu(t) {
  let e = 0;
  return te(t, "_").every((n) => (n = V(n), n.startsWith("var(") ? true : $v.has(n) || ar(n) || sr(n) ? (e++, true) : false)) ? e > 0 : false;
}
function Hu(t) {
  let e = 0;
  return te(t, ",").every((n) => (n = V(n), n.startsWith("var(") ? true : n.includes(" ") && !/(['"])([^"']+)\1/g.test(n) || /^\d/g.test(n) ? false : (e++, true))) ? e > 0 : false;
}
var Uv = /* @__PURE__ */ new Set(["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded", "math", "emoji", "fangsong"]);
function Qu(t) {
  return Uv.has(t);
}
var jv = /* @__PURE__ */ new Set(["xx-small", "x-small", "small", "medium", "large", "x-large", "x-large", "xxx-large"]);
function Ju(t) {
  return jv.has(t);
}
var Vv = /* @__PURE__ */ new Set(["larger", "smaller"]);
function Xu(t) {
  return Vv.has(t);
}
function De(t) {
  if (t = `${t}`, t === "0") return "0";
  if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(t)) return t.replace(/^[+-]?/, (r) => r === "-" ? "" : "-");
  let e = ["var", "calc", "min", "max", "clamp"];
  for (let r of e) if (t.includes(`${r}(`)) return `calc(${t} * -1)`;
}
function Ku(t) {
  let e = ["cover", "contain"];
  return te(t, ",").every((r) => {
    let n = te(r, "_").filter(Boolean);
    return n.length === 1 && e.includes(n[0]) ? true : n.length !== 1 && n.length !== 2 ? false : n.every((i) => ar(i) || sr(i) || i === "auto");
  });
}
zn();
var Zu = { optimizeUniversalDefaults: false, generalizedModifiers: true };
var nn = { future: ["hoverOnlyWhenSupported", "respectDefaultRingColorOpacity", "disableColorOpacityUtilitiesByDefault", "relativeContentPathsByDefault"], experimental: ["optimizeUniversalDefaults", "generalizedModifiers"] };
function G(t, e) {
  var r, n, i, a, s, o;
  return nn.future.includes(e) ? t.future === "all" || ((i = (n = (r = t == null ? void 0 : t.future) == null ? void 0 : r[e]) != null ? n : Zu[e]) != null ? i : false) : nn.experimental.includes(e) ? t.experimental === "all" || ((o = (s = (a = t == null ? void 0 : t.experimental) == null ? void 0 : a[e]) != null ? s : Zu[e]) != null ? o : false) : false;
}
function tf(t) {
  if (false) {
    let e = ef(t).map((r) => Vn.yellow(r)).join(", ");
    D.warn("experimental-flags-enabled", [`You have enabled experimental features: ${e}`, "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."]);
  }
}
function nf(t, e) {
  t.walkClasses((r) => {
    r.value = e(r.value), r.raws && r.raws.value && (r.raws.value = Be(r.raws.value));
  });
}
function sf(t, e) {
  if (!Me(t)) return;
  let r = t.slice(1, -1);
  if (!!e(r)) return V(r);
}
function zv(t, e = {}, r) {
  let n = e[t];
  if (n !== void 0) return De(n);
  if (Me(t)) {
    let i = sf(t, r);
    return i === void 0 ? void 0 : De(i);
  }
}
function sn(t, e = {}, { validate: r = () => true } = {}) {
  var i;
  let n = (i = e.values) == null ? void 0 : i[t];
  return n !== void 0 ? n : e.supportsNegativeValues && t.startsWith("-") ? zv(t.slice(1), e.values, r) : sf(t, r);
}
function Me(t) {
  return t.startsWith("[") && t.endsWith("]");
}
function af(t) {
  let e = t.lastIndexOf("/");
  return e === -1 || e === t.length - 1 ? [t, void 0] : Me(t) && !t.includes("]/[") ? [t, void 0] : [t.slice(0, e), t.slice(e + 1)];
}
function at(t) {
  if (typeof t == "string" && t.includes("<alpha-value>")) {
    let e = t;
    return ({ opacityValue: r = 1 }) => e.replace("<alpha-value>", r);
  }
  return t;
}
function Wv(t, e = {}, { tailwindConfig: r = {} } = {}) {
  var a, s, o, l, u, f;
  if (((a = e.values) == null ? void 0 : a[t]) !== void 0) return at((s = e.values) == null ? void 0 : s[t]);
  let [n, i] = af(t);
  if (i !== void 0) {
    let p = (l = (o = e.values) == null ? void 0 : o[n]) != null ? l : Me(n) ? n.slice(1, -1) : void 0;
    return p === void 0 ? void 0 : (p = at(p), Me(i) ? we(p, i.slice(1, -1)) : ((f = (u = r.theme) == null ? void 0 : u.opacity) == null ? void 0 : f[i]) === void 0 ? void 0 : we(p, r.theme.opacity[i]));
  }
  return sn(t, e, { validate: Bu });
}
function Bv(t, e = {}) {
  var r;
  return (r = e.values) == null ? void 0 : r[t];
}
function oe(t) {
  return (e, r) => sn(e, r, { validate: t });
}
var As = { any: sn, color: Wv, url: oe(ks), image: oe(Gu), length: oe(ar), percentage: oe(sr), position: oe(Yu), lookup: Bv, "generic-name": oe(Qu), "family-name": oe(Hu), number: oe(Os), "line-width": oe(zu), "absolute-size": oe(Ju), "relative-size": oe(Xu), shadow: oe(Wu), size: oe(Ku) };
var rf = Object.keys(As);
function Gv(t, e) {
  let r = t.indexOf(e);
  return r === -1 ? [void 0, t] : [t.slice(0, r), t.slice(r + 1)];
}
function Es(t, e, r, n) {
  if (r.values && e in r.values) for (let { type: a } of t != null ? t : []) {
    let s = As[a](e, r, { tailwindConfig: n });
    if (s !== void 0) return [s, a, null];
  }
  if (Me(e)) {
    let a = e.slice(1, -1), [s, o] = Gv(a, ":");
    if (!/^[\w-_]+$/g.test(s)) o = a;
    else if (s !== void 0 && !rf.includes(s)) return [];
    if (o.length > 0 && rf.includes(s)) return [sn(`[${o}]`, r), s, null];
  }
  let i = Cs(t, e, r, n);
  for (let a of i) return a;
  return [];
}
function* Cs(t, e, r, n) {
  var l, u;
  let i = G(n, "generalizedModifiers"), [a, s] = af(e);
  if (i && r.modifiers != null && (r.modifiers === "any" || typeof r.modifiers == "object" && (s && Me(s) || s in r.modifiers)) || (a = e, s = void 0), s !== void 0 && a === "" && (a = "DEFAULT"), s !== void 0 && typeof r.modifiers == "object") {
    let f = (u = (l = r.modifiers) == null ? void 0 : l[s]) != null ? u : null;
    f !== null ? s = f : Me(s) && (s = s.slice(1, -1));
  }
  for (let { type: f } of t != null ? t : []) {
    let p = As[f](a, r, { tailwindConfig: n });
    p !== void 0 && (yield [p, f, s != null ? s : null]);
  }
}
var be = Y(Ee());
var uf = Y(Ur());
var of = Y(Ee());
function re(t) {
  var r, n;
  let e = of.default.className();
  return e.value = t, Be((n = (r = e == null ? void 0 : e.raws) == null ? void 0 : r.value) != null ? n : e.value);
}
var _s = ":merge";
function ot(t, { context: e, candidate: r }) {
  var s;
  let n = (s = e == null ? void 0 : e.tailwindConfig.prefix) != null ? s : "", i = t.map((o) => {
    let l = (0, be.default)().astSync(o.format);
    return { ...o, ast: o.isArbitraryVariant ? l : st(n, l) };
  }), a = be.default.root({ nodes: [be.default.selector({ nodes: [be.default.className({ value: re(r) })] })] });
  for (let { ast: o } of i) [a, o] = Hv(a, o), o.walkNesting((l) => l.replaceWith(...a.nodes[0].nodes)), a = o;
  return a;
}
function lf(t) {
  let e = [];
  for (; t.prev() && t.prev().type !== "combinator"; ) t = t.prev();
  for (; t && t.type !== "combinator"; ) e.push(t), t = t.next();
  return e;
}
function Yv(t) {
  return t.sort((e, r) => e.type === "tag" && r.type === "class" ? -1 : e.type === "class" && r.type === "tag" ? 1 : e.type === "class" && r.type === "pseudo" && r.value.startsWith("::") ? -1 : e.type === "pseudo" && e.value.startsWith("::") && r.type === "class" ? 1 : t.index(e) - t.index(r)), t;
}
function Ps(t, e) {
  let r = false;
  t.walk((n) => {
    if (n.type === "class" && n.value === e) return r = true, false;
  }), r || t.remove();
}
function an(t, e, { context: r, candidate: n, base: i }) {
  var f, p;
  let a = (p = (f = r == null ? void 0 : r.tailwindConfig) == null ? void 0 : f.separator) != null ? p : ":";
  i = i != null ? i : n.split(new RegExp(`\\${a}(?![^[]*\\])`)).pop();
  let s = (0, be.default)().astSync(t);
  s.walkClasses((c) => {
    c.raws && c.value.includes(i) && (c.raws.value = re((0, uf.default)(c.raws.value)));
  }), s.each((c) => Ps(c, i));
  let o = Array.isArray(e) ? ot(e, { context: r, candidate: n }) : e;
  if (o === null) return s.toString();
  let l = be.default.comment({ value: "/*__simple__*/" }), u = be.default.comment({ value: "/*__simple__*/" });
  return s.walkClasses((c) => {
    if (c.value !== i) return;
    let d = c.parent, h = o.nodes[0].nodes;
    if (d.nodes.length === 1) {
      c.replaceWith(...h);
      return;
    }
    let y = lf(c);
    d.insertBefore(y[0], l), d.insertAfter(y[y.length - 1], u);
    for (let g of h) d.insertBefore(y[0], g.clone());
    c.remove(), y = lf(l);
    let m = d.index(l);
    d.nodes.splice(m, y.length, ...Yv(be.default.selector({ nodes: y })).nodes), l.remove(), u.remove();
  }), s.walkPseudos((c) => {
    c.value === _s && c.replaceWith(c.nodes);
  }), s.each((c) => {
    let d = ff(c);
    d.length > 0 && c.nodes.push(d.sort(Xv));
  }), s.toString();
}
function Hv(t, e) {
  let r = [];
  return t.walkPseudos((n) => {
    n.value === _s && r.push({ pseudo: n, value: n.nodes[0].toString() });
  }), e.walkPseudos((n) => {
    if (n.value !== _s) return;
    let i = n.nodes[0].toString(), a = r.find((u) => u.value === i);
    if (!a) return;
    let s = [], o = n.next();
    for (; o && o.type !== "combinator"; ) s.push(o), o = o.next();
    let l = o;
    a.pseudo.parent.insertAfter(a.pseudo, be.default.selector({ nodes: s.map((u) => u.clone()) })), n.remove(), s.forEach((u) => u.remove()), l && l.type === "combinator" && l.remove();
  }), [t, e];
}
var Qv = [":before", ":after", ":first-line", ":first-letter"];
var Jv = ["::file-selector-button", "::-webkit-scrollbar", "::-webkit-scrollbar-button", "::-webkit-scrollbar-thumb", "::-webkit-scrollbar-track", "::-webkit-scrollbar-track-piece", "::-webkit-scrollbar-corner", "::-webkit-resizer"];
function ff(t) {
  let e = [];
  for (let r of t.nodes) Ts(r) && (e.push(r), t.removeChild(r)), r != null && r.nodes && e.push(...ff(r));
  return e;
}
function Xv(t, e) {
  return t.type !== "pseudo" && e.type !== "pseudo" || t.type === "combinator" ^ e.type === "combinator" ? 0 : t.type === "pseudo" ^ e.type === "pseudo" ? (t.type === "pseudo") - (e.type === "pseudo") : Ts(t) - Ts(e);
}
function Ts(t) {
  return t.type !== "pseudo" || Jv.includes(t.value) ? false : t.value.startsWith("::") || Qv.includes(t.value);
}
function Rs(t) {
  return Be(`.${re(t)}`);
}
function on(t, e) {
  return Rs(or(t, e));
}
function or(t, e) {
  return e === "DEFAULT" ? t : e === "-" || e === "-DEFAULT" ? `-${t}` : e.startsWith("-") ? `-${t}${e}` : e.startsWith("/") ? `${t}${e}` : `${t}-${e}`;
}
var Sf = Y(Ms());
var $s = Y(Ee());
function Ce(t) {
  return ["fontSize", "outline"].includes(t) ? (e) => (typeof e == "function" && (e = e({})), Array.isArray(e) && (e = e[0]), e) : t === "fontFamily" ? (e) => {
    typeof e == "function" && (e = e({}));
    let r = Array.isArray(e) && X(e[1]) ? e[0] : e;
    return Array.isArray(r) ? r.join(", ") : r;
  } : ["boxShadow", "transitionProperty", "transitionDuration", "transitionDelay", "transitionTimingFunction", "backgroundImage", "backgroundSize", "backgroundColor", "cursor", "animation"].includes(t) ? (e) => (typeof e == "function" && (e = e({})), Array.isArray(e) && (e = e.join(", ")), e) : ["gridTemplateColumns", "gridTemplateRows", "objectPosition"].includes(t) ? (e) => (typeof e == "function" && (e = e({})), typeof e == "string" && (e = I.list.comma(e).join(" ")), e) : (e, r = {}) => (typeof e == "function" && (e = e(r)), e);
}
yr();
kt();
function T(t, e = [[t, [t]]], { filterDefault: r = false, ...n } = {}) {
  let i = Ce(t);
  return function({ matchUtilities: a, theme: s }) {
    var o;
    for (let l of e) {
      let u = Array.isArray(l[0]) ? l : [l];
      a(u.reduce((f, [p, c]) => Object.assign(f, { [p]: (d) => c.reduce((h, y) => Array.isArray(y) ? Object.assign(h, { [y[0]]: y[1] }) : Object.assign(h, { [y]: i(d) }), {}) }), {}), { ...n, values: r ? Object.fromEntries(Object.entries((o = s(t)) != null ? o : {}).filter(([f]) => f !== "DEFAULT")) : s(t) });
    }
  };
}
function Le(t) {
  return t = Array.isArray(t) ? t : [t], t.map((e) => {
    let r = e.values.map((n) => n.raw !== void 0 ? n.raw : [n.min && `(min-width: ${n.min})`, n.max && `(max-width: ${n.max})`].filter(Boolean).join(" and "));
    return e.not ? `not all and ${r}` : r;
  }).join(", ");
}
var Kv = /* @__PURE__ */ new Set(["normal", "reverse", "alternate", "alternate-reverse"]);
var Zv = /* @__PURE__ */ new Set(["running", "paused"]);
var ew = /* @__PURE__ */ new Set(["none", "forwards", "backwards", "both"]);
var tw = /* @__PURE__ */ new Set(["infinite"]);
var rw = /* @__PURE__ */ new Set(["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"]);
var nw = ["cubic-bezier", "steps"];
var iw = /\,(?![^(]*\))/g;
var sw = /\ +(?![^(]*\))/g;
var cf = /^(-?[\d.]+m?s)$/;
var aw = /^(\d+)$/;
function Ls(t) {
  return t.split(iw).map((r) => {
    let n = r.trim(), i = { value: n }, a = n.split(sw), s = /* @__PURE__ */ new Set();
    for (let o of a) !s.has("DIRECTIONS") && Kv.has(o) ? (i.direction = o, s.add("DIRECTIONS")) : !s.has("PLAY_STATES") && Zv.has(o) ? (i.playState = o, s.add("PLAY_STATES")) : !s.has("FILL_MODES") && ew.has(o) ? (i.fillMode = o, s.add("FILL_MODES")) : !s.has("ITERATION_COUNTS") && (tw.has(o) || aw.test(o)) ? (i.iterationCount = o, s.add("ITERATION_COUNTS")) : !s.has("TIMING_FUNCTION") && rw.has(o) || !s.has("TIMING_FUNCTION") && nw.some((l) => o.startsWith(`${l}(`)) ? (i.timingFunction = o, s.add("TIMING_FUNCTION")) : !s.has("DURATION") && cf.test(o) ? (i.duration = o, s.add("DURATION")) : !s.has("DELAY") && cf.test(o) ? (i.delay = o, s.add("DELAY")) : s.has("NAME") ? (i.unknown || (i.unknown = []), i.unknown.push(o)) : (i.name = o, s.add("NAME"));
    return i;
  });
}
var pf = (t) => Object.assign({}, ...Object.entries(t != null ? t : {}).flatMap(([e, r]) => typeof r == "object" ? Object.entries(pf(r)).map(([n, i]) => ({ [e + (n === "DEFAULT" ? "" : `-${n}`)]: i })) : [{ [`${e}`]: r }]));
var H = pf;
function F(t) {
  return typeof t == "function" ? t({}) : t;
}
function Ne(t, e = true) {
  return Array.isArray(t) ? t.map((r) => {
    if (e && Array.isArray(r)) throw new Error("The tuple syntax is not supported for `screens`.");
    if (typeof r == "string") return { name: r.toString(), not: false, values: [{ min: r, max: void 0 }] };
    let [n, i] = r;
    return n = n.toString(), typeof i == "string" ? { name: n, not: false, values: [{ min: i, max: void 0 }] } : Array.isArray(i) ? { name: n, not: false, values: i.map((a) => df(a)) } : { name: n, not: false, values: [df(i)] };
  }) : Ne(Object.entries(t != null ? t : {}), false);
}
function ln(t) {
  return t.values.length !== 1 ? { result: false, reason: "multiple-values" } : t.values[0].raw !== void 0 ? { result: false, reason: "raw-values" } : t.values[0].min !== void 0 && t.values[0].max !== void 0 ? { result: false, reason: "min-and-max" } : { result: true, reason: null };
}
function hf(t, e, r) {
  let n = un(e, t), i = un(r, t), a = ln(n), s = ln(i);
  if (a.reason === "multiple-values" || s.reason === "multiple-values") throw new Error("Attempted to sort a screen with multiple values. This should never happen. Please open a bug report.");
  if (a.reason === "raw-values" || s.reason === "raw-values") throw new Error("Attempted to sort a screen with raw values. This should never happen. Please open a bug report.");
  if (a.reason === "min-and-max" || s.reason === "min-and-max") throw new Error("Attempted to sort a screen with both min and max values. This should never happen. Please open a bug report.");
  let { min: o, max: l } = n.values[0], { min: u, max: f } = i.values[0];
  e.not && ([o, l] = [l, o]), r.not && ([u, f] = [f, u]), o = o === void 0 ? o : parseFloat(o), l = l === void 0 ? l : parseFloat(l), u = u === void 0 ? u : parseFloat(u), f = f === void 0 ? f : parseFloat(f);
  let [p, c] = t === "min" ? [o, u] : [f, l];
  return p - c;
}
function un(t, e) {
  return typeof t == "object" ? t : { name: "arbitrary-screen", values: [{ [e]: t }] };
}
function df({ "min-width": t, min: e = t, max: r, raw: n } = {}) {
  return { min: e, max: r, raw: n };
}
function fn(t, e) {
  t.walkDecls((r) => {
    if (e.includes(r.prop)) {
      r.remove();
      return;
    }
    for (let n of e) r.value.includes(`/ var(${n})`) && (r.value = r.value.replace(`/ var(${n})`, ""));
  });
}
var ne = { pseudoElementVariants: ({ addVariant: t }) => {
  t("first-letter", "&::first-letter"), t("first-line", "&::first-line"), t("marker", [({ container: e }) => (fn(e, ["--tw-text-opacity"]), "& *::marker"), ({ container: e }) => (fn(e, ["--tw-text-opacity"]), "&::marker")]), t("selection", ["& *::selection", "&::selection"]), t("file", "&::file-selector-button"), t("placeholder", "&::placeholder"), t("backdrop", "&::backdrop"), t("before", ({ container: e }) => (e.walkRules((r) => {
    let n = false;
    r.walkDecls("content", () => {
      n = true;
    }), n || r.prepend(I.decl({ prop: "content", value: "var(--tw-content)" }));
  }), "&::before")), t("after", ({ container: e }) => (e.walkRules((r) => {
    let n = false;
    r.walkDecls("content", () => {
      n = true;
    }), n || r.prepend(I.decl({ prop: "content", value: "var(--tw-content)" }));
  }), "&::after"));
}, pseudoClassVariants: ({ addVariant: t, matchVariant: e, config: r }) => {
  let n = [["first", "&:first-child"], ["last", "&:last-child"], ["only", "&:only-child"], ["odd", "&:nth-child(odd)"], ["even", "&:nth-child(even)"], "first-of-type", "last-of-type", "only-of-type", ["visited", ({ container: a }) => (fn(a, ["--tw-text-opacity", "--tw-border-opacity", "--tw-bg-opacity"]), "&:visited")], "target", ["open", "&[open]"], "default", "checked", "indeterminate", "placeholder-shown", "autofill", "optional", "required", "valid", "invalid", "in-range", "out-of-range", "read-only", "empty", "focus-within", ["hover", G(r(), "hoverOnlyWhenSupported") ? "@media (hover: hover) and (pointer: fine) { &:hover }" : "&:hover"], "focus", "focus-visible", "active", "enabled", "disabled"].map((a) => Array.isArray(a) ? a : [a, `&:${a}`]);
  for (let [a, s] of n) t(a, (o) => typeof s == "function" ? s(o) : s);
  let i = { group: (a, { modifier: s }) => s ? [`:merge(.group\\/${re(s)})`, " &"] : [":merge(.group)", " &"], peer: (a, { modifier: s }) => s ? [`:merge(.peer\\/${re(s)})`, " ~ &"] : [":merge(.peer)", " ~ &"] };
  for (let [a, s] of Object.entries(i)) e(a, (o = "", l) => {
    let u = V(typeof o == "function" ? o(l) : o);
    u.includes("&") || (u = "&" + u);
    let [f, p] = s("", l), c = null, d = null, h = 0;
    for (let y = 0; y < u.length; ++y) {
      let m = u[y];
      m === "&" ? c = y : m === "'" || m === '"' ? h += 1 : c !== null && m === " " && !h && (d = y);
    }
    return c !== null && d === null && (d = u.length), u.slice(0, c) + f + u.slice(c + 1, d) + p + u.slice(d);
  }, { values: Object.fromEntries(n) });
}, directionVariants: ({ addVariant: t }) => {
  t("ltr", () => (D.warn("rtl-experimental", ["The RTL features in Tailwind CSS are currently in preview.", "Preview features are not covered by semver, and may be improved in breaking ways at any time."]), '[dir="ltr"] &')), t("rtl", () => (D.warn("rtl-experimental", ["The RTL features in Tailwind CSS are currently in preview.", "Preview features are not covered by semver, and may be improved in breaking ways at any time."]), '[dir="rtl"] &'));
}, reducedMotionVariants: ({ addVariant: t }) => {
  t("motion-safe", "@media (prefers-reduced-motion: no-preference)"), t("motion-reduce", "@media (prefers-reduced-motion: reduce)");
}, darkVariants: ({ config: t, addVariant: e }) => {
  let [r, n = ".dark"] = [].concat(t("darkMode", "media"));
  r === false && (r = "media", D.warn("darkmode-false", ["The `darkMode` option in your Tailwind CSS configuration is set to `false`, which now behaves the same as `media`.", "Change `darkMode` to `media` or remove it entirely.", "https://tailwindcss.com/docs/upgrade-guide#remove-dark-mode-configuration"])), r === "class" ? e("dark", `${n} &`) : r === "media" && e("dark", "@media (prefers-color-scheme: dark)");
}, printVariant: ({ addVariant: t }) => {
  t("print", "@media print");
}, screenVariants: ({ theme: t, addVariant: e, matchVariant: r }) => {
  var g;
  let n = (g = t("screens")) != null ? g : {}, i = Object.values(n).every((v) => typeof v == "string"), a = Ne(t("screens")), s = /* @__PURE__ */ new Set([]);
  function o(v) {
    var b, w;
    return (w = (b = v.match(/(\D+)$/)) == null ? void 0 : b[1]) != null ? w : "(none)";
  }
  function l(v) {
    v !== void 0 && s.add(o(v));
  }
  function u(v) {
    return l(v), s.size === 1;
  }
  for (let v of a) for (let b of v.values) l(b.min), l(b.max);
  let f = s.size <= 1;
  function p(v) {
    return Object.fromEntries(a.filter((b) => ln(b).result).map((b) => {
      let { min: w, max: O } = b.values[0];
      if (v === "min" && w !== void 0) return b;
      if (v === "min" && O !== void 0) return { ...b, not: !b.not };
      if (v === "max" && O !== void 0) return b;
      if (v === "max" && w !== void 0) return { ...b, not: !b.not };
    }).map((b) => [b.name, b]));
  }
  function c(v) {
    return (b, w) => hf(v, b.value, w.value);
  }
  let d = c("max"), h = c("min");
  function y(v) {
    return (b) => {
      if (i) if (f) {
        if (typeof b == "string" && !u(b)) return D.warn("minmax-have-mixed-units", ["The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."]), [];
      } else return D.warn("mixed-screen-units", ["The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."]), [];
      else return D.warn("complex-screen-config", ["The `min-*` and `max-*` variants are not supported with a `screens` configuration containing objects."]), [];
      return [`@media ${Le(un(b, v))}`];
    };
  }
  r("max", y("max"), { sort: d, values: i ? p("max") : {} });
  let m = "min-screens";
  for (let v of a) e(v.name, `@media ${Le(v)}`, { id: m, sort: i && f ? h : void 0, value: v });
  r("min", y("min"), { id: m, sort: h });
}, supportsVariants: ({ matchVariant: t, theme: e }) => {
  var r;
  t("supports", (n = "") => {
    let i = V(n), a = /^\w*\s*\(/.test(i);
    return i = a ? i.replace(/\b(and|or|not)\b/g, " $1 ") : i, a ? `@supports ${i}` : (i.includes(":") || (i = `${i}: var(--tw)`), i.startsWith("(") && i.endsWith(")") || (i = `(${i})`), `@supports ${i}`);
  }, { values: (r = e("supports")) != null ? r : {} });
}, ariaVariants: ({ matchVariant: t, theme: e }) => {
  var r, n, i;
  t("aria", (a) => `&[aria-${V(a)}]`, { values: (r = e("aria")) != null ? r : {} }), t("group-aria", (a, { modifier: s }) => s ? `:merge(.group\\/${s})[aria-${V(a)}] &` : `:merge(.group)[aria-${V(a)}] &`, { values: (n = e("aria")) != null ? n : {} }), t("peer-aria", (a, { modifier: s }) => s ? `:merge(.peer\\/${s})[aria-${V(a)}] ~ &` : `:merge(.peer)[aria-${V(a)}] ~ &`, { values: (i = e("aria")) != null ? i : {} });
}, dataVariants: ({ matchVariant: t, theme: e }) => {
  var r, n, i;
  t("data", (a) => `&[data-${V(a)}]`, { values: (r = e("data")) != null ? r : {} }), t("group-data", (a, { modifier: s }) => s ? `:merge(.group\\/${s})[data-${V(a)}] &` : `:merge(.group)[data-${V(a)}] &`, { values: (n = e("data")) != null ? n : {} }), t("peer-data", (a, { modifier: s }) => s ? `:merge(.peer\\/${s})[data-${V(a)}] ~ &` : `:merge(.peer)[data-${V(a)}] ~ &`, { values: (i = e("data")) != null ? i : {} });
}, orientationVariants: ({ addVariant: t }) => {
  t("portrait", "@media (orientation: portrait)"), t("landscape", "@media (orientation: landscape)");
}, prefersContrastVariants: ({ addVariant: t }) => {
  t("contrast-more", "@media (prefers-contrast: more)"), t("contrast-less", "@media (prefers-contrast: less)");
} };
var he = ["translate(var(--tw-translate-x), var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
var xe = ["var(--tw-blur)", "var(--tw-brightness)", "var(--tw-contrast)", "var(--tw-grayscale)", "var(--tw-hue-rotate)", "var(--tw-invert)", "var(--tw-saturate)", "var(--tw-sepia)", "var(--tw-drop-shadow)"].join(" ");
var Se = ["var(--tw-backdrop-blur)", "var(--tw-backdrop-brightness)", "var(--tw-backdrop-contrast)", "var(--tw-backdrop-grayscale)", "var(--tw-backdrop-hue-rotate)", "var(--tw-backdrop-invert)", "var(--tw-backdrop-opacity)", "var(--tw-backdrop-saturate)", "var(--tw-backdrop-sepia)"].join(" ");
var mf = { preflight: ({ addBase: t }) => {
  let e = I.parse(ht.readFileSync(Qn("/", "./css/preflight.css"), "utf8"));
  t([I.comment({ text: `! tailwindcss v${La} | MIT License | https://tailwindcss.com` }), ...e.nodes]);
}, container: /* @__PURE__ */ (() => {
  function t(r = []) {
    return r.flatMap((n) => n.values.map((i) => i.min)).filter((n) => n !== void 0);
  }
  function e(r, n, i) {
    if (typeof i > "u") return [];
    if (!(typeof i == "object" && i !== null)) return [{ screen: "DEFAULT", minWidth: 0, padding: i }];
    let a = [];
    i.DEFAULT && a.push({ screen: "DEFAULT", minWidth: 0, padding: i.DEFAULT });
    for (let s of r) for (let o of n) for (let { min: l } of o.values) l === s && a.push({ minWidth: s, padding: i[o.name] });
    return a;
  }
  return function({ addComponents: r, theme: n }) {
    let i = Ne(n("container.screens", n("screens"))), a = t(i), s = e(a, i, n("container.padding")), o = (u) => {
      let f = s.find((p) => p.minWidth === u);
      return f ? { paddingRight: f.padding, paddingLeft: f.padding } : {};
    }, l = Array.from(new Set(a.slice().sort((u, f) => parseInt(u) - parseInt(f)))).map((u) => ({ [`@media (min-width: ${u})`]: { ".container": { "max-width": u, ...o(u) } } }));
    r([{ ".container": Object.assign({ width: "100%" }, n("container.center", false) ? { marginRight: "auto", marginLeft: "auto" } : {}, o(0)) }, ...l]);
  };
})(), accessibility: ({ addUtilities: t }) => {
  t({ ".sr-only": { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" }, ".not-sr-only": { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", clip: "auto", whiteSpace: "normal" } });
}, pointerEvents: ({ addUtilities: t }) => {
  t({ ".pointer-events-none": { "pointer-events": "none" }, ".pointer-events-auto": { "pointer-events": "auto" } });
}, visibility: ({ addUtilities: t }) => {
  t({ ".visible": { visibility: "visible" }, ".invisible": { visibility: "hidden" }, ".collapse": { visibility: "collapse" } });
}, position: ({ addUtilities: t }) => {
  t({ ".static": { position: "static" }, ".fixed": { position: "fixed" }, ".absolute": { position: "absolute" }, ".relative": { position: "relative" }, ".sticky": { position: "sticky" } });
}, inset: T("inset", [["inset", ["top", "right", "bottom", "left"]], [["inset-x", ["left", "right"]], ["inset-y", ["top", "bottom"]]], [["top", ["top"]], ["right", ["right"]], ["bottom", ["bottom"]], ["left", ["left"]]]], { supportsNegativeValues: true }), isolation: ({ addUtilities: t }) => {
  t({ ".isolate": { isolation: "isolate" }, ".isolation-auto": { isolation: "auto" } });
}, zIndex: T("zIndex", [["z", ["zIndex"]]], { supportsNegativeValues: true }), order: T("order", void 0, { supportsNegativeValues: true }), gridColumn: T("gridColumn", [["col", ["gridColumn"]]]), gridColumnStart: T("gridColumnStart", [["col-start", ["gridColumnStart"]]]), gridColumnEnd: T("gridColumnEnd", [["col-end", ["gridColumnEnd"]]]), gridRow: T("gridRow", [["row", ["gridRow"]]]), gridRowStart: T("gridRowStart", [["row-start", ["gridRowStart"]]]), gridRowEnd: T("gridRowEnd", [["row-end", ["gridRowEnd"]]]), float: ({ addUtilities: t }) => {
  t({ ".float-right": { float: "right" }, ".float-left": { float: "left" }, ".float-none": { float: "none" } });
}, clear: ({ addUtilities: t }) => {
  t({ ".clear-left": { clear: "left" }, ".clear-right": { clear: "right" }, ".clear-both": { clear: "both" }, ".clear-none": { clear: "none" } });
}, margin: T("margin", [["m", ["margin"]], [["mx", ["margin-left", "margin-right"]], ["my", ["margin-top", "margin-bottom"]]], [["mt", ["margin-top"]], ["mr", ["margin-right"]], ["mb", ["margin-bottom"]], ["ml", ["margin-left"]]]], { supportsNegativeValues: true }), boxSizing: ({ addUtilities: t }) => {
  t({ ".box-border": { "box-sizing": "border-box" }, ".box-content": { "box-sizing": "content-box" } });
}, display: ({ addUtilities: t }) => {
  t({ ".block": { display: "block" }, ".inline-block": { display: "inline-block" }, ".inline": { display: "inline" }, ".flex": { display: "flex" }, ".inline-flex": { display: "inline-flex" }, ".table": { display: "table" }, ".inline-table": { display: "inline-table" }, ".table-caption": { display: "table-caption" }, ".table-cell": { display: "table-cell" }, ".table-column": { display: "table-column" }, ".table-column-group": { display: "table-column-group" }, ".table-footer-group": { display: "table-footer-group" }, ".table-header-group": { display: "table-header-group" }, ".table-row-group": { display: "table-row-group" }, ".table-row": { display: "table-row" }, ".flow-root": { display: "flow-root" }, ".grid": { display: "grid" }, ".inline-grid": { display: "inline-grid" }, ".contents": { display: "contents" }, ".list-item": { display: "list-item" }, ".hidden": { display: "none" } });
}, aspectRatio: T("aspectRatio", [["aspect", ["aspect-ratio"]]]), height: T("height", [["h", ["height"]]]), maxHeight: T("maxHeight", [["max-h", ["maxHeight"]]]), minHeight: T("minHeight", [["min-h", ["minHeight"]]]), width: T("width", [["w", ["width"]]]), minWidth: T("minWidth", [["min-w", ["minWidth"]]]), maxWidth: T("maxWidth", [["max-w", ["maxWidth"]]]), flex: T("flex"), flexShrink: T("flexShrink", [["flex-shrink", ["flex-shrink"]], ["shrink", ["flex-shrink"]]]), flexGrow: T("flexGrow", [["flex-grow", ["flex-grow"]], ["grow", ["flex-grow"]]]), flexBasis: T("flexBasis", [["basis", ["flex-basis"]]]), tableLayout: ({ addUtilities: t }) => {
  t({ ".table-auto": { "table-layout": "auto" }, ".table-fixed": { "table-layout": "fixed" } });
}, borderCollapse: ({ addUtilities: t }) => {
  t({ ".border-collapse": { "border-collapse": "collapse" }, ".border-separate": { "border-collapse": "separate" } });
}, borderSpacing: ({ addDefaults: t, matchUtilities: e, theme: r }) => {
  t("border-spacing", { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 }), e({ "border-spacing": (n) => ({ "--tw-border-spacing-x": n, "--tw-border-spacing-y": n, "@defaults border-spacing": {}, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" }), "border-spacing-x": (n) => ({ "--tw-border-spacing-x": n, "@defaults border-spacing": {}, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" }), "border-spacing-y": (n) => ({ "--tw-border-spacing-y": n, "@defaults border-spacing": {}, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" }) }, { values: r("borderSpacing") });
}, transformOrigin: T("transformOrigin", [["origin", ["transformOrigin"]]]), translate: T("translate", [[["translate-x", [["@defaults transform", {}], "--tw-translate-x", ["transform", he]]], ["translate-y", [["@defaults transform", {}], "--tw-translate-y", ["transform", he]]]]], { supportsNegativeValues: true }), rotate: T("rotate", [["rotate", [["@defaults transform", {}], "--tw-rotate", ["transform", he]]]], { supportsNegativeValues: true }), skew: T("skew", [[["skew-x", [["@defaults transform", {}], "--tw-skew-x", ["transform", he]]], ["skew-y", [["@defaults transform", {}], "--tw-skew-y", ["transform", he]]]]], { supportsNegativeValues: true }), scale: T("scale", [["scale", [["@defaults transform", {}], "--tw-scale-x", "--tw-scale-y", ["transform", he]]], [["scale-x", [["@defaults transform", {}], "--tw-scale-x", ["transform", he]]], ["scale-y", [["@defaults transform", {}], "--tw-scale-y", ["transform", he]]]]], { supportsNegativeValues: true }), transform: ({ addDefaults: t, addUtilities: e }) => {
  t("transform", { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1" }), e({ ".transform": { "@defaults transform": {}, transform: he }, ".transform-cpu": { transform: he }, ".transform-gpu": { transform: he.replace("translate(var(--tw-translate-x), var(--tw-translate-y))", "translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)") }, ".transform-none": { transform: "none" } });
}, animation: ({ matchUtilities: t, theme: e, config: r }) => {
  var a;
  let n = (s) => `${r("prefix")}${re(s)}`, i = Object.fromEntries(Object.entries((a = e("keyframes")) != null ? a : {}).map(([s, o]) => [s, { [`@keyframes ${n(s)}`]: o }]));
  t({ animate: (s) => {
    let o = Ls(s);
    return [...o.flatMap((l) => i[l.name]), { animation: o.map(({ name: l, value: u }) => l === void 0 || i[l] === void 0 ? u : u.replace(l, n(l))).join(", ") }];
  } }, { values: e("animation") });
}, cursor: T("cursor"), touchAction: ({ addDefaults: t, addUtilities: e }) => {
  t("touch-action", { "--tw-pan-x": " ", "--tw-pan-y": " ", "--tw-pinch-zoom": " " });
  let r = "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)";
  e({ ".touch-auto": { "touch-action": "auto" }, ".touch-none": { "touch-action": "none" }, ".touch-pan-x": { "@defaults touch-action": {}, "--tw-pan-x": "pan-x", "touch-action": r }, ".touch-pan-left": { "@defaults touch-action": {}, "--tw-pan-x": "pan-left", "touch-action": r }, ".touch-pan-right": { "@defaults touch-action": {}, "--tw-pan-x": "pan-right", "touch-action": r }, ".touch-pan-y": { "@defaults touch-action": {}, "--tw-pan-y": "pan-y", "touch-action": r }, ".touch-pan-up": { "@defaults touch-action": {}, "--tw-pan-y": "pan-up", "touch-action": r }, ".touch-pan-down": { "@defaults touch-action": {}, "--tw-pan-y": "pan-down", "touch-action": r }, ".touch-pinch-zoom": { "@defaults touch-action": {}, "--tw-pinch-zoom": "pinch-zoom", "touch-action": r }, ".touch-manipulation": { "touch-action": "manipulation" } });
}, userSelect: ({ addUtilities: t }) => {
  t({ ".select-none": { "user-select": "none" }, ".select-text": { "user-select": "text" }, ".select-all": { "user-select": "all" }, ".select-auto": { "user-select": "auto" } });
}, resize: ({ addUtilities: t }) => {
  t({ ".resize-none": { resize: "none" }, ".resize-y": { resize: "vertical" }, ".resize-x": { resize: "horizontal" }, ".resize": { resize: "both" } });
}, scrollSnapType: ({ addDefaults: t, addUtilities: e }) => {
  t("scroll-snap-type", { "--tw-scroll-snap-strictness": "proximity" }), e({ ".snap-none": { "scroll-snap-type": "none" }, ".snap-x": { "@defaults scroll-snap-type": {}, "scroll-snap-type": "x var(--tw-scroll-snap-strictness)" }, ".snap-y": { "@defaults scroll-snap-type": {}, "scroll-snap-type": "y var(--tw-scroll-snap-strictness)" }, ".snap-both": { "@defaults scroll-snap-type": {}, "scroll-snap-type": "both var(--tw-scroll-snap-strictness)" }, ".snap-mandatory": { "--tw-scroll-snap-strictness": "mandatory" }, ".snap-proximity": { "--tw-scroll-snap-strictness": "proximity" } });
}, scrollSnapAlign: ({ addUtilities: t }) => {
  t({ ".snap-start": { "scroll-snap-align": "start" }, ".snap-end": { "scroll-snap-align": "end" }, ".snap-center": { "scroll-snap-align": "center" }, ".snap-align-none": { "scroll-snap-align": "none" } });
}, scrollSnapStop: ({ addUtilities: t }) => {
  t({ ".snap-normal": { "scroll-snap-stop": "normal" }, ".snap-always": { "scroll-snap-stop": "always" } });
}, scrollMargin: T("scrollMargin", [["scroll-m", ["scroll-margin"]], [["scroll-mx", ["scroll-margin-left", "scroll-margin-right"]], ["scroll-my", ["scroll-margin-top", "scroll-margin-bottom"]]], [["scroll-mt", ["scroll-margin-top"]], ["scroll-mr", ["scroll-margin-right"]], ["scroll-mb", ["scroll-margin-bottom"]], ["scroll-ml", ["scroll-margin-left"]]]], { supportsNegativeValues: true }), scrollPadding: T("scrollPadding", [["scroll-p", ["scroll-padding"]], [["scroll-px", ["scroll-padding-left", "scroll-padding-right"]], ["scroll-py", ["scroll-padding-top", "scroll-padding-bottom"]]], [["scroll-pt", ["scroll-padding-top"]], ["scroll-pr", ["scroll-padding-right"]], ["scroll-pb", ["scroll-padding-bottom"]], ["scroll-pl", ["scroll-padding-left"]]]]), listStylePosition: ({ addUtilities: t }) => {
  t({ ".list-inside": { "list-style-position": "inside" }, ".list-outside": { "list-style-position": "outside" } });
}, listStyleType: T("listStyleType", [["list", ["listStyleType"]]]), appearance: ({ addUtilities: t }) => {
  t({ ".appearance-none": { appearance: "none" } });
}, columns: T("columns", [["columns", ["columns"]]]), breakBefore: ({ addUtilities: t }) => {
  t({ ".break-before-auto": { "break-before": "auto" }, ".break-before-avoid": { "break-before": "avoid" }, ".break-before-all": { "break-before": "all" }, ".break-before-avoid-page": { "break-before": "avoid-page" }, ".break-before-page": { "break-before": "page" }, ".break-before-left": { "break-before": "left" }, ".break-before-right": { "break-before": "right" }, ".break-before-column": { "break-before": "column" } });
}, breakInside: ({ addUtilities: t }) => {
  t({ ".break-inside-auto": { "break-inside": "auto" }, ".break-inside-avoid": { "break-inside": "avoid" }, ".break-inside-avoid-page": { "break-inside": "avoid-page" }, ".break-inside-avoid-column": { "break-inside": "avoid-column" } });
}, breakAfter: ({ addUtilities: t }) => {
  t({ ".break-after-auto": { "break-after": "auto" }, ".break-after-avoid": { "break-after": "avoid" }, ".break-after-all": { "break-after": "all" }, ".break-after-avoid-page": { "break-after": "avoid-page" }, ".break-after-page": { "break-after": "page" }, ".break-after-left": { "break-after": "left" }, ".break-after-right": { "break-after": "right" }, ".break-after-column": { "break-after": "column" } });
}, gridAutoColumns: T("gridAutoColumns", [["auto-cols", ["gridAutoColumns"]]]), gridAutoFlow: ({ addUtilities: t }) => {
  t({ ".grid-flow-row": { gridAutoFlow: "row" }, ".grid-flow-col": { gridAutoFlow: "column" }, ".grid-flow-dense": { gridAutoFlow: "dense" }, ".grid-flow-row-dense": { gridAutoFlow: "row dense" }, ".grid-flow-col-dense": { gridAutoFlow: "column dense" } });
}, gridAutoRows: T("gridAutoRows", [["auto-rows", ["gridAutoRows"]]]), gridTemplateColumns: T("gridTemplateColumns", [["grid-cols", ["gridTemplateColumns"]]]), gridTemplateRows: T("gridTemplateRows", [["grid-rows", ["gridTemplateRows"]]]), flexDirection: ({ addUtilities: t }) => {
  t({ ".flex-row": { "flex-direction": "row" }, ".flex-row-reverse": { "flex-direction": "row-reverse" }, ".flex-col": { "flex-direction": "column" }, ".flex-col-reverse": { "flex-direction": "column-reverse" } });
}, flexWrap: ({ addUtilities: t }) => {
  t({ ".flex-wrap": { "flex-wrap": "wrap" }, ".flex-wrap-reverse": { "flex-wrap": "wrap-reverse" }, ".flex-nowrap": { "flex-wrap": "nowrap" } });
}, placeContent: ({ addUtilities: t }) => {
  t({ ".place-content-center": { "place-content": "center" }, ".place-content-start": { "place-content": "start" }, ".place-content-end": { "place-content": "end" }, ".place-content-between": { "place-content": "space-between" }, ".place-content-around": { "place-content": "space-around" }, ".place-content-evenly": { "place-content": "space-evenly" }, ".place-content-baseline": { "place-content": "baseline" }, ".place-content-stretch": { "place-content": "stretch" } });
}, placeItems: ({ addUtilities: t }) => {
  t({ ".place-items-start": { "place-items": "start" }, ".place-items-end": { "place-items": "end" }, ".place-items-center": { "place-items": "center" }, ".place-items-baseline": { "place-items": "baseline" }, ".place-items-stretch": { "place-items": "stretch" } });
}, alignContent: ({ addUtilities: t }) => {
  t({ ".content-center": { "align-content": "center" }, ".content-start": { "align-content": "flex-start" }, ".content-end": { "align-content": "flex-end" }, ".content-between": { "align-content": "space-between" }, ".content-around": { "align-content": "space-around" }, ".content-evenly": { "align-content": "space-evenly" }, ".content-baseline": { "align-content": "baseline" } });
}, alignItems: ({ addUtilities: t }) => {
  t({ ".items-start": { "align-items": "flex-start" }, ".items-end": { "align-items": "flex-end" }, ".items-center": { "align-items": "center" }, ".items-baseline": { "align-items": "baseline" }, ".items-stretch": { "align-items": "stretch" } });
}, justifyContent: ({ addUtilities: t }) => {
  t({ ".justify-start": { "justify-content": "flex-start" }, ".justify-end": { "justify-content": "flex-end" }, ".justify-center": { "justify-content": "center" }, ".justify-between": { "justify-content": "space-between" }, ".justify-around": { "justify-content": "space-around" }, ".justify-evenly": { "justify-content": "space-evenly" } });
}, justifyItems: ({ addUtilities: t }) => {
  t({ ".justify-items-start": { "justify-items": "start" }, ".justify-items-end": { "justify-items": "end" }, ".justify-items-center": { "justify-items": "center" }, ".justify-items-stretch": { "justify-items": "stretch" } });
}, gap: T("gap", [["gap", ["gap"]], [["gap-x", ["columnGap"]], ["gap-y", ["rowGap"]]]]), space: ({ matchUtilities: t, addUtilities: e, theme: r }) => {
  t({ "space-x": (n) => (n = n === "0" ? "0px" : n, { "& > :not([hidden]) ~ :not([hidden])": { "--tw-space-x-reverse": "0", "margin-right": `calc(${n} * var(--tw-space-x-reverse))`, "margin-left": `calc(${n} * calc(1 - var(--tw-space-x-reverse)))` } }), "space-y": (n) => (n = n === "0" ? "0px" : n, { "& > :not([hidden]) ~ :not([hidden])": { "--tw-space-y-reverse": "0", "margin-top": `calc(${n} * calc(1 - var(--tw-space-y-reverse)))`, "margin-bottom": `calc(${n} * var(--tw-space-y-reverse))` } }) }, { values: r("space"), supportsNegativeValues: true }), e({ ".space-y-reverse > :not([hidden]) ~ :not([hidden])": { "--tw-space-y-reverse": "1" }, ".space-x-reverse > :not([hidden]) ~ :not([hidden])": { "--tw-space-x-reverse": "1" } });
}, divideWidth: ({ matchUtilities: t, addUtilities: e, theme: r }) => {
  t({ "divide-x": (n) => (n = n === "0" ? "0px" : n, { "& > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-x-reverse": "0", "border-right-width": `calc(${n} * var(--tw-divide-x-reverse))`, "border-left-width": `calc(${n} * calc(1 - var(--tw-divide-x-reverse)))` } }), "divide-y": (n) => (n = n === "0" ? "0px" : n, { "& > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-y-reverse": "0", "border-top-width": `calc(${n} * calc(1 - var(--tw-divide-y-reverse)))`, "border-bottom-width": `calc(${n} * var(--tw-divide-y-reverse))` } }) }, { values: r("divideWidth"), type: ["line-width", "length", "any"] }), e({ ".divide-y-reverse > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-y-reverse": "1" }, ".divide-x-reverse > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-x-reverse": "1" } });
}, divideStyle: ({ addUtilities: t }) => {
  t({ ".divide-solid > :not([hidden]) ~ :not([hidden])": { "border-style": "solid" }, ".divide-dashed > :not([hidden]) ~ :not([hidden])": { "border-style": "dashed" }, ".divide-dotted > :not([hidden]) ~ :not([hidden])": { "border-style": "dotted" }, ".divide-double > :not([hidden]) ~ :not([hidden])": { "border-style": "double" }, ".divide-none > :not([hidden]) ~ :not([hidden])": { "border-style": "none" } });
}, divideColor: ({ matchUtilities: t, theme: e, corePlugins: r }) => {
  t({ divide: (n) => r("divideOpacity") ? { ["& > :not([hidden]) ~ :not([hidden])"]: ee({ color: n, property: "border-color", variable: "--tw-divide-opacity" }) } : { ["& > :not([hidden]) ~ :not([hidden])"]: { "border-color": F(n) } } }, { values: (({ DEFAULT: n, ...i }) => i)(H(e("divideColor"))), type: ["color", "any"] });
}, divideOpacity: ({ matchUtilities: t, theme: e }) => {
  t({ "divide-opacity": (r) => ({ ["& > :not([hidden]) ~ :not([hidden])"]: { "--tw-divide-opacity": r } }) }, { values: e("divideOpacity") });
}, placeSelf: ({ addUtilities: t }) => {
  t({ ".place-self-auto": { "place-self": "auto" }, ".place-self-start": { "place-self": "start" }, ".place-self-end": { "place-self": "end" }, ".place-self-center": { "place-self": "center" }, ".place-self-stretch": { "place-self": "stretch" } });
}, alignSelf: ({ addUtilities: t }) => {
  t({ ".self-auto": { "align-self": "auto" }, ".self-start": { "align-self": "flex-start" }, ".self-end": { "align-self": "flex-end" }, ".self-center": { "align-self": "center" }, ".self-stretch": { "align-self": "stretch" }, ".self-baseline": { "align-self": "baseline" } });
}, justifySelf: ({ addUtilities: t }) => {
  t({ ".justify-self-auto": { "justify-self": "auto" }, ".justify-self-start": { "justify-self": "start" }, ".justify-self-end": { "justify-self": "end" }, ".justify-self-center": { "justify-self": "center" }, ".justify-self-stretch": { "justify-self": "stretch" } });
}, overflow: ({ addUtilities: t }) => {
  t({ ".overflow-auto": { overflow: "auto" }, ".overflow-hidden": { overflow: "hidden" }, ".overflow-clip": { overflow: "clip" }, ".overflow-visible": { overflow: "visible" }, ".overflow-scroll": { overflow: "scroll" }, ".overflow-x-auto": { "overflow-x": "auto" }, ".overflow-y-auto": { "overflow-y": "auto" }, ".overflow-x-hidden": { "overflow-x": "hidden" }, ".overflow-y-hidden": { "overflow-y": "hidden" }, ".overflow-x-clip": { "overflow-x": "clip" }, ".overflow-y-clip": { "overflow-y": "clip" }, ".overflow-x-visible": { "overflow-x": "visible" }, ".overflow-y-visible": { "overflow-y": "visible" }, ".overflow-x-scroll": { "overflow-x": "scroll" }, ".overflow-y-scroll": { "overflow-y": "scroll" } });
}, overscrollBehavior: ({ addUtilities: t }) => {
  t({ ".overscroll-auto": { "overscroll-behavior": "auto" }, ".overscroll-contain": { "overscroll-behavior": "contain" }, ".overscroll-none": { "overscroll-behavior": "none" }, ".overscroll-y-auto": { "overscroll-behavior-y": "auto" }, ".overscroll-y-contain": { "overscroll-behavior-y": "contain" }, ".overscroll-y-none": { "overscroll-behavior-y": "none" }, ".overscroll-x-auto": { "overscroll-behavior-x": "auto" }, ".overscroll-x-contain": { "overscroll-behavior-x": "contain" }, ".overscroll-x-none": { "overscroll-behavior-x": "none" } });
}, scrollBehavior: ({ addUtilities: t }) => {
  t({ ".scroll-auto": { "scroll-behavior": "auto" }, ".scroll-smooth": { "scroll-behavior": "smooth" } });
}, textOverflow: ({ addUtilities: t }) => {
  t({ ".truncate": { overflow: "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" }, ".overflow-ellipsis": { "text-overflow": "ellipsis" }, ".text-ellipsis": { "text-overflow": "ellipsis" }, ".text-clip": { "text-overflow": "clip" } });
}, whitespace: ({ addUtilities: t }) => {
  t({ ".whitespace-normal": { "white-space": "normal" }, ".whitespace-nowrap": { "white-space": "nowrap" }, ".whitespace-pre": { "white-space": "pre" }, ".whitespace-pre-line": { "white-space": "pre-line" }, ".whitespace-pre-wrap": { "white-space": "pre-wrap" } });
}, wordBreak: ({ addUtilities: t }) => {
  t({ ".break-normal": { "overflow-wrap": "normal", "word-break": "normal" }, ".break-words": { "overflow-wrap": "break-word" }, ".break-all": { "word-break": "break-all" }, ".break-keep": { "word-break": "keep-all" } });
}, borderRadius: T("borderRadius", [["rounded", ["border-radius"]], [["rounded-t", ["border-top-left-radius", "border-top-right-radius"]], ["rounded-r", ["border-top-right-radius", "border-bottom-right-radius"]], ["rounded-b", ["border-bottom-right-radius", "border-bottom-left-radius"]], ["rounded-l", ["border-top-left-radius", "border-bottom-left-radius"]]], [["rounded-tl", ["border-top-left-radius"]], ["rounded-tr", ["border-top-right-radius"]], ["rounded-br", ["border-bottom-right-radius"]], ["rounded-bl", ["border-bottom-left-radius"]]]]), borderWidth: T("borderWidth", [["border", [["@defaults border-width", {}], "border-width"]], [["border-x", [["@defaults border-width", {}], "border-left-width", "border-right-width"]], ["border-y", [["@defaults border-width", {}], "border-top-width", "border-bottom-width"]]], [["border-t", [["@defaults border-width", {}], "border-top-width"]], ["border-r", [["@defaults border-width", {}], "border-right-width"]], ["border-b", [["@defaults border-width", {}], "border-bottom-width"]], ["border-l", [["@defaults border-width", {}], "border-left-width"]]]], { type: ["line-width", "length"] }), borderStyle: ({ addUtilities: t }) => {
  t({ ".border-solid": { "border-style": "solid" }, ".border-dashed": { "border-style": "dashed" }, ".border-dotted": { "border-style": "dotted" }, ".border-double": { "border-style": "double" }, ".border-hidden": { "border-style": "hidden" }, ".border-none": { "border-style": "none" } });
}, borderColor: ({ matchUtilities: t, theme: e, corePlugins: r }) => {
  t({ border: (n) => r("borderOpacity") ? ee({ color: n, property: "border-color", variable: "--tw-border-opacity" }) : { "border-color": F(n) } }, { values: (({ DEFAULT: n, ...i }) => i)(H(e("borderColor"))), type: ["color", "any"] }), t({ "border-x": (n) => r("borderOpacity") ? ee({ color: n, property: ["border-left-color", "border-right-color"], variable: "--tw-border-opacity" }) : { "border-left-color": F(n), "border-right-color": F(n) }, "border-y": (n) => r("borderOpacity") ? ee({ color: n, property: ["border-top-color", "border-bottom-color"], variable: "--tw-border-opacity" }) : { "border-top-color": F(n), "border-bottom-color": F(n) } }, { values: (({ DEFAULT: n, ...i }) => i)(H(e("borderColor"))), type: ["color", "any"] }), t({ "border-t": (n) => r("borderOpacity") ? ee({ color: n, property: "border-top-color", variable: "--tw-border-opacity" }) : { "border-top-color": F(n) }, "border-r": (n) => r("borderOpacity") ? ee({ color: n, property: "border-right-color", variable: "--tw-border-opacity" }) : { "border-right-color": F(n) }, "border-b": (n) => r("borderOpacity") ? ee({ color: n, property: "border-bottom-color", variable: "--tw-border-opacity" }) : { "border-bottom-color": F(n) }, "border-l": (n) => r("borderOpacity") ? ee({ color: n, property: "border-left-color", variable: "--tw-border-opacity" }) : { "border-left-color": F(n) } }, { values: (({ DEFAULT: n, ...i }) => i)(H(e("borderColor"))), type: ["color", "any"] });
}, borderOpacity: T("borderOpacity", [["border-opacity", ["--tw-border-opacity"]]]), backgroundColor: ({ matchUtilities: t, theme: e, corePlugins: r }) => {
  t({ bg: (n) => r("backgroundOpacity") ? ee({ color: n, property: "background-color", variable: "--tw-bg-opacity" }) : { "background-color": F(n) } }, { values: H(e("backgroundColor")), type: ["color", "any"] });
}, backgroundOpacity: T("backgroundOpacity", [["bg-opacity", ["--tw-bg-opacity"]]]), backgroundImage: T("backgroundImage", [["bg", ["background-image"]]], { type: ["lookup", "image", "url"] }), gradientColorStops: /* @__PURE__ */ (() => {
  function t(e) {
    return we(e, 0, "rgb(255 255 255 / 0)");
  }
  return function({ matchUtilities: e, theme: r }) {
    let n = { values: H(r("gradientColorStops")), type: ["color", "any"] };
    e({ from: (i) => {
      let a = t(i);
      return { "--tw-gradient-from": F(i, "from"), "--tw-gradient-to": a, "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)" };
    } }, n), e({ via: (i) => ({ "--tw-gradient-to": t(i), "--tw-gradient-stops": `var(--tw-gradient-from), ${F(i, "via")}, var(--tw-gradient-to)` }) }, n), e({ to: (i) => ({ "--tw-gradient-to": F(i, "to") }) }, n);
  };
})(), boxDecorationBreak: ({ addUtilities: t }) => {
  t({ ".decoration-slice": { "box-decoration-break": "slice" }, ".decoration-clone": { "box-decoration-break": "clone" }, ".box-decoration-slice": { "box-decoration-break": "slice" }, ".box-decoration-clone": { "box-decoration-break": "clone" } });
}, backgroundSize: T("backgroundSize", [["bg", ["background-size"]]], { type: ["lookup", "length", "percentage", "size"] }), backgroundAttachment: ({ addUtilities: t }) => {
  t({ ".bg-fixed": { "background-attachment": "fixed" }, ".bg-local": { "background-attachment": "local" }, ".bg-scroll": { "background-attachment": "scroll" } });
}, backgroundClip: ({ addUtilities: t }) => {
  t({ ".bg-clip-border": { "background-clip": "border-box" }, ".bg-clip-padding": { "background-clip": "padding-box" }, ".bg-clip-content": { "background-clip": "content-box" }, ".bg-clip-text": { "background-clip": "text" } });
}, backgroundPosition: T("backgroundPosition", [["bg", ["background-position"]]], { type: ["lookup", ["position", { preferOnConflict: true }]] }), backgroundRepeat: ({ addUtilities: t }) => {
  t({ ".bg-repeat": { "background-repeat": "repeat" }, ".bg-no-repeat": { "background-repeat": "no-repeat" }, ".bg-repeat-x": { "background-repeat": "repeat-x" }, ".bg-repeat-y": { "background-repeat": "repeat-y" }, ".bg-repeat-round": { "background-repeat": "round" }, ".bg-repeat-space": { "background-repeat": "space" } });
}, backgroundOrigin: ({ addUtilities: t }) => {
  t({ ".bg-origin-border": { "background-origin": "border-box" }, ".bg-origin-padding": { "background-origin": "padding-box" }, ".bg-origin-content": { "background-origin": "content-box" } });
}, fill: ({ matchUtilities: t, theme: e }) => {
  t({ fill: (r) => ({ fill: F(r) }) }, { values: H(e("fill")), type: ["color", "any"] });
}, stroke: ({ matchUtilities: t, theme: e }) => {
  t({ stroke: (r) => ({ stroke: F(r) }) }, { values: H(e("stroke")), type: ["color", "url", "any"] });
}, strokeWidth: T("strokeWidth", [["stroke", ["stroke-width"]]], { type: ["length", "number", "percentage"] }), objectFit: ({ addUtilities: t }) => {
  t({ ".object-contain": { "object-fit": "contain" }, ".object-cover": { "object-fit": "cover" }, ".object-fill": { "object-fit": "fill" }, ".object-none": { "object-fit": "none" }, ".object-scale-down": { "object-fit": "scale-down" } });
}, objectPosition: T("objectPosition", [["object", ["object-position"]]]), padding: T("padding", [["p", ["padding"]], [["px", ["padding-left", "padding-right"]], ["py", ["padding-top", "padding-bottom"]]], [["pt", ["padding-top"]], ["pr", ["padding-right"]], ["pb", ["padding-bottom"]], ["pl", ["padding-left"]]]]), textAlign: ({ addUtilities: t }) => {
  t({ ".text-left": { "text-align": "left" }, ".text-center": { "text-align": "center" }, ".text-right": { "text-align": "right" }, ".text-justify": { "text-align": "justify" }, ".text-start": { "text-align": "start" }, ".text-end": { "text-align": "end" } });
}, textIndent: T("textIndent", [["indent", ["text-indent"]]], { supportsNegativeValues: true }), verticalAlign: ({ addUtilities: t, matchUtilities: e }) => {
  t({ ".align-baseline": { "vertical-align": "baseline" }, ".align-top": { "vertical-align": "top" }, ".align-middle": { "vertical-align": "middle" }, ".align-bottom": { "vertical-align": "bottom" }, ".align-text-top": { "vertical-align": "text-top" }, ".align-text-bottom": { "vertical-align": "text-bottom" }, ".align-sub": { "vertical-align": "sub" }, ".align-super": { "vertical-align": "super" } }), e({ align: (r) => ({ "vertical-align": r }) });
}, fontFamily: ({ matchUtilities: t, theme: e }) => {
  t({ font: (r) => {
    let [n, i = {}] = Array.isArray(r) && X(r[1]) ? r : [r], { fontFeatureSettings: a } = i;
    return { "font-family": Array.isArray(n) ? n.join(", ") : n, ...a === void 0 ? {} : { "font-feature-settings": a } };
  } }, { values: e("fontFamily"), type: ["lookup", "generic-name", "family-name"] });
}, fontSize: ({ matchUtilities: t, theme: e }) => {
  t({ text: (r) => {
    let [n, i] = Array.isArray(r) ? r : [r], { lineHeight: a, letterSpacing: s, fontWeight: o } = X(i) ? i : { lineHeight: i };
    return { "font-size": n, ...a === void 0 ? {} : { "line-height": a }, ...s === void 0 ? {} : { "letter-spacing": s }, ...o === void 0 ? {} : { "font-weight": o } };
  } }, { values: e("fontSize"), type: ["absolute-size", "relative-size", "length", "percentage"] });
}, fontWeight: T("fontWeight", [["font", ["fontWeight"]]], { type: ["lookup", "number", "any"] }), textTransform: ({ addUtilities: t }) => {
  t({ ".uppercase": { "text-transform": "uppercase" }, ".lowercase": { "text-transform": "lowercase" }, ".capitalize": { "text-transform": "capitalize" }, ".normal-case": { "text-transform": "none" } });
}, fontStyle: ({ addUtilities: t }) => {
  t({ ".italic": { "font-style": "italic" }, ".not-italic": { "font-style": "normal" } });
}, fontVariantNumeric: ({ addDefaults: t, addUtilities: e }) => {
  let r = "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)";
  t("font-variant-numeric", { "--tw-ordinal": " ", "--tw-slashed-zero": " ", "--tw-numeric-figure": " ", "--tw-numeric-spacing": " ", "--tw-numeric-fraction": " " }), e({ ".normal-nums": { "font-variant-numeric": "normal" }, ".ordinal": { "@defaults font-variant-numeric": {}, "--tw-ordinal": "ordinal", "font-variant-numeric": r }, ".slashed-zero": { "@defaults font-variant-numeric": {}, "--tw-slashed-zero": "slashed-zero", "font-variant-numeric": r }, ".lining-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-figure": "lining-nums", "font-variant-numeric": r }, ".oldstyle-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-figure": "oldstyle-nums", "font-variant-numeric": r }, ".proportional-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-spacing": "proportional-nums", "font-variant-numeric": r }, ".tabular-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-spacing": "tabular-nums", "font-variant-numeric": r }, ".diagonal-fractions": { "@defaults font-variant-numeric": {}, "--tw-numeric-fraction": "diagonal-fractions", "font-variant-numeric": r }, ".stacked-fractions": { "@defaults font-variant-numeric": {}, "--tw-numeric-fraction": "stacked-fractions", "font-variant-numeric": r } });
}, lineHeight: T("lineHeight", [["leading", ["lineHeight"]]]), letterSpacing: T("letterSpacing", [["tracking", ["letterSpacing"]]], { supportsNegativeValues: true }), textColor: ({ matchUtilities: t, theme: e, corePlugins: r }) => {
  t({ text: (n) => r("textOpacity") ? ee({ color: n, property: "color", variable: "--tw-text-opacity" }) : { color: F(n) } }, { values: H(e("textColor")), type: ["color", "any"] });
}, textOpacity: T("textOpacity", [["text-opacity", ["--tw-text-opacity"]]]), textDecoration: ({ addUtilities: t }) => {
  t({ ".underline": { "text-decoration-line": "underline" }, ".overline": { "text-decoration-line": "overline" }, ".line-through": { "text-decoration-line": "line-through" }, ".no-underline": { "text-decoration-line": "none" } });
}, textDecorationColor: ({ matchUtilities: t, theme: e }) => {
  t({ decoration: (r) => ({ "text-decoration-color": F(r) }) }, { values: H(e("textDecorationColor")), type: ["color", "any"] });
}, textDecorationStyle: ({ addUtilities: t }) => {
  t({ ".decoration-solid": { "text-decoration-style": "solid" }, ".decoration-double": { "text-decoration-style": "double" }, ".decoration-dotted": { "text-decoration-style": "dotted" }, ".decoration-dashed": { "text-decoration-style": "dashed" }, ".decoration-wavy": { "text-decoration-style": "wavy" } });
}, textDecorationThickness: T("textDecorationThickness", [["decoration", ["text-decoration-thickness"]]], { type: ["length", "percentage"] }), textUnderlineOffset: T("textUnderlineOffset", [["underline-offset", ["text-underline-offset"]]], { type: ["length", "percentage", "any"] }), fontSmoothing: ({ addUtilities: t }) => {
  t({ ".antialiased": { "-webkit-font-smoothing": "antialiased", "-moz-osx-font-smoothing": "grayscale" }, ".subpixel-antialiased": { "-webkit-font-smoothing": "auto", "-moz-osx-font-smoothing": "auto" } });
}, placeholderColor: ({ matchUtilities: t, theme: e, corePlugins: r }) => {
  t({ placeholder: (n) => r("placeholderOpacity") ? { "&::placeholder": ee({ color: n, property: "color", variable: "--tw-placeholder-opacity" }) } : { "&::placeholder": { color: F(n) } } }, { values: H(e("placeholderColor")), type: ["color", "any"] });
}, placeholderOpacity: ({ matchUtilities: t, theme: e }) => {
  t({ "placeholder-opacity": (r) => ({ ["&::placeholder"]: { "--tw-placeholder-opacity": r } }) }, { values: e("placeholderOpacity") });
}, caretColor: ({ matchUtilities: t, theme: e }) => {
  t({ caret: (r) => ({ "caret-color": F(r) }) }, { values: H(e("caretColor")), type: ["color", "any"] });
}, accentColor: ({ matchUtilities: t, theme: e }) => {
  t({ accent: (r) => ({ "accent-color": F(r) }) }, { values: H(e("accentColor")), type: ["color", "any"] });
}, opacity: T("opacity", [["opacity", ["opacity"]]]), backgroundBlendMode: ({ addUtilities: t }) => {
  t({ ".bg-blend-normal": { "background-blend-mode": "normal" }, ".bg-blend-multiply": { "background-blend-mode": "multiply" }, ".bg-blend-screen": { "background-blend-mode": "screen" }, ".bg-blend-overlay": { "background-blend-mode": "overlay" }, ".bg-blend-darken": { "background-blend-mode": "darken" }, ".bg-blend-lighten": { "background-blend-mode": "lighten" }, ".bg-blend-color-dodge": { "background-blend-mode": "color-dodge" }, ".bg-blend-color-burn": { "background-blend-mode": "color-burn" }, ".bg-blend-hard-light": { "background-blend-mode": "hard-light" }, ".bg-blend-soft-light": { "background-blend-mode": "soft-light" }, ".bg-blend-difference": { "background-blend-mode": "difference" }, ".bg-blend-exclusion": { "background-blend-mode": "exclusion" }, ".bg-blend-hue": { "background-blend-mode": "hue" }, ".bg-blend-saturation": { "background-blend-mode": "saturation" }, ".bg-blend-color": { "background-blend-mode": "color" }, ".bg-blend-luminosity": { "background-blend-mode": "luminosity" } });
}, mixBlendMode: ({ addUtilities: t }) => {
  t({ ".mix-blend-normal": { "mix-blend-mode": "normal" }, ".mix-blend-multiply": { "mix-blend-mode": "multiply" }, ".mix-blend-screen": { "mix-blend-mode": "screen" }, ".mix-blend-overlay": { "mix-blend-mode": "overlay" }, ".mix-blend-darken": { "mix-blend-mode": "darken" }, ".mix-blend-lighten": { "mix-blend-mode": "lighten" }, ".mix-blend-color-dodge": { "mix-blend-mode": "color-dodge" }, ".mix-blend-color-burn": { "mix-blend-mode": "color-burn" }, ".mix-blend-hard-light": { "mix-blend-mode": "hard-light" }, ".mix-blend-soft-light": { "mix-blend-mode": "soft-light" }, ".mix-blend-difference": { "mix-blend-mode": "difference" }, ".mix-blend-exclusion": { "mix-blend-mode": "exclusion" }, ".mix-blend-hue": { "mix-blend-mode": "hue" }, ".mix-blend-saturation": { "mix-blend-mode": "saturation" }, ".mix-blend-color": { "mix-blend-mode": "color" }, ".mix-blend-luminosity": { "mix-blend-mode": "luminosity" }, ".mix-blend-plus-lighter": { "mix-blend-mode": "plus-lighter" } });
}, boxShadow: (() => {
  let t = Ce("boxShadow"), e = ["var(--tw-ring-offset-shadow, 0 0 #0000)", "var(--tw-ring-shadow, 0 0 #0000)", "var(--tw-shadow)"].join(", ");
  return function({ matchUtilities: r, addDefaults: n, theme: i }) {
    n(" box-shadow", { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" }), r({ shadow: (a) => {
      a = t(a);
      let s = rn(a);
      for (let o of s) !o.valid || (o.color = "var(--tw-shadow-color)");
      return { "@defaults box-shadow": {}, "--tw-shadow": a === "none" ? "0 0 #0000" : a, "--tw-shadow-colored": a === "none" ? "0 0 #0000" : ju(s), "box-shadow": e };
    } }, { values: i("boxShadow"), type: ["shadow"] });
  };
})(), boxShadowColor: ({ matchUtilities: t, theme: e }) => {
  t({ shadow: (r) => ({ "--tw-shadow-color": F(r), "--tw-shadow": "var(--tw-shadow-colored)" }) }, { values: H(e("boxShadowColor")), type: ["color", "any"] });
}, outlineStyle: ({ addUtilities: t }) => {
  t({ ".outline-none": { outline: "2px solid transparent", "outline-offset": "2px" }, ".outline": { "outline-style": "solid" }, ".outline-dashed": { "outline-style": "dashed" }, ".outline-dotted": { "outline-style": "dotted" }, ".outline-double": { "outline-style": "double" } });
}, outlineWidth: T("outlineWidth", [["outline", ["outline-width"]]], { type: ["length", "number", "percentage"] }), outlineOffset: T("outlineOffset", [["outline-offset", ["outline-offset"]]], { type: ["length", "number", "percentage", "any"], supportsNegativeValues: true }), outlineColor: ({ matchUtilities: t, theme: e }) => {
  t({ outline: (r) => ({ "outline-color": F(r) }) }, { values: H(e("outlineColor")), type: ["color", "any"] });
}, ringWidth: ({ matchUtilities: t, addDefaults: e, addUtilities: r, theme: n, config: i }) => {
  let a = (() => {
    var o, l;
    if (G(i(), "respectDefaultRingColorOpacity")) return n("ringColor.DEFAULT");
    let s = n("ringOpacity.DEFAULT", "0.5");
    return (o = n("ringColor")) != null && o.DEFAULT ? we((l = n("ringColor")) == null ? void 0 : l.DEFAULT, s, `rgb(147 197 253 / ${s})`) : `rgb(147 197 253 / ${s})`;
  })();
  e("ring-width", { "--tw-ring-inset": " ", "--tw-ring-offset-width": n("ringOffsetWidth.DEFAULT", "0px"), "--tw-ring-offset-color": n("ringOffsetColor.DEFAULT", "#fff"), "--tw-ring-color": a, "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" }), t({ ring: (s) => ({ "@defaults ring-width": {}, "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${s} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, "box-shadow": ["var(--tw-ring-offset-shadow)", "var(--tw-ring-shadow)", "var(--tw-shadow, 0 0 #0000)"].join(", ") }) }, { values: n("ringWidth"), type: "length" }), r({ ".ring-inset": { "@defaults ring-width": {}, "--tw-ring-inset": "inset" } });
}, ringColor: ({ matchUtilities: t, theme: e, corePlugins: r }) => {
  t({ ring: (n) => r("ringOpacity") ? ee({ color: n, property: "--tw-ring-color", variable: "--tw-ring-opacity" }) : { "--tw-ring-color": F(n) } }, { values: Object.fromEntries(Object.entries(H(e("ringColor"))).filter(([n]) => n !== "DEFAULT")), type: ["color", "any"] });
}, ringOpacity: (t) => {
  let { config: e } = t;
  return T("ringOpacity", [["ring-opacity", ["--tw-ring-opacity"]]], { filterDefault: !G(e(), "respectDefaultRingColorOpacity") })(t);
}, ringOffsetWidth: T("ringOffsetWidth", [["ring-offset", ["--tw-ring-offset-width"]]], { type: "length" }), ringOffsetColor: ({ matchUtilities: t, theme: e }) => {
  t({ "ring-offset": (r) => ({ "--tw-ring-offset-color": F(r) }) }, { values: H(e("ringOffsetColor")), type: ["color", "any"] });
}, blur: ({ matchUtilities: t, theme: e }) => {
  t({ blur: (r) => ({ "--tw-blur": `blur(${r})`, "@defaults filter": {}, filter: xe }) }, { values: e("blur") });
}, brightness: ({ matchUtilities: t, theme: e }) => {
  t({ brightness: (r) => ({ "--tw-brightness": `brightness(${r})`, "@defaults filter": {}, filter: xe }) }, { values: e("brightness") });
}, contrast: ({ matchUtilities: t, theme: e }) => {
  t({ contrast: (r) => ({ "--tw-contrast": `contrast(${r})`, "@defaults filter": {}, filter: xe }) }, { values: e("contrast") });
}, dropShadow: ({ matchUtilities: t, theme: e }) => {
  t({ "drop-shadow": (r) => ({ "--tw-drop-shadow": Array.isArray(r) ? r.map((n) => `drop-shadow(${n})`).join(" ") : `drop-shadow(${r})`, "@defaults filter": {}, filter: xe }) }, { values: e("dropShadow") });
}, grayscale: ({ matchUtilities: t, theme: e }) => {
  t({ grayscale: (r) => ({ "--tw-grayscale": `grayscale(${r})`, "@defaults filter": {}, filter: xe }) }, { values: e("grayscale") });
}, hueRotate: ({ matchUtilities: t, theme: e }) => {
  t({ "hue-rotate": (r) => ({ "--tw-hue-rotate": `hue-rotate(${r})`, "@defaults filter": {}, filter: xe }) }, { values: e("hueRotate"), supportsNegativeValues: true });
}, invert: ({ matchUtilities: t, theme: e }) => {
  t({ invert: (r) => ({ "--tw-invert": `invert(${r})`, "@defaults filter": {}, filter: xe }) }, { values: e("invert") });
}, saturate: ({ matchUtilities: t, theme: e }) => {
  t({ saturate: (r) => ({ "--tw-saturate": `saturate(${r})`, "@defaults filter": {}, filter: xe }) }, { values: e("saturate") });
}, sepia: ({ matchUtilities: t, theme: e }) => {
  t({ sepia: (r) => ({ "--tw-sepia": `sepia(${r})`, "@defaults filter": {}, filter: xe }) }, { values: e("sepia") });
}, filter: ({ addDefaults: t, addUtilities: e }) => {
  t("filter", { "--tw-blur": " ", "--tw-brightness": " ", "--tw-contrast": " ", "--tw-grayscale": " ", "--tw-hue-rotate": " ", "--tw-invert": " ", "--tw-saturate": " ", "--tw-sepia": " ", "--tw-drop-shadow": " " }), e({ ".filter": { "@defaults filter": {}, filter: xe }, ".filter-none": { filter: "none" } });
}, backdropBlur: ({ matchUtilities: t, theme: e }) => {
  t({ "backdrop-blur": (r) => ({ "--tw-backdrop-blur": `blur(${r})`, "@defaults backdrop-filter": {}, "backdrop-filter": Se }) }, { values: e("backdropBlur") });
}, backdropBrightness: ({ matchUtilities: t, theme: e }) => {
  t({ "backdrop-brightness": (r) => ({ "--tw-backdrop-brightness": `brightness(${r})`, "@defaults backdrop-filter": {}, "backdrop-filter": Se }) }, { values: e("backdropBrightness") });
}, backdropContrast: ({ matchUtilities: t, theme: e }) => {
  t({ "backdrop-contrast": (r) => ({ "--tw-backdrop-contrast": `contrast(${r})`, "@defaults backdrop-filter": {}, "backdrop-filter": Se }) }, { values: e("backdropContrast") });
}, backdropGrayscale: ({ matchUtilities: t, theme: e }) => {
  t({ "backdrop-grayscale": (r) => ({ "--tw-backdrop-grayscale": `grayscale(${r})`, "@defaults backdrop-filter": {}, "backdrop-filter": Se }) }, { values: e("backdropGrayscale") });
}, backdropHueRotate: ({ matchUtilities: t, theme: e }) => {
  t({ "backdrop-hue-rotate": (r) => ({ "--tw-backdrop-hue-rotate": `hue-rotate(${r})`, "@defaults backdrop-filter": {}, "backdrop-filter": Se }) }, { values: e("backdropHueRotate"), supportsNegativeValues: true });
}, backdropInvert: ({ matchUtilities: t, theme: e }) => {
  t({ "backdrop-invert": (r) => ({ "--tw-backdrop-invert": `invert(${r})`, "@defaults backdrop-filter": {}, "backdrop-filter": Se }) }, { values: e("backdropInvert") });
}, backdropOpacity: ({ matchUtilities: t, theme: e }) => {
  t({ "backdrop-opacity": (r) => ({ "--tw-backdrop-opacity": `opacity(${r})`, "@defaults backdrop-filter": {}, "backdrop-filter": Se }) }, { values: e("backdropOpacity") });
}, backdropSaturate: ({ matchUtilities: t, theme: e }) => {
  t({ "backdrop-saturate": (r) => ({ "--tw-backdrop-saturate": `saturate(${r})`, "@defaults backdrop-filter": {}, "backdrop-filter": Se }) }, { values: e("backdropSaturate") });
}, backdropSepia: ({ matchUtilities: t, theme: e }) => {
  t({ "backdrop-sepia": (r) => ({ "--tw-backdrop-sepia": `sepia(${r})`, "@defaults backdrop-filter": {}, "backdrop-filter": Se }) }, { values: e("backdropSepia") });
}, backdropFilter: ({ addDefaults: t, addUtilities: e }) => {
  t("backdrop-filter", { "--tw-backdrop-blur": " ", "--tw-backdrop-brightness": " ", "--tw-backdrop-contrast": " ", "--tw-backdrop-grayscale": " ", "--tw-backdrop-hue-rotate": " ", "--tw-backdrop-invert": " ", "--tw-backdrop-opacity": " ", "--tw-backdrop-saturate": " ", "--tw-backdrop-sepia": " " }), e({ ".backdrop-filter": { "@defaults backdrop-filter": {}, "backdrop-filter": Se }, ".backdrop-filter-none": { "backdrop-filter": "none" } });
}, transitionProperty: ({ matchUtilities: t, theme: e }) => {
  let r = e("transitionTimingFunction.DEFAULT"), n = e("transitionDuration.DEFAULT");
  t({ transition: (i) => ({ "transition-property": i, ...i === "none" ? {} : { "transition-timing-function": r, "transition-duration": n } }) }, { values: e("transitionProperty") });
}, transitionDelay: T("transitionDelay", [["delay", ["transitionDelay"]]]), transitionDuration: T("transitionDuration", [["duration", ["transitionDuration"]]], { filterDefault: true }), transitionTimingFunction: T("transitionTimingFunction", [["ease", ["transitionTimingFunction"]]], { filterDefault: true }), willChange: T("willChange", [["will-change", ["will-change"]]]), content: T("content", [["content", ["--tw-content", ["content", "var(--tw-content)"]]]]) };
function Fe(t) {
  if (Array.isArray(t)) return t;
  let e = t.split("[").length - 1, r = t.split("]").length - 1;
  if (e !== r) throw new Error(`Path is invalid. Has unbalanced brackets: ${t}`);
  return t.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
}
var yf = /* @__PURE__ */ new Map([["{", "}"], ["[", "]"], ["(", ")"]]);
var gf = new Map(Array.from(yf.entries()).map(([t, e]) => [e, t]));
var ow = /* @__PURE__ */ new Set(['"', "'", "`"]);
function lt(t) {
  let e = [], r = false;
  for (let n = 0; n < t.length; n++) {
    let i = t[n];
    if (i === ":" && !r && e.length === 0) return false;
    if (ow.has(i) && t[n - 1] !== "\\" && (r = !r), !r && t[n - 1] !== "\\") {
      if (yf.has(i)) e.push(i);
      else if (gf.has(i)) {
        let a = gf.get(i);
        if (e.length <= 0 || e.pop() !== a) return false;
      }
    }
  }
  return !(e.length > 0);
}
function cn(t) {
  return (t > 0n) - (t < 0n);
}
function vf(t, e) {
  let r = 0n, n = 0n;
  for (let [i, a] of e) t & i && (r = r | i, n = n | a);
  return t & ~r | n;
}
var pn = class {
  constructor() {
    this.offsets = { defaults: 0n, base: 0n, components: 0n, utilities: 0n, variants: 0n, user: 0n }, this.layerPositions = { defaults: 0n, base: 1n, components: 2n, utilities: 3n, user: 4n, variants: 5n }, this.reservedVariantBits = 0n, this.variantOffsets = /* @__PURE__ */ new Map();
  }
  create(e) {
    return { layer: e, parentLayer: e, arbitrary: 0n, variants: 0n, parallelIndex: 0n, index: this.offsets[e]++, options: [] };
  }
  arbitraryProperty() {
    return { ...this.create("utilities"), arbitrary: 1n };
  }
  forVariant(e, r = 0) {
    let n = this.variantOffsets.get(e);
    if (n === void 0) throw new Error(`Cannot find offset for unknown variant ${e}`);
    return { ...this.create("variants"), variants: n << BigInt(r) };
  }
  applyVariantOffset(e, r, n) {
    return n.variant = r.variants, { ...e, layer: "variants", parentLayer: e.layer === "variants" ? e.parentLayer : e.layer, variants: e.variants | r.variants, options: n.sort ? [].concat(n, e.options) : e.options, parallelIndex: wf([e.parallelIndex, r.parallelIndex]) };
  }
  applyParallelOffset(e, r) {
    return { ...e, parallelIndex: BigInt(r) };
  }
  recordVariants(e, r) {
    for (let n of e) this.recordVariant(n, r(n));
  }
  recordVariant(e, r = 1) {
    return this.variantOffsets.set(e, 1n << this.reservedVariantBits), this.reservedVariantBits += BigInt(r), { ...this.create("variants"), variants: this.variantOffsets.get(e) };
  }
  compare(e, r) {
    var n;
    if (e.layer !== r.layer) return this.layerPositions[e.layer] - this.layerPositions[r.layer];
    if (e.parentLayer !== r.parentLayer) return this.layerPositions[e.parentLayer] - this.layerPositions[r.parentLayer];
    for (let i of e.options) for (let a of r.options) {
      if (i.id !== a.id || !i.sort || !a.sort) continue;
      let s = (n = wf([i.variant, a.variant])) != null ? n : 0n, o = ~(s | s - 1n), l = e.variants & o, u = r.variants & o;
      if (l !== u) continue;
      let f = i.sort({ value: i.value, modifier: i.modifier }, { value: a.value, modifier: a.modifier });
      if (f !== 0) return f;
    }
    return e.variants !== r.variants ? e.variants - r.variants : e.parallelIndex !== r.parallelIndex ? e.parallelIndex - r.parallelIndex : e.arbitrary !== r.arbitrary ? e.arbitrary - r.arbitrary : e.index - r.index;
  }
  recalculateVariantOffsets() {
    let e = Array.from(this.variantOffsets.entries()).filter(([i]) => i.startsWith("[")).sort(([i], [a]) => lw(i, a)), r = e.map(([, i]) => i).sort((i, a) => cn(i - a));
    return e.map(([, i], a) => [i, r[a]]).filter(([i, a]) => i !== a);
  }
  remapArbitraryVariantOffsets(e) {
    let r = this.recalculateVariantOffsets();
    return r.length === 0 ? e : e.map((n) => {
      let [i, a] = n;
      return i = { ...i, variants: vf(i.variants, r) }, [i, a];
    });
  }
  sort(e) {
    return e = this.remapArbitraryVariantOffsets(e), e.sort(([r], [n]) => cn(this.compare(r, n)));
  }
};
function wf(t) {
  let e = null;
  for (let r of t) e = e != null ? e : r, e = e > r ? e : r;
  return e;
}
function lw(t, e) {
  let r = t.length, n = e.length, i = r < n ? r : n;
  for (let a = 0; a < i; a++) {
    let s = t.charCodeAt(a) - e.charCodeAt(a);
    if (s !== 0) return s;
  }
  return r - n;
}
var Ns = { AddVariant: Symbol.for("ADD_VARIANT"), MatchVariant: Symbol.for("MATCH_VARIANT") };
var qs = { Base: 1 << 0, Dynamic: 1 << 1 };
function Fs(t, e) {
  let r = t.tailwindConfig.prefix;
  return typeof r == "function" ? r(e) : r + e;
}
function bf({ type: t = "any", ...e }) {
  let r = [].concat(t);
  return { ...e, types: r.map((n) => Array.isArray(n) ? { type: n[0], ...n[1] } : { type: n, preferOnConflict: false }) };
}
function uw(t) {
  let e = [], r = "", n = 0;
  for (let i = 0; i < t.length; i++) {
    let a = t[i];
    if (a === "\\") r += "\\" + t[++i];
    else if (a === "{") ++n, e.push(r.trim()), r = "";
    else if (a === "}") {
      if (--n < 0) throw new Error("Your { and } are unbalanced.");
      e.push(r.trim()), r = "";
    } else r += a;
  }
  return r.length > 0 && e.push(r.trim()), e = e.filter((i) => i !== ""), e;
}
function fw(t, e, { before: r = [] } = {}) {
  if (r = [].concat(r), r.length <= 0) {
    t.push(e);
    return;
  }
  let n = t.length - 1;
  for (let i of r) {
    let a = t.indexOf(i);
    a !== -1 && (n = Math.min(n, a));
  }
  t.splice(n, 0, e);
}
function kf(t) {
  return Array.isArray(t) ? t.flatMap((e) => !Array.isArray(e) && !X(e) ? e : it(e)) : kf([t]);
}
function xf(t, e) {
  return (0, $s.default)((n) => {
    let i = [];
    return e && e(n), n.walkClasses((a) => {
      i.push(a.value);
    }), i;
  }).transformSync(t);
}
function cw(t, e = { containsNonOnDemandable: false }, r = 0) {
  let n = [];
  if (t.type === "rule") {
    let i = function(a) {
      a.walkPseudos((s) => {
        s.value === ":not" && s.remove();
      });
    };
    for (let a of t.selectors) {
      let s = xf(a, i);
      s.length === 0 && (e.containsNonOnDemandable = true);
      for (let o of s) n.push(o);
    }
  } else t.type === "atrule" && t.walkRules((i) => {
    for (let a of i.selectors.flatMap((s) => xf(s))) n.push(a);
  });
  return r === 0 ? [e.containsNonOnDemandable || n.length === 0, n] : n;
}
function dn(t) {
  return kf(t).flatMap((e) => {
    let r = /* @__PURE__ */ new Map(), [n, i] = cw(e);
    return n && i.unshift(ke), i.map((a) => (r.has(e) || r.set(e, e), [a, r.get(e)]));
  });
}
function hn(t) {
  return t.startsWith("@") || t.includes("&");
}
function lr(t) {
  t = t.replace(/\n+/g, "").replace(/\s{1,}/g, " ").trim();
  let e = uw(t).map((r) => {
    if (!r.startsWith("@")) return ({ format: a }) => a(r);
    let [, n, i] = /@(.*?)( .+|[({].*)/g.exec(r);
    return ({ wrap: a }) => a(I.atRule({ name: n, params: i.trim() }));
  }).reverse();
  return (r) => {
    for (let n of e) n(r);
  };
}
function pw(t, e, { variantList: r, variantMap: n, offsets: i, classList: a }) {
  function s(c, d) {
    return c ? (0, Sf.default)(t, c, d) : t;
  }
  function o(c) {
    return st(t.prefix, c);
  }
  function l(c, d) {
    return c === ke ? ke : d.respectPrefix ? e.tailwindConfig.prefix + c : c;
  }
  function u(c, d, h = {}) {
    let y = Fe(c), m = s(["theme", ...y], d);
    return Ce(y[0])(m, h);
  }
  let f = 0, p = { postcss: I, prefix: o, e: re, config: s, theme: u, corePlugins: (c) => Array.isArray(t.corePlugins) ? t.corePlugins.includes(c) : s(["corePlugins", c], true), variants: () => [], addBase(c) {
    for (let [d, h] of dn(c)) {
      let y = l(d, {}), m = i.create("base");
      e.candidateRuleMap.has(y) || e.candidateRuleMap.set(y, []), e.candidateRuleMap.get(y).push([{ sort: m, layer: "base" }, h]);
    }
  }, addDefaults(c, d) {
    let h = { [`@defaults ${c}`]: d };
    for (let [y, m] of dn(h)) {
      let g = l(y, {});
      e.candidateRuleMap.has(g) || e.candidateRuleMap.set(g, []), e.candidateRuleMap.get(g).push([{ sort: i.create("defaults"), layer: "defaults" }, m]);
    }
  }, addComponents(c, d) {
    d = Object.assign({}, { preserveSource: false, respectPrefix: true, respectImportant: false }, Array.isArray(d) ? {} : d);
    for (let [y, m] of dn(c)) {
      let g = l(y, d);
      a.add(g), e.candidateRuleMap.has(g) || e.candidateRuleMap.set(g, []), e.candidateRuleMap.get(g).push([{ sort: i.create("components"), layer: "components", options: d }, m]);
    }
  }, addUtilities(c, d) {
    d = Object.assign({}, { preserveSource: false, respectPrefix: true, respectImportant: true }, Array.isArray(d) ? {} : d);
    for (let [y, m] of dn(c)) {
      let g = l(y, d);
      a.add(g), e.candidateRuleMap.has(g) || e.candidateRuleMap.set(g, []), e.candidateRuleMap.get(g).push([{ sort: i.create("utilities"), layer: "utilities", options: d }, m]);
    }
  }, matchUtilities: function(c, d) {
    d = bf({ ...{ respectPrefix: true, respectImportant: true, modifiers: false }, ...d });
    let y = i.create("utilities");
    for (let m in c) {
      let b = function(O, { isOnlyPlugin: x }) {
        let [C, A, R] = Es(d.types, O, d, t);
        if (C === void 0) return [];
        if (!d.types.some(({ type: K }) => K === A)) if (x) D.warn([`Unnecessary typehint \`${A}\` in \`${m}-${O}\`.`, `You can safely update it to \`${m}-${O.replace(A + ":", "")}\`.`]);
        else return [];
        if (!lt(C)) return [];
        let L = { get modifier() {
          return d.modifiers || D.warn(`modifier-used-without-options-for-${m}`, ["Your plugin must set `modifiers: true` in its options to support modifiers."]), R;
        } }, B = G(t, "generalizedModifiers");
        return [].concat(B ? v(C, L) : v(C)).filter(Boolean).map((K) => ({ [on(m, O)]: K }));
      }, g = l(m, d), v = c[m];
      a.add([g, d]);
      let w = [{ sort: y, layer: "utilities", options: d }, b];
      e.candidateRuleMap.has(g) || e.candidateRuleMap.set(g, []), e.candidateRuleMap.get(g).push(w);
    }
  }, matchComponents: function(c, d) {
    d = bf({ ...{ respectPrefix: true, respectImportant: false, modifiers: false }, ...d });
    let y = i.create("components");
    for (let m in c) {
      let b = function(O, { isOnlyPlugin: x }) {
        let [C, A, R] = Es(d.types, O, d, t);
        if (C === void 0) return [];
        if (!d.types.some(({ type: K }) => K === A)) if (x) D.warn([`Unnecessary typehint \`${A}\` in \`${m}-${O}\`.`, `You can safely update it to \`${m}-${O.replace(A + ":", "")}\`.`]);
        else return [];
        if (!lt(C)) return [];
        let L = { get modifier() {
          return d.modifiers || D.warn(`modifier-used-without-options-for-${m}`, ["Your plugin must set `modifiers: true` in its options to support modifiers."]), R;
        } }, B = G(t, "generalizedModifiers");
        return [].concat(B ? v(C, L) : v(C)).filter(Boolean).map((K) => ({ [on(m, O)]: K }));
      }, g = l(m, d), v = c[m];
      a.add([g, d]);
      let w = [{ sort: y, layer: "components", options: d }, b];
      e.candidateRuleMap.has(g) || e.candidateRuleMap.set(g, []), e.candidateRuleMap.get(g).push(w);
    }
  }, addVariant(c, d, h = {}) {
    d = [].concat(d).map((y) => {
      if (typeof y != "string") return (m = {}) => {
        let { args: g, modifySelectors: v, container: b, separator: w, wrap: O, format: x } = m, C = y(Object.assign({ modifySelectors: v, container: b, separator: w }, h.type === Ns.MatchVariant && { args: g, wrap: O, format: x }));
        if (typeof C == "string" && !hn(C)) throw new Error(`Your custom variant \`${c}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
        return Array.isArray(C) ? C.filter((A) => typeof A == "string").map((A) => lr(A)) : C && typeof C == "string" && lr(C)(m);
      };
      if (!hn(y)) throw new Error(`Your custom variant \`${c}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
      return lr(y);
    }), fw(r, c, h), n.set(c, d), e.variantOptions.set(c, h);
  }, matchVariant(c, d, h) {
    var b, w, O;
    let y = (b = h == null ? void 0 : h.id) != null ? b : ++f, m = c === "@", g = G(t, "generalizedModifiers");
    for (let [x, C] of Object.entries((w = h == null ? void 0 : h.values) != null ? w : {})) x !== "DEFAULT" && p.addVariant(m ? `${c}${x}` : `${c}-${x}`, ({ args: A, container: R }) => d(C, g ? { modifier: A == null ? void 0 : A.modifier, container: R } : { container: R }), { ...h, value: C, id: y, type: Ns.MatchVariant, variantInfo: qs.Base });
    let v = "DEFAULT" in ((O = h == null ? void 0 : h.values) != null ? O : {});
    p.addVariant(c, ({ args: x, container: C }) => {
      var A;
      return (x == null ? void 0 : x.value) === mt && !v ? null : d((x == null ? void 0 : x.value) === mt ? h.values.DEFAULT : (A = x == null ? void 0 : x.value) != null ? A : typeof x == "string" ? x : "", g ? { modifier: x == null ? void 0 : x.modifier, container: C } : { container: C });
    }, { ...h, id: y, type: Ns.MatchVariant, variantInfo: qs.Dynamic });
  } };
  return p;
}
function Of(t) {
  t.walkAtRules((e) => {
    ["responsive", "variants"].includes(e.name) && (Of(e), e.before(e.nodes), e.remove());
  });
}
function dw(t) {
  let e = [];
  return t.each((r) => {
    r.type === "atrule" && ["responsive", "variants"].includes(r.name) && (r.name = "layer", r.params = "utilities");
  }), t.walkAtRules("layer", (r) => {
    if (Of(r), r.params === "base") {
      for (let n of r.nodes) e.push(function({ addBase: i }) {
        i(n, { respectPrefix: false });
      });
      r.remove();
    } else if (r.params === "components") {
      for (let n of r.nodes) e.push(function({ addComponents: i }) {
        i(n, { respectPrefix: false, preserveSource: true });
      });
      r.remove();
    } else if (r.params === "utilities") {
      for (let n of r.nodes) e.push(function({ addUtilities: i }) {
        i(n, { respectPrefix: false, preserveSource: true });
      });
      r.remove();
    }
  }), e;
}
function hw(t, e) {
  let r = Object.entries({ ...ne, ...mf }).map(([o, l]) => t.tailwindConfig.corePlugins.includes(o) ? l : null).filter(Boolean), n = t.tailwindConfig.plugins.map((o) => (o.__isOptionsFunction && (o = o()), typeof o == "function" ? o : o.handler)), i = dw(e), a = [ne.pseudoElementVariants, ne.pseudoClassVariants, ne.ariaVariants, ne.dataVariants], s = [ne.supportsVariants, ne.directionVariants, ne.reducedMotionVariants, ne.prefersContrastVariants, ne.darkVariants, ne.printVariant, ne.screenVariants, ne.orientationVariants];
  return [...r, ...a, ...n, ...s, ...i];
}
function mw(t, e) {
  var f, p, c;
  let r = [], n = /* @__PURE__ */ new Map();
  e.variantMap = n;
  let i = new pn();
  e.offsets = i;
  let a = /* @__PURE__ */ new Set(), s = pw(e.tailwindConfig, e, { variantList: r, variantMap: n, offsets: i, classList: a });
  for (let d of t) if (Array.isArray(d)) for (let h of d) h(s);
  else d == null || d(s);
  i.recordVariants(r, (d) => n.get(d).length);
  for (let [d, h] of n.entries()) e.variantMap.set(d, h.map((y, m) => [i.forVariant(d, m), y]));
  let o = ((f = e.tailwindConfig.safelist) != null ? f : []).filter(Boolean);
  if (o.length > 0) {
    let d = [];
    for (let h of o) {
      if (typeof h == "string") {
        e.changedContent.push({ content: h, extension: "html" });
        continue;
      }
      if (h instanceof RegExp) {
        D.warn("root-regex", ["Regular expressions in `safelist` work differently in Tailwind CSS v3.0.", "Update your `safelist` configuration to eliminate this warning.", "https://tailwindcss.com/docs/content-configuration#safelisting-classes"]);
        continue;
      }
      d.push(h);
    }
    if (d.length > 0) {
      let h = /* @__PURE__ */ new Map(), y = e.tailwindConfig.prefix.length, m = d.some((g) => g.pattern.source.includes("!"));
      for (let g of a) {
        let v = Array.isArray(g) ? (() => {
          var C;
          let [b, w] = g, x = Object.keys((C = w == null ? void 0 : w.values) != null ? C : {}).map((A) => or(b, A));
          return w != null && w.supportsNegativeValues && (x = [...x, ...x.map((A) => "-" + A)], x = [...x, ...x.map((A) => A.slice(0, y) + "-" + A.slice(y))]), w.types.some(({ type: A }) => A === "color") && (x = [...x, ...x.flatMap((A) => Object.keys(e.tailwindConfig.theme.opacity).map((R) => `${A}/${R}`))]), m && (w == null ? void 0 : w.respectImportant) && (x = [...x, ...x.map((A) => "!" + A)]), x;
        })() : [g];
        for (let b of v) for (let { pattern: w, variants: O = [] } of d) if (w.lastIndex = 0, h.has(w) || h.set(w, 0), !!w.test(b)) {
          h.set(w, h.get(w) + 1), e.changedContent.push({ content: b, extension: "html" });
          for (let x of O) e.changedContent.push({ content: x + e.tailwindConfig.separator + b, extension: "html" });
        }
      }
      for (let [g, v] of h.entries()) v === 0 && D.warn([`The safelist pattern \`${g}\` doesn't match any Tailwind CSS classes.`, "Fix this pattern or remove it from your `safelist` configuration.", "https://tailwindcss.com/docs/content-configuration#safelisting-classes"]);
    }
  }
  let l = (c = [].concat((p = e.tailwindConfig.darkMode) != null ? p : "media")[1]) != null ? c : "dark", u = [Fs(e, l), Fs(e, "group"), Fs(e, "peer")];
  e.getClassOrder = function(h) {
    let y = new Map(h.map((v) => [v, null])), m = mn(new Set(h), e);
    m = e.offsets.sort(m);
    let g = BigInt(u.length);
    for (let [, v] of m) y.set(v.raws.tailwind.candidate, g++);
    return h.map((v) => {
      var O;
      let b = (O = y.get(v)) != null ? O : null, w = u.indexOf(v);
      return b === null && w !== -1 && (b = BigInt(w)), [v, b];
    });
  }, e.getClassList = function(h = {}) {
    var m, g, v, b;
    let y = [];
    for (let w of a) if (Array.isArray(w)) {
      let [O, x] = w, C = [], A = Object.keys((m = x == null ? void 0 : x.modifiers) != null ? m : {});
      (g = x == null ? void 0 : x.types) != null && g.some(({ type: B }) => B === "color") && A.push(...Object.keys((v = e.tailwindConfig.theme.opacity) != null ? v : {}));
      let R = { modifiers: A }, L = h.includeMetadata && A.length > 0;
      for (let [B, Q] of Object.entries((b = x == null ? void 0 : x.values) != null ? b : {})) {
        if (Q == null) continue;
        let K = or(O, B);
        if (y.push(L ? [K, R] : K), (x == null ? void 0 : x.supportsNegativeValues) && De(Q)) {
          let $e = or(O, `-${B}`);
          C.push(L ? [$e, R] : $e);
        }
      }
      y.push(...C);
    } else y.push(w);
    return y;
  }, e.getVariants = function() {
    var y;
    let h = [];
    for (let [m, g] of e.variantOptions.entries()) g.variantInfo !== qs.Base && h.push({ name: m, isArbitrary: g.type === Symbol.for("MATCH_VARIANT"), values: Object.keys((y = g.values) != null ? y : {}), hasDash: m !== "@", selectors({ modifier: v, value: b } = {}) {
      var Sa, ka, Oa, Aa;
      let w = "__TAILWIND_PLACEHOLDER__", O = I.rule({ selector: `.${w}` }), x = I.root({ nodes: [O.clone()] }), C = x.toString(), A = ((Sa = e.variantMap.get(m)) != null ? Sa : []).flatMap(([ie, se]) => se), R = [];
      for (let ie of A) {
        let se = [], hr = { args: { modifier: v, value: (Oa = (ka = g.values) == null ? void 0 : ka[b]) != null ? Oa : b }, separator: e.tailwindConfig.separator, modifySelectors(pe) {
          return x.each((Ln) => {
            Ln.type === "rule" && (Ln.selectors = Ln.selectors.map((Ea) => pe({ get className() {
              return Us(Ea);
            }, selector: Ea })));
          }), x;
        }, format(pe) {
          se.push(pe);
        }, wrap(pe) {
          se.push(`@${pe.name} ${pe.params} { & }`);
        }, container: x }, mr = ie(hr);
        if (se.length > 0 && R.push(se), Array.isArray(mr)) for (let pe of mr) se = [], pe(hr), R.push(se);
      }
      let L = [], B = x.toString();
      C !== B && (x.walkRules((ie) => {
        let se = ie.selector, hr = (0, $s.default)((mr) => {
          mr.walkClasses((pe) => {
            pe.value = `${m}${e.tailwindConfig.separator}${pe.value}`;
          });
        }).processSync(se);
        L.push(se.replace(hr, "&").replace(w, "&"));
      }), x.walkAtRules((ie) => {
        L.push(`@${ie.name} (${ie.params}) { & }`);
      }));
      let Q = !(b in ((Aa = g.values) != null ? Aa : {}));
      R = R.map((ie) => ie.map((se) => ({ format: se, isArbitraryVariant: Q }))), L = L.map((ie) => ({ format: ie, isArbitraryVariant: Q }));
      let K = { candidate: w, context: e }, $e = R.map((ie) => an(`.${w}`, ot(ie, K), K).replace(`.${w}`, "&").replace("{ & }", "").trim());
      return L.length > 0 && $e.push(ot(L, K).toString().replace(`.${w}`, "&")), $e;
    } });
    return h;
  };
}
function Af(t, e) {
  !t.classCache.has(e) || (t.notClassCache.add(e), t.classCache.delete(e), t.applyClassCache.delete(e), t.candidateRuleMap.delete(e), t.candidateRuleCache.delete(e), t.stylesheetCache = null);
}
function gw(t, e) {
  let r = e.raws.tailwind.candidate;
  if (!!r) {
    for (let n of t.ruleCache) n[1].raws.tailwind.candidate === r && t.ruleCache.delete(n);
    Af(t, r);
  }
}
function Ef(t, e = [], r = I.root()) {
  var a;
  let n = { disposables: [], ruleCache: /* @__PURE__ */ new Set(), candidateRuleCache: /* @__PURE__ */ new Map(), classCache: /* @__PURE__ */ new Map(), applyClassCache: /* @__PURE__ */ new Map(), notClassCache: new Set((a = t.blocklist) != null ? a : []), postCssNodeCache: /* @__PURE__ */ new Map(), candidateRuleMap: /* @__PURE__ */ new Map(), tailwindConfig: t, changedContent: e, variantMap: /* @__PURE__ */ new Map(), stylesheetCache: null, variantOptions: /* @__PURE__ */ new Map(), markInvalidUtilityCandidate: (s) => Af(n, s), markInvalidUtilityNode: (s) => gw(n, s) }, i = hw(n, r);
  return mw(i, n), n;
}
var yw = (0, yn.default)((t) => t.first.filter(({ type: e }) => e === "class").pop().value);
function Us(t) {
  return yw.transformSync(t);
}
function* vw(t) {
  let e = 1 / 0;
  for (; e >= 0; ) {
    let r, n = false;
    if (e === 1 / 0 && t.endsWith("]")) {
      let s = t.indexOf("[");
      t[s - 1] === "-" ? r = s - 1 : t[s - 1] === "/" ? (r = s - 1, n = true) : r = -1;
    } else e === 1 / 0 && t.includes("/") ? (r = t.lastIndexOf("/"), n = true) : r = t.lastIndexOf("-", e);
    if (r < 0) break;
    let i = t.slice(0, r), a = t.slice(n ? r : r + 1);
    e = r - 1, !(i === "" || a === "/") && (yield [i, a]);
  }
}
function ww(t, e) {
  if (t.length === 0 || e.tailwindConfig.prefix === "") return t;
  for (let r of t) {
    let [n] = r;
    if (n.options.respectPrefix) {
      let i = I.root({ nodes: [r[1].clone()] }), a = r[1].raws.tailwind.classCandidate;
      i.walkRules((s) => {
        let o = a.startsWith("-");
        s.selector = st(e.tailwindConfig.prefix, s.selector, o);
      }), r[1] = i.nodes[0];
    }
  }
  return t;
}
function bw(t, e) {
  if (t.length === 0) return t;
  let r = [];
  for (let [n, i] of t) {
    let a = I.root({ nodes: [i.clone()] });
    a.walkRules((s) => {
      let o = (0, yn.default)().astSync(s.selector);
      o.each((l) => Ps(l, e)), nf(o, (l) => l === e ? `!${l}` : l), s.selector = o.toString(), s.walkDecls((l) => l.important = true);
    }), r.push([{ ...n, important: true }, a.nodes[0]]);
  }
  return r;
}
function xw(t, e, r) {
  var i;
  if (e.length === 0) return e;
  let n = { modifier: null, value: mt };
  {
    let [a, ...s] = te(t, "/");
    if (s.length > 1 && (a = a + "/" + s.slice(0, -1).join("/"), s = s.slice(-1)), s.length && !r.variantMap.has(t) && (t = a, n.modifier = s[0], !G(r.tailwindConfig, "generalizedModifiers"))) return [];
  }
  if (t.endsWith("]") && !t.startsWith("[")) {
    let a = /(.)(-?)\[(.*)\]/g.exec(t);
    if (a) {
      let [, s, o, l] = a;
      if (s === "@" && o === "-") return [];
      if (s !== "@" && o === "") return [];
      t = t.replace(`${o}[${l}]`, ""), n.value = l;
    }
  }
  if (Vs(t) && !r.variantMap.has(t)) {
    let a = V(t.slice(1, -1));
    if (!hn(a)) return [];
    let s = lr(a), o = r.offsets.recordVariant(t);
    r.variantMap.set(t, [[o, s]]);
  }
  if (r.variantMap.has(t)) {
    let a = Vs(t), s = r.variantMap.get(t).slice(), o = [];
    for (let [l, u] of e) {
      if (l.layer === "user") continue;
      let f = I.root({ nodes: [u.clone()] });
      for (let [p, c, d] of s) {
        let m = function() {
          h.raws.neededBackup || (h.raws.neededBackup = true, h.walkRules((w) => w.raws.originalSelector = w.selector));
        }, g = function(w) {
          return m(), h.each((O) => {
            O.type === "rule" && (O.selectors = O.selectors.map((x) => w({ get className() {
              return Us(x);
            }, selector: x })));
          }), h;
        }, h = (d != null ? d : f).clone(), y = [], v = c({ get container() {
          return m(), h;
        }, separator: r.tailwindConfig.separator, modifySelectors: g, wrap(w) {
          let O = h.nodes;
          h.removeAll(), w.append(O), h.append(w);
        }, format(w) {
          y.push({ format: w, isArbitraryVariant: a });
        }, args: n });
        if (Array.isArray(v)) {
          for (let [w, O] of v.entries()) s.push([r.offsets.applyParallelOffset(p, w), O, h.clone()]);
          continue;
        }
        if (typeof v == "string" && y.push({ format: v, isArbitraryVariant: a }), v === null) continue;
        h.raws.neededBackup && (delete h.raws.neededBackup, h.walkRules((w) => {
          let O = w.raws.originalSelector;
          if (!O || (delete w.raws.originalSelector, O === w.selector)) return;
          let x = w.selector, C = (0, yn.default)((A) => {
            A.walkClasses((R) => {
              R.value = `${t}${r.tailwindConfig.separator}${R.value}`;
            });
          }).processSync(O);
          y.push({ format: x.replace(C, "&"), isArbitraryVariant: a }), w.selector = O;
        })), h.nodes[0].raws.tailwind = { ...h.nodes[0].raws.tailwind, parentLayer: l.layer };
        let b = [{ ...l, sort: r.offsets.applyVariantOffset(l.sort, p, Object.assign(n, r.variantOptions.get(t))), collectedFormats: ((i = l.collectedFormats) != null ? i : []).concat(y) }, h.nodes[0]];
        o.push(b);
      }
    }
    return o;
  }
  return [];
}
function js(t, e, r = {}) {
  return !X(t) && !Array.isArray(t) ? [[t], r] : Array.isArray(t) ? js(t[0], e, t[1]) : (e.has(t) || e.set(t, it(t)), [e.get(t), r]);
}
var Sw = /^[a-z_-]/;
function kw(t) {
  return Sw.test(t);
}
function Ow(t) {
  if (!t.includes("://")) return false;
  try {
    let e = new URL(t);
    return e.scheme !== "" && e.host !== "";
  } catch {
    return false;
  }
}
function Cf(t) {
  let e = true;
  return t.walkDecls((r) => {
    if (!_f(r.prop, r.value)) return e = false, false;
  }), e;
}
function _f(t, e) {
  if (Ow(`${t}:${e}`)) return false;
  try {
    return I.parse(`a{${t}:${e}}`).toResult(), true;
  } catch {
    return false;
  }
}
function Aw(t, e) {
  var s;
  let [, r, n] = (s = t.match(/^\[([a-zA-Z0-9-_]+):(\S+)\]$/)) != null ? s : [];
  if (n === void 0 || !kw(r) || !lt(n)) return null;
  let i = V(n);
  return _f(r, i) ? [[{ sort: e.offsets.arbitraryProperty(), layer: "utilities" }, () => ({ [Rs(t)]: { [r]: i } })]] : null;
}
function* Ew(t, e) {
  e.candidateRuleMap.has(t) && (yield [e.candidateRuleMap.get(t), "DEFAULT"]), yield* function* (o) {
    o !== null && (yield [o, "DEFAULT"]);
  }(Aw(t, e));
  let r = t, n = false, i = e.tailwindConfig.prefix, a = i.length, s = r.startsWith(i) || r.startsWith(`-${i}`);
  r[a] === "-" && s && (n = true, r = i + r.slice(a + 1)), n && e.candidateRuleMap.has(r) && (yield [e.candidateRuleMap.get(r), "-DEFAULT"]);
  for (let [o, l] of vw(r)) e.candidateRuleMap.has(o) && (yield [e.candidateRuleMap.get(o), n ? `-${l}` : l]);
}
function Cw(t, e) {
  return t === ke ? [ke] : te(t, e);
}
function* _w(t, e) {
  var r, n;
  for (let i of t) i[1].raws.tailwind = { ...i[1].raws.tailwind, classCandidate: e, preserveSource: (n = (r = i[0].options) == null ? void 0 : r.preserveSource) != null ? n : false }, yield i;
}
function* vn(t, e, r = t) {
  var o, l, u, f;
  let n = e.tailwindConfig.separator, [i, ...a] = Cw(t, n).reverse(), s = false;
  if (i.startsWith("!") && (s = true, i = i.slice(1)), G(e.tailwindConfig, "variantGrouping") && i.startsWith("(") && i.endsWith(")")) {
    let p = a.slice().reverse().join(n);
    for (let c of te(i.slice(1, -1), ",")) yield* vn(p + n + c, e, r);
  }
  for (let p of Ew(i, e)) {
    let c = [], d = /* @__PURE__ */ new Map(), [h, y] = p, m = h.length === 1;
    for (let [g, v] of h) {
      let b = [];
      if (typeof v == "function") for (let w of [].concat(v(y, { isOnlyPlugin: m }))) {
        let [O, x] = js(w, e.postCssNodeCache);
        for (let C of O) b.push([{ ...g, options: { ...g.options, ...x } }, C]);
      }
      else if (y === "DEFAULT" || y === "-DEFAULT") {
        let w = v, [O, x] = js(w, e.postCssNodeCache);
        for (let C of O) b.push([{ ...g, options: { ...g.options, ...x } }, C]);
      }
      if (b.length > 0) {
        let w = Array.from(Cs((l = (o = g.options) == null ? void 0 : o.types) != null ? l : [], y, (u = g.options) != null ? u : {}, e.tailwindConfig)).map(([O, x]) => x);
        w.length > 0 && d.set(b, w), c.push(b);
      }
    }
    if (Vs(y)) {
      if (c.length > 1) {
        let b = function(O) {
          return O.length === 1 ? O[0] : O.find((x) => {
            let C = d.get(x);
            return x.some(([{ options: A }, R]) => Cf(R) ? A.types.some(({ type: L, preferOnConflict: B }) => C.includes(L) && B) : false);
          });
        }, [g, v] = c.reduce((O, x) => (x.some(([{ options: A }]) => A.types.some(({ type: R }) => R === "any")) ? O[0].push(x) : O[1].push(x), O), [[], []]), w = (f = b(v)) != null ? f : b(g);
        if (w) c = [w];
        else {
          let O = c.map((C) => {
            var A;
            return /* @__PURE__ */ new Set([...(A = d.get(C)) != null ? A : []]);
          });
          for (let C of O) for (let A of C) {
            let R = false;
            for (let L of O) C !== L && L.has(A) && (L.delete(A), R = true);
            R && C.delete(A);
          }
          let x = [];
          for (let [C, A] of O.entries()) for (let R of A) {
            let L = c[C].map(([, B]) => B).flat().map((B) => B.toString().split(`
`).slice(1, -1).map((Q) => Q.trim()).map((Q) => `      ${Q}`).join(`
`)).join(`

`);
            x.push(`  Use \`${t.replace("[", `[${R}:`)}\` for \`${L.trim()}\``);
            break;
          }
          D.warn([`The class \`${t}\` is ambiguous and matches multiple utilities.`, ...x, `If this is content and not a class, replace it with \`${t.replace("[", "&lsqb;").replace("]", "&rsqb;")}\` to silence this warning.`]);
          continue;
        }
      }
      c = c.map((g) => g.filter((v) => Cf(v[1])));
    }
    c = c.flat(), c = Array.from(_w(c, i)), c = ww(c, e), s && (c = bw(c, i));
    for (let g of a) c = xw(g, c, e);
    for (let g of c) g[1].raws.tailwind = { ...g[1].raws.tailwind, candidate: t }, g = Tw(g, { context: e, candidate: t, original: r }), g !== null && (yield g);
  }
}
function Tw(t, { context: e, candidate: r, original: n }) {
  if (!t[0].collectedFormats) return t;
  let i = true, a;
  try {
    a = ot(t[0].collectedFormats, { context: e, candidate: r });
  } catch {
    return null;
  }
  let s = I.root({ nodes: [t[1].clone()] });
  return s.walkRules((o) => {
    if (!gn(o)) try {
      o.selector = an(o.selector, a, { candidate: n, context: e });
    } catch {
      return i = false, false;
    }
  }), i ? (t[1] = s.nodes[0], t) : null;
}
function gn(t) {
  return t.parent && t.parent.type === "atrule" && t.parent.name === "keyframes";
}
function Pw(t) {
  if (t === true) return (e) => {
    gn(e) || e.walkDecls((r) => {
      r.parent.type === "rule" && !gn(r.parent) && (r.important = true);
    });
  };
  if (typeof t == "string") return (e) => {
    gn(e) || (e.selectors = e.selectors.map((r) => `${t} ${r}`));
  };
}
function mn(t, e) {
  var i;
  let r = [], n = Pw(e.tailwindConfig.important);
  for (let a of t) {
    if (e.notClassCache.has(a)) continue;
    if (e.candidateRuleCache.has(a)) {
      r = r.concat(Array.from(e.candidateRuleCache.get(a)));
      continue;
    }
    let s = Array.from(vn(a, e));
    if (s.length === 0) {
      e.notClassCache.add(a);
      continue;
    }
    e.classCache.set(a, s);
    let o = (i = e.candidateRuleCache.get(a)) != null ? i : /* @__PURE__ */ new Set();
    e.candidateRuleCache.set(a, o);
    for (let l of s) {
      let [{ sort: u, options: f }, p] = l;
      if (f.respectImportant && n) {
        let d = I.root({ nodes: [p.clone()] });
        d.walkRules(n), p = d.nodes[0];
      }
      let c = [u, p];
      o.add(c), e.ruleCache.add(c), r.push(c);
    }
  }
  return r;
}
function Vs(t) {
  return t.startsWith("[") && t.endsWith("]");
}
function Ge(t, e = void 0, r = void 0) {
  return t.map((n) => {
    var s;
    let i = n.clone(), a = ((s = n.raws.tailwind) == null ? void 0 : s.preserveSource) !== true || !i.source;
    return e !== void 0 && a && (i.source = e, "walk" in i && i.walk((o) => {
      o.source = e;
    })), r !== void 0 && (i.raws.tailwind = { ...i.raws.tailwind, ...r }), i;
  });
}
var Tf = /[\\^$.*+?()[\]{}|]/g;
var Rw = RegExp(Tf.source);
function wn(t) {
  return t = Array.isArray(t) ? t : [t], t = t.map((e) => e instanceof RegExp ? e.source : e), t.join("");
}
function ce(t) {
  return new RegExp(wn(t), "g");
}
function ut(t) {
  return `(?:${t.map(wn).join("|")})`;
}
function zs(t) {
  return `(?:${wn(t)})?`;
}
function Pf(t) {
  return `(?:${wn(t)})*`;
}
function Rf(t) {
  return t && Rw.test(t) ? t.replace(Tf, "\\$&") : t || "";
}
function If(t) {
  let e = Array.from(Dw(t));
  return (r) => {
    var i;
    let n = [];
    for (let a of e) n = [...n, ...(i = r.match(a)) != null ? i : []];
    return n.filter((a) => a !== void 0).map(Nw);
  };
}
function* Dw(t) {
  let e = t.tailwindConfig.separator, r = G(t.tailwindConfig, "variantGrouping"), n = t.tailwindConfig.prefix !== "" ? zs(ce([/-?/, Rf(t.tailwindConfig.prefix)])) : "", i = ut([/\[[^\s:'"`]+:[^\s\[\]]+\]/, /\[[^\s:'"`]+:[^\s]+?\[[^\s]+?\][^\s]+?\]/, ce([/-?(?:\w+)/, zs(ut([ce([/-(?:\w+-)*\[[^\s:]+\]/, /(?![{([]])/, /(?:\/[^\s'"`\\><$]*)?/]), ce([/-(?:\w+-)*\[[^\s]+\]/, /(?![{([]])/, /(?:\/[^\s'"`\\$]*)?/]), /[-\/][^\s'"`\\$={><]*/]))])]), a = [ut([ce([/@\[[^\s"'`]+\](\/[^\s"'`]+)?/, e]), ce([/([^\s"'`\[\\]+-)?\[[^\s"'`]+\]/, e]), ce([/[^\s"'`\[\\]+/, e])]), ut([ce([/([^\s"'`\[\\]+-)?\[[^\s`]+\]/, e]), ce([/[^\s`\[\\]+/, e])])];
  for (let s of a) yield ce(["((?=((", s, ")+))\\2)?", /!?/, n, r ? ut([ce([/\(/, i, Pf([/,/, i]), /\)/]), i]) : i]);
  yield /[^<>"'`\s.(){}[\]#=%$]*[^<>"'`\s.(){}[\]#=%:$]/g;
}
var Mw = /([\[\]'"`])([^\[\]'"`])?/g;
var Lw = /[^"'`\s<>\]]+/;
function Nw(t) {
  if (!t.includes("-[")) return t;
  let e = 0, r = [], n = t.matchAll(Mw);
  n = Array.from(n).flatMap((i) => {
    let [, ...a] = i;
    return a.map((s, o) => Object.assign([], i, { index: i.index + o, 0: s }));
  });
  for (let i of n) {
    let a = i[0], s = r[r.length - 1];
    if (a === s ? r.pop() : (a === "'" || a === '"' || a === "`") && r.push(a), !s) {
      if (a === "[") {
        e++;
        continue;
      } else if (a === "]") {
        e--;
        continue;
      }
      if (e < 0) return t.substring(0, i.index - 1);
      if (e === 0 && !Lw.test(a)) return t.substring(0, i.index);
    }
  }
  return t;
}
var me = Un;
var Lf = { DEFAULT: If };
var Nf = { DEFAULT: (t) => t, svelte: (t) => t.replace(/(?:^|\s)class:/g, " ") };
function qw(t, e) {
  let r = t.tailwindConfig.content.extract;
  return r[e] || r.DEFAULT || Lf[e] || Lf.DEFAULT(t);
}
function $w(t, e) {
  let r = t.content.transform;
  return r[e] || r.DEFAULT || Nf[e] || Nf.DEFAULT;
}
var ur = /* @__PURE__ */ new WeakMap();
function Uw(t, e, r, n) {
  ur.has(e) || ur.set(e, new Ff.default({ maxSize: 25e3 }));
  for (let i of t.split(`
`)) if (i = i.trim(), !n.has(i)) if (n.add(i), ur.get(e).has(i)) for (let a of ur.get(e).get(i)) r.add(a);
  else {
    let a = e(i).filter((o) => o !== "!*"), s = new Set(a);
    for (let o of s) r.add(o);
    ur.get(e).set(i, s);
  }
}
function jw(t, e) {
  let r = e.offsets.sort(t), n = { base: /* @__PURE__ */ new Set(), defaults: /* @__PURE__ */ new Set(), components: /* @__PURE__ */ new Set(), utilities: /* @__PURE__ */ new Set(), variants: /* @__PURE__ */ new Set() };
  for (let [i, a] of r) n[i.layer].add(a);
  return n;
}
function Ws(t) {
  return (e) => {
    var h;
    let r = { base: null, components: null, utilities: null, variants: null };
    if (e.walkAtRules((y) => {
      y.name === "tailwind" && Object.keys(r).includes(y.params) && (r[y.params] = y);
    }), Object.values(r).every((y) => y === null)) return e;
    let n = /* @__PURE__ */ new Set([...(h = t.candidates) != null ? h : [], ke]), i = /* @__PURE__ */ new Set();
    if (me.DEBUG && console.time("Reading changed files"), me.OXIDE) for (let y of (Mf(), _e(Df)).parseCandidateStringsFromFiles(t.changedContent)) n.add(y);
    else for (let { file: y, content: m, extension: g } of t.changedContent) {
      let v = $w(t.tailwindConfig, g), b = qw(t, g);
      m = y ? ht.readFileSync(y, "utf8") : m, Uw(v(m), b, n, i);
    }
    me.DEBUG && console.timeEnd("Reading changed files");
    let a = t.classCache.size;
    me.DEBUG && console.time("Generate rules"), me.DEBUG && console.time("Sorting candidates");
    let s = me.OXIDE ? n : new Set([...n].sort((y, m) => y === m ? 0 : y < m ? -1 : 1));
    me.DEBUG && console.timeEnd("Sorting candidates"), mn(s, t), me.DEBUG && console.timeEnd("Generate rules"), me.DEBUG && console.time("Build stylesheet"), (t.stylesheetCache === null || t.classCache.size !== a) && (t.stylesheetCache = jw([...t.ruleCache], t)), me.DEBUG && console.timeEnd("Build stylesheet");
    let { defaults: o, base: l, components: u, utilities: f, variants: p } = t.stylesheetCache;
    r.base && (r.base.before(Ge([...l, ...o], r.base.source, { layer: "base" })), r.base.remove()), r.components && (r.components.before(Ge([...u], r.components.source, { layer: "components" })), r.components.remove()), r.utilities && (r.utilities.before(Ge([...f], r.utilities.source, { layer: "utilities" })), r.utilities.remove());
    let c = Array.from(p).filter((y) => {
      var g;
      let m = (g = y.raws.tailwind) == null ? void 0 : g.parentLayer;
      return m === "components" ? r.components !== null : m === "utilities" ? r.utilities !== null : true;
    });
    r.variants ? (r.variants.before(Ge(c, r.variants.source, { layer: "variants" })), r.variants.remove()) : c.length > 0 && e.append(Ge(c, e.source, { layer: "variants" }));
    let d = c.some((y) => {
      var m;
      return ((m = y.raws.tailwind) == null ? void 0 : m.parentLayer) === "utilities";
    });
    r.utilities && f.size === 0 && !d && D.warn("content-problems", ["No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.", "https://tailwindcss.com/docs/content-configuration"]), me.DEBUG && (console.log("Potential classes: ", n.size), console.log("Active contexts: ", jn.size)), t.changedContent = [], e.walkAtRules("layer", (y) => {
      Object.keys(r).includes(y.params) && y.remove();
    });
  };
}
var Gs = Y(Ee());
function bn(t) {
  let e = /* @__PURE__ */ new Map();
  I.root({ nodes: [t.clone()] }).walkRules((a) => {
    (0, Gs.default)((s) => {
      s.walkClasses((o) => {
        let l = o.parent.toString(), u = e.get(l);
        u || e.set(l, u = /* @__PURE__ */ new Set()), u.add(o.value);
      });
    }).processSync(a.selector);
  });
  let n = Array.from(e.values(), (a) => Array.from(a)), i = n.flat();
  return Object.assign(i, { groups: n });
}
var Vw = (0, Gs.default)();
function Bs(t) {
  return Vw.astSync(t);
}
function qf(t, e) {
  let r = /* @__PURE__ */ new Set();
  for (let n of t) r.add(n.split(e).pop());
  return Array.from(r);
}
function $f(t, e) {
  let r = t.tailwindConfig.prefix;
  return typeof r == "function" ? r(e) : r + e;
}
function* jf(t) {
  for (yield t; t.parent; ) yield t.parent, t = t.parent;
}
function zw(t, e = {}) {
  let r = t.nodes;
  t.nodes = [];
  let n = t.clone(e);
  return t.nodes = r, n;
}
function Ww(t) {
  for (let e of jf(t)) if (t !== e) {
    if (e.type === "root") break;
    t = zw(e, { nodes: [t] });
  }
  return t;
}
function Bw(t, e) {
  let r = /* @__PURE__ */ new Map();
  return t.walkRules((n) => {
    var s;
    for (let o of jf(n)) if (((s = o.raws.tailwind) == null ? void 0 : s.layer) !== void 0) return;
    let i = Ww(n), a = e.offsets.create("user");
    for (let o of bn(n)) {
      let l = r.get(o) || [];
      r.set(o, l), l.push([{ layer: "user", sort: a, important: false }, i]);
    }
  }), r;
}
function Gw(t, e) {
  for (let r of t) {
    if (e.notClassCache.has(r) || e.applyClassCache.has(r)) continue;
    if (e.classCache.has(r)) {
      e.applyClassCache.set(r, e.classCache.get(r).map(([i, a]) => [i, a.clone()]));
      continue;
    }
    let n = Array.from(vn(r, e));
    if (n.length === 0) {
      e.notClassCache.add(r);
      continue;
    }
    e.applyClassCache.set(r, n);
  }
  return e.applyClassCache;
}
function Yw(t) {
  let e = null;
  return { get: (r) => (e = e || t(), e.get(r)), has: (r) => (e = e || t(), e.has(r)) };
}
function Hw(t) {
  return { get: (e) => t.flatMap((r) => r.get(e) || []), has: (e) => t.some((r) => r.has(e)) };
}
function Uf(t) {
  let e = t.split(/[\s\t\n]+/g);
  return e[e.length - 1] === "!important" ? [e.slice(0, -1), true] : [e, false];
}
function Vf(t, e, r) {
  let n = /* @__PURE__ */ new Set(), i = [];
  if (t.walkAtRules("apply", (l) => {
    let [u] = Uf(l.params);
    for (let f of u) n.add(f);
    i.push(l);
  }), i.length === 0) return;
  let a = Hw([r, Gw(n, e)]);
  function s(l, u, f) {
    let p = Bs(l), c = Bs(u), h = Bs(`.${re(f)}`).nodes[0].nodes[0];
    return p.each((y) => {
      let m = /* @__PURE__ */ new Set();
      c.each((g) => {
        let v = false;
        g = g.clone(), g.walkClasses((b) => {
          b.value === h.value && (v || (b.replaceWith(...y.nodes.map((w) => w.clone())), m.add(g), v = true));
        });
      });
      for (let g of m) {
        let v = [[]];
        for (let b of g.nodes) b.type === "combinator" ? (v.push(b), v.push([])) : v[v.length - 1].push(b);
        g.nodes = [];
        for (let b of v) Array.isArray(b) && b.sort((w, O) => w.type === "tag" && O.type === "class" ? -1 : w.type === "class" && O.type === "tag" ? 1 : w.type === "class" && O.type === "pseudo" && O.value.startsWith("::") ? -1 : w.type === "pseudo" && w.value.startsWith("::") && O.type === "class" ? 1 : 0), g.nodes = g.nodes.concat(b);
      }
      y.replaceWith(...m);
    }), p.toString();
  }
  let o = /* @__PURE__ */ new Map();
  for (let l of i) {
    let [u] = o.get(l.parent) || [[], l.source];
    o.set(l.parent, [u, l.source]);
    let [f, p] = Uf(l.params);
    if (l.parent.type === "atrule") {
      if (l.parent.name === "screen") {
        let c = l.parent.params;
        throw l.error(`@apply is not supported within nested at-rules like @screen. We suggest you write this as @apply ${f.map((d) => `${c}:${d}`).join(" ")} instead.`);
      }
      throw l.error(`@apply is not supported within nested at-rules like @${l.parent.name}. You can fix this by un-nesting @${l.parent.name}.`);
    }
    for (let c of f) {
      if ([$f(e, "group"), $f(e, "peer")].includes(c)) throw l.error(`@apply should not be used with the '${c}' utility`);
      if (!a.has(c)) throw l.error(`The \`${c}\` class does not exist. If \`${c}\` is a custom class, make sure it is defined within a \`@layer\` directive.`);
      let d = a.get(c);
      u.push([c, p, d]);
    }
  }
  for (let [l, [u, f]] of o) {
    let p = [];
    for (let [d, h, y] of u) {
      let m = [d, ...qf([d], e.tailwindConfig.separator)];
      for (let [g, v] of y) {
        let b = bn(l), w = bn(v);
        if (w = w.groups.filter((A) => A.some((R) => m.includes(R))).flat(), w = w.concat(qf(w, e.tailwindConfig.separator)), b.some((A) => w.includes(A))) throw v.error(`You cannot \`@apply\` the \`${d}\` utility here because it creates a circular dependency.`);
        let x = I.root({ nodes: [v.clone()] });
        x.walk((A) => {
          A.source = f;
        }), (v.type !== "atrule" || v.type === "atrule" && v.name !== "keyframes") && x.walkRules((A) => {
          if (!bn(A).some((Q) => Q === d)) {
            A.remove();
            return;
          }
          let R = typeof e.tailwindConfig.important == "string" ? e.tailwindConfig.important : null, B = l.raws.tailwind !== void 0 && R && l.selector.indexOf(R) === 0 ? l.selector.slice(R.length) : l.selector;
          A.selector = s(B, A.selector, d), R && B !== l.selector && (A.selector = `${R} ${A.selector}`), A.walkDecls((Q) => {
            Q.important = g.important || h;
          });
        }), x.nodes[0] && p.push([g.sort, x.nodes[0]]);
      }
    }
    let c = e.offsets.sort(p).map((d) => d[1]);
    l.after(c);
  }
  for (let l of i) l.parent.nodes.length > 1 ? l.remove() : l.parent.remove();
  Vf(t, e, r);
}
function Ys(t) {
  return (e) => {
    let r = Yw(() => Bw(e, t));
    Vf(e, t, r);
  };
}
var fr = Y(Ms());
var sc = Y(zf());
var na = Y(nc());
function ta(t) {
  return typeof t == "object" && t !== null;
}
function n0(t, e) {
  let r = Fe(e);
  do
    if (r.pop(), (0, fr.default)(t, r) !== void 0) break;
  while (r.length);
  return r.length ? r : void 0;
}
function ct(t) {
  return typeof t == "string" ? t : t.reduce((e, r, n) => r.includes(".") ? `${e}[${r}]` : n === 0 ? r : `${e}.${r}`, "");
}
function ac(t) {
  return t.map((e) => `'${e}'`).join(", ");
}
function ic(t) {
  return ac(Object.keys(t));
}
function ra(t, e, r, n = {}) {
  let i = Array.isArray(e) ? ct(e) : e.replace(/^['"]+|['"]+$/g, ""), a = Array.isArray(e) ? e : Fe(i), s = (0, fr.default)(t.theme, a, r);
  if (s === void 0) {
    let l = `'${i}' does not exist in your theme config.`, u = a.slice(0, -1), f = (0, fr.default)(t.theme, u);
    if (ta(f)) {
      let p = Object.keys(f).filter((d) => ra(t, [...u, d]).isValid), c = (0, sc.default)(a[a.length - 1], p);
      c ? l += ` Did you mean '${ct([...u, c])}'?` : p.length > 0 && (l += ` '${ct(u)}' has the following valid keys: ${ac(p)}`);
    } else {
      let p = n0(t.theme, i);
      if (p) {
        let c = (0, fr.default)(t.theme, p);
        ta(c) ? l += ` '${ct(p)}' has the following keys: ${ic(c)}` : l += ` '${ct(p)}' is not an object.`;
      } else l += ` Your theme has the following top-level keys: ${ic(t.theme)}`;
    }
    return { isValid: false, error: l };
  }
  if (!(typeof s == "string" || typeof s == "number" || typeof s == "function" || s instanceof String || s instanceof Number || Array.isArray(s))) {
    let l = `'${i}' was found but does not resolve to a string.`;
    if (ta(s)) {
      let u = Object.keys(s).filter((f) => ra(t, [...a, f]).isValid);
      u.length && (l += ` Did you mean something like '${ct([...a, u[0]])}'?`);
    }
    return { isValid: false, error: l };
  }
  let [o] = a;
  return { isValid: true, value: Ce(o)(s, n) };
}
function i0(t, e, r) {
  e = e.map((i) => oc(t, i, r));
  let n = [""];
  for (let i of e) i.type === "div" && i.value === "," ? n.push("") : n[n.length - 1] += na.default.stringify(i);
  return n;
}
function oc(t, e, r) {
  if (e.type === "function" && r[e.value] !== void 0) {
    let n = i0(t, e.nodes, r);
    e.type = "word", e.value = r[e.value](t, ...n);
  }
  return e;
}
function s0(t, e, r) {
  return (0, na.default)(e).walk((n) => {
    oc(t, n, r);
  }).toString();
}
var a0 = { atrule: "params", decl: "value" };
function* o0(t) {
  t = t.replace(/^['"]+|['"]+$/g, "");
  let e = t.match(/^([^\s]+)(?![^\[]*\])(?:\s*\/\s*([^\/\s]+))$/), r;
  yield [t, void 0], e && (t = e[1], r = e[2], yield [t, r]);
}
function l0(t, e, r) {
  var i;
  let n = Array.from(o0(e)).map(([a, s]) => Object.assign(ra(t, a, r, { opacityValue: s }), { resolvedPath: a, alpha: s }));
  return (i = n.find((a) => a.isValid)) != null ? i : n[0];
}
function lc(t) {
  let e = t.tailwindConfig, r = { theme: (n, i, ...a) => {
    var c;
    let { isValid: s, value: o, error: l, alpha: u } = l0(e, i, a.length ? a : void 0);
    if (!s) {
      let d = n.parent, h = (c = d == null ? void 0 : d.raws.tailwind) == null ? void 0 : c.candidate;
      if (d && h !== void 0) {
        t.markInvalidUtilityNode(d), d.remove(), D.warn("invalid-theme-key-in-class", [`The utility \`${h}\` contains an invalid theme value and was not generated.`]);
        return;
      }
      throw n.error(l);
    }
    let f = at(o);
    return (u !== void 0 || f !== void 0 && typeof f == "function") && (u === void 0 && (u = 1), o = we(f, u, f)), o;
  }, screen: (n, i) => {
    i = i.replace(/^['"]+/g, "").replace(/['"]+$/g, "");
    let s = Ne(e.theme.screens).find(({ name: o }) => o === i);
    if (!s) throw n.error(`The '${i}' screen does not exist in your theme.`);
    return Le(s);
  } };
  return (n) => {
    n.walk((i) => {
      let a = a0[i.type];
      a !== void 0 && (i[a] = s0(i, i[a], r));
    });
  };
}
function uc({ tailwindConfig: { theme: t } }) {
  return function(e) {
    e.walkAtRules("screen", (r) => {
      let n = r.params, a = Ne(t.screens).find(({ name: s }) => s === n);
      if (!a) throw r.error(`No \`${n}\` screen found.`);
      r.name = "media", r.params = Le(a);
    });
  };
}
var En = Y(Ee());
var fc = { id(t) {
  return En.default.attribute({ attribute: "id", operator: "=", value: t.value, quoteMark: '"' });
} };
function u0(t) {
  let e = t.filter((o) => o.type !== "pseudo" || o.nodes.length > 0 ? true : o.value.startsWith("::") || [":before", ":after", ":first-line", ":first-letter"].includes(o.value)).reverse(), r = /* @__PURE__ */ new Set(["tag", "class", "id", "attribute"]), n = e.findIndex((o) => r.has(o.type));
  if (n === -1) return e.reverse().join("").trim();
  let i = e[n], a = fc[i.type] ? fc[i.type](i) : i;
  e = e.slice(0, n);
  let s = e.findIndex((o) => o.type === "combinator" && o.value === ">");
  return s !== -1 && (e.splice(0, s), e.unshift(En.default.universal())), [a, ...e.reverse()].join("").trim();
}
var f0 = (0, En.default)((t) => t.map((e) => {
  let r = e.split((n) => n.type === "combinator" && n.value === " ").pop();
  return u0(r);
}));
var ia = /* @__PURE__ */ new Map();
function c0(t) {
  return ia.has(t) || ia.set(t, f0.transformSync(t)), ia.get(t);
}
function sa({ tailwindConfig: t }) {
  return (e) => {
    var i, a;
    let r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
    if (e.walkAtRules("defaults", (s) => {
      if (s.nodes && s.nodes.length > 0) {
        n.add(s);
        return;
      }
      let o = s.params;
      r.has(o) || r.set(o, /* @__PURE__ */ new Set()), r.get(o).add(s.parent), s.remove();
    }), G(t, "optimizeUniversalDefaults")) for (let s of n) {
      let o = /* @__PURE__ */ new Map(), l = (i = r.get(s.params)) != null ? i : [];
      for (let u of l) for (let f of c0(u.selector)) {
        let p = f.includes(":-") || f.includes("::-") ? f : "__DEFAULT__", c = (a = o.get(p)) != null ? a : /* @__PURE__ */ new Set();
        o.set(p, c), c.add(f);
      }
      if (G(t, "optimizeUniversalDefaults")) {
        if (o.size === 0) {
          s.remove();
          continue;
        }
        for (let [, u] of o) {
          let f = I.rule({ source: s.source });
          f.selectors = [...u], f.append(s.nodes.map((p) => p.clone())), s.before(f);
        }
      }
      s.remove();
    }
    else if (n.size) {
      let s = I.rule({ selectors: ["*", "::before", "::after"] });
      for (let l of n) s.append(l.nodes), s.parent || l.before(s), s.source || (s.source = l.source), l.remove();
      let o = s.clone({ selectors: ["::backdrop"] });
      s.after(o);
    }
  };
}
var cc = { atrule: ["name", "params"], rule: ["selector"] };
var p0 = new Set(Object.keys(cc));
function aa() {
  function t(e) {
    let r = null;
    e.each((n) => {
      if (!p0.has(n.type)) {
        r = null;
        return;
      }
      if (r === null) {
        r = n;
        return;
      }
      let i = cc[n.type];
      n.type === "atrule" && n.name === "font-face" ? r = n : i.every((a) => {
        var s, o;
        return ((s = n[a]) != null ? s : "").replace(/\s+/g, " ") === ((o = r[a]) != null ? o : "").replace(/\s+/g, " ");
      }) ? (n.nodes && r.append(n.nodes), n.remove()) : r = n;
    }), e.each((n) => {
      n.type === "atrule" && t(n);
    });
  }
  return (e) => {
    t(e);
  };
}
function oa() {
  return (t) => {
    t.walkRules((e) => {
      let r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set([]), i = /* @__PURE__ */ new Map();
      e.walkDecls((a) => {
        if (a.parent === e) {
          if (r.has(a.prop)) {
            if (r.get(a.prop).value === a.value) {
              n.add(r.get(a.prop)), r.set(a.prop, a);
              return;
            }
            i.has(a.prop) || i.set(a.prop, /* @__PURE__ */ new Set()), i.get(a.prop).add(r.get(a.prop)), i.get(a.prop).add(a);
          }
          r.set(a.prop, a);
        }
      });
      for (let a of n) a.remove();
      for (let a of i.values()) {
        let s = /* @__PURE__ */ new Map();
        for (let o of a) {
          let l = h0(o.value);
          l !== null && (s.has(l) || s.set(l, /* @__PURE__ */ new Set()), s.get(l).add(o));
        }
        for (let o of s.values()) {
          let l = Array.from(o).slice(0, -1);
          for (let u of l) u.remove();
        }
      }
    });
  };
}
var d0 = Symbol("unitless-number");
function h0(t) {
  var r;
  let e = /^-?\d*.?\d+([\w%]+)?$/g.exec(t);
  return e ? (r = e[1]) != null ? r : d0 : null;
}
function m0(t) {
  if (!t.walkAtRules) return;
  let e = /* @__PURE__ */ new Set();
  if (t.walkAtRules("apply", (r) => {
    e.add(r.parent);
  }), e.size !== 0) for (let r of e) {
    let n = [], i = [];
    for (let a of r.nodes) a.type === "atrule" && a.name === "apply" ? (i.length > 0 && (n.push(i), i = []), n.push([a])) : i.push(a);
    if (i.length > 0 && n.push(i), n.length !== 1) {
      for (let a of [...n].reverse()) {
        let s = r.clone({ nodes: [] });
        s.append(a), r.after(s);
      }
      r.remove();
    }
  }
}
function Cn() {
  return (t) => {
    m0(t);
  };
}
function g0(t) {
  return t.type === "root";
}
function y0(t) {
  return t.type === "atrule" && t.name === "layer";
}
function pc(t) {
  return (e, r) => {
    let n = false;
    e.walkAtRules("tailwind", (i) => {
      if (n) return false;
      if (i.parent && !(g0(i.parent) || y0(i.parent))) return n = true, i.warn(r, ["Nested @tailwind rules were detected, but are not supported.", "Consider using a prefix to scope Tailwind's classes: https://tailwindcss.com/docs/configuration#prefix", "Alternatively, use the important selector strategy: https://tailwindcss.com/docs/configuration#selector-strategy"].join(`
`)), false;
    }), e.walkRules((i) => {
      if (n) return false;
      i.walkRules((a) => (n = true, a.warn(r, ["Nested CSS was detected, but CSS nesting has not been configured correctly.", "Please enable a CSS nesting plugin *before* Tailwind in your configuration.", "See how here: https://tailwindcss.com/docs/using-with-preprocessors#nesting"].join(`
`)), false));
    });
  };
}
function la(t) {
  return function(e, r) {
    let { tailwindDirectives: n, applyDirectives: i } = Fn(e);
    pc()(e, r), Cn()(e, r);
    let a = t({ tailwindDirectives: n, applyDirectives: i, registerDependency(s) {
      r.messages.push({ plugin: "tailwindcss", parent: r.opts.from, ...s });
    }, createContext(s, o) {
      return Ef(s, o, e);
    } })(e, r);
    if (a.tailwindConfig.separator === "-") throw new Error("The '-' character cannot be used as a custom separator in JIT mode due to parsing ambiguity. Please use another character like '_' instead.");
    tf(a.tailwindConfig), Ws(a)(e, r), Cn()(e, r), Ys(a)(e, r), lc(a)(e, r), uc(a)(e, r), sa(a)(e, r), aa(a)(e, r), oa(a)(e, r);
  };
}
var dc = ["preflight", "container", "accessibility", "pointerEvents", "visibility", "position", "inset", "isolation", "zIndex", "order", "gridColumn", "gridColumnStart", "gridColumnEnd", "gridRow", "gridRowStart", "gridRowEnd", "float", "clear", "margin", "boxSizing", "display", "aspectRatio", "height", "maxHeight", "minHeight", "width", "minWidth", "maxWidth", "flex", "flexShrink", "flexGrow", "flexBasis", "tableLayout", "borderCollapse", "borderSpacing", "transformOrigin", "translate", "rotate", "skew", "scale", "transform", "animation", "cursor", "touchAction", "userSelect", "resize", "scrollSnapType", "scrollSnapAlign", "scrollSnapStop", "scrollMargin", "scrollPadding", "listStylePosition", "listStyleType", "appearance", "columns", "breakBefore", "breakInside", "breakAfter", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateColumns", "gridTemplateRows", "flexDirection", "flexWrap", "placeContent", "placeItems", "alignContent", "alignItems", "justifyContent", "justifyItems", "gap", "space", "divideWidth", "divideStyle", "divideColor", "divideOpacity", "placeSelf", "alignSelf", "justifySelf", "overflow", "overscrollBehavior", "scrollBehavior", "textOverflow", "whitespace", "wordBreak", "borderRadius", "borderWidth", "borderStyle", "borderColor", "borderOpacity", "backgroundColor", "backgroundOpacity", "backgroundImage", "gradientColorStops", "boxDecorationBreak", "backgroundSize", "backgroundAttachment", "backgroundClip", "backgroundPosition", "backgroundRepeat", "backgroundOrigin", "fill", "stroke", "strokeWidth", "objectFit", "objectPosition", "padding", "textAlign", "textIndent", "verticalAlign", "fontFamily", "fontSize", "fontWeight", "textTransform", "fontStyle", "fontVariantNumeric", "lineHeight", "letterSpacing", "textColor", "textOpacity", "textDecoration", "textDecorationColor", "textDecorationStyle", "textDecorationThickness", "textUnderlineOffset", "fontSmoothing", "placeholderColor", "placeholderOpacity", "caretColor", "accentColor", "opacity", "backgroundBlendMode", "mixBlendMode", "boxShadow", "boxShadowColor", "outlineStyle", "outlineWidth", "outlineOffset", "outlineColor", "ringWidth", "ringColor", "ringOpacity", "ringOffsetWidth", "ringOffsetColor", "blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia", "filter", "backdropBlur", "backdropBrightness", "backdropContrast", "backdropGrayscale", "backdropHueRotate", "backdropInvert", "backdropOpacity", "backdropSaturate", "backdropSepia", "backdropFilter", "transitionProperty", "transitionDelay", "transitionDuration", "transitionTimingFunction", "willChange", "content"];
function hc(t, e) {
  return t === void 0 ? e : Array.isArray(t) ? t : [...new Set(e.filter((n) => t !== false && t[n] !== false).concat(Object.keys(t).filter((n) => t[n] !== false)))];
}
function cr({ version: t, from: e, to: r }) {
  D.warn(`${e}-color-renamed`, [`As of Tailwind CSS ${t}, \`${e}\` has been renamed to \`${r}\`.`, "Update your configuration file to silence this warning."]);
}
var mc = { inherit: "inherit", current: "currentColor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }, get lightBlue() {
  return cr({ version: "v2.2", from: "lightBlue", to: "sky" }), this.sky;
}, get warmGray() {
  return cr({ version: "v3.0", from: "warmGray", to: "stone" }), this.stone;
}, get trueGray() {
  return cr({ version: "v3.0", from: "trueGray", to: "neutral" }), this.neutral;
}, get coolGray() {
  return cr({ version: "v3.0", from: "coolGray", to: "gray" }), this.gray;
}, get blueGray() {
  return cr({ version: "v3.0", from: "blueGray", to: "slate" }), this.slate;
} };
function ua(t, ...e) {
  var r, n;
  for (let i of e) {
    for (let a in i) (r = t == null ? void 0 : t.hasOwnProperty) != null && r.call(t, a) || (t[a] = i[a]);
    for (let a of Object.getOwnPropertySymbols(i)) (n = t == null ? void 0 : t.hasOwnProperty) != null && n.call(t, a) || (t[a] = i[a]);
  }
  return t;
}
function gc(t) {
  var r;
  (() => {
    if (t.purge || !t.content || !Array.isArray(t.content) && !(typeof t.content == "object" && t.content !== null)) return false;
    if (Array.isArray(t.content)) return t.content.every((n) => typeof n == "string" ? true : !(typeof (n == null ? void 0 : n.raw) != "string" || (n == null ? void 0 : n.extension) && typeof (n == null ? void 0 : n.extension) != "string"));
    if (typeof t.content == "object" && t.content !== null) {
      if (Object.keys(t.content).some((n) => !["files", "relative", "extract", "transform"].includes(n))) return false;
      if (Array.isArray(t.content.files)) {
        if (!t.content.files.every((n) => typeof n == "string" ? true : !(typeof (n == null ? void 0 : n.raw) != "string" || (n == null ? void 0 : n.extension) && typeof (n == null ? void 0 : n.extension) != "string"))) return false;
        if (typeof t.content.extract == "object") {
          for (let n of Object.values(t.content.extract)) if (typeof n != "function") return false;
        } else if (!(t.content.extract === void 0 || typeof t.content.extract == "function")) return false;
        if (typeof t.content.transform == "object") {
          for (let n of Object.values(t.content.transform)) if (typeof n != "function") return false;
        } else if (!(t.content.transform === void 0 || typeof t.content.transform == "function")) return false;
        if (typeof t.content.relative != "boolean" && typeof t.content.relative < "u") return false;
      }
      return true;
    }
    return false;
  })() || D.warn("purge-deprecation", ["The `purge`/`content` options have changed in Tailwind CSS v3.0.", "Update your configuration file to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"]), t.safelist = (() => {
    var s;
    let { content: n, purge: i, safelist: a } = t;
    return Array.isArray(a) ? a : Array.isArray(n == null ? void 0 : n.safelist) ? n.safelist : Array.isArray(i == null ? void 0 : i.safelist) ? i.safelist : Array.isArray((s = i == null ? void 0 : i.options) == null ? void 0 : s.safelist) ? i.options.safelist : [];
  })(), t.blocklist = (() => {
    let { blocklist: n } = t;
    if (Array.isArray(n)) {
      if (n.every((i) => typeof i == "string")) return n;
      D.warn("blocklist-invalid", ["The `blocklist` option must be an array of strings.", "https://tailwindcss.com/docs/content-configuration#discarding-classes"]);
    }
    return [];
  })(), typeof t.prefix == "function" ? (D.warn("prefix-function", ["As of Tailwind CSS v3.0, `prefix` cannot be a function.", "Update `prefix` in your configuration to be a string to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"]), t.prefix = "") : t.prefix = (r = t.prefix) != null ? r : "", t.content = { relative: (() => {
    var i, a;
    let { content: n } = t;
    return n != null && n.relative ? n.relative : (a = (i = t.future) == null ? void 0 : i.relativeContentPathsByDefault) != null ? a : false;
  })(), files: (() => {
    let { content: n, purge: i } = t;
    return Array.isArray(i) ? i : Array.isArray(i == null ? void 0 : i.content) ? i.content : Array.isArray(n) ? n : Array.isArray(n == null ? void 0 : n.content) ? n.content : Array.isArray(n == null ? void 0 : n.files) ? n.files : [];
  })(), extract: (() => {
    let n = (() => {
      var s, o, l, u, f, p, c, d, h, y;
      return (s = t.purge) != null && s.extract ? t.purge.extract : (o = t.content) != null && o.extract ? t.content.extract : (u = (l = t.purge) == null ? void 0 : l.extract) != null && u.DEFAULT ? t.purge.extract.DEFAULT : (p = (f = t.content) == null ? void 0 : f.extract) != null && p.DEFAULT ? t.content.extract.DEFAULT : (d = (c = t.purge) == null ? void 0 : c.options) != null && d.extractors ? t.purge.options.extractors : (y = (h = t.content) == null ? void 0 : h.options) != null && y.extractors ? t.content.options.extractors : {};
    })(), i = {}, a = (() => {
      var s, o, l, u;
      if ((o = (s = t.purge) == null ? void 0 : s.options) != null && o.defaultExtractor) return t.purge.options.defaultExtractor;
      if ((u = (l = t.content) == null ? void 0 : l.options) != null && u.defaultExtractor) return t.content.options.defaultExtractor;
    })();
    if (a !== void 0 && (i.DEFAULT = a), typeof n == "function") i.DEFAULT = n;
    else if (Array.isArray(n)) for (let { extensions: s, extractor: o } of n != null ? n : []) for (let l of s) i[l] = o;
    else typeof n == "object" && n !== null && Object.assign(i, n);
    return i;
  })(), transform: (() => {
    let n = (() => {
      var a, s, o, l, u, f;
      return (a = t.purge) != null && a.transform ? t.purge.transform : (s = t.content) != null && s.transform ? t.content.transform : (l = (o = t.purge) == null ? void 0 : o.transform) != null && l.DEFAULT ? t.purge.transform.DEFAULT : (f = (u = t.content) == null ? void 0 : u.transform) != null && f.DEFAULT ? t.content.transform.DEFAULT : {};
    })(), i = {};
    return typeof n == "function" && (i.DEFAULT = n), typeof n == "object" && n !== null && Object.assign(i, n), i;
  })() };
  for (let n of t.content.files) if (typeof n == "string" && /{([^,]*?)}/g.test(n)) {
    D.warn("invalid-glob-braces", [`The glob pattern ${n} in your Tailwind CSS configuration is invalid.`, `Update it to ${n.replace(/{([^,]*?)}/g, "$1")} to silence this warning.`]);
    break;
  }
  return t;
}
function _n(t) {
  return Array.isArray(t) ? t.map((e) => _n(e)) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([e, r]) => [e, _n(r)])) : t;
}
function pt(t) {
  return typeof t == "function";
}
function pr(t, ...e) {
  let r = e.pop();
  for (let n of e) for (let i in n) {
    let a = r(t[i], n[i]);
    a === void 0 ? X(t[i]) && X(n[i]) ? t[i] = pr({}, t[i], n[i], r) : t[i] = n[i] : t[i] = a;
  }
  return t;
}
var fa = { colors: mc, negative(t) {
  return Object.keys(t).filter((e) => t[e] !== "0").reduce((e, r) => {
    let n = De(t[r]);
    return n !== void 0 && (e[`-${r}`] = n), e;
  }, {});
}, breakpoints(t) {
  return Object.keys(t).filter((e) => typeof t[e] == "string").reduce((e, r) => ({ ...e, [`screen-${r}`]: t[r] }), {});
} };
function v0(t, ...e) {
  return pt(t) ? t(...e) : t;
}
function w0(t) {
  return t.reduce((e, { extend: r }) => pr(e, r, (n, i) => n === void 0 ? [i] : Array.isArray(n) ? [i, ...n] : [i, n]), {});
}
function b0(t) {
  return { ...t.reduce((e, r) => ua(e, r), {}), extend: w0(t) };
}
function yc(t, e) {
  if (Array.isArray(t) && X(t[0])) return t.concat(e);
  if (Array.isArray(e) && X(e[0]) && X(t)) return [t, ...e];
  if (Array.isArray(e)) return e;
}
function x0({ extend: t, ...e }) {
  return pr(e, t, (r, n) => !pt(r) && !n.some(pt) ? pr({}, r, ...n, yc) : (i, a) => pr({}, ...[r, ...n].map((s) => v0(s, i, a)), yc));
}
function* S0(t) {
  let e = Fe(t);
  if (e.length === 0 || (yield e, Array.isArray(t))) return;
  let r = /^(.*?)\s*\/\s*([^/]+)$/, n = t.match(r);
  if (n !== null) {
    let [, i, a] = n, s = Fe(i);
    s.alpha = a, yield s;
  }
}
function k0(t) {
  let e = (r, n) => {
    for (let i of S0(r)) {
      let a = 0, s = t;
      for (; s != null && a < i.length; ) s = s[i[a++]], s = pt(s) && (i.alpha === void 0 || a <= i.length - 1) ? s(e, fa) : s;
      if (s !== void 0) {
        if (i.alpha !== void 0) {
          let o = at(s);
          return we(o, i.alpha, F(o));
        }
        return X(s) ? _n(s) : s;
      }
    }
    return n;
  };
  return Object.assign(e, { theme: e, ...fa }), Object.keys(t).reduce((r, n) => (r[n] = pt(t[n]) ? t[n](e, fa) : t[n], r), {});
}
function vc(t) {
  let e = [];
  return t.forEach((r) => {
    var i;
    e = [...e, r];
    let n = (i = r == null ? void 0 : r.plugins) != null ? i : [];
    n.length !== 0 && n.forEach((a) => {
      var s;
      a.__isOptionsFunction && (a = a()), e = [...e, ...vc([(s = a == null ? void 0 : a.config) != null ? s : {}])];
    });
  }), e;
}
function O0(t) {
  return [...t].reduceRight((r, n) => pt(n) ? n({ corePlugins: r }) : hc(n, r), dc);
}
function A0(t) {
  return [...t].reduceRight((r, n) => [...r, ...n], []);
}
function ca(t) {
  let e = [...vc(t), { prefix: "", important: false, separator: ":" }];
  return gc(ua({ theme: k0(x0(b0(e.map((r) => {
    var n;
    return (n = r == null ? void 0 : r.theme) != null ? n : {};
  })))), corePlugins: O0(e.map((r) => r.corePlugins)), plugins: A0(t.map((r) => {
    var n;
    return (n = r == null ? void 0 : r.plugins) != null ? n : [];
  })) }, ...e));
}
var xc = Y(bc());
function Tn(t) {
  var i;
  let e = ((i = t == null ? void 0 : t.presets) != null ? i : [xc.default]).slice().reverse().flatMap((a) => Tn(a instanceof Function ? a() : a)), r = { respectDefaultRingColorOpacity: { theme: { ringColor: ({ theme: a }) => ({ DEFAULT: "#3b82f67f", ...a("colors") }) } }, disableColorOpacityUtilitiesByDefault: { corePlugins: { backgroundOpacity: false, borderOpacity: false, divideOpacity: false, placeholderOpacity: false, ringOpacity: false, textOpacity: false } } }, n = Object.keys(r).filter((a) => G(t, a)).map((a) => r[a]);
  return [t, ...n, ...e];
}
function pa(...t) {
  let [, ...e] = Tn(t[0]);
  return ca([...t, ...e]);
}
var Sc = (t) => {
  var n;
  let e = pa((n = t.config) != null ? n : {});
  return la((i) => () => i.createContext(e, [{ content: t.content }]));
};
var yp = Y(gp(), 1);
var vp = (t) => {
  let e = Sc({ config: t.config, content: t.content });
  return I([e, (0, yp.default)()]).process(wp, { from: void 0 }).css;
};
var wp = String.raw`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
`;
function xp(t) {
  let e = I.parse(t);
  return en.objectify(e);
}
var ob = (t, e) => {
  var i, a;
  let r = (a = (i = e == null ? void 0 : e.corePlugins) == null ? void 0 : i.preflight) != null ? a : false, n = (e == null ? void 0 : e.corePlugins) || {};
  return vp({ config: { ...e, corePlugins: { ...n, preflight: r } }, content: t });
};
var Sp = ({ config: t, options: e }) => ({ twi: xa(t, e), twj: Op(t, e) });
var kp = (...t) => {
  let e = "";
  return typeof t[0] == "string" ? e = t[0] : Array.isArray(t[0]) ? e = t.flat(1 / 0).map((r) => kp(r)).join(" ") : typeof t[0] == "object" && (e = Object.entries(t[0]).filter((r) => !!r[1]).map((r) => r[0]).join(" ")), e = e.replace(/\s+/g, " "), e;
};
var xa = (t, e) => (...r) => {
  let n = kp(r), { 1: i } = r || {}, s = { ...{ merge: true, minify: true, ignoreMediaQueries: true }, ...e, ...i }, o = _a(ob(n, t));
  return s != null && s.ignoreMediaQueries ? o.removeMediaQueries() : (o.removeUndefined(), o.combineMediaQueries()), o.fixRGB(), s != null && s.merge && o.merge(), s != null && s.minify && o.minify(), o.get();
};
var Op = (t, e) => (...r) => xp(xa(t, e)(r));
var bp = xa();
var lb = Op();
var ub = Sp;
export {
  Sp as tailwindToCSS,
  ub as twToCSS,
  bp as twi,
  lb as twj
};
/*! Bundled license information:

@flowko/tw-to-css/dist/index.mjs.js:
  (*! https://mths.be/cssesc v3.0.0 by @mathias *)
*/
//# sourceMappingURL=index.mjs-Z4MBP7WS.js.map
