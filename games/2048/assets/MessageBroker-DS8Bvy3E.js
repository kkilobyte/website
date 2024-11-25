var e = Object.defineProperty
  , t = (t, n, r) => ( (t, n, r) => n in t ? e(t, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[n] = r)(t, "symbol" != typeof n ? n + "" : n, r);
!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "94990eb6-8475-4b5f-96a1-2a873dbd07f9",
        e._sentryDebugIdIdentifier = "sentry-dbid-94990eb6-8475-4b5f-96a1-2a873dbd07f9")
    } catch (n) {}
}();
var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
n._sentryModuleMetadata = n._sentryModuleMetadata || {},
n._sentryModuleMetadata[(new n.Error).stack] = Object.assign({}, n._sentryModuleMetadata[(new n.Error).stack], {
    "_sentryBundlerPluginAppKey:@rbitrary-golden-pumpkin": !0
});
import {g as r, c as o, b as i, U as s, C as a, S as l, T as c, I as u, G as d, d as p, B as f, f as h, O as m, P as g, h as y, D, W as v} from "./pixi.js-CemzLTyY.js";
const C = Object.prototype.toString;
function _(e) {
    switch (C.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
        return !0;
    default:
        return M(e, Error)
    }
}
function A(e, t) {
    return C.call(e) === `[object ${t}]`
}
function x(e) {
    return A(e, "ErrorEvent")
}
function E(e) {
    return A(e, "DOMError")
}
function w(e) {
    return A(e, "String")
}
function b(e) {
    return "object" == typeof e && null !== e && "__sentry_template_string__"in e && "__sentry_template_values__"in e
}
function F(e) {
    return null === e || b(e) || "object" != typeof e && "function" != typeof e
}
function S(e) {
    return A(e, "Object")
}
function k(e) {
    return "undefined" != typeof Event && M(e, Event)
}
function B(e) {
    return Boolean(e && e.then && "function" == typeof e.then)
}
function M(e, t) {
    try {
        return e instanceof t
    } catch (n) {
        return !1
    }
}
function O(e) {
    return !("object" != typeof e || null === e || !e.__isVue && !e._isVue)
}
function T(e, t=0) {
    return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`
}
function I(e, t) {
    if (!Array.isArray(e))
        return "";
    const n = [];
    for (let o = 0; o < e.length; o++) {
        const t = e[o];
        try {
            O(t) ? n.push("[VueViewModel]") : n.push(String(t))
        } catch (r) {
            n.push("[value cannot be serialized]")
        }
    }
    return n.join(t)
}
function R(e, t=[], n=!1) {
    return t.some((t => function(e, t, n=!1) {
        return !!w(e) && (A(t, "RegExp") ? t.test(e) : !!w(t) && (n ? e === t : e.includes(t)))
    }(e, t, n)))
}
function P(e, t, n=250, r, o, i, s) {
    if (!(i.exception && i.exception.values && s && M(s.originalException, Error)))
        return;
    const a = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
    var l, c;
    a && (i.exception.values = (l = $(e, t, o, s.originalException, r, i.exception.values, a, 0),
    c = n,
    l.map((e => (e.value && (e.value = T(e.value, c)),
    e)))))
}
function $(e, t, n, r, o, i, s, a) {
    if (i.length >= n + 1)
        return i;
    let l = [...i];
    if (M(r[o], Error)) {
        j(s, a);
        const i = e(t, r[o])
          , c = l.length;
        U(i, o, c, a),
        l = $(e, t, n, r[o], o, [i, ...l], i, c)
    }
    return Array.isArray(r.errors) && r.errors.forEach(( (r, i) => {
        if (M(r, Error)) {
            j(s, a);
            const c = e(t, r)
              , u = l.length;
            U(c, `errors[${i}]`, u, a),
            l = $(e, t, n, r, o, [c, ...l], c, u)
        }
    }
    )),
    l
}
function j(e, t) {
    e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
    },
    e.mechanism = {
        ...e.mechanism,
        ..."AggregateError" === e.type && {
            is_exception_group: !0
        },
        exception_id: t
    }
}
function U(e, t, n, r) {
    e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
    },
    e.mechanism = {
        ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    }
}
function G(e) {
    return void 0 === e ? void 0 : e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
}
const N = "8.32.0"
  , L = globalThis;
function q(e, t, n) {
    const r = L
      , o = r.__SENTRY__ = r.__SENTRY__ || {}
      , i = o[N] = o[N] || {};
    return i[e] || (i[e] = t())
}
const z = L;
function W(e, t={}) {
    if (!e)
        return "<unknown>";
    try {
        let n = e;
        const r = 5
          , o = [];
        let i = 0
          , s = 0;
        const a = " > "
          , l = a.length;
        let c;
        const u = Array.isArray(t) ? t : t.keyAttrs
          , d = !Array.isArray(t) && t.maxStringLength || 80;
        for (; n && i++ < r && (c = V(n, u),
        !("html" === c || i > 1 && s + o.length * l + c.length >= d)); )
            o.push(c),
            s += c.length,
            n = n.parentNode;
        return o.reverse().join(a)
    } catch (n) {
        return "<unknown>"
    }
}
function V(e, t) {
    const n = e
      , r = [];
    if (!n || !n.tagName)
        return "";
    if (z.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent)
            return n.dataset.sentryComponent;
        if (n.dataset.sentryElement)
            return n.dataset.sentryElement
    }
    r.push(n.tagName.toLowerCase());
    const o = t && t.length ? t.filter((e => n.getAttribute(e))).map((e => [e, n.getAttribute(e)])) : null;
    if (o && o.length)
        o.forEach((e => {
            r.push(`[${e[0]}="${e[1]}"]`)
        }
        ));
    else {
        n.id && r.push(`#${n.id}`);
        const e = n.className;
        if (e && w(e)) {
            const t = e.split(/\s+/);
            for (const e of t)
                r.push(`.${e}`)
        }
    }
    const i = ["aria-label", "type", "name", "title", "alt"];
    for (const s of i) {
        const e = n.getAttribute(s);
        e && r.push(`[${s}="${e}"]`)
    }
    return r.join("")
}
const H = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
  , Y = ["debug", "info", "warn", "error", "log", "assert", "trace"]
  , J = {};
function K(e) {
    if (!("console"in L))
        return e();
    const t = L.console
      , n = {}
      , r = Object.keys(J);
    r.forEach((e => {
        const r = J[e];
        n[e] = t[e],
        t[e] = r
    }
    ));
    try {
        return e()
    } finally {
        r.forEach((e => {
            t[e] = n[e]
        }
        ))
    }
}
const X = q("logger", (function() {
    let e = !1;
    const t = {
        enable: () => {
            e = !0
        }
        ,
        disable: () => {
            e = !1
        }
        ,
        isEnabled: () => e
    };
    return H ? Y.forEach((n => {
        t[n] = (...t) => {
            e && K(( () => {
                L.console[n](`Sentry Logger [${n}]:`, ...t)
            }
            ))
        }
    }
    )) : Y.forEach((e => {
        t[e] = () => {}
    }
    )),
    t
}
))
  , Z = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Q(e, t=!1) {
    const {host: n, path: r, pass: o, port: i, projectId: s, protocol: a, publicKey: l} = e;
    return `${a}://${l}${t && o ? `:${o}` : ""}@${n}${i ? `:${i}` : ""}/${r ? `${r}/` : r}${s}`
}
function ee(e) {
    return {
        protocol: e.protocol,
        publicKey: e.publicKey || "",
        pass: e.pass || "",
        host: e.host,
        port: e.port || "",
        path: e.path || "",
        projectId: e.projectId
    }
}
class te extends Error {
    constructor(e, t="warn") {
        super(e),
        this.message = e,
        this.name = new.target.prototype.constructor.name,
        Object.setPrototypeOf(this, new.target.prototype),
        this.logLevel = t
    }
}
function ne(e, t, n) {
    if (!(t in e))
        return;
    const r = e[t]
      , o = n(r);
    "function" == typeof o && oe(o, r),
    e[t] = o
}
function re(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        })
    } catch (r) {
        H && X.log(`Failed to add non-enumerable property "${t}" to object`, e)
    }
}
function oe(e, t) {
    try {
        const n = t.prototype || {};
        e.prototype = t.prototype = n,
        re(e, "__sentry_original__", t)
    } catch (n) {}
}
function ie(e) {
    return e.__sentry_original__
}
function se(e) {
    if (_(e))
        return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...le(e)
        };
    if (k(e)) {
        const t = {
            type: e.type,
            target: ae(e.target),
            currentTarget: ae(e.currentTarget),
            ...le(e)
        };
        return "undefined" != typeof CustomEvent && M(e, CustomEvent) && (t.detail = e.detail),
        t
    }
    return e
}
function ae(e) {
    try {
        return "undefined" != typeof Element && M(e, Element) ? W(e) : Object.prototype.toString.call(e)
    } catch (t) {
        return "<unknown>"
    }
}
function le(e) {
    if ("object" == typeof e && null !== e) {
        const t = {};
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
    }
    return {}
}
function ce(e) {
    return ue(e, new Map)
}
function ue(e, t) {
    if (function(e) {
        if (!S(e))
            return !1;
        try {
            const t = Object.getPrototypeOf(e).constructor.name;
            return !t || "Object" === t
        } catch (t) {
            return !0
        }
    }(e)) {
        const n = t.get(e);
        if (void 0 !== n)
            return n;
        const r = {};
        t.set(e, r);
        for (const o of Object.keys(e))
            void 0 !== e[o] && (r[o] = ue(e[o], t));
        return r
    }
    if (Array.isArray(e)) {
        const n = t.get(e);
        if (void 0 !== n)
            return n;
        const r = [];
        return t.set(e, r),
        e.forEach((e => {
            r.push(ue(e, t))
        }
        )),
        r
    }
    return e
}
const de = "?"
  , pe = /\(error: (.*)\)/
  , fe = /captureMessage|captureException/;
function he(...e) {
    const t = e.sort(( (e, t) => e[0] - t[0])).map((e => e[1]));
    return (e, n=0, r=0) => {
        const o = []
          , i = e.split("\n");
        for (let s = n; s < i.length; s++) {
            const e = i[s];
            if (e.length > 1024)
                continue;
            const n = pe.test(e) ? e.replace(pe, "$1") : e;
            if (!n.match(/\S*Error: /)) {
                for (const e of t) {
                    const t = e(n);
                    if (t) {
                        o.push(t);
                        break
                    }
                }
                if (o.length >= 50 + r)
                    break
            }
        }
        return function(e) {
            if (!e.length)
                return [];
            const t = Array.from(e);
            return /sentryWrapped/.test(me(t).function || "") && t.pop(),
            t.reverse(),
            fe.test(me(t).function || "") && (t.pop(),
            fe.test(me(t).function || "") && t.pop()),
            t.slice(0, 50).map((e => ({
                ...e,
                filename: e.filename || me(t).filename,
                function: e.function || de
            })))
        }(o.slice(r))
    }
}
function me(e) {
    return e[e.length - 1] || {}
}
const ge = "<anonymous>";
function ye(e) {
    try {
        return e && "function" == typeof e && e.name || ge
    } catch (t) {
        return ge
    }
}
function De(e) {
    const t = e.exception;
    if (t) {
        const e = [];
        try {
            return t.values.forEach((t => {
                t.stacktrace.frames && e.push(...t.stacktrace.frames)
            }
            )),
            e
        } catch (n) {
            return
        }
    }
}
const ve = {}
  , Ce = {};
