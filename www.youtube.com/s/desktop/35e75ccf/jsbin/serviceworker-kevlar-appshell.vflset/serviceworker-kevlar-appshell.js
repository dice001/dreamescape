/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function ea(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}
ea("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
ea("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
ea("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
ea("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var p = this || self;

function q(a, b) {
    a = a.split(".");
    b = b || p;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function fa() {}

function u(a, b) {
    a = a.split(".");
    var c = p;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function ha(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.va = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Ca = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function ia(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, ia);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    b && (this.ha = b)
}
ha(ia, Error);
ia.prototype.name = "CustomError";

function ja(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function ka(a, b) {
    for (let d = 1; d < arguments.length; d++) {
        const e = arguments[d];
        var c = typeof e;
        c = "object" != c ? c : e ? Array.isArray(e) ? "array" : c : "null";
        if ("array" == c || "object" == c && "number" == typeof e.length) {
            c = a.length || 0;
            const f = e.length || 0;
            a.length = c + f;
            for (let g = 0; g < f; g++) a[c + g] = e[g]
        } else a.push(e)
    }
};

function la(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = la(a[c]);
    return b
}
const ma = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function na(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < ma.length; f++) c = ma[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function oa() {}

function x(a) {
    return new oa(pa, a)
}
var pa = {};
x("");
var qa = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
(class {
    constructor(a, b) {
        this.h = b === ra ? a : ""
    }
}).prototype.toString = function() {
    return this.h.toString()
};
var ra = {};
var sa;
a: {
    var ta = p.navigator;
    if (ta) {
        var ua = ta.userAgent;
        if (ua) {
            sa = ua;
            break a
        }
    }
    sa = ""
}

function y(a) {
    return -1 != sa.indexOf(a)
};
var A = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

function va(a) {
    return a ? decodeURI(a) : a
}

function wa(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) wa(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function xa(a) {
    var b = [],
        c;
    for (c in a) wa(c, a[c], b);
    return b.join("&")
};

function ya(a, b, c) {
    if (za.length) {
        const d = za.pop();
        a && Aa(d, a, b, c);
        return d
    }
    return new Ba(a, b, c)
}

function Aa(a, b, c, d) {
    b = b.constructor === Uint8Array ? b : b.constructor === ArrayBuffer ? new Uint8Array(b) : b.constructor === Array ? new Uint8Array(b) : b.constructor === String ? Ca(b) : b instanceof Uint8Array ? new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : new Uint8Array(0);
    a.j = b;
    a.l = void 0 !== c ? c : 0;
    a.i = void 0 !== d ? a.l + d : a.j.length;
    a.h = a.l
}

function Da(a) {
    const b = a.j;
    let c = b[a.h + 0],
        d = c & 127;
    if (128 > c) return a.h += 1, d;
    c = b[a.h + 1];
    d |= (c & 127) << 7;
    if (128 > c) return a.h += 2, d;
    c = b[a.h + 2];
    d |= (c & 127) << 14;
    if (128 > c) return a.h += 3, d;
    c = b[a.h + 3];
    d |= (c & 127) << 21;
    if (128 > c) return a.h += 4, d;
    c = b[a.h + 4];
    d |= (c & 15) << 28;
    if (128 > c) return a.h += 5, d >>> 0;
    a.h += 5;
    128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && a.h++;
    return d
}
class Ba {
    constructor(a, b, c) {
        this.j = null;
        this.h = this.i = this.l = 0;
        this.m = !1;
        a && Aa(this, a, b, c)
    }
    clone() {
        return ya(this.j, this.l, this.i - this.l)
    }
    clear() {
        this.j = null;
        this.h = this.i = this.l = 0;
        this.m = !1
    }
    reset() {
        this.h = this.l
    }
    advance(a) {
        this.h += a
    }
}
var za = [];

function Ea(a) {
    var b = a.h;
    (b = b.h == b.i) || (b = a.j) || (b = a.h, b = b.m || 0 > b.h || b.h > b.i);
    if (b) return !1;
    b = Da(a.h);
    const c = b & 7;
    if (0 != c && 5 != c && 1 != c && 2 != c && 3 != c && 4 != c) return a.j = !0, !1;
    a.m = b;
    a.l = b >>> 3;
    a.i = c;
    return !0
}

function Fa(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) Fa(a);
            else {
                for (a = a.h; a.j[a.h] & 128;) a.h++;
                a.h++
            }
            break;
        case 1:
            1 != a.i ? Fa(a) : a.h.advance(8);
            break;
        case 2:
            if (2 != a.i) Fa(a);
            else {
                var b = Da(a.h);
                a.h.advance(b)
            }
            break;
        case 5:
            5 != a.i ? Fa(a) : a.h.advance(4);
            break;
        case 3:
            b = a.l;
            do {
                if (!Ea(a)) {
                    a.j = !0;
                    break
                }
                if (4 == a.i) {
                    a.l != b && (a.j = !0);
                    break
                }
                Fa(a)
            } while (1);
            break;
        default:
            a.j = !0
    }
}
class Ga {
    constructor(a) {
        this.h = ya(a, void 0, void 0);
        this.i = this.m = this.l = -1;
        this.j = !1
    }
    reset() {
        this.h.reset();
        this.i = this.l = -1
    }
    advance(a) {
        this.h.advance(a)
    }
};
var Ha = y("Safari") && !((y("Chrome") || y("CriOS")) && !y("Edge") || y("Coast") || y("Opera") || y("Edge") || y("Edg/") || y("OPR") || y("Firefox") || y("FxiOS") || y("Silk") || y("Android")) && !(y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod"));
var Ja = {},
    Ka = null;

function Ca(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    La(a, function(f) {
        d[e++] = f
    });
    return d.subarray(0, e)
}

function La(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                t = Ka[l];
            if (null != t) return t;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Ma();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Ma() {
    if (!Ka) {
        Ka = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Ja[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Ka[f] && (Ka[f] = e)
            }
        }
    }
};
var Na = "function" === typeof Uint8Array;

function Oa(a) {
    return Pa(a, b => b, b => new Uint8Array(b))
}

function Qa(a, b, c) {
    return "object" === typeof a ? Na && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : Pa(a, b, c) : b(a)
}

function Pa(a, b, c) {
    if (Array.isArray(a)) {
        var d = Array(a.length);
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            null != f && (d[e] = Qa(f, b, c))
        }
        Array.isArray(a) && a.ra && Ra(d);
        return d
    }
    d = {};
    for (e in a) f = a[e], null != f && (d[e] = Qa(f, b, c));
    return d
}
const Sa = {
    ra: {
        value: !0,
        configurable: !0
    }
};

function Ra(a) {
    Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Sa);
    return a
};

function Ta(a) {
    if (4 == a.i) return !1;
    Fa(a);
    return !0
};

function Ua() {}
let Va;

function Wa(a, b, c) {
    a.h = null;
    Va && (b || (b = Va), Va = null);
    var d = a.constructor.aa;
    b || (b = d ? [d] : []);
    a.l = d ? 0 : -1;
    a.i = b;
    a: {
        if (b = a.i.length)
            if (--b, d = a.i[b], !(null === d || "object" != typeof d || Array.isArray(d) || Na && d instanceof Uint8Array)) {
                a.m = b - a.l;
                a.j = d;
                break a
            }
        a.m = Number.MAX_VALUE
    }
    a.B = {};
    if (c)
        for (b = 0; b < c.length; b++)
            if (d = c[b], d < a.m) {
                d += a.l;
                var e = a.i[d];
                e ? Ra(e) : a.i[d] = Xa
            } else Ya(a), (e = a.j[d]) ? Ra(e) : a.j[d] = Xa
}
const Xa = Object.freeze(Ra([]));

function Ya(a) {
    let b = a.m + a.l;
    a.i[b] || (a.j = a.i[b] = {})
}

function B(a, b) {
    if (b < a.m) {
        b += a.l;
        var c = a.i[b];
        return c !== Xa ? c : a.i[b] = Ra([])
    }
    if (a.j) return c = a.j[b], c !== Xa ? c : a.j[b] = Ra([])
}

function Za(a) {
    var b = $a;
    a.h || (a.h = {});
    if (!a.h[1]) {
        let c = B(a, 1),
            d = [];
        for (let e = 0; e < c.length; e++) d[e] = new b(c[e]);
        a.h[1] = d
    }
    b = a.h[1];
    b == Xa && (b = a.h[1] = []);
    return b
}

function ab(a) {
    if (a.h)
        for (var b in a.h) {
            var c = a.h[b];
            if (Array.isArray(c))
                for (var d = 0; d < c.length; d++) c[d] && ab(c[d]);
            else c && ab(c)
        }
    return a.i
}
Ua.prototype.clone = function() {
    var a = this.constructor,
        b = Oa(ab(this));
    Va = b;
    a = new a(b);
    Va = null;
    return a
};

function C(a, b) {
    var c = void 0;
    return new(c || (c = Promise))(function(d, e) {
        function f(k) {
            try {
                h(b.next(k))
            } catch (l) {
                e(l)
            }
        }

        function g(k) {
            try {
                h(b["throw"](k))
            } catch (l) {
                e(l)
            }
        }

        function h(k) {
            k.done ? d(k.value) : (new c(function(l) {
                l(k.value)
            })).then(f, g)
        }
        h((b = b.apply(a, void 0)).next())
    })
};
x("csi.gstatic.com");
x("googleads.g.doubleclick.net");
x("pagead2.googlesyndication.com");
x("partner.googleadservices.com");
x("pubads.g.doubleclick.net");
x("securepubads.g.doubleclick.net");
x("tpc.googlesyndication.com");

function bb(a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !==
        c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};
var cb = ["client_dev_root_url", "client_dev_regex_map", "expflag"];

function db() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        t = l = 0
    }

    function b(n) {
        for (var r = g, m = 0; 64 > m; m += 4) r[m / 4] = n[m] << 24 | n[m + 1] << 16 | n[m + 2] << 8 | n[m + 3];
        for (m = 16; 80 > m; m++) n = r[m - 3] ^ r[m - 8] ^ r[m - 14] ^ r[m - 16], r[m] = (n << 1 | n >>> 31) & 4294967295;
        n = e[0];
        var v = e[1],
            w = e[2],
            z = e[3],
            da = e[4];
        for (m = 0; 80 > m; m++) {
            if (40 > m)
                if (20 > m) {
                    var O = z ^ v & (w ^ z);
                    var Ia = 1518500249
                } else O = v ^ w ^ z, Ia = 1859775393;
            else 60 > m ? (O = v & w | z & (v | w), Ia = 2400959708) : (O = v ^ w ^ z, Ia = 3395469782);
            O = ((n << 5 | n >>> 27) & 4294967295) + O + da + Ia + r[m] & 4294967295;
            da = z;
            z = w;
            w = (v << 30 | v >>> 2) & 4294967295;
            v = n;
            n = O
        }
        e[0] = e[0] + n & 4294967295;
        e[1] = e[1] + v & 4294967295;
        e[2] = e[2] + w & 4294967295;
        e[3] = e[3] + z & 4294967295;
        e[4] = e[4] + da & 4294967295
    }

    function c(n, r) {
        if ("string" === typeof n) {
            n = unescape(encodeURIComponent(n));
            for (var m = [], v = 0, w = n.length; v < w; ++v) m.push(n.charCodeAt(v));
            n = m
        }
        r || (r = n.length);
        m = 0;
        if (0 == l)
            for (; m + 64 < r;) b(n.slice(m, m + 64)), m += 64, t += 64;
        for (; m < r;)
            if (f[l++] = n[m++], t++, 64 == l)
                for (l = 0, b(f); m + 64 < r;) b(n.slice(m, m + 64)), m += 64, t += 64
    }

    function d() {
        var n = [],
            r = 8 * t;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var m = 63; 56 <= m; m--) f[m] = r & 255, r >>>= 8;
        b(f);
        for (m = r = 0; 5 > m; m++)
            for (var v = 24; 0 <= v; v -= 8) n[r++] = e[m] >> v & 255;
        return n
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, t;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        ia: function() {
            for (var n = d(), r = "", m = 0; m < n.length; m++) r += "0123456789ABCDEF".charAt(Math.floor(n[m] / 16)) + "0123456789ABCDEF".charAt(n[m] % 16);
            return r
        }
    }
};

function eb(a, b, c) {
    var d = String(p.location.href);
    return d && a && b ? [b, fb(bb(d), a, c || null)].join(" ") : null
}

function fb(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], ja(d, function(h) {
        e.push(h)
    }), gb(e.join(" "));
    var f = [],
        g = [];
    ja(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    ja(d, function(h) {
        e.push(h)
    });
    a = gb(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function gb(a) {
    var b = db();
    b.update(a);
    return b.ia().toLowerCase()
};
const hb = {};

function D() {
    this.h = document || {
        cookie: ""
    }
}
D.prototype.isEnabled = function() {
    if (!p.navigator.cookieEnabled) return !1;
    if (!this.isEmpty()) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        Z: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
D.prototype.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    "object" === typeof c && (h = c.Ja, g = c.Ka || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Z);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
};
D.prototype.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = qa(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return ""
    }
    return b
};
D.prototype.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        Z: 0,
        path: b,
        domain: c
    });
    return d
};
D.prototype.isEmpty = function() {
    return !this.h.cookie
};
D.prototype.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = qa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function ib() {
    return !!hb.FPA_SAMESITE_PHASE2_MOD || !1
}

function jb(a, b, c, d) {
    (a = p[a]) || (a = (new D).get(b));
    return a ? eb(a, c, d) : null
}

function kb() {
    var a = [],
        b = bb(String(p.location.href));
    const c = [];
    var d = p.__SAPISID || p.__APISID || p.__3PSAPISID || p.__OVERRIDE_SID;
    ib() && (d = d || p.__1PSAPISID);
    if (d) var e = !0;
    else e = new D, d = e.get("SAPISID") || e.get("APISID") || e.get("__Secure-3PAPISID") || e.get("SID"), ib() && (d = d || e.get("__Secure-1PAPISID")), e = !!d;
    e && (d = (e = b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:") || 0 == b.indexOf("moz-extension:")) ? p.__SAPISID : p.__APISID, d || (d = new D, d = d.get(e ? "SAPISID" : "APISID") || d.get("__Secure-3PAPISID")),
        (e = d ? eb(d, e ? "SAPISIDHASH" : "APISIDHASH", a) : null) && c.push(e), b && ib() && ((b = jb("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && c.push(b), (a = jb("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && c.push(a)));
    return 0 == c.length ? null : c.join(" ")
};
var lb = class {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
    put(a) {
        this.l(a);
        100 > this.i && (this.i++, a.next = this.h, this.h = a)
    }
};

function mb(a) {
    p.setTimeout(() => {
        throw a;
    }, 0)
};
class nb {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = ob.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var ob = new lb(() => new pb, a => a.reset());
class pb {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};

function qb(a, b) {
    rb || sb();
    tb || (rb(), tb = !0);
    ub.add(a, b)
}
var rb;

function sb() {
    var a = p.Promise.resolve(void 0);
    rb = function() {
        a.then(vb)
    }
}
var tb = !1,
    ub = new nb;

function vb() {
    for (var a; a = ub.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            mb(b)
        }
        ob.put(a)
    }
    tb = !1
};

function wb(a) {
    var b = q("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || p.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = xb(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, yb[c]) c = yb[c];
                else {
                    c = String(c);
                    if (!yb[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        yb[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = yb[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    a.stack =
        b;
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: a.stack
    }
}

function xb(a, b) {
    b || (b = {});
    b[zb(a)] = !0;
    var c = a.stack || "";
    (a = a.ha) && !b[zb(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += xb(a, b));
    return c
}

function zb(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var yb = {};

function Ab() {
    this.j = this.j;
    this.l = this.l
}
Ab.prototype.j = !1;
Ab.prototype.dispose = function() {
    this.j || (this.j = !0, this.H())
};
Ab.prototype.H = function() {
    if (this.l)
        for (; this.l.length;) this.l.shift()()
};
class Bb {
    constructor() {
        this.promise = new Promise((a, b) => {
            this.resolve = a;
            this.reject = b
        })
    }
};

function E(a) {
    this.s = 0;
    this.ca = void 0;
    this.G = this.C = this.F = null;
    this.L = this.R = !1;
    if (a != fa) try {
        var b = this;
        a.call(void 0, function(c) {
            F(b, 2, c)
        }, function(c) {
            F(b, 3, c)
        })
    } catch (c) {
        F(this, 3, c)
    }
}

function Cb() {
    this.next = this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
}
Cb.prototype.reset = function() {
    this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
};
var Db = new lb(function() {
    return new Cb
}, function(a) {
    a.reset()
});

function Eb(a, b, c) {
    var d = Db.get();
    d.i = a;
    d.onRejected = b;
    d.context = c;
    return d
}

function Fb(a) {
    if (a instanceof E) return a;
    var b = new E(fa);
    F(b, 2, a);
    return b
}
E.prototype.then = function(a, b, c) {
    return Gb(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
E.prototype.$goog_Thenable = !0;
E.prototype.cancel = function(a) {
    if (0 == this.s) {
        var b = new Hb(a);
        qb(function() {
            Ib(this, b)
        }, this)
    }
};

function Ib(a, b) {
    if (0 == a.s)
        if (a.F) {
            var c = a.F;
            if (c.C) {
                for (var d = 0, e = null, f = null, g = c.C; g && (g.j || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.s && 1 == d ? Ib(c, b) : (f ? (d = f, d.next == c.G && (c.G = d), d.next = d.next.next) : Jb(c), Kb(c, e, 3, b)))
            }
            a.F = null
        } else F(a, 3, b)
}

function Lb(a, b) {
    a.C || 2 != a.s && 3 != a.s || Mb(a);
    a.G ? a.G.next = b : a.C = b;
    a.G = b
}

function Gb(a, b, c, d) {
    var e = Eb(null, null, null);
    e.h = new E(function(f, g) {
        e.i = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.onRejected = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof Hb ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.F = a;
    Lb(a, e);
    return e.h
}
E.prototype.ya = function(a) {
    this.s = 0;
    F(this, 2, a)
};
E.prototype.za = function(a) {
    this.s = 0;
    F(this, 3, a)
};

function F(a, b, c) {
    if (0 == a.s) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.s = 1;
        a: {
            var d = c,
                e = a.ya,
                f = a.za;
            if (d instanceof E) {
                Lb(d, Eb(e || fa, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    h = typeof d;
                    if ("object" == h && null != d || "function" == h) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            Nb(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.ca = c, a.s = b, a.F = null, Mb(a), 3 != b || c instanceof Hb || Ob(a, c))
    }
}

function Nb(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function Mb(a) {
    a.R || (a.R = !0, qb(a.ja, a))
}

function Jb(a) {
    var b = null;
    a.C && (b = a.C, a.C = b.next, b.next = null);
    a.C || (a.G = null);
    return b
}
E.prototype.ja = function() {
    for (var a; a = Jb(this);) Kb(this, a, this.s, this.ca);
    this.R = !1
};

function Kb(a, b, c, d) {
    if (3 == c && b.onRejected && !b.j)
        for (; a && a.L; a = a.F) a.L = !1;
    if (b.h) b.h.F = null, Pb(b, c, d);
    else try {
        b.j ? b.i.call(b.context) : Pb(b, c, d)
    } catch (e) {
        Qb.call(null, e)
    }
    Db.put(b)
}

function Pb(a, b, c) {
    2 == b ? a.i.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
}

function Ob(a, b) {
    a.L = !0;
    qb(function() {
        a.L && Qb.call(null, b)
    })
}
var Qb = mb;

function Hb(a) {
    ia.call(this, a)
}
ha(Hb, ia);
Hb.prototype.name = "cancel";

function G(a) {
    Ab.call(this);
    this.X = 1;
    this.m = [];
    this.B = 0;
    this.h = [];
    this.i = {};
    this.fa = !!a
}
ha(G, Ab);
G.prototype.ea = function(a, b, c) {
    var d = this.i[a];
    d || (d = this.i[a] = []);
    var e = this.X;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.X = e + 3;
    d.push(e);
    return e
};
G.prototype.W = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.i[b];
        if (0 != this.B) this.m.push(a), this.h[a + 1] = fa;
        else {
            if (c) {
                const d = Array.prototype.indexOf.call(c, a, void 0);
                0 <= d && Array.prototype.splice.call(c, d, 1)
            }
            delete this.h[a];
            delete this.h[a + 1];
            delete this.h[a + 2]
        }
    }
    return !!b
};
G.prototype.I = function(a, b) {
    var c = this.i[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.fa)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Rb(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.B++;
                try {
                    for (e = 0, f = c.length; e < f && !this.j; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.B--, 0 < this.m.length && 0 == this.B)
                        for (; c = this.m.pop();) this.W(c)
                }
            }
        return 0 != e
    }
    return !1
};

function Rb(a, b, c) {
    qb(function() {
        a.apply(b, c)
    })
}
G.prototype.clear = function(a) {
    if (a) {
        var b = this.i[a];
        b && (b.forEach(this.W, this), delete this.i[a])
    } else this.h.length = 0, this.i = {}
};
G.prototype.H = function() {
    G.va.H.call(this);
    this.clear();
    this.m.length = 0
};
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Sb = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Tb = ["notification/convert_endpoint_to_url"],
    Ub = ["notification/record_interactions"],
    Vb = ["notification_registration/set_registration"];
var Wb = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Xb = ["notifications_register", "notifications_check_registration"];
var Yb = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let Zb = null;

function H(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return $b().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function ac() {
    return H("IndexedDBCheck", "testing IndexedDB").then(() => I("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function I(a) {
    const b = new Yb("Error accessing DB");
    return $b().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function $b() {
    return Zb ? Promise.resolve(Zb) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Zb = d, a(Zb);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), $b()
        };
        c.onupgradeneeded = bc
    })
}

function bc(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const cc = {
    ["WEB_UNPLUGGED"]: "^unplugged/",
    ["WEB_UNPLUGGED_ONBOARDING"]: "^unplugged/",
    ["WEB_UNPLUGGED_OPS"]: "^unplugged/",
    ["WEB_UNPLUGGED_PUBLIC"]: "^unplugged/",
    ["WEB_CREATOR"]: "^creator/",
    ["WEB_KIDS"]: "^kids/",
    ["WEB_EXPERIMENTS"]: "^experiments/",
    ["WEB_MUSIC"]: "^music/",
    ["WEB_REMIX"]: "^music/",
    ["WEB_MUSIC_EMBEDDED_PLAYER"]: "^music/",
    ["WEB_MUSIC_EMBEDDED_PLAYER"]: "^main_app/|^sfv/"
};

function dc(a) {
    if (1 === a.length) return a[0];
    var b = cc.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(cc).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function ec(a) {
    return `/youtubei/v1/${dc(a)}`
};
var fc = class extends Ua {
    constructor(a) {
        super();
        Wa(this, a, null)
    }
};
var gc = class extends Ua {
    constructor(a) {
        super();
        Wa(this, a, null)
    }
};
gc.aa = "yt.sw.adr";
var hc, ic;
const jc = p.window,
    J = (null === (hc = null === jc || void 0 === jc ? void 0 : jc.yt) || void 0 === hc ? void 0 : hc.config_) || (null === (ic = null === jc || void 0 === jc ? void 0 : jc.ytcfg) || void 0 === ic ? void 0 : ic.data_) || {};
u("yt.config_", J);

function K(...a) {
    a = arguments;
    1 < a.length ? J[a[0]] = a[1] : 1 === a.length && Object.assign(J, a[0])
}

function L(a, b) {
    return a in J ? J[a] : b
};

function M(a) {
    a = kc(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function lc(a, b) {
    a = kc(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function kc(a) {
    const b = L("EXPERIMENTS_FORCED_FLAGS", {});
    return void 0 !== b[a] ? b[a] : L("EXPERIMENT_FLAGS", {})[a]
};
let mc = 0;
u("ytDomDomGetNextId", q("ytDomDomGetNextId") || (() => ++mc));
const nc = [];

function oc(a) {
    nc.forEach(b => b(a))
}

function pc(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            qc(b)
        }
    } : a
}

function qc(a) {
    var b = q("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0) : (b = L("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0]), K("ERRORS", b));
    oc(a)
}

function rc(a) {
    var b = q("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0) : (b = L("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0]), K("ERRORS", b))
};
u("ytEventsEventsListeners", p.ytEventsEventsListeners || {});
u("ytEventsEventsCounter", p.ytEventsEventsCounter || {
    count: 0
});

function sc(a, b) {
    "function" === typeof a && (a = pc(a));
    return window.setTimeout(a, b)
};
var tc = class {};
var uc = class extends tc {
    start() {
        const a = q("yt.scheduler.instance.start");
        a && a()
    }
};
uc.h || (uc.h = new uc);
const vc = /^[\w.]*$/,
    wc = {
        q: !0,
        search_query: !0
    };

function xc(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = yc(h[0] || ""),
                l = yc(h[1] || "");
            k in c ? Array.isArray(c[k]) ? ka(c[k], l) : c[k] = [c[k], l] : c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(xc);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: zc == l ? "unchanged" : l
            }];
            wc.hasOwnProperty(e) || rc(d)
        }
    }
    return c
}
const zc = String(xc);

function Ac(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return xc(a, "&")
}

function Bc(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = Ac(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = xa(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.substr(0, f), e, b.substr(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function Cc(a) {
    if (!b) var b = window.location.href;
    const c = a.match(A)[1] || null,
        d = va(a.match(A)[3] || null);
    c && d ? (a = a.match(A), b = b.match(A), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? va(b.match(A)[3] || null) == d && (Number(b.match(A)[4] || null) || null) == (Number(a.match(A)[4] || null) || null) : !0;
    return a
}

function yc(a) {
    return a && a.match(vc) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};
[...cb];
let Dc = !1;

function Ec(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = Fc(a, b);
    const d = Gc(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || p;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = t => {
                    t = t || {};
                    k ? b.onSuccess && b.onSuccess.call(e, t, h) : b.onError && b.onError.call(e, t, h);
                    b.onFinish && b.onFinish.call(e, t, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    b.onFetchTimeout && 0 < b.timeout && (g = sc(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || p))
    }, b.timeout))
}

function Fc(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = L("XSRF_FIELD_NAME", void 0);
    if (b = b.urlParams) b[c] && delete b[c], a = Bc(a, b || {}, !0);
    return a
}

function Gc(a, b) {
    const c = L("XSRF_FIELD_NAME", void 0),
        d = L("XSRF_TOKEN", void 0);
    var e = b.postBody || "",
        f = b.postParams;
    const g = L("XSRF_FIELD_NAME", void 0);
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || va(a.match(A)[3] || null) && !b.withCredentials && va(a.match(A)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    f && "string" === typeof e && (e = Ac(e), na(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ?
        JSON.stringify(e) : xa(e));
    if (!(a = e) && (a = f)) {
        a: {
            for (const k in f) {
                f = !1;
                break a
            }
            f = !0
        }
        a = !f
    }!Dc && a && "POST" != b.method && (Dc = !0, qc(Error("AJAX request with postData should use POST")));
    return e
};
p.ytPubsubPubsubInstance || new G;
const N = window;
var P = N.ytcsi && N.ytcsi.now ? N.ytcsi.now : N.performance && N.performance.timing && N.performance.now && N.performance.timing.navigationStart ? () => N.performance.timing.navigationStart + N.performance.now() : () => (new Date).getTime();
const Hc = lc("initial_gel_batch_timeout", 2E3),
    Ic = Math.pow(2, 16) - 1;
let Jc = null,
    Kc = 0,
    Q = void 0,
    Lc = 0,
    Mc = 0,
    Nc = 0,
    Oc = !0;
const Pc = p.ytLoggingTransportGELQueue_ || new Map,
    Qc = p.ytLoggingTransportTokensToCttTargetIds_ || {};

function Rc(a, b) {
    if ("log_event" === a.endpoint) {
        var c = "";
        a.K ? c = "visitorOnlyApprovedKey" : a.v && (Qc[a.v.token] = Sc(a.v), c = a.v.token);
        var d = Pc.get(c) || [];
        Pc.set(c, d);
        d.push(a.payload);
        b && (Q = new b);
        a = lc("tvhtml5_logging_max_batch") || lc("web_logging_max_batch") || 100;
        b = P();
        d.length >= a ? Tc({
            writeThenSend: !0
        }) : 10 <= b - Nc && (Uc(), Nc = b)
    }
}

function Vc(a, b) {
    if ("log_event" === a.endpoint) {
        var c = "";
        a.K ? c = "visitorOnlyApprovedKey" : a.v && (Qc[a.v.token] = Sc(a.v), c = a.v.token);
        var d = new Map;
        d.set(c, [a.payload]);
        b && (Q = new b);
        return new E(e => {
            Q && Wc(Q) ? Xc(d, e, {
                bypassNetworkless: !0
            }) : e()
        })
    }
}

function Tc(a = {}) {
    new E(b => {
        window.clearTimeout(Lc);
        window.clearTimeout(Mc);
        Mc = 0;
        Q && Wc(Q) ? (Xc(Pc, b, a), Pc.clear()) : (Uc(), b())
    })
}

function Uc() {
    M("web_gel_timeout_cap") && !Mc && (Mc = sc(() => {
        Tc({
            writeThenSend: !0
        })
    }, 6E4));
    window.clearTimeout(Lc);
    let a = L("LOGGING_BATCH_TIMEOUT", lc("web_gel_debounce_ms", 1E4));
    M("shorten_initial_gel_batch_timeout") && Oc && (a = Hc);
    Lc = sc(() => {
        Tc({
            writeThenSend: !0
        })
    }, a)
}

function Xc(a, b, c = {}) {
    var d = Q;
    const e = Math.round(P());
    let f = a.size;
    for (const [h, k] of a) {
        a = la({
            context: Yc(d.config_ || Zc())
        });
        a.events = k;
        var g = Qc[h];
        g && $c(a, h, g);
        delete Qc[h];
        g = "visitorOnlyApprovedKey" === h;
        ad(a, e, g);
        bd(d, a, {
            retry: !0,
            onSuccess: () => {
                f--;
                f || b();
                Kc = Math.round(P() - e)
            },
            onError: () => {
                f--;
                f || b()
            },
            Fa: c,
            K: g
        });
        Oc = !1
    }
}

function ad(a, b, c) {
    a.requestTimeMs = String(b);
    M("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = L("EVENT_ID", void 0)) && ((c = L("BATCH_CLIENT_COUNTER", void 0) || 0) || (c = Math.floor(Math.random() * Ic / 2)), c++, c > Ic && (c = 1), K("BATCH_CLIENT_COUNTER", c), b = {
        serializedEventId: b,
        clientCounter: String(c)
    }, a.serializedClientEventId = b, Jc && Kc && M("log_gel_rtt_web") && (a.previousBatchInfo = {
        serializedClientEventId: Jc,
        roundtripMs: String(Kc)
    }), Jc = b, Kc = 0)
}

function $c(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function Sc(a) {
    const b = {};
    a.videoId ? b.videoId = a.videoId : a.playlistId && (b.playlistId = a.playlistId);
    return b
};
const cd = p.ytLoggingGelSequenceIdObj_ || {};

function dd(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || P());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = q("_lact", window);
    a = null == a ? -1 : Math.max(Date.now() - a, 0);
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    M("log_sequence_info_on_gel_web") && d.da && (a = e.context, b = d.da, cd[b] = b in cd ? cd[b] + 1 : 0, a.sequence = {
        index: cd[b],
        groupKey: b
    }, d.Ea && delete cd[d.da]);
    (d.La ? Vc : Rc)({
        endpoint: "log_event",
        payload: e,
        v: d.v,
        K: d.K
    }, c)
};

function ed() {
    if (!p.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
    try {
        return p.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : p.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : p.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : p.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN"
    } catch (a) {
        return "WEB_DISPLAY_MODE_UNKNOWN"
    }
};
u("ytglobal.prefsUserPrefsPrefs_", q("ytglobal.prefsUserPrefsPrefs_") || {});
const fd = {
        bluetooth: "CONN_DISCO",
        cellular: "CONN_CELLULAR_UNKNOWN",
        ethernet: "CONN_WIFI",
        none: "CONN_NONE",
        wifi: "CONN_WIFI",
        wimax: "CONN_CELLULAR_4G",
        other: "CONN_UNKNOWN",
        unknown: "CONN_UNKNOWN",
        "slow-2g": "CONN_CELLULAR_2G",
        "2g": "CONN_CELLULAR_2G",
        "3g": "CONN_CELLULAR_3G",
        "4g": "CONN_CELLULAR_4G"
    },
    gd = {
        "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
        "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
        "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
        "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
    };

function hd() {
    const a = p.navigator;
    return a ? a.connection : void 0
};

function id() {
    return "INNERTUBE_API_KEY" in J && "INNERTUBE_API_VERSION" in J
}

function Zc() {
    return {
        innertubeApiKey: L("INNERTUBE_API_KEY", void 0),
        innertubeApiVersion: L("INNERTUBE_API_VERSION", void 0),
        ka: L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        la: L("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        innertubeContextClientVersion: L("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0),
        na: L("INNERTUBE_CONTEXT_HL", void 0),
        ma: L("INNERTUBE_CONTEXT_GL", void 0),
        oa: L("INNERTUBE_HOST_OVERRIDE", void 0) || "",
        qa: !!L("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        pa: !!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: L("SERIALIZED_CLIENT_CONFIG_DATA", void 0)
    }
}

function Yc(a) {
    const b = {
        client: {
            hl: a.na,
            gl: a.ma,
            clientName: a.la,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.ka
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = p.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = L("EXPERIMENTS_TOKEN", "");
    "" !== c && (b.client.experimentsToken = c);
    c = [];
    const d = L("EXPERIMENTS_FORCED_FLAGS", {});
    for (var e in d) c.push({
        key: e,
        value: String(d[e])
    });
    e = L("EXPERIMENT_FLAGS", {});
    for (var f in e) f.startsWith("force_") && void 0 ===
        d[f] && c.push({
            key: f,
            value: String(e[f])
        });
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    f = b.client.clientName;
    if ("WEB" === f || "MWEB" === f || 1 === f || 2 === f) {
        if (!M("web_include_display_mode_killswitch")) {
            var g;
            b.client.mainAppWebInfo = null != (g = b.client.mainAppWebInfo) ? g : {};
            b.client.mainAppWebInfo.webDisplayMode = ed()
        }
    } else if (g = b.client.clientName, ("WEB_REMIX" === g || 76 === g) && !M("music_web_display_mode_killswitch")) {
        var h;
        b.client.ba = null != (h = b.client.ba) ? h : {};
        b.client.ba.webDisplayMode = ed()
    }
    a.appInstallData &&
        (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.appInstallData = a.appInstallData);
    L("DELEGATED_SESSION_ID") && !M("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: L("DELEGATED_SESSION_ID")
    });
    a: {
        if (h = hd()) {
            a = fd[h.type || "unknown"] || "CONN_UNKNOWN";
            h = fd[h.effectiveType || "unknown"] || "CONN_UNKNOWN";
            "CONN_CELLULAR_UNKNOWN" === a && "CONN_UNKNOWN" !== h && (a = h);
            if ("CONN_UNKNOWN" !== a) break a;
            if ("CONN_UNKNOWN" !== h) {
                a = h;
                break a
            }
        }
        a = void 0
    }
    a && (b.client.connectionType = a);
    M("web_log_effective_connection_type") &&
        (a = hd(), a = null !== a && void 0 !== a && a.effectiveType ? gd.hasOwnProperty(a.effectiveType) ? gd[a.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN" : void 0, a && (b.client.effectiveConnectionType = a));
    a = Object;
    h = a.assign;
    g = b.client;
    f = L("DEVICE", "");
    e = {};
    for (const [k, l] of Object.entries(Ac(f))) "cbrand" === k ? e.deviceMake = l : "cmodel" === k ? e.deviceModel = l : "cbr" === k ? e.browserName = l : "cbrver" === k ? e.browserVersion = l : "cos" === k ? e.osName = l : "cosver" === k ? e.osVersion = l : "cplatform" === k && (e.platform = l);
    b.client = h.call(a, g, e);
    return b
}

function jd(a, b, c) {
    c = void 0 === c ? {} : c;
    const d = {
        "X-Goog-Visitor-Id": c.visitorData || L("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    (b = c.Ba || L("AUTHORIZATION")) || (a ? b = `Bearer ${q("gapi.auth.getToken")().Aa}` : b = kb());
    b && (d.Authorization = b, d["X-Goog-AuthUser"] = L("SESSION_INDEX", 0), M("pageid_as_header_web") && (d["X-Goog-PageId"] = L("DELEGATED_SESSION_ID")));
    return d
};
const kd = q("ytPubsub2Pubsub2Instance") || new G;
G.prototype.subscribe = G.prototype.ea;
G.prototype.unsubscribeByKey = G.prototype.W;
G.prototype.publish = G.prototype.I;
G.prototype.clear = G.prototype.clear;
u("ytPubsub2Pubsub2Instance", kd);
u("ytPubsub2Pubsub2SubscribedKeys", q("ytPubsub2Pubsub2SubscribedKeys") || {});
u("ytPubsub2Pubsub2TopicToKeys", q("ytPubsub2Pubsub2TopicToKeys") || {});
u("ytPubsub2Pubsub2IsAsync", q("ytPubsub2Pubsub2IsAsync") || {});
u("ytPubsub2Pubsub2SkipSubKey", null);
var ld = class {
    isSupported() {
        return !0
    }
};
const R = [];
let S, md = !1;

function nd(a) {
    md || (S ? S.handleError(a) : (R.push({
        type: "ERROR",
        payload: a
    }), 10 < R.length && R.shift()))
}

function od(a, b) {
    md || (S ? S.M(a, b) : (R.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < R.length && R.shift()))
};

function pd() {
    if (void 0 !== L("DATASYNC_ID", void 0)) return L("DATASYNC_ID", void 0);
    throw new Yb("Datasync ID not set", "unknown");
};

function qd(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function rd(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const sd = {
        ["AUTH_INVALID"]: "No user identifier specified.",
        ["EXPLICIT_ABORT"]: "Transaction was explicitly aborted.",
        ["IDB_NOT_SUPPORTED"]: "IndexedDB is not supported.",
        ["MISSING_OBJECT_STORE"]: "Object store not created.",
        ["DB_DELETED_BY_MISSING_OBJECT_STORE"]: "Database is deleted because an expected object store was not created.",
        ["UNKNOWN_ABORT"]: "Transaction was aborted for unknown reasons.",
        ["QUOTA_EXCEEDED"]: "The current transaction exceeded its quota limitations.",
        ["QUOTA_MAYBE_EXCEEDED"]: "The current transaction may have failed because of exceeding quota limitations.",
        ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: "Can't start a transaction on a closed database",
        ["INCOMPATIBLE_DB_VERSION"]: "The binary is incompatible with the database version"
    },
    td = {
        ["AUTH_INVALID"]: "ERROR",
        ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: "WARNING",
        ["EXPLICIT_ABORT"]: "IGNORED",
        ["IDB_NOT_SUPPORTED"]: "ERROR",
        ["MISSING_OBJECT_STORE"]: "ERROR",
        ["DB_DELETED_BY_MISSING_OBJECT_STORE"]: "WARNING",
        ["QUOTA_EXCEEDED"]: "WARNING",
        ["QUOTA_MAYBE_EXCEEDED"]: "WARNING",
        ["UNKNOWN_ABORT"]: "WARNING",
        ["INCOMPATIBLE_DB_VERSION"]: "WARNING"
    },
    ud = {
        ["AUTH_INVALID"]: !1,
        ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: !1,
        ["EXPLICIT_ABORT"]: !1,
        ["IDB_NOT_SUPPORTED"]: !1,
        ["MISSING_OBJECT_STORE"]: !1,
        ["DB_DELETED_BY_MISSING_OBJECT_STORE"]: !1,
        ["QUOTA_EXCEEDED"]: !1,
        ["QUOTA_MAYBE_EXCEEDED"]: !0,
        ["UNKNOWN_ABORT"]: !0,
        ["INCOMPATIBLE_DB_VERSION"]: !1
    };
var T = class extends Yb {
        constructor(a, b = {}, c = sd[a], d = td[a], e = ud[a]) {
            super(c, Object.assign({
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, T.prototype)
        }
    },
    vd = class extends T {
        constructor(a) {
            super("MISSING_OBJECT_STORE", {
                ta: a
            }, sd.MISSING_OBJECT_STORE);
            Object.setPrototypeOf(this, vd.prototype)
        }
    };
const wd = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function xd(a, b, c) {
    b = rd(b);
    let d;
    d = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (d instanceof T) return d;
    if ("QuotaExceededError" === d.name) return new T("QUOTA_EXCEEDED", {
        objectStoreNames: c,
        dbName: b
    });
    if (Ha && "UnknownError" === d.name) return new T("QUOTA_MAYBE_EXCEEDED", {
        objectStoreNames: c,
        dbName: b
    });
    if ("InvalidStateError" === d.name && wd.some(e => d.message.includes(e))) return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB", {
        objectStoreNames: c,
        dbName: b
    });
    if ("AbortError" === d.name) return new T("UNKNOWN_ABORT", {
        objectStoreNames: c,
        dbName: b
    }, d.message);
    d.args = [{
        name: "IdbError",
        Ga: d.name,
        dbName: b,
        objectStoreNames: c
    }];
    d.level = "WARNING";
    return d
};

function yd(a) {
    if (!a) throw Error();
    throw a;
}

function zd(a) {
    return a
}
var Ad = class {
    constructor(a) {
        this.h = a
    }
};

function Bd(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof U ? Cd(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Dd(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof U ? Cd(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Cd(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof U ? Cd(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var U = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.onRejected = [];
        a = a.h;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.onRejected) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new U(new Ad((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) U.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new U(new Ad((b, c) => {
            a instanceof U ? a.then(b, c) : b(a)
        }))
    }
    static reject(a) {
        return new U(new Ad((b, c) => {
            c(a)
        }))
    }
    then(a, b) {
        const c = null !== a && void 0 !== a ? a : zd,
            d = null !== b && void 0 !== b ? b : yd;
        return new U(new Ad((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                Bd(this, this, c, e, f)
            }), this.onRejected.push(() => {
                Dd(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? Bd(this, this, c, e, f) : "REJECTED" === this.state.status && Dd(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function Ed(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function Fd(a) {
    return new Promise((b, c) => {
        Ed(a, b, c)
    })
}

function V(a) {
    return new U(new Ad((b, c) => {
        Ed(a, b, c)
    }))
};

function Gd(a, b) {
    return new U(new Ad((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};

function W(a, b, c, d) {
    return C(a, function*() {
        const e = {
            mode: "readonly",
            D: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        this.transactionCount++;
        const f = e.D ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const l = Math.round(P());
            try {
                const t = this.h.transaction(b, e.mode);
                var k = d;
                const n = new Hd(t),
                    r = yield Id(n, k), m = Math.round(P());
                Jd(this, l, m, g, void 0, b.join(), e);
                return r
            } catch (t) {
                k = Math.round(P());
                const n = xd(t, this.h.name, b.join());
                if (n instanceof T && !n.h || g >= f) Jd(this, l, k, g, n, b.join(),
                    e), h = n
            }
        }
        return Promise.reject(h)
    })
}

function Kd(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new Ld(a)
}

function Jd(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof T && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && od("QUOTA_EXCEEDED", {
        dbName: rd(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof T && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), od("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), Md(a, !1, d, f, b, g.tag), nd(e)) : Md(a, !0, d, f, b, g.tag)
}

function Md(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    od("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Nd = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(P());
        this.i = !1
    }
    add(a, b, c) {
        return W(this, [a], {
            mode: "readwrite",
            D: !0
        }, d => X(d, a).add(b, c))
    }
    clear(a) {
        return W(this, [a], {
            mode: "readwrite",
            D: !0
        }, b => X(b, a).clear())
    }
    close() {
        var a;
        this.h.close();
        (null === (a = this.options) || void 0 === a ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return W(this, [a], {
            mode: "readonly",
            D: !0
        }, c => X(c, a).count(b))
    }
    delete(a, b) {
        return W(this, [a], {
            mode: "readwrite",
            D: !0
        }, c => X(c, a).delete(b))
    }
    get(a, b) {
        return W(this, [a], {
            mode: "readonly",
            D: !0
        }, c => X(c, a).get(b))
    }
    put(a, b, c) {
        return W(this, [a], {
            mode: "readwrite",
            D: !0
        }, d => X(d, a).put(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
};

function Od(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return Pd(a).then(d => Gd(d, c))
}

function Qd(a, b) {
    return Od(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}
var Ld = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return V(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return V(this.h.clear()).then(() => {})
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Qd(this, a) : V(this.h.delete(a))
    }
    get(a) {
        return V(this.h.get(a))
    }
    index(a) {
        return new Rd(this.h.index(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    put(a, b) {
        return V(this.h.put(a, b))
    }
};

function Id(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}

function X(a, b) {
    b = a.h.objectStore(b);
    let c = a.j.get(b);
    c || (c = new Ld(b), a.j.set(b, c));
    return c
}
var Hd = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = T;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new T("EXPLICIT_ABORT");
    }
};

function Sd(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return Pd(a).then(f => Gd(f, c))
}
var Rd = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return Sd(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getKey(a) {
        return V(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function Pd(a) {
    return V(a).then(b => null === b ? null : new Td(a, b))
}
var Td = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Pd(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Pd(this.request)
    }
    delete() {
        return V(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    update(a) {
        return V(this.cursor.update(a))
    }
};

function Ud(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.blocked,
            h = c.blocking,
            k = c.xa,
            l = c.upgrade,
            t = c.closed;
        let n;
        const r = () => {
            n || (n = new Nd(f.result, {
                closed: t
            }));
            return n
        };
        f.addEventListener("upgradeneeded", m => {
            try {
                if (null === m.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                m.dataLoss && "none" !== m.dataLoss && od("IDB_DATA_CORRUPTED", {
                    reason: m.dataLossMessage || "unknown reason",
                    dbName: rd(a)
                });
                const v = r(),
                    w = new Hd(f.transaction);
                l && l(v, z => m.oldVersion < z && m.newVersion >= z, w);
                w.done.catch(z => {
                    e(z)
                })
            } catch (v) {
                e(v)
            }
        });
        f.addEventListener("success", () => {
            const m = f.result;
            h && m.addEventListener("versionchange", () => {
                h(r())
            });
            m.addEventListener("close", () => {
                od("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: rd(a),
                    dbVersion: m.version
                });
                k && k()
            });
            d(r())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function Vd(a, b, c = {}) {
    return Ud(a, b, c)
}

function Wd(a, b = {}) {
    return C(this, function*() {
        const c = self.indexedDB.deleteDatabase(a),
            d = b.blocked;
        d && c.addEventListener("blocked", () => {
            d()
        });
        yield Fd(c)
    })
};

function Xd(a, b) {
    return new T("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function Y(a) {
    if (!a.l) throw Xd(a);
    if (a.h) return a.h;
    let b;
    const c = () => {
            a.h === b && (a.h = void 0)
        },
        d = {
            blocking: f => {
                f.close()
            },
            closed: c,
            xa: c,
            upgrade: a.options.upgrade
        },
        e = () => C(a, function*() {
            try {
                var f = yield this.i(this.name, this.options.version, d);
                a: {
                    var g = f,
                        h = this.options;
                    for (const l of Object.keys(h.N)) {
                        const {
                            J: t,
                            Ia: n = Number.MAX_VALUE
                        } = h.N[l];
                        if (g.h.version >= t && !(g.h.version >= n) && !g.h.objectStoreNames.contains(l)) {
                            var k = l;
                            break a
                        }
                    }
                    k = void 0
                }
                if (void 0 !== k) {
                    if (!this.j) return this.j = !0, yield this.delete(), nd(new T("DB_DELETED_BY_MISSING_OBJECT_STORE", {
                        dbName: this.name,
                        ta: k
                    })), e();
                    throw new vd(k);
                }
                return f
            } catch (l) {
                if (l instanceof DOMException ? "VersionError" === l.name : "DOMError" in self && l instanceof DOMError ? "VersionError" === l.name : l instanceof Object && "message" in l && "An attempt was made to open a database using a lower version than the existing version." === l.message) {
                    f = yield this.i(this.name, void 0, Object.assign(Object.assign({}, d), {
                        upgrade: void 0
                    }));
                    k = f.h.version;
                    if (void 0 !== this.options.version && k > this.options.version + 1) throw f.close(), this.l = !1, Xd(this, k);
                    return f
                }
                c();
                throw l;
            }
        });
    b = e();
    a.h = b;
    return a.h
}
var Yd = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.l = !0;
        this.j = !1
    }
    i(a, b, c = {}) {
        return Vd(a, b, c)
    }
    delete(a = {}) {
        return Wd(this.name, a)
    }
};
const Zd = new Yd("YtIdbMeta", {
    N: {
        databases: {
            J: 1
        }
    },
    upgrade(a, b) {
        b(1) && Kd(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function $d(a) {
    return C(this, function*() {
        return W(yield Y(Zd), ["databases"], {
            D: !0,
            mode: "readwrite"
        }, b => {
            const c = X(b, "databases");
            return c.get(a.actualName).then(d => {
                if (d ? a.actualName !== d.actualName || a.publicName !== d.publicName || a.userIdentifier !== d.userIdentifier : 1) return c.put(a).then(() => {})
            })
        })
    })
}

function ae(a) {
    return C(this, function*() {
        return (yield Y(Zd)).delete("databases", a)
    })
};
let be;

function ce() {
    return C(this, function*() {
        return new ld
    })
}

function de() {
    if (void 0 !== be) return be;
    md = !0;
    return be = ce().then(a => {
        md = !1;
        return a.isSupported()
    })
};
new Bb;

function ee(a) {
    try {
        pd();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new T("AUTH_INVALID"), nd(a), a;
    b = pd();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function fe(a, b, c, d) {
    return C(this, function*() {
        yield ge({
            caller: "openDbImpl",
            publicName: a,
            version: b
        });
        qd(a);
        let e;
        e = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : ee(a);
        try {
            return yield $d(e), yield Vd(e.actualName, b, d)
        } catch (f) {
            try {
                yield ae(e.actualName)
            } catch (g) {}
            throw f;
        }
    })
}

function ge(a) {
    return C(this, function*() {
        if (!(yield de())) {
            const b = new T("IDB_NOT_SUPPORTED", {
                context: a
            });
            nd(b);
            throw b;
        }
    })
}

function he(a, b, c = {}) {
    return fe(a, b, !1, c)
}

function ie(a, b, c = {}) {
    return fe(a, b, !0, c)
}

function je(a, b = {}) {
    return C(this, function*() {
        if (yield de()) {
            qd(a);
            var c = ee(a);
            yield Wd(c.actualName, b);
            yield ae(c.actualName)
        }
    })
}

function ke(a, b = {}) {
    return C(this, function*() {
        if (yield de()) qd(a), yield Wd(a, b), yield ae(a)
    })
};

function le(a, b) {
    let c;
    return () => {
        c || (c = new me(a, b));
        return c
    }
}
var me = class extends Yd {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        qd(a)
    }
    i(a, b, c = {}) {
        return (this.options.U ? ie : he)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.U ? ke : je)(this.name, a)
    }
};
const ne = ["client.name", "client.version"];

function oe(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? ne.includes(b.key) : !1);
    return a
};
var pe;
pe = le("ServiceWorkerLogsDatabase", {
    N: {
        ["SWHealthLog"]: {
            J: 1
        }
    },
    U: !0,
    upgrade: (a, b) => {
        b(1) && Kd(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function qe(a) {
    return C(this, function*() {
        var b = yield Y(pe()), c = b.put, d = L("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = oe(e.clientError));
        e.interface = d;
        return c.call(b, "SWHealthLog", e)
    })
};
const re = p.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1,
    isIdbSupported: !1,
    potentialEsfErrorCounter: 0
};
M("export_networkless_options") && u("ytNetworklessLoggingInitializationOptions", re);

function Wc(a) {
    !a.config_ && id() && (a.config_ = Zc());
    return !!a.config_
}

function bd(a, b, c) {
    !L("VISITOR_DATA") && .01 > Math.random() && rc(new Yb("Missing VISITOR_DATA when sending innertube request.", "log_event", b, c));
    if (!Wc(a)) throw a = new Yb("innertube xhrclient not ready", "log_event", b, c), qc(a), a;
    const d = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        postParams: b,
        postBodyFormat: "JSON",
        onTimeout: () => {
            c.onTimeout()
        },
        onFetchTimeout: c.onTimeout,
        onSuccess: (k, l) => {
            if (c.onSuccess) c.onSuccess(l)
        },
        onFetchSuccess: k => {
            if (c.onSuccess) c.onSuccess(k)
        },
        onError: (k, l) => {
            if (c.onError) c.onError(l)
        },
        onFetchError: k => {
            if (c.onError) c.onError(k)
        },
        timeout: c.timeout,
        withCredentials: !0
    };
    b = "";
    var e = a.config_.oa;
    e && (b = e);
    e = jd(a.config_.qa || !1, b, c);
    Object.assign(d.headers, e);
    d.headers.Authorization && !b && (d.headers["x-origin"] = window.location.origin);
    e = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;
    let f = {
        alt: "json"
    };
    a.config_.pa && d.headers.Authorization || (f.key = a.config_.innertubeApiKey);
    const g = Bc(`${b}${e}`, f || {}, !0),
        h = () => {
            try {
                Ec(g, d)
            } catch (k) {
                if ("InvalidAccessError" == k.name) rc(Error("An extension is blocking network request."));
                else throw k;
            }
        };
    q("ytNetworklessLoggingInitializationOptions") && re.isNwlInitialized ? de().then(k => {
        h(k)
    }) : h(!1)
}
class se {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : id() && (this.config_ = Zc())
    }
};
let te = se;

function ue(a, b, c = {}) {
    let d = te;
    L("ytLoggingEventsDefaultDisabled", !1) && te == se && (d = null);
    dd(a, b, d, c)
};
const ve = [{
    T: a => `Cannot read property '${a.key}'`,
    O: {
        Error: [{
            o: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            o: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            o: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            o: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            o: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            o: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            o: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    T: a => `Cannot call '${a.key}'`,
    O: {
        TypeError: [{
            o: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            o: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            o: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            o: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            o: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            o: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    T: a => `${a.key} is not defined`,
    O: {
        ReferenceError: [{
            o: /(.*) is not defined/,
            groups: ["key"]
        }, {
            o: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var xe = {
    A: [],
    u: [{
        ga: we,
        weight: 500
    }]
};

function we(a) {
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function ye() {
    if (!ze) {
        var a = ze = new Ae;
        a.A.length = 0;
        a.u.length = 0;
        Be(a, xe)
    }
    return ze
}

function Be(a, b) {
    b.A && a.A.push.apply(a.A, b.A);
    b.u && a.u.push.apply(a.u, b.u)
}
var Ae = class {
        constructor() {
            this.u = [];
            this.A = []
        }
    },
    ze;
const Ce = new G;

function De(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = Ee(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = Ee(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = Ee(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function Ee(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function Fe(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += Ge(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = De(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? Ge(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += Ge(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = He(a), d += c[b].length;
    else c[b] = He(a), d += c[b].length;
    return d
}

function Ge(a, b, c, d) {
    c += `.${a}`;
    a = He(b);
    d[c] = a;
    return c.length + a.length
}

function He(a) {
    return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
};
var Ie = new Set,
    Je = 0,
    Ke = 0,
    Le = 0,
    Me = [];
const Ne = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function Oe(a, b = "ERROR") {
    var c = {};
    c.name = L("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = L("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0);
    Pe(a, c || {}, b)
}

function Pe(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (M("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= Je)) {
            var e = wb(a);
            d = e.message || "Unknown Error";
            const v =
                e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${v}: ${d}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let w = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(w = Fe(a.args[h], `params.${h}`, b, w), 500 <= w); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const z = a.params;
                if ("object" === typeof a.params)
                    for (h in z) {
                        if (!z[h]) continue;
                        const da = `params.${h}`,
                            O = He(z[h]);
                        b[da] = O;
                        w +=
                            da.length + O.length;
                        if (500 < w) break
                    } else b.params = He(z)
            }
            if (Me.length)
                for (h = 0; h < Me.length && !(w = Fe(Me[h], `params.context.${h}`, b, w), 500 <= w); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: d,
                name: v,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = ye();d = b;
                for (k of a.A)
                    if (d.message && d.message.match(k.sa)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.u)
                    if (l.ga(d)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var t of ve)
                if (t.O[k.name]) {
                    l = t.O[k.name];
                    for (var n of l)
                        if (l = k.message.match(n.o)) {
                            k.params["params.error.original"] = l[0];
                            a = n.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = t.T(b);
                            break
                        }
                }
            k.params || (k.params = {});
            t = ye();
            k.params["params.errorServiceSignature"] = `msg=${t.A.length}&cb=${t.u.length}`;
            k.params["params.serviceWorker"] = "true";
            p.document && p.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            x("sample").constructor !== oa && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            if (0 !== k.sampleWeight && !Ie.has(k.message)) {
                "ERROR" === c ? (Ce.I("handleError", k), M("record_app_crashed_web") && 0 === Le && 1 === k.sampleWeight && (Le++, ue("appCrashed", {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                })), Ke++) : "WARNING" === c && Ce.I("handleWarning", k);
                b: {
                    for (r of Ne)
                        if ((t = sa) && 0 <= t.toLowerCase().indexOf(r.toLowerCase())) {
                            var r = !0;
                            break b
                        }
                    r = !1
                }
                if (r) var m = void 0;
                else {
                    t = {
                        stackTrace: k.stack
                    };
                    k.fileName && (t.filename = k.fileName);
                    r = k.lineNumber && k.lineNumber.split ? k.lineNumber.split(":") : [];
                    0 !== r.length && (1 !== r.length || isNaN(Number(r[0])) ? 2 !== r.length || isNaN(Number(r[0])) || isNaN(Number(r[1])) || (t.lineNumber = Number(r[0]), t.columnNumber = Number(r[1])) : t.lineNumber = Number(r[0]));
                    r = {
                        level: "ERROR_LEVEL_UNKNOWN",
                        message: k.message,
                        errorClassName: k.name,
                        sampleWeight: k.sampleWeight
                    };
                    "ERROR" === c ? r.level = "ERROR_LEVEL_ERROR" : "WARNING" === c &&
                        (r.level = "ERROR_LEVEL_WARNNING");
                    t = {
                        isObfuscated: !0,
                        browserStackInfo: t
                    };
                    n = {
                        pageUrl: window.location.href,
                        kvPairs: []
                    };
                    L("FEXP_EXPERIMENTS") && (n.experimentIds = L("FEXP_EXPERIMENTS"));
                    if (l = k.params)
                        for (m of Object.keys(l)) n.kvPairs.push({
                            key: `client.${m}`,
                            value: String(l[m])
                        });
                    m = L("SERVER_NAME", void 0);
                    l = L("SERVER_VERSION", void 0);
                    m && l && (n.kvPairs.push({
                        key: "server.name",
                        value: m
                    }), n.kvPairs.push({
                        key: "server.version",
                        value: l
                    }));
                    m = {
                        errorMetadata: n,
                        stackTrace: t,
                        logMessage: r
                    }
                }
                m && (ue("clientError", m), ("ERROR" ===
                    c || M("errors_flush_gel_always_killswitch")) && Tc());
                Ie.add(k.message);
                Je++
            }
        }
    }
};

function Qe(a) {
    return C(a, function*() {
        var b = yield p.fetch(this.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === (new gc).constructor.aa) {
                    b = new gc(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function Re(a = !1) {
    return C(Se.h, function*() {
        if (a || !this.h) this.h = Qe(this).then(this.j).catch(b => {
            delete this.h;
            Oe(b)
        });
        return this.h
    })
}
var Se = class {
    constructor() {
        this.i = `${self.location.origin}/sw.js_data`
    }
    j(a) {
        var b;
        a.h || (a.h = {});
        a.h[2] || (b = B(a, 2)) && (a.h[2] = new fc(b));
        if (b = a.h[2]) {
            const c = B(b, 5);
            c && (p.__SAPISID = c);
            null != B(b, 7) && K("VISITOR_DATA", B(b, 7));
            null != B(b, 4) && K("SESSION_INDEX", String(B(b, 4)));
            null != B(b, 8) && K("DELEGATED_SESSION_ID", B(b, 8))
        }
        return a
    }
};

function Te(a) {
    const b = {};
    var c = kb();
    c && (b.Authorization = c, c = a = null === a || void 0 === a ? void 0 : a.sessionIndex, void 0 === c && (c = Number(L("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), b["X-Goog-AuthUser"] = c, "INNERTUBE_HOST_OVERRIDE" in J || (b["X-Origin"] = window.location.origin), M("pageid_as_header_web") && void 0 === a && "DELEGATED_SESSION_ID" in J && (b["X-Goog-PageId"] = L("DELEGATED_SESSION_ID")));
    return b
}
var Ue = class {
    constructor() {
        this.wa = !0
    }
};
var Ve = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};
let We = Date.now().toString();
let Xe = p.ytLoggingDocDocumentNonce_;
if (!Xe) {
    var Ye;
    a: {
        if (window.crypto && window.crypto.getRandomValues) try {
            const d = Array(16),
                e = new Uint8Array(16);
            window.crypto.getRandomValues(e);
            for (let f = 0; f < d.length; f++) d[f] = e[f];
            Ye = d;
            break a
        } catch (d) {}
        const c = Array(16);
        for (let d = 0; 16 > d; d++) {
            const e = Date.now();
            for (let f = 0; f < e % 23; f++) c[d] = Math.random();
            c[d] = Math.floor(256 * Math.random())
        }
        if (We) {
            let d = 1;
            for (let e = 0; e < We.length; e++) c[d % 16] = c[d % 16] ^ c[(d - 1) % 16] / 4 ^ We.charCodeAt(e), d++
        }
        Ye = c
    }
    const a = Ye,
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] &
        63));
    Xe = b.join("")
};

function Ze(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var $e = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        var c, d, e;
        b = (null === (d = null === (c = b.S.context) || void 0 === c ? void 0 : c.request) || void 0 === d ? void 0 : d.consistencyTokenJars) || [];
        if (a = null === (e = a.responseContext) || void 0 === e ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            Ze(this, a)
        }
    }
};

function af() {
    var a = L("INNERTUBE_CONTEXT");
    if (!a) return Oe(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = la(a);
    M("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = L("EXPERIMENTS_TOKEN", "");
    c ? b.experimentsToken = c : delete b.experimentsToken;
    $e.h || ($e.h = new $e);
    b = $e.h.h;
    c = [];
    let d = 0;
    for (const e in b) c[d++] = b[e];
    a.request = Object.assign(Object.assign({},
        a.request), {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    return a
};

function bf(a) {
    var b = a;
    if (a = L("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(A);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var cf = class {};
const df = {
    ["GET_DATASYNC_IDS"]: class extends cf {}
};

function ef(a) {
    Ue.h || (Ue.h = new Ue);
    ff.h = new ff(a)
}

function gf(a, b, c) {
    return C(a, function*() {
        var d;
        if (this.h.wa) {
            const e = null === (d = null === b || void 0 === b ? void 0 : b.Y) || void 0 === d ? void 0 : d.sessionIndex;
            d = Te({
                sessionIndex: e
            });
            d = Object.assign(Object.assign({}, hf(c)), d)
        } else d = jf(b, c);
        return d
    })
}

function kf(a, b, c) {
    return C(a, function*() {
        for (var d of []) d.Ha(b.S.context);
        d = JSON.stringify(b.S);
        b.P = Object.assign(Object.assign({}, b.P), {
            headers: c
        });
        let e = Object.assign({}, b.P);
        "POST" === b.P.method && (e = Object.assign(Object.assign({}, e), {
            body: d
        }));
        return yield this.i.fetch(b.input, e)
    })
}

function lf(a, b, c) {
    var d = {
        Y: {
            identity: Ve
        }
    };
    b.context || (b.context = af());
    return new E(e => C(a, function*() {
        var f = bf(c);
        f = Cc(f) ? "same-origin" : "cors";
        f = yield gf(this, d, f);
        var g = bf(c);
        L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null === f || void 0 === f ? 0 : f.Authorization) || (g = Bc(g, {
            key: L("INNERTUBE_API_KEY")
        }, !1));
        var h = {
            method: "POST",
            mode: Cc(g) ? "same-origin" : "cors",
            credentials: Cc(g) ? "same-origin" : "include"
        };
        e(kf(this, {
            input: g,
            P: h,
            S: b,
            config: d
        }, f))
    }))
}

function jf(a, b) {
    var c;
    a = null === (c = null === a || void 0 === a ? void 0 : a.Y) || void 0 === c ? void 0 : c.sessionIndex;
    return Fb(Te({
        sessionIndex: a
    })).then(d => Promise.resolve(Object.assign(Object.assign({}, hf(b)), d)))
}

function hf(a) {
    const b = {
            "Content-Type": "application/json"
        },
        c = L("VISITOR_DATA");
    c && (b["X-Goog-Visitor-Id"] = c);
    "cors" !== a && ((a = L("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = L("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = L("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a));
    return b
}
var ff = class {
    constructor(a) {
        var b = Ue.h,
            c = {
                Da: {}
            },
            d = mf;
        this.i = a;
        this.h = b;
        this.handleError = d;
        c.V || (c.V = {});
        c.V = Object.assign(Object.assign({}, df), c.V)
    }
};

function Z(a) {
    return C(this, function*() {
        yield nf();
        Oe(a, "WARNING")
    })
}

function mf(a) {
    return C(this, function*() {
        yield nf();
        Oe(a)
    })
}

function of (a) {
    C(this, function*() {
        if (M("nwl_sw_health_payloads")) yield qe(a);
        else {
            yield Re();
            var b = {
                timestamp: a.timestamp
            };
            b = a.appShellAssetLoadReport ? {
                payloadName: "appShellAssetLoadReport",
                payload: a.appShellAssetLoadReport,
                options: b
            } : a.clientError ? {
                payloadName: "clientError",
                payload: a.clientError,
                options: b
            } : void 0;
            b && ue(b.payloadName, b.payload)
        }
    })
}

function nf() {
    return C(this, function*() {
        try {
            yield Re()
        } catch (a) {}
    })
};
let pf;

function qf() {
    pf || (ef({
        fetch: (a, b) => Fb(fetch(new Request(a, b)))
    }), pf = ff.h);
    return pf
};
const rf = {
    granted: "GRANTED",
    denied: "DENIED",
    unknown: "UNKNOWN"
};

function sf(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (H("IDToken", b), tf()) : "notifications_check_registration" === a && uf(b)
}

function vf() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function wf(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function xf(a) {
    return C(this, function*() {
        const b = wf(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = ec(Tb);
        return yf().then(e => lf(e, c, d).then(f => {
            f.json().then(g => {
                if (!g || !g.endpointUrl) return Promise.resolve();
                a.payload.chrome.postedEndpoint && zf(a.payload.chrome.postedEndpoint);
                return Af(a, g.endpointUrl)
            })
        }))
    })
}

function Af(a, b) {
    a.deviceId && H("DeviceId", a.deviceId);
    a.timestampSec && H("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome;
    return self.registration.showNotification(c.title, {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: b,
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint
        },
        tag: c.title + c.body + c.iconUrl,
        requireInteraction: !0
    }).then(() => {
        Bf(a.displayCap)
    }).catch(() => {})
}

function zf(a) {
    if (!a.recordNotificationInteractionsEndpoint) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: a.recordNotificationInteractionsEndpoint.serializedInteractionsRequest
        },
        c = ec(Ub);
    return yf().then(d => lf(d, b, c))
}

function Bf(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let c = 0; c < b.length - a; c++) b[c].close()
    })
}

function uf(a) {
    const b = [Cf(a), I("RegistrationTimestamp").then(Df), Ef(), Ff(), Gf()];
    Promise.all(b).catch(() => {
        H("IDToken", a);
        tf();
        return Promise.resolve()
    })
}

function Df(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}

function Cf(a) {
    return I("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function Ef() {
    return I("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function Ff() {
    return I("Endpoint").then(a => Hf().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Gf() {
    return I("application_server_key").then(a => If().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Jf() {
    var a = Notification.permission;
    if (rf[a]) return rf[a]
}

function tf() {
    H("RegistrationTimestamp", 0);
    Promise.all([Hf(), Kf(), Lf(), If()]).then(([a, b, c, d]) => {
        b = b ? Wb(b) : null;
        c = c ? Wb(c) : null;
        if (d) {
            d = new Uint8Array(d);
            var e = 4;
            void 0 === e && (e = 0);
            Ma();
            e = Ja[e];
            const l = Array(Math.floor(d.length / 3)),
                t = e[64] || "";
            let n = 0,
                r = 0;
            for (; n < d.length - 2; n += 3) {
                var f = d[n],
                    g = d[n + 1],
                    h = d[n + 2],
                    k = e[f >> 2];
                f = e[(f & 3) << 4 | g >> 4];
                g = e[(g & 15) << 2 | h >> 6];
                h = e[h & 63];
                l[r++] = "" + k + f + g + h
            }
            k = 0;
            h = t;
            switch (d.length - n) {
                case 2:
                    k = d[n + 1], h = e[(k & 15) << 2] || t;
                case 1:
                    d = d[n], l[r] = "" + e[d >> 2] + e[(d & 3) << 4 | k >> 4] + h + t
            }
            d = l.join("")
        } else d =
            null;
        Mf(a, b, c, d)
    }).catch(() => {
        Mf()
    })
}

function Mf(a = null, b = null, c = null, d = null) {
    ac().then(e => {
        e && (H("Endpoint", a), H("P256dhKey", b), H("AuthKey", c), H("application_server_key", d), H("Permission", Notification.permission), Promise.all([I("DeviceId"), I("NotificationsDisabled")]).then(([f, g]) => {
            if (null !== f && void 0 !== f) var h = f;
            else {
                f = [];
                var k;
                h = h || Sb.length;
                for (k = 0; 256 > k; k++) f[k] = Sb[0 | Math.random() * h];
                h = f.join("")
            }
            Nf(h, null !== a && void 0 !== a ? a : void 0, null !== b && void 0 !== b ? b : void 0, null !== c && void 0 !== c ? c : void 0, null !== d && void 0 !== d ? d : void 0, null !==
                g && void 0 !== g ? g : void 0)
        }))
    })
}

function Nf(a, b, c, d, e, f) {
    C(this, function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: Jf()
                    }
                }
            },
            h = ec(Vb);
        return yf().then(k => lf(k, g, h).then(() => {
            H("DeviceId", a);
            H("RegistrationTimestamp", Date.now());
            H("TimestampLowerBound", Date.now())
        }, l => {
            Z(l)
        }))
    })
}

function Hf() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Kf() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function Lf() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function If() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function yf() {
    return C(this, function*() {
        try {
            return yield Re(!0), qf()
        } catch (a) {
            return yield Z(a), Promise.reject(a)
        }
    })
};
let Of = void 0;

function Pf(a) {
    return C(this, function*() {
        Of || (Of = yield a.open("yt-appshell-assets"));
        return Of
    })
}

function Qf(a, b) {
    return C(this, function*() {
        const c = yield Pf(a), d = b.map(e => Rf(c, e));
        return Promise.all(d)
    })
}

function Sf(a, b) {
    return C(this, function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function Tf(a, b) {
    return C(this, function*() {
        const c = yield Pf(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function Uf(a, b, c) {
    return C(this, function*() {
        yield(yield Pf(a)).put(b, c)
    })
}

function Vf(a, b) {
    C(this, function*() {
        yield(yield Pf(a)).delete(b)
    })
}

function Rf(a, b) {
    return C(this, function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var Wf;
Wf = le("yt-serviceworker-metadata", {
    N: {
        ["auth"]: {
            J: 1
        },
        ["resource-manifest-assets"]: {
            J: 2
        }
    },
    U: !0,
    upgrade(a, b) {
        b(1) && Kd(a, "resource-manifest-assets");
        b(2) && Kd(a, "auth")
    },
    version: 2
});
let Xf = null;

function Yf() {
    return new Promise(a => {
        de().then(b => {
            b ? (Zf.h || (Zf.h = new Zf), a(Zf.h)) : a(void 0)
        })
    })
}

function $f(a, b) {
    return C(a, function*() {
        yield W(yield Y(Wf()), ["resource-manifest-assets"], "readwrite", c => {
            const d = X(c, "resource-manifest-assets"),
                e = Date.now();
            return d.put(b, e).then(() => {
                Xf = e;
                let f = !0;
                return Od(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function ag(a, b) {
    return C(a, function*() {
        let c = !1,
            d = 0;
        yield W(yield Y(Wf()), ["resource-manifest-assets"], "readonly", e => Od(X(e, "resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.cursor.value.includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function bg(a) {
    return C(a, function*() {
        Xf || (yield W(yield Y(Wf()), ["resource-manifest-assets"], "readonly", b => Od(X(b, "resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            Xf = c.getKey()
        })));
        return Xf
    })
}
var Zf = class {};

function cg() {
    return new Promise(a => {
        de().then(b => {
            b ? (dg.h || (dg.h = new dg), a(dg.h)) : a(void 0)
        })
    })
}

function eg(a, b) {
    return C(a, function*() {
        yield(yield Y(Wf())).put("auth", b, "shell_identifier_key")
    })
}

function fg(a) {
    return C(a, function*() {
        return (yield(yield Y(Wf())).get("auth", "shell_identifier_key")) || ""
    })
}

function gg(a) {
    return C(a, function*() {
        yield(yield Y(Wf())).clear("auth")
    })
}
var dg = class {};

function hg() {
    C(this, function*() {
        const a = yield cg();
        a && (yield gg(a))
    })
};

function ig(a, b) {
    for (; Ea(b);) {
        var c = void 0;
        switch (b.m) {
            case 10:
                var d = b;
                c = Da(d.h);
                d = d.h;
                var e = d.j,
                    f = d.h;
                c = f + c;
                var g = [];
                let t = "";
                for (; f < c;) {
                    var h = e[f++];
                    if (128 > h) g.push(h);
                    else if (192 > h) continue;
                    else if (224 > h) {
                        var k = e[f++];
                        g.push((h & 31) << 6 | k & 63)
                    } else if (240 > h) {
                        k = e[f++];
                        var l = e[f++];
                        g.push((h & 15) << 12 | (k & 63) << 6 | l & 63)
                    } else if (248 > h) {
                        k = e[f++];
                        l = e[f++];
                        const n = e[f++];
                        h = (h & 7) << 18 | (k & 63) << 12 | (l & 63) << 6 | n & 63;
                        h -= 65536;
                        g.push((h >> 10 & 1023) + 55296, (h & 1023) + 56320)
                    }
                    8192 <= g.length && (t += String.fromCharCode.apply(null,
                        g), g.length = 0)
                }
                if (8192 >= g.length) g = String.fromCharCode.apply(null, g);
                else {
                    e = "";
                    for (f = 0; f < g.length; f += 8192) e += String.fromCharCode.apply(null, Array.prototype.slice.call(g, f, f + 8192));
                    g = e
                }
                t += g;
                d.h = c;
                c = t;
                d = a;
                1 < d.m ? d.i[1 + d.l] = c : (Ya(d), d.j[1] = c);
                break;
            default:
                if (!Ta(b)) return a
        }
    }
    return a
}
var $a = class extends Ua {
    constructor(a) {
        super();
        Wa(this, a, null)
    }
};

function jg(a) {
    a: {
        var b = new kg;
        for (a = new Ga(a); Ea(a);) {
            var c = void 0;
            switch (a.m) {
                case 10:
                    c = new $a;
                    var d = a,
                        e = c,
                        f = ig;
                    const h = d.h.i;
                    var g = Da(d.h);
                    g = d.h.h + g;
                    d.h.i = g;
                    f(e, d);
                    d.h.h = g;
                    d.h.i = h;
                    d = b;
                    e = c;
                    c = Za(d);
                    e = e ? e : new $a;
                    d = B(d, 1);
                    c.push(e);
                    d.push(ab(e));
                    break;
                default:
                    if (!Ta(a)) break a
            }
        }
    }
    return b
}
var kg = class extends Ua {
        constructor() {
            super();
            Wa(this, void 0, lg)
        }
    },
    lg = [1];

function mg(a) {
    return C(this, function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(ng(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function ng(a) {
    return Za(jg(decodeURIComponent(a))).reduce((b, c) => {
        (c = B(c, 1)) && b.push(c);
        return b
    }, [])
};

function og(a) {
    return C(a, function*() {
        const b = yield Re();
        if (b && null != B(b, 3)) {
            var c = yield cg();
            c && (c = yield fg(c), B(b, 3) !== c && (Vf(this.h, this.i), hg()))
        }
    })
}

function pg(a) {
    return C(a, function*() {
        let b, c;
        try {
            c = yield qg(this, this.j), b = yield mg(c), yield Qf(this.h, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield rg(this), yield Uf(this.h, this.i, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield sg(this, b, this.i)
        } catch (d) {}
        return Promise.resolve()
    })
}

function tg(a) {
    return C(a, function*() {
        yield og(this);
        return pg(this)
    })
}

function qg(a, b) {
    return C(a, function*() {
        try {
            return yield p.fetch(new Request(b))
        } catch (c) {
            return Promise.reject(c)
        }
    })
}

function rg(a) {
    return C(a, function*() {
        var b = yield Re();
        let c;
        b && null != B(b, 3) && (c = B(b, 3));
        return c ? (b = yield cg()) ? Promise.resolve(eg(b, c)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function sg(a, b, c) {
    return C(a, function*() {
        const d = yield Yf();
        if (d) try {
            yield $f(d, b)
        } catch (e) {
            yield Z(e)
        }
        b.push(c);
        try {
            yield Tf(this.h, b)
        } catch (e) {
            yield Z(e)
        }
        return Promise.resolve()
    })
}

function ug(a, b) {
    return C(a, function*() {
        return Sf(this.h, b)
    })
}

function vg(a) {
    return C(a, function*() {
        return Sf(this.h, this.i)
    })
}
var wg = class {
    constructor() {
        var a = self.location.origin + "/app_shell",
            b = self.location.origin + "/app_shell_home";
        this.h = self.caches;
        this.j = a;
        this.i = b
    }
};

function xg(a, b) {
    return C(a, function*() {
        const c = b.request,
            d = yield ug(this.h, c.url);
        if (d) return of({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: P()
        }), d;
        yg(c);
        return zg(b)
    })
}

function Ag(a, b) {
    return C(a, function*() {
        const c = yield Bg(this, b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield vg(this.h);
        if (d) return Cg(this), d;
        Dg(this);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function Eg(a, b) {
    b = new URL(b);
    if (!a.i.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    for (const c of a.l)
        if (a = b.searchParams.get(c.key), void 0 === c.value || a === c.value)
            if (b.searchParams.delete(c.key), !b.search) return !0;
    return !1
}

function Fg(a, b) {
    return C(a, function*() {
        const c = yield vg(this.h);
        if (!c) return Dg(this), zg(b);
        Cg(this);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(P() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return c;
        d = yield Bg(this, b);
        return d.response && d.response.ok ? d.response : c
    })
}

function zg(a) {
    return Promise.resolve(a.preloadResponse).then(b => b || p.fetch(a.request))
}

function yg(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    Yf().then(c => {
        if (c) {
            var d = bg(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = ag(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                Z(e)
            }).finally(() => { of ({
                    appShellAssetLoadReport: b,
                    timestamp: P()
                })
            })
        } else of({
            appShellAssetLoadReport: b,
            timestamp: P()
        })
    })
}

function Cg(a) { of ({
        appShellAssetLoadReport: {
            assetPath: a.h.i,
            cacheHit: !0
        },
        timestamp: P()
    })
}

function Dg(a) { of ({
        appShellAssetLoadReport: {
            assetPath: a.h.i,
            cacheHit: !1
        },
        timestamp: P()
    })
}

function Bg(a, b) {
    return C(a, function*() {
        try {
            return {
                response: yield zg(b)
            }
        } catch (c) {
            return {
                error: c
            }
        }
    })
}
var Lg = class {
    constructor() {
        var a = Gg,
            b = Hg,
            c = Ig,
            d = Jg;
        const e = [];
        e.push({
            key: "feature",
            value: "ytca"
        });
        for (var f of cb) e.push({
            key: f
        });
        f = Kg();
        this.h = a;
        this.m = b;
        this.B = c;
        this.i = d;
        this.l = e;
        this.j = f
    }
};
var Jg = ["/", "/feed/downloads"];
const Mg = [/^\/$/, /^\/feed\/downloads$/],
    Ng = [/^\/$/, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function Kg() {
    return new RegExp((M("kevlar_sw_app_wide_fallback") ? Ng : Mg).map(a => a.source).join("|"))
}
var Hg = /^https:\/\/[\w-]*\.?youtube\.com.*(\.css$|\.js$|\/ytmweb\/_\/js\/|\/ytmweb\/_\/ss\/)/,
    Ig = /^https:\/\/[\w-]*\.?youtube\.com.*(purge_shell=1|\/signin|\/logout)/;
var Og = class {
    constructor() {
        var a = Gg,
            b = new Lg;
        this.h = self;
        this.i = a;
        this.m = b;
        this.I = Xb
    }
    init() {
        this.h.oninstall = this.B.bind(this);
        this.h.onactivate = this.j.bind(this);
        this.h.onfetch = this.l.bind(this);
        this.h.onmessage = this.H.bind(this)
    }
    B(a) {
        a.waitUntil(this.h.skipWaiting());
        const b = tg(this.i).catch(c => {
            Z(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    j(a) {
        const b = [this.h.clients.claim()];
        this.h.registration.navigationPreload && b.push(this.h.registration.navigationPreload.enable());
        a.waitUntil(Promise.all(b))
    }
    l(a) {
        return C(this, function*() {
            var b = this.m,
                c = !!this.h.registration.navigationPreload;
            const d = a.request;
            if (b.B.test(d.url)) Se.h && (delete Se.h.h, p.__SAPISID = void 0, K("VISITOR_DATA", void 0), K("SESSION_INDEX", void 0), K("DELEGATED_SESSION_ID", void 0)), c = a.respondWith, b = b.h, Vf(b.h, b.i), hg(), b = zg(a), c.call(a, b);
            else if (b.m.test(d.url)) a.respondWith(xg(b,
                a));
            else if ("navigate" === d.mode) {
                const e = new URL(d.url);
                b.j.test(e.pathname) ? a.respondWith(Ag(b, a)) : Eg(b, d.url) ? a.respondWith(Fg(b, a)) : c && a.respondWith(zg(a))
            }
        })
    }
    H(a) {
        const b = a.data;
        this.I.includes(b.type) ? sf(a) : "refresh_shell" === b.type && pg(this.i).catch(c => {
            Z(c)
        })
    }
};

function Pg() {
    var a, b;
    return C(this, function*() {
        const c = navigator;
        if (null === (a = c.storage) || void 0 === a ? 0 : a.estimate) return c.storage.estimate();
        if (null === (b = c.webkitTemporaryStorage) || void 0 === b ? 0 : b.queryUsageAndQuota) return Qg()
    })
}

function Qg() {
    const a = navigator;
    return new Promise((b, c) => {
        var d;
        null !== (d = a.webkitTemporaryStorage) && void 0 !== d && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
};

function Rg(a, b) {
    Pg().then(c => {
        c = Object.assign(Object.assign({}, b), {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Sg(null === c || void 0 === c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Sg(null === c || void 0 === c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Tg {
    constructor() {
        var a = Ug;
        this.handleError = Vg;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= lc("ytidb_transaction_ended_event_rate_limit", .02)
    }
    M(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                M("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                M("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Rg(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a =
                    Object.assign(Object.assign({}, b), {
                        hasWindowUnloaded: this.i
                    }), this.h("idbTransactionAborted", a)
        }
    }
}

function Sg(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
Be(ye(), {
    A: [{
        sa: /Failed to fetch/,
        weight: 500
    }],
    u: []
});
var {
    handleError: Vg = function(a) {
        Oe(a)
    },
    M: Ug = ue
} = {
    handleError: mf,
    M: function(a, b) {
        return C(this, function*() {
            yield nf();
            ue(a, b)
        })
    }
};
for (S = new Tg; 0 < R.length;) {
    const a = R.shift();
    switch (a.type) {
        case "ERROR":
            S.handleError(a.payload);
            break;
        case "EVENT":
            S.M(a.eventType, a.payload)
    }
}
Se.h = new Se;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data,
        c = self.clients.matchAll({
            type: "window",
            includeUncontrolled: !0
        });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(zf(b.clickEndpoint))
};
self.onpush = function(a) {
    a.waitUntil(I("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return xf(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(vf())
};
self.onpushsubscriptionchange = function() {
    tf()
};
const Gg = new wg;
(new Og).init();