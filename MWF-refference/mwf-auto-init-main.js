/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-eventlistener-picture-printshiv-setclasses !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function a() {
        var e, t, n, a, o, c, l;
        for (var u in s)
            if (s.hasOwnProperty(u)) {
                if (e = [], t = s[u], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) c = e[o], l = c.split("."), 1 === l.length ? Modernizr[l[0]] = a : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = a), i.push((a ? "" : "no-") + l.join("-"))
            }
    }

    function o(e) {
        var t = l.className,
            n = Modernizr._config.classPrefix || "";
        if (u && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), u ? l.className.baseVal = t : l.className = t)
    }
    var i = [],
        s = [],
        c = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                s.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                s.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = c, Modernizr = new Modernizr, Modernizr.addTest("picture", "HTMLPictureElement" in e);
    var l = t.documentElement,
        u = "svg" === l.nodeName.toLowerCase();
    u || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = C.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e, t) {
            var n = C.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, l(t)
        }

        function o(e) {
            var t = S[e[T]];
            return t || (t = {}, N++, e[T] = N, S[N] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), v) return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : b.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || E.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function s(e, n) {
            if (e || (e = t), v) return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, s = r(), c = s.length; c > i; i++) a.createElement(s[i]);
            return a
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return C.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(C, t.frag)
        }

        function l(e) {
            e || (e = t);
            var r = o(e);
            return !C.shivCSS || h || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), v || c(e, r), e
        }

        function u(e) {
            for (var t, n = e.getElementsByTagName("*"), a = n.length, o = RegExp("^(?:" + r().join("|") + ")$", "i"), i = []; a--;) t = n[a], o.test(t.nodeName) && i.push(t.applyElement(f(t)));
            return i
        }

        function f(e) {
            for (var t, n = e.attributes, r = n.length, a = e.ownerDocument.createElement(x + ":" + e.nodeName); r--;) t = n[r], t.specified && a.setAttribute(t.nodeName, t.nodeValue);
            return a.style.cssText = e.style.cssText, a
        }

        function d(e) {
            for (var t, n = e.split("{"), a = n.length, o = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), i = "$1" + x + "\\:$2"; a--;) t = n[a] = n[a].split("}"), t[t.length - 1] = t[t.length - 1].replace(o, i), n[a] = t.join("}");
            return n.join("{")
        }

        function m(e) {
            for (var t = e.length; t--;) e[t].removeNode()
        }

        function p(e) {
            function t() {
                clearTimeout(i._removeSheetTimer), r && r.removeNode(!0), r = null
            }
            var r, a, i = o(e),
                s = e.namespaces,
                c = e.parentWindow;
            return !j || e.printShived ? e : ("undefined" == typeof s[x] && s.add(x), c.attachEvent("onbeforeprint", function() {
                t();
                for (var o, i, s, c = e.styleSheets, l = [], f = c.length, m = Array(f); f--;) m[f] = c[f];
                for (; s = m.pop();)
                    if (!s.disabled && _.test(s.media)) {
                        try {
                            o = s.imports, i = o.length
                        } catch (p) {
                            i = 0
                        }
                        for (f = 0; i > f; f++) m.push(o[f]);
                        try {
                            l.push(s.cssText)
                        } catch (p) {}
                    }
                l = d(l.reverse().join("")), a = u(e), r = n(e, l)
            }), c.attachEvent("onafterprint", function() {
                m(a), clearTimeout(i._removeSheetTimer), i._removeSheetTimer = setTimeout(t, 500)
            }), e.printShived = !0, e)
        }
        var h, v, g = "3.7.3",
            y = e.html5 || {},
            E = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            b = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            T = "_html5shiv",
            N = 0,
            S = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", h = "hidden" in e, v = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                h = !0, v = !0
            }
        }();
        var C = {
            elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: g,
            shivCSS: y.shivCSS !== !1,
            supportsUnknownElements: v,
            shivMethods: y.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = C, l(t);
        var _ = /^$|\b(?:all|print)\b/,
            x = "html5shiv",
            j = !v && function() {
                var n = t.documentElement;
                return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof n.applyElement || "undefined" == typeof n.removeNode || "undefined" == typeof e.attachEvent)
            }();
        C.type += " print", C.shivPrint = p, p(t), "object" == typeof module && module.exports && (module.exports = C)
    }("undefined" != typeof e ? e : this, t), Modernizr.addTest("eventlistener", "addEventListener" in e), a(), o(i), delete c.addTest, delete c.addAsyncTest;
    for (var f = 0; f < Modernizr._q.length; f++) Modernizr._q[f]();
    e.Modernizr = Modernizr
}(window, document);;
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
! function(a) {
    var b = navigator.userAgent;
    a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function() {
        var b, c = document.createElement("source"),
            d = function(a) {
                var b, d, e = a.parentNode;
                "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function() {
                    e.removeChild(b)
                })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function() {
                    a.sizes = d
                }))
            },
            e = function() {
                var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (a = 0; a < b.length; a++) d(b[a])
            },
            f = function() {
                clearTimeout(b), b = setTimeout(e, 99)
            },
            g = a.matchMedia && matchMedia("(orientation: landscape)"),
            h = function() {
                f(), g && g.addListener && g.addListener(f)
            };
        return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f
    }())
}(window),
function(a, b, c) {
    "use strict";

    function d(a) {
        return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
    }

    function e(b, c) {
        var d = new a.Image;
        return d.onerror = function() {
            A[b] = !1, ba()
        }, d.onload = function() {
            A[b] = 1 === d.width, ba()
        }, d.src = c, "pending"
    }

    function f() {
        M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, r = [Q.height, Q.width, P].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em
    }

    function g(a, b, c, d) {
        var e, f, g, h;
        return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c
    }

    function h(a) {
        var b, c = s.getSet(a),
            d = !1;
        "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d
    }

    function i(a, b) {
        return a.res - b.res
    }

    function j(a, b, c) {
        var d;
        return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d
    }

    function k(a, b) {
        var c, d, e;
        if (a && b)
            for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)
                if (a === s.makeUrl(e[c].url)) {
                    d = e[c];
                    break
                }
        return d
    }

    function l(a, b) {
        var c, d, e, f, g = a.getElementsByTagName("source");
        for (c = 0, d = g.length; d > c; c++) e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
            srcset: f,
            media: e.getAttribute("media"),
            type: e.getAttribute("type"),
            sizes: e.getAttribute("sizes")
        })
    }

    function m(a, b) {
        function c(b) {
            var c, d = b.exec(a.substring(m));
            return d ? (c = d[0], m += c.length, c) : void 0
        }

        function e() {
            var a, c, d, e, f, i, j, k, l, m = !1,
                o = {};
            for (e = 0; e < h.length; e++) f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
            m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o))
        }

        function f() {
            for (c(T), i = "", j = "in descriptor";;) {
                if (k = a.charAt(m), "in descriptor" === j)
                    if (d(k)) i && (h.push(i), i = "", j = "after descriptor");
                    else {
                        if ("," === k) return m += 1, i && h.push(i), void e();
                        if ("(" === k) i += k, j = "in parens";
                        else {
                            if ("" === k) return i && h.push(i), void e();
                            i += k
                        }
                    }
                else if ("in parens" === j)
                    if (")" === k) i += k, j = "in descriptor";
                    else {
                        if ("" === k) return h.push(i), void e();
                        i += k
                    }
                else if ("after descriptor" === j)
                    if (d(k));
                    else {
                        if ("" === k) return void e();
                        j = "in descriptor", m -= 1
                    }
                m += 1
            }
        }
        for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
            if (c(U), m >= l) return n;
            g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f()
        }
    }

    function n(a) {
        function b(a) {
            function b() {
                f && (g.push(f), f = "")
            }

            function c() {
                g[0] && (h.push(g), g = [])
            }
            for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
                if (e = a.charAt(j), "" === e) return b(), c(), h;
                if (k) {
                    if ("*" === e && "/" === a[j + 1]) {
                        k = !1, j += 2, b();
                        continue
                    }
                    j += 1
                } else {
                    if (d(e)) {
                        if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                            j += 1;
                            continue
                        }
                        if (0 === i) {
                            b(), j += 1;
                            continue
                        }
                        e = " "
                    } else if ("(" === e) i += 1;
                    else if (")" === e) i -= 1;
                    else {
                        if ("," === e) {
                            b(), c(), j += 1;
                            continue
                        }
                        if ("/" === e && "*" === a.charAt(j + 1)) {
                            k = !0, j += 2;
                            continue
                        }
                    }
                    f += e, j += 1
                }
            }
        }

        function c(a) {
            return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
        }
        var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (f = b(a), g = f.length, e = 0; g > e; e++)
            if (h = f[e], i = h[h.length - 1], c(i)) {
                if (j = i, h.pop(), 0 === h.length) return j;
                if (h = h.join(" "), s.matchesMedia(h)) return j
            }
        return "100vw"
    }
    b.createElement("picture");
    var o, p, q, r, s = {},
        t = !1,
        u = function() {},
        v = b.createElement("img"),
        w = v.getAttribute,
        x = v.setAttribute,
        y = v.removeAttribute,
        z = b.documentElement,
        A = {},
        B = {
            algorithm: ""
        },
        C = "data-pfsrc",
        D = C + "set",
        E = navigator.userAgent,
        F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        G = "currentSrc",
        H = /\s+\+?\d+(e\d+)?w/,
        I = /(\([^)]+\))?\s*(.+)/,
        J = a.picturefillCFG,
        K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        L = "font-size:100%!important;",
        M = !0,
        N = {},
        O = {},
        P = a.devicePixelRatio,
        Q = {
            px: 1,
            "in": 96
        },
        R = b.createElement("a"),
        S = !1,
        T = /^[ \t\n\r\u000c]+/,
        U = /^[, \t\n\r\u000c]+/,
        V = /^[^ \t\n\r\u000c]+/,
        W = /[,]+$/,
        X = /^\d+$/,
        Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        Z = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        $ = function(a) {
            var b = {};
            return function(c) {
                return c in b || (b[c] = a(c)), b[c]
            }
        },
        _ = function() {
            var a = /^([\d\.]+)(em|vw|px)$/,
                b = function() {
                    for (var a = arguments, b = 0, c = a[0]; ++b in a;) c = c.replace(a[b], a[++b]);
                    return c
                },
                c = $(function(a) {
                    return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function(b, d) {
                var e;
                if (!(b in N))
                    if (N[b] = !1, d && (e = b.match(a))) N[b] = e[1] * Q[e[2]];
                    else try {
                        N[b] = new Function("e", c(b))(Q)
                    } catch (f) {}
                    return N[b]
            }
        }(),
        aa = function(a, b) {
            return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a
        },
        ba = function(a) {
            if (t) {
                var c, d, e, f = a || {};
                if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
                    for (s.setupRun(f), S = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
                    s.teardownRun(f)
                }
            }
        };
    o = a.console && console.warn ? function(a) {
        console.warn(a)
    } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in v, s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && ! function(a) {
        v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture
    }(b.createElement("img")), s.supSrcset && !s.supSizes ? ! function() {
        var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
            c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            d = b.createElement("img"),
            e = function() {
                var a = d.width;
                2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba)
            };
        d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", d.src = c
    }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function(a) {
        return R.href = a, R.href
    }), s.qsa = function(a, b) {
        return "querySelector" in a ? a.querySelectorAll(b) : []
    }, s.matchesMedia = function() {
        return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) {
            return !a || matchMedia(a).matches
        } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments)
    }, s.mMQ = function(a) {
        return a ? _(a) : !0
    }, s.calcLength = function(a) {
        var b = _(a, !0) || !1;
        return 0 > b && (b = !1), b
    }, s.supportsType = function(a) {
        return a ? A[a] : !0
    }, s.parseSize = $(function(a) {
        var b = (a || "").match(I);
        return {
            media: b && b[1],
            length: b && b[2]
        }
    }), s.parseSet = function(a) {
        return a.cands || (a.cands = m(a.srcset, a)), a.cands
    }, s.getEmValue = function() {
        var a;
        if (!p && (a = b.body)) {
            var c = b.createElement("div"),
                d = z.style.cssText,
                e = a.style.cssText;
            c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, a.style.cssText = e
        }
        return p || 16
    }, s.calcListLength = function(a) {
        if (!(a in O) || B.uT) {
            var b = s.calcLength(n(a));
            O[a] = b ? b : Q.width
        }
        return O[a]
    }, s.setRes = function(a) {
        var b;
        if (a) {
            b = s.parseSet(a);
            for (var c = 0, d = b.length; d > c; c++) aa(b[c], a.sizes)
        }
        return b
    }, s.setRes.res = aa, s.applySetCandidate = function(a, b) {
        if (a.length) {
            var c, d, e, f, h, k, l, m, n, o = b[s.ns],
                p = s.DPR;
            if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h)
                for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)
                    if (c = a[d], c.res >= p) {
                        e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                        break
                    }
            h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b))
        }
    }, s.setSrc = function(a, b) {
        var c;
        a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c))
    }, s.getSet = function(a) {
        var b, c, d, e = !1,
            f = a[s.ns].sets;
        for (b = 0; b < f.length && !e; b++)
            if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                "pending" === d && (c = d), e = c;
                break
            }
        return e
    }, s.parseSets = function(a, b, d) {
        var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(),
            j = a[s.ns];
        (j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
            srcset: j.srcset,
            sizes: w.call(a, "sizes")
        }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({
            url: j.src,
            d: 1,
            set: f
        }))) : j.src && j.sets.push({
            srcset: j.src,
            sizes: null
        }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0
    }, s.fillImg = function(a, b) {
        var c, d = b.reselect || b.reevaluate;
        a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a))
    }, s.setupRun = function() {
        (!S || M || P !== a.devicePixelRatio) && f()
    }, s.supPicture ? (ba = u, s.fillImg = u) : ! function() {
        var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            e = function() {
                var a = b.readyState || "";
                f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f))
            },
            f = setTimeout(e, b.body ? 9 : 99),
            g = function(a, b) {
                var c, d, e = function() {
                    var f = new Date - d;
                    b > f ? c = setTimeout(e, b - f) : (c = null, a())
                };
                return function() {
                    d = new Date, c || (c = setTimeout(e, b))
                }
            },
            h = z.clientHeight,
            i = function() {
                M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, h = z.clientHeight, M && s.fillImgs()
            };
        Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e)
    }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = {
        pf: s,
        push: function(a) {
            var b = a.shift();
            "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; J && J.length;) a.picturefillCFG.push(J.shift());
    a.picturefill = ba, "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function() {
        return ba
    }), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);
var mwfAutoInit = function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, i) {
    var n, s;
    n = [i, t, i(73)], s = function(e, t, i) {
        "use strict";

        function n(e) {
            for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i])
        }
        n(i)
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.onMenuClick = function(e) {
                    i.handleMenuInteraction(n.getEventTargetOrSrcElement(e))
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.menus = n.selectElements(t.navigationMenuSelector, this.element), 0 !== this.menus.length)
                    for (var e = 0, i = this.menus; e < i.length; e++) {
                        var s = i[e];
                        n.addEvent(s, n.eventTypes.click, this.onMenuClick)
                    }
            }, t.prototype.teardown = function() {
                for (var e = 0, t = this.menus; e < t.length; e++) {
                    var i = t[e];
                    n.removeEvent(i, n.eventTypes.click, this.onMenuClick)
                }
            }, t.prototype.hideMenu = function(e, i) {
                e.setAttribute(t.ariaHidden, "true"), i.setAttribute(t.ariaExpanded, "false")
            }, t.prototype.handleMenuInteraction = function(e) {
                for (var i = 0, s = this.menus; i < s.length; i++) {
                    var o = s[i],
                        r = n.selectFirstElement("button", o),
                        a = r.getAttribute(t.ariaControls),
                        l = r.getAttribute(t.ariaExpanded),
                        h = e.getAttribute(t.ariaControls);
                    if ("true" === l && a !== h) {
                        var c = n.selectFirstElement("button", o),
                            u = n.selectFirstElement("button + ul", o);
                        "f-sub-menu" !== e.parentElement.className && this.hideMenu(u, c)
                    }
                }
            }, t.selector = ".m-navigation-bar", t.typeName = "NavigationBar", t.navigationMenuSelector = ".c-navigation-menu", t.ariaControls = "aria-controls", t.ariaExpanded = "aria-expanded", t.ariaHidden = "aria-hidden", t
        }(i.ObservableComponent);
        t.NavigationBar = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(3)], s = function(e, t, i) {
        "use strict";
        var n = function() {
            function e(t, i) {
                void 0 === i && (i = null), this.element = t, this.ignoreNextDOMChange = !1, this.observing = !1, e.shouldInitializeAsClass(t, i) && this.setObserver()
            }
            return e.prototype.isObserving = function() {
                return this.observing
            }, e.prototype.unObserve = function() {
                this.observing = !1, this.modernObserver && this.modernObserver.disconnect(), i.removeEvent(this.element, i.eventTypes.DOMNodeInserted, this.obsoleteNodeInsertedEventHander), i.removeEvent(this.element, i.eventTypes.DOMNodeRemoved, this.obsoleteNodeRemovedEventHandler)
            }, e.prototype.setObserver = function() {
                this.observing = !0, "undefined" != typeof e.mutationObserver ? this.observeModern() : "MutationEvent" in window && this.observeObsolete()
            }, e.prototype.observeModern = function() {
                var e = this,
                    t = {
                        childList: !0,
                        subtree: !0
                    };
                this.modernObserver = new MutationObserver(function(t) {
                    e.onModernMutations(t)
                }), this.modernObserver.observe(this.element, t)
            }, e.prototype.onModernMutations = function(e) {
                if (this.ignoreNextDOMChange) return void(this.ignoreNextDOMChange = !1);
                for (var t = !1, i = !1, n = 0, s = e; n < s.length; n++) {
                    for (var o = s[n], r = 0, a = o.addedNodes.length; r < a; r++) 1 === o.addedNodes[r].nodeType && (t = !0, i = !0);
                    for (var r = 0, l = o.removedNodes.length; r < l; r++) 1 === o.removedNodes[r].nodeType && (t = !0, o.removedNodes[r] !== this.element && (i = !0))
                }
                t && this.teardown(), i && this.update()
            }, e.prototype.observeObsolete = function() {
                var e = this;
                this.obsoleteNodeInsertedEventHander = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeInserted, function() {
                    e.onObsoleteNodeInserted()
                }), this.obsoleteNodeRemovedEventHandler = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeRemoved, function(t) {
                    e.onObsoleteNodeRemoved(t)
                })
            }, e.prototype.onObsoleteNodeInserted = function() {
                this.ignoreNextDOMChange || (this.teardown(), this.update())
            }, e.prototype.onObsoleteNodeRemoved = function(e) {
                this.ignoreNextDOMChange || (this.teardown(), i.getEventTargetOrSrcElement(e) !== this.element && this.update())
            }, e.shouldInitializeAsClass = function(t, i) {
                var n = t ? t.getAttribute(e.mwfClassAttribute) : null,
                    s = t ? t.getAttribute(e.initializeAttribute) : null;
                return "false" !== s && (!!t && (!n || !!i && n === i.mwfClass))
            }, e.mwfClassAttribute = "data-mwf-class", e.initializeAttribute = "data-js-initialize", e.mutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, e
        }();
        t.ObservableComponent = n
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(4)], s = function(e, t, i) {
        "use strict";

        function n(e, t, i, n) {
            void 0 === n && (n = !1);
            for (var s = 0, o = O(e); s < o.length; s++) {
                var r = o[s];
                W(r, i, n, Q[t])
            }
        }

        function s(e, t, n, s) {
            if (void 0 === s && (s = !1), !i.isNullOrWhiteSpace(t))
                for (var o = 0, r = O(e); o < r.length; o++)
                    for (var a = r[o], l = 0, h = t.split(/\s+/); l < h.length; l++) {
                        var c = h[l];
                        i.isNullOrWhiteSpace(c) || W(a, n, s, c)
                    }
        }

        function o(e, t, n, s) {
            void 0 === s && (s = !1);
            for (var o = 0, r = O(e); o < r.length; o++)
                for (var a = r[o], l = 0, h = O(t); l < h.length; l++) {
                    var c = h[l];
                    i.isNullOrWhiteSpace(c) || z(a, n, s, c)
                }
        }

        function r(e) {
            e = L(e), e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }

        function a(e, t, i, s) {
            void 0 === s && (s = 150);
            var o, r = 0,
                a = function(e) {
                    var t = Date.now();
                    clearTimeout(o), r && t < r + s ? o = setTimeout(function() {
                        r = t, i(e)
                    }, s - (t - r)) : (r = t, i(e))
                };
            return n(e, t, a), a
        }

        function l(e, t, n, s, o) {
            function r(e) {
                var t, i = 0,
                    n = function(n) {
                        var s = Date.now();
                        clearTimeout(t), i && s < i + o ? t = setTimeout(function() {
                            i = s, e(n)
                        }, o - (s - i)) : (i = s, e(n))
                    };
                return n
            }
            if (void 0 === s && (s = !1), void 0 === o && (o = 150), !i.isNullOrWhiteSpace(t))
                for (var a = 0, l = O(e); a < l.length; a++)
                    for (var h = l[a], c = 0, u = t.split(/\s+/); c < u.length; c++) {
                        var d = u[c];
                        if (!i.isNullOrWhiteSpace(d)) {
                            var p = r(n);
                            W(h, p, s, d)
                        }
                    }
        }

        function h(e, t, i, s) {
            void 0 === s && (s = 150);
            var o, r = function(e) {
                window.clearTimeout(o), o = setTimeout(function() {
                    i(e)
                }, s)
            };
            return n(e, t, r), r
        }

        function c(e, t) {
            if (void 0 === t && (t = 5e3), "complete" === document.readyState) return void e.call(null);
            if (!document.attachEvent && "interactive" === document.readyState) return void e.call(null);
            var i, s, o, r = function(t) {
                clearTimeout(i), s && P(document, Q.DOMContentLoaded, s), o && P(document, Q.onreadystatechange, o), J.requestAnimationFrame.call(window, e)
            };
            return i = setTimeout(function() {
                r("timedout")
            }, t), document.addEventListener ? (s = function() {
                r("domcontentloaded")
            }, void n(document, Q.DOMContentLoaded, s, !1)) : void(document.attachEvent && (o = function() {
                "complete" === document.readyState && r("readystatecomplete")
            }, n(document, Q.onreadystatechange, o, !1)))
        }

        function u(e, t) {
            void 0 === t && (t = 5e3);
            var i, s = setTimeout(function() {
                clearTimeout(s), P(window, Q.load, i), e.call(null)
            }, t);
            i = function() {
                clearTimeout(s), J.requestAnimationFrame.call(window, e)
            }, "complete" === document.readyState ? (clearTimeout(s), e.call(null)) : n(window, Q.load, i)
        }

        function d(e, t) {
            !e || i.isNullOrWhiteSpace(t) || g(e, t) || (e.classList ? e.classList.add(t) : e.className = i.trim(e.className + " " + t))
        }

        function p(e, t) {
            if (e && !i.isNullOrWhiteSpace(t))
                for (var n = 0, s = O(e); n < s.length; n++) {
                    var o = s[n];
                    o.className && (o.className = i.trim((" " + o.className + " ").replace(" " + i.trim(t) + " ", " ")))
                }
        }

        function m(e, t) {
            if (t)
                for (var i = 0, n = t; i < n.length; i++) {
                    var s = n[i];
                    p(e, s)
                }
        }

        function v(e, t) {
            if (t)
                for (var i = 0, n = t; i < n.length; i++) {
                    var s = n[i];
                    d(e, s)
                }
        }

        function f(e, t) {
            if (e && t)
                for (var n = 0, s = t; n < s.length; n++) {
                    var o = s[n];
                    i.isNullOrWhiteSpace(o.name) || i.isNullOrWhiteSpace(o.value) || e.setAttribute(o.name, o.value)
                }
        }

        function g(e, t) {
            return !(!e || i.isNullOrWhiteSpace(t) || i.isNullOrWhiteSpace(e.className)) && (" " + e.className + " ").indexOf(" " + i.trim(t) + " ") > -1
        }

        function y(e) {
            return e ? e.parentElement.removeChild(e) : e
        }

        function b(e, t) {
            return w(e, t)
        }

        function C(e, t) {
            var i = w(e, t);
            return i && i.length ? i[0] : null
        }

        function w(e, t) {
            if (i.isNullOrWhiteSpace(e)) return [];
            var n = t || document;
            if (/^[\#.]?[\w-]+$/.test(e)) {
                switch (e[0]) {
                    case ".":
                        return S(n.getElementsByClassName ? n.getElementsByClassName(e.slice(1)) : n.querySelectorAll(e));
                    case "#":
                        var s = n.querySelector(e);
                        return s ? [s] : []
                }
                return S(n.getElementsByTagName(e))
            }
            return S(n.querySelectorAll(e))
        }

        function E(e, t) {
            var i = w(e, t);
            return i && i.length ? i[0] : null
        }

        function T(e, t) {
            var i, n, s = t || document;
            i = e.split(",");
            for (var o = 0, r = i; o < r.length; o++) {
                var a = r[o];
                n += this.selectElements(a, s)
            }
            return n
        }

        function S(e) {
            if (!e) return [];
            for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
            return t
        }

        function A(e) {
            for (void 0 === e && (e = document.documentElement); null !== e;) {
                var t = e.getAttribute("dir");
                if (t) return "rtl" === t ? $.right : $.left;
                e = e.parentElement
            }
            return $.left
        }

        function x(e) {
            if (e) {
                var t = e.getBoundingClientRect(),
                    i = {};
                for (var n in t) i[n] = t[n];
                return "undefined" == typeof i.width && (i.width = e.offsetWidth), "undefined" == typeof i.height && (i.height = e.offsetHeight), i
            }
        }

        function k(e) {
            if (e) return {
                width: parseFloat(x(e).width) + parseFloat(I(e, "margin-left")) + parseFloat(I(e, "margin-right")),
                height: parseFloat(x(e).height) + parseFloat(I(e, "margin-top")) + parseFloat(I(e, "margin-bottom"))
            }
        }

        function I(e, t, n) {
            return e ? n || "" === n ? void(e.style[t] = n) : (n = e.style[t], i.isNullOrWhiteSpace(n) && (n = getComputedStyle(e), n = n[t]), n) : null
        }

        function P(e, t, i, n) {
            if (e && t && i)
                for (var s = 0, o = O(e); s < o.length; s++) {
                    var r = o[s];
                    z(r, i, n, Q[t])
                }
        }

        function M(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === {}.toString.call(e)
        }

        function O(e) {
            return M(e) ? e : [e]
        }

        function N(e, t) {
            if (!e || !t) return null;
            for (var i = t.parentNode; null != i;) {
                if (i === e) return !0;
                i = i.parentNode
            }
            return !1
        }

        function F(e, t) {
            return e && t ? e === t || N(e, t) : null
        }

        function B(e) {
            return e ? e.textContent || e.innerText || "" : ""
        }

        function D(e, t) {
            e && null !== t && (e.textContent ? e.textContent = t : e.innerHTML = t)
        }

        function H(e) {
            e && (e.innerHTML = "")
        }

        function R(e) {
            return e = L(e), e.target || e.srcElement
        }

        function L(e) {
            return e || window.event
        }

        function W(e, t, i, n) {
            void 0 === i && (i = !1), e && (window.addEventListener ? e.addEventListener(n, t, i) : e.attachEvent("on" + n, t))
        }

        function z(e, t, i, n) {
            void 0 === i && (i = !1), e && (window.removeEventListener ? e.removeEventListener(n, t, i) : e.detachEvent("on" + n, t))
        }

        function V(e, t, i) {
            if (void 0 === i && (i = {}), !e || !t) return null;
            var n = "string" == typeof t ? t : Q[t],
                s = null;
            return i.bubbles = "undefined" == typeof i.bubbles || i.bubbles, i.cancelable = "undefined" == typeof i.cancelable || i.cancelable, window.CustomEvent && "function" == typeof window.CustomEvent ? s = new CustomEvent(n, i) : document.createEvent ? (s = document.createEvent("CustomEvent"), s.initCustomEvent(n, i.bubbles, i.cancelable, i.detail)) : (s = document.createEventObject(), e.fireEvent("on" + n, s)), e.dispatchEvent(s), s
        }

        function K(e) {
            e.stopPropagation ? e.stopPropagation() : e.returnValue = !1
        }

        function j(e) {
            return void 0 === e && (e = window), e.scrollY || e.pageYOffset || ("CSS1Compat" === e.document.compatMode ? e.document.documentElement.scrollTop : e.document.body.scrollTop)
        }

        function _(e) {
            if (!e) return window.document.documentElement;
            for (var t = e.ownerDocument.documentElement, i = e.offsetParent; i && "static" == I(i, "position");) i = i.offsetParent;
            return i || t
        }

        function U(e, t) {
            if (e && t) {
                var i = t.clientHeight,
                    n = t.scrollHeight;
                n > i && (t.scrollTop = Math.min(e.offsetTop - t.firstElementChild.offsetTop, n - i))
            }
        }

        function q(e) {
            return "undefined" == typeof e.complete || "undefined" == typeof e.naturalHeight || e && e.complete && e.naturalHeight > 0
        }

        function Y(e) {
            var t = e.touches && e.touches.length ? e.touches : [e],
                i = e.changedTouches && e.changedTouches[0] || t[0];
            return {
                x: i.clientX,
                y: i.clientY
            }
        }

        function X(e, t) {
            for (var i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector; e && !i.call(e, t);) e = e.parentElement;
            return e
        }

        function G(e, t) {
            void 0 === t && (t = !0), e && window.navigator.pointerEnabled && I(e, "touchAction", t ? "pan-y" : "pan-x")
        }
        var J;
        ! function(e) {
            e.requestAnimationFrame = window.requestAnimationFrame || function(e) {
                "function" == typeof e && window.setTimeout(e, 16.7)
            }
        }(J = t.SafeBrowserApis || (t.SafeBrowserApis = {})),
        function(e) {
            e[e.right = 0] = "right", e[e.left = 1] = "left"
        }(t.Direction || (t.Direction = {}));
        var $ = t.Direction;
        ! function(e) {
            e[e.animationend = 0] = "animationend", e[e.blur = 1] = "blur", e[e.change = 2] = "change", e[e.click = 3] = "click", e[e.DOMContentLoaded = 4] = "DOMContentLoaded", e[e.DOMNodeInserted = 5] = "DOMNodeInserted", e[e.DOMNodeRemoved = 6] = "DOMNodeRemoved", e[e.ended = 7] = "ended", e[e.error = 8] = "error", e[e.focus = 9] = "focus", e[e.focusin = 10] = "focusin", e[e.load = 11] = "load", e[e.keydown = 12] = "keydown", e[e.keypress = 13] = "keypress", e[e.keyup = 14] = "keyup", e[e.loadedmetadata = 15] = "loadedmetadata", e[e.mousedown = 16] = "mousedown", e[e.mousemove = 17] = "mousemove", e[e.mouseout = 18] = "mouseout", e[e.mouseover = 19] = "mouseover", e[e.mouseup = 20] = "mouseup", e[e.onreadystatechange = 21] = "onreadystatechange", e[e.resize = 22] = "resize", e[e.scroll = 23] = "scroll", e[e.submit = 24] = "submit", e[e.timeupdate = 25] = "timeupdate", e[e.touchstart = 26] = "touchstart", e[e.touchend = 27] = "touchend", e[e.wheel = 28] = "wheel"
        }(t.eventTypes || (t.eventTypes = {}));
        var Q = t.eventTypes;
        t.addEvent = n, t.addEvents = s, t.removeEvents = o, t.preventDefault = r, t.addThrottledEvent = a, t.addThrottledEvents = l, t.addDebouncedEvent = h, t.documentReady = c, t.onDeferred = u, t.addClass = d, t.removeClass = p, t.removeClasses = m, t.addClasses = v, t.addAttribute = f, t.hasClass = g, t.removeElement = y, t.selectElements = b, t.selectFirstElement = C, t.selectElementsT = w, t.selectFirstElementT = E, t.selectElementsFromSelectors = T, t.nodeListToArray = S, t.getDirection = A, t.getClientRect = x, t.getClientRectWithMargin = k, t.css = I, t.removeEvent = P, t.isArray = M, t.toArray = O, t.isDescendent = N, t.isDescendentOrSelf = F, t.getText = B, t.setText = D, t.removeInnerHtml = H, t.getEventTargetOrSrcElement = R, t.getEvent = L, t.customEvent = V, t.stopPropagation = K, t.getScrollY = j, t.getOffsetParent = _, t.scrollElementIntoView = U, t.isImageLoadedSuccessfully = q, t.getCoordinates = Y, t.getParent = X, t.preventDefaultSwipeAction = G
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t], s = function(e, t) {
        "use strict";

        function i(e) {
            return !e || !n(e)
        }

        function n(e) {
            return e ? e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") : e
        }

        function s(e, t, i) {
            return void 0 === i && (i = !0), !(!e || !t) && (i && (e = e.toLocaleLowerCase(), t = t.toLocaleLowerCase()), e.startsWith ? e.startsWith(t) : 0 === e.indexOf(t))
        }

        function o(e, t, i) {
            return void 0 === i && (i = !0), !(!e || !t) && (i && (e = e.toLocaleLowerCase(), t = t.toLocaleLowerCase()), e.endsWith ? e.endsWith(t) : e.lastIndexOf(t) === e.length - t.length)
        }

        function r(e, t, i) {
            if (void 0 === i && (i = !0), !e || !t) return 0;
            var n = 0;
            for (i && (e = e.toLocaleLowerCase(), t = t.toLocaleLowerCase()); e.charCodeAt(n) === t.charCodeAt(n);) n++;
            return n
        }

        function a(e) {
            for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
            return e.replace(/{(\d+)}/g, function(e, i) {
                if (i >= t.length) return e;
                var n = t[i];
                return "number" == typeof n || n ? "string" == typeof n ? n : n.toString() : ""
            })
        }
        t.isNullOrWhiteSpace = i, t.trim = n, t.startsWith = s, t.endsWith = o, t.getMatchLength = r, t.format = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(i) {
                var n = this;
                e.call(this, i), this.toggleOverflow = function() {
                    n.showOverflow ? (n.overflow.setAttribute(t.ariaHiddenAttribute, "true"), n.overflowToggle.setAttribute(t.ariaExpandedAttribute, "false"), n.showOverflow = !1) : (n.overflow.setAttribute(t.ariaHiddenAttribute, "false"), n.overflowToggle.setAttribute(t.ariaExpandedAttribute, "true"), n.showOverflow = !0)
                }, this.handleWindowResize = function() {
                    n.updateWidth(), n.linksClipped()
                }, i && this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.overflow = n.selectFirstElement(t.overflowSelector, this.element), this.overflowToggle = n.selectFirstElement(t.overflowToggleSelector, this.element), this.barLinks = this.getBarLinks(), this.staticOverflowLinks = this.getStaticOverflowLinks(), this.linksWidth = this.getLinksWidth(), this.totalLinksWidth = this.getTotalLinksWidth(), this.overflowToggleWidth = n.getClientRect(this.overflowToggle).width, this.showOverflow = !(!this.overflowToggle.hasAttribute(t.ariaHiddenAttribute) || !this.overflowToggle.getAttribute(t.ariaHiddenAttribute)), this.duplicateLinksToOverflow(), this.handleWindowResize(), n.addEvent(this.overflowToggle, n.eventTypes.click, this.toggleOverflow), this.resizeThrottledEventHandler = n.addThrottledEvent(window, n.eventTypes.resize, this.handleWindowResize)
            }, t.prototype.teardown = function() {
                n.removeEvent(this.overflowToggle, n.eventTypes.click, this.toggleOverflow), n.removeEvent(window, n.eventTypes.resize, this.resizeThrottledEventHandler)
            }, t.prototype.duplicateLinksToOverflow = function() {
                var e = document.createElement("li"),
                    t = document.createElement("ul");
                this.overflowLinks = [], this.setDataAttributes();
                for (var i = 0, n = this.barLinks; i < n.length; i++) {
                    var s = n[i],
                        o = s.cloneNode(!0);
                    this.overflowLinks.push(o), t.appendChild(o)
                }
                e.appendChild(t), this.ignoreNextDOMChange = !0, this.overflow.insertBefore(e, this.staticOverflowLinks[0])
            }, t.prototype.getStaticOverflowLinks = function() {
                for (var e = n.selectElements(t.overflowLinkSelector, this.element), i = [], s = 0, o = e; s < o.length; s++) {
                    var r = o[s];
                    n.hasClass(r, t.overflowClass) || i.push(r)
                }
                return i
            }, t.prototype.updateWidth = function() {
                this.width = n.getClientRect(this.overflowToggle).right - n.getClientRect(this.barLinks[0]).left
            }, t.prototype.getBarLinks = function() {
                for (var e = n.selectElements(t.barLinkSelector, this.element), i = [], s = 0, o = e; s < o.length; s++) {
                    var r = o[s];
                    n.hasClass(r, t.overflowClass) || i.push(r)
                }
                return i
            }, t.prototype.getLinksWidth = function() {
                for (var e = [], i = 0, s = this.barLinks; i < s.length; i++) {
                    var o = s[i];
                    n.hasClass(o, t.overflowClass) || e.push(n.getClientRect(o).width)
                }
                return e
            }, t.prototype.getTotalLinksWidth = function() {
                for (var e = 0, t = 0, i = this.linksWidth; t < i.length; t++) {
                    var n = i[t];
                    e += n
                }
                return e
            }, t.prototype.linksClipped = function() {
                this.barLinkIds = [], this.overflowLinkIds = [];
                for (var e = 0, t = this.width - this.overflowToggleWidth, i = 0, n = 0, s = this.barLinks.length; n < s; n++) i += this.linksWidth[n], i < t ? (this.barLinkIds.push(n), e++) : this.overflowLinkIds.push(n);
                this.toggleLinks()
            }, t.prototype.setDataAttributes = function() {
                for (var e = 0, i = this.barLinks.length; e < i; e++) this.barLinks[e].setAttribute(t.overflowIdAttribute, String(e)), this.barLinks[e].setAttribute(t.overflowAttribute, "false")
            }, t.prototype.showOverflowLink = function(e) {
                this.barLinks[e].setAttribute(t.overflowAttribute, "true"), this.overflowLinks[e].setAttribute(t.overflowAttribute, "true")
            }, t.prototype.hideOverflowLink = function(e) {
                this.barLinks[e].setAttribute(t.overflowAttribute, "false"), this.overflowLinks[e].setAttribute(t.overflowAttribute, "false")
            }, t.prototype.toggleLinks = function() {
                for (var e = 0, t = this.overflowLinkIds; e < t.length; e++) {
                    var i = t[e];
                    this.showOverflowLink(i)
                }
                for (var n = 0, s = this.barLinkIds; n < s.length; n++) {
                    var i = s[n];
                    this.hideOverflowLink(i)
                }
            }, t.selector = ".m-action-bar", t.typeName = "ActionBar", t.overflowClass = "f-overflow", t.ariaHiddenAttribute = "aria-hidden", t.ariaExpandedAttribute = "aria-expanded", t.overflowSelector = t.selector + " > .f-overflow > ul", t.overflowLinkSelector = t.overflowSelector + " > li", t.overflowToggleSelector = t.selector + " > .f-overflow > button", t.barLinkSelector = t.selector + " > li", t.overflowAttribute = "data-overflow", t.overflowIdAttribute = "data-overflow-id", t
        }(i.ObservableComponent);
        t.ActionBar = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(8), i(3)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.onTriggerClick = function(e) {
                    e = s.getEvent(e), s.preventDefault(e), i.disabled || i.onTriggerToggled()
                }, this.onItemClick = function(e) {
                    e = s.getEvent(e);
                    var t = e.currentTarget;
                    t.hasAttribute("aria-disabled") || (i.onItemSelected(t), i.collapse())
                }, this.onNonActionMenuClick = function(e) {
                    if (e = s.getEvent(e), i.element && i.menu) {
                        var t = s.getEventTargetOrSrcElement(e);
                        i.element.contains(t) || t !== i.menu && t.parentElement !== i.menu && i.collapse()
                    }
                }, this.onTriggerKeyPress = function(e) {
                    e = s.getEvent(e);
                    var t = n.getKeyCode(e);
                    switch (t) {
                        case 13:
                        case 32:
                            if (s.preventDefault(e), !i.disabled) {
                                var o = i.items[0];
                                i.onTriggerToggled(), o.setAttribute("tabindex", "0"), o.focus()
                            }
                    }
                }, this.handleMenuKeydownEvent = function(e) {
                    e = s.getEvent(e);
                    var t = n.getKeyCode(e);
                    (9 !== t || i.isExpanded()) && s.preventDefault(e), i.handleMenuKeydown(s.getEventTargetOrSrcElement(e), t)
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.trigger = s.selectFirstElement(t.triggerSelector, this.element), this.menu = s.selectFirstElement(t.menuSelector, this.element), this.items = s.selectElementsT('li[class^="f-context-"]', this.element), this.disabled = this.trigger.hasAttribute("disabled"), this.trigger && this.menu && this.items && this.items.length) {
                    var e = this.isExpanded();
                    this.addEventListeners(), e && this.expand()
                }
            }, t.prototype.teardown = function() {
                this.trigger && this.menu && this.items && this.items.length && this.removeEventListeners(), this.trigger = null, this.menu = null, this.items = null, this.selectedItem = null
            }, t.prototype.isExpanded = function() {
                return "true" === this.trigger.getAttribute(t.ariaExpanded)
            }, t.prototype.expand = function() {
                s.removeClass(this.trigger, "x-hidden-focus"), s.addClass(this.trigger, "f-active"), this.trigger.setAttribute(t.ariaExpanded, "true")
            }, t.prototype.collapse = function() {
                s.removeClass(this.trigger, "f-active"), this.trigger.setAttribute(t.ariaExpanded, "false")
            }, t.prototype.addEventListeners = function() {
                s.addEvent(this.trigger, s.eventTypes.click, this.onTriggerClick), s.addEvent(this.trigger, s.eventTypes.keydown, this.onTriggerKeyPress), s.addEvent(this.menu, s.eventTypes.keydown, this.handleMenuKeydownEvent, !0);
                for (var e = 0, t = this.items; e < t.length; e++) {
                    var i = t[e];
                    s.addEvent(i, s.eventTypes.click, this.onItemClick)
                }
                s.addEvent(document, s.eventTypes.click, this.onNonActionMenuClick)
            }, t.prototype.removeEventListeners = function() {
                s.removeEvent(this.trigger, s.eventTypes.click, this.onTriggerClick), s.removeEvent(this.trigger, s.eventTypes.keydown, this.onTriggerKeyPress), s.removeEvent(this.menu, s.eventTypes.keydown, this.handleMenuKeydownEvent, !0);
                for (var e = 0, t = this.items; e < t.length; e++) {
                    var i = t[e];
                    s.removeEvent(i, s.eventTypes.click, this.onItemClick)
                }
                s.removeEvent(document, s.eventTypes.click, this.onNonActionMenuClick)
            }, t.prototype.onTriggerToggled = function() {
                this.isExpanded() ? this.collapse() : this.expand()
            }, t.prototype.onItemSelected = function(e) {
                this.selectedItem = e;
                var i = "menuitemcheckbox" === this.selectedItem.getAttribute("role");
                if (i) {
                    var n = "true" === this.selectedItem.getAttribute(t.ariaChecked);
                    n ? this.selectedItem.setAttribute(t.ariaChecked, "false") : this.selectedItem.setAttribute(t.ariaChecked, "true"), this.initiatePublish({
                        id: this.selectedItem.id,
                        checked: !n
                    })
                } else this.initiatePublish({
                    id: this.selectedItem.id
                })
            }, t.prototype.publish = function(e, t) {
                this.selectedItem && e.onSelection(t)
            }, t.prototype.handleMenuKeydown = function(e, t) {
                switch (t) {
                    case 13:
                        e.hasAttribute("aria-disabled") || (this.handleMenuEnterKey(e), this.trigger.focus(), this.collapse());
                        break;
                    case 32:
                        e.hasAttribute("aria-disabled") || (this.handleMenuEnterKey(e), "menuitemcheckbox" !== e.getAttribute("role") && (this.collapse(), this.trigger.focus()));
                        break;
                    case 27:
                        this.trigger.focus(), this.collapse();
                        break;
                    case 38:
                        this.handleMenuArrowKey(!0, e);
                        break;
                    case 40:
                        this.handleMenuArrowKey(!1, e);
                        break;
                    case 9:
                        this.isExpanded() && (this.trigger.focus(), this.collapse())
                }
            }, t.prototype.handleMenuArrowKey = function(e, t) {
                var i = this.items.indexOf(t);
                if (i !== -1) {
                    var n = e ? i - 1 : i + 1;
                    n < 0 ? n = this.items.length - 1 : n >= this.items.length && (n = 0), this.items[i].removeAttribute("tabindex"), this.items[n].setAttribute("tabindex", "0"), this.items[n].focus()
                }
            }, t.prototype.handleMenuEnterKey = function(e) {
                this.onItemSelected(e)
            }, t.selector = ".c-action-menu", t.typeName = "ActionMenu", t.ariaExpanded = "aria-expanded", t.ariaChecked = "aria-checked", t.triggerSelector = t.selector + " > button.c-action-trigger", t.menuSelector = t.triggerSelector + ' + ul[role="menu"]', t
        }(i.Publisher);
        t.ActionMenu = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2)], s = function(e, t, i) {
        "use strict";
        var n = function(e) {
            function t(t, i) {
                void 0 === i && (i = null), e.call(this, t, i), this.element = t
            }
            return o(t, e), t.prototype.subscribe = function(e) {
                if (!e) return !1;
                if (this.subscribers) {
                    if (this.subscribers.indexOf(e) !== -1) return !1
                } else this.subscribers = [];
                return this.subscribers.push(e), !0
            }, t.prototype.unsubscribe = function(e) {
                if (!e || !this.subscribers || !this.subscribers.length) return !1;
                var t = this.subscribers.indexOf(e);
                return t !== -1 && (this.subscribers.splice(t, 1), !0)
            }, t.prototype.hasSubscribers = function() {
                return !!this.subscribers && this.subscribers.length > 0
            }, t.prototype.initiatePublish = function(e) {
                if (this.hasSubscribers())
                    for (var t = 0, i = this.subscribers; t < i.length; t++) {
                        var n = i[t];
                        this.publish(n, e)
                    }
            }, t.prototype.update = function() {}, t.prototype.teardown = function() {}, t
        }(i.ObservableComponent);
        t.Publisher = n
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(4)], s = function(e, t, i) {
        "use strict";

        function n(e) {
            return !isNaN(e) && "number" == typeof e
        }

        function s() {
            var e = window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth;
            return e
        }

        function o() {
            return window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight
        }

        function r(e) {
            if (null != e) return {
                width: e.clientWidth,
                height: e.clientHeight
            }
        }

        function a(e) {
            var t;
            if (e = e || window.event, !e) return t;
            if (t = e.key || e.keyIdentifier, !t) return t;
            switch (t) {
                case "Left":
                    return "ArrowLeft";
                case "Right":
                    return "ArrowRight";
                case "Up":
                    return "ArrowUp";
                case "Down":
                    return "ArrowDown";
                case "Esc":
                    return "Escape";
                default:
                    return t
            }
        }

        function l(e) {
            return e = e || window.event, null == e ? null : e.which || e.keyCode || e.charCode
        }

        function h(e, t, i, n) {
            var s = "";
            if (n) {
                var o = new Date;
                o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), s = "; expires=" + o.toUTCString()
            }
            window.document.cookie = e + "=" + encodeURIComponent(t) + s + ("; path=" + i + ";")
        }

        function c(e) {
            if (e)
                for (var t = 0, i = document.cookie.split("; "); t < i.length; t++) {
                    var n = i[t],
                        s = n.indexOf("="),
                        o = u(n.substring(0, s));
                    if (o === e) return u(n.substring(o.length + 1))
                }
            return null
        }

        function u(e) {
            return e = decodeURIComponent(e.replace("/+/g", " ")), 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e
        }

        function d(e) {
            if (e && 6 === e.length) {
                var t = parseInt(e.substring(0, 2), 16),
                    i = parseInt(e.substring(2, 4), 16),
                    n = parseInt(e.substring(4, 6), 16);
                if (!isNaN(t) && !isNaN(i) && !isNaN(n)) {
                    var s = (299 * t + 587 * i + 114 * n) / 255e3;
                    return s >= .5 ? 2 : 1
                }
            }
            return null
        }

        function p(e, t, i) {
            return !!(i && n(e) && n(t) && n(i.left) && n(i.right) && n(i.top) && n(i.bottom)) && (e >= i.left && e <= i.right && t >= i.top && t <= i.bottom)
        }

        function m(e) {
            console && console.warn ? console.warn(e) : console && console.error && console.error(e)
        }

        function v(e, t) {
            if ((t || !(w("item").toLowerCase().indexOf("perf_marker_global:true") < 0)) && !i.isNullOrWhiteSpace(e) && window.performance && window.performance.mark) /*!/#IFDEF perf_marker_global || log_define_timing */ {
                var n = e.split(" ").join("_");
                window.performance.mark(n), window.console && window.console.timeStamp && window.console.timeStamp(n)
            }
        }

        function f(e) {
            if (i.isNullOrWhiteSpace(e) || !window.performance || !window.performance.mark) return 0;
            var t = e.split(" ").join("_"),
                n = window.performance.getEntriesByName(t);
            return n && n.length ? Math.round(n[n.length - 1].startTime) : 0
        }

        function g(e, t) {
            if (!n(e) || e <= 0) return "00:00";
            var i = Math.floor(e / 3600),
                s = e % 3600,
                o = Math.floor(s / 60),
                r = "";
            return r = t ? i > 0 ? i + ":" : "00:" : i > 0 ? i + ":" : "", e = Math.floor(s % 60), r += (o < 10 ? "0" : "") + o, r += ":" + (0 === e ? "00" : (e < 10 ? "0" : "") + e)
        }

        function y(e) {
            if (!JSON || !JSON.parse) throw new Error("JSON.parse unsupported.");
            if (!e) throw new Error("Invalid json.");
            return JSON.parse(e)
        }

        function b() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t - 0] = arguments[t];
            if (!e || !e.length) return null;
            var i = "boolean" == typeof e[0] && e[0];
            if (e.length < 2) return i ? null : e[0];
            if (i && e.length < 3) return e[1];
            for (var n = i ? e[1] : e[0], s = i ? 2 : 1; s < e.length; s++)
                for (var o in e[s])
                    if (e[s].hasOwnProperty(o)) {
                        var r = e[s][o];
                        if (i) {
                            var a = Array.isArray ? Array.isArray(r) : "[object Array]" === {}.toString.call(r),
                                l = !!n[o] && (Array.isArray ? Array.isArray(n[o]) : "[object Array]" === {}.toString.call(n[o])),
                                h = !a && "object" == typeof r,
                                c = !l && !!n[o] && "object" == typeof n[o];
                            if (a && l) {
                                for (var u = 0; u < r.length; u++) a = Array.isArray ? Array.isArray(r[u]) : "[object Array]" === {}.toString.call(r[u]), l = !!n[o][u] && (Array.isArray ? Array.isArray(n[o][u]) : "[object Array]" === {}.toString.call(n[o][u])), h = !a && "object" == typeof r[u], c = !l && !!n[o][u] && "object" == typeof n[o][u], a ? n[o][u] = b(!0, l ? n[o][u] : [], r[u]) : h ? n[o][u] = b(!0, c ? n[o][u] : {}, r[u]) : n[o][u] = r[u];
                                continue
                            }
                            if (a) {
                                n[o] = b(!0, [], r);
                                continue
                            }
                            if (h) {
                                n[o] = b(!0, c ? n[o] : {}, r);
                                continue
                            }
                        }
                        n[o] = r
                    }
            return n
        }

        function C(e, t, i, n, s) {
            var o = !i || i < 0 ? -1 : Number(new Date) + i;
            t = t || 100,
                function i() {
                    var r = e();
                    if (r && n) n();
                    else {
                        if (r) return;
                        if (o === -1 || Number(new Date) < o) setTimeout(i, t);
                        else {
                            if (!s) return;
                            s()
                        }
                    }
                }()
        }

        function w(e) {
            e = e.replace(/[\[\]]/g, "\\$&");
            var t = new RegExp("[\\?&]" + e.toLowerCase() + "=([^&#]*)"),
                i = t.exec(location.search.toLowerCase());
            return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
        }

        function E(e, t) {
            if (!t) return e;
            if (e.indexOf("//") === -1) throw 'To avoid unexpected results in URL parsing, url must begin with "http://", "https://", or "//"';
            var i = document.createElement("a");
            i.href = e, i.search = (i.search ? i.search + "&" : "?") + t;
            var n = i.href;
            return i = null, n
        }

        function T(e, t) {
            if (window.sessionStorage && e && t) try {
                sessionStorage.setItem(e, t)
            } catch (e) {}
        }

        function S(e) {
            if (!window.sessionStorage || !e) return null;
            try {
                return sessionStorage.getItem(e)
            } catch (e) {
                return null
            }
        }

        function A(e, t) {
            if (window.localStorage && e && t) try {
                localStorage.setItem(e, t)
            } catch (e) {}
        }

        function x(e) {
            if (!window.localStorage || !e) return null;
            try {
                return localStorage.getItem(e)
            } catch (e) {
                return null
            }
        }
        t.isNumber = n, t.getWindowWidth = s, t.getWindowHeight = o, t.getDimensions = r, t.getVirtualKey = a, t.getKeyCode = l, t.setCookie = h, t.getCookie = c, t.detectContrast = d, t.pointInRect = p, t.apiDeprecated = m, t.createPerfMarker = v, t.getPerfMarkerValue = f, t.toElapsedTimeString = g, t.parseJson = y, t.extend = b, t.poll = C, t.getQSPValue = w, t.addQSP = E, t.saveToSessionStorage = T, t.getValueFromSessionStorage = S, t.saveToLocalStorage = A, t.getValueFromLocalStorage = x;
        var k;
        ! function(e) {
            function t() {
                if (window.matchMedia) {
                    for (var t = 0; t < e.allWidths.length; ++t)
                        if (!window.matchMedia("(min-width:" + e.allWidths[t] + "px)").matches) return t
                } else
                    for (var t = 0; t < e.allWidths.length; ++t)
                        if (!(s() >= e.allWidths[t])) return t; return e.allWidths.length
            }
            e.allWidths = [320, 540, 768, 1084, 1400, 1779], e.vpMin = e.allWidths[0], e.vpMax = 2048, e.getViewport = t
        }(k = t.Viewports || (t.Viewports = {}))
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(10), i(11), i(3), i(8)], s = function(e, t, i, n, s, r, a) {
        "use strict";
        var l = function(e) {
            function t(i) {
                var n = this;
                e.call(this, i), this.element = i, this.updateActionToggleState = function(e) {
                    e !== n.isToggled() && (e ? (r.addClass(n.element, t.initializeToggledClassName), n.initialGlyph && r.removeClass(n.element, n.initialGlyph), n.toggledGlyph && r.addClass(n.element, n.toggledGlyph), n.element.getAttribute(t.ariaLabelAttribute) ? n.element.setAttribute(t.ariaLabelAttribute, n.localizedToggledLabelValue) : r.setText(n.element, n.localizedToggledLabelValue), n.tooltip && n.tooltip.setContent(n.localizedToggledLabelValue)) : (r.removeClass(n.element, t.initializeToggledClassName), n.toggledGlyph && r.removeClass(n.element, n.toggledGlyph), n.initialGlyph && r.addClass(n.element, n.initialGlyph), n.element.getAttribute(t.ariaLabelAttribute) ? n.element.setAttribute(t.ariaLabelAttribute, n.localizedInitialLabelValue) : r.setText(n.element, n.localizedInitialLabelValue), n.tooltip && n.tooltip.setContent(n.localizedInitialLabelValue)), n.initiatePublish({
                        toggled: e
                    }))
                }, this.onActionToggleChange = function() {
                    n.updateActionToggleState(!n.isToggled())
                }, this.handleKeydownEvent = function(e) {
                    switch (a.getKeyCode(e)) {
                        case 13:
                        case 32:
                            r.preventDefault(e), n.updateActionToggleState(!n.isToggled());
                            break;
                        case 27:
                            r.preventDefault(e), n.updateActionToggleState(!1)
                    }
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                var e = this;
                if (this.element) {
                    this.initializeLocalization();
                    var i = r.hasClass(this.element, t.initializeToggledClassName),
                        o = this.element.getAttribute(s.Tooltip.dataDescribedByAttribute);
                    o && n.ComponentFactory.create([{
                        component: s.Tooltip,
                        eventToBind: "DOMContentLoaded",
                        elements: [document.getElementById(o)],
                        callback: function(t) {
                            (t || t.length) && (e.tooltip = t[0], e.tooltip.setContent(i ? e.localizedToggledLabelValue : e.localizedInitialLabelValue))
                        }
                    }]), i && r.removeClass(this.element, t.initializeToggledClassName), this.updateActionToggleState(i), r.addEvent(this.element, r.eventTypes.click, this.onActionToggleChange), r.addEvent(this.element, r.eventTypes.keydown, this.handleKeydownEvent)
                }
            }, t.prototype.teardown = function() {
                r.removeEvent(this.element, r.eventTypes.click, this.onActionToggleChange), r.removeEvent(this.element, r.eventTypes.keydown, this.handleKeydownEvent)
            }, t.prototype.publish = function(e, t) {
                e.onActionToggled && e.onActionToggled(t)
            }, t.prototype.isToggled = function() {
                return r.hasClass(this.element, t.initializeToggledClassName)
            }, t.prototype.initializeLocalization = function() {
                this.element.getAttribute(t.ariaLabelAttribute) ? this.localizedInitialLabelValue = this.element.getAttribute(t.ariaLabelAttribute) : r.getText(this.element) && (this.localizedInitialLabelValue = r.getText(this.element)), this.localizedToggledLabelValue = this.element.getAttribute(t.localizedToggledLabelAttribute);
                for (var e = 0, i = this.element.className.split(" "); e < i.length; e++) {
                    var n = i[e];
                    if (n.indexOf("glyph-") >= 0) {
                        this.initialGlyph = n;
                        break
                    }
                }
                this.toggledGlyph = this.element.getAttribute(t.toggledGlyphAttribute)
            }, t.selector = ".c-action-toggle", t.typeName = "ActionToggle", t.ariaLabelAttribute = "aria-label", t.initializeToggledClassName = "f-toggle", t.toggledGlyphAttribute = "data-toggled-glyph", t.localizedToggledLabelAttribute = "data-toggled-label", t
        }(i.Publisher);
        t.ActionToggle = l
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(3), i(8)], s = function(e, t, i, n) {
        "use strict";
        var s = function() {
            function e() {}
            return e.create = function(t) {
                for (var i = 0, n = t; i < n.length; i++) {
                    var s = n[i];
                    if (!s.c && !s.component) throw "factoryInput should has either component or c to tell the factory what component to create.Eg.ComponentFactory.create([{ c: Carousel] or ComponentFactory.create([component: Carousel]))";
                    e.createComponent(s.component || s.c, s)
                }
            }, e.createComponent = function(t, n) {
                if (t) {
                    var s = n && n.eventToBind ? n.eventToBind : "",
                        o = n && n.selector ? n.selector : t.selector,
                        r = n && n.context ? n.context : null,
                        a = [],
                        l = function(e, s, o) {
                            var l;
                            l = n.elements ? n.elements : s ? i.selectElementsT(s, r) : [document.body];
                            for (var h = 0, c = l; h < c.length; h++) {
                                var u = c[h];
                                if (u.mwfInstances || (u.mwfInstances = {}), u.mwfInstances[e]) a.push(u.mwfInstances[e]);
                                else {
                                    var d = new t(u, o);
                                    d.isObserving && !d.isObserving() || (u.mwfInstances[e] = d, a.push(d))
                                }
                            }
                        };
                    switch (s) {
                        case "DOMContentLoaded":
                            if (!e.onDomReadyHappened) {
                                e.domReadyFunctions.push(function() {
                                    return e.callBindFunction(t, o, l, n, a)
                                });
                                break
                            }
                            e.callBindFunction(t, o, l, n, a);
                            break;
                        case "load":
                        default:
                            if (!e.onDeferredHappened) {
                                e.deferredFunctions.push(function() {
                                    return e.callBindFunction(t, o, l, n, a)
                                });
                                break
                            }
                            e.callBindFunction(t, o, l, n, a)
                    }
                }
            }, e.callBindFunction = function(t, i, s, o, r) {
                void 0 === o && (o = null);
                var a = e.getTypeName(t),
                    l = a || i || "",
                    h = o && o.params ? o.params : {};
                h.mwfClass = a, n.createPerfMarker(l + "_Begin"), s(a, i, h), n.createPerfMarker(l + "_End"), o && o.callback && o.callback(r)
            }, e.getTypeName = function(t) {
                if (t.typeName) return t.typeName;
                if (t.name) return t.name;
                var i = e.typeNameRegEx.exec(t.toString());
                return i && i.length > 1 ? i[1] : void 0
            }, e.enumerateComponents = function(e, t) {
                if (e && t) {
                    var i = e.mwfInstances;
                    for (var n in i)
                        if (i.hasOwnProperty(n)) {
                            var s = i[n];
                            if (s && !t(n, s)) break
                        }
                }
            }, e.typeNameRegEx = /function\s+(\S+)\s*\(/, e.onLoadTimeoutMs = 6e3, e.onDeferredHappened = !1, e.deferredFunctions = [], e.onDomReadyHappened = !1, e.domReadyFunctions = [], e
        }();
        t.ComponentFactory = s,
            function() {
                i.onDeferred(function() {
                    s.onDeferredHappened = !0;
                    var e = s.deferredFunctions;
                    if (!e || e.length > 0)
                        for (var t = 0, n = e; t < n.length; t++) {
                            var o = n[t];
                            "function" == typeof o && i.SafeBrowserApis.requestAnimationFrame.call(window, o)
                        }
                    s.deferredFunctions = null
                }, s.onLoadTimeoutMs), i.documentReady(function() {
                    s.onDomReadyHappened = !0;
                    var e = s.domReadyFunctions;
                    if (!e || e.length > 0)
                        for (var t = 0, n = e; t < n.length; t++) {
                            var o = n[t];
                            "function" == typeof o && i.SafeBrowserApis.requestAnimationFrame.call(window, o)
                        }
                    s.domReadyFunctions = null
                }, s.onLoadTimeoutMs)
            }()
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.isVisible = !1, this.timer = 0, this.exposeToScreenReaders = !0, this.onFocus = function(e) {
                    e = n.getEvent(e), e && "mouseover" !== e.type && i.actOnFocus()
                }, this.handleKeydownWhenFocused = function(e) {
                    if (i.isVisible) {
                        e = n.getEvent(e);
                        var t = s.getKeyCode(e);
                        switch (t) {
                            case 27:
                                i.hide();
                                break;
                            case 38:
                            case 40:
                                n.preventDefault(e)
                        }
                    }
                }, this.onBlur = function() {
                    i.hide(), n.addEvent(i.controller, n.eventTypes.focus, i.onFocus), n.removeEvent(i.controller, n.eventTypes.blur, i.onBlur), n.removeEvent(i.controller, n.eventTypes.keydown, i.handleKeydownWhenFocused)
                }, this.onMouseOver = function(e) {
                    i.isVisible || (e = n.getEvent(e), i.tooltipXPosition = e.clientX, i.tooltipYPosition = e.clientY, i.actOnMouseOver())
                }, this.onMouseOut = function() {
                    i.timer > 0 && (window.clearTimeout(i.timer), i.timer = 0), i.hide(), n.removeEvent(i.controller, n.eventTypes.mouseout, i.onMouseOut), n.addEvent(i.controller, n.eventTypes.mouseover, i.onMouseOver)
                }, this.showForMouse = function() {
                    i.show(), n.removeEvent(i.controller, n.eventTypes.mouseover, i.onMouseOver)
                }, this.onScroll = function(e) {
                    i.isVisible && !i.animationFrameRequested && (i.animationFrameRequested = !0, n.SafeBrowserApis.requestAnimationFrame.call(window, function() {
                        return i.handleScroll()
                    }))
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.element) {
                    var e = this.element.getAttribute("id");
                    this.controller = n.selectFirstElement("[" + t.ariaDescribedByAttribute + '="' + e + '"]'), this.controller || (this.controller = n.selectFirstElement("[" + t.dataDescribedByAttribute + '="' + e + '"]'), this.exposeToScreenReaders = !this.controller), this.element.setAttribute(t.ariaHidden, "true"), this.exposeToScreenReaders || (n.addClass(this.element, t.hiddenClass), n.addClass(this.element, t.hiddenFromScreenReadersClass)), this.controller && (n.addEvent(this.controller, n.eventTypes.mouseover, this.onMouseOver), n.addEvent(this.controller, n.eventTypes.focus, this.onFocus), n.addEvent(window, n.eventTypes.scroll, this.onScroll))
                }
            }, t.prototype.teardown = function() {
                n.removeEvent(this.controller, n.eventTypes.mouseover, this.onMouseOver), n.removeEvent(this.controller, n.eventTypes.mouseout, this.onMouseOut), n.removeEvent(this.controller, n.eventTypes.focus, this.onFocus), n.removeEvent(this.controller, n.eventTypes.blur, this.onBlur), n.removeEvent(window, n.eventTypes.scroll, this.onScroll), this.controller = null, this.isVisible = !1, this.tooltipXPosition = 0, this.tooltipYPosition = 0, this.timer > 0 && (window.clearTimeout(this.timer), this.timer = 0)
            }, t.prototype.actOnFocus = function() {
                n.removeClass(this.element, t.hookHover), n.addClass(this.element, t.hookFocus);
                var e = n.getClientRect(this.controller);
                this.tooltipXPosition = e.left, this.tooltipYPosition = e.bottom, this.show(), n.addEvent(this.controller, n.eventTypes.blur, this.onBlur), n.addEvent(this.controller, n.eventTypes.keydown, this.handleKeydownWhenFocused), n.removeEvent(this.controller, n.eventTypes.focus, this.onFocus)
            }, t.prototype.actOnMouseOver = function() {
                n.removeClass(this.element, t.hookFocus), n.addClass(this.element, t.hookHover), this.timer = window.setTimeout(this.showForMouse, t.timerDelay), n.addEvent(this.controller, n.eventTypes.mouseout, this.onMouseOut)
            }, t.prototype.handleScroll = function() {
                this.animationFrameRequested = !1;
                var e = n.getScrollY(),
                    t = this.scrollYOnShow - e;
                this.setPosition({
                    top: this.tooltipYPosition + t
                })
            }, t.prototype.show = function() {
                this.isVisible = !0, this.scrollYOnShow = n.getScrollY(), this.exposeToScreenReaders ? this.element.setAttribute(t.ariaHidden, "false") : n.removeClass(this.element, t.hiddenClass), this.setPosition({
                    left: this.tooltipXPosition,
                    top: this.tooltipYPosition
                })
            }, t.prototype.hide = function() {
                this.element && this.isVisible && (this.isVisible = !1, this.exposeToScreenReaders ? this.element.setAttribute(t.ariaHidden, "true") : n.addClass(this.element, t.hiddenClass), n.removeClass(this.element, t.hookHover), n.removeClass(this.element, t.hookFocus))
            }, t.prototype.setContent = function(e) {
                this.element && n.setText(this.element, e)
            }, t.prototype.setPosition = function(e) {
                e && (e.left && n.css(this.element, "left", e.left + "px"), e.top && n.css(this.element, "top", e.top + "px"))
            }, t.selector = ".c-tooltip", t.typeName = "Tooltip", t.ariaHidden = "aria-hidden", t.hiddenClass = "x-hidden", t.timerDelay = 800, t.hookFocus = "hook-focus", t.hookHover = "hook-hover", t.ariaDescribedByAttribute = "aria-describedby", t.dataDescribedByAttribute = "data-f-describedby", t.hiddenFromScreenReadersClass = "f-hidden-from-screen-readers", t
        }(i.ObservableComponent);
        t.Tooltip = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.closeAlertAndRemoveEvent = function() {
                    n.removeEvent(i.closeButton, n.eventTypes.click, i.closeAlertAndRemoveEvent), n.removeElement(i.element), i.initiatePublish()
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.element && (this.closeButton = n.selectFirstElement("button.c-action-trigger.glyph-cancel", this.element), this.closeButton && n.addEvent(this.closeButton, n.eventTypes.click, this.closeAlertAndRemoveEvent, !1))
            }, t.prototype.teardown = function() {
                n.removeEvent(this.closeButton, n.eventTypes.click, this.closeAlertAndRemoveEvent, !1)
            }, t.prototype.publish = function(e, t) {
                e.onAlertClosed()
            }, t.selector = ".m-alert", t.typeName = "Alert", t
        }(i.Publisher);
        t.Alert = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, , function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(3), i(8), i(2)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.toggleBackToTop = function() {
                    var e = window.pageYOffset || document.body.scrollTop,
                        t = n.getWindowHeight(),
                        s = e >= 2 * t ? "false" : "true";
                    i.element.setAttribute("aria-disabled", s)
                }, t && this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.scrollThrottledEventHandler = i.addThrottledEvent(window, i.eventTypes.scroll, this.toggleBackToTop)
            }, t.prototype.teardown = function() {
                i.removeEvent(window, i.eventTypes.scroll, this.scrollThrottledEventHandler)
            }, t.selector = ".m-back-to-top", t.typeName = "BackToTop", t
        }(s.ObservableComponent);
        t.BackToTop = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.handleKeydown = function(e) {
                    var t = s.getKeyCode(e);
                    switch (t) {
                        case 32:
                            n.preventDefault(e), i.emitClickEvent()
                    }
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.element && "A" === this.element.nodeName && "button" === (this.element.getAttribute("role") || "").toLowerCase() && n.addEvent(this.element, n.eventTypes.keydown, this.handleKeydown)
            }, t.prototype.teardown = function() {
                n.removeEvent(this.element, n.eventTypes.keydown, this.handleKeydown)
            }, t.prototype.emitClickEvent = function() {
                n.customEvent(this.element, n.eventTypes.click)
            }, t.selector = ".c-button", t.typeName = "Button", t
        }(i.ObservableComponent);
        t.Button = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(i) {
                var n = this;
                e.call(this, i), this.updateCheckbox = function() {
                    var e = n.input.checked;
                    e !== n.checked && (n.checked = e, n.input.setAttribute(t.ariaCheckedAttribute, n.checked.toString()), n.initiatePublish({
                        checked: n.checked
                    }))
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.input = n.selectFirstElement(t.inputSelector, this.element), this.input && (this.input.getAttribute(t.indeterminateAttribute) === t.indeterminateValue && (this.input.indeterminate = !0), this.checked = this.input.checked, this.input.setAttribute(t.ariaCheckedAttribute, this.checked.toString()), n.addEvent(this.input, n.eventTypes.click, this.updateCheckbox))
            }, t.prototype.teardown = function() {
                n.removeEvent(this.input, n.eventTypes.click, this.updateCheckbox)
            }, t.prototype.publish = function(e, t) {
                e.onValueChanged(t)
            }, Object.defineProperty(t.prototype, "indeterminate", {
                get: function() {
                    return !!this.input && this.input.indeterminate
                },
                set: function(e) {
                    this.input && (this.input.indeterminate = e)
                },
                enumerable: !0,
                configurable: !0
            }), t.selector = ".c-checkbox", t.typeName = "Checkbox", t.inputSelector = 'input[type="checkbox"]', t.indeterminateAttribute = "data-js-checkbox", t.indeterminateValue = "indeterminate", t.ariaCheckedAttribute = "aria-checked", t
        }(i.Publisher);
        t.Checkbox = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(i) {
                var s = this;
                e.call(this, i), this.onDropdownClicked = function(e) {
                    n.preventDefault(e), s.toggleVisibility()
                }, this.onNonDropdownClick = function(e) {
                    var t = n.getEventTargetOrSrcElement(e);
                    s.isVisible || s.element.contains(t) || s.toggleVisibility()
                }, this.replaceText = function(e) {
                    s.checkedChoiceOption = e.target;
                    var i = s.checkedChoiceOption.parentNode;
                    s.label = n.selectFirstElement(t.spanSelector, i);
                    var o = s.labelText + s.separator + " " + n.getText(s.label);
                    n.setText(s.dropdownText, o)
                }, this.toggleVisibility = function() {
                    s.isVisible = !s.isVisible, s.element.setAttribute(t.ariaExpanded, (!s.isVisible).toString()), s.dropdownMenu.setAttribute(t.ariaHidden, s.isVisible.toString())
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.dropdownButton = n.selectFirstElement(t.dropdownButtonSelector, this.element), this.dropdownMenu = n.selectFirstElement(t.dropdownMenuSelector, this.element), this.dropdownText = n.selectFirstElement(t.separatorSpanSelector, this.element), this.separator = this.dropdownText.getAttribute(t.separatorSelector), this.labelText = n.getText(this.dropdownText), this.dropdownButton && this.separator && this.dropdownMenu && this.dropdownText && this.labelText) {
                    this.choiceOptions = n.selectElementsT(t.choiceOptionSelector, this.element), this.isVisible = "true" === this.dropdownMenu.getAttribute(t.ariaHidden), n.addEvent(this.dropdownButton, n.eventTypes.click, this.onDropdownClicked), n.addEvent(document, n.eventTypes.click, this.onNonDropdownClick), n.addEvent(this.choiceOptions, n.eventTypes.click, this.replaceText);
                    for (var e = 0, i = this.choiceOptions; e < i.length; e++) {
                        var s = i[e];
                        if (s.checked) {
                            this.checkedChoiceOption = s;
                            break
                        }
                    }
                }
            }, t.prototype.teardown = function() {
                n.removeEvent(this.dropdownButton, n.eventTypes.click, this.onDropdownClicked), n.removeEvent(document, n.eventTypes.click, this.onNonDropdownClick), n.removeEvent(this.choiceOptions, n.eventTypes.click, this.replaceText)
            }, t.selector = ".c-choice-summary", t.typeName = "ChoiceSummary", t.dropdownButtonSelector = ".c-action-trigger.glyph-chevron-down", t.dropdownMenuSelector = "ul", t.ariaHidden = "aria-hidden", t.ariaExpanded = "aria-expanded", t.separatorSpanSelector = ".c-choice-summary > span", t.spanSelector = "span", t.separatorSelector = "data-js-separator", t.labelSelector = "label", t.choiceOptionSelector = 'input[type="radio"]', t
        }(i.ObservableComponent);
        t.ChoiceSummary = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(3), i(8), i(4)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = function(e) {
            function t(i) {
                var o = this;
                e.call(this, i), this.isCombobox = !1, this.maxDisplayedItems = t.defaultMaxDisplayedItems, this.handleInputKeydownEvent = function(e) {
                    var t = s.getKeyCode(e);
                    13 !== t && 40 !== t || n.preventDefault(e), o.handleInputKeydown(t)
                }, this.handleInputKeyupEvent = function(e) {
                    o.handleInputKeyup(s.getKeyCode(e))
                }, this.handleInputOrButtonClickEvent = function(e) {
                    n.preventDefault(e), o.handleInputOrButtonClick()
                }, this.handleButtonKeydownEvent = function(e) {
                    var t = s.getKeyCode(e);
                    9 !== t && n.preventDefault(e), o.handleButtonKeydown(t)
                }, this.handleMenuKeydownEvent = function(e) {
                    var t = s.getKeyCode(e);
                    9 !== t && n.preventDefault(e), o.handleMenuKeydown(n.getEventTargetOrSrcElement(e), t)
                }, this.handleMenuClickEvent = function(e) {
                    o.handleMenuClick(n.getEventTargetOrSrcElement(e))
                }, this.handleOffMenuClick = function(e) {
                    o.element.contains(n.getEventTargetOrSrcElement(e)) || o.hideMenu()
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.element && (this.comboBoxElement = n.selectFirstElement('input[role="combobox"]', this.element), this.input = n.selectFirstElementT("input", this.element), this.button = n.selectFirstElement("button", this.element), this.menu = n.selectFirstElement("ul", this.element), this.listItems = n.selectElements("span, a", this.menu), this.comboBoxElement ? (this.isCombobox = !0, this.comboBoxElement = this.menu) : "combobox" === this.element.getAttribute(t.role) && (this.isCombobox = !0, this.comboBoxElement = this.element), this.input && this.button && this.menu && !(this.listItems.length < 1) && (this.activeValue = this.input.value, this.activeItem = n.selectFirstElement("span[class='" + t.activeClassName + "']", this.menu), n.addEvent(this.input, n.eventTypes.keydown, this.handleInputKeydownEvent, !0), n.addEvent(this.input, n.eventTypes.keyup, this.handleInputKeyupEvent, !0), n.addEvent(this.input, n.eventTypes.click, this.handleInputOrButtonClickEvent, !0), n.addEvent(this.button, n.eventTypes.click, this.handleInputOrButtonClickEvent, !0), n.addEvent(this.button, n.eventTypes.keydown, this.handleButtonKeydownEvent, !0), n.addEvent(this.listItems, n.eventTypes.keydown, this.handleMenuKeydownEvent, !0), n.addEvent(this.listItems, n.eventTypes.click, this.handleMenuClickEvent, !0), this.activeItem && this.setActiveItemAndHideMenu(this.activeItem, !1)))
            }, t.prototype.teardown = function() {
                n.removeEvent(this.input, n.eventTypes.keydown, this.handleInputKeydownEvent, !0), n.removeEvent(this.input, n.eventTypes.keyup, this.handleInputKeyupEvent, !0), n.removeEvent(this.input, n.eventTypes.click, this.handleInputOrButtonClickEvent, !0), n.removeEvent(this.button, n.eventTypes.click, this.handleInputOrButtonClickEvent, !0), n.removeEvent(this.button, n.eventTypes.keydown, this.handleButtonKeydownEvent, !0), n.removeEvent(this.listItems, n.eventTypes.keydown, this.handleMenuKeydownEvent, !0), n.removeEvent(this.listItems, n.eventTypes.click, this.handleMenuClickEvent, !0), this.input = null, this.button = null, this.menu = null, this.listItems = null, this.activeItem = null
            }, t.prototype.publish = function(e, t) {
                e.onSelectionChanged(t)
            }, t.prototype.onSelectionChanged = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0), this.initiatePublish({
                    id: this.activeItem && this.activeItem.parentElement ? this.activeItem.parentElement.id : "",
                    value: this.input.value,
                    internal: e,
                    userInitiated: t
                })
            }, t.prototype.getValue = function() {
                return {
                    id: this.activeItem && this.activeItem.parentElement ? this.activeItem.parentElement.id : "",
                    value: this.input.value,
                    internal: !1,
                    userInitiated: !1
                }
            }, t.prototype.showMenu = function(e, t) {
                if (void 0 === e && (e = !1), void 0 === t && (t = !0), !this.isMenuVisible()) {
                    var i = this.input.value;
                    if (e || !r.isNullOrWhiteSpace(i)) {
                        this.setMenuAriaAttributes(!0);
                        var s = this.listItems.length;
                        if (s > this.maxDisplayedItems) {
                            for (var o = 0, a = 0; a < this.maxDisplayedItems; a++) o += this.listItems[a].offsetHeight;
                            this.menu.style.maxHeight = o + "px"
                        }
                        n.addEvent(document.body, n.eventTypes.click, this.handleOffMenuClick), this.matchItem(t)
                    }
                }
            }, t.prototype.hideMenu = function() {
                this.isMenuVisible() && (this.setMenuAriaAttributes(!1), n.removeEvent(document.body, n.eventTypes.click, this.handleOffMenuClick))
            }, t.prototype.setMenuAriaAttributes = function(e) {
                this.isCombobox ? this.comboBoxElement.setAttribute(t.ariaExpanded, e.toString()) : this.menu.setAttribute(t.ariaHidden, (!e).toString())
            }, t.prototype.isMenuVisible = function() {
                return this.isCombobox ? "true" === this.comboBoxElement.getAttribute(t.ariaExpanded) : "false" === this.menu.getAttribute(t.ariaHidden)
            }, t.prototype.setActiveItemAndHideMenu = function(e, t) {
                void 0 === t && (t = !0), e && (this.setActiveItem(e), this.input.value = this.activeValue = this.getActiveText(), this.hideMenu(), t && this.input.focus(), this.onSelectionChanged())
            }, t.prototype.setActiveItem = function(e, i) {
                void 0 === i && (i = !0), this.activeItem && n.removeClass(this.activeItem, t.activeClassName), this.activeItem = e, i && n.addClass(this.activeItem, t.activeClassName)
            }, t.prototype.getActiveText = function() {
                return this.activeItem ? n.getText(this.activeItem) : ""
            }, t.prototype.matchItem = function(e) {
                void 0 === e && (e = !1);
                var t, i = this.input.value,
                    s = 0;
                if (!r.isNullOrWhiteSpace(i)) {
                    i = r.trim(i).toLocaleLowerCase();
                    for (var o = 0, a = this.listItems; o < a.length; o++) {
                        var l = a[o],
                            h = n.getText(l).toLocaleLowerCase();
                        if (i === h) {
                            t = l, s = -1;
                            break
                        }
                        var c = r.getMatchLength(h, i, !1);
                        c > 0 && (0 === s || c > s) && (t = l, s = c)
                    }
                }
                t || (t = this.listItems[0]), this.setActiveItem(t, e || s === -1), n.scrollElementIntoView(t, this.menu), e && t.focus()
            }, t.prototype.handleInputKeydown = function(e) {
                switch (this.activeValue = this.input.value, e) {
                    case 9:
                    case 13:
                        this.hideMenu();
                        var i = this.getActiveText();
                        this.activeValue !== i && (n.hasClass(this.activeItem, t.activeClassName) && (this.activeValue = this.input.value = i), this.onSelectionChanged());
                        break;
                    case 40:
                        this.isMenuVisible() ? this.activeItem && (this.setActiveItem(this.activeItem), this.activeItem.focus()) : this.showMenu(!0);
                        break;
                    case 27:
                        this.hideMenu()
                }
            }, t.prototype.handleInputKeyup = function(e) {
                r.isNullOrWhiteSpace(this.input.value) && 40 !== e ? this.hideMenu() : this.input.value !== this.activeValue && (this.isMenuVisible() ? this.matchItem() : this.showMenu(!0, !1))
            }, t.prototype.handleInputOrButtonClick = function() {
                this.isMenuVisible() ? (this.hideMenu(), this.input.focus()) : this.showMenu(!0, !1)
            }, t.prototype.handleButtonKeydown = function(e) {
                switch (e) {
                    case 40:
                    case 32:
                    case 13:
                        this.showMenu(!0);
                        break;
                    case 38:
                    case 27:
                        this.hideMenu()
                }
            }, t.prototype.handleMenuKeydown = function(e, t) {
                switch (t) {
                    case 32:
                    case 9:
                    case 13:
                        this.setActiveItemAndHideMenu(this.activeItem, 9 !== t);
                        break;
                    case 27:
                        this.input.focus(), this.hideMenu(), this.matchItem();
                        break;
                    case 38:
                        this.handleMenuArrowKey(!0, e);
                        break;
                    case 40:
                        this.handleMenuArrowKey(!1, e)
                }
            }, t.prototype.handleMenuArrowKey = function(e, t) {
                var i = this.listItems.indexOf(t);
                if (i !== -1) {
                    i += e ? -1 : 1, i < 0 ? i = this.listItems.length - 1 : i >= this.listItems.length && (i = 0);
                    var n = this.listItems[i];
                    this.setActiveItem(n), n.focus()
                }
            }, t.prototype.handleMenuClick = function(e) {
                this.setActiveItemAndHideMenu(e)
            }, t.selector = ".c-combo", t.typeName = "Combo", t.ariaHidden = "aria-hidden", t.ariaExpanded = "aria-expanded", t.role = "role", t.activeClassName = "active", t.defaultMaxDisplayedItems = 5, t
        }(i.Publisher);
        t.Combo = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(20)], s = function(e, t, i) {
        "use strict";
        var n = function(e) {
            function t(t, i) {
                void 0 === i && (i = null), e.call(this, t, i), this.contentPlacementItemElement = t
            }
            return o(t, e), t.selector = ".m-content-placement-item", t.typeName = "ContentPlacementItem", t.callToActionSelector = "a", t
        }(i.HeroItemBase);
        t.ContentPlacementItem = n
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(7), i(3), i(4)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = function(e) {
            function t(t, n) {
                var o = this;
                e.call(this, t, n), this.heroItemBaseElement = t, this.initialized = !1, this.handleMouseAndTouchStart = function(e) {
                    o.startCoordinates = s.getCoordinates(e)
                }, this.handleMouseAndTouchEnd = function(e) {
                    var t = o.startCoordinates,
                        i = s.getCoordinates(e),
                        n = e.which || e.button;
                    1 === n && t && i && !o.isSwipe(t, i) && o.handleValidUserInteraction(e, s.getEventTargetOrSrcElement(e))
                }, this.verifyPreciseInteraction = function() {
                    return !!s.hasClass(o.heroItemBaseElement, "f-precise-click")
                }, i.ObservableComponent.shouldInitializeAsClass(t, n) && s.SafeBrowserApis.requestAnimationFrame.call(window, function() {
                    return o.update()
                })
            }
            return o(t, e), t.prototype.update = function() {
                return !!this.heroItemBaseElement && (this.callsToAction = s.selectElementsT(this.constructor.callToActionSelector, this.heroItemBaseElement), this.addEventListeners(), this.initialized = !0, !0)
            }, t.prototype.teardown = function() {
                this.removeEventListeners(), this.initialized = !1
            }, t.prototype.publish = function(e, t) {
                e.onHeroItemClicked && (e.onHeroItemClicked(t), this.preventDefaultClickAction = this.preventDefaultClickAction || t.preventDefault)
            }, t.prototype.addEventListeners = function() {
                this.verifyCallToAction() && !this.verifyPreciseInteraction() && (this.heroItemBaseElement.setAttribute(t.dataJsHref, this.callsToAction[0].href), s.addEvent(this.heroItemBaseElement, s.eventTypes.mousedown, this.handleMouseAndTouchStart), s.addEvent(this.heroItemBaseElement, s.eventTypes.mouseup, this.handleMouseAndTouchEnd))
            }, t.prototype.removeEventListeners = function() {
                s.addEvent(this.heroItemBaseElement, s.eventTypes.mousedown, this.handleMouseAndTouchStart), s.addEvent(this.heroItemBaseElement, s.eventTypes.mouseup, this.handleMouseAndTouchEnd)
            }, t.prototype.handleValidUserInteraction = function(e, i) {
                if (i && !this.isCallToActionOrDescendent(i)) {
                    if (!this.verifyCallToAction()) return void this.heroItemBaseElement.removeAttribute(t.dataJsHref);
                    this.heroItemBaseElement.hasAttribute(t.dataJsHref) || this.heroItemBaseElement.setAttribute(t.dataJsHref, this.callsToAction[0].href);
                    var n = {
                        preventDefault: !1,
                        event: e,
                        targetElement: i,
                        targetUri: this.callsToAction[0].href
                    };
                    this.preventDefaultClickAction = !1, this.initiatePublish(n), this.preventDefaultClickAction ? this.preventDefaultClickAction = !1 : (s.stopPropagation(e), this.navigateToUrl(this.callsToAction[0].href, this.callsToAction[0].target))
                }
            }, t.prototype.isCallToActionOrDescendent = function(e) {
                for (var t = 0, i = this.callsToAction; t < i.length; t++) {
                    var n = i[t];
                    if (n === e || s.isDescendent(n, e)) return !0
                }
                return !1
            }, t.prototype.isSwipe = function(e, i) {
                if (!e || !i) return !1;
                var n = Math.abs(i.y - e.y),
                    s = Math.abs(i.x - e.x);
                return s > t.minimumSwipeDistance || n > t.minimumSwipeDistance
            }, t.prototype.navigateToUrl = function(e, t) {
                r.isNullOrWhiteSpace(e) || window.open(e, r.isNullOrWhiteSpace(t) ? "_self" : t)
            }, t.prototype.verifyCallToAction = function() {
                return this.callsToAction && this.callsToAction.length && !r.isNullOrWhiteSpace(this.callsToAction[0].href)
            }, t.dataJsHref = "data-js-href", t.minimumSwipeDistance = 30, t.callToActionSelector = "a.c-call-to-action", t
        }(n.Publisher);
        t.HeroItemBase = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.maxRows = 0, this.checkPollingCriteria = function() {
                    var e = i.checkForDeferredContent(),
                        t = i.setRowHeightsAcrossAllColumns();
                    return !e && t
                }, this.recalculate = function() {
                    s.poll(i.checkPollingCriteria, 250, -1)
                }, t && this.update()
            }
            return o(t, e), t.prototype.update = function() {
                return this.cachedDisplayValue = n.css(this.element, "display"), this.columns = n.selectElements(".f-column", this.element), this.maxRows = this.getMaxRowsFromAllColumns(), this.allRows = n.selectElements(".f-row", this.element), this.images = n.selectElementsT("img", this.element), this.recalculate(), this.resizeEventListener = n.addDebouncedEvent(window, n.eventTypes.resize, this.recalculate, 50), !0
            }, t.prototype.teardown = function() {
                this.columns = null, this.maxRows = 0, this.allRows = null, this.columnRows = null, this.images = null, n.removeEvent(window, n.eventTypes.resize, this.resizeEventListener)
            }, t.prototype.getMaxRowsFromAllColumns = function() {
                var e = 0;
                this.columnRows = [];
                for (var t = 0, i = this.columns; t < i.length; t++) {
                    var s = i[t],
                        o = n.selectElements(".f-row", s);
                    e = Math.max(e, o.length), this.columnRows.push(o)
                }
                return e
            }, t.prototype.setRowHeightsAcrossAllColumns = function() {
                var e = !1,
                    t = [];
                this.displayCompareChart(!1);
                for (var i = 0, s = this.allRows; i < s.length; i++) {
                    var o = s[i];
                    n.css(o, "height", "auto")
                }
                this.displayCompareChart();
                for (var r = 0; r < this.maxRows; r++) {
                    var a = this.getMaxRowHeight(r);
                    0 === a && (e = !0), t.push(a)
                }
                this.displayCompareChart(!1);
                for (var r = 0; r < this.maxRows; r++)
                    for (var l in this.columns) void 0 !== this.columnRows[l][r] && n.css(this.columnRows[l][r], "height", t[r].toString() + "px");
                return this.displayCompareChart(), !e
            }, t.prototype.getMaxRowHeight = function(e) {
                var t = 0;
                for (var i in this.columns) void 0 !== this.columnRows[i][e] && (t = Math.max(s.getDimensions(this.columnRows[i][e]).height, t));
                return t
            }, t.prototype.checkForDeferredContent = function() {
                for (var e = 0, t = this.images; e < t.length; e++) {
                    var i = t[e];
                    if (i.height < 2) return !0
                }
                return !1
            }, t.prototype.displayCompareChart = function(e) {
                void 0 === e && (e = !0), n.css(this.element, "display", e ? this.cachedDisplayValue : "none")
            }, t.selector = ".c-compare-chart, .m-compare-chart", t.typeName = "CompareChart", t
        }(i.ObservableComponent);
        t.CompareChart = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(i) {
                var s = this;
                e.call(this, i), this.clickHandler = function() {
                    s.toggleContent()
                }, this.onResized = function() {
                    return s.noToggle() ? void n.css(s.trigger, "display", "none") : (n.css(s.trigger, "display", s.triggerDisplayStyle), void s.toggleContent("true" === s.target.getAttribute(t.dataExpanded)))
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.element && (this.target = n.selectFirstElement(t.targetSelector, this.element), this.target || (this.target = n.selectFirstElement("p", this.element)), this.trigger = n.selectFirstElement("button", this.element), this.target && this.trigger)) {
                    this.lineHeight = this.calculateLineHeight();
                    var e = parseInt(this.trigger.getAttribute(t.dataShowAttribute), 10);
                    this.show = isNaN(e) || e < 0 ? t.defaultShow : e, this.moreString = this.trigger.getAttribute(t.dataMoreAttributeValue), this.lessString = this.trigger.getAttribute(t.dataLessAttributeValue), this.triggerDisplayStyle = n.css(this.trigger, "display"), this.onResized(), n.addEvent(this.trigger, n.eventTypes.click, this.clickHandler), this.resizeThrottledEventHandler = n.addThrottledEvent(window, n.eventTypes.resize, this.onResized)
                }
            }, t.prototype.teardown = function() {
                n.removeEvent(this.trigger, n.eventTypes.click, this.clickHandler), n.removeEvent(window, n.eventTypes.resize, this.resizeThrottledEventHandler), this.target = null, this.trigger = null, this.show = null, this.lineHeight = null
            }, t.prototype.toggleContent = function(e) {
                void 0 === e && (e = !("true" === this.target.getAttribute(t.dataExpanded))), this.target.setAttribute(t.dataExpanded, e.toString()), n.setText(this.trigger, e ? this.lessString : this.moreString), e ? n.css(this.target, "max-height", "") : n.css(this.target, "max-height", this.lineHeight * this.show + "px")
            }, t.prototype.noToggle = function() {
                n.css(this.target, "max-height", "");
                var e = n.getClientRect(this.target),
                    t = (parseInt(n.css(this.target, "padding-top"), 10) || 0) + (parseInt(n.css(this.target, "padding-bottom"), 10) || 0);
                return e.height - t <= this.lineHeight * this.show
            }, t.prototype.calculateLineHeight = function() {
                var e;
                e = "UL" === this.target.nodeName || "OL" === this.target.nodeName ? this.target.firstElementChild.firstElementChild ? this.target.firstElementChild.firstElementChild.cloneNode() : this.target.firstElementChild.cloneNode() : this.target.cloneNode(), e.innerHTML = "<br>", this.target.appendChild(e);
                var t = e.offsetHeight;
                e.innerHTML = "<br><br>";
                var i = e.offsetHeight;
                return this.target.removeChild(e), this.ignoreNextDOMChange = !0, "UL" === this.target.nodeName || "OL" === this.target.nodeName ? t : i - t
            }, t.selector = ".c-content-toggle", t.typeName = "ContentToggle", t.dataExpanded = "data-f-expanded", t.targetSelector = "[data-f-expanded]", t.dataMoreAttributeValue = "data-f-more", t.dataLessAttributeValue = "data-f-less", t.dataShowAttribute = "data-f-show", t.defaultShow = 3, t
        }(i.ObservableComponent);
        t.ContentToggle = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(3), i(4), i(8), i(7)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = function(e) {
            function t(o) {
                var r = this;
                e.call(this, o), this.days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], this.ariaSelected = "aria-selected", this.ariaLabel = "aria-label", this.ariaHidden = "aria-hidden", this.dateTimePickerDataAttribute = "data-date-time-picker", this.amPmSelection = ["AM", "PM"], this.numberOfElementsThatAppearInColumn = 5, this.pickerIsOpen = !1, this.handleKeyDown = function(e) {
                    r.ignoreNextDOMChange = !0, e = i.getEvent(e);
                    var n, o, a, l = s.getKeyCode(e),
                        h = i.getEventTargetOrSrcElement(e);
                    switch (l) {
                        case 13:
                            r.pickerIsOpen ? (r.updatePicker(), r.closePicker()) : r.openPicker(h, !1);
                            break;
                        case 27:
                            r.closePicker();
                            break;
                        case 37:
                            if (!r.activeColumn) break;
                            if (o = r.activeColumn.previousElementSibling, !o) break;
                            return a = i.selectFirstElement("[" + r.ariaSelected + '="true"]', o), void(a && (r.activeColumn = o, a.focus()));
                        case 39:
                            if (!r.activeColumn) break;
                            if (n = r.activeColumn.nextElementSibling, !n) break;
                            return void(null !== r.activeColumn.nextElementSibling && (a = i.selectFirstElement("[" + r.ariaSelected + '="true"]', n), a && (r.activeColumn = n, a.focus())));
                        case 38:
                            return i.preventDefault(e), void r.scrollColumn(r.activeColumn, t.scrollUpValue);
                        case 40:
                            return i.preventDefault(e), void r.scrollColumn(r.activeColumn, t.scrollDownValue);
                        case 9:
                            if (!r.pickerIsOpen) break;
                            if (n = e.shiftKey ? r.activeColumn.previousElementSibling : r.activeColumn.nextElementSibling, !n) break;
                            r.activeColumn = n
                    }
                }, this.handleMouseClick = function(e) {
                    r.ignoreNextDOMChange = !0;
                    var t = i.getEventTargetOrSrcElement(e);
                    if (r.lastClickedElement = t, !r.pickerIsOpen) return r.columnTriggerButtons.indexOf(t) === -1 && (t = r.columnTriggerButtons[0]), void r.openPicker(t, !0);
                    if ("LI" === t.nodeName) {
                        if (!t.parentElement || !t.parentElement.parentElement) return;
                        var n = t.parentElement.parentElement.getAttribute(r.dateTimePickerDataAttribute),
                            s = t.getAttribute(r.ariaLabel);
                        if ("ampm" === n) r.selectAmPm(s);
                        else {
                            var o = t.parentElement;
                            i.removeInnerHtml(o);
                            var a = r.getDateTimePickerElement(n, "ul");
                            r.buildSelector(a, n, s), r.recalculateDaysInMonth(o)
                        }
                    }
                }, this.handleOutsideClick = function(e) {
                    var t = i.getEventTargetOrSrcElement(e);
                    i.isDescendent(r.element, t) || r.lastClickedElement === t || (r.updatePicker(), r.closePicker())
                }, this.handleApplyClicked = function(e) {
                    e = i.getEvent(e), i.stopPropagation(e), r.updatePicker(), r.closePicker()
                }, this.handleCancelClicked = function(e) {
                    e = i.getEvent(e), i.stopPropagation(e), r.closePicker()
                }, this.handleScrollButtons = function(e) {
                    r.ignoreNextDOMChange = !0, e = i.getEvent(e), i.stopPropagation(e);
                    var t = i.getEventTargetOrSrcElement(e),
                        n = t.parentElement,
                        s = t.getAttribute(r.dateTimePickerDataAttribute);
                    return "mouseenter" === e.type ? void(r.scrollDelay = setTimeout(function() {
                        r.scrollInterval = null, clearTimeout(r.scrollDelay), r.scrollDelay = null, r.scrollInterval = setInterval(function() {
                            r.scrollColumn(n, s)
                        }, 300)
                    }, 150)) : "mouseleave" === e.type ? (clearTimeout(r.scrollDelay), clearInterval(r.scrollInterval), r.scrollInterval = null, void r.recalculateDaysInMonth(t)) : void(null !== s && r.scrollColumn(n, s))
                }, this.handleMouseScroll = function(e) {
                    e = i.getEvent(e), i.preventDefault(e);
                    var n = e.deltaY || e.wheelDelta || -e.detail,
                        s = n < 0 ? t.scrollDownValue : t.scrollUpValue;
                    r.scrollColumn(e.currentTarget, s)
                }, this.scrollColumn = function(e, n) {
                    if (null !== e) {
                        r.ignoreNextDOMChange = !0;
                        var s, o = i.selectFirstElement("ul li", e),
                            a = i.selectFirstElement("ul", e),
                            l = e.getAttribute(r.dateTimePickerDataAttribute);
                        return "ampm" === l ? void(n === t.scrollUpValue ? r.selectAmPm(r.amPmSelection[0]) : n === t.scrollDownValue && r.selectAmPm(r.amPmSelection[1])) : void(n === t.scrollUpValue ? (s = r.newContent(e, "up"), r.prependChildren(o, s[2]), r.isLastInList(a, s[0], "up", s[1]), r.removeChildren(e, "bottom")) : n === t.scrollDownValue && (r.removeChildren(e, "top"), s = r.newContent(e, "down"), r.appendChildren(a, s[2]), r.isLastInList(a, s[0], "down", s[1])))
                    }
                }, this.buildSelector = function(e, t, n) {
                    var s = null === n ? r.getDateTimePickerElement(t).getAttribute(r.activeValueStorage) : n;
                    switch (t) {
                        case "month":
                            var o = r.months.indexOf(s);
                            r.buildNodes(o, e, 12, !0, !1), r.setFocus(e);
                            break;
                        case "day":
                            var a = i.selectFirstElement("[" + r.ariaSelected + '="true"]', r.element).getAttribute(r.ariaLabel),
                                l = r.months.indexOf(a),
                                h = r.monthInfo[l].days;
                            r.buildNodes(parseInt(s, 0), e, h, !1, !1), r.setFocus(e);
                            break;
                        case "year":
                            r.buildNodes(parseInt(s, 0), e, null, !1, !0), r.setFocus(e);
                            break;
                        case "hour":
                            r.buildNodes(parseInt(s, 0), e, 12, !1, !1), r.setFocus(e);
                            break;
                        case "minute":
                        case "minute24":
                            r.buildNodes(parseInt(s, 0), e, 60, !1, !0), r.setFocus(e);
                            break;
                        case "ampm":
                            r.buildAmPm(e);
                            break;
                        case "hour24":
                            r.buildNodes(parseInt(s, 0), e, 24, !1, !0), r.setFocus(e)
                    }
                }, this.buildNodes = function(e, t, n, s, o) {
                    for (var a = o ? n - 1 : n, l = e - r.numberOfElementsThatAppearInColumn; l < e + r.numberOfElementsThatAppearInColumn + 1; l++) {
                        var h = void 0;
                        if (0 === l && o || l === n && o) h = 0;
                        else {
                            var c = l < 1 ? 1 : l > n ? -1 : 0;
                            h = l + n * c
                        }
                        var u = s ? r.monthInfo[h].name : h.toString();
                        r.appendChildren(t, u), l === e ? (t.lastElementChild.setAttribute(r.ariaSelected, "true"), t.lastElementChild.setAttribute("tabindex", "0")) : t.lastElementChild.setAttribute(r.ariaSelected, "false"), t.lastElementChild.setAttribute("role", "option"), a === h && i.addClass(t.lastElementChild, "f-js-last")
                    }
                }, this.appendChildren = function(e, t) {
                    r.insertChildren(e, t, !0)
                }, this.prependChildren = function(e, t) {
                    r.insertChildren(e, t, !1)
                }, this.insertChildren = function(e, t, i) {
                    var n = document.createElement("li");
                    n.appendChild(document.createTextNode(t)), n.setAttribute(r.ariaLabel, t), i ? e.appendChild(n) : e.parentElement.insertBefore(n, e)
                }, this.buildAmPm = function(e) {
                    r.appendChildren(e, r.amPmSelection[0]), e.lastElementChild.setAttribute(r.ariaSelected, "true"), e.lastElementChild.setAttribute("tabindex", "0"), r.appendChildren(e, r.amPmSelection[1])
                }, this.selectAmPm = function(e) {
                    e || (e = r.getDateTimePickerElement("ampm").getAttribute(r.activeValueStorage).toUpperCase());
                    var t = i.selectFirstElement("[" + r.ariaSelected + '="true"]', r.amPmColumn);
                    t && (t.removeAttribute("tabindex"), t.removeAttribute(r.ariaSelected));
                    var n = e === r.amPmSelection[0] ? i.removeClass : i.addClass;
                    n.call(r, r.amPmColumn, "f-js-pm");
                    var s = i.selectFirstElement('[aria-label="' + e + '"]', r.amPmColumn);
                    s && (s.setAttribute(r.ariaSelected, "true"), s.setAttribute("tabindex", "0"), s.focus())
                }, this.newContent = function(e, t) {
                    var n = i.selectFirstElement("[" + r.ariaSelected + '="true"]', e).getAttribute(r.ariaLabel),
                        s = e.getAttribute(r.dateTimePickerDataAttribute),
                        o = [],
                        a = null,
                        l = null;
                    switch (s) {
                        case "month":
                            r.removeAriaSelected(r.monthColumn);
                            var h = r.months.indexOf(n);
                            return a = r.nextCurrent(h, t, r.totalMonths, !1), r.setAriaSelected(r.monthColumn, r.months[a]), l = r.stagedElement(r.monthColumn, a, t, r.totalMonths, !1), o[0] = l[1], o[1] = r.totalMonths, o[2] = r.months[l[0]], o;
                        case "day":
                            var c = i.selectFirstElement("[" + r.ariaSelected + '="true"]', r.monthColumn);
                            if (!c) return;
                            var u = c.getAttribute(r.ariaLabel);
                            if (!u) return;
                            var d = r.months.indexOf(u),
                                p = r.monthInfo[d].days;
                            return r.removeAriaSelected(r.dayColumn), a = r.nextCurrent(parseInt(n, 0), t, p, !1), r.setAriaSelected(r.dayColumn, a.toString()), l = r.stagedElement(r.dayColumn, a, t, p, !1), o[0] = l[1], o[1] = p, o[2] = l[0], o;
                        case "year":
                            return r.removeAriaSelected(r.yearColumn), a = r.nextCurrent(parseInt(n, 0), t, 9999, !0), r.setAriaSelected(r.yearColumn, a.toString()), l = r.stagedElement(r.yearColumn, a, t, 9999, !0), o[0] = l[1], o[1] = 9999, o[2] = l[0], o;
                        case "hour":
                        case "hour24":
                            var m = s.indexOf("24") > -1,
                                v = m ? 24 : 12;
                            return r.removeAriaSelected(r.hourColumn), a = r.nextCurrent(parseInt(n, 0), t, v, m), r.setAriaSelected(r.hourColumn, a.toString()), l = r.stagedElement(r.hourColumn, a, t, v, m), o[0] = l[1], o[1] = m ? 23 : 12, o[2] = l[0], o;
                        case "minute":
                        case "minute24":
                            return r.removeAriaSelected(r.minuteColumn), a = r.nextCurrent(parseInt(n, 0), t, 60, !0), r.setAriaSelected(r.minuteColumn, a.toString()), l = r.stagedElement(r.minuteColumn, a, t, 60, !0), o[0] = l[1], o[1] = 59, o[2] = l[0], o
                    }
                }, this.removeAriaSelected = function(e) {
                    var t = i.selectFirstElement("[" + r.ariaSelected + '="true"]', e);
                    t && (t.removeAttribute("tabindex"), t.removeAttribute(r.ariaSelected))
                }, this.setAriaSelected = function(e, t) {
                    var n = i.selectFirstElement('[aria-label="' + t + '"]', e);
                    n && (n.setAttribute(r.ariaSelected, "true"), n.setAttribute("tabindex", "0"), n.focus())
                }, this.setFocus = function(e) {
                    if (e && "" !== e.style.display) {
                        var t = i.selectFirstElement("[" + r.ariaSelected + '="true"]', e);
                        t && t.focus()
                    }
                }, this.nextCurrent = function(e, t, i, n) {
                    switch (t) {
                        case "up":
                            return n && e - 1 === 0 ? 0 : e - 1 <= 0 ? n ? i - 1 : i : e - 1;
                        case "down":
                            return n && e + 1 === i ? 0 : e + 1 > i ? 1 : e + 1
                    }
                    return null
                }, this.stagedElement = function(e, t, i, n, s) {
                    var o = [];
                    if ("down" === i ? t += r.numberOfElementsThatAppearInColumn : "up" === i && (t -= r.numberOfElementsThatAppearInColumn), !s || 0 !== t && t !== n) {
                        var a = t < 1 ? 1 : t > n ? -1 : 0;
                        o[0] = o[1] = t + n * a
                    } else o[0] = 0, o[1] = n;
                    return o
                }, this.isLastInList = function(e, t, n, s) {
                    t === s && ("down" === n ? i.addClass(e.lastElementChild, "f-js-last") : "up" === n && i.addClass(e.firstElementChild, "f-js-last"))
                }, this.removeChildren = function(e, t) {
                    var n = i.selectElements("li", e);
                    if (n && 0 !== n.length)
                        if ("top" === t) n[0].parentNode.removeChild(n[0]);
                        else if ("bottom" === t) {
                        var s = n.length - 1;
                        n[0].parentNode.removeChild(n[s])
                    }
                }, this.updatePicker = function() {
                    switch (r.pickerType) {
                        case 0:
                            r.updateButton(r.monthColumn, "month"), r.updateButton(r.dayColumn, "day"), r.updateButton(r.yearColumn, "year");
                            break;
                        case 1:
                            r.updateButton(r.hourColumn, "hour"), r.updateButton(r.minuteColumn, "minute"), r.updateButton(r.amPmColumn, "ampm");
                            break;
                        case 2:
                            r.updateButton(r.hourColumn, "hour24"), r.updateButton(r.minuteColumn, "minute24")
                    }
                    var e = r.currentDateTime;
                    r.updateCurrentDateTime(), r.areDatesCloseEnough(r.currentDateTime, e) || r.initiatePublish({
                        oldDateTime: e,
                        newDateTime: r.currentDateTime
                    })
                }, this.updateButton = function(e, s) {
                    if (e && s) {
                        var o = r.getDateTimePickerElement(s);
                        if (o) {
                            var a = i.selectFirstElement("[" + r.ariaSelected + '="true"]', e);
                            if (a) {
                                var l = a.getAttribute(r.ariaLabel);
                                if (l) {
                                    i.setText(o, l), o.setAttribute(r.activeValueStorage, l);
                                    var h = o.getAttribute(t.buttonFormatterAttribute);
                                    r.activeValueStorage === t.activeValueStorageAttribute && h && o.setAttribute(r.ariaLabel, n.format(h, l))
                                }
                            }
                        }
                    }
                }, this.recalculateDaysInMonth = function(e) {
                    var t = e.parentElement.getAttribute(r.dateTimePickerDataAttribute);
                    if (t && "month" === t) {
                        var n = i.selectFirstElement("[" + r.ariaSelected + '="true"]', r.dayColumn);
                        if (n) {
                            var s = n.getAttribute(r.ariaLabel);
                            if (s) {
                                var o = parseInt(s, 0);
                                if (o) {
                                    var a = i.selectFirstElement("[" + r.ariaSelected + '="true"]', e.parentElement);
                                    if (a) {
                                        var l = a.getAttribute(r.ariaLabel);
                                        if (l) {
                                            var h = r.months.indexOf(l);
                                            if (r.monthInfo[h]) {
                                                var c = r.monthInfo[h].days;
                                                if (c) {
                                                    i.removeInnerHtml(r.dayColumn);
                                                    var u = 31 === o && c < 31 ? c : o;
                                                    r.buildNodes(u, r.dayColumn, c, null, !1)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.element) {
                    var e = this.element.getAttribute(this.dateTimePickerDataAttribute);
                    switch (this.picker = this.getDateTimePickerElement("date-selector") || this.getDateTimePickerElement("time-selector12") || this.getDateTimePickerElement("time-selector24"), this.activeValueStorage = i.selectElements("button[" + t.activeValueStorageAttribute + "]", this.element).length ? t.activeValueStorageAttribute : this.ariaLabel, e) {
                        case "date":
                            this.pickerType = 0, this.monthColumn = this.getDateTimePickerElement("month", "ul"), this.dayColumn = this.getDateTimePickerElement("day", "ul"), this.yearColumn = this.getDateTimePickerElement("year", "ul");
                            var n = this.monthColumn.getAttribute("data-months");
                            if (!n) return;
                            var s = this.days.length;
                            if (this.months = n.split(","), this.months.splice(0, 0, ""), this.months.length !== s) return;
                            this.totalMonths = this.months.length - 1, this.monthInfo = new Array(s);
                            for (var o = 0; o <= this.totalMonths; o++) this.monthInfo[o] = {
                                name: this.months[o],
                                days: this.days[o]
                            };
                            i.removeInnerHtml(this.monthColumn), i.removeInnerHtml(this.dayColumn), i.removeInnerHtml(this.yearColumn), this.buildSelector(this.monthColumn, "month", null), this.buildSelector(this.dayColumn, "day", null), this.buildSelector(this.yearColumn, "year", null);
                            break;
                        case "time":
                        case "time24":
                            this.pickerType = e.indexOf("24") < 0 ? 1 : 2;
                            var r = "time-selector",
                                a = "hour",
                                l = "minute";
                            if (2 === this.pickerType ? (r += "24", a += "24", l += "24") : (r += "12", this.amPmColumn = this.getDateTimePickerElement("ampm", "ul")), this.hourColumn = this.getDateTimePickerElement(a, "ul"), this.minuteColumn = this.getDateTimePickerElement(l, "ul"), this.amPmColumn) {
                                var h = this.amPmColumn.getAttribute("data-meridiem");
                                h && 2 === h.split("&").length && (this.amPmSelection = h.split("&"))
                            }
                            i.removeInnerHtml(this.hourColumn), i.removeInnerHtml(this.minuteColumn), this.buildSelector(this.hourColumn, a, null), this.buildSelector(this.minuteColumn, l, null), 1 === this.pickerType && this.buildAmPm(this.amPmColumn)
                    }
                    if (this.activeValueStorage === t.activeValueStorageAttribute)
                        for (var c = i.selectElements("li", this.picker), u = 0, d = c; u < d.length; u++) {
                            var p = d[u],
                                m = p.getAttribute(this.ariaLabel);
                            m && p.setAttribute(t.activeValueStorageAttribute, m)
                        }
                    this.cancelButton = this.getDateTimePickerElement("cancel"), this.applyButton = this.getDateTimePickerElement("apply"), this.scrollButtons = [], this.columnTriggerButtons = [];
                    for (var v = this.element.children, f = 0, g = v.length - 1; f < g; f++) {
                        var y = v.item(f);
                        1 === y.nodeType && "BUTTON" === y.nodeName && this.columnTriggerButtons.push(y)
                    }
                    this.columns = i.selectElements("div[" + this.dateTimePickerDataAttribute + "]", this.picker);
                    for (var b = 0, C = this.columns; b < C.length; b++) {
                        var w = C[b],
                            E = i.selectElements("button", w);
                        2 === E.length && (E[0].setAttribute(this.dateTimePickerDataAttribute, t.scrollUpValue), E[1].setAttribute(this.dateTimePickerDataAttribute, t.scrollDownValue), this.scrollButtons.push(E[0], E[1]))
                    }
                    this.updateCurrentDateTime(), i.addEvents(this.applyButton, "keydown click", this.handleApplyClicked), i.addEvents(this.cancelButton, "keydown click", this.handleCancelClicked), i.addEvents(this.scrollButtons, "mouseenter mouseleave", this.handleScrollButtons), i.addEvent(this.element, i.eventTypes.keydown, this.handleKeyDown), i.addEvent(this.element, i.eventTypes.click, this.handleMouseClick), this.ignoreNextDOMChange = !0
                }
            }, t.prototype.teardown = function() {
                i.removeEvents(this.applyButton, "keydown click", this.handleApplyClicked), i.removeEvents(this.cancelButton, "keydown click", this.handleCancelClicked), i.removeEvents(this.scrollButtons, "mouseenter mouseleave", this.handleScrollButtons), i.removeEvent(this.element, i.eventTypes.keydown, this.handleKeyDown), i.removeEvent(this.element, i.eventTypes.click, this.handleMouseClick), i.removeEvents(this.columns, "mousewheel DOMMouseScroll", this.handleMouseScroll)
            }, t.prototype.openPicker = function(e, n) {
                void 0 === n && (n = !1), this.pickerIsOpen = !0, this.ignoreNextDOMChange = !0;
                var s = i.selectFirstElement("[" + this.dateTimePickerDataAttribute + '="' + e.getAttribute(this.dateTimePickerDataAttribute) + '"]', this.picker);
                this.activeColumn = s, 0 === this.pickerType ? (i.removeInnerHtml(this.monthColumn), i.removeInnerHtml(this.dayColumn), i.removeInnerHtml(this.yearColumn), this.buildSelector(this.monthColumn, "month", null), this.buildSelector(this.dayColumn, "day", null), this.buildSelector(this.yearColumn, "year", null)) : 1 === this.pickerType ? (i.removeInnerHtml(this.hourColumn), i.removeInnerHtml(this.minuteColumn), this.buildSelector(this.hourColumn, "hour", null), this.buildSelector(this.minuteColumn, "minute", null), this.selectAmPm(null)) : 2 === this.pickerType && (this.buildSelector(this.hourColumn, "hour24", null), this.buildSelector(this.minuteColumn, "minute24", null)), this.picker.setAttribute(this.ariaHidden, "false");
                var o = i.selectFirstElement("[" + this.ariaSelected + '="true"]', s);
                o && (o.focus(), n && i.addClass(o, t.hiddenFocusClass)), i.addEvent(window, i.eventTypes.mousedown, this.handleOutsideClick), i.addEvents(this.columns, "mousewheel DOMMouseScroll", this.handleMouseScroll)
            }, t.prototype.closePicker = function() {
                this.pickerIsOpen = !1, this.picker.setAttribute(this.ariaHidden, "true"), i.removeEvent(window, i.eventTypes.scroll, this.handleMouseScroll), i.removeEvent(window, i.eventTypes.mousedown, this.handleOutsideClick), i.removeEvents(this.columns, "mousewheel DOMMouseScroll", this.handleMouseScroll);
                var e = this.columns.indexOf(this.activeColumn);
                e >= 0 && e < this.columnTriggerButtons.length && this.columnTriggerButtons[e].focus()
            }, t.prototype.getDateTimePickerElement = function(e, t) {
                var s = n.isNullOrWhiteSpace(t) ? "" : " " + t;
                return n.isNullOrWhiteSpace(e) ? null : i.selectFirstElement('[data-date-time-picker="' + e + '"] ' + s, this.element)
            }, t.prototype.areDatesCloseEnough = function(e, i) {
                return Math.abs(e.getTime() - i.getTime()) <= t.changeThreshold
            }, t.prototype.updateCurrentDateTime = function() {
                var e = "[" + this.ariaSelected + '="true"]';
                switch (this.pickerType) {
                    case 0:
                        var t = i.selectFirstElement('[data-date-time-picker="date-selector"]', this.element),
                            n = t ? i.selectFirstElement('[data-date-time-picker="month"]', t) : null,
                            s = t ? i.selectFirstElement('[data-date-time-picker="day"]', t) : null,
                            o = t ? i.selectFirstElement('[data-date-time-picker="year"]', t) : null,
                            r = n ? i.selectFirstElement(e, n) : null,
                            a = s ? i.selectFirstElement(e, s) : null,
                            l = o ? i.selectFirstElement(e, o) : null,
                            h = parseInt(i.getText(l), 10) || -1,
                            c = this.months.indexOf(i.getText(r)) || -1,
                            u = parseInt(i.getText(a), 10) || -1;
                        h !== -1 && c > 0 && u !== -1 && (this.currentDateTime = new Date(h, c - 1, u));
                        break;
                    case 1:
                    case 2:
                        var t = i.selectFirstElement('[data-date-time-picker^="time-selector"]', this.element),
                            d = t ? i.selectFirstElement('[data-date-time-picker^="hour"]', t) : null,
                            p = t ? i.selectFirstElement('[data-date-time-picker^="minute"]', t) : null,
                            m = t ? i.selectFirstElement('[data-date-time-picker="ampm"]', t) : null,
                            v = d ? i.selectFirstElement(e, d) : null,
                            f = p ? i.selectFirstElement(e, p) : null,
                            g = m ? i.selectFirstElement(e, m) : null,
                            y = parseInt(i.getText(v), 10) || -1,
                            b = parseInt(i.getText(f), 10) || -1;
                        y !== -1 && b !== -1 && (this.currentDateTime = new Date, this.currentDateTime.setSeconds(0), this.currentDateTime.setMinutes(b), this.currentDateTime.setHours(i.getText(g) === this.amPmSelection[1] ? y + 12 : y))
                }
            }, t.prototype.publish = function(e, t) {
                e && e.onDateTimeChanged && e.onDateTimeChanged(t)
            }, t.selector = ".c-date-time-picker", t.typeName = "DateTimePicker", t.changeThreshold = 1e3, t.scrollUpValue = "scrollUp", t.scrollDownValue = "scrollDown", t.buttonFormatterAttribute = "data-formatter-aria-label", t.activeValueStorageAttribute = "data-active-value", t.hiddenFocusClass = "x-hidden-focus", t
        }(r.Publisher);
        t.DateTimePicker = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3), i(25)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                e.call(this, t), this.update()
            }
            return o(t, e), t.prototype.update = function() {
                var e = this;
                if (this.element && (this.buttons = n.selectElements(t.buttonsSelector, this.element), this.buttonContainers = n.selectElements(t.buttonsContainerSelector, this.element), !(!this.buttons || !this.buttonContainers || this.buttons.length < 1 || this.buttonContainers.length < 1))) {
                    this.buttonsLength = this.buttons.length;
                    for (var i = 0; i < this.buttonsLength; i++) {
                        var o = n.getClientRect(this.buttonContainers[i]).width;
                        (!this.resizedContainerWidth || o > this.resizedContainerWidth) && (this.resizedContainerWidth = o);
                        var r = n.getClientRect(this.buttons[i]).width;
                        (!this.resizedButtonWidth || r > this.resizedButtonWidth) && (this.resizedButtonWidth = r)
                    }
                    this.updateWidths(), s.BreakpointTracker.getBreakpointTracker().subscribe({
                        onBreakpointChanged: function(t) {
                            e.onBreakpointChanged(t)
                        }
                    })
                }
            }, t.prototype.updateWidths = function() {
                for (var e = 0; e < this.buttonsLength; e++) this.buttons[e].style.width = this.resizedButtonWidth + "px", this.buttonContainers[e].style.width = this.resizedContainerWidth + "px"
            }, t.prototype.onBreakpointChanged = function(e) {
                if (e.breakpoint > 1) this.updateWidths();
                else
                    for (var t = 0; t < this.buttonsLength; t++) n.css(this.buttons[t], "width", ""), n.css(this.buttonContainers[t], "width", "");
                this.ignoreNextDOMChange = !0
            }, t.prototype.teardown = function() {
                this.resizedButtonWidth = null, this.resizedContainerWidth = null
            }, t.selector = ".m-device-actions", t.typeName = "DeviceActions", t.buttonsSelector = ".c-button", t.buttonsContainerSelector = ".f-button", t
        }(i.ObservableComponent);
        t.DeviceActions = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t() {
                var i = this;
                e.call(this, null), this.onWindowResized = function(e) {
                    var n = s.getWindowWidth(),
                        o = t.identifyBreakpoint(n);
                    i.breakpoint !== o && (i.breakpoint = o, i.initiatePublish({
                        breakpoint: o,
                        width: n
                    }))
                }, this.windowWidth = s.getWindowWidth(), this.breakpoint = t.identifyBreakpoint(this.windowWidth), n.addDebouncedEvent(window, n.eventTypes.resize, this.onWindowResized)
            }
            return o(t, e), t.getBreakpointTracker = function() {
                return document.body.breakpointTracker || (document.body.breakpointTracker = new t), document.body.breakpointTracker
            }, t.prototype.getBreakpoint = function() {
                return this.breakpoint
            }, t.identifyBreakpoint = function(e) {
                s.isNumber(e) || (e = s.getWindowWidth());
                for (var i = t.breakpoints.length - 1; i >= 0; i--)
                    if (e >= t.breakpoints[i]) return i
            }, t.prototype.publish = function(e, t) {
                e.onBreakpointChanged && e.onBreakpointChanged(t)
            }, t.breakpoints = [0, 540, 768, 1084, 1400, 1779], t
        }(i.Publisher);
        t.BreakpointTracker = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(i) {
                var o = this;
                e.call(this, i), this.shouldCloseOnEscape = !1, this.isFlowDialog = !1, this.isLightboxDialog = !1, this.handleTriggerClick = function(e) {
                    o.activeButton = n.getEventTargetOrSrcElement(e), o.show()
                }, this.show = function() {
                    var e = n.selectElements(t.pageContentContainerSelector);
                    o.pageContentContainers = [], o.element.setAttribute(t.ariaHidden, "false"), o.dialogWrapper.focus(), o.onResized(), o.bodyOverflow = n.css(document.body, "overflow"), n.css(document.body, "overflow", "hidden"), o.container.setAttribute(t.ariaHidden, "true"), o.checkOverflow();
                    for (var i = 0, s = e; i < s.length; i++) {
                        var r = s[i],
                            a = !("true" !== r.getAttribute(t.ariaHidden));
                        o.pageContentContainers.push({
                            element: r,
                            hidden: a
                        }), a || r.setAttribute(t.ariaHidden, "true")
                    }
                    o.dialogWrapper.scrollTop = 0, o.initiatePublish({
                        notification: 1
                    })
                }, this.hide = function() {
                    o.element.setAttribute(t.ariaHidden, "true"), n.css(o.dialogWrapper, "height", "auto"), n.css(document.body, "overflow", o.bodyOverflow), o.container.setAttribute(t.ariaHidden, "false");
                    for (var e = 0, i = o.pageContentContainers; e < i.length; e++) {
                        var s = i[e];
                        s.hidden || s.element.removeAttribute(t.ariaHidden)
                    }
                    o.activeButton && o.activeButton.focus(), o.activeButton = null, o.pageContentContainers = [], o.initiatePublish({
                        notification: 2
                    })
                }, this.triggerClickPublish = function(e) {
                    o.initiatePublish({
                        notification: 0,
                        button: n.getEventTargetOrSrcElement(e)
                    })
                }, this.onKeydown = function(e) {
                    var t = s.getKeyCode(e);
                    switch (t) {
                        case 13:
                        case 32:
                            o.closeButtons.indexOf(n.getEventTargetOrSrcElement(e)) !== -1 ? (n.preventDefault(e), o.hide()) : o.customButtons.indexOf(n.getEventTargetOrSrcElement(e)) !== -1 && o.initiatePublish({
                                notification: 0,
                                button: n.getEventTargetOrSrcElement(e)
                            });
                            break;
                        case 27:
                            n.preventDefault(e), o.shouldCloseOnEscape && o.hide();
                            break;
                        case 9:
                            var i = n.getEventTargetOrSrcElement(e);
                            i !== o.lastInput || e.shiftKey ? i === o.firstInput && e.shiftKey ? (n.preventDefault(e), o.lastInput.focus()) : 1 === o.dialogInputs.length && (n.preventDefault(e), o.dialogInputs[0].focus()) : (n.preventDefault(e), o.firstInput.focus())
                    }
                }, this.onResized = function() {
                    o.checkOverflow(), o.handleResponsive()
                }, this.checkOverflow = function() {
                    var e = n.getClientRect(o.dialogWrapper);
                    e.height < o.dialogWrapper.scrollHeight ? o.isScroll || n.css(o.dialogWrapper, "overflow-y", "auto") : n.css(o.dialogWrapper, "overflow-y", "hidden")
                }, this.handleResponsive = function() {
                    if ("false" === o.element.getAttribute(t.ariaHidden)) {
                        var e = n.getClientRect(o.dialogWrapper);
                        o.isFlowDialog && !o.isScroll ? e.height < o.dialogWrapper.scrollHeight ? (n.css(o.dialogWrapper, "max-height", t.heightCalculationString), n.css(o.dialogWrapper, "height", "100%")) : n.css(o.dialogWrapper, "max-height", "100%") : o.isScroll && (e.height + t.heightCalculationValue > window.innerHeight && "inherit" !== n.css(o.dialogInnerContent, "height") ? (n.css(o.dialogWrapper, "height", t.heightCalculationString), n.css(o.dialogInnerContent, "height", "inherit")) : "auto" !== n.css(o.dialogInnerContent, "height") && (n.css(o.dialogWrapper, "height", "auto"), e = n.getClientRect(o.dialogWrapper), e.height + t.heightCalculationValue < window.innerHeight ? (n.css(o.dialogInnerContent, "height", "auto"), o.element.setAttribute(t.ariaHidden, "true"), o.element.setAttribute(t.ariaHidden, "false"), o.checkOverflow()) : n.css(o.dialogWrapper, "height", t.heightCalculationString)))
                    }
                }, this.appendDialog = function() {
                    o.ignoreNextDOMChange = !0, o.element && o.element.parentElement !== document.body && document.body.appendChild(o.element)
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.element && this.element.id && (this.dialogId = this.element.id, this.dialogWrapper = n.selectFirstElement("div[role=dialog]", this.element), this.dialogInnerContent = n.selectFirstElement('[role="document"]', this.element), this.openButtons = n.selectElements("[data-js-dialog-show=" + this.dialogId + "]"), this.closeButtons = n.selectElements(t.closeSelector, this.element), this.dialogInputs = n.selectElements(t.dialogInputSelectors, this.element), this.customButtons = n.selectElements(t.customButtonSelector, this.element), this.appendDialog(), this.container = n.selectFirstElement('[data-grid*="container"]'), this.overlay = n.selectFirstElement('[role="presentation"]', this.element), this.isScroll = n.selectFirstElement(t.scrollSelector, this.element), n.hasClass(this.element, "f-flow") && (this.isFlowDialog = !0), n.hasClass(this.element, "f-lightbox") && (this.isLightboxDialog = !0), this.dialogWrapper && this.dialogInputs && this.dialogInputs.length && this.container && this.overlay)) {
                    if (this.isLightboxDialog) this.closeButtons.indexOf(this.overlay) === -1 && this.closeButtons.push(this.overlay), this.shouldCloseOnEscape = !0;
                    else if (this.isFlowDialog)
                        for (var e = 0; e < this.closeButtons.length; e++) {
                            var i = this.closeButtons[e];
                            if (n.hasClass(i, "c-glyph") && n.hasClass(i, "glyph-cancel")) {
                                this.closeButtons.push(this.overlay), this.shouldCloseOnEscape = !0;
                                break
                            }
                        }
                    this.firstInput = this.dialogInputs[0], this.lastInput = this.dialogInputs[this.dialogInputs.length - 1], n.addEvent(this.openButtons, n.eventTypes.click, this.handleTriggerClick), n.addEvent(this.closeButtons, n.eventTypes.click, this.hide), n.addEvent(this.customButtons, n.eventTypes.click, this.triggerClickPublish), n.addEvent(this.element, n.eventTypes.keydown, this.onKeydown), this.resizeThrottledEventHandler = n.addThrottledEvent(window, n.eventTypes.resize, this.onResized), "false" === this.element.getAttribute(t.ariaHidden) && this.onResized()
                }
            }, t.prototype.teardown = function() {
                n.removeEvent(this.openButtons, n.eventTypes.click, this.handleTriggerClick), n.removeEvent(this.closeButtons, n.eventTypes.click, this.hide), n.removeEvent(this.customButtons, n.eventTypes.click, this.triggerClickPublish), n.removeEvent(this.element, n.eventTypes.keydown, this.onKeydown), n.removeEvent(window, n.eventTypes.resize, this.resizeThrottledEventHandler)
            }, t.prototype.publish = function(e, t) {
                switch (t.notification) {
                    case 0:
                        e && e.onButtonClicked && e.onButtonClicked(t);
                        break;
                    case 1:
                        e && e.onShown && e.onShown();
                        break;
                    case 2:
                        e && e.onHidden && e.onHidden()
                }
            }, t.selector = ".c-dialog", t.typeName = "Dialog", t.dialogInputSelectors = "select, input, textarea, button, a, .c-glyph[data-js-dialog-hide]", t.closeSelector = "[data-js-dialog-hide]", t.customButtonSelector = 'button[type="button"]', t.ariaHidden = "aria-hidden", t.scrollSelector = ".f-dialog-scroll", t.heightCalculationValue = 24, t.heightCalculationString = "calc(100% - " + t.heightCalculationValue.toString() + "px)", t.pageContentContainerSelector = '[data-js-controlledby="dialog"]', t
        }(i.Publisher);
        t.Dialog = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(25), i(3)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(i) {
                var n = this;
                e.call(this, i), this.getCollapseBreakpoint = function() {
                    var e = n.element.getAttribute(t.dataCollapseAttribute).toLowerCase();
                    switch (e) {
                        case "vp3":
                            n.collapseBreakpoint = 2;
                            break;
                        case "vp2":
                            n.collapseBreakpoint = 1;
                            break;
                        case "vp1":
                            n.collapseBreakpoint = 0
                    }
                }, this.toggleDrawer = function() {
                    n.isExpanded() ? n.collapseDrawer() : n.expandDrawer()
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                var e = this;
                if (this.element && (this.drawerToggleButton = s.selectFirstElement("button[aria-controls]", this.element), this.drawerToggleButton)) {
                    var i = this.drawerToggleButton.getAttribute("aria-controls");
                    if (this.drawerContainer = s.selectFirstElement("#" + i, this.element), this.drawerContainer) {
                        s.hasClass(this.element, t.deprecatedResponsiveString) && (this.element.setAttribute(t.dataCollapseAttribute, "vp1"), s.removeClass(this.element, t.deprecatedResponsiveString), s.hasClass(this.element, "f-remove-divider") || s.addClass(this.element, "f-divider")), s.hasClass(this.element, "m-amc-placement") && this.element.setAttribute(t.dataCollapseAttribute, "vp1"), this.isExpanded() || (this.drawerContainer.setAttribute(t.hiddenString, ""), this.drawerContainer.setAttribute("aria-hidden", t.trueString), this.changeDrawerState(1));
                        var o = n.BreakpointTracker.getBreakpointTracker();
                        this.element.getAttribute(t.dataCollapseAttribute) && (this.getCollapseBreakpoint(), o.subscribe({
                            onBreakpointChanged: function(t) {
                                e.onBreakpointChanged(t)
                            }
                        })), s.addEvent(this.drawerToggleButton, s.eventTypes.click, this.toggleDrawer), this.onBreakpointChanged({
                            breakpoint: o.getBreakpoint(),
                            width: 0
                        })
                    }
                }
            }, t.prototype.teardown = function() {
                s.removeEvent(this.drawerToggleButton, s.eventTypes.click, this.toggleDrawer)
            }, t.prototype.publish = function(e, t) {
                e.onExpandedChanged(t)
            }, t.prototype.onBreakpointChanged = function(e) {
                this.element.getAttribute(t.dataCollapseAttribute) && this.updateResponsiveDrawer(e.breakpoint)
            }, t.prototype.changeDrawerState = function(e) {
                var i = 0 === e;
                this.drawerToggleButton.setAttribute(t.ariaExpanded, i ? t.trueString : "false"), this.drawerContainer.style.height = i ? "auto" : "0", this.drawerContainer.style.overflow = i ? "visible" : t.hiddenString, this.drawerContainer.setAttribute("aria-hidden", i ? "false" : t.trueString), this.initiatePublish({
                    isExpanded: i
                })
            }, t.prototype.collapseDrawer = function() {
                this.drawerContainer.setAttribute(t.hiddenString, ""), this.changeDrawerState(1)
            }, t.prototype.expandDrawer = function() {
                this.drawerContainer.removeAttribute(t.hiddenString), this.changeDrawerState(0)
            }, t.prototype.isExpanded = function() {
                return this.drawerToggleButton.getAttribute(t.ariaExpanded) === t.trueString
            }, t.prototype.updateResponsiveDrawer = function(e) {
                e > this.collapseBreakpoint ? (this.drawerToggleButton.setAttribute(t.disabledString, t.disabledString), s.addClass(this.element, "f-show"), this.expandDrawer()) : (this.drawerToggleButton.removeAttribute(t.disabledString), s.removeClass(this.element, "f-show"), this.collapseDrawer())
            }, t.selector = ".c-drawer", t.typeName = "Drawer", t.ariaExpanded = "aria-expanded", t.disabledString = "disabled", t.hiddenString = "hidden", t.trueString = "true", t.deprecatedResponsiveString = "f-responsive", t.dataCollapseAttribute = "data-js-collapse", t
        }(i.Publisher);
        t.Drawer = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(20)], s = function(e, t, i) {
        "use strict";
        var n = function(e) {
            function t(t, i) {
                void 0 === i && (i = null), e.call(this, t, i), this.feedHeroItemElement = t
            }
            return o(t, e), t.selector = ".m-feed-hero-item", t.typeName = "FeedHeroItem", t.callToActionSelector = "a", t
        }(i.HeroItemBase);
        t.FeedHeroItem = n
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.showFileDialogMenu = function(e) {
                    n.preventDefault(e), i.fileInputElement.click()
                }, this.handleFileSelection = function() {
                    i.textInputElement.value = i.fileInputElement.value.replace("C:\\fakepath\\", "")
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.element && (this.fileInputElement = n.selectFirstElement('input[type="file"]', this.element), this.submitButton = n.selectFirstElement("button", this.element), this.textInputElement = n.selectFirstElement('input[type="text"]', this.element), this.fileInputElement && this.submitButton && this.textInputElement && (n.addEvent(this.fileInputElement, n.eventTypes.change, this.handleFileSelection), n.addEvent(this.submitButton, n.eventTypes.click, this.showFileDialogMenu), n.addEvent(this.textInputElement, n.eventTypes.click, this.showFileDialogMenu)))
            }, t.prototype.teardown = function() {
                n.removeEvent(this.fileInputElement, n.eventTypes.change, this.handleFileSelection), n.removeEvent(this.submitButton, n.eventTypes.click, this.showFileDialogMenu), n.removeEvent(this.textInputElement, n.eventTypes.click, this.showFileDialogMenu), this.fileInputElement = null, this.submitButton = null, this.textInputElement = null
            }, t.selector = ".c-file", t.typeName = "File", t
        }(i.ObservableComponent);
        t.File = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3), i(31), i(8)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = 8,
            l = function(e) {
                function t(i) {
                    var o = this;
                    e.call(this, i), this.element = i, this.toggleFlyout = function() {
                        o.shown ? o.hide(!0) : o.show(!0)
                    }, this.handleKeydownWhenFlyoutIsOpen = function(e) {
                        var t = r.getKeyCode(e);
                        if (o.shown) switch (t) {
                            case 27:
                                o.hide(!0)
                        }
                    }, this.handleClickWhenFlyoutIsOpen = function(e) {
                        var t = e.target || e.srcElement;
                        o.performActionsWhenFlyoutIsOpen(t)
                    }, this.performActionsWhenFlyoutIsOpen = function(e) {
                        var t = e.parentNode;
                        o.element.contains(e) === !1 && e !== o.openButton && t !== o.openButton && o.hide(!0)
                    }, this.hide = function(e) {
                        void 0 === e && (e = !1), o.shown = !1, o.element.setAttribute(t.AriaHidden, "true"), 0 === o.dismissalMode && n.removeEvent(o.bodyElement, n.eventTypes.click, o.handleClickWhenFlyoutIsOpen), e && o.openButton.focus()
                    }, this.show = function(e) {
                        void 0 === e && (e = !1), o.shown = !0, o.element.setAttribute(t.AriaHidden, "false"), o.offsetParent = n.getOffsetParent(o.element), 3 === o.placement ? o.placeRight() : 1 === o.placement ? o.placeTop() : 2 === o.placement ? o.placeLeft() : 0 === o.placement && o.placeBottom(), s.collidesWith(o.element) !== !1 && (o.placeLeft(), s.collidesWith(o.element) !== !1 && (o.placeRight(), s.collidesWith(o.element) !== !1 && (o.placeBottom(), s.collidesWith(o.element) !== !1 && (o.placeTop(), s.collidesWith(o.element) !== !1 && (o.placeBottomFinal(), s.collidesWith(o.element) !== !1 && o.placeTopFinal()))))), 0 === o.dismissalMode && n.addEvent(o.bodyElement, n.eventTypes.click, o.handleClickWhenFlyoutIsOpen), e && o.element.focus()
                    }, this.placeTopFinal = function() {
                        var e = n.getClientRect(o.offsetParent),
                            t = n.getClientRect(o.element),
                            i = n.getClientRect(o.openButton),
                            s = i.left - e.left,
                            r = i.top - e.top - t.height - a;
                        n.css(o.element, "left", s + "px"), n.css(o.element, "top", r + "px")
                    }, this.placeBottomFinal = function() {
                        var e = n.getClientRect(o.offsetParent),
                            t = n.getClientRect(o.openButton),
                            i = t.left - e.left,
                            s = t.top - e.top + t.height + a;
                        n.css(o.element, "left", i + "px"), n.css(o.element, "top", s + "px")
                    }, this.placeBottom = function() {
                        var e = n.getClientRect(o.offsetParent),
                            t = n.getClientRect(o.element),
                            i = n.getClientRect(o.openButton),
                            s = function() {
                                var s = o.calculateHorizontalCenter(e, i, t),
                                    r = i.top - e.top + i.height + a;
                                n.css(o.element, "left", s + "px"), n.css(o.element, "top", r + "px"), o.element.setAttribute("data-js-flyout-placement", "bottom")
                            };
                        s(), t = n.getClientRect(o.element), s()
                    }, this.placeLeft = function() {
                        var e = n.getClientRect(o.offsetParent),
                            t = n.getClientRect(o.element),
                            i = n.getClientRect(o.openButton),
                            s = function() {
                                var s = i.left - e.left - t.width - a,
                                    r = o.calculateVerticalCenter(e, i, t);
                                n.css(o.element, "left", s + "px"), n.css(o.element, "top", r + "px"), o.element.setAttribute("data-js-flyout-placement", "left")
                            };
                        s(), t = n.getClientRect(o.element), s()
                    }, this.placeTop = function() {
                        var e = n.getClientRect(o.offsetParent),
                            t = n.getClientRect(o.element),
                            i = n.getClientRect(o.openButton),
                            s = function() {
                                var s = o.calculateHorizontalCenter(e, i, t),
                                    r = i.top - e.top - t.height - a;
                                n.css(o.element, "left", s + "px"), n.css(o.element, "top", r + "px"), o.element.setAttribute("data-js-flyout-placement", "top")
                            };
                        s(), t = n.getClientRect(o.element), s()
                    }, this.placeRight = function() {
                        var e = n.getClientRect(o.offsetParent),
                            t = n.getClientRect(o.element),
                            i = n.getClientRect(o.openButton),
                            s = function() {
                                var s = i.left - e.left + i.width + a,
                                    r = o.calculateVerticalCenter(e, i, t);
                                n.css(o.element, "left", s + "px"), n.css(o.element, "top", r + "px"), o.element.setAttribute("data-js-flyout-placement", "right")
                            };
                        s(), t = n.getClientRect(o.element), s()
                    }, i && (this.bodyElement = n.selectFirstElement("body"), this.update())
                }
                return o(t, e), t.prototype.update = function() {
                    var e = this;
                    if (this.flyoutId = this.element.getAttribute("id"), this.flyoutId && (this.openButton = n.selectFirstElement('[aria-describedby="' + this.flyoutId + '"]'), this.openButton || (this.openButton = n.selectFirstElement('[data-js-flyout="' + this.flyoutId + '"]'), this.openButton))) {
                        this.shown = !1;
                        var t = this.element.getAttribute("data-js-flyout-dismissible");
                        this.dismissalMode = "false" === t ? 1 : 0;
                        var i = this.element.getAttribute("data-js-flyout-placement");
                        switch (i) {
                            case "bottom":
                                this.placement = 0;
                                break;
                            case "top":
                                this.placement = 1;
                                break;
                            case "left":
                                this.placement = 2;
                                break;
                            default:
                                this.placement = 3
                        }
                        if (n.addEvent(this.openButton, n.eventTypes.click, this.toggleFlyout), n.addEvent(window, n.eventTypes.keydown, this.handleKeydownWhenFlyoutIsOpen), this.resizeThrottledEventHandler = n.addThrottledEvent(window, n.eventTypes.resize, function() {
                                e.hide()
                            }), 1 === this.dismissalMode && (this.flyoutButtons = n.selectElementsT("button", this.element), this.flyoutButtons.length > 0))
                            for (var s = 0, o = this.flyoutButtons; s < o.length; s++) {
                                var r = o[s];
                                n.addEvent(r, n.eventTypes.click, function() {
                                    e.hide(!0)
                                })
                            }
                    }
                }, t.prototype.teardown = function() {
                    var e = this;
                    if (n.removeEvent(this.openButton, n.eventTypes.click, this.toggleFlyout), n.removeEvent(window, n.eventTypes.keydown, this.handleKeydownWhenFlyoutIsOpen), n.removeEvent(window, n.eventTypes.resize, this.resizeThrottledEventHandler), 1 === this.dismissalMode && this.flyoutButtons.length > 0)
                        for (var t = 0, i = this.flyoutButtons; t < i.length; t++) {
                            var s = i[t];
                            n.removeEvent(s, n.eventTypes.click, function() {
                                e.hide()
                            })
                        }
                }, t.prototype.calculateHorizontalCenter = function(e, t, i) {
                    return t.left - e.left + t.width / 2 - i.width / 2
                }, t.prototype.calculateVerticalCenter = function(e, t, i) {
                    return t.top - e.top + t.height / 2 - i.height / 2
                }, t.selector = ".c-flyout", t.typeName = "Flyout", t.AriaHidden = "aria-hidden", t
            }(i.ObservableComponent);
        t.Flyout = l
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(3)], s = function(e, t, i) {
        "use strict";

        function n(e, t) {
            var n = i.getClientRect(e);
            if (n.left = Math.round(n.left), n.top = Math.round(n.top), n.right = Math.round(n.right), n.bottom = Math.round(n.bottom), 0 !== n.width) {
                var s = !1,
                    o = {
                        top: !1,
                        bottom: !1,
                        left: !1,
                        right: !1
                    };
                if (!t) {
                    var r = Math.min(window.innerWidth, document.documentElement.clientWidth),
                        a = Math.min(window.innerHeight, document.documentElement.clientHeight);
                    t = {
                        left: 0,
                        top: 0,
                        right: r,
                        bottom: a,
                        width: r,
                        height: a
                    }
                }
                if (n.left < t.left && (s = !0, o.left = !0), n.top < t.top && (s = !0, o.top = !0), n.right > t.right && (s = !0, o.right = !0), n.bottom > t.bottom && (s = !0, o.bottom = !0), s) return o
            }
            return !1
        }
        t.collidesWith = n
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(20)], s = function(e, t, i) {
        "use strict";
        var n = function(e) {
            function t(t, i) {
                void 0 === i && (i = null), e.call(this, t, i), this.heroItemElement = t
            }
            return o(t, e), t.selector = ".c-hero, .m-hero-item", t.typeName = "HeroItem", t
        }(i.HeroItemBase);
        t.HeroItem = n
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(20), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(t, i) {
                var n = this;
                void 0 === i && (i = null), e.call(this, t, i), this.immersiveHeroItemElement = t, this.onWindowResized = function() {
                    var e = Math.round(window.innerWidth),
                        t = Math.round(window.innerHeight);
                    n.windowWidth === e && n.windowHeight === t || (n.windowWidth = e, n.windowHeight = t, n.resizeImage())
                }
            }
            return o(t, e), t.prototype.update = function() {
                return !!e.prototype.update.call(this) && (this.image = n.selectFirstElement(t.imageSelector, this.immersiveHeroItemElement), this.title = n.selectFirstElement(t.titleSelector, this.immersiveHeroItemElement), this.isTopAligned = n.hasClass(this.immersiveHeroItemElement, "f-align-top"), this.windowWidth = Math.round(window.innerWidth), this.windowHeight = Math.round(window.innerHeight), void(this.image ? (this.resizeImage(), this.resizeThrottledEvent = n.addThrottledEvent(window, n.eventTypes.resize, this.onWindowResized, 50)) : this.handleTextOnly()))
            }, t.prototype.teardown = function() {
                e.prototype.teardown.call(this), n.removeEvent(window, n.eventTypes.resize, this.resizeThrottledEvent), this.image = null, this.sectionHeight = null, this.title = null, this.titleHeight = null, this.isTopAligned = null
            }, t.prototype.handleTextOnly = function() {
                if (!this.isTopAligned && this.title.parentElement) {
                    var e = this.title.parentElement;
                    n.css(e, "top", "auto"), n.css(e, "bottom", "0px")
                }
            }, t.prototype.resizeImage = function() {
                if (this.immersiveHeroItemElement && this.title && this.image) {
                    var e = n.getClientRect(this.immersiveHeroItemElement),
                        t = n.getClientRect(this.title),
                        i = this.isTopAligned ? t.top - e.top : n.getClientRect(this.image).top - e.top;
                    this.titleHeight = t.height + i, this.sectionHeight = e.height;
                    var s = Math.round(this.sectionHeight - this.titleHeight) + "px";
                    n.css(this.image, "height", s)
                }
            }, t.prototype.onCollectionItemHidden = function() {}, t.prototype.onCollectionItemShown = function() {
                this.resizeImage()
            }, t.selector = ".m-immersive-hero-item", t.typeName = "ImmersiveHeroItem", t.titleSelector = "div > div", t.imageSelector = "div > .c-image > img", t
        }(i.HeroItemBase);
        t.ImmersiveHeroItem = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(8), i(4), i(3), i(2)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.resizeHandler = function() {
                    i.checkCollapse(i.element), i.setWidth(i.element, !0), i.setStickyClass(), i.anchorPositions = i.setAnchorPositions(i.element)
                }, this.scrollHandler = function(e) {
                    var t = s.selectFirstElement("ul", i.element),
                        n = t.getAttribute("aria-hidden");
                    i.updateNavLinks(i.element), n && t.setAttribute("aria-hidden", "true"), i.setWidth(i.element)
                }, this.clickHandler = function(e) {
                    var t = e.target || e.srcElement,
                        n = t.getAttribute("href"),
                        o = "aria-hidden";
                    if (n && !(n.indexOf("#") < 0)) {
                        s.hasClass(t, "f-dropdown-link") && s.preventDefault(e), i.updateNavLinks(i.element);
                        var r = s.selectFirstElement("ul", i.element),
                            a = "true" !== r.getAttribute("aria-hidden"),
                            l = s.getClientRect(i.element).height + 10,
                            h = n.split("#")[1],
                            c = s.selectElements("[data-js-in-page-navigation-wrapper]").length > 0;
                        s.hasClass(t, "f-dropdown-link") ? a ? r.setAttribute(o, "true") : r.setAttribute(o, "false") : (s.hasClass(i.element, "f-vertical") ? c ? window.scrollTo(0, i.anchorPositions[h] - (s.hasClass(i.element, "f-dropdown") ? l : 0)) : window.scrollTo(0, i.anchorPositions[h]) : window.scrollTo(0, i.anchorPositions[h] - (c ? l : 0)), i.updateLinks(t))
                    }
                }, t && this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.navLinks = s.selectElements("ul a", this.element), this.navLinks && this.navLinks.length) {
                    if (this.anchorElements = this.getAnchorElements(), this.checkCollapse(this.element), this.setStickyClass(), this.anchorPositions = this.setAnchorPositions(this.element), s.addEvent(window, s.eventTypes.resize, this.resizeHandler), s.addEvent(window, s.eventTypes.scroll, this.scrollHandler), s.hasClass(this.element, "f-dropdown")) {
                        var e = s.selectFirstElement("a", this.element);
                        s.addEvent(e, s.eventTypes.click, this.clickHandler, !0)
                    }
                    this.setNavLinkHandler(this.navLinks)
                }
            }, t.prototype.teardown = function() {
                if (s.removeEvent(window, s.eventTypes.resize, this.resizeHandler), s.removeEvent(window, s.eventTypes.scroll, this.scrollHandler), s.hasClass(this.element, "f-dropdown")) {
                    var e = s.selectFirstElement("a", this.element);
                    s.removeEvent(e, s.eventTypes.click, this.clickHandler, !0)
                }
                for (var t = 0, i = this.navLinks; t < i.length; t++) {
                    var n = i[t];
                    s.removeEvent(n, s.eventTypes.click, this.clickHandler, !0)
                }
            }, t.prototype.setNavLinkHandler = function(e) {
                if (null !== e)
                    for (var t = 0, i = e; t < i.length; t++) {
                        var n = i[t];
                        s.addEvent(n, s.eventTypes.click, this.clickHandler, !0)
                    }
            }, t.prototype.setAnchorPositions = function(e) {
                if (this.anchorElements) {
                    for (var t = s.getClientRect(document.body).top, i = {}, n = 0, o = this.anchorElements; n < o.length; n++) {
                        var r = o[n];
                        r && (i[r.id] = s.getClientRect(r).top - t)
                    }
                    return i
                }
            }, t.prototype.getAnchorElements = function() {
                for (var e = [], t = s.selectElements("a", this.element), i = 0, o = t; i < o.length; i++) {
                    var r = o[i],
                        a = n.trim(r.getAttribute("href"));
                    null != a && 0 === a.indexOf("#") && e.push(s.selectFirstElement(a))
                }
                return e
            }, t.prototype.setStickyClass = function() {
                var e = s.getClientRect(this.element).top + this.getScrollY();
                return e < 0 && (s.addClass(this.element, "f-sticky"), s.css(this.element, "marginLeft", this.stickyOffsetLeft)), this.element
            }, t.prototype.checkCollapse = function(e) {
                if (e) {
                    var t = e.parentElement;
                    if (t) {
                        var n = t.children,
                            o = s.selectElements("li", e),
                            r = s.getClientRect(t).width,
                            a = 0,
                            l = "f-dropdown",
                            h = "f-vertical";
                        if (s.hasClass(e, l) || s.hasClass(e, h)) {
                            if (s.hasClass(e, l) && !s.hasClass(e, h))
                                for (var c = 0, u = n.length; c < u - 1; c++) o = s.selectElements("li", n[c]), o && o.length > 0 && !s.hasClass(n[c], l) && (a = s.getClientRect(o[o.length - 1]).right)
                        } else a = s.getClientRect(o[o.length - 1]).right;
                        return s.hasClass(e, "f-vertical") ? i.getWindowWidth() < 100 + r ? this.convertMenu(e, "dropdown") : this.convertMenu(e) : a > r || 0 === r ? this.convertMenu(e, "dropdown") : this.convertMenu(e)
                    }
                }
            }, t.prototype.convertMenu = function(e, t) {
                void 0 === t && (t = null);
                var i = "f-dropdown",
                    n = "f-hide";
                return "dropdown" === t ? s.hasClass(e, i) ? s.hasClass(e, n) && s.removeClass(e, n) : s.hasClass(e, n) || s.addClass(e, n) : s.hasClass(e, i) ? s.hasClass(e, n) || s.addClass(e, n) : s.hasClass(e, n) && s.removeClass(e, n), e
            }, t.prototype.setWidth = function(e, t) {
                void 0 === t && (t = !1);
                var i = e.parentElement,
                    n = "f-sticky",
                    o = "[data-js-in-page-navigation-wrapper]",
                    r = s.selectFirstElement("ul", e),
                    a = s.hasClass(e, n),
                    l = this.getScrollY(),
                    h = s.getClientRect(i).top + l;
                this.stickyOffsetLeft = s.getClientRect(i).left, this.elementWidth = s.getClientRect(i).width;
                var c = s.selectElements(o);
                return t === !0 && s.hasClass(e, n) && (r.style.width = this.elementWidth + "px", r.style.marginLeft = this.stickyOffsetLeft + "px"), c.length > 0 && (h < l ? s.hasClass(e, n) || (s.addClass(e, n), r.style.width = this.elementWidth + "px", r.style.marginLeft = this.stickyOffsetLeft + "px") : a !== !1 && (s.removeClass(e, n), s.css(r, "margin-left", ""), s.css(r, "width", ""))), e
            }, t.prototype.updateLinks = function(e) {
                if (this.element && this.navLinks && 0 !== this.navLinks.length) {
                    for (var t = 0, i = this.navLinks; t < i.length; t++) {
                        var n = i[t];
                        n.blur(), s.removeClass(n, "f-active")
                    }
                    if (s.addClass(e, "f-active"), s.hasClass(this.element, "f-dropdown")) {
                        var o = s.selectFirstElement("a", this.element);
                        o.setAttribute("href", e.getAttribute("href")), o.innerHTML = e.innerHTML
                    }
                    return this.element
                }
            }, t.prototype.updateNavLinks = function(e) {
                if (e) {
                    var t = this.getAnchorElements(),
                        i = s.selectFirstElement("[data-js-in-page-navigation-wrapper]");
                    if (i && t && t.length) {
                        i.style.top = e.offsetHeight + "px";
                        for (var n = t.length - 1; n >= 0; n--)
                            if (t[n].getBoundingClientRect().top <= 50) {
                                this.updateLinks(s.selectElements("a", e)[n]);
                                break
                            }
                    }
                }
            }, t.prototype.getScrollY = function() {
                return window.scrollY || window.pageYOffset || document.documentElement.scrollTop
            }, t.selector = ".c-in-page-navigation", t.typeName = "InPageNavigation", t
        }(r.ObservableComponent);
        t.InPageNavigation = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(25), i(8), i(3)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.cssClassNames = {
                    width: {
                        large: "f-width-large",
                        small: "f-width-small"
                    },
                    height: {
                        large: "f-height-large",
                        medium: "f-height-medium",
                        small: "f-height-small"
                    }
                }, this.mappings = [
                    [
                        [300, 0],
                        [150, 320],
                        [0, 160]
                    ],
                    [
                        [300, 540],
                        [150, 270],
                        [0, 135]
                    ],
                    [
                        [400, 768],
                        [200, 384],
                        [0, 0]
                    ],
                    [
                        [400, 542],
                        [200, 271],
                        [0, 135]
                    ],
                    [
                        [400, 542],
                        [200, 271],
                        [0, 135]
                    ],
                    [
                        [400, 542],
                        [200, 271],
                        [0, 135]
                    ]
                ], this.update(), n.BreakpointTracker.getBreakpointTracker().subscribe({
                    onBreakpointChanged: function(e) {
                        i.onBreakpointChanged(e)
                    }
                })
            }
            return o(t, e), t.prototype.update = function() {
                this.onBreakpointChanged({
                    breakpoint: n.BreakpointTracker.getBreakpointTracker().getBreakpoint(),
                    width: 0
                })
            }, t.prototype.teardown = function() {}, t.prototype.removeClasses = function(e) {
                null != e && r.removeClasses(e, this.concatenateCssClasses(this.cssClassNames))
            }, t.prototype.applySizeClasses = function(e, t) {
                var i = s.getDimensions(e);
                if (null != i && s.isNumber(i.height) && s.isNumber(i.width)) {
                    var n, o = [];
                    i.height >= this.mappings[t][0][0] ? (o.push(this.cssClassNames.height.large), n = i.width >= this.mappings[t][0][1] ? this.cssClassNames.width.large : this.cssClassNames.width.small, o.push(n)) : i.height >= this.mappings[t][1][0] ? (o.push(this.cssClassNames.height.medium), n = i.width >= this.mappings[t][1][1] ? this.cssClassNames.width.large : this.cssClassNames.width.small, o.push(n)) : (o.push(this.cssClassNames.height.small), n = i.width >= this.mappings[t][2][1] ? this.cssClassNames.width.large : this.cssClassNames.width.small, o.push(n)), r.addClasses(this.element, o)
                }
            }, t.prototype.onBreakpointChanged = function(e) {
                this.removeClasses(this.element), this.applySizeClasses(this.element, e.breakpoint)
            }, t.prototype.concatenateCssClasses = function(e) {
                if (null != e) {
                    var t = [];
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var n = e,
                                s = n[i];
                            if ("object" == typeof s)
                                for (var o in s) s.hasOwnProperty(o) && t.push(s[o])
                        }
                    return t
                }
            }, t.selector = ".c-mosaic-placement", t.typeName = "MosaicPlacement", t
        }(i.ObservableComponent);
        t.MosaicPlacement = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(10), i(41), i(37), i(42), i(40), i(3), i(8)], s = function(e, t, i, n, s, r, a, l, h, c) {
        "use strict";
        var u = function(e) {
            function t(i, n) {
                void 0 === n && (n = null), e.call(this, t.selectMultiSlideCarousel(i, n), n), this.multiFeatureElement = i, this.activeContentIndex = 0
            }
            return o(t, e), t.selectMultiSlideCarousel = function(e, t) {
                var n = h.selectFirstElement(r.MultiSlideCarousel.selector, e);
                return n && (n.setAttribute(i.ObservableComponent.mwfClassAttribute, t && t.mwfClass ? t.mwfClass : "MultiFeature"), n.removeAttribute(i.ObservableComponent.initializeAttribute)), n
            }, t.prototype.update = function() {
                return !!e.prototype.update.call(this) && (e.prototype.subscribe.call(this, this), this.confirmCorrectShape(), !0)
            }, t.prototype.teardown = function() {
                e.prototype.teardown.call(this), e.prototype.unsubscribe.call(this, this), this.controller && this.controller.unsubscribe(this)
            }, t.prototype.loadMultiSlideController = function() {
                var e, o = this,
                    r = h.selectFirstElement(t.controllerSelector, this.multiFeatureElement);
                r && h.hasClass(r, "c-sequence-indicator") ? (this.loadContentElements(r), e = l.SequenceIndicator) : r && r.parentElement && h.hasClass(r.parentElement, "c-pivot") ? (r = r.parentElement, e = a.Pivot, r.removeAttribute(i.ObservableComponent.initializeAttribute)) : r && r.firstElementChild && r.firstElementChild.firstElementChild && h.hasClass(r.firstElementChild.firstElementChild, "c-logo") && (this.loadContentElements(r), e = s.LogoController, r.setAttribute(i.ObservableComponent.mwfClassAttribute, "LogoController"), h.addClass(r, l.SequenceIndicator.selector)), n.ComponentFactory.create([{
                    elements: [r],
                    component: e,
                    callback: function(e) {
                        e && e.length && (o.controller = e[0], o.controller && (o.controller.subscribe(o), o.controller.setControllerIndex(o.activeIndex, !1)))
                    },
                    eventToBind: "DOMContentLoaded"
                }])
            }, t.prototype.onSlideRangeChanged = function(e) {
                e && e.fullyVisibleItemRange && e.fullyVisibleItemRange.length && (this.controller && this.controller.setControllerIndex(e.fullyVisibleItemRange[0], e.userInitiated), this.updateMultiFeatureContentIndex(e.fullyVisibleItemRange[0]))
            }, t.prototype.updateMultiFeatureContentIndex = function(e) {
                !this.contentElements || !c.isNumber(e) || e < 0 || e >= this.contentElements.length && 1 !== this.contentElements.length || (e = Math.min(e, this.contentElements.length - 1), c.isNumber(this.activeContentIndex) && this.activeContentIndex >= 0 && this.activeContentIndex < this.contentElements.length && h.removeClass(this.contentElements[this.activeContentIndex], t.activeItemClass), h.addClass(this.contentElements[e], t.activeItemClass), this.activeContentIndex = e)
            }, t.prototype.loadContentElements = function(e) {
                this.contentElements = h.selectElements(t.contentSelector, this.multiFeatureElement)
            }, t.prototype.confirmCorrectShape = function() {
                var e = h.hasClass(this.multiFeatureElement, "f-align-center"),
                    t = h.selectFirstElement(".c-carousel", this.multiFeatureElement),
                    i = t.parentElement;
                if ("SECTION" === i.nodeName || e) {
                    if (e) {
                        var n = h.selectFirstElement(".c-sequence-indicator", this.multiFeatureElement),
                            s = i.children;
                        if (n && Array.prototype.indexOf.call(s, n) !== [0]) {
                            var o = h.selectFirstElement(".m-area-heading", this.multiFeatureElement);
                            o ? i.insertBefore(n, s[1]) : i.insertBefore(n, s[0])
                        }
                        i.insertBefore(t, s[s.length - 1].nextSibling)
                    }
                } else {
                    var r = i.parentElement;
                    r.appendChild(t), r.removeChild(i)
                }
            }, t.prototype.onControllerIndexChanged = function(t) {
                t && (e.prototype.setActiveSlide.call(this, t.currentIndex), this.updateMultiFeatureContentIndex(t.currentIndex))
            }, t.selector = ".m-multi-feature", t.typeName = "MultiFeature", t.controllerSelector = '[role="tablist"]', t.controllerItemsSelector = '[role="tab"]', t.contentSelector = 'section > ul > li[role="tabpanel"], section > div > ul > li[role="tabpanel"]', t.activeItemClass = "f-active", t.ariaControls = "aria-controls", t
        }(r.MultiSlideCarousel);
        t.MultiFeature = u
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(38), i(10), i(40), i(9), i(3), i(8)], s = function(e, t, i, n, s, r, a, l) {
        "use strict";
        var h = function(e) {
            function t(t, i) {
                var n = this;
                void 0 === i && (i = null), e.call(this, t, i), this.carouselElement = t, this.isAutoPlayPaused = !0, this.autoPlayTimer = -1, this.hasContentFocus = !1, this.onActionToggled = function(e) {
                    e && (e.toggled ? n.startAutoPlay() : n.pauseAutoPlay())
                }, this.suspendAutoPlay = function() {
                    n.clearAutoPlayTimers()
                }, this.resumeAutoPlay = function() {
                    n.isAutoPlayPaused || n.setAutoPlayInterval()
                }, this.onContentFocus = function() {
                    n.hasContentFocus = !0, n.suspendAutoPlay()
                }, this.onContentBlur = function() {
                    n.hasContentFocus = !1, n.resumeAutoPlay()
                }
            }
            return o(t, e), t.prototype.update = function() {
                var i = this;
                if (!e.prototype.update.call(this)) return !1;
                var s = a.selectFirstElement(r.ActionToggle.selector, this.carouselElement);
                return s && (s.setAttribute("aria-hidden", this.slides.length > 1 ? "false" : "true"), n.ComponentFactory.create([{
                    component: r.ActionToggle,
                    elements: [s],
                    callback: function(e) {
                        e.length > 0 && (i.autoPlayActionToggle = e[0], i.autoPlayActionToggle && (i.autoPlayActionToggle.subscribe(i), a.addEvent(i.carouselElement, a.eventTypes.mouseover, i.suspendAutoPlay), a.addEvent(i.carouselElement, a.eventTypes.mouseout, i.resumeAutoPlay), i.focusContentElements = a.selectElements(t.focusContentSelector, i.carouselElement), i.focusContentElements && (i.hasContentFocus = i.focusContentElements.indexOf(document.activeElement) !== -1, a.addEvent(i.focusContentElements, a.eventTypes.focus, i.onContentFocus), a.addEvent(i.focusContentElements, a.eventTypes.blur, i.onContentBlur)), i.autoPlayIntervalDuration = Math.max(t.autoPlayMinimumInterval, parseInt(i.carouselElement.getAttribute(t.autoPlayIntervalAttribute), 10) || t.autoPlayDefaultInterval), a.hasClass(i.carouselElement, t.autoPlayClass) && i.slides.length > 1 && i.autoPlayActionToggle.isToggled() && !i.hasContentFocus && "formwfvdiff" !== l.getQSPValue("mwfrun").toLowerCase() && i.startAutoPlay()))
                    },
                    eventToBind: "DOMContentLoaded"
                }])), this.loadMultiSlideController(), !0
            }, t.prototype.teardown = function() {
                e.prototype.teardown.call(this), this.autoPlayActionToggle && (this.autoPlayActionToggle.unsubscribe(this), a.removeEvent(this.carouselElement, a.eventTypes.mouseover, this.suspendAutoPlay), a.removeEvent(this.carouselElement, a.eventTypes.mouseout, this.resumeAutoPlay), this.focusContentElements && (a.removeEvent(this.focusContentElements, a.eventTypes.focus, this.onContentFocus), a.removeEvent(this.focusContentElements, a.eventTypes.blur, this.onContentBlur)), this.clearAutoPlayTimers(), this.isAutoPlayPaused = !0, this.autoPlayActionToggle = null), this.hasContentFocus = !1, this.sequenceIndicator && this.sequenceIndicator.unsubscribe(this)
            }, t.prototype.getSlides = function() {
                return a.selectElements(i.CarouselBase.allChildSelectors, this.carouselElement)
            }, t.prototype.getFirstActiveIndex = function() {
                for (var e = 0; e < this.slides.length; e++)
                    if (a.hasClass(this.slides[e], i.CarouselBase.activeClass)) return e;
                return 0
            }, t.prototype.isScrollablePrevious = function() {
                return !!this.slides && this.slides.length > 1
            }, t.prototype.isScrollableNext = function() {
                return !!this.slides && this.slides.length > 1
            }, t.prototype.previousSlide = function() {
                this.setActiveSlide(this.activeIndex - 1)
            }, t.prototype.nextSlide = function() {
                this.setActiveSlide(this.activeIndex + 1)
            }, t.prototype.setActiveSlide = function(n, s) {
                void 0 === s && (s = !0);
                var o = this.activeIndex,
                    r = n;
                if (n < 0 ? n = this.slides.length - 1 : n >= this.slides.length && (n = 0), e.prototype.setActiveSlide.call(this, n, s)) {
                    if (o !== -1) {
                        a.removeClasses(this.slides[o], [i.CarouselBase.activeClass, t.animateNextClass, t.animatePreviousClass]);
                        var l = o < r ? t.animateNextClass : t.animatePreviousClass;
                        a.addClass(this.slides[this.activeIndex], l)
                    }
                    this.resumeAutoPlay(), this.sequenceIndicator && this.sequenceIndicator.setControllerIndex(n, !1);
                    var h = o === -1 ? null : e.prototype.getCollectionItem.call(this, this.slides[o]),
                        c = e.prototype.getCollectionItem.call(this, this.slides[this.activeIndex]);
                    h && h.onCollectionItemHidden(), c && c.onCollectionItemShown(), e.prototype.initiatePublish.call(this, {
                        fullyVisibleItemRange: [n, n],
                        partiallyVisibleItemRange: [n, n],
                        userInitiated: s
                    })
                }
            }, t.prototype.startAutoPlay = function() {
                this.setAutoPlayInterval(), this.isAutoPlayPaused = !1
            }, t.prototype.pauseAutoPlay = function() {
                this.isAutoPlayPaused = !0, this.clearAutoPlayTimers()
            }, t.prototype.setAutoPlayInterval = function() {
                var e = this;
                this.clearAutoPlayTimers(), this.autoPlayTimer = setTimeout(function() {
                    e.setActiveSlide(e.activeIndex + 1, !1)
                }, this.autoPlayIntervalDuration)
            }, t.prototype.clearAutoPlayTimers = function() {
                this.autoPlayTimer !== -1 && (clearTimeout(this.autoPlayTimer), this.autoPlayTimer = -1)
            }, t.prototype.loadMultiSlideController = function() {
                var e = this,
                    t = a.selectFirstElement(s.SequenceIndicator.selector, this.carouselElement);
                t && n.ComponentFactory.create([{
                    component: s.SequenceIndicator,
                    elements: [t],
                    callback: function(i) {
                        i && i.length && (e.sequenceIndicator = i[0], e.sequenceIndicator && (t.setAttribute("aria-hidden", e.slides.length > 1 ? "false" : "true"), e.sequenceIndicator.subscribe(e)))
                    },
                    eventToBind: "DOMContentLoaded"
                }])
            }, t.prototype.onControllerIndexChanged = function(e) {
                e && this.setActiveSlide(e.currentIndex)
            }, t.selector = ".c-carousel[class*=f-multi-slide]", t.typeName = "MultiSlideCarousel", t.animateNextClass = "f-animate-next", t.animatePreviousClass = "f-animate-previous", t.focusContentSelector = ".c-call-to-action", t.autoPlayClass = "f-auto-play", t.autoPlayIntervalAttribute = "data-js-interval", t.autoPlayDefaultInterval = 6e3, t.autoPlayMinimumInterval = 5e3, t
        }(i.CarouselBase);
        t.MultiSlideCarousel = h
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(10), i(7), i(39), i(4), i(3), i(8)], s = function(e, t, i, n, s, r, a, l, h) {
        "use strict";
        var c = function(e) {
            function t(t, n) {
                var s = this;
                e.call(this, t, n), this.carouselElement = t, this.activeIndex = -1, this.onFlipperClicked = function(e) {
                    l.getEventTargetOrSrcElement(e) === s.previousButton ? s.previousSlide() : s.nextSlide()
                }, this.swipeHandler = function(e) {
                    var t = e === r.SwipeDirection.Right ? s.direction === l.Direction.left : s.direction !== l.Direction.left;
                    t && s.isScrollableNext() ? s.nextSlide() : !t && s.isScrollablePrevious() && s.previousSlide()
                }, i.ObservableComponent.shouldInitializeAsClass(t, n) && (this.direction = l.getDirection(), this.directionValue = l.Direction[this.direction], this.requestAnimationFrame = l.SafeBrowserApis.requestAnimationFrame, l.preventDefaultSwipeAction(this.element), this.requestAnimationFrame.call(window, function() {
                    return s.update()
                }))
            }
            return o(t, e), t.prototype.update = function() {
                var e = this;
                return !(!this.carouselElement || !this.hasSlides()) && (this.requestAnimationFrame.call(window, function() {
                    return e.setActiveSlide(e.getFirstActiveIndex(), !1)
                }), this.previousButton = l.selectFirstElement(t.previousButtonSelector, this.carouselElement), this.nextButton = l.selectFirstElement(t.nextButtonSelector, this.carouselElement), this.previousButton && this.nextButton && (l.addEvent(this.previousButton, l.eventTypes.click, this.onFlipperClicked), l.addEvent(this.nextButton, l.eventTypes.click, this.onFlipperClicked)), this.swipe = new r.Swipe(this.carouselElement, {
                    end: this.swipeHandler
                }), !0)
            }, t.prototype.teardown = function() {
                this.previousButton && this.nextButton && (l.removeEvent(this.previousButton, l.eventTypes.click, this.onFlipperClicked), l.removeEvent(this.nextButton, l.eventTypes.click, this.onFlipperClicked)), this.swipe && this.swipe.tearDown(), this.activeIndex = -1, this.slides = null, this.previousButton = null, this.nextButton = null
            }, t.prototype.hasSlides = function() {
                return this.slides = this.getSlides(), !!this.slides && !!this.slides.length
            }, t.prototype.getCollectionItem = function(e) {
                var t;
                return e && e.firstElementChild && n.ComponentFactory.enumerateComponents(e.firstElementChild, function(e, i) {
                    return i.onCollectionItemHidden && i.onCollectionItemShown && (t = i), !t
                }), t
            }, t.prototype.setActiveSlide = function(e, i) {
                return void 0 === i && (i = !0), !(!h.isNumber(e) || e < 0 || e >= this.slides.length || e === this.activeIndex) && (this.activeIndex >= 0 && this.activeIndex < this.slides.length && l.removeClass(this.slides[this.activeIndex], t.activeClass), this.activeIndex = e, l.addClass(this.slides[e], t.activeClass), this.updateTheme(), this.updateFlippers(), !0)
            }, t.prototype.updateTheme = function() {
                l.removeClasses(this.carouselElement, [t.themeDarkClass, t.themeLightClass]);
                var e = this.slides[this.activeIndex].getAttribute(t.slideThemeAttribute);
                a.isNullOrWhiteSpace(e) || l.addClass(this.carouselElement, t.themePrefix + e)
            }, t.prototype.updateFlippers = function() {
                this.isScrollableNext() ? l.addClass(this.carouselElement, t.nextFlipperClass) : l.removeClass(this.carouselElement, t.nextFlipperClass), this.isScrollablePrevious() ? l.addClass(this.carouselElement, t.previousFlipperClass) : l.removeClass(this.carouselElement, t.previousFlipperClass)
            }, t.prototype.publish = function(e, t) {
                e.onSlideRangeChanged(t)
            }, t.selector = ".c-carousel", t.activeClass = "f-active", t.allChildSelectors = t.selector + " > * > ul > li", t.slideThemeAttribute = "data-f-theme", t.themePrefix = "theme-", t.previousFlipperClass = "f-scrollable-previous", t.nextFlipperClass = "f-scrollable-next", t.themeLightClass = "theme-light", t.themeDarkClass = "theme-dark", t.previousButtonSelector = ".c-flipper.f-previous, .c-flipper.f-left", t.nextButtonSelector = ".c-flipper.f-next, .c-flipper.f-right", t
        }(s.Publisher);
        t.CarouselBase = c
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(3)], s = function(e, t, i) {
        "use strict";
        var n = function() {
            function e(e, t, n) {
                var o = this;
                this.element = e, this.swipeEventHandlers = t, this.active = !1, this.swipeDistanceMarker = 10, this.pointerEvents = {
                    mouse: {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    },
                    touch: {
                        start: "touchstart",
                        move: "touchmove",
                        end: "touchend",
                        cancel: "touchcancel"
                    },
                    pointer: {
                        start: "pointerdown",
                        move: "pointermove",
                        end: "pointerup",
                        cancel: "pointercancel"
                    }
                }, this.maximumVerticalDistance = 200, this.maximumVerticalRatio = .85, this.minimumHorizontalDistance = 30, this.endHandler = function(e) {
                    if (o.active) {
                        o.active = !1;
                        var t = i.getCoordinates(e);
                        if (o.validSwipe(t, o.startCoordinate)) {
                            var n = t.x - o.startCoordinate.x > 0 ? s.Left : s.Right;
                            o.swipeEventHandlers.end && o.swipeEventHandlers.end(n)
                        }
                    }
                }, this.startHandler = function(e) {
                    o.startCoordinate = i.getCoordinates(e), o.active = !0, o.totalX = 0, o.totalY = 0, o.endCoordinate = o.startCoordinate, o.swipeEventHandlers.start && o.swipeEventHandlers.start(o.startCoordinate, e)
                }, this.cancelHandler = function(e) {
                    o.active = !1, o.swipeEventHandlers.cancel && o.swipeEventHandlers.cancel(e)
                }, this.moveHandler = function(e) {
                    if (o.active && o.startCoordinate) {
                        var t = i.getCoordinates(e);
                        if (o.totalX += Math.abs(t.x - o.endCoordinate.x), o.totalY += Math.abs(t.y - o.endCoordinate.y), o.endCoordinate = t, !(o.totalX < o.swipeDistanceMarker && o.totalY < o.swipeDistanceMarker)) {
                            if (o.totalY > o.totalX) return o.active = !1, void(o.swipeEventHandlers.cancel && o.swipeEventHandlers.cancel(e));
                            i.preventDefault(e), o.swipeEventHandlers.move && o.swipeEventHandlers.move(t, e)
                        }
                    }
                }, this.element && t && (this.pointerTypes = n || ["touch", "pointer", "mouse"], i.addEvents(this.element, this.getEvents(this.pointerTypes, "start"), this.startHandler), i.addEvents(this.element, this.getEvents(this.pointerTypes, "move"), this.moveHandler), i.addEvents(this.element, this.getEvents(this.pointerTypes, "end"), this.endHandler), i.addEvents(this.element, this.getEvents(this.pointerTypes, "cancel"), this.cancelHandler))
            }
            return e.prototype.getEvents = function(e, t) {
                for (var i = [], n = 0, s = e; n < s.length; n++) {
                    var o = s[n],
                        r = this.pointerEvents[o][t];
                    r && i.push(r)
                }
                return i.join(" ")
            }, e.prototype.tearDown = function() {
                i.removeEvents(this.element, this.getEvents(this.pointerTypes, "start"), this.startHandler), i.removeEvents(this.element, this.getEvents(this.pointerTypes, "move"), this.moveHandler), i.removeEvents(this.element, this.getEvents(this.pointerTypes, "end"), this.endHandler), i.removeEvents(this.element, this.getEvents(this.pointerTypes, "cancel"), this.cancelHandler)
            }, e.prototype.validSwipe = function(e, t) {
                if (!t) return !1;
                var i = Math.abs(e.y - t.y),
                    n = Math.abs(e.x - t.x);
                return i < this.maximumVerticalDistance && n > this.minimumHorizontalDistance && i / n < this.maximumVerticalRatio
            }, e
        }();
        t.Swipe = n,
            function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(t.SwipeDirection || (t.SwipeDirection = {}));
        var s = t.SwipeDirection
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(7), i(3), i(8)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = function(e) {
            function t(n, o) {
                var a = this;
                void 0 === o && (o = null), e.call(this, n, o), this.sequenceIndicatorElement = n, this.selectedAttribute = t.ariaSelected, this.setActiveIndex = function(e) {
                    return r.apiDeprecated("SequenceIndicator.setActiveIndex() is deprecated, please use SequenceIndicator.setControllerIndex() instead."), a.setControllerIndex(e)
                }, this.setControllerIndex = function(e, t) {
                    if (void 0 === t && (t = !1), e < 0 || e > a.items.length - 1 || e === a.activeIndex) return !1;
                    var i = a.activeIndex,
                        n = a.items[a.activeIndex],
                        s = a.items[e],
                        o = document.activeElement === n;
                    return a.deselectItem(n), a.selectItem(s), a.activeIndex = e, (t || o) && s.focus(), a.initiatePublish({
                        previousIindex: i,
                        currentIndex: e,
                        index: e
                    }), !0
                }, this.handleClickEvent = function(e) {
                    s.preventDefault(e);
                    var t = s.getEventTargetOrSrcElement(e);
                    if (t) {
                        var i = t.getAttribute("role");
                        !i && t.parentElement && (t = "tab" === t.parentElement.getAttribute("role") ? t.parentElement : null), a.setControllerIndex(a.items.indexOf(t))
                    }
                }, this.onKeydown = function(e) {
                    switch (r.getKeyCode(e)) {
                        case 39:
                        case 40:
                            a.next();
                            break;
                        case 37:
                        case 38:
                            a.previous();
                            break;
                        default:
                            switch (r.getVirtualKey(e)) {
                                case "ArrowRight":
                                case "ArrowDown":
                                    a.next();
                                    break;
                                case "ArrowLeft":
                                case "ArrowUp":
                                    a.previous()
                            }
                    }
                }, i.ObservableComponent.shouldInitializeAsClass(n, o) && this.update()
            }
            return o(t, e), t.prototype.update = function() {
                var e;
                if (!this.sequenceIndicatorElement) return !1;
                if ("radiogroup" === this.sequenceIndicatorElement.getAttribute("role") && (this.selectedAttribute = t.ariaChecked), this.items = s.selectElements(this.constructor.itemSelector, this.sequenceIndicatorElement), !this.items.length) return !1;
                for (var i = 0, n = this.items; i < n.length; i++) {
                    var o = n[i];
                    o.getAttribute(this.selectedAttribute) === t.selectedValue && (e = this.items.indexOf(o)), this.deselectItem(o)
                }
                return this.setControllerIndex(e || 0), s.addEvent(this.sequenceIndicatorElement, s.eventTypes.click, this.handleClickEvent), s.addEvent(this.sequenceIndicatorElement, s.eventTypes.keydown, this.onKeydown, !0), !0
            }, t.prototype.teardown = function() {
                s.removeEvent(this.sequenceIndicatorElement, s.eventTypes.click, this.handleClickEvent), s.removeEvent(this.sequenceIndicatorElement, s.eventTypes.keydown, this.onKeydown)
            }, t.prototype.publish = function(e, t) {
                var i = e,
                    n = e;
                i.onIndexChanged && i.onIndexChanged(t), n.onControllerIndexChanged && n.onControllerIndexChanged(t)
            }, t.prototype.selectItem = function(e) {
                e && (e.setAttribute(this.selectedAttribute, t.selectedValue), e.setAttribute("tabindex", "0"), s.addClass(e, t.activeItemClass))
            }, t.prototype.deselectItem = function(e) {
                e && (e.setAttribute(this.selectedAttribute, t.deselectedValue), e.setAttribute("tabindex", "-1"), s.removeClass(e, t.activeItemClass))
            }, t.prototype.next = function() {
                var e;
                e = this.activeIndex === this.items.length - 1 ? 0 : this.activeIndex + 1, this.setControllerIndex(e)
            }, t.prototype.previous = function() {
                var e;
                e = 0 === this.activeIndex ? this.items.length - 1 : this.activeIndex - 1, this.setControllerIndex(e)
            }, t.selector = ".c-sequence-indicator", t.typeName = "SequenceIndicator", t.itemSelector = "button", t.selectedValue = "true", t.deselectedValue = "false", t.ariaSelected = "aria-selected", t.ariaChecked = "aria-checked", t.activeItemClass = "f-active", t
        }(n.Publisher);
        t.SequenceIndicator = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(40)], s = function(e, t, i) {
        "use strict";
        var n = function(e) {
            function t(t, i) {
                void 0 === i && (i = null), e.call(this, t, i), this.logoControllerElement = t
            }
            return o(t, e), t.selector = ".c-logo-controller", t.typeName = "LogoController", t.itemSelector = '[role="tab"]', t
        }(i.SequenceIndicator);
        t.LogoController = n
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(7), i(3), i(8)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = function(e) {
            function t(n, o) {
                var a = this;
                void 0 === o && (o = null), e.call(this, n, o), this.pivotElement = n, this.initializeFlippers = function() {
                    a.primaryFlipper || a.secondaryFlipper || (a.primaryFlipper = s.selectFirstElement(".c-pivot .c-flipper.f-previous", a.element), a.secondaryFlipper = s.selectFirstElement(".c-pivot .c-flipper.f-next", a.element), s.addEvent([a.primaryFlipper, a.secondaryFlipper], s.eventTypes.click, a.onFlipperClicked), s.addEvent([a.primaryFlipper, a.secondaryFlipper], s.eventTypes.keydown, a.onFlipperKeydown))
                }, this.initializeWidths = function() {
                    a.flipperWidth = 24, a.pivotTabWidths = [], a.pivotTabWidthsTotal = 0, a.headerWidth = s.getClientRectWithMargin(a.pivotHeader).width;
                    for (var e = 0; e < a.pivotTabs.length; e++) {
                        var t = s.getClientRectWithMargin(a.pivotTabs[e]).width;
                        a.pivotTabWidths.push(t), a.pivotTabWidthsTotal += t
                    }
                    a.pivotPosition = 0, a.setTabShiftAmounts()
                }, this.checkNeedsFlippers = function() {
                    return a.pivotTabWidthsTotal > a.headerWidth
                }, this.setTabView = function() {
                    a.checkNeedsFlippers() ? 0 === a.currentTabShift || "undefined" == typeof a.currentTabView ? a.currentTabView = 0 : a.currentTabShift === a.tabShiftAmounts.length - 1 ? a.currentTabView = 2 : a.currentTabShift > 0 && a.currentTabShift < a.tabShiftAmounts.length - 1 && (a.currentTabView = 1) : a.currentTabView = 3
                }, this.updateFlippers = function() {
                    a.primaryFlipper && a.secondaryFlipper && (1 === a.currentTabView || 2 === a.currentTabView ? a.showFlipper(a.primaryFlipper) : a.hideFlipper(a.primaryFlipper), 0 === a.currentTabView || 1 === a.currentTabView ? a.showFlipper(a.secondaryFlipper) : a.hideFlipper(a.secondaryFlipper), 1 !== a.currentTabView && 2 !== a.currentTabView && 0 !== a.currentTabView ? s.css(a.pivotHeader, "justify-content", a.pivotTabJustification) : s.css(a.pivotHeader, "justify-content", "inherit"))
                }, this.onFlipperClicked = function(e) {
                    s.preventDefault(e);
                    var t = s.getEventTargetOrSrcElement(e);
                    t === a.secondaryFlipper ? a.onSecondaryFlipperChanged() : a.onPrimaryFlipperChanged(), a.setTabView(), a.updateFlippers()
                }, this.onFlipperKeydown = function(e) {
                    var t = r.getKeyCode(e),
                        i = r.getVirtualKey(e),
                        n = s.getEventTargetOrSrcElement(e);
                    13 !== t && 32 !== t && "Enter" !== i && " " !== i || (s.preventDefault(e), n === a.secondaryFlipper ? a.onSecondaryFlipperChanged() : a.onPrimaryFlipperChanged())
                }, this.onWindowResized = function(e) {
                    a.currentTabShift = 0, a.headerWidth = s.getClientRectWithMargin(a.pivotHeader).width, a.updatePivotPosition(), a.initializeFlippers(), a.currentTabView = 3, a.updateFlippers(), setTimeout(function() {
                        a.checkNeedsFlippers() && (a.initializeWidths(), a.setTabView(), a.updateFlippers())
                    }, t.debouncedTimeout)
                }, this.setControllerIndex = function(e, t) {
                    return void 0 === t && (t = !1), !(!a.pivotTabs || e < 0 || e >= a.pivotTabs.length) && (a.onPivotChanged(a.pivotTabs[e], t), !0)
                }, this.onPivotClicked = function(e) {
                    s.preventDefault(e);
                    for (var t = s.getEventTargetOrSrcElement(e), i = 0, n = a.pivotTabs; i < n.length; i++) {
                        var o = n[i];
                        if (s.isDescendentOrSelf(o, t)) {
                            a.onPivotChanged(o);
                            break
                        }
                    }
                }, this.onKeydown = function(e) {
                    var t, i = r.getKeyCode(e),
                        n = r.getVirtualKey(e);
                    if (13 === i || 32 === i || "Enter" === n || " " === n ? s.preventDefault(e) : 37 === i || "ArrowLeft" === n ? t = -1 : 39 !== i && "ArrowRight" !== n || (t = 1), t) {
                        s.preventDefault(e), t *= a.isLtr ? 1 : -1;
                        for (var o = void 0, l = 0; l < a.pivotTabs.length; l++)
                            if (a.pivotTabs[l] === a.activePivotHeader) {
                                var h = l + t;
                                h >= a.pivotTabs.length ? h = 0 : h < 0 && (h = a.pivotTabs.length - 1), o = a.pivotTabs[h];
                                break
                            }
                        o && a.onPivotChanged(o)
                    }
                }, i.ObservableComponent.shouldInitializeAsClass(n, o) && this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (!this.pivotElement) return !1;
                this.pivots = [];
                for (var e = s.selectElements(".c-pivot > section", this.element), i = 0, n = e; i < n.length; i++) {
                    var o = n[i];
                    o.parentElement === this.element && this.pivots.push(o)
                }
                if (s.selectFirstElement("header", this.element) ? (this.pivotString = "header > a", this.pivotHeader = s.selectFirstElement("header", this.element)) : (this.pivotString = "div > a", this.pivotHeader = s.selectFirstElement("div", this.element)), this.pivotTabJustification = s.css(this.pivotHeader, "justify-content"), this.pivots && this.pivots.length && this.pivotHeader) {
                    var r = void 0;
                    if (this.pivotTabs = s.selectElements(this.pivotString, this.pivotHeader), this.pivotTabs && this.pivotTabs.length > 1) {
                        for (var a = 0, l = this.pivotTabs; a < l.length; a++) {
                            var h = l[a];
                            s.hasClass(h, t.activePivotSelector) && (r ? s.removeClass(h, t.activePivotSelector) : r = h), h.setAttribute(t.tabIndexAttribute, "-1"), h.setAttribute("href", "#"), h.setAttribute(t.ariaSelected, "false")
                        }
                        r || (r = this.pivotTabs[0]), this.isLtr = s.getDirection(this.pivotHeader) === s.Direction.left, this.direction = this.isLtr ? s.Direction[s.Direction.left] : s.Direction[s.Direction.right], this.onPivotChanged(r, !1), s.addEvent(this.pivotHeader, s.eventTypes.click, this.onPivotClicked), s.addEvent(this.pivotHeader, s.eventTypes.keydown, this.onKeydown)
                    }
                    this.initializeWidths(), this.checkNeedsFlippers() && (this.initializeFlippers(), this.setTabView(), this.updateFlippers()), this.resizeListener = s.addDebouncedEvent(window, s.eventTypes.resize, this.onWindowResized)
                }
            }, t.prototype.setTabShiftAmounts = function() {
                if (!(this.pivotTabs.length < 2)) {
                    var e = this.pivotTabs[1],
                        t = parseFloat(s.css(e, "margin-" + this.direction)) - this.flipperWidth,
                        i = t,
                        n = 0;
                    switch (this.pivotPosition) {
                        case 0:
                            this.setPivotPositionStart(i, n);
                            break;
                        case 1:
                            this.setPivotPositionEnd(i, t, e)
                    }
                }
            }, t.prototype.setPivotPositionStart = function(e, t) {
                this.tabShiftAmounts = [], this.tabShiftAmounts.push(0);
                for (var i = 0; i < this.pivotTabWidths.length; i++) {
                    for (var n = 0, s = 0 === i || i === this.pivotTabWidths.length - 1 ? this.headerWidth - this.flipperWidth : this.headerWidth - 2 * this.flipperWidth, o = i; o < this.pivotTabWidths.length; o++) n += this.pivotTabWidths[o];
                    if (n < s) {
                        this.tabShiftAmounts.push(this.pivotTabWidthsTotal - this.headerWidth);
                        break
                    }(e + this.pivotTabWidths[i] > s || i === this.pivotTabWidths.length - 1) && (this.tabShiftAmounts.push(e + t), t += e, e = 0), e += this.pivotTabWidths[i]
                }
                this.currentTabShift = 0
            }, t.prototype.setPivotPositionEnd = function(e, t, i) {
                if (!(this.pivotTabs.length < 2)) {
                    var n = this.tabShiftAmounts[this.tabShiftAmounts.length - 1];
                    this.tabShiftAmounts = [];
                    for (var o = [], r = 0, a = this.pivotTabWidths.length - 1; a >= 0; a--) {
                        var l = 0 === a || a === this.pivotTabWidths.length - 1 ? this.headerWidth - this.flipperWidth : this.headerWidth - 2 * this.flipperWidth;
                        if (e + this.pivotTabWidths[a] > l) {
                            r = a, i = this.pivotTabs[1], e = parseFloat(s.css(i, "margin-" + this.direction)) - this.flipperWidth;
                            break
                        }
                        e += this.pivotTabWidths[a]
                    }
                    for (var a = r; a >= 0; a--) {
                        var l = 0 === a || a === this.pivotTabWidths.length - 1 ? this.headerWidth - this.flipperWidth : this.headerWidth - 2 * this.flipperWidth;
                        e + this.pivotTabWidths[a] > l && (o.push(a + 1), e = 0), e += this.pivotTabWidths[a]
                    }
                    this.tabShiftAmounts.push(n);
                    for (var a = 0; a < o.length; a++)
                        for (var h = t, c = 0; c < o[a]; c++) h += this.pivotTabWidths[c], c === o[a] - 1 && this.tabShiftAmounts.push(h);
                    this.tabShiftAmounts.push(0), this.tabShiftAmounts.reverse(), this.currentTabShift = this.tabShiftAmounts.length - 1
                }
            }, t.prototype.showFlipper = function(e) {
                e && e.setAttribute(t.ariaHidden, "false")
            }, t.prototype.hideFlipper = function(e) {
                e && e.setAttribute(t.ariaHidden, "true")
            }, t.prototype.onPrimaryFlipperChanged = function() {
                this.currentTabShift--, this.updatePivotPosition(), 0 === this.currentTabShift && (this.currentTabView = 0, this.pivotPosition = 0, this.setTabShiftAmounts())
            }, t.prototype.updatePivotPosition = function() {
                var e = this.tabShiftAmounts && this.tabShiftAmounts[this.currentTabShift] ? this.tabShiftAmounts[this.currentTabShift] : 0;
                s.css(this.pivotHeader.children[0], "margin-" + this.direction, "-" + e.toString() + "px")
            }, t.prototype.onSecondaryFlipperChanged = function() {
                this.currentTabShift++, this.updatePivotPosition(), this.currentTabShift === this.tabShiftAmounts.length - 1 && (this.currentTabView = 2, this.pivotPosition = 1, this.setTabShiftAmounts())
            }, t.prototype.teardown = function() {
                this.pivotTabs && this.pivotTabs.length > 1 && (s.removeEvent(this.pivotHeader, s.eventTypes.click, this.onPivotClicked), s.removeEvent(this.pivotHeader, s.eventTypes.click, this.onKeydown), s.removeEvent(window, s.eventTypes.resize, this.resizeListener)), this.primaryFlipper && this.secondaryFlipper && (s.removeEvent(this.primaryFlipper, s.eventTypes.click, this.onFlipperClicked), s.removeEvent(this.secondaryFlipper, s.eventTypes.click, this.onFlipperClicked), s.removeEvent(this.primaryFlipper, s.eventTypes.keydown, this.onFlipperKeydown), s.removeEvent(this.secondaryFlipper, s.eventTypes.keydown, this.onFlipperKeydown)), this.pivotHeader = null, this.activePivotHeader = null, this.pivots = null, this.activePivot = null
            }, t.prototype.onPivotChanged = function(e, t) {
                void 0 === t && (t = !0), this.isDisabled() || e && e !== this.activePivotHeader && this.updatePivot(e, t)
            }, t.prototype.publish = function(e, t) {
                var i = e,
                    n = e;
                i.onPivotChanged && i.onPivotChanged(t), n.onControllerIndexChanged && n.onControllerIndexChanged(t)
            }, t.prototype.updatePivot = function(e, i) {
                var n = !1,
                    o = this.activePivotHeader;
                if (this.activePivotHeader = e, this.activePivotHeader) {
                    for (var a = o ? o.getAttribute("aria-controls") : null, l = this.activePivotHeader ? this.activePivotHeader.getAttribute("aria-controls") : null, h = void 0, c = void 0, u = 0; u < this.pivotTabs.length; u++) {
                        var d = this.pivotTabs[u];
                        if (d === o) {
                            if (h = u, r.isNumber(c)) break
                        } else if (d === e && (c = u, r.isNumber(h))) break
                    }
                    if (o && (s.removeClass(o, t.activePivotSelector), o.setAttribute(t.ariaSelected, "false"), o.setAttribute(t.tabIndexAttribute, "-1"), n = document.activeElement === o), s.addClass(this.activePivotHeader, t.activePivotSelector), this.activePivotHeader.setAttribute(t.ariaSelected, "true"), this.activePivotHeader.removeAttribute(t.tabIndexAttribute), (i || n) && this.activePivotHeader.focus(), l) {
                        for (var p = l.split(" "), m = null, v = 0, f = p; v < f.length; v++)
                            for (var g = f[v], y = 0, b = this.pivots; y < b.length; y++) {
                                var C = b[y];
                                if (C.id === g) {
                                    m = C;
                                    break
                                }
                            }
                        if (m && (!this.activePivot || this.activePivot !== m))
                            for (var w = 0, E = this.pivots; w < E.length; w++) {
                                var C = E[w];
                                C === m ? (this.showPivot(C), this.activePivot = m) : this.hidePivot(C)
                            }
                    }
                    this.initiatePublish({
                        previousIndex: h,
                        currentIndex: c,
                        activePivotId: l,
                        previousPivotId: a
                    })
                }
            }, t.prototype.showPivot = function(e) {
                e && e.setAttribute(t.ariaHidden, "false")
            }, t.prototype.hidePivot = function(e) {
                e && e.setAttribute(t.ariaHidden, "true")
            }, t.prototype.isDisabled = function() {
                return this.pivotElement.getAttribute(t.state) === t.disabled
            }, t.selector = ".c-pivot", t.typeName = "Pivot", t.tabIndexAttribute = "tabIndex", t.state = "data-f-state", t.disabled = "disabled", t.activePivotSelector = "f-active", t.ariaHidden = "aria-hidden", t.ariaSelected = "aria-selected", t.debouncedTimeout = 600, t
        }(n.Publisher);
        t.Pivot = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(20), i(25)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(t, i) {
                void 0 === i && (i = null), e.call(this, t, i), this.multiHeroItemElement = t, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                var i = this;
                if (!e.prototype.update.call(this)) return !1;
                if (this.parentEl = this.multiHeroItemElement.parentElement, this.multiHeroItemElement.parentElement.getAttribute("role") === t.tabPanelString) {
                    var s = n.BreakpointTracker.getBreakpointTracker();
                    return s.subscribe({
                        onBreakpointChanged: function(e) {
                            i.onBreakpointChanged(e)
                        }
                    }), this.onBreakpointChanged({
                        breakpoint: s.getBreakpoint(),
                        width: 0
                    }), !0
                }
            }, t.prototype.onBreakpointChanged = function(e) {
                this.parentEl && this.updateRoleAttributes(e.breakpoint)
            }, t.prototype.updateRoleAttributes = function(e) {
                e < 3 && !this.parentEl.hasAttribute("role") ? this.parentEl.setAttribute("role", t.tabPanelString) : e >= 3 && this.parentEl.hasAttribute("role") && this.parentEl.removeAttribute("role")
            }, t.selector = ".m-multi-hero-item", t.typeName = "MultiHeroItem", t.tabPanelString = "tabpanel", t.callToActionSelector = "a", t
        }(i.HeroItemBase);
        t.MultiHeroItem = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(8), i(3)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(i) {
                var o = this;
                e.call(this, i), this.onTriggerClick = function(e) {
                    o.activeTrigger = s.getEventTargetOrSrcElement(e);
                    var i = o.activeTrigger.getAttribute(t.ariaControlsAttribute);
                    o.activeMenu = document.getElementById(i), o.activeMenu && o.toggleVisibility()
                }, this.onNonMenuClick = function(e) {
                    if (o.element && o.activeMenu) {
                        e = s.getEvent(e);
                        var t = s.getEventTargetOrSrcElement(e);
                        o.handleOnNonMenuClick(t)
                    }
                }, this.handleOnNonMenuClick = function(e) {
                    o.element.contains(e) || (o.activeMenu = s.selectFirstElement("button + ul", o.element), o.activeTrigger = s.selectFirstElement("button", o.element), o.hideMenu())
                }, this.onMenuKeydownEvent = function(e) {
                    e = s.getEvent(e);
                    var t = n.getKeyCode(e);
                    o.handleMenuKeydown(t)
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                var e = s.selectElements("button", this.element);
                0 !== e.length && (this.triggers = e, this.menus = s.selectElements("button + ul", this.element), s.addEvent(this.triggers, s.eventTypes.click, this.onTriggerClick)), s.addEvent(this.element, s.eventTypes.keydown, this.onMenuKeydownEvent, !0), s.addEvent(document, s.eventTypes.click, this.onNonMenuClick)
            }, t.prototype.teardown = function() {
                s.removeEvent(this.triggers, s.eventTypes.click, this.onTriggerClick), s.removeEvent(this.element, s.eventTypes.keydown, this.onMenuKeydownEvent, !0), s.removeEvent(document, s.eventTypes.click, this.onNonMenuClick)
            }, t.prototype.toggleVisibility = function() {
                "true" === this.activeMenu.getAttribute(t.ariaHidden) ? this.showMenu() : this.hideMenu()
            }, t.prototype.showMenu = function() {
                this.activeMenu.setAttribute(t.ariaHidden, "false"), this.activeTrigger.setAttribute(t.ariaExpanded, "true")
            }, t.prototype.hideMenu = function() {
                this.activeMenu.setAttribute(t.ariaHidden, "true"), this.activeTrigger.setAttribute(t.ariaExpanded, "false")
            }, t.prototype.handleMenuKeydown = function(e) {
                switch (e) {
                    case 27:
                        this.activeMenu = s.selectFirstElement("button + ul", this.element), this.activeTrigger = s.selectFirstElement("button", this.element), this.hideMenu()
                }
            }, t.selector = ".c-navigation-menu", t.typeName = "NavigationMenu", t.ariaExpanded = "aria-expanded", t.ariaHidden = "aria-hidden", t.ariaControlsAttribute = "aria-controls", t
        }(i.ObservableComponent);
        t.NavigationMenu = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.element = t, this.onWindowScrolled = function() {
                    if (i.pageBar)
                        if (i.scrollTarget && null !== i.pageBarTransition) {
                            var e = n.getClientRect(i.scrollTarget).bottom;
                            Math.round(e) !== Math.round(n.getClientRect(i.element).top) && (n.css(i.pageBar, "transition", i.pageBarTransition), i.pageBarTransition = null), i.togglePageBar(e)
                        } else i.togglePageBar()
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                return !(!this.element || !this.element.id) && (this.pageBar = this.element.cloneNode(!0), !!this.pageBar && (this.scrollTarget = n.selectFirstElement('[data-js-page-bar-target="' + this.element.id + '"]'), this.pageBar.id = this.pageBar.id + "_generated_clone", this.pageBarTransition = n.css(this.pageBar, "transition"), n.css(this.pageBar, "transition", "none"), n.addClass(this.pageBar, "f-sticky"), n.removeClass(this.pageBar, "f-hidden"), document.body.appendChild(this.pageBar), this.scrollThrottledEventHandler = n.addThrottledEvent(window, n.eventTypes.scroll, this.onWindowScrolled), this.togglePageBar(), !0))
            }, t.prototype.teardown = function() {
                n.removeEvent(window, n.eventTypes.scroll, this.scrollThrottledEventHandler), n.removeElement(this.pageBar), this.pageBar = null
            }, t.prototype.togglePageBar = function(e) {
                void 0 === e && (e = this.scrollTarget ? n.getClientRect(this.scrollTarget).bottom : n.getClientRect(document.body).top + t.scrollDistanceWithoutTarget), e <= 0 ? n.addClass(this.pageBar, t.showClass) : n.removeClass(this.pageBar, t.showClass)
            }, t.selector = ".m-page-bar", t.typeName = "PageBar", t.showClass = "f-show", t.scrollDistanceWithoutTarget = 800, t
        }(i.ObservableComponent);
        t.PageBar = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(3), i(47)], s = function(e, t, i, n) {
        "use strict";
        var s = function() {
            function e() {
                var e = this;
                this.executeCommonForAddedElementsFromEvent = function(t) {
                    var n = i.getEventTargetOrSrcElement(t);
                    n && e.executeCommonForAddedElements(n)
                }, this.executeCommonForAddedElements = function(e) {
                    e && n.setupRemoveFocus()
                }, i.removeClass(document.documentElement, "no-js"), i.addClass(document.documentElement, "js"), this.executeCommonForAddedElements(document), this.watchForDomChangesToExecuteCommon()
            }
            return e.prototype.watchForDomChangesToExecuteCommon = function() {
                var e = this,
                    t = {
                        childList: !0,
                        subtree: !0
                    };
                if ("undefined" != typeof MutationObserver) {
                    var i = new MutationObserver(function(t) {
                        for (var i = 0, n = t; i < n.length; i++) {
                            var s = n[i];
                            for (var o in s.addedNodes) 1 === s.addedNodes[o].nodeType && e.executeCommonForAddedElements(s.addedNodes[o])
                        }
                    });
                    i.observe(document, t)
                } else document.addEventListener && document.addEventListener("DOMNodeInserted", this.executeCommonForAddedElementsFromEvent, !1)
            }, e.typeName = "PageBehaviors", e
        }();
        t.PageBehaviors = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(3)], s = function(e, t, i) {
        "use strict";

        function n() {
            return !a && (a = !0, i.addEvent(document.body, i.eventTypes.mousedown, o), i.addEvents(document.body, "blur keydown", s), !0)
        }

        function s() {
            i.removeClass(l, r), l.length = 0
        }

        function o(e) {
            var t = i.getEventTargetOrSrcElement(e);
            i.addClass(t, r), l.push(t)
        }
        var r = "x-hidden-focus",
            a = !1,
            l = [];
        t.setupRemoveFocus = n
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.page = -1, this.handleClickEvent = function(e) {
                    var t = n.getEventTargetOrSrcElement(e);
                    t === i.previousButton || n.isDescendent(i.previousButton, t) ? i.handleButtonClick(i.previousButton) : t === i.nextButton || n.isDescendent(i.nextButton, t) ? i.handleButtonClick(i.nextButton) : i.setActivePage(i.getPageFromElement(t.parentElement), !0, !0)
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.element && (this.pages = n.selectElements(t.pageClassSelector, this.element), !(this.pages.length < 2))) {
                    var e = n.selectElements(t.buttonsClassSelector, this.element);
                    if (2 === e.length) {
                        this.previousButton = e[0].parentElement, this.nextButton = e[1].parentElement, n.addEvent(this.element, n.eventTypes.click, this.handleClickEvent);
                        var i = n.selectElements(t.activeClassSelector, this.element);
                        i && 0 !== i.length || (i = this.pages), this.setActivePage(this.getPageFromElement(i[0]), !0, !1)
                    }
                }
            }, t.prototype.teardown = function() {
                n.removeEvent(this.element, n.eventTypes.click, this.handleClickEvent), this.page = -1, this.pages = null, this.activeItem = null, this.previousButton = null, this.nextButton = null
            }, t.prototype.publish = function(e, t) {
                e.onPageChanged && e.onPageChanged(t)
            }, t.prototype.getPage = function() {
                return this.page
            }, t.prototype.setPage = function(e) {
                return this.setActivePage(e, !1, !1)
            }, t.prototype.handleButtonClick = function(e) {
                var t = e === this.nextButton,
                    i = e === this.previousButton,
                    n = this.getPage();
                (t || i) && this.setActivePage(n === -1 ? 0 : t ? n + 1 : n - 1, !0, !0);
            }, t.prototype.setActivePage = function(e, i, o) {
                var r = this.getPage();
                if (!(s.isNumber(e) && this.pages && e >= 0 && e < this.pages.length && e !== r)) return !1;
                if (this.activeItem) {
                    var a = this.activeItem.firstElementChild,
                        l = this.activeItem.getAttribute(t.dataLabel),
                        h = a.getAttribute(t.dataHref);
                    this.activeItem.setAttribute(t.dataLabel, a.getAttribute(t.ariaLabel)), a.setAttribute(t.dataLabel, l), h && (a.setAttribute(t.href, h), a.removeAttribute(t.dataHref)), n.removeClass(this.activeItem, t.activeClass)
                }
                var c = this.pages[e],
                    u = c.firstElementChild,
                    d = c.getAttribute(t.dataLabel),
                    p = u.getAttribute(t.href);
                return c.setAttribute(t.dataLabel, u.getAttribute(t.ariaLabel)), u.setAttribute(t.dataLabel, d), p && (u.setAttribute(t.dataHref, p), setTimeout(function() {
                    u.removeAttribute(t.href)
                }, 0)), n.addClass(c, t.activeClass), this.activeItem = c, this.page = e, this.updateButtons(), this.initiatePublish({
                    page: e,
                    priorPage: r,
                    internal: i,
                    userinitiated: o
                }), !0
            }, t.prototype.updateButtons = function() {
                var e = this.getPage();
                e !== -1 && (0 === e ? n.addClass(this.previousButton, t.hideClass) : n.removeClass(this.previousButton, t.hideClass), e === this.pages.length - 1 ? n.addClass(this.nextButton, t.hideClass) : n.removeClass(this.nextButton, t.hideClass))
            }, t.prototype.getPageFromElement = function(e) {
                return this.pages && e ? this.pages.indexOf(e) : -1
            }, t.selector = ".m-pagination", t.typeName = "Pagination", t.pageClassSelector = "li[data-label]", t.buttonsClassSelector = ".c-glyph", t.activeClass = "f-active", t.activeClassSelector = "." + t.activeClass, t.hideClass = "f-hide", t.ariaLabel = "aria-label", t.dataLabel = "data-label", t.dataHref = "data-href", t.href = "href", t
        }(i.Publisher);
        t.Pagination = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3), i(8), i(50), i(25)], s = function(e, t, i, n, s, r, a) {
        "use strict";
        var l = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.onWindowResize = function(e) {
                    i.onResize()
                }, this.update(), this.isFlexLayout && this.products && a.BreakpointTracker.getBreakpointTracker().subscribe({
                    onBreakpointChanged: function(e) {
                        i.onBreakpointChanged(e)
                    }
                })
            }
            return o(t, e), t.prototype.update = function() {
                if (this.element) {
                    this.carousel = n.selectFirstElement(".c-carousel", this.element), this.products = n.selectFirstElement("ul", this.element), this.seeAll = n.selectFirstElement('[class^="c-heading"] .c-hyperlink[aria-label]', this.element), this.isFlexLayout = "true" === this.element.getAttribute("data-js-flex"), this.flexProductsLength = n.selectElements("li", this.products).length;
                    for (var e = this.seeAll ? this.seeAll.parentElement : null, i = n.selectElements(".f-default-image img", this.element), s = function(e) {
                            if (!n.isImageLoadedSuccessfully(e)) {
                                for (var t = !1, i = e; !t && i.parentElement;) i = i.parentElement, n.hasClass(i, "m-product-placement-item") && (t = !0);
                                if (t) {
                                    var s;
                                    s = n.hasClass(i, "context-app") ? 1 : n.hasClass(i, "context-person") ? 2 : n.hasClass(i, "context-video") ? 3 : 0;
                                    var o = n.hasClass(i, "f-size-small") ? 1 : 0;
                                    e.complete ? r.handleImageError(e, o, s) : e.onerror = function() {
                                        r.handleImageError(e, o, s)
                                    }
                                }
                            }
                        }, o = 0, l = i; o < l.length; o++) {
                        var h = l[o];
                        s(h)
                    }
                    this.isFlexLayout && this.products && (this.coerceFlexProductsLength(), this.onBreakpointChanged({
                        breakpoint: a.BreakpointTracker.getBreakpointTracker().getBreakpoint(),
                        width: 0
                    })), (this.carousel && this.products && this.seeAll && !n.hasClass(e, t.showAllAlwaysClass) || this.isFlexLayout && this.products) && (this.onResize(), this.resizeListener = n.addThrottledEvent(window, n.eventTypes.resize, this.onWindowResize))
                }
            }, t.prototype.teardown = function() {
                n.removeEvent(window, n.eventTypes.resize, this.resizeListener), this.carousel = null, this.products = null, this.seeAll = null, this.resizeListener = null
            }, t.prototype.onResize = function() {
                if (this.carousel && this.products && this.seeAll) {
                    var e = s.getDimensions(this.carousel).width,
                        i = s.getDimensions(this.products).width;
                    i < e ? this.seeAll.setAttribute(t.ariaHidden, "true") : this.seeAll.removeAttribute(t.ariaHidden)
                }
                if (this.isFlexLayout && this.products) {
                    var e = this.flexProductsLength * t.flexItemDefaultWidth + "px";
                    n.css(this.products, "width", s.Viewports.getViewport() < 3 ? e : "auto")
                }
            }, t.prototype.coerceFlexProductsLength = function() {
                var e = n.selectElements("li", this.products);
                if (e.length > t.flexProductsMaxLength) {
                    this.flexProductsLength = t.flexProductsMaxLength;
                    for (var i = t.flexProductsMaxLength; i < e.length; i++) e[i].setAttribute("aria-hidden", "true")
                } else if (e.length < t.flexProductsMaxLength)
                    for (var i = e.length; i < t.flexProductsMaxLength; i++) this.ignoreNextDOMChange = !0, this.products.appendChild(document.createElement("li"))
            }, t.prototype.onBreakpointChanged = function(e) {
                var t = n.selectElements("li", this.products);
                e.breakpoint < 2 ? (n.addClass(this.element, "f-scrollable"), t[7].setAttribute("aria-hidden", t[7].firstChild ? "false" : "true"), t[6].setAttribute("aria-hidden", t[6].firstChild ? "false" : "true"), t[5].setAttribute("aria-hidden", t[5].firstChild ? "false" : "true"), t[4].setAttribute("aria-hidden", t[4].firstChild ? "false" : "true")) : (n.removeClass(this.element, "f-scrollable"), t[7].setAttribute("aria-hidden", e.breakpoint < 4 ? "true" : "false"), t[6].setAttribute("aria-hidden", e.breakpoint < 4 ? "true" : "false"), t[5].setAttribute("aria-hidden", e.breakpoint < 3 ? "true" : "false"), t[4].setAttribute("aria-hidden", e.breakpoint < 3 ? "true" : "false")), this.setProductImageHeight()
            }, t.prototype.setProductImageHeight = function() {
                var e = "default";
                n.selectElements('li[aria-hidden="false"] .m-product-placement-item[class*="context-movie"]', this.products).length > 0 ? e = "movie" : n.selectElements('li[aria-hidden="false"] .m-product-placement-item[class*="context-device"]', this.products).length > 0 && 0 === n.selectElements('li[aria-hidden="false"] .m-product-placement-item:not([class*="context-device"])', this.products).length && (e = "device"), n.removeClasses(this.products, ["f-height-default", "f-height-device", "f-height-movie"]), n.addClasses(this.products, ["f-height-" + e, "f-visible"])
            }, t.selector = ".m-product-placement", t.typeName = "ProductPlacement", t.flexProductsMaxLength = 8, t.flexItemDefaultWidth = 124, t.ariaHidden = "aria-hidden", t.showAllAlwaysClass = "js-product-placement-persist-show-all", t
        }(i.ObservableComponent);
        t.ProductPlacement = l
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(3)], s = function(e, t, i) {
        "use strict";

        function n(e, t, i) {
            void 0 === t && (t = 0);
            var n;
            switch (t) {
                case 1:
                    n = c;
                    break;
                case 0:
                default:
                    n = u
            }
            s(e, n, i)
        }

        function s(e, t, n) {
            if (void 0 === t && (t = u), void 0 === n && (n = 0), e) {
                if (t = t && t > 0 ? t : u, e.parentElement)
                    for (var s = i.selectElements("source", e.parentElement), r = 0, a = s; r < a.length; r++) {
                        var l = a[r];
                        l.srcset = ""
                    }
                e.srcset = "", e.src = o(n), e.src.length && (i.css(e, "height", t + "px"), i.css(e, "width", t + "px"))
            }
        }

        function o(e) {
            switch (e) {
                case 1:
                    return r;
                case 2:
                    return l;
                case 3:
                    return h;
                case 0:
                default:
                    return a
            }
        }
        var r = "data:image/svg+xml;charset=utf-8,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 60 60' style='enable-background:new 0 0 60 60%3B' xml:space='preserve'%3E%3Cstyle %3E.st0%7Bfill:%23FFF%3B%7D%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M0 0 h60 v32 H32 v28 H0 V0 z M28 28 V4 H4 v24 H28 z M28 56 V32 H4 v24 H28 z M56 28 V4 H32 v24 H56 z'/%3E%3C/g%3E%3C/svg%3E",
            a = "data:image/svg+xml;charset=utf-8,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 64 64' style='enable-background:new 0 0 64 64%3B' xml:space='preserve'%3E%3Cstyle %3E.st0%7Bfill:%23FFF%3B%7D%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M64,8v48H0V8H64z M4,12v21.2l14-14l20,20l8-8l14,14V12H4z M4,52h41.2L18,24.8l-14,14V52z M60,52v-1.2l-14-14 L40.8,42l10,10H60z M50,24c-0.5,0-1-0.2-1.4-0.6C48.2,23,48,22.5,48,22s0.2-1,0.6-1.4C49,20.2,49.5,20,50,20s1,0.2,1.4,0.6 C51.8,21,52,21.5,52,22s-0.2,1-0.6,1.4C51,23.8,50.5,24,50,24z'/%3E%3C/g%3E%3C/svg%3E",
            l = "data:image/svg+xml;charset=utf-8,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 64 64' style='enable-background:new 0 0 64 64%3B' xml:space='preserve'%3E%3Cstyle %3E.st0%7Bfill:%23FFF%3B%7D%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M41.7,37.9c2.8,1,5.3,2.3,7.6,4.1c2.3,1.8,4.2,3.8,5.7,6c1.6,2.3,2.8,4.7,3.7,7.5c0.8,2.8,1.2,5.5,1.2,8.5h-4 c0-3.4-0.6-6.5-1.8-9.4c-1.2-2.9-2.9-5.4-4.9-7.5s-4.6-3.8-7.5-4.9c-3-1.3-6.1-1.9-9.5-1.9c-2.2,0-4.4,0.3-6.3,0.8 c-2,0.5-4,1.4-5.7,2.4c-1.8,1-3.4,2.3-4.7,3.8c-1.4,1.4-2.7,3.1-3.7,4.7c-1,1.7-1.8,3.7-2.4,5.7S8.5,61.8,8.5,64h-4%09c0-3,0.4-5.8,1.3-8.5c0.9-2.7,2.1-5.2,3.7-7.4c1.6-2.3,3.5-4.3,5.7-6s4.7-3.1,7.5-4.2c-1.6-0.9-3.1-1.9-4.4-3.2%09c-1.3-1.3-2.4-2.6-3.3-4.2c-0.9-1.6-1.6-3.2-2.1-4.8c-0.4-1.7-0.6-3.5-0.6-5.2c0-2.8,0.5-5.3,1.6-7.7c1-2.4,2.5-4.4,4.3-6.3%09c1.8-1.9,3.9-3.2,6.3-4.3c2.4-1,4.9-1.6,7.7-1.6c2.8,0,5.3,0.5,7.7,1.6c2.4,1,4.4,2.5,6.3,4.3s3.2,3.9,4.3,6.3 c1,2.4,1.6,4.9,1.6,7.7c0,1.8-0.2,3.6-0.7,5.2c-0.5,1.7-1.2,3.4-2.1,4.8c-0.9,1.5-2,2.9-3.3,4.2C44.6,36,43.3,37,41.7,37.9z M16.4,20.5c0,2.2,0.4,4.3,1.3,6.1s2,3.6,3.4,5c1.4,1.4,3.1,2.6,5,3.4c2,0.8,4,1.3,6.1,1.3c2.2,0,4.3-0.4,6.1-1.3 c1.9-0.9,3.6-2,5-3.4c1.4-1.4,2.6-3.1,3.4-5s1.3-4,1.3-6.1s-0.4-4.3-1.3-6.1s-2-3.6-3.4-5c-1.4-1.4-3.1-2.6-5-3.4 c-2-0.8-4-1.3-6.1-1.3c-2.2,0-4.3,0.4-6.1,1.3s-3.6,2-5,3.4c-1.4,1.4-2.6,3.1-3.4,5S16.4,18.3,16.4,20.5z'/%3E%3C/g%3E%3C/svg%3E",
            h = "data:image/svg+xml;charset=utf-8,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 64 64' style='enable-background:new 0 0 64 64%3B' xml:space='preserve'%3E%3Cstyle %3E.st0%7Bfill:%23FFF%3B%7D%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M0,10h64v44H0V10z M60,50V14h-4v4h-4v-4H12v4H8v-4H4v36h4v-4h4v4h40v-4h4v4H60z M8,26v-4h4v4H8z M8,34v-4h4v4 H8z M8,42v-4h4v4H8z M52,26v-4h4v4H52z M52,34v-4h4v4H52z M52,42v-4h4v4H52z'/%3E%3C/g%3E%3C/svg%3E",
            c = 24,
            u = 57;
        t.handleImageError = n, t.handleImageErrorCustomDimensions = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(t) {
                e.call(this, t), t && this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.explicit = n.selectFirstElement(t.explicitSelector, this.element), this.heading = n.selectFirstElement(t.headingSelector, this.element), this.explicit && this.heading && this.setExplicitPosition()
            }, t.prototype.teardown = function() {}, t.prototype.setExplicitPosition = function() {
                var e = n.getClientRect(this.heading).height;
                e < 3 * t.headingLineHeight && (n.css(this.explicit, "position", "relative"), n.css(this.explicit, "bottom", "inherit"))
            }, t.selector = ".m-product-placement-item", t.typeName = "ProductPlacementItem", t.explicitSelector = ".c-explicit", t.headingSelector = ".c-heading", t.headingLineHeight = 20, t
        }(i.ObservableComponent);
        t.ProductPlacementItem = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(i) {
                var o = this;
                e.call(this, i), this.element = i, this.handleNumberInputChangeEvent = function(e) {
                    var t = e,
                        i = s.getKeyCode(t),
                        r = t.shiftKey ? 10 : 1,
                        a = n.getEventTargetOrSrcElement(e),
                        l = parseFloat(a.value);
                    isNaN(l) && (o.minimumInput === a ? l = o.currentMinimumValue : o.maximumInput === a && (l = o.currentMaximumValue)), o.handleNumberInputChange(l, i, r, a)
                }, this.handleNumberInputChange = function(e, t, i, n) {
                    38 === t && (e += i), 40 === t && (e -= i), o.updateFromChangedElement(n, e)
                }, this.handleNumberInputKeyDownEvent = function(e) {
                    var t = s.getKeyCode(e),
                        i = n.getEventTargetOrSrcElement(e),
                        r = parseFloat(i.value);
                    if (38 === t || 40 === t) {
                        n.preventDefault(e);
                        var a = e.shiftKey ? 10 : 1;
                        a = 38 === t ? a : a * -1, r += a, o.updateFromChangedElement(i, r)
                    }
                }, this.updateFromChangedElement = function(e, t) {
                    if (e === o.minimumInput || e === o.minimumSlider) {
                        var i = parseFloat(o.maximumInput.getAttribute("value")),
                            n = o.minimum;
                        isNaN(i) || t > i ? (o.syncInputAndSlider(o.minimumInput, o.minimumSlider, i), o.currentMinimumValue = i) : t < n ? (o.syncInputAndSlider(o.minimumInput, o.minimumSlider, n), o.currentMinimumValue = n) : (o.syncInputAndSlider(o.minimumInput, o.minimumSlider, t), o.currentMinimumValue = t)
                    } else if (e === o.maximumInput || e === o.maximumSlider) {
                        var i = o.maximum,
                            n = parseFloat(o.minimumInput.getAttribute("value"));
                        isNaN(n) || t < n ? (o.syncInputAndSlider(o.maximumInput, o.maximumSlider, n), o.currentMaximumValue = n) : t > i ? (o.syncInputAndSlider(o.maximumInput, o.maximumSlider, i), o.currentMaximumValue = i) : (o.syncInputAndSlider(o.maximumInput, o.maximumSlider, t), o.currentMaximumValue = t)
                    }
                    o.updateRangeUI()
                }, this.handleSliderKeyboard = function(e) {
                    var t = n.getEventTargetOrSrcElement(e),
                        i = s.getKeyCode(e),
                        r = parseFloat(t.getAttribute("aria-valuenow")),
                        a = e.shiftKey ? 10 : 1;
                    i === (o.primaryDirection === n.Direction.left ? 39 : 37) ? o.updateFromChangedElement(t, r + a) : i === (o.primaryDirection === n.Direction.left ? 37 : 39) && o.updateFromChangedElement(t, r - a)
                }, this.handleSliderMouseDown = function(e) {
                    n.addEvent(window, n.eventTypes.mouseup, o.handleSliderMouseUp), n.addEvent(window, n.eventTypes.mousemove, o.handleSliderMouseMove), o.activelyAdjustedSlider = n.getEventTargetOrSrcElement(e), n.addClass(o.activelyAdjustedSlider === o.minimumSlider ? o.minimumInput : o.maximumInput, t.activlyAdjustingClassName), o.mousedownReferenceLocation = e.pageX, o.mousedownReferenceOffset = o.activelyAdjustedSlider.style[o.offsetDirection]
                }, this.handleSliderMouseUp = function(e) {
                    n.removeEvent(window, n.eventTypes.mouseup, o.handleSliderMouseUp), n.removeEvent(window, n.eventTypes.mousemove, o.handleSliderMouseMove), n.removeClass(o.activelyAdjustedSlider === o.minimumSlider ? o.minimumInput : o.maximumInput, t.activlyAdjustingClassName), o.activelyAdjustedSlider = null, o.mousedownReferenceLocation = null, o.mousedownReferenceOffset = null
                }, this.handleSliderMouseMove = function(e) {
                    o.animationFrameRequestInProgress || o.requestAnimationFrame.call(window, function() {
                        return o.requestSliderHandleUpdate(e.pageX)
                    })
                }, this.requestAnimationFrame = n.SafeBrowserApis.requestAnimationFrame, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.element) {
                    var e = n.selectElements("input", this.element);
                    2 === e.length && (this.minimumInput = e[0], this.maximumInput = e[1], this.minimum = parseInt(this.minimumInput.getAttribute("min"), 10) || 0, this.maximum = parseInt(this.maximumInput.getAttribute("max"), 10) || 100, this.createRangeSliderUI(), this.primaryDirection = n.getDirection(this.element), this.offsetDirection = this.primaryDirection === n.Direction.left ? "left" : "right", this.updateRangeUI(), n.addEvents([this.minimumInput, this.maximumInput], "change", this.handleNumberInputChangeEvent), n.addEvents([this.minimumInput, this.maximumInput], "keydown", this.handleNumberInputKeyDownEvent), n.addEvents([this.minimumSlider, this.maximumSlider], "keydown", this.handleSliderKeyboard), n.addEvents([this.minimumSlider, this.maximumSlider], "mousedown", this.handleSliderMouseDown))
                }
            }, t.prototype.teardown = function() {
                n.removeEvents([this.minimumInput, this.maximumInput], "change", this.handleNumberInputChangeEvent), n.removeEvents([this.minimumInput, this.maximumInput], "keydown", this.handleNumberInputKeyDownEvent), n.removeEvents([this.minimumSlider, this.maximumSlider], "keydown", this.handleSliderKeyboard), n.removeEvents([this.minimumSlider, this.maximumSlider], "mousedown", this.handleSliderMouseDown)
            }, t.prototype.publish = function(e, t) {
                e.onValueChanged && e.onValueChanged(t)
            }, t.prototype.createSlider = function(e) {
                var t = document.createElement("div");
                return t.setAttribute("role", "slider"), t.setAttribute("aria-valuemin", this.minimum.toString() || "0"), t.setAttribute("aria-valuemax", this.maximum.toString() || "100"), t.setAttribute("aria-valuenow", e.getAttribute("value") || "0"), t.setAttribute("aria-label", ""), t.setAttribute("tabindex", "0"), this.currentMinimumValue = this.minimum || 0, this.currentMaximumValue = this.maximum || 100, t
            }, t.prototype.createRangeSliderUI = function() {
                if (!this.slider) {
                    this.slider = document.createElement("div");
                    var e = document.createElement("div");
                    this.minimumSlider = this.createSlider(this.minimumInput), this.maximumSlider = this.createSlider(this.maximumInput), this.minimumSlider.setAttribute("aria-label", this.minimumInput.getAttribute("data-js-range-slider-minimum-label")), this.maximumSlider.setAttribute("aria-label", this.maximumInput.getAttribute("data-js-range-slider-maximum-label")), this.minimumInput.removeAttribute("data-js-range-slider-minimum-label"), this.maximumInput.removeAttribute("data-js-range-slider-maximum-label"), this.selectedRangeIndicator = document.createElement("span"), e.appendChild(this.minimumSlider), e.appendChild(this.maximumSlider), e.appendChild(this.selectedRangeIndicator), this.slider.appendChild(e), this.element.appendChild(this.slider), n.preventDefaultSwipeAction(this.element)
                }
            }, t.prototype.updateRangeUI = function() {
                var e = parseInt(this.minimumSlider.getAttribute("aria-valuenow"), 10),
                    t = parseInt(this.maximumSlider.getAttribute("aria-valuenow"), 10),
                    i = this.calculateOffset(e, this.maximum),
                    n = this.calculateOffset(t, this.maximum);
                this.minimumSlider.style[this.offsetDirection] = i.toString().concat("%"), this.maximumSlider.style[this.offsetDirection] = n.toString().concat("%"), this.selectedRangeIndicator.style[this.offsetDirection] = i.toString().concat("%"), this.selectedRangeIndicator.style.width = (n - i).toString().concat("%"), this.initiatePublish({
                    minimum: e,
                    maximum: t
                })
            }, t.prototype.requestSliderHandleUpdate = function(e) {
                this.animationFrameRequestInProgress = !1;
                var t = e - this.mousedownReferenceLocation,
                    i = parseFloat(this.mousedownReferenceOffset),
                    s = t / this.element.clientWidth * 100,
                    o = this.primaryDirection === n.Direction.left ? i + s : i - s,
                    r = Math.floor(o / 100 * this.maximum);
                this.updateFromChangedElement(this.activelyAdjustedSlider, r)
            }, t.prototype.calculateOffset = function(e, t) {
                if (isNaN(e) || isNaN(t)) return 0;
                var i = e / t * 100;
                return i < 0 ? 0 : i > 100 ? 0 : i
            }, t.prototype.syncInputAndSlider = function(e, t, i) {
                if (!isNaN(i)) {
                    var n = i.toString();
                    e.setAttribute("value", n), e.value = n, t.setAttribute("aria-valuenow", n)
                }
            }, t.selector = ".c-range-slider", t.typeName = "RangeSlider", t.activlyAdjustingClassName = "f-adjusting", t
        }(i.Publisher);
        t.RangeSlider = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.onRatingSelect = function(e) {
                    i.handleRatingSelect(n.getEventTargetOrSrcElement(e))
                }, this.onKeydown = function(e) {
                    var t = s.getKeyCode(e);
                    switch (t) {
                        case 13:
                        case 32:
                            i.handleRatingSelect(n.getEventTargetOrSrcElement(e))
                    }
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.buttons = n.selectElements("button", this.element), this.buttonClasses = this.getButtonClasses(), this.userRated = n.hasClass(this.element, t.userRatedSelector), this.communityRated = n.hasClass(this.element, t.communityRatedSelector), n.addEvent(this.buttons, n.eventTypes.keydown, this.onKeydown), n.addEvent(this.buttons, n.eventTypes.click, this.onRatingSelect)
            }, t.prototype.teardown = function() {
                n.removeEvent(this.buttons, n.eventTypes.keydown, this.onKeydown), n.removeEvent(this.buttons, n.eventTypes.click, this.onRatingSelect)
            }, t.prototype.handleRatingSelect = function(e) {
                n.addClasses(this.element, [t.userRatedSelector, t.communityRatedSelector]), this.removeButtonClasses(), this.setButtonStyle(e);
                for (var i = 0; i < this.buttons.length; i++)
                    if (e === this.buttons[i]) {
                        this.selectedRating = i + 1;
                        break
                    }
            }, t.prototype.getButtonClasses = function() {
                for (var e = [], i = 0, s = this.buttons.length; i < s; i++) n.hasClass(this.buttons[i], t.fullClass) ? e.push(t.fullClass) : n.hasClass(this.buttons[i], t.halfClass) ? e.push(t.halfClass) : n.hasClass(this.buttons[i], t.noneClass) ? e.push(t.noneClass) : e.push("");
                return e
            }, t.prototype.removeButtonClasses = function() {
                for (var e = 0, t = this.buttons.length; e < t; e++) n.removeClass(this.buttons[e], this.buttonClasses[e])
            }, t.prototype.resetButtonClasses = function() {
                for (var e = 0, i = this.buttonClasses.length; e < i; e++) n.addClasses(this.buttons[e], [this.buttonClasses[e]]), n.hasClass(this.buttons[e], t.fullClass) && this.buttonClasses[e] !== t.fullClass && n.removeClass(this.buttons[e], t.fullClass)
            }, t.prototype.setButtonStyle = function(e) {
                for (var i = !0, s = 0, o = this.buttons.length; s < o; s++) i === !0 ? n.addClasses(this.buttons[s], [t.fullClass]) : n.removeClass(this.buttons[s], t.fullClass), this.buttons[s] === e && (i = !1)
            }, t.selector = ".c-rating.f-interactive", t.typeName = "Rating", t.userRatedSelector = "f-user-rated", t.communityRatedSelector = "f-community-rated", t.fullClass = "f-full", t.halfClass = "f-half", t.noneClass = "f-none", t
        }(i.ObservableComponent);
        t.Rating = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(55), i(25), i(3)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.onBreakpointChanged = function(e) {
                    e.breakpoint < 2 ? i.expandMenu(!1) : i.expandMenu(!0)
                }, this.handleMenuClick = function(e) {
                    r.preventDefault(e);
                    var t = r.getEventTargetOrSrcElement(e);
                    switch (t) {
                        case i.collapseButton:
                            i.expandMenu(!1);
                            break;
                        case i.expandButton:
                            i.expandMenu(!0);
                            break;
                        default:
                            i.manageRadioGroupClick(t)
                    }
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.element && (this.collapseButton = r.selectFirstElement(".c-heading + button.c-action-trigger", this.element), this.expandButton = r.selectFirstElement("[data-mobile-target] + button.c-action-trigger", this.element), this.mobileTarget = r.selectFirstElement("[data-mobile-target]", this.element), this.collapseButton && this.expandButton && this.mobileTarget && (this.getRefineMenuItems(), s.BreakpointTracker.getBreakpointTracker().subscribe({
                    onBreakpointChanged: this.onBreakpointChanged
                }), r.addEvent(this.element, r.eventTypes.click, this.handleMenuClick), this.onBreakpointChanged({
                    breakpoint: s.BreakpointTracker.getBreakpointTracker().getBreakpoint(),
                    width: 0
                })))
            }, t.prototype.teardown = function() {
                r.removeEvent(this.element, r.eventTypes.click, this.handleMenuClick), this.collapseButton = null, this.expandButton = null, this.mobileTarget = null;
                for (var e = 0, t = this.refineItems; e < t.length; e++) {
                    var i = t[e];
                    i.teardown()
                }
                this.refineItems = []
            }, t.prototype.manageRadioGroupClick = function(e) {
                var i, n = "SPAN" === e.nodeName,
                    s = n ? e.parentNode : e,
                    o = null != s ? s.parentNode.parentNode : null;
                if (null == s || null == o) return null;
                if (i = o.getAttribute(t.selectTypeProperty) === t.singleSelectValue, o.hasAttribute(t.selectTypeProperty) || (o = o.parentNode, i = "radiogroup" === o.getAttribute("role")), i)
                    for (var a = 0, l = this.refineItems; a < l.length; a++) {
                        var h = l[a],
                            c = h.element;
                        c !== s && r.isDescendent(o, c) && h.unselectItem()
                    }
            }, t.prototype.getRefineMenuItems = function() {
                this.refineItems = [];
                for (var e = 0, t = r.selectElements(n.RefineItem.selector, this.element); e < t.length; e++) {
                    var i = t[e];
                    this.refineItems.push(new n.RefineItem(i))
                }
            }, t.prototype.expandMenu = function(e) {
                this.mobileTarget.setAttribute("aria-hidden", (!e).toString()), this.expandButton.setAttribute("aria-expanded", e.toString()), this.collapseButton.setAttribute("aria-expanded", e.toString()), r.css(this.expandButton, "display", e ? "none" : "block")
            }, t.selector = ".c-refine-menu", t.typeName = "RefineMenu", t.selectTypeProperty = "data-js-select-type", t.singleSelectValue = "single-select", t
        }(i.ObservableComponent);
        t.RefineMenu = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(3), i(4)], s = function(e, t, i, n) {
        "use strict";
        var s = function() {
            function e(e) {
                var t = this;
                this.element = e, this.toggleRefineItem = function() {
                    t.changeItemState(!t.isSelected())
                }, this.element && (this.element.hasAttribute("role") ? (this.isRadioItem = "radio" === this.element.getAttribute("role"), this.ariaAttribute = this.isRadioItem ? "aria-checked" : "aria-selected") : (this.isUpdatedShape = !0, this.label = i.getText(i.selectFirstElement("span", this.element))), this.changeItemState(this.isSelected()), i.addEvent(this.element, i.eventTypes.click, this.toggleRefineItem))
            }
            return e.prototype.isSelected = function() {
                return this.isUpdatedShape ? i.hasClass(this.element, e.selectedClass) : "true" === this.element.getAttribute(this.ariaAttribute)
            }, e.prototype.changeItemState = function(t) {
                this.isUpdatedShape ? t ? (i.addClass(this.element, e.selectedClass), this.element.setAttribute(e.ariaLabel, n.format(e.selectedLabel, this.label))) : (i.removeClass(this.element, e.selectedClass), this.element.setAttribute(e.ariaLabel, n.format(e.unSelectedLabel, this.label))) : this.element.setAttribute(this.ariaAttribute, t.toString())
            }, e.prototype.unselectItem = function() {
                this.changeItemState(!1)
            }, e.prototype.teardown = function() {
                i.removeEvent(this.element, i.eventTypes.click, this.toggleRefineItem)
            }, e.selector = ".c-refine-item", e.typeName = "RefineItem", e.selectedClass = "f-selected", e.selectedLabel = "Active refinement: {0}", e.unSelectedLabel = "Refine by {0}", e.ariaLabel = "aria-label", e
        }();
        t.RefineItem = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(10), i(7), i(57), i(3)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = function(e) {
            function t(t) {
                e.call(this, t), this.update()
            }
            return o(t, e), t.prototype.update = function() {
                var e = this;
                if (this.element && (this.select = r.selectFirstElementT("select", this.element), this.options = r.selectElementsT("option", this.select), this.select && this.options)) {
                    !this.select.id && this.element.id && (this.select.id = this.element.id + "-select"), this.selectMenuDiv ? r.removeInnerHtml(this.selectMenuDiv) : this.selectMenuDiv = document.createElement("div");
                    var n = document.createElement("button"),
                        o = document.createElement("ul");
                    r.addClass(this.selectMenuDiv, "c-select-menu"), r.addClass(this.selectMenuDiv, "f-persist"), r.hasClass(this.element, "f-border") && r.addClass(this.selectMenuDiv, "f-border"), r.hasClass(this.element, "f-accent") && r.addClass(this.selectMenuDiv, "f-accent"), r.setText(n, this.select.getAttribute(t.ariaLabel)), n.setAttribute(t.ariaHaspopup, "true"), n.setAttribute(t.ariaExpanded, "false"), n.setAttribute("tabindex", "0"), r.addClass(o, "c-menu"), r.hasClass(this.element, "f-scroll") && r.addClass(o, "f-scroll"), o.setAttribute(t.ariaHidden, "true"), o.setAttribute("role", "listbox"), o.setAttribute("tabindex", "0"), r.hasClass(this.element, "f-flex") && r.addClass(this.selectMenuDiv, "f-flex"), this.select.hasAttribute("disabled") && this.selectMenuDiv.setAttribute("aria-disabled", "true"), this.select.hasAttribute("required") && this.selectMenuDiv.setAttribute("aria-required", "true");
                    for (var a = 0, l = this.options; a < l.length; a++) {
                        var h = l[a],
                            c = "selected" === h.getAttribute("selected"),
                            u = h.getAttribute("value"),
                            d = document.createElement("li"),
                            p = document.createElement("span");
                        r.addClass(d, "c-menu-item"), d.setAttribute("role", "presentation"), p.setAttribute("tabindex", "0"), p.setAttribute("role", "option"), c && p.setAttribute(t.ariaSelected, "true"), u || (h.setAttribute("value", r.getText(h)), u = h.getAttribute("value")), u && (d.id = this.select.id + "-" + u), p.appendChild(document.createTextNode(r.getText(h))), d.appendChild(p), o.appendChild(d)
                    }
                    this.selectMenuDiv.appendChild(n), this.selectMenuDiv.appendChild(o), this.element.appendChild(this.selectMenuDiv), this.ignoreNextDOMChange = !0, i.ComponentFactory.create([{
                        component: s.SelectMenu,
                        eventToBind: "DOMContentLoaded",
                        elements: [this.selectMenuDiv],
                        callback: function(t) {
                            (t || t.length) && (e.selectMenu = t[0], e.selectMenu.subscribe(e))
                        }
                    }])
                }
            }, t.prototype.teardown = function() {
                this.select = null, this.options = null, this.selectMenu = null
            }, t.prototype.publish = function(e, t) {
                e.onSelectionChanged(t)
            }, t.prototype.onSelectionChanged = function(e) {
                if (e && e.id) {
                    e.id = e.id.substr(this.select.id.length + 1), this.select.value = e.id;
                    for (var t = 0, i = this.options; t < i.length; t++) {
                        var n = i[t];
                        n.getAttribute("value") === e.id ? n.setAttribute("selected", "selected") : n.removeAttribute("selected")
                    }
                    this.initiatePublish(e)
                }
            }, t.selector = ".c-select", t.typeName = "Select", t.ariaExpanded = "aria-expanded", t.ariaHidden = "aria-hidden", t.ariaHaspopup = "aria-haspopup", t.ariaSelected = "aria-selected", t.ariaLabel = "aria-label", t
        }(n.Publisher);
        t.Select = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(3), i(31), i(8)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = function(e) {
            function t(i) {
                var s = this;
                return e.call(this, i), this.onTriggerClick = function(e) {
                    e = n.getEvent(e), n.preventDefault(e), s.disabled || s.onTriggerToggled()
                }, this.onItemClick = function(e) {
                    e = n.getEvent(e), s.onItemSelected(n.getEventTargetOrSrcElement(e), !1, !0)
                }, this.onNonSelectMenuClick = function(e) {
                    if (e = n.getEvent(e), s.element && s.menu) {
                        var t = n.getEventTargetOrSrcElement(e);
                        s.element.contains(t) || t !== s.menu && t.parentElement !== s.menu && s.collapse()
                    }
                }, this.onNonSelectMenuTab = function(e) {
                    e = n.getEvent(e);
                    var t = r.getKeyCode(e);
                    9 === t && s.collapse()
                }, this.onTriggerKeyPress = function(e) {
                    e = n.getEvent(e);
                    var t = r.getKeyCode(e);
                    switch (t) {
                        case 13:
                        case 32:
                            n.preventDefault(e), s.disabled || s.onTriggerToggled()
                    }
                }, this.handleMenuKeydownEvent = function(e) {
                    e = n.getEvent(e);
                    var t = r.getKeyCode(e);
                    (9 !== t || s.isExpanded()) && n.preventDefault(e), s.handleMenuKeydown(n.getEventTargetOrSrcElement(e), t)
                }, i && n.hasClass(i, t.universalHeaderMenuSelector) ? void e.prototype.unObserve.call(this) : void this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.element) {
                    this.persist = n.hasClass(this.element, "f-persist"), this.trigger = n.selectFirstElementT('[role="button"]', this.element), this.trigger || (this.trigger = n.selectFirstElementT("button", this.element)), this.menu = n.selectFirstElement(".c-menu", this.element);
                    var e = n.selectElementsT(".c-menu-item a", this.element);
                    if (e.length > 0 ? this.items = e : this.items = n.selectElementsT(".c-menu-item span", this.element), this.disabled = "true" === this.element.getAttribute("aria-disabled"), this.trigger && this.menu && this.items && this.items.length) {
                        for (var t = null, i = 0, s = this.items; i < s.length; i++) {
                            var o = s[i];
                            this.itemIsSelected(o) && null === t ? (t = o, o.setAttribute(this.getSelectedAttribute(o), "true")) : o.setAttribute(this.getSelectedAttribute(o), "false"), o.setAttribute("tabindex", "-1"), this.cleanSelectedAttributes(o), o.hasAttribute("role") || o.setAttribute("role", "menuitem")
                        }
                        var r = this.isExpanded();
                        this.onItemSelected(t, !0, !1), this.addEventListeners(), r && this.expand()
                    }
                }
            }, t.prototype.teardown = function() {
                n.removeEvent(this.trigger, n.eventTypes.click, this.onTriggerClick), n.removeEvent(this.trigger, n.eventTypes.keydown, this.onTriggerKeyPress), n.removeEvent(this.menu, n.eventTypes.keydown, this.handleMenuKeydownEvent, !0);
                for (var e = 0, t = this.items; e < t.length; e++) {
                    var i = t[e];
                    n.removeEvent(i, n.eventTypes.click, this.onItemClick)
                }
                n.removeEvent(document, n.eventTypes.click, this.onNonSelectMenuClick), n.removeEvent(this.items[this.items.length - 1], n.eventTypes.keydown, this.onNonSelectMenuTab), this.persist = !1, this.trigger = null, this.menu = null, this.items = null, this.selectedItem = null
            }, t.prototype.setSelectedItem = function(e) {
                return !(!e || !this.element) && this.onItemSelected(n.selectFirstElementT("li[id='" + e + "'] > a", this.element), !1, !1)
            }, t.prototype.isExpanded = function() {
                return !!this.trigger && !!this.menu && "true" === this.trigger.getAttribute(t.ariaExpanded) && "false" === this.menu.getAttribute(t.ariaHidden)
            }, t.prototype.itemIsSelected = function(e) {
                return "true" === e.getAttribute(t.ariaSelected) || "true" === e.getAttribute(t.ariaChecked)
            }, t.prototype.getSelectedAttribute = function(e) {
                return "menuitemradio" === e.getAttribute("role") ? t.ariaChecked : t.ariaSelected
            }, t.prototype.cleanSelectedAttributes = function(e) {
                var i = this.getSelectedAttribute(e) === t.ariaSelected ? t.ariaChecked : t.ariaSelected;
                e.removeAttribute(i)
            }, t.prototype.expand = function() {
                if (this.trigger && this.menu) {
                    this.trigger.setAttribute(t.ariaExpanded, "true"),
                        this.menu.setAttribute(t.ariaHidden, "false");
                    var e = s.collidesWith(this.menu);
                    if (e)
                        if (e.right) n.css(this.menu, "left", ""), n.css(this.menu, "right", "0");
                        else if (e.left) n.css(this.menu, "left", "0"), n.css(this.menu, "right", "");
                    else if (e.bottom) {
                        var i = window.getComputedStyle(this.menu).borderLeft;
                        n.css(this.menu, "display", "none"), n.css(this.menu, "top", "initial"), n.css(this.menu, "border-bottom", "0"), n.css(this.menu, "border-top", i), n.css(this.menu, "bottom", "100%"), n.css(this.menu, "display", "")
                    }
                    if (this.items) {
                        var o = this.items.indexOf(this.selectedItem),
                            r = o === -1 ? 0 : o;
                        this.items[r].focus()
                    }
                }
            }, t.prototype.collapse = function() {
                this.trigger && this.menu && (this.trigger.setAttribute(t.ariaExpanded, "false"), this.menu.setAttribute(t.ariaHidden, "true"))
            }, t.prototype.addEventListeners = function() {
                if (this.trigger && this.items) {
                    n.addEvent(this.trigger, n.eventTypes.click, this.onTriggerClick), n.addEvent(this.trigger, n.eventTypes.keydown, this.onTriggerKeyPress), n.addEvent(this.menu, n.eventTypes.keydown, this.handleMenuKeydownEvent, !0);
                    for (var e = 0, t = this.items; e < t.length; e++) {
                        var i = t[e];
                        n.addEvent(i, n.eventTypes.click, this.onItemClick)
                    }
                    n.addEvent(this.items[this.items.length - 1], n.eventTypes.keydown, this.onNonSelectMenuTab), n.addEvent(document, n.eventTypes.click, this.onNonSelectMenuClick)
                }
            }, t.prototype.onTriggerToggled = function() {
                this.isExpanded() ? this.collapse() : this.expand()
            }, t.prototype.onItemSelected = function(e, t, i) {
                return e && e !== this.selectedItem ? (this.persist && this.trigger && (this.ignoreNextDOMChange = !0, n.setText(this.trigger, n.getText(e))), this.selectedItem && this.selectedItem.setAttribute(this.getSelectedAttribute(this.selectedItem), "false"), this.selectedItem = e, this.selectedItem.setAttribute(this.getSelectedAttribute(this.selectedItem), "true"), this.collapse(), this.initiatePublish({
                    id: this.selectedItem.parentElement.id,
                    href: this.selectedItem.getAttribute("href"),
                    internal: t,
                    userInitiated: i
                }), !0) : (this.collapse(), !1)
            }, t.prototype.publish = function(e, t) {
                this.selectedItem && e.onSelectionChanged(t)
            }, t.prototype.handleMenuKeydown = function(e, t) {
                switch (t) {
                    case 32:
                    case 13:
                        this.handleMenuEnterKey(e), this.trigger.focus();
                        break;
                    case 27:
                        this.trigger.focus(), this.collapse();
                        break;
                    case 38:
                        this.handleMenuArrowKey(!0, e);
                        break;
                    case 40:
                        this.handleMenuArrowKey(!1, e);
                        break;
                    case 9:
                        this.isExpanded() && (this.handleMenuEnterKey(e), this.trigger.focus())
                }
            }, t.prototype.handleMenuArrowKey = function(e, t) {
                var i = this.items.indexOf(t);
                i !== -1 && (i += e ? -1 : 1, i < 0 ? i = this.items.length - 1 : i >= this.items.length && (i = 0), this.items[i].focus())
            }, t.prototype.handleMenuEnterKey = function(e) {
                this.onItemSelected(e, !1, !0)
            }, t.selector = ".c-select-menu", t.typeName = "SelectMenu", t.ariaExpanded = "aria-expanded", t.ariaHidden = "aria-hidden", t.ariaSelected = "aria-selected", t.ariaChecked = "aria-checked", t.universalHeaderMenuSelector = "js-nav-menu", t
        }(i.Publisher);
        t.SelectMenu = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.onClick = function(e) {
                    i.togglePressedState()
                }, t && this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.buttonContainer = this.element.parentNode, this.buttonContainer) {
                    var e = this.buttonContainer.getAttribute(t.ariaLabelledBySelector);
                    this.ariaLabelledByElement = document.getElementById(e), this.nameSelector = '.c-select-button[name="' + this.element.getAttribute("name") + '"]', this.selectedText = this.element.getAttribute(t.selectedTextSelector), this.unselectedText = this.element.getAttribute(t.unselectedTextSelector), this.prepareSwatches(), n.addEvent(this.element, n.eventTypes.click, this.onClick)
                }
            }, t.prototype.teardown = function() {
                n.removeEvent(this.element, n.eventTypes.click, this.onClick)
            }, t.prototype.prepareSwatches = function() {
                var e = this.element.getAttribute("data-select-button-swatch"),
                    t = s.detectContrast(e);
                t && (this.element.style.backgroundColor = "#" + e, this.element.disabled && (n.addClass(this.element, "f-swatch-disabled"), 1 === t && n.addClass(this.element, "f-swatch-disabled-dark")))
            }, t.prototype.togglePressedState = function() {
                var e = this.selectedText;
                if (this.element.getAttribute(t.multiSelectAttributeName)) this.element.setAttribute(t.pressedAttributeName, this.isPressed() ? "false" : "true"), this.isPressed() || (e = this.unselectedText);
                else
                    for (var i = 0, s = n.selectElements(this.nameSelector); i < s.length; i++) {
                        var o = s[i];
                        o.setAttribute(t.pressedAttributeName, o === this.element ? "true" : "false")
                    }
                n.setText(this.ariaLabelledByElement, e)
            }, t.prototype.isPressed = function() {
                return "true" === this.element.getAttribute(t.pressedAttributeName)
            }, t.selector = ".c-select-button", t.typeName = "SelectButton", t.pressedAttributeName = "aria-pressed", t.multiSelectAttributeName = "data-select-button-multiselect", t.selectedTextSelector = "data-js-selected-text", t.unselectedTextSelector = "data-js-unselected-text", t.ariaLabelledBySelector = "aria-labelledby", t
        }(i.ObservableComponent);
        t.SelectButton = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(38), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t, i) {
                var s = this;
                void 0 === i && (i = null), e.call(this, t, i), this.carouselElement = t, this.onItemFocus = function(e) {
                    var t = n.getEventTargetOrSrcElement(e);
                    if (t) {
                        for (;
                            "LI" !== t.tagName && t.parentElement && t.parentElement !== t;) t = t.parentElement;
                        "LI" === t.tagName && s.scrollItemIntoView(t)
                    }
                }, this.onResized = function(e) {
                    s.onCarouselResized()
                }
            }
            return o(t, e), t.prototype.update = function() {
                if (!e.prototype.update.call(this)) return !1;
                this.resizeThrottledEventHandler = n.addThrottledEvent(window, n.eventTypes.resize, this.onResized);
                var i = n.hasClass(this.slides[0], "f-gallery") ? t.focusGalleryItemSelector : t.focusItemSelector;
                return this.focusElements = n.selectElements(i, this.carouselElement), n.addEvent(this.focusElements, n.eventTypes.focus, this.onItemFocus), !0
            }, t.prototype.teardown = function() {
                e.prototype.teardown.call(this), n.removeEvent(window, n.eventTypes.resize, this.resizeThrottledEventHandler), n.removeEvent(this.focusElements, n.eventTypes.focus, this.onItemFocus)
            }, t.prototype.getSlides = function() {
                var e = n.selectElements(t.singleSlideSelector, this.carouselElement);
                return e && e.length && n.selectFirstElement("li", e[0]) ? (this.singleSlideWidth = s.getDimensions(e[0]).width, e) : null
            }, t.prototype.getFirstActiveIndex = function() {
                return 0
            }, t.prototype.isScrollablePrevious = function() {
                var e = parseInt(n.css(this.slides[this.activeIndex], this.directionValue), 10);
                return !isNaN(e) && 0 !== e
            }, t.prototype.isScrollableNext = function() {
                var e = parseInt(n.css(this.slides[this.activeIndex], this.directionValue), 10),
                    t = s.getDimensions(this.carouselElement).width,
                    i = this.getCurrentSlideSize();
                return s.isNumber(e) || (e = 0), !(t + Math.abs(e) + i.gutter >= this.singleSlideWidth)
            }, t.prototype.previousSlide = function() {
                this.changeSingleSlide(!1)
            }, t.prototype.nextSlide = function() {
                this.changeSingleSlide(!0)
            }, t.prototype.changeSingleSlide = function(t) {
                var i, o = this.slides[this.activeIndex],
                    r = parseInt(n.css(o, this.directionValue), 10),
                    a = this.getCurrentSlideSize(),
                    l = s.getDimensions(this.carouselElement).width,
                    h = Math.floor(l / (a.width + a.gutter)),
                    c = t ? -1 : 1,
                    u = t ? a.gutter : 0;
                s.isNumber(r) || (r = 0), 0 === h && (h = 1), h = l % (a.width + a.gutter) === 0 ? h - 1 : h, h = Math.max(h, 1), i = h * (a.width + a.gutter);
                var d, p = t ? this.singleSlideWidth - l + r : Math.abs(r);
                d = i <= p ? i * c + r : p * c + r + u, n.css(o, this.directionValue, d + "px"), e.prototype.updateFlippers.call(this), this.fireSingleSlideChangedNotification(d, l, a)
            }, t.prototype.fireSingleSlideChangedNotification = function(t, s, o) {
                for (var r = n.selectElements(i.CarouselBase.allChildSelectors, this.carouselElement), a = o.width, l = o.width + o.gutter, h = -1, c = -1, u = -1, d = -1, p = 0; p < r.length; p++) {
                    var m = p * l + t,
                        v = m + a;
                    if (!(v < 0) && (m < 0 && v > 0 && (h = p), u === -1 && m >= 0 && (u = p, h === -1 && (h = u)), u !== -1 && v <= s && (d = p), d !== -1 && c === -1 && m < s && v > s)) {
                        c = p;
                        break
                    }
                }
                c === -1 && (c = d), e.prototype.initiatePublish.call(this, {
                    fullyVisibleItemRange: [u, d],
                    partiallyVisibleItemRange: [h, c],
                    userInitiated: !0
                })
            }, t.prototype.getCurrentSlideSize = function() {
                var e = n.selectFirstElement(i.CarouselBase.allChildSelectors, this.carouselElement);
                if (e) {
                    var t = this.direction === n.Direction.left ? parseInt(n.css(e, "marginRight"), 10) : parseInt(n.css(e, "marginLeft"), 10);
                    return {
                        width: e.offsetWidth,
                        gutter: isNaN(t) ? 0 : t
                    }
                }
                return {
                    width: 0,
                    gutter: 0
                }
            }, t.prototype.onCarouselResized = function() {
                var t = this.slides[0],
                    i = parseInt(n.css(t, this.directionValue), 10),
                    o = s.getDimensions(this.carouselElement).width;
                this.singleSlideWidth = s.getDimensions(this.slides[0]).width, !isNaN(i) && i < 0 && this.singleSlideWidth + i < o && n.css(t, this.directionValue, Math.min(0, o - this.singleSlideWidth) + "px"), e.prototype.updateFlippers.call(this)
            }, t.prototype.scrollItemIntoView = function(t) {
                var i = this,
                    o = s.getDimensions(this.carouselElement).width,
                    r = this.slides[0],
                    a = t.offsetLeft,
                    l = this.getCurrentSlideSize(),
                    h = !1;
                if (this.direction === n.Direction.left) {
                    var c = parseInt(n.css(r, "left"), 10) || 0;
                    c < 0 && -c > a ? (a = -a + 1, h = !0) : c + a > o - l.width && (a = o - l.width - a - 1, h = !0)
                } else {
                    var u = s.getDimensions(r).width;
                    a + l.width + l.gutter + r.offsetLeft > o ? (a = -(u - a - l.width - l.gutter) + 1, h = !0) : a + r.offsetLeft < 0 && (a = o - (u - a - l.gutter) - 1, h = !0)
                }
                h && (n.css(r, this.directionValue, a + "px"), e.prototype.updateFlippers.call(this), setTimeout(function() {
                    r.parentElement.scrollLeft = 0, i.fireSingleSlideChangedNotification(a, o, l)
                }, 0))
            }, t.selector = ".c-carousel[class*=f-single-slide]", t.typeName = "SingleSlideCarousel", t.singleSlideSelector = i.CarouselBase.selector + " > * > ul", t.focusItemSelector = i.CarouselBase.selector + " > * > ul > li > section a", t.focusGalleryItemSelector = i.CarouselBase.selector + " > * > ul > li a", t
        }(i.CarouselBase);
        t.SingleSlideCarousel = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.onKeyPressed = function(e) {
                    switch (e) {
                        case 37:
                        case 39:
                            if (!i.isVerticalSlider) {
                                var t = i.primaryDirection === n.Direction.left ? i.stepOffset : -i.stepOffset;
                                t = 37 === e ? -t : t, i.updateThumbOffset(i.thumbOffset + t, !0, !0)
                            }
                            break;
                        case 38:
                        case 40:
                            if (i.isVerticalSlider) {
                                var t = 38 === e ? i.stepOffset : -i.stepOffset;
                                i.updateThumbOffset(i.thumbOffset + t, !0, !0), n.preventDefault(n.getEvent(event))
                            }
                            break;
                        case 33:
                            var t = 2 * i.stepOffset;
                            i.updateThumbOffset(i.thumbOffset + t, !0, !0);
                            break;
                        case 34:
                            var t = -(2 * i.stepOffset);
                            i.updateThumbOffset(i.thumbOffset + t, !0, !0);
                            break;
                        case 36:
                            var s = parseInt(i.input.getAttribute("min"), 10) || 0;
                            i.updateThumbOffset(s, !0, !0);
                            break;
                        case 35:
                            var o = parseInt(i.input.getAttribute("step"), 10),
                                r = i.thumbRange + o;
                            i.updateThumbOffset(r, !0, !0)
                    }
                }, this.onKeyDown = function(e) {
                    i.onKeyPressed(s.getKeyCode(n.getEvent(e)))
                }, this.onMouseDown = function(e) {
                    return e = n.getEvent(e), i.setupDimensions(), n.getEventTargetOrSrcElement(e) === i.thumb ? (n.addEvent(document, n.eventTypes.mousemove, i.onMouseMove), void n.addEvent(document, n.eventTypes.mouseup, i.onMouseUp)) : void i.moveThumbTo(e.clientX, e.clientY)
                }, this.onMouseMove = function(e) {
                    e = n.getEvent(e), i.moveThumbTo(e.clientX, e.clientY)
                }, this.onMouseUp = function(e) {
                    n.removeEvent(document, n.eventTypes.mousemove, i.onMouseMove), n.removeEvent(document, n.eventTypes.mouseup, i.onMouseUp)
                }, this.onWindowResized = function(e) {
                    i.setupDimensions()
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.element) {
                    this.input = n.selectFirstElement("input", this.element), this.primaryDirection = n.getDirection(this.element), this.isVerticalSlider = n.hasClass(this.input, "f-vertical"), n.preventDefaultSwipeAction(this.element, !this.isVerticalSlider), n.addClass(this.input, "x-screen-reader");
                    var e = parseInt(this.input.getAttribute("min"), 10) || 0,
                        t = parseInt(this.input.getAttribute("max"), 10) || 100,
                        i = parseInt(this.input.getAttribute("value"), 10),
                        s = parseInt(this.input.getAttribute("step"), 10);
                    this.element.children[this.element.children.length - 1] === this.input ? (this.mockSlider = document.createElement("div"), this.thumb = document.createElement("button"), this.thumb.setAttribute("role", "slider"), this.thumb.setAttribute("aria-valuemin", e.toString()), this.thumb.setAttribute("aria-valuemax", t.toString()), this.thumb.setAttribute("aria-valuenow", i.toString()), this.valueTooltip = document.createElement("span"), this.track = document.createElement("span"), this.thumb.appendChild(this.valueTooltip), this.mockSlider.appendChild(this.thumb), this.mockSlider.appendChild(this.track), this.element.appendChild(this.mockSlider), this.ignoreNextDOMChange = !0) : (this.mockSlider = this.element.children[this.element.children.length - 1], this.thumb = this.mockSlider.firstElementChild, this.valueTooltip = this.thumb.firstElementChild, this.track = this.mockSlider.children[this.mockSlider.children.length - 1]), this.halfThumbOffset = this.thumb.clientWidth / 2, this.resetSliderInternal(e, t, i, s, !0) && (n.addEvent(this.element, n.eventTypes.mousedown, this.onMouseDown), n.addEvent(this.thumb, n.eventTypes.keydown, this.onKeyDown), this.resizeListener = n.addDebouncedEvent(window, n.eventTypes.resize, this.onWindowResized))
                }
            }, t.prototype.teardown = function() {
                n.removeEvent(this.element, n.eventTypes.mousedown, this.onMouseDown), n.removeEvent(this.thumb, n.eventTypes.keydown, this.onKeyDown), n.removeEvent(window, n.eventTypes.resize, this.resizeListener), this.input = null, this.mockSlider = null, this.thumb = null, this.valueTooltip = null, this.track = null, this.resizeListener = null
            }, t.prototype.resetSlider = function(e, t, i, n) {
                return this.resetSliderInternal(e, t, i, n, !1)
            }, t.prototype.resetSliderInternal = function(e, t, i, n, o) {
                return !(!s.isNumber(e) || !s.isNumber(t)) && (!(Math.max(e, t) - Math.min(e, t) <= 0) && (this.min = Math.min(e, t), this.max = Math.max(e, t), this.range = this.max - this.min, this.step = isNaN(n) ? this.range / 10 : n, this.value = Math.min(Math.max(isNaN(i) ? isNaN(this.value) ? this.min : this.value : i, this.min), this.max), this.setupDimensions(), this.updateThumbOffset(this.thumbOffset, o, !1), !0))
            }, t.prototype.setValue = function(e) {
                return !(!s.isNumber(e) || e < this.min || e > this.max) && (e !== this.value && (this.thumbOffset = (e - this.min) * this.thumbRange / this.range + this.halfThumbOffset, this.updateThumbOffset(this.thumbOffset, !1, !1)), !0)
            }, t.prototype.setupDimensions = function() {
                this.dimensions = n.getClientRect(this.mockSlider), this.isVerticalSlider ? (this.dimensions.left -= t.hitPadding, this.dimensions.right += t.hitPadding, this.thumbRange = this.dimensions.height - this.thumb.clientWidth, this.maxThumbOffset = this.dimensions.height) : (this.dimensions.top -= t.hitPadding, this.dimensions.bottom += t.hitPadding, this.thumbRange = this.dimensions.width - this.thumb.clientWidth, this.maxThumbOffset = this.dimensions.width), this.thumbRange = Math.max(this.thumbRange, 1), this.thumbOffset = (this.value - this.min) * this.thumbRange / this.range + this.halfThumbOffset, this.stepOffset = this.thumbRange / (this.range / this.step), this.setThumbPosition()
            }, t.prototype.setThumbPosition = function() {
                var e = Math.max(0, this.thumbOffset - this.halfThumbOffset);
                n.css(this.thumb, n.Direction[this.primaryDirection], e + "px"), n.css(this.track, "width", e + "px")
            }, t.prototype.updateThumbOffset = function(e, t, i) {
                s.isNumber(e) || (e = this.thumbOffset), this.thumbOffset = Math.min(Math.max(0, e), this.maxThumbOffset);
                var o = 1e3 * Math.max(0, this.thumbOffset - this.halfThumbOffset) * this.range / this.thumbRange;
                o = Math.round(o) / 1e3 + this.min, this.value = Math.min(Math.max(this.min, o), this.max), this.valueTooltipText = null, this.initiatePublish({
                    value: this.value,
                    internal: t,
                    userInitiated: i
                }), this.valueTooltipText || (this.valueTooltipText = Math.round(this.value).toString()), isNaN(parseFloat(this.valueTooltipText)) || this.valueTooltipText.match(":") ? (this.input.setAttribute("value", o.toString()), this.thumb.setAttribute("aria-valuenow", o.toString()), this.thumb.setAttribute("aria-valuetext", this.valueTooltipText)) : (this.input.setAttribute("value", this.valueTooltipText), this.thumb.setAttribute("aria-valuenow", this.valueTooltipText)), n.setText(this.valueTooltip, this.valueTooltipText), this.setThumbPosition()
            }, t.prototype.publish = function(e, t) {
                var i = e.onValueChanged(t);
                i && !this.valueTooltipText && (this.valueTooltipText = i)
            }, t.prototype.moveThumbTo = function(e, t) {
                if (s.pointInRect(e, t, this.dimensions)) {
                    var i = this.dimensions.bottom - t;
                    this.isVerticalSlider || (i = this.primaryDirection === n.Direction.left ? e - this.dimensions.left : this.dimensions.right - e), this.updateThumbOffset(i, !0, !0)
                }
            }, t.selector = ".c-slider", t.typeName = "Slider", t.hitPadding = 20, t
        }(i.Publisher);
        t.Slider = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.element = t, this.ariaExpanded = "aria-expanded", this.buttonToggle = "data-js-toggle", this.ariaHidden = "aria-hidden", this.hideClass = "f-hide", this.isHidden = !0, this.iconOverflowThresholdLength = 4, this.maxIconShowCount = this.iconOverflowThresholdLength - 1, this.handleMouseUp = function(e) {
                    i.handleToggle(!1)
                }, this.handleKeydown = function(e) {
                    e = n.getEvent(e);
                    var t = s.getKeyCode(e),
                        o = n.getEventTargetOrSrcElement(e);
                    switch (t) {
                        case 9:
                            !i.isHidden && o === i.icons[i.maxIconShowCount] && e.shiftKey && (n.preventDefault(e), i.handleToggle(!1), i.toggle.focus());
                            break;
                        case 13:
                            o === i.toggle && i.handleToggle(!0)
                    }
                }, this.handleToggle = function(e) {
                    i.isHidden ? i.toggleIcons(!1, e) : i.toggleIcons(!0, e), i.ariaExpanded && i.toggle.setAttribute(i.ariaExpanded, (!i.isHidden).toString()), i.toggle.setAttribute(i.buttonToggle, (!i.isHidden).toString())
                }, this.toggleIcons = function(e, t) {
                    for (var s = 0; s < i.maxIconShowCount; s++) e ? n.removeClass(i.icons[s], i.hideClass) : n.addClass(i.icons[s], i.hideClass);
                    for (var s = i.maxIconShowCount; s < i.icons.length; s++) e ? n.addClass(i.icons[s], i.hideClass) : n.removeClass(i.icons[s], i.hideClass);
                    t && (e ? i.icons[0].focus() : i.icons[i.maxIconShowCount].focus()), i.isHidden = e
                }, t && this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.icons = n.selectElementsT('a[itemprop="sameAs"]', this.element), this.icons && this.icons.length && (this.toggle = n.selectFirstElement("button", this.element), this.toggle && (n.addEvent(this.toggle, n.eventTypes.mouseup, this.handleMouseUp), n.addEvent(this.element, n.eventTypes.keydown, this.handleKeydown), this.icons.length > this.iconOverflowThresholdLength && (this.toggle.setAttribute(this.ariaHidden, "false"), this.ariaExpanded ? this.toggle.setAttribute(this.ariaExpanded, "false") : this.toggle.setAttribute(this.buttonToggle, "false"), this.toggleIcons(!0, !1))))
            }, t.prototype.teardown = function() {
                n.removeEvent(this.toggle, n.eventTypes.mouseup, this.handleMouseUp), n.removeEvent(this.element, n.eventTypes.keydown, this.handleKeydown)
            }, t.selector = ".m-social", t.typeName = "Social", t
        }(i.ObservableComponent);
        t.Social = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(3), i(2), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var r = function(e) {
            function t(t) {
                var n = this;
                e.call(this, t), this.onExpandableItemClicked = function(e) {
                    n.setExpandedItem(i.getEventTargetOrSrcElement(e))
                }, this.onActivatableItemClicked = function(e) {
                    n.setActiveItem(i.getEventTargetOrSrcElement(e))
                }, this.keydownEventListener = function(e) {
                    n.itemKeydownHandler(i.getEventTargetOrSrcElement(e), s.getKeyCode(e)) && i.preventDefault(e)
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (!this.element) return null;
                this.items = i.selectElements(t.itemSelector, this.element);
                var e = i.selectElements("." + t.activeSelector, this.element);
                this.activeItem = e ? e.shift() : null;
                for (var n = 0, s = e; n < s.length; n++) {
                    var o = s[n];
                    i.removeClass(o, t.activeSelector)
                }
                if (this.syncExpandedItem(), this.items && this.items.length) {
                    for (var r = 0, a = this.items; r < a.length; r++) {
                        var o = a[r];
                        this.isExpandable(o) ? i.addEvent(o, i.eventTypes.click, this.onExpandableItemClicked) : i.addEvent(o, i.eventTypes.click, this.onActivatableItemClicked)
                    }
                    i.addEvent(this.items, i.eventTypes.keydown, this.keydownEventListener)
                }
            }, t.prototype.teardown = function() {
                if (this.items && this.items.length) {
                    for (var e = 0, t = this.items; e < t.length; e++) {
                        var n = t[e];
                        this.isExpandable(n) ? i.removeEvent(n, i.eventTypes.click, this.onExpandableItemClicked) : i.removeEvent(n, i.eventTypes.click, this.onActivatableItemClicked)
                    }
                    i.removeEvent(this.items, i.eventTypes.keydown, this.keydownEventListener)
                }
                this.items = null, this.activeItem = null, this.expandedItem = null
            }, t.prototype.setExpandedItem = function(e) {
                e && e !== this.expandedItem && (this.collapseItem(this.expandedItem), this.expandItem(e))
            }, t.prototype.setActiveItem = function(e) {
                e && e.parentElement && "false" !== e.parentElement.getAttribute("aria-hidden") && (this.expandedItem = null), e && e !== this.activeItem && (i.removeClass(this.activeItem, t.activeSelector), this.activeItem = e, i.addClass(this.activeItem, t.activeSelector), this.syncExpandedItem())
            }, t.prototype.expandItem = function(e) {
                if (e) {
                    var n = this.getExpandableElementForExpandableItem(e),
                        s = this.getExpandableElementForExpandableItem(this.expandedItem);
                    if (n && (!s || n !== s)) {
                        e.setAttribute("data-state", t.stateNames.expanded), n.setAttribute("aria-hidden", "false"), n.style.height = "auto", n.style.overflow = "visible", this.collapseItem(this.expandedItem), this.expandedItem = e;
                        for (var o = 0, r = i.selectElements(t.itemSelector, n); o < r.length; o++) {
                            var a = r[o];
                            a.removeAttribute(t.tabIndexAttribute)
                        }
                    }
                }
            }, t.prototype.collapseItem = function(e) {
                if (e) {
                    var n = document.getElementById(e.getAttribute("aria-controls"));
                    if (n) {
                        e.setAttribute("data-state", t.stateNames.collapsed), n.setAttribute("aria-hidden", "true"), n.style.height = "0", n.style.overflow = "hidden";
                        for (var s = 0, o = i.selectElements(t.itemSelector, n); s < o.length; s++) {
                            var r = o[s];
                            r.setAttribute(t.tabIndexAttribute, "-1")
                        }
                    }
                }
            }, t.prototype.isExpandable = function(e) {
                return !!(e && e.hasAttribute("data-state") && e.hasAttribute("aria-controls"))
            }, t.prototype.syncExpandedItem = function() {
                if (this.items && this.items.length && this.activeItem) {
                    var e = this.getExpandableElementForActiveItem(),
                        t = this.getExpandableElementForExpandableItem(this.expandedItem);
                    if (!t || t !== e)
                        for (var i = 0, n = this.items; i < n.length; i++) {
                            var s = n[i];
                            this.isExpandable(s) && (e && this.getExpandableElementForExpandableItem(s) === e ? this.expandItem(s) : this.collapseItem(s))
                        }
                }
            }, t.prototype.getExpandableElementForActiveItem = function() {
                return this.activeItem && this.activeItem.parentElement && this.activeItem.parentElement.hasAttribute("id") ? this.activeItem.parentElement : null
            }, t.prototype.getExpandableElementForExpandableItem = function(e) {
                return this.isExpandable(e) && e.nextElementSibling ? e.nextElementSibling : null
            }, t.prototype.itemKeydownHandler = function(e, t) {
                if (!e || !t) return !1;
                switch (t) {
                    case 32:
                    case 13:
                        if (this.isExpandable(e)) return this.setExpandedItem(e), !0
                }
                return !1
            }, t.selector = ".m-supplemental-nav", t.typeName = "SupplementalNavigation", t.activeSelector = "f-active", t.itemSelector = "a, button", t.tabIndexAttribute = "tabindex", t.dateState = "data-state", t.stateNames = {
                expanded: "expanded",
                collapsed: "collapsed"
            }, t
        }(n.ObservableComponent);
        t.SupplementalNavigation = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3), i(8), i(4)], s = function(e, t, i, n, s, r) {
        "use strict";
        var a = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.onSortButtonClicked = function(e) {
                    for (var t, s = e.currentTarget || n.getEventTargetOrSrcElement(e); s !== i.element;) {
                        if (s.getAttribute("data-sort-index")) {
                            t = s;
                            break
                        }
                        s = s.parentElement
                    }
                    t && i.reSort(t)
                }, this.onSortButtonKeydown = function(e) {
                    if (9 === s.getKeyCode(e) || "Tab" === s.getVirtualKey(e)) {
                        var t = e.currentTarget || n.getEventTargetOrSrcElement(e),
                            o = void 0,
                            r = void 0;
                        if (e.shiftKey)
                            for (var a = 0, l = i.columnInfos; a < l.length; a++) {
                                var h = l[a];
                                if (h && h.button) {
                                    if (h.button === t) {
                                        o = h;
                                        break
                                    }
                                    r = h
                                }
                            } else
                                for (var c = 0, u = i.columnInfos; c < u.length; c++) {
                                    var h = u[c];
                                    if (h && h.button)
                                        if (h.button === t) o = h;
                                        else if (o) {
                                        r = h;
                                        break
                                    }
                                }
                        o && r && (n.preventDefault(e), r.button.focus())
                    }
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.element && (this.sortableTable = n.selectFirstElementT('table[data-f-sort="true"]', this.element), this.sortableTable && !this.ariaLiveRegion && (this.ariaLiveRegion = document.createElement("p"), n.addClass(this.ariaLiveRegion, "x-screen-reader"), this.ariaLiveRegion.setAttribute("aria-live", "assertive"), this.element.appendChild(this.ariaLiveRegion), this.ascendingLocString = this.element.getAttribute("data-f-loc-ascending") || "Sorted by {0} - ascending", this.descendingLocString = this.element.getAttribute("data-f-loc-dascending") || "Sorted by {0} - descending"), this.reloadTable())
            }, t.prototype.teardown = function() {
                for (var e = 0, t = n.selectElementsT("thead > tr", this.sortableTable); e < t.length; e++)
                    for (var i = t[e], s = 0, o = i.cells.length; s < o; s++) {
                        var r = i.cells[s];
                        n.hasClass(r, "f-sortable") && (n.removeEvent(r.firstElementChild, n.eventTypes.click, this.onSortButtonClicked), n.removeEvent(r.firstElementChild, n.eventTypes.keydown, this.onSortButtonKeydown))
                    }
                this.sortableTable = null, this.tableBody = null, this.originalRows = null, this.columnInfos = null
            }, t.prototype.alertUserToSorting = function(e, t) {
                var i = this;
                this.ariaLiveRegion && (n.setText(this.ariaLiveRegion, r.format(t, e)), setTimeout(function() {
                    i.ignoreNextDOMChange = !0, n.removeInnerHtml(i.ariaLiveRegion)
                }, 3e3))
            }, t.prototype.reloadTable = function() {
                this.sortableTable && (this.tableBody || (this.tableBody = n.selectFirstElementT("tbody", this.sortableTable)), this.originalRows = null, this.tableBody && (this.originalRows = n.selectElementsT("tr", this.tableBody), this.rebuildSortInfo()))
            }, t.prototype.rebuildSortInfo = function() {
                if (this.originalRows && this.originalRows.length && (this.columnInfos && this.columnInfos.length || this.rebuildColumnInfo(), this.columnInfos && this.columnInfos.length))
                    for (var e = 0, t = this.columnInfos.length; e < t; e++)
                        if (this.columnInfos[e]) {
                            for (var i = new Array, n = 0, s = this.originalRows.length; n < s; n++) {
                                var o = this.originalRows[n],
                                    r = new l(n, this.getSortKey(o.cells[e]));
                                i.push(r)
                            }
                            this.columnInfos[e].sortOrder = i
                        }
            }, t.prototype.rebuildColumnInfo = function() {
                var e = n.selectElementsT("thead > tr", this.sortableTable);
                this.columnInfos = [];
                for (var t = 0, i = e.length; t < i; t++)
                    for (var s = this.findNextNull(this.columnInfos, 0), o = 0, r = e[t].cells.length; o < r; o++) {
                        var a = e[t].cells[o];
                        if (n.hasClass(a, "f-sortable")) {
                            var l = a.firstElementChild,
                                c = new h(a, l);
                            a.setAttribute("aria-sort", "none"), l.setAttribute("data-sort-index", s.toString()), n.addClass(l, "c-glyph"), n.addEvent(l, n.eventTypes.click, this.onSortButtonClicked), n.addEvent(l, n.eventTypes.keydown, this.onSortButtonKeydown), this.columnInfos[s] = c, s = this.findNextNull(this.columnInfos, s + 1)
                        } else if (0 === t)
                            for (var u = 0, d = a.colSpan; u < d; u++) this.columnInfos.push(null), s++;
                        else s++
                    }
                if (this.columnInfos.length > 2)
                    for (var p = void 0, m = void 0, v = 0, f = this.columnInfos; v < f.length; v++) {
                        var g = f[v];
                        g && g.button && (p ? (m && m.button.setAttribute("tabIndex", "-1"), m = g) : p = g)
                    }
            }, t.prototype.findNextNull = function(e, t) {
                for (var i = t, n = e.length; i < n; i++)
                    if (!e[i]) return i;
                return e.length
            }, t.prototype.reSort = function(e) {
                var t = this.columnInfos[parseInt(e.getAttribute("data-sort-index"), 10)],
                    i = t.header.getAttribute("aria-sort"),
                    s = "ascending" !== i;
                this.clearSortIndicators(), this.reorderTableRows(t, s), s ? (t.header.setAttribute("aria-sort", "ascending"), n.addClass(t.button, "f-ascending"), this.alertUserToSorting(n.getText(e), this.ascendingLocString)) : (t.header.setAttribute("aria-sort", "descending"), n.addClass(t.button, "f-descending"), this.alertUserToSorting(n.getText(e), this.descendingLocString))
            }, t.prototype.clearSortIndicators = function() {
                for (var e = 0, t = this.columnInfos; e < t.length; e++) {
                    var i = t[e];
                    i && (i.header.setAttribute("aria-sort", "none"), n.removeClass(i.button, "f-descending"), n.removeClass(i.button, "f-ascending"))
                }
            }, t.prototype.reorderTableRows = function(e, t) {
                var i = this.tableBody.rows.length;
                e.ensureColumnInfoIsSorted(), this.ignoreNextDOMChange = !0;
                for (var n = 0; n < i; n++) {
                    var s = t ? e.sortOrder[n] : e.sortOrder[i - n - 1];
                    this.tableBody.appendChild(this.originalRows[s.originalRowIndex])
                }
            }, t.prototype.getSortKey = function(e) {
                if (n.hasClass(e, "f-numerical")) {
                    if (n.selectElements('[content="0.00"]', e).length > 0) return "";
                    var i = n.getText(e),
                        s = i.match(t.floatRegEx);
                    if (s) return s[0]
                }
                return r.trim(n.getText(e))
            }, t.selector = ".c-table", t.typeName = "Table", t.floatRegEx = /(\d+|\,|\.)+/g, t
        }(i.ObservableComponent);
        t.Table = a;
        var l = function() {
                function e(e, t) {
                    this.originalRowIndex = e, this.key = t
                }
                return e
            }(),
            h = function() {
                function e(e, t) {
                    this.header = e, this.button = t
                }
                return e.prototype.ensureColumnInfoIsSorted = function() {
                    this.sortOrder && !this.isSorted && (this.sortOrder.sort(function(e, t) {
                        var i = e.key,
                            n = t.key;
                        if (i === n) return 0;
                        var s = parseFloat(i),
                            o = parseFloat(n);
                        return isNaN(s) || isNaN(o) ? i > n ? 1 : -1 : s > o ? 1 : -1
                    }), this.isSorted = !0)
                }, e
            }()
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(t, i) {
                var n = this;
                void 0 === i && (i = null), e.call(this, t, i), this.toggleElement = t, this.toggleCheckedState = function() {
                    n.isChecked() ? n.uncheckToggle() : n.checkToggle()
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                return e.prototype.update.call(this), !!this.toggleElement && (this.toggleButton = n.selectFirstElementT("button", this.toggleElement), this.toggleLabel = n.selectFirstElement("button + span", this.toggleElement), void(this.toggleLabel && this.toggleButton && (this.checkedString = this.toggleLabel.getAttribute("data-on-string"), this.uncheckedString = this.toggleLabel.getAttribute("data-off-string"), this.isDisabled() ? this.disableToggle() : this.enableToggle(), this.setToggleCheckedState(this.isChecked()), n.addEvent(this.toggleButton, n.eventTypes.click, this.toggleCheckedState), n.addEvent(this.toggleLabel, n.eventTypes.click, this.toggleCheckedState))))
            }, t.prototype.teardown = function() {
                n.removeEvent(this.toggleButton, n.eventTypes.click, this.toggleCheckedState), n.removeEvent(this.toggleLabel, n.eventTypes.click, this.toggleCheckedState)
            }, t.prototype.checkToggle = function() {
                this.setToggleCheckedState(!0)
            }, t.prototype.uncheckToggle = function() {
                this.setToggleCheckedState(!1)
            }, t.prototype.isChecked = function() {
                return "true" === this.toggleButton.getAttribute(t.ariaChecked)
            }, t.prototype.enableToggle = function() {
                this.toggleButton.disabled = !1, n.removeClass(this.toggleElement, t.disabledClass)
            }, t.prototype.disableToggle = function() {
                this.toggleButton.disabled = !0, n.addClass(this.toggleElement, t.disabledClass)
            }, t.prototype.isDisabled = function() {
                return this.toggleButton.disabled
            }, t.prototype.setToggleCheckedState = function(e) {
                this.isDisabled() || e === this.isChecked() || (this.toggleButton.setAttribute(t.ariaChecked, e.toString()), n.setText(this.toggleLabel, e ? this.checkedString : this.uncheckedString), this.initiatePublish())
            }, t.prototype.publish = function(e, t) {
                e.onToggled && e.onToggled({
                    checked: this.isChecked()
                })
            }, t.selector = ".c-toggle", t.typeName = "Toggle", t.ariaChecked = "aria-checked", t.disabledClass = "f-disabled", t
        }(i.Publisher);
        t.Toggle = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(66), i(67), i(8), i(3), i(4)], s = function(e, t, i, n, s, o, r) {
        "use strict";
        var a = function() {
            function e(t) {
                var n = this;
                if (this.videoComponent = t, this.canPlay = !1, this.errorMessageDisplayed = !1, this.onMouseEvent = function(e) {
                        if (e = o.getEvent(e), "mouseover" === e.type) n.controlPanelTimer && window.clearTimeout(n.controlPanelTimer), n.showControlPanel();
                        else if ("mouseout" === e.type) {
                            for (var t = e.toElement || e.relatedTarget; t && t.parentNode && t.parentNode !== window;) {
                                if (t.parentNode === n || t === n) return void o.preventDefault(e);
                                t = t.parentNode
                            }
                            n.startControlPanelTimeout()
                        }
                    }, this.onVideoMetadataLoaded = function() {
                        n.videoControls && n.videoPlayer && (n.canPlay = !1, n.videoControls.setDuration(n.videoPlayer.duration), null !== n.videoPlayer.getAttribute("autoplay") && n.play())
                    }, this.onVideoTimeUpdate = function() {
                        n.videoControls && n.videoPlayer && (n.videoControls.setPlayPosition(n.videoPlayer.currentTime), n.closedCaptions && n.closedCaptions.updateCaptions(n.videoPlayer.currentTime))
                    }, this.onVideoPlayStateChanged = function(e) {
                        n.canPlay = n.canPlay || "canplay" === e.type || "canplaythrough" === e.type, n.videoControls && n.videoControls.updatePlayPauseState()
                    }, this.onVideoPlayerClicked = function(e) {
                        n.isPlayable && (n.isPaused() ? n.play() : n.pause())
                    }, this.onVideoEnded = function() {
                        n.videoControls && (n.videoControls.setPlayPosition(0), n.videoControls.updatePlayPauseState()), n.closedCaptions && n.closedCaptions.updateCaptions(0)
                    }, this.onResized = function() {
                        n.videoComponent && n.triggerParagraph && (s.getDimensions(n.videoComponent).width < s.Viewports.allWidths[2] ? n.triggerParagraph.setAttribute(e.ariaHidden, "true") : n.triggerParagraph.removeAttribute(e.ariaHidden))
                    }, t) {
                    if (this.videoPlayer = o.selectFirstElementT(".f-video-player", this.videoComponent), this.videoControlsContainer = o.selectFirstElement(".f-video-controls", this.videoComponent), this.videoControls = new i.VideoControls(this.videoControlsContainer, this), !this.videoPlayer || !this.videoPlayer.canPlayType) return null;
                    this.initializeClosedCaptions(), this.triggerContainer = o.selectFirstElement("section", this.videoComponent), this.triggerContainer && (this.trigger = o.selectFirstElement(".c-action-trigger", this.triggerContainer), this.triggerParagraph = o.selectFirstElement("p", this.triggerContainer), this.triggerParagraph && (this.resizeListener = o.addThrottledEvent(window, o.eventTypes.resize, this.onResized), this.onResized())), this.videoControlsContainer && this.videoControls && (this.videoControls.setMuted(null !== this.videoPlayer.getAttribute("muted")), this.videoControls.setVolume(parseInt(s.getCookie(e.cookieVolume) || "1", 10)), o.addEvents(this.videoComponent, "mouseover mouseout", this.onMouseEvent), o.addEvents(this.videoPlayer, "canplay canplaythrough waiting", this.onVideoPlayStateChanged), o.addEvent(this.videoPlayer, o.eventTypes.loadedmetadata, this.onVideoMetadataLoaded), o.addEvent(this.videoPlayer, o.eventTypes.timeupdate, this.onVideoTimeUpdate), o.addEvent(this.videoPlayer, o.eventTypes.ended, this.onVideoEnded), o.addEvent(this.videoPlayer, o.eventTypes.click, this.onVideoPlayerClicked), this.startControlPanelTimeout())
                }
            }
            return e.prototype.startControlPanelTimeout = function() {
                var t = this;
                this.controlPanelTimer = window.setTimeout(function() {
                    t.hideControlPanel()
                }, e.controlPanelTimeout)
            }, e.prototype.hideControlPanel = function() {
                this.controlPanelTimer && window.clearTimeout(this.controlPanelTimer), this.videoControlsContainer && o.hasClass(this.videoControlsContainer, e.showControlsClass) && (o.removeClass(this.videoControlsContainer, e.showControlsClass), o.addClass(this.videoControlsContainer, e.hideControlsClass), this.ccOverlay && (o.removeClass(this.ccOverlay, e.fitControlsClass), this.closedCaptions && this.videoPlayer && this.closedCaptions.updateCaptions(this.videoPlayer.currentTime))), this.videoControls && this.videoControls.prepareToHide()
            }, e.prototype.showControlPanel = function() {
                this.videoControlsContainer && !this.errorMessageDisplayed && o.hasClass(this.videoControlsContainer, e.hideControlsClass) && (o.removeClass(this.videoControlsContainer, e.hideControlsClass), o.addClass(this.videoControlsContainer, e.showControlsClass), this.ccOverlay && (o.addClass(this.ccOverlay, e.fitControlsClass), this.closedCaptions && this.videoPlayer && this.closedCaptions.updateCaptions(this.videoPlayer.currentTime)))
            }, e.prototype.isPaused = function() {
                return !!this.videoPlayer && this.videoPlayer.paused
            }, e.prototype.isPlayable = function() {
                return !!this.videoPlayer && this.canPlay
            }, e.prototype.play = function() {
                this.videoPlayer && this.videoPlayer.play(), this.videoControls && this.videoControls.updatePlayPauseState()
            }, e.prototype.pause = function() {
                this.videoPlayer && this.videoPlayer.pause(), this.videoControls && this.videoControls.updatePlayPauseState()
            }, e.prototype.setPlayPosition = function(t) {
                s.isNumber(t) && this.videoPlayer && (t = Math.max(0, Math.min(t, s.isNumber(this.videoPlayer.duration) ? this.videoPlayer.duration : 0)), Math.abs(t - this.videoPlayer.currentTime) >= e.positionUpdateThreshold && (this.videoPlayer.currentTime = t))
            }, e.prototype.getVolume = function() {
                return this.videoPlayer && s.isNumber(this.videoPlayer.volume) ? this.videoPlayer.volume : 0
            }, e.prototype.setVolume = function(t) {
                s.isNumber(t) && this.videoPlayer && (t = Math.round(100 * Math.max(0, Math.min(t, 1))) / 100, t !== this.videoPlayer.volume && (this.videoPlayer.volume = t, s.setCookie(e.cookieVolume, t.toString(), "/", 365), this.videoControls && this.videoControls.setVolume(t)))
            }, e.prototype.isMuted = function() {
                return !this.videoPlayer || this.videoPlayer.muted
            }, e.prototype.setMuted = function(e) {
                this.videoPlayer && e !== this.videoPlayer.muted && (this.videoPlayer.muted = e, this.videoControls && this.videoControls.setMuted(e))
            }, e.prototype.setFullscreen = function() {
                if (this.videoPlayer && (this.videoPlayer.requestFullscreen || this.videoPlayer.msRequestFullscreen || this.videoPlayer.mozRequestFullScreen || this.videoPlayer.webkitRequestFullscreen || this.videoPlayer.webkitSupportsFullscreen)) {
                    var e = document.fullScreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement,
                        t = document.cancelFullScreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.webkitCancelFullScreen,
                        i = this.videoPlayer.requestFullscreen || this.videoPlayer.msRequestFullscreen || this.videoPlayer.mozRequestFullScreen || this.videoPlayer.webkitRequestFullscreen || this.videoPlayer.webkitEnterFullScreen;
                    e && t(), i.call(this.videoPlayer)
                }
            }, e.prototype.initializeClosedCaptions = function() {
                this.ccOverlay = o.selectFirstElement(".f-video-cc-overlay", this.videoComponent), this.ccOverlay && (this.closedCaptions = new n.VideoClosedCaptions(this.ccOverlay), this.initializeClosedCaptionsMenu())
            }, e.prototype.initializeClosedCaptionsMenu = function(t) {
                if (this.ccOverlay && this.closedCaptions) {
                    var i;
                    if (!t) {
                        t = [];
                        var n = o.selectElementsT("ul[data-video-sub-options=f-video-captions] li a[data-video-selectable]", this.videoComponent);
                        if (n) {
                            n = n.slice(1);
                            for (var r = 0, a = n; r < a.length; r++) {
                                var l = a[r],
                                    h = this.removeIdPrefix(l.parentElement.id),
                                    c = "true" === l.parentElement.getAttribute("aria-selected");
                                c && (i = h), t.push({
                                    id: h,
                                    value: o.getText(l),
                                    selected: c,
                                    href: l.href
                                })
                            }
                        }
                    }
                    if (!t || !t.length) return void(this.ccOptions = null);
                    var u = s.getCookie(e.cookieCcPreference);
                    u && (i = u);
                    for (var d = 0, p = t; d < p.length; d++) {
                        var l = p[d];
                        i && (l.selected = i === l.id), l.id = this.addIdPrefix(l.id)
                    }
                    this.ccOptions = t, this.videoControls.setOptions({
                        category: "f-video-captions",
                        options: t
                    })
                }
            }, e.prototype.onOptionChanged = function(e) {
                switch (e.category) {
                    case "f-video-captions":
                        this.setCC(e.id);
                        break;
                    case "f-video-quality":
                        this.setQuality(e.id);
                        break;
                    case "f-video-share":
                        this.shareVideo(e.id)
                }
            }, e.prototype.setCC = function(t) {
                if (this.closedCaptions) {
                    var i = null;
                    if (t && this.ccOptions)
                        for (var n = 0, o = this.ccOptions; n < o.length; n++) {
                            var r = o[n];
                            if (r.id === t) {
                                i = r;
                                break
                            }
                        }
                    t = this.removeIdPrefix(t), this.closedCaptions.setCcLanguage(t, i ? i.href : null), s.setCookie(e.cookieCcPreference, t, "/", 365)
                }
            }, e.prototype.setQuality = function(e) {}, e.prototype.shareVideo = function(e) {}, e.prototype.addIdPrefix = function(e) {
                var t = this.videoComponent && this.videoComponent.id ? this.videoComponent.id + "-" : null;
                return t && !r.startsWith(e, t, !1) ? t + e : e
            }, e.prototype.removeIdPrefix = function(e) {
                var t = this.videoComponent && this.videoComponent.id ? this.videoComponent.id + "-" : null;
                return t && r.startsWith(e, t, !1) ? e.substring(t.length) : e
            }, e.prototype.showTrigger = function() {
                this.triggerContainer && this.triggerContainer.setAttribute(e.ariaHidden, "false")
            }, e.prototype.hideTrigger = function() {
                this.triggerContainer && this.triggerContainer.setAttribute(e.ariaHidden, "true")
            }, e.prototype.displayErrorMessage = function(t) {
                if (t && (t.title || t.message)) {
                    if (this.errorMessageDisplayed = !0, this.errorMessage) o.setText(this.errorMessage.title, t.title || ""), o.setText(this.errorMessage.message, t.message || ""), this.errorMessage.container.setAttribute(e.ariaHidden, "false");
                    else {
                        this.errorMessage = {}, this.errorMessage.container = document.createElement("div");
                        var i = document.createElement("div");
                        this.errorMessage.title = document.createElement("p"), this.errorMessage.message = document.createElement("p"), this.errorMessage.container.setAttribute("role", "status"), this.errorMessage.title.setAttribute("class", "c-heading"), this.errorMessage.message.setAttribute("class", "c-paragraph"), t.title && o.setText(this.errorMessage.title, t.title), t.message && o.setText(this.errorMessage.message, t.message), this.errorMessage.container.appendChild(i), i.appendChild(this.errorMessage.title), i.appendChild(this.errorMessage.message), this.videoComponent.appendChild(this.errorMessage.container)
                    }
                    this.hideControlPanel(), this.hideTrigger()
                }
            }, e.prototype.hideErrorMessage = function() {
                this.errorMessage && this.errorMessage.container && (this.errorMessage.container.setAttribute(e.ariaHidden, "true"), this.errorMessageDisplayed = !1)
            }, e.selector = ".c-video", e.showControlsClass = "f-slidein", e.hideControlsClass = "f-slideout", e.fitControlsClass = "f-overlay-slidein", e.ariaHidden = "aria-hidden", e.cookieVolume = "vidvol", e.cookieCcPreference = "vidccpref", e.positionUpdateThreshold = .1, e.controlPanelTimeout = 3500, e
        }();
        t.Video = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(10), i(60), i(8), i(3)], s = function(e, t, i, n, s, o) {
        "use strict";
        var r = function() {
            function e(t, s) {
                var r = this;
                if (this.videoControls = t, this.onPlayPauseEvents = function(t) {
                        "click" === t.type ? r.videoPlayer && (r.videoPlayer.isPaused() ? r.play() : r.pause()) : "mouseover" === t.type ? r.playTooltip && o.removeClass(r.playTooltip, e.screenReaderOnlyClass) : "mouseout" === t.type && r.playTooltip && o.addClass(r.playTooltip, e.screenReaderOnlyClass)
                    }, this.onVolumeEvents = function(e) {
                        "click" === e.type ? o.getEventTargetOrSrcElement(e) === r.volumeButton && r.setMuted(!r.videoPlayer.isMuted()) : "mouseover" === e.type || "focus" === e.type ? r.showVolumeContainer() : "mouseout" !== e.type && "blur" !== e.type || r.hideVolumeContainer()
                    }, this.onVolumeSliderEvents = function(e) {
                        "focus" === e.type ? r.showVolumeContainer() : "blur" === e.type && r.hideVolumeContainer()
                    }, this.onFullScreenEvents = function(t) {
                        "click" === t.type ? r.videoPlayer && r.videoPlayer.setFullscreen() : "mouseover" === t.type ? r.fullScreenTooltip && r.fullScreenTooltip.setAttribute(e.ariaHidden, "false") : "mouseout" === t.type && r.fullScreenTooltip && r.fullScreenTooltip.setAttribute(e.ariaHidden, "true")
                    }, this.toggleOptionsDialog = function() {
                        r.optionsContainer && ("false" === r.optionsContainer.getAttribute(e.ariaHidden) ? ("click" === event.type && r.hideOptionsContainer(), "mouseout" === event.type && window.setTimeout(function(e) {
                            e.hideOptionsContainer()
                        }, r.cleanupInterval, r)) : "true" === r.optionsContainer.getAttribute(e.ariaHidden) && ("click" !== event.type && "mouseover" !== event.type || r.showOptionsContainer()))
                    }, this.hideOptionsContainer = function() {
                        r.optionsContainer && r.optionsContainer.setAttribute(e.ariaHidden, "true")
                    }, this.onOptionsDialogClick = function(e) {
                        e = o.getEvent(e);
                        var t = o.getEventTargetOrSrcElement(e),
                            i = t.getAttribute("data-video-options");
                        if ("back" === i) return r.showOptionsContainer(), void o.preventDefault(e);
                        if (i) {
                            if (r.optionsContainer && r.odParent) {
                                var n = o.selectFirstElement("ul[data-video-sub-options=" + i + "]", r.optionsContainer);
                                o.css(n, "display", "block");
                                var s = r.calcHeight(n);
                                o.css(r.optionsContainer, "height", s + "px"), o.css(r.odParent, "left", "-160px"), r.odSubActive = n
                            }
                            return void o.preventDefault(e)
                        }
                        if (r.odSubActive) {
                            o.preventDefault(e);
                            var a = t.getAttribute("data-video-selectable");
                            if (!a && t.firstElementChild && (t = t.firstElementChild, a = t.getAttribute("data-video-selectable")), a) {
                                for (var l = 0, h = o.selectElements("a", r.odSubActive); l < h.length; l++) {
                                    var c = h[l];
                                    o.removeClass(c, "glyph-check-mark")
                                }
                                o.addClass(t, "glyph-check-mark"), r.videoPlayer && r.videoPlayer.onOptionChanged({
                                    category: r.odSubActive.getAttribute("data-video-sub-options"),
                                    id: t.parentElement.id,
                                    href: t.getAttribute("href")
                                })
                            }
                        }
                        r.hideOptionsContainer()
                    }, t && s) {
                    this.videoPlayer = s, this.playButton = o.selectFirstElementT(".f-play-pause", this.videoControls), this.playTooltip = o.selectFirstElement("span", this.playButton), this.fullScreenButton = o.selectFirstElementT(".f-full-screen", this.videoControls), this.fullScreenTooltip = o.selectFirstElement("span", this.fullScreenButton), this.volumeButton = o.selectFirstElementT(".f-volume-button", this.videoControls), this.volumeContainer = o.selectFirstElement(".f-volume-slider", this.videoControls), this.optionsButton = o.selectFirstElementT(".f-options", this.videoControls), this.optionsContainer = o.selectFirstElement(".f-options-dialog", this.videoControls), this.timeCurrent = o.selectFirstElement(".f-current-time", this.videoControls), this.timeDuration = o.selectFirstElement(".f-duration", this.videoControls), this.cleanupInterval = 2e3;
                    var a = o.selectFirstElement(".c-slider.f-progress", this.videoControls),
                        l = o.selectFirstElement(".c-slider", this.volumeContainer);
                    if (!(this.playButton && this.playTooltip && this.fullScreenButton && this.fullScreenTooltip && a && this.volumeButton && this.volumeContainer && l && this.timeCurrent && this.timeDuration && this.optionsButton && this.optionsContainer)) return null;
                    this.playButton.removeAttribute("aria-label"), this.playTooltip.removeAttribute("aria-hidden"), o.addClass(this.playTooltip, e.screenReaderOnlyClass), this.initializeLocalization(), this.updatePlayPauseState(), this.optionsDialogInit(), o.addEvents(window, "resize scroll", this.hideOptionsContainer), o.addEvents(this.playButton, "click mouseover mouseout", this.onPlayPauseEvents), o.addEvents(this.fullScreenButton, "click mouseover mouseout", this.onFullScreenEvents), o.addEvents([this.volumeButton, this.volumeContainer], "click mouseover mouseout focus blur", this.onVolumeEvents), o.addEvents(this.optionsButton, "click mouseover mouseout", this.toggleOptionsDialog), i.ComponentFactory.create([{
                        component: n.Slider,
                        eventToBind: "DOMContentLoaded",
                        elements: [a, l],
                        callback: function(e) {
                            e && e.length && 2 === e.length && (r.progressSlider = e[0], r.volumeSlider = e[1], r.progressSlider.subscribe({
                                onValueChanged: function(e) {
                                    return r.onProgressChanged(e)
                                }
                            }), r.volumeSlider.subscribe({
                                onValueChanged: function(e) {
                                    return r.onVolumeChanged(e)
                                }
                            }), o.addEvents(o.selectFirstElement("button", r.volumeSlider.element), "focus blur", r.onVolumeSliderEvents))
                        }
                    }])
                }
            }
            return e.prototype.initializeLocalization = function() {
                this.playButton && (this.locPlay = this.playButton.getAttribute("data-locPlay") || "Play", this.locPause = this.playButton.getAttribute("data-locPause") || "Pause")
            }, e.prototype.setDuration = function(e) {
                s.isNumber(e) && (this.progressSlider && this.progressSlider.resetSlider(0, e), this.timeDuration && o.setText(this.timeDuration, s.toElapsedTimeString(e, !1)))
            }, e.prototype.setPlayPosition = function(e) {
                s.isNumber(e) && this.progressSlider && this.progressSlider.setValue(e)
            }, e.prototype.setVolume = function(e) {
                s.isNumber(e) && this.videoPlayer && (this.videoPlayer.setVolume(e), this.volumeSlider && (this.volumeSlider.setValue(Math.round(100 * e)), this.updateMuteGlyph()))
            }, e.prototype.setMuted = function(e) {
                this.videoPlayer && (this.videoPlayer.setMuted(e), this.updateMuteGlyph())
            }, e.prototype.updateMuteGlyph = function() {
                if (this.videoPlayer && this.volumeButton) {
                    o.removeClasses(this.volumeButton, ["glyph-volume", "glyph-mute"]);
                    var e = this.videoPlayer.isMuted() || 0 === this.videoPlayer.getVolume();
                    o.addClass(this.volumeButton, e ? "glyph-mute" : "glyph-volume")
                }
            }, e.prototype.prepareToHide = function() {
                this.hideOptionsContainer(), this.hideVolumeContainer()
            }, e.prototype.onProgressChanged = function(e) {
                if (!e) return null;
                this.videoPlayer && e.userInitiated && this.videoPlayer.setPlayPosition(e.value);
                var t = s.toElapsedTimeString(e.value, !0);
                return this.timeCurrent && o.setText(this.timeCurrent, s.toElapsedTimeString(e.value, !1)), t
            }, e.prototype.onVolumeChanged = function(e) {
                if (!e) return null;
                this.videoPlayer && e.value > 0 && this.videoPlayer.setMuted(!1);
                var t = Math.round(e.value);
                return this.setVolume(t / 100), t.toString()
            }, e.prototype.play = function() {
                this.videoPlayer && this.videoPlayer.play()
            }, e.prototype.pause = function() {
                this.videoPlayer && this.videoPlayer.pause()
            }, e.prototype.updatePlayPauseState = function() {
                this.videoPlayer && this.playButton && (this.videoPlayer.isPlayable() ? (this.playButton.removeAttribute("disabled"), this.videoPlayer.isPaused() ? (this.playTooltip && o.setText(this.playTooltip, this.locPlay), o.removeClass(this.playButton, "glyph-pause"), o.addClass(this.playButton, "glyph-play")) : (this.playTooltip && o.setText(this.playTooltip, this.locPause), o.removeClass(this.playButton, "glyph-play"), o.addClass(this.playButton, "glyph-pause"), this.prepareToHide())) : (this.playTooltip && o.setText(this.playTooltip, this.locPlay), o.removeClass(this.playButton, "glyph-pause"), o.addClass(this.playButton, "glyph-play"), this.playButton.setAttribute("disabled", "disabled")))
            }, e.prototype.showVolumeContainer = function() {
                this.volumeContainer && (this.volumeContainer.setAttribute(e.ariaHidden, "false"), this.onlyOneDialog(this.volumeContainer))
            }, e.prototype.hideVolumeContainer = function() {
                this.volumeContainer && this.volumeContainer.setAttribute(e.ariaHidden, "true")
            }, e.prototype.optionsDialogInit = function() {
                this.optionsContainer && (this.odParent = o.selectFirstElement("ul", this.optionsContainer), this.odDimensions = o.getClientRect(this.odParent), o.addEvent(this.odParent, o.eventTypes.click, this.onOptionsDialogClick))
            }, e.prototype.showOptionsContainer = function() {
                this.optionsContainer && this.odParent && (this.optionsContainer.setAttribute(e.ariaHidden, "false"), o.css(this.optionsContainer, "height", this.odDimensions.height + "px"), o.css(this.optionsContainer, "overflowY", "hidden"), o.css(this.odParent, "left", "0"), this.odClearSubActive(), this.onlyOneDialog(this.optionsContainer))
            }, e.prototype.onlyOneDialog = function(t) {
                this.optionsContainer && this.volumeContainer && "false" === this.optionsContainer.getAttribute(e.ariaHidden) && "false" === this.volumeContainer.getAttribute(e.ariaHidden) && (t === this.optionsContainer ? this.hideVolumeContainer() : this.hideOptionsContainer())
            }, e.prototype.calcHeight = function(e) {
                if (!e || !this.videoControls) return 0;
                var t = o.getClientRect(e).height,
                    i = o.getClientRect(this.videoControls.parentElement),
                    n = o.getClientRect(this.videoControls),
                    s = i.height - n.height;
                return t > s ? (o.css(this.optionsContainer, "overflowY", "scroll"), t = s) : o.css(this.optionsContainer, "overflowY", "hidden"), t
            }, e.prototype.odClearSubActive = function() {
                this.odSubActive && (o.css(this.odSubActive, "display", "none"), this.odSubActive = null)
            }, e.prototype.setOptions = function(e) {
                if (e && e.options && e.options.length && e.category && this.odParent)
                    if ("info" !== e.category) {
                        var t = "f-video-share" === e.category ? 1 : 2,
                            i = o.selectFirstElement("ul[data-video-sub-options='" + e.category + "']", this.odParent);
                        if (i) {
                            var n = o.selectElements("li", i);
                            if (n && n.length > t) {
                                for (; n.length > t;) o.removeElement(n.pop());
                                var s = n.pop();
                                1 === t && (s = s.cloneNode(!0), o.removeClasses(s.firstElementChild, ["glyph-chevron-left", "c-glyph"]), s.firstElementChild.removeAttribute("data-video-options")), o.removeClass(s.firstElementChild, "glyph-check-mark");
                                for (var r = null, a = 0, l = e.options; a < l.length; a++) {
                                    var h = l[a],
                                        c = i.appendChild(s.cloneNode(!0));
                                    if (c.id = h.id, o.setText(c.firstElementChild, h.value), h.selected && (r = c.firstElementChild), h.href && (c.firstElementChild.setAttribute("href", h.href), o.addClass(c.firstElementChild, h.glyph)), h.glyph && (o.addClass(c.firstElementChild, "c-glyph"), o.addClass(c.firstElementChild, h.glyph)), h.image) {
                                        var u = c.firstElementChild.appendChild(document.createElement("img"));
                                        o.addClass(u, "c-image"), u.setAttribute("src", h.image)
                                    }
                                }
                                "f-video-share" !== e.category && (r || (r = s.firstElementChild), o.addClass(r, "glyph-check-mark"), this.videoPlayer && this.videoPlayer.onOptionChanged({
                                    category: e.category,
                                    id: r.parentElement.id,
                                    href: r.getAttribute("href")
                                }))
                            }
                        }
                    } else {
                        var h = e.options[0];
                        if (h && h.href) {
                            var d = o.selectFirstElementT("a", this.odParent);
                            d && d.setAttribute("href", h.href)
                        }
                    }
            }, e.selector = ".f-video-controls", e.ariaHidden = "aria-hidden", e.ariaLabel = "aria-label", e.screenReaderOnlyClass = "x-screen-reader", e
        }();
        t.VideoControls = r
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(68), i(3), i(8)], s = function(e, t, i, n, s) {
        "use strict";
        var o = function() {
            function e(e) {
                this.element = e, this.lastPlayPosition = 0, this.ccLanguageId = null, this.resetCaptions()
            }
            return e.prototype.setCcLanguage = function(e, t) {
                if (this.element && e !== this.ccLanguageId) {
                    if (this.ttmlContext = null, this.resetCaptions(), !t) return void(this.ccLanguageId = null);
                    this.ccLanguageId = e, this.loadClosedCaptions(t)
                }
            }, e.prototype.loadClosedCaptions = function(e) {
                var t = this;
                if (e) {
                    var i = new XMLHttpRequest;
                    i.onreadystatechange = function() {
                        4 === i.readyState && 200 === i.status && t.onClosedCaptionsLoaded(i.responseXML || i.responseText)
                    }, i.open("GET", e, !0), i.setRequestHeader("Accept", "text/xml, application/xml"), i.send()
                }
            }, e.prototype.onClosedCaptionsLoaded = function(t) {
                if (t) {
                    this.element.setAttribute(e.ariaHidden, "false");
                    var n = this.element.id ? this.element.id + "-" : "",
                        o = {
                            idPrefix: n,
                            fontMap: {
                                default: "Segoe ui, Arial"
                            },
                            relatedMediaObjectRegion: s.getDimensions(this.element)
                        };
                    this.ttmlContext = i.TtmlParser.parse(t, o), this.ttmlContext && (this.ttmlContext.setOwnerDocument(this.element.ownerDocument), this.ttmlContext.hasEvents() ? this.updateCaptions(this.lastPlayPosition) : this.element.setAttribute(e.ariaHidden, "true"))
                }
            }, e.prototype.updateCaptions = function(t) {
                if (this.lastPlayPosition = t, this.ttmlContext && this.ttmlContext.hasEvents()) {
                    var i = Math.floor(1e3 * t);
                    this.element.setAttribute(e.ariaHidden, "false");
                    var o = s.getDimensions(this.element);
                    if (this.ttmlContext.updateRelatedMediaObjectRegion(o) && this.resetCaptions(), this.ttmlContext.updateCurrentEvents(i)) {
                        this.element.setAttribute(e.ariaHidden, "true"), n.removeInnerHtml(this.element);
                        for (var r = 0, a = this.ttmlContext.getCues(i); r < a.length; r++) {
                            var l = a[r];
                            this.applyUserPreferencesOverrides(l), this.element.appendChild(l)
                        }
                        this.element.setAttribute(e.ariaHidden, "false")
                    }
                }
            }, e.prototype.resetCaptions = function() {
                this.ttmlContext && this.ttmlContext.resetCurrentEvents(), this.element && (this.element.setAttribute(e.ariaHidden, "true"), n.removeInnerHtml(this.element))
            }, e.prototype.applyUserPreferencesOverrides = function(t) {
                if (e.userPreferences) {
                    if (e.userPreferences.text)
                        for (var i = 0, s = n.selectElements("p, span, br", t); i < s.length; i++) {
                            var o = s[i];
                            for (var r in e.userPreferences.text) e.userPreferences.text.hasOwnProperty(r) && n.css(o, r, e.userPreferences.text[r])
                        }
                    if (e.userPreferences.window)
                        for (var a = 0, l = n.toArray(t.children); a < l.length; a++) {
                            var o = l[a];
                            for (var r in e.userPreferences.window) e.userPreferences.window.hasOwnProperty(r) && n.css(o, r, e.userPreferences.window[r])
                        }
                }
            }, e.ariaHidden = "aria-hidden", e
        }();
        t.VideoClosedCaptions = o
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(69), i(71), i(70), i(3), i(4)], s = function(e, t, i, n, s, o, r) {
        "use strict";
        var a = function() {
            function e() {}
            return e.parse = function(t, o) {
                t = "string" == typeof t ? e.parseXml(t) : t;
                var r = new i.TtmlContext;
                if (r.settings = new s.TtmlSettings(o), r.root = e.verifyRoot(t, r), r.body = e.getFirstElementByTagNameNS(r.root, "body", r.settings.ttmlNamespace), r.events = [], r.styleSetCache = [], r.body) {
                    try {
                        e.parseTtAttrs(r);
                        var a = e.ensureRegions(r),
                            l = e.getAttributeNS(r.root, "timeBase", r.settings.ttmlParameterNamespace) || "media";
                        if (r.settings.supportedTimeBase.indexOf(l) !== -1) {
                            e.processAnonymousSpans(r, r.body);
                            var h = new n.TtmlTimeParser(r.settings.mediaFrameRate, r.settings.mediaTickRate);
                            e.applyTiming(r, r.root, {
                                start: e.mediaStart,
                                end: e.mediaEnd
                            }, !0, h), e.applyStyling(r, a)
                        }
                    } catch (e) {}
                    r.events.push({
                        time: e.mediaEnd,
                        element: null
                    }), r.events.sort(function(e, t) {
                        return e.time - t.time
                    })
                }
                return r
            }, e.parseXml = function(e) {
                var t = null;
                try {
                    if (window.DOMParser) {
                        var i = new DOMParser;
                        t = i.parseFromString(e, "application/xml")
                    } else {
                        var i = new ActiveXObject("Microsoft.XMLDOM");
                        i.async = !1, i.loadXML(e), t = i
                    }
                } catch (e) {
                    t = null
                }
                return t
            }, e.verifyRoot = function(t, i) {
                var n, s = t.documentElement;
                return "tt" === e.getLocalTagName(s) && ("http://www.w3.org/ns/ttml" !== s.namespaceURI && (i.settings.ttmlNamespace = s.namespaceURI, i.settings.ttmlStyleNamespace = i.settings.ttmlNamespace + "#styling", i.settings.ttmlParameterNamespace = i.settings.ttmlNamespace + "#parameter", i.settings.ttmlMetaNamespace = i.settings.ttmlNamespace + "#metadata"), n = s), n
            }, e.parseTtAttrs = function(t) {
                var i = e.getAttributeNS(t.root, "cellResolution", t.settings.ttmlParameterNamespace),
                    n = e.getAttributeNS(t.root, "extent", t.settings.ttmlStyleNamespace),
                    s = null;
                if (i) {
                    var o = r.trim(i).split(/\s+/);
                    if (2 === o.length) {
                        var a = Math.round(parseFloat(o[0])),
                            l = Math.round(parseFloat(o[1]));
                        l > 0 && a > 0 && (s = {
                            rows: l,
                            columns: a
                        })
                    }
                }
                if (s && (t.settings.cellResolution = s), n && "auto" !== n) {
                    var h = n.split(/\s+/);
                    if (2 === h.length && "px" === h[0].substr(h[0].length - 2) && "px" === h[1].substr(h[1].length - 2)) {
                        var c = parseFloat(h[0].substr(0, h[0].length - 2)),
                            u = parseFloat(h[1].substr(0, h[1].length - 2));
                        t.settings.rootContainerRegionDimensions = {
                            width: Math.round(c),
                            height: Math.round(u)
                        }
                    }
                }
            }, e.ensureRegions = function(t) {
                t.rootContainerRegion = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "rootcontainerregion"), t.root.appendChild(t.rootContainerRegion);
                var i = t.settings.rootContainerRegionDimensions ? r.format("{0}px {1}px", t.settings.rootContainerRegionDimensions.width, t.settings.rootContainerRegionDimensions.height) : "auto";
                t.rootContainerRegion.setAttributeNS(t.settings.ttmlStyleNamespace, "extent", i);
                var n = e.getFirstElementByTagNameNS(t.root, "head", t.settings.ttmlNamespace);
                n || (n = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "head"), t.root.appendChild(n)), t.layout = e.getFirstElementByTagNameNS(n, "layout", t.settings.ttmlNamespace), t.layout || (t.layout = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "layout"), t.root.appendChild(t.layout));
                var o = t.layout.getElementsByTagNameNS(t.settings.ttmlNamespace, "region");
                if (!o.length) {
                    var a = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "region");
                    a.setAttributeNS(s.xmlNS, "id", "anonymous"), a.setAttribute("data-isanonymous", "1"), t.layout.appendChild(a), t.body.setAttributeNS(t.settings.ttmlNamespace, "region", "anonymous")
                }
                return n
            }, e.processAnonymousSpans = function(t, i) {
                if (e.isTagNS(i, "p", t.settings.ttmlNamespace)) {
                    for (var n = [], s = void 0, r = 0, a = o.nodeListToArray(i.childNodes); r < a.length; r++) {
                        var l = a[r];
                        l.nodeType === Node.TEXT_NODE && (s !== Node.TEXT_NODE && n.push([]), n[n.length - 1].push(l)), s = l.nodeType
                    }
                    for (var h = 0, c = n; h < c.length; h++) {
                        var u = c[h],
                            d = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "span");
                        d.appendChild(u[0].parentNode.replaceChild(d, u[0]));
                        for (var p = 1; p < u.length; p++) d.appendChild(u[p])
                    }
                }
                for (var m = 0, v = o.nodeListToArray(i.childNodes); m < v.length; m++) {
                    var l = v[m];
                    this.processAnonymousSpans(t, l)
                }
            }, e.applyTiming = function(t, i, n, s, r) {
                var a = e.getAttributeNS(i, "begin", t.settings.ttmlNamespace),
                    l = a ? r.parse(a) : n.start,
                    h = 0,
                    c = 0,
                    u = 0,
                    d = 0,
                    p = e.getAttributeNS(i, "dur", t.settings.ttmlNamespace),
                    m = e.getAttributeNS(i, "end", t.settings.ttmlNamespace);
                if (p || m)
                    if (p && m) {
                        u = r.parse(p), d = r.parse(m);
                        var v = Math.min(l + u, n.start + d);
                        h = Math.min(v, n.end)
                    } else m ? (d = r.parse(m), h = Math.min(n.start + d, n.end)) : (u = r.parse(p), h = Math.min(l + u, n.end));
                else s && (l <= n.end ? (c = Math.max(0, n.end - l), h = n.end) : h = 0);
                h < l && (h = l), l = Math.floor(l), h = Math.floor(h), i.setAttribute("data-time-start", l.toString()), i.setAttribute("data-time-end", h.toString()), l >= 0 && t.events.filter(function(e) {
                    return e.time === l
                }).length <= 0 && t.events.push({
                    time: l,
                    element: i
                });
                for (var f = l, g = 0, y = o.nodeListToArray(i.childNodes); g < y.length; g++) {
                    var b = y[g];
                    b.nodeType === Node.ELEMENT_NODE && ("seq" !== e.getAttributeNS(i, "timeContainer", t.settings.ttmlNamespace) ? this.applyTiming(t, b, {
                        start: l,
                        end: h
                    }, !0, r) : (this.applyTiming(t, b, {
                        start: f,
                        end: h
                    }, !1, r), f = parseInt(b.getAttribute("data-time-end"), 10)))
                }
            }, e.applyStyling = function(t, i) {
                for (var n = e.getFirstElementByTagNameNS(i, "styling", t.settings.ttmlNamespace), s = n ? o.nodeListToArray(n.getElementsByTagNameNS(t.settings.ttmlNamespace, "style")) : [], r = 0, a = o.nodeListToArray(t.root.querySelectorAll("*")); r < a.length; r++) {
                    var l = a[r];
                    this.applyStyle(t, l, s)
                }
            }, e.applyStyle = function(t, i, n) {
                var s = {};
                this.applyStylesheet(t.settings, s, i, n), e.applyInlineStyles(t.settings, s, i);
                var o = !0;
                for (var r in s)
                    if (s.hasOwnProperty(r)) {
                        o = !1;
                        break
                    }
                o || (i.setAttribute("data-styleSet", t.styleSetCache.length.toString()), t.styleSetCache.push(s))
            }, e.applyStylesheet = function(t, i, n, r) {
                for (var a = e.getAttributeNS(n, "style", t.ttmlNamespace), l = a ? a.split(/\s+/) : [], h = 0, c = l; h < c.length; h++)
                    for (var u = c[h], d = 0, p = r; d < p.length; d++) {
                        var m = p[d];
                        e.getAttributeNS(m, "id", s.xmlNS) === u && (this.applyStylesheet(t, i, m, r), e.applyInlineStyles(t, i, m))
                    }
                if (e.isTagNS(n, "region", t.ttmlNamespace))
                    for (var v = 0, f = o.nodeListToArray(n.getElementsByTagNameNS(t.ttmlNamespace, "style")); v < f.length; v++) {
                        var m = f[v];
                        e.applyInlineStyles(t, i, m)
                    }
            }, e.applyInlineStyles = function(t, i, n) {
                for (var s = 0, a = o.nodeListToArray(n.attributes); s < a.length; s++) {
                    var l = a[s];
                    l.namespaceURI === t.ttmlStyleNamespace && (i[e.getLocalTagName(l)] = r.trim(l.nodeValue))
                }
            }, e.getLocalTagName = function(e) {
                return e.localName || e.baseName
            }, e.isTagNS = function(e, t, i) {
                return e.namespaceURI === i && this.getLocalTagName(e) === t
            }, e.getAttributeNS = function(e, t, i) {
                var n = e.getAttributeNS(i, t);
                if (!n)
                    for (var s = 0, r = o.nodeListToArray(e.attributes); s < r.length; s++) {
                        var a = r[s];
                        if (a.localName === t && a.lookupNamespaceURI(a.prefix) === i) {
                            n = a.value;
                            break
                        }
                    }
                return n
            }, e.getFirstElementByTagNameNS = function(e, t, i) {
                if (e) {
                    var n = e.getElementsByTagNameNS(i, t);
                    if (n && n.length) return n[0]
                }
                return null
            }, e.mediaStart = -1, e.mediaEnd = 99999999, e
        }();
        t.TtmlParser = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(68), i(70), i(3), i(4), i(8)], s = function(e, t, i, n, s, o, r) {
        "use strict";
        var a = function() {
            function e() {
                var t = this;
                this.translateToHtml = function(r, a, l) {
                    var h, c, u = t.getTagNameEquivalent(r),
                        d = "",
                        p = "";
                    switch (u) {
                        case "ttml:region":
                            p = "cue ";
                        case "ttml:rootcontainerregion":
                        case "ttml:body":
                        case "ttml:div":
                            d = "div";
                            break;
                        case "ttml:p":
                            d = "p";
                            break;
                        case "ttml:span":
                            d = "span";
                            break;
                        case "ttml:br":
                            d = "br"
                    }
                    var m = i.TtmlParser.getAttributeNS(r, "role", t.settings.ttmlMetaNamespace);
                    m && (p += " " + m);
                    var v = i.TtmlParser.getAttributeNS(r, "agent", t.settings.ttmlMetaNamespace);
                    if (v && (p += " " + v), "x-ruby" === m ? d = "ruby" : "x-rubybase" === m ? d = "rb" : "x-rubytext" === m && (d = "rt"), !o.isNullOrWhiteSpace(d)) {
                        h = e.defaultStyle(t.ownerDocument.createElement(d)), s.addClass(h, o.trim(p));
                        var f = i.TtmlParser.getAttributeNS(r, "title", t.settings.ttmlMetaNamespace);
                        f && h.setAttribute("title", f);
                        var g = i.TtmlParser.getAttributeNS(r, "id", n.xmlNS);
                        g && t.settings.idPrefix && h.setAttribute("id", t.settings.idPrefix + g), "ttml:region" === u && (c = h.appendChild(e.defaultStyle(t.ownerDocument.createElement("div"))), s.css(c, "display", "table"), s.css(c, "border-spacing", "0"), s.css(c, "cell-spacing", "0"), s.css(c, "cell-padding", "0"), s.css(c, "width", "100%"), s.css(c, "height", "100%"), c = c.appendChild(e.defaultStyle(t.ownerDocument.createElement("div"))), s.css(c, "display", "table-cell"), a.displayAlign && (t.translateStyle(u, c, {
                            displayAlign: a.displayAlign
                        }), a.displayAlign = null)), l && "ttml:span" === u && (c = h.appendChild(e.defaultStyle(t.ownerDocument.createElement("span"))), s.css(c, "white-space", "pre")), s.css(h, "position", "static"), s.css(h, "width", "100%"), t.translateStyle(u, h, a)
                    }
                    return {
                        outerNode: h,
                        innerNode: c ? c : h
                    }
                }
            }
            return e.prototype.setOwnerDocument = function(e) {
                this.ownerDocument = e
            }, e.prototype.updateRelatedMediaObjectRegion = function(e) {
                return (!this.settings.relatedMediaObjectRegion || e.width !== this.settings.relatedMediaObjectRegion.width || e.height !== this.settings.relatedMediaObjectRegion.height) && (this.settings.relatedMediaObjectRegion = {
                    width: e.width,
                    height: e.height
                }, !0)
            }, e.prototype.hasEvents = function() {
                return this.events && !!this.events.length
            }, e.prototype.resetCurrentEvents = function() {
                this.currentEvents = []
            }, e.prototype.updateCurrentEvents = function(e) {
                var t = this.getTemporallyActiveEvents(e),
                    i = this.currentEvents ? this.currentEvents.length : 0,
                    n = t ? t.length : 0;
                if (i !== n) return this.currentEventsTime = e, this.currentEvents = t, !0;
                if (this.currentEvents)
                    for (var s = 0; s < i; s++)
                        if (this.currentEvents[s].time !== t[s].time) return this.currentEventsTime = e, this.currentEvents = t, !0;
                return !1
            }, e.prototype.getTemporallyActiveEvents = function(e) {
                var t = this;
                return this.events.filter(function(i) {
                    return !i.element || t.isTemporallyActive(i.element, e);
                })
            }, e.prototype.isTemporallyActive = function(e, t) {
                return (parseInt(e.getAttribute("data-time-start"), 10) || 0) <= t && t < (parseInt(e.getAttribute("data-time-end"), 10) || 0)
            }, e.prototype.getCues = function(e) {
                var t = [];
                this.currentEventsTime !== e && this.updateCurrentEvents(e);
                for (var r = "preserve" === i.TtmlParser.getAttributeNS(this.root, "space", n.xmlNS), a = this.layout ? this.layout.getElementsByTagNameNS(this.settings.ttmlNamespace, "region") : [], l = 0, h = a; l < h.length; l++) {
                    var c = h[l],
                        u = i.TtmlParser.getAttributeNS(c, "id", n.xmlNS),
                        d = c.getAttribute("data-isanonymous");
                    if (d || u) {
                        var p = this.translate(c, this.settings.defaultRegionStyle, r, e, this.translateToHtml);
                        if (p.outerNode) {
                            for (var m = p.innerNode, v = p.outerNode, f = 0, g = this.events; f < g.length; f++) {
                                var y = g[f];
                                if (y.element && this.isInRegion(y.element, d ? null : u)) {
                                    var b = this.prune(y.element, p.inheritableStyleSet, r, e, this.translateToHtml),
                                        C = b.prunedElement;
                                    b.hasPreservedContent || !C || o.trim(s.getText(C)).length || (C = null), C && m.appendChild(C)
                                }
                            }
                            var w = "always" === v.getAttribute("data-showBackground");
                            (w || m.children.length) && (w && v.removeAttribute("data-showBackground"), t.push(v))
                        }
                    }
                }
                if (t.length) {
                    for (var E = this.translate(this.rootContainerRegion, {
                            overflow: "hidden",
                            padding: "0"
                        }, !1, e, this.translateToHtml), T = 0, S = t; T < S.length; T++) {
                        var A = S[T];
                        E.innerNode.appendChild(A)
                    }
                    t = [], t.push(E.outerNode)
                }
                return t
            }, e.prototype.translate = function(e, t, i, n, s) {
                var o, r;
                if (this.isTemporallyActive(e, n)) {
                    var a = this.getTagNameEquivalent(e);
                    if (r = this.getComputedStyleSet(e, t, a, n), "none" !== r.display) {
                        var l = this.getApplicableStyleSet(r, a);
                        o = s(e, l, i)
                    }
                }
                return o ? {
                    outerNode: o.outerNode,
                    innerNode: o.innerNode,
                    inheritableStyleSet: this.getInheritableStyleSet(r)
                } : {
                    outerNode: null,
                    innerNode: null,
                    inheritableStyleSet: null
                }
            }, e.prototype.translateStyle = function(e, t, i) {
                for (var n in i) i[n] && this.applyStyle(t, e, n, i[n])
            }, e.prototype.prune = function(e, t, o, r, a, l) {
                void 0 === l && (l = !1);
                var h, c = !1,
                    u = this.translate(e, t, o, r, a);
                if (null !== u.outerNode) {
                    var d = this.getTagNameEquivalent(e);
                    h = u.outerNode;
                    for (var p = u.innerNode, m = 0, v = s.nodeListToArray(e.childNodes); m < v.length; m++) {
                        var f = v[m];
                        if (f.nodeType === Node.COMMENT_NODE);
                        else if (f.nodeType === Node.TEXT_NODE) p.appendChild(document.createTextNode(f.data)), o && "ttml:span" === d && (c = !0);
                        else {
                            var g = o,
                                y = i.TtmlParser.getAttributeNS(f, "space", n.xmlNS);
                            y && (g = "preserve" === y);
                            var b = this.prune(f, u.inheritableStyleSet, g, r, a, !0);
                            c = c || b.hasPreservedContent, b.prunedElement && p.appendChild(b.prunedElement)
                        }
                    }
                    if (!l)
                        for (var C = e.parentNode; null !== C && C.nodeType === Node.ELEMENT_NODE && C !== this.body && (u = this.translate(C, t, o, r, a), u.outerNode);) p = u.innerNode, p.appendChild(h), h = u.outerNode, C = C.parentNode
                }
                return {
                    prunedElement: h,
                    hasPreservedContent: c
                }
            }, e.prototype.getComputedStyleSet = function(e, t, n, o) {
                var a = r.extend({}, t);
                r.extend(a, this.styleSetCache[parseInt(e.getAttribute("data-styleSet"), 10)]);
                for (var l = e.getElementsByTagNameNS(this.settings.ttmlNamespace, "set"), h = 0, c = s.nodeListToArray(l); h < c.length; h++) {
                    var u = c[h];
                    this.isTemporallyActive(u, o) && i.TtmlParser.applyInlineStyles(this.settings, a, u)
                }
                if ("ttml:p" === n && "normal" === a.lineHeight) {
                    var d = this.appendSpanFontSizes(e, this.getInheritableStyleSet(a), o, "");
                    d && (a["computed-lineHeight"] = d)
                }
                return a
            }, e.prototype.getApplicableStyleSet = function(e, t) {
                var i = {};
                e.extent && this.isStyleApplicable(t, "extent") && (i.extent = e.extent), e.color && this.isStyleApplicable(t, "color") && (i.color = e.color);
                for (var n in e) this.isStyleApplicable(t, n) && (i[n] = e[n]);
                return i
            }, e.prototype.isStyleApplicable = function(e, t) {
                switch (t) {
                    case "backgroundColor":
                    case "display":
                    case "visibility":
                        return "ttml:body ttml:div ttml:p ttml:region ttml:rootcontainerregion ttml:span ttml:br".indexOf(e) >= 0;
                    case "fontFamily":
                    case "fontSize":
                    case "fontStyle":
                    case "fontWeight":
                        return "ttml:p ttml:span ttml:br".indexOf(e) >= 0;
                    case "color":
                    case "textDecoration":
                    case "textOutline":
                    case "wrapOption":
                        return "ttml:span ttml:br".indexOf(e) >= 0;
                    case "direction":
                    case "unicodeBidi":
                        return "ttml:p ttml:span ttml:br".indexOf(e) >= 0;
                    case "displayAlign":
                    case "opacity":
                    case "origin":
                    case "overflow":
                    case "padding":
                    case "showBackground":
                    case "writingMode":
                    case "zIndex":
                        return "ttml:region ttml:rootcontainerregion".indexOf(e) >= 0;
                    case "extent":
                        return "ttml:tt ttml:region ttml:rootcontainerregion".indexOf(e) >= 0;
                    case "computed-lineHeight":
                    case "lineHeight":
                    case "textAlign":
                        return "ttml:p".indexOf(e) >= 0;
                    default:
                        return !1
                }
            }, e.prototype.getInheritableStyleSet = function(e) {
                var t = {};
                for (var i in e)
                    if (e.hasOwnProperty(i)) switch (i) {
                        case "backgroundColor":
                        case "computed-lineHeight":
                        case "display":
                        case "displayAlign":
                        case "extent":
                        case "opacity":
                        case "origin":
                        case "overflow":
                        case "padding":
                        case "showBackground":
                        case "unicodeBidi":
                        case "writingMode":
                        case "zIndex":
                            break;
                        default:
                            t[i] = e[i]
                    }
                    return t
            }, e.prototype.appendSpanFontSizes = function(e, t, i, n) {
                for (var o = 0, r = s.nodeListToArray(e.childNodes); o < r.length; o++) {
                    var a = r[o];
                    if (a.nodeType === Node.ELEMENT_NODE) {
                        var l = this.getTagNameEquivalent(a);
                        if ("ttml:span" === l) {
                            var h = this.getComputedStyleSet(a, t, "ttml:span", i),
                                c = h.fontSize;
                            c && (n += (n ? "," : "") + c), n = this.appendSpanFontSizes(a, this.getInheritableStyleSet(h), i, n)
                        }
                    }
                }
                return n
            }, e.prototype.isInRegion = function(e, t) {
                if (!t) return !0;
                var n = i.TtmlParser.getAttributeNS(e, "region", this.settings.ttmlNamespace);
                if (n === t) return !0;
                if (!n) {
                    for (var o = e.parentNode; null !== o && o.nodeType === Node.ELEMENT_NODE;) {
                        var r = this.getRegionId(o);
                        if (r) return r === t;
                        o = o.parentNode
                    }
                    for (var a = 0, l = s.nodeListToArray(e.getElementsByTagName("*")); a < l.length; a++) {
                        var h = l[a];
                        if (this.getRegionId(h) === t) return !0
                    }
                }
                return !1
            }, e.prototype.getRegionId = function(e) {
                var t;
                return e.nodeType === Node.ELEMENT_NODE && e.namespaceURI === this.settings.ttmlNamespace && (t = "region" === i.TtmlParser.getLocalTagName(e) ? i.TtmlParser.getAttributeNS(e, "id", n.xmlNS) : i.TtmlParser.getAttributeNS(e, "region", this.settings.ttmlNamespace)), t
            }, e.prototype.getTagNameEquivalent = function(e) {
                var t = i.TtmlParser.getLocalTagName(e),
                    n = e.namespaceURI;
                return n === this.settings.ttmlNamespace ? "ttml:" + t : "http://www.w3.org/1999/xhtml" === n ? t : ""
            }, e.prototype.applyStyle = function(t, i, n, a) {
                var l = a;
                switch (n) {
                    case "color":
                    case "backgroundColor":
                        return l = e.ttmlToCssColor(a), void s.css(t, n, l);
                    case "direction":
                    case "display":
                        return void s.css(t, n, l);
                    case "displayAlign":
                        switch (a) {
                            case "before":
                                l = "top";
                                break;
                            case "center":
                                l = "middle";
                                break;
                            case "after":
                                l = "bottom"
                        }
                        return void s.css(t, "vertical-align", l);
                    case "extent":
                        var h = void 0,
                            c = void 0;
                        if ("auto" !== a) {
                            var u = a.split(/\s+/);
                            2 === u.length && (h = this.ttmlToCssUnits(u[0], !0), c = this.ttmlToCssUnits(u[1], !1))
                        }
                        return h || (h = (this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions.width : this.settings.relatedMediaObjectRegion.width).toString() + "px", c = (this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions.height : this.settings.relatedMediaObjectRegion.height).toString() + "px"), s.css(t, "position", "absolute"), s.css(t, "width", h), s.css(t, "min-width", h), s.css(t, "max-width", h), s.css(t, "height", c), s.css(t, "min-height", c), void s.css(t, "max-height", c);
                    case "fontFamily":
                        return this.settings.fontMap && this.settings.fontMap[a] && (l = this.settings.fontMap[a]), "smallCaps" === a && s.css(t, "fontVariant", "small-caps"), void s.css(t, n, l);
                    case "fontSize":
                        var d = a.split(/\s+/),
                            p = d.length > 1 ? d[1] : d[0];
                        return l = this.ttmlToCssFontSize(p, !1, .75, "ttml:region" === i), void s.css(t, n, l);
                    case "fontStyle":
                    case "fontWeight":
                        return void s.css(t, n, l);
                    case "lineHeight":
                        var m = "normal" === a ? a : this.ttmlToCssFontSize(a, !1);
                        return void s.css(t, "line-height", m);
                    case "computed-lineHeight":
                        for (var v = a.split(","), f = -1, g = 0, y = v; g < y.length; g++) {
                            var b = y[g];
                            if (l = this.ttmlToCssFontSize(b, !1), l && l.indexOf("px") === l.length - 2) {
                                var c = parseFloat(l.substr(0, l.length - 2));
                                !isNaN(c) && c > f && (f = c)
                            }
                        }
                        return void(f >= 0 && s.css(t, "line-height", f + "px"));
                    case "origin":
                        if ("auto" !== a) {
                            var u = a.split(/\s+/);
                            2 === u.length && (s.css(t, "position", "absolute"), s.css(t, "left", this.ttmlToCssUnits(u[0], !0)), s.css(t, "top", this.ttmlToCssUnits(u[1], !1)))
                        }
                        return;
                    case "opacity":
                        return void s.css(t, n, l);
                    case "padding":
                        var C = r.getDimensions(t),
                            d = a.split(/\s+/),
                            w = void 0,
                            E = void 0,
                            T = void 0,
                            S = void 0;
                        switch (d.length) {
                            case 1:
                                w = this.ttmlToCssUnits(d[0], !1, C), E = this.ttmlToCssUnits(d[0], !0, C), l = o.format("{0} {1} {0} {1}", w, E);
                                break;
                            case 2:
                                w = this.ttmlToCssUnits(d[0], !1, C), E = this.ttmlToCssUnits(d[1], !0, C), l = o.format("{0} {1} {0} {1}", w, E);
                                break;
                            case 3:
                                w = this.ttmlToCssUnits(d[0], !1, C), E = this.ttmlToCssUnits(d[1], !0, C), T = this.ttmlToCssUnits(d[2], !1, C), l = o.format("{0} {1} {2} {1}", w, E, T);
                                break;
                            case 4:
                                w = this.ttmlToCssUnits(d[0], !1, C), E = this.ttmlToCssUnits(d[1], !0, C), T = this.ttmlToCssUnits(d[2], !1, C), S = this.ttmlToCssUnits(d[3], !0, C), l = o.format("{0} {1} {2} {3}", w, E, T, S)
                        }
                        return s.css(t, "box-sizing", "border-box"), s.css(t, "border-style", "solid"), s.css(t, "border-color", "transparent"), void s.css(t, "border-width", l);
                    case "textAlign":
                        switch (a) {
                            case "start":
                                l = "left";
                                break;
                            case "end":
                                l = "right"
                        }
                        return void s.css(t, "text-align", l);
                    case "textDecoration":
                        return l = e.ttmlToCssTextDecoration(a), void s.css(t, "text-decoration", l);
                    case "textOutline":
                        return void s.css(t, "text-shadow", this.ttmlToCssTextOutline(l));
                    case "unicodeBidi":
                        switch (a) {
                            case "bidiOverride":
                                l = "bidi-override"
                        }
                        return void s.css(t, "unicode-bidi", l);
                    case "visibility":
                        return void s.css(t, n, l);
                    case "writingMode":
                        switch (a) {
                            case "lr":
                            case "lrtb":
                                return s.css(t, "writing-mode", "horizontal-tb"), s.css(t, "-webkit-writing-mode", "horizontal-tb"), void s.css(t, "writing-mode", "lr-tb");
                            case "rl":
                            case "rltb":
                                return s.css(t, "writing-mode", "horizontal-tb"), s.css(t, "-webkit-writing-mode", "horizontal-tb"), void s.css(t, "writing-mode", "rl-tb");
                            case "tblr":
                                return s.css(t, "text-orientation", "upright"), s.css(t, "writing-mode", "vertical-lr"), s.css(t, "-webkit-text-orientation", "upright"), s.css(t, "-webkit-writing-mode", "vertical-lr"), void s.css(t, "writing-mode", "tb-lr");
                            case "tb":
                            case "tbrl":
                                return s.css(t, "text-orientation", "upright"), s.css(t, "writing-mode", "vertical-rl"), s.css(t, "-webkit-text-orientation", "upright"), s.css(t, "-webkit-writing-mode", "vertical-rl"), void s.css(t, "writing-mode", "tb-rl")
                        }
                        return;
                    case "wrapOption":
                        return void s.css(t, "white-space", "noWrap" === a ? "nowrap" : "pre" === a ? "pre" : "normal");
                    case "zIndex":
                        return void s.css(t, n, l);
                    default:
                        return void s.css(t, n, l)
                }
            }, e.defaultStyle = function(t) {
                return s.css(t, "background-color", e.TtmlNamedColorMap.transparent), s.css(t, "offset", "0"), s.css(t, "margin", "0"), s.css(t, "padding", "0"), s.css(t, "border", "0"), t
            }, e.prototype.ttmlToCssUnits = function(e, t, i) {
                var n = e;
                if (e) {
                    var s = e.charAt(e.length - 1);
                    if ("c" === s || "%" === s) {
                        var o = this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions : this.settings.relatedMediaObjectRegion,
                            r = parseFloat(e.substr(0, e.length - 1)),
                            a = t ? o.width : o.height,
                            l = void 0;
                        if ("c" === s) {
                            var h = t ? this.settings.cellResolution.columns : this.settings.cellResolution.rows;
                            l = r * a / h
                        } else "%" === s && (i && (a = t ? i.width : i.height), l = a * r / 100);
                        l = Math.round(10 * l) / 10, n = l + "px"
                    }
                }
                return n
            }, e.prototype.ttmlToCssFontSize = function(e, t, i, n) {
                void 0 === i && (i = 1), void 0 === n && (n = !1);
                var s = e;
                if (e) {
                    var o = e.charAt(e.length - 1);
                    if ("c" === o || n && "%" === o) {
                        var r = this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions : this.settings.relatedMediaObjectRegion,
                            a = parseFloat(e.substr(0, e.length - 1)),
                            l = t ? r.width : r.height,
                            h = t ? this.settings.cellResolution.columns : this.settings.cellResolution.rows,
                            c = a * l / h;
                        "%" === o && (c /= 100), c = Math.floor(c * i * 10) / 10, s = c + "px"
                    }
                }
                return s
            }, e.prototype.ttmlToCssTextOutline = function(t) {
                var i = "none";
                if (!o.isNullOrWhiteSpace(t) && "none" !== t) {
                    var n, s = t.split(/\s+/),
                        r = void 0,
                        a = void 0;
                    if (1 === s.length) r = $(this).css("color"), a = s[0], n = "";
                    else if (3 === s.length) r = s[0], a = s[1], n = s[2];
                    else if (2 === s.length) {
                        var l = s[0].charAt(0);
                        l >= "0" && l <= "9" ? (r = $(this).css("color"), a = s[0], n = s[1]) : (r = s[0], a = s[1], n = "")
                    }
                    if (n = this.ttmlToCssFontSize(n, !1, .75), a = this.ttmlToCssFontSize(a, !1, .75), s = e.lengthRegEx.exec(a), s && 3 === s.length) {
                        var h = Math.round(parseFloat(s[1])),
                            c = s[2];
                        i = "";
                        for (var u = -h; u <= h; u++)
                            for (var d = -h; d <= h; d++) 0 === u && 0 === d || (i += o.format("{0}{4} {1}{4} {2} {3}, ", u, d, n, e.ttmlToCssColor(r), c));
                        i && (i = i.substr(0, i.length - 2))
                    }
                }
                return i
            }, e.ttmlToCssTextDecoration = function(e) {
                for (var t = "", i = e.split(/\s+/), n = 0, s = i; n < s.length; n++) {
                    var r = s[n];
                    switch (r) {
                        case "none":
                        case "noUnderline":
                        case "noLineThrough":
                        case "noOverline":
                            t = "none"
                    }
                }
                for (var a = 0, l = i; a < l.length; a++) {
                    var r = l[a];
                    switch (r) {
                        case "none":
                        case "noUnderline":
                        case "noLineThrough":
                        case "noOverline":
                            break;
                        case "lineThrough":
                            t += " line-through";
                            break;
                        default:
                            t += " " + r
                    }
                }
                return o.trim(t)
            }, e.ttmlToCssColor = function(t) {
                var i = t;
                if (t = t.toLowerCase(), 0 === t.indexOf("rgba")) {
                    var n = e.rgbaRegEx.exec(t);
                    if (n && 5 === n.length) {
                        var s = n[1],
                            r = n[2],
                            a = n[3],
                            l = parseInt(n[4], 10);
                        i = o.format("rgba({0},{1},{2},{3})", s, r, a, Math.round(100 * l / 255) / 100)
                    }
                } else if ("#" === t.charAt(0) && 9 === t.length) {
                    var s = parseInt(t.substr(1, 2), 16),
                        r = parseInt(t.substr(3, 2), 16),
                        a = parseInt(t.substr(5, 2), 16),
                        l = parseInt(t.substr(7, 2), 16);
                    i = o.format("rgba({0},{1},{2},{3})", s, r, a, Math.round(100 * l / 255) / 100)
                } else e.TtmlNamedColorMap[t] && (i = e.TtmlNamedColorMap[t]);
                return i
            }, e.lengthRegEx = /\s*(\d+\.*\d*)(.*)\s*/, e.rgbaRegEx = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*/, e.TtmlNamedColorMap = {
                transparent: "rgba(0,0,0,0)",
                black: "rgba(0,0,0,1)",
                silver: "rgba(192,192,192,1)",
                gray: "rgba(128,128,128,1)",
                white: "rgba(255,255,255,1)",
                maroon: "rgba(128,0,0,1)",
                red: "rgba(255,0,0,1)",
                purple: "rgba(128,0,128,1)",
                fuchsia: "rgba(255,0,255,1)",
                magenta: "rgba(255,0,255,1)",
                green: "rgba(0,128,0,1)",
                lime: "rgba(0,255,0,1)",
                olive: "rgba(128,128,0,1)",
                yellow: "rgba(255,255,0,1)",
                navy: "rgba(0,0,128,1)",
                blue: "rgba(0,0,255,1)",
                teal: "rgba(0,128,128,1)",
                aqua: "rgba(0,255,255,1)",
                cyan: "rgba(0,255,255,1)"
            }, e
        }();
        t.TtmlContext = a
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(8)], s = function(e, t, i) {
        "use strict";
        t.xmlNS = "http://www.w3.org/XML/1998/namespace";
        var n = function() {
            function e(e) {
                this.ttmlNamespace = "http://www.w3.org/ns/ttml", this.ttmlStyleNamespace = "http://www.w3.org/ns/ttml#styling", this.ttmlParameterNamespace = "http://www.w3.org/ns/ttml#parameter", this.ttmlMetaNamespace = "http://www.w3.org/ns/ttml#metadata", this.idPrefix = "", this.mediaFrameRate = 30, this.mediaFrameRateMultiplier = 1, this.mediaSubFrameRate = 1, this.mediaTickRate = 1e3, this.supportedTimeBase = "media", this.cellResolution = {
                    rows: 15,
                    columns: 32
                }, this.defaultRegionStyle = {
                    backgroundColor: "transparent",
                    color: "#E8E9EA",
                    direction: "ltr",
                    display: "auto",
                    displayAlign: "before",
                    extent: "auto",
                    fontFamily: "default",
                    fontSize: "1c",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    lineHeight: "normal",
                    opacity: "1",
                    origin: "auto",
                    overflow: "hidden",
                    padding: "0",
                    showBackground: "always",
                    textAlign: "start",
                    textDecoration: "none",
                    textOutline: "none",
                    unicodeBidi: "normal",
                    visibility: "visible",
                    wrapOption: "noWrap",
                    writingMode: "lrtb",
                    zIndex: "auto"
                }, this.fontMap = {}, this.fontMap.default = "Lucida sans typewriter, Lucida console, Consolas", this.fontMap.monospaceSerif = "Courier", this.fontMap.proportionalSerif = "Times New Roman, Serif", this.fontMap.monospaceSansSerif = "Lucida sans typewriter, Lucida console, Consolas", this.fontMap.proportionalSansSerif = "Arial, Sans-serif", this.fontMap.casual = "Verdana", this.fontMap.cursive = "Zapf-Chancery, Segoe script, Cursive", this.fontMap.smallCaps = "Arial, Helvetica", this.fontMap.monospace = "Lucida sans typewriter, Lucida console, Consolas", this.fontMap.sansSerif = "Arial, Sans-serif", this.fontMap.serif = "Times New Roman, Serif", e && i.extend(this, e)
            }
            return e
        }();
        t.TtmlSettings = n
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t], s = function(e, t) {
        "use strict";
        var i = function() {
            function e(e, t) {
                this.mediaFrameRate = e, this.mediaTickRate = t
            }
            return e.prototype.parse = function(t) {
                if (!t) return 0;
                var i = e.absoluteTimeRegex.exec(t);
                if (i && i.length > 3) {
                    var n = 60 * parseInt(i[1], 10) * 60,
                        s = 60 * parseInt(i[2], 10),
                        o = parseInt(i[3], 10),
                        r = 0;
                    return i[5] && (r = 1e3 * parseFloat(i[4])), i[6] && (r = Math.round(parseFloat(i[6]) * this.getTimeUnitMultiplier("f"))), 1e3 * (n + s + o) + r
                }
                var a = e.relativeTimeRegex.exec(t);
                return a && a.length > 3 ? Math.round(parseFloat(a[1]) * this.getTimeUnitMultiplier(a[3])) : 0
            }, e.prototype.getTimeUnitMultiplier = function(e) {
                switch (e) {
                    case "h":
                        return 36e5;
                    case "ms":
                        return 1;
                    case "m":
                        return 6e4;
                    case "s":
                        return 1e3;
                    case "f":
                        return 1e3 / this.mediaFrameRate;
                    case "t":
                        return 1e3 / this.mediaTickRate;
                    default:
                        return 0
                }
            }, e.absoluteTimeRegex = /^(\d{1,}):(\d{2}):(\d{2})((\.\d{1,})|:(\d{2,}(\.\d{1,})?))?$/, e.relativeTimeRegex = /^(\d+(\.\d+)?)(ms|[hmsft])$/, e
        }();
        t.TtmlTimeParser = i
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(7), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(t) {
                var i = this;
                e.call(this, t), this.handleElementResizeEvent = function() {
                    i.applyWidthBasedClass()
                }, this.onTriggerClick = function(e) {
                    i.initiatePublish({
                        id: i.element.id
                    })
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                if (this.element) {
                    var e = n.selectFirstElement(t.triggerSelector, this.element);
                    e && this.element.id && (this.trigger = e, n.addEvent(this.trigger, n.eventTypes.click, this.onTriggerClick)), this.applyWidthBasedClass(), this.resizeThrottledEvent = n.addThrottledEvent(window, n.eventTypes.resize, this.handleElementResizeEvent, 50)
                }
            }, t.prototype.teardown = function() {
                n.removeEvent(window, n.eventTypes.resize, this.handleElementResizeEvent), this.element = null
            }, t.prototype.applyWidthBasedClass = function() {
                var e = n.getClientRect(this.element).width;
                e <= t.mediumWidth && e > t.smallWidth ? this.element.setAttribute(t.dataJsWidth, t.mediumString) : e <= t.smallWidth ? this.element.setAttribute(t.dataJsWidth, t.smallString) : this.element.removeAttribute(t.dataJsWidth)
            }, t.prototype.publish = function(e, t) {
                this.trigger && e.onClick(t)
            }, t.selector = ".m-video-trigger", t.typeName = "VideoTrigger", t.dataJsWidth = "data-js-width", t.smallString = "small", t.mediumString = "medium", t.smallWidth = 767, t.mediumWidth = 1083, t.triggerSelector = "button", t
        }(i.Publisher);
        t.VideoTrigger = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s;
    n = [i, t, i(10), i(5), i(6), i(9), i(74), i(12), i(15), i(14), i(16), i(17), i(18), i(21), i(19), i(22), i(23), i(24), i(26), i(27), i(28), i(29), i(30), i(32), i(33), i(34), i(35), i(36), i(43), i(37), i(44), i(1), i(45), i(46), i(48), i(42), i(49), i(51), i(52), i(53), i(54), i(56), i(58), i(57), i(40), i(59), i(60), i(61), i(75), i(62), i(63), i(64), i(11), i(65), i(72)], s = function(e, t, i, n, s, o, r, a, l, h, c, u, d, p, m, v, f, g, y, b, C, w, E, T, S, A, x, k, I, P, M, O, N, F, B, D, H, R, L, W, z, V, K, j, _, U, q, Y, X, G, J, $, Q, Z, ee) {
        "use strict";
        var te = function() {
            function e() {}
            return e
        }();
        t.ComponentAutoInitializer = te,
            function() {
                i.ComponentFactory.create([{
                    c: F.PageBehaviors
                }, {
                    c: n.ActionBar
                }, {
                    c: s.ActionMenu
                }, {
                    c: o.ActionToggle
                }, {
                    c: a.Alert,
                    selector: ".c-alert, .m-alert"
                }, {
                    c: r.AmbientVideo
                }, {
                    c: h.BackToTop,
                    selector: ".c-back-to-top, .m-back-to-top"
                }, {
                    c: l.Button
                }, {
                    c: c.Checkbox
                }, {
                    c: u.ChoiceSummary
                }, {
                    c: d.Combo
                }, {
                    c: p.CompareChart,
                    selector: ".c-compare-chart, .m-compare-chart"
                }, {
                    c: m.ContentPlacementItem,
                    selector: ".m-content-placement-item"
                }, {
                    c: v.ContentToggle
                }, {
                    c: f.DateTimePicker
                }, {
                    c: g.DeviceActions
                }, {
                    c: y.Dialog
                }, {
                    c: b.Drawer
                }, {
                    c: C.FeedHeroItem
                }, {
                    c: w.File
                }, {
                    c: E.Flyout
                }, {
                    c: T.HeroItem,
                    selector: ".c-hero, .m-hero-item"
                }, {
                    c: S.ImmersiveHeroItem
                }, {
                    c: A.InPageNavigation,
                    selector: ".c-in-page-navigation, .m-in-page-navigation"
                }, {
                    c: x.MosaicPlacement
                }, {
                    c: k.MultiFeature
                }, {
                    c: I.MultiHeroItem
                }, {
                    c: P.MultiSlideCarousel
                }, {
                    c: M.NavigationMenu
                }, {
                    c: O.NavigationBar
                }, {
                    c: N.PageBar
                }, {
                    c: B.Pagination,
                    selector: ".c-pagination, .m-pagination"
                }, {
                    c: D.Pivot
                }, {
                    c: H.ProductPlacement
                }, {
                    c: R.ProductPlacementItem
                }, {
                    c: L.RangeSlider
                }, {
                    c: W.Rating
                }, {
                    c: z.RefineMenu
                }, {
                    c: V.Select
                }, {
                    c: K.SelectButton
                }, {
                    c: j.SelectMenu,
                    selector: ".c-select-menu, .c-select-menu .c-menu-item.f-sub-menu"
                }, {
                    c: _.SequenceIndicator,
                    selector: ".c-sequence-indicator"
                }, {
                    c: U.SingleSlideCarousel
                }, {
                    c: q.Slider
                }, {
                    c: Y.Social,
                    selector: ".c-social, .m-social"
                }, {
                    c: X.SplitReveal
                }, {
                    c: G.SupplementalNavigation,
                    selector: ".c-supplemental-nav, .m-supplemental-nav"
                }, {
                    c: J.Table
                }, {
                    c: $.Toggle
                }, {
                    c: Q.Tooltip
                }, {
                    c: Z.Video,
                    eventToBind: "DOMContentLoaded"
                }, {
                    c: ee.VideoTrigger
                }])
            }()
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(3), i(2)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(t) {
                e.call(this, t), this.observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, t && this.update()
            }
            return o(t, e), t.prototype.update = function() {
                var e = this;
                this.htmlRoot = i.selectFirstElement("html"), this.videoElement = i.selectFirstElement("video", this.element);
                var t = {
                    attributes: !0,
                    childList: !0,
                    characterData: !0
                };
                "undefined" != typeof MutationObserver ? (this.observer = new MutationObserver(function(t) {
                    t.forEach(function(t) {
                        e.checkReduceMotion()
                    })
                }), this.observer.observe(this.htmlRoot, t)) : i.addEvent(document, i.eventTypes.DOMNodeInserted, this.reduceMotion), this.checkReduceMotion()
            }, t.prototype.checkReduceMotion = function() {
                i.hasClass(this.htmlRoot, "context-set-motion-limited") && this.reduceMotion()
            }, t.prototype.reduceMotion = function() {
                this.videoElement.hasAttribute("autoplay") && this.videoElement.removeAttribute("autoplay"), this.videoElement.hasAttribute("loop") && this.videoElement.removeAttribute("loop"), this.videoElement.pause()
            }, t.prototype.teardown = function() {
                "undefined" != typeof MutationObserver ? this.observer.disconnect() : i.removeEvent(document, i.eventTypes.DOMNodeInserted, this.reduceMotion)
            }, t.selector = ".m-ambient-video", t.typeName = "AmbientVideo", t
        }(n.ObservableComponent);
        t.AmbientVideo = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}, function(e, t, i) {
    var n, s, o = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    };
    n = [i, t, i(2), i(3)], s = function(e, t, i, n) {
        "use strict";
        var s = function(e) {
            function t(i) {
                var s = this;
                e.call(this, i), this.sliderLineThickness = 8, this.slidePanelPosition = 0, this.slideHandlePosition = 50, this.sliderHandleSize = 32, this.sliderHandleColor = "0067B8", this.moduleWidth = 0, this.hasHandle = !1, this.handleWindowScroll = function() {
                    var e = window.pageYOffset + window.innerHeight / 2;
                    if (e >= s.splitRevealSection.offsetTop && s.splitRevealSection.offsetTop + s.splitRevealSection.clientHeight >= e) {
                        var t = (e - s.splitRevealSection.offsetTop) / s.splitRevealSection.clientHeight * 100;
                        s.setSlidePanelPosition(t)
                    }
                }, this.handleWindowResize = function() {
                    s.moduleWidth = s.splitRevealSection.offsetWidth, s.orientation === t.horizontal ? n.css(s.secondaryImageContainer, "width", s.moduleWidth + "px") : s.orientation === t.vertical && n.css(s.secondaryImageContainer, "width", "auto")
                }, this.handleMouseDown = function(e) {
                    n.removeEvent(s.splitRevealSection, n.eventTypes.mousedown, s.handleMouseDown), n.addEvent(window, n.eventTypes.mouseup, s.handleMouseUp), n.addEvent(window, n.eventTypes.mousemove, s.handleDrag), s.handleDrag(e)
                }, this.handleMouseUp = function() {
                    n.removeEvent(window, n.eventTypes.mouseup, s.handleMouseUp), n.removeEvent(window, n.eventTypes.mousemove, s.handleDrag), n.addEvent(s.splitRevealSection, n.eventTypes.mousedown, s.handleMouseDown)
                }, this.handleMouseOver = function() {
                    n.removeEvent(s.splitRevealSection, n.eventTypes.mouseover, s.handleMouseOver), n.addEvent(s.splitRevealSection, n.eventTypes.mouseout, s.handleMouseOut), n.addEvent(s.splitRevealSection, n.eventTypes.mousemove, s.handleMouseMove)
                }, this.handleMouseOut = function() {
                    n.removeEvent(s.splitRevealSection, n.eventTypes.mouseout, s.handleMouseUp), n.addEvent(s.splitRevealSection, n.eventTypes.mousemove, s.handleMouseMove), n.addEvent(s.splitRevealSection, n.eventTypes.mouseover, s.handleMouseOver)
                }, this.handleDrag = function(e) {
                    var i = s.orientation === t.horizontal ? e.clientX : e.clientY;
                    s.updateSlidePanelPosition(i)
                }, this.handleMouseMove = function(e) {
                    var i, o, r, a, l = n.getClientRect(s.sliderLine);
                    if (s.orientation === t.horizontal ? (i = s.sliderLine.offsetHeight, o = s.sliderHandle.offsetHeight / 2, r = l.top, a = e.clientY) : (i = s.sliderLine.offsetWidth, o = s.sliderHandle.offsetWidth / 2, r = l.left, a = e.clientX), !(a <= r + o || a >= r + i - o)) {
                        var h = (a - r) / i * 100;
                        s.setSliderHandlePosition(h)
                    }
                }, this.update()
            }
            return o(t, e), t.prototype.update = function() {
                this.splitRevealSection = this.element, this.sliderLine = n.selectFirstElement('div[aria-hidden="true"]', this.splitRevealSection), this.slidePanel = n.selectFirstElement(".c-image + div", this.splitRevealSection), this.secondaryImageContainer = n.selectFirstElement("div", this.slidePanel), this.moduleWidth = this.splitRevealSection.offsetWidth, this.handleWindowResize(), this.getSliderLineConfiguration(), n.selectFirstElement("button", this.sliderLine) && (this.hasHandle = !0, this.sliderHandle = n.selectFirstElement("button", this.sliderLine), this.getSliderHandleConfiguration(), this.setSliderHandlePosition(this.slideHandlePosition));
                var e = -(this.sliderLineThickness / 2) + "px";
                n.hasClass(this.splitRevealSection, "f-horizontal") ? this.orientation = t.horizontal : this.orientation = t.vertical, this.orientation === t.horizontal ? (n.css(this.sliderLine, "width", this.sliderLineThickness + "px"), n.css(this.sliderLine, "transform", "translateX(" + e + ")"), this.resizeThrottledEventHandler = n.addThrottledEvent(window, n.eventTypes.resize, this.handleWindowResize)) : this.orientation === t.vertical && (n.css(this.sliderLine, "height", this.sliderLineThickness + "px"), n.css(this.sliderLine, "transform", "translateY(" + e + ")")), this.setSlidePanelPosition(this.slidePanelPosition), this.hasHandle && this.createSliderHandle(), this.hasHandle ? this.sliderHandle && (n.addEvent(this.splitRevealSection, n.eventTypes.mouseover, this.handleMouseOver), n.addEvent(this.splitRevealSection, n.eventTypes.mousedown, this.handleMouseDown)) : n.addEvent(window, n.eventTypes.scroll, this.handleWindowScroll)
            }, t.prototype.createSliderHandle = function() {
                this.setSliderHandlePosition(this.slidePanelPosition), n.css(this.sliderHandle, "width", this.sliderHandleSize + "px"), n.css(this.sliderHandle, "height", this.sliderHandleSize + "px"), n.css(this.sliderHandle, "borderWidth", this.sliderHandleSize / this.sliderLineThickness + "px"), n.css(this.sliderHandle, "backgroundColor", null !== this.sliderHandleColor ? "#" + this.sliderHandleColor : null)
            }, t.prototype.getSliderLineConfiguration = function() {
                var e = "data-js-split-reveal-slider-line-thickness",
                    t = "data-js-split-reveal-initial-slide-panel-position";
                this.sliderLine.getAttribute(e) && (this.sliderLineThickness = parseInt(this.sliderLine.getAttribute(e), 10)), this.sliderLine.getAttribute(t) && (this.slidePanelPosition = parseInt(this.sliderLine.getAttribute(t), 10))
            }, t.prototype.getSliderHandleConfiguration = function() {
                var e = "data-js-split-reveal-handle-color",
                    i = "data-js-split-reveal-handle-size",
                    n = "data-js-split-reveal-initial-handle-position";
                if (this.sliderHandle.getAttribute(e)) {
                    var s = this.sliderHandle.getAttribute(e),
                        o = Object.keys(t.accentColorMap).some(function(e) {
                            return t.accentColorMap[e] === s
                        });
                    this.sliderHandleColor = o ? s : t.accentColorMap.blueDefault
                }
                this.sliderHandle.getAttribute(i) && (this.sliderHandleSize = parseInt(this.sliderHandle.getAttribute(i), 10)), this.sliderHandle.getAttribute(n) && (this.slideHandlePosition = parseInt(this.sliderHandle.getAttribute(n), 10))
            }, t.prototype.setSlidePanelPosition = function(e) {
                this.slidePanelPosition = e, this.orientation === t.horizontal ? (n.css(this.sliderLine, "left", this.slidePanelPosition + "%"), n.css(this.slidePanel, "width", this.slidePanelPosition + "%"), n.css(this.secondaryImageContainer, "width", this.moduleWidth + "px")) : this.orientation === t.vertical && (n.css(this.sliderLine, "top", this.slidePanelPosition + "%"), n.css(this.slidePanel, "height", this.slidePanelPosition + "%"), n.css(this.secondaryImageContainer, "width", "auto"))
            }, t.prototype.setSliderHandlePosition = function(e) {
                var i = -(this.sliderHandleSize / 2 - this.sliderLineThickness / 2);
                this.orientation === t.horizontal ? (n.css(this.sliderHandle, "top", e + "%"), n.css(this.sliderHandle, "transform", "translate(" + i + "px, -50%)")) : this.orientation === t.vertical && (n.css(this.sliderHandle, "left", e + "%"), n.css(this.sliderHandle, "transform", "translate(-50%, " + i + "px)"))
            }, t.prototype.updateSlidePanelPosition = function(e) {
                var i, s, o, r = n.getClientRect(this.slidePanel);
                this.orientation === t.horizontal ? (i = this.splitRevealSection.offsetWidth, o = r.left) : (i = this.splitRevealSection.offsetHeight, o = r.top), e <= o || (s = (e - o) / i * 100, s > 100 && (s = 100), this.setSlidePanelPosition(s))
            }, t.prototype.teardown = function() {
                this.hasHandle ? this.sliderHandle && (n.removeEvent(this.splitRevealSection, n.eventTypes.mouseover, this.handleMouseOver), n.removeEvent(this.splitRevealSection, n.eventTypes.mousedown, this.handleMouseDown)) : n.removeEvent(window, n.eventTypes.scroll, this.handleWindowScroll)
            }, t.selector = ".m-split-reveal", t.typeName = "SplitReveal", t.accentColorMap = {
                blueDefault: "0067B8",
                blueAlt: "1483DA",
                purpleDefault: "5C2E91",
                purpleAlt: "9172B5",
                magentaDefault: "B4009E",
                magentaAlt: "CB4DBB",
                redDefault: "CB0F1F",
                redAlt: "EC3B4A",
                orangeDefault: "BC3301",
                orangeAlt: "DD521E",
                yellowDefault: "845F00",
                yellowAlt: "FFB900",
                greenDefault: "0F760F",
                greenAlt: "379237",
                tealDefault: "007264",
                tealAlt: "1A8F80"
            }, t.vertical = "vertical", t.horizontal = "horizontal", t
        }(i.ObservableComponent);
        t.SplitReveal = s
    }.apply(t, n), !(void 0 !== s && (e.exports = s))
}]);
//# sourceMappingURL=mwfAutoInit-main.var.min.js.map