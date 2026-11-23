import G, { forwardRef as Lt, createElement as qe, useState as P, createContext as xe, useContext as U, useEffect as Z, useRef as Ne, useCallback as kt } from "react";
var Te = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function Cr() {
  if (jt) return ve;
  jt = 1;
  var e = G, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(d, c, x) {
    var b, f = {}, p = null, v = null;
    x !== void 0 && (p = "" + x), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (b in c) a.call(c, b) && !n.hasOwnProperty(b) && (f[b] = c[b]);
    if (d && d.defaultProps) for (b in c = d.defaultProps, c) f[b] === void 0 && (f[b] = c[b]);
    return { $$typeof: t, type: d, key: p, ref: v, props: f, _owner: o.current };
  }
  return ve.Fragment = s, ve.jsx = i, ve.jsxs = i, ve;
}
var ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt;
function _r() {
  return Nt || (Nt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = G, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), h = Symbol.iterator, y = "@@iterator";
    function j(l) {
      if (l === null || typeof l != "object")
        return null;
      var m = h && l[h] || l[y];
      return typeof m == "function" ? m : null;
    }
    var N = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(l) {
      {
        for (var m = arguments.length, k = new Array(m > 1 ? m - 1 : 0), _ = 1; _ < m; _++)
          k[_ - 1] = arguments[_];
        C("error", l, k);
      }
    }
    function C(l, m, k) {
      {
        var _ = N.ReactDebugCurrentFrame, I = _.getStackAddendum();
        I !== "" && (m += "%s", k = k.concat([I]));
        var M = k.map(function(T) {
          return String(T);
        });
        M.unshift("Warning: " + m), Function.prototype.apply.call(console[l], console, M);
      }
    }
    var w = !1, R = !1, L = !1, B = !1, F = !1, K;
    K = Symbol.for("react.module.reference");
    function me(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === a || l === n || F || l === o || l === x || l === b || B || l === v || w || R || L || typeof l == "object" && l !== null && (l.$$typeof === p || l.$$typeof === f || l.$$typeof === i || l.$$typeof === d || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === K || l.getModuleId !== void 0));
    }
    function pe(l, m, k) {
      var _ = l.displayName;
      if (_)
        return _;
      var I = m.displayName || m.name || "";
      return I !== "" ? k + "(" + I + ")" : k;
    }
    function A(l) {
      return l.displayName || "Context";
    }
    function J(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case n:
          return "Profiler";
        case o:
          return "StrictMode";
        case x:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case d:
            var m = l;
            return A(m) + ".Consumer";
          case i:
            var k = l;
            return A(k._context) + ".Provider";
          case c:
            return pe(l, l.render, "ForwardRef");
          case f:
            var _ = l.displayName || null;
            return _ !== null ? _ : J(l.type) || "Memo";
          case p: {
            var I = l, M = I._payload, T = I._init;
            try {
              return J(T(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, te = 0, ne, ge, de, re, he, q, ot;
    function nt() {
    }
    nt.__reactDisabledLog = !0;
    function Zt() {
      {
        if (te === 0) {
          ne = console.log, ge = console.info, de = console.warn, re = console.error, he = console.group, q = console.groupCollapsed, ot = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: nt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        te++;
      }
    }
    function Qt() {
      {
        if (te--, te === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, l, {
              value: ne
            }),
            info: H({}, l, {
              value: ge
            }),
            warn: H({}, l, {
              value: de
            }),
            error: H({}, l, {
              value: re
            }),
            group: H({}, l, {
              value: he
            }),
            groupCollapsed: H({}, l, {
              value: q
            }),
            groupEnd: H({}, l, {
              value: ot
            })
          });
        }
        te < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var De = N.ReactCurrentDispatcher, Fe;
    function _e(l, m, k) {
      {
        if (Fe === void 0)
          try {
            throw Error();
          } catch (I) {
            var _ = I.stack.trim().match(/\n( *(at )?)/);
            Fe = _ && _[1] || "";
          }
        return `
` + Fe + l;
      }
    }
    var Be = !1, Re;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new er();
    }
    function lt(l, m) {
      if (!l || Be)
        return "";
      {
        var k = Re.get(l);
        if (k !== void 0)
          return k;
      }
      var _;
      Be = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = De.current, De.current = null, Zt();
      try {
        if (m) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (W) {
              _ = W;
            }
            Reflect.construct(l, [], T);
          } else {
            try {
              T.call();
            } catch (W) {
              _ = W;
            }
            l.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            _ = W;
          }
          l();
        }
      } catch (W) {
        if (W && _ && typeof W.stack == "string") {
          for (var S = W.stack.split(`
`), V = _.stack.split(`
`), $ = S.length - 1, D = V.length - 1; $ >= 1 && D >= 0 && S[$] !== V[D]; )
            D--;
          for (; $ >= 1 && D >= 0; $--, D--)
            if (S[$] !== V[D]) {
              if ($ !== 1 || D !== 1)
                do
                  if ($--, D--, D < 0 || S[$] !== V[D]) {
                    var Y = `
` + S[$].replace(" at new ", " at ");
                    return l.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", l.displayName)), typeof l == "function" && Re.set(l, Y), Y;
                  }
                while ($ >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        Be = !1, De.current = M, Qt(), Error.prepareStackTrace = I;
      }
      var ue = l ? l.displayName || l.name : "", le = ue ? _e(ue) : "";
      return typeof l == "function" && Re.set(l, le), le;
    }
    function tr(l, m, k) {
      return lt(l, !1);
    }
    function rr(l) {
      var m = l.prototype;
      return !!(m && m.isReactComponent);
    }
    function Ee(l, m, k) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return lt(l, rr(l));
      if (typeof l == "string")
        return _e(l);
      switch (l) {
        case x:
          return _e("Suspense");
        case b:
          return _e("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            return tr(l.render);
          case f:
            return Ee(l.type, m, k);
          case p: {
            var _ = l, I = _._payload, M = _._init;
            try {
              return Ee(M(I), m, k);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, it = {}, dt = N.ReactDebugCurrentFrame;
    function Se(l) {
      if (l) {
        var m = l._owner, k = Ee(l.type, l._source, m ? m.type : null);
        dt.setExtraStackFrame(k);
      } else
        dt.setExtraStackFrame(null);
    }
    function sr(l, m, k, _, I) {
      {
        var M = Function.call.bind(we);
        for (var T in l)
          if (M(l, T)) {
            var S = void 0;
            try {
              if (typeof l[T] != "function") {
                var V = Error((_ || "React class") + ": " + k + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw V.name = "Invariant Violation", V;
              }
              S = l[T](m, T, _, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              S = $;
            }
            S && !(S instanceof Error) && (Se(I), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", k, T, typeof S), Se(null)), S instanceof Error && !(S.message in it) && (it[S.message] = !0, Se(I), g("Failed %s type: %s", k, S.message), Se(null));
          }
      }
    }
    var ar = Array.isArray;
    function Ge(l) {
      return ar(l);
    }
    function or(l) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, k = m && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return k;
      }
    }
    function nr(l) {
      try {
        return ct(l), !1;
      } catch {
        return !0;
      }
    }
    function ct(l) {
      return "" + l;
    }
    function ut(l) {
      if (nr(l))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(l)), ct(l);
    }
    var bt = N.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xt, ft;
    function ir(l) {
      if (we.call(l, "ref")) {
        var m = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function dr(l) {
      if (we.call(l, "key")) {
        var m = Object.getOwnPropertyDescriptor(l, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function cr(l, m) {
      typeof l.ref == "string" && bt.current;
    }
    function ur(l, m) {
      {
        var k = function() {
          xt || (xt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        k.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function br(l, m) {
      {
        var k = function() {
          ft || (ft = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        k.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var xr = function(l, m, k, _, I, M, T) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: m,
        ref: k,
        props: T,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function fr(l, m, k, _, I) {
      {
        var M, T = {}, S = null, V = null;
        k !== void 0 && (ut(k), S = "" + k), dr(m) && (ut(m.key), S = "" + m.key), ir(m) && (V = m.ref, cr(m, I));
        for (M in m)
          we.call(m, M) && !lr.hasOwnProperty(M) && (T[M] = m[M]);
        if (l && l.defaultProps) {
          var $ = l.defaultProps;
          for (M in $)
            T[M] === void 0 && (T[M] = $[M]);
        }
        if (S || V) {
          var D = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          S && ur(T, D), V && br(T, D);
        }
        return xr(l, S, V, I, _, bt.current, T);
      }
    }
    var Ve = N.ReactCurrentOwner, mt = N.ReactDebugCurrentFrame;
    function ce(l) {
      if (l) {
        var m = l._owner, k = Ee(l.type, l._source, m ? m.type : null);
        mt.setExtraStackFrame(k);
      } else
        mt.setExtraStackFrame(null);
    }
    var Ke;
    Ke = !1;
    function We(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function pt() {
      {
        if (Ve.current) {
          var l = J(Ve.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function mr(l) {
      return "";
    }
    var gt = {};
    function pr(l) {
      {
        var m = pt();
        if (!m) {
          var k = typeof l == "string" ? l : l.displayName || l.name;
          k && (m = `

Check the top-level render call using <` + k + ">.");
        }
        return m;
      }
    }
    function ht(l, m) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var k = pr(m);
        if (gt[k])
          return;
        gt[k] = !0;
        var _ = "";
        l && l._owner && l._owner !== Ve.current && (_ = " It was passed a child from " + J(l._owner.type) + "."), ce(l), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, _), ce(null);
      }
    }
    function wt(l, m) {
      {
        if (typeof l != "object")
          return;
        if (Ge(l))
          for (var k = 0; k < l.length; k++) {
            var _ = l[k];
            We(_) && ht(_, m);
          }
        else if (We(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var I = j(l);
          if (typeof I == "function" && I !== l.entries)
            for (var M = I.call(l), T; !(T = M.next()).done; )
              We(T.value) && ht(T.value, m);
        }
      }
    }
    function gr(l) {
      {
        var m = l.type;
        if (m == null || typeof m == "string")
          return;
        var k;
        if (typeof m == "function")
          k = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === f))
          k = m.propTypes;
        else
          return;
        if (k) {
          var _ = J(m);
          sr(k, l.props, "prop", _, l);
        } else if (m.PropTypes !== void 0 && !Ke) {
          Ke = !0;
          var I = J(m);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(l) {
      {
        for (var m = Object.keys(l.props), k = 0; k < m.length; k++) {
          var _ = m[k];
          if (_ !== "children" && _ !== "key") {
            ce(l), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), ce(null);
            break;
          }
        }
        l.ref !== null && (ce(l), g("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    var vt = {};
    function yt(l, m, k, _, I, M) {
      {
        var T = me(l);
        if (!T) {
          var S = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var V = mr();
          V ? S += V : S += pt();
          var $;
          l === null ? $ = "null" : Ge(l) ? $ = "array" : l !== void 0 && l.$$typeof === t ? ($ = "<" + (J(l.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof l, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, S);
        }
        var D = fr(l, m, k, I, M);
        if (D == null)
          return D;
        if (T) {
          var Y = m.children;
          if (Y !== void 0)
            if (_)
              if (Ge(Y)) {
                for (var ue = 0; ue < Y.length; ue++)
                  wt(Y[ue], l);
                Object.freeze && Object.freeze(Y);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wt(Y, l);
        }
        if (we.call(m, "key")) {
          var le = J(l), W = Object.keys(m).filter(function(Nr) {
            return Nr !== "key";
          }), Ue = W.length > 0 ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vt[le + Ue]) {
            var jr = W.length > 0 ? "{" + W.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ue, le, jr, le), vt[le + Ue] = !0;
          }
        }
        return l === a ? hr(D) : gr(D), D;
      }
    }
    function wr(l, m, k) {
      return yt(l, m, k, !0);
    }
    function vr(l, m, k) {
      return yt(l, m, k, !1);
    }
    var yr = vr, kr = wr;
    ye.Fragment = a, ye.jsx = yr, ye.jsxs = kr;
  })()), ye;
}
var Ct;
function Rr() {
  return Ct || (Ct = 1, process.env.NODE_ENV === "production" ? Te.exports = Cr() : Te.exports = _r()), Te.exports;
}
var r = Rr();
function Dt(e) {
  var t, s, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (s = Dt(e[t])) && (a && (a += " "), a += s);
  } else for (s in e) e[s] && (a && (a += " "), a += s);
  return a;
}
function Er() {
  for (var e, t, s = 0, a = "", o = arguments.length; s < o; s++) (e = arguments[s]) && (t = Dt(e)) && (a && (a += " "), a += t);
  return a;
}
const Je = "-", Sr = (e) => {
  const t = Ir(e), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (i) => {
      const d = i.split(Je);
      return d[0] === "" && d.length !== 1 && d.shift(), Ft(d, t) || Tr(i);
    },
    getConflictingClassGroupIds: (i, d) => {
      const c = s[i] || [];
      return d && a[i] ? [...c, ...a[i]] : c;
    }
  };
}, Ft = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const s = e[0], a = t.nextPart.get(s), o = a ? Ft(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const n = e.join(Je);
  return (i = t.validators.find(({
    validator: d
  }) => d(n))) == null ? void 0 : i.classGroupId;
}, _t = /^\[(.+)\]$/, Tr = (e) => {
  if (_t.test(e)) {
    const t = _t.exec(e)[1], s = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, Ir = (e) => {
  const {
    theme: t,
    prefix: s
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Mr(Object.entries(e.classGroups), s).forEach(([n, i]) => {
    Ye(i, a, n, t);
  }), a;
}, Ye = (e, t, s, a) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const n = o === "" ? t : Rt(t, o);
      n.classGroupId = s;
      return;
    }
    if (typeof o == "function") {
      if (Ar(o)) {
        Ye(o(a), t, s, a);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: s
      });
      return;
    }
    Object.entries(o).forEach(([n, i]) => {
      Ye(i, Rt(t, n), s, a);
    });
  });
}, Rt = (e, t) => {
  let s = e;
  return t.split(Je).forEach((a) => {
    s.nextPart.has(a) || s.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(a);
  }), s;
}, Ar = (e) => e.isThemeGetter, Mr = (e, t) => t ? e.map(([s, a]) => {
  const o = a.map((n) => typeof n == "string" ? t + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([i, d]) => [t + i, d])) : n);
  return [s, o];
}) : e, Or = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const o = (n, i) => {
    s.set(n, i), t++, t > e && (t = 0, a = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(n) {
      let i = s.get(n);
      if (i !== void 0)
        return i;
      if ((i = a.get(n)) !== void 0)
        return o(n, i), i;
    },
    set(n, i) {
      s.has(n) ? s.set(n, i) : o(n, i);
    }
  };
}, Bt = "!", Pr = (e) => {
  const {
    separator: t,
    experimentalParseClassName: s
  } = e, a = t.length === 1, o = t[0], n = t.length, i = (d) => {
    const c = [];
    let x = 0, b = 0, f;
    for (let j = 0; j < d.length; j++) {
      let N = d[j];
      if (x === 0) {
        if (N === o && (a || d.slice(j, j + n) === t)) {
          c.push(d.slice(b, j)), b = j + n;
          continue;
        }
        if (N === "/") {
          f = j;
          continue;
        }
      }
      N === "[" ? x++ : N === "]" && x--;
    }
    const p = c.length === 0 ? d : d.substring(b), v = p.startsWith(Bt), h = v ? p.substring(1) : p, y = f && f > b ? f - b : void 0;
    return {
      modifiers: c,
      hasImportantModifier: v,
      baseClassName: h,
      maybePostfixModifierPosition: y
    };
  };
  return s ? (d) => s({
    className: d,
    parseClassName: i
  }) : i;
}, zr = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let s = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...s.sort(), a), s = []) : s.push(a);
  }), t.push(...s.sort()), t;
}, $r = (e) => ({
  cache: Or(e.cacheSize),
  parseClassName: Pr(e),
  ...Sr(e)
}), Lr = /\s+/, Dr = (e, t) => {
  const {
    parseClassName: s,
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  } = t, n = [], i = e.trim().split(Lr);
  let d = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const x = i[c], {
      modifiers: b,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: v
    } = s(x);
    let h = !!v, y = a(h ? p.substring(0, v) : p);
    if (!y) {
      if (!h) {
        d = x + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (y = a(p), !y) {
        d = x + (d.length > 0 ? " " + d : d);
        continue;
      }
      h = !1;
    }
    const j = zr(b).join(":"), N = f ? j + Bt : j, g = N + y;
    if (n.includes(g))
      continue;
    n.push(g);
    const C = o(y, h);
    for (let w = 0; w < C.length; ++w) {
      const R = C[w];
      n.push(N + R);
    }
    d = x + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function Fr() {
  let e = 0, t, s, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (s = Gt(t)) && (a && (a += " "), a += s);
  return a;
}
const Gt = (e) => {
  if (typeof e == "string")
    return e;
  let t, s = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = Gt(e[a])) && (s && (s += " "), s += t);
  return s;
};
function Br(e, ...t) {
  let s, a, o, n = i;
  function i(c) {
    const x = t.reduce((b, f) => f(b), e());
    return s = $r(x), a = s.cache.get, o = s.cache.set, n = d, d(c);
  }
  function d(c) {
    const x = a(c);
    if (x)
      return x;
    const b = Dr(c, s);
    return o(c, b), b;
  }
  return function() {
    return n(Fr.apply(null, arguments));
  };
}
const O = (e) => {
  const t = (s) => s[e] || [];
  return t.isThemeGetter = !0, t;
}, Vt = /^\[(?:([a-z-]+):)?(.+)\]$/i, Gr = /^\d+\/\d+$/, Vr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Kr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ur = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Hr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Q = (e) => be(e) || Vr.has(e) || Gr.test(e), se = (e) => fe(e, "length", rs), be = (e) => !!e && !Number.isNaN(Number(e)), He = (e) => fe(e, "number", be), ke = (e) => !!e && Number.isInteger(Number(e)), Yr = (e) => e.endsWith("%") && be(e.slice(0, -1)), E = (e) => Vt.test(e), ae = (e) => Kr.test(e), Jr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Xr = (e) => fe(e, Jr, Kt), Zr = (e) => fe(e, "position", Kt), Qr = /* @__PURE__ */ new Set(["image", "url"]), es = (e) => fe(e, Qr, as), ts = (e) => fe(e, "", ss), je = () => !0, fe = (e, t, s) => {
  const a = Vt.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : s(a[2]) : !1;
}, rs = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Wr.test(e) && !Ur.test(e)
), Kt = () => !1, ss = (e) => Hr.test(e), as = (e) => qr.test(e), os = () => {
  const e = O("colors"), t = O("spacing"), s = O("blur"), a = O("brightness"), o = O("borderColor"), n = O("borderRadius"), i = O("borderSpacing"), d = O("borderWidth"), c = O("contrast"), x = O("grayscale"), b = O("hueRotate"), f = O("invert"), p = O("gap"), v = O("gradientColorStops"), h = O("gradientColorStopPositions"), y = O("inset"), j = O("margin"), N = O("opacity"), g = O("padding"), C = O("saturate"), w = O("scale"), R = O("sepia"), L = O("skew"), B = O("space"), F = O("translate"), K = () => ["auto", "contain", "none"], me = () => ["auto", "hidden", "clip", "visible", "scroll"], pe = () => ["auto", E, t], A = () => [E, t], J = () => ["", Q, se], H = () => ["auto", be, E], te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ne = () => ["solid", "dashed", "dotted", "double", "none"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], de = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], re = () => ["", "0", E], he = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], q = () => [be, E];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [je],
      spacing: [Q, se],
      blur: ["none", "", ae, E],
      brightness: q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ae, E],
      borderSpacing: A(),
      borderWidth: J(),
      contrast: q(),
      grayscale: re(),
      hueRotate: q(),
      invert: re(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Yr, se],
      inset: pe(),
      margin: pe(),
      opacity: q(),
      padding: A(),
      saturate: q(),
      scale: q(),
      sepia: re(),
      skew: q(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", E]
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
        columns: [ae]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": he()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": he()
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
        object: [...te(), E]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: me()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": me()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": me()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: K()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": K()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": K()
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
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
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
        z: ["auto", ke, E]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: pe()
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
        flex: ["1", "auto", "initial", "none", E]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: re()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: re()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ke, E]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [je]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ke, E]
        }, E]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [je]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ke, E]
        }, E]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": ["auto", "min", "max", "fr", E]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", E]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...de()]
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
        content: ["normal", ...de(), "baseline"]
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
        "place-content": [...de(), "baseline"]
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
        p: [g]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [g]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [g]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [g]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [g]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [g]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [g]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [g]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [g]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [j]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [j]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [j]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [j]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [j]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [j]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [j]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [j]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [j]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [B]
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
        "space-y": [B]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", E, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [E, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [E, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ae]
        }, ae]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [E, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [E, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ae, se]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", He]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [je]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", E]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", be, He]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Q, E]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", E]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", E]
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
        "placeholder-opacity": [N]
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
        "text-opacity": [N]
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
        decoration: [...ne(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Q, se]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Q, E]
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
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", E]
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
        content: ["none", E]
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
        "bg-opacity": [N]
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
        bg: [...te(), Zr]
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
        bg: ["auto", "cover", "contain", Xr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, es]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [v]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [n]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [n]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [n]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [n]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [n]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [n]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [n]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [n]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [n]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [n]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [n]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [n]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [n]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [n]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [n]
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
        "border-opacity": [N]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ne(), "hidden"]
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
        "divide-opacity": [N]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ne()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ne()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Q, E]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Q, se]
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
        ring: J()
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
        "ring-opacity": [N]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Q, se]
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
        shadow: ["", "inner", "none", ae, ts]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [je]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [N]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ge(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ge()
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
        "drop-shadow": ["", "none", ae, E]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [x]
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
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R]
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
        "backdrop-grayscale": [x]
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
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [N]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", E]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", E]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", E]
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
        scale: [w]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [w]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [w]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ke, E]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [F]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [F]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [L]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [L]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", E]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E]
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        "will-change": ["auto", "scroll", "contents", "transform", E]
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
        stroke: [Q, se, He]
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
}, ns = /* @__PURE__ */ Br(os);
function u(...e) {
  return ns(Er(e));
}
const zo = ({
  fluid: e = !1,
  className: t,
  children: s,
  ...a
}) => {
  const o = () => e === !0 ? "w-full px-4 sm:px-6 lg:px-8" : e === "sm" ? "w-full px-4 sm:max-w-screen-sm sm:px-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "md" ? "w-full px-4 md:max-w-screen-md md:px-6 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "lg" ? "w-full px-4 lg:max-w-screen-lg lg:px-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "xl" ? "w-full px-4 xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "2xl" ? "w-full px-4 2xl:max-w-screen-2xl" : "w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(o(), "mx-auto transition-all duration-200", t),
      ...a,
      children: s
    }
  );
}, ls = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-4",
  4: "gap-6",
  5: "gap-8",
  6: "gap-12"
}, is = {
  0: "gap-x-0",
  1: "gap-x-1",
  2: "gap-x-2",
  3: "gap-x-4",
  4: "gap-x-6",
  5: "gap-x-8",
  6: "gap-x-12"
}, ds = {
  0: "gap-y-0",
  1: "gap-y-1",
  2: "gap-y-2",
  3: "gap-y-4",
  4: "gap-y-6",
  5: "gap-y-8",
  6: "gap-y-12"
}, cs = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch"
}, us = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}, $o = ({
  gutter: e = 4,
  gx: t,
  gy: s,
  cols: a,
  colsSm: o,
  colsMd: n,
  colsLg: i,
  colsXl: d,
  align: c,
  justify: x,
  className: b,
  children: f,
  ...p
}) => {
  const v = () => t !== void 0 || s !== void 0 ? u(
    t !== void 0 ? is[t] : "",
    s !== void 0 ? ds[s] : ""
  ) : ls[e] || "gap-4", h = () => {
    const j = [];
    return a && j.push(`grid-cols-${a}`), o && j.push(`sm:grid-cols-${o}`), n && j.push(`md:grid-cols-${n}`), i && j.push(`lg:grid-cols-${i}`), d && j.push(`xl:grid-cols-${d}`), j.join(" ");
  }, y = !!(a || o || n || i || d);
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(
        y ? "grid" : "flex flex-wrap -mx-2 sm:-mx-3",
        y ? v() : "",
        c && cs[c],
        x && us[x],
        y && h(),
        b
      ),
      ...p,
      children: f
    }
  );
}, bs = {
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
}, xs = {
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
}, fs = {
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
}, ms = {
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
}, ps = {
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
}, Lo = ({
  xs: e,
  sm: t,
  md: s,
  lg: a,
  xl: o,
  offsetXs: n,
  offsetSm: i,
  offsetMd: d,
  offsetLg: c,
  offsetXl: x,
  className: b,
  children: f,
  ...p
}) => {
  const v = () => {
    const h = ["px-2 sm:px-3 flex-shrink-0 max-w-full min-w-0 box-border"];
    return !e && !t && !s && !a && !o ? h.push("flex-1 w-full") : (e !== void 0 ? h.push(bs[String(e)] || "w-full") : h.push("w-full"), t !== void 0 && h.push(xs[String(t)] || ""), s !== void 0 && h.push(fs[String(s)] || ""), a !== void 0 && h.push(ms[String(a)] || ""), o !== void 0 && h.push(ps[String(o)] || "")), n && h.push(`ml-[${n / 12 * 100}%]`), i && h.push(`sm:ml-[${i / 12 * 100}%]`), d && h.push(`md:ml-[${d / 12 * 100}%]`), c && h.push(`lg:ml-[${c / 12 * 100}%]`), x && h.push(`xl:ml-[${x / 12 * 100}%]`), h.join(" ");
  };
  return /* @__PURE__ */ r.jsx("div", { className: u(v(), b), ...p, children: f });
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Wt = (...e) => e.filter((t, s, a) => !!t && t.trim() !== "" && a.indexOf(t) === s).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hs = {
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
const ws = Lt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: a,
    className: o = "",
    children: n,
    iconNode: i,
    ...d
  }, c) => qe(
    "svg",
    {
      ref: c,
      ...hs,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: a ? Number(s) * 24 / Number(t) : s,
      className: Wt("lucide", o),
      ...d
    },
    [
      ...i.map(([x, b]) => qe(x, b)),
      ...Array.isArray(n) ? n : [n]
    ]
  )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z = (e, t) => {
  const s = Lt(
    ({ className: a, ...o }, n) => qe(ws, {
      ref: n,
      iconNode: t,
      className: Wt(`lucide-${gs(e)}`, a),
      ...o
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
const vs = [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
], ys = z("ArrowDownRight", vs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
], js = z("ArrowUpRight", ks);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Me = z("Check", Ns);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Xe = z("ChevronDown", Cs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ut = z("ChevronLeft", _s);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ze = z("ChevronRight", Rs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Qe = z("CircleAlert", Es);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Oe = z("CircleCheck", Ss);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Et = z("CircleX", Ts);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
], As = z("CloudUpload", Is);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
], Os = z("CodeXml", Ms);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Ht = z("Copy", Ps);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z", key: "1mlx9k" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }]
], $s = z("FileQuestion", zs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
], Ds = z("File", Ls);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], X = z("Info", Fs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Gs = z("LoaderCircle", Bs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], Ks = z("Menu", Vs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [["path", { d: "M5 12h14", key: "1ays0h" }]], Us = z("Minus", Ws);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
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
], qs = z("PackageOpen", Hs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Js = z("Plus", Ys);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], Zs = z("Search", Xs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], ea = z("Star", Qs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ae = z("TriangleAlert", ta);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ee = z("X", ra), sa = {
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
}, aa = {
  sm: "text-xs px-2.5 py-1.5 min-h-[32px] gap-1.5",
  md: "text-sm px-4 py-2 min-h-[38px] gap-2",
  lg: "text-base px-5 py-2.5 min-h-[46px] gap-2.5"
}, oa = G.forwardRef(
  ({
    variant: e = "primary",
    size: t = "md",
    pill: s = !1,
    block: a = !1,
    isLoading: o = !1,
    icon: n,
    disabled: i,
    className: d,
    children: c,
    ...x
  }, b) => /* @__PURE__ */ r.jsxs(
    "button",
    {
      ref: b,
      disabled: i || o,
      className: u(
        "inline-flex items-center justify-center font-medium transition-all duration-150 select-none shadow-sm",
        "focus:outline-none disabled:opacity-65 disabled:pointer-events-none active:scale-[0.98]",
        s ? "rounded-full" : "rounded-md",
        a ? "w-full flex" : "",
        aa[t],
        sa[e],
        d
      ),
      ...x,
      children: [
        o && /* @__PURE__ */ r.jsx(Gs, { className: u("animate-spin", t === "sm" ? "w-3.5 h-3.5" : t === "lg" ? "w-5 h-5" : "w-4 h-4") }),
        !o && n && /* @__PURE__ */ r.jsx("span", { className: "inline-flex shrink-0", children: n }),
        c
      ]
    }
  )
);
oa.displayName = "Button";
const Do = ({
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
), Fo = ({
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
    children: /* @__PURE__ */ r.jsx(ee, { className: "w-4 h-4" })
  }
), na = {
  primary: "bg-[#0d6efd] text-white",
  secondary: "bg-[#6c757d] text-white",
  success: "bg-[#198754] text-white",
  danger: "bg-[#dc3545] text-white",
  warning: "bg-[#ffc107] text-gray-900",
  info: "bg-[#0dcaf0] text-gray-900",
  light: "bg-[#f8f9fa] text-gray-800 border border-gray-200 dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600",
  dark: "bg-[#212529] text-white"
}, la = {
  sm: "text-[10px] px-1.5 py-0.5 gap-1",
  md: "text-xs px-2.5 py-1 gap-1.5",
  lg: "text-sm px-3 py-1.5 gap-2"
}, Bo = ({
  variant: e = "primary",
  pill: t = !1,
  dot: s = !1,
  size: a = "md",
  icon: o,
  className: n,
  children: i,
  ...d
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    className: u(
      "inline-flex items-center justify-center font-semibold tracking-wide leading-none transition-colors align-baseline whitespace-nowrap",
      t ? "rounded-full" : "rounded",
      na[e],
      la[a],
      n
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
      o && /* @__PURE__ */ r.jsx("span", { className: "inline-flex shrink-0", children: o }),
      i
    ]
  }
), St = {
  primary: {
    wrapper: "bg-[#cfe2ff] text-[#084298] border-[#b6d4fe] dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-900",
    close: "text-[#084298] hover:bg-[#b6d4fe]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(X, { className: "w-5 h-5 shrink-0" })
  },
  secondary: {
    wrapper: "bg-[#e2e3e5] text-[#41464b] border-[#d3d6d8] dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    close: "text-[#41464b] hover:bg-[#d3d6d8]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(X, { className: "w-5 h-5 shrink-0" })
  },
  success: {
    wrapper: "bg-[#d1e7dd] text-[#0f5132] border-[#badbcc] dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900",
    close: "text-[#0f5132] hover:bg-[#badbcc]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(Oe, { className: "w-5 h-5 shrink-0" })
  },
  danger: {
    wrapper: "bg-[#f8d7da] text-[#842029] border-[#f5c2c7] dark:bg-red-950/50 dark:text-red-300 dark:border-red-900",
    close: "text-[#842029] hover:bg-[#f5c2c7]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(Qe, { className: "w-5 h-5 shrink-0" })
  },
  warning: {
    wrapper: "bg-[#fff3cd] text-[#664d03] border-[#ffecb5] dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-900",
    close: "text-[#664d03] hover:bg-[#ffecb5]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(Ae, { className: "w-5 h-5 shrink-0" })
  },
  info: {
    wrapper: "bg-[#cff4fc] text-[#055160] border-[#b6effb] dark:bg-cyan-950/50 dark:text-cyan-300 dark:border-cyan-900",
    close: "text-[#055160] hover:bg-[#b6effb]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(X, { className: "w-5 h-5 shrink-0" })
  },
  light: {
    wrapper: "bg-[#fefefe] text-[#636464] border-[#e2e3e5] dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700",
    close: "text-[#636464] hover:bg-gray-200",
    defaultIcon: /* @__PURE__ */ r.jsx(X, { className: "w-5 h-5 shrink-0" })
  },
  dark: {
    wrapper: "bg-[#d3d3d4] text-[#141619] border-[#bcbebf] dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700",
    close: "text-[#141619] hover:bg-[#bcbebf]/50",
    defaultIcon: /* @__PURE__ */ r.jsx(X, { className: "w-5 h-5 shrink-0" })
  }
}, ia = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("h4", { className: u("text-base sm:text-lg font-semibold mb-1 leading-snug", e), ...s, children: t }), da = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("a", { className: u("font-bold underline underline-offset-2 hover:opacity-80 transition-opacity", e), ...s, children: t }), qt = ({
  variant: e = "primary",
  dismissible: t = !1,
  show: s = !0,
  onClose: a,
  icon: o,
  className: n,
  children: i,
  ...d
}) => {
  const [c, x] = P(s);
  if (!c) return null;
  const b = () => {
    x(!1), a && a();
  }, f = St[e] || St.primary, p = () => o === !1 ? null : o === !0 || o === void 0 ? f.defaultIcon : o;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "alert",
      className: u(
        "relative flex items-start gap-3 p-4 rounded-lg border text-sm sm:text-base transition-all duration-200 shadow-sm",
        f.wrapper,
        n
      ),
      ...d,
      children: [
        p() && /* @__PURE__ */ r.jsx("div", { className: "mt-0.5 shrink-0", children: p() }),
        /* @__PURE__ */ r.jsx("div", { className: "flex-1 min-w-0 pr-6", children: i }),
        t && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: b,
            "aria-label": "Close alert",
            className: u(
              "absolute top-3.5 right-3 p-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",
              f.close
            ),
            children: /* @__PURE__ */ r.jsx(ee, { className: "w-4 h-4" })
          }
        )
      ]
    }
  );
};
qt.Heading = ia;
qt.Link = da;
const ca = {
  default: "border-slate-200 dark:border-slate-700",
  primary: "border-blue-500",
  success: "border-emerald-500",
  danger: "border-red-500",
  warning: "border-amber-500",
  info: "border-cyan-500",
  none: "border-transparent"
}, ua = ({
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
), ba = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("div", { className: u("p-4 sm:p-6 flex-1 text-slate-600 dark:text-slate-300", e), ...s, children: t }), xa = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("h3", { className: u("text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 leading-tight", e), ...s, children: t }), fa = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("h6", { className: u("text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-3", e), ...s, children: t }), ma = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("p", { className: u("text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 last:mb-0 leading-relaxed", e), ...s, children: t }), pa = ({
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
), ga = ({
  position: e = "top",
  className: t,
  alt: s = "",
  ...a
}) => {
  const o = e === "top" ? "rounded-t-xl" : e === "bottom" ? "rounded-b-xl" : "rounded-none";
  return /* @__PURE__ */ r.jsx(
    "img",
    {
      className: u("w-full object-cover max-h-60", o, t),
      alt: s,
      ...a
    }
  );
}, ie = ({
  hoverable: e = !1,
  border: t = "default",
  horizontal: s = !1,
  className: a,
  children: o,
  ...n
}) => {
  const i = () => s === !0 ? "flex flex-col md:flex-row" : s === "sm" ? "flex flex-col sm:flex-row" : s === "md" ? "flex flex-col md:flex-row" : s === "lg" ? "flex flex-col lg:flex-row" : "flex flex-col";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(
        "rounded-xl border bg-white dark:bg-slate-850 shadow-sm transition-all duration-200 overflow-hidden",
        ca[t],
        e && "hover:shadow-md hover:-translate-y-0.5",
        i(),
        a
      ),
      ...n,
      children: o
    }
  );
};
ie.Header = ua;
ie.Body = ba;
ie.Title = xa;
ie.Subtitle = fa;
ie.Text = ma;
ie.Footer = pa;
ie.Img = ga;
const et = xe({
  isOpen: !1,
  setIsOpen: () => {
  },
  expand: "md"
}), ha = {
  sm: "sm:flex-row sm:items-center",
  md: "md:flex-row md:items-center",
  lg: "lg:flex-row lg:items-center",
  xl: "xl:flex-row xl:items-center",
  always: "flex-row items-center",
  never: "flex-col"
}, wa = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
  xl: "xl:hidden",
  always: "hidden",
  never: "block"
}, va = {
  sm: "sm:!flex sm:basis-auto sm:flex-row",
  md: "md:!flex md:basis-auto md:flex-row",
  lg: "lg:!flex lg:basis-auto lg:flex-row",
  xl: "xl:!flex xl:basis-auto xl:flex-row",
  always: "!flex basis-auto flex-row",
  never: ""
}, ya = ({
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
), ka = ({
  className: e,
  children: t,
  ...s
}) => {
  const { isOpen: a, setIsOpen: o, expand: n } = U(et);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      onClick: () => o(!a),
      "aria-label": "Toggle navigation",
      className: u(
        "p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
        wa[n],
        e
      ),
      ...s,
      children: t || (a ? /* @__PURE__ */ r.jsx(ee, { className: "w-5 h-5" }) : /* @__PURE__ */ r.jsx(Ks, { className: "w-5 h-5" }))
    }
  );
}, ja = ({
  className: e,
  children: t,
  ...s
}) => {
  const { isOpen: a, expand: o } = U(et);
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(
        "w-full basis-full items-center justify-between transition-all duration-300 ease-in-out",
        va[o],
        a ? "flex flex-col mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 lg:border-0 lg:mt-0 lg:pt-0" : "hidden",
        e
      ),
      ...s,
      children: t
    }
  );
}, tt = ({
  expand: e = "md",
  theme: t = "light",
  sticky: s,
  fixed: a,
  className: o,
  children: n,
  ...i
}) => {
  const [d, c] = P(!1), x = s === "top" ? "sticky top-0 z-40" : s === "bottom" ? "sticky bottom-0 z-40" : a === "top" ? "fixed top-0 left-0 right-0 z-40" : a === "bottom" ? "fixed bottom-0 left-0 right-0 z-40" : "relative", b = t === "dark" ? "bg-slate-900 text-white border-b border-slate-800 shadow-md" : "bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200/80 dark:bg-slate-900/95 dark:border-slate-800 shadow-sm";
  return /* @__PURE__ */ r.jsx(et.Provider, { value: { isOpen: d, setIsOpen: c, expand: e }, children: /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: u(
        "w-full px-4 py-3 sm:px-6 transition-colors duration-200",
        x,
        b,
        o
      ),
      ...i,
      children: /* @__PURE__ */ r.jsx("div", { className: u("mx-auto max-w-7xl flex flex-wrap items-center justify-between", ha[e]), children: n })
    }
  ) });
};
tt.Brand = ya;
tt.Toggle = ka;
tt.Collapse = ja;
const Na = ({
  active: e = !1,
  disabled: t = !1,
  inNavbar: s = !1,
  className: a,
  children: o,
  ...n
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
    ...n,
    children: o
  }
), Ca = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("li", { className: u("inline-block w-full lg:w-auto", e), ...s, children: t }), Yt = ({
  variant: e = "default",
  fill: t = !1,
  justified: s = !1,
  scrollable: a = !0,
  navbar: o = !1,
  className: n,
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
        o ? "w-full lg:w-auto flex flex-col lg:flex-row items-stretch lg:items-center gap-1 sm:gap-2" : "flex items-center gap-1 sm:gap-2",
        !o && a && "overflow-x-auto custom-scrollbar pb-1 sm:pb-0 max-w-full",
        t && "[&>*]:flex-auto [&_a]:justify-center text-center",
        s && "[&>*]:flex-1 [&_a]:justify-center text-center",
        c(),
        n
      ),
      ...d,
      children: /* @__PURE__ */ r.jsx("ul", { className: u(
        "list-none p-0 m-0 w-full flex gap-1 sm:gap-2",
        o ? "flex-col lg:flex-row items-stretch lg:items-center" : "flex-row items-center"
      ), children: i })
    }
  );
};
Yt.Link = Na;
Yt.Item = Ca;
const _a = ({
  active: e = !1,
  href: t,
  className: s,
  children: a,
  ...o
}) => /* @__PURE__ */ r.jsx(
  "li",
  {
    className: u(
      "inline-flex items-center text-xs sm:text-sm font-medium",
      e ? "text-slate-800 dark:text-slate-200 font-semibold" : "text-slate-500 dark:text-slate-400",
      s
    ),
    ...o,
    children: t && !e ? /* @__PURE__ */ r.jsx("a", { href: t, className: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors", children: a }) : /* @__PURE__ */ r.jsx("span", { children: a })
  }
), Ra = ({
  separator: e = /* @__PURE__ */ r.jsx(Ze, { className: "w-3.5 h-3.5 text-slate-400 mx-1.5 shrink-0" }),
  className: t,
  children: s,
  ...a
}) => {
  const o = G.Children.toArray(s);
  return /* @__PURE__ */ r.jsx("nav", { "aria-label": "breadcrumb", className: u("flex py-2 px-1", t), ...a, children: /* @__PURE__ */ r.jsx("ol", { className: "inline-flex items-center flex-wrap gap-1 list-none p-0 m-0", children: o.map((n, i) => /* @__PURE__ */ r.jsxs(G.Fragment, { children: [
    n,
    i < o.length - 1 && e
  ] }, i)) }) });
};
Ra.Item = _a;
const Ie = {
  sm: "w-7 h-7 text-xs",
  md: "w-9 h-9 text-sm",
  lg: "w-11 h-11 text-base"
}, Go = ({
  currentPage: e,
  totalPages: t,
  onPageChange: s,
  size: a = "md",
  maxVisible: o = 5,
  className: n,
  ...i
}) => {
  const c = (() => {
    const x = [];
    if (t <= o)
      for (let b = 1; b <= t; b++) x.push(b);
    else {
      const b = Math.floor(o / 2);
      let f = Math.max(1, e - b), p = Math.min(t, f + o - 1);
      p - f + 1 < o && (f = Math.max(1, p - o + 1)), f > 1 && (x.push(1), f > 2 && x.push("..."));
      for (let v = f; v <= p; v++)
        x.push(v);
      p < t && (p < t - 1 && x.push("..."), x.push(t));
    }
    return x;
  })();
  return /* @__PURE__ */ r.jsxs("nav", { "aria-label": "Pagination", className: u("flex items-center justify-center gap-1", n), ...i, children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        disabled: e <= 1,
        onClick: () => s(e - 1),
        className: u(
          "inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none shadow-sm",
          Ie[a]
        ),
        "aria-label": "Previous page",
        children: /* @__PURE__ */ r.jsx(Ut, { className: "w-4 h-4" })
      }
    ),
    c.map(
      (x, b) => x === "..." ? /* @__PURE__ */ r.jsx(
        "span",
        {
          className: u("inline-flex items-center justify-center text-slate-400 font-semibold", Ie[a]),
          children: "..."
        },
        `ellipsis-${b}`
      ) : /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          onClick: () => s(x),
          className: u(
            "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150 shadow-sm",
            Ie[a],
            e === x ? "bg-blue-600 text-white font-bold shadow-blue-500/20" : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
          ),
          children: x
        },
        `page-${x}`
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
          Ie[a]
        ),
        "aria-label": "Next page",
        children: /* @__PURE__ */ r.jsx(Ze, { className: "w-4 h-4" })
      }
    )
  ] });
}, Ea = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  fullscreen: "max-w-full m-0 h-full rounded-none"
}, Sa = ({
  closeButton: e = !0,
  onClose: t,
  className: s,
  children: a,
  ...o
}) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    className: u(
      "flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-t-xl",
      s
    ),
    ...o,
    children: [
      /* @__PURE__ */ r.jsx("div", { className: "flex-1 pr-4", children: a }),
      e && /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          onClick: t,
          "aria-label": "Close",
          className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none",
          children: /* @__PURE__ */ r.jsx(ee, { className: "w-5 h-5" })
        }
      )
    ]
  }
), Ta = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("h5", { className: u("text-lg sm:text-xl font-semibold text-slate-900 dark:text-white", e), ...s, children: t }), Ia = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("div", { className: u("p-5 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base", e), ...s, children: t }), Aa = ({
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
), Pe = ({
  show: e,
  onClose: t,
  size: s = "md",
  fullscreenSmDown: a = !1,
  centered: o = !0,
  scrollable: n = !1,
  backdrop: i = !0,
  className: d,
  children: c
}) => {
  if (Z(() => {
    const b = (f) => {
      f.key === "Escape" && e && t();
    };
    return e ? (document.body.style.overflow = "hidden", window.addEventListener("keydown", b)) : document.body.style.overflow = "", () => {
      document.body.style.overflow = "", window.removeEventListener("keydown", b);
    };
  }, [e, t]), !e) return null;
  const x = (b) => {
    b.target === b.currentTarget && i !== "static" && t();
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      onClick: x,
      className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200",
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: u(
            "relative w-full bg-white dark:bg-slate-850 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col transition-all transform scale-100 animate-in zoom-in-95 duration-150",
            a ? "max-w-full h-full sm:h-auto sm:max-w-lg rounded-none sm:rounded-xl" : Ea[s],
            o ? "my-auto" : "mt-12 mb-auto",
            n && "max-h-[calc(100vh-4rem)] [&>div:nth-child(2)]:overflow-y-auto custom-scrollbar",
            d
          ),
          children: c
        }
      )
    }
  );
};
Pe.Header = Sa;
Pe.Title = Ta;
Pe.Body = Ia;
Pe.Footer = Aa;
const Tt = {
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
}, Ma = ({
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
          children: /* @__PURE__ */ r.jsx(ee, { className: "w-5 h-5" })
        }
      )
    ]
  }
), Oa = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("h5", { className: u("text-lg font-semibold text-slate-900 dark:text-white", e), ...s, children: t }), Pa = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx("div", { className: u("p-5 flex-1 overflow-y-auto custom-scrollbar text-slate-600 dark:text-slate-300", e), ...s, children: t }), rt = ({
  show: e,
  onClose: t,
  placement: s = "start",
  backdrop: a = !0,
  className: o,
  children: n
}) => (Z(() => {
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
        Tt[s].panel,
        Tt[s].transform,
        o
      ),
      children: n
    }
  )
] }) : null);
rt.Header = Ma;
rt.Title = Oa;
rt.Body = Pa;
const ze = xe({
  activeKeys: [],
  toggleItem: () => {
  },
  flush: !1
}), st = xe({ eventKey: "" }), za = ({
  eventKey: e,
  className: t,
  children: s,
  ...a
}) => {
  const { flush: o } = U(ze);
  return /* @__PURE__ */ r.jsx(st.Provider, { value: { eventKey: e }, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u(
        "transition-colors",
        o ? "border-b border-slate-200 dark:border-slate-700" : "border border-slate-200 dark:border-slate-700 rounded-xl mb-2.5 overflow-hidden shadow-sm",
        t
      ),
      ...a,
      children: s
    }
  ) });
}, $a = ({
  className: e,
  children: t,
  ...s
}) => {
  const { activeKeys: a, toggleItem: o } = U(ze), { eventKey: n } = U(st), i = a.includes(n);
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      onClick: () => o(n),
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
          Xe,
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
}, La = ({
  className: e,
  children: t,
  ...s
}) => {
  const { activeKeys: a } = U(ze), { eventKey: o } = U(st);
  return a.includes(o) ? /* @__PURE__ */ r.jsx(
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
}, at = ({
  alwaysOpen: e = !1,
  defaultActiveKey: t,
  flush: s = !1,
  className: a,
  children: o,
  ...n
}) => {
  const [i, d] = P(() => t ? Array.isArray(t) ? t : [t] : []), c = (x) => {
    d(
      e ? (b) => b.includes(x) ? b.filter((f) => f !== x) : [...b, x] : (b) => b.includes(x) ? [] : [x]
    );
  };
  return /* @__PURE__ */ r.jsx(ze.Provider, { value: { activeKeys: i, toggleItem: c, flush: s }, children: /* @__PURE__ */ r.jsx("div", { className: u("w-full", a), ...n, children: o }) });
};
at.Item = za;
at.Header = $a;
at.Body = La;
const $e = xe({
  isOpen: !1,
  setIsOpen: () => {
  }
}), Da = ({
  className: e,
  children: t,
  ...s
}) => {
  const { isOpen: a, setIsOpen: o } = U($e);
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      onClick: () => o(!a),
      "aria-expanded": a,
      className: u(
        "inline-flex items-center justify-between gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-colors",
        e
      ),
      ...s,
      children: [
        t,
        /* @__PURE__ */ r.jsx(Xe, { className: u("w-4 h-4 transition-transform duration-150", a && "rotate-180") })
      ]
    }
  );
}, Fa = ({
  align: e = "start",
  className: t,
  children: s,
  ...a
}) => {
  const { isOpen: o } = U($e);
  return o ? /* @__PURE__ */ r.jsx(
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
}, Ba = ({
  active: e = !1,
  disabled: t = !1,
  onClick: s,
  className: a,
  children: o,
  ...n
}) => {
  const { setIsOpen: i } = U($e), d = (c) => {
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
      ...n,
      children: o
    }
  );
}, Ga = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx("div", { className: u("my-1.5 border-t border-slate-100 dark:border-slate-700", e), ...t }), Va = ({ className: e, children: t, ...s }) => /* @__PURE__ */ r.jsx("div", { className: u("px-4 py-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider", e), ...s, children: t }), Ce = ({ className: e, children: t, ...s }) => {
  const [a, o] = P(!1), n = Ne(null);
  return Z(() => {
    const i = (c) => {
      n.current && !n.current.contains(c.target) && o(!1);
    }, d = (c) => {
      c.key === "Escape" && o(!1);
    };
    return a && (document.addEventListener("mousedown", i), document.addEventListener("keydown", d)), () => {
      document.removeEventListener("mousedown", i), document.removeEventListener("keydown", d);
    };
  }, [a]), /* @__PURE__ */ r.jsx($e.Provider, { value: { isOpen: a, setIsOpen: o }, children: /* @__PURE__ */ r.jsx("div", { ref: n, className: u("relative inline-block text-left", e), ...s, children: t }) });
};
Ce.Toggle = Da;
Ce.Menu = Fa;
Ce.Item = Ba;
Ce.Divider = Ga;
Ce.Header = Va;
const Vo = ({
  className: e,
  children: t,
  as: s = "div",
  ...a
}) => /* @__PURE__ */ r.jsx(s, { className: u("mb-4 last:mb-0 w-full", e), ...a, children: t }), Ko = ({
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
), Ka = {
  sm: "px-2.5 py-1.5 text-xs rounded-md",
  md: "px-3.5 py-2 text-sm rounded-lg",
  lg: "px-4 py-2.5 text-base rounded-lg"
}, Wa = G.forwardRef(
  ({
    as: e = "input",
    rows: t = 3,
    isValid: s,
    isInvalid: a,
    sizeVariant: o = "md",
    helperText: n,
    errorMessage: i,
    successMessage: d,
    disabled: c,
    className: x,
    ...b
  }, f) => {
    const p = e, v = a ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-900 placeholder:text-red-300" : s ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900" : "border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500/20";
    return /* @__PURE__ */ r.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ r.jsx(
        p,
        {
          ref: f,
          rows: e === "textarea" ? t : void 0,
          disabled: c,
          className: u(
            "w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border shadow-sm transition-colors duration-150",
            "focus:outline-none focus:ring-4 placeholder:text-slate-400 dark:placeholder:text-slate-500",
            "disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850",
            Ka[o],
            v,
            x
          ),
          ...b
        }
      ),
      a && i && /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-red-600 dark:text-red-400 font-medium", children: i }),
      s && d && /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium", children: d }),
      !a && !s && n && /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: n })
    ] });
  }
);
Wa.displayName = "FormControl";
const Ua = {
  sm: "px-2.5 py-1.5 text-xs rounded-md pr-8",
  md: "px-3.5 py-2 text-sm rounded-lg pr-9",
  lg: "px-4 py-2.5 text-base rounded-lg pr-10"
}, Ha = G.forwardRef(
  ({
    isValid: e,
    isInvalid: t,
    sizeVariant: s = "md",
    helperText: a,
    errorMessage: o,
    disabled: n,
    className: i,
    children: d,
    ...c
  }, x) => {
    const b = t ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-900" : e ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900" : "border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500/20";
    return /* @__PURE__ */ r.jsxs("div", { className: "relative w-full", children: [
      /* @__PURE__ */ r.jsx(
        "select",
        {
          ref: x,
          disabled: n,
          className: u(
            "w-full appearance-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border shadow-sm transition-colors duration-150",
            "focus:outline-none focus:ring-4",
            "disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850",
            Ua[s],
            b,
            i
          ),
          ...c,
          children: d
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500 dark:text-slate-400", children: /* @__PURE__ */ r.jsx(Xe, { className: "w-4 h-4" }) }),
      t && o && /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-red-600 dark:text-red-400 font-medium", children: o }),
      !t && a && /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: a })
    ] });
  }
);
Ha.displayName = "FormSelect";
const qa = G.forwardRef(
  ({
    label: e,
    type: t = "checkbox",
    inline: s = !1,
    id: a,
    disabled: o,
    className: n,
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
          o && "opacity-60 cursor-not-allowed",
          n
        ),
        children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              ref: d,
              id: c,
              type: t,
              disabled: o,
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
qa.displayName = "FormCheck";
const Ya = G.forwardRef(
  ({ label: e, checked: t, defaultChecked: s, id: a, disabled: o, onChange: n, className: i, ...d }, c) => {
    const [x, b] = G.useState(s || !1), f = t !== void 0, p = f ? t : x, v = a || (typeof e == "string" ? e.toLowerCase().replace(/\s+/g, "-") : void 0), h = (y) => {
      f || b(y.target.checked), n && n(y);
    };
    return /* @__PURE__ */ r.jsxs(
      "label",
      {
        htmlFor: v,
        className: u(
          "inline-flex items-center gap-3 cursor-pointer select-none",
          o && "opacity-60 cursor-not-allowed",
          i
        ),
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "relative inline-flex items-center", children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                ref: c,
                id: v,
                type: "checkbox",
                checked: p,
                disabled: o,
                onChange: h,
                className: "sr-only",
                ...d
              }
            ),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: u(
                  "w-11 h-6 rounded-full transition-colors duration-200 ease-in-out",
                  p ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
                )
              }
            ),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: u(
                  "absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ease-in-out",
                  p && "translate-x-5"
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
Ya.displayName = "FormSwitch";
const Ja = ({
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
), Xa = ({
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
Xa.Text = Ja;
const Wo = ({
  label: e,
  type: t = "text",
  value: s,
  defaultValue: a = "",
  placeholder: o,
  onChange: n,
  disabled: i = !1,
  className: d,
  ...c
}) => {
  const [x, b] = P(a), f = s !== void 0, p = f ? s : x, v = (y) => {
    f || b(y.target.value), n && n(y);
  }, h = !!(p && String(p).length > 0);
  return /* @__PURE__ */ r.jsxs("div", { className: u("relative w-full", d), ...c, children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        type: t,
        value: f ? s : x,
        disabled: i,
        onChange: v,
        placeholder: o || " ",
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
          h && "top-3 text-xs"
        ),
        children: e
      }
    )
  ] });
}, Uo = ({
  label: e,
  showValue: t = !1,
  value: s,
  defaultValue: a = 50,
  min: o = 0,
  max: n = 100,
  step: i = 1,
  onChange: d,
  disabled: c,
  className: x,
  ...b
}) => {
  const [f, p] = G.useState(a), v = s !== void 0, h = v ? s : f, y = (j) => {
    v || p(j.target.value), d && d(j);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: u("w-full", x), children: [
    (e || t) && /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between items-center mb-1 text-sm font-medium text-slate-700 dark:text-slate-300", children: [
      e && /* @__PURE__ */ r.jsx("span", { children: e }),
      t && /* @__PURE__ */ r.jsx("span", { className: "text-xs font-mono text-slate-500", children: h })
    ] }),
    /* @__PURE__ */ r.jsx(
      "input",
      {
        type: "range",
        min: o,
        max: n,
        step: i,
        value: h,
        disabled: c,
        onChange: y,
        className: u(
          "w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all",
          c && "opacity-50 cursor-not-allowed"
        ),
        ...b
      }
    )
  ] });
}, Za = {
  sm: "overflow-x-auto sm:overflow-x-visible",
  md: "overflow-x-auto md:overflow-x-visible",
  lg: "overflow-x-auto lg:overflow-x-visible",
  xl: "overflow-x-auto xl:overflow-x-visible"
}, Ho = ({
  striped: e = !1,
  bordered: t = !1,
  hover: s = !1,
  compact: a = !1,
  dark: o = !1,
  responsive: n = !0,
  className: i,
  children: d,
  ...c
}) => {
  const x = /* @__PURE__ */ r.jsx(
    "table",
    {
      className: u(
        "w-full text-left border-collapse text-sm",
        o ? "text-slate-200 bg-slate-900" : "text-slate-700 dark:text-slate-200",
        e && (o ? "[&_tbody_tr:nth-child(odd)]:bg-slate-800/50" : "[&_tbody_tr:nth-child(odd)]:bg-slate-50 dark:[&_tbody_tr:nth-child(odd)]:bg-slate-800/40"),
        s && (o ? "[&_tbody_tr]:hover:bg-slate-800 transition-colors" : "[&_tbody_tr]:hover:bg-blue-50/40 dark:[&_tbody_tr]:hover:bg-slate-800/70 transition-colors"),
        t && (o ? "border border-slate-700 [&_th]:border [&_th]:border-slate-700 [&_td]:border [&_td]:border-slate-700" : "border border-slate-200 dark:border-slate-700 [&_th]:border [&_th]:border-slate-200 dark:[&_th]:border-slate-700 [&_td]:border [&_td]:border-slate-200 dark:[&_td]:border-slate-700"),
        a ? "[&_th]:py-2 [&_th]:px-3 [&_td]:py-2 [&_td]:px-3" : "[&_th]:py-3.5 [&_th]:px-4 [&_td]:py-3.5 [&_td]:px-4",
        "[&_thead]:border-b-2 [&_thead]:border-slate-200 dark:[&_thead]:border-slate-700 [&_th]:font-semibold [&_th]:text-slate-900 dark:[&_th]:text-white",
        "[&_tbody_tr]:border-b [&_tbody_tr]:border-slate-100 dark:[&_tbody_tr]:border-slate-800",
        i
      ),
      ...c,
      children: d
    }
  );
  if (n) {
    const b = typeof n == "string" ? Za[n] : "overflow-x-auto";
    return /* @__PURE__ */ r.jsx("div", { className: u("w-full custom-scrollbar rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900", b), children: x });
  }
  return x;
}, Qa = {
  primary: "bg-blue-600",
  secondary: "bg-slate-600",
  success: "bg-emerald-600",
  danger: "bg-red-600",
  warning: "bg-amber-500",
  info: "bg-cyan-500",
  light: "bg-slate-200 text-slate-800",
  dark: "bg-slate-900 text-white"
}, qo = ({
  value: e,
  min: t = 0,
  max: s = 100,
  variant: a = "primary",
  striped: o = !1,
  animated: n = !1,
  label: i = !1,
  height: d = "1rem",
  className: c,
  ...x
}) => {
  const b = Math.min(Math.max(e, t), s), f = Math.round((b - t) / (s - t) * 100), p = typeof i == "string" ? i : i ? `${f}%` : null;
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
      ...x,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          style: { width: `${f}%` },
          className: u(
            "h-full flex items-center justify-center text-[11px] font-bold text-white transition-all duration-300 ease-out select-none",
            Qa[a],
            o && "bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]",
            n && "animate-[progress-bar-stripes_1s_linear_infinite]"
          ),
          children: p
        }
      )
    }
  );
}, It = {
  primary: "text-blue-600",
  secondary: "text-slate-500",
  success: "text-emerald-600",
  danger: "text-red-600",
  warning: "text-amber-500",
  info: "text-cyan-500",
  light: "text-slate-200",
  dark: "text-slate-900 dark:text-slate-100",
  current: "text-current"
}, At = {
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
}, Yo = ({
  animation: e = "border",
  variant: t = "primary",
  size: s = "md",
  className: a,
  ...o
}) => e === "grow" ? /* @__PURE__ */ r.jsx(
  "div",
  {
    role: "status",
    "aria-label": "Loading",
    className: u(
      "inline-block rounded-full bg-current opacity-0 animate-ping",
      It[t],
      At.grow[s],
      a
    ),
    ...o,
    children: /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Loading..." })
  }
) : /* @__PURE__ */ r.jsx(
  "div",
  {
    role: "status",
    "aria-label": "Loading",
    className: u(
      "inline-block rounded-full border-solid border-current border-r-transparent animate-spin align-[-0.125em]",
      It[t],
      At.border[s],
      a
    ),
    ...o,
    children: /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Loading..." })
  }
), eo = ({ children: e }) => /* @__PURE__ */ r.jsx(r.Fragment, { children: e }), to = ({
  defaultActiveKey: e,
  activeKey: t,
  onSelect: s,
  variant: a = "tabs",
  fill: o = !1,
  justified: n = !1,
  className: i,
  children: d,
  ...c
}) => {
  var N;
  const x = G.Children.toArray(d).filter(
    (g) => G.isValidElement(g)
  ), [b, f] = P(() => {
    var g;
    return e || ((g = x[0]) == null ? void 0 : g.props.eventKey) || "";
  }), p = t !== void 0 ? t : b, v = (g, C) => {
    C || (t === void 0 && f(g), s && s(g));
  }, h = (N = x.find((g) => g.props.eventKey === p)) == null ? void 0 : N.props.children, y = () => {
    switch (a) {
      case "pills":
        return "gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl";
      case "underline":
        return "gap-6 border-b border-slate-200 dark:border-slate-700";
      case "tabs":
      default:
        return "gap-2 border-b border-slate-200 dark:border-slate-700";
    }
  }, j = (g, C) => {
    const w = p === g;
    if (C)
      return "opacity-40 cursor-not-allowed pointer-events-none text-slate-400";
    switch (a) {
      case "pills":
        return w ? "bg-blue-600 text-white shadow-sm font-semibold" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50";
      case "underline":
        return w ? "text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 dark:border-blue-400 pb-3 -mb-px" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white pb-3 -mb-px border-b-2 border-transparent";
      case "tabs":
      default:
        return w ? "bg-white dark:bg-slate-850 text-blue-600 dark:text-blue-400 font-semibold border-t border-x border-slate-200 dark:border-slate-700 rounded-t-lg -mb-px" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-t border-x border-transparent rounded-t-lg";
    }
  };
  return /* @__PURE__ */ r.jsxs("div", { className: u("w-full flex flex-col", i), ...c, children: [
    /* @__PURE__ */ r.jsx("div", { className: "overflow-x-auto custom-scrollbar pb-1", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        role: "tablist",
        className: u(
          "flex items-center min-w-full w-max sm:w-auto",
          y(),
          o && "[&>*]:flex-auto",
          n && "[&>*]:flex-1"
        ),
        children: x.map((g) => {
          const { eventKey: C, title: w, icon: R, disabled: L } = g.props;
          return /* @__PURE__ */ r.jsxs(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": p === C,
              disabled: L,
              onClick: () => v(C, L),
              className: u(
                "px-4 py-2 text-sm font-medium transition-all duration-150 inline-flex items-center justify-center gap-2 whitespace-nowrap select-none rounded-lg focus:outline-none",
                j(C, L)
              ),
              children: [
                R && /* @__PURE__ */ r.jsx("span", { className: "w-4 h-4 shrink-0", children: R }),
                w
              ]
            },
            C
          );
        })
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { role: "tabpanel", className: "py-4 animate-in fade-in-50 duration-200", children: h })
  ] });
};
to.Tab = eo;
const ro = {
  primary: /* @__PURE__ */ r.jsx(X, { className: "w-4 h-4 text-blue-500" }),
  success: /* @__PURE__ */ r.jsx(Oe, { className: "w-4 h-4 text-emerald-500" }),
  danger: /* @__PURE__ */ r.jsx(Qe, { className: "w-4 h-4 text-red-500" }),
  warning: /* @__PURE__ */ r.jsx(Ae, { className: "w-4 h-4 text-amber-500" }),
  info: /* @__PURE__ */ r.jsx(X, { className: "w-4 h-4 text-cyan-500" }),
  secondary: /* @__PURE__ */ r.jsx(X, { className: "w-4 h-4 text-slate-500" }),
  light: /* @__PURE__ */ r.jsx(X, { className: "w-4 h-4 text-slate-400" }),
  dark: /* @__PURE__ */ r.jsx(X, { className: "w-4 h-4 text-slate-300" })
}, Jo = ({
  show: e = !0,
  onClose: t,
  autohide: s = !0,
  delay: a = 5e3,
  variant: o,
  title: n,
  subtitle: i,
  className: d,
  children: c,
  ...x
}) => (Z(() => {
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
    ...x,
    children: [
      (n || t) && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
          o && ro[o],
          n && /* @__PURE__ */ r.jsx("span", { className: "font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100", children: n })
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
              children: /* @__PURE__ */ r.jsx(ee, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed", children: c })
    ]
  }
) : null), so = {
  "top-start": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "top-end": "top-4 right-4 items-end",
  "bottom-start": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-end": "bottom-4 right-4 items-end"
}, Xo = ({
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
      so[e],
      t
    ),
    ...a,
    children: s
  }
);
function Zo() {
  const [e, t] = P([]), s = kt((o) => {
    const n = Math.random().toString(36).substring(2, 9);
    t((i) => [...i, { ...o, id: n }]);
  }, []), a = kt((o) => {
    t((n) => n.filter((i) => i.id !== o));
  }, []);
  return { toasts: e, addToast: s, removeToast: a };
}
const Qo = ({
  items: e,
  autoPlay: t = !0,
  interval: s = 4e3,
  indicators: a = !0,
  controls: o = !0,
  pauseOnHover: n = !0,
  className: i,
  ...d
}) => {
  const [c, x] = P(0), [b, f] = P(!1), p = Ne(null), v = () => {
    x((g) => g === 0 ? e.length - 1 : g - 1);
  }, h = () => {
    x((g) => g === e.length - 1 ? 0 : g + 1);
  }, y = (g) => {
    x(g);
  };
  Z(() => {
    if (!t || n && b || e.length <= 1) return;
    const g = setInterval(() => {
      h();
    }, s);
    return () => clearInterval(g);
  }, [t, s, b, e.length]);
  const j = (g) => {
    p.current = g.touches[0].clientX;
  }, N = (g) => {
    if (p.current === null) return;
    const C = g.changedTouches[0].clientX, w = p.current - C;
    Math.abs(w) > 50 && (w > 0 ? h() : v()), p.current = null;
  };
  return !e || e.length === 0 ? null : /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: u(
        "relative w-full overflow-hidden rounded-2xl shadow-lg select-none bg-slate-900 group",
        i
      ),
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      onTouchStart: j,
      onTouchEnd: N,
      ...d,
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "flex transition-transform duration-500 ease-out h-64 sm:h-80 md:h-96",
            style: { transform: `translateX(-${c * 100}%)` },
            children: e.map((g, C) => /* @__PURE__ */ r.jsxs("div", { className: "w-full flex-shrink-0 relative h-full", children: [
              /* @__PURE__ */ r.jsx(
                "img",
                {
                  src: g.image,
                  alt: g.alt || `Slide ${C + 1}`,
                  className: "w-full h-full object-cover"
                }
              ),
              (g.title || g.caption) && /* @__PURE__ */ r.jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white", children: [
                g.title && /* @__PURE__ */ r.jsx("h3", { className: "text-lg sm:text-2xl font-bold mb-1 leading-snug", children: g.title }),
                g.caption && /* @__PURE__ */ r.jsx("p", { className: "text-xs sm:text-sm text-slate-200 max-w-xl line-clamp-2", children: g.caption })
              ] })
            ] }, g.id || C))
          }
        ),
        o && e.length > 1 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: v,
              "aria-label": "Previous slide",
              className: "absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 opacity-90 sm:opacity-0 sm:group-hover:opacity-100",
              children: /* @__PURE__ */ r.jsx(Ut, { className: "w-5 h-5 sm:w-6 sm:h-6" })
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: h,
              "aria-label": "Next slide",
              className: "absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 opacity-90 sm:opacity-0 sm:group-hover:opacity-100",
              children: /* @__PURE__ */ r.jsx(Ze, { className: "w-5 h-5 sm:w-6 sm:h-6" })
            }
          )
        ] }),
        a && e.length > 1 && /* @__PURE__ */ r.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10", children: e.map((g, C) => /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: () => y(C),
            "aria-label": `Go to slide ${C + 1}`,
            className: u(
              "h-2 rounded-full transition-all duration-300 focus:outline-none",
              c === C ? "w-7 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            )
          },
          C
        )) })
      ]
    }
  );
}, ao = {
  primary: "bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-300",
  secondary: "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-200",
  success: "bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300",
  danger: "bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-300",
  warning: "bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-300",
  info: "bg-cyan-50 text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-300",
  light: "bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  dark: "bg-slate-800 text-white dark:bg-slate-900 dark:text-white"
}, oo = ({
  active: e = !1,
  disabled: t = !1,
  action: s = !1,
  variant: a,
  className: o,
  children: n,
  ...i
}) => /* @__PURE__ */ r.jsx(
  "li",
  {
    className: u(
      "relative px-4 py-3 text-sm flex items-center justify-between border-b last:border-b-0 border-slate-200 dark:border-slate-700 transition-colors",
      e ? "bg-blue-600 text-white font-medium border-blue-600" : t ? "text-slate-400 dark:text-slate-600 pointer-events-none bg-slate-50 dark:bg-slate-850" : s ? "cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200" : "text-slate-700 dark:text-slate-200",
      a && !e && ao[a],
      o
    ),
    ...i,
    children: n
  }
), no = ({
  flush: e = !1,
  horizontal: t = !1,
  numbered: s = !1,
  className: a,
  children: o,
  ...n
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
      ...n,
      children: o
    }
  );
};
no.Item = oo;
const Mt = {
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
}, en = ({
  content: e,
  placement: t = "top",
  delay: s = 100,
  className: a,
  children: o,
  ...n
}) => {
  const [i, d] = P(!1), [c, x] = P(null), b = () => {
    const p = setTimeout(() => d(!0), s);
    x(p);
  }, f = () => {
    c && clearTimeout(c), d(!1);
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "relative inline-flex items-center",
      onMouseEnter: b,
      onMouseLeave: f,
      onFocus: b,
      onBlur: f,
      ...n,
      children: [
        o,
        i && /* @__PURE__ */ r.jsxs(
          "div",
          {
            role: "tooltip",
            className: u(
              "absolute z-50 px-2.5 py-1 text-xs font-medium text-white bg-slate-900 rounded-md shadow-md whitespace-nowrap pointer-events-none transition-all duration-150 animate-in fade-in zoom-in-95",
              Mt[t].tooltip,
              a
            ),
            children: [
              e,
              /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: u("absolute border-4", Mt[t].arrow)
                }
              )
            ]
          }
        )
      ]
    }
  );
}, lo = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2.5",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2.5",
  left: "right-full top-1/2 -translate-y-1/2 mr-2.5",
  right: "left-full top-1/2 -translate-y-1/2 ml-2.5"
}, tn = ({
  title: e,
  content: t,
  placement: s = "top",
  className: a,
  children: o,
  ...n
}) => {
  const [i, d] = P(!1), c = Ne(null);
  return Z(() => {
    const x = (b) => {
      c.current && !c.current.contains(b.target) && d(!1);
    };
    return i && document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [i]), /* @__PURE__ */ r.jsxs("div", { ref: c, className: "relative inline-block", ...n, children: [
    /* @__PURE__ */ r.jsx("div", { onClick: () => d(!i), className: "cursor-pointer inline-block", children: o }),
    i && /* @__PURE__ */ r.jsxs(
      "div",
      {
        role: "dialog",
        className: u(
          "absolute z-50 w-64 max-w-xs bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-in fade-in zoom-in-95 duration-150",
          lo[s],
          a
        ),
        children: [
          e && /* @__PURE__ */ r.jsx("div", { className: "px-3.5 py-2 bg-slate-50 dark:bg-slate-750 border-b border-slate-100 dark:border-slate-700 font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100", children: e }),
          /* @__PURE__ */ r.jsx("div", { className: "p-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed", children: t })
        ]
      }
    )
  ] });
}, io = {
  xs: "h-2",
  sm: "h-3",
  md: "h-4",
  lg: "h-6"
}, co = {
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
}, rn = ({
  animation: e = "glow",
  size: t = "md",
  col: s = 12,
  className: a,
  ...o
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: u(
      "rounded bg-slate-200 dark:bg-slate-700 inline-block align-middle",
      io[t],
      co[s],
      e === "glow" ? "animate-pulse" : "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
      a
    ),
    ...o
  }
), Ot = {
  blue: { dot: "bg-blue-600", ring: "ring-blue-100 dark:ring-blue-900/40" },
  green: { dot: "bg-emerald-500", ring: "ring-emerald-100 dark:ring-emerald-900/40" },
  red: { dot: "bg-red-500", ring: "ring-red-100 dark:ring-red-900/40" },
  gray: { dot: "bg-slate-400", ring: "ring-slate-100 dark:ring-slate-800" },
  amber: { dot: "bg-amber-500", ring: "ring-amber-100 dark:ring-amber-900/40" },
  purple: { dot: "bg-purple-600", ring: "ring-purple-100 dark:ring-purple-900/40" }
}, Jt = ({
  color: e = "blue",
  dot: t,
  label: s,
  pending: a = !1,
  className: o,
  children: n,
  ...i
}) => {
  const d = Ot[e] || Ot.blue;
  return /* @__PURE__ */ r.jsxs("div", { className: u("relative pl-8 sm:pl-9 pb-8 last:pb-0 group", o), ...i, children: [
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
      /* @__PURE__ */ r.jsx("div", { className: "text-slate-700 dark:text-slate-200 leading-relaxed", children: n })
    ] })
  ] });
}, uo = ({
  pending: e,
  reverse: t = !1,
  className: s,
  children: a,
  ...o
}) => {
  const n = G.Children.toArray(a), i = t ? [...n].reverse() : n;
  return /* @__PURE__ */ r.jsxs("div", { className: u("relative py-2", s), ...o, children: [
    i,
    e && /* @__PURE__ */ r.jsx(Jt, { color: "gray", pending: !0, children: typeof e == "boolean" ? "Memuat langkah berikutnya..." : e })
  ] });
};
uo.Item = Jt;
const sn = ({
  current: e = 0,
  items: t,
  onChange: s,
  direction: a = "horizontal",
  responsive: o = !0,
  className: n,
  ...i
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: u(
      "w-full flex",
      a === "vertical" ? "flex-col space-y-6" : o ? "flex-col sm:flex-row gap-4 sm:gap-0" : "flex-row",
      n
    ),
    ...i,
    children: t.map((d, c) => {
      const x = !!(s && !d.disabled), b = d.status || (c < e ? "finish" : c === e ? "process" : "wait"), f = c === t.length - 1;
      return /* @__PURE__ */ r.jsxs(
        "div",
        {
          onClick: () => x && s && s(c),
          className: u(
            "flex-1 flex sm:items-center relative group",
            a === "vertical" ? "items-start" : "",
            x && "cursor-pointer"
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
                children: d.icon ? d.icon : b === "finish" ? /* @__PURE__ */ r.jsx(Me, { className: "w-4 h-4 stroke-[3]" }) : b === "error" ? /* @__PURE__ */ r.jsx(Qe, { className: "w-4 h-4" }) : c + 1
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
            !f && a !== "vertical" && /* @__PURE__ */ r.jsx(
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
), an = ({
  title: e,
  value: t,
  prefix: s,
  suffix: a,
  trend: o,
  trendValue: n,
  precision: i,
  className: d,
  ...c
}) => {
  const x = typeof t == "number" && i !== void 0 ? t.toFixed(i) : t;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: u(
        "p-3.5 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm min-w-0 w-full overflow-hidden flex flex-col justify-between",
        d
      ),
      ...c,
      children: [
        e && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between gap-1.5 min-w-0 mb-2", children: [
          /* @__PURE__ */ r.jsx(
            "span",
            {
              className: "text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 truncate min-w-0 flex-1",
              title: typeof e == "string" ? e : void 0,
              children: e
            }
          ),
          o && /* @__PURE__ */ r.jsxs(
            "span",
            {
              className: u(
                "inline-flex items-center text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full shrink-0 whitespace-nowrap",
                o === "up" && "text-emerald-700 bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300",
                o === "down" && "text-red-700 bg-red-100 dark:bg-red-950/60 dark:text-red-300",
                o === "neutral" && "text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-400"
              ),
              children: [
                o === "up" && /* @__PURE__ */ r.jsx(js, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 mr-0.5" }),
                o === "down" && /* @__PURE__ */ r.jsx(ys, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 mr-0.5" }),
                n || (o === "up" ? "+12.5%" : o === "down" ? "-4.2%" : "0%")
              ]
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-baseline flex-wrap gap-x-1.5 gap-y-0.5 font-bold tracking-tight text-slate-900 dark:text-white min-w-0", children: [
          s && /* @__PURE__ */ r.jsx("span", { className: "text-sm sm:text-base md:text-lg font-medium text-slate-500 dark:text-slate-400 shrink-0", children: s }),
          /* @__PURE__ */ r.jsx("span", { className: "text-xl sm:text-2xl lg:text-3xl font-extrabold truncate max-w-full", children: x }),
          a && /* @__PURE__ */ r.jsx("span", { className: "text-xs sm:text-sm font-semibold text-slate-400 shrink-0", children: a })
        ] })
      ]
    }
  );
}, on = ({
  count: e = 5,
  value: t,
  defaultValue: s = 0,
  onChange: a,
  disabled: o = !1,
  tooltips: n,
  character: i,
  className: d,
  ...c
}) => {
  const [x, b] = P(s), [f, p] = P(null), v = t !== void 0, h = f !== null ? f : v ? t : x, y = (N) => {
    o || (v || b(N), a && a(N));
  }, j = Array.from({ length: e }, (N, g) => g + 1);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "radiogroup",
      "aria-label": "Rating",
      className: u("inline-flex items-center gap-1.5 select-none", d),
      onMouseLeave: () => !o && p(null),
      ...c,
      children: [
        j.map((N) => {
          const g = N <= h;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              disabled: o,
              onClick: () => y(N),
              onMouseEnter: () => !o && p(N),
              className: u(
                "p-0.5 rounded transition-transform duration-100 focus:outline-none",
                !o && "hover:scale-125 cursor-pointer",
                o && "cursor-default"
              ),
              title: n && n[N - 1] ? n[N - 1] : `${N} Bintang`,
              children: i ? /* @__PURE__ */ r.jsx("span", { className: u("text-xl", g ? "text-amber-400" : "text-slate-300 dark:text-slate-700"), children: i }) : /* @__PURE__ */ r.jsx(
                ea,
                {
                  className: u(
                    "w-5 h-5 transition-colors duration-150",
                    g ? "fill-amber-400 text-amber-400 filter drop-shadow-[0_1px_4px_rgba(251,191,36,0.5)]" : "fill-transparent text-slate-300 dark:text-slate-600"
                  )
                }
              )
            },
            N
          );
        }),
        n && h > 0 && /* @__PURE__ */ r.jsx("span", { className: "ml-2 text-xs font-semibold text-slate-600 dark:text-slate-300", children: n[h - 1] })
      ]
    }
  );
}, bo = {
  sm: "w-7 h-7 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-xl"
}, xo = {
  online: "bg-emerald-500",
  offline: "bg-slate-400",
  busy: "bg-red-500",
  away: "bg-amber-400"
}, fo = ({
  max: e,
  className: t,
  children: s,
  ...a
}) => {
  const o = G.Children.toArray(s), n = e ? o.slice(0, e) : o, i = e && o.length > e ? o.length - e : 0;
  return /* @__PURE__ */ r.jsxs("div", { className: u("flex items-center -space-x-2.5 overflow-hidden", t), ...a, children: [
    n.map((d, c) => /* @__PURE__ */ r.jsx("div", { className: "ring-2 ring-white dark:ring-slate-900 rounded-full", children: d }, c)),
    i > 0 && /* @__PURE__ */ r.jsxs("div", { className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs font-bold ring-2 ring-white dark:ring-slate-900 z-10", children: [
      "+",
      i
    ] })
  ] });
}, mo = ({
  src: e,
  alt: t = "Avatar",
  name: s,
  icon: a,
  shape: o = "circle",
  size: n = "md",
  status: i,
  className: d,
  children: c,
  ...x
}) => {
  const b = s ? s.split(" ").filter(Boolean).map((f) => f[0]).join("").substring(0, 2).toUpperCase() : null;
  return /* @__PURE__ */ r.jsxs("div", { className: "relative inline-block select-none", children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: u(
          "flex items-center justify-center font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 overflow-hidden shadow-sm",
          o === "circle" ? "rounded-full" : "rounded-xl",
          bo[n],
          d
        ),
        ...x,
        children: e ? /* @__PURE__ */ r.jsx("img", { src: e, alt: t, className: "w-full h-full object-cover" }) : a ? /* @__PURE__ */ r.jsx("span", { className: "flex items-center justify-center", children: a }) : b ? /* @__PURE__ */ r.jsx("span", { children: b }) : c
      }
    ),
    i && /* @__PURE__ */ r.jsx(
      "span",
      {
        className: u(
          "absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-white dark:ring-slate-900",
          xo[i]
        )
      }
    )
  ] });
};
mo.Group = fo;
const nn = ({
  image: e,
  description: t = "Tidak ada data ditemukan",
  action: s,
  className: a,
  ...o
}) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    className: u(
      "flex flex-col items-center justify-center p-8 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 my-4",
      a
    ),
    ...o,
    children: [
      /* @__PURE__ */ r.jsx("div", { className: "mb-3 text-slate-300 dark:text-slate-600", children: e || /* @__PURE__ */ r.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400", children: /* @__PURE__ */ r.jsx(qs, { className: "w-8 h-8 stroke-[1.5]" }) }) }),
      /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 max-w-sm", children: t }),
      s && /* @__PURE__ */ r.jsx("div", { children: s })
    ]
  }
), Pt = {
  success: {
    icon: /* @__PURE__ */ r.jsx(Oe, { className: "w-16 h-16 text-emerald-500 mx-auto" }),
    color: "text-emerald-600"
  },
  error: {
    icon: /* @__PURE__ */ r.jsx(Et, { className: "w-16 h-16 text-red-500 mx-auto" }),
    color: "text-red-600"
  },
  warning: {
    icon: /* @__PURE__ */ r.jsx(Ae, { className: "w-16 h-16 text-amber-500 mx-auto" }),
    color: "text-amber-600"
  },
  info: {
    icon: /* @__PURE__ */ r.jsx(X, { className: "w-16 h-16 text-blue-500 mx-auto" }),
    color: "text-blue-600"
  },
  404: {
    icon: /* @__PURE__ */ r.jsx($s, { className: "w-16 h-16 text-slate-400 mx-auto" }),
    color: "text-slate-700"
  },
  403: {
    icon: /* @__PURE__ */ r.jsx(Ae, { className: "w-16 h-16 text-amber-500 mx-auto" }),
    color: "text-amber-700"
  },
  500: {
    icon: /* @__PURE__ */ r.jsx(Et, { className: "w-16 h-16 text-red-500 mx-auto" }),
    color: "text-red-700"
  }
}, ln = ({
  status: e = "info",
  title: t,
  subTitle: s,
  extra: a,
  icon: o,
  className: n,
  ...i
}) => {
  const d = Pt[e] || Pt.info;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: u(
        "text-center py-10 px-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm max-w-xl mx-auto my-6",
        n
      ),
      ...i,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "mb-4", children: o || d.icon }),
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight", children: t }),
        s && /* @__PURE__ */ r.jsx("p", { className: "text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto leading-relaxed", children: s }),
        a && /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap items-center justify-center gap-3", children: a })
      ]
    }
  );
}, po = {
  sm: "text-xs p-0.5",
  md: "text-xs sm:text-sm p-1",
  lg: "text-sm sm:text-base p-1.5"
}, go = {
  sm: "px-2.5 py-1",
  md: "px-3.5 py-1.5",
  lg: "px-5 py-2"
}, dn = ({
  options: e,
  value: t,
  defaultValue: s,
  onChange: a,
  block: o = !1,
  size: n = "md",
  disabled: i = !1,
  className: d,
  ...c
}) => {
  var y;
  const x = e.map(
    (j) => typeof j == "string" ? { label: j, value: j } : j
  ), [b, f] = P(
    s || ((y = x[0]) == null ? void 0 : y.value) || ""
  ), p = t !== void 0, v = p ? t : b, h = (j, N) => {
    i || N || (p || f(j), a && a(j));
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      role: "radiogroup",
      className: u(
        "inline-flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 select-none shadow-inner",
        o ? "w-full flex" : "",
        po[n],
        d
      ),
      ...c,
      children: x.map((j) => {
        const N = j.value === v, g = i || j.disabled;
        return /* @__PURE__ */ r.jsxs(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": N,
            disabled: g,
            onClick: () => h(j.value, g),
            className: u(
              "inline-flex items-center justify-center gap-1.5 font-medium rounded-lg transition-all duration-200 focus:outline-none",
              o ? "flex-1" : "",
              go[n],
              N ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold" : "hover:text-slate-900 dark:hover:text-white",
              g && "opacity-40 cursor-not-allowed pointer-events-none"
            ),
            children: [
              j.icon && /* @__PURE__ */ r.jsx("span", { className: "w-4 h-4 shrink-0", children: j.icon }),
              /* @__PURE__ */ r.jsx("span", { children: j.label })
            ]
          },
          j.value
        );
      })
    }
  );
}, cn = ({
  dashed: e = !1,
  orientation: t = "center",
  plain: s = !1,
  className: a,
  children: o,
  ...n
}) => o ? /* @__PURE__ */ r.jsxs(
  "div",
  {
    role: "separator",
    className: u("my-6 flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 select-none", a),
    ...n,
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
          children: o
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
    ...n
  }
), zt = {
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
}, un = ({
  color: e = "blue",
  closable: t = !1,
  onClose: s,
  checkable: a = !1,
  checked: o = !1,
  icon: n,
  bordered: i = !0,
  className: d,
  children: c,
  ...x
}) => {
  const [b, f] = G.useState(!0), p = zt[e] || zt.blue;
  if (!b) return null;
  const v = (h) => {
    h.stopPropagation(), f(!1), s && s();
  };
  return /* @__PURE__ */ r.jsxs(
    "span",
    {
      className: u(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium select-none transition-all align-middle",
        p.bg,
        p.text,
        i && `border ${p.border}`,
        a && "cursor-pointer hover:opacity-80 active:scale-95",
        a && o && "ring-2 ring-blue-500 font-bold",
        d
      ),
      ...x,
      children: [
        n && /* @__PURE__ */ r.jsx("span", { className: "inline-flex shrink-0", children: n }),
        /* @__PURE__ */ r.jsx("span", { children: c }),
        t && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: v,
            "aria-label": "Close tag",
            className: "ml-0.5 p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors focus:outline-none",
            children: /* @__PURE__ */ r.jsx(ee, { className: "w-3 h-3" })
          }
        )
      ]
    }
  );
}, Le = xe(null), ho = ({
  className: e,
  children: t,
  ...s
}) => {
  const [a, o] = P(""), [n, i] = P({}), d = (f, p) => {
    i((v) => ({ ...v, [f]: p.toLowerCase() }));
  }, c = (f) => {
    i((p) => {
      const v = { ...p };
      return delete v[f], v;
    });
  }, x = (f) => a.trim() ? f.toLowerCase().includes(a.toLowerCase().trim()) : !0, b = Object.values(n).filter((f) => x(f)).length;
  return /* @__PURE__ */ r.jsx(
    Le.Provider,
    {
      value: {
        search: a,
        setSearch: o,
        filteredCount: b,
        registerItem: d,
        unregisterItem: c,
        isItemVisible: x
      },
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: u(
            "flex flex-col w-full h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 overflow-hidden shadow-lg",
            e
          ),
          ...s,
          children: t
        }
      )
    }
  );
}, wo = ({
  className: e,
  placeholder: t = "Ketik perintah atau cari fitur...",
  value: s,
  onValueChange: a,
  ...o
}) => {
  const n = U(Le), i = s !== void 0 ? s : (n == null ? void 0 : n.search) || "", d = (x) => {
    const b = x.target.value;
    n == null || n.setSearch(b), a == null || a(b);
  }, c = () => {
    n == null || n.setSearch(""), a == null || a("");
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "flex items-center px-3.5 border-b border-slate-200 dark:border-slate-800", children: [
    /* @__PURE__ */ r.jsx(Zs, { className: "w-4 h-4 mr-2.5 text-slate-400 shrink-0" }),
    /* @__PURE__ */ r.jsx(
      "input",
      {
        type: "text",
        value: i,
        onChange: d,
        placeholder: t,
        className: u(
          "w-full py-3 bg-transparent text-sm placeholder:text-slate-400 focus:outline-none text-slate-800 dark:text-slate-100",
          e
        ),
        ...o
      }
    ),
    i && /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        onClick: c,
        className: "p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors",
        children: /* @__PURE__ */ r.jsx(ee, { className: "w-3.5 h-3.5" })
      }
    )
  ] });
}, vo = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: u("max-h-[300px] overflow-y-auto p-2 space-y-1 custom-scrollbar", e),
    ...s,
    children: t
  }
), yo = ({
  className: e,
  children: t = "Tidak ada hasil perintah ditemukan.",
  ...s
}) => {
  const a = U(Le);
  return !a || a.filteredCount > 0 ? null : /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u("py-8 text-center text-xs sm:text-sm text-slate-400 dark:text-slate-500", e),
      ...s,
      children: t
    }
  );
}, ko = ({
  heading: e,
  className: t,
  children: s,
  ...a
}) => /* @__PURE__ */ r.jsxs("div", { className: u("py-1.5", t), ...a, children: [
  /* @__PURE__ */ r.jsx("div", { className: "px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 select-none", children: e }),
  /* @__PURE__ */ r.jsx("div", { className: "space-y-0.5", children: s })
] }), jo = ({
  value: e,
  disabled: t = !1,
  onSelect: s,
  className: a,
  children: o,
  ...n
}) => {
  const i = U(Le), d = G.useId(), c = e || (typeof o == "string" ? o : String(d));
  return Z(() => (i == null || i.registerItem(d, c), () => i == null ? void 0 : i.unregisterItem(d)), [d, c]), (i ? i.isItemVisible(c) : !0) ? /* @__PURE__ */ r.jsx(
    "div",
    {
      role: "button",
      tabIndex: t ? -1 : 0,
      "aria-disabled": t,
      onClick: () => !t && (s == null ? void 0 : s()),
      onKeyDown: (b) => {
        !t && (b.key === "Enter" || b.key === " ") && (b.preventDefault(), s == null || s());
      },
      className: u(
        "flex items-center justify-between px-2.5 py-2 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer select-none",
        t ? "opacity-40 cursor-not-allowed" : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 active:bg-blue-50 dark:active:bg-blue-950/40",
        a
      ),
      ...n,
      children: o
    }
  ) : null;
}, No = ({
  className: e,
  children: t,
  ...s
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: u(
      "ml-auto text-[10px] sm:text-xs tracking-widest text-slate-400 dark:text-slate-500 font-mono inline-flex items-center gap-1",
      e
    ),
    ...s,
    children: t
  }
), Co = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: u("h-px bg-slate-200 dark:bg-slate-800 my-1 mx-2", e),
    ...t
  }
), _o = ({
  open: e,
  onOpenChange: t,
  children: s
}) => (Z(() => {
  const a = (o) => {
    (o.metaKey || o.ctrlKey) && o.key.toLowerCase() === "k" && (o.preventDefault(), t(!e)), o.key === "Escape" && e && t(!1);
  };
  return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
}, [e, t]), e ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200", children: [
  /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "fixed inset-0",
      onClick: () => t(!1),
      "aria-hidden": "true"
    }
  ),
  /* @__PURE__ */ r.jsx("div", { className: "relative w-full max-w-lg z-10 shadow-2xl", children: s })
] }) : null), oe = ho;
oe.Input = wo;
oe.List = vo;
oe.Empty = yo;
oe.Group = ko;
oe.Item = jo;
oe.Shortcut = No;
oe.Separator = Co;
oe.Dialog = _o;
const Ro = {
  sm: "text-[10px] min-w-[18px] h-4 px-1",
  md: "text-xs min-w-[22px] h-5 px-1.5",
  lg: "text-sm min-w-[26px] h-6 px-2"
}, bn = ({
  size: e = "md",
  className: t,
  children: s,
  ...a
}) => /* @__PURE__ */ r.jsx(
  "kbd",
  {
    className: u(
      "inline-flex items-center justify-center font-mono font-medium rounded border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-b-2 shadow-xs select-none",
      Ro[e],
      t
    ),
    ...a,
    children: s
  }
), xn = ({
  ratio: e = 16 / 9,
  className: t,
  children: s,
  style: a,
  ...o
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: u("relative w-full overflow-hidden rounded-xl", t),
    style: {
      paddingBottom: `${1 / e * 100}%`,
      ...a
    },
    ...o,
    children: /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 w-full h-full [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>video]:w-full [&>video]:h-full [&>video]:object-cover", children: s })
  }
), Eo = ({
  pressed: e,
  defaultPressed: t = !1,
  onPressedChange: s,
  variant: a = "default",
  size: o = "md",
  disabled: n,
  className: i,
  children: d,
  onClick: c,
  ...x
}) => {
  const [b, f] = P(t), p = e !== void 0, v = p ? e : b, h = (N) => {
    if (n) return;
    const g = !v;
    p || f(g), s == null || s(g), c == null || c(N);
  }, y = {
    sm: "h-8 px-2 text-xs gap-1",
    md: "h-9 px-2.5 sm:px-3 text-sm gap-1.5",
    lg: "h-10 px-3.5 text-base gap-2"
  }, j = {
    default: v ? "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white shadow-inner font-semibold" : "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300",
    outline: v ? "border border-blue-600 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold" : "border border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
  };
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": v,
      disabled: n,
      onClick: h,
      className: u(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none select-none",
        y[o],
        j[a],
        i
      ),
      ...x,
      children: d
    }
  );
}, Xt = xe(null), So = ({
  value: e,
  className: t,
  children: s,
  ...a
}) => {
  const o = U(Xt);
  if (!o) return null;
  const n = Array.isArray(o.value) ? o.value.includes(e) : o.value === e;
  return /* @__PURE__ */ r.jsx(
    Eo,
    {
      pressed: n,
      onPressedChange: () => o.onItemClick(e),
      variant: o.variant,
      size: o.size,
      className: t,
      ...a,
      children: s
    }
  );
}, To = ({
  type: e = "single",
  value: t,
  defaultValue: s,
  onValueChange: a,
  variant: o = "default",
  size: n = "md",
  className: i,
  children: d,
  ...c
}) => {
  const [x, b] = P(
    s || (e === "multiple" ? [] : "")
  ), f = t !== void 0, p = f ? t : x, v = (h) => {
    let y;
    if (e === "single")
      y = p === h ? "" : h;
    else {
      const j = Array.isArray(p) ? [...p] : [];
      j.includes(h) ? y = j.filter((N) => N !== h) : y = [...j, h];
    }
    f || b(y), a == null || a(y);
  };
  return /* @__PURE__ */ r.jsx(
    Xt.Provider,
    {
      value: {
        value: p,
        onItemClick: v,
        type: e,
        variant: o,
        size: n
      },
      children: /* @__PURE__ */ r.jsx("div", { className: u("inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800", i), ...c, children: d })
    }
  );
};
To.Item = So;
const Io = {
  sm: "w-8 h-9 text-base",
  md: "w-10 h-12 text-lg sm:w-12 sm:h-14 sm:text-xl",
  lg: "w-12 h-14 text-xl sm:w-14 sm:h-16 sm:text-2xl"
}, fn = ({
  length: e = 6,
  value: t,
  defaultValue: s = "",
  onChange: a,
  onComplete: o,
  type: n = "number",
  mask: i = !1,
  disabled: d = !1,
  size: c = "md",
  autoFocus: x = !1,
  className: b,
  ...f
}) => {
  const [p, v] = P(() => {
    const C = t !== void 0 ? t : s;
    return Array.from({ length: e }, (w, R) => C[R] || "");
  }), h = Ne([]);
  Z(() => {
    t !== void 0 && v(Array.from({ length: e }, (C, w) => t[w] || ""));
  }, [t, e]), Z(() => {
    x && h.current[0] && h.current[0].focus();
  }, [x]);
  const y = (C) => {
    const w = C.join("");
    t === void 0 && v(C), a == null || a(w), w.length === e && !C.includes("") && (o == null || o(w));
  }, j = (C, w) => {
    var B;
    let R = C.target.value;
    if (!R || n === "number" && !/^\d+$/.test(R)) return;
    R = R.slice(-1);
    const L = [...p];
    L[w] = R, y(L), w < e - 1 && R && ((B = h.current[w + 1]) == null || B.focus());
  }, N = (C, w) => {
    var R, L, B;
    if (C.key === "Backspace")
      if (!p[w] && w > 0) {
        const F = [...p];
        F[w - 1] = "", y(F), (R = h.current[w - 1]) == null || R.focus();
      } else {
        const F = [...p];
        F[w] = "", y(F);
      }
    else C.key === "ArrowLeft" && w > 0 ? (L = h.current[w - 1]) == null || L.focus() : C.key === "ArrowRight" && w < e - 1 && ((B = h.current[w + 1]) == null || B.focus());
  }, g = (C) => {
    var F;
    C.preventDefault();
    const w = C.clipboardData.getData("text/plain").trim();
    if (!w) return;
    let R = w.split("");
    n === "number" && (R = R.filter((K) => /^\d$/.test(K)));
    const L = [...p];
    for (let K = 0; K < e; K++)
      R[K] && (L[K] = R[K]);
    y(L);
    const B = Math.min(R.length, e - 1);
    (F = h.current[B]) == null || F.focus();
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      role: "group",
      "aria-label": "PIN Code Input",
      className: u("inline-flex items-center gap-2 sm:gap-2.5 select-none", b),
      ...f,
      children: Array.from({ length: e }, (C, w) => /* @__PURE__ */ r.jsx(
        "input",
        {
          ref: (R) => h.current[w] = R,
          type: i ? "password" : "text",
          inputMode: n === "number" ? "numeric" : "text",
          pattern: n === "number" ? "[0-9]*" : void 0,
          maxLength: 1,
          value: p[w] || "",
          disabled: d,
          onChange: (R) => j(R, w),
          onKeyDown: (R) => N(R, w),
          onPaste: g,
          className: u(
            "text-center font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs transition-all outline-none",
            "focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20",
            d && "opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800",
            Io[c]
          )
        },
        w
      ))
    }
  );
}, mn = ({
  value: e,
  timeout: t = 2e3,
  onCopySuccess: s,
  variant: a = "outline",
  size: o = "md",
  label: n = "Salin",
  copiedLabel: i = "Tersalin!",
  className: d,
  ...c
}) => {
  const [x, b] = P(!1), f = async (h) => {
    h.stopPropagation();
    try {
      if (navigator.clipboard && window.isSecureContext)
        await navigator.clipboard.writeText(e);
      else {
        const y = document.createElement("textarea");
        y.value = e, y.style.position = "fixed", y.style.left = "-999999px", document.body.appendChild(y), y.focus(), y.select(), document.execCommand("copy"), y.remove();
      }
      b(!0), s == null || s(), setTimeout(() => b(!1), t);
    } catch (y) {
      console.error("Failed to copy text: ", y);
    }
  }, p = {
    sm: "text-xs px-2.5 py-1 gap-1.5",
    md: "text-xs sm:text-sm px-3 py-1.5 gap-2",
    lg: "text-sm sm:text-base px-4 py-2 gap-2.5"
  }, v = {
    default: x ? "bg-emerald-600 text-white" : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100",
    outline: x ? "border border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-semibold" : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs",
    subtle: x ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-semibold" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
  };
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      onClick: f,
      className: u(
        "inline-flex items-center justify-center font-medium rounded-xl transition-all cursor-pointer select-none active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
        p[o],
        v[a],
        d
      ),
      title: x ? i : n,
      ...c,
      children: [
        x ? /* @__PURE__ */ r.jsx(Me, { className: "w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 stroke-[2.5]" }) : /* @__PURE__ */ r.jsx(Ht, { className: "w-3.5 h-3.5 text-slate-400 dark:text-slate-400" }),
        /* @__PURE__ */ r.jsx("span", { children: x ? i : n })
      ]
    }
  );
}, Ao = {
  sm: "h-8 text-xs",
  md: "h-10 text-sm",
  lg: "h-12 text-base"
}, $t = {
  sm: "w-7 h-full text-xs",
  md: "w-9 h-full text-sm",
  lg: "w-11 h-full text-base"
}, pn = ({
  value: e,
  defaultValue: t = 1,
  onChange: s,
  min: a = 0,
  max: o = 1 / 0,
  step: n = 1,
  disabled: i = !1,
  size: d = "md",
  className: c,
  ...x
}) => {
  const [b, f] = P(t), p = e !== void 0, v = p ? e : b, h = (g) => {
    const C = Math.min(Math.max(g, a), o);
    p || f(C), s == null || s(C);
  }, y = () => {
    i || v <= a || h(v - n);
  }, j = () => {
    i || v >= o || h(v + n);
  }, N = (g) => {
    const C = parseInt(g.target.value, 10);
    isNaN(C) ? h(a) : h(C);
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: u(
        "inline-flex items-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden select-none",
        i && "opacity-50 pointer-events-none",
        Ao[d],
        c
      ),
      ...x,
      children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            disabled: i || v <= a,
            onClick: y,
            className: u(
              "flex items-center justify-center border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
              $t[d]
            ),
            "aria-label": "Kurangi nilai",
            children: /* @__PURE__ */ r.jsx(Us, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "number",
            min: a,
            max: o,
            step: n,
            disabled: i,
            value: v,
            onChange: N,
            className: "w-14 sm:w-16 h-full text-center font-bold bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            disabled: i || v >= o,
            onClick: j,
            className: u(
              "flex items-center justify-center border-l border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
              $t[d]
            ),
            "aria-label": "Tambah nilai",
            children: /* @__PURE__ */ r.jsx(Js, { className: "w-3.5 h-3.5" })
          }
        )
      ]
    }
  );
}, gn = ({
  accept: e,
  maxSizeMb: t = 10,
  multiple: s = !0,
  onFilesChange: a,
  disabled: o = !1,
  title: n = "Klik atau seret berkas ke area ini untuk mengunggah",
  description: i = "Mendukung PNG, JPG, PDF, atau dokumen hingga 10MB",
  className: d,
  ...c
}) => {
  const [x, b] = P(!1), [f, p] = P([]), v = Ne(null), h = (w) => w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : `${(w / (1024 * 1024)).toFixed(1)} MB`, y = (w) => {
    if (!w || w.length === 0) return;
    const R = [], L = t * 1024 * 1024;
    Array.from(w).forEach((F) => {
      F.size <= L && R.push({
        name: F.name,
        size: F.size,
        type: F.type,
        file: F
      });
    });
    const B = s ? [...f, ...R] : R;
    p(B), a == null || a(B);
  }, j = (w) => {
    w.preventDefault(), b(!1), !o && y(w.dataTransfer.files);
  }, N = (w) => {
    w.preventDefault(), !o && b(!0);
  }, g = () => {
    b(!1);
  }, C = (w) => {
    const R = f.filter((L, B) => B !== w);
    p(R), a == null || a(R);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: u("w-full space-y-3", d), ...c, children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        role: "button",
        tabIndex: o ? -1 : 0,
        onClick: () => {
          var w;
          return !o && ((w = v.current) == null ? void 0 : w.click());
        },
        onDrop: j,
        onDragOver: N,
        onDragLeave: g,
        className: u(
          "flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center select-none",
          x ? "border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 ring-4 ring-blue-500/10" : "border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 hover:border-slate-400 dark:hover:border-slate-600",
          o && "opacity-50 cursor-not-allowed pointer-events-none"
        ),
        children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              ref: v,
              type: "file",
              accept: e,
              multiple: s,
              onChange: (w) => y(w.target.files),
              className: "hidden",
              disabled: o
            }
          ),
          /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3", children: /* @__PURE__ */ r.jsx(As, { className: "w-6 h-6 stroke-[1.8]" }) }),
          /* @__PURE__ */ r.jsx("h4", { className: "text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1", children: n }),
          /* @__PURE__ */ r.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 max-w-sm", children: i })
        ]
      }
    ),
    f.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "space-y-1.5 pt-1", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "text-xs font-semibold text-slate-500 px-1 flex items-center justify-between", children: [
        /* @__PURE__ */ r.jsxs("span", { children: [
          "Berkas Terpilih (",
          f.length,
          ")"
        ] }),
        /* @__PURE__ */ r.jsxs("span", { className: "text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium", children: [
          /* @__PURE__ */ r.jsx(Oe, { className: "w-3.5 h-3.5" }),
          "Siap diunggah"
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "space-y-1 max-h-40 overflow-y-auto custom-scrollbar", children: f.map((w, R) => /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: "flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs shadow-2xs",
          children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 min-w-0 mr-2", children: [
              /* @__PURE__ */ r.jsx(Ds, { className: "w-4 h-4 text-slate-400 shrink-0" }),
              /* @__PURE__ */ r.jsx("span", { className: "truncate font-medium text-slate-700 dark:text-slate-200", children: w.name }),
              /* @__PURE__ */ r.jsxs("span", { className: "text-slate-400 shrink-0 text-[11px]", children: [
                "(",
                h(w.size),
                ")"
              ] })
            ] }),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                onClick: () => C(R),
                className: "p-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors shrink-0",
                title: "Hapus berkas",
                children: /* @__PURE__ */ r.jsx(ee, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        },
        R
      )) })
    ] })
  ] });
}, Mo = {
  sm: "w-6 h-6 text-xs",
  md: "w-8 h-8 text-sm",
  lg: "w-10 h-10 text-base"
}, Oo = ({
  color: e,
  selected: t = !1,
  size: s = "md",
  className: a,
  onClick: o,
  ...n
}) => /* @__PURE__ */ r.jsx(
  "button",
  {
    type: "button",
    onClick: o,
    style: { backgroundColor: e },
    className: u(
      "relative inline-flex items-center justify-center rounded-full transition-transform active:scale-95 cursor-pointer ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 focus:outline-none select-none shadow-xs",
      t ? "ring-blue-600 scale-105" : "ring-transparent hover:scale-105",
      Mo[s],
      a
    ),
    "aria-label": `Pilih warna ${e}`,
    ...n,
    children: t && /* @__PURE__ */ r.jsx(Me, { className: "w-4 h-4 text-white drop-shadow-md stroke-[3]" })
  }
), hn = ({
  colors: e,
  value: t,
  onChange: s,
  size: a = "md",
  className: o,
  ...n
}) => /* @__PURE__ */ r.jsx("div", { className: u("inline-flex flex-wrap items-center gap-2.5", o), ...n, children: e.map((i) => /* @__PURE__ */ r.jsx(
  Oo,
  {
    color: i,
    size: a,
    selected: t === i,
    onClick: () => s == null ? void 0 : s(i)
  },
  i
)) }), wn = ({
  title: e,
  description: t,
  children: s,
  code: a,
  className: o
}) => {
  const [n, i] = P(!1), d = async () => {
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
  return /* @__PURE__ */ r.jsxs("div", { className: u("mb-8 last:mb-0", o), children: [
    e && /* @__PURE__ */ r.jsx("h3", { className: "text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2", children: e }),
    t && /* @__PURE__ */ r.jsx("div", { className: "text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 leading-relaxed", children: t }),
    /* @__PURE__ */ r.jsxs("div", { className: "rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm", children: [
      /* @__PURE__ */ r.jsx("div", { className: "p-4 sm:p-6 bg-white dark:bg-slate-900 overflow-x-auto custom-scrollbar", children: s }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-slate-800 text-slate-300 border-t border-slate-700/80 text-xs", children: [
        /* @__PURE__ */ r.jsxs("span", { className: "font-mono flex items-center gap-1.5 text-slate-400", children: [
          /* @__PURE__ */ r.jsx(Os, { className: "w-3.5 h-3.5 text-blue-400" }),
          "JSX"
        ] }),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: d,
            className: u(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500",
              n ? "bg-emerald-600 text-white font-bold" : "bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white"
            ),
            title: "Salin kode ke clipboard",
            children: n ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(Me, { className: "w-3.5 h-3.5 text-white" }),
              /* @__PURE__ */ r.jsx("span", { children: "Tersalin!" })
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(Ht, { className: "w-3.5 h-3.5 text-slate-300" }),
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
  at as Accordion,
  La as AccordionBody,
  $a as AccordionHeader,
  za as AccordionItem,
  qt as Alert,
  ia as AlertHeading,
  da as AlertLink,
  xn as AspectRatio,
  mo as Avatar,
  fo as AvatarGroup,
  Bo as Badge,
  Ra as Breadcrumb,
  _a as BreadcrumbItem,
  oa as Button,
  Do as ButtonGroup,
  ie as Card,
  ba as CardBody,
  pa as CardFooter,
  ua as CardHeader,
  ga as CardImg,
  fa as CardSubtitle,
  ma as CardText,
  xa as CardTitle,
  Qo as Carousel,
  Fo as CloseButton,
  wn as CodePreview,
  Lo as Col,
  Oo as ColorSwatch,
  hn as ColorSwatchGroup,
  oe as Command,
  _o as CommandDialog,
  yo as CommandEmpty,
  ko as CommandGroup,
  wo as CommandInput,
  jo as CommandItem,
  vo as CommandList,
  ho as CommandRoot,
  Co as CommandSeparator,
  No as CommandShortcut,
  zo as Container,
  mn as CopyButton,
  cn as Divider,
  Ce as Dropdown,
  Ga as DropdownDivider,
  Va as DropdownHeader,
  Ba as DropdownItem,
  Fa as DropdownMenu,
  Da as DropdownToggle,
  nn as Empty,
  gn as FileDropzone,
  Wo as FloatingLabel,
  qa as FormCheck,
  Wa as FormControl,
  Vo as FormGroup,
  Ko as FormLabel,
  Uo as FormRange,
  Ha as FormSelect,
  Ya as FormSwitch,
  Xa as InputGroup,
  Ja as InputGroupText,
  bn as Kbd,
  no as ListGroup,
  oo as ListGroupItem,
  Pe as Modal,
  Ia as ModalBody,
  Aa as ModalFooter,
  Sa as ModalHeader,
  Ta as ModalTitle,
  Yt as Nav,
  Ca as NavItem,
  Na as NavLink,
  tt as Navbar,
  ya as NavbarBrand,
  ja as NavbarCollapse,
  ka as NavbarToggle,
  pn as NumberInput,
  rt as Offcanvas,
  Pa as OffcanvasBody,
  Ma as OffcanvasHeader,
  Oa as OffcanvasTitle,
  Go as Pagination,
  fn as PinInput,
  rn as Placeholder,
  tn as Popover,
  qo as ProgressBar,
  on as Rate,
  ln as Result,
  $o as Row,
  dn as Segmented,
  Yo as Spinner,
  an as Statistic,
  sn as Steps,
  eo as Tab,
  Ho as Table,
  to as Tabs,
  un as Tag,
  uo as Timeline,
  Jt as TimelineItem,
  Jo as Toast,
  Xo as ToastContainer,
  Eo as Toggle,
  To as ToggleGroup,
  So as ToggleGroupItem,
  en as Tooltip,
  Zo as useToast
};