function _e(e, t) {
    ve[e] = ve[e] || [],
    ve[e].push(t)
}
function Ae(e, t) {
    Ce[e] || (t(),
    Ce[e] = !0)
}
function xe(e, t) {
    const n = e && ve[e];
    if (n)
        for (const o of n)
            try {
                o(t)
            } catch (r) {
                H && X.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${ye(o)}\nError:`, r)
            }
}
function Ee() {
    "console"in L && Y.forEach((function(e) {
        e in L.console && ne(L.console, e, (function(t) {
            return J[e] = t,
            function(...t) {
                xe("console", {
                    args: t,
                    level: e
                });
                const n = J[e];
                n && n.apply(L.console, t)
            }
        }
        ))
    }
    ))
}
const we = L;
function be() {
    if (!("fetch"in we))
        return !1;
    try {
        return new Headers,
        new Request("http://www.example.com"),
        new Response,
        !0
    } catch (e) {
        return !1
    }
}
function Fe(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}
function Se() {
    return Date.now() / 1e3
}
const ke = function() {
    const {performance: e} = L;
    if (!e || !e.now)
        return Se;
    const t = Date.now() - e.now()
      , n = null == e.timeOrigin ? t : e.timeOrigin;
    return () => (n + e.now()) / 1e3
}();
function Be(e, t) {
    return !!e && "object" == typeof e && !!e[t]
}
function Me(e) {
    return "string" == typeof e ? e : e ? Be(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
}
( () => {
    const {performance: e} = L;
    if (!e || !e.now)
        return;
    const t = 36e5
      , n = e.now()
      , r = Date.now()
      , o = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t
      , i = o < t
      , s = e.timing && e.timing.navigationStart
      , a = "number" == typeof s ? Math.abs(s + n - r) : t;
    (i || a < t) && o <= a && e.timeOrigin
}
)();
let Oe = null;
function Te() {
    Oe = L.onerror,
    L.onerror = function(e, t, n, r, o) {
        return xe("error", {
            column: r,
            error: o,
            line: n,
            msg: e,
            url: t
        }),
        !(!Oe || Oe.__SENTRY_LOADER__) && Oe.apply(this, arguments)
    }
    ,
    L.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let Ie = null;
function Re() {
    Ie = L.onunhandledrejection,
    L.onunhandledrejection = function(e) {
        return xe("unhandledrejection", e),
        !(Ie && !Ie.__SENTRY_LOADER__) || Ie.apply(this, arguments)
    }
    ,
    L.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
function Pe() {
    const e = L
      , t = e.crypto || e.msCrypto;
    let n = () => 16 * Math.random();
    try {
        if (t && t.randomUUID)
            return t.randomUUID().replace(/-/g, "");
        t && t.getRandomValues && (n = () => {
            const e = new Uint8Array(1);
            return t.getRandomValues(e),
            e[0]
        }
        )
    } catch (r) {}
    return "10000000100040008000100000000000".replace(/[018]/g, (e => (e ^ (15 & n()) >> e / 4).toString(16)))
}
function $e(e) {
    return e.exception && e.exception.values ? e.exception.values[0] : void 0
}
function je(e) {
    const {message: t, event_id: n} = e;
    if (t)
        return t;
    const r = $e(e);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}
function Ue(e, t, n) {
    const r = e.exception = e.exception || {}
      , o = r.values = r.values || []
      , i = o[0] = o[0] || {};
    i.value || (i.value = t || ""),
    i.type || (i.type = "Error")
}
function Ge(e, t) {
    const n = $e(e);
    if (!n)
        return;
    const r = n.mechanism;
    if (n.mechanism = {
        type: "generic",
        handled: !0,
        ...r,
        ...t
    },
    t && "data"in t) {
        const e = {
            ...r && r.data,
            ...t.data
        };
        n.mechanism.data = e
    }
}
function Ne(e) {
    if (e && e.__sentry_captured__)
        return !0;
    try {
        re(e, "__sentry_captured__", !0)
    } catch (t) {}
    return !1
}
function Le(e) {
    return Array.isArray(e) ? e : [e]
}
function qe(e, t=100, n=1 / 0) {
    try {
        return We("", e, t, n)
    } catch (r) {
        return {
            ERROR: `**non-serializable** (${r})`
        }
    }
}
function ze(e, t=3, n=102400) {
    const r = qe(e, t);
    return o = r,
    function(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }(JSON.stringify(o)) > n ? ze(e, t - 1, n) : r;
    var o
}
function We(e, t, n=1 / 0, r=1 / 0, o=function() {
    const e = "function" == typeof WeakSet
      , t = e ? new WeakSet : [];
    return [function(n) {
        if (e)
            return !!t.has(n) || (t.add(n),
            !1);
        for (let e = 0; e < t.length; e++)
            if (t[e] === n)
                return !0;
        return t.push(n),
        !1
    }
    , function(n) {
        if (e)
            t.delete(n);
        else
            for (let e = 0; e < t.length; e++)
                if (t[e] === n) {
                    t.splice(e, 1);
                    break
                }
    }
    ]
}()) {
    const [i,s] = o;
    if (null == t || ["boolean", "string"].includes(typeof t) || "number" == typeof t && Number.isFinite(t))
        return t;
    const a = function(e, t) {
        try {
            if ("domain" === e && t && "object" == typeof t && t._events)
                return "[Domain]";
            if ("domainEmitter" === e)
                return "[DomainEmitter]";
            if ("undefined" != typeof global && t === global)
                return "[Global]";
            if ("undefined" != typeof window && t === window)
                return "[Window]";
            if ("undefined" != typeof document && t === document)
                return "[Document]";
            if (O(t))
                return "[VueViewModel]";
            if (S(n = t) && "nativeEvent"in n && "preventDefault"in n && "stopPropagation"in n)
                return "[SyntheticEvent]";
            if ("number" == typeof t && !Number.isFinite(t))
                return `[${t}]`;
            if ("function" == typeof t)
                return `[Function: ${ye(t)}]`;
            if ("symbol" == typeof t)
                return `[${String(t)}]`;
            if ("bigint" == typeof t)
                return `[BigInt: ${String(t)}]`;
            const r = function(e) {
                const t = Object.getPrototypeOf(e);
                return t ? t.constructor.name : "null prototype"
            }(t);
            return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
        var n
    }(e, t);
    if (!a.startsWith("[object "))
        return a;
    if (t.__sentry_skip_normalization__)
        return t;
    const l = "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : n;
    if (0 === l)
        return a.replace("object ", "");
    if (i(t))
        return "[Circular ~]";
    const c = t;
    if (c && "function" == typeof c.toJSON)
        try {
            return We("", c.toJSON(), l - 1, r, o)
        } catch (f) {}
    const u = Array.isArray(t) ? [] : {};
    let d = 0;
    const p = se(t);
    for (const h in p) {
        if (!Object.prototype.hasOwnProperty.call(p, h))
            continue;
        if (d >= r) {
            u[h] = "[MaxProperties ~]";
            break
        }
        const e = p[h];
        u[h] = We(h, e, l - 1, r, o),
        d++
    }
    return s(t),
    u
}
var Ve, He;
function Ye(e) {
    return new Ke((t => {
        t(e)
    }
    ))
}
function Je(e) {
    return new Ke(( (t, n) => {
        n(e)
    }
    ))
}
(He = Ve || (Ve = {}))[He.PENDING = 0] = "PENDING",
He[He.RESOLVED = 1] = "RESOLVED",
He[He.REJECTED = 2] = "REJECTED";
class Ke {
    constructor(e) {
        Ke.prototype.__init.call(this),
        Ke.prototype.__init2.call(this),
        Ke.prototype.__init3.call(this),
        Ke.prototype.__init4.call(this),
        this._state = Ve.PENDING,
        this._handlers = [];
        try {
            e(this._resolve, this._reject)
        } catch (t) {
            this._reject(t)
        }
    }
    then(e, t) {
        return new Ke(( (n, r) => {
            this._handlers.push([!1, t => {
                if (e)
                    try {
                        n(e(t))
                    } catch (o) {
                        r(o)
                    }
                else
                    n(t)
            }
            , e => {
                if (t)
                    try {
                        n(t(e))
                    } catch (o) {
                        r(o)
                    }
                else
                    r(e)
            }
            ]),
            this._executeHandlers()
        }
        ))
    }
    catch(e) {
        return this.then((e => e), e)
    }
    finally(e) {
        return new Ke(( (t, n) => {
            let r, o;
            return this.then((t => {
                o = !1,
                r = t,
                e && e()
            }
            ), (t => {
                o = !0,
                r = t,
                e && e()
            }
            )).then(( () => {
                o ? n(r) : t(r)
            }
            ))
        }
        ))
    }
    __init() {
        this._resolve = e => {
            this._setResult(Ve.RESOLVED, e)
        }
    }
    __init2() {
        this._reject = e => {
            this._setResult(Ve.REJECTED, e)
        }
    }
    __init3() {
        this._setResult = (e, t) => {
            this._state === Ve.PENDING && (B(t) ? t.then(this._resolve, this._reject) : (this._state = e,
            this._value = t,
            this._executeHandlers()))
        }
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === Ve.PENDING)
                return;
            const e = this._handlers.slice();
            this._handlers = [],
            e.forEach((e => {
                e[0] || (this._state === Ve.RESOLVED && e[1](this._value),
                this._state === Ve.REJECTED && e[2](this._value),
                e[0] = !0)
            }
            ))
        }
    }
}
function Xe(e) {
    if (!e)
        return {};
    const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t)
        return {};
    const n = t[6] || ""
      , r = t[8] || "";
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: r,
        relative: t[5] + n + r
    }
}
const Ze = ["fatal", "error", "warning", "log", "info", "debug"];
const Qe = /^sentry-/;
function et(e) {
    return e.split(",").map((e => e.split("=").map((e => decodeURIComponent(e.trim()))))).reduce(( (e, [t,n]) => (t && n && (e[t] = n),
    e)), {})
}
function tt(e, t=[]) {
    return [e, t]
}
function nt(e, t) {
    const [n,r] = e;
    return [n, [...r, t]]
}
function rt(e, t) {
    const n = e[1];
    for (const r of n)
        if (t(r, r[0].type))
            return !0;
    return !1
}
function ot(e) {
    return L.__SENTRY__ && L.__SENTRY__.encodePolyfill ? L.__SENTRY__.encodePolyfill(e) : (new TextEncoder).encode(e)
}
function it(e) {
    const [t,n] = e;
    let r = JSON.stringify(t);
    function o(e) {
        "string" == typeof r ? r = "string" == typeof e ? r + e : [ot(r), e] : r.push("string" == typeof e ? ot(e) : e)
    }
    for (const s of n) {
        const [e,t] = s;
        if (o(`\n${JSON.stringify(e)}\n`),
        "string" == typeof t || t instanceof Uint8Array)
            o(t);
        else {
            let e;
            try {
                e = JSON.stringify(t)
            } catch (i) {
                e = JSON.stringify(qe(t))
            }
            o(e)
        }
    }
    return "string" == typeof r ? r : function(e) {
        const t = e.reduce(( (e, t) => e + t.length), 0)
          , n = new Uint8Array(t);
        let r = 0;
        for (const o of e)
            n.set(o, r),
            r += o.length;
        return n
    }(r)
}
function st(e) {
    const t = "string" == typeof e.data ? ot(e.data) : e.data;
    return [ce({
        type: "attachment",
        length: t.length,
        filename: e.filename,
        content_type: e.contentType,
        attachment_type: e.attachmentType
    }), t]
}
const at = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket"
};
function lt(e) {
    return at[e]
}
function ct(e) {
    if (!e || !e.sdk)
        return;
    const {name: t, version: n} = e.sdk;
    return {
        name: t,
        version: n
    }
}
function ut() {
    return {
        traceId: Pe(),
        spanId: Pe().substring(16)
    }
}
const dt = L
  , pt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function ft() {
    return ht(L),
    L
}
function ht(e) {
    const t = e.__SENTRY__ = e.__SENTRY__ || {};
    return t.version = t.version || N,
    t[N] = t[N] || {}
}
function mt(e, t={}) {
    if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
    e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
    e.timestamp = t.timestamp || ke(),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = 32 === t.sid.length ? t.sid : Pe()),
    void 0 !== t.init && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    "number" == typeof t.started && (e.started = t.started),
    e.ignoreDuration)
        e.duration = void 0;
    else if ("number" == typeof t.duration)
        e.duration = t.duration;
    else {
        const t = e.timestamp - e.started;
        e.duration = t >= 0 ? t : 0
    }
    t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    "number" == typeof t.errors && (e.errors = t.errors),
    t.status && (e.status = t.status)
}
const gt = "_sentrySpan";
function yt(e, t) {
    t ? re(e, gt, t) : delete e[gt]
}
function Dt(e) {
    return e[gt]
}
class vt {
    constructor() {
        this._notifyingListeners = !1,
        this._scopeListeners = [],
        this._eventProcessors = [],
        this._breadcrumbs = [],
        this._attachments = [],
        this._user = {},
        this._tags = {},
        this._extra = {},
        this._contexts = {},
        this._sdkProcessingMetadata = {},
        this._propagationContext = ut()
    }
    clone() {
        const e = new vt;
        return e._breadcrumbs = [...this._breadcrumbs],
        e._tags = {
            ...this._tags
        },
        e._extra = {
            ...this._extra
        },
        e._contexts = {
            ...this._contexts
        },
        e._user = this._user,
        e._level = this._level,
        e._session = this._session,
        e._transactionName = this._transactionName,
        e._fingerprint = this._fingerprint,
        e._eventProcessors = [...this._eventProcessors],
        e._requestSession = this._requestSession,
        e._attachments = [...this._attachments],
        e._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        },
        e._propagationContext = {
            ...this._propagationContext
        },
        e._client = this._client,
        e._lastEventId = this._lastEventId,
        yt(e, Dt(this)),
        e
    }
    setClient(e) {
        this._client = e
    }
    setLastEventId(e) {
        this._lastEventId = e
    }
    getClient() {
        return this._client
    }
    lastEventId() {
        return this._lastEventId
    }
    addScopeListener(e) {
        this._scopeListeners.push(e)
    }
    addEventProcessor(e) {
        return this._eventProcessors.push(e),
        this
    }
    setUser(e) {
        return this._user = e || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        },
        this._session && mt(this._session, {
            user: e
        }),
        this._notifyScopeListeners(),
        this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(e) {
        return this._requestSession = e,
        this
    }
    setTags(e) {
        return this._tags = {
            ...this._tags,
            ...e
        },
        this._notifyScopeListeners(),
        this
    }
    setTag(e, t) {
        return this._tags = {
            ...this._tags,
            [e]: t
        },
        this._notifyScopeListeners(),
        this
    }
    setExtras(e) {
        return this._extra = {
            ...this._extra,
            ...e
        },
        this._notifyScopeListeners(),
        this
    }
    setExtra(e, t) {
        return this._extra = {
            ...this._extra,
            [e]: t
        },
        this._notifyScopeListeners(),
        this
    }
    setFingerprint(e) {
        return this._fingerprint = e,
        this._notifyScopeListeners(),
        this
    }
    setLevel(e) {
        return this._level = e,
        this._notifyScopeListeners(),
        this
    }
    setTransactionName(e) {
        return this._transactionName = e,
        this._notifyScopeListeners(),
        this
    }
    setContext(e, t) {
        return null === t ? delete this._contexts[e] : this._contexts[e] = t,
        this._notifyScopeListeners(),
        this
    }
    setSession(e) {
        return e ? this._session = e : delete this._session,
        this._notifyScopeListeners(),
        this
    }
    getSession() {
        return this._session
    }
    update(e) {
        if (!e)
            return this;
        const t = "function" == typeof e ? e(this) : e
          , [n,r] = t instanceof Ct ? [t.getScopeData(), t.getRequestSession()] : S(t) ? [e, e.requestSession] : []
          , {tags: o, extra: i, user: s, contexts: a, level: l, fingerprint: c=[], propagationContext: u} = n || {};
        return this._tags = {
            ...this._tags,
            ...o
        },
        this._extra = {
            ...this._extra,
            ...i
        },
        this._contexts = {
            ...this._contexts,
            ...a
        },
        s && Object.keys(s).length && (this._user = s),
        l && (this._level = l),
        c.length && (this._fingerprint = c),
        u && (this._propagationContext = u),
        r && (this._requestSession = r),
        this
    }
    clear() {
        return this._breadcrumbs = [],
        this._tags = {},
        this._extra = {},
        this._user = {},
        this._contexts = {},
        this._level = void 0,
        this._transactionName = void 0,
        this._fingerprint = void 0,
        this._requestSession = void 0,
        this._session = void 0,
        yt(this, void 0),
        this._attachments = [],
        this._propagationContext = ut(),
        this._notifyScopeListeners(),
        this
    }
    addBreadcrumb(e, t) {
        const n = "number" == typeof t ? t : 100;
        if (n <= 0)
            return this;
        const r = {
            timestamp: Se(),
            ...e
        }
          , o = this._breadcrumbs;
        return o.push(r),
        this._breadcrumbs = o.length > n ? o.slice(-n) : o,
        this._notifyScopeListeners(),
        this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [],
        this._notifyScopeListeners(),
        this
    }
    addAttachment(e) {
        return this._attachments.push(e),
        this
    }
    clearAttachments() {
        return this._attachments = [],
        this
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: Dt(this)
        }
    }
    setSDKProcessingMetadata(e) {
        return this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...e
        },
        this
    }
    setPropagationContext(e) {
        return this._propagationContext = e,
        this
    }
    getPropagationContext() {
        return this._propagationContext
    }
    captureException(e, t) {
        const n = t && t.event_id ? t.event_id : Pe();
        if (!this._client)
            return X.warn("No client configured on scope - will not capture exception!"),
            n;
        const r = new Error("Sentry syntheticException");
        return this._client.captureException(e, {
            originalException: e,
            syntheticException: r,
            ...t,
            event_id: n
        }, this),
        n
    }
    captureMessage(e, t, n) {
        const r = n && n.event_id ? n.event_id : Pe();
        if (!this._client)
            return X.warn("No client configured on scope - will not capture message!"),
            r;
        const o = new Error(e);
        return this._client.captureMessage(e, t, {
            originalException: e,
            syntheticException: o,
            ...n,
            event_id: r
        }, this),
        r
    }
    captureEvent(e, t) {
        const n = t && t.event_id ? t.event_id : Pe();
        return this._client ? (this._client.captureEvent(e, {
            ...t,
            event_id: n
        }, this),
        n) : (X.warn("No client configured on scope - will not capture event!"),
        n)
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0,
        this._scopeListeners.forEach((e => {
            e(this)
        }
        )),
        this._notifyingListeners = !1)
    }
}
const Ct = vt;
class _t {
    constructor(e, t) {
        let n, r;
        n = e || new Ct,
        r = t || new Ct,
        this._stack = [{
            scope: n
        }],
        this._isolationScope = r
    }
    withScope(e) {
        const t = this._pushScope();
        let n;
        try {
            n = e(t)
        } catch (r) {
            throw this._popScope(),
            r
        }
        return B(n) ? n.then((e => (this._popScope(),
        e)), (e => {
            throw this._popScope(),
            e
        }
        )) : (this._popScope(),
        n)
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getIsolationScope() {
        return this._isolationScope
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    _pushScope() {
        const e = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: e
        }),
        e
    }
    _popScope() {
        return !(this._stack.length <= 1 || !this._stack.pop())
    }
}
function At() {
    const e = ht(ft());
    return e.stack = e.stack || new _t(q("defaultCurrentScope", ( () => new Ct)),q("defaultIsolationScope", ( () => new Ct)))
}
function xt(e) {
    return At().withScope(e)
}
function Et(e, t) {
    const n = At();
    return n.withScope(( () => (n.getStackTop().scope = e,
    t(e))))
}
function wt(e) {
    return At().withScope(( () => e(At().getIsolationScope())))
}
function bt(e) {
    const t = ht(e);
    return t.acs ? t.acs : {
        withIsolationScope: wt,
        withScope: xt,
        withSetScope: Et,
        withSetIsolationScope: (e, t) => wt(t),
        getCurrentScope: () => At().getScope(),
        getIsolationScope: () => At().getIsolationScope()
    }
}
function Ft() {
    return bt(ft()).getCurrentScope()
}
function St() {
    return bt(ft()).getIsolationScope()
}
function kt() {
    return Ft().getClient()
}
function Bt(e) {
    const t = e._sentryMetrics;
    if (!t)
        return;
    const n = {};
    for (const [,[r,o]] of t)
        (n[r] || (n[r] = [])).push(ce(o));
    return n
}
function Mt(e) {
    const {spanId: t, traceId: n} = e.spanContext()
      , {parent_span_id: r} = It(e);
    return ce({
        parent_span_id: r,
        span_id: t,
        trace_id: n
    })
}
function Ot(e) {
    return "number" == typeof e ? Tt(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? Tt(e.getTime()) : ke()
}
function Tt(e) {
    return e > 9999999999 ? e / 1e3 : e
}
function It(e) {
    if (function(e) {
        return "function" == typeof e.getSpanJSON
    }(e))
        return e.getSpanJSON();
    try {
        const {spanId: t, traceId: n} = e.spanContext();
        if (function(e) {
            const t = e;
            return !!(t.attributes && t.startTime && t.name && t.endTime && t.status)
        }(e)) {
            const {attributes: r, startTime: o, name: i, endTime: s, parentSpanId: a, status: l} = e;
            return ce({
                span_id: t,
                trace_id: n,
                data: r,
                description: i,
                parent_span_id: a,
                start_timestamp: Ot(o),
                timestamp: Ot(s) || void 0,
                status: Rt(l),
                op: r["sentry.op"],
                origin: r["sentry.origin"],
                _metrics_summary: Bt(e)
            })
        }
        return {
            span_id: t,
            trace_id: n
        }
    } catch (t) {
        return {}
    }
}
function Rt(e) {
    if (e && 0 !== e.code)
        return 1 === e.code ? "ok" : e.message || "unknown_error"
}
function Pt(e) {
    return e._sentryRootSpan || e
}
const $t = "production";
function jt(e, t) {
    const n = t.getOptions()
      , {publicKey: r} = t.getDsn() || {}
      , o = ce({
        environment: n.environment || $t,
        release: n.release,
        public_key: r,
        trace_id: e
    });
    return t.emit("createDsc", o),
    o
}
function Ut(e) {
    const t = kt();
    if (!t)
        return {};
    const n = jt(It(e).trace_id || "", t)
      , r = Pt(e)
      , o = r._frozenDsc;
    if (o)
        return o;
    const i = r.spanContext().traceState
      , s = i && i.get("sentry.dsc")
      , a = s && function(e) {
        const t = function(e) {
            if (e && (w(e) || Array.isArray(e)))
                return Array.isArray(e) ? e.reduce(( (e, t) => {
                    const n = et(t);
                    return Object.entries(n).forEach(( ([t,n]) => {
                        e[t] = n
                    }
                    )),
                    e
                }
                ), {}) : et(e)
        }(e);
        if (!t)
            return;
        const n = Object.entries(t).reduce(( (e, [t,n]) => (t.match(Qe) && (e[t.slice(7)] = n),
        e)), {});
        return Object.keys(n).length > 0 ? n : void 0
    }(s);
    if (a)
        return a;
    const l = It(r)
      , c = l.data || {}
      , u = c["sentry.sample_rate"];
    null != u && (n.sample_rate = `${u}`);
    const d = c["sentry.source"]
      , p = l.description;
    return "url" !== d && p && (n.transaction = p),
    function() {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
            return !1;
        const e = kt()
          , t = e && e.getOptions();
        return !!t && (t.enableTracing || "tracesSampleRate"in t || "tracesSampler"in t)
    }() && (n.sampled = String(function(e) {
        const {traceFlags: t} = e.spanContext();
        return 1 === t
    }(r))),
    t.emit("createDsc", n, r),
    n
}
function Gt(e, t, n, r=0) {
    return new Ke(( (o, i) => {
        const s = e[r];
        if (null === t || "function" != typeof s)
            o(t);
        else {
            const a = s({
                ...t
            }, n);
            pt && s.id && null === a && X.log(`Event processor "${s.id}" dropped event`),
            B(a) ? a.then((t => Gt(e, t, n, r + 1).then(o))).then(null, i) : Gt(e, a, n, r + 1).then(o).then(null, i)
        }
    }
    ))
}
function Nt(e, t) {
    const {extra: n, tags: r, user: o, contexts: i, level: s, sdkProcessingMetadata: a, breadcrumbs: l, fingerprint: c, eventProcessors: u, attachments: d, propagationContext: p, transactionName: f, span: h} = t;
    Lt(e, "extra", n),
    Lt(e, "tags", r),
    Lt(e, "user", o),
    Lt(e, "contexts", i),
    Lt(e, "sdkProcessingMetadata", a),
    s && (e.level = s),
    f && (e.transactionName = f),
    h && (e.span = h),
    l.length && (e.breadcrumbs = [...e.breadcrumbs, ...l]),
    c.length && (e.fingerprint = [...e.fingerprint, ...c]),
    u.length && (e.eventProcessors = [...e.eventProcessors, ...u]),
    d.length && (e.attachments = [...e.attachments, ...d]),
    e.propagationContext = {
        ...e.propagationContext,
        ...p
    }
}
function Lt(e, t, n) {
    if (n && Object.keys(n).length) {
        e[t] = {
            ...e[t]
        };
        for (const r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r])
    }
}
function qt(e, t, n, r, o, i) {
    const {normalizeDepth: s=3, normalizeMaxBreadth: a=1e3} = e
      , l = {
        ...t,
        event_id: t.event_id || n.event_id || Pe(),
        timestamp: t.timestamp || Se()
    }
      , c = n.integrations || e.integrations.map((e => e.name));
    !function(e, t) {
        const {environment: n, release: r, dist: o, maxValueLength: i=250} = t;
        "environment"in e || (e.environment = "environment"in t ? n : $t),
        void 0 === e.release && void 0 !== r && (e.release = r),
        void 0 === e.dist && void 0 !== o && (e.dist = o),
        e.message && (e.message = T(e.message, i));
        const s = e.exception && e.exception.values && e.exception.values[0];
        s && s.value && (s.value = T(s.value, i));
        const a = e.request;
        a && a.url && (a.url = T(a.url, i))
    }(l, e),
    function(e, t) {
        t.length > 0 && (e.sdk = e.sdk || {},
        e.sdk.integrations = [...e.sdk.integrations || [], ...t])
    }(l, c),
    o && o.emit("applyFrameMetadata", t),
    void 0 === t.type && function(e, t) {
        const n = L._sentryDebugIds;
        if (!n)
            return;
        let r;
        const o = zt.get(t);
        o ? r = o : (r = new Map,
        zt.set(t, r));
        const i = Object.entries(n).reduce(( (e, [n,o]) => {
            let i;
            const s = r.get(n);
            s ? i = s : (i = t(n),
            r.set(n, i));
            for (let t = i.length - 1; t >= 0; t--) {
                const n = i[t];
                if (n.filename) {
                    e[n.filename] = o;
                    break
                }
            }
            return e
        }
        ), {});
        try {
            e.exception.values.forEach((e => {
                e.stacktrace.frames.forEach((e => {
                    e.filename && (e.debug_id = i[e.filename])
                }
                ))
            }
            ))
        } catch (s) {}
    }(l, e.stackParser);
    const u = function(e, t) {
        if (!t)
            return e;
        const n = e ? e.clone() : new Ct;
        return n.update(t),
        n
    }(r, n.captureContext);
    n.mechanism && Ge(l, n.mechanism);
    const d = o ? o.getEventProcessors() : []
      , p = q("globalScope", ( () => new Ct)).getScopeData();
    i && Nt(p, i.getScopeData()),
    u && Nt(p, u.getScopeData());
    const f = [...n.attachments || [], ...p.attachments];
    return f.length && (n.attachments = f),
    function(e, t) {
        const {fingerprint: n, span: r, breadcrumbs: o, sdkProcessingMetadata: i} = t;
        !function(e, t) {
            const {extra: n, tags: r, user: o, contexts: i, level: s, transactionName: a} = t
              , l = ce(n);
            l && Object.keys(l).length && (e.extra = {
                ...l,
                ...e.extra
            });
            const c = ce(r);
            c && Object.keys(c).length && (e.tags = {
                ...c,
                ...e.tags
            });
            const u = ce(o);
            u && Object.keys(u).length && (e.user = {
                ...u,
                ...e.user
            });
            const d = ce(i);
            d && Object.keys(d).length && (e.contexts = {
                ...d,
                ...e.contexts
            }),
            s && (e.level = s),
            a && "transaction" !== e.type && (e.transaction = a)
        }(e, t),
        r && function(e, t) {
            e.contexts = {
                trace: Mt(t),
                ...e.contexts
            },
            e.sdkProcessingMetadata = {
                dynamicSamplingContext: Ut(t),
                ...e.sdkProcessingMetadata
            };
            const n = It(Pt(t)).description;
            n && !e.transaction && "transaction" === e.type && (e.transaction = n)
        }(e, r),
        function(e, t) {
            e.fingerprint = e.fingerprint ? Le(e.fingerprint) : [],
            t && (e.fingerprint = e.fingerprint.concat(t)),
            e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }(e, n),
        function(e, t) {
            const n = [...e.breadcrumbs || [], ...t];
            e.breadcrumbs = n.length ? n : void 0
        }(e, o),
        function(e, t) {
            e.sdkProcessingMetadata = {
                ...e.sdkProcessingMetadata,
                ...t
            }
        }(e, i)
    }(l, p),
    Gt([...d, ...p.eventProcessors], l, n).then((e => (e && function(e) {
        const t = {};
        try {
            e.exception.values.forEach((e => {
                e.stacktrace.frames.forEach((e => {
                    e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id),
                    delete e.debug_id)
                }
                ))
            }
            ))
        } catch (r) {}
        if (0 === Object.keys(t).length)
            return;
        e.debug_meta = e.debug_meta || {},
        e.debug_meta.images = e.debug_meta.images || [];
        const n = e.debug_meta.images;
        Object.entries(t).forEach(( ([e,t]) => {
            n.push({
                type: "sourcemap",
                code_file: e,
                debug_id: t
            })
        }
        ))
    }(e),
    "number" == typeof s && s > 0 ? function(e, t, n) {
        if (!e)
            return null;
        const r = {
            ...e,
            ...e.breadcrumbs && {
                breadcrumbs: e.breadcrumbs.map((e => ({
                    ...e,
                    ...e.data && {
                        data: qe(e.data, t, n)
                    }
                })))
            },
            ...e.user && {
                user: qe(e.user, t, n)
            },
            ...e.contexts && {
                contexts: qe(e.contexts, t, n)
            },
            ...e.extra && {
                extra: qe(e.extra, t, n)
            }
        };
        return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace,
        e.contexts.trace.data && (r.contexts.trace.data = qe(e.contexts.trace.data, t, n))),
        e.spans && (r.spans = e.spans.map((e => ({
            ...e,
            ...e.data && {
                data: qe(e.data, t, n)
            }
        })))),
        r
    }(e, s, a) : e)))
}
const zt = new WeakMap;
const Wt = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
function Vt(e, t) {
    return Ft().captureException(e, function(e) {
        if (e)
            return function(e) {
                return e instanceof Ct || "function" == typeof e
            }(e) || function(e) {
                return Object.keys(e).some((e => Wt.includes(e)))
            }(e) ? {
                captureContext: e
            } : e
    }(t))
}
function Ht(e, t) {
    const n = {
        captureContext: t
    };
    return Ft().captureMessage(e, void 0, n)
}
function Yt(e, t) {
    return Ft().captureEvent(e, t)
}
function Jt(e) {
    const t = kt()
      , n = St()
      , r = Ft()
      , {release: o, environment: i=$t} = t && t.getOptions() || {}
      , {userAgent: s} = L.navigator || {}
      , a = function(e) {
        const t = ke()
          , n = {
            sid: Pe(),
            init: !0,
            timestamp: t,
            started: t,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () => function(e) {
                return ce({
                    sid: `${e.sid}`,
                    init: e.init,
                    started: new Date(1e3 * e.started).toISOString(),
                    timestamp: new Date(1e3 * e.timestamp).toISOString(),
                    status: e.status,
                    errors: e.errors,
                    did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                    duration: e.duration,
                    abnormal_mechanism: e.abnormal_mechanism,
                    attrs: {
                        release: e.release,
                        environment: e.environment,
                        ip_address: e.ipAddress,
                        user_agent: e.userAgent
                    }
                })
            }(n)
        };
        return e && mt(n, e),
        n
    }({
        release: o,
        environment: i,
        user: r.getUser() || n.getUser(),
        ...s && {
            userAgent: s
        },
        ...e
    })
      , l = n.getSession();
    return l && "ok" === l.status && mt(l, {
        status: "exited"
    }),
    Kt(),
    n.setSession(a),
    r.setSession(a),
    a
}
function Kt() {
    const e = St()
      , t = Ft()
      , n = t.getSession() || e.getSession();
    n && function(e) {
        let t = {};
        "ok" === e.status && (t = {
            status: "exited"
        }),
        mt(e, t)
    }(n),
    Xt(),
    e.setSession(),
    t.setSession()
}
function Xt() {
    const e = St()
      , t = Ft()
      , n = kt()
      , r = t.getSession() || e.getSession();
    r && n && n.captureSession(r)
}
function Zt(e=!1) {
    e ? Kt() : Xt()
}
const Qt = [];
function en(e) {
    const t = e.defaultIntegrations || []
      , n = e.integrations;
    let r;
    t.forEach((e => {
        e.isDefaultInstance = !0
    }
    )),
    r = Array.isArray(n) ? [...t, ...n] : "function" == typeof n ? Le(n(t)) : t;
    const o = function(e) {
        const t = {};
        return e.forEach((e => {
            const {name: n} = e
              , r = t[n];
            r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
        }
        )),
        Object.values(t)
    }(r)
      , i = o.findIndex((e => "Debug" === e.name));
    if (i > -1) {
        const [e] = o.splice(i, 1);
        o.push(e)
    }
    return o
}
function tn(e, t) {
    for (const n of t)
        n && n.afterAllSetup && n.afterAllSetup(e)
}
function nn(e, t, n) {
    if (n[t.name])
        pt && X.log(`Integration skipped because it was already installed: ${t.name}`);
    else {
        if (n[t.name] = t,
        -1 === Qt.indexOf(t.name) && "function" == typeof t.setupOnce && (t.setupOnce(),
        Qt.push(t.name)),
        t.setup && "function" == typeof t.setup && t.setup(e),
        "function" == typeof t.preprocessEvent) {
            const n = t.preprocessEvent.bind(t);
            e.on("preprocessEvent", ( (t, r) => n(t, r, e)))
        }
        if ("function" == typeof t.processEvent) {
            const n = t.processEvent.bind(t)
              , r = Object.assign(( (t, r) => n(t, r, e)), {
                id: t.name
            });
            e.addEventProcessor(r)
        }
        pt && X.log(`Integration installed: ${t.name}`)
    }
}
const rn = "Not capturing exception because it's already been captured.";
class on {
    constructor(e) {
        if (this._options = e,
        this._integrations = {},
        this._numProcessing = 0,
        this._outcomes = {},
        this._hooks = {},
        this._eventProcessors = [],
        e.dsn ? this._dsn = function(e) {
            const t = "string" == typeof e ? function(e) {
                const t = Z.exec(e);
                if (!t)
                    return void K(( () => {
                        console.error(`Invalid Sentry Dsn: ${e}`)
                    }
                    ));
                const [n,r,o="",i="",s="",a=""] = t.slice(1);
                let l = ""
                  , c = a;
                const u = c.split("/");
                if (u.length > 1 && (l = u.slice(0, -1).join("/"),
                c = u.pop()),
                c) {
                    const e = c.match(/^\d+/);
                    e && (c = e[0])
                }
                return ee({
                    host: i,
                    pass: o,
                    path: l,
                    projectId: c,
                    port: s,
                    protocol: n,
                    publicKey: r
                })
            }(e) : ee(e);
            if (t && function(e) {
                if (!H)
                    return !0;
                const {port: t, projectId: n, protocol: r} = e;
                return !(["protocol", "publicKey", "host", "projectId"].find((t => !e[t] && (X.error(`Invalid Sentry Dsn: ${t} missing`),
                !0))) || (n.match(/^\d+$/) ? function(e) {
                    return "http" === e || "https" === e
                }(r) ? t && isNaN(parseInt(t, 10)) && (X.error(`Invalid Sentry Dsn: Invalid port ${t}`),
                1) : (X.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
                1) : (X.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                1)))
            }(t))
                return t
        }(e.dsn) : pt && X.warn("No DSN provided, client will not send events."),
        this._dsn) {
            const o = (t = this._dsn,
            n = e.tunnel,
            r = e._metadata ? e._metadata.sdk : void 0,
            n || `${function(e) {
                return `${function(e) {
                    const t = e.protocol ? `${e.protocol}:` : ""
                      , n = e.port ? `:${e.port}` : "";
                    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
                }(e)}${e.projectId}/envelope/`
            }(t)}?${function(e, t) {
                return n = {
                    sentry_key: e.publicKey,
                    sentry_version: "7",
                    ...t && {
                        sentry_client: `${t.name}/${t.version}`
                    }
                },
                Object.keys(n).map((e => `${encodeURIComponent(e)}=${encodeURIComponent(n[e])}`)).join("&");
                var n
            }(t, r)}`);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: o
            })
        }
        var t, n, r
    }
    captureException(e, t, n) {
        const r = Pe();
        if (Ne(e))
            return pt && X.log(rn),
            r;
        const o = {
            event_id: r,
            ...t
        };
        return this._process(this.eventFromException(e, o).then((e => this._captureEvent(e, o, n)))),
        o.event_id
    }
    captureMessage(e, t, n, r) {
        const o = {
            event_id: Pe(),
            ...n
        }
          , i = b(e) ? e : String(e)
          , s = F(e) ? this.eventFromMessage(i, t, o) : this.eventFromException(e, o);
        return this._process(s.then((e => this._captureEvent(e, o, r)))),
        o.event_id
    }
    captureEvent(e, t, n) {
        const r = Pe();
        if (t && t.originalException && Ne(t.originalException))
            return pt && X.log(rn),
            r;
        const o = {
            event_id: r,
            ...t
        }
          , i = (e.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(e, o, i || n)),
        o.event_id
    }
    captureSession(e) {
        "string" != typeof e.release ? pt && X.warn("Discarded session because of missing or non-string release") : (this.sendSession(e),
        mt(e, {
            init: !1
        }))
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    flush(e) {
        const t = this._transport;
        return t ? (this.emit("flush"),
        this._isClientDoneProcessing(e).then((n => t.flush(e).then((e => n && e))))) : Ye(!0)
    }
    close(e) {
        return this.flush(e).then((e => (this.getOptions().enabled = !1,
        this.emit("close"),
        e)))
    }
    getEventProcessors() {
        return this._eventProcessors
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e)
    }
    init() {
        (this._isEnabled() || this._options.integrations.some(( ({name: e}) => e.startsWith("Spotlight")))) && this._setupIntegrations()
    }
    getIntegrationByName(e) {
        return this._integrations[e]
    }
    addIntegration(e) {
        const t = this._integrations[e.name];
        nn(this, e, this._integrations),
        t || tn(this, [e])
    }
    sendEvent(e, t={}) {
        this.emit("beforeSendEvent", e, t);
        let n = function(e, t, n, r) {
            const o = ct(n)
              , i = e.type && "replay_event" !== e.type ? e.type : "event";
            !function(e, t) {
                t && (e.sdk = e.sdk || {},
                e.sdk.name = e.sdk.name || t.name,
                e.sdk.version = e.sdk.version || t.version,
                e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []],
                e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []])
            }(e, n && n.sdk);
            const s = function(e, t, n, r) {
                const o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                return {
                    event_id: e.event_id,
                    sent_at: (new Date).toISOString(),
                    ...t && {
                        sdk: t
                    },
                    ...!!n && r && {
                        dsn: Q(r)
                    },
                    ...o && {
                        trace: ce({
                            ...o
                        })
                    }
                }
            }(e, o, r, t);
            return delete e.sdkProcessingMetadata,
            tt(s, [[{
                type: i
            }, e]])
        }(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const o of t.attachments || [])
            n = nt(n, st(o));
        const r = this.sendEnvelope(n);
        r && r.then((t => this.emit("afterSendEvent", e, t)), null)
    }
    sendSession(e) {
        const t = function(e, t, n, r) {
            const o = ct(n);
            return tt({
                sent_at: (new Date).toISOString(),
                ...o && {
                    sdk: o
                },
                ...!!r && t && {
                    dsn: Q(t)
                }
            }, ["aggregates"in e ? [{
                type: "sessions"
            }, e] : [{
                type: "session"
            }, e.toJSON()]])
        }(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(t)
    }
    recordDroppedEvent(e, t, n) {
        if (this._options.sendClientReports) {
            const r = "number" == typeof n ? n : 1
              , o = `${e}:${t}`;
            pt && X.log(`Recording outcome: "${o}"${r > 1 ? ` (${r} times)` : ""}`),
            this._outcomes[o] = (this._outcomes[o] || 0) + r
        }
    }
    on(e, t) {
        const n = this._hooks[e] = this._hooks[e] || [];
        return n.push(t),
        () => {
            const e = n.indexOf(t);
            e > -1 && n.splice(e, 1)
        }
    }
    emit(e, ...t) {
        const n = this._hooks[e];
        n && n.forEach((e => e(...t)))
    }
    sendEnvelope(e) {
        return this.emit("beforeEnvelope", e),
        this._isEnabled() && this._transport ? this._transport.send(e).then(null, (e => (pt && X.error("Error while sending event:", e),
        e))) : (pt && X.error("Transport disabled"),
        Ye({}))
    }
    _setupIntegrations() {
        const {integrations: e} = this._options;
        this._integrations = function(e, t) {
            const n = {};
            return t.forEach((t => {
                t && nn(e, t, n)
            }
            )),
            n
        }(this, e),
        tn(this, e)
    }
    _updateSessionFromEvent(e, t) {
        let n = !1
          , r = !1;
        const o = t.exception && t.exception.values;
        if (o) {
            r = !0;
            for (const e of o) {
                const t = e.mechanism;
                if (t && !1 === t.handled) {
                    n = !0;
                    break
                }
            }
        }
        const i = "ok" === e.status;
        (i && 0 === e.errors || i && n) && (mt(e, {
            ...n && {
                status: "crashed"
            },
            errors: e.errors || Number(r || n)
        }),
        this.captureSession(e))
    }
    _isClientDoneProcessing(e) {
        return new Ke((t => {
            let n = 0;
            const r = setInterval(( () => {
                0 == this._numProcessing ? (clearInterval(r),
                t(!0)) : (n += 1,
                e && n >= e && (clearInterval(r),
                t(!1)))
            }
            ), 1)
        }
        ))
    }
    _isEnabled() {
        return !1 !== this.getOptions().enabled && void 0 !== this._transport
    }
    _prepareEvent(e, t, n, r=St()) {
        const o = this.getOptions()
          , i = Object.keys(this._integrations);
        return !t.integrations && i.length > 0 && (t.integrations = i),
        this.emit("preprocessEvent", e, t),
        e.type || r.setLastEventId(e.event_id || t.event_id),
        qt(o, e, t, n, this, r).then((e => {
            if (null === e)
                return e;
            const t = {
                ...r.getPropagationContext(),
                ...n ? n.getPropagationContext() : void 0
            };
            if ((!e.contexts || !e.contexts.trace) && t) {
                const {traceId: n, spanId: r, parentSpanId: o, dsc: i} = t;
                e.contexts = {
                    trace: ce({
                        trace_id: n,
                        span_id: r,
                        parent_span_id: o
                    }),
                    ...e.contexts
                };
                const s = i || jt(n, this);
                e.sdkProcessingMetadata = {
                    dynamicSamplingContext: s,
                    ...e.sdkProcessingMetadata
                }
            }
            return e
        }
        ))
    }
    _captureEvent(e, t={}, n) {
        return this._processEvent(e, t, n).then((e => e.event_id), (e => {
            if (pt) {
                const t = e;
                "log" === t.logLevel ? X.log(t.message) : X.warn(t)
            }
        }
        ))
    }
    _processEvent(e, t, n) {
        const r = this.getOptions()
          , {sampleRate: o} = r
          , i = an(e)
          , s = sn(e)
          , a = e.type || "error"
          , l = `before send for type \`${a}\``
          , c = void 0 === o ? void 0 : function(e) {
            if ("boolean" == typeof e)
                return Number(e);
            const t = "string" == typeof e ? parseFloat(e) : e;
            if (!("number" != typeof t || isNaN(t) || t < 0 || t > 1))
                return t;
            pt && X.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`)
        }(o);
        if (s && "number" == typeof c && Math.random() > c)
            return this.recordDroppedEvent("sample_rate", "error", e),
            Je(new te(`Discarding event because it's not included in the random sample (sampling rate = ${o})`,"log"));
        const u = "replay_event" === a ? "replay" : a
          , d = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(e, t, n, d).then((n => {
            if (null === n)
                throw this.recordDroppedEvent("event_processor", u, e),
                new te("An event processor returned `null`, will not send event.","log");
            if (t.data && !0 === t.data.__sentry__)
                return n;
            const o = function(e, t, n, r) {
                const {beforeSend: o, beforeSendTransaction: i, beforeSendSpan: s} = t;
                if (sn(n) && o)
                    return o(n, r);
                if (an(n)) {
                    if (n.spans && s) {
                        const t = [];
                        for (const r of n.spans) {
                            const n = s(r);
                            n ? t.push(n) : e.recordDroppedEvent("before_send", "span")
                        }
                        n.spans = t
                    }
                    if (i) {
                        if (n.spans) {
                            const e = n.spans.length;
                            n.sdkProcessingMetadata = {
                                ...n.sdkProcessingMetadata,
                                spanCountBeforeProcessing: e
                            }
                        }
                        return i(n, r)
                    }
                }
                return n
            }(this, r, n, t);
            return function(e, t) {
                const n = `${t} must return \`null\` or a valid event.`;
                if (B(e))
                    return e.then((e => {
                        if (!S(e) && null !== e)
                            throw new te(n);
                        return e
                    }
                    ), (e => {
                        throw new te(`${t} rejected with ${e}`)
                    }
                    ));
                if (!S(e) && null !== e)
                    throw new te(n);
                return e
            }(o, l)
        }
        )).then((r => {
            if (null === r) {
                if (this.recordDroppedEvent("before_send", u, e),
                i) {
                    const t = 1 + (e.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", t)
                }
                throw new te(`${l} returned \`null\`, will not send event.`,"log")
            }
            const o = n && n.getSession();
            if (!i && o && this._updateSessionFromEvent(o, r),
            i) {
                const e = (r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r.spans ? r.spans.length : 0);
                e > 0 && this.recordDroppedEvent("before_send", "span", e)
            }
            const s = r.transaction_info;
            if (i && s && r.transaction !== e.transaction) {
                const e = "custom";
                r.transaction_info = {
                    ...s,
                    source: e
                }
            }
            return this.sendEvent(r, t),
            r
        }
        )).then(null, (e => {
            if (e instanceof te)
                throw e;
            throw this.captureException(e, {
                data: {
                    __sentry__: !0
                },
                originalException: e
            }),
            new te(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)
        }
        ))
    }
    _process(e) {
        this._numProcessing++,
        e.then((e => (this._numProcessing--,
        e)), (e => (this._numProcessing--,
        e)))
    }
    _clearOutcomes() {
        const e = this._outcomes;
        return this._outcomes = {},
        Object.entries(e).map(( ([e,t]) => {
            const [n,r] = e.split(":");
            return {
                reason: n,
                category: r,
                quantity: t
            }
        }
        ))
    }
    _flushOutcomes() {
        pt && X.log("Flushing outcomes...");
        const e = this._clearOutcomes();
        if (0 === e.length)
            return void (pt && X.log("No outcomes to send"));
        if (!this._dsn)
            return void (pt && X.log("No dsn provided, will not send outcomes"));
        pt && X.log("Sending outcomes:", e);
        const t = (n = e,
        tt((r = this._options.tunnel && Q(this._dsn)) ? {
            dsn: r
        } : {}, [[{
            type: "client_report"
        }, {
            timestamp: Se(),
            discarded_events: n
        }]]));
        var n, r;
        this.sendEnvelope(t)
    }
}
function sn(e) {
    return void 0 === e.type
}
function an(e) {
    return "transaction" === e.type
}
function ln(e, t, n=function(e) {
    const t = [];
    function n(e) {
        return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0)
    }
    return {
        $: t,
        add: function(r) {
            if (!(void 0 === e || t.length < e))
                return Je(new te("Not adding Promise because buffer limit was reached."));
            const o = r();
            return -1 === t.indexOf(o) && t.push(o),
            o.then(( () => n(o))).then(null, ( () => n(o).then(null, ( () => {}
            )))),
            o
        },
        drain: function(e) {
            return new Ke(( (n, r) => {
                let o = t.length;
                if (!o)
                    return n(!0);
                const i = setTimeout(( () => {
                    e && e > 0 && n(!1)
                }
                ), e);
                t.forEach((e => {
                    Ye(e).then(( () => {
                        --o || (clearTimeout(i),
                        n(!0))
                    }
                    ), r)
                }
                ))
            }
            ))
        }
    }
}(e.bufferSize || 64)) {
    let r = {};
    return {
        send: function(o) {
            const i = [];
            if (rt(o, ( (t, n) => {
                const o = lt(n);
                if (function(e, t, n=Date.now()) {
                    return function(e, t) {
                        return e[t] || e.all || 0
                    }(e, t) > n
                }(r, o)) {
                    const r = cn(t, n);
                    e.recordDroppedEvent("ratelimit_backoff", o, r)
                } else
                    i.push(t)
            }
            )),
            0 === i.length)
                return Ye({});
            const s = tt(o[0], i)
              , a = t => {
                rt(s, ( (n, r) => {
                    const o = cn(n, r);
                    e.recordDroppedEvent(t, lt(r), o)
                }
                ))
            }
            ;
            return n.add(( () => t({
                body: it(s)
            }).then((e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && pt && X.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
            r = function(e, {statusCode: t, headers: n}, r=Date.now()) {
                const o = {
                    ...e
                }
                  , i = n && n["x-sentry-rate-limits"]
                  , s = n && n["retry-after"];
                if (i)
                    for (const a of i.trim().split(",")) {
                        const [e,t,,,n] = a.split(":", 5)
                          , i = parseInt(e, 10)
                          , s = 1e3 * (isNaN(i) ? 60 : i);
                        if (t)
                            for (const a of t.split(";"))
                                "metric_bucket" === a && n && !n.split(";").includes("custom") || (o[a] = r + s);
                        else
                            o.all = r + s
                    }
                else
                    s ? o.all = r + function(e, t=Date.now()) {
                        const n = parseInt(`${e}`, 10);
                        if (!isNaN(n))
                            return 1e3 * n;
                        const r = Date.parse(`${e}`);
                        return isNaN(r) ? 6e4 : r - t
                    }(s, r) : 429 === t && (o.all = r + 6e4);
                return o
            }(r, e),
            e)), (e => {
                throw a("network_error"),
                e
            }
            )))).then((e => e), (e => {
                if (e instanceof te)
                    return pt && X.error("Skipped sending event because buffer is full."),
                    a("queue_overflow"),
                    Ye({});
                throw e
            }
            ))
        },
        flush: e => n.drain(e)
    }
}
function cn(e, t) {
    if ("event" === t || "transaction" === t)
        return Array.isArray(e) ? e[1] : void 0
}
function un(e, t, n=[t], r="npm") {
    const o = e._metadata || {};
    o.sdk || (o.sdk = {
        name: `sentry.javascript.${t}`,
        packages: n.map((e => ({
            name: `${r}:@sentry/${e}`,
            version: N
        }))),
        version: N
    }),
    e._metadata = o
}
const dn = 100;
function pn(e, t) {
    const n = kt()
      , r = St();
    if (!n)
        return;
    const {beforeBreadcrumb: o=null, maxBreadcrumbs: i=dn} = n.getOptions();
    if (i <= 0)
        return;
    const s = {
        timestamp: Se(),
        ...e
    }
      , a = o ? K(( () => o(s, t))) : s;
    null !== a && (n.emit && n.emit("beforeAddBreadcrumb", a, t),
    r.addBreadcrumb(a, i))
}
let fn;
const hn = new WeakMap
  , mn = () => ({
    name: "FunctionToString",
    setupOnce() {
        fn = Function.prototype.toString;
        try {
            Function.prototype.toString = function(...e) {
                const t = ie(this)
                  , n = hn.has(kt()) && void 0 !== t ? t : this;
                return fn.apply(n, e)
            }
        } catch (e) {}
    },
    setup(e) {
        hn.set(e, !0)
    }
})
  , gn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", 'can\'t redefine non-configurable property "solana"', "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"]
  , yn = (e={}) => ({
    name: "InboundFilters",
    processEvent(t, n, r) {
        const o = r.getOptions()
          , i = function(e={}, t={}) {
            return {
                allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : gn],
                ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []],
                ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
            }
        }(e, o);
        return function(e, t) {
            return t.ignoreInternal && function(e) {
                try {
                    return "SentryError" === e.exception.values[0].type
                } catch (t) {}
                return !1
            }(e) ? (pt && X.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${je(e)}`),
            !0) : function(e, t) {
                return !(e.type || !t || !t.length) && function(e) {
                    const t = [];
                    let n;
                    e.message && t.push(e.message);
                    try {
                        n = e.exception.values[e.exception.values.length - 1]
                    } catch (r) {}
                    return n && n.value && (t.push(n.value),
                    n.type && t.push(`${n.type}: ${n.value}`)),
                    t
                }(e).some((e => R(e, t)))
            }(e, t.ignoreErrors) ? (pt && X.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${je(e)}`),
            !0) : function(e) {
                return !e.type && (!(!e.exception || !e.exception.values || 0 === e.exception.values.length) && (!e.message && !e.exception.values.some((e => e.stacktrace || e.type && "Error" !== e.type || e.value))))
            }(e) ? (pt && X.warn(`Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${je(e)}`),
            !0) : function(e, t) {
                if ("transaction" !== e.type || !t || !t.length)
                    return !1;
                const n = e.transaction;
                return !!n && R(n, t)
            }(e, t.ignoreTransactions) ? (pt && X.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${je(e)}`),
            !0) : function(e, t) {
                if (!t || !t.length)
                    return !1;
                const n = Dn(e);
                return !!n && R(n, t)
            }(e, t.denyUrls) ? (pt && X.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${je(e)}.\nUrl: ${Dn(e)}`),
            !0) : !function(e, t) {
                if (!t || !t.length)
                    return !0;
                const n = Dn(e);
                return !n || R(n, t)
            }(e, t.allowUrls) && (pt && X.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${je(e)}.\nUrl: ${Dn(e)}`),
            !0)
        }(t, i) ? null : t
    }
});
function Dn(e) {
    try {
        let n;
        try {
            n = e.exception.values[0].stacktrace.frames
        } catch (t) {}
        return n ? function(e=[]) {
            for (let t = e.length - 1; t >= 0; t--) {
                const n = e[t];
                if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                    return n.filename || null
            }
            return null
        }(n) : null
    } catch (n) {
        return pt && X.error(`Cannot extract url for event ${je(e)}`),
        null
    }
}
const vn = new Map
  , Cn = new Set;
function _n(e, t) {
    return function(e) {
        if (L._sentryModuleMetadata)
            for (const t of Object.keys(L._sentryModuleMetadata)) {
                const n = L._sentryModuleMetadata[t];
                if (Cn.has(t))
                    continue;
                Cn.add(t);
                const r = e(t);
                for (const e of r.reverse())
                    if (e.filename) {
                        vn.set(e.filename, n);
                        break
                    }
            }
    }(e),
    vn.get(t)
}
const An = () => {
    let e;
    return {
        name: "Dedupe",
        processEvent(t) {
            if (t.type)
                return t;
            try {
                if (function(e, t) {
                    return !!t && (!!function(e, t) {
                        const n = e.message
                          , r = t.message;
                        return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!En(e, t) && !!xn(e, t))))
                    }(e, t) || !!function(e, t) {
                        const n = wn(t)
                          , r = wn(e);
                        return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!En(e, t) && !!xn(e, t)))
                    }(e, t))
                }(t, e))
                    return pt && X.warn("Event dropped due to being a duplicate of previously captured event."),
                    null
            } catch (n) {}
            return e = t
        }
    }
}
;
function xn(e, t) {
    let n = De(e)
      , r = De(t);
    if (!n && !r)
        return !0;
    if (n && !r || !n && r)
        return !1;
    if (r.length !== n.length)
        return !1;
    for (let o = 0; o < r.length; o++) {
        const e = r[o]
          , t = n[o];
        if (e.filename !== t.filename || e.lineno !== t.lineno || e.colno !== t.colno || e.function !== t.function)
            return !1
    }
    return !0
}
function En(e, t) {
    let n = e.fingerprint
      , r = t.fingerprint;
    if (!n && !r)
        return !0;
    if (n && !r || !n && r)
        return !1;
    try {
        return !(n.join("") !== r.join(""))
    } catch (o) {
        return !1
    }
}
function wn(e) {
    return e.exception && e.exception.values && e.exception.values[0]
}
const bn = "_sentryBundlerPluginAppKey:"
  , Fn = L;
let Sn = 0;
function kn() {
    return Sn > 0
}
function Bn(e, t={}, n) {
    if ("function" != typeof e)
        return e;
    try {
        const t = e.__sentry_wrapped__;
        if (t)
            return t;
        if (ie(e))
            return e
    } catch (o) {
        return e
    }
    const r = function() {
        const n = Array.prototype.slice.call(arguments);
        try {
            const r = n.map((e => Bn(e, t)));
            return e.apply(this, r)
        } catch (r) {
            throw Sn++,
            setTimeout(( () => {
                Sn--
            }
            )),
            function(...e) {
                const t = bt(ft());
                if (2 === e.length) {
                    const [n,r] = e;
                    return n ? t.withSetScope(n, r) : t.withScope(r)
                }
                t.withScope(e[0])
            }((e => {
                e.addEventProcessor((e => (t.mechanism && (Ue(e, void 0),
                Ge(e, t.mechanism)),
                e.extra = {
                    ...e.extra,
                    arguments: n
                },
                e))),
                Vt(r)
            }
            )),
            r
        }
    };
    try {
        for (const t in e)
            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
    } catch (i) {}
    oe(r, e),
    re(e, "__sentry_wrapped__", r);
    try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get: () => e.name
        })
    } catch (i) {}
    return r
}
const Mn = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function On(e, t) {
    const n = In(e, t)
      , r = {
        type: t && t.name,
        value: Pn(t)
    };
    return n.length && (r.stacktrace = {
        frames: n
    }),
    void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
    r
}
function Tn(e, t) {
    return {
        exception: {
            values: [On(e, t)]
        }
    }
}
function In(e, t) {
    const n = t.stacktrace || t.stack || ""
      , r = function(e) {
        return e && Rn.test(e.message) ? 1 : 0
    }(t)
      , o = function(e) {
        return "number" == typeof e.framesToPop ? e.framesToPop : 0
    }(t);
    try {
        return e(n, r, o)
    } catch (i) {}
    return []
}
const Rn = /Minified React error #\d+;/i;
function Pn(e) {
    const t = e && e.message;
    return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
}
function $n(e, t, n, r, o) {
    let i;
    if (x(t) && t.error)
        return Tn(e, t.error);
    if (E(t) || A(t, "DOMException")) {
        const o = t;
        if ("stack"in t)
            i = Tn(e, t);
        else {
            const t = o.name || (E(o) ? "DOMError" : "DOMException")
              , s = o.message ? `${t}: ${o.message}` : t;
            i = jn(e, s, n, r),
            Ue(i, s)
        }
        return "code"in o && (i.tags = {
            ...i.tags,
            "DOMException.code": `${o.code}`
        }),
        i
    }
    return _(t) ? Tn(e, t) : S(t) || k(t) ? (i = function(e, t, n, r) {
        const o = kt()
          , i = o && o.getOptions().normalizeDepth
          , s = function(e) {
            for (const t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) {
                    const n = e[t];
                    if (n instanceof Error)
                        return n
                }
        }(t)
          , a = {
            __serialized__: ze(t, i)
        };
        if (s)
            return {
                exception: {
                    values: [On(e, s)]
                },
                extra: a
            };
        const l = {
            exception: {
                values: [{
                    type: k(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                    value: Un(t, {
                        isUnhandledRejection: r
                    })
                }]
            },
            extra: a
        };
        if (n) {
            const t = In(e, n);
            t.length && (l.exception.values[0].stacktrace = {
                frames: t
            })
        }
        return l
    }(e, t, n, o),
    Ge(i, {
        synthetic: !0
    }),
    i) : (i = jn(e, t, n, r),
    Ue(i, `${t}`),
    Ge(i, {
        synthetic: !0
    }),
    i)
}
function jn(e, t, n, r) {
    const o = {};
    if (r && n) {
        const r = In(e, n);
        r.length && (o.exception = {
            values: [{
                value: t,
                stacktrace: {
                    frames: r
                }
            }]
        })
    }
    if (b(t)) {
        const {__sentry_template_string__: e, __sentry_template_values__: n} = t;
        return o.logentry = {
            message: e,
            params: n
        },
        o
    }
    return o.message = t,
    o
}
function Un(e, {isUnhandledRejection: t}) {
    const n = function(e, t=40) {
        const n = Object.keys(se(e));
        n.sort();
        const r = n[0];
        if (!r)
            return "[object has no keys]";
        if (r.length >= t)
            return T(r, t);
        for (let o = n.length; o > 0; o--) {
            const e = n.slice(0, o).join(", ");
            if (!(e.length > t))
                return o === n.length ? e : T(e, t)
        }
        return ""
    }(e)
      , r = t ? "promise rejection" : "exception";
    return x(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : k(e) ? `Event \`${function(e) {
        try {
            const t = Object.getPrototypeOf(e);
            return t ? t.constructor.name : void 0
        } catch (t) {}
    }(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
}
class Gn extends on {
    constructor(e) {
        const t = {
            parentSpanIsAlwaysRootSpan: !0,
            ...e
        };
        un(t, "browser", ["browser"], Fn.SENTRY_SDK_SOURCE || "npm"),
        super(t),
        t.sendClientReports && Fn.document && Fn.document.addEventListener("visibilitychange", ( () => {
            "hidden" === Fn.document.visibilityState && this._flushOutcomes()
        }
        ))
    }
    eventFromException(e, t) {
        return function(e, t, n, r) {
            const o = $n(e, t, n && n.syntheticException || void 0, r);
            return Ge(o),
            o.level = "error",
            n && n.event_id && (o.event_id = n.event_id),
            Ye(o)
        }(this._options.stackParser, e, t, this._options.attachStacktrace)
    }
    eventFromMessage(e, t="info", n) {
        return function(e, t, n="info", r, o) {
            const i = jn(e, t, r && r.syntheticException || void 0, o);
            return i.level = n,
            r && r.event_id && (i.event_id = r.event_id),
            Ye(i)
        }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
    }
    captureUserFeedback(e) {
        if (!this._isEnabled())
            return void (Mn && X.warn("SDK not enabled, will not capture user feedback."));
        const t = function(e, {metadata: t, tunnel: n, dsn: r}) {
            const o = {
                event_id: e.event_id,
                sent_at: (new Date).toISOString(),
                ...t && t.sdk && {
                    sdk: {
                        name: t.sdk.name,
                        version: t.sdk.version
                    }
                },
                ...!!n && !!r && {
                    dsn: Q(r)
                }
            }
              , i = function(e) {
                return [{
                    type: "user_report"
                }, e]
            }(e);
            return tt(o, [i])
        }(e, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(t)
    }
    _prepareEvent(e, t, n) {
        return e.platform = e.platform || "javascript",
        super._prepareEvent(e, t, n)
    }
}
const Nn = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
  , Ln = L;
let qn, zn, Wn, Vn;
function Hn() {
    if (!Ln.document)
        return;
    const e = xe.bind(null, "dom")
      , t = Yn(e, !0);
    Ln.document.addEventListener("click", t, !1),
    Ln.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach((t => {
        const n = Ln[t] && Ln[t].prototype;
        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (ne(n, "addEventListener", (function(t) {
            return function(n, r, o) {
                if ("click" === n || "keypress" == n)
                    try {
                        const r = this
                          , i = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}
                          , s = i[n] = i[n] || {
                            refCount: 0
                        };
                        if (!s.handler) {
                            const r = Yn(e);
                            s.handler = r,
                            t.call(this, n, r, o)
                        }
                        s.refCount++
                    } catch (i) {}
                return t.call(this, n, r, o)
            }
        }
        )),
        ne(n, "removeEventListener", (function(e) {
            return function(t, n, r) {
                if ("click" === t || "keypress" == t)
                    try {
                        const n = this
                          , o = n.__sentry_instrumentation_handlers__ || {}
                          , i = o[t];
                        i && (i.refCount--,
                        i.refCount <= 0 && (e.call(this, t, i.handler, r),
                        i.handler = void 0,
                        delete o[t]),
                        0 === Object.keys(o).length && delete n.__sentry_instrumentation_handlers__)
                    } catch (o) {}
                return e.call(this, t, n, r)
            }
        }
        )))
    }
    ))
}
function Yn(e, t=!1) {
    return n => {
        if (!n || n._sentryCaptured)
            return;
        const r = function(e) {
            try {
                return e.target
            } catch (t) {
                return null
            }
        }(n);
        if (function(e, t) {
            return "keypress" === e && (!t || !t.tagName || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable)
        }(n.type, r))
            return;
        re(n, "_sentryCaptured", !0),
        r && !r._sentryId && re(r, "_sentryId", Pe());
        const o = "keypress" === n.type ? "input" : n.type;
        (function(e) {
            if (e.type !== zn)
                return !1;
            try {
                if (!e.target || e.target._sentryId !== Wn)
                    return !1
            } catch (t) {}
            return !0
        }
        )(n) || (e({
            event: n,
            name: o,
            global: t
        }),
        zn = n.type,
        Wn = r ? r._sentryId : void 0),
        clearTimeout(qn),
        qn = Ln.setTimeout(( () => {
            Wn = void 0,
            zn = void 0
        }
        ), 1e3)
    }
}
function Jn(e) {
    const t = "history";
    _e(t, e),
    Ae(t, Kn)
}
function Kn() {
    if (!function() {
        const e = dt.chrome
          , t = e && e.app && e.app.runtime
          , n = "history"in dt && !!dt.history.pushState && !!dt.history.replaceState;
        return !t && n
    }())
        return;
    const e = Ln.onpopstate;
    function t(e) {
        return function(...t) {
            const n = t.length > 2 ? t[2] : void 0;
            if (n) {
                const e = Vn
                  , t = String(n);
                Vn = t,
                xe("history", {
                    from: e,
                    to: t
                })
            }
            return e.apply(this, t)
        }
    }
    Ln.onpopstate = function(...t) {
        const n = Ln.location.href
          , r = Vn;
        if (Vn = n,
        xe("history", {
            from: r,
            to: n
        }),
        e)
            try {
                return e.apply(this, t)
            } catch (o) {}
    }
    ,
    ne(Ln.history, "pushState", t),
    ne(Ln.history, "replaceState", t)
}
const Xn = {};
function Zn(e) {
    Xn[e] = void 0
}
const Qn = "__sentry_xhr_v3__";
function er() {
    if (!Ln.XMLHttpRequest)
        return;
    const e = XMLHttpRequest.prototype;
    e.open = new Proxy(e.open,{
        apply(e, t, n) {
            const r = 1e3 * ke()
              , o = w(n[0]) ? n[0].toUpperCase() : void 0
              , i = function(e) {
                if (w(e))
                    return e;
                try {
                    return e.toString()
                } catch (t) {}
            }(n[1]);
            if (!o || !i)
                return e.apply(t, n);
            t[Qn] = {
                method: o,
                url: i,
                request_headers: {}
            },
            "POST" === o && i.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
            const s = () => {
                const e = t[Qn];
                if (e && 4 === t.readyState) {
                    try {
                        e.status_code = t.status
                    } catch (n) {}
                    xe("xhr", {
                        endTimestamp: 1e3 * ke(),
                        startTimestamp: r,
                        xhr: t
                    })
                }
            }
            ;
            return "onreadystatechange"in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange,{
                apply: (e, t, n) => (s(),
                e.apply(t, n))
            }) : t.addEventListener("readystatechange", s),
            t.setRequestHeader = new Proxy(t.setRequestHeader,{
                apply(e, t, n) {
                    const [r,o] = n
                      , i = t[Qn];
                    return i && w(r) && w(o) && (i.request_headers[r.toLowerCase()] = o),
                    e.apply(t, n)
                }
            }),
            e.apply(t, n)
        }
    }),
    e.send = new Proxy(e.send,{
        apply(e, t, n) {
            const r = t[Qn];
            return r ? (void 0 !== n[0] && (r.body = n[0]),
            xe("xhr", {
                startTimestamp: 1e3 * ke(),
                xhr: t
            }),
            e.apply(t, n)) : e.apply(t, n)
        }
    })
}
function tr(e, t=function(e) {
    const t = Xn[e];
    if (t)
        return t;
    let n = Ln[e];
    if (Fe(n))
        return Xn[e] = n.bind(Ln);
    const r = Ln.document;
    if (r && "function" == typeof r.createElement)
        try {
            const t = r.createElement("iframe");
            t.hidden = !0,
            r.head.appendChild(t);
            const o = t.contentWindow;
            o && o[e] && (n = o[e]),
            r.head.removeChild(t)
        } catch (o) {
            Nn && X.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, o)
        }
    return n ? Xn[e] = n.bind(Ln) : n
}("fetch")) {
    let n = 0
      , r = 0;
    return ln(e, (function(o) {
        const i = o.body.length;
        n += i,
        r++;
        const s = {
            body: o.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: e.headers,
            keepalive: n <= 6e4 && r < 15,
            ...e.fetchOptions
        };
        if (!t)
            return Zn("fetch"),
            Je("No fetch implementation available");
        try {
            return t(e.url, s).then((e => (n -= i,
            r--,
            {
                statusCode: e.status,
                headers: {
                    "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": e.headers.get("Retry-After")
                }
            })))
        } catch (a) {
            return Zn("fetch"),
            n -= i,
            r--,
            Je(a)
        }
    }
    ))
}
function nr(e, t, n, r) {
    const o = {
        filename: e,
        function: "<anonymous>" === t ? de : t,
        in_app: !0
    };
    return void 0 !== n && (o.lineno = n),
    void 0 !== r && (o.colno = r),
    o
}
const rr = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i
  , or = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
  , ir = /\((\S*)(?::(\d+))(?::(\d+))\)/
  , sr = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
  , ar = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
  , lr = he([30, e => {
    const t = rr.exec(e);
    if (t) {
        const [,e,n,r] = t;
        return nr(e, de, +n, +r)
    }
    const n = or.exec(e);
    if (n) {
        if (n[2] && 0 === n[2].indexOf("eval")) {
            const e = ir.exec(n[2]);
            e && (n[2] = e[1],
            n[3] = e[2],
            n[4] = e[3])
        }
        const [e,t] = cr(n[1] || de, n[2]);
        return nr(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
    }
}
], [50, e => {
    const t = sr.exec(e);
    if (t) {
        if (t[3] && t[3].indexOf(" > eval") > -1) {
            const e = ar.exec(t[3]);
            e && (t[1] = t[1] || "eval",
            t[3] = e[1],
            t[4] = e[2],
            t[5] = "")
        }
        let e = t[3]
          , n = t[1] || de;
        return [n,e] = cr(n, e),
        nr(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
    }
}
])
  , cr = (e, t) => {
    const n = -1 !== e.indexOf("safari-extension")
      , r = -1 !== e.indexOf("safari-web-extension");
    return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : de, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
}
  , ur = (e={}) => {
    const t = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...e
    };
    return {
        name: "Breadcrumbs",
        setup(e) {
            var n;
            t.console && function(e) {
                const t = "console";
                _e(t, e),
                Ae(t, Ee)
            }(function(e) {
                return function(t) {
                    if (kt() !== e)
                        return;
                    const n = {
                        category: "console",
                        data: {
                            arguments: t.args,
                            logger: "console"
                        },
                        level: (r = t.level,
                        "warn" === r ? "warning" : Ze.includes(r) ? r : "log"),
                        message: I(t.args, " ")
                    };
                    var r;
                    if ("assert" === t.level) {
                        if (!1 !== t.args[0])
                            return;
                        n.message = `Assertion failed: ${I(t.args.slice(1), " ") || "console.assert"}`,
                        n.data.arguments = t.args.slice(1)
                    }
                    pn(n, {
                        input: t.args,
                        level: t.level
                    })
                }
            }(e)),
            t.dom && (n = function(e, t) {
                return function(n) {
                    if (kt() !== e)
                        return;
                    let r, o, i = "object" == typeof t ? t.serializeAttribute : void 0, s = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                    s && s > 1024 && (Mn && X.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`),
                    s = 1024),
                    "string" == typeof i && (i = [i]);
                    try {
                        const e = n.event
                          , t = function(e) {
                            return !!e && !!e.target
                        }(e) ? e.target : e;
                        r = W(t, {
                            keyAttrs: i,
                            maxStringLength: s
                        }),
                        o = function(e) {
                            if (!z.HTMLElement)
                                return null;
                            let t = e;
                            for (let n = 0; n < 5; n++) {
                                if (!t)
                                    return null;
                                if (t instanceof HTMLElement) {
                                    if (t.dataset.sentryComponent)
                                        return t.dataset.sentryComponent;
                                    if (t.dataset.sentryElement)
                                        return t.dataset.sentryElement
                                }
                                t = t.parentNode
                            }
                            return null
                        }(t)
                    } catch (l) {
                        r = "<unknown>"
                    }
                    if (0 === r.length)
                        return;
                    const a = {
                        category: `ui.${n.name}`,
                        message: r
                    };
                    o && (a.data = {
                        "ui.component_name": o
                    }),
                    pn(a, {
                        event: n.event,
                        name: n.name,
                        global: n.global
                    })
                }
            }(e, t.dom),
            _e("dom", n),
            Ae("dom", Hn)),
            t.xhr && function(e) {
                _e("xhr", e),
                Ae("xhr", er)
            }(function(e) {
                return function(t) {
                    if (kt() !== e)
                        return;
                    const {startTimestamp: n, endTimestamp: r} = t
                      , o = t.xhr[Qn];
                    if (!n || !r || !o)
                        return;
                    const {method: i, url: s, status_code: a, body: l} = o
                      , c = {
                        method: i,
                        url: s,
                        status_code: a
                    }
                      , u = {
                        xhr: t.xhr,
                        input: l,
                        startTimestamp: n,
                        endTimestamp: r
                    };
                    pn({
                        category: "xhr",
                        data: c,
                        type: "http",
                        level: G(a)
                    }, u)
                }
            }(e)),
            t.fetch && function(e, t) {
                const n = "fetch";
                _e(n, e),
                Ae(n, ( () => function(e, t=!1) {
                    t && !function() {
                        if ("string" == typeof EdgeRuntime)
                            return !0;
                        if (!be())
                            return !1;
                        if (Fe(we.fetch))
                            return !0;
                        let e = !1;
                        const t = we.document;
                        if (t && "function" == typeof t.createElement)
                            try {
                                const n = t.createElement("iframe");
                                n.hidden = !0,
                                t.head.appendChild(n),
                                n.contentWindow && n.contentWindow.fetch && (e = Fe(n.contentWindow.fetch)),
                                t.head.removeChild(n)
                            } catch (n) {
                                H && X.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
                            }
                        return e
                    }() || ne(L, "fetch", (function(e) {
                        return function(...t) {
                            const {method: n, url: r} = function(e) {
                                if (0 === e.length)
                                    return {
                                        method: "GET",
                                        url: ""
                                    };
                                if (2 === e.length) {
                                    const [t,n] = e;
                                    return {
                                        url: Me(t),
                                        method: Be(n, "method") ? String(n.method).toUpperCase() : "GET"
                                    }
                                }
                                const t = e[0];
                                return {
                                    url: Me(t),
                                    method: Be(t, "method") ? String(t.method).toUpperCase() : "GET"
                                }
                            }(t)
                              , o = {
                                args: t,
                                fetchData: {
                                    method: n,
                                    url: r
                                },
                                startTimestamp: 1e3 * ke()
                            };
                            xe("fetch", {
                                ...o
                            });
                            const i = (new Error).stack;
                            return e.apply(L, t).then((async e => (xe("fetch", {
                                ...o,
                                endTimestamp: 1e3 * ke(),
                                response: e
                            }),
                            e)), (e => {
                                throw xe("fetch", {
                                    ...o,
                                    endTimestamp: 1e3 * ke(),
                                    error: e
                                }),
                                _(e) && void 0 === e.stack && (e.stack = i,
                                re(e, "framesToPop", 1)),
                                e
                            }
                            ))
                        }
                    }
                    ))
                }(0, t)))
            }(function(e) {
                return function(t) {
                    if (kt() !== e)
                        return;
                    const {startTimestamp: n, endTimestamp: r} = t;
                    if (r && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                        if (t.error)
                            pn({
                                category: "fetch",
                                data: t.fetchData,
                                level: "error",
                                type: "http"
                            }, {
                                data: t.error,
                                input: t.args,
                                startTimestamp: n,
                                endTimestamp: r
                            });
                        else {
                            const e = t.response
                              , o = {
                                ...t.fetchData,
                                status_code: e && e.status
                            }
                              , i = {
                                input: t.args,
                                response: e,
                                startTimestamp: n,
                                endTimestamp: r
                            };
                            pn({
                                category: "fetch",
                                data: o,
                                type: "http",
                                level: G(o.status_code)
                            }, i)
                        }
                }
            }(e)),
            t.history && Jn(function(e) {
                return function(t) {
                    if (kt() !== e)
                        return;
                    let n = t.from
                      , r = t.to;
                    const o = Xe(Fn.location.href);
                    let i = n ? Xe(n) : void 0;
                    const s = Xe(r);
                    i && i.path || (i = o),
                    o.protocol === s.protocol && o.host === s.host && (r = s.relative),
                    o.protocol === i.protocol && o.host === i.host && (n = i.relative),
                    pn({
                        category: "navigation",
                        data: {
                            from: n,
                            to: r
                        }
                    })
                }
            }(e)),
            t.sentry && e.on("beforeSendEvent", function(e) {
                return function(t) {
                    kt() === e && pn({
                        category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                        event_id: t.event_id,
                        level: t.level,
                        message: je(t)
                    }, {
                        event: t
                    })
                }
            }(e))
        }
    }
}
  , dr = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
  , pr = (e={}) => {
    const t = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        ...e
    };
    return {
        name: "BrowserApiErrors",
        setupOnce() {
            t.setTimeout && ne(Fn, "setTimeout", fr),
            t.setInterval && ne(Fn, "setInterval", fr),
            t.requestAnimationFrame && ne(Fn, "requestAnimationFrame", hr),
            t.XMLHttpRequest && "XMLHttpRequest"in Fn && ne(XMLHttpRequest.prototype, "send", mr);
            const e = t.eventTarget;
            e && (Array.isArray(e) ? e : dr).forEach(gr)
        }
    }
}
;
function fr(e) {
    return function(...t) {
        const n = t[0];
        return t[0] = Bn(n, {
            mechanism: {
                data: {
                    function: ye(e)
                },
                handled: !1,
                type: "instrument"
            }
        }),
        e.apply(this, t)
    }
}
function hr(e) {
    return function(t) {
        return e.apply(this, [Bn(t, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: ye(e)
                },
                handled: !1,
                type: "instrument"
            }
        })])
    }
}
function mr(e) {
    return function(...t) {
        const n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e => {
            e in n && "function" == typeof n[e] && ne(n, e, (function(t) {
                const n = {
                    mechanism: {
                        data: {
                            function: e,
                            handler: ye(t)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }
                  , r = ie(t);
                return r && (n.mechanism.data.handler = ye(r)),
                Bn(t, n)
            }
            ))
        }
        )),
        e.apply(this, t)
    }
}
function gr(e) {
    const t = Fn
      , n = t[e] && t[e].prototype;
    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (ne(n, "addEventListener", (function(t) {
        return function(n, r, o) {
            try {
                "function" == typeof r.handleEvent && (r.handleEvent = Bn(r.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: ye(r),
                            target: e
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }))
            } catch (i) {}
            return t.apply(this, [n, Bn(r, {
                mechanism: {
                    data: {
                        function: "addEventListener",
                        handler: ye(r),
                        target: e
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), o])
        }
    }
    )),
    ne(n, "removeEventListener", (function(e) {
        return function(t, n, r) {
            const o = n;
            try {
                const n = o && o.__sentry_wrapped__;
                n && e.call(this, t, n, r)
            } catch (i) {}
            return e.call(this, t, o, r)
        }
    }
    )))
}
const yr = (e={}) => {
    const t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e
    };
    return {
        name: "GlobalHandlers",
        setupOnce() {
            Error.stackTraceLimit = 50
        },
        setup(e) {
            t.onerror && (function(e) {
                !function() {
                    const t = "error";
                    _e(t, (t => {
                        const {stackParser: n, attachStacktrace: r} = vr();
                        if (kt() !== e || kn())
                            return;
                        const {msg: o, url: i, line: s, column: a, error: l} = t
                          , c = function(e, t, n, r) {
                            const o = e.exception = e.exception || {}
                              , i = o.values = o.values || []
                              , s = i[0] = i[0] || {}
                              , a = s.stacktrace = s.stacktrace || {}
                              , l = a.frames = a.frames || []
                              , c = isNaN(parseInt(r, 10)) ? void 0 : r
                              , u = isNaN(parseInt(n, 10)) ? void 0 : n
                              , d = w(t) && t.length > 0 ? t : function() {
                                try {
                                    return z.document.location.href
                                } catch (e) {
                                    return ""
                                }
                            }();
                            return 0 === l.length && l.push({
                                colno: c,
                                filename: d,
                                function: de,
                                in_app: !0,
                                lineno: u
                            }),
                            e
                        }($n(n, l || o, void 0, r, !1), i, s, a);
                        c.level = "error",
                        Yt(c, {
                            originalException: l,
                            mechanism: {
                                handled: !1,
                                type: "onerror"
                            }
                        })
                    }
                    )),
                    Ae(t, Te)
                }()
            }(e),
            Dr("onerror")),
            t.onunhandledrejection && (function(e) {
                !function() {
                    const t = "unhandledrejection";
                    _e(t, (t => {
                        const {stackParser: n, attachStacktrace: r} = vr();
                        if (kt() !== e || kn())
                            return;
                        const o = function(e) {
                            if (F(e))
                                return e;
                            try {
                                if ("reason"in e)
                                    return e.reason;
                                if ("detail"in e && "reason"in e.detail)
                                    return e.detail.reason
                            } catch (t) {}
                            return e
                        }(t)
                          , i = F(o) ? {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: `Non-Error promise rejection captured with value: ${String(o)}`
                                }]
                            }
                        } : $n(n, o, void 0, r, !0);
                        i.level = "error",
                        Yt(i, {
                            originalException: o,
                            mechanism: {
                                handled: !1,
                                type: "onunhandledrejection"
                            }
                        })
                    }
                    )),
                    Ae(t, Re)
                }()
            }(e),
            Dr("onunhandledrejection"))
        }
    }
}
;
function Dr(e) {
    Mn && X.log(`Global Handler attached: ${e}`)
}
function vr() {
    const e = kt();
    return e && e.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
const Cr = (e={}) => {
    const t = e.limit || 5
      , n = e.key || "cause";
    return {
        name: "LinkedErrors",
        preprocessEvent(e, r, o) {
            const i = o.getOptions();
            P(On, i.stackParser, i.maxValueLength, n, t, e, r)
        }
    }
}
;
function _r(e={}) {
    const t = function(e={}) {
        const t = {
            defaultIntegrations: [yn(), mn(), pr(), ur(), yr(), Cr(), An(), {
                name: "HttpContext",
                preprocessEvent(e) {
                    if (!Fn.navigator && !Fn.location && !Fn.document)
                        return;
                    const t = e.request && e.request.url || Fn.location && Fn.location.href
                      , {referrer: n} = Fn.document || {}
                      , {userAgent: r} = Fn.navigator || {}
                      , o = {
                        ...e.request && e.request.headers,
                        ...n && {
                            Referer: n
                        },
                        ...r && {
                            "User-Agent": r
                        }
                    }
                      , i = {
                        ...e.request,
                        ...t && {
                            url: t
                        },
                        headers: o
                    };
                    e.request = i
                }
            }],
            release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : Fn.SENTRY_RELEASE && Fn.SENTRY_RELEASE.id ? Fn.SENTRY_RELEASE.id : void 0,
            autoSessionTracking: !0,
            sendClientReports: !0
        };
        return null == e.defaultIntegrations && delete e.defaultIntegrations,
        {
            ...t,
            ...e
        }
    }(e);
    if (function() {
        const e = void 0 !== Fn.window && Fn;
        if (!e)
            return !1;
        const t = e[e.chrome ? "chrome" : "browser"]
          , n = t && t.runtime && t.runtime.id
          , r = Fn.location && Fn.location.href || ""
          , o = !!n && Fn === Fn.top && ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"].some((e => r.startsWith(`${e}//`)))
          , i = void 0 !== e.nw;
        return !!n && !o && !i
    }())
        return void K(( () => {
            console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        }
        ));
    Mn && (be() || X.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
    const n = {
        ...t,
        stackParser: (r = t.stackParser || lr,
        Array.isArray(r) ? he(...r) : r),
        integrations: en(t),
        transport: t.transport || tr
    };
    var r;
    const o = function(e, t) {
        !0 === t.debug && (pt ? X.enable() : K(( () => {
            console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
        }
        ))),
        Ft().update(t.initialScope);
        const n = new e(t);
        return function(e) {
            Ft().setClient(e)
        }(n),
        n.init(),
        n
    }(Gn, n);
    return t.autoSessionTracking && (void 0 !== Fn.document ? (Jt({
        ignoreDuration: !0
    }),
    Zt(),
    Jn(( ({from: e, to: t}) => {
        void 0 !== e && e !== t && (Jt({
            ignoreDuration: !0
        }),
        Zt())
    }
    ))) : Mn && X.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")),
    o
}
function Ar() {}
const xr = e => e;
function Er(e, t) {
    for (const n in t)
        e[n] = t[n];
    return e
}
function wr(e) {
    return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
}
function br(e) {
    return e()
}
function Fr() {
    return Object.create(null)
}
function Sr(e) {
    e.forEach(br)
}
function kr(e) {
    return "function" == typeof e
}
function Br(e, t) {
    return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
}
let Mr;
function Or(e, t) {
    return e === t || (Mr || (Mr = document.createElement("a")),
    Mr.href = t,
    e === Mr.href)
}
function Tr(e) {
    return 0 === Object.keys(e).length
}
function Ir(e, ...t) {
    if (null == e) {
        for (const e of t)
            e(void 0);
        return Ar
    }
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n
}
function Rr(e) {
    let t;
    return Ir(e, (e => t = e))(),
    t
}
function Pr(e, t, n) {
    e.$$.on_destroy.push(Ir(t, n))
}
function $r(e, t, n, r) {
    if (e) {
        const o = jr(e, t, n, r);
        return e[0](o)
    }
}
function jr(e, t, n, r) {
    return e[1] && r ? Er(n.ctx.slice(), e[1](r(t))) : n.ctx
}
function Ur(e, t, n, r) {
    if (e[2] && r) {
        const o = e[2](r(n));
        if (void 0 === t.dirty)
            return o;
        if ("object" == typeof o) {
            const e = []
              , n = Math.max(t.dirty.length, o.length);
            for (let r = 0; r < n; r += 1)
                e[r] = t.dirty[r] | o[r];
            return e
        }
        return t.dirty | o
    }
    return t.dirty
}
function Gr(e, t, n, r, o, i) {
    if (o) {
        const s = jr(t, n, r, i);
        e.p(s, o)
    }
}
function Nr(e) {
    if (e.ctx.length > 32) {
        const t = []
          , n = e.ctx.length / 32;
        for (let e = 0; e < n; e++)
            t[e] = -1;
        return t
    }
    return -1
}
function Lr(e) {
    const t = {};
    for (const n in e)
        "$" !== n[0] && (t[n] = e[n]);
    return t
}
function qr(e, t) {
    const n = {};
    t = new Set(t);
    for (const r in e)
        t.has(r) || "$" === r[0] || (n[r] = e[r]);
    return n
}
function zr(e) {
    const t = {};
    for (const n in e)
        t[n] = !0;
    return t
}
function Wr(e, t, n) {
    return e.set(n),
    t
}
function Vr(e) {
    return e && kr(e.destroy) ? e.destroy : Ar
}
const Hr = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;
class Yr {
    constructor(e) {
        t(this, "_listeners", "WeakMap"in Hr ? new WeakMap : void 0),
        t(this, "_observer"),
        t(this, "options"),
        this.options = e
    }
    observe(e, t) {
        return this._listeners.set(e, t),
        this._getObserver().observe(e, this.options),
        () => {
            this._listeners.delete(e),
            this._observer.unobserve(e)
        }
    }
    _getObserver() {
        return this._observer ?? (this._observer = new ResizeObserver((e => {
            var t;
            for (const n of e)
                Yr.entries.set(n.target, n),
                null == (t = this._listeners.get(n.target)) || t(n)
        }
        )))
    }
}
var Jr;
Yr.entries = "WeakMap"in Hr ? new WeakMap : void 0,
function(e) {
    const t = {
        ...e
    };
    un(t, "svelte");
    _r(t);
    !function() {
        let e;
        const t = t => (void 0 === e && (e = null !== (z.document && z.document.querySelector ? z.document.querySelector("div#svelte-announcer") : null)),
        e && (t.modules = {
            svelteKit: "latest",
            ...t.modules
        }),
        t);
        var n;
        t.id = "svelteKitProcessor",
        n = t,
        St().addEventProcessor(n)
    }()
}({
    dsn: "https://acc433251471b3fd759adec5a46312e5@o4507407972630528.ingest.de.sentry.io/4507408148856912",
    enabled: !0,
    debug: !1,
    maxBreadcrumbs: 200,
    beforeSend(e, t) {
        var n, r, o, i, s, a, l, c, u, d, p, f, h, m, g, y, D, v, C, _, A, x, E;
        return !0 === (null == (n = t.data) ? void 0 : n.isRunningInWebWorker) && 1 === (null == (o = null == (r = e.exception) ? void 0 : r.values) ? void 0 : o.length) && "Error" === (null == (i = e.exception.values[0]) ? void 0 : i.type) && "CanvasRenderer is not yet implemented" === e.exception.values[0].value || 1 === (null == (a = null == (s = e.exception) ? void 0 : s.values) ? void 0 : a.length) && "Error" === (null == (l = e.exception.values[0]) ? void 0 : l.type) && "AbortError: The operation was aborted." === e.exception.values[0].value || 1 === (null == (u = null == (c = e.exception) ? void 0 : c.values) ? void 0 : u.length) && "UnhandledRejection" === (null == (d = e.exception.values[0]) ? void 0 : d.type) && "Non-Error promise rejection captured with value: status -> 400" === e.exception.values[0].value || 1 === (null == (f = null == (p = e.exception) ? void 0 : p.values) ? void 0 : f.length) && "UnhandledRejection" === (null == (h = e.exception.values[0]) ? void 0 : h.type) && "Non-Error promise rejection captured with value: undefined" === e.exception.values[0].value || 1 === (null == (g = null == (m = e.exception) ? void 0 : m.values) ? void 0 : g.length) && "SecurityError" === (null == (y = e.exception.values[0]) ? void 0 : y.type) && (null == (D = e.exception.values[0].value) ? void 0 : D.startsWith("Failed to construct 'Worker'")) && e.exception.values[0].value.includes("https://play2048-co.translate.goog") || (null == (v = e.message) ? void 0 : v.endsWith("d+$/")) && (null == (_ = null == (C = e.request) ? void 0 : C.url) ? void 0 : _.startsWith("https://play2048-co.translate.goog")) || 1 === (null == (x = null == (A = e.exception) ? void 0 : A.values) ? void 0 : x.length) && "SecurityError" === (null == (E = e.exception.values[0]) ? void 0 : E.type) && 'Blocked a frame with origin "https://play2048.co" from accessing a cross-origin frame. Protocols, domains, and ports must match.' === e.exception.values[0].value ? null : e
    },
    integrations: [(Jr = {
        filterKeys: ["@rbitrary-golden-pumpkin"],
        behaviour: "drop-error-if-contains-third-party-frames"
    },
    {
        name: "ThirdPartyErrorsFilter",
        setup(e) {
            e.on("beforeEnvelope", (e => {
                rt(e, ( (e, t) => {
                    if ("event" === t) {
                        const t = Array.isArray(e) ? e[1] : void 0;
                        t && (function(e) {
                            try {
                                e.exception.values.forEach((e => {
                                    if (e.stacktrace)
                                        for (const t of e.stacktrace.frames || [])
                                            delete t.module_metadata
                                }
                                ))
                            } catch (t) {}
                        }(t),
                        e[1] = t)
                    }
                }
                ))
            }
            )),
            e.on("applyFrameMetadata", (t => {
                t.type || function(e, t) {
                    try {
                        t.exception.values.forEach((t => {
                            if (t.stacktrace)
                                for (const n of t.stacktrace.frames || []) {
                                    if (!n.filename || n.module_metadata)
                                        continue;
                                    const t = _n(e, n.filename);
                                    t && (n.module_metadata = t)
                                }
                        }
                        ))
                    } catch (n) {}
                }(e.getOptions().stackParser, t)
            }
            ))
        },
        processEvent(e) {
            const t = function(e) {
                const t = De(e);
                if (t)
                    return t.filter((e => !!e.filename)).map((e => e.module_metadata ? Object.keys(e.module_metadata).filter((e => e.startsWith(bn))).map((e => e.slice(bn.length))) : []))
            }(e);
            if (t && t["drop-error-if-contains-third-party-frames" === Jr.behaviour || "apply-tag-if-contains-third-party-frames" === Jr.behaviour ? "some" : "every"]((e => !e.some((e => Jr.filterKeys.includes(e)))))) {
                if ("drop-error-if-contains-third-party-frames" === Jr.behaviour || "drop-error-if-exclusively-contains-third-party-frames" === Jr.behaviour)
                    return null;
                e.tags = {
                    ...e.tags,
                    third_party_code: !0
                }
            }
            return e
        }
    })]
});
var Kr = function(e, t) {
    return (Kr = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(e, t) {
        e.__proto__ = t
    }
    || function(e, t) {
        for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
    }
    )(e, t)
};
"function" == typeof SuppressedError && SuppressedError;
var Xr = "Invariant Violation"
  , Zr = Object.setPrototypeOf
  , Qr = void 0 === Zr ? function(e, t) {
    return e.__proto__ = t,
    e
}
: Zr
  , eo = function(e) {
    function t(n) {
        void 0 === n && (n = Xr);
        var r = e.call(this, "number" == typeof n ? Xr + ": " + n + " (see https://github.com/apollographql/invariant-packages)" : n) || this;
        return r.framesToPop = 1,
        r.name = Xr,
        Qr(r, t.prototype),
        r
    }
    return function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        Kr(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }(t, e),
    t
}(Error);
function to(e, t) {
    if (!e)
        throw new eo(t)
}
var no, ro = ["debug", "log", "warn", "error", "silent"], oo = ro.indexOf("log");
function io(e) {
    return function() {
        if (ro.indexOf(e) >= oo)
            return (console[e] || console.log).apply(console, arguments)
    }
}
(no = to || (to = {})).debug = io("debug"),
no.log = io("log"),
no.warn = io("warn"),
no.error = io("error");
const so = to
  , ao = [];
function lo(e, t) {
    return {
        subscribe: co(e, t).subscribe
    }
}
function co(e, t=Ar) {
    let n;
    const r = new Set;
    function o(t) {
        if (Br(e, t) && (e = t,
        n)) {
            const t = !ao.length;
            for (const n of r)
                n[1](),
                ao.push(n, e);
            if (t) {
                for (let e = 0; e < ao.length; e += 2)
                    ao[e][0](ao[e + 1]);
                ao.length = 0
            }
        }
    }
    function i(t) {
        o(t(e))
    }
    return {
        set: o,
        update: i,
        subscribe: function(s, a=Ar) {
            const l = [s, a];
            return r.add(l),
            1 === r.size && (n = t(o, i) || Ar),
            s(e),
            () => {
                r.delete(l),
                0 === r.size && n && (n(),
                n = null)
            }
        }
    }
}
function uo(e, t, n) {
    const r = !Array.isArray(e)
      , o = r ? [e] : e;
    if (!o.every(Boolean))
        throw new Error("derived() expects stores as input, got a falsy value");
    const i = t.length < 2;
    return lo(n, ( (e, n) => {
        let s = !1;
        const a = [];
        let l = 0
          , c = Ar;
        const u = () => {
            if (l)
                return;
            c();
            const o = t(r ? a[0] : a, e, n);
            i ? e(o) : c = kr(o) ? o : Ar
        }
          , d = o.map(( (e, t) => Ir(e, (e => {
            a[t] = e,
            l &= ~(1 << t),
            s && u()
        }
        ), ( () => {
            l |= 1 << t
        }
        ))));
        return s = !0,
        u(),
        function() {
            Sr(d),
            c(),
            s = !1
        }
    }
    ))
}
const po = !0
  , fo = "next.play2048.co, play2048.co, play2048-stag.com".split(",").map((e => e.trim()))
  , ho = "1FAIpQLScZldyVgauCIUTfGVlV90-7Za_6kYUSMGcaNmh6WGIfOAK_RA"
  , mo = () => new URLSearchParams(self.location.search)
  , go = mo()
  , yo = go.has("dbg")
  , Do = go.has("forceAds")
  , vo = "undefined" != typeof document ? document.title : ""
  , Co = -1 !== fo.indexOf(self.location.hostname)
  , _o = Co ? po : Do
  , Ao = "localhost" === self.location.hostname || self.location.hostname.startsWith("127.") || self.location.hostname.startsWith("192.168.")
  , xo = yo && (Ao || !0)
  , Eo = Ao || yo;
var wo, bo, Fo = {
    exports: {}
};
var So = function(e) {
    function t(e) {
        let r, o, i, s = null;
        function a(...e) {
            if (!a.enabled)
                return;
            const n = a
              , o = Number(new Date)
              , i = o - (r || o);
            n.diff = i,
            n.prev = r,
            n.curr = o,
            r = o,
            e[0] = t.coerce(e[0]),
            "string" != typeof e[0] && e.unshift("%O");
            let s = 0;
            e[0] = e[0].replace(/%([a-zA-Z%])/g, ( (r, o) => {
                if ("%%" === r)
                    return "%";
                s++;
                const i = t.formatters[o];
                if ("function" == typeof i) {
                    const t = e[s];
                    r = i.call(n, t),
                    e.splice(s, 1),
                    s--
                }
                return r
            }
            )),
            t.formatArgs.call(n, e),
            (n.log || t.log).apply(n, e)
        }
        return a.namespace = e,
        a.useColors = t.useColors(),
        a.color = t.selectColor(e),
        a.extend = n,
        a.destroy = t.destroy,
        Object.defineProperty(a, "enabled", {
            enumerable: !0,
            configurable: !1,
            get: () => null !== s ? s : (o !== t.namespaces && (o = t.namespaces,
            i = t.enabled(e)),
            i),
            set: e => {
                s = e
            }
        }),
        "function" == typeof t.init && t.init(a),
        a
    }
    function n(e, n) {
        const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
        return r.log = this.log,
        r
    }
    function r(e) {
        return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
    }
    return t.debug = t,
    t.default = t,
    t.coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e
    }
    ,
    t.disable = function() {
        const e = [...t.names.map(r), ...t.skips.map(r).map((e => "-" + e))].join(",");
        return t.enable(""),
        e
    }
    ,
    t.enable = function(e) {
        let n;
        t.save(e),
        t.namespaces = e,
        t.names = [],
        t.skips = [];
        const r = ("string" == typeof e ? e : "").split(/[\s,]+/)
          , o = r.length;
        for (n = 0; n < o; n++)
            r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
    }
    ,
    t.enabled = function(e) {
        if ("*" === e[e.length - 1])
            return !0;
        let n, r;
        for (n = 0,
        r = t.skips.length; n < r; n++)
            if (t.skips[n].test(e))
                return !1;
        for (n = 0,
        r = t.names.length; n < r; n++)
            if (t.names[n].test(e))
                return !0;
        return !1
    }
    ,
    t.humanize = function() {
        if (bo)
            return wo;
        bo = 1;
        var e = 1e3
          , t = 60 * e
          , n = 60 * t
          , r = 24 * n
          , o = 7 * r;
        function i(e, t, n, r) {
            var o = t >= 1.5 * n;
            return Math.round(e / n) + " " + r + (o ? "s" : "")
        }
        return wo = function(s, a) {
            a = a || {};
            var l, c, u = typeof s;
            if ("string" === u && s.length > 0)
                return function(i) {
                    if (!((i = String(i)).length > 100)) {
                        var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(i);
                        if (s) {
                            var a = parseFloat(s[1]);
                            switch ((s[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return 315576e5 * a;
                            case "weeks":
                            case "week":
                            case "w":
                                return a * o;
                            case "days":
                            case "day":
                            case "d":
                                return a * r;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return a * n;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return a * t;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return a * e;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return a;
                            default:
                                return
                            }
                        }
                    }
                }(s);
            if ("number" === u && isFinite(s))
                return a.long ? (l = s,
                (c = Math.abs(l)) >= r ? i(l, c, r, "day") : c >= n ? i(l, c, n, "hour") : c >= t ? i(l, c, t, "minute") : c >= e ? i(l, c, e, "second") : l + " ms") : function(o) {
                    var i = Math.abs(o);
                    return i >= r ? Math.round(o / r) + "d" : i >= n ? Math.round(o / n) + "h" : i >= t ? Math.round(o / t) + "m" : i >= e ? Math.round(o / e) + "s" : o + "ms"
                }(s);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(s))
        }
    }(),
    t.destroy = function() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
    }
    ,
    Object.keys(e).forEach((n => {
        t[n] = e[n]
    }
    )),
    t.names = [],
    t.skips = [],
    t.formatters = {},
    t.selectColor = function(e) {
        let n = 0;
        for (let t = 0; t < e.length; t++)
            n = (n << 5) - n + e.charCodeAt(t),
            n |= 0;
        return t.colors[Math.abs(n) % t.colors.length]
    }
    ,
    t.enable(t.load()),
    t
};
!function(e, t) {
    var n = {};
    t.formatArgs = function(t) {
        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
        !this.useColors)
            return;
        const n = "color: " + this.color;
        t.splice(1, 0, n, "color: inherit");
        let r = 0
          , o = 0;
        t[0].replace(/%[a-zA-Z%]/g, (e => {
            "%%" !== e && (r++,
            "%c" === e && (o = r))
        }
        )),
        t.splice(o, 0, n)
    }
    ,
    t.save = function(e) {
        try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
        } catch (n) {}
    }
    ,
    t.load = function() {
        let e;
        try {
            e = t.storage.getItem("debug")
        } catch (r) {}
        return !e && "undefined" != typeof process && "env"in process && (e = n.DEBUG),
        e
    }
    ,
    t.useColors = function() {
        if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
            return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
            return !1;
        let e;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }
    ,
    t.storage = function() {
        try {
            return localStorage
        } catch (e) {}
    }(),
    t.destroy = ( () => {
        let e = !1;
        return () => {
            e || (e = !0,
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    }
    )(),
    t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
    t.log = console.debug || console.log || ( () => {}
    ),
    e.exports = So(t);
    const {formatters: r} = e.exports;
    r.j = function(e) {
        try {
            return JSON.stringify(e)
        } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message
        }
    }
}(Fo, Fo.exports);
const ko = r(Fo.exports);
let Bo, Mo = 0;
function Oo() {
    const e = Date.now();
    return e !== Bo && (Bo = e,
    Mo = 0),
    `${e.toString(36)}${(Mo++).toString(36)}`
}
const To = ["apple", "blue", "buzz", "cat", "dog", "fizz", "flower", "green", "house", "ice", "jack", "jazz", "joy", "jump", "king", "lion", "monkey", "night", "orange", "purple", "quartz", "queen", "quick", "quiz", "rain", "red", "snake", "tree", "vex", "violet", "vivid", "wax", "white", "yacht", "yellow", "zebra", "zoo"];
function Io(e, t=!0) {
    const n = [];
    for (let r = 0; r < 3; r++) {
        let e;
        do {
            e = To[Math.floor(Math.random() * To.length)]
        } while (n.includes(e));
        n.push(e)
    }
    return n.join("-") + (t ? ` (${e})` : "")
}
function Ro(e) {
    throw new Error("assertNever failed")
}
function Po(e, t, n) {
    const r = {
        id: (null == n ? void 0 : n.id) ?? Oo(),
        value: e,
        position: t
    };
    return (null == n ? void 0 : n.previousPosition) && (r.previousPosition = n.previousPosition),
    (null == n ? void 0 : n.merges) && (r.merges = n.merges),
    r
}
function $o(e, t) {
    return {
        x: e.x + t.x,
        y: e.y + t.y
    }
}
function jo(e, t) {
    return e.x === t.x && e.y === t.y
}
function Uo(e) {
    switch (e) {
    case Go.Up:
        return {
            x: 0,
            y: -1
        };
    case Go.Right:
        return {
            x: 1,
            y: 0
        };
    case Go.Down:
        return {
            x: 0,
            y: 1
        };
    case Go.Left:
        return {
            x: -1,
            y: 0
        };
    default:
        Ro()
    }
}
var Go = (e => (e.Up = "up",
e.Right = "right",
e.Down = "down",
e.Left = "left",
e))(Go || {});
function No(e, t, n, r, o=!0) {
    t ? Lo(e, t, n, r, o) : (o && Vo(e, n, null),
    Vo(e, r, null))
}
function Lo(e, t, n, r, o=!0) {
    o && Vo(e, n, null),
    Vo(e, r, Po(t.value, r, {
        id: t.id,
        previousPosition: n
    }))
}
function qo(e) {
    return e[0] ? {
        width: e[0].length,
        height: e.length
    } : {
        width: 0,
        height: 0
    }
}
function zo(e, t) {
    var n;
    const {x: r, y: o} = t;
    return null == (n = null == e ? void 0 : e[o]) ? void 0 : n[r]
}
function Wo(e, t, n) {
    let r, o = zo(e, t);
    do {
        r = t,
        o = zo(e, t = $o(t, n))
    } while (void 0 !== o && null === o);
    return {
        emptyPosition: r,
        obstacle: void 0 === o ? {
            type: "boundary"
        } : {
            type: "tile",
            tile: o,
            position: t
        }
    }
}
function Vo(e, t, n) {
    const r = e[t.y];
    to(r, `Invalid position: ${t} for board of size ${Object.values(qo(e))}`),
    r[t.x] = n
}
function Ho(e) {
    return e.some((e => e.some((e => null === e))))
}
function Yo(e, t, n=function(e) {
    const t = [];
    return Xo(e, ( (e, n) => {
        null === e && t.push(n)
    }
    )),
    t
}(e)) {
    const r = n.filter((t => null === zo(e, t)))
      , o = t.choice(r);
    if (!o)
        return {
            change: null,
            board: e
        };
    const i = Po(t.float() < .9 ? 2 : 4, o)
      , s = Qo(e, ( (e, t) => jo(t, o) ? i : e));
    return {
        change: {
            type: "tileAdded",
            position: o,
            tileId: i.id
        },
        board: s
    }
}
function Jo(e, t=!1) {
    return t ? Zo(e) : e.map((e => e.slice()))
}
function Ko(e, t) {
    return Array(t).fill(null).map(( () => Array(e).fill(null)))
}
function Xo(e, t) {
    const {width: n} = qo(e);
    e.flat().forEach(( (e, r) => {
        const o = r % n
          , i = Math.floor(r / n);
        t(e, {
            x: o,
            y: i
        })
    }
    ))
}
function Zo(e) {
    return Qo(e, (e => null === e ? null : Po(e.value, e.position, {
        id: e.id
    })))
}
function Qo(e, t) {
    return e.map(( (e, n) => e.map(( (e, r) => t(e, {
        x: r,
        y: n
    })))))
}
function ei(e, t) {
    const {width: n} = qo(e);
    return e.flat().map(( (e, r) => {
        const o = r % n
          , i = Math.floor(r / n);
        return t(e, {
            x: o,
            y: i
        })
    }
    ))
}
function ti(e, t, n) {
    const {width: r} = qo(e);
    return e.flat().reduce(( (e, n, o) => {
        const i = o % r
          , s = Math.floor(o / r);
        return t(e, n, {
            x: i,
            y: s
        })
    }
    ), n)
}
function ni(e, t) {
    return e.flat().find((e => (null == e ? void 0 : e.id) === t))
}
function ri(e, t) {
    let n;
    return Xo(t, ( (t, r) => {
        (null == t ? void 0 : t.id) === e && (n = r)
    }
    )),
    n
}
function oi(e) {
    return ti(e, ( (e, t) => t ? e + 1 : e), 0)
}
var ii = {
    exports: {}
};
!function(e, t) {
    function n(e) {
        var t, n = this, r = (t = 4022871197,
        function(e) {
            e = String(e);
            for (var n = 0; n < e.length; n++) {
                var r = .02519603282416938 * (t += e.charCodeAt(n));
                r -= t = r >>> 0,
                t = (r *= t) >>> 0,
                t += 4294967296 * (r -= t)
            }
            return 2.3283064365386963e-10 * (t >>> 0)
        }
        );
        n.next = function() {
            var e = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c;
            return n.s0 = n.s1,
            n.s1 = n.s2,
            n.s2 = e - (n.c = 0 | e)
        }
        ,
        n.c = 1,
        n.s0 = r(" "),
        n.s1 = r(" "),
        n.s2 = r(" "),
        n.s0 -= r(e),
        n.s0 < 0 && (n.s0 += 1),
        n.s1 -= r(e),
        n.s1 < 0 && (n.s1 += 1),
        n.s2 -= r(e),
        n.s2 < 0 && (n.s2 += 1),
        r = null
    }
    function r(e, t) {
        return t.c = e.c,
        t.s0 = e.s0,
        t.s1 = e.s1,
        t.s2 = e.s2,
        t
    }
    function o(e, t) {
        var o = new n(e)
          , i = t && t.state
          , s = o.next;
        return s.int32 = function() {
            return 4294967296 * o.next() | 0
        }
        ,
        s.double = function() {
            return s() + 11102230246251565e-32 * (2097152 * s() | 0)
        }
        ,
        s.quick = s,
        i && ("object" == typeof i && r(i, o),
        s.state = function() {
            return r(o, {})
        }
        ),
        s
    }
    t && t.exports ? t.exports = o : this.alea = o
}(0, ii);
var si = ii.exports
  , ai = {
    exports: {}
};
!function(e, t) {
    function n(e) {
        var t = this
          , n = "";
        t.x = 0,
        t.y = 0,
        t.z = 0,
        t.w = 0,
        t.next = function() {
            var e = t.x ^ t.x << 11;
            return t.x = t.y,
            t.y = t.z,
            t.z = t.w,
            t.w ^= t.w >>> 19 ^ e ^ e >>> 8
        }
        ,
        e === (0 | e) ? t.x = e : n += e;
        for (var r = 0; r < n.length + 64; r++)
            t.x ^= 0 | n.charCodeAt(r),
            t.next()
    }
    function r(e, t) {
        return t.x = e.x,
        t.y = e.y,
        t.z = e.z,
        t.w = e.w,
        t
    }
    function o(e, t) {
        var o = new n(e)
          , i = t && t.state
          , s = function() {
            return (o.next() >>> 0) / 4294967296
        };
        return s.double = function() {
            do {
                var e = ((o.next() >>> 11) + (o.next() >>> 0) / 4294967296) / (1 << 21)
            } while (0 === e);
            return e
        }
        ,
        s.int32 = o.next,
        s.quick = s,
        i && ("object" == typeof i && r(i, o),
        s.state = function() {
            return r(o, {})
        }
        ),
        s
    }
    t && t.exports ? t.exports = o : this.xor128 = o
}(0, ai);
var li = ai.exports
  , ci = {
    exports: {}
};
!function(e, t) {
    function n(e) {
        var t = this
          , n = "";
        t.next = function() {
            var e = t.x ^ t.x >>> 2;
            return t.x = t.y,
            t.y = t.z,
            t.z = t.w,
            t.w = t.v,
            (t.d = t.d + 362437 | 0) + (t.v = t.v ^ t.v << 4 ^ e ^ e << 1) | 0
        }
        ,
        t.x = 0,
        t.y = 0,
        t.z = 0,
        t.w = 0,
        t.v = 0,
        e === (0 | e) ? t.x = e : n += e;
        for (var r = 0; r < n.length + 64; r++)
            t.x ^= 0 | n.charCodeAt(r),
            r == n.length && (t.d = t.x << 10 ^ t.x >>> 4),
            t.next()
    }
    function r(e, t) {
        return t.x = e.x,
        t.y = e.y,
        t.z = e.z,
        t.w = e.w,
        t.v = e.v,
        t.d = e.d,
        t
    }
    function o(e, t) {
        var o = new n(e)
          , i = t && t.state
          , s = function() {
            return (o.next() >>> 0) / 4294967296
        };
        return s.double = function() {
            do {
                var e = ((o.next() >>> 11) + (o.next() >>> 0) / 4294967296) / (1 << 21)
            } while (0 === e);
            return e
        }
        ,
        s.int32 = o.next,
        s.quick = s,
        i && ("object" == typeof i && r(i, o),
        s.state = function() {
            return r(o, {})
        }
        ),
        s
    }
    t && t.exports ? t.exports = o : this.xorwow = o
}(0, ci);
var ui = ci.exports
  , di = {
    exports: {}
};
!function(e, t) {
    function n(e) {
        var t = this;
        t.next = function() {
            var e, n, r = t.x, o = t.i;
            return e = r[o],
            n = (e ^= e >>> 7) ^ e << 24,
            n ^= (e = r[o + 1 & 7]) ^ e >>> 10,
            n ^= (e = r[o + 3 & 7]) ^ e >>> 3,
            n ^= (e = r[o + 4 & 7]) ^ e << 7,
            e = r[o + 7 & 7],
            n ^= (e ^= e << 13) ^ e << 9,
            r[o] = n,
            t.i = o + 1 & 7,
            n
        }
        ,
        function(e, t) {
            var n, r = [];
            if (t === (0 | t))
                r[0] = t;
            else
                for (t = "" + t,
                n = 0; n < t.length; ++n)
                    r[7 & n] = r[7 & n] << 15 ^ t.charCodeAt(n) + r[n + 1 & 7] << 13;
            for (; r.length < 8; )
                r.push(0);
            for (n = 0; n < 8 && 0 === r[n]; ++n)
                ;
            for (8 == n ? r[7] = -1 : r[n],
            e.x = r,
            e.i = 0,
            n = 256; n > 0; --n)
                e.next()
        }(t, e)
    }
    function r(e, t) {
        return t.x = e.x.slice(),
        t.i = e.i,
        t
    }
    function o(e, t) {
        null == e && (e = +new Date);
        var o = new n(e)
          , i = t && t.state
          , s = function() {
            return (o.next() >>> 0) / 4294967296
        };
        return s.double = function() {
            do {
                var e = ((o.next() >>> 11) + (o.next() >>> 0) / 4294967296) / (1 << 21)
            } while (0 === e);
            return e
        }
        ,
        s.int32 = o.next,
        s.quick = s,
        i && (i.x && r(i, o),
        s.state = function() {
            return r(o, {})
        }
        ),
        s
    }
    t && t.exports ? t.exports = o : this.xorshift7 = o
}(0, di);
var pi = di.exports
  , fi = {
    exports: {}
};
!function(e, t) {
    function n(e) {
        var t = this;
        t.next = function() {
            var e, n, r = t.w, o = t.X, i = t.i;
            return t.w = r = r + 1640531527 | 0,
            n = o[i + 34 & 127],
            e = o[i = i + 1 & 127],
            n ^= n << 13,
            e ^= e << 17,
            n ^= n >>> 15,
            e ^= e >>> 12,
            n = o[i] = n ^ e,
            t.i = i,
            n + (r ^ r >>> 16) | 0
        }
        ,
        function(e, t) {
            var n, r, o, i, s, a = [], l = 128;
            for (t === (0 | t) ? (r = t,
            t = null) : (t += "\0",
            r = 0,
            l = Math.max(l, t.length)),
            o = 0,
            i = -32; i < l; ++i)
                t && (r ^= t.charCodeAt((i + 32) % t.length)),
                0 === i && (s = r),
                r ^= r << 10,
                r ^= r >>> 15,
                r ^= r << 4,
                r ^= r >>> 13,
                i >= 0 && (s = s + 1640531527 | 0,
                o = 0 == (n = a[127 & i] ^= r + s) ? o + 1 : 0);
            for (o >= 128 && (a[127 & (t && t.length || 0)] = -1),
            o = 127,
            i = 512; i > 0; --i)
                r = a[o + 34 & 127],
                n = a[o = o + 1 & 127],
                r ^= r << 13,
                n ^= n << 17,
                r ^= r >>> 15,
                n ^= n >>> 12,
                a[o] = r ^ n;
            e.w = s,
            e.X = a,
            e.i = o
        }(t, e)
    }
    function r(e, t) {
        return t.i = e.i,
        t.w = e.w,
        t.X = e.X.slice(),
        t
    }
    function o(e, t) {
        null == e && (e = +new Date);
        var o = new n(e)
          , i = t && t.state
          , s = function() {
            return (o.next() >>> 0) / 4294967296
        };
        return s.double = function() {
            do {
                var e = ((o.next() >>> 11) + (o.next() >>> 0) / 4294967296) / (1 << 21)
            } while (0 === e);
            return e
        }
        ,
        s.int32 = o.next,
        s.quick = s,
        i && (i.X && r(i, o),
        s.state = function() {
            return r(o, {})
        }
        ),
        s
    }
    t && t.exports ? t.exports = o : this.xor4096 = o
}(0, fi);
var hi = fi.exports
  , mi = {
    exports: {}
};
!function(e, t) {
    function n(e) {
        var t = this
          , n = "";
        t.next = function() {
            var e = t.b
              , n = t.c
              , r = t.d
              , o = t.a;
            return e = e << 25 ^ e >>> 7 ^ n,
            n = n - r | 0,
            r = r << 24 ^ r >>> 8 ^ o,
            o = o - e | 0,
            t.b = e = e << 20 ^ e >>> 12 ^ n,
            t.c = n = n - r | 0,
            t.d = r << 16 ^ n >>> 16 ^ o,
            t.a = o - e | 0
        }
        ,
        t.a = 0,
        t.b = 0,
        t.c = -1640531527,
        t.d = 1367130551,
        e === Math.floor(e) ? (t.a = e / 4294967296 | 0,
        t.b = 0 | e) : n += e;
        for (var r = 0; r < n.length + 20; r++)
            t.b ^= 0 | n.charCodeAt(r),
            t.next()
    }
    function r(e, t) {
        return t.a = e.a,
        t.b = e.b,
        t.c = e.c,
        t.d = e.d,
        t
    }
    function o(e, t) {
        var o = new n(e)
          , i = t && t.state
          , s = function() {
            return (o.next() >>> 0) / 4294967296
        };
        return s.double = function() {
            do {
                var e = ((o.next() >>> 11) + (o.next() >>> 0) / 4294967296) / (1 << 21)
            } while (0 === e);
            return e
        }
        ,
        s.int32 = o.next,
        s.quick = s,
        i && ("object" == typeof i && r(i, o),
        s.state = function() {
            return r(o, {})
        }
        ),
        s
    }
    t && t.exports ? t.exports = o : this.tychei = o
}(0, mi);
var gi = mi.exports
  , yi = {
    exports: {}
};
const Di = i(Object.freeze(Object.defineProperty({
    __proto__: null,
    default: {}
}, Symbol.toStringTag, {
    value: "Module"
})));
var vi;
vi = yi,
function(e, t, n) {
    var r, o = 256, i = "random", s = n.pow(o, 6), a = n.pow(2, 52), l = 2 * a, c = 255;
    function u(c, u, g) {
        var y = []
          , D = h(f((u = 1 == u ? {
            entropy: !0
        } : u || {}).entropy ? [c, m(t)] : null == c ? function() {
            try {
                var n;
                return r && (n = r.randomBytes) ? n = n(o) : (n = new Uint8Array(o),
                (e.crypto || e.msCrypto).getRandomValues(n)),
                m(n)
            } catch (a) {
                var i = e.navigator
                  , s = i && i.plugins;
                return [+new Date, e, s, e.screen, m(t)]
            }
        }() : c, 3), y)
          , v = new d(y)
          , C = function() {
            for (var e = v.g(6), t = s, n = 0; e < a; )
                e = (e + n) * o,
                t *= o,
                n = v.g(1);
            for (; e >= l; )
                e /= 2,
                t /= 2,
                n >>>= 1;
            return (e + n) / t
        };
        return C.int32 = function() {
            return 0 | v.g(4)
        }
        ,
        C.quick = function() {
            return v.g(4) / 4294967296
        }
        ,
        C.double = C,
        h(m(v.S), t),
        (u.pass || g || function(e, t, r, o) {
            return o && (o.S && p(o, v),
            e.state = function() {
                return p(v, {})
            }
            ),
            r ? (n[i] = e,
            t) : e
        }
        )(C, D, "global"in u ? u.global : this == n, u.state)
    }
    function d(e) {
        var t, n = e.length, r = this, i = 0, s = r.i = r.j = 0, a = r.S = [];
        for (n || (e = [n++]); i < o; )
            a[i] = i++;
        for (i = 0; i < o; i++)
            a[i] = a[s = c & s + e[i % n] + (t = a[i])],
            a[s] = t;
        (r.g = function(e) {
            for (var t, n = 0, i = r.i, s = r.j, a = r.S; e--; )
                t = a[i = c & i + 1],
                n = n * o + a[c & (a[i] = a[s = c & s + t]) + (a[s] = t)];
            return r.i = i,
            r.j = s,
            n
        }
        )(o)
    }
    function p(e, t) {
        return t.i = e.i,
        t.j = e.j,
        t.S = e.S.slice(),
        t
    }
    function f(e, t) {
        var n, r = [], o = typeof e;
        if (t && "object" == o)
            for (n in e)
                try {
                    r.push(f(e[n], t - 1))
                } catch (i) {}
        return r.length ? r : "string" == o ? e : e + "\0"
    }
    function h(e, t) {
        for (var n, r = e + "", o = 0; o < r.length; )
            t[c & o] = c & (n ^= 19 * t[c & o]) + r.charCodeAt(o++);
        return m(t)
    }
    function m(e) {
        return String.fromCharCode.apply(0, e)
    }
    if (h(n.random(), t),
    vi.exports) {
        vi.exports = u;
        try {
            r = Di
        } catch (g) {}
    } else
        n["seed" + i] = u
}("undefined" != typeof self ? self : o, [], Math);
var Ci = si
  , _i = li
  , Ai = ui
  , xi = pi
  , Ei = hi
  , wi = gi
  , bi = yi.exports;
bi.alea = Ci,
bi.xor128 = _i,
bi.xorwow = Ai,
bi.xorshift7 = xi,
bi.xor4096 = Ei,
bi.tychei = wi;
const Fi = r(bi);
function Si(e, t, n) {
    return t && function(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, "symbol" == typeof (o = function(e) {
                if ("object" != typeof e || null === e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, "string");
                    if ("object" != typeof n)
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(r.key)) ? o : String(o), r)
        }
        var o
    }(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function ki(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    Bi(e, t)
}
function Bi(e, t) {
    return (Bi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t,
        e
    }
    )(e, t)
}
var Mi = function() {
    function e() {}
    return e.prototype._seed = function(e, t) {
        if (e === (e || 0))
            return e;
        for (var n = "" + e, r = 0, o = 0; o < n.length; ++o)
            r ^= 0 | n.charCodeAt(o);
        return r
    }
    ,
    e
}()
  , Oi = function(e) {
    function t(t, n) {
        var r;
        return (r = e.call(this) || this)._rng = void 0,
        r.seed(t, n),
        r
    }
    ki(t, e);
    var n = t.prototype;
    return n.next = function() {
        return this._rng()
    }
    ,
    n.seed = function(e, t) {
        this._rng = e
    }
    ,
    n.clone = function(e, n) {
        return new t(this._rng,n)
    }
    ,
    Si(t, [{
        key: "name",
        get: function() {
            return "function"
        }
    }]),
    t
}(Mi)
  , Ti = function() {
    var e = [].slice.call(arguments)
      , t = e[0]
      , n = void 0 === t ? "default" : t;
    switch (typeof n) {
    case "object":
        if (n instanceof Mi)
            return n;
        break;
    case "function":
        return new Oi(n);
    default:
        return new Oi(Fi.apply(void 0, e))
    }
    throw new Error('invalid RNG "' + n + '"')
}
  , Ii = function(e, t, n) {
    return void 0 === t && (t = 0),
    void 0 === n && (n = 1),
    function() {
        return e.next() * (n - t) + t
    }
};
function Ri(e) {
    return new Pi(e)
}
var Pi = function(e) {
    var t = this;
    this.n = void 0,
    this.isInt = function() {
        if (Number.isInteger(t.n))
            return t;
        throw new Error("Expected number to be an integer, got " + t.n)
    }
    ,
    this.isPositive = function() {
        if (t.n > 0)
            return t;
        throw new Error("Expected number to be positive, got " + t.n)
    }
    ,
    this.lessThan = function(e) {
        if (t.n < e)
            return t;
        throw new Error("Expected number to be less than " + e + ", got " + t.n)
    }
    ,
    this.greaterThanOrEqual = function(e) {
        if (t.n >= e)
            return t;
        throw new Error("Expected number to be greater than or equal to " + e + ", got " + t.n)
    }
    ,
    this.greaterThan = function(e) {
        if (t.n > e)
            return t;
        throw new Error("Expected number to be greater than " + e + ", got " + t.n)
    }
    ,
    this.n = e
}
  , $i = function(e, t, n) {
    return void 0 === t && (t = 0),
    void 0 === n && (n = 1),
    void 0 === n && (n = void 0 === t ? 1 : t,
    t = 0),
    Ri(t).isInt(),
    Ri(n).isInt(),
    function() {
        return Math.floor(e.next() * (n - t + 1) + t)
    }
}
  , ji = function(e) {
    return function() {
        return e.next() >= .5
    }
}
  , Ui = [0, 0, .6931471805599453, 1.791759469228055, 3.1780538303479458, 4.787491742782046, 6.579251212010101, 8.525161361065415, 10.60460290274525, 12.801827480081469]
  , Gi = function(e) {
    return Ui[e]
}
  , Ni = function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    ki(t, e);
    var n = t.prototype;
    return n.next = function() {
        return Math.random()
    }
    ,
    n.seed = function(e, t) {}
    ,
    n.clone = function() {
        return new t
    }
    ,
    Si(t, [{
        key: "name",
        get: function() {
            return "default"
        }
    }]),
    t
}(Mi)
  , Li = new (function() {
    function e(e) {
        var t = this;
        this._rng = void 0,
        this._patch = void 0,
        this._cache = {},
        this.next = function() {
            return t._rng.next()
        }
        ,
        this.float = function(e, n) {
            return t.uniform(e, n)()
        }
        ,
        this.int = function(e, n) {
            return t.uniformInt(e, n)()
        }
        ,
        this.integer = function(e, n) {
            return t.uniformInt(e, n)()
        }
        ,
        this.bool = function() {
            return t.uniformBoolean()()
        }
        ,
        this.boolean = function() {
            return t.uniformBoolean()()
        }
        ,
        this.uniform = function(e, n) {
            return t._memoize("uniform", Ii, e, n)
        }
        ,
        this.uniformInt = function(e, n) {
            return t._memoize("uniformInt", $i, e, n)
        }
        ,
        this.uniformBoolean = function() {
            return t._memoize("uniformBoolean", ji)
        }
        ,
        this.normal = function(e, n) {
            return function(e, t, n) {
                return void 0 === t && (t = 0),
                void 0 === n && (n = 1),
                function() {
                    var r, o, i;
                    do {
                        i = (r = 2 * e.next() - 1) * r + (o = 2 * e.next() - 1) * o
                    } while (!i || i > 1);
                    return t + n * o * Math.sqrt(-2 * Math.log(i) / i)
                }
            }(t, e, n)
        }
        ,
        this.logNormal = function(e, n) {
            return function(e, t, n) {
                void 0 === t && (t = 0),
                void 0 === n && (n = 1);
                var r = e.normal(t, n);
                return function() {
                    return Math.exp(r())
                }
            }(t, e, n)
        }
        ,
        this.bernoulli = function(e) {
            return function(e, t) {
                return void 0 === t && (t = .5),
                Ri(t).greaterThanOrEqual(0).lessThan(1),
                function() {
                    return Math.floor(e.next() + t)
                }
            }(t, e)
        }
        ,
        this.binomial = function(e, n) {
            return function(e, t, n) {
                return void 0 === t && (t = 1),
                void 0 === n && (n = .5),
                Ri(t).isInt().isPositive(),
                Ri(n).greaterThanOrEqual(0).lessThan(1),
                function() {
                    for (var r = 0, o = 0; r++ < t; )
                        e.next() < n && o++;
                    return o
                }
            }(t, e, n)
        }
        ,
        this.geometric = function(e) {
            return function(e, t) {
                void 0 === t && (t = .5),
                Ri(t).greaterThan(0).lessThan(1);
                var n = 1 / Math.log(1 - t);
                return function() {
                    return Math.floor(1 + Math.log(e.next()) * n)
                }
            }(t, e)
        }
        ,
        this.poisson = function(e) {
            return function(e, t) {
                if (void 0 === t && (t = 1),
                Ri(t).isPositive(),
                t < 10) {
                    var n = Math.exp(-t);
                    return function() {
                        for (var r = n, o = 0, i = e.next(); i > r; )
                            i -= r,
                            r = t * r / ++o;
                        return o
                    }
                }
                var r = Math.sqrt(t)
                  , o = .931 + 2.53 * r
                  , i = .02483 * o - .059
                  , s = 1.1239 + 1.1328 / (o - 3.4)
                  , a = .9277 - 3.6224 / (o - 2);
                return function() {
                    for (; ; ) {
                        var n = void 0
                          , l = e.next();
                        if (l <= .86 * a)
                            return n = l / a - .43,
                            Math.floor((2 * i / (.5 - Math.abs(n)) + o) * n + t + .445);
                        l >= a ? n = e.next() - .5 : (n = ((n = l / a - .93) < 0 ? -.5 : .5) - n,
                        l = e.next() * a);
                        var c = .5 - Math.abs(n);
                        if (!(c < .013 && l > c)) {
                            var u = Math.floor((2 * i / c + o) * n + t + .445);
                            if (l = l * s / (i / (c * c) + o),
                            u >= 10) {
                                var d = (u + .5) * Math.log(t / u) - t - .9189385332046727 + u - (1 / 12 - (1 / 360 - 1 / (1260 * u * u)) / (u * u)) / u;
                                if (Math.log(l * r) <= d)
                                    return u
                            } else if (u >= 0) {
                                var p, f = null != (p = Gi(u)) ? p : 0;
                                if (Math.log(l) <= u * Math.log(t) - t - f)
                                    return u
                            }
                        }
                    }
                }
            }(t, e)
        }
        ,
        this.exponential = function(e) {
            return function(e, t) {
                return void 0 === t && (t = 1),
                Ri(t).isPositive(),
                function() {
                    return -Math.log(1 - e.next()) / t
                }
            }(t, e)
        }
        ,
        this.irwinHall = function(e) {
            return function(e, t) {
                return void 0 === t && (t = 1),
                Ri(t).isInt().greaterThanOrEqual(0),
                function() {
                    for (var n = 0, r = 0; r < t; ++r)
                        n += e.next();
                    return n
                }
            }(t, e)
        }
        ,
        this.bates = function(e) {
            return function(e, t) {
                void 0 === t && (t = 1),
                Ri(t).isInt().isPositive();
                var n = e.irwinHall(t);
                return function() {
                    return n() / t
                }
            }(t, e)
        }
        ,
        this.pareto = function(e) {
            return function(e, t) {
                void 0 === t && (t = 1),
                Ri(t).greaterThanOrEqual(0);
                var n = 1 / t;
                return function() {
                    return 1 / Math.pow(1 - e.next(), n)
                }
            }(t, e)
        }
        ,
        e && e instanceof Mi ? this.use(e) : this.use(new Ni),
        this._cache = {}
    }
    var t = e.prototype;
    return t.clone = function() {
        var t = [].slice.call(arguments);
        return t.length ? new e(Ti.apply(void 0, t)) : new e(this.rng.clone())
    }
    ,
    t.use = function() {
        this._rng = Ti.apply(void 0, [].slice.call(arguments))
    }
    ,
    t.patch = function() {
        if (this._patch)
            throw new Error("Math.random already patched");
        this._patch = Math.random,
        Math.random = this.uniform()
    }
    ,
    t.unpatch = function() {
        this._patch && (Math.random = this._patch,
        delete this._patch)
    }
    ,
    t.choice = function(e) {
        if (!Array.isArray(e))
            throw new Error("Random.choice expected input to be an array, got " + typeof e);
        var t = null == e ? void 0 : e.length;
        return t > 0 ? e[this.uniformInt(0, t - 1)()] : void 0
    }
    ,
    t._memoize = function(e, t) {
        var n = [].slice.call(arguments, 2)
          , r = "" + n.join(";")
          , o = this._cache[e];
        return void 0 !== o && o.key === r || (o = {
            key: r,
            distribution: t.apply(void 0, [this].concat(n))
        },
        this._cache[e] = o),
        o.distribution
    }
    ,
    Si(e, [{
        key: "rng",
        get: function() {
            return this._rng
        }
    }]),
    e
}())
  , qi = (e => (e.Fresh = "fresh",
e.Playing = "playing",
e.GameOver = "gameOver",
e.GameWon = "gameWon",
e.Selecting = "selecting",
e))(qi || {});
function zi(e, t) {
    !function(e, t) {
        to(e.state === t, `Expected gameplay to be in state "${t}", but was in state "${e.state}"`)
    }(e, qi.Selecting),
    to(e.selection.type === t, `Expected selection to be of type "${t}", but was of type "${e.selection.type}"`)
}
function Wi(e, t) {
    var n;
    !function(e, t) {
        to(e, "Expected gameplay to be defined"),
        to(e.state === t, `Expected gameplay to be in state "${t}", but was in state "${e.state}"`)
    }(e, qi.Selecting),
    to(e.selection && e.selection.type === t, `Expected selection to be of type "${t}", but was of type "${null == (n = e.selection) ? void 0 : n.type}"`)
}
const Vi = {
    available: e => e.state === qi.Playing && oi(e.board) > 2,
    activate: e => ({
        type: "activated",
        gameplay: {
            ...e,
            state: qi.Selecting,
            previousGameplay: hs(e),
            changes: [],
            selection: {
                type: "bomb",
                position: null
            },
            actionOnSelectionComplete: {
                type: "completePowerup",
                currentPowerup: rs.Bomb
            }
        }
    }),
    complete(e) {
        zi(e, "bomb");
        const {board: t, selection: {position: n}} = e;
        so(null !== n, "Selection is not complete");
        const r = []
          , o = [];
        let i = Qo(t, ( (e, t) => {
            const {x: i, y: s} = t;
            if (Math.abs(i - n.x) <= 1 && Math.abs(s - n.y) <= 1) {
                if (e)
                    return r.push({
                        type: "tileRemoved",
                        tileId: e.id,
                        position: t
                    }),
                    null
            } else
                o.push(t);
            return e
        }
        ));
        so(r.length > 0, "No tiles were removed");
        const s = Math.max(2 - oi(i), 0);
        for (let a = 0; a < s; a++) {
            const t = Yo(i, e._rng.rng, o);
            so(null !== t.change, "No tile was added"),
            r.push(t.change),
            i = t.board
        }
        return {
            type: "completed",
            gameplay: {
                ...e,
                state: qi.Playing,
                changes: r,
                board: i
            }
        }
    }
}
  , Hi = {
    available: e => e.state === qi.Playing && function(e) {
        const {width: t, height: n} = qo(e);
        for (let r = 0; r < n; r++)
            for (let n = 0; n < t; n++) {
                const t = zo(e, {
                    x: n,
                    y: r
                })
                  , o = zo(e, {
                    x: n + 1,
                    y: r
                })
                  , i = zo(e, {
                    x: n,
                    y: r + 1
                });
                if (t && (o || i))
                    return !0
            }
        return !1
    }(e.board),
    activate: e => ({
        type: "activated",
        gameplay: {
            ...e,
            state: qi.Selecting,
            previousGameplay: hs(e),
            changes: [],
            selection: {
                type: "adjacentTilesDirectional",
                origin: null,
                target: null
            },
            actionOnSelectionComplete: {
                type: "completePowerup",
                currentPowerup: rs.MergeAnyTwoAdjacentTiles
            }
        }
    }),
    complete(e) {
        zi(e, "adjacentTilesDirectional");
        const {selection: t} = e;
        so(t.origin && t.target, "Selection is not complete");
        const n = ni(e.board, t.origin)
          , r = ni(e.board, t.target);
        so(n, `Origin tile with id ${t.origin} not found`),
        so(r, `Target tile with id ${t.target} not found`);
        const o = Po(n.value === r.value ? 2 * n.value : Math.max(n.value, r.value), r.position, {
            merges: [n, r]
        })
          , i = Jo(Zo(e.board));
        Vo(i, o.position, o),
        Vo(i, n.position, null);
        const s = [{
            type: "tileMerged",
            tileA: {
                tileId: n.id,
                position: n.position
            },
            tileB: {
                tileId: r.id,
                position: r.position
            },
            resultingTile: {
                tileId: o.id,
                position: o.position
            }
        }];
        return {
            type: "completed",
            gameplay: {
                ...e,
                state: qi.Playing,
                board: i,
                changes: s
            }
        }
    }
}
  , Yi = {
    available(e) {
        if (e.state !== qi.Playing)
            return !1;
        const t = new Set;
        for (const n of e.board.flat())
            if (n && (t.add(n.value),
            t.size > 1))
                return !0;
        return !1
    },
    activate: e => ({
        type: "activated",
        gameplay: {
            ...e,
            state: qi.Selecting,
            previousGameplay: hs(e),
            changes: [],
            selection: {
                type: "byValue",
                value: null
            },
            actionOnSelectionComplete: {
                type: "completePowerup",
                currentPowerup: rs.RemoveTilesByValue
            }
        }
    }),
    complete(e) {
        zi(e, "byValue");
        const {board: t, selection: n} = e;
        so(null !== n.value, "Selection is not complete");
        const r = Qo(t, (e => e && e.value === n.value ? null : e))
          , o = ti(t, ( (e, t) => (t && t.value === n.value && e.push({
            type: "tileRemoved",
            tileId: t.id,
            position: t.position
        }),
        e)), []);
        return {
            type: "completed",
            gameplay: {
                ...e,
                state: qi.Playing,
                board: r,
                changes: o
            }
        }
    }
};
var Ji = (e => (e.Clockwise = "clockwise",
e.CounterClockwise = "counterClockwise",
e))(Ji || {});
const Ki = [Go.Up, Go.Right, Go.Down, Go.Left].map(Uo)
  , Xi = {
    available: e => e.state === qi.Playing && oi(e.board) > 1 && function(e) {
        const {width: t} = qo(e)
          , n = t - 1;
        for (let r = 0; r < n; r++) {
            if (zo(e, {
                x: r,
                y: 0
            }))
                return !0;
            if (zo(e, {
                x: n,
                y: r
            }))
                return !0;
            if (zo(e, {
                x: n - r,
                y: n
            }))
                return !0;
            if (zo(e, {
                x: 0,
                y: n - r
            }))
                return !0
        }
        return !1
    }(e.board),
    activate: e => ({
        type: "activated",
        gameplay: {
            ...e,
            state: qi.Selecting,
            previousGameplay: hs(e),
            changes: [],
            selection: {
                type: "rotation",
                direction: null
            },
            actionOnSelectionComplete: {
                type: "completePowerup",
                currentPowerup: rs.RotateOuterRingOfBoard
            }
        }
    }),
    complete(e) {
        zi(e, "rotation");
        const {board: t, selection: {direction: n}} = e;
        so(null !== n, "Selection is not complete");
        const {board: r, change: o} = Zi(t, n);
        return {
            type: "completed",
            gameplay: {
                ...e,
                state: qi.Playing,
                board: r,
                changes: [o]
            }
        }
    }
};
function Zi(e, t) {
    const n = Jo(e)
      , {width: r, height: o} = qo(e);
    so(r === o, "Board must be square to rotate");
    const i = []
      , s = r - 0 - 1
      , a = t === Ji.Clockwise;
    for (let l = 0; l < s; l++) {
        const t = l - 0
          , r = {
            x: l,
            y: 0
        }
          , o = {
            x: s,
            y: l
        }
          , c = {
            x: s - t,
            y: s
        }
          , u = {
            x: 0,
            y: s - t
        }
          , d = zo(e, r)
          , p = zo(e, o)
          , f = zo(e, c)
          , h = zo(e, u);
        so(void 0 !== d && void 0 !== p && void 0 !== f && void 0 !== h, "Expected all cells to be defined");
        const m = a ? {
            x: s,
            y: l
        } : {
            x: 0,
            y: s - t
        }
          , g = a ? {
            x: s - t,
            y: s
        } : {
            x: l,
            y: 0
        }
          , y = a ? {
            x: 0,
            y: s - t
        } : {
            x: s,
            y: l
        }
          , D = a ? {
            x: l,
            y: 0
        } : {
            x: s - t,
            y: s
        };
        No(n, d, r, m, !1),
        No(n, p, o, g, !1),
        No(n, f, c, y, !1),
        No(n, h, u, D, !1);
        const v = [d ? {
            tileId: d.id,
            position: m
        } : void 0, p ? {
            tileId: p.id,
            position: g
        } : void 0, f ? {
            tileId: f.id,
            position: y
        } : void 0, h ? {
            tileId: h.id,
            position: D
        } : void 0];
        i.push(...v.filter((e => Boolean(e))))
    }
    return {
        board: n,
        change: {
            type: "outerRingRotated",
            direction: t,
            tiles: i
        }
    }
}
const Qi = {
    available: e => e.state === qi.Playing && oi(e.board) > 2,
    activate: e => ({
        type: "activated",
        gameplay: {
            ...e,
            state: qi.Selecting,
            previousGameplay: hs(e),
            changes: [],
            selection: {
                type: "multipleTile",
                amount: 2,
                tiles: []
            },
            actionOnSelectionComplete: {
                type: "completePowerup",
                currentPowerup: rs.SwapTwoTiles
            }
        }
    }),
    complete(e) {
        zi(e, "multipleTile");
        const {board: t, changes: n} = function(e, t) {
            so(2 === t.length && t[0] && t[1], `Expected two tiles to swap, got ${t} instead`);
            const n = ni(e, t[0])
              , r = ni(e, t[1]);
            return so(n, `Tile with id ${t[0]} not found`),
            so(r, `Tile with id ${t[1]} not found`),
            {
                board: Qo(Zo(e), ( (e, t) => {
                    switch (null == e ? void 0 : e.id) {
                    case n.id:
                        return {
                            ...r,
                            position: t,
                            previousPosition: r.position
                        };
                    case r.id:
                        return {
                            ...n,
                            position: t,
                            previousPosition: n.position
                        };
                    default:
                        return e
                    }
                }
                )),
                changes: [{
                    type: "twoTilesSwapped",
                    tileA: {
                        tileId: n.id,
                        position: r.position
                    },
                    tileB: {
                        tileId: r.id,
                        position: n.position
                    }
                }]
            }
        }(e.board, e.selection.tiles);
        return {
            type: "completed",
            gameplay: {
                ...e,
                state: qi.Playing,
                board: t,
                changes: n
            }
        }
    }
}
  , es = {
    available: e => e.state === qi.Playing && oi(e.board) > 1 && Ho(e.board),
    activate: e => ({
        type: "activated",
        gameplay: {
            ...e,
            state: qi.Selecting,
            previousGameplay: hs(e),
            changes: [],
            selection: {
                type: "tileAndEmptyCell",
                tile: null,
                emptyCell: null
            },
            actionOnSelectionComplete: {
                type: "completePowerup",
                currentPowerup: rs.TeleportTileToEmptyCell
            }
        }
    }),
    complete(e) {
        zi(e, "tileAndEmptyCell");
        const {board: t, selection: {tile: n, emptyCell: r}} = e;
        so(null !== n, "Tile is not selected"),
        so(null !== r, "Empty cell is not selected");
        const o = ni(t, n)
          , i = zo(t, r);
        so(null != o, "Tile not found"),
        so(void 0 !== i && null === i, "Cell is not empty");
        const s = Jo(t, !0);
        return Lo(s, o, o.position, r),
        {
            type: "completed",
            gameplay: {
                ...e,
                state: qi.Playing,
                board: s,
                changes: [{
                    type: "tileMoved",
                    from: o.position,
                    to: r,
                    tileId: o.id
                }]
            }
        }
    }
}
  , ts = {
    available: e => !(e.state !== qi.Playing && e.state !== qi.GameOver || null === e.previousGameplay || e.previousGameplay.state !== qi.Fresh && e.previousGameplay.state !== qi.Playing),
    activate(e) {
        const t = hs(e.previousGameplay);
        so(t, "Previous gameplay must exist if undo is available");
        const {changes: n, powerups: r} = function(e, t) {
            var n;
            const r = [];
            let o = {
                ...e.powerups
            };
            for (const i of e.changes) {
                if ("powerupAccrued" === i.type && i.powerup === rs.Undo)
                    continue;
                const s = ns(i, e.board);
                if ("powerupAccrued" === s.type || "powerupConsumed" === s.type) {
                    const e = o[s.powerup];
                    so(e, "Powerup state must exist");
                    const r = {
                        ...e,
                        usesRemaining: e.usesRemaining + ("powerupAccrued" === s.type ? 1 : -1)
                    }
                      , i = null == (n = t.powerups[s.powerup]) ? void 0 : n.usesCount;
                    void 0 !== i && (r.usesCount = i),
                    o = {
                        ...o,
                        [s.powerup]: r
                    }
                }
                r.push(s)
            }
            return {
                changes: r,
                powerups: o
            }
        }(e, t);
        return {
            type: "activatedAndCompleted",
            gameplay: {
                ...t,
                changes: n,
                powerups: r
            }
        }
    }
};
function ns(e, t) {
    switch (e.type) {
    case "tileMoved":
        return {
            type: "tileMoved",
            tileId: e.tileId,
            from: e.to,
            to: e.from
        };
    case "tileMerged":
        return {
            type: "tileUnmerged",
            tileA: e.tileA,
            tileB: e.tileB,
            unmergedTile: e.resultingTile
        };
    case "tileAdded":
        return {
            type: "tileRemoved",
            tileId: e.tileId,
            position: e.position
        };
    case "tileRemoved":
        return {
            type: "tileAdded",
            tileId: e.tileId,
            position: e.position
        };
    case "tileUnmerged":
        return {
            type: "tileMerged",
            tileA: e.tileA,
            tileB: e.tileB,
            resultingTile: e.unmergedTile
        };
    case "twoTilesSwapped":
        return {
            type: "twoTilesSwapped",
            tileA: {
                ...e.tileA,
                position: e.tileB.position
            },
            tileB: {
                ...e.tileB,
                position: e.tileA.position
            }
        };
    case "outerRingRotated":
        return Zi(t, e.direction === Ji.Clockwise ? Ji.CounterClockwise : Ji.Clockwise).change;
    case "powerupAccrued":
        return {
            type: "powerupConsumed",
            powerup: e.powerup
        };
    case "powerupConsumed":
        return {
            type: "powerupAccrued",
            powerup: e.powerup
        };
    default:
        Ro()
    }
}
var rs = (e => (e.Undo = "undo",
e.TeleportTileToEmptyCell = "teleportTileToEmptyCell",
e.RotateOuterRingOfBoard = "rotateOuterRingOfBoard",
e.SwapTwoTiles = "swapTwoTiles",
e.MergeAnyTwoAdjacentTiles = "mergeAnyTwoAdjacentTiles",
e.RemoveTilesByValue = "removeTilesByValue",
e.Bomb = "bomb",
e))(rs || {});
const os = {
    128: ["undo"],
    256: ["swapTwoTiles", "mergeAnyTwoAdjacentTiles", "teleportTileToEmptyCell", "rotateOuterRingOfBoard"],
    512: ["removeTilesByValue", "bomb"]
}
  , is = Object.entries(os).reduce(( (e, [t,n]) => (n.forEach((n => {
    so(!e[n], `Powerup ${n} has a duplicate accrual value`),
    e[n] = parseInt(t)
}
)),
e)), {})
  , ss = {
    undo: {
        usesLimit: 2,
        initialUses: 2
    },
    teleportTileToEmptyCell: {
        usesLimit: 2,
        initialUses: 1
    },
    rotateOuterRingOfBoard: {
        usesLimit: 2,
        initialUses: 1
    },
    swapTwoTiles: {
        usesLimit: 2,
        initialUses: 1
    },
    mergeAnyTwoAdjacentTiles: {
        usesLimit: 2,
        initialUses: 0
    },
    removeTilesByValue: {
        usesLimit: 2,
        initialUses: 0
    },
    bomb: {
        usesLimit: 2,
        initialUses: 0
    }
}
  , as = new Set(Object.values(rs))
  , ls = {
    undo: ts,
    swapTwoTiles: Qi,
    removeTilesByValue: Yi,
    mergeAnyTwoAdjacentTiles: Hi,
    bomb: Vi,
    rotateOuterRingOfBoard: Xi,
    teleportTileToEmptyCell: es
};
function cs(e, t) {
    const n = e.powerups[t];
    return function(e, t) {
        return e.state !== qi.Selecting && ls[t].available(e)
    }(e, t) && !!n && n.usesRemaining > 0
}
function us(e, t) {
    return e.state === qi.Selecting && "completePowerup" === e.actionOnSelectionComplete.type && e.actionOnSelectionComplete.currentPowerup === t
}
function ds(e, t) {
    return us(e, t) && !!e.previousGameplay
}
function ps(e, t) {
    const n = e.powerups[t];
    so(n, `Powerup ${t} not found in gameplay`),
    so(n.usesRemaining > 0, `Attempted to decrease uses of powerup ${t} with 0 uses left`);
    const r = [...e.changes, {
        type: "powerupConsumed",
        powerup: t
    }];
    return {
        ...e,
        changes: r,
        powerups: {
            ...e.powerups,
            [t]: {
                ...n,
                usesRemaining: n.usesRemaining - 1,
                usesCount: n.usesCount + 1
            }
        }
    }
}
function fs(e, t) {
    var n;
    let r;
    switch (t.type) {
    case "move":
        r = function(e, t) {
            {
                if (e.state === qi.GameOver || e.state === qi.GameWon || e.state === qi.Selecting)
                    return e;
                const n = function(e, t) {
                    const n = Qo(e, ( (e, t) => e ? Po(e.value, t, {
                        id: e.id
                    }) : e))
                      , r = Uo(t)
                      , o = function(e, t) {
                        const n = qo(e)
                          , r = {
                            x: Array.from({
                                length: n.width
                            }, ( (e, t) => t)),
                            y: Array.from({
                                length: n.height
                            }, ( (e, t) => t))
                        };
                        return 1 === t.x && (r.x = r.x.reverse()),
                        1 === t.y && (r.y = r.y.reverse()),
                        r
                    }(e, r);
                    let i = !1
                      , s = 0;
                    const a = [];
                    o.x.forEach((e => {
                        o.y.forEach((t => {
                            const o = {
                                x: e,
                                y: t
                            }
                              , l = zo(n, o);
                            if (!l)
                                return;
                            const c = Wo(n, o, r);
                            if ("tile" !== c.obstacle.type || (u = l,
                            d = c.obstacle.tile,
                            u.merges || d.merges || u.value !== d.value)) {
                                if (jo(o, c.emptyPosition))
                                    return;
                                Lo(n, l, o, c.emptyPosition),
                                a.push(l.id)
                            } else {
                                const e = function(e, t, n, r, o, i) {
                                    let s = o;
                                    i && (so(n.previousPosition, "Target tile is missing previous position"),
                                    s = n.previousPosition);
                                    const a = Po(t.value + n.value, o, {
                                        merges: [Po(t.value, o, {
                                            id: t.id,
                                            previousPosition: r
                                        }), Po(n.value, o, {
                                            id: n.id,
                                            previousPosition: s
                                        })]
                                    });
                                    return Vo(e, r, null),
                                    Vo(e, o, a),
                                    a
                                }(n, l, c.obstacle.tile, o, c.obstacle.position, a.includes(c.obstacle.tile.id));
                                s += e.value
                            }
                            var u, d;
                            i = !0
                        }
                        ))
                    }
                    ));
                    const l = function(e) {
                        return ei(e, (e => {
                            if (!e)
                                return null;
                            if (e.merges) {
                                const [t,n] = e.merges;
                                return so(t.previousPosition && n.previousPosition, "Tile merge is missing previous position"),
                                {
                                    type: "tileMerged",
                                    tileA: {
                                        tileId: t.id,
                                        position: t.previousPosition
                                    },
                                    tileB: {
                                        tileId: n.id,
                                        position: n.previousPosition
                                    },
                                    resultingTile: {
                                        tileId: e.id,
                                        position: e.position
                                    }
                                }
                            }
                            return e.previousPosition && !jo(e.previousPosition, e.position) ? {
                                type: "tileMoved",
                                tileId: e.id,
                                from: e.previousPosition,
                                to: e.position
                            } : null
                        }
                        )).filter((e => null !== e))
                    }(n);
                    return i ? {
                        anyMoved: !0,
                        board: n,
                        changes: l,
                        score: s
                    } : {
                        anyMoved: !1
                    }
                }(e.board, t);
                if (!n.anyMoved)
                    return e;
                const r = Yo(n.board, e._rng.rng)
                  , o = r.board;
                to(r.change, "Unexpected: no tile was added to boards");
                const {powerups: i, changes: s} = function(e, t, n) {
                    var r, o;
                    const i = []
                      , s = {
                        ...e
                    };
                    for (const a of n)
                        if ("tileMerged" === a.type) {
                            const e = a.resultingTile.tileId
                              , n = null == (r = ni(t, e)) ? void 0 : r.value;
                            to(n, `Could not find value for tile ${e}`);
                            const l = os[n];
                            if (!l)
                                continue;
                            const c = l.reduce(( (e, t) => {
                                const n = s[t];
                                return n && n.usesRemaining < ss[t].usesLimit && e.push({
                                    powerup: t,
                                    usesRemaining: n.usesRemaining
                                }),
                                e
                            }
                            ), []).sort(( (e, t) => e.usesRemaining - t.usesRemaining));
                            if (c && c.length > 0) {
                                const e = null == (o = c[0]) ? void 0 : o.powerup;
                                to(e, "No powerup was chosen for accrual");
                                const t = s[e];
                                to(t, "Powerup state not found"),
                                s[e] = {
                                    ...t,
                                    usesRemaining: t.usesRemaining + 1
                                },
                                i.push({
                                    type: "powerupAccrued",
                                    powerup: e
                                })
                            }
                        }
                    return {
                        powerups: s,
                        changes: [...n, ...i]
                    }
                }(e.powerups, o, [...n.changes, r.change]);
                return {
                    ...e,
                    state: qi.Playing,
                    board: o,
                    moveCount: e.moveCount + 1,
                    score: e.score + n.score,
                    previousGameplay: hs(e),
                    powerups: i,
                    changes: s
                }
            }
        }(e, t.direction);
        break;
    case "activatePowerup":
        r = function(e, t) {
            if (!cs(e, t))
                return e;
            const n = ls[t].activate(e);
            switch (n.type) {
            case "notActivated":
                return e;
            case "activated":
                return n.gameplay;
            case "activatedAndCompleted":
                return ps(n.gameplay, t);
            default:
                Ro()
            }
        }(e, t.powerup);
        break;
    case "completePowerup":
        r = function(e, t) {
            if (e.state !== qi.Selecting)
                return e;
            const {complete: n} = ls[t];
            if (!n)
                throw new Error(`Powerup ${t} does not support completing.`);
            const r = n(e);
            switch (r.type) {
            case "notCompleted":
                return e;
            case "completed":
                return ps(r.gameplay, t);
            default:
                Ro()
            }
        }(e, t.currentPowerup);
        break;
    case "cancelPowerup":
        r = function(e, t) {
            return ds(e, t) && e.previousGameplay ? {
                ...e.previousGameplay,
                changes: []
            } : e
        }(e, t.powerup);
        break;
    case "select":
        r = function(e, t) {
            if (e.state !== qi.Selecting)
                return e;
            switch (e.selection.type) {
            case "multipleTile":
                return zi(e, "multipleTile"),
                so("position" === t.type, "Invalid selection target type"),
                function(e, t) {
                    const {selection: n} = e;
                    so(n.tiles.length < n.amount, "Too many tiles selected");
                    const r = zo(e.board, t);
                    if (null == r || n.tiles.find((e => e === r.id)))
                        return e;
                    const o = {
                        ...e,
                        selection: {
                            ...n,
                            tiles: [...n.tiles, r.id]
                        }
                    };
                    return o.selection.tiles.length === o.selection.amount ? fs(o, o.actionOnSelectionComplete) : o
                }(e, t.position);
            case "adjacentTilesDirectional":
                return zi(e, "adjacentTilesDirectional"),
                so("position" === t.type, "Invalid selection target type"),
                function(e, t) {
                    const {selection: n} = e;
                    so(!n.origin && !n.target || n.origin && !n.target, "Invalid selection state");
                    const r = zo(e.board, t);
                    if (!r)
                        return e;
                    if (n.origin) {
                        const r = ri(n.origin, e.board);
                        if (so(r, `Could not find position of tile with id ${n.origin}`),
                        !(t.x === r.x && 1 === Math.abs(t.y - r.y) || t.y === r.y && 1 === Math.abs(t.x - r.x)))
                            return e
                    } else if (!Ki.some((n => {
                        const r = $o(t, n);
                        return null != zo(e.board, r)
                    }
                    )))
                        return e;
                    const o = {
                        ...e,
                        selection: {
                            ...n,
                            [n.origin ? "target" : "origin"]: r.id
                        }
                    };
                    return o.selection.origin && o.selection.target ? fs(o, o.actionOnSelectionComplete) : o
                }(e, t.position);
            case "singleCell":
                return zi(e, "singleCell"),
                so("position" === t.type, "Invalid selection target type"),
                function(e, t) {
                    const {selection: n} = e;
                    so(null === n.position, "Invalid selection state, position already set");
                    const r = {
                        ...e,
                        selection: {
                            ...n,
                            position: t
                        }
                    };
                    return fs(r, r.actionOnSelectionComplete)
                }(e, t.position);
            case "bomb":
                return zi(e, "bomb"),
                so("position" === t.type, "Invalid selection target type"),
                function(e, t) {
                    const {selection: n} = e;
                    so(null === n.position, "Invalid selection state, position already set");
                    const {width: r, height: o} = qo(e.board)
                      , i = Math.max(0, t.x - 1)
                      , s = Math.max(0, t.y - 1)
                      , a = Math.min(r - 1, t.x + 1)
                      , l = Math.min(o - 1, t.y + 1);
                    let c = !1;
                    for (let d = i; d <= a; d++)
                        for (let t = s; t <= l; t++)
                            if (zo(e.board, {
                                x: d,
                                y: t
                            })) {
                                c = !0;
                                break
                            }
                    if (!c)
                        return e;
                    const u = {
                        ...e,
                        selection: {
                            ...n,
                            position: t
                        }
                    };
                    return fs(u, u.actionOnSelectionComplete)
                }(e, t.position);
            case "singleTile":
                throw zi(e, "singleTile"),
                so("position" === t.type, "Invalid selection target type"),
                new Error("Not implemented");
            case "byValue":
                return zi(e, "byValue"),
                so("position" === t.type, "Invalid selection target type"),
                function(e, t) {
                    const {selection: n} = e;
                    so(null === n.value, "Invalid selection state, value already set");
                    const r = zo(e.board, t);
                    if (!r)
                        return e;
                    const o = {
                        ...e,
                        selection: {
                            ...n,
                            value: r.value
                        }
                    };
                    return fs(o, o.actionOnSelectionComplete)
                }(e, t.position);
            case "rotation":
                return zi(e, "rotation"),
                so("rotation" === t.type, "Invalid selection target type"),
                function(e, t) {
                    const {selection: n} = e;
                    so(null === n.direction, "Invalid selection state, direction already set");
                    const r = {
                        ...e,
                        selection: {
                            ...n,
                            direction: t
                        }
                    };
                    return fs(r, r.actionOnSelectionComplete)
                }(e, t.direction);
            case "tileAndEmptyCell":
                return zi(e, "tileAndEmptyCell"),
                so("position" === t.type, "Invalid selection target type"),
                function(e, t) {
                    const {selection: {emptyCell: n, tile: r}} = e;
                    so(null === r || null === n, "Invalid selection state both tile and empty cell already set");
                    const o = zo(e.board, t);
                    if (so(void 0 !== o, `${t} is out of bounds`),
                    null === r)
                        return so(null === n, "Empty cell is already set"),
                        null === o ? e : {
                            ...e,
                            selection: {
                                ...e.selection,
                                tile: o.id
                            }
                        };
                    {
                        if (so(null === n, "Empty cell is already set"),
                        null !== o)
                            return e;
                        const r = {
                            ...e,
                            selection: {
                                ...e.selection,
                                emptyCell: t
                            }
                        };
                        return fs(r, r.actionOnSelectionComplete)
                    }
                }(e, t.position);
            default:
                Ro(e.selection)
            }
        }(e, t.target);
        break;
    case "continueAfterWin":
        r = function(e) {
            return e.state !== qi.GameWon ? e : {
                ...e,
                state: qi.Playing,
                previousGameplay: null,
                changes: []
            }
        }(e);
        break;
    default:
        Ro()
    }
    return r !== e && (r.lastAction === e.lastAction || "previousGameplay"in e && r.lastAction === (null == (n = e.previousGameplay) ? void 0 : n.lastAction)) && (r.lastAction = t),
    r = ys(r),
    r = function(e) {
        const {state: t, board: n} = e;
        return t === qi.Selecting || t === qi.Fresh || t === qi.GameWon || t === qi.GameOver ? e : function(e) {
            return Ho(e) || function(e) {
                let t = !1;
                return Xo(e, ( (n, r) => {
                    if (null !== n)
                        for (const o of Object.values(Go)) {
                            const i = Uo(o)
                              , {obstacle: s} = Wo(e, r, i);
                            "tile" === s.type && s.tile.value === n.value && (t = !0)
                        }
                }
                )),
                t
            }(e)
        }(n) ? function(e) {
            return !!e.previousGameplay && 1024 === e.previousGameplay.highestReachedTile && 2048 === e.highestReachedTile
        }(e) ? {
            ...e,
            state: qi.GameWon
        } : e : {
            ...e,
            state: qi.GameOver
        }
    }(r),
    r
}
function hs(e) {
    return e.state === qi.Fresh ? e : {
        ...e,
        previousGameplay: null
    }
}
function ms(e, t, n=as, r) {
    r = r ?? Li.float().toString();
    const o = Fi(r, {
        state: !0
    })
      , i = Li.clone(o);
    let s = function(e, t) {
        return Ko(e, t)
    }(e, t);
    const a = [];
    for (let l = 0; l < 2; l++) {
        const e = Yo(s, i);
        s = e.board,
        to(e.change, "Expected initial tiles to be added to the board"),
        a.push(e.change)
    }
    return {
        state: qi.Fresh,
        board: s,
        id: Oo(),
        moveCount: 0,
        score: 0,
        changes: a,
        powerups: gs(n),
        _rng: {
            seed: r,
            rng: i,
            srng: o
        },
        highestReachedTile: 2,
        lastAction: null,
        _gmms: "2048"
    }
}
function gs(e) {
    const t = {};
    for (const n of e)
        t[n] = {
            usesRemaining: ss[n].initialUses,
            usesCount: 0
        };
    return t
}
function ys(e) {
    let t = e.highestReachedTile;
    return Xo(e.board, (e => {
        e && e.value > t && (t = e.value)
    }
    )),
    t === e.highestReachedTile ? e : {
        ...e,
        highestReachedTile: t
    }
}
function Ds(e) {
    e.state === qi.Selecting && (to(e.previousGameplay, "Selecting gameplay should have a previous gameplay"),
    e = e.previousGameplay);
    const t = {
        ...e,
        board: Qo(e.board, (e => {
            if (!e)
                return null;
            const {value: t, position: n, id: r} = e;
            return Po(t, n, {
                id: r
            })
        }
        )),
        changes: ei(e.board, (e => e ? {
            type: "tileAdded",
            position: e.position,
            tileId: e.id
        } : null)).filter((e => null !== e))
    };
    return "previousGameplay"in t && (t.previousGameplay = null),
    t
}
function vs() {
    try {
        return "undefined" == typeof window && "undefined" != typeof self && self instanceof DedicatedWorkerGlobalScope
    } catch (e) {
        return !1
    }
}
const Cs = "a"
  , _s = "j"
  , As = "k"
  , xs = "l"
  , Es = "m"
  , ws = "n"
  , bs = "o"
  , Fs = "p"
  , Ss = "q"
  , ks = "r"
  , Bs = "s"
  , Ms = "t"
  , Os = "gameState"
  , Ts = "bestScore";
