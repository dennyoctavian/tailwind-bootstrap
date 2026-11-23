import $, { forwardRef as Mt, createElement as Ge, useState as F, createContext as Te, useContext as K, useEffect as de, useRef as Ue, useCallback as wt } from "react";
var Re = { exports: {} }, pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function vr() {
  if (vt) return pe;
  vt = 1;
  var e = $, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(d, c, f) {
    var b, p = {}, h = null, j = null;
    f !== void 0 && (h = "" + f), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (j = c.ref);
    for (b in c) a.call(c, b) && !l.hasOwnProperty(b) && (p[b] = c[b]);
    if (d && d.defaultProps) for (b in c = d.defaultProps, c) p[b] === void 0 && (p[b] = c[b]);
    return { $$typeof: t, type: d, key: h, ref: j, props: p, _owner: n.current };
  }
  return pe.Fragment = s, pe.jsx = i, pe.jsxs = i, pe;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function yr() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = $, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), v = Symbol.iterator, C = "@@iterator";
    function w(o) {
      if (o === null || typeof o != "object")
        return null;
      var x = v && o[v] || o[C];
      return typeof x == "function" ? x : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(o) {
      {
        for (var x = arguments.length, g = new Array(x > 1 ? x - 1 : 0), y = 1; y < x; y++)
          g[y - 1] = arguments[y];
        O("error", o, g);
      }
    }
    function O(o, x, g) {
      {
        var y = k.ReactDebugCurrentFrame, E = y.getStackAddendum();
        E !== "" && (x += "%s", g = g.concat([E]));
        var T = g.map(function(R) {
          return String(R);
        });
        T.unshift("Warning: " + x), Function.prototype.apply.call(console[o], console, T);
      }
    }
    var z = !1, Y = !1, q = !1, ye = !1, ke = !1, ae;
    ae = Symbol.for("react.module.reference");
    function ue(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === a || o === l || ke || o === n || o === f || o === b || ye || o === j || z || Y || q || typeof o == "object" && o !== null && (o.$$typeof === h || o.$$typeof === p || o.$$typeof === i || o.$$typeof === d || o.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === ae || o.getModuleId !== void 0));
    }
    function be(o, x, g) {
      var y = o.displayName;
      if (y)
        return y;
      var E = x.displayName || x.name || "";
      return E !== "" ? g + "(" + E + ")" : g;
    }
    function S(o) {
      return o.displayName || "Context";
    }
    function W(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case l:
          return "Profiler";
        case n:
          return "StrictMode";
        case f:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case d:
            var x = o;
            return S(x) + ".Consumer";
          case i:
            var g = o;
            return S(g._context) + ".Provider";
          case c:
            return be(o, o.render, "ForwardRef");
          case p:
            var y = o.displayName || null;
            return y !== null ? y : W(o.type) || "Memo";
          case h: {
            var E = o, T = E._payload, R = E._init;
            try {
              return W(R(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, X = 0, ee, fe, oe, J, xe, B, rt;
    function st() {
    }
    st.__reactDisabledLog = !0;
    function Yt() {
      {
        if (X === 0) {
          ee = console.log, fe = console.info, oe = console.warn, J = console.error, xe = console.group, B = console.groupCollapsed, rt = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: st,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        X++;
      }
    }
    function Ht() {
      {
        if (X--, X === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, o, {
              value: ee
            }),
            info: V({}, o, {
              value: fe
            }),
            warn: V({}, o, {
              value: oe
            }),
            error: V({}, o, {
              value: J
            }),
            group: V({}, o, {
              value: xe
            }),
            groupCollapsed: V({}, o, {
              value: B
            }),
            groupEnd: V({}, o, {
              value: rt
            })
          });
        }
        X < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Me = k.ReactCurrentDispatcher, Pe;
    function je(o, x, g) {
      {
        if (Pe === void 0)
          try {
            throw Error();
          } catch (E) {
            var y = E.stack.trim().match(/\n( *(at )?)/);
            Pe = y && y[1] || "";
          }
        return `
` + Pe + o;
      }
    }
    var ze = !1, Ne;
    {
      var qt = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new qt();
    }
    function at(o, x) {
      if (!o || ze)
        return "";
      {
        var g = Ne.get(o);
        if (g !== void 0)
          return g;
      }
      var y;
      ze = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = Me.current, Me.current = null, Yt();
      try {
        if (x) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (D) {
              y = D;
            }
            Reflect.construct(o, [], R);
          } else {
            try {
              R.call();
            } catch (D) {
              y = D;
            }
            o.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            y = D;
          }
          o();
        }
      } catch (D) {
        if (D && y && typeof D.stack == "string") {
          for (var _ = D.stack.split(`
`), L = y.stack.split(`
`), I = _.length - 1, M = L.length - 1; I >= 1 && M >= 0 && _[I] !== L[M]; )
            M--;
          for (; I >= 1 && M >= 0; I--, M--)
            if (_[I] !== L[M]) {
              if (I !== 1 || M !== 1)
                do
                  if (I--, M--, M < 0 || _[I] !== L[M]) {
                    var G = `
` + _[I].replace(" at new ", " at ");
                    return o.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", o.displayName)), typeof o == "function" && Ne.set(o, G), G;
                  }
                while (I >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        ze = !1, Me.current = T, Ht(), Error.prepareStackTrace = E;
      }
      var le = o ? o.displayName || o.name : "", te = le ? je(le) : "";
      return typeof o == "function" && Ne.set(o, te), te;
    }
    function Xt(o, x, g) {
      return at(o, !1);
    }
    function Jt(o) {
      var x = o.prototype;
      return !!(x && x.isReactComponent);
    }
    function Ce(o, x, g) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return at(o, Jt(o));
      if (typeof o == "string")
        return je(o);
      switch (o) {
        case f:
          return je("Suspense");
        case b:
          return je("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            return Xt(o.render);
          case p:
            return Ce(o.type, x, g);
          case h: {
            var y = o, E = y._payload, T = y._init;
            try {
              return Ce(T(E), x, g);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, ot = {}, nt = k.ReactDebugCurrentFrame;
    function _e(o) {
      if (o) {
        var x = o._owner, g = Ce(o.type, o._source, x ? x.type : null);
        nt.setExtraStackFrame(g);
      } else
        nt.setExtraStackFrame(null);
    }
    function Zt(o, x, g, y, E) {
      {
        var T = Function.call.bind(me);
        for (var R in o)
          if (T(o, R)) {
            var _ = void 0;
            try {
              if (typeof o[R] != "function") {
                var L = Error((y || "React class") + ": " + g + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              _ = o[R](x, R, y, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              _ = I;
            }
            _ && !(_ instanceof Error) && (_e(E), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", g, R, typeof _), _e(null)), _ instanceof Error && !(_.message in ot) && (ot[_.message] = !0, _e(E), m("Failed %s type: %s", g, _.message), _e(null));
          }
      }
    }
    var Qt = Array.isArray;
    function $e(o) {
      return Qt(o);
    }
    function er(o) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, g = x && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return g;
      }
    }
    function tr(o) {
      try {
        return lt(o), !1;
      } catch {
        return !0;
      }
    }
    function lt(o) {
      return "" + o;
    }
    function it(o) {
      if (tr(o))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(o)), lt(o);
    }
    var dt = k.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ct, ut;
    function sr(o) {
      if (me.call(o, "ref")) {
        var x = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function ar(o) {
      if (me.call(o, "key")) {
        var x = Object.getOwnPropertyDescriptor(o, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function or(o, x) {
      typeof o.ref == "string" && dt.current;
    }
    function nr(o, x) {
      {
        var g = function() {
          ct || (ct = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function lr(o, x) {
      {
        var g = function() {
          ut || (ut = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var ir = function(o, x, g, y, E, T, R) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: x,
        ref: g,
        props: R,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function dr(o, x, g, y, E) {
      {
        var T, R = {}, _ = null, L = null;
        g !== void 0 && (it(g), _ = "" + g), ar(x) && (it(x.key), _ = "" + x.key), sr(x) && (L = x.ref, or(x, E));
        for (T in x)
          me.call(x, T) && !rr.hasOwnProperty(T) && (R[T] = x[T]);
        if (o && o.defaultProps) {
          var I = o.defaultProps;
          for (T in I)
            R[T] === void 0 && (R[T] = I[T]);
        }
        if (_ || L) {
          var M = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          _ && nr(R, M), L && lr(R, M);
        }
        return ir(o, _, L, E, y, dt.current, R);
      }
    }
    var Fe = k.ReactCurrentOwner, bt = k.ReactDebugCurrentFrame;
    function ne(o) {
      if (o) {
        var x = o._owner, g = Ce(o.type, o._source, x ? x.type : null);
        bt.setExtraStackFrame(g);
      } else
        bt.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function De(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function ft() {
      {
        if (Fe.current) {
          var o = W(Fe.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function cr(o) {
      return "";
    }
    var xt = {};
    function ur(o) {
      {
        var x = ft();
        if (!x) {
          var g = typeof o == "string" ? o : o.displayName || o.name;
          g && (x = `

Check the top-level render call using <` + g + ">.");
        }
        return x;
      }
    }
    function mt(o, x) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var g = ur(x);
        if (xt[g])
          return;
        xt[g] = !0;
        var y = "";
        o && o._owner && o._owner !== Fe.current && (y = " It was passed a child from " + W(o._owner.type) + "."), ne(o), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, y), ne(null);
      }
    }
    function pt(o, x) {
      {
        if (typeof o != "object")
          return;
        if ($e(o))
          for (var g = 0; g < o.length; g++) {
            var y = o[g];
            De(y) && mt(y, x);
          }
        else if (De(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var E = w(o);
          if (typeof E == "function" && E !== o.entries)
            for (var T = E.call(o), R; !(R = T.next()).done; )
              De(R.value) && mt(R.value, x);
        }
      }
    }
    function br(o) {
      {
        var x = o.type;
        if (x == null || typeof x == "string")
          return;
        var g;
        if (typeof x == "function")
          g = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === p))
          g = x.propTypes;
        else
          return;
        if (g) {
          var y = W(x);
          Zt(g, o.props, "prop", y, o);
        } else if (x.PropTypes !== void 0 && !Le) {
          Le = !0;
          var E = W(x);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(o) {
      {
        for (var x = Object.keys(o.props), g = 0; g < x.length; g++) {
          var y = x[g];
          if (y !== "children" && y !== "key") {
            ne(o), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), ne(null);
            break;
          }
        }
        o.ref !== null && (ne(o), m("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    var gt = {};
    function ht(o, x, g, y, E, T) {
      {
        var R = ue(o);
        if (!R) {
          var _ = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = cr();
          L ? _ += L : _ += ft();
          var I;
          o === null ? I = "null" : $e(o) ? I = "array" : o !== void 0 && o.$$typeof === t ? (I = "<" + (W(o.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : I = typeof o, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, _);
        }
        var M = dr(o, x, g, E, T);
        if (M == null)
          return M;
        if (R) {
          var G = x.children;
          if (G !== void 0)
            if (y)
              if ($e(G)) {
                for (var le = 0; le < G.length; le++)
                  pt(G[le], o);
                Object.freeze && Object.freeze(G);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pt(G, o);
        }
        if (me.call(x, "key")) {
          var te = W(o), D = Object.keys(x).filter(function(wr) {
            return wr !== "key";
          }), Ve = D.length > 0 ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!gt[te + Ve]) {
            var hr = D.length > 0 ? "{" + D.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ve, te, hr, te), gt[te + Ve] = !0;
          }
        }
        return o === a ? fr(M) : br(M), M;
      }
    }
    function xr(o, x, g) {
      return ht(o, x, g, !0);
    }
    function mr(o, x, g) {
      return ht(o, x, g, !1);
    }
    var pr = mr, gr = xr;
    ge.Fragment = a, ge.jsx = pr, ge.jsxs = gr;
  })()), ge;
}
var kt;
function kr() {
  return kt || (kt = 1, process.env.NODE_ENV === "production" ? Re.exports = vr() : Re.exports = yr()), Re.exports;
}
var r = kr();
function Pt(e) {
  var t, s, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (s = Pt(e[t])) && (a && (a += " "), a += s);
  } else for (s in e) e[s] && (a && (a += " "), a += s);
  return a;
}
function jr() {
  for (var e, t, s = 0, a = "", n = arguments.length; s < n; s++) (e = arguments[s]) && (t = Pt(e)) && (a && (a += " "), a += t);
  return a;
}
const Ke = "-", Nr = (e) => {
  const t = _r(e), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (i) => {
      const d = i.split(Ke);
      return d[0] === "" && d.length !== 1 && d.shift(), zt(d, t) || Cr(i);
    },
    getConflictingClassGroupIds: (i, d) => {
      const c = s[i] || [];
      return d && a[i] ? [...c, ...a[i]] : c;
    }
  };
}, zt = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const s = e[0], a = t.nextPart.get(s), n = a ? zt(e.slice(1), a) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const l = e.join(Ke);
  return (i = t.validators.find(({
    validator: d
  }) => d(l))) == null ? void 0 : i.classGroupId;
}, jt = /^\[(.+)\]$/, Cr = (e) => {
  if (jt.test(e)) {
    const t = jt.exec(e)[1], s = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, _r = (e) => {
  const {
    theme: t,
    prefix: s
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Er(Object.entries(e.classGroups), s).forEach(([l, i]) => {
    We(i, a, l, t);
  }), a;
}, We = (e, t, s, a) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const l = n === "" ? t : Nt(t, n);
      l.classGroupId = s;
      return;
    }
    if (typeof n == "function") {
      if (Rr(n)) {
        We(n(a), t, s, a);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: s
      });
      return;
    }
    Object.entries(n).forEach(([l, i]) => {
      We(i, Nt(t, l), s, a);
    });
  });
}, Nt = (e, t) => {
  let s = e;
  return t.split(Ke).forEach((a) => {
    s.nextPart.has(a) || s.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(a);
  }), s;
}, Rr = (e) => e.isThemeGetter, Er = (e, t) => t ? e.map(([s, a]) => {
  const n = a.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([i, d]) => [t + i, d])) : l);
  return [s, n];
}) : e, Sr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const n = (l, i) => {
    s.set(l, i), t++, t > e && (t = 0, a = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let i = s.get(l);
      if (i !== void 0)
        return i;
      if ((i = a.get(l)) !== void 0)
        return n(l, i), i;
    },
    set(l, i) {
      s.has(l) ? s.set(l, i) : n(l, i);
    }
  };
}, $t = "!", Tr = (e) => {
  const {
    separator: t,
    experimentalParseClassName: s
  } = e, a = t.length === 1, n = t[0], l = t.length, i = (d) => {
    const c = [];
    let f = 0, b = 0, p;
    for (let w = 0; w < d.length; w++) {
      let k = d[w];
      if (f === 0) {
        if (k === n && (a || d.slice(w, w + l) === t)) {
          c.push(d.slice(b, w)), b = w + l;
          continue;
        }
        if (k === "/") {
          p = w;
          continue;
        }
      }
      k === "[" ? f++ : k === "]" && f--;
    }
    const h = c.length === 0 ? d : d.substring(b), j = h.startsWith($t), v = j ? h.substring(1) : h, C = p && p > b ? p - b : void 0;
    return {
      modifiers: c,
      hasImportantModifier: j,
      baseClassName: v,
      maybePostfixModifierPosition: C
    };
  };
  return s ? (d) => s({
    className: d,
    parseClassName: i
  }) : i;
}, Or = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let s = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...s.sort(), a), s = []) : s.push(a);
  }), t.push(...s.sort()), t;
}, Ar = (e) => ({
  cache: Sr(e.cacheSize),
  parseClassName: Tr(e),
  ...Nr(e)
}), Ir = /\s+/, Mr = (e, t) => {
  const {
    parseClassName: s,
    getClassGroupId: a,
    getConflictingClassGroupIds: n
  } = t, l = [], i = e.trim().split(Ir);
  let d = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const f = i[c], {
      modifiers: b,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: j
    } = s(f);
    let v = !!j, C = a(v ? h.substring(0, j) : h);
    if (!C) {
      if (!v) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (C = a(h), !C) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      v = !1;
    }
    const w = Or(b).join(":"), k = p ? w + $t : w, m = k + C;
    if (l.includes(m))
      continue;
    l.push(m);
    const O = n(C, v);
    for (let z = 0; z < O.length; ++z) {
      const Y = O[z];
      l.push(k + Y);
    }
    d = f + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function Pr() {
  let e = 0, t, s, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (s = Ft(t)) && (a && (a += " "), a += s);
  return a;
}
const Ft = (e) => {
  if (typeof e == "string")
    return e;
  let t, s = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = Ft(e[a])) && (s && (s += " "), s += t);
  return s;
};
function zr(e, ...t) {
  let s, a, n, l = i;
  function i(c) {
    const f = t.reduce((b, p) => p(b), e());
    return s = Ar(f), a = s.cache.get, n = s.cache.set, l = d, d(c);
  }
  function d(c) {
    const f = a(c);
    if (f)
      return f;
    const b = Mr(c, s);
    return n(c, b), b;
  }
  return function() {
    return l(Pr.apply(null, arguments));
  };
}
const A = (e) => {
  const t = (s) => s[e] || [];
  return t.isThemeGetter = !0, t;
}, Lt = /^\[(?:([a-z-]+):)?(.+)\]$/i, $r = /^\d+\/\d+$/, Fr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Lr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Dr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Br = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Gr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, H = (e) => ie(e) || Fr.has(e) || $r.test(e), Z = (e) => ce(e, "length", Jr), ie = (e) => !!e && !Number.isNaN(Number(e)), Be = (e) => ce(e, "number", ie), he = (e) => !!e && Number.isInteger(Number(e)), Wr = (e) => e.endsWith("%") && ie(e.slice(0, -1)), N = (e) => Lt.test(e), Q = (e) => Lr.test(e), Ur = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Kr = (e) => ce(e, Ur, Dt), Yr = (e) => ce(e, "position", Dt), Hr = /* @__PURE__ */ new Set(["image", "url"]), qr = (e) => ce(e, Hr, Qr), Xr = (e) => ce(e, "", Zr), we = () => !0, ce = (e, t, s) => {
  const a = Lt.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : s(a[2]) : !1;
}, Jr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Dr.test(e) && !Vr.test(e)
), Dt = () => !1, Zr = (e) => Br.test(e), Qr = (e) => Gr.test(e), es = () => {
  const e = A("colors"), t = A("spacing"), s = A("blur"), a = A("brightness"), n = A("borderColor"), l = A("borderRadius"), i = A("borderSpacing"), d = A("borderWidth"), c = A("contrast"), f = A("grayscale"), b = A("hueRotate"), p = A("invert"), h = A("gap"), j = A("gradientColorStops"), v = A("gradientColorStopPositions"), C = A("inset"), w = A("margin"), k = A("opacity"), m = A("padding"), O = A("saturate"), z = A("scale"), Y = A("sepia"), q = A("skew"), ye = A("space"), ke = A("translate"), ae = () => ["auto", "contain", "none"], ue = () => ["auto", "hidden", "clip", "visible", "scroll"], be = () => ["auto", N, t], S = () => [N, t], W = () => ["", H, Z], V = () => ["auto", ie, N], X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ee = () => ["solid", "dashed", "dotted", "double", "none"], fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], oe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], J = () => ["", "0", N], xe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], B = () => [ie, N];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [we],
      spacing: [H, Z],
      blur: ["none", "", Q, N],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Q, N],
      borderSpacing: S(),
      borderWidth: W(),
      contrast: B(),
      grayscale: J(),
      hueRotate: B(),
      invert: J(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Wr, Z],
      inset: be(),
      margin: be(),
      opacity: B(),
      padding: S(),
      saturate: B(),
      scale: B(),
      sepia: J(),
      skew: B(),
      space: S(),
      translate: S()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", N]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Q]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": xe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": xe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...X(), N]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ue()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ue()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ue()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ae()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ae()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ae()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [C]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [C]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [C]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [C]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [C]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [C]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [C]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [C]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [C]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", he, N]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: be()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", N]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: J()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: J()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", he, N]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [we]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", he, N]
        }, N]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [we]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [he, N]
        }, N]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", N]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", N]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...oe()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...oe(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...oe(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [m]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [m]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [m]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [m]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [m]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [m]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [m]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [m]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [m]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ye]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [ye]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", N, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [N, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [N, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Q]
        }, Q]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [N, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [N, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Q, Z]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Be]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [we]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", N]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ie, Be]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", H, N]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", N]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", N]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [k]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [k]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", H, Z]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", H, N]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", N]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", N]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [k]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...X(), Yr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Kr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, qr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [j]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [j]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [j]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [d]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [d]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [d]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [d]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [d]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [d]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [d]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [d]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [d]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ee(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [d]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [d]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ee()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [n]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ee()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [H, N]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [H, Z]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: W()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [H, Z]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Q, Xr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [we]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...fe(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": fe()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [s]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Q, N]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [O]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Y]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [s]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Y]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", N]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: B()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", N]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: B()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", N]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [z]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [z]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [z]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [he, N]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ke]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ke]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [q]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [q]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", N]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", N]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", N]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [H, Z, Be]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, ts = /* @__PURE__ */ zr(es);
