import L, { forwardRef as zt, createElement as Ke, useState as P, createContext as ue, useContext as G, useEffect as ee, useRef as Ye, useCallback as yt } from "react";
var Se = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function jr() {
  if (kt) return he;
  kt = 1;
  var e = L, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(d, c, x) {
    var b, m = {}, g = null, y = null;
    x !== void 0 && (g = "" + x), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (b in c) a.call(c, b) && !l.hasOwnProperty(b) && (m[b] = c[b]);
    if (d && d.defaultProps) for (b in c = d.defaultProps, c) m[b] === void 0 && (m[b] = c[b]);
    return { $$typeof: t, type: d, key: g, ref: y, props: m, _owner: o.current };
  }
  return he.Fragment = r, he.jsx = i, he.jsxs = i, he;
}
var we = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function Nr() {
  return jt || (jt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = L, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v = Symbol.iterator, j = "@@iterator";
    function w(n) {
      if (n === null || typeof n != "object")
        return null;
      var f = v && n[v] || n[j];
      return typeof f == "function" ? f : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(n) {
      {
        for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), N = 1; N < f; N++)
          h[N - 1] = arguments[N];
        I("error", n, h);
      }
    }
    function I(n, f, h) {
      {
        var N = k.ReactDebugCurrentFrame, E = N.getStackAddendum();
        E !== "" && (f += "%s", h = h.concat([E]));
        var T = h.map(function(R) {
          return String(R);
        });
        T.unshift("Warning: " + f), Function.prototype.apply.call(console[n], console, T);
      }
    }
    var $ = !1, Y = !1, q = !1, je = !1, Ne = !1, ne;
    ne = Symbol.for("react.module.reference");
    function xe(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === l || Ne || n === o || n === x || n === b || je || n === y || $ || Y || q || typeof n == "object" && n !== null && (n.$$typeof === g || n.$$typeof === m || n.$$typeof === i || n.$$typeof === d || n.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === ne || n.getModuleId !== void 0));
    }
    function fe(n, f, h) {
      var N = n.displayName;
      if (N)
        return N;
      var E = f.displayName || f.name || "";
      return E !== "" ? h + "(" + E + ")" : h;
    }
    function S(n) {
      return n.displayName || "Context";
    }
    function K(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case l:
          return "Profiler";
        case o:
          return "StrictMode";
        case x:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            var f = n;
            return S(f) + ".Consumer";
          case i:
            var h = n;
            return S(h._context) + ".Provider";
          case c:
            return fe(n, n.render, "ForwardRef");
          case m:
            var N = n.displayName || null;
            return N !== null ? N : K(n.type) || "Memo";
          case g: {
            var E = n, T = E._payload, R = E._init;
            try {
              return K(R(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, X = 0, se, me, le, J, pe, V, at;
    function ot() {
    }
    ot.__reactDisabledLog = !0;
    function Xt() {
      {
        if (X === 0) {
          se = console.log, me = console.info, le = console.warn, J = console.error, pe = console.group, V = console.groupCollapsed, at = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ot,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        X++;
      }
    }
    function Jt() {
      {
        if (X--, X === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, n, {
              value: se
            }),
            info: B({}, n, {
              value: me
            }),
            warn: B({}, n, {
              value: le
            }),
            error: B({}, n, {
              value: J
            }),
            group: B({}, n, {
              value: pe
            }),
            groupCollapsed: B({}, n, {
              value: V
            }),
            groupEnd: B({}, n, {
              value: at
            })
          });
        }
        X < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ze = k.ReactCurrentDispatcher, $e;
    function Ce(n, f, h) {
      {
        if ($e === void 0)
          try {
            throw Error();
          } catch (E) {
            var N = E.stack.trim().match(/\n( *(at )?)/);
            $e = N && N[1] || "";
          }
        return `
` + $e + n;
      }
    }
    var Le = !1, _e;
    {
      var Zt = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new Zt();
    }
    function nt(n, f) {
      if (!n || Le)
        return "";
      {
        var h = _e.get(n);
        if (h !== void 0)
          return h;
      }
      var N;
      Le = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = ze.current, ze.current = null, Xt();
      try {
        if (f) {
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
              N = D;
            }
            Reflect.construct(n, [], R);
          } else {
            try {
              R.call();
            } catch (D) {
              N = D;
            }
            n.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            N = D;
          }
          n();
        }
      } catch (D) {
        if (D && N && typeof D.stack == "string") {
          for (var _ = D.stack.split(`
`), F = N.stack.split(`
`), O = _.length - 1, M = F.length - 1; O >= 1 && M >= 0 && _[O] !== F[M]; )
            M--;
          for (; O >= 1 && M >= 0; O--, M--)
            if (_[O] !== F[M]) {
              if (O !== 1 || M !== 1)
                do
                  if (O--, M--, M < 0 || _[O] !== F[M]) {
                    var W = `
` + _[O].replace(" at new ", " at ");
                    return n.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", n.displayName)), typeof n == "function" && _e.set(n, W), W;
                  }
                while (O >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        Le = !1, ze.current = T, Jt(), Error.prepareStackTrace = E;
      }
      var de = n ? n.displayName || n.name : "", ae = de ? Ce(de) : "";
      return typeof n == "function" && _e.set(n, ae), ae;
    }
    function Qt(n, f, h) {
      return nt(n, !1);
    }
    function er(n) {
      var f = n.prototype;
      return !!(f && f.isReactComponent);
    }
    function Re(n, f, h) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return nt(n, er(n));
      if (typeof n == "string")
        return Ce(n);
      switch (n) {
        case x:
          return Ce("Suspense");
        case b:
          return Ce("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            return Qt(n.render);
          case m:
            return Re(n.type, f, h);
          case g: {
            var N = n, E = N._payload, T = N._init;
            try {
              return Re(T(E), f, h);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, lt = {}, it = k.ReactDebugCurrentFrame;
    function Ee(n) {
      if (n) {
        var f = n._owner, h = Re(n.type, n._source, f ? f.type : null);
        it.setExtraStackFrame(h);
      } else
        it.setExtraStackFrame(null);
    }
    function tr(n, f, h, N, E) {
      {
        var T = Function.call.bind(ge);
        for (var R in n)
          if (T(n, R)) {
            var _ = void 0;
            try {
              if (typeof n[R] != "function") {
                var F = Error((N || "React class") + ": " + h + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw F.name = "Invariant Violation", F;
              }
              _ = n[R](f, R, N, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              _ = O;
            }
            _ && !(_ instanceof Error) && (Ee(E), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", h, R, typeof _), Ee(null)), _ instanceof Error && !(_.message in lt) && (lt[_.message] = !0, Ee(E), p("Failed %s type: %s", h, _.message), Ee(null));
          }
      }
    }
    var rr = Array.isArray;
    function Fe(n) {
      return rr(n);
    }
    function sr(n) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, h = f && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return h;
      }
    }
    function ar(n) {
      try {
        return dt(n), !1;
      } catch {
        return !0;
      }
    }
    function dt(n) {
      return "" + n;
    }
    function ct(n) {
      if (ar(n))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(n)), dt(n);
    }
    var ut = k.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, bt, xt;
    function nr(n) {
      if (ge.call(n, "ref")) {
        var f = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function lr(n) {
      if (ge.call(n, "key")) {
        var f = Object.getOwnPropertyDescriptor(n, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function ir(n, f) {
      typeof n.ref == "string" && ut.current;
    }
    function dr(n, f) {
      {
        var h = function() {
          bt || (bt = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function cr(n, f) {
      {
        var h = function() {
          xt || (xt = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var ur = function(n, f, h, N, E, T, R) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: f,
        ref: h,
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
        value: N
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function br(n, f, h, N, E) {
      {
        var T, R = {}, _ = null, F = null;
        h !== void 0 && (ct(h), _ = "" + h), lr(f) && (ct(f.key), _ = "" + f.key), nr(f) && (F = f.ref, ir(f, E));
        for (T in f)
          ge.call(f, T) && !or.hasOwnProperty(T) && (R[T] = f[T]);
        if (n && n.defaultProps) {
          var O = n.defaultProps;
          for (T in O)
            R[T] === void 0 && (R[T] = O[T]);
        }
        if (_ || F) {
          var M = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          _ && dr(R, M), F && cr(R, M);
        }
        return ur(n, _, F, E, N, ut.current, R);
      }
    }
    var De = k.ReactCurrentOwner, ft = k.ReactDebugCurrentFrame;
    function ie(n) {
      if (n) {
        var f = n._owner, h = Re(n.type, n._source, f ? f.type : null);
        ft.setExtraStackFrame(h);
      } else
        ft.setExtraStackFrame(null);
    }
    var Ge;
    Ge = !1;
    function Be(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function mt() {
      {
        if (De.current) {
          var n = K(De.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function xr(n) {
      return "";
    }
    var pt = {};
    function fr(n) {
      {
        var f = mt();
        if (!f) {
          var h = typeof n == "string" ? n : n.displayName || n.name;
          h && (f = `

Check the top-level render call using <` + h + ">.");
        }
        return f;
      }
    }
    function gt(n, f) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var h = fr(f);
        if (pt[h])
          return;
        pt[h] = !0;
        var N = "";
        n && n._owner && n._owner !== De.current && (N = " It was passed a child from " + K(n._owner.type) + "."), ie(n), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, N), ie(null);
      }
    }
    function ht(n, f) {
      {
        if (typeof n != "object")
          return;
        if (Fe(n))
          for (var h = 0; h < n.length; h++) {
            var N = n[h];
            Be(N) && gt(N, f);
          }
        else if (Be(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var E = w(n);
          if (typeof E == "function" && E !== n.entries)
            for (var T = E.call(n), R; !(R = T.next()).done; )
              Be(R.value) && gt(R.value, f);
        }
      }
    }
    function mr(n) {
      {
        var f = n.type;
        if (f == null || typeof f == "string")
          return;
        var h;
        if (typeof f == "function")
          h = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === m))
          h = f.propTypes;
        else
          return;
        if (h) {
          var N = K(f);
          tr(h, n.props, "prop", N, n);
        } else if (f.PropTypes !== void 0 && !Ge) {
          Ge = !0;
          var E = K(f);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(n) {
      {
        for (var f = Object.keys(n.props), h = 0; h < f.length; h++) {
          var N = f[h];
          if (N !== "children" && N !== "key") {
            ie(n), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), ie(null);
            break;
          }
        }
        n.ref !== null && (ie(n), p("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
      }
    }
    var wt = {};
    function vt(n, f, h, N, E, T) {
      {
        var R = xe(n);
        if (!R) {
          var _ = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var F = xr();
          F ? _ += F : _ += mt();
          var O;
          n === null ? O = "null" : Fe(n) ? O = "array" : n !== void 0 && n.$$typeof === t ? (O = "<" + (K(n.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : O = typeof n, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, _);
        }
        var M = br(n, f, h, E, T);
        if (M == null)
          return M;
        if (R) {
          var W = f.children;
          if (W !== void 0)
            if (N)
              if (Fe(W)) {
                for (var de = 0; de < W.length; de++)
                  ht(W[de], n);
                Object.freeze && Object.freeze(W);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ht(W, n);
        }
        if (ge.call(f, "key")) {
          var ae = K(n), D = Object.keys(f).filter(function(kr) {
            return kr !== "key";
          }), Ve = D.length > 0 ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wt[ae + Ve]) {
            var yr = D.length > 0 ? "{" + D.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ve, ae, yr, ae), wt[ae + Ve] = !0;
          }
        }
        return n === a ? pr(M) : mr(M), M;
      }
    }
    function gr(n, f, h) {
      return vt(n, f, h, !0);
    }
    function hr(n, f, h) {
      return vt(n, f, h, !1);
    }
    var wr = hr, vr = gr;
    we.Fragment = a, we.jsx = wr, we.jsxs = vr;
  })()), we;
}
var Nt;
function Cr() {
  return Nt || (Nt = 1, process.env.NODE_ENV === "production" ? Se.exports = jr() : Se.exports = Nr()), Se.exports;
}
var s = Cr();
function $t(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = $t(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function _r() {
  for (var e, t, r = 0, a = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = $t(e)) && (a && (a += " "), a += t);
  return a;
}
const He = "-", Rr = (e) => {
  const t = Sr(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (i) => {
      const d = i.split(He);
      return d[0] === "" && d.length !== 1 && d.shift(), Lt(d, t) || Er(i);
    },
    getConflictingClassGroupIds: (i, d) => {
      const c = r[i] || [];
      return d && a[i] ? [...c, ...a[i]] : c;
    }
  };
}, Lt = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], a = t.nextPart.get(r), o = a ? Lt(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = e.join(He);
  return (i = t.validators.find(({
    validator: d
  }) => d(l))) == null ? void 0 : i.classGroupId;
}, Ct = /^\[(.+)\]$/, Er = (e) => {
  if (Ct.test(e)) {
    const t = Ct.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Sr = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ir(Object.entries(e.classGroups), r).forEach(([l, i]) => {
    Ue(i, a, l, t);
  }), a;
}, Ue = (e, t, r, a) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : _t(t, o);
      l.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Tr(o)) {
        Ue(o(a), t, r, a);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([l, i]) => {
      Ue(i, _t(t, l), r, a);
    });
  });
}, _t = (e, t) => {
  let r = e;
  return t.split(He).forEach((a) => {
    r.nextPart.has(a) || r.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(a);
  }), r;
}, Tr = (e) => e.isThemeGetter, Ir = (e, t) => t ? e.map(([r, a]) => {
  const o = a.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([i, d]) => [t + i, d])) : l);
  return [r, o];
}) : e, Ar = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const o = (l, i) => {
    r.set(l, i), t++, t > e && (t = 0, a = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let i = r.get(l);
      if (i !== void 0)
        return i;
      if ((i = a.get(l)) !== void 0)
        return o(l, i), i;
    },
    set(l, i) {
      r.has(l) ? r.set(l, i) : o(l, i);
    }
  };
}, Ft = "!", Or = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, a = t.length === 1, o = t[0], l = t.length, i = (d) => {
    const c = [];
    let x = 0, b = 0, m;
    for (let w = 0; w < d.length; w++) {
      let k = d[w];
      if (x === 0) {
        if (k === o && (a || d.slice(w, w + l) === t)) {
          c.push(d.slice(b, w)), b = w + l;
          continue;
        }
        if (k === "/") {
          m = w;
          continue;
        }
      }
      k === "[" ? x++ : k === "]" && x--;
    }
    const g = c.length === 0 ? d : d.substring(b), y = g.startsWith(Ft), v = y ? g.substring(1) : g, j = m && m > b ? m - b : void 0;
    return {
      modifiers: c,
      hasImportantModifier: y,
      baseClassName: v,
      maybePostfixModifierPosition: j
    };
  };
  return r ? (d) => r({
    className: d,
    parseClassName: i
  }) : i;
}, Mr = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...r.sort(), a), r = []) : r.push(a);
  }), t.push(...r.sort()), t;
}, Pr = (e) => ({
  cache: Ar(e.cacheSize),
  parseClassName: Or(e),
  ...Rr(e)
}), zr = /\s+/, $r = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  } = t, l = [], i = e.trim().split(zr);
  let d = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const x = i[c], {
      modifiers: b,
      hasImportantModifier: m,
      baseClassName: g,
      maybePostfixModifierPosition: y
    } = r(x);
    let v = !!y, j = a(v ? g.substring(0, y) : g);
    if (!j) {
      if (!v) {
        d = x + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (j = a(g), !j) {
        d = x + (d.length > 0 ? " " + d : d);
        continue;
      }
      v = !1;
    }
    const w = Mr(b).join(":"), k = m ? w + Ft : w, p = k + j;
    if (l.includes(p))
      continue;
    l.push(p);
    const I = o(j, v);
    for (let $ = 0; $ < I.length; ++$) {
      const Y = I[$];
      l.push(k + Y);
    }
    d = x + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function Lr() {
  let e = 0, t, r, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Dt(t)) && (a && (a += " "), a += r);
  return a;
}
const Dt = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = Dt(e[a])) && (r && (r += " "), r += t);
  return r;
};
function Fr(e, ...t) {
  let r, a, o, l = i;
  function i(c) {
    const x = t.reduce((b, m) => m(b), e());
    return r = Pr(x), a = r.cache.get, o = r.cache.set, l = d, d(c);
  }
  function d(c) {
    const x = a(c);
    if (x)
      return x;
    const b = $r(c, r);
    return o(c, b), b;
  }
  return function() {
    return l(Lr.apply(null, arguments));
  };
}
const A = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Gt = /^\[(?:([a-z-]+):)?(.+)\]$/i, Dr = /^\d+\/\d+$/, Gr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Br = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Vr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Wr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Kr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ur = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, H = (e) => ce(e) || Gr.has(e) || Dr.test(e), Z = (e) => be(e, "length", es), ce = (e) => !!e && !Number.isNaN(Number(e)), We = (e) => be(e, "number", ce), ve = (e) => !!e && Number.isInteger(Number(e)), Yr = (e) => e.endsWith("%") && ce(e.slice(0, -1)), C = (e) => Gt.test(e), Q = (e) => Br.test(e), Hr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), qr = (e) => be(e, Hr, Bt), Xr = (e) => be(e, "position", Bt), Jr = /* @__PURE__ */ new Set(["image", "url"]), Zr = (e) => be(e, Jr, rs), Qr = (e) => be(e, "", ts), ye = () => !0, be = (e, t, r) => {
  const a = Gt.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : r(a[2]) : !1;
}, es = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Vr.test(e) && !Wr.test(e)
), Bt = () => !1, ts = (e) => Kr.test(e), rs = (e) => Ur.test(e), ss = () => {
  const e = A("colors"), t = A("spacing"), r = A("blur"), a = A("brightness"), o = A("borderColor"), l = A("borderRadius"), i = A("borderSpacing"), d = A("borderWidth"), c = A("contrast"), x = A("grayscale"), b = A("hueRotate"), m = A("invert"), g = A("gap"), y = A("gradientColorStops"), v = A("gradientColorStopPositions"), j = A("inset"), w = A("margin"), k = A("opacity"), p = A("padding"), I = A("saturate"), $ = A("scale"), Y = A("sepia"), q = A("skew"), je = A("space"), Ne = A("translate"), ne = () => ["auto", "contain", "none"], xe = () => ["auto", "hidden", "clip", "visible", "scroll"], fe = () => ["auto", C, t], S = () => [C, t], K = () => ["", H, Z], B = () => ["auto", ce, C], X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], se = () => ["solid", "dashed", "dotted", "double", "none"], me = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], le = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], J = () => ["", "0", C], pe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], V = () => [ce, C];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ye],
      spacing: [H, Z],
      blur: ["none", "", Q, C],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Q, C],
      borderSpacing: S(),
      borderWidth: K(),
      contrast: V(),
      grayscale: J(),
      hueRotate: V(),
      invert: J(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Yr, Z],
      inset: fe(),
      margin: fe(),
      opacity: V(),
      padding: S(),
      saturate: V(),
      scale: V(),
      sepia: J(),
      skew: V(),
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
        aspect: ["auto", "square", "video", C]
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
        "break-after": pe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": pe()
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
        object: [...X(), C]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: xe()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": xe()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": xe()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ne()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ne()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ne()
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
        inset: [j]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [j]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [j]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [j]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [j]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [j]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [j]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [j]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [j]
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
        z: ["auto", ve, C]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: fe()
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
        flex: ["1", "auto", "initial", "none", C]
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
        order: ["first", "last", "none", ve, C]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ye]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ve, C]
        }, C]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ye]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ve, C]
        }, C]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": ["auto", "min", "max", "fr", C]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", C]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...le()]
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
        content: ["normal", ...le(), "baseline"]
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
        "place-content": [...le(), "baseline"]
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
        p: [p]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [p]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [p]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [p]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [p]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [p]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [p]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [p]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [p]
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
        "space-x": [je]
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
        "space-y": [je]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", C, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [C, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [C, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Q]
        }, Q]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [C, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [C, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [C, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [C, t, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", We]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ye]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", C]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ce, We]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", H, C]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", C]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", C]
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
        decoration: [...se(), "wavy"]
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
        "underline-offset": ["auto", H, C]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", C]
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
        content: ["none", C]
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
        bg: [...X(), Xr]
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
        bg: ["auto", "cover", "contain", qr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Zr]
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
        from: [y]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [y]
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
        border: [...se(), "hidden"]
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
        divide: se()
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
        outline: ["", ...se()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [H, C]
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
        ring: K()
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
        shadow: ["", "inner", "none", Q, Qr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ye]
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
        "mix-blend": [...me(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": me()
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
        blur: [r]
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
        "drop-shadow": ["", "none", Q, C]
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
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I]
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
        "backdrop-blur": [r]
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
        "backdrop-invert": [m]
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
        "backdrop-saturate": [I]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", C]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: V()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", C]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: V()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", C]
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
        scale: [$]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [$]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [$]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ve, C]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Ne]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Ne]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", C]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", C]
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
        "will-change": ["auto", "scroll", "contents", "transform", C]
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
        stroke: [H, Z, We]
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
}, as = /* @__PURE__ */ Fr(ss);
function u(...e) {
  return as(_r(e));
}
const jo = ({
  fluid: e = !1,
  className: t,
  children: r,
  ...a
}) => {
  const o = () => e === !0 ? "w-full px-4 sm:px-6 lg:px-8" : e === "sm" ? "w-full px-4 sm:max-w-screen-sm sm:px-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "md" ? "w-full px-4 md:max-w-screen-md md:px-6 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "lg" ? "w-full px-4 lg:max-w-screen-lg lg:px-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "xl" ? "w-full px-4 xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "2xl" ? "w-full px-4 2xl:max-w-screen-2xl" : "w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl";
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: u(o(), "mx-auto transition-all duration-200", t),
      ...a,
      children: r
    }
  );
}, os = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-4",
  4: "gap-6",
  5: "gap-8",
  6: "gap-12"
}, ns = {
  0: "gap-x-0",
  1: "gap-x-1",
  2: "gap-x-2",
  3: "gap-x-4",
  4: "gap-x-6",
  5: "gap-x-8",
  6: "gap-x-12"
}, ls = {
  0: "gap-y-0",
  1: "gap-y-1",
  2: "gap-y-2",
  3: "gap-y-4",
  4: "gap-y-6",
  5: "gap-y-8",
  6: "gap-y-12"
}, is = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch"
}, ds = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}, No = ({
  gutter: e = 4,
  gx: t,
  gy: r,
  cols: a,
  colsSm: o,
  colsMd: l,
  colsLg: i,
  colsXl: d,
  align: c,
  justify: x,
  className: b,
  children: m,
  ...g
}) => {
  const y = () => t !== void 0 || r !== void 0 ? u(
    t !== void 0 ? ns[t] : "",
    r !== void 0 ? ls[r] : ""
  ) : os[e] || "gap-4", v = () => {
    const w = [];
    return a && w.push(`grid-cols-${a}`), o && w.push(`sm:grid-cols-${o}`), l && w.push(`md:grid-cols-${l}`), i && w.push(`lg:grid-cols-${i}`), d && w.push(`xl:grid-cols-${d}`), w.join(" ");
  }, j = !!(a || o || l || i || d);
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: u(
        j ? "grid" : "flex flex-wrap -mx-2 sm:-mx-3",
        j ? y() : "",
        c && is[c],
        x && ds[x],
        j && v(),
        b
      ),
      ...g,
      children: m
    }
  );
}, cs = {
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
}, us = {
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
}, bs = {
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
}, xs = {
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
}, fs = {
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
}, Co = ({
  xs: e,
  sm: t,
  md: r,
  lg: a,
  xl: o,
  offsetXs: l,
  offsetSm: i,
  offsetMd: d,
  offsetLg: c,
  offsetXl: x,
  className: b,
  children: m,
  ...g
}) => {
  const y = () => {
    const v = ["px-2 sm:px-3 flex-shrink-0 max-w-full min-w-0 box-border"];
    return !e && !t && !r && !a && !o ? v.push("flex-1 w-full") : (e !== void 0 ? v.push(cs[String(e)] || "w-full") : v.push("w-full"), t !== void 0 && v.push(us[String(t)] || ""), r !== void 0 && v.push(bs[String(r)] || ""), a !== void 0 && v.push(xs[String(a)] || ""), o !== void 0 && v.push(fs[String(o)] || "")), l && v.push(`ml-[${l / 12 * 100}%]`), i && v.push(`sm:ml-[${i / 12 * 100}%]`), d && v.push(`md:ml-[${d / 12 * 100}%]`), c && v.push(`lg:ml-[${c / 12 * 100}%]`), x && v.push(`xl:ml-[${x / 12 * 100}%]`), v.join(" ");
  };
  return /* @__PURE__ */ s.jsx("div", { className: u(y(), b), ...g, children: m });
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vt = (...e) => e.filter((t, r, a) => !!t && t.trim() !== "" && a.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ps = {
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
const gs = zt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: a,
    className: o = "",
    children: l,
    iconNode: i,
    ...d
  }, c) => Ke(
    "svg",
    {
      ref: c,
      ...ps,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: a ? Number(r) * 24 / Number(t) : r,
      className: Vt("lucide", o),
      ...d
    },
    [
      ...i.map(([x, b]) => Ke(x, b)),
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
const z = (e, t) => {
  const r = zt(
    ({ className: a, ...o }, l) => Ke(gs, {
      ref: l,
      iconNode: t,
      className: Vt(`lucide-${ms(e)}`, a),
      ...o
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
], ws = z("ArrowDownRight", hs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
], ys = z("ArrowUpRight", vs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Wt = z("Check", ks);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], qe = z("ChevronDown", js);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Kt = z("ChevronLeft", Ns);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Xe = z("ChevronRight", Cs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Je = z("CircleAlert", _s);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Ze = z("CircleCheck", Rs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Rt = z("CircleX", Es);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
], Ts = z("CodeXml", Ss);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], As = z("Copy", Is);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z", key: "1mlx9k" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }]
], Ms = z("FileQuestion", Os);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], U = z("Info", Ps);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], $s = z("LoaderCircle", zs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], Fs = z("Menu", Ls);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
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
], Gs = z("PackageOpen", Ds);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], Vs = z("Search", Bs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], Ks = z("Star", Ws);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ie = z("TriangleAlert", Us);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], te = z("X", Ys), Hs = {
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
}, qs = {
  sm: "text-xs px-2.5 py-1.5 min-h-[32px] gap-1.5",
  md: "text-sm px-4 py-2 min-h-[38px] gap-2",
  lg: "text-base px-5 py-2.5 min-h-[46px] gap-2.5"
}, Xs = L.forwardRef(
  ({
    variant: e = "primary",
    size: t = "md",
    pill: r = !1,
    block: a = !1,
    isLoading: o = !1,
    icon: l,
    disabled: i,
    className: d,
    children: c,
    ...x
  }, b) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      ref: b,
      disabled: i || o,
      className: u(
        "inline-flex items-center justify-center font-medium transition-all duration-150 select-none shadow-sm",
        "focus:outline-none disabled:opacity-65 disabled:pointer-events-none active:scale-[0.98]",
        r ? "rounded-full" : "rounded-md",
        a ? "w-full flex" : "",
        qs[t],
        Hs[e],
        d
      ),
      ...x,
      children: [
        o && /* @__PURE__ */ s.jsx($s, { className: u("animate-spin", t === "sm" ? "w-3.5 h-3.5" : t === "lg" ? "w-5 h-5" : "w-4 h-4") }),
        !o && l && /* @__PURE__ */ s.jsx("span", { className: "inline-flex shrink-0", children: l }),
        c
      ]
    }
  )
);
Xs.displayName = "Button";
const _o = ({
  vertical: e = !1,
  className: t,
  children: r,
  ...a
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    role: "group",
    className: u(
      "inline-flex flex-wrap shadow-sm rounded-md",
      e ? "flex-col [&>*]:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:first-child)]:-mt-px" : "flex-row [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:-ml-px",
      t
    ),
    ...a,
    children: r
  }
), Ro = ({
  variant: e = "default",
  className: t,
  ...r
}) => /* @__PURE__ */ s.jsx(
  "button",
  {
    type: "button",
    "aria-label": "Close",
    className: u(
      "p-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",
      e === "white" ? "text-white hover:bg-white/20 focus:ring-white" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-400",
      t
    ),
    ...r,
    children: /* @__PURE__ */ s.jsx(te, { className: "w-4 h-4" })
  }
), Js = {
  primary: "bg-[#0d6efd] text-white",
  secondary: "bg-[#6c757d] text-white",
  success: "bg-[#198754] text-white",
  danger: "bg-[#dc3545] text-white",
  warning: "bg-[#ffc107] text-gray-900",
  info: "bg-[#0dcaf0] text-gray-900",
  light: "bg-[#f8f9fa] text-gray-800 border border-gray-200 dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600",
  dark: "bg-[#212529] text-white"
}, Zs = {
  sm: "text-[10px] px-1.5 py-0.5 gap-1",
  md: "text-xs px-2.5 py-1 gap-1.5",
  lg: "text-sm px-3 py-1.5 gap-2"
}, Eo = ({
  variant: e = "primary",
  pill: t = !1,
  dot: r = !1,
  size: a = "md",
  icon: o,
  className: l,
  children: i,
  ...d
}) => /* @__PURE__ */ s.jsxs(
  "span",
  {
    className: u(
      "inline-flex items-center justify-center font-semibold tracking-wide leading-none transition-colors align-baseline whitespace-nowrap",
      t ? "rounded-full" : "rounded",
      Js[e],
      Zs[a],
      l
    ),
    ...d,
    children: [
      r && /* @__PURE__ */ s.jsx(
        "span",
        {
          className: u(
            "inline-block rounded-full",
            a === "sm" ? "w-1.5 h-1.5" : "w-2 h-2",
            e === "warning" || e === "info" || e === "light" ? "bg-current opacity-80" : "bg-white opacity-90"
          )
        }
      ),
      o && /* @__PURE__ */ s.jsx("span", { className: "inline-flex shrink-0", children: o }),
      i
    ]
  }
), Et = {
  primary: {
    wrapper: "bg-[#cfe2ff] text-[#084298] border-[#b6d4fe] dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-900",
    close: "text-[#084298] hover:bg-[#b6d4fe]/50",
    defaultIcon: /* @__PURE__ */ s.jsx(U, { className: "w-5 h-5 shrink-0" })
  },
  secondary: {
    wrapper: "bg-[#e2e3e5] text-[#41464b] border-[#d3d6d8] dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    close: "text-[#41464b] hover:bg-[#d3d6d8]/50",
    defaultIcon: /* @__PURE__ */ s.jsx(U, { className: "w-5 h-5 shrink-0" })
  },
  success: {
    wrapper: "bg-[#d1e7dd] text-[#0f5132] border-[#badbcc] dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900",
    close: "text-[#0f5132] hover:bg-[#badbcc]/50",
    defaultIcon: /* @__PURE__ */ s.jsx(Ze, { className: "w-5 h-5 shrink-0" })
  },
  danger: {
    wrapper: "bg-[#f8d7da] text-[#842029] border-[#f5c2c7] dark:bg-red-950/50 dark:text-red-300 dark:border-red-900",
    close: "text-[#842029] hover:bg-[#f5c2c7]/50",
    defaultIcon: /* @__PURE__ */ s.jsx(Je, { className: "w-5 h-5 shrink-0" })
  },
  warning: {
    wrapper: "bg-[#fff3cd] text-[#664d03] border-[#ffecb5] dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-900",
    close: "text-[#664d03] hover:bg-[#ffecb5]/50",
    defaultIcon: /* @__PURE__ */ s.jsx(Ie, { className: "w-5 h-5 shrink-0" })
  },
  info: {
    wrapper: "bg-[#cff4fc] text-[#055160] border-[#b6effb] dark:bg-cyan-950/50 dark:text-cyan-300 dark:border-cyan-900",
    close: "text-[#055160] hover:bg-[#b6effb]/50",
    defaultIcon: /* @__PURE__ */ s.jsx(U, { className: "w-5 h-5 shrink-0" })
  },
  light: {
    wrapper: "bg-[#fefefe] text-[#636464] border-[#e2e3e5] dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700",
    close: "text-[#636464] hover:bg-gray-200",
    defaultIcon: /* @__PURE__ */ s.jsx(U, { className: "w-5 h-5 shrink-0" })
  },
  dark: {
    wrapper: "bg-[#d3d3d4] text-[#141619] border-[#bcbebf] dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700",
    close: "text-[#141619] hover:bg-[#bcbebf]/50",
    defaultIcon: /* @__PURE__ */ s.jsx(U, { className: "w-5 h-5 shrink-0" })
  }
}, Qs = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx("h4", { className: u("text-base sm:text-lg font-semibold mb-1 leading-snug", e), ...r, children: t }), ea = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx("a", { className: u("font-bold underline underline-offset-2 hover:opacity-80 transition-opacity", e), ...r, children: t }), Ut = ({
  variant: e = "primary",
  dismissible: t = !1,
  show: r = !0,
  onClose: a,
  icon: o,
  className: l,
  children: i,
  ...d
}) => {
  const [c, x] = P(r);
  if (!c) return null;
  const b = () => {
    x(!1), a && a();
  }, m = Et[e] || Et.primary, g = () => o === !1 ? null : o === !0 || o === void 0 ? m.defaultIcon : o;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      role: "alert",
      className: u(
        "relative flex items-start gap-3 p-4 rounded-lg border text-sm sm:text-base transition-all duration-200 shadow-sm",
        m.wrapper,
        l
      ),
      ...d,
      children: [
        g() && /* @__PURE__ */ s.jsx("div", { className: "mt-0.5 shrink-0", children: g() }),
        /* @__PURE__ */ s.jsx("div", { className: "flex-1 min-w-0 pr-6", children: i }),
        t && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: b,
            "aria-label": "Close alert",
            className: u(
              "absolute top-3.5 right-3 p-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",
              m.close
            ),
            children: /* @__PURE__ */ s.jsx(te, { className: "w-4 h-4" })
          }
        )
      ]
    }
  );
};
Ut.Heading = Qs;
Ut.Link = ea;
const ta = {
  default: "border-slate-200 dark:border-slate-700",
  primary: "border-blue-500",
  success: "border-emerald-500",
  danger: "border-red-500",
  warning: "border-amber-500",
  info: "border-cyan-500",
  none: "border-transparent"
}, ra = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: u(
      "px-4 py-3 sm:px-6 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 font-medium text-slate-800 dark:text-slate-200 flex items-center justify-between",
      e
    ),
    ...r,
    children: t
  }
), sa = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx("div", { className: u("p-4 sm:p-6 flex-1 text-slate-600 dark:text-slate-300", e), ...r, children: t }), aa = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx("h3", { className: u("text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 leading-tight", e), ...r, children: t }), oa = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx("h6", { className: u("text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-3", e), ...r, children: t }), na = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx("p", { className: u("text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 last:mb-0 leading-relaxed", e), ...r, children: t }), la = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: u(
      "px-4 py-3 sm:px-6 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center justify-between",
      e
    ),
    ...r,
    children: t
  }
), ia = ({
  position: e = "top",
  className: t,
  alt: r = "",
  ...a
}) => {
  const o = e === "top" ? "rounded-t-xl" : e === "bottom" ? "rounded-b-xl" : "rounded-none";
  return /* @__PURE__ */ s.jsx(
    "img",
    {
      className: u("w-full object-cover max-h-60", o, t),
      alt: r,
      ...a
    }
  );
}, oe = ({
  hoverable: e = !1,
  border: t = "default",
  horizontal: r = !1,
  className: a,
  children: o,
  ...l
}) => {
  const i = () => r === !0 ? "flex flex-col md:flex-row" : r === "sm" ? "flex flex-col sm:flex-row" : r === "md" ? "flex flex-col md:flex-row" : r === "lg" ? "flex flex-col lg:flex-row" : "flex flex-col";
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: u(
        "rounded-xl border bg-white dark:bg-slate-850 shadow-sm transition-all duration-200 overflow-hidden",
        ta[t],
        e && "hover:shadow-md hover:-translate-y-0.5",
        i(),
        a
      ),
      ...l,
      children: o
    }
  );
};
oe.Header = ra;
oe.Body = sa;
oe.Title = aa;
oe.Subtitle = oa;
oe.Text = na;
oe.Footer = la;
oe.Img = ia;
const Qe = ue({
  isOpen: !1,
  setIsOpen: () => {
  },
  expand: "md"
}), da = {
  sm: "sm:flex-row sm:items-center",
  md: "md:flex-row md:items-center",
  lg: "lg:flex-row lg:items-center",
  xl: "xl:flex-row xl:items-center",
  always: "flex-row items-center",
  never: "flex-col"
}, ca = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
  xl: "xl:hidden",
  always: "hidden",
  never: "block"
}, ua = {
  sm: "sm:!flex sm:basis-auto sm:flex-row",
  md: "md:!flex md:basis-auto md:flex-row",
  lg: "lg:!flex lg:basis-auto lg:flex-row",
  xl: "xl:!flex xl:basis-auto xl:flex-row",
  always: "!flex basis-auto flex-row",
  never: ""
}, ba = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx(
  "a",
  {
    className: u(
      "text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 mr-4 py-1 select-none",
      e
    ),
    ...r,
    children: t
  }
), xa = ({
  className: e,
  children: t,
  ...r
}) => {
  const { isOpen: a, setIsOpen: o, expand: l } = G(Qe);
  return /* @__PURE__ */ s.jsx(
    "button",
    {
      type: "button",
      onClick: () => o(!a),
      "aria-label": "Toggle navigation",
      className: u(
        "p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
        ca[l],
        e
      ),
      ...r,
      children: t || (a ? /* @__PURE__ */ s.jsx(te, { className: "w-5 h-5" }) : /* @__PURE__ */ s.jsx(Fs, { className: "w-5 h-5" }))
    }
  );
}, fa = ({
  className: e,
  children: t,
  ...r
}) => {
  const { isOpen: a, expand: o } = G(Qe);
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: u(
        "w-full basis-full items-center justify-between transition-all duration-300 ease-in-out",
        ua[o],
        a ? "flex flex-col mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 lg:border-0 lg:mt-0 lg:pt-0" : "hidden",
        e
      ),
      ...r,
      children: t
    }
  );
}, et = ({
  expand: e = "md",
  theme: t = "light",
  sticky: r,
  fixed: a,
  className: o,
  children: l,
  ...i
}) => {
  const [d, c] = P(!1), x = r === "top" ? "sticky top-0 z-40" : r === "bottom" ? "sticky bottom-0 z-40" : a === "top" ? "fixed top-0 left-0 right-0 z-40" : a === "bottom" ? "fixed bottom-0 left-0 right-0 z-40" : "relative", b = t === "dark" ? "bg-slate-900 text-white border-b border-slate-800 shadow-md" : "bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200/80 dark:bg-slate-900/95 dark:border-slate-800 shadow-sm";
  return /* @__PURE__ */ s.jsx(Qe.Provider, { value: { isOpen: d, setIsOpen: c, expand: e }, children: /* @__PURE__ */ s.jsx(
    "nav",
    {
      className: u(
        "w-full px-4 py-3 sm:px-6 transition-colors duration-200",
        x,
        b,
        o
      ),
      ...i,
      children: /* @__PURE__ */ s.jsx("div", { className: u("mx-auto max-w-7xl flex flex-wrap items-center justify-between", da[e]), children: l })
    }
  ) });
};
et.Brand = ba;
et.Toggle = xa;
et.Collapse = fa;
const ma = ({
  active: e = !1,
  disabled: t = !1,
  inNavbar: r = !1,
  className: a,
  children: o,
  ...l
}) => /* @__PURE__ */ s.jsx(
  "a",
  {
    className: u(
      "px-3.5 py-2 text-sm font-medium transition-all duration-150 inline-flex items-center gap-2 rounded-md select-none",
      r && "w-full lg:w-auto justify-start lg:justify-center py-2.5",
      t ? "text-slate-400 dark:text-slate-600 pointer-events-none" : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400",
      e && "text-blue-600 font-semibold dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40",
      a
    ),
    ...l,
    children: o
  }
), pa = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx("li", { className: u("inline-block w-full lg:w-auto", e), ...r, children: t }), Yt = ({
  variant: e = "default",
  fill: t = !1,
  justified: r = !1,
  scrollable: a = !0,
  navbar: o = !1,
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
  return /* @__PURE__ */ s.jsx(
    "nav",
    {
      className: u(
        o ? "w-full lg:w-auto flex flex-col lg:flex-row items-stretch lg:items-center gap-1 sm:gap-2" : "flex items-center gap-1 sm:gap-2",
        !o && a && "overflow-x-auto custom-scrollbar pb-1 sm:pb-0 max-w-full",
        t && "[&>*]:flex-auto [&_a]:justify-center text-center",
        r && "[&>*]:flex-1 [&_a]:justify-center text-center",
        c(),
        l
      ),
      ...d,
      children: /* @__PURE__ */ s.jsx("ul", { className: u(
        "list-none p-0 m-0 w-full flex gap-1 sm:gap-2",
        o ? "flex-col lg:flex-row items-stretch lg:items-center" : "flex-row items-center"
      ), children: i })
    }
  );
};
Yt.Link = ma;
Yt.Item = pa;
const ga = ({
  active: e = !1,
  href: t,
  className: r,
  children: a,
  ...o
}) => /* @__PURE__ */ s.jsx(
  "li",
  {
    className: u(
      "inline-flex items-center text-xs sm:text-sm font-medium",
      e ? "text-slate-800 dark:text-slate-200 font-semibold" : "text-slate-500 dark:text-slate-400",
      r
    ),
    ...o,
    children: t && !e ? /* @__PURE__ */ s.jsx("a", { href: t, className: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors", children: a }) : /* @__PURE__ */ s.jsx("span", { children: a })
  }
), ha = ({
  separator: e = /* @__PURE__ */ s.jsx(Xe, { className: "w-3.5 h-3.5 text-slate-400 mx-1.5 shrink-0" }),
  className: t,
  children: r,
  ...a
}) => {
  const o = L.Children.toArray(r);
  return /* @__PURE__ */ s.jsx("nav", { "aria-label": "breadcrumb", className: u("flex py-2 px-1", t), ...a, children: /* @__PURE__ */ s.jsx("ol", { className: "inline-flex items-center flex-wrap gap-1 list-none p-0 m-0", children: o.map((l, i) => /* @__PURE__ */ s.jsxs(L.Fragment, { children: [
    l,
    i < o.length - 1 && e
  ] }, i)) }) });
};
ha.Item = ga;
const Te = {
  sm: "w-7 h-7 text-xs",
  md: "w-9 h-9 text-sm",
  lg: "w-11 h-11 text-base"
}, So = ({
  currentPage: e,
  totalPages: t,
  onPageChange: r,
  size: a = "md",
  maxVisible: o = 5,
  className: l,
  ...i
}) => {
  const c = (() => {
    const x = [];
    if (t <= o)
      for (let b = 1; b <= t; b++) x.push(b);
    else {
      const b = Math.floor(o / 2);
      let m = Math.max(1, e - b), g = Math.min(t, m + o - 1);
      g - m + 1 < o && (m = Math.max(1, g - o + 1)), m > 1 && (x.push(1), m > 2 && x.push("..."));
      for (let y = m; y <= g; y++)
        x.push(y);
      g < t && (g < t - 1 && x.push("..."), x.push(t));
    }
    return x;
  })();
  return /* @__PURE__ */ s.jsxs("nav", { "aria-label": "Pagination", className: u("flex items-center justify-center gap-1", l), ...i, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        disabled: e <= 1,
        onClick: () => r(e - 1),
        className: u(
          "inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none shadow-sm",
          Te[a]
        ),
        "aria-label": "Previous page",
        children: /* @__PURE__ */ s.jsx(Kt, { className: "w-4 h-4" })
      }
    ),
    c.map(
      (x, b) => x === "..." ? /* @__PURE__ */ s.jsx(
        "span",
        {
          className: u("inline-flex items-center justify-center text-slate-400 font-semibold", Te[a]),
          children: "..."
        },
        `ellipsis-${b}`
      ) : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          onClick: () => r(x),
          className: u(
            "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150 shadow-sm",
            Te[a],
            e === x ? "bg-blue-600 text-white font-bold shadow-blue-500/20" : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
          ),
          children: x
        },
        `page-${x}`
      )
    ),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        disabled: e >= t,
        onClick: () => r(e + 1),
        className: u(
          "inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none shadow-sm",
          Te[a]
        ),
        "aria-label": "Next page",
        children: /* @__PURE__ */ s.jsx(Xe, { className: "w-4 h-4" })
      }
    )
  ] });
}, wa = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  fullscreen: "max-w-full m-0 h-full rounded-none"
}, va = ({
  closeButton: e = !0,
  onClose: t,
  className: r,
  children: a,
  ...o
}) => /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: u(
      "flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-t-xl",
      r
    ),
    ...o,
    children: [
      /* @__PURE__ */ s.jsx("div", { className: "flex-1 pr-4", children: a }),
      e && /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          onClick: t,
          "aria-label": "Close",
          className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none",
          children: /* @__PURE__ */ s.jsx(te, { className: "w-5 h-5" })
        }
      )
    ]
  }
), ya = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx("h5", { className: u("text-lg sm:text-xl font-semibold text-slate-900 dark:text-white", e), ...r, children: t }), ka = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx("div", { className: u("p-5 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base", e), ...r, children: t }), ja = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: u(
      "flex items-center justify-end gap-2.5 px-5 py-3.5 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 rounded-b-xl",
      e
    ),
    ...r,
    children: t
  }
), Ae = ({
  show: e,
  onClose: t,
  size: r = "md",
  fullscreenSmDown: a = !1,
  centered: o = !0,
  scrollable: l = !1,
  backdrop: i = !0,
  className: d,
  children: c
}) => {
  if (ee(() => {
    const b = (m) => {
      m.key === "Escape" && e && t();
    };
    return e ? (document.body.style.overflow = "hidden", window.addEventListener("keydown", b)) : document.body.style.overflow = "", () => {
      document.body.style.overflow = "", window.removeEventListener("keydown", b);
    };
  }, [e, t]), !e) return null;
  const x = (b) => {
    b.target === b.currentTarget && i !== "static" && t();
  };
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      onClick: x,
      className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200",
      children: /* @__PURE__ */ s.jsx(
        "div",
        {
          className: u(
            "relative w-full bg-white dark:bg-slate-850 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col transition-all transform scale-100 animate-in zoom-in-95 duration-150",
            a ? "max-w-full h-full sm:h-auto sm:max-w-lg rounded-none sm:rounded-xl" : wa[r],
            o ? "my-auto" : "mt-12 mb-auto",
            l && "max-h-[calc(100vh-4rem)] [&>div:nth-child(2)]:overflow-y-auto custom-scrollbar",
            d
          ),
          children: c
        }
      )
    }
  );
};
Ae.Header = va;
Ae.Title = ya;
Ae.Body = ka;
Ae.Footer = ja;
const St = {
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
}, Na = ({
  onClose: e,
  className: t,
  children: r,
  ...a
}) => /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: u(
      "flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ s.jsx("div", { className: "flex-1 pr-4", children: r }),
      e && /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          onClick: e,
          "aria-label": "Close",
          className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none",
          children: /* @__PURE__ */ s.jsx(te, { className: "w-5 h-5" })
        }
      )
    ]
  }
), Ca = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx("h5", { className: u("text-lg font-semibold text-slate-900 dark:text-white", e), ...r, children: t }), _a = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx("div", { className: u("p-5 flex-1 overflow-y-auto custom-scrollbar text-slate-600 dark:text-slate-300", e), ...r, children: t }), tt = ({
  show: e,
  onClose: t,
  placement: r = "start",
  backdrop: a = !0,
  className: o,
  children: l
}) => (ee(() => {
  const i = (d) => {
    d.key === "Escape" && e && t();
  };
  return e ? (document.body.style.overflow = "hidden", window.addEventListener("keydown", i)) : document.body.style.overflow = "", () => {
    document.body.style.overflow = "", window.removeEventListener("keydown", i);
  };
}, [e, t]), e ? /* @__PURE__ */ s.jsxs("div", { className: "fixed inset-0 z-50 flex", children: [
  a && /* @__PURE__ */ s.jsx(
    "div",
    {
      onClick: t,
      className: "fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300"
    }
  ),
  /* @__PURE__ */ s.jsx(
    "div",
    {
      className: u(
        "fixed z-50 flex flex-col bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700 shadow-2xl transition-transform duration-300 ease-in-out",
        St[r].panel,
        St[r].transform,
        o
      ),
      children: l
    }
  )
] }) : null);
tt.Header = Na;
tt.Title = Ca;
tt.Body = _a;
const Oe = ue({
  activeKeys: [],
  toggleItem: () => {
  },
  flush: !1
}), rt = ue({ eventKey: "" }), Ra = ({
  eventKey: e,
  className: t,
  children: r,
  ...a
}) => {
  const { flush: o } = G(Oe);
  return /* @__PURE__ */ s.jsx(rt.Provider, { value: { eventKey: e }, children: /* @__PURE__ */ s.jsx(
    "div",
    {
      className: u(
        "transition-colors",
        o ? "border-b border-slate-200 dark:border-slate-700" : "border border-slate-200 dark:border-slate-700 rounded-xl mb-2.5 overflow-hidden shadow-sm",
        t
      ),
      ...a,
      children: r
    }
  ) });
}, Ea = ({
  className: e,
  children: t,
  ...r
}) => {
  const { activeKeys: a, toggleItem: o } = G(Oe), { eventKey: l } = G(rt), i = a.includes(l);
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => o(l),
      "aria-expanded": i,
      className: u(
        "w-full flex items-center justify-between px-5 py-4 text-left font-medium text-slate-800 dark:text-slate-100 transition-colors focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60",
        i && "bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 font-semibold",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ s.jsx("span", { className: "flex-1 pr-3", children: t }),
        /* @__PURE__ */ s.jsx(
          qe,
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
}, Sa = ({
  className: e,
  children: t,
  ...r
}) => {
  const { activeKeys: a } = G(Oe), { eventKey: o } = G(rt);
  return a.includes(o) ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: u(
        "px-5 py-4 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed animate-in fade-in-50 duration-200",
        e
      ),
      ...r,
      children: t
    }
  ) : null;
}, st = ({
  alwaysOpen: e = !1,
  defaultActiveKey: t,
  flush: r = !1,
  className: a,
  children: o,
  ...l
}) => {
  const [i, d] = P(() => t ? Array.isArray(t) ? t : [t] : []), c = (x) => {
    d(
      e ? (b) => b.includes(x) ? b.filter((m) => m !== x) : [...b, x] : (b) => b.includes(x) ? [] : [x]
    );
  };
  return /* @__PURE__ */ s.jsx(Oe.Provider, { value: { activeKeys: i, toggleItem: c, flush: r }, children: /* @__PURE__ */ s.jsx("div", { className: u("w-full", a), ...l, children: o }) });
};
st.Item = Ra;
st.Header = Ea;
st.Body = Sa;
const Me = ue({
  isOpen: !1,
  setIsOpen: () => {
  }
}), Ta = ({
  className: e,
  children: t,
  ...r
}) => {
  const { isOpen: a, setIsOpen: o } = G(Me);
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => o(!a),
      "aria-expanded": a,
      className: u(
        "inline-flex items-center justify-between gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-colors",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ s.jsx(qe, { className: u("w-4 h-4 transition-transform duration-150", a && "rotate-180") })
      ]
    }
  );
}, Ia = ({
  align: e = "start",
  className: t,
  children: r,
  ...a
}) => {
  const { isOpen: o } = G(Me);
  return o ? /* @__PURE__ */ s.jsx(
    "div",
    {
      role: "menu",
      className: u(
        "absolute z-50 mt-2 min-w-[12rem] py-1.5 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in-95 duration-100",
        e === "end" ? "right-0" : "left-0",
        t
      ),
      ...a,
      children: r
    }
  ) : null;
}, Aa = ({
  active: e = !1,
  disabled: t = !1,
  onClick: r,
  className: a,
  children: o,
  ...l
}) => {
  const { setIsOpen: i } = G(Me), d = (c) => {
    t || (i(!1), r && r(c));
  };
  return /* @__PURE__ */ s.jsx(
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
      children: o
    }
  );
}, Oa = ({ className: e, ...t }) => /* @__PURE__ */ s.jsx("div", { className: u("my-1.5 border-t border-slate-100 dark:border-slate-700", e), ...t }), Ma = ({ className: e, children: t, ...r }) => /* @__PURE__ */ s.jsx("div", { className: u("px-4 py-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider", e), ...r, children: t }), ke = ({ className: e, children: t, ...r }) => {
  const [a, o] = P(!1), l = Ye(null);
  return ee(() => {
    const i = (c) => {
      l.current && !l.current.contains(c.target) && o(!1);
    }, d = (c) => {
      c.key === "Escape" && o(!1);
    };
    return a && (document.addEventListener("mousedown", i), document.addEventListener("keydown", d)), () => {
      document.removeEventListener("mousedown", i), document.removeEventListener("keydown", d);
    };
  }, [a]), /* @__PURE__ */ s.jsx(Me.Provider, { value: { isOpen: a, setIsOpen: o }, children: /* @__PURE__ */ s.jsx("div", { ref: l, className: u("relative inline-block text-left", e), ...r, children: t }) });
};
ke.Toggle = Ta;
ke.Menu = Ia;
ke.Item = Aa;
ke.Divider = Oa;
ke.Header = Ma;
const To = ({
  className: e,
  children: t,
  as: r = "div",
  ...a
}) => /* @__PURE__ */ s.jsx(r, { className: u("mb-4 last:mb-0 w-full", e), ...a, children: t }), Io = ({
  required: e = !1,
  className: t,
  children: r,
  ...a
}) => /* @__PURE__ */ s.jsxs(
  "label",
  {
    className: u(
      "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 select-none",
      t
    ),
    ...a,
    children: [
      r,
      e && /* @__PURE__ */ s.jsx("span", { className: "text-red-500 ml-1 font-bold", children: "*" })
    ]
  }
), Pa = {
  sm: "px-2.5 py-1.5 text-xs rounded-md",
  md: "px-3.5 py-2 text-sm rounded-lg",
  lg: "px-4 py-2.5 text-base rounded-lg"
}, za = L.forwardRef(
  ({
    as: e = "input",
    rows: t = 3,
    isValid: r,
    isInvalid: a,
    sizeVariant: o = "md",
    helperText: l,
    errorMessage: i,
    successMessage: d,
    disabled: c,
    className: x,
    ...b
  }, m) => {
    const g = e, y = a ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-900 placeholder:text-red-300" : r ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900" : "border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500/20";
    return /* @__PURE__ */ s.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ s.jsx(
        g,
        {
          ref: m,
          rows: e === "textarea" ? t : void 0,
          disabled: c,
          className: u(
            "w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border shadow-sm transition-colors duration-150",
            "focus:outline-none focus:ring-4 placeholder:text-slate-400 dark:placeholder:text-slate-500",
            "disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850",
            Pa[o],
            y,
            x
          ),
          ...b
        }
      ),
      a && i && /* @__PURE__ */ s.jsx("p", { className: "mt-1 text-xs text-red-600 dark:text-red-400 font-medium", children: i }),
      r && d && /* @__PURE__ */ s.jsx("p", { className: "mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium", children: d }),
      !a && !r && l && /* @__PURE__ */ s.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: l })
    ] });
  }
);
za.displayName = "FormControl";
const $a = {
  sm: "px-2.5 py-1.5 text-xs rounded-md pr-8",
  md: "px-3.5 py-2 text-sm rounded-lg pr-9",
  lg: "px-4 py-2.5 text-base rounded-lg pr-10"
}, La = L.forwardRef(
  ({
    isValid: e,
    isInvalid: t,
    sizeVariant: r = "md",
    helperText: a,
    errorMessage: o,
    disabled: l,
    className: i,
    children: d,
    ...c
  }, x) => {
    const b = t ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-900" : e ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900" : "border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500/20";
    return /* @__PURE__ */ s.jsxs("div", { className: "relative w-full", children: [
      /* @__PURE__ */ s.jsx(
        "select",
        {
          ref: x,
          disabled: l,
          className: u(
            "w-full appearance-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border shadow-sm transition-colors duration-150",
            "focus:outline-none focus:ring-4",
            "disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850",
            $a[r],
            b,
            i
          ),
          ...c,
          children: d
        }
      ),
      /* @__PURE__ */ s.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500 dark:text-slate-400", children: /* @__PURE__ */ s.jsx(qe, { className: "w-4 h-4" }) }),
      t && o && /* @__PURE__ */ s.jsx("p", { className: "mt-1 text-xs text-red-600 dark:text-red-400 font-medium", children: o }),
      !t && a && /* @__PURE__ */ s.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: a })
    ] });
  }
);
La.displayName = "FormSelect";
const Fa = L.forwardRef(
  ({
    label: e,
    type: t = "checkbox",
    inline: r = !1,
    id: a,
    disabled: o,
    className: l,
    ...i
  }, d) => {
    const c = a || (typeof e == "string" ? e.toLowerCase().replace(/\s+/g, "-") : void 0);
    return /* @__PURE__ */ s.jsxs(
      "label",
      {
        htmlFor: c,
        className: u(
          "flex items-center gap-2.5 select-none cursor-pointer",
          r ? "inline-flex mr-4" : "flex mb-2 last:mb-0",
          o && "opacity-60 cursor-not-allowed",
          l
        ),
        children: [
          /* @__PURE__ */ s.jsx(
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
          e && /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: e })
        ]
      }
    );
  }
);
Fa.displayName = "FormCheck";
const Da = L.forwardRef(
  ({ label: e, checked: t, defaultChecked: r, id: a, disabled: o, onChange: l, className: i, ...d }, c) => {
    const [x, b] = L.useState(r || !1), m = t !== void 0, g = m ? t : x, y = a || (typeof e == "string" ? e.toLowerCase().replace(/\s+/g, "-") : void 0), v = (j) => {
      m || b(j.target.checked), l && l(j);
    };
    return /* @__PURE__ */ s.jsxs(
      "label",
      {
        htmlFor: y,
        className: u(
          "inline-flex items-center gap-3 cursor-pointer select-none",
          o && "opacity-60 cursor-not-allowed",
          i
        ),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "relative inline-flex items-center", children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                ref: c,
                id: y,
                type: "checkbox",
                checked: g,
                disabled: o,
                onChange: v,
                className: "sr-only",
                ...d
              }
            ),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: u(
                  "w-11 h-6 rounded-full transition-colors duration-200 ease-in-out",
                  g ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
                )
              }
            ),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: u(
                  "absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ease-in-out",
                  g && "translate-x-5"
                )
              }
            )
          ] }),
          e && /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: e })
        ]
      }
    );
  }
);
Da.displayName = "FormSwitch";
const Ga = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx(
  "span",
  {
    className: u(
      "inline-flex items-center px-3.5 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-750 border border-slate-300 dark:border-slate-600 select-none",
      e
    ),
    ...r,
    children: t
  }
), Ba = ({
  size: e = "md",
  className: t,
  children: r,
  ...a
}) => /* @__PURE__ */ s.jsx(
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
    children: r
  }
);
Ba.Text = Ga;
const Ao = ({
  label: e,
  type: t = "text",
  value: r,
  defaultValue: a = "",
  placeholder: o,
  onChange: l,
  disabled: i = !1,
  className: d,
  ...c
}) => {
  const [x, b] = P(a), m = r !== void 0, g = m ? r : x, y = (j) => {
    m || b(j.target.value), l && l(j);
  }, v = !!(g && String(g).length > 0);
  return /* @__PURE__ */ s.jsxs("div", { className: u("relative w-full", d), ...c, children: [
    /* @__PURE__ */ s.jsx(
      "input",
      {
        type: t,
        value: m ? r : x,
        disabled: i,
        onChange: y,
        placeholder: o || " ",
        className: u(
          "peer w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3.5 pt-5 pb-2 text-sm text-slate-900 dark:text-slate-100 placeholder-transparent",
          "focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all",
          "disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850"
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
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
}, Oo = ({
  label: e,
  showValue: t = !1,
  value: r,
  defaultValue: a = 50,
  min: o = 0,
  max: l = 100,
  step: i = 1,
  onChange: d,
  disabled: c,
  className: x,
  ...b
}) => {
  const [m, g] = L.useState(a), y = r !== void 0, v = y ? r : m, j = (w) => {
    y || g(w.target.value), d && d(w);
  };
  return /* @__PURE__ */ s.jsxs("div", { className: u("w-full", x), children: [
    (e || t) && /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center mb-1 text-sm font-medium text-slate-700 dark:text-slate-300", children: [
      e && /* @__PURE__ */ s.jsx("span", { children: e }),
      t && /* @__PURE__ */ s.jsx("span", { className: "text-xs font-mono text-slate-500", children: v })
    ] }),
    /* @__PURE__ */ s.jsx(
      "input",
      {
        type: "range",
        min: o,
        max: l,
        step: i,
        value: v,
        disabled: c,
        onChange: j,
        className: u(
          "w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all",
          c && "opacity-50 cursor-not-allowed"
        ),
        ...b
      }
    )
  ] });
}, Va = {
  sm: "overflow-x-auto sm:overflow-x-visible",
  md: "overflow-x-auto md:overflow-x-visible",
  lg: "overflow-x-auto lg:overflow-x-visible",
  xl: "overflow-x-auto xl:overflow-x-visible"
}, Mo = ({
  striped: e = !1,
  bordered: t = !1,
  hover: r = !1,
  compact: a = !1,
  dark: o = !1,
  responsive: l = !0,
  className: i,
  children: d,
  ...c
}) => {
  const x = /* @__PURE__ */ s.jsx(
    "table",
    {
      className: u(
        "w-full text-left border-collapse text-sm",
        o ? "text-slate-200 bg-slate-900" : "text-slate-700 dark:text-slate-200",
        e && (o ? "[&_tbody_tr:nth-child(odd)]:bg-slate-800/50" : "[&_tbody_tr:nth-child(odd)]:bg-slate-50 dark:[&_tbody_tr:nth-child(odd)]:bg-slate-800/40"),
        r && (o ? "[&_tbody_tr]:hover:bg-slate-800 transition-colors" : "[&_tbody_tr]:hover:bg-blue-50/40 dark:[&_tbody_tr]:hover:bg-slate-800/70 transition-colors"),
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
  if (l) {
    const b = typeof l == "string" ? Va[l] : "overflow-x-auto";
    return /* @__PURE__ */ s.jsx("div", { className: u("w-full custom-scrollbar rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900", b), children: x });
  }
  return x;
}, Wa = {
  primary: "bg-blue-600",
  secondary: "bg-slate-600",
  success: "bg-emerald-600",
  danger: "bg-red-600",
  warning: "bg-amber-500",
  info: "bg-cyan-500",
  light: "bg-slate-200 text-slate-800",
  dark: "bg-slate-900 text-white"
}, Po = ({
  value: e,
  min: t = 0,
  max: r = 100,
  variant: a = "primary",
  striped: o = !1,
  animated: l = !1,
  label: i = !1,
  height: d = "1rem",
  className: c,
  ...x
}) => {
  const b = Math.min(Math.max(e, t), r), m = Math.round((b - t) / (r - t) * 100), g = typeof i == "string" ? i : i ? `${m}%` : null;
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": b,
      "aria-valuemin": t,
      "aria-valuemax": r,
      style: { height: d },
      className: u(
        "w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-750 shadow-inner",
        c
      ),
      ...x,
      children: /* @__PURE__ */ s.jsx(
        "div",
        {
          style: { width: `${m}%` },
          className: u(
            "h-full flex items-center justify-center text-[11px] font-bold text-white transition-all duration-300 ease-out select-none",
            Wa[a],
            o && "bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]",
            l && "animate-[progress-bar-stripes_1s_linear_infinite]"
          ),
          children: g
        }
      )
    }
  );
}, Tt = {
  primary: "text-blue-600",
  secondary: "text-slate-500",
  success: "text-emerald-600",
  danger: "text-red-600",
  warning: "text-amber-500",
  info: "text-cyan-500",
  light: "text-slate-200",
  dark: "text-slate-900 dark:text-slate-100",
  current: "text-current"
}, It = {
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
}, zo = ({
  animation: e = "border",
  variant: t = "primary",
  size: r = "md",
  className: a,
  ...o
}) => e === "grow" ? /* @__PURE__ */ s.jsx(
  "div",
  {
    role: "status",
    "aria-label": "Loading",
    className: u(
      "inline-block rounded-full bg-current opacity-0 animate-ping",
      Tt[t],
      It.grow[r],
      a
    ),
    ...o,
    children: /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Loading..." })
  }
) : /* @__PURE__ */ s.jsx(
  "div",
  {
    role: "status",
    "aria-label": "Loading",
    className: u(
      "inline-block rounded-full border-solid border-current border-r-transparent animate-spin align-[-0.125em]",
      Tt[t],
      It.border[r],
      a
    ),
    ...o,
    children: /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Loading..." })
  }
), Ka = ({ children: e }) => /* @__PURE__ */ s.jsx(s.Fragment, { children: e }), Ua = ({
  defaultActiveKey: e,
  activeKey: t,
  onSelect: r,
  variant: a = "tabs",
  fill: o = !1,
  justified: l = !1,
  className: i,
  children: d,
  ...c
}) => {
  var k;
  const x = L.Children.toArray(d).filter(
    (p) => L.isValidElement(p)
  ), [b, m] = P(() => {
    var p;
    return e || ((p = x[0]) == null ? void 0 : p.props.eventKey) || "";
  }), g = t !== void 0 ? t : b, y = (p, I) => {
    I || (t === void 0 && m(p), r && r(p));
  }, v = (k = x.find((p) => p.props.eventKey === g)) == null ? void 0 : k.props.children, j = () => {
    switch (a) {
      case "pills":
        return "gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl";
      case "underline":
        return "gap-6 border-b border-slate-200 dark:border-slate-700";
      case "tabs":
      default:
        return "gap-2 border-b border-slate-200 dark:border-slate-700";
    }
  }, w = (p, I) => {
    const $ = g === p;
    if (I)
      return "opacity-40 cursor-not-allowed pointer-events-none text-slate-400";
    switch (a) {
      case "pills":
        return $ ? "bg-blue-600 text-white shadow-sm font-semibold" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50";
      case "underline":
        return $ ? "text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 dark:border-blue-400 pb-3 -mb-px" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white pb-3 -mb-px border-b-2 border-transparent";
      case "tabs":
      default:
        return $ ? "bg-white dark:bg-slate-850 text-blue-600 dark:text-blue-400 font-semibold border-t border-x border-slate-200 dark:border-slate-700 rounded-t-lg -mb-px" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-t border-x border-transparent rounded-t-lg";
    }
  };
  return /* @__PURE__ */ s.jsxs("div", { className: u("w-full flex flex-col", i), ...c, children: [
    /* @__PURE__ */ s.jsx("div", { className: "overflow-x-auto custom-scrollbar pb-1", children: /* @__PURE__ */ s.jsx(
      "div",
      {
        role: "tablist",
        className: u(
          "flex items-center min-w-full w-max sm:w-auto",
          j(),
          o && "[&>*]:flex-auto",
          l && "[&>*]:flex-1"
        ),
        children: x.map((p) => {
          const { eventKey: I, title: $, icon: Y, disabled: q } = p.props;
          return /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": g === I,
              disabled: q,
              onClick: () => y(I, q),
              className: u(
                "px-4 py-2 text-sm font-medium transition-all duration-150 inline-flex items-center justify-center gap-2 whitespace-nowrap select-none rounded-lg focus:outline-none",
                w(I, q)
              ),
              children: [
                Y && /* @__PURE__ */ s.jsx("span", { className: "w-4 h-4 shrink-0", children: Y }),
                $
              ]
            },
            I
          );
        })
      }
    ) }),
    /* @__PURE__ */ s.jsx("div", { role: "tabpanel", className: "py-4 animate-in fade-in-50 duration-200", children: v })
  ] });
};
Ua.Tab = Ka;
const Ya = {
  primary: /* @__PURE__ */ s.jsx(U, { className: "w-4 h-4 text-blue-500" }),
  success: /* @__PURE__ */ s.jsx(Ze, { className: "w-4 h-4 text-emerald-500" }),
  danger: /* @__PURE__ */ s.jsx(Je, { className: "w-4 h-4 text-red-500" }),
  warning: /* @__PURE__ */ s.jsx(Ie, { className: "w-4 h-4 text-amber-500" }),
  info: /* @__PURE__ */ s.jsx(U, { className: "w-4 h-4 text-cyan-500" }),
  secondary: /* @__PURE__ */ s.jsx(U, { className: "w-4 h-4 text-slate-500" }),
  light: /* @__PURE__ */ s.jsx(U, { className: "w-4 h-4 text-slate-400" }),
  dark: /* @__PURE__ */ s.jsx(U, { className: "w-4 h-4 text-slate-300" })
}, $o = ({
  show: e = !0,
  onClose: t,
  autohide: r = !0,
  delay: a = 5e3,
  variant: o,
  title: l,
  subtitle: i,
  className: d,
  children: c,
  ...x
}) => (ee(() => {
  if (!e || !r || !t) return;
  const b = setTimeout(() => {
    t();
  }, a);
  return () => clearTimeout(b);
}, [e, r, a, t]), e ? /* @__PURE__ */ s.jsxs(
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
      (l || t) && /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
          o && Ya[o],
          l && /* @__PURE__ */ s.jsx("span", { className: "font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100", children: l })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
          i && /* @__PURE__ */ s.jsx("span", { className: "text-[11px] text-slate-400", children: i }),
          t && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              onClick: t,
              "aria-label": "Close",
              className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded transition-colors",
              children: /* @__PURE__ */ s.jsx(te, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed", children: c })
    ]
  }
) : null), Ha = {
  "top-start": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "top-end": "top-4 right-4 items-end",
  "bottom-start": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-end": "bottom-4 right-4 items-end"
}, Lo = ({
  position: e = "top-end",
  className: t,
  children: r,
  ...a
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    "aria-live": "polite",
    className: u(
      "fixed z-50 flex flex-col gap-2.5 p-3 pointer-events-none [&>*]:pointer-events-auto max-w-[calc(100vw-2rem)]",
      Ha[e],
      t
    ),
    ...a,
    children: r
  }
);
function Fo() {
  const [e, t] = P([]), r = yt((o) => {
    const l = Math.random().toString(36).substring(2, 9);
    t((i) => [...i, { ...o, id: l }]);
  }, []), a = yt((o) => {
    t((l) => l.filter((i) => i.id !== o));
  }, []);
  return { toasts: e, addToast: r, removeToast: a };
}
const Do = ({
  items: e,
  autoPlay: t = !0,
  interval: r = 4e3,
  indicators: a = !0,
  controls: o = !0,
  pauseOnHover: l = !0,
  className: i,
  ...d
}) => {
  const [c, x] = P(0), [b, m] = P(!1), g = Ye(null), y = () => {
    x((p) => p === 0 ? e.length - 1 : p - 1);
  }, v = () => {
    x((p) => p === e.length - 1 ? 0 : p + 1);
  }, j = (p) => {
    x(p);
  };
  ee(() => {
    if (!t || l && b || e.length <= 1) return;
    const p = setInterval(() => {
      v();
    }, r);
    return () => clearInterval(p);
  }, [t, r, b, e.length]);
  const w = (p) => {
    g.current = p.touches[0].clientX;
  }, k = (p) => {
    if (g.current === null) return;
    const I = p.changedTouches[0].clientX, $ = g.current - I;
    Math.abs($) > 50 && ($ > 0 ? v() : y()), g.current = null;
  };
  return !e || e.length === 0 ? null : /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: u(
        "relative w-full overflow-hidden rounded-2xl shadow-lg select-none bg-slate-900 group",
        i
      ),
      onMouseEnter: () => m(!0),
      onMouseLeave: () => m(!1),
      onTouchStart: w,
      onTouchEnd: k,
      ...d,
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex transition-transform duration-500 ease-out h-64 sm:h-80 md:h-96",
            style: { transform: `translateX(-${c * 100}%)` },
            children: e.map((p, I) => /* @__PURE__ */ s.jsxs("div", { className: "w-full flex-shrink-0 relative h-full", children: [
              /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: p.image,
                  alt: p.alt || `Slide ${I + 1}`,
                  className: "w-full h-full object-cover"
                }
              ),
              (p.title || p.caption) && /* @__PURE__ */ s.jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white", children: [
                p.title && /* @__PURE__ */ s.jsx("h3", { className: "text-lg sm:text-2xl font-bold mb-1 leading-snug", children: p.title }),
                p.caption && /* @__PURE__ */ s.jsx("p", { className: "text-xs sm:text-sm text-slate-200 max-w-xl line-clamp-2", children: p.caption })
              ] })
            ] }, p.id || I))
          }
        ),
        o && e.length > 1 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              onClick: y,
              "aria-label": "Previous slide",
              className: "absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 opacity-90 sm:opacity-0 sm:group-hover:opacity-100",
              children: /* @__PURE__ */ s.jsx(Kt, { className: "w-5 h-5 sm:w-6 sm:h-6" })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              onClick: v,
              "aria-label": "Next slide",
              className: "absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 opacity-90 sm:opacity-0 sm:group-hover:opacity-100",
              children: /* @__PURE__ */ s.jsx(Xe, { className: "w-5 h-5 sm:w-6 sm:h-6" })
            }
          )
        ] }),
        a && e.length > 1 && /* @__PURE__ */ s.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10", children: e.map((p, I) => /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: () => j(I),
            "aria-label": `Go to slide ${I + 1}`,
            className: u(
              "h-2 rounded-full transition-all duration-300 focus:outline-none",
              c === I ? "w-7 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            )
          },
          I
        )) })
      ]
    }
  );
}, qa = {
  primary: "bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-300",
  secondary: "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-200",
  success: "bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300",
  danger: "bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-300",
  warning: "bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-300",
  info: "bg-cyan-50 text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-300",
  light: "bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  dark: "bg-slate-800 text-white dark:bg-slate-900 dark:text-white"
}, Xa = ({
  active: e = !1,
  disabled: t = !1,
  action: r = !1,
  variant: a,
  className: o,
  children: l,
  ...i
}) => /* @__PURE__ */ s.jsx(
  "li",
  {
    className: u(
      "relative px-4 py-3 text-sm flex items-center justify-between border-b last:border-b-0 border-slate-200 dark:border-slate-700 transition-colors",
      e ? "bg-blue-600 text-white font-medium border-blue-600" : t ? "text-slate-400 dark:text-slate-600 pointer-events-none bg-slate-50 dark:bg-slate-850" : r ? "cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200" : "text-slate-700 dark:text-slate-200",
      a && !e && qa[a],
      o
    ),
    ...i,
    children: l
  }
), Ja = ({
  flush: e = !1,
  horizontal: t = !1,
  numbered: r = !1,
  className: a,
  children: o,
  ...l
}) => {
  const i = () => t === !0 ? "flex-row [&>li]:border-b-0 [&>li]:border-r [&>li:last-child]:border-r-0" : t === "sm" ? "sm:flex-row sm:[&>li]:border-b-0 sm:[&>li]:border-r sm:[&>li:last-child]:border-r-0" : t === "md" ? "md:flex-row md:[&>li]:border-b-0 md:[&>li]:border-r md:[&>li:last-child]:border-r-0" : t === "lg" ? "lg:flex-row lg:[&>li]:border-b-0 lg:[&>li]:border-r lg:[&>li:last-child]:border-r-0" : "flex-col", d = r ? "ol" : "ul";
  return /* @__PURE__ */ s.jsx(
    d,
    {
      className: u(
        "flex list-none p-0 overflow-hidden",
        i(),
        e ? "rounded-none border-x-0 border-t-0" : "rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-850",
        r && "list-decimal list-inside",
        a
      ),
      ...l,
      children: o
    }
  );
};
Ja.Item = Xa;
const At = {
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
}, Go = ({
  content: e,
  placement: t = "top",
  delay: r = 100,
  className: a,
  children: o,
  ...l
}) => {
  const [i, d] = P(!1), [c, x] = P(null), b = () => {
    const g = setTimeout(() => d(!0), r);
    x(g);
  }, m = () => {
    c && clearTimeout(c), d(!1);
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "relative inline-flex items-center",
      onMouseEnter: b,
      onMouseLeave: m,
      onFocus: b,
      onBlur: m,
      ...l,
      children: [
        o,
        i && /* @__PURE__ */ s.jsxs(
          "div",
          {
            role: "tooltip",
            className: u(
              "absolute z-50 px-2.5 py-1 text-xs font-medium text-white bg-slate-900 rounded-md shadow-md whitespace-nowrap pointer-events-none transition-all duration-150 animate-in fade-in zoom-in-95",
              At[t].tooltip,
              a
            ),
            children: [
              e,
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: u("absolute border-4", At[t].arrow)
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Za = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2.5",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2.5",
  left: "right-full top-1/2 -translate-y-1/2 mr-2.5",
  right: "left-full top-1/2 -translate-y-1/2 ml-2.5"
}, Bo = ({
  title: e,
  content: t,
  placement: r = "top",
  className: a,
  children: o,
  ...l
}) => {
  const [i, d] = P(!1), c = Ye(null);
  return ee(() => {
    const x = (b) => {
      c.current && !c.current.contains(b.target) && d(!1);
    };
    return i && document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [i]), /* @__PURE__ */ s.jsxs("div", { ref: c, className: "relative inline-block", ...l, children: [
    /* @__PURE__ */ s.jsx("div", { onClick: () => d(!i), className: "cursor-pointer inline-block", children: o }),
    i && /* @__PURE__ */ s.jsxs(
      "div",
      {
        role: "dialog",
        className: u(
          "absolute z-50 w-64 max-w-xs bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-in fade-in zoom-in-95 duration-150",
          Za[r],
          a
        ),
        children: [
          e && /* @__PURE__ */ s.jsx("div", { className: "px-3.5 py-2 bg-slate-50 dark:bg-slate-750 border-b border-slate-100 dark:border-slate-700 font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100", children: e }),
          /* @__PURE__ */ s.jsx("div", { className: "p-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed", children: t })
        ]
      }
    )
  ] });
}, Qa = {
  xs: "h-2",
  sm: "h-3",
  md: "h-4",
  lg: "h-6"
}, eo = {
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
}, Vo = ({
  animation: e = "glow",
  size: t = "md",
  col: r = 12,
  className: a,
  ...o
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: u(
      "rounded bg-slate-200 dark:bg-slate-700 inline-block align-middle",
      Qa[t],
      eo[r],
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
}, Ht = ({
  color: e = "blue",
  dot: t,
  label: r,
  pending: a = !1,
  className: o,
  children: l,
  ...i
}) => {
  const d = Ot[e] || Ot.blue;
  return /* @__PURE__ */ s.jsxs("div", { className: u("relative pl-8 sm:pl-9 pb-8 last:pb-0 group", o), ...i, children: [
    /* @__PURE__ */ s.jsx("div", { className: "absolute left-[11px] sm:left-[13px] top-3 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-700 group-last:hidden" }),
    /* @__PURE__ */ s.jsx("div", { className: "absolute left-0 top-1 flex items-center justify-center", children: t ? /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-center text-xs bg-white dark:bg-slate-900 z-10", children: t }) : /* @__PURE__ */ s.jsx(
      "div",
      {
        className: u(
          "w-6 h-6 rounded-full flex items-center justify-center ring-4 transition-all z-10",
          d.ring,
          a && "animate-pulse"
        ),
        children: /* @__PURE__ */ s.jsx("div", { className: u("w-2.5 h-2.5 rounded-full", d.dot) })
      }
    ) }),
    /* @__PURE__ */ s.jsxs("div", { className: "text-sm", children: [
      r && /* @__PURE__ */ s.jsx("div", { className: "text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1", children: r }),
      /* @__PURE__ */ s.jsx("div", { className: "text-slate-700 dark:text-slate-200 leading-relaxed", children: l })
    ] })
  ] });
}, to = ({
  pending: e,
  reverse: t = !1,
  className: r,
  children: a,
  ...o
}) => {
  const l = L.Children.toArray(a), i = t ? [...l].reverse() : l;
  return /* @__PURE__ */ s.jsxs("div", { className: u("relative py-2", r), ...o, children: [
    i,
    e && /* @__PURE__ */ s.jsx(Ht, { color: "gray", pending: !0, children: typeof e == "boolean" ? "Memuat langkah berikutnya..." : e })
  ] });
};
to.Item = Ht;
const Wo = ({
  current: e = 0,
  items: t,
  onChange: r,
  direction: a = "horizontal",
  responsive: o = !0,
  className: l,
  ...i
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: u(
      "w-full flex",
      a === "vertical" ? "flex-col space-y-6" : o ? "flex-col sm:flex-row gap-4 sm:gap-0" : "flex-row",
      l
    ),
    ...i,
    children: t.map((d, c) => {
      const x = !!(r && !d.disabled), b = d.status || (c < e ? "finish" : c === e ? "process" : "wait"), m = c === t.length - 1;
      return /* @__PURE__ */ s.jsxs(
        "div",
        {
          onClick: () => x && r && r(c),
          className: u(
            "flex-1 flex sm:items-center relative group",
            a === "vertical" ? "items-start" : "",
            x && "cursor-pointer"
          ),
          children: [
            /* @__PURE__ */ s.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ s.jsx(
              "div",
              {
                className: u(
                  "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 z-10 shrink-0 select-none",
                  b === "finish" && "bg-blue-600 text-white shadow-sm",
                  b === "process" && "border-2 border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 font-extrabold ring-4 ring-blue-100 dark:ring-blue-900/30",
                  b === "wait" && "border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400",
                  b === "error" && "border-2 border-red-500 bg-red-50 text-red-600 dark:bg-red-950/40 ring-4 ring-red-100 dark:ring-red-900/30"
                ),
                children: d.icon ? d.icon : b === "finish" ? /* @__PURE__ */ s.jsx(Wt, { className: "w-4 h-4 stroke-[3]" }) : b === "error" ? /* @__PURE__ */ s.jsx(Je, { className: "w-4 h-4" }) : c + 1
              }
            ) }),
            /* @__PURE__ */ s.jsxs("div", { className: "ml-3 sm:mr-3 min-w-0", children: [
              /* @__PURE__ */ s.jsx(
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
              d.description && /* @__PURE__ */ s.jsx("div", { className: "text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 mt-0.5 line-clamp-1", children: d.description })
            ] }),
            !m && a !== "vertical" && /* @__PURE__ */ s.jsx(
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
), Ko = ({
  title: e,
  value: t,
  prefix: r,
  suffix: a,
  trend: o,
  trendValue: l,
  precision: i,
  className: d,
  ...c
}) => {
  const x = typeof t == "number" && i !== void 0 ? t.toFixed(i) : t;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: u(
        "p-3.5 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm min-w-0 w-full overflow-hidden flex flex-col justify-between",
        d
      ),
      ...c,
      children: [
        e && /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between gap-1.5 min-w-0 mb-2", children: [
          /* @__PURE__ */ s.jsx(
            "span",
            {
              className: "text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 truncate min-w-0 flex-1",
              title: typeof e == "string" ? e : void 0,
              children: e
            }
          ),
          o && /* @__PURE__ */ s.jsxs(
            "span",
            {
              className: u(
                "inline-flex items-center text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full shrink-0 whitespace-nowrap",
                o === "up" && "text-emerald-700 bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300",
                o === "down" && "text-red-700 bg-red-100 dark:bg-red-950/60 dark:text-red-300",
                o === "neutral" && "text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-400"
              ),
              children: [
                o === "up" && /* @__PURE__ */ s.jsx(ys, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 mr-0.5" }),
                o === "down" && /* @__PURE__ */ s.jsx(ws, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 mr-0.5" }),
                l || (o === "up" ? "+12.5%" : o === "down" ? "-4.2%" : "0%")
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-baseline flex-wrap gap-x-1.5 gap-y-0.5 font-bold tracking-tight text-slate-900 dark:text-white min-w-0", children: [
          r && /* @__PURE__ */ s.jsx("span", { className: "text-sm sm:text-base md:text-lg font-medium text-slate-500 dark:text-slate-400 shrink-0", children: r }),
          /* @__PURE__ */ s.jsx("span", { className: "text-xl sm:text-2xl lg:text-3xl font-extrabold truncate max-w-full", children: x }),
          a && /* @__PURE__ */ s.jsx("span", { className: "text-xs sm:text-sm font-semibold text-slate-400 shrink-0", children: a })
        ] })
      ]
    }
  );
}, Uo = ({
  count: e = 5,
  value: t,
  defaultValue: r = 0,
  onChange: a,
  disabled: o = !1,
  tooltips: l,
  character: i,
  className: d,
  ...c
}) => {
  const [x, b] = P(r), [m, g] = P(null), y = t !== void 0, v = m !== null ? m : y ? t : x, j = (k) => {
    o || (y || b(k), a && a(k));
  }, w = Array.from({ length: e }, (k, p) => p + 1);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      role: "radiogroup",
      "aria-label": "Rating",
      className: u("inline-flex items-center gap-1.5 select-none", d),
      onMouseLeave: () => !o && g(null),
      ...c,
      children: [
        w.map((k) => {
          const p = k <= v;
          return /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              disabled: o,
              onClick: () => j(k),
              onMouseEnter: () => !o && g(k),
              className: u(
                "p-0.5 rounded transition-transform duration-100 focus:outline-none",
                !o && "hover:scale-125 cursor-pointer",
                o && "cursor-default"
              ),
              title: l && l[k - 1] ? l[k - 1] : `${k} Bintang`,
              children: i ? /* @__PURE__ */ s.jsx("span", { className: u("text-xl", p ? "text-amber-400" : "text-slate-300 dark:text-slate-700"), children: i }) : /* @__PURE__ */ s.jsx(
                Ks,
                {
                  className: u(
                    "w-5 h-5 transition-colors duration-150",
                    p ? "fill-amber-400 text-amber-400 filter drop-shadow-[0_1px_4px_rgba(251,191,36,0.5)]" : "fill-transparent text-slate-300 dark:text-slate-600"
                  )
                }
              )
            },
            k
          );
        }),
        l && v > 0 && /* @__PURE__ */ s.jsx("span", { className: "ml-2 text-xs font-semibold text-slate-600 dark:text-slate-300", children: l[v - 1] })
      ]
    }
  );
}, ro = {
  sm: "w-7 h-7 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-xl"
}, so = {
  online: "bg-emerald-500",
  offline: "bg-slate-400",
  busy: "bg-red-500",
  away: "bg-amber-400"
}, ao = ({
  max: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = L.Children.toArray(r), l = e ? o.slice(0, e) : o, i = e && o.length > e ? o.length - e : 0;
  return /* @__PURE__ */ s.jsxs("div", { className: u("flex items-center -space-x-2.5 overflow-hidden", t), ...a, children: [
    l.map((d, c) => /* @__PURE__ */ s.jsx("div", { className: "ring-2 ring-white dark:ring-slate-900 rounded-full", children: d }, c)),
    i > 0 && /* @__PURE__ */ s.jsxs("div", { className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs font-bold ring-2 ring-white dark:ring-slate-900 z-10", children: [
      "+",
      i
    ] })
  ] });
}, oo = ({
  src: e,
  alt: t = "Avatar",
  name: r,
  icon: a,
  shape: o = "circle",
  size: l = "md",
  status: i,
  className: d,
  children: c,
  ...x
}) => {
  const b = r ? r.split(" ").filter(Boolean).map((m) => m[0]).join("").substring(0, 2).toUpperCase() : null;
  return /* @__PURE__ */ s.jsxs("div", { className: "relative inline-block select-none", children: [
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: u(
          "flex items-center justify-center font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 overflow-hidden shadow-sm",
          o === "circle" ? "rounded-full" : "rounded-xl",
          ro[l],
          d
        ),
        ...x,
        children: e ? /* @__PURE__ */ s.jsx("img", { src: e, alt: t, className: "w-full h-full object-cover" }) : a ? /* @__PURE__ */ s.jsx("span", { className: "flex items-center justify-center", children: a }) : b ? /* @__PURE__ */ s.jsx("span", { children: b }) : c
      }
    ),
    i && /* @__PURE__ */ s.jsx(
      "span",
      {
        className: u(
          "absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-white dark:ring-slate-900",
          so[i]
        )
      }
    )
  ] });
};
oo.Group = ao;
const Yo = ({
  image: e,
  description: t = "Tidak ada data ditemukan",
  action: r,
  className: a,
  ...o
}) => /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: u(
      "flex flex-col items-center justify-center p-8 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 my-4",
      a
    ),
    ...o,
    children: [
      /* @__PURE__ */ s.jsx("div", { className: "mb-3 text-slate-300 dark:text-slate-600", children: e || /* @__PURE__ */ s.jsx("div", { className: "w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400", children: /* @__PURE__ */ s.jsx(Gs, { className: "w-8 h-8 stroke-[1.5]" }) }) }),
      /* @__PURE__ */ s.jsx("div", { className: "text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 max-w-sm", children: t }),
      r && /* @__PURE__ */ s.jsx("div", { children: r })
    ]
  }
), Mt = {
  success: {
    icon: /* @__PURE__ */ s.jsx(Ze, { className: "w-16 h-16 text-emerald-500 mx-auto" }),
    color: "text-emerald-600"
  },
  error: {
    icon: /* @__PURE__ */ s.jsx(Rt, { className: "w-16 h-16 text-red-500 mx-auto" }),
    color: "text-red-600"
  },
  warning: {
    icon: /* @__PURE__ */ s.jsx(Ie, { className: "w-16 h-16 text-amber-500 mx-auto" }),
    color: "text-amber-600"
  },
  info: {
    icon: /* @__PURE__ */ s.jsx(U, { className: "w-16 h-16 text-blue-500 mx-auto" }),
    color: "text-blue-600"
  },
  404: {
    icon: /* @__PURE__ */ s.jsx(Ms, { className: "w-16 h-16 text-slate-400 mx-auto" }),
    color: "text-slate-700"
  },
  403: {
    icon: /* @__PURE__ */ s.jsx(Ie, { className: "w-16 h-16 text-amber-500 mx-auto" }),
    color: "text-amber-700"
  },
  500: {
    icon: /* @__PURE__ */ s.jsx(Rt, { className: "w-16 h-16 text-red-500 mx-auto" }),
    color: "text-red-700"
  }
}, Ho = ({
  status: e = "info",
  title: t,
  subTitle: r,
  extra: a,
  icon: o,
  className: l,
  ...i
}) => {
  const d = Mt[e] || Mt.info;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: u(
        "text-center py-10 px-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm max-w-xl mx-auto my-6",
        l
      ),
      ...i,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "mb-4", children: o || d.icon }),
        /* @__PURE__ */ s.jsx("h2", { className: "text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight", children: t }),
        r && /* @__PURE__ */ s.jsx("p", { className: "text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto leading-relaxed", children: r }),
        a && /* @__PURE__ */ s.jsx("div", { className: "flex flex-wrap items-center justify-center gap-3", children: a })
      ]
    }
  );
}, no = {
  sm: "text-xs p-0.5",
  md: "text-xs sm:text-sm p-1",
  lg: "text-sm sm:text-base p-1.5"
}, lo = {
  sm: "px-2.5 py-1",
  md: "px-3.5 py-1.5",
  lg: "px-5 py-2"
}, qo = ({
  options: e,
  value: t,
  defaultValue: r,
  onChange: a,
  block: o = !1,
  size: l = "md",
  disabled: i = !1,
  className: d,
  ...c
}) => {
  var j;
  const x = e.map(
    (w) => typeof w == "string" ? { label: w, value: w } : w
  ), [b, m] = P(
    r || ((j = x[0]) == null ? void 0 : j.value) || ""
  ), g = t !== void 0, y = g ? t : b, v = (w, k) => {
    i || k || (g || m(w), a && a(w));
  };
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      role: "radiogroup",
      className: u(
        "inline-flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 select-none shadow-inner",
        o ? "w-full flex" : "",
        no[l],
        d
      ),
      ...c,
      children: x.map((w) => {
        const k = w.value === y, p = i || w.disabled;
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": k,
            disabled: p,
            onClick: () => v(w.value, p),
            className: u(
              "inline-flex items-center justify-center gap-1.5 font-medium rounded-lg transition-all duration-200 focus:outline-none",
              o ? "flex-1" : "",
              lo[l],
              k ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold" : "hover:text-slate-900 dark:hover:text-white",
              p && "opacity-40 cursor-not-allowed pointer-events-none"
            ),
            children: [
              w.icon && /* @__PURE__ */ s.jsx("span", { className: "w-4 h-4 shrink-0", children: w.icon }),
              /* @__PURE__ */ s.jsx("span", { children: w.label })
            ]
          },
          w.value
        );
      })
    }
  );
}, Xo = ({
  dashed: e = !1,
  orientation: t = "center",
  plain: r = !1,
  className: a,
  children: o,
  ...l
}) => o ? /* @__PURE__ */ s.jsxs(
  "div",
  {
    role: "separator",
    className: u("my-6 flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 select-none", a),
    ...l,
    children: [
      /* @__PURE__ */ s.jsx(
        "div",
        {
          className: u(
            "border-slate-200 dark:border-slate-800",
            e ? "border-dashed" : "border-solid",
            t === "left" ? "w-6" : "flex-grow border-t"
          )
        }
      ),
      /* @__PURE__ */ s.jsx(
        "span",
        {
          className: u(
            "px-3 whitespace-nowrap",
            r ? "font-normal" : "font-semibold text-slate-700 dark:text-slate-300"
          ),
          children: o
        }
      ),
      /* @__PURE__ */ s.jsx(
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
) : /* @__PURE__ */ s.jsx(
  "hr",
  {
    className: u(
      "my-6 border-slate-200 dark:border-slate-800",
      e ? "border-dashed" : "border-solid",
      a
    ),
    ...l
  }
), Pt = {
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
}, Jo = ({
  color: e = "blue",
  closable: t = !1,
  onClose: r,
  checkable: a = !1,
  checked: o = !1,
  icon: l,
  bordered: i = !0,
  className: d,
  children: c,
  ...x
}) => {
  const [b, m] = L.useState(!0), g = Pt[e] || Pt.blue;
  if (!b) return null;
  const y = (v) => {
    v.stopPropagation(), m(!1), r && r();
  };
  return /* @__PURE__ */ s.jsxs(
    "span",
    {
      className: u(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium select-none transition-all align-middle",
        g.bg,
        g.text,
        i && `border ${g.border}`,
        a && "cursor-pointer hover:opacity-80 active:scale-95",
        a && o && "ring-2 ring-blue-500 font-bold",
        d
      ),
      ...x,
      children: [
        l && /* @__PURE__ */ s.jsx("span", { className: "inline-flex shrink-0", children: l }),
        /* @__PURE__ */ s.jsx("span", { children: c }),
        t && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: y,
            "aria-label": "Close tag",
            className: "ml-0.5 p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors focus:outline-none",
            children: /* @__PURE__ */ s.jsx(te, { className: "w-3 h-3" })
          }
        )
      ]
    }
  );
}, Pe = ue(null), io = ({
  className: e,
  children: t,
  ...r
}) => {
  const [a, o] = P(""), [l, i] = P({}), d = (m, g) => {
    i((y) => ({ ...y, [m]: g.toLowerCase() }));
  }, c = (m) => {
    i((g) => {
      const y = { ...g };
      return delete y[m], y;
    });
  }, x = (m) => a.trim() ? m.toLowerCase().includes(a.toLowerCase().trim()) : !0, b = Object.values(l).filter((m) => x(m)).length;
  return /* @__PURE__ */ s.jsx(
    Pe.Provider,
    {
      value: {
        search: a,
        setSearch: o,
        filteredCount: b,
        registerItem: d,
        unregisterItem: c,
        isItemVisible: x
      },
      children: /* @__PURE__ */ s.jsx(
        "div",
        {
          className: u(
            "flex flex-col w-full h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 overflow-hidden shadow-lg",
            e
          ),
          ...r,
          children: t
        }
      )
    }
  );
}, co = ({
  className: e,
  placeholder: t = "Ketik perintah atau cari fitur...",
  value: r,
  onValueChange: a,
  ...o
}) => {
  const l = G(Pe), i = r !== void 0 ? r : (l == null ? void 0 : l.search) || "", d = (x) => {
    const b = x.target.value;
    l == null || l.setSearch(b), a == null || a(b);
  }, c = () => {
    l == null || l.setSearch(""), a == null || a("");
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "flex items-center px-3.5 border-b border-slate-200 dark:border-slate-800", children: [
    /* @__PURE__ */ s.jsx(Vs, { className: "w-4 h-4 mr-2.5 text-slate-400 shrink-0" }),
    /* @__PURE__ */ s.jsx(
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
    i && /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        onClick: c,
        className: "p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors",
        children: /* @__PURE__ */ s.jsx(te, { className: "w-3.5 h-3.5" })
      }
    )
  ] });
}, uo = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: u("max-h-[300px] overflow-y-auto p-2 space-y-1 custom-scrollbar", e),
    ...r,
    children: t
  }
), bo = ({
  className: e,
  children: t = "Tidak ada hasil perintah ditemukan.",
  ...r
}) => {
  const a = G(Pe);
  return !a || a.filteredCount > 0 ? null : /* @__PURE__ */ s.jsx(
    "div",
    {
      className: u("py-8 text-center text-xs sm:text-sm text-slate-400 dark:text-slate-500", e),
      ...r,
      children: t
    }
  );
}, xo = ({
  heading: e,
  className: t,
  children: r,
  ...a
}) => /* @__PURE__ */ s.jsxs("div", { className: u("py-1.5", t), ...a, children: [
  /* @__PURE__ */ s.jsx("div", { className: "px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 select-none", children: e }),
  /* @__PURE__ */ s.jsx("div", { className: "space-y-0.5", children: r })
] }), fo = ({
  value: e,
  disabled: t = !1,
  onSelect: r,
  className: a,
  children: o,
  ...l
}) => {
  const i = G(Pe), d = L.useId(), c = e || (typeof o == "string" ? o : String(d));
  return ee(() => (i == null || i.registerItem(d, c), () => i == null ? void 0 : i.unregisterItem(d)), [d, c]), (i ? i.isItemVisible(c) : !0) ? /* @__PURE__ */ s.jsx(
    "div",
    {
      role: "button",
      tabIndex: t ? -1 : 0,
      "aria-disabled": t,
      onClick: () => !t && (r == null ? void 0 : r()),
      onKeyDown: (b) => {
        !t && (b.key === "Enter" || b.key === " ") && (b.preventDefault(), r == null || r());
      },
      className: u(
        "flex items-center justify-between px-2.5 py-2 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer select-none",
        t ? "opacity-40 cursor-not-allowed" : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 active:bg-blue-50 dark:active:bg-blue-950/40",
        a
      ),
      ...l,
      children: o
    }
  ) : null;
}, mo = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ s.jsx(
  "span",
  {
    className: u(
      "ml-auto text-[10px] sm:text-xs tracking-widest text-slate-400 dark:text-slate-500 font-mono inline-flex items-center gap-1",
      e
    ),
    ...r,
    children: t
  }
), po = ({
  className: e,
  ...t
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: u("h-px bg-slate-200 dark:bg-slate-800 my-1 mx-2", e),
    ...t
  }
), go = ({
  open: e,
  onOpenChange: t,
  children: r
}) => (ee(() => {
  const a = (o) => {
    (o.metaKey || o.ctrlKey) && o.key.toLowerCase() === "k" && (o.preventDefault(), t(!e)), o.key === "Escape" && e && t(!1);
  };
  return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
}, [e, t]), e ? /* @__PURE__ */ s.jsxs("div", { className: "fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200", children: [
  /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "fixed inset-0",
      onClick: () => t(!1),
      "aria-hidden": "true"
    }
  ),
  /* @__PURE__ */ s.jsx("div", { className: "relative w-full max-w-lg z-10 shadow-2xl", children: r })
] }) : null), re = io;
re.Input = co;
re.List = uo;
re.Empty = bo;
re.Group = xo;
re.Item = fo;
re.Shortcut = mo;
re.Separator = po;
re.Dialog = go;
const ho = {
  sm: "text-[10px] min-w-[18px] h-4 px-1",
  md: "text-xs min-w-[22px] h-5 px-1.5",
  lg: "text-sm min-w-[26px] h-6 px-2"
}, Zo = ({
  size: e = "md",
  className: t,
  children: r,
  ...a
}) => /* @__PURE__ */ s.jsx(
  "kbd",
  {
    className: u(
      "inline-flex items-center justify-center font-mono font-medium rounded border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-b-2 shadow-xs select-none",
      ho[e],
      t
    ),
    ...a,
    children: r
  }
), Qo = ({
  ratio: e = 16 / 9,
  className: t,
  children: r,
  style: a,
  ...o
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: u("relative w-full overflow-hidden rounded-xl", t),
    style: {
      paddingBottom: `${1 / e * 100}%`,
      ...a
    },
    ...o,
    children: /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 w-full h-full [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>video]:w-full [&>video]:h-full [&>video]:object-cover", children: r })
  }
), wo = ({
  pressed: e,
  defaultPressed: t = !1,
  onPressedChange: r,
  variant: a = "default",
  size: o = "md",
  disabled: l,
  className: i,
  children: d,
  onClick: c,
  ...x
}) => {
  const [b, m] = P(t), g = e !== void 0, y = g ? e : b, v = (k) => {
    if (l) return;
    const p = !y;
    g || m(p), r == null || r(p), c == null || c(k);
  }, j = {
    sm: "h-8 px-2 text-xs gap-1",
    md: "h-9 px-2.5 sm:px-3 text-sm gap-1.5",
    lg: "h-10 px-3.5 text-base gap-2"
  }, w = {
    default: y ? "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white shadow-inner font-semibold" : "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300",
    outline: y ? "border border-blue-600 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold" : "border border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
  };
  return /* @__PURE__ */ s.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": y,
      disabled: l,
      onClick: v,
      className: u(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none select-none",
        j[o],
        w[a],
        i
      ),
      ...x,
      children: d
    }
  );
}, qt = ue(null), vo = ({
  value: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = G(qt);
  if (!o) return null;
  const l = Array.isArray(o.value) ? o.value.includes(e) : o.value === e;
  return /* @__PURE__ */ s.jsx(
    wo,
    {
      pressed: l,
      onPressedChange: () => o.onItemClick(e),
      variant: o.variant,
      size: o.size,
      className: t,
      ...a,
      children: r
    }
  );
}, yo = ({
  type: e = "single",
  value: t,
  defaultValue: r,
  onValueChange: a,
  variant: o = "default",
  size: l = "md",
  className: i,
  children: d,
  ...c
}) => {
  const [x, b] = P(
    r || (e === "multiple" ? [] : "")
  ), m = t !== void 0, g = m ? t : x, y = (v) => {
    let j;
    if (e === "single")
      j = g === v ? "" : v;
    else {
      const w = Array.isArray(g) ? [...g] : [];
      w.includes(v) ? j = w.filter((k) => k !== v) : j = [...w, v];
    }
    m || b(j), a == null || a(j);
  };
  return /* @__PURE__ */ s.jsx(
    qt.Provider,
    {
      value: {
        value: g,
        onItemClick: y,
        type: e,
        variant: o,
        size: l
      },
      children: /* @__PURE__ */ s.jsx("div", { className: u("inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800", i), ...c, children: d })
    }
  );
};
yo.Item = vo;
const en = ({
  title: e,
  description: t,
  children: r,
  code: a,
  className: o
}) => {
  const [l, i] = P(!1), d = async () => {
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
  return /* @__PURE__ */ s.jsxs("div", { className: u("mb-8 last:mb-0", o), children: [
    e && /* @__PURE__ */ s.jsx("h3", { className: "text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2", children: e }),
    t && /* @__PURE__ */ s.jsx("div", { className: "text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 leading-relaxed", children: t }),
    /* @__PURE__ */ s.jsxs("div", { className: "rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm", children: [
      /* @__PURE__ */ s.jsx("div", { className: "p-4 sm:p-6 bg-white dark:bg-slate-900 overflow-x-auto custom-scrollbar", children: r }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-slate-800 text-slate-300 border-t border-slate-700/80 text-xs", children: [
        /* @__PURE__ */ s.jsxs("span", { className: "font-mono flex items-center gap-1.5 text-slate-400", children: [
          /* @__PURE__ */ s.jsx(Ts, { className: "w-3.5 h-3.5 text-blue-400" }),
          "JSX"
        ] }),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: d,
            className: u(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500",
              l ? "bg-emerald-600 text-white font-bold" : "bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white"
            ),
            title: "Salin kode ke clipboard",
            children: l ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx(Wt, { className: "w-3.5 h-3.5 text-white" }),
              /* @__PURE__ */ s.jsx("span", { children: "Tersalin!" })
            ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx(As, { className: "w-3.5 h-3.5 text-slate-300" }),
              /* @__PURE__ */ s.jsx("span", { children: "Salin Kode" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "bg-slate-950 p-4 overflow-x-auto custom-scrollbar", children: /* @__PURE__ */ s.jsx("pre", { className: "font-mono text-xs text-slate-200 leading-relaxed m-0 whitespace-pre", children: /* @__PURE__ */ s.jsx("code", { children: a.trim() }) }) })
    ] })
  ] });
};
export {
  st as Accordion,
  Sa as AccordionBody,
  Ea as AccordionHeader,
  Ra as AccordionItem,
  Ut as Alert,
  Qs as AlertHeading,
  ea as AlertLink,
  Qo as AspectRatio,
  oo as Avatar,
  ao as AvatarGroup,
  Eo as Badge,
  ha as Breadcrumb,
  ga as BreadcrumbItem,
  Xs as Button,
  _o as ButtonGroup,
  oe as Card,
  sa as CardBody,
  la as CardFooter,
  ra as CardHeader,
  ia as CardImg,
  oa as CardSubtitle,
  na as CardText,
  aa as CardTitle,
  Do as Carousel,
  Ro as CloseButton,
  en as CodePreview,
  Co as Col,
  re as Command,
  go as CommandDialog,
  bo as CommandEmpty,
  xo as CommandGroup,
  co as CommandInput,
  fo as CommandItem,
  uo as CommandList,
  io as CommandRoot,
  po as CommandSeparator,
  mo as CommandShortcut,
  jo as Container,
  Xo as Divider,
  ke as Dropdown,
  Oa as DropdownDivider,
  Ma as DropdownHeader,
  Aa as DropdownItem,
  Ia as DropdownMenu,
  Ta as DropdownToggle,
  Yo as Empty,
  Ao as FloatingLabel,
  Fa as FormCheck,
  za as FormControl,
  To as FormGroup,
  Io as FormLabel,
  Oo as FormRange,
  La as FormSelect,
  Da as FormSwitch,
  Ba as InputGroup,
  Ga as InputGroupText,
  Zo as Kbd,
  Ja as ListGroup,
  Xa as ListGroupItem,
  Ae as Modal,
  ka as ModalBody,
  ja as ModalFooter,
  va as ModalHeader,
  ya as ModalTitle,
  Yt as Nav,
  pa as NavItem,
  ma as NavLink,
  et as Navbar,
  ba as NavbarBrand,
  fa as NavbarCollapse,
  xa as NavbarToggle,
  tt as Offcanvas,
  _a as OffcanvasBody,
  Na as OffcanvasHeader,
  Ca as OffcanvasTitle,
  So as Pagination,
  Vo as Placeholder,
  Bo as Popover,
  Po as ProgressBar,
  Uo as Rate,
  Ho as Result,
  No as Row,
  qo as Segmented,
  zo as Spinner,
  Ko as Statistic,
  Wo as Steps,
  Ka as Tab,
  Mo as Table,
  Ua as Tabs,
  Jo as Tag,
  to as Timeline,
  Ht as TimelineItem,
  $o as Toast,
  Lo as ToastContainer,
  wo as Toggle,
  yo as ToggleGroup,
  vo as ToggleGroupItem,
  Go as Tooltip,
  Fo as useToast
};