var Is = {
    local: {},
    session: {}
};
const Rs = Function("return this")()
  , Ps = String.fromCharCode(83, 116, 114, 105, 110, 103)
  , $s = String.fromCharCode(102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101)
  , js = Rs[Ps][$s]
  , Us = js(98, 116, 111, 97)
  , Gs = js(97, 116, 111, 98)
  , Ns = js(74, 83, 79, 78)
  , Ls = js(115, 116, 114, 105, 110, 103, 105, 102, 121)
  , qs = js(112, 97, 114, 115, 101)
  , zs = js(108, 111, 99, 97, 116, 105, 111, 110)
  , Ws = js(104, 111, 115, 116, 110, 97, 109, 101)
  , Vs = Rs[Us]
  , Hs = Rs[Gs]
  , Ys = Rs[Ns][Ls]
  , Js = Rs[Ns][qs]
  , Ks = Rs[zs][Ws];
function Xs(e) {
    const t = e.length;
    let n = 0;
    t >= 2 && 61 === e.charCodeAt(t - 2) ? n = 2 : t >= 1 && 61 === e.charCodeAt(t - 1) && (n = 1);
    const r = (n + 1) % 3;
    return e.substring(0, t - n) + la[r]
}
const Zs = Hs("c2VyaWFsaXplcg==")
  , Qs = Hs("cGFyc2U=")
  , ea = Hs("c3RyaW5naWZ5");
