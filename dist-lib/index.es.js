import F, { forwardRef as Et, createElement as Ge, useState as L, createContext as Te, useContext as Y, useEffect as ie, useRef as We, useCallback as pt } from "react";
var Ee = { exports: {} }, pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function xr() {
  if (gt) return pe;
  gt = 1;
  var e = F, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(d, c, b) {
    var x, g = {}, h = null, k = null;
    b !== void 0 && (h = "" + b), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (k = c.ref);
    for (x in c) o.call(c, x) && !l.hasOwnProperty(x) && (g[x] = c[x]);
    if (d && d.defaultProps) for (x in c = d.defaultProps, c) g[x] === void 0 && (g[x] = c[x]);
    return { $$typeof: t, type: d, key: h, ref: k, props: g, _owner: n.current };
  }
  return pe.Fragment = r, pe.jsx = i, pe.jsxs = i, pe;
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
var ht;
function mr() {
  return ht || (ht = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = F, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), v = Symbol.iterator, C = "@@iterator";
    function j(s) {
      if (s === null || typeof s != "object")
        return null;
      var f = v && s[v] || s[C];
      return typeof f == "function" ? f : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(s) {
      {
        for (var f = arguments.length, m = new Array(f > 1 ? f - 1 : 0), w = 1; w < f; w++)
          m[w - 1] = arguments[w];
        O("error", s, m);
      }
    }
    function O(s, f, m) {
      {
        var w = R.ReactDebugCurrentFrame, E = w.getStackAddendum();
        E !== "" && (f += "%s", m = m.concat([E]));
        var S = m.map(function(_) {
          return String(_);
        });
        S.unshift("Warning: " + f), Function.prototype.apply.call(console[s], console, S);
      }
    }
    var M = !1, U = !1, q = !1, ye = !1, ke = !1, se;
    se = Symbol.for("react.module.reference");
    function ue(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === o || s === l || ke || s === n || s === b || s === x || ye || s === k || M || U || q || typeof s == "object" && s !== null && (s.$$typeof === h || s.$$typeof === g || s.$$typeof === i || s.$$typeof === d || s.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === se || s.getModuleId !== void 0));
    }
    function fe(s, f, m) {
      var w = s.displayName;
      if (w)
        return w;
      var E = f.displayName || f.name || "";
      return E !== "" ? m + "(" + E + ")" : m;
    }
    function T(s) {
      return s.displayName || "Context";
    }
    function W(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case l:
          return "Profiler";
        case n:
          return "StrictMode";
        case b:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case d:
            var f = s;
            return T(f) + ".Consumer";
          case i:
            var m = s;
            return T(m._context) + ".Provider";
          case c:
            return fe(s, s.render, "ForwardRef");
          case g:
            var w = s.displayName || null;
            return w !== null ? w : W(s.type) || "Memo";
          case h: {
            var E = s, S = E._payload, _ = E._init;
            try {
              return W(_(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, J = 0, ee, be, oe, X, xe, G, Qe;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function Bt() {
      {
        if (J === 0) {
          ee = console.log, be = console.info, oe = console.warn, X = console.error, xe = console.group, G = console.groupCollapsed, Qe = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: et,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        J++;
      }
    }
    function Gt() {
      {
        if (J--, J === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, s, {
              value: ee
            }),
            info: B({}, s, {
              value: be
            }),
            warn: B({}, s, {
              value: oe
            }),
            error: B({}, s, {
              value: X
            }),
            group: B({}, s, {
              value: xe
            }),
            groupCollapsed: B({}, s, {
              value: G
            }),
            groupEnd: B({}, s, {
              value: Qe
            })
          });
        }
        J < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ae = R.ReactCurrentDispatcher, Pe;
    function je(s, f, m) {
      {
        if (Pe === void 0)
          try {
            throw Error();
          } catch (E) {
            var w = E.stack.trim().match(/\n( *(at )?)/);
            Pe = w && w[1] || "";
          }
        return `
` + Pe + s;
      }
    }
    var Me = !1, Ne;
    {
      var Vt = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new Vt();
    }
    function tt(s, f) {
      if (!s || Me)
        return "";
      {
        var m = Ne.get(s);
        if (m !== void 0)
          return m;
      }
      var w;
      Me = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = Ae.current, Ae.current = null, Bt();
      try {
        if (f) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (z) {
              w = z;
            }
            Reflect.construct(s, [], _);
          } else {
            try {
              _.call();
            } catch (z) {
              w = z;
            }
            s.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            w = z;
          }
          s();
        }
      } catch (z) {
        if (z && w && typeof z.stack == "string") {
          for (var N = z.stack.split(`
`), $ = w.stack.split(`
`), A = N.length - 1, P = $.length - 1; A >= 1 && P >= 0 && N[A] !== $[P]; )
            P--;
          for (; A >= 1 && P >= 0; A--, P--)
            if (N[A] !== $[P]) {
              if (A !== 1 || P !== 1)
                do
                  if (A--, P--, P < 0 || N[A] !== $[P]) {
                    var V = `
` + N[A].replace(" at new ", " at ");
                    return s.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", s.displayName)), typeof s == "function" && Ne.set(s, V), V;
                  }
                while (A >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        Me = !1, Ae.current = S, Gt(), Error.prepareStackTrace = E;
      }
      var ne = s ? s.displayName || s.name : "", te = ne ? je(ne) : "";
      return typeof s == "function" && Ne.set(s, te), te;
    }
    function Wt(s, f, m) {
      return tt(s, !1);
    }
    function Kt(s) {
      var f = s.prototype;
      return !!(f && f.isReactComponent);
    }
    function Ce(s, f, m) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return tt(s, Kt(s));
      if (typeof s == "string")
        return je(s);
      switch (s) {
        case b:
          return je("Suspense");
        case x:
          return je("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            return Wt(s.render);
          case g:
            return Ce(s.type, f, m);
          case h: {
            var w = s, E = w._payload, S = w._init;
            try {
              return Ce(S(E), f, m);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, rt = {}, st = R.ReactDebugCurrentFrame;
    function _e(s) {
      if (s) {
        var f = s._owner, m = Ce(s.type, s._source, f ? f.type : null);
        st.setExtraStackFrame(m);
      } else
        st.setExtraStackFrame(null);
    }
    function Yt(s, f, m, w, E) {
      {
        var S = Function.call.bind(me);
        for (var _ in s)
          if (S(s, _)) {
            var N = void 0;
            try {
              if (typeof s[_] != "function") {
                var $ = Error((w || "React class") + ": " + m + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              N = s[_](f, _, w, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              N = A;
            }
            N && !(N instanceof Error) && (_e(E), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", m, _, typeof N), _e(null)), N instanceof Error && !(N.message in rt) && (rt[N.message] = !0, _e(E), p("Failed %s type: %s", m, N.message), _e(null));
          }
      }
    }
    var Ut = Array.isArray;
    function $e(s) {
      return Ut(s);
    }
    function Ht(s) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, m = f && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return m;
      }
    }
    function qt(s) {
      try {
        return ot(s), !1;
      } catch {
        return !0;
      }
    }
    function ot(s) {
      return "" + s;
    }
    function at(s) {
      if (qt(s))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ht(s)), ot(s);
    }
    var nt = R.ReactCurrentOwner, Jt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, it;
    function Xt(s) {
      if (me.call(s, "ref")) {
        var f = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Zt(s) {
      if (me.call(s, "key")) {
        var f = Object.getOwnPropertyDescriptor(s, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Qt(s, f) {
      typeof s.ref == "string" && nt.current;
    }
    function er(s, f) {
      {
        var m = function() {
          lt || (lt = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function tr(s, f) {
      {
        var m = function() {
          it || (it = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var rr = function(s, f, m, w, E, S, _) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: f,
        ref: m,
        props: _,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function sr(s, f, m, w, E) {
      {
        var S, _ = {}, N = null, $ = null;
        m !== void 0 && (at(m), N = "" + m), Zt(f) && (at(f.key), N = "" + f.key), Xt(f) && ($ = f.ref, Qt(f, E));
        for (S in f)
          me.call(f, S) && !Jt.hasOwnProperty(S) && (_[S] = f[S]);
        if (s && s.defaultProps) {
          var A = s.defaultProps;
          for (S in A)
            _[S] === void 0 && (_[S] = A[S]);
        }
        if (N || $) {
          var P = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          N && er(_, P), $ && tr(_, P);
        }
        return rr(s, N, $, E, w, nt.current, _);
      }
    }
    var ze = R.ReactCurrentOwner, dt = R.ReactDebugCurrentFrame;
    function ae(s) {
      if (s) {
        var f = s._owner, m = Ce(s.type, s._source, f ? f.type : null);
        dt.setExtraStackFrame(m);
      } else
        dt.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function Le(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function ct() {
      {
        if (ze.current) {
          var s = W(ze.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function or(s) {
      return "";
    }
    var ut = {};
    function ar(s) {
      {
        var f = ct();
        if (!f) {
          var m = typeof s == "string" ? s : s.displayName || s.name;
          m && (f = `

Check the top-level render call using <` + m + ">.");
        }
        return f;
      }
    }
    function ft(s, f) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var m = ar(f);
        if (ut[m])
          return;
        ut[m] = !0;
        var w = "";
        s && s._owner && s._owner !== ze.current && (w = " It was passed a child from " + W(s._owner.type) + "."), ae(s), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, w), ae(null);
      }
    }
    function bt(s, f) {
      {
        if (typeof s != "object")
          return;
        if ($e(s))
          for (var m = 0; m < s.length; m++) {
            var w = s[m];
            Le(w) && ft(w, f);
          }
        else if (Le(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var E = j(s);
          if (typeof E == "function" && E !== s.entries)
            for (var S = E.call(s), _; !(_ = S.next()).done; )
              Le(_.value) && ft(_.value, f);
        }
      }
    }
    function nr(s) {
      {
        var f = s.type;
        if (f == null || typeof f == "string")
          return;
        var m;
        if (typeof f == "function")
          m = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === g))
          m = f.propTypes;
        else
          return;
        if (m) {
          var w = W(f);
          Yt(m, s.props, "prop", w, s);
        } else if (f.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var E = W(f);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(s) {
      {
        for (var f = Object.keys(s.props), m = 0; m < f.length; m++) {
          var w = f[m];
          if (w !== "children" && w !== "key") {
            ae(s), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), ae(null);
            break;
          }
        }
        s.ref !== null && (ae(s), p("Invalid attribute `ref` supplied to `React.Fragment`."), ae(null));
      }
    }
    var xt = {};
    function mt(s, f, m, w, E, S) {
      {
        var _ = ue(s);
        if (!_) {
          var N = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = or();
          $ ? N += $ : N += ct();
          var A;
          s === null ? A = "null" : $e(s) ? A = "array" : s !== void 0 && s.$$typeof === t ? (A = "<" + (W(s.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : A = typeof s, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, N);
        }
        var P = sr(s, f, m, E, S);
        if (P == null)
          return P;
        if (_) {
          var V = f.children;
          if (V !== void 0)
            if (w)
              if ($e(V)) {
                for (var ne = 0; ne < V.length; ne++)
                  bt(V[ne], s);
                Object.freeze && Object.freeze(V);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              bt(V, s);
        }
        if (me.call(f, "key")) {
          var te = W(s), z = Object.keys(f).filter(function(br) {
            return br !== "key";
          }), De = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xt[te + De]) {
            var fr = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, De, te, fr, te), xt[te + De] = !0;
          }
        }
        return s === o ? lr(P) : nr(P), P;
      }
    }
    function ir(s, f, m) {
      return mt(s, f, m, !0);
    }
    function dr(s, f, m) {
      return mt(s, f, m, !1);
    }
    var cr = dr, ur = ir;
    ge.Fragment = o, ge.jsx = cr, ge.jsxs = ur;
  })()), ge;
}
var wt;
function pr() {
  return wt || (wt = 1, process.env.NODE_ENV === "production" ? Ee.exports = xr() : Ee.exports = mr()), Ee.exports;
}
var a = pr();
function Rt(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = Rt(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function gr() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = Rt(e)) && (o && (o += " "), o += t);
  return o;
}
const Ke = "-", hr = (e) => {
  const t = vr(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const d = i.split(Ke);
      return d[0] === "" && d.length !== 1 && d.shift(), Tt(d, t) || wr(i);
    },
    getConflictingClassGroupIds: (i, d) => {
      const c = r[i] || [];
      return d && o[i] ? [...c, ...o[i]] : c;
    }
  };
}, Tt = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? Tt(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const l = e.join(Ke);
  return (i = t.validators.find(({
    validator: d
  }) => d(l))) == null ? void 0 : i.classGroupId;
}, vt = /^\[(.+)\]$/, wr = (e) => {
  if (vt.test(e)) {
    const t = vt.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, vr = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return kr(Object.entries(e.classGroups), r).forEach(([l, i]) => {
    Ve(i, o, l, t);
  }), o;
}, Ve = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const l = n === "" ? t : yt(t, n);
      l.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (yr(n)) {
        Ve(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([l, i]) => {
      Ve(i, yt(t, l), r, o);
    });
  });
}, yt = (e, t) => {
  let r = e;
  return t.split(Ke).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, yr = (e) => e.isThemeGetter, kr = (e, t) => t ? e.map(([r, o]) => {
  const n = o.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([i, d]) => [t + i, d])) : l);
  return [r, n];
}) : e, jr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (l, i) => {
    r.set(l, i), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let i = r.get(l);
      if (i !== void 0)
        return i;
      if ((i = o.get(l)) !== void 0)
        return n(l, i), i;
    },
    set(l, i) {
      r.has(l) ? r.set(l, i) : n(l, i);
    }
  };
}, St = "!", Nr = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, o = t.length === 1, n = t[0], l = t.length, i = (d) => {
    const c = [];
    let b = 0, x = 0, g;
    for (let j = 0; j < d.length; j++) {
      let R = d[j];
      if (b === 0) {
        if (R === n && (o || d.slice(j, j + l) === t)) {
          c.push(d.slice(x, j)), x = j + l;
          continue;
        }
        if (R === "/") {
          g = j;
          continue;
        }
      }
      R === "[" ? b++ : R === "]" && b--;
    }
    const h = c.length === 0 ? d : d.substring(x), k = h.startsWith(St), v = k ? h.substring(1) : h, C = g && g > x ? g - x : void 0;
    return {
      modifiers: c,
      hasImportantModifier: k,
      baseClassName: v,
      maybePostfixModifierPosition: C
    };
  };
  return r ? (d) => r({
    className: d,
    parseClassName: i
  }) : i;
}, Cr = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, _r = (e) => ({
  cache: jr(e.cacheSize),
  parseClassName: Nr(e),
  ...hr(e)
}), Er = /\s+/, Rr = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n
  } = t, l = [], i = e.trim().split(Er);
  let d = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const b = i[c], {
      modifiers: x,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: k
    } = r(b);
    let v = !!k, C = o(v ? h.substring(0, k) : h);
    if (!C) {
      if (!v) {
        d = b + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (C = o(h), !C) {
        d = b + (d.length > 0 ? " " + d : d);
        continue;
      }
      v = !1;
    }
    const j = Cr(x).join(":"), R = g ? j + St : j, p = R + C;
    if (l.includes(p))
      continue;
    l.push(p);
    const O = n(C, v);
    for (let M = 0; M < O.length; ++M) {
      const U = O[M];
      l.push(R + U);
    }
    d = b + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function Tr() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ot(t)) && (o && (o += " "), o += r);
  return o;
}
const Ot = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Ot(e[o])) && (r && (r += " "), r += t);
  return r;
};
function Sr(e, ...t) {
  let r, o, n, l = i;
  function i(c) {
    const b = t.reduce((x, g) => g(x), e());
    return r = _r(b), o = r.cache.get, n = r.cache.set, l = d, d(c);
  }
  function d(c) {
    const b = o(c);
    if (b)
      return b;
    const x = Rr(c, r);
    return n(c, x), x;
  }
  return function() {
    return l(Tr.apply(null, arguments));
  };
}
const I = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, It = /^\[(?:([a-z-]+):)?(.+)\]$/i, Or = /^\d+\/\d+$/, Ir = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ar = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Mr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, $r = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, H = (e) => le(e) || Ir.has(e) || Or.test(e), Z = (e) => de(e, "length", Kr), le = (e) => !!e && !Number.isNaN(Number(e)), Be = (e) => de(e, "number", le), he = (e) => !!e && Number.isInteger(Number(e)), Fr = (e) => e.endsWith("%") && le(e.slice(0, -1)), y = (e) => It.test(e), Q = (e) => Ar.test(e), Lr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Dr = (e) => de(e, Lr, At), Br = (e) => de(e, "position", At), Gr = /* @__PURE__ */ new Set(["image", "url"]), Vr = (e) => de(e, Gr, Ur), Wr = (e) => de(e, "", Yr), we = () => !0, de = (e, t, r) => {
  const o = It.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, Kr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Pr.test(e) && !Mr.test(e)
), At = () => !1, Yr = (e) => $r.test(e), Ur = (e) => zr.test(e), Hr = () => {
  const e = I("colors"), t = I("spacing"), r = I("blur"), o = I("brightness"), n = I("borderColor"), l = I("borderRadius"), i = I("borderSpacing"), d = I("borderWidth"), c = I("contrast"), b = I("grayscale"), x = I("hueRotate"), g = I("invert"), h = I("gap"), k = I("gradientColorStops"), v = I("gradientColorStopPositions"), C = I("inset"), j = I("margin"), R = I("opacity"), p = I("padding"), O = I("saturate"), M = I("scale"), U = I("sepia"), q = I("skew"), ye = I("space"), ke = I("translate"), se = () => ["auto", "contain", "none"], ue = () => ["auto", "hidden", "clip", "visible", "scroll"], fe = () => ["auto", y, t], T = () => [y, t], W = () => ["", H, Z], B = () => ["auto", le, y], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ee = () => ["solid", "dashed", "dotted", "double", "none"], be = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], oe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", y], xe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], G = () => [le, y];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [we],
      spacing: [H, Z],
      blur: ["none", "", Q, y],
      brightness: G(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Q, y],
      borderSpacing: T(),
      borderWidth: W(),
      contrast: G(),
      grayscale: X(),
      hueRotate: G(),
      invert: X(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Fr, Z],
      inset: fe(),
      margin: fe(),
      opacity: G(),
      padding: T(),
      saturate: G(),
      scale: G(),
      sepia: X(),
      skew: G(),
      space: T(),
      translate: T()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", y]
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
        object: [...J(), y]
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
        overscroll: se()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": se()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": se()
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
        z: ["auto", he, y]
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
        flex: ["1", "auto", "initial", "none", y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: X()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: X()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", he, y]
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
          span: ["full", he, y]
        }, y]
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
        "grid-rows": [we]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [he, y]
        }, y]
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
        "auto-cols": ["auto", "min", "max", "fr", y]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", y]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", y, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [y, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [y, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Q]
        }, Q]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [y, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [y, t, "auto", "min", "max", "fit"]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", le, Be]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", H, y]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", y]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", y]
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
        "placeholder-opacity": [R]
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
        "text-opacity": [R]
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
        "underline-offset": ["auto", H, y]
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
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", y]
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
        content: ["none", y]
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
        "bg-opacity": [R]
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
        bg: [...J(), Br]
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
        bg: ["auto", "cover", "contain", Dr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Vr]
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
        from: [k]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [k]
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
        "border-opacity": [R]
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
        "divide-opacity": [R]
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
        "outline-offset": [H, y]
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
        "ring-opacity": [R]
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
        shadow: ["", "inner", "none", Q, Wr]
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
        opacity: [R]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...be(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": be()
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
        brightness: [o]
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
        "drop-shadow": ["", "none", Q, y]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [b]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
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
        sepia: [U]
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
        "backdrop-brightness": [o]
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
        "backdrop-grayscale": [b]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [R]
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
        "backdrop-sepia": [U]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", y]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: G()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: G()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", y]
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
        scale: [M]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [M]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [M]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [he, y]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", y]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", y]
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
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
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
        "will-change": ["auto", "scroll", "contents", "transform", y]
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
}, qr = /* @__PURE__ */ Sr(Hr);
function u(...e) {
  return qr(gr(e));
}
const $o = ({
  fluid: e = !1,
  className: t,
  children: r,
  ...o
}) => {
  const n = () => e === !0 ? "w-full px-4 sm:px-6 lg:px-8" : e === "sm" ? "w-full px-4 sm:max-w-screen-sm sm:px-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "md" ? "w-full px-4 md:max-w-screen-md md:px-6 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "lg" ? "w-full px-4 lg:max-w-screen-lg lg:px-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "xl" ? "w-full px-4 xl:max-w-screen-xl 2xl:max-w-screen-2xl" : e === "2xl" ? "w-full px-4 2xl:max-w-screen-2xl" : "w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl";
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: u(n(), "mx-auto transition-all duration-200", t),
      ...o,
      children: r
    }
  );
}, Jr = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-4",
  4: "gap-6",
  5: "gap-8",
  6: "gap-12"
}, Xr = {
  0: "gap-x-0",
  1: "gap-x-1",
  2: "gap-x-2",
  3: "gap-x-4",
  4: "gap-x-6",
  5: "gap-x-8",
  6: "gap-x-12"
}, Zr = {
  0: "gap-y-0",
  1: "gap-y-1",
  2: "gap-y-2",
  3: "gap-y-4",
  4: "gap-y-6",
  5: "gap-y-8",
  6: "gap-y-12"
}, Qr = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch"
}, es = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}, zo = ({
  gutter: e = 4,
  gx: t,
  gy: r,
  cols: o,
  colsSm: n,
  colsMd: l,
  colsLg: i,
  colsXl: d,
  align: c,
  justify: b,
  className: x,
  children: g,
  ...h
}) => {
  const k = () => t !== void 0 || r !== void 0 ? u(
    t !== void 0 ? Xr[t] : "",
    r !== void 0 ? Zr[r] : ""
  ) : Jr[e] || "gap-4", v = () => {
    const j = [];
    return o && j.push(`grid-cols-${o}`), n && j.push(`sm:grid-cols-${n}`), l && j.push(`md:grid-cols-${l}`), i && j.push(`lg:grid-cols-${i}`), d && j.push(`xl:grid-cols-${d}`), j.join(" ");
  }, C = !!(o || n || l || i || d);
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: u(
        C ? "grid" : "flex flex-wrap -mx-2 sm:-mx-3",
        C ? k() : "",
        c && Qr[c],
        b && es[b],
        C && v(),
        x
      ),
      ...h,
      children: g
    }
  );
}, ts = {
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
}, rs = {
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
}, ss = {
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
}, os = {
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
}, as = {
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
}, Fo = ({
  xs: e,
  sm: t,
  md: r,
  lg: o,
  xl: n,
  offsetXs: l,
  offsetSm: i,
  offsetMd: d,
  offsetLg: c,
  offsetXl: b,
  className: x,
  children: g,
  ...h
}) => {
  const k = () => {
    const v = ["px-2 sm:px-3 flex-shrink-0 max-w-full box-border"];
    return !e && !t && !r && !o && !n ? v.push("flex-1 w-full") : (e !== void 0 ? v.push(ts[String(e)] || "w-full") : v.push("w-full"), t !== void 0 && v.push(rs[String(t)] || ""), r !== void 0 && v.push(ss[String(r)] || ""), o !== void 0 && v.push(os[String(o)] || ""), n !== void 0 && v.push(as[String(n)] || "")), l && v.push(`ml-[${l / 12 * 100}%]`), i && v.push(`sm:ml-[${i / 12 * 100}%]`), d && v.push(`md:ml-[${d / 12 * 100}%]`), c && v.push(`lg:ml-[${c / 12 * 100}%]`), b && v.push(`xl:ml-[${b / 12 * 100}%]`), v.join(" ");
  };
  return /* @__PURE__ */ a.jsx("div", { className: u(k(), x), ...h, children: g });
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Pt = (...e) => e.filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ls = {
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
const is = Et(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: n = "",
    children: l,
    iconNode: i,
    ...d
  }, c) => Ge(
    "svg",
    {
      ref: c,
      ...ls,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(t) : r,
      className: Pt("lucide", n),
      ...d
    },
    [
      ...i.map(([b, x]) => Ge(b, x)),
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
const D = (e, t) => {
  const r = Et(
    ({ className: o, ...n }, l) => Ge(is, {
      ref: l,
      iconNode: t,
      className: Pt(`lucide-${ns(e)}`, o),
      ...n
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
const ds = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], cs = D("Check", ds);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ye = D("ChevronDown", us);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Mt = D("ChevronLeft", fs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ue = D("ChevronRight", bs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], $t = D("CircleAlert", xs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], zt = D("CircleCheck", ms);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
], gs = D("CodeXml", ps);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], ws = D("Copy", hs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], K = D("Info", vs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], ks = D("LoaderCircle", ys);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], Ns = D("Menu", js);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ft = D("TriangleAlert", Cs);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ce = D("X", _s), Es = {
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
}, Rs = {
  sm: "text-xs px-2.5 py-1.5 min-h-[32px] gap-1.5",
  md: "text-sm px-4 py-2 min-h-[38px] gap-2",
  lg: "text-base px-5 py-2.5 min-h-[46px] gap-2.5"
}, Ts = F.forwardRef(
  ({
    variant: e = "primary",
    size: t = "md",
    pill: r = !1,
    block: o = !1,
    isLoading: n = !1,
    icon: l,
    disabled: i,
    className: d,
    children: c,
    ...b
  }, x) => /* @__PURE__ */ a.jsxs(
    "button",
    {
      ref: x,
      disabled: i || n,
      className: u(
        "inline-flex items-center justify-center font-medium transition-all duration-150 select-none shadow-sm",
        "focus:outline-none disabled:opacity-65 disabled:pointer-events-none active:scale-[0.98]",
        r ? "rounded-full" : "rounded-md",
        o ? "w-full flex" : "",
        Rs[t],
        Es[e],
        d
      ),
      ...b,
      children: [
        n && /* @__PURE__ */ a.jsx(ks, { className: u("animate-spin", t === "sm" ? "w-3.5 h-3.5" : t === "lg" ? "w-5 h-5" : "w-4 h-4") }),
        !n && l && /* @__PURE__ */ a.jsx("span", { className: "inline-flex shrink-0", children: l }),
        c
      ]
    }
  )
);
Ts.displayName = "Button";
const Lo = ({
  vertical: e = !1,
  className: t,
  children: r,
  ...o
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    role: "group",
    className: u(
      "inline-flex flex-wrap shadow-sm rounded-md",
      e ? "flex-col [&>*]:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:first-child)]:-mt-px" : "flex-row [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:-ml-px",
      t
    ),
    ...o,
    children: r
  }
), Do = ({
  variant: e = "default",
  className: t,
  ...r
}) => /* @__PURE__ */ a.jsx(
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
    children: /* @__PURE__ */ a.jsx(ce, { className: "w-4 h-4" })
  }
), Ss = {
  primary: "bg-[#0d6efd] text-white",
  secondary: "bg-[#6c757d] text-white",
  success: "bg-[#198754] text-white",
  danger: "bg-[#dc3545] text-white",
  warning: "bg-[#ffc107] text-gray-900",
  info: "bg-[#0dcaf0] text-gray-900",
  light: "bg-[#f8f9fa] text-gray-800 border border-gray-200 dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600",
  dark: "bg-[#212529] text-white"
}, Os = {
  sm: "text-[10px] px-1.5 py-0.5 gap-1",
  md: "text-xs px-2.5 py-1 gap-1.5",
  lg: "text-sm px-3 py-1.5 gap-2"
}, Bo = ({
  variant: e = "primary",
  pill: t = !1,
  dot: r = !1,
  size: o = "md",
  icon: n,
  className: l,
  children: i,
  ...d
}) => /* @__PURE__ */ a.jsxs(
  "span",
  {
    className: u(
      "inline-flex items-center justify-center font-semibold tracking-wide leading-none transition-colors align-baseline whitespace-nowrap",
      t ? "rounded-full" : "rounded",
      Ss[e],
      Os[o],
      l
    ),
    ...d,
    children: [
      r && /* @__PURE__ */ a.jsx(
        "span",
        {
          className: u(
            "inline-block rounded-full",
            o === "sm" ? "w-1.5 h-1.5" : "w-2 h-2",
            e === "warning" || e === "info" || e === "light" ? "bg-current opacity-80" : "bg-white opacity-90"
          )
        }
      ),
      n && /* @__PURE__ */ a.jsx("span", { className: "inline-flex shrink-0", children: n }),
      i
    ]
  }
), kt = {
  primary: {
    wrapper: "bg-[#cfe2ff] text-[#084298] border-[#b6d4fe] dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-900",
    close: "text-[#084298] hover:bg-[#b6d4fe]/50",
    defaultIcon: /* @__PURE__ */ a.jsx(K, { className: "w-5 h-5 shrink-0" })
  },
  secondary: {
    wrapper: "bg-[#e2e3e5] text-[#41464b] border-[#d3d6d8] dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    close: "text-[#41464b] hover:bg-[#d3d6d8]/50",
    defaultIcon: /* @__PURE__ */ a.jsx(K, { className: "w-5 h-5 shrink-0" })
  },
  success: {
    wrapper: "bg-[#d1e7dd] text-[#0f5132] border-[#badbcc] dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900",
    close: "text-[#0f5132] hover:bg-[#badbcc]/50",
    defaultIcon: /* @__PURE__ */ a.jsx(zt, { className: "w-5 h-5 shrink-0" })
  },
  danger: {
    wrapper: "bg-[#f8d7da] text-[#842029] border-[#f5c2c7] dark:bg-red-950/50 dark:text-red-300 dark:border-red-900",
    close: "text-[#842029] hover:bg-[#f5c2c7]/50",
    defaultIcon: /* @__PURE__ */ a.jsx($t, { className: "w-5 h-5 shrink-0" })
  },
  warning: {
    wrapper: "bg-[#fff3cd] text-[#664d03] border-[#ffecb5] dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-900",
    close: "text-[#664d03] hover:bg-[#ffecb5]/50",
    defaultIcon: /* @__PURE__ */ a.jsx(Ft, { className: "w-5 h-5 shrink-0" })
  },
  info: {
    wrapper: "bg-[#cff4fc] text-[#055160] border-[#b6effb] dark:bg-cyan-950/50 dark:text-cyan-300 dark:border-cyan-900",
    close: "text-[#055160] hover:bg-[#b6effb]/50",
    defaultIcon: /* @__PURE__ */ a.jsx(K, { className: "w-5 h-5 shrink-0" })
  },
  light: {
    wrapper: "bg-[#fefefe] text-[#636464] border-[#e2e3e5] dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700",
    close: "text-[#636464] hover:bg-gray-200",
    defaultIcon: /* @__PURE__ */ a.jsx(K, { className: "w-5 h-5 shrink-0" })
  },
  dark: {
    wrapper: "bg-[#d3d3d4] text-[#141619] border-[#bcbebf] dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700",
    close: "text-[#141619] hover:bg-[#bcbebf]/50",
    defaultIcon: /* @__PURE__ */ a.jsx(K, { className: "w-5 h-5 shrink-0" })
  }
}, Is = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx("h4", { className: u("text-base sm:text-lg font-semibold mb-1 leading-snug", e), ...r, children: t }), As = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx("a", { className: u("font-bold underline underline-offset-2 hover:opacity-80 transition-opacity", e), ...r, children: t }), Lt = ({
  variant: e = "primary",
  dismissible: t = !1,
  show: r = !0,
  onClose: o,
  icon: n,
  className: l,
  children: i,
  ...d
}) => {
  const [c, b] = L(r);
  if (!c) return null;
  const x = () => {
    b(!1), o && o();
  }, g = kt[e] || kt.primary, h = () => n === !1 ? null : n === !0 || n === void 0 ? g.defaultIcon : n;
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "alert",
      className: u(
        "relative flex items-start gap-3 p-4 rounded-lg border text-sm sm:text-base transition-all duration-200 shadow-sm",
        g.wrapper,
        l
      ),
      ...d,
      children: [
        h() && /* @__PURE__ */ a.jsx("div", { className: "mt-0.5 shrink-0", children: h() }),
        /* @__PURE__ */ a.jsx("div", { className: "flex-1 min-w-0 pr-6", children: i }),
        t && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: x,
            "aria-label": "Close alert",
            className: u(
              "absolute top-3.5 right-3 p-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",
              g.close
            ),
            children: /* @__PURE__ */ a.jsx(ce, { className: "w-4 h-4" })
          }
        )
      ]
    }
  );
};
Lt.Heading = Is;
Lt.Link = As;
const Ps = {
  default: "border-slate-200 dark:border-slate-700",
  primary: "border-blue-500",
  success: "border-emerald-500",
  danger: "border-red-500",
  warning: "border-amber-500",
  info: "border-cyan-500",
  none: "border-transparent"
}, Ms = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    className: u(
      "px-4 py-3 sm:px-6 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 font-medium text-slate-800 dark:text-slate-200 flex items-center justify-between",
      e
    ),
    ...r,
    children: t
  }
), $s = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx("div", { className: u("p-4 sm:p-6 flex-1 text-slate-600 dark:text-slate-300", e), ...r, children: t }), zs = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx("h3", { className: u("text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 leading-tight", e), ...r, children: t }), Fs = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx("h6", { className: u("text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-3", e), ...r, children: t }), Ls = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx("p", { className: u("text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 last:mb-0 leading-relaxed", e), ...r, children: t }), Ds = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    className: u(
      "px-4 py-3 sm:px-6 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center justify-between",
      e
    ),
    ...r,
    children: t
  }
), Bs = ({
  position: e = "top",
  className: t,
  alt: r = "",
  ...o
}) => {
  const n = e === "top" ? "rounded-t-xl" : e === "bottom" ? "rounded-b-xl" : "rounded-none";
  return /* @__PURE__ */ a.jsx(
    "img",
    {
      className: u("w-full object-cover max-h-60", n, t),
      alt: r,
      ...o
    }
  );
}, re = ({
  hoverable: e = !1,
  border: t = "default",
  horizontal: r = !1,
  className: o,
  children: n,
  ...l
}) => {
  const i = () => r === !0 ? "flex flex-col md:flex-row" : r === "sm" ? "flex flex-col sm:flex-row" : r === "md" ? "flex flex-col md:flex-row" : r === "lg" ? "flex flex-col lg:flex-row" : "flex flex-col";
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: u(
        "rounded-xl border bg-white dark:bg-slate-850 shadow-sm transition-all duration-200 overflow-hidden",
        Ps[t],
        e && "hover:shadow-md hover:-translate-y-0.5",
        i(),
        o
      ),
      ...l,
      children: n
    }
  );
};
re.Header = Ms;
re.Body = $s;
re.Title = zs;
re.Subtitle = Fs;
re.Text = Ls;
re.Footer = Ds;
re.Img = Bs;
const He = Te({
  isOpen: !1,
  setIsOpen: () => {
  },
  expand: "md"
}), Gs = {
  sm: "sm:flex-row sm:items-center",
  md: "md:flex-row md:items-center",
  lg: "lg:flex-row lg:items-center",
  xl: "xl:flex-row xl:items-center",
  always: "flex-row items-center",
  never: "flex-col"
}, Vs = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
  xl: "xl:hidden",
  always: "hidden",
  never: "block"
}, Ws = {
  sm: "sm:!flex sm:basis-auto sm:flex-row",
  md: "md:!flex md:basis-auto md:flex-row",
  lg: "lg:!flex lg:basis-auto lg:flex-row",
  xl: "xl:!flex xl:basis-auto xl:flex-row",
  always: "!flex basis-auto flex-row",
  never: ""
}, Ks = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx(
  "a",
  {
    className: u(
      "text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 mr-4 py-1 select-none",
      e
    ),
    ...r,
    children: t
  }
), Ys = ({
  className: e,
  children: t,
  ...r
}) => {
  const { isOpen: o, setIsOpen: n, expand: l } = Y(He);
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      type: "button",
      onClick: () => n(!o),
      "aria-label": "Toggle navigation",
      className: u(
        "p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
        Vs[l],
        e
      ),
      ...r,
      children: t || (o ? /* @__PURE__ */ a.jsx(ce, { className: "w-5 h-5" }) : /* @__PURE__ */ a.jsx(Ns, { className: "w-5 h-5" }))
    }
  );
}, Us = ({
  className: e,
  children: t,
  ...r
}) => {
  const { isOpen: o, expand: n } = Y(He);
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: u(
        "w-full basis-full items-center justify-between transition-all duration-300 ease-in-out",
        Ws[n],
        o ? "flex flex-col mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 lg:border-0 lg:mt-0 lg:pt-0" : "hidden",
        e
      ),
      ...r,
      children: t
    }
  );
}, qe = ({
  expand: e = "md",
  theme: t = "light",
  sticky: r,
  fixed: o,
  className: n,
  children: l,
  ...i
}) => {
  const [d, c] = L(!1), b = r === "top" ? "sticky top-0 z-40" : r === "bottom" ? "sticky bottom-0 z-40" : o === "top" ? "fixed top-0 left-0 right-0 z-40" : o === "bottom" ? "fixed bottom-0 left-0 right-0 z-40" : "relative", x = t === "dark" ? "bg-slate-900 text-white border-b border-slate-800 shadow-md" : "bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200/80 dark:bg-slate-900/95 dark:border-slate-800 shadow-sm";
  return /* @__PURE__ */ a.jsx(He.Provider, { value: { isOpen: d, setIsOpen: c, expand: e }, children: /* @__PURE__ */ a.jsx(
    "nav",
    {
      className: u(
        "w-full px-4 py-3 sm:px-6 transition-colors duration-200",
        b,
        x,
        n
      ),
      ...i,
      children: /* @__PURE__ */ a.jsx("div", { className: u("mx-auto max-w-7xl flex flex-wrap items-center justify-between", Gs[e]), children: l })
    }
  ) });
};
qe.Brand = Ks;
qe.Toggle = Ys;
qe.Collapse = Us;
const Hs = ({
  active: e = !1,
  disabled: t = !1,
  inNavbar: r = !1,
  className: o,
  children: n,
  ...l
}) => /* @__PURE__ */ a.jsx(
  "a",
  {
    className: u(
      "px-3.5 py-2 text-sm font-medium transition-all duration-150 inline-flex items-center gap-2 rounded-md select-none",
      r && "w-full lg:w-auto justify-start lg:justify-center py-2.5",
      t ? "text-slate-400 dark:text-slate-600 pointer-events-none" : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400",
      e && "text-blue-600 font-semibold dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40",
      o
    ),
    ...l,
    children: n
  }
), qs = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx("li", { className: u("inline-block w-full lg:w-auto", e), ...r, children: t }), Dt = ({
  variant: e = "default",
  fill: t = !1,
  justified: r = !1,
  scrollable: o = !0,
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
  return /* @__PURE__ */ a.jsx(
    "nav",
    {
      className: u(
        n ? "w-full lg:w-auto flex flex-col lg:flex-row items-stretch lg:items-center gap-1 sm:gap-2" : "flex items-center gap-1 sm:gap-2",
        !n && o && "overflow-x-auto custom-scrollbar pb-1 sm:pb-0 max-w-full",
        t && "[&>*]:flex-auto [&_a]:justify-center text-center",
        r && "[&>*]:flex-1 [&_a]:justify-center text-center",
        c(),
        l
      ),
      ...d,
      children: /* @__PURE__ */ a.jsx("ul", { className: u(
        "list-none p-0 m-0 w-full flex gap-1 sm:gap-2",
        n ? "flex-col lg:flex-row items-stretch lg:items-center" : "flex-row items-center"
      ), children: i })
    }
  );
};
Dt.Link = Hs;
Dt.Item = qs;
const Js = ({
  active: e = !1,
  href: t,
  className: r,
  children: o,
  ...n
}) => /* @__PURE__ */ a.jsx(
  "li",
  {
    className: u(
      "inline-flex items-center text-xs sm:text-sm font-medium",
      e ? "text-slate-800 dark:text-slate-200 font-semibold" : "text-slate-500 dark:text-slate-400",
      r
    ),
    ...n,
    children: t && !e ? /* @__PURE__ */ a.jsx("a", { href: t, className: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors", children: o }) : /* @__PURE__ */ a.jsx("span", { children: o })
  }
), Xs = ({
  separator: e = /* @__PURE__ */ a.jsx(Ue, { className: "w-3.5 h-3.5 text-slate-400 mx-1.5 shrink-0" }),
  className: t,
  children: r,
  ...o
}) => {
  const n = F.Children.toArray(r);
  return /* @__PURE__ */ a.jsx("nav", { "aria-label": "breadcrumb", className: u("flex py-2 px-1", t), ...o, children: /* @__PURE__ */ a.jsx("ol", { className: "inline-flex items-center flex-wrap gap-1 list-none p-0 m-0", children: n.map((l, i) => /* @__PURE__ */ a.jsxs(F.Fragment, { children: [
    l,
    i < n.length - 1 && e
  ] }, i)) }) });
};
Xs.Item = Js;
const Re = {
  sm: "w-7 h-7 text-xs",
  md: "w-9 h-9 text-sm",
  lg: "w-11 h-11 text-base"
}, Go = ({
  currentPage: e,
  totalPages: t,
  onPageChange: r,
  size: o = "md",
  maxVisible: n = 5,
  className: l,
  ...i
}) => {
  const c = (() => {
    const b = [];
    if (t <= n)
      for (let x = 1; x <= t; x++) b.push(x);
    else {
      const x = Math.floor(n / 2);
      let g = Math.max(1, e - x), h = Math.min(t, g + n - 1);
      h - g + 1 < n && (g = Math.max(1, h - n + 1)), g > 1 && (b.push(1), g > 2 && b.push("..."));
      for (let k = g; k <= h; k++)
        b.push(k);
      h < t && (h < t - 1 && b.push("..."), b.push(t));
    }
    return b;
  })();
  return /* @__PURE__ */ a.jsxs("nav", { "aria-label": "Pagination", className: u("flex items-center justify-center gap-1", l), ...i, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        disabled: e <= 1,
        onClick: () => r(e - 1),
        className: u(
          "inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none shadow-sm",
          Re[o]
        ),
        "aria-label": "Previous page",
        children: /* @__PURE__ */ a.jsx(Mt, { className: "w-4 h-4" })
      }
    ),
    c.map(
      (b, x) => b === "..." ? /* @__PURE__ */ a.jsx(
        "span",
        {
          className: u("inline-flex items-center justify-center text-slate-400 font-semibold", Re[o]),
          children: "..."
        },
        `ellipsis-${x}`
      ) : /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          onClick: () => r(b),
          className: u(
            "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150 shadow-sm",
            Re[o],
            e === b ? "bg-blue-600 text-white font-bold shadow-blue-500/20" : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
          ),
          children: b
        },
        `page-${b}`
      )
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        disabled: e >= t,
        onClick: () => r(e + 1),
        className: u(
          "inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none shadow-sm",
          Re[o]
        ),
        "aria-label": "Next page",
        children: /* @__PURE__ */ a.jsx(Ue, { className: "w-4 h-4" })
      }
    )
  ] });
}, Zs = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  fullscreen: "max-w-full m-0 h-full rounded-none"
}, Qs = ({
  closeButton: e = !0,
  onClose: t,
  className: r,
  children: o,
  ...n
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: u(
      "flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-t-xl",
      r
    ),
    ...n,
    children: [
      /* @__PURE__ */ a.jsx("div", { className: "flex-1 pr-4", children: o }),
      e && /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          onClick: t,
          "aria-label": "Close",
          className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none",
          children: /* @__PURE__ */ a.jsx(ce, { className: "w-5 h-5" })
        }
      )
    ]
  }
), eo = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx("h5", { className: u("text-lg sm:text-xl font-semibold text-slate-900 dark:text-white", e), ...r, children: t }), to = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx("div", { className: u("p-5 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base", e), ...r, children: t }), ro = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    className: u(
      "flex items-center justify-end gap-2.5 px-5 py-3.5 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 rounded-b-xl",
      e
    ),
    ...r,
    children: t
  }
), Se = ({
  show: e,
  onClose: t,
  size: r = "md",
  fullscreenSmDown: o = !1,
  centered: n = !0,
  scrollable: l = !1,
  backdrop: i = !0,
  className: d,
  children: c
}) => {
  if (ie(() => {
    const x = (g) => {
      g.key === "Escape" && e && t();
    };
    return e ? (document.body.style.overflow = "hidden", window.addEventListener("keydown", x)) : document.body.style.overflow = "", () => {
      document.body.style.overflow = "", window.removeEventListener("keydown", x);
    };
  }, [e, t]), !e) return null;
  const b = (x) => {
    x.target === x.currentTarget && i !== "static" && t();
  };
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      onClick: b,
      className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200",
      children: /* @__PURE__ */ a.jsx(
        "div",
        {
          className: u(
            "relative w-full bg-white dark:bg-slate-850 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col transition-all transform scale-100 animate-in zoom-in-95 duration-150",
            o ? "max-w-full h-full sm:h-auto sm:max-w-lg rounded-none sm:rounded-xl" : Zs[r],
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
Se.Header = Qs;
Se.Title = eo;
Se.Body = to;
Se.Footer = ro;
const jt = {
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
}, so = ({
  onClose: e,
  className: t,
  children: r,
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: u(
      "flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800",
      t
    ),
    ...o,
    children: [
      /* @__PURE__ */ a.jsx("div", { className: "flex-1 pr-4", children: r }),
      e && /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          onClick: e,
          "aria-label": "Close",
          className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none",
          children: /* @__PURE__ */ a.jsx(ce, { className: "w-5 h-5" })
        }
      )
    ]
  }
), oo = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx("h5", { className: u("text-lg font-semibold text-slate-900 dark:text-white", e), ...r, children: t }), ao = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx("div", { className: u("p-5 flex-1 overflow-y-auto custom-scrollbar text-slate-600 dark:text-slate-300", e), ...r, children: t }), Je = ({
  show: e,
  onClose: t,
  placement: r = "start",
  backdrop: o = !0,
  className: n,
  children: l
}) => (ie(() => {
  const i = (d) => {
    d.key === "Escape" && e && t();
  };
  return e ? (document.body.style.overflow = "hidden", window.addEventListener("keydown", i)) : document.body.style.overflow = "", () => {
    document.body.style.overflow = "", window.removeEventListener("keydown", i);
  };
}, [e, t]), e ? /* @__PURE__ */ a.jsxs("div", { className: "fixed inset-0 z-50 flex", children: [
  o && /* @__PURE__ */ a.jsx(
    "div",
    {
      onClick: t,
      className: "fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300"
    }
  ),
  /* @__PURE__ */ a.jsx(
    "div",
    {
      className: u(
        "fixed z-50 flex flex-col bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700 shadow-2xl transition-transform duration-300 ease-in-out",
        jt[r].panel,
        jt[r].transform,
        n
      ),
      children: l
    }
  )
] }) : null);
Je.Header = so;
Je.Title = oo;
Je.Body = ao;
const Oe = Te({
  activeKeys: [],
  toggleItem: () => {
  },
  flush: !1
}), Xe = Te({ eventKey: "" }), no = ({
  eventKey: e,
  className: t,
  children: r,
  ...o
}) => {
  const { flush: n } = Y(Oe);
  return /* @__PURE__ */ a.jsx(Xe.Provider, { value: { eventKey: e }, children: /* @__PURE__ */ a.jsx(
    "div",
    {
      className: u(
        "transition-colors",
        n ? "border-b border-slate-200 dark:border-slate-700" : "border border-slate-200 dark:border-slate-700 rounded-xl mb-2.5 overflow-hidden shadow-sm",
        t
      ),
      ...o,
      children: r
    }
  ) });
}, lo = ({
  className: e,
  children: t,
  ...r
}) => {
  const { activeKeys: o, toggleItem: n } = Y(Oe), { eventKey: l } = Y(Xe), i = o.includes(l);
  return /* @__PURE__ */ a.jsxs(
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
      ...r,
      children: [
        /* @__PURE__ */ a.jsx("span", { className: "flex-1 pr-3", children: t }),
        /* @__PURE__ */ a.jsx(
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
}, io = ({
  className: e,
  children: t,
  ...r
}) => {
  const { activeKeys: o } = Y(Oe), { eventKey: n } = Y(Xe);
  return o.includes(n) ? /* @__PURE__ */ a.jsx(
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
}, Ze = ({
  alwaysOpen: e = !1,
  defaultActiveKey: t,
  flush: r = !1,
  className: o,
  children: n,
  ...l
}) => {
  const [i, d] = L(() => t ? Array.isArray(t) ? t : [t] : []), c = (b) => {
    d(
      e ? (x) => x.includes(b) ? x.filter((g) => g !== b) : [...x, b] : (x) => x.includes(b) ? [] : [b]
    );
  };
  return /* @__PURE__ */ a.jsx(Oe.Provider, { value: { activeKeys: i, toggleItem: c, flush: r }, children: /* @__PURE__ */ a.jsx("div", { className: u("w-full", o), ...l, children: n }) });
};
Ze.Item = no;
Ze.Header = lo;
Ze.Body = io;
const Ie = Te({
  isOpen: !1,
  setIsOpen: () => {
  }
}), co = ({
  className: e,
  children: t,
  ...r
}) => {
  const { isOpen: o, setIsOpen: n } = Y(Ie);
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      type: "button",
      onClick: () => n(!o),
      "aria-expanded": o,
      className: u(
        "inline-flex items-center justify-between gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-colors",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ a.jsx(Ye, { className: u("w-4 h-4 transition-transform duration-150", o && "rotate-180") })
      ]
    }
  );
}, uo = ({
  align: e = "start",
  className: t,
  children: r,
  ...o
}) => {
  const { isOpen: n } = Y(Ie);
  return n ? /* @__PURE__ */ a.jsx(
    "div",
    {
      role: "menu",
      className: u(
        "absolute z-50 mt-2 min-w-[12rem] py-1.5 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in-95 duration-100",
        e === "end" ? "right-0" : "left-0",
        t
      ),
      ...o,
      children: r
    }
  ) : null;
}, fo = ({
  active: e = !1,
  disabled: t = !1,
  onClick: r,
  className: o,
  children: n,
  ...l
}) => {
  const { setIsOpen: i } = Y(Ie), d = (c) => {
    t || (i(!1), r && r(c));
  };
  return /* @__PURE__ */ a.jsx(
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
        o
      ),
      ...l,
      children: n
    }
  );
}, bo = ({ className: e, ...t }) => /* @__PURE__ */ a.jsx("div", { className: u("my-1.5 border-t border-slate-100 dark:border-slate-700", e), ...t }), xo = ({ className: e, children: t, ...r }) => /* @__PURE__ */ a.jsx("div", { className: u("px-4 py-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider", e), ...r, children: t }), ve = ({ className: e, children: t, ...r }) => {
  const [o, n] = L(!1), l = We(null);
  return ie(() => {
    const i = (c) => {
      l.current && !l.current.contains(c.target) && n(!1);
    }, d = (c) => {
      c.key === "Escape" && n(!1);
    };
    return o && (document.addEventListener("mousedown", i), document.addEventListener("keydown", d)), () => {
      document.removeEventListener("mousedown", i), document.removeEventListener("keydown", d);
    };
  }, [o]), /* @__PURE__ */ a.jsx(Ie.Provider, { value: { isOpen: o, setIsOpen: n }, children: /* @__PURE__ */ a.jsx("div", { ref: l, className: u("relative inline-block text-left", e), ...r, children: t }) });
};
ve.Toggle = co;
ve.Menu = uo;
ve.Item = fo;
ve.Divider = bo;
ve.Header = xo;
const Vo = ({
  className: e,
  children: t,
  as: r = "div",
  ...o
}) => /* @__PURE__ */ a.jsx(r, { className: u("mb-4 last:mb-0 w-full", e), ...o, children: t }), Wo = ({
  required: e = !1,
  className: t,
  children: r,
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "label",
  {
    className: u(
      "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 select-none",
      t
    ),
    ...o,
    children: [
      r,
      e && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1 font-bold", children: "*" })
    ]
  }
), mo = {
  sm: "px-2.5 py-1.5 text-xs rounded-md",
  md: "px-3.5 py-2 text-sm rounded-lg",
  lg: "px-4 py-2.5 text-base rounded-lg"
}, po = F.forwardRef(
  ({
    as: e = "input",
    rows: t = 3,
    isValid: r,
    isInvalid: o,
    sizeVariant: n = "md",
    helperText: l,
    errorMessage: i,
    successMessage: d,
    disabled: c,
    className: b,
    ...x
  }, g) => {
    const h = e, k = o ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-900 placeholder:text-red-300" : r ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900" : "border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500/20";
    return /* @__PURE__ */ a.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ a.jsx(
        h,
        {
          ref: g,
          rows: e === "textarea" ? t : void 0,
          disabled: c,
          className: u(
            "w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border shadow-sm transition-colors duration-150",
            "focus:outline-none focus:ring-4 placeholder:text-slate-400 dark:placeholder:text-slate-500",
            "disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850",
            mo[n],
            k,
            b
          ),
          ...x
        }
      ),
      o && i && /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-xs text-red-600 dark:text-red-400 font-medium", children: i }),
      r && d && /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium", children: d }),
      !o && !r && l && /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: l })
    ] });
  }
);
po.displayName = "FormControl";
const go = {
  sm: "px-2.5 py-1.5 text-xs rounded-md pr-8",
  md: "px-3.5 py-2 text-sm rounded-lg pr-9",
  lg: "px-4 py-2.5 text-base rounded-lg pr-10"
}, ho = F.forwardRef(
  ({
    isValid: e,
    isInvalid: t,
    sizeVariant: r = "md",
    helperText: o,
    errorMessage: n,
    disabled: l,
    className: i,
    children: d,
    ...c
  }, b) => {
    const x = t ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-900" : e ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900" : "border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500/20";
    return /* @__PURE__ */ a.jsxs("div", { className: "relative w-full", children: [
      /* @__PURE__ */ a.jsx(
        "select",
        {
          ref: b,
          disabled: l,
          className: u(
            "w-full appearance-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border shadow-sm transition-colors duration-150",
            "focus:outline-none focus:ring-4",
            "disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850",
            go[r],
            x,
            i
          ),
          ...c,
          children: d
        }
      ),
      /* @__PURE__ */ a.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500 dark:text-slate-400", children: /* @__PURE__ */ a.jsx(Ye, { className: "w-4 h-4" }) }),
      t && n && /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-xs text-red-600 dark:text-red-400 font-medium", children: n }),
      !t && o && /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: o })
    ] });
  }
);
ho.displayName = "FormSelect";
const wo = F.forwardRef(
  ({
    label: e,
    type: t = "checkbox",
    inline: r = !1,
    id: o,
    disabled: n,
    className: l,
    ...i
  }, d) => {
    const c = o || (typeof e == "string" ? e.toLowerCase().replace(/\s+/g, "-") : void 0);
    return /* @__PURE__ */ a.jsxs(
      "label",
      {
        htmlFor: c,
        className: u(
          "flex items-center gap-2.5 select-none cursor-pointer",
          r ? "inline-flex mr-4" : "flex mb-2 last:mb-0",
          n && "opacity-60 cursor-not-allowed",
          l
        ),
        children: [
          /* @__PURE__ */ a.jsx(
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
          e && /* @__PURE__ */ a.jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: e })
        ]
      }
    );
  }
);
wo.displayName = "FormCheck";
const vo = F.forwardRef(
  ({ label: e, checked: t, defaultChecked: r, id: o, disabled: n, onChange: l, className: i, ...d }, c) => {
    const [b, x] = F.useState(r || !1), g = t !== void 0, h = g ? t : b, k = o || (typeof e == "string" ? e.toLowerCase().replace(/\s+/g, "-") : void 0), v = (C) => {
      g || x(C.target.checked), l && l(C);
    };
    return /* @__PURE__ */ a.jsxs(
      "label",
      {
        htmlFor: k,
        className: u(
          "inline-flex items-center gap-3 cursor-pointer select-none",
          n && "opacity-60 cursor-not-allowed",
          i
        ),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "relative inline-flex items-center", children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                ref: c,
                id: k,
                type: "checkbox",
                checked: h,
                disabled: n,
                onChange: v,
                className: "sr-only",
                ...d
              }
            ),
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: u(
                  "w-11 h-6 rounded-full transition-colors duration-200 ease-in-out",
                  h ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
                )
              }
            ),
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: u(
                  "absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ease-in-out",
                  h && "translate-x-5"
                )
              }
            )
          ] }),
          e && /* @__PURE__ */ a.jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: e })
        ]
      }
    );
  }
);
vo.displayName = "FormSwitch";
const yo = ({
  className: e,
  children: t,
  ...r
}) => /* @__PURE__ */ a.jsx(
  "span",
  {
    className: u(
      "inline-flex items-center px-3.5 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-750 border border-slate-300 dark:border-slate-600 select-none",
      e
    ),
    ...r,
    children: t
  }
), ko = ({
  size: e = "md",
  className: t,
  children: r,
  ...o
}) => /* @__PURE__ */ a.jsx(
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
    ...o,
    children: r
  }
);
ko.Text = yo;
const Ko = ({
  label: e,
  type: t = "text",
  value: r,
  defaultValue: o = "",
  placeholder: n,
  onChange: l,
  disabled: i = !1,
  className: d,
  ...c
}) => {
  const [b, x] = L(o), g = r !== void 0, h = g ? r : b, k = (C) => {
    g || x(C.target.value), l && l(C);
  }, v = !!(h && String(h).length > 0);
  return /* @__PURE__ */ a.jsxs("div", { className: u("relative w-full", d), ...c, children: [
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: t,
        value: g ? r : b,
        disabled: i,
        onChange: k,
        placeholder: n || " ",
        className: u(
          "peer w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3.5 pt-5 pb-2 text-sm text-slate-900 dark:text-slate-100 placeholder-transparent",
          "focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all",
          "disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-850"
        )
      }
    ),
    /* @__PURE__ */ a.jsx(
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
}, Yo = ({
  label: e,
  showValue: t = !1,
  value: r,
  defaultValue: o = 50,
  min: n = 0,
  max: l = 100,
  step: i = 1,
  onChange: d,
  disabled: c,
  className: b,
  ...x
}) => {
  const [g, h] = F.useState(o), k = r !== void 0, v = k ? r : g, C = (j) => {
    k || h(j.target.value), d && d(j);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: u("w-full", b), children: [
    (e || t) && /* @__PURE__ */ a.jsxs("div", { className: "flex justify-between items-center mb-1 text-sm font-medium text-slate-700 dark:text-slate-300", children: [
      e && /* @__PURE__ */ a.jsx("span", { children: e }),
      t && /* @__PURE__ */ a.jsx("span", { className: "text-xs font-mono text-slate-500", children: v })
    ] }),
    /* @__PURE__ */ a.jsx(
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
        ...x
      }
    )
  ] });
}, jo = {
  sm: "overflow-x-auto sm:overflow-x-visible",
  md: "overflow-x-auto md:overflow-x-visible",
  lg: "overflow-x-auto lg:overflow-x-visible",
  xl: "overflow-x-auto xl:overflow-x-visible"
}, Uo = ({
  striped: e = !1,
  bordered: t = !1,
  hover: r = !1,
  compact: o = !1,
  dark: n = !1,
  responsive: l = !0,
  className: i,
  children: d,
  ...c
}) => {
  const b = /* @__PURE__ */ a.jsx(
    "table",
    {
      className: u(
        "w-full text-left border-collapse text-sm",
        n ? "text-slate-200 bg-slate-900" : "text-slate-700 dark:text-slate-200",
        e && (n ? "[&_tbody_tr:nth-child(odd)]:bg-slate-800/50" : "[&_tbody_tr:nth-child(odd)]:bg-slate-50 dark:[&_tbody_tr:nth-child(odd)]:bg-slate-800/40"),
        r && (n ? "[&_tbody_tr]:hover:bg-slate-800 transition-colors" : "[&_tbody_tr]:hover:bg-blue-50/40 dark:[&_tbody_tr]:hover:bg-slate-800/70 transition-colors"),
        t && (n ? "border border-slate-700 [&_th]:border [&_th]:border-slate-700 [&_td]:border [&_td]:border-slate-700" : "border border-slate-200 dark:border-slate-700 [&_th]:border [&_th]:border-slate-200 dark:[&_th]:border-slate-700 [&_td]:border [&_td]:border-slate-200 dark:[&_td]:border-slate-700"),
        o ? "[&_th]:py-2 [&_th]:px-3 [&_td]:py-2 [&_td]:px-3" : "[&_th]:py-3.5 [&_th]:px-4 [&_td]:py-3.5 [&_td]:px-4",
        "[&_thead]:border-b-2 [&_thead]:border-slate-200 dark:[&_thead]:border-slate-700 [&_th]:font-semibold [&_th]:text-slate-900 dark:[&_th]:text-white",
        "[&_tbody_tr]:border-b [&_tbody_tr]:border-slate-100 dark:[&_tbody_tr]:border-slate-800",
        i
      ),
      ...c,
      children: d
    }
  );
  if (l) {
    const x = typeof l == "string" ? jo[l] : "overflow-x-auto";
    return /* @__PURE__ */ a.jsx("div", { className: u("w-full custom-scrollbar rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900", x), children: b });
  }
  return b;
}, No = {
  primary: "bg-blue-600",
  secondary: "bg-slate-600",
  success: "bg-emerald-600",
  danger: "bg-red-600",
  warning: "bg-amber-500",
  info: "bg-cyan-500",
  light: "bg-slate-200 text-slate-800",
  dark: "bg-slate-900 text-white"
}, Ho = ({
  value: e,
  min: t = 0,
  max: r = 100,
  variant: o = "primary",
  striped: n = !1,
  animated: l = !1,
  label: i = !1,
  height: d = "1rem",
  className: c,
  ...b
}) => {
  const x = Math.min(Math.max(e, t), r), g = Math.round((x - t) / (r - t) * 100), h = typeof i == "string" ? i : i ? `${g}%` : null;
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": x,
      "aria-valuemin": t,
      "aria-valuemax": r,
      style: { height: d },
      className: u(
        "w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-750 shadow-inner",
        c
      ),
      ...b,
      children: /* @__PURE__ */ a.jsx(
        "div",
        {
          style: { width: `${g}%` },
          className: u(
            "h-full flex items-center justify-center text-[11px] font-bold text-white transition-all duration-300 ease-out select-none",
            No[o],
            n && "bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]",
            l && "animate-[progress-bar-stripes_1s_linear_infinite]"
          ),
          children: h
        }
      )
    }
  );
}, Nt = {
  primary: "text-blue-600",
  secondary: "text-slate-500",
  success: "text-emerald-600",
  danger: "text-red-600",
  warning: "text-amber-500",
  info: "text-cyan-500",
  light: "text-slate-200",
  dark: "text-slate-900 dark:text-slate-100",
  current: "text-current"
}, Ct = {
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
}, qo = ({
  animation: e = "border",
  variant: t = "primary",
  size: r = "md",
  className: o,
  ...n
}) => e === "grow" ? /* @__PURE__ */ a.jsx(
  "div",
  {
    role: "status",
    "aria-label": "Loading",
    className: u(
      "inline-block rounded-full bg-current opacity-0 animate-ping",
      Nt[t],
      Ct.grow[r],
      o
    ),
    ...n,
    children: /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Loading..." })
  }
) : /* @__PURE__ */ a.jsx(
  "div",
  {
    role: "status",
    "aria-label": "Loading",
    className: u(
      "inline-block rounded-full border-solid border-current border-r-transparent animate-spin align-[-0.125em]",
      Nt[t],
      Ct.border[r],
      o
    ),
    ...n,
    children: /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Loading..." })
  }
), Co = ({ children: e }) => /* @__PURE__ */ a.jsx(a.Fragment, { children: e }), _o = ({
  defaultActiveKey: e,
  activeKey: t,
  onSelect: r,
  variant: o = "tabs",
  fill: n = !1,
  justified: l = !1,
  className: i,
  children: d,
  ...c
}) => {
  var R;
  const b = F.Children.toArray(d).filter(
    (p) => F.isValidElement(p)
  ), [x, g] = L(() => {
    var p;
    return e || ((p = b[0]) == null ? void 0 : p.props.eventKey) || "";
  }), h = t !== void 0 ? t : x, k = (p, O) => {
    O || (t === void 0 && g(p), r && r(p));
  }, v = (R = b.find((p) => p.props.eventKey === h)) == null ? void 0 : R.props.children, C = () => {
    switch (o) {
      case "pills":
        return "gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl";
      case "underline":
        return "gap-6 border-b border-slate-200 dark:border-slate-700";
      case "tabs":
      default:
        return "gap-2 border-b border-slate-200 dark:border-slate-700";
    }
  }, j = (p, O) => {
    const M = h === p;
    if (O)
      return "opacity-40 cursor-not-allowed pointer-events-none text-slate-400";
    switch (o) {
      case "pills":
        return M ? "bg-blue-600 text-white shadow-sm font-semibold" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50";
      case "underline":
        return M ? "text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 dark:border-blue-400 pb-3 -mb-px" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white pb-3 -mb-px border-b-2 border-transparent";
      case "tabs":
      default:
        return M ? "bg-white dark:bg-slate-850 text-blue-600 dark:text-blue-400 font-semibold border-t border-x border-slate-200 dark:border-slate-700 rounded-t-lg -mb-px" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-t border-x border-transparent rounded-t-lg";
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: u("w-full flex flex-col", i), ...c, children: [
    /* @__PURE__ */ a.jsx("div", { className: "overflow-x-auto custom-scrollbar pb-1", children: /* @__PURE__ */ a.jsx(
      "div",
      {
        role: "tablist",
        className: u(
          "flex items-center min-w-full w-max sm:w-auto",
          C(),
          n && "[&>*]:flex-auto",
          l && "[&>*]:flex-1"
        ),
        children: b.map((p) => {
          const { eventKey: O, title: M, icon: U, disabled: q } = p.props;
          return /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": h === O,
              disabled: q,
              onClick: () => k(O, q),
              className: u(
                "px-4 py-2 text-sm font-medium transition-all duration-150 inline-flex items-center justify-center gap-2 whitespace-nowrap select-none rounded-lg focus:outline-none",
                j(O, q)
              ),
              children: [
                U && /* @__PURE__ */ a.jsx("span", { className: "w-4 h-4 shrink-0", children: U }),
                M
              ]
            },
            O
          );
        })
      }
    ) }),
    /* @__PURE__ */ a.jsx("div", { role: "tabpanel", className: "py-4 animate-in fade-in-50 duration-200", children: v })
  ] });
};
_o.Tab = Co;
const Eo = {
  primary: /* @__PURE__ */ a.jsx(K, { className: "w-4 h-4 text-blue-500" }),
  success: /* @__PURE__ */ a.jsx(zt, { className: "w-4 h-4 text-emerald-500" }),
  danger: /* @__PURE__ */ a.jsx($t, { className: "w-4 h-4 text-red-500" }),
  warning: /* @__PURE__ */ a.jsx(Ft, { className: "w-4 h-4 text-amber-500" }),
  info: /* @__PURE__ */ a.jsx(K, { className: "w-4 h-4 text-cyan-500" }),
  secondary: /* @__PURE__ */ a.jsx(K, { className: "w-4 h-4 text-slate-500" }),
  light: /* @__PURE__ */ a.jsx(K, { className: "w-4 h-4 text-slate-400" }),
  dark: /* @__PURE__ */ a.jsx(K, { className: "w-4 h-4 text-slate-300" })
}, Jo = ({
  show: e = !0,
  onClose: t,
  autohide: r = !0,
  delay: o = 5e3,
  variant: n,
  title: l,
  subtitle: i,
  className: d,
  children: c,
  ...b
}) => (ie(() => {
  if (!e || !r || !t) return;
  const x = setTimeout(() => {
    t();
  }, o);
  return () => clearTimeout(x);
}, [e, r, o, t]), e ? /* @__PURE__ */ a.jsxs(
  "div",
  {
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    className: u(
      "w-full max-w-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",
      d
    ),
    ...b,
    children: [
      (l || t) && /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          n && Eo[n],
          l && /* @__PURE__ */ a.jsx("span", { className: "font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100", children: l })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          i && /* @__PURE__ */ a.jsx("span", { className: "text-[11px] text-slate-400", children: i }),
          t && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: t,
              "aria-label": "Close",
              className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded transition-colors",
              children: /* @__PURE__ */ a.jsx(ce, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed", children: c })
    ]
  }
) : null), Ro = {
  "top-start": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "top-end": "top-4 right-4 items-end",
  "bottom-start": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-end": "bottom-4 right-4 items-end"
}, Xo = ({
  position: e = "top-end",
  className: t,
  children: r,
  ...o
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    "aria-live": "polite",
    className: u(
      "fixed z-50 flex flex-col gap-2.5 p-3 pointer-events-none [&>*]:pointer-events-auto max-w-[calc(100vw-2rem)]",
      Ro[e],
      t
    ),
    ...o,
    children: r
  }
);
function Zo() {
  const [e, t] = L([]), r = pt((n) => {
    const l = Math.random().toString(36).substring(2, 9);
    t((i) => [...i, { ...n, id: l }]);
  }, []), o = pt((n) => {
    t((l) => l.filter((i) => i.id !== n));
  }, []);
  return { toasts: e, addToast: r, removeToast: o };
}
const Qo = ({
  items: e,
  autoPlay: t = !0,
  interval: r = 4e3,
  indicators: o = !0,
  controls: n = !0,
  pauseOnHover: l = !0,
  className: i,
  ...d
}) => {
  const [c, b] = L(0), [x, g] = L(!1), h = We(null), k = () => {
    b((p) => p === 0 ? e.length - 1 : p - 1);
  }, v = () => {
    b((p) => p === e.length - 1 ? 0 : p + 1);
  }, C = (p) => {
    b(p);
  };
  ie(() => {
    if (!t || l && x || e.length <= 1) return;
    const p = setInterval(() => {
      v();
    }, r);
    return () => clearInterval(p);
  }, [t, r, x, e.length]);
  const j = (p) => {
    h.current = p.touches[0].clientX;
  }, R = (p) => {
    if (h.current === null) return;
    const O = p.changedTouches[0].clientX, M = h.current - O;
    Math.abs(M) > 50 && (M > 0 ? v() : k()), h.current = null;
  };
  return !e || e.length === 0 ? null : /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: u(
        "relative w-full overflow-hidden rounded-2xl shadow-lg select-none bg-slate-900 group",
        i
      ),
      onMouseEnter: () => g(!0),
      onMouseLeave: () => g(!1),
      onTouchStart: j,
      onTouchEnd: R,
      ...d,
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex transition-transform duration-500 ease-out h-64 sm:h-80 md:h-96",
            style: { transform: `translateX(-${c * 100}%)` },
            children: e.map((p, O) => /* @__PURE__ */ a.jsxs("div", { className: "w-full flex-shrink-0 relative h-full", children: [
              /* @__PURE__ */ a.jsx(
                "img",
                {
                  src: p.image,
                  alt: p.alt || `Slide ${O + 1}`,
                  className: "w-full h-full object-cover"
                }
              ),
              (p.title || p.caption) && /* @__PURE__ */ a.jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white", children: [
                p.title && /* @__PURE__ */ a.jsx("h3", { className: "text-lg sm:text-2xl font-bold mb-1 leading-snug", children: p.title }),
                p.caption && /* @__PURE__ */ a.jsx("p", { className: "text-xs sm:text-sm text-slate-200 max-w-xl line-clamp-2", children: p.caption })
              ] })
            ] }, p.id || O))
          }
        ),
        n && e.length > 1 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: k,
              "aria-label": "Previous slide",
              className: "absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 opacity-90 sm:opacity-0 sm:group-hover:opacity-100",
              children: /* @__PURE__ */ a.jsx(Mt, { className: "w-5 h-5 sm:w-6 sm:h-6" })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: v,
              "aria-label": "Next slide",
              className: "absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 opacity-90 sm:opacity-0 sm:group-hover:opacity-100",
              children: /* @__PURE__ */ a.jsx(Ue, { className: "w-5 h-5 sm:w-6 sm:h-6" })
            }
          )
        ] }),
        o && e.length > 1 && /* @__PURE__ */ a.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10", children: e.map((p, O) => /* @__PURE__ */ a.jsx(
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
}, To = {
  primary: "bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-300",
  secondary: "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-200",
  success: "bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300",
  danger: "bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-300",
  warning: "bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-300",
  info: "bg-cyan-50 text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-300",
  light: "bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  dark: "bg-slate-800 text-white dark:bg-slate-900 dark:text-white"
}, So = ({
  active: e = !1,
  disabled: t = !1,
  action: r = !1,
  variant: o,
  className: n,
  children: l,
  ...i
}) => /* @__PURE__ */ a.jsx(
  "li",
  {
    className: u(
      "relative px-4 py-3 text-sm flex items-center justify-between border-b last:border-b-0 border-slate-200 dark:border-slate-700 transition-colors",
      e ? "bg-blue-600 text-white font-medium border-blue-600" : t ? "text-slate-400 dark:text-slate-600 pointer-events-none bg-slate-50 dark:bg-slate-850" : r ? "cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200" : "text-slate-700 dark:text-slate-200",
      o && !e && To[o],
      n
    ),
    ...i,
    children: l
  }
), Oo = ({
  flush: e = !1,
  horizontal: t = !1,
  numbered: r = !1,
  className: o,
  children: n,
  ...l
}) => {
  const i = () => t === !0 ? "flex-row [&>li]:border-b-0 [&>li]:border-r [&>li:last-child]:border-r-0" : t === "sm" ? "sm:flex-row sm:[&>li]:border-b-0 sm:[&>li]:border-r sm:[&>li:last-child]:border-r-0" : t === "md" ? "md:flex-row md:[&>li]:border-b-0 md:[&>li]:border-r md:[&>li:last-child]:border-r-0" : t === "lg" ? "lg:flex-row lg:[&>li]:border-b-0 lg:[&>li]:border-r lg:[&>li:last-child]:border-r-0" : "flex-col", d = r ? "ol" : "ul";
  return /* @__PURE__ */ a.jsx(
    d,
    {
      className: u(
        "flex list-none p-0 overflow-hidden",
        i(),
        e ? "rounded-none border-x-0 border-t-0" : "rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-850",
        r && "list-decimal list-inside",
        o
      ),
      ...l,
      children: n
    }
  );
};
Oo.Item = So;
const _t = {
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
}, ea = ({
  content: e,
  placement: t = "top",
  delay: r = 100,
  className: o,
  children: n,
  ...l
}) => {
  const [i, d] = L(!1), [c, b] = L(null), x = () => {
    const h = setTimeout(() => d(!0), r);
    b(h);
  }, g = () => {
    c && clearTimeout(c), d(!1);
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "relative inline-flex items-center",
      onMouseEnter: x,
      onMouseLeave: g,
      onFocus: x,
      onBlur: g,
      ...l,
      children: [
        n,
        i && /* @__PURE__ */ a.jsxs(
          "div",
          {
            role: "tooltip",
            className: u(
              "absolute z-50 px-2.5 py-1 text-xs font-medium text-white bg-slate-900 rounded-md shadow-md whitespace-nowrap pointer-events-none transition-all duration-150 animate-in fade-in zoom-in-95",
              _t[t].tooltip,
              o
            ),
            children: [
              e,
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: u("absolute border-4", _t[t].arrow)
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Io = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2.5",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2.5",
  left: "right-full top-1/2 -translate-y-1/2 mr-2.5",
  right: "left-full top-1/2 -translate-y-1/2 ml-2.5"
}, ta = ({
  title: e,
  content: t,
  placement: r = "top",
  className: o,
  children: n,
  ...l
}) => {
  const [i, d] = L(!1), c = We(null);
  return ie(() => {
    const b = (x) => {
      c.current && !c.current.contains(x.target) && d(!1);
    };
    return i && document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, [i]), /* @__PURE__ */ a.jsxs("div", { ref: c, className: "relative inline-block", ...l, children: [
    /* @__PURE__ */ a.jsx("div", { onClick: () => d(!i), className: "cursor-pointer inline-block", children: n }),
    i && /* @__PURE__ */ a.jsxs(
      "div",
      {
        role: "dialog",
        className: u(
          "absolute z-50 w-64 max-w-xs bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-in fade-in zoom-in-95 duration-150",
          Io[r],
          o
        ),
        children: [
          e && /* @__PURE__ */ a.jsx("div", { className: "px-3.5 py-2 bg-slate-50 dark:bg-slate-750 border-b border-slate-100 dark:border-slate-700 font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100", children: e }),
          /* @__PURE__ */ a.jsx("div", { className: "p-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed", children: t })
        ]
      }
    )
  ] });
}, Ao = {
  xs: "h-2",
  sm: "h-3",
  md: "h-4",
  lg: "h-6"
}, Po = {
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
}, ra = ({
  animation: e = "glow",
  size: t = "md",
  col: r = 12,
  className: o,
  ...n
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    className: u(
      "rounded bg-slate-200 dark:bg-slate-700 inline-block align-middle",
      Ao[t],
      Po[r],
      e === "glow" ? "animate-pulse" : "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
      o
    ),
    ...n
  }
), sa = ({
  title: e,
  description: t,
  children: r,
  code: o,
  className: n
}) => {
  const [l, i] = L(!1), d = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText)
        await navigator.clipboard.writeText(o.trim());
      else {
        const c = document.createElement("textarea");
        c.value = o.trim(), c.style.position = "fixed", c.style.opacity = "0", document.body.appendChild(c), c.select(), document.execCommand("copy"), document.body.removeChild(c);
      }
      i(!0), setTimeout(() => i(!1), 2e3);
    } catch (c) {
      console.error("Failed to copy code: ", c);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: u("mb-8 last:mb-0", n), children: [
    e && /* @__PURE__ */ a.jsx("h3", { className: "text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2", children: e }),
    t && /* @__PURE__ */ a.jsx("div", { className: "text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 leading-relaxed", children: t }),
    /* @__PURE__ */ a.jsxs("div", { className: "rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm", children: [
      /* @__PURE__ */ a.jsx("div", { className: "p-4 sm:p-6 bg-white dark:bg-slate-900 overflow-x-auto custom-scrollbar", children: r }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-slate-800 text-slate-300 border-t border-slate-700/80 text-xs", children: [
        /* @__PURE__ */ a.jsxs("span", { className: "font-mono flex items-center gap-1.5 text-slate-400", children: [
          /* @__PURE__ */ a.jsx(gs, { className: "w-3.5 h-3.5 text-blue-400" }),
          "JSX"
        ] }),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: d,
            className: u(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500",
              l ? "bg-emerald-600 text-white font-bold" : "bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white"
            ),
            title: "Salin kode ke clipboard",
            children: l ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(cs, { className: "w-3.5 h-3.5 text-white" }),
              /* @__PURE__ */ a.jsx("span", { children: "Tersalin!" })
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(ws, { className: "w-3.5 h-3.5 text-slate-300" }),
              /* @__PURE__ */ a.jsx("span", { children: "Salin Kode" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "bg-slate-950 p-4 overflow-x-auto custom-scrollbar", children: /* @__PURE__ */ a.jsx("pre", { className: "font-mono text-xs text-slate-200 leading-relaxed m-0 whitespace-pre", children: /* @__PURE__ */ a.jsx("code", { children: o.trim() }) }) })
    ] })
  ] });
};
export {
  Ze as Accordion,
  io as AccordionBody,
  lo as AccordionHeader,
  no as AccordionItem,
  Lt as Alert,
  Is as AlertHeading,
  As as AlertLink,
  Bo as Badge,
  Xs as Breadcrumb,
  Js as BreadcrumbItem,
  Ts as Button,
  Lo as ButtonGroup,
  re as Card,
  $s as CardBody,
  Ds as CardFooter,
  Ms as CardHeader,
  Bs as CardImg,
  Fs as CardSubtitle,
  Ls as CardText,
  zs as CardTitle,
  Qo as Carousel,
  Do as CloseButton,
  sa as CodePreview,
  Fo as Col,
  $o as Container,
  ve as Dropdown,
  bo as DropdownDivider,
  xo as DropdownHeader,
  fo as DropdownItem,
  uo as DropdownMenu,
  co as DropdownToggle,
  Ko as FloatingLabel,
  wo as FormCheck,
  po as FormControl,
  Vo as FormGroup,
  Wo as FormLabel,
  Yo as FormRange,
  ho as FormSelect,
  vo as FormSwitch,
  ko as InputGroup,
  yo as InputGroupText,
  Oo as ListGroup,
  So as ListGroupItem,
  Se as Modal,
  to as ModalBody,
  ro as ModalFooter,
  Qs as ModalHeader,
  eo as ModalTitle,
  Dt as Nav,
  qs as NavItem,
  Hs as NavLink,
  qe as Navbar,
  Ks as NavbarBrand,
  Us as NavbarCollapse,
  Ys as NavbarToggle,
  Je as Offcanvas,
  ao as OffcanvasBody,
  so as OffcanvasHeader,
  oo as OffcanvasTitle,
  Go as Pagination,
  ra as Placeholder,
  ta as Popover,
  Ho as ProgressBar,
  zo as Row,
  qo as Spinner,
  Co as Tab,
  Uo as Table,
  _o as Tabs,
  Jo as Toast,
  Xo as ToastContainer,
  ea as Tooltip,
  Zo as useToast
};