function u(...e) {
  return ts(jr(e));
}
const ao = ({
  fluid: e = !1,
  className: t,
  children: s,
  ...a
}) => {
  const n = () => e === !0 ? "w-full px-4 sm:px-6 lg:px-8" : e === "sm" ? "w-full px-4 sm:max-w-screen-sm sm:px-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "md" ? "w-full px-4 md:max-w-screen-md md:px-6 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "lg" ? "w-full px-4 lg:max-w-screen-lg lg:px-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "xl" ? "w-full px-4 xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "2xl" ? "w-full px-4 2xl:max-w-screen-2xl" : "w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(n(), "mx-auto transition-all duration-200", t),
      ...a,
      children: s
    }
  );
}, rs = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-4",
  4: "gap-6",
  5: "gap-8",
  6: "gap-12"
}, ss = {
  0: "gap-x-0",
  1: "gap-x-1",
  2: "gap-x-2",
  3: "gap-x-4",
  4: "gap-x-6",
  5: "gap-x-8",
  6: "gap-x-12"
}, as = {
  0: "gap-y-0",
  1: "gap-y-1",
  2: "gap-y-2",
  3: "gap-y-4",
  4: "gap-y-6",
  5: "gap-y-8",
  6: "gap-y-12"
}, os = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch"
}, ns = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}, oo = ({
  gutter: e = 4,
  gx: t,
  gy: s,
  cols: a,
  colsSm: n,
  colsMd: l,
  colsLg: i,
  colsXl: d,
  align: c,
  justify: f,
  className: b,
  children: p,
  ...h
}) => {
  const j = () => t !== void 0 || s !== void 0 ? u(
    t !== void 0 ? ss[t] : "",
    s !== void 0 ? as[s] : ""
  ) : rs[e] || "gap-4", v = () => {
    const w = [];
    return a && w.push(`grid-cols-${a}`), n && w.push(`sm:grid-cols-${n}`), l && w.push(`md:grid-cols-${l}`), i && w.push(`lg:grid-cols-${i}`), d && w.push(`xl:grid-cols-${d}`), w.join(" ");
  }, C = !!(a || n || l || i || d);
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(
        C ? "grid" : "flex flex-wrap -mx-2 sm:-mx-3",
        C ? j() : "",
        c && os[c],
        f && ns[f],
        C && v(),
        b
      ),
      ...h,
      children: p
    }
  );
}, ls = {
  1: "w-1/12",
  2: "w-2/12",
  3: "w-3/12",
  4: "w-4/12",
  5: "w-5/12",
  6: "w-6/12",
  7: "w-7/12",
  8: "w-8/12",
  9: "w-9/12",
  10: "w-10/12",
  11: "w-11/12",
  12: "w-full",
  full: "w-full",
  auto: "w-auto flex-1"
}, is = {
  1: "sm:w-1/12",
  2: "sm:w-2/12",
  3: "sm:w-3/12",
  4: "sm:w-4/12",
  5: "sm:w-5/12",
  6: "sm:w-6/12",
  7: "sm:w-7/12",
  8: "sm:w-8/12",
  9: "sm:w-9/12",
  10: "sm:w-10/12",
  11: "sm:w-11/12",
  12: "sm:w-full",
  full: "sm:w-full",
  auto: "sm:w-auto sm:flex-1"
}, ds = {
  1: "md:w-1/12",
  2: "md:w-2/12",
  3: "md:w-3/12",
  4: "md:w-4/12",
  5: "md:w-5/12",
  6: "md:w-6/12",
  7: "md:w-7/12",
  8: "md:w-8/12",
  9: "md:w-9/12",
  10: "md:w-10/12",
  11: "md:w-11/12",
  12: "md:w-full",
  full: "md:w-full",
  auto: "md:w-auto md:flex-1"
}, cs = {
  1: "lg:w-1/12",
  2: "lg:w-2/12",
  3: "lg:w-3/12",
  4: "lg:w-4/12",
  5: "lg:w-5/12",
  6: "lg:w-6/12",
  7: "lg:w-7/12",
  8: "lg:w-8/12",
  9: "lg:w-9/12",
  10: "lg:w-10/12",
  11: "lg:w-11/12",
  12: "lg:w-full",
  full: "lg:w-full",
  auto: "lg:w-auto lg:flex-1"
}, us = {
  1: "xl:w-1/12",
  2: "xl:w-2/12",
  3: "xl:w-3/12",
  4: "xl:w-4/12",
  5: "xl:w-5/12",
  6: "xl:w-6/12",
  7: "xl:w-7/12",
  8: "xl:w-8/12",
  9: "xl:w-9/12",
  10: "xl:w-10/12",
  11: "xl:w-11/12",
  12: "xl:w-full",
  full: "xl:w-full",
  auto: "xl:w-auto xl:flex-1"
}, no = ({
  xs: e,
  sm: t,
  md: s,
  lg: a,
  xl: n,
  offsetXs: l,
  offsetSm: i,
  offsetMd: d,
  offsetLg: c,
  offsetXl: f,
  className: b,
  children: p,
  ...h
}) => {
  const j = () => {
    const v = ["px-2 sm:px-3 flex-shrink-0 max-w-full box-border"];
    return !e && !t && !s && !a && !n ? v.push("flex-1 w-full") : (e !== void 0 ? v.push(ls[String(e)] || "w-full") : v.push("w-full"), t !== void 0 && v.push(is[String(t)] || ""), s !== void 0 && v.push(ds[String(s)] || ""), a !== void 0 && v.push(cs[String(a)] || ""), n !== void 0 && v.push(us[String(n)] || "")), l && v.push(`ml-[${l / 12 * 100}%]`), i && v.push(`sm:ml-[${i / 12 * 100}%]`), d && v.push(`md:ml-[${d / 12 * 100}%]`), c && v.push(`lg:ml-[${c / 12 * 100}%]`), f && v.push(`xl:ml-[${f / 12 * 100}%]`), v.join(" ");
  };
  return /* @__PURE__ */ r.jsx("div", { className: u(j(), b), ...h, children: p });
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vt = (...e) => e.filter((t, s, a) => !!t && t.trim() !== "" && a.indexOf(t) === s).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fs = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = Mt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: a,
    className: n = "",
    children: l,
    iconNode: i,
    ...d
  }, c) => Ge(
    "svg",
    {
      ref: c,
      ...fs,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: a ? Number(s) * 24 / Number(t) : s,
      className: Vt("lucide", n),
      ...d
    },
    [
      ...i.map(([f, b]) => Ge(f, b)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P = (e, t) => {
  const s = Mt(
    ({ className: a, ...n }, l) => Ge(xs, {
      ref: l,
      iconNode: t,
      className: Vt(`lucide-${bs(e)}`, a),
      ...n
    })
  );
  return s.displayName = `${e}`, s;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
], ps = P("ArrowDownRight", ms);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
], hs = P("ArrowUpRight", gs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Bt = P("Check", ws);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ye = P("ChevronDown", vs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Gt = P("ChevronLeft", ys);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], He = P("ChevronRight", ks);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], qe = P("CircleAlert", js);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Xe = P("CircleCheck", Ns);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Ct = P("CircleX", Cs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
], Rs = P("CodeXml", _s);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Ss = P("Copy", Es);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z", key: "1mlx9k" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }]
], Os = P("FileQuestion", Ts);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], U = P("Info", As);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Ms = P("LoaderCircle", Is);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], zs = P("Menu", Ps);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M12 22v-9", key: "x3hkom" }],
  [
    "path",
    {
      d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
      key: "2ntwy6"
    }
  ],
  [
    "path",
    {
      d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
      key: "1pmm1c"
    }
  ],
  [
    "path",
    {
      d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",
      key: "12ttoo"
    }
  ]
], Fs = P("PackageOpen", $s);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], Ds = P("Star", Ls);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Se = P("TriangleAlert", Vs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], re = P("X", Bs), Gs = {
  primary: "bg-[#0d6efd] text-white hover:bg-[#0b5ed7] focus:ring-4 focus:ring-blue-300 border border-[#0d6efd] active:bg-[#0a58ca]",
  secondary: "bg-[#6c757d] text-white hover:bg-[#5c636a] focus:ring-4 focus:ring-gray-300 border border-[#6c757d] active:bg-[#565e64]",
  success: "bg-[#198754] text-white hover:bg-[#157347] focus:ring-4 focus:ring-green-300 border border-[#198754] active:bg-[#146c43]",
  danger: "bg-[#dc3545] text-white hover:bg-[#bb2d3b] focus:ring-4 focus:ring-red-300 border border-[#dc3545] active:bg-[#b02a37]",
  warning: "bg-[#ffc107] text-gray-900 hover:bg-[#ffca2c] focus:ring-4 focus:ring-yellow-300 border border-[#ffc107] active:bg-[#ffc720]",
  info: "bg-[#0dcaf0] text-gray-900 hover:bg-[#31d2f2] focus:ring-4 focus:ring-cyan-300 border border-[#0dcaf0] active:bg-[#25cff2]",
  light: "bg-[#f8f9fa] text-gray-900 hover:bg-[#e2e6ea] focus:ring-4 focus:ring-gray-200 border border-[#dee2e6] active:bg-[#dae0e5] dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-700",
  dark: "bg-[#212529] text-white hover:bg-[#1c1f23] focus:ring-4 focus:ring-gray-400 border border-[#212529] active:bg-[#1a1e21]",
  link: "text-[#0d6efd] underline-offset-4 hover:underline bg-transparent border-transparent focus:ring-0 p-0",
  // Outline variants
  "outline-primary": "text-[#0d6efd] border border-[#0d6efd] hover:bg-[#0d6efd] hover:text-white focus:ring-4 focus:ring-blue-200 active:bg-[#0b5ed7]",
  "outline-secondary": "text-[#6c757d] border border-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:ring-4 focus:ring-gray-200 active:bg-[#5c636a]",
  "outline-success": "text-[#198754] border border-[#198754] hover:bg-[#198754] hover:text-white focus:ring-4 focus:ring-green-200 active:bg-[#157347]",
  "outline-danger": "text-[#dc3545] border border-[#dc3545] hover:bg-[#dc3545] hover:text-white focus:ring-4 focus:ring-red-200 active:bg-[#bb2d3b]",
  "outline-warning": "text-[#ffc107] border border-[#ffc107] hover:bg-[#ffc107] hover:text-gray-900 focus:ring-4 focus:ring-yellow-200 active:bg-[#ffca2c]",
  "outline-info": "text-[#0dcaf0] border border-[#0dcaf0] hover:bg-[#0dcaf0] hover:text-gray-900 focus:ring-4 focus:ring-cyan-200 active:bg-[#31d2f2]",
  "outline-light": "text-[#f8f9fa] border border-[#f8f9fa] hover:bg-[#f8f9fa] hover:text-gray-900 focus:ring-4 focus:ring-gray-200 active:bg-[#e2e6ea]",
  "outline-dark": "text-[#212529] border border-[#212529] hover:bg-[#212529] hover:text-white focus:ring-4 focus:ring-gray-300 active:bg-[#1c1f23] dark:text-slate-200 dark:border-slate-500 dark:hover:bg-slate-700"
}, Ws = {
  sm: "text-xs px-2.5 py-1.5 min-h-[32px] gap-1.5",
  md: "text-sm px-4 py-2 min-h-[38px] gap-2",
  lg: "text-base px-5 py-2.5 min-h-[46px] gap-2.5"
}, Us = $.forwardRef(
  ({
    variant: e = "primary",
    size: t = "md",
    pill: s = !1,
    block: a = !1,
    isLoading: n = !1,
    icon: l,
    disabled: i,
    className: d,
    children: c,
    ...f
  }, b) => /* @__PURE__ */ r.jsxs(
    "button",
    {
      ref: b,
      disabled: i || n,
      className: u(
        "inline-flex items-center justify-center font-medium transition-all duration-150 select-none shadow-sm",
        "focus:outline-none disabled:opacity-65 disabled:pointer-events-none active:scale-[0.98]",
        s ? "rounded-full" : "rounded-md",
        a ? "w-full flex" : "",
        Ws[t],
        Gs[e],
        d
      ),
      ...f,
      children: [
        n && /* @__PURE__ */ r.jsx(Ms, { className: u("animate-spin", t === "sm" ? "w-3.5 h-3.5" : t === "lg" ? "w-5 h-5" : "w-4 h-4") }),
        !n && l && /* @__PURE__ */ r.jsx("span", { className: "inline-flex shrink-0", children: l }),
        c
      ]
    }
  )
);
Us.displayName = "Button";
const lo = ({
  vertical: e = !1,
  className: t,
  children: s,
  ...a
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    role: "group",
    className: u(
      "inline-flex flex-wrap shadow-sm rounded-md",
      e ? "flex-col [&>*]:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:first-child)]:-mt-px" : "flex-row [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:-ml-px",
      t
    ),
    ...a,
    children: s
  }
), io = ({
  variant: e = "default",
  className: t,
  ...s
}) => /* @__PURE__ */ r.jsx(
  "button",
  {
    type: "button",
    "aria-label": "Close",
    className: u(
      "p-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",
      e === "white" ? "text-white hover:bg-white/20 focus:ring-white" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-400",
      t
    ),
    ...s,
    children: /* @__PURE__ */ r.jsx(re, { className: "w-4 h-4" })
  }
), Ks = {
  primary: "bg-[#0d6efd] text-white",
  secondary: "bg-[#6c757d] text-white",
  success: "bg-[#198754] text-white",
  danger: "bg-[#dc3545] text-white",
  warning: "bg-[#ffc107] text-gray-900",
  info: "bg-[#0dcaf0] text-gray-900",
  light: "bg-[#f8f9fa] text-gray-800 border border-gray-200 dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600",
  dark: "bg-[#212529] text-white"
}, Ys = {
  sm: "text-[10px] px-1.5 py-0.5 gap-1",
  md: "text-xs px-2.5 py-1 gap-1.5",
  lg: "text-sm px-3 py-1.5 gap-2"
}, co = ({
  variant: e = "primary",
  pill: t = !1,
  dot: s = !1,
  size: a = "md",
  icon: n,
  className: l,
  children: i,
  ...d
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    className: u(
      "inline-flex items-center justify-center font-semibold tracking-wide leading-none transition-colors align-baseline whitespace-nowrap",
      t ? "rounded-full" : "rounded",
      Ks[e],
      Ys[a],
      l
    ),
    ...d,
    children: [
      s && /* @__PURE__ */ r.jsx(
        "span",
        {
          className: u(
            "inline-block rounded-full",
            a === "sm" ? "w-1.5 h-1.5" : "w-2 h-2",
            e === "warning" || e === "info" || e === "light" ? "bg-current opacity-80" : "bg-white opacity-90"
          )
        }
      ),
      n && /* @__PURE__ */ r.jsx("span", { className: "inline-flex shrink-0", children: n }),
      i
    ]
  }
), _t = {
  primary: {
    wrapper: "bg-[#cfe2ff] text-[#084298] border-[#b6d4fe] dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-900",
    close: "text-[#084298] hover:bg-[#b6d4fe]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(U, { className: "w-5 h-5 shrink-0" })
  },
  secondary: {
    wrapper: "bg-[#e2e3e5] text-[#41464b] border-[#d3d6d8] dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    close: "text-[#41464b] hover:bg-[#d3d6d8]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(U, { className: "w-5 h-5 shrink-0" })
  },
  success: {
    wrapper: "bg-[#d1e7dd] text-[#0f5132] border-[#badbcc] dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900",
    close: "text-[#0f5132] hover:bg-[#badbcc]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(Xe, { className: "w-5 h-5 shrink-0" })
  },
  danger: {
    wrapper: "bg-[#f8d7da] text-[#842029] border-[#f5c2c7] dark:bg-red-950/50 dark:text-red-300 dark:border-red-900",
    close: "text-[#842029] hover:bg-[#f5c2c7]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(qe, { className: "w-5 h-5 shrink-0" })
  },
  warning: {
    wrapper: "bg-[#fff3cd] text-[#664d03] border-[#ffecb5] dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-900",
    close: "text-[#664d03] hover:bg-[#ffecb5]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(Se, { className: "w-5 h-5 shrink-0" })
  },
  info: {
    wrapper: "bg-[#cff4fc] text-[#055160] border-[#b6effb] dark:bg-cyan-950/50 dark:text-cyan-300 dark:border-cyan-900",
    close: "text-[#055160] hover:bg-[#b6effb]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(U, { className: "w-5 h-5 shrink-0" })
  },
  light: {
    wrapper: "bg-[#fefefe] text-[#636464] border-[#e2e3e5] dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700",
    close: "text-[#636464] hover:bg-gray-200",
    defaultIcon: /* @__PURE__ */ r.jsx(U, { className: "w-5 h-5 shrink-0" })
  },
  dark: {
    wrapper: "bg-[#d3d3d4] text-[#141619] border-[#bcbebf] dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700",
    close: "text-[#141619] hover:bg-[#bcbebf]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(U, { className: "w-5 h-5 shrink-0" })
  }
}, Hs = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("h4", { className: u("text-base sm:text-lg font-semibold mb-1 leading-snug", e), ...s, children: t }), qs = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("a", { className: u("font-bold underline underline-offset-2 hover:opacity-80 transition-opacity", e), ...s, children: t }), Wt = ({
  variant: e = "primary",
  dismissible: t = !1,
  show: s = !0,
  onClose: a,
  icon: n,
  className: l,
  children: i,
  ...d
}) => {
  const [c, f] = F(s);
  if (!c) return null;
  const b = () => {
    f(!1), a && a();
  }, p = _t[e] || _t.primary, h = () => n === !1 ? null : n === !0 || n === void 0 ? p.defaultIcon : n;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "alert",
      className: u(
        "relative flex items-start gap-3 p-4 rounded-lg border text-sm sm:text-base transition-all duration-200 shadow-sm",
        p.wrapper,
        l
      ),
      ...d,
      children: [
        h() && /* @__PURE__ */ r.jsx("div", { className: "mt-0.5 shrink-0", children: h() }),
        /* @__PURE__ */ r.jsx("div", { className: "flex-1 min-w-0 pr-6", children: i }),
        t && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: b,
            "aria-label": "Close alert",
            className: u(
              "absolute top-3.5 right-3 p-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",
              p.close
            ),
            children: /* @__PURE__ */ r.jsx(re, { className: "w-4 h-4" })
          }
        )
      ]
    }
  );
};
Wt.Heading = Hs;
Wt.Link = qs;
const Xs = {
  default: "border-slate-200 dark:border-slate-700",
  primary: "border-blue-500",
  success: "border-emerald-500",
  danger: "border-red-500",
  warning: "border-amber-500",
  info: "border-cyan-500",
  none: "border-transparent"
}, Js = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: u(
      "px-4 py-3 sm:px-6 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 font-medium text-slate-800 dark:text-slate-200 flex items-center justify-between",
      e
    ),
    ...s,
    children: t
  }
), Zs = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("div", { className: u("p-4 sm:p-6 flex-1 text-slate-600 dark:text-slate-300", e), ...s, children: t }), Qs = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("h3", { className: u("text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 leading-tight", e), ...s, children: t }), ea = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("h6", { className: u("text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-3", e), ...s, children: t }), ta = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("p", { className: u("text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 last:mb-0 leading-relaxed", e), ...s, children: t }), ra = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: u(
      "px-4 py-3 sm:px-6 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center justify-between",
      e
    ),
    ...s,
    children: t
  }
), sa = ({
  position: e = "top",
  className: t,
  alt: s = "",
  ...a
}) => {
  const n = e === "top" ? "rounded-t-xl" : e === "bottom" ? "rounded-b-xl" : "rounded-none";
  return /* @__PURE__ */ r.jsx(
    "img",
    {
      className: u("w-full object-cover max-h-60", n, t),
      alt: s,
      ...a
    }
  );
}, se = ({
  hoverable: e = !1,
  border: t = "default",
  horizontal: s = !1,
  className: a,
  children: n,
  ...l
}) => {
  const i = () => s === !0 ? "flex flex-col md:flex-row" : s === "sm" ? "flex flex-col sm:flex-row" : s === "md" ? "flex flex-col md:flex-row" : s === "lg" ? "flex flex-col lg:flex-row" : "flex flex-col";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(
        "rounded-xl border bg-white dark:bg-slate-850 shadow-sm transition-all duration-200 overflow-hidden",
        Xs[t],
        e && "hover:shadow-md hover:-translate-y-0.5",
        i(),
        a
      ),
      ...l,
      children: n
    }
  );
};
se.Header = Js;
se.Body = Zs;
se.Title = Qs;
se.Subtitle = ea;
se.Text = ta;
se.Footer = ra;
se.Img = sa;
const Je = Te({
  isOpen: !1,
  setIsOpen: () => {
  },
  expand: "md"
}), aa = {
  sm: "sm:flex-row sm:items-center",
  md: "md:flex-row md:items-center",
  lg: "lg:flex-row lg:items-center",
  xl: "xl:flex-row xl:items-center",
  always: "flex-row items-center",
  never: "flex-col"
}, oa = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
  xl: "xl:hidden",
  always: "hidden",
  never: "block"
}, na = {
  sm: "sm:!flex sm:basis-auto sm:flex-row",
  md: "md:!flex md:basis-auto md:flex-row",
  lg: "lg:!flex lg:basis-auto lg:flex-row",
  xl: "xl:!flex xl:basis-auto xl:flex-row",
  always: "!flex basis-auto flex-row",
  never: ""
}, la = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx(
  "a",
  {
    className: u(
      "text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 mr-4 py-1 select-none",
      e
    ),
    ...s,
    children: t
  }
), ia = ({
  className: e,
  children: t,
  ...s
}) => {
  const { isOpen: a, setIsOpen: n, expand: l } = K(Je);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      onClick: () => n(!a),
      "aria-label": "Toggle navigation",
      className: u(
        "p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
        oa[l],
        e
      ),
      ...s,
      children: t || (a ? /* @__PURE__ */ r.jsx(re, { className: "w-5 h-5" }) : /* @__PURE__ */ r.jsx(zs, { className: "w-5 h-5" }))
    }
  );
}, da = ({
  className: e,
  children: t,
  ...s
}) => {
  const { isOpen: a, expand: n } = K(Je);
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(
        "w-full basis-full items-center justify-between transition-all duration-300 ease-in-out",
        na[n],
        a ? "flex flex-col mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 lg:border-0 lg:mt-0 lg:pt-0" : "hidden",
        e
      ),
      ...s,
      children: t
    }
  );
}, Ze = ({
  expand: e = "md",
  theme: t = "light",
  sticky: s,
  fixed: a,
  className: n,
  children: l,
  ...i
}) => {
  const [d, c] = F(!1), f = s === "top" ? "sticky top-0 z-40" : s === "bottom" ? "sticky bottom-0 z-40" : a === "top" ? "fixed top-0 left-0 right-0 z-40" : a === "bottom" ? "fixed bottom-0 left-0 right-0 z-40" : "relative", b = t === "dark" ? "bg-slate-900 text-white border-b border-slate-800 shadow-md" : "bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200/80 dark:bg-slate-900/95 dark:border-slate-800 shadow-sm";
  return /* @__PURE__ */ r.jsx(Je.Provider, { value: { isOpen: d, setIsOpen: c, expand: e }, children: /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: u(
        "w-full px-4 py-3 sm:px-6 transition-colors duration-200",
        f,
        b,
        n
      ),
      ...i,
      children: /* @__PURE__ */ r.jsx("div", { className: u("mx-auto max-w-7xl flex flex-wrap items-center justify-between", aa[e]), children: l })
    }
  ) });
};
Ze.Brand = la;
Ze.Toggle = ia;
Ze.Collapse = da;
const ca = ({
  active: e = !1,
  disabled: t = !1,
  inNavbar: s = !1,
  className: a,
  children: n,
  ...l
}) => /* @__PURE__ */ r.jsx(
  "a",
  {
    className: u(
      "px-3.5 py-2 text-sm font-medium transition-all duration-150 inline-flex items-center gap-2 rounded-md select-none",
      s && "w-full lg:w-auto justify-start lg:justify-center py-2.5",
      t ? "text-slate-400 dark:text-slate-600 pointer-events-none" : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400",
      e && "text-blue-600 font-semibold dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40",
      a
    ),
    ...l,
    children: n
  }
), ua = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("li", { className: u("inline-block w-full lg:w-auto", e), ...s, children: t }), Ut = ({
  variant: e = "default",
  fill: t = !1,
  justified: s = !1,
  scrollable: a = !0,
  navbar: n = !1,
  className: l,
  children: i,
  ...d
}) => {
  const c = () => {
    switch (e) {
      case "pills":
        return "[&_a]:rounded-lg [&_a.active]:bg-blue-600 [&_a.active]:text-white [&_a.active]:shadow-sm";
      case "tabs":
        return "border-b border-slate-200 dark:border-slate-700 [&_a]:rounded-t-lg [&_a]:border-b-2 [&_a]:border-transparent [&_a.active]:border-blue-600 [&_a.active]:text-blue-600 dark:[&_a.active]:text-blue-400";
      case "underline":
        return "border-b border-slate-200 dark:border-slate-700 [&_a]:border-b-2 [&_a]:border-transparent [&_a.active]:border-blue-600 [&_a.active]:text-blue-600 [&_a]:rounded-none";
      default:
        return "";
    }
  };
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: u(
        n ? "w-full lg:w-auto flex flex-col lg:flex-row items-stretch lg:items-center gap-1 sm:gap-2" : "flex items-center gap-1 sm:gap-2",
        !n && a && "overflow-x-auto custom-scrollbar pb-1 sm:pb-0 max-w-full",
        t && "[&>*]:flex-auto [&_a]:justify-center text-center",
        s && "[&>*]:flex-1 [&_a]:justify-center text-center",
        c(),
        l
      ),
      ...d,
      children: /* @__PURE__ */ r.jsx("ul", { className: u(
        "list-none p-0 m-0 w-full flex gap-1 sm:gap-2",
        n ? "flex-col lg:flex-row items-stretch lg:items-center" : "flex-row items-center"
      ), children: i })
    }
  );
};
Ut.Link = ca;
Ut.Item = ua;
const ba = ({
  active: e = !1,
  href: t,
  className: s,
  children: a,
  ...n
}) => /* @__PURE__ */ r.jsx(
  "li",
  {
    className: u(
      "inline-flex items-center text-xs sm:text-sm font-medium",
      e ? "text-slate-800 dark:text-slate-200 font-semibold" : "text-slate-500 dark:text-slate-400",
      s
    ),
    ...n,
    children: t && !e ? /* @__PURE__ */ r.jsx("a", { href: t, className: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors", children: a }) : /* @__PURE__ */ r.jsx("span", { children: a })
  }
), fa = ({
  separator: e = /* @__PURE__ */ r.jsx(He, { className: "w-3.5 h-3.5 text-slate-400 mx-1.5 shrink-0" }),
  className: t,
  children: s,
  ...a
}) => {
  const n = $.Children.toArray(s);
  return /* @__PURE__ */ r.jsx("nav", { "aria-label": "breadcrumb", className: u("flex py-2 px-1", t), ...a, children: /* @__PURE__ */ r.jsx("ol", { className: "inline-flex items-center flex-wrap gap-1 list-none p-0 m-0", children: n.map((l, i) => /* @__PURE__ */ r.jsxs($.Fragment, { children: [
    l,
    i < n.length - 1 && e
  ] }, i)) }) });
};
fa.Item = ba;
const Ee = {
  sm: "w-7 h-7 text-xs",
  md: "w-9 h-9 text-sm",
  lg: "w-11 h-11 text-base"
}, uo = ({
  currentPage: e,
  totalPages: t,
  onPageChange: s,
  size: a = "md",
  maxVisible: n = 5,
  className: l,
  ...i
}) => {
  const c = (() => {
    const f = [];
    if (t <= n)
      for (let b = 1; b <= t; b++) f.push(b);
    else {
      const b = Math.floor(n / 2);
      let p = Math.max(1, e - b), h = Math.min(t, p + n - 1);
      h - p + 1 < n && (p = Math.max(1, h - n + 1)), p > 1 && (f.push(1), p > 2 && f.push("..."));
      for (let j = p; j <= h; j++)
        f.push(j);
      h < t && (h < t - 1 && f.push("..."), f.push(t));
    }
    return f;
  })();
  return /* @__PURE__ */ r.jsxs("nav", { "aria-label": "Pagination", className: u("flex items-center justify-center gap-1", l), ...i, children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        disabled: e <= 1,
        onClick: () => s(e - 1),
        className: u(
          "inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none shadow-sm",
          Ee[a]
        ),
        "aria-label": "Previous page",
        children: /* @__PURE__ */ r.jsx(Gt, { className: "w-4 h-4" })
      }
    ),
    c.map(
      (f, b) => f === "..." ? /* @__PURE__ */ r.jsx(
        "span",
        {
          className: u("inline-flex items-center justify-center text-slate-400 font-semibold", Ee[a]),
          children: "..."
        },
        `ellipsis-${b}`
      ) : /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          onClick: () => s(f),
          className: u(
            "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150 shadow-sm",
            Ee[a],
            e === f ? "bg-blue-600 text-white font-bold shadow-blue-500/20" : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
          ),
          children: f
        },
        `page-${f}`
      )
    ),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        disabled: e >= t,
        onClick: () => s(e + 1),
        className: u(
          "inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none shadow-sm",
          Ee[a]
        ),
        "aria-label": "Next page",
        children: /* @__PURE__ */ r.jsx(He, { className: "w-4 h-4" })
      }
    )
  ] });
}, xa = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  fullscreen: "max-w-full m-0 h-full rounded-none"
}, ma = ({
  closeButton: e = !0,
  onClose: t,
  className: s,
  children: a,
  ...n
}) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    className: u(
      "flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-t-xl",
      s
    ),
    ...n,
    children: [
      /* @__PURE__ */ r.jsx("div", { className: "flex-1 pr-4", children: a }),
      e && /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          onClick: t,
          "aria-label": "Close",
          className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none",
          children: /* @__PURE__ */ r.jsx(re, { className: "w-5 h-5" })
        }
      )
    ]
  }
), pa = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("h5", { className: u("text-lg sm:text-xl font-semibold text-slate-900 dark:text-white", e), ...s, children: t }), ga = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("div", { className: u("p-5 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base", e), ...s, children: t }), ha = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: u(
      "flex items-center justify-end gap-2.5 px-5 py-3.5 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 rounded-b-xl",
      e
    ),
    ...s,
    children: t
  }
), Oe = ({
  show: e,
  onClose: t,
  size: s = "md",
  fullscreenSmDown: a = !1,
  centered: n = !0,
  scrollable: l = !1,
  backdrop: i = !0,
  className: d,
  children: c
}) => {
  if (de(() => {
    const b = (p) => {
      p.key === "Escape" && e && t();
    };
    return e ? (document.body.style.overflow = "hidden", window.addEventListener("keydown", b)) : document.body.style.overflow = "", () => {
      document.body.style.overflow = "", window.removeEventListener("keydown", b);
    };
  }, [e, t]), !e) return null;
  const f = (b) => {
    b.target === b.currentTarget && i !== "static" && t();
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      onClick: f,
      className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200",
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: u(
            "relative w-full bg-white dark:bg-slate-850 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col transition-all transform scale-100 animate-in zoom-in-95 duration-150",
            a ? "max-w-full h-full sm:h-auto sm:max-w-lg rounded-none sm:rounded-xl" : xa[s],
            n ? "my-auto" : "mt-12 mb-auto",
            l && "max-h-[calc(100vh-4rem)] [&>div:nth-child(2)]:overflow-y-auto custom-scrollbar",
            d
          ),
          children: c
        }
      )
    }
  );
};
Oe.Header = ma;
Oe.Title = pa;
Oe.Body = ga;
Oe.Footer = ha;
const Rt = {
  start: {
    panel: "top-0 bottom-0 left-0 w-80 max-w-[85vw] border-r",
    transform: "translate-x-0"
  },
  end: {
    panel: "top-0 bottom-0 right-0 w-80 max-w-[85vw] border-l",
    transform: "translate-x-0"
  },
  top: {
    panel: "top-0 left-0 right-0 max-h-[50vh] border-b",
    transform: "translate-y-0"
  },
  bottom: {
    panel: "bottom-0 left-0 right-0 max-h-[50vh] border-t rounded-t-2xl",
    transform: "translate-y-0"
  }
}, wa = ({
  onClose: e,
  className: t,
  children: s,
  ...a
}) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    className: u(
      "flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("div", { className: "flex-1 pr-4", children: s }),
      e && /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          onClick: e,
          "aria-label": "Close",
          className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none",
          children: /* @__PURE__ */ r.jsx(re, { className: "w-5 h-5" })
        }
      )
    ]
  }
), va = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("h5", { className: u("text-lg font-semibold text-slate-900 dark:text-white", e), ...s, children: t }), ya = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("div", { className: u("p-5 flex-1 overflow-y-auto custom-scrollbar text-slate-600 dark:text-slate-300", e), ...s, children: t }), Qe = ({
  show: e,
  onClose: t,
  placement: s = "start",
  backdrop: a = !0,
  className: n,
  children: l
}) => (de(() => {
  const i = (d) => {
    d.key === "Escape" && e && t();
  };
  return e ? (document.body.style.overflow = "hidden", window.addEventListener("keydown", i)) : document.body.style.overflow = "", () => {
    document.body.style.overflow = "", window.removeEventListener("keydown", i);
  };
}, [e, t]), e ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-50 flex", children: [
  a && /* @__PURE__ */ r.jsx(
    "div",
    {
      onClick: t,
      className: "fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300"
    }
  ),
  /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(
        "fixed z-50 flex flex-col bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700 shadow-2xl transition-transform duration-300 ease-in-out",
        Rt[s].panel,
        Rt[s].transform,
        n
      ),
      children: l
    }
  )
] }) : null);
Qe.Header = wa;
Qe.Title = va;
Qe.Body = ya;
const Ae = Te({
  activeKeys: [],
  toggleItem: () => {
  },
  flush: !1
}), et = Te({ eventKey: "" }), ka = ({
  eventKey: e,
  className: t,
  children: s,
  ...a
}) => {
  const { flush: n } = K(Ae);
  return /* @__PURE__ */ r.jsx(et.Provider, { value: { eventKey: e }, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(
        "transition-colors",
        n ? "border-b border-slate-200 dark:border-slate-700" : "border border-slate-200 dark:border-slate-700 rounded-xl mb-2.5 overflow-hidden shadow-sm",
        t
      ),
      ...a,
      children: s
    }
  ) });
}, ja = ({
  className: e,
  children: t,
  ...s
}) => {
  const { activeKeys: a, toggleItem: n } = K(Ae), { eventKey: l } = K(et), i = a.includes(l);
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      onClick: () => n(l),
      "aria-expanded": i,
      className: u(
        "w-full flex items-center justify-between px-5 py-4 text-left font-medium text-slate-800 dark:text-slate-100 transition-colors focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60",
        i && "bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 font-semibold",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "flex-1 pr-3", children: t }),
        /* @__PURE__ */ r.jsx(
          Ye,
          {
            className: u(
              "w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0",
              i && "transform rotate-180 text-blue-600 dark:text-blue-400"
            )
          }
        )
      ]
    }
  );
}, Na = ({
  className: e,
  children: t,
  ...s
}) => {
  const { activeKeys: a } = K(Ae), { eventKey: n } = K(et);
  return a.includes(n) ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(
        "px-5 py-4 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed animate-in fade-in-50 duration-200",
        e
      ),
      ...s,
      children: t
    }
  ) : null;
}, tt = ({
  alwaysOpen: e = !1,
  defaultActiveKey: t,
  flush: s = !1,
  className: a,
  children: n,
  ...l
}) => {
  const [i, d] = F(() => t ? Array.isArray(t) ? t : [t] : []), c = (f) => {
    d(
      e ? (b) => b.includes(f) ? b.filter((p) => p !== f) : [...b, f] : (b) => b.includes(f) ? [] : [f]
    );
  };
  return /* @__PURE__ */ r.jsx(Ae.Provider, { value: { activeKeys: i, toggleItem: c, flush: s }, children: /* @__PURE__ */ r.jsx("div", { className: u("w-full", a), ...l, children: n }) });
};
tt.Item = ka;
tt.Header = ja;
tt.Body = Na;
const Ie = Te({
  isOpen: !1,
  setIsOpen: () => {
  }
}), Ca = ({
  className: e,
  children: t,
  ...s
}) => {
  const { isOpen: a, setIsOpen: n } = K(Ie);
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      onClick: () => n(!a),
      "aria-expanded": a,
      className: u(
        "inline-flex items-center justify-between gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-colors",
        e
      ),
      ...s,
      children: [
        t,
        /* @__PURE__ */ r.jsx(Ye, { className: u("w-4 h-4 transition-transform duration-150", a && "rotate-180") })
      ]
    }
  );
}, _a = ({
  align: e = "start",
  className: t,
  children: s,
  ...a
}) => {
  const { isOpen: n } = K(Ie);
  return n ? /* @__PURE__ */ r.jsx(
    "div",
    {
      role: "menu",
      className: u(
        "absolute z-50 mt-2 min-w-[12rem] py-1.5 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in-95 duration-100",
        e === "end" ? "right-0" : "left-0",
        t
      ),
      ...a,
      children: s
    }
  ) : null;
}, Ra = ({
  active: e = !1,
  disabled: t = !1,
  onClick: s,
  className: a,
  children: n,
  ...l
}) => {
  const { setIsOpen: i } = K(Ie), d = (c) => {
    t || (i(!1), s && s(c));
  };
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      role: "menuitem",
      disabled: t,
      onClick: d,
      className: u(
        "w-full text-left px-4 py-2 text-sm flex items-center gap-2.5 transition-colors",
        t ? "text-slate-400 dark:text-slate-600 pointer-events-none" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-750",
        e && "bg-blue-600 text-white hover:bg-blue-700 font-medium",
        a
      ),
      ...l,
      children: n
    }
  );
}, Ea = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx("div", { className: u("my-1.5 border-t border-slate-100 dark:border-slate-700", e), ...t }), Sa = ({ className: e, children: t, ...s }) => /* @__PURE__ */ r.jsx("div", { className: u("px-4 py-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider", e), ...s, children: t }), ve = ({ className: e, children: t, ...s }) => {
  const [a, n] = F(!1), l = Ue(null);
  return de(() => {
    const i = (c) => {
      l.current && !l.current.contains(c.target) && n(!1);
    }, d = (c) => {
      c.key === "Escape" && n(!1);
    };
    return a && (document.addEventListener("mousedown", i), document.addEventListener("keydown", d)), () => {
      document.removeEventListener("mousedown", i), document.removeEventListener("keydown", d);
    };
  }, [a]), /* @__PURE__ */ r.jsx(Ie.Provider, { value: { isOpen: a, setIsOpen: n }, children: /* @__PURE__ */ r.jsx("div", { ref: l, className: u("relative inline-block text-left", e), ...s, children: t }) });
};
ve.Toggle = Ca;
ve.Menu = _a;
ve.Item = Ra;
ve.Divider = Ea;
ve.Header = Sa;
const bo = ({
  className: e,
  children: t,
  as: s = "div",
  ...a
}) => /* @__PURE__ */ r.jsx(s, { className: u("mb-4 last:mb-0 w-full", e), ...a, children: t }), fo = ({
  required: e = !1,
  className: t,
  children: s,
  ...a
}) => /* @__PURE__ */ r.jsxs(
  "label",
  {
    className: u(
      "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 select-none",
      t
    ),
    ...a,
    children: [
      s,
      e && /* @__PURE__ */ r.jsx("span", { className: "text-red-500 ml-1 font-bold", children: "*" })
    ]
  }
), Ta = {
  sm: "px-2.5 py-1.5 text-xs rounded-md",
  md: "px-3.5 py-2 text-sm rounded-lg",
  lg: "px-4 py-2.5 text-base rounded-lg"
}, Oa = $.forwardRef(
  ({
    as: e = "input",
    rows: t = 3,
    isValid: s,
    isInvalid: a,
    sizeVariant: n = "md",
    helperText: l,
    errorMessage: i,
    successMessage: d,
    disabled: c,
    className: f,
    ...b
  }, p) => {
    const h = e, j = a ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-900 placeholder:text-red-300" : s ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900" : "border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500/20";
    return /* @__PURE__ */ r.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ r.jsx(
        h,
        {
          ref: p,
          rows: e === "textarea" ? t : void 0,
          disabled: c,
          className: u(
            "w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border shadow-sm transition-colors duration-150",
            "focus:outline-none focus:ring-4 placeholder:text-slate-400 dark:placeholder:text-slate-500",
            "disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850",
            Ta[n],
            j,
            f
          ),
          ...b
        }
      ),
      a && i && /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-red-600 dark:text-red-400 font-medium", children: i }),
      s && d && /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium", children: d }),
      !a && !s && l && /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: l })
    ] });
  }
);
Oa.displayName = "FormControl";
const Aa = {
  sm: "px-2.5 py-1.5 text-xs rounded-md pr-8",
  md: "px-3.5 py-2 text-sm rounded-lg pr-9",
  lg: "px-4 py-2.5 text-base rounded-lg pr-10"
}, Ia = $.forwardRef(
  ({
    isValid: e,
    isInvalid: t,
    sizeVariant: s = "md",
    helperText: a,
    errorMessage: n,
    disabled: l,
    className: i,
    children: d,
    ...c
  }, f) => {
    const b = t ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-900" : e ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900" : "border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500/20";
    return /* @__PURE__ */ r.jsxs("div", { className: "relative w-full", children: [
      /* @__PURE__ */ r.jsx(
        "select",
        {
          ref: f,
          disabled: l,
          className: u(
            "w-full appearance-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border shadow-sm transition-colors duration-150",
            "focus:outline-none focus:ring-4",
            "disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850",
            Aa[s],
            b,
            i
          ),
          ...c,
          children: d
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500 dark:text-slate-400", children: /* @__PURE__ */ r.jsx(Ye, { className: "w-4 h-4" }) }),
      t && n && /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-red-600 dark:text-red-400 font-medium", children: n }),
      !t && a && /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: a })
    ] });
  }
);
Ia.displayName = "FormSelect";
const Ma = $.forwardRef(
  ({
    label: e,
    type: t = "checkbox",
    inline: s = !1,
    id: a,
    disabled: n,
    className: l,
    ...i
  }, d) => {
    const c = a || (typeof e == "string" ? e.toLowerCase().replace(/\s+/g, "-") : void 0);
    return /* @__PURE__ */ r.jsxs(
      "label",
      {
        htmlFor: c,
        className: u(
          "flex items-center gap-2.5 select-none cursor-pointer",
          s ? "inline-flex mr-4" : "flex mb-2 last:mb-0",
          n && "opacity-60 cursor-not-allowed",
          l
        ),
        children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              ref: d,
              id: c,
              type: t,
              disabled: n,
              className: u(
                "h-4 w-4 border-slate-300 dark:border-slate-600 text-blue-600 transition duration-150 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:bg-slate-800",
                t === "checkbox" ? "rounded" : "rounded-full"
              ),
              ...i
            }
          ),
          e && /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: e })
        ]
      }
    );
  }
);
Ma.displayName = "FormCheck";
const Pa = $.forwardRef(
  ({ label: e, checked: t, defaultChecked: s, id: a, disabled: n, onChange: l, className: i, ...d }, c) => {
    const [f, b] = $.useState(s || !1), p = t !== void 0, h = p ? t : f, j = a || (typeof e == "string" ? e.toLowerCase().replace(/\s+/g, "-") : void 0), v = (C) => {
      p || b(C.target.checked), l && l(C);
    };
    return /* @__PURE__ */ r.jsxs(
      "label",
      {
        htmlFor: j,
        className: u(
          "inline-flex items-center gap-3 cursor-pointer select-none",
          n && "opacity-60 cursor-not-allowed",
          i
        ),
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "relative inline-flex items-center", children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                ref: c,
                id: j,
                type: "checkbox",
                checked: h,
                disabled: n,
                onChange: v,
                className: "sr-only",
                ...d
              }
            ),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: u(
                  "w-11 h-6 rounded-full transition-colors duration-200 ease-in-out",
                  h ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
                )
              }
            ),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: u(
                  "absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ease-in-out",
                  h && "translate-x-5"
                )
              }
            )
          ] }),
          e && /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: e })
        ]
      }
    );
  }
);
Pa.displayName = "FormSwitch";
const za = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: u(
      "inline-flex items-center px-3.5 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-750 border border-slate-300 dark:border-slate-600 select-none",
      e
    ),
    ...s,
    children: t
  }
), $a = ({
  size: e = "md",
  className: t,
  children: s,
  ...a
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: u(
      "flex w-full items-stretch shadow-sm",
      "[&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg",
      "[&>*:not(:first-child)]:-ml-px",
      "[&>input]:rounded-none [&>button]:rounded-none [&>select]:rounded-none",
      "[&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg",
      e === "sm" && "[&>span]:text-xs [&>span]:px-2.5",
      e === "lg" && "[&>span]:text-base [&>span]:px-4",
      t
    ),
    ...a,
    children: s
  }
);
$a.Text = za;
const xo = ({
  label: e,
  type: t = "text",
  value: s,
  defaultValue: a = "",
  placeholder: n,
  onChange: l,
  disabled: i = !1,
  className: d,
  ...c
}) => {
  const [f, b] = F(a), p = s !== void 0, h = p ? s : f, j = (C) => {
    p || b(C.target.value), l && l(C);
  }, v = !!(h && String(h).length > 0);
  return /* @__PURE__ */ r.jsxs("div", { className: u("relative w-full", d), ...c, children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        type: t,
        value: p ? s : f,
        disabled: i,
        onChange: j,
        placeholder: n || " ",
        className: u(
          "peer w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3.5 pt-5 pb-2 text-sm text-slate-900 dark:text-slate-100 placeholder-transparent",
          "focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all",
          "disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850"
        )
      }
    ),
    /* @__PURE__ */ r.jsx(
      "label",
      {
        className: u(
          "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-500 dark:text-slate-400 transition-all duration-150",
          "peer-focus:top-3 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400",
          v && "top-3 text-xs"
        ),
        children: e
      }
    )
  ] });
}, mo = ({
  label: e,
  showValue: t = !1,
  value: s,
  defaultValue: a = 50,
  min: n = 0,
  max: l = 100,
  step: i = 1,
  onChange: d,
  disabled: c,
  className: f,
  ...b
}) => {
  const [p, h] = $.useState(a), j = s !== void 0, v = j ? s : p, C = (w) => {
    j || h(w.target.value), d && d(w);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: u("w-full", f), children: [
    (e || t) && /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between items-center mb-1 text-sm font-medium text-slate-700 dark:text-slate-300", children: [
      e && /* @__PURE__ */ r.jsx("span", { children: e }),
      t && /* @__PURE__ */ r.jsx("span", { className: "text-xs font-mono text-slate-500", children: v })
    ] }),
    /* @__PURE__ */ r.jsx(
      "input",
      {
        type: "range",
        min: n,
        max: l,
        step: i,
        value: v,
        disabled: c,
        onChange: C,
        className: u(
          "w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all",
          c && "opacity-50 cursor-not-allowed"
        ),
        ...b
      }
    )
  ] });
}, Fa = {
  sm: "overflow-x-auto sm:overflow-x-visible",
  md: "overflow-x-auto md:overflow-x-visible",
  lg: "overflow-x-auto lg:overflow-x-visible",
  xl: "overflow-x-auto xl:overflow-x-visible"
}, po = ({
  striped: e = !1,
  bordered: t = !1,
  hover: s = !1,
  compact: a = !1,
  dark: n = !1,
  responsive: l = !0,
  className: i,
  children: d,
  ...c
}) => {
  const f = /* @__PURE__ */ r.jsx(
    "table",
    {
      className: u(
        "w-full text-left border-collapse text-sm",
        n ? "text-slate-200 bg-slate-900" : "text-slate-700 dark:text-slate-200",
        e && (n ? "[&_tbody_tr:nth-child(odd)]:bg-slate-800/50" : "[&_tbody_tr:nth-child(odd)]:bg-slate-50 dark:[&_tbody_tr:nth-child(odd)]:bg-slate-800/40"),
        s && (n ? "[&_tbody_tr]:hover:bg-slate-800 transition-colors" : "[&_tbody_tr]:hover:bg-blue-50/40 dark:[&_tbody_tr]:hover:bg-slate-800/70 transition-colors"),
        t && (n ? "border border-slate-700 [&_th]:border [&_th]:border-slate-700 [&_td]:border [&_td]:border-slate-700" : "border border-slate-200 dark:border-slate-700 [&_th]:border [&_th]:border-slate-200 dark:[&_th]:border-slate-700 [&_td]:border [&_td]:border-slate-200 dark:[&_td]:border-slate-700"),
        a ? "[&_th]:py-2 [&_th]:px-3 [&_td]:py-2 [&_td]:px-3" : "[&_th]:py-3.5 [&_th]:px-4 [&_td]:py-3.5 [&_td]:px-4",
        "[&_thead]:border-b-2 [&_thead]:border-slate-200 dark:[&_thead]:border-slate-700 [&_th]:font-semibold [&_th]:text-slate-900 dark:[&_th]:text-white",
        "[&_tbody_tr]:border-b [&_tbody_tr]:border-slate-100 dark:[&_tbody_tr]:border-slate-800",
        i
      ),
      ...c,
      children: d
    }
  );
  if (l) {
    const b = typeof l == "string" ? Fa[l] : "overflow-x-auto";
    return /* @__PURE__ */ r.jsx("div", { className: u("w-full custom-scrollbar rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900", b), children: f });
  }
  return f;
}, La = {
  primary: "bg-blue-600",
  secondary: "bg-slate-600",
  success: "bg-emerald-600",
  danger: "bg-red-600",
  warning: "bg-amber-500",
  info: "bg-cyan-500",
  light: "bg-slate-200 text-slate-800",
  dark: "bg-slate-900 text-white"
}, go = ({
  value: e,
  min: t = 0,
  max: s = 100,
  variant: a = "primary",
  striped: n = !1,
  animated: l = !1,
  label: i = !1,
  height: d = "1rem",
  className: c,
  ...f
}) => {
  const b = Math.min(Math.max(e, t), s), p = Math.round((b - t) / (s - t) * 100), h = typeof i == "string" ? i : i ? `${p}%` : null;
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": b,
      "aria-valuemin": t,
      "aria-valuemax": s,
      style: { height: d },
      className: u(
        "w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-750 shadow-inner",
        c
      ),
      ...f,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          style: { width: `${p}%` },
          className: u(
            "h-full flex items-center justify-center text-[11px] font-bold text-white transition-all duration-300 ease-out select-none",
            La[a],
            n && "bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]",
            l && "animate-[progress-bar-stripes_1s_linear_infinite]"
          ),
          children: h
        }
      )
    }
  );
}, Et = {
  primary: "text-blue-600",
  secondary: "text-slate-500",
  success: "text-emerald-600",
  danger: "text-red-600",
  warning: "text-amber-500",
  info: "text-cyan-500",
  light: "text-slate-200",
  dark: "text-slate-900 dark:text-slate-100",
  current: "text-current"
}, St = {
  border: {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4"
  },
  grow: {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  }
}, ho = ({
  animation: e = "border",
  variant: t = "primary",
  size: s = "md",
  className: a,
  ...n
}) => e === "grow" ? /* @__PURE__ */ r.jsx(
  "div",
  {
    role: "status",
    "aria-label": "Loading",
    className: u(
      "inline-block rounded-full bg-current opacity-0 animate-ping",
      Et[t],
      St.grow[s],
      a
    ),
    ...n,
    children: /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Loading..." })
  }
) : /* @__PURE__ */ r.jsx(
  "div",
  {
    role: "status",
    "aria-label": "Loading",
    className: u(
      "inline-block rounded-full border-solid border-current border-r-transparent animate-spin align-[-0.125em]",
      Et[t],
      St.border[s],
      a
    ),
    ...n,
    children: /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Loading..." })
  }
), Da = ({ children: e }) => /* @__PURE__ */ r.jsx(r.Fragment, { children: e }), Va = ({
  defaultActiveKey: e,
  activeKey: t,
  onSelect: s,
  variant: a = "tabs",
  fill: n = !1,
  justified: l = !1,
  className: i,
  children: d,
  ...c
}) => {
  var k;
  const f = $.Children.toArray(d).filter(
    (m) => $.isValidElement(m)
  ), [b, p] = F(() => {
    var m;
    return e || ((m = f[0]) == null ? void 0 : m.props.eventKey) || "";
  }), h = t !== void 0 ? t : b, j = (m, O) => {
    O || (t === void 0 && p(m), s && s(m));
  }, v = (k = f.find((m) => m.props.eventKey === h)) == null ? void 0 : k.props.children, C = () => {
    switch (a) {
      case "pills":
        return "gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl";
      case "underline":
        return "gap-6 border-b border-slate-200 dark:border-slate-700";
      case "tabs":
      default:
        return "gap-2 border-b border-slate-200 dark:border-slate-700";
    }
  }, w = (m, O) => {
    const z = h === m;
    if (O)
      return "opacity-40 cursor-not-allowed pointer-events-none text-slate-400";
    switch (a) {
      case "pills":
        return z ? "bg-blue-600 text-white shadow-sm font-semibold" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50";
      case "underline":
        return z ? "text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 dark:border-blue-400 pb-3 -mb-px" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white pb-3 -mb-px border-b-2 border-transparent";
      case "tabs":
      default:
        return z ? "bg-white dark:bg-slate-850 text-blue-600 dark:text-blue-400 font-semibold border-t border-x border-slate-200 dark:border-slate-700 rounded-t-lg -mb-px" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-t border-x border-transparent rounded-t-lg";
    }
  };
  return /* @__PURE__ */ r.jsxs("div", { className: u("w-full flex flex-col", i), ...c, children: [
    /* @__PURE__ */ r.jsx("div", { className: "overflow-x-auto custom-scrollbar pb-1", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        role: "tablist",
        className: u(
          "flex items-center min-w-full w-max sm:w-auto",
          C(),
          n && "[&>*]:flex-auto",
          l && "[&>*]:flex-1"
        ),
        children: f.map((m) => {
          const { eventKey: O, title: z, icon: Y, disabled: q } = m.props;
          return /* @__PURE__ */ r.jsxs(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": h === O,
              disabled: q,
              onClick: () => j(O, q),
              className: u(
                "px-4 py-2 text-sm font-medium transition-all duration-150 inline-flex items-center justify-center gap-2 whitespace-nowrap select-none rounded-lg focus:outline-none",
                w(O, q)
              ),
              children: [
                Y && /* @__PURE__ */ r.jsx("span", { className: "w-4 h-4 shrink-0", children: Y }),
                z
              ]
            },
            O
          );
        })
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { role: "tabpanel", className: "py-4 animate-in fade-in-50 duration-200", children: v })
  ] });
};
Va.Tab = Da;
const Ba = {
  primary: /* @__PURE__ */ r.jsx(U, { className: "w-4 h-4 text-blue-500" }),
  success: /* @__PURE__ */ r.jsx(Xe, { className: "w-4 h-4 text-emerald-500" }),
  danger: /* @__PURE__ */ r.jsx(qe, { className: "w-4 h-4 text-red-500" }),
  warning: /* @__PURE__ */ r.jsx(Se, { className: "w-4 h-4 text-amber-500" }),
  info: /* @__PURE__ */ r.jsx(U, { className: "w-4 h-4 text-cyan-500" }),
  secondary: /* @__PURE__ */ r.jsx(U, { className: "w-4 h-4 text-slate-500" }),
  light: /* @__PURE__ */ r.jsx(U, { className: "w-4 h-4 text-slate-400" }),
  dark: /* @__PURE__ */ r.jsx(U, { className: "w-4 h-4 text-slate-300" })
}, wo = ({
  show: e = !0,
  onClose: t,
  autohide: s = !0,
  delay: a = 5e3,
  variant: n,
  title: l,
  subtitle: i,
  className: d,
  children: c,
  ...f
}) => (de(() => {
  if (!e || !s || !t) return;
  const b = setTimeout(() => {
    t();
  }, a);
  return () => clearTimeout(b);
}, [e, s, a, t]), e ? /* @__PURE__ */ r.jsxs(
  "div",
  {
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    className: u(
      "w-full max-w-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",
      d
    ),
    ...f,
    children: [
      (l || t) && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
          n && Ba[n],
          l && /* @__PURE__ */ r.jsx("span", { className: "font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
          i && /* @__PURE__ */ r.jsx("span", { className: "text-[11px] text-slate-400", children: i }),
          t && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: t,
              "aria-label": "Close",
              className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded transition-colors",
              children: /* @__PURE__ */ r.jsx(re, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed", children: c })
    ]
  }
) : null), Ga = {
  "top-start": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "top-end": "top-4 right-4 items-end",
  "bottom-start": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-end": "bottom-4 right-4 items-end"
}, vo = ({
  position: e = "top-end",
  className: t,
  children: s,
  ...a
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    "aria-live": "polite",
    className: u(
      "fixed z-50 flex flex-col gap-2.5 p-3 pointer-events-none [&>*]:pointer-events-auto max-w-[calc(100vw-2rem)]",
      Ga[e],
      t
    ),
    ...a,
    children: s
  }
);
function yo() {
  const [e, t] = F([]), s = wt((n) => {
    const l = Math.random().toString(36).substring(2, 9);
    t((i) => [...i, { ...n, id: l }]);
  }, []), a = wt((n) => {
    t((l) => l.filter((i) => i.id !== n));
  }, []);
  return { toasts: e, addToast: s, removeToast: a };
}
const ko = ({
  items: e,
  autoPlay: t = !0,
  interval: s = 4e3,
  indicators: a = !0,
  controls: n = !0,
  pauseOnHover: l = !0,
  className: i,
  ...d
}) => {
  const [c, f] = F(0), [b, p] = F(!1), h = Ue(null), j = () => {
    f((m) => m === 0 ? e.length - 1 : m - 1);
  }, v = () => {
    f((m) => m === e.length - 1 ? 0 : m + 1);
  }, C = (m) => {
    f(m);
  };
  de(() => {
    if (!t || l && b || e.length <= 1) return;
    const m = setInterval(() => {
      v();
    }, s);
    return () => clearInterval(m);
  }, [t, s, b, e.length]);
  const w = (m) => {
    h.current = m.touches[0].clientX;
  }, k = (m) => {
    if (h.current === null) return;
    const O = m.changedTouches[0].clientX, z = h.current - O;
    Math.abs(z) > 50 && (z > 0 ? v() : j()), h.current = null;
  };
  return !e || e.length === 0 ? null : /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: u(
        "relative w-full overflow-hidden rounded-2xl shadow-lg select-none bg-slate-900 group",
        i
      ),
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      onTouchStart: w,
      onTouchEnd: k,
      ...d,
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "flex transition-transform duration-500 ease-out h-64 sm:h-80 md:h-96",
            style: { transform: `translateX(-${c * 100}%)` },
            children: e.map((m, O) => /* @__PURE__ */ r.jsxs("div", { className: "w-full flex-shrink-0 relative h-full", children: [
              /* @__PURE__ */ r.jsx(
                "img",
                {
                  src: m.image,
                  alt: m.alt || `Slide ${O + 1}`,
                  className: "w-full h-full object-cover"
                }
              ),
              (m.title || m.caption) && /* @__PURE__ */ r.jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white", children: [
                m.title && /* @__PURE__ */ r.jsx("h3", { className: "text-lg sm:text-2xl font-bold mb-1 leading-snug", children: m.title }),
                m.caption && /* @__PURE__ */ r.jsx("p", { className: "text-xs sm:text-sm text-slate-200 max-w-xl line-clamp-2", children: m.caption })
              ] })
            ] }, m.id || O))
          }
        ),
        n && e.length > 1 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: j,
              "aria-label": "Previous slide",
              className: "absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 opacity-90 sm:opacity-0 sm:group-hover:opacity-100",
              children: /* @__PURE__ */ r.jsx(Gt, { className: "w-5 h-5 sm:w-6 sm:h-6" })
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: v,
              "aria-label": "Next slide",
              className: "absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 opacity-90 sm:opacity-0 sm:group-hover:opacity-100",
              children: /* @__PURE__ */ r.jsx(He, { className: "w-5 h-5 sm:w-6 sm:h-6" })
            }
          )
        ] }),
        a && e.length > 1 && /* @__PURE__ */ r.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10", children: e.map((m, O) => /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: () => C(O),
            "aria-label": `Go to slide ${O + 1}`,
            className: u(
              "h-2 rounded-full transition-all duration-300 focus:outline-none",
              c === O ? "w-7 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            )
          },
          O
        )) })
      ]
    }
  );
}, Wa = {
  primary: "bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-300",
  secondary: "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-200",
  success: "bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300",
  danger: "bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-300",
  warning: "bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-300",
  info: "bg-cyan-50 text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-300",
  light: "bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  dark: "bg-slate-800 text-white dark:bg-slate-900 dark:text-white"
}, Ua = ({
  active: e = !1,
  disabled: t = !1,
  action: s = !1,
  variant: a,
  className: n,
  children: l,
  ...i
}) => /* @__PURE__ */ r.jsx(
  "li",
  {
    className: u(
      "relative px-4 py-3 text-sm flex items-center justify-between border-b last:border-b-0 border-slate-200 dark:border-slate-700 transition-colors",
      e ? "bg-blue-600 text-white font-medium border-blue-600" : t ? "text-slate-400 dark:text-slate-600 pointer-events-none bg-slate-50 dark:bg-slate-850" : s ? "cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200" : "text-slate-700 dark:text-slate-200",
      a && !e && Wa[a],
      n
    ),
    ...i,
    children: l
  }
), Ka = ({
  flush: e = !1,
  horizontal: t = !1,
  numbered: s = !1,
  className: a,
  children: n,
  ...l
}) => {
  const i = () => t === !0 ? "flex-row [&>li]:border-b-0 [&>li]:border-r [&>li:last-child]:border-r-0" : t === "sm" ? "sm:flex-row sm:[&>li]:border-b-0 sm:[&>li]:border-r sm:[&>li:last-child]:border-r-0" : t === "md" ? "md:flex-row md:[&>li]:border-b-0 md:[&>li]:border-r md:[&>li:last-child]:border-r-0" : t === "lg" ? "lg:flex-row lg:[&>li]:border-b-0 lg:[&>li]:border-r lg:[&>li:last-child]:border-r-0" : "flex-col", d = s ? "ol" : "ul";
  return /* @__PURE__ */ r.jsx(
    d,
    {
      className: u(
        "flex list-none p-0 overflow-hidden",
        i(),
        e ? "rounded-none border-x-0 border-t-0" : "rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-850",
        s && "list-decimal list-inside",
        a
      ),
      ...l,
      children: n
    }
  );
};
Ka.Item = Ua;
const Tt = {
  top: {
    tooltip: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    arrow: "top-full left-1/2 -translate-x-1/2 border-t-slate-900 border-x-transparent border-b-transparent"
  },
  bottom: {
    tooltip: "top-full left-1/2 -translate-x-1/2 mt-2",
    arrow: "bottom-full left-1/2 -translate-x-1/2 border-b-slate-900 border-x-transparent border-t-transparent"
  },
  left: {
    tooltip: "right-full top-1/2 -translate-y-1/2 mr-2",
    arrow: "left-full top-1/2 -translate-y-1/2 border-left-slate-900 border-y-transparent border-r-transparent"
  },
  right: {
    tooltip: "left-full top-1/2 -translate-y-1/2 ml-2",
    arrow: "right-full top-1/2 -translate-y-1/2 border-r-slate-900 border-y-transparent border-l-transparent"
  }
}, jo = ({
  content: e,
  placement: t = "top",
  delay: s = 100,
  className: a,
  children: n,
  ...l
}) => {
  const [i, d] = F(!1), [c, f] = F(null), b = () => {
    const h = setTimeout(() => d(!0), s);
    f(h);
  }, p = () => {
    c && clearTimeout(c), d(!1);
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "relative inline-flex items-center",
      onMouseEnter: b,
      onMouseLeave: p,
      onFocus: b,
      onBlur: p,
      ...l,
      children: [
        n,
        i && /* @__PURE__ */ r.jsxs(
          "div",
          {
            role: "tooltip",
            className: u(
              "absolute z-50 px-2.5 py-1 text-xs font-medium text-white bg-slate-900 rounded-md shadow-md whitespace-nowrap pointer-events-none transition-all duration-150 animate-in fade-in zoom-in-95",
              Tt[t].tooltip,
              a
            ),
            children: [
              e,
              /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: u("absolute border-4", Tt[t].arrow)
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Ya = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2.5",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2.5",
  left: "right-full top-1/2 -translate-y-1/2 mr-2.5",
  right: "left-full top-1/2 -translate-y-1/2 ml-2.5"
}, No = ({
  title: e,
  content: t,
  placement: s = "top",
  className: a,
  children: n,
  ...l
}) => {
  const [i, d] = F(!1), c = Ue(null);
  return de(() => {
    const f = (b) => {
      c.current && !c.current.contains(b.target) && d(!1);
    };
    return i && document.addEventListener("mousedown", f), () => {
      document.removeEventListener("mousedown", f);
    };
  }, [i]), /* @__PURE__ */ r.jsxs("div", { ref: c, className: "relative inline-block", ...l, children: [
    /* @__PURE__ */ r.jsx("div", { onClick: () => d(!i), className: "cursor-pointer inline-block", children: n }),
    i && /* @__PURE__ */ r.jsxs(
      "div",
      {
        role: "dialog",
        className: u(
          "absolute z-50 w-64 max-w-xs bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-in fade-in zoom-in-95 duration-150",
          Ya[s],
          a
        ),
        children: [
          e && /* @__PURE__ */ r.jsx("div", { className: "px-3.5 py-2 bg-slate-50 dark:bg-slate-750 border-b border-slate-100 dark:border-slate-700 font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100", children: e }),
          /* @__PURE__ */ r.jsx("div", { className: "p-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed", children: t })
        ]
      }
    )
  ] });
}, Ha = {
  xs: "h-2",
  sm: "h-3",
  md: "h-4",
  lg: "h-6"
}, qa = {
  1: "w-1/12",
  2: "w-2/12",
  3: "w-3/12",
  4: "w-4/12",
  5: "w-5/12",
  6: "w-6/12",
  7: "w-7/12",
  8: "w-8/12",
  9: "w-9/12",
  10: "w-10/12",
  11: "w-11/12",
  12: "w-full"
}, Co = ({
  animation: e = "glow",
  size: t = "md",
  col: s = 12,
  className: a,
  ...n
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: u(
      "rounded bg-slate-200 dark:bg-slate-700 inline-block align-middle",
      Ha[t],
      qa[s],
      e === "glow" ? "animate-pulse" : "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
      a
    ),
    ...n
  }
), Ot = {
  blue: { dot: "bg-blue-600", ring: "ring-blue-100 dark:ring-blue-900/40" },
  green: { dot: "bg-emerald-500", ring: "ring-emerald-100 dark:ring-emerald-900/40" },
  red: { dot: "bg-red-500", ring: "ring-red-100 dark:ring-red-900/40" },
  gray: { dot: "bg-slate-400", ring: "ring-slate-100 dark:ring-slate-800" },
  amber: { dot: "bg-amber-500", ring: "ring-amber-100 dark:ring-amber-900/40" },
  purple: { dot: "bg-purple-600", ring: "ring-purple-100 dark:ring-purple-900/40" }
}, Kt = ({
  color: e = "blue",
  dot: t,
  label: s,
  pending: a = !1,
  className: n,
  children: l,
  ...i
}) => {
  const d = Ot[e] || Ot.blue;
  return /* @__PURE__ */ r.jsxs("div", { className: u("relative pl-8 sm:pl-9 pb-8 last:pb-0 group", n), ...i, children: [
    /* @__PURE__ */ r.jsx("div", { className: "absolute left-[11px] sm:left-[13px] top-3 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-700 group-last:hidden" }),
    /* @__PURE__ */ r.jsx("div", { className: "absolute left-0 top-1 flex items-center justify-center", children: t ? /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center text-xs bg-white dark:bg-slate-900 z-10", children: t }) : /* @__PURE__ */ r.jsx(
      "div",
      {
        className: u(
          "w-6 h-6 rounded-full flex items-center justify-center ring-4 transition-all z-10",
          d.ring,
          a && "animate-pulse"
        ),
        children: /* @__PURE__ */ r.jsx("div", { className: u("w-2.5 h-2.5 rounded-full", d.dot) })
      }
    ) }),
    /* @__PURE__ */ r.jsxs("div", { className: "text-sm", children: [
      s && /* @__PURE__ */ r.jsx("div", { className: "text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1", children: s }),
      /* @__PURE__ */ r.jsx("div", { className: "text-slate-700 dark:text-slate-200 leading-relaxed", children: l })
    ] })
  ] });
}, Xa = ({
  pending: e,
  reverse: t = !1,
  className: s,
  children: a,
  ...n
}) => {
  const l = $.Children.toArray(a), i = t ? [...l].reverse() : l;
  return /* @__PURE__ */ r.jsxs("div", { className: u("relative py-2", s), ...n, children: [
    i,
    e && /* @__PURE__ */ r.jsx(Kt, { color: "gray", pending: !0, children: typeof e == "boolean" ? "Memuat langkah berikutnya..." : e })
  ] });
};
Xa.Item = Kt;
const _o = ({
  current: e = 0,
  items: t,
  onChange: s,
  direction: a = "horizontal",
  responsive: n = !0,
  className: l,
  ...i
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: u(
      "w-full flex",
      a === "vertical" ? "flex-col space-y-6" : n ? "flex-col sm:flex-row gap-4 sm:gap-0" : "flex-row",
      l
    ),
    ...i,
    children: t.map((d, c) => {
      const f = !!(s && !d.disabled), b = d.status || (c < e ? "finish" : c === e ? "process" : "wait"), p = c === t.length - 1;
      return /* @__PURE__ */ r.jsxs(
        "div",
        {
          onClick: () => f && s && s(c),
          className: u(
            "flex-1 flex sm:items-center relative group",
            a === "vertical" ? "items-start" : "",
            f && "cursor-pointer"
          ),
          children: [
            /* @__PURE__ */ r.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: u(
                  "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 z-10 shrink-0 select-none",
                  b === "finish" && "bg-blue-600 text-white shadow-sm",
                  b === "process" && "border-2 border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 font-extrabold ring-4 ring-blue-100 dark:ring-blue-900/30",
                  b === "wait" && "border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400",
                  b === "error" && "border-2 border-red-500 bg-red-50 text-red-600 dark:bg-red-950/40 ring-4 ring-red-100 dark:ring-red-900/30"
                ),
                children: d.icon ? d.icon : b === "finish" ? /* @__PURE__ */ r.jsx(Bt, { className: "w-4 h-4 stroke-[3]" }) : b === "error" ? /* @__PURE__ */ r.jsx(qe, { className: "w-4 h-4" }) : c + 1
              }
            ) }),
            /* @__PURE__ */ r.jsxs("div", { className: "ml-3 sm:mr-3 min-w-0", children: [
              /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: u(
                    "text-xs sm:text-sm font-semibold truncate transition-colors leading-tight",
                    b === "process" && "text-blue-600 dark:text-blue-400",
                    b === "finish" && "text-slate-800 dark:text-slate-100",
                    b === "wait" && "text-slate-400 dark:text-slate-500",
                    b === "error" && "text-red-600 dark:text-red-400"
                  ),
                  children: d.title
                }
              ),
              d.description && /* @__PURE__ */ r.jsx("div", { className: "text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 mt-0.5 line-clamp-1", children: d.description })
            ] }),
            !p && a !== "vertical" && /* @__PURE__ */ r.jsx(
              "div",
              {
                className: u(
                  "hidden sm:block flex-1 h-[2px] mx-3 transition-colors duration-300",
                  c < e ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"
                )
              }
            )
          ]
        },
        c
      );
    })
  }
), Ro = ({
  title: e,
  value: t,
  prefix: s,
  suffix: a,
  trend: n,
  precision: l,
  className: i,
  ...d
}) => {
  const c = typeof t == "number" && l !== void 0 ? t.toFixed(l) : t;
  return /* @__PURE__ */ r.jsxs("div", { className: u("p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm", i), ...d, children: [
    e && /* @__PURE__ */ r.jsxs("div", { className: "text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5 flex items-center justify-between", children: [
      /* @__PURE__ */ r.jsx("span", { children: e }),
      n && /* @__PURE__ */ r.jsxs(
        "span",
        {
          className: u(
            "inline-flex items-center text-xs font-bold px-1.5 py-0.5 rounded-full",
            n === "up" && "text-emerald-700 bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300",
            n === "down" && "text-red-700 bg-red-100 dark:bg-red-950/60 dark:text-red-300",
            n === "neutral" && "text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-400"
          ),
          children: [
            n === "up" && /* @__PURE__ */ r.jsx(hs, { className: "w-3.5 h-3.5 mr-0.5" }),
            n === "down" && /* @__PURE__ */ r.jsx(ps, { className: "w-3.5 h-3.5 mr-0.5" }),
            n === "up" ? "+12.5%" : n === "down" ? "-4.2%" : "0%"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-baseline gap-1.5 font-bold tracking-tight text-slate-900 dark:text-white", children: [
      s && /* @__PURE__ */ r.jsx("span", { className: "text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400", children: s }),
      /* @__PURE__ */ r.jsx("span", { className: "text-2xl sm:text-3xl font-extrabold", children: c }),
      a && /* @__PURE__ */ r.jsx("span", { className: "text-xs sm:text-sm font-semibold text-slate-400 ml-1", children: a })
    ] })
  ] });
}, Eo = ({
  count: e = 5,
  value: t,
  defaultValue: s = 0,
  onChange: a,
  disabled: n = !1,
  tooltips: l,
  character: i,
  className: d,
  ...c
}) => {
  const [f, b] = F(s), [p, h] = F(null), j = t !== void 0, v = p !== null ? p : j ? t : f, C = (k) => {
    n || (j || b(k), a && a(k));
  }, w = Array.from({ length: e }, (k, m) => m + 1);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "radiogroup",
      "aria-label": "Rating",
      className: u("inline-flex items-center gap-1.5 select-none", d),
      onMouseLeave: () => !n && h(null),
      ...c,
      children: [
        w.map((k) => {
          const m = k <= v;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              disabled: n,
              onClick: () => C(k),
              onMouseEnter: () => !n && h(k),
              className: u(
                "p-0.5 rounded transition-transform duration-100 focus:outline-none",
                !n && "hover:scale-125 cursor-pointer",
                n && "cursor-default"
              ),
              title: l && l[k - 1] ? l[k - 1] : `${k} Bintang`,
              children: i ? /* @__PURE__ */ r.jsx("span", { className: u("text-xl", m ? "text-amber-400" : "text-slate-300 dark:text-slate-700"), children: i }) : /* @__PURE__ */ r.jsx(
                Ds,
                {
                  className: u(
                    "w-5 h-5 transition-colors duration-150",
                    m ? "fill-amber-400 text-amber-400 filter drop-shadow-[0_1px_4px_rgba(251,191,36,0.5)]" : "fill-transparent text-slate-300 dark:text-slate-600"
                  )
                }
              )
            },
            k
          );
        }),
        l && v > 0 && /* @__PURE__ */ r.jsx("span", { className: "ml-2 text-xs font-semibold text-slate-600 dark:text-slate-300", children: l[v - 1] })
      ]
    }
  );
}, Ja = {
  sm: "w-7 h-7 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-xl"
}, Za = {
  online: "bg-emerald-500",
  offline: "bg-slate-400",
  busy: "bg-red-500",
  away: "bg-amber-400"
}, Qa = ({
  max: e,
  className: t,
  children: s,
  ...a
}) => {
  const n = $.Children.toArray(s), l = e ? n.slice(0, e) : n, i = e && n.length > e ? n.length - e : 0;
  return /* @__PURE__ */ r.jsxs("div", { className: u("flex items-center -space-x-2.5 overflow-hidden", t), ...a, children: [
    l.map((d, c) => /* @__PURE__ */ r.jsx("div", { className: "ring-2 ring-white dark:ring-slate-900 rounded-full", children: d }, c)),
    i > 0 && /* @__PURE__ */ r.jsxs("div", { className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs font-bold ring-2 ring-white dark:ring-slate-900 z-10", children: [
      "+",
      i
    ] })
  ] });
}, eo = ({
  src: e,
  alt: t = "Avatar",
  name: s,
  icon: a,
  shape: n = "circle",
  size: l = "md",
  status: i,
  className: d,
  children: c,
  ...f
}) => {
  const b = s ? s.split(" ").filter(Boolean).map((p) => p[0]).join("").substring(0, 2).toUpperCase() : null;
  return /* @__PURE__ */ r.jsxs("div", { className: "relative inline-block select-none", children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: u(
          "flex items-center justify-center font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 overflow-hidden shadow-sm",
          n === "circle" ? "rounded-full" : "rounded-xl",
          Ja[l],
          d
        ),
        ...f,
        children: e ? /* @__PURE__ */ r.jsx("img", { src: e, alt: t, className: "w-full h-full object-cover" }) : a ? /* @__PURE__ */ r.jsx("span", { className: "flex items-center justify-center", children: a }) : b ? /* @__PURE__ */ r.jsx("span", { children: b }) : c
      }
    ),
    i && /* @__PURE__ */ r.jsx(
      "span",
      {
        className: u(
          "absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-white dark:ring-slate-900",
          Za[i]
        )
      }
    )
  ] });
};
eo.Group = Qa;
const So = ({
  image: e,
  description: t = "Tidak ada data ditemukan",
  action: s,
  className: a,
  ...n
}) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    className: u(
      "flex flex-col items-center justify-center p-8 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 my-4",
      a
    ),
    ...n,
    children: [
      /* @__PURE__ */ r.jsx("div", { className: "mb-3 text-slate-300 dark:text-slate-600", children: e || /* @__PURE__ */ r.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400", children: /* @__PURE__ */ r.jsx(Fs, { className: "w-8 h-8 stroke-[1.5]" }) }) }),
      /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 max-w-sm", children: t }),
      s && /* @__PURE__ */ r.jsx("div", { children: s })
    ]
  }
), At = {
  success: {
    icon: /* @__PURE__ */ r.jsx(Xe, { className: "w-16 h-16 text-emerald-500 mx-auto" }),
    color: "text-emerald-600"
  },
  error: {
    icon: /* @__PURE__ */ r.jsx(Ct, { className: "w-16 h-16 text-red-500 mx-auto" }),
    color: "text-red-600"
  },
  warning: {
    icon: /* @__PURE__ */ r.jsx(Se, { className: "w-16 h-16 text-amber-500 mx-auto" }),
    color: "text-amber-600"
  },
  info: {
    icon: /* @__PURE__ */ r.jsx(U, { className: "w-16 h-16 text-blue-500 mx-auto" }),
    color: "text-blue-600"
  },
  404: {
    icon: /* @__PURE__ */ r.jsx(Os, { className: "w-16 h-16 text-slate-400 mx-auto" }),
    color: "text-slate-700"
  },
  403: {
    icon: /* @__PURE__ */ r.jsx(Se, { className: "w-16 h-16 text-amber-500 mx-auto" }),
    color: "text-amber-700"
  },
  500: {
    icon: /* @__PURE__ */ r.jsx(Ct, { className: "w-16 h-16 text-red-500 mx-auto" }),
    color: "text-red-700"
  }
}, To = ({
  status: e = "info",
  title: t,
  subTitle: s,
  extra: a,
  icon: n,
  className: l,
  ...i
}) => {
  const d = At[e] || At.info;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: u(
        "text-center py-10 px-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm max-w-xl mx-auto my-6",
        l
      ),
      ...i,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "mb-4", children: n || d.icon }),
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight", children: t }),
        s && /* @__PURE__ */ r.jsx("p", { className: "text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto leading-relaxed", children: s }),
        a && /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap items-center justify-center gap-3", children: a })
      ]
    }
  );
}, to = {
  sm: "text-xs p-0.5",
  md: "text-xs sm:text-sm p-1",
  lg: "text-sm sm:text-base p-1.5"
}, ro = {
  sm: "px-2.5 py-1",
  md: "px-3.5 py-1.5",
  lg: "px-5 py-2"
}, Oo = ({
  options: e,
  value: t,
  defaultValue: s,
  onChange: a,
  block: n = !1,
  size: l = "md",
  disabled: i = !1,
  className: d,
  ...c
}) => {
  var C;
  const f = e.map(
    (w) => typeof w == "string" ? { label: w, value: w } : w
  ), [b, p] = F(
    s || ((C = f[0]) == null ? void 0 : C.value) || ""
  ), h = t !== void 0, j = h ? t : b, v = (w, k) => {
    i || k || (h || p(w), a && a(w));
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      role: "radiogroup",
      className: u(
        "inline-flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 select-none shadow-inner",
        n ? "w-full flex" : "",
        to[l],
        d
      ),
      ...c,
      children: f.map((w) => {
        const k = w.value === j, m = i || w.disabled;
        return /* @__PURE__ */ r.jsxs(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": k,
            disabled: m,
            onClick: () => v(w.value, m),
            className: u(
              "inline-flex items-center justify-center gap-1.5 font-medium rounded-lg transition-all duration-200 focus:outline-none",
              n ? "flex-1" : "",
              ro[l],
              k ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold" : "hover:text-slate-900 dark:hover:text-white",
              m && "opacity-40 cursor-not-allowed pointer-events-none"
            ),
            children: [
              w.icon && /* @__PURE__ */ r.jsx("span", { className: "w-4 h-4 shrink-0", children: w.icon }),
              /* @__PURE__ */ r.jsx("span", { children: w.label })
            ]
          },
          w.value
        );
      })
    }
  );
}, Ao = ({
  dashed: e = !1,
  orientation: t = "center",
  plain: s = !1,
  className: a,
  children: n,
  ...l
}) => n ? /* @__PURE__ */ r.jsxs(
  "div",
  {
    role: "separator",
    className: u("my-6 flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 select-none", a),
    ...l,
    children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: u(
            "border-slate-200 dark:border-slate-800",
            e ? "border-dashed" : "border-solid",
            t === "left" ? "w-6" : "flex-grow border-t"
          )
        }
      ),
      /* @__PURE__ */ r.jsx(
        "span",
        {
          className: u(
            "px-3 whitespace-nowrap",
            s ? "font-normal" : "font-semibold text-slate-700 dark:text-slate-300"
          ),
          children: n
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: u(
            "border-slate-200 dark:border-slate-800",
            e ? "border-dashed" : "border-solid",
            t === "right" ? "w-6" : "flex-grow border-t"
          )
        }
      )
    ]
  }
) : /* @__PURE__ */ r.jsx(
  "hr",
  {
    className: u(
      "my-6 border-slate-200 dark:border-slate-800",
      e ? "border-dashed" : "border-solid",
      a
    ),
    ...l
  }
), It = {
  blue: { bg: "bg-blue-50 dark:bg-blue-950/60", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800" },
  purple: { bg: "bg-purple-50 dark:bg-purple-950/60", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800" },
  cyan: { bg: "bg-cyan-50 dark:bg-cyan-950/60", text: "text-cyan-700 dark:text-cyan-300", border: "border-cyan-200 dark:border-cyan-800" },
  green: { bg: "bg-emerald-50 dark:bg-emerald-950/60", text: "text-emerald-700 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800" },
  magenta: { bg: "bg-fuchsia-50 dark:bg-fuchsia-950/60", text: "text-fuchsia-700 dark:text-fuchsia-300", border: "border-fuchsia-200 dark:border-fuchsia-800" },
  pink: { bg: "bg-pink-50 dark:bg-pink-950/60", text: "text-pink-700 dark:text-pink-300", border: "border-pink-200 dark:border-pink-800" },
  red: { bg: "bg-red-50 dark:bg-red-950/60", text: "text-red-700 dark:text-red-300", border: "border-red-200 dark:border-red-800" },
  orange: { bg: "bg-orange-50 dark:bg-orange-950/60", text: "text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800" },
  yellow: { bg: "bg-amber-50 dark:bg-amber-950/60", text: "text-amber-700 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800" },
  volcano: { bg: "bg-rose-50 dark:bg-rose-950/60", text: "text-rose-700 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800" },
  geekblue: { bg: "bg-indigo-50 dark:bg-indigo-950/60", text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800" },
  gold: { bg: "bg-yellow-50 dark:bg-yellow-950/60", text: "text-yellow-700 dark:text-yellow-300", border: "border-yellow-200 dark:border-yellow-800" },
  lime: { bg: "bg-lime-50 dark:bg-lime-950/60", text: "text-lime-700 dark:text-lime-300", border: "border-lime-200 dark:border-lime-800" }
}, Io = ({
  color: e = "blue",
  closable: t = !1,
  onClose: s,
  checkable: a = !1,
  checked: n = !1,
  icon: l,
  bordered: i = !0,
  className: d,
  children: c,
  ...f
}) => {
  const [b, p] = $.useState(!0), h = It[e] || It.blue;
  if (!b) return null;
  const j = (v) => {
    v.stopPropagation(), p(!1), s && s();
  };
  return /* @__PURE__ */ r.jsxs(
    "span",
    {
      className: u(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium select-none transition-all align-middle",
        h.bg,
        h.text,
        i && `border ${h.border}`,
        a && "cursor-pointer hover:opacity-80 active:scale-95",
        a && n && "ring-2 ring-blue-500 font-bold",
        d
      ),
      ...f,
      children: [
        l && /* @__PURE__ */ r.jsx("span", { className: "inline-flex shrink-0", children: l }),
        /* @__PURE__ */ r.jsx("span", { children: c }),
        t && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: j,
            "aria-label": "Close tag",
            className: "ml-0.5 p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors focus:outline-none",
            children: /* @__PURE__ */ r.jsx(re, { className: "w-3 h-3" })
          }
        )
      ]
    }
  );
}, Mo = ({
  title: e,
  description: t,
  children: s,
  code: a,
  className: n
}) => {
  const [l, i] = F(!1), d = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText)
        await navigator.clipboard.writeText(a.trim());
      else {
        const c = document.createElement("textarea");
        c.value = a.trim(), c.style.position = "fixed", c.style.opacity = "0", document.body.appendChild(c), c.select(), document.execCommand("copy"), document.body.removeChild(c);
      }
      i(!0), setTimeout(() => i(!1), 2e3);
    } catch (c) {
      console.error("Failed to copy code: ", c);
    }
  };
  return /* @__PURE__ */ r.jsxs("div", { className: u("mb-8 last:mb-0", n), children: [
    e && /* @__PURE__ */ r.jsx("h3", { className: "text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2", children: e }),
    t && /* @__PURE__ */ r.jsx("div", { className: "text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 leading-relaxed", children: t }),
    /* @__PURE__ */ r.jsxs("div", { className: "rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm", children: [
      /* @__PURE__ */ r.jsx("div", { className: "p-4 sm:p-6 bg-white dark:bg-slate-900 overflow-x-auto custom-scrollbar", children: s }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-slate-800 text-slate-300 border-t border-slate-700/80 text-xs", children: [
        /* @__PURE__ */ r.jsxs("span", { className: "font-mono flex items-center gap-1.5 text-slate-400", children: [
          /* @__PURE__ */ r.jsx(Rs, { className: "w-3.5 h-3.5 text-blue-400" }),
          "JSX"
        ] }),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: d,
            className: u(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500",
              l ? "bg-emerald-600 text-white font-bold" : "bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white"
            ),
            title: "Salin kode ke clipboard",
            children: l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(Bt, { className: "w-3.5 h-3.5 text-white" }),
              /* @__PURE__ */ r.jsx("span", { children: "Tersalin!" })
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(Ss, { className: "w-3.5 h-3.5 text-slate-300" }),
              /* @__PURE__ */ r.jsx("span", { children: "Salin Kode" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "bg-slate-950 p-4 overflow-x-auto custom-scrollbar", children: /* @__PURE__ */ r.jsx("pre", { className: "font-mono text-xs text-slate-200 leading-relaxed m-0 whitespace-pre", children: /* @__PURE__ */ r.jsx("code", { children: a.trim() }) }) })
    ] })
  ] });
};
export {
  tt as Accordion,
  Na as AccordionBody,
  ja as AccordionHeader,
  ka as AccordionItem,
  Wt as Alert,
  Hs as AlertHeading,
  qs as AlertLink,
  eo as Avatar,
  Qa as AvatarGroup,
  co as Badge,
  fa as Breadcrumb,
  ba as BreadcrumbItem,
  Us as Button,
  lo as ButtonGroup,
  se as Card,
  Zs as CardBody,
  ra as CardFooter,
  Js as CardHeader,
  sa as CardImg,
  ea as CardSubtitle,
  ta as CardText,
  Qs as CardTitle,
  ko as Carousel,
  io as CloseButton,
  Mo as CodePreview,
  no as Col,
  ao as Container,
  Ao as Divider,
  ve as Dropdown,
  Ea as DropdownDivider,
  Sa as DropdownHeader,
  Ra as DropdownItem,
  _a as DropdownMenu,
  Ca as DropdownToggle,
  So as Empty,
  xo as FloatingLabel,
  Ma as FormCheck,
  Oa as FormControl,
  bo as FormGroup,
  fo as FormLabel,
  mo as FormRange,
  Ia as FormSelect,
  Pa as FormSwitch,
  $a as InputGroup,
  za as InputGroupText,
  Ka as ListGroup,
  Ua as ListGroupItem,
  Oe as Modal,
  ga as ModalBody,
  ha as ModalFooter,
  ma as ModalHeader,
  pa as ModalTitle,
  Ut as Nav,
  ua as NavItem,
  ca as NavLink,
  Ze as Navbar,
  la as NavbarBrand,
  da as NavbarCollapse,
  ia as NavbarToggle,
  Qe as Offcanvas,
  ya as OffcanvasBody,
  wa as OffcanvasHeader,
  va as OffcanvasTitle,
  uo as Pagination,
  Co as Placeholder,
  No as Popover,
  go as ProgressBar,
  Eo as Rate,
  To as Result,
  oo as Row,
  Oo as Segmented,
  ho as Spinner,
  Ro as Statistic,
  _o as Steps,
  Da as Tab,
  po as Table,
  Va as Tabs,
  Io as Tag,
  Xa as Timeline,
  Kt as TimelineItem,
  wo as Toast,
  vo as ToastContainer,
  jo as Tooltip,
  yo as useToast
};