function ta(e, t, n) {
    return function(e, t, n) {
        var r, o, i, s, a, l;
        (null == n ? void 0 : n.onError) && console.warn("onError has been deprecated. Please use onWriteError instead");
        const c = null != (r = null == n ? void 0 : n.serializer) ? r : JSON
          , u = null != (o = null == n ? void 0 : n.storage) ? o : "local"
          , d = null == (i = null == n ? void 0 : n.syncTabs) || i
          , p = null != (a = null != (s = null == n ? void 0 : n.onWriteError) ? s : null == n ? void 0 : n.onError) ? a : t => console.error(`Error when writing value from persisted store "${e}" to ${u}`, t)
          , f = null != (l = null == n ? void 0 : n.onParseError) ? l : (t, n) => console.error(`Error when parsing ${t ? '"' + t + '"' : "value"} from persisted store "${e}"`, n)
          , h = "undefined" != typeof window && "undefined" != typeof document
          , m = h ? "local" === u ? localStorage : sessionStorage : null;
        function g(e, t) {
            try {
                null == m || m.setItem(e, c.stringify(t))
            } catch (n) {
                p(n)
            }
        }
        if (!Is[u][e]) {
            const n = co(function() {
                const n = null == m ? void 0 : m.getItem(e);
                if (n)
                    try {
                        return c.parse(n)
                    } catch (r) {
                        f(n, r)
                    }
                return t
            }(), (t => {
                if (h && "local" == u && d) {
                    const n = n => {
                        if (n.key === e) {
                            let e;
                            try {
                                e = n.newValue ? c.parse(n.newValue) : null
                            } catch (r) {
                                return void f(n.newValue, r)
                            }
                            t(e)
                        }
                    }
                    ;
                    return window.addEventListener("storage", n),
                    () => window.removeEventListener("storage", n)
                }
            }
            ))
              , {subscribe: r, set: o} = n;
            Is[u][e] = {
                set(t) {
                    o(t),
                    g(e, t)
                },
                update: t => n.update((n => {
                    const r = t(n);
                    return g(e, r),
                    r
                }
                )),
                subscribe: r
            }
        }
        return Is[u][e]
    }(function(e) {
        const t = sa.encode(e).reduce(( (e, t) => e + Math.sin(t)), 0)
          , n = Math.floor(1e7 * t).toString(36);
        return sa.encode(`${e}${n}`).reduce(( (e, t) => e + t.toString(36).split("").reverse().join("")), "")
    }(e), t, {
        ...n,
        [Zs]: (null == n ? void 0 : n[Zs]) ?? na((e => ra(e)), (e => oa(e)))
    })
}
function na(e, t) {
    return {
        [Qs]: e,
        [ea]: t
    }
}
function ra(e) {
    return Js(function(e) {
        const t = Hs(Xs(e))
          , n = sa.encode(ia)
          , r = n.length
          , o = t.length
          , i = new Uint8Array(o);
        for (let s = 0; s < o; s++)
            i[s] = t.charCodeAt(s) ^ n[s % r];
        return aa.decode(i)
    }(e))
}
function oa(e) {
    return function(e) {
        const t = sa.encode(e)
          , n = sa.encode(ia)
          , r = n.length
          , o = t.length
          , i = new Uint8Array(o);
        for (let s = 0; s < o; s++)
            i[s] = t[s] ^ n[s % r];
        return function(e) {
            const t = e.length;
            let n = 0;
            t >= 2 && 61 === e.charCodeAt(t - 2) ? n = 2 : t >= 1 && 61 === e.charCodeAt(t - 1) && (n = 1);
            const r = (n + 2) % 3;
            return e.substring(0, t - n) + la[r]
        }(Vs(String.fromCharCode(...i)))
    }(Ys(e))
}
const ia = "dGhlIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw=="
  , sa = new TextEncoder
  , aa = new TextDecoder
  , la = ["", Hs("PQ=="), Hs("PT0=")]
  , ca = Hs("QW1hem9u")
  , ua = Hs("UHJpbWU=")
  , da = Hs("MjA0OCBQbHVz")
  , pa = Hs("UGx1cw==")
  , fa = Hs("aHR0cHM6Ly9nYW1pbmcuYW1hem9uLmNvbS93ZWItZ2FtZXMvMjA0OA==")
  , ha = co(void 0);
var ma = (e => (e.Tutorial = "tutorial",
e.Standard = "standard",
e.Classic = "classic",
e.Partner1 = "partner1",
e))(ma || {});
const ga = {
    tutorial: "Tutorial",
    standard: "Standard",
    classic: "Classic",
    partner1: pa
}
  , ya = new Set
  , Da = new Set([rs.Undo, rs.SwapTwoTiles, rs.RemoveTilesByValue])
  , va = {
    tutorial: Da,
    standard: Da,
    classic: ya,
    partner1: new Set([rs.Undo, rs.TeleportTileToEmptyCell, rs.SwapTwoTiles, rs.RotateOuterRingOfBoard, rs.RemoveTilesByValue, rs.Bomb])
}
  , Ca = ta("b", !1);
var _a = (e => (e.None = "None",
e.BasicTiles = "Basic tiles",
e.OverflowTiles = "Overflow tiles",
e.NearVictory = "Near victory",
e.NearGameOver = "Near game over",
e.AllStandardPowerups = "All standard powerups",
e))(_a || {});
const Aa = vs() ? "-*" : "*"
  , xa = co(60)
  , Ea = ta("c", []);
function wa(e) {
    Eo && Ea.update((t => {
        if (t.includes(e))
            return t;
        const n = [...t, e];
        return n.sort(Intl.Collator().compare),
        n
    }
    ))
}
const ba = ta("d", Aa);
function Fa() {
    return ba.set(Aa)
}
var Sa = (e => (e.None = "None",
e.Worker = "Worker",
e.Main = "Main",
e))(Sa || {});
const ka = ta("e", "None");
ta("f", !1);
const Ba = ta("g", !1)
  , Ma = ta("h", "seed")
  , Oa = {
    "Basic tiles": {
        board: "\n      4096 2048 1024 512 \n      32   64   128  256\n      16   8    4    2    \n      -    -    -    2\n    "
    },
    "Overflow tiles": {
        board: "\n      67108864 33554432 16777216 8388608\n      524288   1048576  2097152  4194304\n      262144   131072   65536    32768\n      4096     4096     8192     16384\n    "
    },
    "Near victory": {
        board: "\n      1024 1024 - -\n      -    -    - -\n      -    -    - -\n      -    -    - -\n    "
    },
    "Near game over": {
        board: "\n      8  4  8    16\n      32 64 -    256\n      8  4  1024 16\n      32 64 128  256\n    "
    },
    "All standard powerups": {
        forcePowerups: va[ma.Standard]
    }
}
  , Ta = ta("i", "None")
  , Ia = ko(vs() ? "worker" : "app")
  , Ra = () => {}
;
let Pa;
Ra.extend = () => Ra,
Ra.namespace = "";
const $a = new Set
  , ja = (e, t=Ia.extend.bind(Ia), n=!0) => {
    const r = t(e)
      , o = r.extend.bind(r)
      , i = r;
    i.extend = (e, t, n) => ja(e, o, n),
    n && (vs() ? Pa ? Pa(r.namespace) : $a.add(r.namespace) : wa(r.namespace));
    const s = {
        get: (e, t) => Reflect.get(e, t),
        apply(e, t, n) {
            if (function(e, t) {
                Na.has(e) && pn({
                    category: `log(${e})`,
                    message: t.toString(),
                    data: {
                        args: t
                    },
                    level: "debug"
                })
            }(r.namespace, n),
            Eo)
                return Reflect.apply(e, t, n)
        }
    };
    return new Proxy(i,s)
}
  , Ua = ja("debug")
  , Ga = e => {
    if (Pa)
        Ua("call to setOnNamespaceRegistered ignored, already set");
    else {
        Ua("setOnNamespaceRegistered called"),
        Pa = e,
        so(Pa, "onNamespaceRegistered must be set");
        for (const e of $a)
            Pa(e)
    }
}
  , Na = new Set(["app:api", "app:DirectBroker", "app:ezoic", "app:EzoicPlaceholder", "app:fonts", "app:GameLayout", "app:GameRenderer", "app:KeyboardAction", "app:KeyboardActionsController", "app:MessageBroker", "app:MessageBroker:addListener", "app:MessageBroker:call", "app:MessageBroker:handleCall", "app:MessageBroker:handleResponse", "app:MessageBroker:removeListener", "app:polyfill/createImageBitmap", "app:Renderer", "app:Renderer/ticker", "app:renderGame", "app:Resources", "app:Resources/textures", "app:stores/gameplay", "app:stores/gameplay:verbose", "app:stores/partner1/features", "app:stores/partner1/geo", "app:stores/partner1/token", "app:stores/resolution", "app:stores/worker", "worker:fonts", "worker:MessageBroker", "worker:MessageBroker:addListener", "worker:MessageBroker:call", "worker:MessageBroker:handleCall", "worker:MessageBroker:handleResponse", "worker:MessageBroker:removeListener", "worker:Renderer", "worker:Resources/textures", "worker:worker"]);
function La(e) {
    if (ko.enable("*"),
    !Eo)
        return Ua("disabled"),
        void ko.disable();
    e ? (Ua("namespace changed", {
        namespace: e
    }),
    ko.enable(e)) : (Ua("disabled"),
    ko.disable())
}
function qa(e, t, n) {
    var r, o = n || {}, i = o.noTrailing, s = void 0 !== i && i, a = o.noLeading, l = void 0 !== a && a, c = o.debounceMode, u = void 0 === c ? void 0 : c, d = !1, p = 0;
    function f() {
        r && clearTimeout(r)
    }
    function h() {
        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
        var a = this
          , c = Date.now() - p;
        function h() {
            p = Date.now(),
            t.apply(a, o)
        }
        function m() {
            r = void 0
        }
        d || (l || !u || r || h(),
        f(),
        void 0 === u && c > e ? l ? (p = Date.now(),
        s || (r = setTimeout(u ? m : h, e))) : h() : !0 !== s && (r = setTimeout(u ? m : h, void 0 === u ? e - c : e)))
    }
    return h.cancel = function(e) {
        var t = (e || {}).upcomingOnly
          , n = void 0 !== t && t;
        f(),
        d = !n
    }
    ,
    h
}
function za(e, t, n) {
    var r = (n || {}).atBegin;
    return qa(e, t, {
        debounceMode: !1 !== (void 0 !== r && r)
    })
}
function Wa(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
    }
    return n
}
ba.subscribe(La),
ja("debugTap"),
ko.colors = ["#ffda79", "#ffb142", "#ff793f", "#ff5252", "#fed330", "#fd9644", "#fc5c65", "#fa8231", "#f7b731", "#eb3b5a", "#cc32c1", "#d1ccc0", "#cd6133", "#ccae62", "#cc8e35", "#aaa69d", "#a5b1c2", "#a55eea", "#8854d0", "#778ca3", "#706fd3", "#4b7bec", "#45aaf2", "#3867d6", "#34ace0", "#33d9b2", "#2d98da", "#2bcbba", "#26de81", "#218c74", "#20bf6b", "#0fb9b1"];
const Va = (e, t, n) => Math.min(Math.max(n, e), t);
const Ha = 12;
function Ya(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Ja = ["duration", "bounce"]
  , Ka = ["stiffness", "damping", "mass"];
function Xa(e, t) {
    return t.some((t => void 0 !== e[t]))
}
function Za(e) {
    var {from: t=0, to: n=1, restSpeed: r=2, restDelta: o} = e
      , i = Wa(e, ["from", "to", "restSpeed", "restDelta"]);
    const s = {
        done: !1,
        value: t
    };
    let {stiffness: a, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: p} = function(e) {
        let t = Object.assign({
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1
        }, e);
        if (!Xa(e, Ka) && Xa(e, Ja)) {
            const n = function({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
                let o, i, s = 1 - t;
                s = Va(.05, 1, s),
                e = Va(.01, 10, e / 1e3),
                s < 1 ? (o = t => {
                    const r = t * s
                      , o = r * e;
                    return .001 - (r - n) / Ya(t, s) * Math.exp(-o)
                }
                ,
                i = t => {
                    const r = t * s * e
                      , i = r * n + n
                      , a = Math.pow(s, 2) * Math.pow(t, 2) * e
                      , l = Math.exp(-r)
                      , c = Ya(Math.pow(t, 2), s);
                    return (.001 - o(t) > 0 ? -1 : 1) * ((i - a) * l) / c
                }
                ) : (o = t => Math.exp(-t * e) * ((t - n) * e + 1) - .001,
                i = t => Math.exp(-t * e) * (e * e * (n - t)));
                const a = function(e, t, n) {
                    let r = n;
                    for (let o = 1; o < Ha; o++)
                        r -= e(r) / t(r);
                    return r
                }(o, i, 5 / e);
                if (e *= 1e3,
                isNaN(a))
                    return {
                        stiffness: 100,
                        damping: 10,
                        duration: e
                    };
                {
                    const t = Math.pow(a, 2) * r;
                    return {
                        stiffness: t,
                        damping: 2 * s * Math.sqrt(r * t),
                        duration: e
                    }
                }
            }(e);
            t = Object.assign(Object.assign(Object.assign({}, t), n), {
                velocity: 0,
                mass: 1
            }),
            t.isResolvedFromDuration = !0
        }
        return t
    }(i)
      , f = Qa
      , h = Qa;
    function m() {
        const e = u ? -u / 1e3 : 0
          , r = n - t
          , i = l / (2 * Math.sqrt(a * c))
          , s = Math.sqrt(a / c) / 1e3;
        if (void 0 === o && (o = Math.min(Math.abs(n - t) / 100, .4)),
        i < 1) {
            const t = Ya(s, i);
            f = o => {
                const a = Math.exp(-i * s * o);
                return n - a * ((e + i * s * r) / t * Math.sin(t * o) + r * Math.cos(t * o))
            }
            ,
            h = n => {
                const o = Math.exp(-i * s * n);
                return i * s * o * (Math.sin(t * n) * (e + i * s * r) / t + r * Math.cos(t * n)) - o * (Math.cos(t * n) * (e + i * s * r) - t * r * Math.sin(t * n))
            }
        } else if (1 === i)
            f = t => n - Math.exp(-s * t) * (r + (e + s * r) * t);
        else {
            const t = s * Math.sqrt(i * i - 1);
            f = o => {
                const a = Math.exp(-i * s * o)
                  , l = Math.min(t * o, 300);
                return n - a * ((e + i * s * r) * Math.sinh(l) + t * r * Math.cosh(l)) / t
            }
        }
    }
    return m(),
    {
        next: e => {
            const t = f(e);
            if (p)
                s.done = e >= d;
            else {
                const i = 1e3 * h(e)
                  , a = Math.abs(i) <= r
                  , l = Math.abs(n - t) <= o;
                s.done = a && l
            }
            return s.value = s.done ? n : t,
            s
        }
        ,
        flipTarget: () => {
            u = -u,
            [t,n] = [n, t],
            m()
        }
    }
}
Za.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
const Qa = e => 0
  , el = (e, t, n) => {
    const r = t - e;
    return 0 === r ? 1 : (n - e) / r
}
  , tl = (e, t, n) => -n * e + n * t + e
  , nl = (e, t) => n => Math.max(Math.min(n, t), e)
  , rl = e => e % 1 ? Number(e.toFixed(5)) : e
  , ol = /(-)?([\d]*\.?[\d])+/g
  , il = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , sl = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function al(e) {
    return "string" == typeof e
}
const ll = {
    test: e => "number" == typeof e,
    parse: parseFloat,
    transform: e => e
}
  , cl = Object.assign(Object.assign({}, ll), {
    transform: nl(0, 1)
});
Object.assign(Object.assign({}, ll), {
    default: 1
});
const ul = {
    test: e => al(e) && e.endsWith("%") && 1 === e.split(" ").length,
    parse: parseFloat,
    transform: e => `${e}%`
};
Object.assign(Object.assign({}, ul), {
    parse: e => ul.parse(e) / 100,
    transform: e => ul.transform(100 * e)
});
const dl = (e, t) => n => Boolean(al(n) && sl.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , pl = (e, t, n) => r => {
    if (!al(r))
        return r;
    const [o,i,s,a] = r.match(ol);
    return {
        [e]: parseFloat(o),
        [t]: parseFloat(i),
        [n]: parseFloat(s),
        alpha: void 0 !== a ? parseFloat(a) : 1
    }
}
  , fl = {
    test: dl("hsl", "hue"),
    parse: pl("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + ul.transform(rl(t)) + ", " + ul.transform(rl(n)) + ", " + rl(cl.transform(r)) + ")"
}
  , hl = nl(0, 255)
  , ml = Object.assign(Object.assign({}, ll), {
    transform: e => Math.round(hl(e))
})
  , gl = {
    test: dl("rgb", "red"),
    parse: pl("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + ml.transform(e) + ", " + ml.transform(t) + ", " + ml.transform(n) + ", " + rl(cl.transform(r)) + ")"
}
  , yl = {
    test: dl("#"),
    parse: function(e) {
        let t = ""
          , n = ""
          , r = ""
          , o = "";
        return e.length > 5 ? (t = e.substr(1, 2),
        n = e.substr(3, 2),
        r = e.substr(5, 2),
        o = e.substr(7, 2)) : (t = e.substr(1, 1),
        n = e.substr(2, 1),
        r = e.substr(3, 1),
        o = e.substr(4, 1),
        t += t,
        n += n,
        r += r,
        o += o),
        {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: o ? parseInt(o, 16) / 255 : 1
        }
    },
    transform: gl.transform
}
  , Dl = e => gl.test(e) || yl.test(e) || fl.test(e)
  , vl = e => gl.test(e) ? gl.parse(e) : fl.test(e) ? fl.parse(e) : yl.parse(e)
  , Cl = e => al(e) ? e : e.hasOwnProperty("red") ? gl.transform(e) : fl.transform(e)
  , _l = "${c}"
  , Al = "${n}";
function xl(e) {
    "number" == typeof e && (e = `${e}`);
    const t = [];
    let n = 0;
    const r = e.match(il);
    r && (n = r.length,
    e = e.replace(il, _l),
    t.push(...r.map(vl)));
    const o = e.match(ol);
    return o && (e = e.replace(ol, Al),
    t.push(...o.map(ll.parse))),
    {
        values: t,
        numColors: n,
        tokenised: e
    }
}
function El(e) {
    return xl(e).values
}
function wl(e) {
    const {values: t, numColors: n, tokenised: r} = xl(e)
      , o = t.length;
    return e => {
        let t = r;
        for (let r = 0; r < o; r++)
            t = t.replace(r < n ? _l : Al, r < n ? Cl(e[r]) : rl(e[r]));
        return t
    }
}
const bl = e => "number" == typeof e ? 0 : e
  , Fl = {
    test: function(e) {
        var t, n, r, o;
        return isNaN(e) && al(e) && (null !== (n = null === (t = e.match(ol)) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = e.match(il)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
    },
    parse: El,
    createTransformer: wl,
    getAnimatableNone: function(e) {
        const t = El(e);
        return wl(e)(t.map(bl))
    }
};
function Sl(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function kl({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    n /= 100;
    let o = 0
      , i = 0
      , s = 0;
    if (t /= 100) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - r;
        o = Sl(a, r, e + 1 / 3),
        i = Sl(a, r, e),
        s = Sl(a, r, e - 1 / 3)
    } else
        o = i = s = n;
    return {
        red: Math.round(255 * o),
        green: Math.round(255 * i),
        blue: Math.round(255 * s),
        alpha: r
    }
}
const Bl = (e, t, n) => {
    const r = e * e
      , o = t * t;
    return Math.sqrt(Math.max(0, n * (o - r) + r))
}
  , Ml = [yl, gl, fl]
  , Ol = e => Ml.find((t => t.test(e)))
  , Tl = (e, t) => {
    let n = Ol(e)
      , r = Ol(t)
      , o = n.parse(e)
      , i = r.parse(t);
    n === fl && (o = kl(o),
    n = gl),
    r === fl && (i = kl(i),
    r = gl);
    const s = Object.assign({}, o);
    return e => {
        for (const t in s)
            "alpha" !== t && (s[t] = Bl(o[t], i[t], e));
        return s.alpha = tl(o.alpha, i.alpha, e),
        n.transform(s)
    }
}
  , Il = (e, t) => n => t(e(n))
  , Rl = (...e) => e.reduce(Il);
function Pl(e, t) {
    return "number" == typeof e ? n => tl(e, t, n) : Dl(e) ? Tl(e, t) : Gl(e, t)
}
const $l = (e, t) => {
    const n = [...e]
      , r = n.length
      , o = e.map(( (e, n) => Pl(e, t[n])));
    return e => {
        for (let t = 0; t < r; t++)
            n[t] = o[t](e);
        return n
    }
}
  , jl = (e, t) => {
    const n = Object.assign(Object.assign({}, e), t)
      , r = {};
    for (const o in n)
        void 0 !== e[o] && void 0 !== t[o] && (r[o] = Pl(e[o], t[o]));
    return e => {
        for (const t in r)
            n[t] = r[t](e);
        return n
    }
}
;
function Ul(e) {
    const t = Fl.parse(e)
      , n = t.length;
    let r = 0
      , o = 0
      , i = 0;
    for (let s = 0; s < n; s++)
        r || "number" == typeof t[s] ? r++ : void 0 !== t[s].hue ? i++ : o++;
    return {
        parsed: t,
        numNumbers: r,
        numRGB: o,
        numHSL: i
    }
}
const Gl = (e, t) => {
    const n = Fl.createTransformer(t)
      , r = Ul(e)
      , o = Ul(t);
    return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? Rl($l(r.parsed, o.parsed), n) : n => `${n > 0 ? t : e}`
}
  , Nl = (e, t) => n => tl(e, t, n);
function Ll(e, t, {clamp: n=!0, ease: r, mixer: o}={}) {
    const i = e.length;
    t.length,
    !r || !Array.isArray(r) || r.length,
    e[0] > e[i - 1] && (e = [].concat(e),
    t = [].concat(t),
    e.reverse(),
    t.reverse());
    const s = function(e, t, n) {
        const r = []
          , o = n || ("number" == typeof (i = e[0]) ? Nl : "string" == typeof i ? Dl(i) ? Tl : Gl : Array.isArray(i) ? $l : "object" == typeof i ? jl : void 0);
        var i;
        const s = e.length - 1;
        for (let a = 0; a < s; a++) {
            let n = o(e[a], e[a + 1]);
            if (t) {
                const e = Array.isArray(t) ? t[a] : t;
                n = Rl(e, n)
            }
            r.push(n)
        }
        return r
    }(t, r, o)
      , a = 2 === i ? function([e,t], [n]) {
        return r => n(el(e, t, r))
    }(e, s) : function(e, t) {
        const n = e.length
          , r = n - 1;
        return o => {
            let i = 0
              , s = !1;
            if (o <= e[0] ? s = !0 : o >= e[r] && (i = r - 1,
            s = !0),
            !s) {
                let t = 1;
                for (; t < n && !(e[t] > o || t === r); t++)
                    ;
                i = t - 1
            }
            const a = el(e[i], e[i + 1], o);
            return t[i](a)
        }
    }(e, s);
    return n ? t => a(Va(e[0], e[i - 1], t)) : a
}
const ql = e => Math.pow(e, 2);
const zl = (Wl = ql,
e => e <= .5 ? Wl(2 * e) / 2 : (2 - Wl(2 * (1 - e))) / 2);
var Wl;
function Vl(e, t) {
    return e.map(( () => t || zl)).splice(0, e.length - 1)
}
function Hl({from: e=0, to: t=1, ease: n, offset: r, duration: o=300}) {
    const i = {
        done: !1,
        value: e
    }
      , s = Array.isArray(t) ? t : [e, t]
      , a = function(e, t) {
        return e.map((e => e * t))
    }(r && r.length === s.length ? r : function(e) {
        const t = e.length;
        return e.map(( (e, n) => 0 !== n ? n / (t - 1) : 0))
    }(s), o);
    function l() {
        return Ll(a, s, {
            ease: Array.isArray(n) ? n : Vl(s, n)
        })
    }
    let c = l();
    return {
        next: e => (i.value = c(e),
        i.done = e >= o,
        i),
        flipTarget: () => {
            s.reverse(),
            c = l()
        }
    }
}
const Yl = {
    keyframes: Hl,
    spring: Za,
    decay: function({velocity: e=0, from: t=0, power: n=.8, timeConstant: r=350, restDelta: o=.5, modifyTarget: i}) {
        const s = {
            done: !1,
            value: t
        };
        let a = n * e;
        const l = t + a
          , c = void 0 === i ? l : i(l);
        return c !== l && (a = c - t),
        {
            next: e => {
                const t = -a * Math.exp(-e / r);
                return s.done = !(t > o || t < -o),
                s.value = s.done ? c : c + t,
                s
            }
            ,
            flipTarget: () => {}
        }
    }
}
  , Jl = 1 / 60 * 1e3
  , Kl = "undefined" != typeof performance ? () => performance.now() : () => Date.now()
  , Xl = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout(( () => e(Kl())), Jl);
let Zl = !0
  , Ql = !1
  , ec = !1;
const tc = {
    delta: 0,
    timestamp: 0
}
  , nc = ["read", "update", "preRender", "render", "postRender"]
  , rc = nc.reduce(( (e, t) => (e[t] = function() {
    let e = []
      , t = []
      , n = 0
      , r = !1
      , o = !1;
    const i = new WeakSet
      , s = {
        schedule: (o, s=!1, a=!1) => {
            const l = a && r
              , c = l ? e : t;
            return s && i.add(o),
            -1 === c.indexOf(o) && (c.push(o),
            l && r && (n = e.length)),
            o
        }
        ,
        cancel: e => {
            const n = t.indexOf(e);
            -1 !== n && t.splice(n, 1),
            i.delete(e)
        }
        ,
        process: a => {
            if (r)
                o = !0;
            else {
                if (r = !0,
                [e,t] = [t, e],
                t.length = 0,
                n = e.length,
                n)
                    for (let t = 0; t < n; t++) {
                        const n = e[t];
                        n(a),
                        i.has(n) && (s.schedule(n),
                        Ql = !0)
                    }
                r = !1,
                o && (o = !1,
                s.process(a))
            }
        }
    };
    return s
}(),
e)), {})
  , oc = nc.reduce(( (e, t) => {
    const n = rc[t];
    return e[t] = (e, t=!1, r=!1) => (Ql || lc(),
    n.schedule(e, t, r)),
    e
}
), {})
  , ic = nc.reduce(( (e, t) => (e[t] = rc[t].cancel,
e)), {});
nc.reduce(( (e, t) => (e[t] = () => rc[t].process(tc),
e)), {});
const sc = e => rc[e].process(tc)
  , ac = e => {
    Ql = !1,
    tc.delta = Zl ? Jl : Math.max(Math.min(e - tc.timestamp, 40), 1),
    tc.timestamp = e,
    ec = !0,
    nc.forEach(sc),
    ec = !1,
    Ql && (Zl = !1,
    Xl(ac))
}
  , lc = () => {
    Ql = !0,
    Zl = !0,
    ec || Xl(ac)
}
;
function cc(e, t, n=0) {
    return e - t - n
}
const uc = e => {
    const t = ({delta: t}) => e(t);
    return {
        start: () => oc.update(t, !0),
        stop: () => ic.update(t)
    }
}
;
function dc(e) {
    var t, n, {from: r, autoplay: o=!0, driver: i=uc, elapsed: s=0, repeat: a=0, repeatType: l="loop", repeatDelay: c=0, onPlay: u, onStop: d, onComplete: p, onRepeat: f, onUpdate: h} = e, m = Wa(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let g, y, D, {to: v} = m, C = 0, _ = m.duration, A = !1, x = !0;
    const E = function(e) {
        if (Array.isArray(e.to))
            return Hl;
        if (Yl[e.type])
            return Yl[e.type];
        const t = new Set(Object.keys(e));
        return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? Hl : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Za : Hl
    }(m);
    (null === (n = (t = E).needsInterpolation) || void 0 === n ? void 0 : n.call(t, r, v)) && (D = Ll([0, 100], [r, v], {
        clamp: !1
    }),
    r = 0,
    v = 100);
    const w = E(Object.assign(Object.assign({}, m), {
        from: r,
        to: v
    }));
    return o && (null == u || u(),
    g = i((function(e) {
        if (x || (e = -e),
        s += e,
        !A) {
            const e = w.next(Math.max(0, s));
            y = e.value,
            D && (y = D(y)),
            A = x ? e.done : s <= 0
        }
        null == h || h(y),
        A && (0 === C && (null != _ || (_ = s)),
        C < a ? function(e, t, n, r) {
            return r ? e >= t + n : e <= -n
        }(s, _, c, x) && (C++,
        "reverse" === l ? (x = C % 2 == 0,
        s = function(e, t, n=0, r=!0) {
            return r ? cc(t + -e, t, n) : t - (e - t) + n
        }(s, _, c, x)) : (s = cc(s, _, c),
        "mirror" === l && w.flipTarget()),
        A = !1,
        f && f()) : (g.stop(),
        p && p()))
    }
    )),
    g.start()),
    {
        stop: () => {
            null == d || d(),
            g.stop()
        }
    }
}
const pc = () => (performance ?? Date).now()
  , fc = () => {
    const e = pc();
    let t;
    return {
        stop() {
            t = pc() - e
        },
        duration() {
            return this.stop(),
            t
        },
        durationMs(e=1) {
            return `${this.duration().toFixed(e)}ms`
        }
    }
}
  , hc = "undefined" != typeof requestIdleCallback ? (e, t=0) => requestIdleCallback(e, t > 0 ? {
    timeout: t
} : void 0) : (e, t=0) => setTimeout(e, t)
  , mc = {
    xs: "360px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    pwa: {
        raw: "(display-mode: standalone)"
    },
    short: {
        raw: "(max-height: 650px)"
    },
    narrow: {
        raw: "(max-height: 742px)"
    }
}
  , gc = {
    sans: ["Rubik", "Arial", "system-ui", "sans-serif"]
}
  , yc = Object.fromEntries(Object.entries(mc).map(( ([e,t]) => "string" == typeof t ? [e, `(min-width: ${t})`] : [e, t.raw])))
  , Dc = ja("Renderer/ticker");
let vc, Cc, _c = 0;
function Ac() {
    return so(vc, "getCurrentTicker called but no ticker set"),
    vc
}
function xc(e) {
    so(vc, "check called without currentTicker"),
    Cc || (Cc = globalThis.setInterval(( () => wc()), 2e3)),
    0 === _c && (Dc(`ticker idling (activeAnimations: ${_c})`),
    vc.stop()),
    0 === e && 1 === _c && (Dc(`ticker full-speed (activeAnimations: ${_c})`),
    bc.cancel({
        upcomingOnly: !0
    }),
    vc.start())
}
async function Ec(e) {
    so(vc, "runTickerDuringPromise called without currentTicker");
    const t = _c;
    _c += 1,
    xc(t),
    await e,
    _c -= 1,
    xc(t)
}
function wc() {
    Dc("queue renderOnce"),
    bc()
}
const bc = qa(1e3 / 60, ( () => {
    vc && (vc.started ? Dc("renderOnce skipped (ticker already running)") : (Dc("renderOnce"),
    vc.update()))
}
), {
    noLeading: !1,
    noTrailing: !1
})
  , Fc = new Map
  , Sc = ja("requestSpring")
  , kc = ja("BatchedSpring");
class Bc {
    constructor(e, t) {
        this.options = e,
        this.onStart = t,
        this.spring = void 0,
        this.hooks = new Set,
        this.started = !1,
        setTimeout(( () => this.start()), 0)
    }
    hook(e) {
        return so(!this.started, "attempted to hook callbacks after starting"),
        this.hooks.add(e),
        {
            stop: () => {
                var t;
                e.onStop(),
                this.hooks.delete(e),
                0 === this.hooks.size && (kc("All hooks removed, stopping batched spring", this.options),
                null == (t = this.spring) || t.stop())
            }
        }
    }
    start() {
        so(!this.started, "BatchedSpring already started"),
        this.started = !0,
        this.onStart(),
        kc(`Starting batched spring (${this.hooks.size} hooks)`, this.options),
        this.spring = dc({
            ...this.options,
            type: "spring",
            from: 0,
            to: 1,
            driver: e => {
                const t = () => e(Ac().deltaMS);
                return {
                    start: () => Ac().add(t, void 0, s.HIGH),
                    stop: () => Ac().remove(t, void 0)
                }
            }
            ,
            onUpdate: e => {
                for (const t of this.hooks)
                    t.onUpdate(e)
            }
            ,
            onStop: () => {
                for (const e of this.hooks)
                    e.onStop()
            }
            ,
            onComplete: () => {
                for (const e of this.hooks)
                    e.onComplete()
            }
        })
    }
}
const Mc = {
    duration: 250,
    bounce: .3
};
class Oc extends a {
    constructor(e) {
        super(e),
        this.animationControls = null,
        this.animations = {
            position: null,
            scale: null,
            angle: null,
            alpha: null
        }
    }
    animate(e, t=Mc) {
        if (this.destroyed)
            return Promise.resolve();
        const n = Object.keys(e);
        for (const r of n) {
            this.endAnimation(r);
            const t = e[r]
              , o = "position" !== r && "scale" !== r || "number" != typeof t.to ? t.to : {
                x: t.to,
                y: t.to
            }
              , i = this.getValue(r);
            this.animations[r] = {
                to: o,
                from: i,
                interpolate: Ll([0, 1], [i, o], {
                    clamp: t.clamp ?? !1
                }),
                stop: () => {
                    var e;
                    n.splice(n.indexOf(r), 1),
                    0 === n.length && (null == (e = this.animationControls) || e.stop(),
                    this.animationControls = null)
                }
            }
        }
        return Ec(new Promise((e => {
            const r = () => {
                for (const e of n)
                    this.endAnimation(e);
                e()
            }
            ;
            this.animationControls = function(e, t) {
                const n = Object.keys(e).sort().map((t => `${t}:${e[t]}`)).join(",");
                Fc.has(n) ? Sc("REUSE", n) : (Sc("NEW", n),
                Fc.set(n, new Bc(e,( () => Fc.delete(n)))));
                const r = Fc.get(n);
                return so(r, "batch not found"),
                r.hook(t)
            }(t, {
                onUpdate: e => {
                    for (const t of n) {
                        const n = this.animations[t];
                        so(n, `Expected animation to be defined for ${t}`),
                        this.setValue(t, n.interpolate(e))
                    }
                }
                ,
                onStop: r,
                onComplete: r
            })
        }
        )))
    }
    destroy(e) {
        for (const t of Object.keys(this.animations))
            this.endAnimation(t);
        super.destroy(e)
    }
    endAllAnimations() {
        if (this.animationControls)
            for (const e of Object.keys(this.animations))
                this.endAnimation(e)
    }
    endAnimation(e) {
        const t = this.animations[e];
        t && (t.stop(),
        this.setValue(e, t.to),
        this.animations[e] = null)
    }
    setValue(e, t) {
        switch (e) {
        case "position":
            "number" == typeof t ? this.position.set(t) : this.position.set(t.x, t.y);
            break;
        case "scale":
            "number" == typeof t ? this.scale.set(t) : this.scale.set(t.x, t.y);
            break;
        case "angle":
            so("number" == typeof t, "Expected number, got " + typeof t),
            this.angle = t;
            break;
        case "alpha":
            so("number" == typeof t, "Expected number, got " + typeof t),
            this.alpha = t;
            break;
        default:
            Ro()
        }
    }
    getValue(e) {
        switch (e) {
        case "position":
            return {
                x: this.position.x,
                y: this.position.y
            };
        case "scale":
            return {
                x: this.scale.x,
                y: this.scale.y
            };
        case "angle":
            return this.angle;
        case "alpha":
            return this.alpha;
        default:
            Ro()
        }
    }
}
const Tc = 112
  , Ic = 120
  , Rc = Mc
  , Pc = {
    width: 492,
    height: 492
}
  , $c = {
    width: Pc.width + 84,
    height: Pc.height + 84
}
  , jc = {
    width: $c.width / Pc.width,
    height: $c.height / Pc.height
}
  , Uc = {
    ...$c,
    sharedTicker: !1,
    powerPreference: "high-performance",
    eventMode: "none",
    preference: "webgl",
    backgroundAlpha: 0
};
var Gc = (e => (e.Board = "board",
e.BoardDark = "boardDark",
e.Cell = "cell",
e.CellDark = "cellDark",
e.Tile2 = "tile2",
e.Tile4 = "tile4",
e.Tile8 = "tile8",
e.Tile16 = "tile16",
e.Tile32 = "tile32",
e.Tile64 = "tile64",
e.Tile128 = "tile128",
e.Tile256 = "tile256",
e.Tile512 = "tile512",
e.Tile1024 = "tile1024",
e.Tile2048 = "tile2048",
e.TileOverflow = "tileOverflow",
e.RotationArrow = "rotationArrow",
e.SelectionRing = "selectionRing",
e))(Gc || {});
class Nc extends a {
    constructor(e) {
        super(),
        this.context = e
    }
    async init() {
        const [e,t] = await Promise.all([this.buildBoard(), this.buildCells()]);
        this.addChild(e, t)
    }
    async buildBoard() {
        const e = new l;
        return e.scale.set(this.context.scale),
        e.anchor.set(.5),
        e.texture = await this.context.getTexture(this.getBoardResourceName()),
        e
    }
    async buildCells() {
        const e = new a
          , t = await this.context.getTexture(this.getCellResourceName())
          , n = t.width * this.context.scale
          , r = t.height * this.context.scale;
        for (let i = 0; i < this.context.boardSize.width; i++)
            for (let o = 0; o < this.context.boardSize.height; o++) {
                const s = new l(t);
                s.scale.set(this.context.scale);
                const a = (n + 12) * i
                  , c = (r + 12) * o;
                s.position.set(a, c),
                e.addChild(s)
            }
        const o = e.getBounds();
        return e.pivot.set(o.width / 2, o.height / 2),
        e
    }
    getBoardResourceName() {
        switch (this.context.visualStyle) {
        case xu.Default:
            return Gc.Board;
        case xu.Dark:
            return Gc.BoardDark;
        default:
            Ro(this.context.visualStyle)
        }
    }
    getCellResourceName() {
        switch (this.context.visualStyle) {
        case xu.Default:
            return Gc.Cell;
        case xu.Dark:
            return Gc.CellDark;
        default:
            Ro(this.context.visualStyle)
        }
    }
}
const Lc = "_gmmus";
const qc = /^\d+$/;
function zc() {
    [Hs(Xs("cGxheTIwNDguY28")), Hs(Xs("bmV4dC5wbGF5MjA0OC5jbw=")), Hs(Xs("bG9jYWxob3N0=="))].includes(Ks) || Ht(`${qc.test((new Date).toISOString()) || qc}`)
}
const Wc = ja("_gmmus");
function Vc(e) {
    return 263.76 + 7 / e - parseInt("-2048", 8)
}
const Hc = {
    board: {
        width: 576,
        height: 576,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22576%22%20height%3D%22576%22%20viewBox%3D%220%200%20576%20576%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_ddi_893_2331)%22%3E%0A%3Crect%20x%3D%2242%22%20y%3D%2242%22%20width%3D%22492%22%20height%3D%22492%22%20rx%3D%2222%22%20fill%3D%22url(%23paint0_linear_893_2331)%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_ddi_893_2331%22%20x%3D%2212%22%20y%3D%2222%22%20width%3D%22552%22%20height%3D%22552%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%2210%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.548333%200%200%200%200%200.391667%200%200%200%200%200.235%200%200%200%200.18%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2331%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.548333%200%200%200%200%200.391667%200%200%200%200%200.235%200%200%200%200.13%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_893_2331%22%20result%3D%22effect2_dropShadow_893_2331%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect2_dropShadow_893_2331%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%22-1%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect3_innerShadow_893_2331%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2331%22%20x1%3D%22288%22%20y1%3D%2242%22%20x2%3D%22288%22%20y2%3D%22534%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23998C7E%22%20style%3D%22stop-color%3A%23998C7E%3Bstop-color%3Acolor(display-p3%200.6000%200.5475%200.4950)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23988776%22%20style%3D%22stop-color%3A%23988776%3Bstop-color%3Acolor(display-p3%200.5958%200.5300%200.4642)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    cell: {
        width: 108,
        height: 108,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22108%22%20height%3D%22108%22%20viewBox%3D%220%200%20108%20108%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_iiii_893_2335)%22%3E%0A%3Crect%20width%3D%22108%22%20height%3D%22108%22%20rx%3D%2210%22%20fill%3D%22%23BAAC9A%22%20style%3D%22fill%3A%23BAAC9A%3Bfill%3Acolor(display-p3%200.7306%200.6758%200.6028)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_iiii_893_2335%22%20x%3D%220%22%20y%3D%22-4%22%20width%3D%22108%22%20height%3D%22114%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%22-1%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.15%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect1_innerShadow_893_2335%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%22-4%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2210%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.075%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_innerShadow_893_2335%22%20result%3D%22effect2_innerShadow_893_2335%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%222%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.429167%200%200%200%200%200.259553%200%200%200%200%200.0768924%200%200%200%200.18%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect2_innerShadow_893_2335%22%20result%3D%22effect3_innerShadow_893_2335%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.23%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect3_innerShadow_893_2335%22%20result%3D%22effect4_innerShadow_893_2335%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    boardDark: {
        width: 576,
        height: 576,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22576%22%20height%3D%22576%22%20viewBox%3D%220%200%20576%20576%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_ddi_893_2333)%22%3E%0A%3Crect%20x%3D%2242%22%20y%3D%2242%22%20width%3D%22492%22%20height%3D%22492%22%20rx%3D%2222%22%20fill%3D%22url(%23paint0_linear_893_2333)%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_ddi_893_2333%22%20x%3D%2212%22%20y%3D%2222%22%20width%3D%22552%22%20height%3D%22552%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%2210%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.301961%200%200%200%200%200.294118%200%200%200%200%200.258824%200%200%200%200.18%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2333%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.548333%200%200%200%200%200.391667%200%200%200%200%200.235%200%200%200%200.13%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_893_2333%22%20result%3D%22effect2_dropShadow_893_2333%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect2_dropShadow_893_2333%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%22-1%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect3_innerShadow_893_2333%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2333%22%20x1%3D%22288%22%20y1%3D%2242%22%20x2%3D%22288%22%20y2%3D%22534%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2354514A%22%20style%3D%22stop-color%3A%2354514A%3Bstop-color%3Acolor(display-p3%200.3286%200.3168%200.2914)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23504C44%22%20style%3D%22stop-color%3A%23504C44%3Bstop-color%3Acolor(display-p3%200.3132%200.2993%200.2668)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    cellDark: {
        width: 108,
        height: 108,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22108%22%20height%3D%22108%22%20viewBox%3D%220%200%20108%20108%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_iiii_893_2337)%22%3E%0A%3Crect%20width%3D%22108%22%20height%3D%22108%22%20rx%3D%2210%22%20fill%3D%22%236B665B%22%20style%3D%22fill%3A%236B665B%3Bfill%3Acolor(display-p3%200.4212%200.4000%200.3588)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_iiii_893_2337%22%20x%3D%220%22%20y%3D%22-4%22%20width%3D%22108%22%20height%3D%22114%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%22-1%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.15%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect1_innerShadow_893_2337%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%22-4%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2210%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.05%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_innerShadow_893_2337%22%20result%3D%22effect2_innerShadow_893_2337%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%222%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.429167%200%200%200%200%200.323484%200%200%200%200%200.0768924%200%200%200%200.18%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect2_innerShadow_893_2337%22%20result%3D%22effect3_innerShadow_893_2337%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.23%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect3_innerShadow_893_2337%22%20result%3D%22effect4_innerShadow_893_2337%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tile2: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_di_893_2361)%22%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22%23ECE4DB%22%20style%3D%22fill%3A%23ECE4DB%3Bfill%3Acolor(display-p3%200.9255%200.8941%200.8588)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_di_893_2361%22%20x%3D%2212%22%20y%3D%2216%22%20width%3D%22120%22%20height%3D%22120%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2361%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_893_2361%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_893_2361%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tile4: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_di_893_2359)%22%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22%23E8D8BA%22%20style%3D%22fill%3A%23E8D8BA%3Bfill%3Acolor(display-p3%200.9100%200.8481%200.7300)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_di_893_2359%22%20x%3D%2212%22%20y%3D%2216%22%20width%3D%22120%22%20height%3D%22120%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2359%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_893_2359%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_893_2359%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tile8: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_di_893_2357)%22%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint0_linear_893_2357)%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_di_893_2357%22%20x%3D%2212%22%20y%3D%2216%22%20width%3D%22120%22%20height%3D%22120%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2357%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_893_2357%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.2%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_893_2357%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2357%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23E9B582%22%20style%3D%22stop-color%3A%23E9B582%3Bstop-color%3Acolor(display-p3%200.9137%200.7098%200.5098)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E6AF79%22%20style%3D%22stop-color%3A%23E6AF79%3Bstop-color%3Acolor(display-p3%200.9039%200.6879%200.4761)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tile16: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_di_893_2355)%22%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint0_linear_893_2355)%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_di_893_2355%22%20x%3D%2212%22%20y%3D%2216%22%20width%3D%22120%22%20height%3D%22120%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2355%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_893_2355%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.2%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_893_2355%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2355%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23E99A6D%22%20style%3D%22stop-color%3A%23E99A6D%3Bstop-color%3Acolor(display-p3%200.9137%200.6039%200.4275)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E79362%22%20style%3D%22stop-color%3A%23E79362%3Bstop-color%3Acolor(display-p3%200.9056%200.5746%200.3861)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tile32: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_di_893_2353)%22%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint0_linear_893_2353)%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_di_893_2353%22%20x%3D%2212%22%20y%3D%2216%22%20width%3D%22120%22%20height%3D%22120%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2353%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_893_2353%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.2%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_893_2353%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2353%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23E8886E%22%20style%3D%22stop-color%3A%23E8886E%3Bstop-color%3Acolor(display-p3%200.9100%200.5350%200.4300)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E57A5D%22%20style%3D%22stop-color%3A%23E57A5D%3Bstop-color%3Acolor(display-p3%200.8964%200.4802%200.3636)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tile64: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_di_893_2351)%22%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint0_linear_893_2351)%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_di_893_2351%22%20x%3D%2212%22%20y%3D%2216%22%20width%3D%22120%22%20height%3D%22120%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2351%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_893_2351%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.2%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_893_2351%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2351%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23E67051%22%20style%3D%22stop-color%3A%23E67051%3Bstop-color%3Acolor(display-p3%200.9025%200.4405%200.3175)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E26240%22%20style%3D%22stop-color%3A%23E26240%3Bstop-color%3Acolor(display-p3%200.8882%200.3856%200.2518)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tile128: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_ddii_893_2349)%22%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint0_linear_893_2349)%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_ddii_893_2349%22%20x%3D%226%22%20y%3D%226%22%20width%3D%22132%22%20height%3D%22132%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2349%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%225%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.901961%200%200%200%200%200.768627%200%200%200%200%200.309804%200%200%200%200.2%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_893_2349%22%20result%3D%22effect2_dropShadow_893_2349%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect2_dropShadow_893_2349%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.2%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect3_innerShadow_893_2349%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeMorphology%20radius%3D%221%22%20operator%3D%22erode%22%20in%3D%22SourceAlpha%22%20result%3D%22effect4_innerShadow_893_2349%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.2%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect3_innerShadow_893_2349%22%20result%3D%22effect4_innerShadow_893_2349%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2349%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23EBD47F%22%20style%3D%22stop-color%3A%23EBD47F%3Bstop-color%3Acolor(display-p3%200.9217%200.8300%200.4983)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23EDCF64%22%20style%3D%22stop-color%3A%23EDCF64%3Bstop-color%3Acolor(display-p3%200.9286%200.8122%200.3914)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tile256: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_ddii_893_2347)%22%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint0_linear_893_2347)%22%20style%3D%22%22%2F%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint1_linear_893_2347)%22%20fill-opacity%3D%220.16%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_ddii_893_2347%22%20x%3D%226%22%20y%3D%226%22%20width%3D%22132%22%20height%3D%22132%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222.25%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.12%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2347%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%225%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.901961%200%200%200%200%200.768627%200%200%200%200%200.309804%200%200%200%200.4%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_893_2347%22%20result%3D%22effect2_dropShadow_893_2347%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect2_dropShadow_893_2347%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.25%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect3_innerShadow_893_2347%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeMorphology%20radius%3D%221%22%20operator%3D%22erode%22%20in%3D%22SourceAlpha%22%20result%3D%22effect4_innerShadow_893_2347%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.25%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect3_innerShadow_893_2347%22%20result%3D%22effect4_innerShadow_893_2347%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2347%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23EBD47F%22%20style%3D%22stop-color%3A%23EBD47F%3Bstop-color%3Acolor(display-p3%200.9217%200.8300%200.4983)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23EDCF64%22%20style%3D%22stop-color%3A%23EDCF64%3Bstop-color%3Acolor(display-p3%200.9286%200.8122%200.3914)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_893_2347%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23FCDB69%22%20style%3D%22stop-color%3A%23FCDB69%3Bstop-color%3Acolor(display-p3%200.9863%200.8574%200.4137)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FFD33C%22%20style%3D%22stop-color%3A%23FFD33C%3Bstop-color%3Acolor(display-p3%201.0000%200.8268%200.2369)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23FFBA0A%22%20style%3D%22stop-color%3A%23FFBA0A%3Bstop-color%3Acolor(display-p3%201.0000%200.7312%200.0400)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23EEC450%22%20style%3D%22stop-color%3A%23EEC450%3Bstop-color%3Acolor(display-p3%200.9318%200.7669%200.3133)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tile512: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_ddii_893_2345)%22%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint0_linear_893_2345)%22%20style%3D%22%22%2F%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint1_linear_893_2345)%22%20fill-opacity%3D%220.33%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_ddii_893_2345%22%20x%3D%226%22%20y%3D%226%22%20width%3D%22132%22%20height%3D%22132%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dx%3D%222%22%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.15%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2345%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%225%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.901961%200%200%200%200%200.768627%200%200%200%200%200.309804%200%200%200%200.6%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_893_2345%22%20result%3D%22effect2_dropShadow_893_2345%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect2_dropShadow_893_2345%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.3%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect3_innerShadow_893_2345%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeMorphology%20radius%3D%221%22%20operator%3D%22erode%22%20in%3D%22SourceAlpha%22%20result%3D%22effect4_innerShadow_893_2345%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.3%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect3_innerShadow_893_2345%22%20result%3D%22effect4_innerShadow_893_2345%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2345%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23EBD47F%22%20style%3D%22stop-color%3A%23EBD47F%3Bstop-color%3Acolor(display-p3%200.9217%200.8300%200.4983)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23EDCF64%22%20style%3D%22stop-color%3A%23EDCF64%3Bstop-color%3Acolor(display-p3%200.9286%200.8122%200.3914)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_893_2345%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23FCDB69%22%20style%3D%22stop-color%3A%23FCDB69%3Bstop-color%3Acolor(display-p3%200.9863%200.8574%200.4137)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FFD33C%22%20style%3D%22stop-color%3A%23FFD33C%3Bstop-color%3Acolor(display-p3%201.0000%200.8268%200.2369)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23FFBA0A%22%20style%3D%22stop-color%3A%23FFBA0A%3Bstop-color%3Acolor(display-p3%201.0000%200.7312%200.0400)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23EEC450%22%20style%3D%22stop-color%3A%23EEC450%3Bstop-color%3Acolor(display-p3%200.9318%200.7669%200.3133)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tile1024: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_ddii_893_2343)%22%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint0_linear_893_2343)%22%20style%3D%22%22%2F%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint1_linear_893_2343)%22%20fill-opacity%3D%220.5%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_ddii_893_2343%22%20x%3D%226%22%20y%3D%226%22%20width%3D%22132%22%20height%3D%22132%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222.75%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.17%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2343%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%225%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.901961%200%200%200%200%200.768627%200%200%200%200%200.309804%200%200%200%200.8%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_893_2343%22%20result%3D%22effect2_dropShadow_893_2343%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect2_dropShadow_893_2343%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.35%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect3_innerShadow_893_2343%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeMorphology%20radius%3D%221%22%20operator%3D%22erode%22%20in%3D%22SourceAlpha%22%20result%3D%22effect4_innerShadow_893_2343%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.3%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect3_innerShadow_893_2343%22%20result%3D%22effect4_innerShadow_893_2343%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2343%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23EBD47F%22%20style%3D%22stop-color%3A%23EBD47F%3Bstop-color%3Acolor(display-p3%200.9217%200.8300%200.4983)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23EDCF64%22%20style%3D%22stop-color%3A%23EDCF64%3Bstop-color%3Acolor(display-p3%200.9286%200.8122%200.3914)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_893_2343%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23FCDB69%22%20style%3D%22stop-color%3A%23FCDB69%3Bstop-color%3Acolor(display-p3%200.9863%200.8574%200.4137)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FFD33C%22%20style%3D%22stop-color%3A%23FFD33C%3Bstop-color%3Acolor(display-p3%201.0000%200.8268%200.2369)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23FFBA0A%22%20style%3D%22stop-color%3A%23FFBA0A%3Bstop-color%3Acolor(display-p3%201.0000%200.7312%200.0400)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23EEC450%22%20style%3D%22stop-color%3A%23EEC450%3Bstop-color%3Acolor(display-p3%200.9318%200.7669%200.3133)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tile2048: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_dddii_893_2341)%22%3E%0A%3Cpath%20d%3D%22M16%2028C16%2021.3726%2021.3726%2016%2028%2016H116C122.627%2016%20128%2021.3726%20128%2028V116C128%20122.627%20122.627%20128%20116%20128H28C21.3726%20128%2016%20122.627%2016%20116V28Z%22%20fill%3D%22url(%23paint0_linear_893_2341)%22%20style%3D%22%22%2F%3E%0A%3Cpath%20d%3D%22M16%2028C16%2021.3726%2021.3726%2016%2028%2016H116C122.627%2016%20128%2021.3726%20128%2028V116C128%20122.627%20122.627%20128%20116%20128H28C21.3726%20128%2016%20122.627%2016%20116V28Z%22%20fill%3D%22url(%23paint1_linear_893_2341)%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_dddii_893_2341%22%20x%3D%222%22%20y%3D%224%22%20width%3D%22140%22%20height%3D%22140%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.2%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2341%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%22-2%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%225%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.901961%200%200%200%200%200.768627%200%200%200%200%200.309804%200%200%200%200.6%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_893_2341%22%20result%3D%22effect2_dropShadow_893_2341%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%222%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%227%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%200.741176%200%200%200%200%200.0588235%200%200%200%200.6%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect2_dropShadow_893_2341%22%20result%3D%22effect3_dropShadow_893_2341%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect3_dropShadow_893_2341%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect4_innerShadow_893_2341%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeMorphology%20radius%3D%221%22%20operator%3D%22erode%22%20in%3D%22SourceAlpha%22%20result%3D%22effect5_innerShadow_893_2341%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect4_innerShadow_893_2341%22%20result%3D%22effect5_innerShadow_893_2341%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2341%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23EFDB94%22%20style%3D%22stop-color%3A%23EFDB94%3Bstop-color%3Acolor(display-p3%200.9380%200.8596%200.5820)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23ECD069%22%20style%3D%22stop-color%3A%23ECD069%3Bstop-color%3Acolor(display-p3%200.9274%200.8159%200.4126)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_893_2341%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23FCDB69%22%20style%3D%22stop-color%3A%23FCDB69%3Bstop-color%3Acolor(display-p3%200.9863%200.8574%200.4137)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FFD33C%22%20style%3D%22stop-color%3A%23FFD33C%3Bstop-color%3Acolor(display-p3%201.0000%200.8268%200.2369)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23FFBA0A%22%20style%3D%22stop-color%3A%23FFBA0A%3Bstop-color%3Acolor(display-p3%201.0000%200.7312%200.0400)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23EEC450%22%20style%3D%22stop-color%3A%23EEC450%3Bstop-color%3Acolor(display-p3%200.9318%200.7669%200.3133)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    tileOverflow: {
        width: 144,
        height: 144,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22144%22%20height%3D%22144%22%20viewBox%3D%220%200%20144%20144%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_ddiii_893_2339)%22%3E%0A%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%2212%22%20fill%3D%22url(%23paint0_linear_893_2339)%22%20style%3D%22%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_ddiii_893_2339%22%20x%3D%226%22%20y%3D%227%22%20width%3D%22132%22%20height%3D%22133%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%222%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%225%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%200.955996%200%200%200%200%200.805404%200%200%200%200.08%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_893_2339%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%22-1%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%224%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.2%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_893_2339%22%20result%3D%22effect2_dropShadow_893_2339%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect2_dropShadow_893_2339%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%22-1%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect3_innerShadow_893_2339%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeMorphology%20radius%3D%221%22%20operator%3D%22erode%22%20in%3D%22SourceAlpha%22%20result%3D%22effect4_innerShadow_893_2339%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.05%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect3_innerShadow_893_2339%22%20result%3D%22effect4_innerShadow_893_2339%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.36%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect4_innerShadow_893_2339%22%20result%3D%22effect5_innerShadow_893_2339%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_893_2339%22%20x1%3D%2272%22%20y1%3D%2216%22%20x2%3D%2272%22%20y2%3D%22128%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23403A31%22%20style%3D%22stop-color%3A%23403A31%3Bstop-color%3Acolor(display-p3%200.2510%200.2275%200.1922)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%233C352E%22%20style%3D%22stop-color%3A%233C352E%3Bstop-color%3Acolor(display-p3%200.2353%200.2078%200.1804)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%2337302A%22%20style%3D%22stop-color%3A%2337302A%3Bstop-color%3Acolor(display-p3%200.2157%200.1882%200.1647)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23312C26%22%20style%3D%22stop-color%3A%23312C26%3Bstop-color%3Acolor(display-p3%200.1922%200.1725%200.1490)%3Bstop-opacity%3A1%3B%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    rotationArrow: {
        width: 256,
        height: 262,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22256%22%20height%3D%22262%22%20viewBox%3D%220%200%20256%20262%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_ddddd_934_589)%22%3E%0A%3Cpath%20d%3D%22M123.497%20172.177L126.817%20168.974C141.142%20155.152%20142.753%20133.27%20130.598%20117.632L109.355%2090.3015M109.355%2090.3015L158.853%2090.3015M109.355%2090.3015L95.2131%20131.239%22%20stroke%3D%22white%22%20style%3D%22stroke%3Awhite%3Bstroke-opacity%3A1%3B%22%20stroke-width%3D%2220%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_ddddd_934_589%22%20x%3D%225.03345%22%20y%3D%220.481689%22%20width%3D%22243.996%22%20height%3D%22261.515%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2240%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.859635%200%200%200%200%200.585902%200%200%200%200%200.468588%200%200%200%200.8%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_934_589%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%2210%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2220%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.262745%200%200%200%200%200.235294%200%200%200%200%200.207843%200%200%200%200.09375%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_934_589%22%20result%3D%22effect2_dropShadow_934_589%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%225%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.262745%200%200%200%200%200.235294%200%200%200%200%200.207843%200%200%200%200.075%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect2_dropShadow_934_589%22%20result%3D%22effect3_dropShadow_934_589%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%225%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%227.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.262745%200%200%200%200%200.235294%200%200%200%200%200.207843%200%200%200%200.05625%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect3_dropShadow_934_589%22%20result%3D%22effect4_dropShadow_934_589%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%222%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.2639%200%200%200%200%200.235865%200%200%200%200%200.20783%200%200%200%200.2%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect4_dropShadow_934_589%22%20result%3D%22effect5_dropShadow_934_589%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect5_dropShadow_934_589%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    },
    selectionRing: {
        width: 162,
        height: 162,
        dataURL: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22162%22%20height%3D%22162%22%20viewBox%3D%220%200%20162%20162%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_935_3876)%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M37%2020C27.6112%2020%2020%2027.6112%2020%2037V125C20%20134.389%2027.6112%20142%2037%20142H125C134.389%20142%20142%20134.389%20142%20125V37C142%2027.6112%20134.389%2020%20125%2020H37ZM37%2023C29.268%2023%2023%2029.268%2023%2037V125C23%20132.732%2029.268%20139%2037%20139H125C132.732%20139%20139%20132.732%20139%20125V37C139%2029.268%20132.732%2023%20125%2023H37Z%22%20fill%3D%22white%22%20style%3D%22fill%3Awhite%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_935_3876%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22162%22%20height%3D%22162%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2210%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%200.848157%200%200%200%200%200.309804%200%200%200%200.3%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_935_3876%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_935_3876%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A"
    }
}
  , Yc = ja("TextureManager");
class Jc {
    constructor(e) {
        this.broker = e,
        this.texturePromiseMap = new Map
    }
    async getTexture(e) {
        if (this.texturePromiseMap.has(e))
            return Yc("getTexture (cached)", e),
            this.texturePromiseMap.get(e);
        Yc("getTexture", e);
        const t = this.broker.call("getImageBitmapForSVGResource", [e]).then((e => new c({
            source: new u({
                resource: e
            })
        })));
        return this.texturePromiseMap.set(e, t),
        t
    }
    async preloadTextures() {
        Yc("preloading textures");
        const e = Object.keys(Hc);
        for (const t of e)
            Yc("preloading texture", t),
            this.getTexture(t)
    }
}
class Kc {
    constructor(e, t, n) {
        this.tileMap = e,
        this.context = t,
        this.selectionContainer = n
    }
}
class Xc extends Kc {
    handleClick() {
        var e;
        if ((null == (e = this.context.gameplay) ? void 0 : e.state) === qi.Selecting) {
            const {x: e, y: t} = this.context.boardCursor;
            return {
                type: "position",
                position: {
                    x: e,
                    y: t
                }
            }
        }
        return null
    }
}
async function Zc(e) {
    await Promise.all(e.map((e => e.unhoverable())))
}
const Qc = [Go.Up, Go.Right, Go.Down, Go.Left].map(Uo)
  , eu = (new d).roundRect(0, 53, Tc, 6, 3).fill("red").roundRect(53, 0, 6, Tc, 3).fill("red");
function tu() {
    const e = new Oc
      , t = eu.clone();
    return t.pivot.set(t.width / 2, t.height / 2),
    t.angle = 45,
    e.addChild(t),
    t.position.set(e.width / 2, e.height / 2),
    e.pivot.set(e.width / 2, e.height / 2),
    e
}
const nu = {
    duration: 500,
    bounce: .6
};
class ru extends Oc {
    constructor(e, t) {
        super(),
        this.direction = e,
        this.context = t,
        this.floatControls = null,
        this.hovered = !1
    }
    async init() {
        const e = new l;
        e.anchor.set(.5),
        e.scale.set(this.context.scale, this.context.scale),
        e.texture = await this.context.getTexture(Gc.RotationArrow),
        this.direction === Ji.Clockwise && (e.scale.x *= -1),
        this.addChild(e)
    }
    destroy(e) {
        var t;
        null == (t = this.floatControls) || t.stop(),
        super.destroy(e)
    }
    enter() {
        this.scale.set(0),
        this.animate({
            scale: {
                to: 1
            }
        }, Mc),
        Ec(this.float())
    }
    hover() {
        this.destroyed || this.hovered || (this.hovered = !0,
        this.animate({
            scale: {
                to: 1.1
            }
        }, nu))
    }
    unhover() {
        !this.destroyed && this.hovered && (this.hovered = !1,
        this.animate({
            scale: {
                to: 1
            }
        }, nu))
    }
    float() {
        return new Promise((e => {
            this.floatControls = dc({
                from: 0,
                to: 10,
                repeatType: "mirror",
                repeat: 1 / 0,
                duration: 2e3,
                repeatDelay: 500,
                onUpdate: e => {
                    this.destroyed || (this.position.y = e - 5)
                }
                ,
                onComplete: e,
                onStop: e
            })
        }
        ))
    }
}
class ou extends Oc {
    constructor(e) {
        super(),
        this.context = e,
        this.visible = !1;
        const t = new l;
        t.anchor.set(.5),
        t.scale.set(this.context.scale, this.context.scale),
        this.context.getTexture(Gc.SelectionRing).then((e => t.texture = e)),
        this.addChild(t)
    }
    async move(e, t=!1) {
        if (void 0 === e)
            return void (this.visible = !1);
        const {x: n, y: r} = e
          , {width: o, height: i} = this.context.boardSize
          , s = (n - o / 2) * Ic + 60
          , a = (r - i / 2) * Ic + 60;
        return t ? void this.position.set(s, a) : this.animate({
            position: {
                to: {
                    x: s,
                    y: a
                }
            }
        })
    }
}
const iu = {
    adjacentTilesDirectional: class extends Xc {
        deactivate() {
            return Zc(this.tileMap)
        }
        async update() {
            Wi(this.context.gameplay, "adjacentTilesDirectional");
            const {board: e, selection: {origin: t}} = this.context.gameplay
              , n = zo(e, this.context.boardCursor)
              , r = this.getHoverableTileIds();
            await Promise.all(ei(e, (e => {
                if (!e)
                    return;
                const o = this.tileMap.get(e.id);
                return so(o, `Could not find tile entity for ${Io(e.id)}`),
                e.id === t ? o.hoverable() : r.has(e.id) ? (null == n ? void 0 : n.id) === e.id ? o.hover() : o.hoverable() : o.hoverableDisabled()
            }
            )))
        }
        getHoverableTileIds() {
            Wi(this.context.gameplay, "adjacentTilesDirectional");
            const {board: e, selection: {origin: t}} = this.context.gameplay;
            return t ? this.getAdjacentTileIds(t) : function(e) {
                const t = new Set
                  , {width: n, height: r} = qo(e);
                for (let o = 0; o < r; o++)
                    for (let r = 0; r < n; r++) {
                        const n = zo(e, {
                            x: r,
                            y: o
                        })
                          , i = zo(e, {
                            x: r + 1,
                            y: o
                        })
                          , s = zo(e, {
                            x: r,
                            y: o + 1
                        });
                        n && (i || s) && (t.add(n.id),
                        i && t.add(i.id),
                        s && t.add(s.id))
                    }
                return t
            }(e)
        }
        getAdjacentTileIds(e) {
            Wi(this.context.gameplay, "adjacentTilesDirectional");
            const {board: t} = this.context.gameplay
              , n = ri(e, t);
            so(n, `Could not find position for tile ${Io(e)}`);
            const r = new Set;
            for (const o of Qc) {
                const e = zo(t, $o(n, o));
                e && r.add(e.id)
            }
            return r
        }
    }
    ,
    byValue: class extends Xc {
        deactivate() {
            return Zc(this.tileMap)
        }
        async update() {
            Wi(this.context.gameplay, "byValue");
            const {board: e} = this.context.gameplay
              , t = zo(e, this.context.boardCursor)
              , n = t ? this.getTileIdsWithSameValue(t.value) : new Set;
            await Promise.all(ei(e, (e => {
                if (!e)
                    return;
                const t = this.tileMap.get(e.id);
                return so(t, `Could not find tile entity for ${e.id}`),
                n.has(e.id) ? t.hover() : t.hoverable()
            }
            )))
        }
        getTileIdsWithSameValue(e) {
            Wi(this.context.gameplay, "byValue");
            const {board: t} = this.context.gameplay;
            return ti(t, ( (t, n) => (n && n.value === e && t.add(n.id),
            t)), new Set)
        }
    }
    ,
    multipleTile: class extends Xc {
        async deactivate() {
            return Zc(this.tileMap)
        }
        async update() {
            Wi(this.context.gameplay, "multipleTile");
            const {board: e, selection: t} = this.context.gameplay
              , n = new Set(t.tiles)
              , r = zo(e, this.context.boardCursor);
            await Promise.all(ei(e, (e => {
                if (!e)
                    return;
                const t = this.tileMap.get(e.id);
                return so(t, `Could not find tile entity for ${e.id}`),
                n.has(e.id) ? (t.moveToForeground(),
                t.select()) : e.id === (null == r ? void 0 : r.id) ? t.hover() : t.hoverable()
            }
            )))
        }
    }
    ,
    singleCell: class extends Xc {
        deactivate() {
            throw new Error("Method not implemented.")
        }
        update() {
            throw new Error("Method not implemented.")
        }
    }
    ,
    singleTile: class extends Xc {
        deactivate() {
            throw new Error("Method not implemented.")
        }
        update() {
            throw new Error("Method not implemented.")
        }
    }
    ,
    bomb: class extends Xc {
        async deactivate() {
            this.crossField.destroy()
        }
        async update() {
            Wi(this.context.gameplay, "bomb"),
            this.crossField || this.buildCrossField();
            const {width: e} = qo(this.context.gameplay.board)
              , {x: t, y: n} = this.context.boardCursor;
            for (let r = 0; r < this.crossField.children.length; r++) {
                const o = this.crossField.children[r]instanceof Oc ? this.crossField.children[r] : void 0;
                so(o, "Cross is not a SpringContainer");
                const i = r % e
                  , s = Math.floor(r / e);
                Math.abs(i - t) <= 1 && Math.abs(s - n) <= 1 ? o.animate({
                    scale: {
                        to: 1
                    },
                    alpha: {
                        to: i === t && s === n ? 1 : .2
                    }
                }) : o.animate({
                    scale: {
                        to: 0,
                        clamp: !0
                    }
                })
            }
        }
        buildCrossField() {
            Wi(this.context.gameplay, "bomb"),
            this.crossField = new a;
            const {width: e, height: t} = qo(this.context.gameplay.board);
            for (let r = 0; r < e; r++)
                for (let e = 0; e < t; e++) {
                    const t = tu()
                      , n = t.height / 2 + 120 * e
                      , o = t.width / 2 + 120 * r;
                    t.position.set(n, o),
                    this.crossField.addChild(t)
                }
            const n = this.crossField.getBounds();
            this.crossField.pivot.set(n.width / 2, n.height / 2);
            for (const r of this.crossField.children)
                r.scale.set(0);
            this.selectionContainer.addChild(this.crossField)
        }
    }
    ,
    rotation: class extends Kc {
        constructor() {
            super(...arguments),
            this.arrowsCreated = !1,
            this.arrows = new Map
        }
        async deactivate() {
            for (const e of this.arrows.values())
                e.destroy()
        }
        async update() {
            await this.ensureArrows()
        }
        handleClick() {
            for (const [e,t] of this.arrows)
                if (t.hitArea && t.hitArea.contains(this.context.absoluteCursor.x, this.context.absoluteCursor.y))
                    return {
                        type: "rotation",
                        direction: e
                    };
            return null
        }
        handleMouseCursorChange() {
            for (const [,e] of this.arrows)
                e.hitArea && (e.hitArea.contains(this.context.absoluteCursor.x, this.context.absoluteCursor.y) ? e.hover() : e.unhover())
        }
        async ensureArrows() {
            if (this.arrowsCreated)
                return;
            this.arrowsCreated = !0,
            so(this.context.gameplay, "Gameplay context is required");
            const e = new ru(Ji.Clockwise,this.context);
            this.arrows.set(Ji.Clockwise, e);
            const t = new ru(Ji.CounterClockwise,this.context);
            this.arrows.set(Ji.CounterClockwise, t),
            await Promise.all([e.init(), t.init()]),
            e.destroyed || t.destroyed || (this.selectionContainer.addChild(e),
            e.position.x -= e.width / 2 + 50,
            e.hitArea = p(e, !1, new f).rectangle,
            this.selectionContainer.addChild(t),
            t.position.x += e.width / 2 + 50,
            t.hitArea = p(t, !1, new f).rectangle,
            t.enter(),
            e.enter())
        }
    }
    ,
    tileAndEmptyCell: class extends Xc {
        async deactivate() {
            return this.selectionCursor.destroy(),
            Zc(this.tileMap)
        }
        async update() {
            this.ensureSelectionCursor(),
            Wi(this.context.gameplay, "tileAndEmptyCell");
            const {board: e, selection: {tile: t, emptyCell: n}} = this.context.gameplay
              , r = zo(e, this.context.boardCursor);
            if (null === t)
                await Promise.all(ei(e, (e => {
                    if (!e)
                        return;
                    const n = this.tileMap.get(e.id);
                    return n ? e.id === t ? (n.moveToForeground(),
                    n.select()) : e.id === (null == r ? void 0 : r.id) ? n.hover() : n.hoverable() : void 0
                }
                )));
            else {
                if (!this.selectionCursor.visible)
                    return this.selectionCursor.visible = !0,
                    this.selectionCursor.move(this.context.boardCursor, !0);
                const e = r ? 0 : 1;
                await Promise.all([this.selectionCursor.move(this.context.boardCursor), this.selectionCursor.animate({
                    alpha: {
                        to: e
                    }
                })])
            }
        }
        ensureSelectionCursor() {
            this.selectionCursor || (this.selectionCursor = new ou(this.context),
            this.selectionContainer.addChild(this.selectionCursor))
        }
    }
};
class su extends a {
    constructor(e, t) {
        super(),
        this.tileMap = e,
        this.context = t,
        this.handler = void 0
    }
    async update() {
        var e, t;
        this.ensureHandler();
        const n = [];
        if (this.currentGameplay !== this.context.gameplay) {
            const t = this.currentGameplay;
            this.currentGameplay = this.context.gameplay;
            const r = null == (e = this.context.gameplay) ? void 0 : e.state;
            if (r !== (null == t ? void 0 : t.state) && r !== qi.Selecting && this.handler) {
                const e = this.handler;
                this.handler = void 0,
                n.push(e.deactivate().then(( () => wc())))
            }
        }
        (null == (t = this.context.gameplay) ? void 0 : t.state) === qi.Selecting && (so(this.handler, "Handler not found while selecting"),
        n.push(this.handler.update())),
        await Promise.all(n)
    }
    updateMouseCursor() {
        var e, t;
        null == (t = null == (e = this.handler) ? void 0 : e.handleMouseCursorChange) || t.call(e)
    }
    handleClick() {
        return this.ensureHandler(),
        this.handler ? this.handler.handleClick() : null
    }
    ensureHandler() {
        var e;
        if ((null == (e = this.context.gameplay) ? void 0 : e.state) !== qi.Selecting)
            return;
        const t = this.context.gameplay.selection;
        so(t, "Selection not found while selecting");
        const n = iu[t.type];
        so(n, `No handler found for selection type: ${t.type}`),
        this.handler instanceof n || (this.handler = new n(this.tileMap,this.context,this))
    }
}
const au = "/Rubik-VariableWeight.woff2"
  , lu = ja("fonts")
  , cu = self.fonts ?? document.fonts
  , uu = {
    rubikLight: {
        fontName: "Rubik",
        url: au,
        weight: "300"
    },
    rubikLightItalic: {
        fontName: "Rubik",
        url: au,
        weight: "300",
        style: "italic"
    },
    rubikRegular: {
        fontName: "Rubik",
        url: au
    },
    rubikItalic: {
        fontName: "Rubik",
        url: au,
        style: "italic"
    },
    rubikMedium: {
        fontName: "Rubik",
        url: au,
        weight: "500"
    },
    rubikMediumItalic: {
        fontName: "Rubik",
        url: au,
        weight: "500",
        style: "italic"
    },
    rubikSemiBold: {
        fontName: "Rubik",
        url: au,
        weight: "600"
    },
    rubikSemiBoldItalic: {
        fontName: "Rubik",
        url: au,
        weight: "600",
        style: "italic"
    },
    rubikBold: {
        fontName: "Rubik",
        url: au,
        weight: "700"
    },
    rubikBoldItalic: {
        fontName: "Rubik",
        url: au,
        weight: "700",
        style: "italic"
    },
    rubikExtraBold: {
        fontName: "Rubik",
        url: au,
        weight: "800"
    },
    rubikExtraBoldItalic: {
        fontName: "Rubik",
        url: au,
        weight: "800",
        style: "italic"
    },
    rubikBlack: {
        fontName: "Rubik",
        url: au,
        weight: "900"
    },
    rubikBlackItalic: {
        fontName: "Rubik",
        url: au,
        weight: "900",
        style: "italic"
    }
}
  , du = {};
async function pu(e) {
    lu(`Font "${e}" requested`);
    const t = du[e];
    return t ? (lu(`Font "${e}" already loading/loaded`),
    t) : (du[e] = async function(e) {
        lu(`Loading font "${e}"`);
        const t = uu[e];
        so(t, `Font ${e} not found`);
        const {fontName: n, url: r, ...o} = t
          , i = new FontFace(n,`url(${r})`,o);
        return await i.load(),
        "add"in cu && "function" == typeof cu.add ? (lu(`Font face for "${e}" loaded`),
        cu.add(i)) : lu(`Font face for "${e}" loaded, but not added to global fonts because the environment does not support it`),
        new Promise((e => hc(( () => e()))))
    }(e),
    du[e])
}
var fu = (e => (e[e.Instant = 0] = "Instant",
e[e.Add = 1] = "Add",
e[e.Merge = 2] = "Merge",
e))(fu || {})
  , hu = (e => (e[e.Instant = 0] = "Instant",
e[e.Remove = 1] = "Remove",
e[e.Unmerge = 2] = "Unmerge",
e))(hu || {})
  , mu = (e => (e[e.Instant = 0] = "Instant",
e[e.Slide = 1] = "Slide",
e[e.Merge = 2] = "Merge",
e[e.Unmerge = 3] = "Unmerge",
e))(mu || {});
class gu extends Oc {
    constructor(e, t, n, r) {
        super(),
        this.context = e,
        this.id = t,
        this.value = n,
        this.boardPosition = r,
        this.buildTile()
    }
    async move(e, t) {
        switch (this.boardPosition = e,
        t) {
        case 0:
            {
                const e = this.calculateVisualPosition(this.boardPosition);
                return this.position.set(e.x, e.y),
                void wc()
            }
        case 1:
            return this.performMoveSlideAnimation();
        case 2:
            return this.performMoveMergeAnimation();
        case 3:
            return this.performMoveUnmergeAnimation();
        default:
            Ro()
        }
    }
    async spawn(e, t) {
        switch (await this.move(e, 0),
        this.visible = !0,
        t) {
        case 0:
            return void wc();
        case 1:
            return this.performSpawnAddAnimation();
        case 2:
            return this.performSpawnMergeAnimation();
        default:
            Ro()
        }
    }
    async unspawn(e) {
        switch (e) {
        case 0:
            return this.visible = !1,
            void wc();
        case 1:
        case 2:
            return await this.performUnspawnRemoveAnimation(),
            void (this.visible = !1);
        default:
            Ro()
        }
    }
    async hoverable() {
        return this.animate({
            scale: {
                to: .975 * this.context.scale
            },
            alpha: {
                to: .8
            },
            angle: {
                to: 0
            }
        }, Rc)
    }
    async unhoverable() {
        return this.animate({
            scale: {
                to: this.context.scale
            },
            alpha: {
                to: 1
            },
            angle: {
                to: 0
            }
        }, Rc)
    }
    async hoverableDisabled() {
        return this.animate({
            scale: {
                to: .975 * this.context.scale
            },
            alpha: {
                to: .15
            },
            angle: {
                to: 0
            }
        }, Rc)
    }
    async hover() {
        return this.animate({
            scale: {
                to: 1.07 * this.context.scale
            },
            alpha: {
                to: 1
            },
            angle: {
                to: 0
            }
        }, Rc)
    }
    async select() {
        return this.animate({
            scale: {
                to: 1.15 * this.context.scale
            },
            alpha: {
                to: 1
            }
        }, Rc)
    }
    moveToForeground() {
        var e;
        null == (e = this.parent) || e.setChildIndex(this, this.parent.children.length - 1)
    }
    async buildTile() {
        this.scale.set(this.context.scale, this.context.scale),
        this.move(this.boardPosition, 0),
        this.unspawn(0),
        await Promise.all([this.buildTileSprite(), this.buildTileText()])
    }
    async buildTileSprite() {
        const e = new l;
        e.anchor.set(.5),
        this.addChild(e),
        e.texture = await this.context.getTexture(this.buildTileSVGResourceName()),
        wc()
    }
    async buildTileText() {
        await pu("rubikSemiBold");
        const e = this.getTileFontSize()
          , t = new h({
            text: this.value.toString(),
            style: this.getTextStyle(e)
        });
        t.anchor.set(.5);
        const n = t.width * this.context.scale;
        if (n > 88) {
            const r = 88 / n;
            t.style.fontSize = this.scaledFontSize(e * r)
        }
        this.addChild(t),
        wc()
    }
    async buildTileDebugId() {
        const e = this.value <= 4 || this.value >= 128 && this.value <= 2048
          , t = new h({
            text: this.id,
            style: this.getTextStyle(8, e)
        })
          , n = new h({
            text: Io(this.id, !1),
            style: this.getTextStyle(10, e)
        });
        t.anchor.set(.5),
        n.anchor.set(.5),
        n.position.y = 44 / this.context.scale,
        t.position.y = 32 / this.context.scale,
        t.alpha = .4,
        n.alpha = .6,
        this.addChild(t),
        this.addChild(n)
    }
    scaledFontSize(e) {
        return e / this.context.scale
    }
    getTextStyle(e, t=!1) {
        return {
            fill: this.value <= 4 || t ? "#756452" : this.value <= 2048 ? "#ffffff" : "#C4BDB7",
            fontSize: this.scaledFontSize(e),
            fontFamily: gc.sans,
            fontWeight: "500",
            align: "center"
        }
    }
    getTileFontSize() {
        const e = this.value.toString().length;
        return e <= 2 ? 48 : 3 === e ? 40 : 33
    }
    buildTileSVGResourceName() {
        const e = `Tile${this.value}`;
        return e in Gc ? Gc[e] : Gc.TileOverflow
    }
    calculateVisualPosition(e) {
        const t = (Tc * this.context.boardSize.width + 8 * (this.context.boardSize.width - 1)) / 2
          , n = (Tc * this.context.boardSize.height + 8 * (this.context.boardSize.height - 1)) / 2;
        return {
            x: 56 + 120 * e.x - t,
            y: 56 + 120 * e.y - n
        }
    }
    performMoveSlideAnimation() {
        return this.animate({
            position: {
                to: this.calculateVisualPosition(this.boardPosition)
            }
        }, Rc)
    }
    performMoveMergeAnimation() {
        return this.animate({
            position: {
                to: this.calculateVisualPosition(this.boardPosition)
            },
            scale: {
                to: .8 * this.context.scale,
                clamp: !0
            }
        }, Rc)
    }
    performMoveUnmergeAnimation() {
        return this.animate({
            position: {
                to: this.calculateVisualPosition(this.boardPosition)
            },
            scale: {
                to: this.context.scale
            }
        }, Rc)
    }
    performUnspawnRemoveAnimation() {
        return this.animate({
            scale: {
                to: 0
            }
        }, Rc)
    }
    async performSpawnMergeAnimation() {
        return this.scale.set(0),
        this.animate({
            scale: {
                to: this.context.scale
            }
        }, {
            ...Rc,
            elapsed: -50
        })
    }
    performSpawnAddAnimation() {
        return this.scale.set(0),
        this.animate({
            scale: {
                to: this.context.scale
            }
        }, Rc)
    }
}
class yu extends Map {
    constructor(e, t) {
        super(),
        this.context = e,
        this.container = t,
        this.t = Vc(Date.now()),
        this.stragglers = new Set
    }
    async reset(e=hu.Instant) {
        await Promise.all(this.map((async (t, n) => {
            if (this.delete(n),
            !t.destroyed)
                return await t.unspawn(e),
                t.destroy()
        }
        ))),
        this.clear()
    }
    get(e) {
        const t = super.get(e);
        return so(t, `Could not find tile for ${Io(e)}`),
        t
    }
    getOrBuild(e, t) {
        const n = this.has(e) ? this.get(e) : this.build(e, t);
        return so(n, `Could not find or build tile for ${e}`),
        n
    }
    map(e) {
        return Array.from(this.entries()).map(( ([t,n]) => e(n, t)))
    }
    markStragglers(...e) {
        for (const t of e)
            this.stragglers.add(t)
    }
    flushStragglers(e) {
        for (const t of this.stragglers)
            e(t);
        this.stragglers.clear()
    }
    build(e, t) {
        so(!this.has(e), `Attempting to create tile entity for ${e} when it already exists.`);
        const n = ni(t, e);
        so(n, `Could not find tile on board for id ${e}`);
        const r = new gu(this.context,e,n.value,n.position);
        return this.container.addChild(r),
        this.set(e, r),
        r
    }
}
class Du extends a {
    constructor(e) {
        super(),
        this.context = e,
        this.tilesContainer = new a,
        this.tileMap = new yu(this.context,this.tilesContainer),
        this.selection = new su(this.tileMap,this.context),
        this.addChild(this.tilesContainer),
        this.addChild(this.selection)
    }
    async update() {
        await Promise.all([this.selection.update(), this.applyChanges()])
    }
    async reset() {
        return this.tileMap.reset(hu.Remove)
    }
    async updateMouseCursor() {
        return this.selection.updateMouseCursor()
    }
    async updateBoardCursor() {
        return this.selection.update()
    }
    handleClick() {
        return this.selection.handleClick()
    }
    async applyChanges() {
        if (!this.context.gameplay)
            return;
        this.tileMap.flushStragglers((e => e.endAllAnimations()));
        const {changes: e, board: t} = this.context.gameplay
          , n = [];
        for (const r of e) {
            let e;
            switch (r.type) {
            case "tileAdded":
                e = this.addTile(r, t);
                break;
            case "tileMoved":
                e = this.moveTile(r);
                break;
            case "tileMerged":
                e = this.mergeTiles(r, t);
                break;
            case "tileUnmerged":
                e = this.unmergeTiles(r, t);
                break;
            case "tileRemoved":
                e = this.removeTile(r);
                break;
            case "twoTilesSwapped":
                e = this.swapTiles(r);
                break;
            case "outerRingRotated":
                e = this.rotateOuterRing(r);
                break;
            case "powerupAccrued":
            case "powerupConsumed":
                e = Promise.resolve();
                break;
            default:
                Ro()
            }
            n.push(e)
        }
        await Promise.all(n)
    }
    addTile(e, t) {
        return this.tileMap.getOrBuild(e.tileId, t).spawn(e.position, fu.Add)
    }
    moveTile(e) {
        return this.tileMap.get(e.tileId).move(e.to, mu.Slide)
    }
    async mergeTiles(e, t) {
        const n = this.tileMap.getOrBuild(e.tileA.tileId, t)
          , r = this.tileMap.getOrBuild(e.tileB.tileId, t)
          , o = this.tileMap.getOrBuild(e.resultingTile.tileId, t);
        this.tileMap.markStragglers(n, r),
        this.tileMap.delete(e.tileA.tileId),
        this.tileMap.delete(e.tileB.tileId),
        await Promise.all([n.move(e.resultingTile.position, mu.Merge).then(( () => n.destroy())), r.move(e.resultingTile.position, mu.Merge).then(( () => r.destroy())), o.spawn(e.resultingTile.position, fu.Merge)])
    }
    async unmergeTiles(e, t) {
        const n = this.tileMap.getOrBuild(e.tileA.tileId, t)
          , r = this.tileMap.getOrBuild(e.tileB.tileId, t)
          , o = this.tileMap.get(e.unmergedTile.tileId);
        await n.spawn(e.unmergedTile.position, fu.Instant),
        await r.spawn(e.unmergedTile.position, fu.Instant),
        o.moveToForeground(),
        await Promise.all([o.unspawn(hu.Unmerge).then(( () => o.destroy())), n.move(e.tileA.position, mu.Unmerge), r.move(e.tileB.position, mu.Unmerge)])
    }
    async removeTile(e) {
        const t = this.tileMap.get(e.tileId);
        return t.unspawn(hu.Remove).then(( () => t.destroy()))
    }
    async swapTiles(e) {
        const t = this.tileMap.get(e.tileA.tileId)
          , n = this.tileMap.get(e.tileB.tileId);
        t.moveToForeground(),
        n.moveToForeground(),
        await Promise.all([t.move(e.tileA.position, mu.Slide), n.move(e.tileB.position, mu.Slide)])
    }
    async rotateOuterRing(e) {
        await Promise.all(e.tiles.map((async ({tileId: e, position: t}) => {
            const n = this.tileMap.get(e);
            return n.moveToForeground(),
            n.move(t, mu.Slide)
        }
        )))
    }
}
function vu(e, t=1 / 0, n=1 / 0) {
    return new m({
        _onUpdate: e
    },t,n)
}
const Cu = vs()
  , _u = ja("Renderer")
  , Au = _u.extend("fps");
var xu = (e => (e[e.Default = 0] = "Default",
e[e.Dark = 1] = "Dark",
e))(xu || {});
class Eu {
    constructor(e) {
        this.broker = e,
        this.destroyed = !1,
        this.mouseCursor = vu((e => this.handleMouseCursorChange(e))),
        this.absoluteCursor = new g,
        this.boardCursor = vu(( () => this.handleBoardCursorChange())),
        this.app = new y,
        this.textureManager = new Jc(this.broker),
        this.resetPromise = Promise.resolve(),
        this.id = Io(Oo(), !1),
        Cu && D.set(v),
        this.textureManager.preloadTextures(),
        +new Date < 7640352e5 && Hs("TWF0aA==")[Hs("cmFuZG9t")] && (Wc("not preloaded"),
        localStorage.removeItem(Lc),
        localStorage.setItem(Lc, "dHVydGxlcyBhcmUgbXkgZmF2b3JpdGUgYW5pbWFs"))
    }
    async init(e) {
        _u("initializing"),
        this.visualStyle = e.visualStyle,
        await this.app.init({
            ...Uc,
            canvas: e.canvas,
            resolution: e.resolution
        }),
        this.context = this.buildContext(e),
        this.setStageOriginToCenter(),
        this.app.stage.addChild(this.board = new Nc(this.context)),
        await this.board.init();
        const {ticker: t} = this.app;
        !function(e) {
            so(!vc, "setCurrentTicker called with ticker already set"),
            Dc("acquired new ticker"),
            _c = 0,
            vc = e
        }(t),
        t.addOnce(( () => this.broker.emit("ready", [])), this, s.UTILITY),
        t.add(( () => this.handleFps()), this, s.UTILITY),
        this.broker.addListener("pointerMove", ( (e, t) => this.mouseCursor.set(e, t))),
        this.broker.addListener("pointerDown", ( (e, t) => this.handleClick(new g(e,t)))),
        this.broker.addListener("pointerLeave", ( () => this.mouseCursor.set(1 / 0, 1 / 0))),
        this.app.stage.addChild(this.tiles = new Du(this.context))
    }
    async update(e) {
        await this.resetPromise,
        _u("update", e.id, e.state);
        const t = this.context.gameplay;
        return this.context.gameplay = e,
        t && t.id !== this.context.gameplay.id && (_u(`gameplay id changed (${this.context.gameplay.id}), resetting renderer state`),
        this.resetPromise = this.tiles.reset(),
        await this.resetPromise),
        this.context.gameplay.state !== (null == t ? void 0 : t.state) && this.mouseCursor.set(1 / 0, 1 / 0),
        function({_gmmus: e}) {
            if ("2048s" !== e) {
                const e = Vc(+new Date);
                localStorage.setItem(Lc, e.toString())
            }
        }(e),
        this.tiles.update()
    }
    destroy() {
        _u("destroy"),
        so(!this.destroyed, "Renderer already destroyed"),
        this.destroyed = !0;
        try {
            so(vc, "releaseCurrentTicker called without currentTicker"),
            Dc("releasing current ticker"),
            clearInterval(Cc),
            Cc = 0,
            _c = 0,
            vc = void 0,
            this.app.destroy()
        } catch (e) {
            _u("Error destroying Pixi.js app", {
                error: e
            })
        }
    }
    handleMouseCursorChange(e) {
        e && (this.absoluteCursor.copyFrom(function(e) {
            const {x: t, y: n} = e
              , r = {
                x: Math.round(t * $c.width),
                y: Math.round(n * $c.height)
            };
            return new g(r.x,r.y)
        }(e, this.context.boardSize)),
        this.boardCursor.copyFrom(function(e, t) {
            const {x: n, y: r} = e;
            if (n === 1 / 0 || r === 1 / 0)
                return new g(1 / 0,1 / 0);
            const {width: o, height: i} = t
              , s = {
                x: (n - .5) * $c.width,
                y: (r - .5) * $c.height
            };
            return s.x = Math.floor(s.x / Ic),
            s.y = Math.floor(s.y / Ic),
            s.x += o / 2,
            s.y += i / 2,
            s.x = Va(0, o - 1, s.x),
            s.y = Va(0, i - 1, s.y),
            new g(s.x,s.y)
        }(e, this.context.boardSize)),
        this.tiles.updateMouseCursor())
    }
    handleBoardCursorChange() {
        this.tiles.updateBoardCursor()
    }
    handleClick(e) {
        this.mouseCursor.copyFrom(e);
        const t = this.tiles.handleClick();
        null !== t && this.broker.emit("selection", [t]),
        wc()
    }
    handleFps() {
        const e = this.app.ticker.FPS;
        Au("%s FPS (id: %s)", e.toFixed(2), this.id),
        this.broker.emit("fps", [e])
    }
    buildContext(e) {
        return {
            boardSize: e.boardSize,
            scale: 1 / e.resolution,
            mouseCursor: this.mouseCursor,
            absoluteCursor: this.absoluteCursor,
            boardCursor: this.boardCursor,
            gameplay: void 0,
            visualStyle: this.visualStyle,
            getTexture: e => this.textureManager.getTexture(e)
        }
    }
    setStageOriginToCenter() {
        this.app.stage.width = 0,
        this.app.stage.height = 0,
        this.app.stage.x = $c.width / 2,
        this.app.stage.y = $c.height / 2
    }
}
class wu {
    constructor(e) {
        this.callImplementations = e
    }
}
const bu = ja("MessageBroker")
  , Fu = bu.extend("call")
  , Su = bu.extend("handleCall")
  , ku = bu.extend("handleResponse")
  , Bu = bu.extend("emit")
  , Mu = bu.extend("addListener")
  , Ou = bu.extend("removeListener");
class Tu extends wu {
    constructor(e, t, n) {
        super(n),
        this.hookOnMessage = e,
        this.postMessageAdapter = t,
        this.resolvers = new Map,
        this.counter = 0,
        this.terminated = !1,
        this.listenersByEventType = new Map,
        this.remoteEventListenersByEventType = new Map,
        this.hookOnMessage(this.handleIncomingMessage.bind(this))
    }
    call(e, t) {
        if (this.terminated)
            return Fu("call ignored because MessageBroker is terminated"),
            Promise.reject(new Error("MessageBroker cannot send calls because it has been terminated"));
        const n = this.generateMessageId()
          , r = Array.isArray(t) ? t : t.args
          , o = Array.isArray(t) ? [] : t.transfer ?? [];
        Fu(e, n, r);
        const i = {
            type: "call",
            call: e,
            id: n,
            args: r
        };
        return new Promise(( (t, r) => {
            this.resolvers.set(n, {
                call: e,
                resolve: t,
                reject: r
            }),
            this.postMessageAdapter(i, o)
        }
        ))
    }
    destroy() {
        this.terminated = !0,
        this.resolvers.clear(),
        this.listenersByEventType.clear(),
        this.remoteEventListenersByEventType.clear()
    }
    addListener(e, t) {
        if (Mu(String(e)),
        this.terminated)
            return;
        const n = this.listenersByEventType.get(e) ?? new Set;
        n.add(t),
        this.listenersByEventType.set(e, n),
        this.postMessageAdapter({
            type: "addListener",
            event: e
        }, [])
    }
    removeListener(e, t) {
        Ou("removing listener for event %s", e);
        const n = t
          , r = this.listenersByEventType.get(e);
        so(r, `No listeners for event ${String(e)}`),
        so(r.has(n), `The listener passed is not listening to event ${String(e)}`),
        r.delete(n),
        0 === r.size && this.listenersByEventType.delete(e),
        this.postMessageAdapter({
            type: "removeListener",
            event: e
        }, [])
    }
    removeAllListeners() {
        Ou("removing all listeners");
        for (const [e,t] of this.listenersByEventType.entries())
            for (const n of t)
                this.removeListener(e, n)
    }
    emit(e, t, n, r=!1) {
        r || !this.terminated && this.hasRemoteListeners(e) ? (Bu(e, t),
        this.postMessageAdapter({
            type: "emit",
            event: e,
            data: t
        }, n ?? [])) : Bu(`[no listeners] ${String(e)}`, t)
    }
    handleIncomingMessage(e) {
        if (this.terminated)
            return;
        const {data: t} = e;
        switch (t.type) {
        case "call":
            {
                const {call: e, id: n, args: r} = t;
                this.handleCall(e, n, r);
                break
            }
        case "response":
            {
                const {call: e, id: n, response: r} = t;
                this.handleResponse(e, n, r);
                break
            }
        case "error":
            {
                const {call: e, id: n, error: r} = t;
                this.handleError(e, n, r);
                break
            }
        case "addListener":
            {
                const {event: e} = t;
                this.handleAddListener(e);
                break
            }
        case "removeListener":
            {
                const {event: e} = t;
                this.handleRemoveListener(e);
                break
            }
        case "emit":
            {
                const {event: e, data: n} = t;
                this.handleEmit(e, n);
                break
            }
        default:
            Ro()
        }
    }
    async handleCall(e, t, n) {
        const r = this.callImplementations[e];
        Su(e, t, n, r),
        so(r, `No handler for call ${String(e)}`);
        try {
            const o = await r(...n);
            let i, s = [];
            null != o && "object" == typeof o && "response"in o && "transfer"in o ? (i = o.response,
            s = o.transfer) : i = o,
            this.postMessageAdapter({
                type: "response",
                call: e,
                id: t,
                response: i
            }, s)
        } catch (o) {
            const r = {};
            for (const e of Object.getOwnPropertyNames(o))
                r[e] = o[e];
            console.error(`error handling call ${String(e)}`, o, n),
            Vt(o, {
                data: {
                    isRunningInWebWorker: vs()
                }
            }),
            this.postMessageAdapter({
                type: "error",
                call: e,
                id: t,
                error: r
            }, [])
        }
    }
    handleResponse(e, t, n) {
        const r = this.resolvers.get(t);
        ku(e, t, n, r),
        so(r, `unexpected response received with id ${t}`),
        so(r.call === e, `call of response with id ${t} (${String(e)}) does not match expected call (${String(r.call)})`),
        r.resolve(n),
        this.resolvers.delete(t)
    }
    handleError(e, t, n) {
        console.error(`error received for call ${String(e)}`, n);
        const r = this.resolvers.get(t);
        so(r, `unexpected error received with id ${t}`),
        so(r.call === e, `call of error with id ${t} (${String(e)}) does not match expected call (${String(r.call)})`);
        const o = new Error;
        for (const i of Object.getOwnPropertyNames(n))
            o[i] = n[i];
        r.reject(n),
        this.resolvers.delete(t)
    }
    handleAddListener(e) {
        const t = this.remoteEventListenersByEventType.get(e) ?? 0;
        this.remoteEventListenersByEventType.set(e, t + 1)
    }
    handleRemoveListener(e) {
        const t = this.remoteEventListenersByEventType.get(e);
        so(t && t > 0, `Attempted to remove listener for event ${String(e)} but there are no listeners`),
        this.remoteEventListenersByEventType.set(e, t - 1)
    }
    handleEmit(e, t) {
        const n = this.listenersByEventType.get(e);
        if (so(n, `Remote counterpart emitted event ${String(e)} even though there are no listeners`),
        n)
            for (const r of n)
                r(...t)
    }
    hasRemoteListeners(e) {
        return (this.remoteEventListenersByEventType.get(e) ?? 0) > 0
    }
    generateMessageId() {
        const e = Date.now();
        return e !== this.lastTimestamp && (this.lastTimestamp = e,
        this.counter = 0),
        `${e.toString(36)}${(this.counter++).toString(36)}`
    }
}
export {to as $, Ca as A, xa as B, ka as C, ha as D, Os as E, Ts as F, Fa as G, qi as H, Ao as I, Sa as J, _s as K, Yr as L, Tu as M, kr as N, xr as O, wr as P, Fr as Q, Eu as R, _a as S, Tr as T, br as U, Rr as V, Vr as W, so as X, Fi as Y, Li as Z, Ro as _, Er as a, us as a$, Po as a0, qo as a1, ms as a2, ei as a3, ys as a4, as as a5, ss as a6, uo as a7, xo as a8, lo as a9, Or as aA, bs as aB, xs as aC, Es as aD, ws as aE, mo as aF, Za as aG, _o as aH, po as aI, Co as aJ, hc as aK, yc as aL, mc as aM, Hc as aN, fc as aO, wu as aP, xu as aQ, Pc as aR, jc as aS, wa as aT, zi as aU, Fs as aV, rs as aW, ti as aX, Rc as aY, cs as aZ, tl as a_, zr as aa, Go as ab, za as ac, Vt as ad, ma as ae, Js as af, Ht as ag, Ms as ah, ks as ai, Ko as aj, Vo as ak, Bs as al, Ss as am, Oa as an, va as ao, fs as ap, Ds as aq, Cs as ar, As as as, na as at, oa as au, ra as av, fa as aw, da as ax, ua as ay, ca as az, Ur as b, ds as b0, is as b1, ho as b2, ga as b3, vo as b4, zc as b5, pn as b6, $r as c, Ga as d, La as e, Pr as f, Nr as g, Wr as h, qr as i, Lr as j, Hr as k, pu as l, ja as m, Ar as n, Ir as o, ta as p, Ba as q, Sr as r, Br as s, Ma as t, Gr as u, Ta as v, co as w, pc as x, Ea as y, ba as z};

