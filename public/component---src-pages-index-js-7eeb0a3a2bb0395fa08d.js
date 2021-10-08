;(self.webpackChunknicenicegame_github_io =
  self.webpackChunknicenicegame_github_io || []).push([
  [678],
  {
    5264: function (t, e, n) {
      'use strict'
      n.d(e, {
        Z: function () {
          return o
        }
      })
      var r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = (function (t) {
          var e = {}
          return function (n) {
            return void 0 === e[n] && (e[n] = t(n)), e[n]
          }
        })(function (t) {
          return (
            r.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              t.charCodeAt(2) < 91)
          )
        })
    },
    2993: function (t) {
      var e = 'undefined' != typeof Element,
        n = 'function' == typeof Map,
        r = 'function' == typeof Set,
        o = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView
      function i(t, a) {
        if (t === a) return !0
        if (t && a && 'object' == typeof t && 'object' == typeof a) {
          if (t.constructor !== a.constructor) return !1
          var u, s, c, l
          if (Array.isArray(t)) {
            if ((u = t.length) != a.length) return !1
            for (s = u; 0 != s--; ) if (!i(t[s], a[s])) return !1
            return !0
          }
          if (n && t instanceof Map && a instanceof Map) {
            if (t.size !== a.size) return !1
            for (l = t.entries(); !(s = l.next()).done; )
              if (!a.has(s.value[0])) return !1
            for (l = t.entries(); !(s = l.next()).done; )
              if (!i(s.value[1], a.get(s.value[0]))) return !1
            return !0
          }
          if (r && t instanceof Set && a instanceof Set) {
            if (t.size !== a.size) return !1
            for (l = t.entries(); !(s = l.next()).done; )
              if (!a.has(s.value[0])) return !1
            return !0
          }
          if (o && ArrayBuffer.isView(t) && ArrayBuffer.isView(a)) {
            if ((u = t.length) != a.length) return !1
            for (s = u; 0 != s--; ) if (t[s] !== a[s]) return !1
            return !0
          }
          if (t.constructor === RegExp)
            return t.source === a.source && t.flags === a.flags
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === a.valueOf()
          if (t.toString !== Object.prototype.toString)
            return t.toString() === a.toString()
          if ((u = (c = Object.keys(t)).length) !== Object.keys(a).length)
            return !1
          for (s = u; 0 != s--; )
            if (!Object.prototype.hasOwnProperty.call(a, c[s])) return !1
          if (e && t instanceof Element) return !1
          for (s = u; 0 != s--; )
            if (
              (('_owner' !== c[s] && '__v' !== c[s] && '__o' !== c[s]) ||
                !t.$$typeof) &&
              !i(t[c[s]], a[c[s]])
            )
              return !1
          return !0
        }
        return t != t && a != a
      }
      t.exports = function (t, e) {
        try {
          return i(t, e)
        } catch (n) {
          if ((n.message || '').match(/stack|recursion/i))
            return (
              console.warn('react-fast-compare cannot handle circular refs'), !1
            )
          throw n
        }
      }
    },
    4839: function (t, e, n) {
      'use strict'
      var r,
        o = n(7294),
        i = (r = o) && 'object' == typeof r && 'default' in r ? r.default : r
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        )
      }
      var u = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      )
      t.exports = function (t, e, n) {
        if ('function' != typeof t)
          throw new Error('Expected reducePropsToState to be a function.')
        if ('function' != typeof e)
          throw new Error(
            'Expected handleStateChangeOnClient to be a function.'
          )
        if (void 0 !== n && 'function' != typeof n)
          throw new Error(
            'Expected mapStateOnServer to either be undefined or a function.'
          )
        return function (r) {
          if ('function' != typeof r)
            throw new Error(
              'Expected WrappedComponent to be a React component.'
            )
          var s,
            c = []
          function l() {
            ;(s = t(
              c.map(function (t) {
                return t.props
              })
            )),
              f.canUseDOM ? e(s) : n && (s = n(s))
          }
          var f = (function (t) {
            var e, n
            function o() {
              return t.apply(this, arguments) || this
            }
            ;(n = t),
              ((e = o).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = n),
              (o.peek = function () {
                return s
              }),
              (o.rewind = function () {
                if (o.canUseDOM)
                  throw new Error(
                    'You may only call rewind() on the server. Call peek() to read the current state.'
                  )
                var t = s
                return (s = void 0), (c = []), t
              })
            var a = o.prototype
            return (
              (a.UNSAFE_componentWillMount = function () {
                c.push(this), l()
              }),
              (a.componentDidUpdate = function () {
                l()
              }),
              (a.componentWillUnmount = function () {
                var t = c.indexOf(this)
                c.splice(t, 1), l()
              }),
              (a.render = function () {
                return i.createElement(r, this.props)
              }),
              o
            )
          })(o.PureComponent)
          return (
            a(
              f,
              'displayName',
              'SideEffect(' +
                (function (t) {
                  return t.displayName || t.name || 'Component'
                })(r) +
                ')'
            ),
            a(f, 'canUseDOM', u),
            f
          )
        }
      }
    },
    6135: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          default: function () {
            return zu
          }
        })
      var r,
        o,
        i,
        a,
        u = n(7294),
        s = n(5444),
        c = n(5697),
        l = n.n(c),
        f = n(4839),
        d = n.n(f),
        p = n(2993),
        v = n.n(p),
        m = n(6494),
        h = n.n(m),
        y = 'bodyAttributes',
        g = 'htmlAttributes',
        A = 'titleAttributes',
        x = {
          BASE: 'base',
          BODY: 'body',
          HEAD: 'head',
          HTML: 'html',
          LINK: 'link',
          META: 'meta',
          NOSCRIPT: 'noscript',
          SCRIPT: 'script',
          STYLE: 'style',
          TITLE: 'title'
        },
        b =
          (Object.keys(x).map(function (t) {
            return x[t]
          }),
          'charset'),
        E = 'cssText',
        w = 'href',
        T = 'http-equiv',
        P = 'innerHTML',
        S = 'itemprop',
        C = 'name',
        k = 'property',
        M = 'rel',
        O = 'src',
        R = 'target',
        L = {
          accesskey: 'accessKey',
          charset: 'charSet',
          class: 'className',
          contenteditable: 'contentEditable',
          contextmenu: 'contextMenu',
          'http-equiv': 'httpEquiv',
          itemprop: 'itemProp',
          tabindex: 'tabIndex'
        },
        j = 'defaultTitle',
        V = 'defer',
        D = 'encodeSpecialCharacters',
        B = 'onChangeClientState',
        I = 'titleTemplate',
        N = Object.keys(L).reduce(function (t, e) {
          return (t[L[e]] = e), t
        }, {}),
        U = [x.NOSCRIPT, x.SCRIPT, x.STYLE],
        F = 'data-react-helmet',
        H =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              },
        Y = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function')
        },
        X = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
          }
        })(),
        z =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          },
        W = function (t, e) {
          var n = {}
          for (var r in t)
            e.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]))
          return n
        },
        Q = function (t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
        },
        q = function (t) {
          var e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return !1 === e
            ? String(t)
            : String(t)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#x27;')
        },
        G = function (t) {
          var e = $(t, x.TITLE),
            n = $(t, I)
          if (n && e)
            return n.replace(/%s/g, function () {
              return Array.isArray(e) ? e.join('') : e
            })
          var r = $(t, j)
          return e || r || void 0
        },
        Z = function (t) {
          return $(t, B) || function () {}
        },
        K = function (t, e) {
          return e
            .filter(function (e) {
              return void 0 !== e[t]
            })
            .map(function (e) {
              return e[t]
            })
            .reduce(function (t, e) {
              return z({}, t, e)
            }, {})
        },
        _ = function (t, e) {
          return e
            .filter(function (t) {
              return void 0 !== t[x.BASE]
            })
            .map(function (t) {
              return t[x.BASE]
            })
            .reverse()
            .reduce(function (e, n) {
              if (!e.length)
                for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                  var i = r[o].toLowerCase()
                  if (-1 !== t.indexOf(i) && n[i]) return e.concat(n)
                }
              return e
            }, [])
        },
        J = function (t, e, n) {
          var r = {}
          return n
            .filter(function (e) {
              return (
                !!Array.isArray(e[t]) ||
                (void 0 !== e[t] &&
                  ot(
                    'Helmet: ' +
                      t +
                      ' should be of type "Array". Instead found type "' +
                      H(e[t]) +
                      '"'
                  ),
                !1)
              )
            })
            .map(function (e) {
              return e[t]
            })
            .reverse()
            .reduce(function (t, n) {
              var o = {}
              n.filter(function (t) {
                for (
                  var n = void 0, i = Object.keys(t), a = 0;
                  a < i.length;
                  a++
                ) {
                  var u = i[a],
                    s = u.toLowerCase()
                  ;-1 === e.indexOf(s) ||
                    (n === M && 'canonical' === t[n].toLowerCase()) ||
                    (s === M && 'stylesheet' === t[s].toLowerCase()) ||
                    (n = s),
                    -1 === e.indexOf(u) ||
                      (u !== P && u !== E && u !== S) ||
                      (n = u)
                }
                if (!n || !t[n]) return !1
                var c = t[n].toLowerCase()
                return (
                  r[n] || (r[n] = {}),
                  o[n] || (o[n] = {}),
                  !r[n][c] && ((o[n][c] = !0), !0)
                )
              })
                .reverse()
                .forEach(function (e) {
                  return t.push(e)
                })
              for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                var u = i[a],
                  s = h()({}, r[u], o[u])
                r[u] = s
              }
              return t
            }, [])
            .reverse()
        },
        $ = function (t, e) {
          for (var n = t.length - 1; n >= 0; n--) {
            var r = t[n]
            if (r.hasOwnProperty(e)) return r[e]
          }
          return null
        },
        tt =
          ((r = Date.now()),
          function (t) {
            var e = Date.now()
            e - r > 16
              ? ((r = e), t(e))
              : setTimeout(function () {
                  tt(t)
                }, 0)
          }),
        et = function (t) {
          return clearTimeout(t)
        },
        nt =
          'undefined' != typeof window
            ? (window.requestAnimationFrame &&
                window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              tt
            : n.g.requestAnimationFrame || tt,
        rt =
          'undefined' != typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              et
            : n.g.cancelAnimationFrame || et,
        ot = function (t) {
          return console && 'function' == typeof console.warn && console.warn(t)
        },
        it = null,
        at = function (t, e) {
          var n = t.baseTag,
            r = t.bodyAttributes,
            o = t.htmlAttributes,
            i = t.linkTags,
            a = t.metaTags,
            u = t.noscriptTags,
            s = t.onChangeClientState,
            c = t.scriptTags,
            l = t.styleTags,
            f = t.title,
            d = t.titleAttributes
          ct(x.BODY, r), ct(x.HTML, o), st(f, d)
          var p = {
              baseTag: lt(x.BASE, n),
              linkTags: lt(x.LINK, i),
              metaTags: lt(x.META, a),
              noscriptTags: lt(x.NOSCRIPT, u),
              scriptTags: lt(x.SCRIPT, c),
              styleTags: lt(x.STYLE, l)
            },
            v = {},
            m = {}
          Object.keys(p).forEach(function (t) {
            var e = p[t],
              n = e.newTags,
              r = e.oldTags
            n.length && (v[t] = n), r.length && (m[t] = p[t].oldTags)
          }),
            e && e(),
            s(t, v, m)
        },
        ut = function (t) {
          return Array.isArray(t) ? t.join('') : t
        },
        st = function (t, e) {
          void 0 !== t && document.title !== t && (document.title = ut(t)),
            ct(x.TITLE, e)
        },
        ct = function (t, e) {
          var n = document.getElementsByTagName(t)[0]
          if (n) {
            for (
              var r = n.getAttribute(F),
                o = r ? r.split(',') : [],
                i = [].concat(o),
                a = Object.keys(e),
                u = 0;
              u < a.length;
              u++
            ) {
              var s = a[u],
                c = e[s] || ''
              n.getAttribute(s) !== c && n.setAttribute(s, c),
                -1 === o.indexOf(s) && o.push(s)
              var l = i.indexOf(s)
              ;-1 !== l && i.splice(l, 1)
            }
            for (var f = i.length - 1; f >= 0; f--) n.removeAttribute(i[f])
            o.length === i.length
              ? n.removeAttribute(F)
              : n.getAttribute(F) !== a.join(',') &&
                n.setAttribute(F, a.join(','))
          }
        },
        lt = function (t, e) {
          var n = document.head || document.querySelector(x.HEAD),
            r = n.querySelectorAll(t + '[' + 'data-react-helmet]'),
            o = Array.prototype.slice.call(r),
            i = [],
            a = void 0
          return (
            e &&
              e.length &&
              e.forEach(function (e) {
                var n = document.createElement(t)
                for (var r in e)
                  if (e.hasOwnProperty(r))
                    if (r === P) n.innerHTML = e.innerHTML
                    else if (r === E)
                      n.styleSheet
                        ? (n.styleSheet.cssText = e.cssText)
                        : n.appendChild(document.createTextNode(e.cssText))
                    else {
                      var u = void 0 === e[r] ? '' : e[r]
                      n.setAttribute(r, u)
                    }
                n.setAttribute(F, 'true'),
                  o.some(function (t, e) {
                    return (a = e), n.isEqualNode(t)
                  })
                    ? o.splice(a, 1)
                    : i.push(n)
              }),
            o.forEach(function (t) {
              return t.parentNode.removeChild(t)
            }),
            i.forEach(function (t) {
              return n.appendChild(t)
            }),
            { oldTags: o, newTags: i }
          )
        },
        ft = function (t) {
          return Object.keys(t).reduce(function (e, n) {
            var r = void 0 !== t[n] ? n + '="' + t[n] + '"' : '' + n
            return e ? e + ' ' + r : r
          }, '')
        },
        dt = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return Object.keys(t).reduce(function (e, n) {
            return (e[L[n] || n] = t[n]), e
          }, e)
        },
        pt = function (t, e, n) {
          switch (t) {
            case x.TITLE:
              return {
                toComponent: function () {
                  return (
                    (t = e.title),
                    (n = e.titleAttributes),
                    ((r = { key: t })[F] = !0),
                    (o = dt(n, r)),
                    [u.createElement(x.TITLE, o, t)]
                  )
                  var t, n, r, o
                },
                toString: function () {
                  return (function (t, e, n, r) {
                    var o = ft(n),
                      i = ut(e)
                    return o
                      ? '<' +
                          t +
                          ' data-react-helmet="true" ' +
                          o +
                          '>' +
                          q(i, r) +
                          '</' +
                          t +
                          '>'
                      : '<' +
                          t +
                          ' data-react-helmet="true">' +
                          q(i, r) +
                          '</' +
                          t +
                          '>'
                  })(t, e.title, e.titleAttributes, n)
                }
              }
            case y:
            case g:
              return {
                toComponent: function () {
                  return dt(e)
                },
                toString: function () {
                  return ft(e)
                }
              }
            default:
              return {
                toComponent: function () {
                  return (function (t, e) {
                    return e.map(function (e, n) {
                      var r,
                        o = (((r = { key: n })[F] = !0), r)
                      return (
                        Object.keys(e).forEach(function (t) {
                          var n = L[t] || t
                          if (n === P || n === E) {
                            var r = e.innerHTML || e.cssText
                            o.dangerouslySetInnerHTML = { __html: r }
                          } else o[n] = e[t]
                        }),
                        u.createElement(t, o)
                      )
                    })
                  })(t, e)
                },
                toString: function () {
                  return (function (t, e, n) {
                    return e.reduce(function (e, r) {
                      var o = Object.keys(r)
                          .filter(function (t) {
                            return !(t === P || t === E)
                          })
                          .reduce(function (t, e) {
                            var o =
                              void 0 === r[e] ? e : e + '="' + q(r[e], n) + '"'
                            return t ? t + ' ' + o : o
                          }, ''),
                        i = r.innerHTML || r.cssText || '',
                        a = -1 === U.indexOf(t)
                      return (
                        e +
                        '<' +
                        t +
                        ' data-react-helmet="true" ' +
                        o +
                        (a ? '/>' : '>' + i + '</' + t + '>')
                      )
                    }, '')
                  })(t, e, n)
                }
              }
          }
        },
        vt = function (t) {
          var e = t.baseTag,
            n = t.bodyAttributes,
            r = t.encode,
            o = t.htmlAttributes,
            i = t.linkTags,
            a = t.metaTags,
            u = t.noscriptTags,
            s = t.scriptTags,
            c = t.styleTags,
            l = t.title,
            f = void 0 === l ? '' : l,
            d = t.titleAttributes
          return {
            base: pt(x.BASE, e, r),
            bodyAttributes: pt(y, n, r),
            htmlAttributes: pt(g, o, r),
            link: pt(x.LINK, i, r),
            meta: pt(x.META, a, r),
            noscript: pt(x.NOSCRIPT, u, r),
            script: pt(x.SCRIPT, s, r),
            style: pt(x.STYLE, c, r),
            title: pt(x.TITLE, { title: f, titleAttributes: d }, r)
          }
        },
        mt = d()(
          function (t) {
            return {
              baseTag: _([w, R], t),
              bodyAttributes: K(y, t),
              defer: $(t, V),
              encode: $(t, D),
              htmlAttributes: K(g, t),
              linkTags: J(x.LINK, [M, w], t),
              metaTags: J(x.META, [C, b, T, k, S], t),
              noscriptTags: J(x.NOSCRIPT, [P], t),
              onChangeClientState: Z(t),
              scriptTags: J(x.SCRIPT, [O, P], t),
              styleTags: J(x.STYLE, [E], t),
              title: G(t),
              titleAttributes: K(A, t)
            }
          },
          function (t) {
            it && rt(it),
              t.defer
                ? (it = nt(function () {
                    at(t, function () {
                      it = null
                    })
                  }))
                : (at(t), (it = null))
          },
          vt
        )(function () {
          return null
        }),
        ht =
          ((o = mt),
          (a = i =
            (function (t) {
              function e() {
                return Y(this, e), Q(this, t.apply(this, arguments))
              }
              return (
                (function (t, e) {
                  if ('function' != typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof e
                    )
                  ;(t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e))
                })(e, t),
                (e.prototype.shouldComponentUpdate = function (t) {
                  return !v()(this.props, t)
                }),
                (e.prototype.mapNestedChildrenToProps = function (t, e) {
                  if (!e) return null
                  switch (t.type) {
                    case x.SCRIPT:
                    case x.NOSCRIPT:
                      return { innerHTML: e }
                    case x.STYLE:
                      return { cssText: e }
                  }
                  throw new Error(
                    '<' +
                      t.type +
                      ' /> elements are self-closing and can not contain children. Refer to our API for more information.'
                  )
                }),
                (e.prototype.flattenArrayTypeChildren = function (t) {
                  var e,
                    n = t.child,
                    r = t.arrayTypeChildren,
                    o = t.newChildProps,
                    i = t.nestedChildren
                  return z(
                    {},
                    r,
                    (((e = {})[n.type] = [].concat(r[n.type] || [], [
                      z({}, o, this.mapNestedChildrenToProps(n, i))
                    ])),
                    e)
                  )
                }),
                (e.prototype.mapObjectTypeChildren = function (t) {
                  var e,
                    n,
                    r = t.child,
                    o = t.newProps,
                    i = t.newChildProps,
                    a = t.nestedChildren
                  switch (r.type) {
                    case x.TITLE:
                      return z(
                        {},
                        o,
                        (((e = {})[r.type] = a),
                        (e.titleAttributes = z({}, i)),
                        e)
                      )
                    case x.BODY:
                      return z({}, o, { bodyAttributes: z({}, i) })
                    case x.HTML:
                      return z({}, o, { htmlAttributes: z({}, i) })
                  }
                  return z({}, o, (((n = {})[r.type] = z({}, i)), n))
                }),
                (e.prototype.mapArrayTypeChildrenToProps = function (t, e) {
                  var n = z({}, e)
                  return (
                    Object.keys(t).forEach(function (e) {
                      var r
                      n = z({}, n, (((r = {})[e] = t[e]), r))
                    }),
                    n
                  )
                }),
                (e.prototype.warnOnInvalidChildren = function (t, e) {
                  return !0
                }),
                (e.prototype.mapChildrenToProps = function (t, e) {
                  var n = this,
                    r = {}
                  return (
                    u.Children.forEach(t, function (t) {
                      if (t && t.props) {
                        var o = t.props,
                          i = o.children,
                          a = (function (t) {
                            var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            return Object.keys(t).reduce(function (e, n) {
                              return (e[N[n] || n] = t[n]), e
                            }, e)
                          })(W(o, ['children']))
                        switch ((n.warnOnInvalidChildren(t, i), t.type)) {
                          case x.LINK:
                          case x.META:
                          case x.NOSCRIPT:
                          case x.SCRIPT:
                          case x.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: t,
                              arrayTypeChildren: r,
                              newChildProps: a,
                              nestedChildren: i
                            })
                            break
                          default:
                            e = n.mapObjectTypeChildren({
                              child: t,
                              newProps: e,
                              newChildProps: a,
                              nestedChildren: i
                            })
                        }
                      }
                    }),
                    (e = this.mapArrayTypeChildrenToProps(r, e))
                  )
                }),
                (e.prototype.render = function () {
                  var t = this.props,
                    e = t.children,
                    n = W(t, ['children']),
                    r = z({}, n)
                  return (
                    e && (r = this.mapChildrenToProps(e, r)),
                    u.createElement(o, r)
                  )
                }),
                X(e, null, [
                  {
                    key: 'canUseDOM',
                    set: function (t) {
                      o.canUseDOM = t
                    }
                  }
                ]),
                e
              )
            })(u.Component)),
          (i.propTypes = {
            base: l().object,
            bodyAttributes: l().object,
            children: l().oneOfType([l().arrayOf(l().node), l().node]),
            defaultTitle: l().string,
            defer: l().bool,
            encodeSpecialCharacters: l().bool,
            htmlAttributes: l().object,
            link: l().arrayOf(l().object),
            meta: l().arrayOf(l().object),
            noscript: l().arrayOf(l().object),
            onChangeClientState: l().func,
            script: l().arrayOf(l().object),
            style: l().arrayOf(l().object),
            title: l().string,
            titleAttributes: l().object,
            titleTemplate: l().string
          }),
          (i.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (i.peek = o.peek),
          (i.rewind = function () {
            var t = o.rewind()
            return (
              t ||
                (t = vt({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: '',
                  titleAttributes: {}
                })),
              t
            )
          }),
          a)
      ht.renderStatic = ht.rewind
      var yt = () => {
          const t = (0, s.useStaticQuery)('3278765302'),
            { title: e, description: n } = t.site.siteMetadata
          return u.createElement(
            ht,
            null,
            u.createElement('meta', { charset: 'UTF-8' }),
            u.createElement('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0'
            }),
            u.createElement('meta', { name: 'description', content: n }),
            u.createElement('meta', {
              name: 'robots',
              content: 'index, follow'
            }),
            u.createElement('script', {
              src: 'https://kit.fontawesome.com/2f1a6e5d18.js',
              crossorigin: 'anonymous'
            }),
            u.createElement('title', null, e)
          )
        },
        gt = function (t, e) {
          return (
            (gt =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              }),
            gt(t, e)
          )
        }
      function At(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Class extends value ' + String(e) + ' is not a constructor or null'
          )
        function n() {
          this.constructor = t
        }
        gt(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()))
      }
      var xt = function () {
        return (
          (xt =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
              return t
            }),
          xt.apply(this, arguments)
        )
      }
      function bt(t, e) {
        var n = {}
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r])
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
            e.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
              (n[r[o]] = t[r[o]])
        }
        return n
      }
      Object.create
      function Et(t, e) {
        var n = 'function' == typeof Symbol && t[Symbol.iterator]
        if (!n) return t
        var r,
          o,
          i = n.call(t),
          a = []
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
            a.push(r.value)
        } catch (u) {
          o = { error: u }
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }
      function wt(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]))
        return t.concat(r || Array.prototype.slice.call(e))
      }
      Object.create
      var Tt = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t]
              })
            }
          }
        },
        Pt = {
          measureLayout: Tt([
            'layout',
            'layoutId',
            'drag',
            '_layoutResetTransform'
          ]),
          animation: Tt([
            'animate',
            'exit',
            'variants',
            'whileHover',
            'whileTap',
            'whileFocus',
            'whileDrag'
          ]),
          exit: Tt(['exit']),
          drag: Tt(['drag', 'dragControls']),
          focus: Tt(['whileFocus']),
          hover: Tt(['whileHover', 'onHoverStart', 'onHoverEnd']),
          tap: Tt(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
          pan: Tt(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
          layoutAnimation: Tt(['layout', 'layoutId'])
        }
      var St = (0, u.createContext)({ strict: !1 }),
        Ct = Object.keys(Pt),
        kt = Ct.length
      var Mt = (0, u.createContext)({
          transformPagePoint: function (t) {
            return t
          },
          isStatic: !1
        }),
        Ot = (0, u.createContext)({})
      var Rt = (0, u.createContext)(null)
      function Lt(t) {
        var e = (0, u.useRef)(null)
        return null === e.current && (e.current = t()), e.current
      }
      function jt() {
        var t = (0, u.useContext)(Rt)
        if (null === t) return [!0, null]
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          o = It()
        ;(0, u.useEffect)(function () {
          return r(o)
        }, [])
        return !e && n
          ? [
              !1,
              function () {
                return null == n ? void 0 : n(o)
              }
            ]
          : [!0]
      }
      function Vt(t) {
        return null === t || t.isPresent
      }
      var Dt = 0,
        Bt = function () {
          return Dt++
        },
        It = function () {
          return Lt(Bt)
        },
        Nt = (0, u.createContext)(null),
        Ut = 'undefined' != typeof window,
        Ft = Ut ? u.useLayoutEffect : u.useEffect
      function Ht(t, e, n, r) {
        var o = (0, u.useContext)(Mt),
          i = (0, u.useContext)(St),
          a = (0, u.useContext)(Ot).visualElement,
          s = (0, u.useContext)(Rt),
          c = (function (t) {
            var e = t.layoutId,
              n = (0, u.useContext)(Nt)
            return n && void 0 !== e ? n + '-' + e : e
          })(n),
          l = (0, u.useRef)(void 0)
        r || (r = i.renderer),
          !l.current &&
            r &&
            (l.current = r(t, {
              visualState: e,
              parent: a,
              props: xt(xt({}, n), { layoutId: c }),
              presenceId: null == s ? void 0 : s.id,
              blockInitialAnimation: !1 === (null == s ? void 0 : s.initial)
            }))
        var f = l.current
        return (
          Ft(function () {
            f &&
              (f.setProps(xt(xt(xt({}, o), n), { layoutId: c })),
              (f.isPresent = Vt(s)),
              (f.isPresenceRoot =
                !a || a.presenceId !== (null == s ? void 0 : s.id)),
              f.syncRender())
          }),
          (0, u.useEffect)(function () {
            var t
            f &&
              (null === (t = f.animationState) ||
                void 0 === t ||
                t.animateChanges())
          }),
          Ft(function () {
            return function () {
              return null == f ? void 0 : f.notifyUnmount()
            }
          }, []),
          f
        )
      }
      function Yt(t) {
        return (
          'object' == typeof t &&
          Object.prototype.hasOwnProperty.call(t, 'current')
        )
      }
      function Xt(t) {
        return Array.isArray(t)
      }
      function zt(t) {
        return 'string' == typeof t || Xt(t)
      }
      function Wt(t, e, n, r, o) {
        var i
        return (
          void 0 === r && (r = {}),
          void 0 === o && (o = {}),
          'string' == typeof e &&
            (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]),
          'function' == typeof e ? e(null != n ? n : t.custom, r, o) : e
        )
      }
      function Qt(t, e, n) {
        var r = t.getProps()
        return Wt(
          r,
          e,
          null != n ? n : r.custom,
          (function (t) {
            var e = {}
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get())
              }),
              e
            )
          })(t),
          (function (t) {
            var e = {}
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity())
              }),
              e
            )
          })(t)
        )
      }
      function qt(t) {
        var e
        return (
          'function' ==
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          zt(t.initial) ||
          zt(t.animate) ||
          zt(t.whileHover) ||
          zt(t.whileDrag) ||
          zt(t.whileTap) ||
          zt(t.whileFocus) ||
          zt(t.exit)
        )
      }
      function Gt(t) {
        return Boolean(qt(t) || t.variants)
      }
      function Zt(t, e) {
        var n = (function (t, e) {
            if (qt(t)) {
              var n = t.initial,
                r = t.animate
              return {
                initial: !1 === n || zt(n) ? n : void 0,
                animate: zt(r) ? r : void 0
              }
            }
            return !1 !== t.inherit ? e : {}
          })(t, (0, u.useContext)(Ot)),
          r = n.initial,
          o = n.animate
        return (0, u.useMemo)(
          function () {
            return { initial: r, animate: o }
          },
          e ? [Kt(r), Kt(o)] : []
        )
      }
      function Kt(t) {
        return Array.isArray(t) ? t.join(' ') : t
      }
      function _t(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          r = t.useRender,
          o = t.useVisualState,
          i = t.Component
        return (
          e &&
            (function (t) {
              for (var e in t) {
                var n = t[e]
                null !== n && (Pt[e].Component = n)
              }
            })(e),
          (0, u.forwardRef)(function (t, e) {
            var a = (0, u.useContext)(Mt).isStatic,
              s = null,
              c = Zt(t, a),
              l = o(t, a)
            return (
              !a &&
                Ut &&
                ((c.visualElement = Ht(i, l, t, n)),
                (s = (function (t, e, n) {
                  var r = []
                  if (((0, u.useContext)(St), !e)) return null
                  for (var o = 0; o < kt; o++) {
                    var i = Ct[o],
                      a = Pt[i],
                      s = a.isEnabled,
                      c = a.Component
                    s(t) &&
                      c &&
                      r.push(
                        u.createElement(
                          c,
                          xt({ key: i }, t, { visualElement: e })
                        )
                      )
                  }
                  return r
                })(t, c.visualElement))),
              u.createElement(
                u.Fragment,
                null,
                u.createElement(
                  Ot.Provider,
                  { value: c },
                  r(
                    i,
                    t,
                    (function (t, e, n) {
                      return (0, u.useCallback)(
                        function (r) {
                          var o
                          r &&
                            (null === (o = t.mount) ||
                              void 0 === o ||
                              o.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n &&
                              ('function' == typeof n
                                ? n(r)
                                : Yt(n) && (n.current = r))
                        },
                        [e]
                      )
                    })(l, c.visualElement, e),
                    l,
                    a
                  )
                ),
                s
              )
            )
          })
        )
      }
      function Jt(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), _t(t(e, n))
        }
        var n = new Map()
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r)
          }
        })
      }
      var $t = [
        'animate',
        'circle',
        'defs',
        'desc',
        'ellipse',
        'g',
        'image',
        'line',
        'filter',
        'marker',
        'mask',
        'metadata',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'rect',
        'stop',
        'svg',
        'switch',
        'symbol',
        'text',
        'tspan',
        'use',
        'view'
      ]
      function te(t) {
        return (
          'string' == typeof t &&
          !t.includes('-') &&
          !!($t.indexOf(t) > -1 || /[A-Z]/.test(t))
        )
      }
      var ee = {}
      var ne = ['', 'X', 'Y', 'Z'],
        re = ['transformPerspective', 'x', 'y', 'z']
      function oe(t, e) {
        return re.indexOf(t) - re.indexOf(e)
      }
      ;['translate', 'scale', 'rotate', 'skew'].forEach(function (t) {
        return ne.forEach(function (e) {
          return re.push(t + e)
        })
      })
      var ie = new Set(re)
      function ae(t) {
        return ie.has(t)
      }
      var ue = new Set(['originX', 'originY', 'originZ'])
      function se(t) {
        return ue.has(t)
      }
      function ce(t, e) {
        var n = e.layout,
          r = e.layoutId
        return (
          ae(t) ||
          se(t) ||
          ((n || void 0 !== r) && (!!ee[t] || 'opacity' === t))
        )
      }
      var le = function (t) {
          return null !== t && 'object' == typeof t && t.getVelocity
        },
        fe = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective'
        }
      function de(t) {
        return t.startsWith('--')
      }
      var pe = function (t, e) {
          return e && 'number' == typeof t ? e.transform(t) : t
        },
        ve = function (t, e) {
          return function (n) {
            return Math.max(Math.min(n, e), t)
          }
        },
        me = function (t) {
          return t % 1 ? Number(t.toFixed(5)) : t
        },
        he = /(-)?([\d]*\.?[\d])+/g,
        ye =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        ge =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i
      function Ae(t) {
        return 'string' == typeof t
      }
      var xe = function (t) {
          return {
            test: function (e) {
              return Ae(e) && e.endsWith(t) && 1 === e.split(' ').length
            },
            parse: parseFloat,
            transform: function (e) {
              return '' + e + t
            }
          }
        },
        be = xe('deg'),
        Ee = xe('%'),
        we = xe('px'),
        Te = xe('vh'),
        Pe = xe('vw'),
        Se = xt(xt({}, Ee), {
          parse: function (t) {
            return Ee.parse(t) / 100
          },
          transform: function (t) {
            return Ee.transform(100 * t)
          }
        }),
        Ce = {
          test: function (t) {
            return 'number' == typeof t
          },
          parse: parseFloat,
          transform: function (t) {
            return t
          }
        },
        ke = xt(xt({}, Ce), { transform: ve(0, 1) }),
        Me = xt(xt({}, Ce), { default: 1 }),
        Oe = xt(xt({}, Ce), { transform: Math.round }),
        Re = {
          borderWidth: we,
          borderTopWidth: we,
          borderRightWidth: we,
          borderBottomWidth: we,
          borderLeftWidth: we,
          borderRadius: we,
          radius: we,
          borderTopLeftRadius: we,
          borderTopRightRadius: we,
          borderBottomRightRadius: we,
          borderBottomLeftRadius: we,
          width: we,
          maxWidth: we,
          height: we,
          maxHeight: we,
          size: we,
          top: we,
          right: we,
          bottom: we,
          left: we,
          padding: we,
          paddingTop: we,
          paddingRight: we,
          paddingBottom: we,
          paddingLeft: we,
          margin: we,
          marginTop: we,
          marginRight: we,
          marginBottom: we,
          marginLeft: we,
          rotate: be,
          rotateX: be,
          rotateY: be,
          rotateZ: be,
          scale: Me,
          scaleX: Me,
          scaleY: Me,
          scaleZ: Me,
          skew: be,
          skewX: be,
          skewY: be,
          distance: we,
          translateX: we,
          translateY: we,
          translateZ: we,
          x: we,
          y: we,
          z: we,
          perspective: we,
          transformPerspective: we,
          opacity: ke,
          originX: Se,
          originY: Se,
          originZ: we,
          zIndex: Oe,
          fillOpacity: ke,
          strokeOpacity: ke,
          numOctaves: Oe
        }
      function Le(t, e, n, r, o, i, a, u) {
        var s,
          c = t.style,
          l = t.vars,
          f = t.transform,
          d = t.transformKeys,
          p = t.transformOrigin
        d.length = 0
        var v = !1,
          m = !1,
          h = !0
        for (var y in e) {
          var g = e[y]
          if (de(y)) l[y] = g
          else {
            var A = Re[y],
              x = pe(g, A)
            if (ae(y)) {
              if (((v = !0), (f[y] = x), d.push(y), !h)) continue
              g !== (null !== (s = A.default) && void 0 !== s ? s : 0) &&
                (h = !1)
            } else if (se(y)) (p[y] = x), (m = !0)
            else if (
              (null == n ? void 0 : n.isHydrated) &&
              (null == r ? void 0 : r.isHydrated) &&
              ee[y]
            ) {
              var b = ee[y].process(g, r, n),
                E = ee[y].applyTo
              if (E) for (var w = E.length, T = 0; T < w; T++) c[E[T]] = b
              else c[y] = b
            } else c[y] = x
          }
        }
        r && n && a && u
          ? ((c.transform = a(r.deltaFinal, r.treeScale, v ? f : void 0)),
            i && (c.transform = i(f, c.transform)),
            (c.transformOrigin = u(r)))
          : (v &&
              (c.transform = (function (t, e, n, r) {
                var o = t.transform,
                  i = t.transformKeys,
                  a = e.enableHardwareAcceleration,
                  u = void 0 === a || a,
                  s = e.allowTransformNone,
                  c = void 0 === s || s,
                  l = ''
                i.sort(oe)
                for (var f = !1, d = i.length, p = 0; p < d; p++) {
                  var v = i[p]
                  ;(l += (fe[v] || v) + '(' + o[v] + ') '),
                    'z' === v && (f = !0)
                }
                return (
                  !f && u ? (l += 'translateZ(0)') : (l = l.trim()),
                  r ? (l = r(o, n ? '' : l)) : c && n && (l = 'none'),
                  l
                )
              })(t, o, h, i)),
            m &&
              (c.transformOrigin = (function (t) {
                var e = t.originX,
                  n = void 0 === e ? '50%' : e,
                  r = t.originY,
                  o = void 0 === r ? '50%' : r,
                  i = t.originZ
                return n + ' ' + o + ' ' + (void 0 === i ? 0 : i)
              })(p)))
      }
      var je = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {}
        }
      }
      function Ve(t, e, n) {
        for (var r in e) le(e[r]) || ce(r, n) || (t[r] = e[r])
      }
      function De(t, e, n) {
        var r = {}
        return (
          Ve(r, t.style || {}, t),
          Object.assign(
            r,
            (function (t, e, n) {
              var r = t.transformTemplate
              return (0, u.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                  }
                  Le(
                    t,
                    e,
                    void 0,
                    void 0,
                    { enableHardwareAcceleration: !n },
                    r
                  )
                  var o = t.style
                  return xt(xt({}, t.vars), o)
                },
                [e]
              )
            })(t, e, n)
          ),
          t.transformValues && (r = t.transformValues(r)),
          r
        )
      }
      function Be(t, e, n) {
        var r = {},
          o = De(t, e, n)
        return (
          Boolean(t.drag) &&
            ((r.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
            (o.touchAction =
              !0 === t.drag ? 'none' : 'pan-' + ('x' === t.drag ? 'y' : 'x'))),
          (r.style = o),
          r
        )
      }
      var Ie = new Set([
        'initial',
        'animate',
        'exit',
        'style',
        'variants',
        'transition',
        'transformTemplate',
        'transformValues',
        'custom',
        'inherit',
        'layout',
        'layoutId',
        '_layoutResetTransform',
        'onLayoutAnimationComplete',
        'onViewportBoxUpdate',
        'onLayoutMeasure',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        'drag',
        'dragControls',
        'dragListener',
        'dragConstraints',
        'dragDirectionLock',
        '_dragX',
        '_dragY',
        'dragElastic',
        'dragMomentum',
        'dragPropagation',
        'dragTransition',
        'whileDrag',
        'onPan',
        'onPanStart',
        'onPanEnd',
        'onPanSessionStart',
        'onTap',
        'onTapStart',
        'onTapCancel',
        'onHoverStart',
        'onHoverEnd',
        'whileFocus',
        'whileTap',
        'whileHover'
      ])
      function Ne(t) {
        return Ie.has(t)
      }
      var Ue = function (t) {
        return !Ne(t)
      }
      try {
        var Fe = n(5264).Z
        Ue = function (t) {
          return t.startsWith('on') ? !Ne(t) : Fe(t)
        }
      } catch (Wu) {}
      function He(t, e, n) {
        return 'string' == typeof t ? t : we.transform(e + n * t)
      }
      var Ye = function (t, e) {
          return we.transform(t * e)
        },
        Xe = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        ze = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
      function We(t, e, n, r, o, i, a, u) {
        var s = e.attrX,
          c = e.attrY,
          l = e.originX,
          f = e.originY,
          d = e.pathLength,
          p = e.pathSpacing,
          v = void 0 === p ? 1 : p,
          m = e.pathOffset,
          h = void 0 === m ? 0 : m
        Le(
          t,
          bt(e, [
            'attrX',
            'attrY',
            'originX',
            'originY',
            'pathLength',
            'pathSpacing',
            'pathOffset'
          ]),
          n,
          r,
          o,
          i,
          a,
          u
        ),
          (t.attrs = t.style),
          (t.style = {})
        var y = t.attrs,
          g = t.style,
          A = t.dimensions,
          x = t.totalPathLength
        y.transform && (A && (g.transform = y.transform), delete y.transform),
          A &&
            (void 0 !== l || void 0 !== f || g.transform) &&
            (g.transformOrigin = (function (t, e, n) {
              return He(e, t.x, t.width) + ' ' + He(n, t.y, t.height)
            })(A, void 0 !== l ? l : 0.5, void 0 !== f ? f : 0.5)),
          void 0 !== s && (y.x = s),
          void 0 !== c && (y.y = c),
          void 0 !== x &&
            void 0 !== d &&
            (function (t, e, n, r, o, i) {
              void 0 === r && (r = 1),
                void 0 === o && (o = 0),
                void 0 === i && (i = !0)
              var a = i ? Xe : ze
              t[a.offset] = Ye(-o, e)
              var u = Ye(n, e),
                s = Ye(r, e)
              t[a.array] = u + ' ' + s
            })(y, x, d, v, h, !1)
      }
      var Qe = function () {
        return xt(
          xt(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {}
            }
          ),
          { attrs: {} }
        )
      }
      function qe(t, e) {
        var n = (0, u.useMemo)(
          function () {
            var n = Qe()
            return (
              We(
                n,
                e,
                void 0,
                void 0,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
              xt(xt({}, n.attrs), { style: xt({}, n.style) })
            )
          },
          [e]
        )
        if (t.style) {
          var r = {}
          Ve(r, t.style, t), (n.style = xt(xt({}, r), n.style))
        }
        return n
      }
      function Ge(t) {
        void 0 === t && (t = !1)
        return function (e, n, r, o, i) {
          var a = o.latestValues,
            s = (te(e) ? qe : Be)(n, a, i),
            c = (function (t, e, n) {
              var r = {}
              for (var o in t)
                (Ue(o) || (!0 === n && Ne(o)) || (!e && !Ne(o))) &&
                  (r[o] = t[o])
              return r
            })(n, 'string' == typeof e, t),
            l = xt(xt(xt({}, c), s), { ref: r })
          return (0, u.createElement)(e, l)
        }
      }
      var Ze = /([a-z])([A-Z])/g,
        Ke = function (t) {
          return t.replace(Ze, '$1-$2').toLowerCase()
        }
      function _e(t, e) {
        var n = e.style,
          r = e.vars
        for (var o in (Object.assign(t.style, n), r))
          t.style.setProperty(o, r[o])
      }
      var Je = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform'
      ])
      function $e(t, e) {
        for (var n in (_e(t, e), e.attrs))
          t.setAttribute(Je.has(n) ? n : Ke(n), e.attrs[n])
      }
      function tn(t) {
        var e = t.style,
          n = {}
        for (var r in e) (le(e[r]) || ce(r, t)) && (n[r] = e[r])
        return n
      }
      function en(t) {
        var e = tn(t)
        for (var n in t) {
          if (le(t[n]))
            e['x' === n || 'y' === n ? 'attr' + n.toUpperCase() : n] = t[n]
        }
        return e
      }
      function nn(t) {
        return 'object' == typeof t && 'function' == typeof t.start
      }
      var rn = function (t) {
        return Array.isArray(t)
      }
      function on(t) {
        var e,
          n = le(t) ? t.get() : t
        return (
          (e = n),
          Boolean(e && 'object' == typeof e && e.mix && e.toValue)
            ? n.toValue()
            : n
        )
      }
      function an(t, e, n, r) {
        var o = t.scrapeMotionValuesFromProps,
          i = t.createRenderState,
          a = t.onMount,
          u = { latestValues: sn(e, n, r, o), renderState: i() }
        return (
          a &&
            (u.mount = function (t) {
              return a(e, t, u)
            }),
          u
        )
      }
      var un = function (t) {
        return function (e, n) {
          var r = (0, u.useContext)(Ot),
            o = (0, u.useContext)(Rt)
          return n
            ? an(t, e, r, o)
            : Lt(function () {
                return an(t, e, r, o)
              })
        }
      }
      function sn(t, e, n, r) {
        var o = {},
          i = !1 === (null == n ? void 0 : n.initial),
          a = r(t)
        for (var u in a) o[u] = on(a[u])
        var s = t.initial,
          c = t.animate,
          l = qt(t),
          f = Gt(t)
        e &&
          f &&
          !l &&
          !1 !== t.inherit &&
          (null != s || (s = e.initial), null != c || (c = e.animate))
        var d = i || !1 === s ? c : s
        d &&
          'boolean' != typeof d &&
          !nn(d) &&
          (Array.isArray(d) ? d : [d]).forEach(function (e) {
            var n = Wt(t, e)
            if (n) {
              var r = n.transitionEnd
              n.transition
              var i = bt(n, ['transitionEnd', 'transition'])
              for (var a in i) o[a] = i[a]
              for (var a in r) o[a] = r[a]
            }
          })
        return o
      }
      var cn = {
        useVisualState: un({
          scrapeMotionValuesFromProps: en,
          createRenderState: Qe,
          onMount: function (t, e, n) {
            var r = n.renderState,
              o = n.latestValues
            try {
              r.dimensions =
                'function' == typeof e.getBBox
                  ? e.getBBox()
                  : e.getBoundingClientRect()
            } catch (i) {
              r.dimensions = { x: 0, y: 0, width: 0, height: 0 }
            }
            'path' === e.tagName && (r.totalPathLength = e.getTotalLength()),
              We(
                r,
                o,
                void 0,
                void 0,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
              $e(e, r)
          }
        })
      }
      var ln,
        fn = {
          useVisualState: un({
            scrapeMotionValuesFromProps: tn,
            createRenderState: je
          })
        }
      function dn(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r)
          }
        )
      }
      function pn(t, e, n, r) {
        ;(0, u.useEffect)(
          function () {
            var o = t.current
            if (n && o) return dn(o, e, n, r)
          },
          [t, e, n, r]
        )
      }
      function vn(t) {
        return 'undefined' != typeof PointerEvent && t instanceof PointerEvent
          ? !('mouse' !== t.pointerType)
          : t instanceof MouseEvent
      }
      function mn(t) {
        return !!t.touches
      }
      !(function (t) {
        ;(t.Animate = 'animate'),
          (t.Hover = 'whileHover'),
          (t.Tap = 'whileTap'),
          (t.Drag = 'whileDrag'),
          (t.Focus = 'whileFocus'),
          (t.Exit = 'exit')
      })(ln || (ln = {}))
      var hn = { pageX: 0, pageY: 0 }
      function yn(t, e) {
        void 0 === e && (e = 'page')
        var n = t.touches[0] || t.changedTouches[0] || hn
        return { x: n[e + 'X'], y: n[e + 'Y'] }
      }
      function gn(t, e) {
        return void 0 === e && (e = 'page'), { x: t[e + 'X'], y: t[e + 'Y'] }
      }
      function An(t, e) {
        return (
          void 0 === e && (e = 'page'), { point: mn(t) ? yn(t, e) : gn(t, e) }
        )
      }
      var xn = function (t, e) {
          void 0 === e && (e = !1)
          var n,
            r = function (e) {
              return t(e, An(e))
            }
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent
                ;(!e || (e && 0 === t.button)) && n(t)
              })
            : r
        },
        bn = {
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointercancel: 'mousecancel',
          pointerover: 'mouseover',
          pointerout: 'mouseout',
          pointerenter: 'mouseenter',
          pointerleave: 'mouseleave'
        },
        En = {
          pointerdown: 'touchstart',
          pointermove: 'touchmove',
          pointerup: 'touchend',
          pointercancel: 'touchcancel'
        }
      function wn(t) {
        return Ut && null === window.onpointerdown
          ? t
          : Ut && null === window.ontouchstart
          ? En[t]
          : Ut && null === window.onmousedown
          ? bn[t]
          : t
      }
      function Tn(t, e, n, r) {
        return dn(t, wn(e), xn(n, 'pointerdown' === e), r)
      }
      function Pn(t, e, n, r) {
        return pn(t, wn(e), n && xn(n, 'pointerdown' === e), r)
      }
      function Sn(t) {
        var e = null
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null
            })
          )
        }
      }
      var Cn = Sn('dragHorizontal'),
        kn = Sn('dragVertical')
      function Mn(t) {
        var e = !1
        if ('y' === t) e = kn()
        else if ('x' === t) e = Cn()
        else {
          var n = Cn(),
            r = kn()
          n && r
            ? (e = function () {
                n(), r()
              })
            : (n && n(), r && r())
        }
        return e
      }
      function On() {
        var t = Mn(!0)
        return !t || (t(), !1)
      }
      function Rn(t, e, n) {
        return function (r, o) {
          var i
          vn(r) &&
            !On() &&
            (null == n || n(r, o),
            null === (i = t.animationState) ||
              void 0 === i ||
              i.setActive(ln.Hover, e))
        }
      }
      var Ln = function t(e, n) {
        return !!n && (e === n || t(e, n.parentElement))
      }
      function jn(t) {
        return (0, u.useEffect)(function () {
          return function () {
            return t()
          }
        }, [])
      }
      var Vn = function (t, e) {
          return function (n) {
            return e(t(n))
          }
        },
        Dn = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return t.reduce(Vn)
        }
      var Bn = function (t) {
          return function (e) {
            return t(e), null
          }
        },
        In = {
          tap: Bn(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              i = t.visualElement,
              a = e || n || r || o,
              s = (0, u.useRef)(!1),
              c = (0, u.useRef)(null)
            function l() {
              var t
              null === (t = c.current) || void 0 === t || t.call(c),
                (c.current = null)
            }
            function f() {
              var t
              return (
                l(),
                (s.current = !1),
                null === (t = i.animationState) ||
                  void 0 === t ||
                  t.setActive(ln.Tap, !1),
                !On()
              )
            }
            function d(t, n) {
              f() &&
                (Ln(i.getInstance(), t.target)
                  ? null == e || e(t, n)
                  : null == r || r(t, n))
            }
            function p(t, e) {
              f() && (null == r || r(t, e))
            }
            Pn(
              i,
              'pointerdown',
              a
                ? function (t, e) {
                    var r
                    l(),
                      s.current ||
                        ((s.current = !0),
                        (c.current = Dn(
                          Tn(window, 'pointerup', d),
                          Tn(window, 'pointercancel', p)
                        )),
                        null == n || n(t, e),
                        null === (r = i.animationState) ||
                          void 0 === r ||
                          r.setActive(ln.Tap, !0))
                  }
                : void 0
            ),
              jn(l)
          }),
          focus: Bn(function (t) {
            var e = t.whileFocus,
              n = t.visualElement
            pn(
              n,
              'focus',
              e
                ? function () {
                    var t
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(ln.Focus, !0)
                  }
                : void 0
            ),
              pn(
                n,
                'blur',
                e
                  ? function () {
                      var t
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(ln.Focus, !1)
                    }
                  : void 0
              )
          }),
          hover: Bn(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              o = t.visualElement
            Pn(o, 'pointerenter', e || r ? Rn(o, !0, e) : void 0),
              Pn(o, 'pointerleave', n || r ? Rn(o, !1, n) : void 0)
          })
        }
      function Nn(t, e) {
        if (!Array.isArray(e)) return !1
        var n = e.length
        if (n !== t.length) return !1
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1
        return !0
      }
      var Un = function (t, e, n) {
          return Math.min(Math.max(n, t), e)
        },
        Fn = 0.001
      function Hn(t) {
        var e,
          n,
          r = t.duration,
          o = void 0 === r ? 800 : r,
          i = t.bounce,
          a = void 0 === i ? 0.25 : i,
          u = t.velocity,
          s = void 0 === u ? 0 : u,
          c = t.mass,
          l = void 0 === c ? 1 : c,
          f = 1 - a
        ;(f = Un(0.05, 1, f)),
          (o = Un(0.01, 10, o / 1e3)),
          f < 1
            ? ((e = function (t) {
                var e = t * f,
                  n = e * o,
                  r = e - s,
                  i = Yn(t, f),
                  a = Math.exp(-n)
                return Fn - (r / i) * a
              }),
              (n = function (t) {
                var n = t * f * o,
                  r = n * s + s,
                  i = Math.pow(f, 2) * Math.pow(t, 2) * o,
                  a = Math.exp(-n),
                  u = Yn(Math.pow(t, 2), f)
                return ((-e(t) + Fn > 0 ? -1 : 1) * ((r - i) * a)) / u
              }))
            : ((e = function (t) {
                return Math.exp(-t * o) * ((t - s) * o + 1) - 0.001
              }),
              (n = function (t) {
                return Math.exp(-t * o) * (o * o * (s - t))
              }))
        var d = (function (t, e, n) {
          for (var r = n, o = 1; o < 12; o++) r -= t(r) / e(r)
          return r
        })(e, n, 5 / o)
        if (((o *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: o }
        var p = Math.pow(d, 2) * l
        return { stiffness: p, damping: 2 * f * Math.sqrt(l * p), duration: o }
      }
      function Yn(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      var Xn = ['duration', 'bounce'],
        zn = ['stiffness', 'damping', 'mass']
      function Wn(t, e) {
        return e.some(function (e) {
          return void 0 !== t[e]
        })
      }
      function Qn(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          r = t.to,
          o = void 0 === r ? 1 : r,
          i = t.restSpeed,
          a = void 0 === i ? 2 : i,
          u = t.restDelta,
          s = bt(t, ['from', 'to', 'restSpeed', 'restDelta']),
          c = { done: !1, value: n },
          l = (function (t) {
            var e = xt(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1
              },
              t
            )
            if (!Wn(t, zn) && Wn(t, Xn)) {
              var n = Hn(t)
              ;(e = xt(xt(xt({}, e), n), {
                velocity: 0,
                mass: 1
              })).isResolvedFromDuration = !0
            }
            return e
          })(s),
          f = l.stiffness,
          d = l.damping,
          p = l.mass,
          v = l.velocity,
          m = l.duration,
          h = l.isResolvedFromDuration,
          y = qn,
          g = qn
        function A() {
          var t = v ? -v / 1e3 : 0,
            e = o - n,
            r = d / (2 * Math.sqrt(f * p)),
            i = Math.sqrt(f / p) / 1e3
          if ((null != u || (u = Math.abs(o - n) <= 1 ? 0.01 : 0.4), r < 1)) {
            var a = Yn(i, r)
            ;(y = function (n) {
              var u = Math.exp(-r * i * n)
              return (
                o -
                u *
                  (((t + r * i * e) / a) * Math.sin(a * n) +
                    e * Math.cos(a * n))
              )
            }),
              (g = function (n) {
                var o = Math.exp(-r * i * n)
                return (
                  r *
                    i *
                    o *
                    ((Math.sin(a * n) * (t + r * i * e)) / a +
                      e * Math.cos(a * n)) -
                  o *
                    (Math.cos(a * n) * (t + r * i * e) -
                      a * e * Math.sin(a * n))
                )
              })
          } else if (1 === r)
            y = function (n) {
              return o - Math.exp(-i * n) * (e + (t + i * e) * n)
            }
          else {
            var s = i * Math.sqrt(r * r - 1)
            y = function (n) {
              var a = Math.exp(-r * i * n),
                u = Math.min(s * n, 300)
              return (
                o -
                (a * ((t + r * i * e) * Math.sinh(u) + s * e * Math.cosh(u))) /
                  s
              )
            }
          }
        }
        return (
          A(),
          {
            next: function (t) {
              var e = y(t)
              if (h) c.done = t >= m
              else {
                var n = 1e3 * g(t),
                  r = Math.abs(n) <= a,
                  i = Math.abs(o - e) <= u
                c.done = r && i
              }
              return (c.value = c.done ? o : e), c
            },
            flipTarget: function () {
              var t
              ;(v = -v), (n = (t = [o, n])[0]), (o = t[1]), A()
            }
          }
        )
      }
      Qn.needsInterpolation = function (t, e) {
        return 'string' == typeof t || 'string' == typeof e
      }
      var qn = function (t) {
          return 0
        },
        Gn = function (t, e, n) {
          var r = e - t
          return 0 === r ? 1 : (n - t) / r
        },
        Zn = function (t, e, n) {
          return -n * t + n * e + t
        },
        Kn = function (t, e) {
          return function (n) {
            return Boolean(
              (Ae(n) && ge.test(n) && n.startsWith(t)) ||
                (e && Object.prototype.hasOwnProperty.call(n, e))
            )
          }
        },
        _n = function (t, e, n) {
          return function (r) {
            var o
            if (!Ae(r)) return r
            var i = r.match(he),
              a = i[0],
              u = i[1],
              s = i[2],
              c = i[3]
            return (
              ((o = {})[t] = parseFloat(a)),
              (o[e] = parseFloat(u)),
              (o[n] = parseFloat(s)),
              (o.alpha = void 0 !== c ? parseFloat(c) : 1),
              o
            )
          }
        },
        Jn = ve(0, 255),
        $n = xt(xt({}, Ce), {
          transform: function (t) {
            return Math.round(Jn(t))
          }
        }),
        tr = {
          test: Kn('rgb', 'red'),
          parse: _n('red', 'green', 'blue'),
          transform: function (t) {
            var e = t.red,
              n = t.green,
              r = t.blue,
              o = t.alpha,
              i = void 0 === o ? 1 : o
            return (
              'rgba(' +
              $n.transform(e) +
              ', ' +
              $n.transform(n) +
              ', ' +
              $n.transform(r) +
              ', ' +
              me(ke.transform(i)) +
              ')'
            )
          }
        }
      var er = {
          test: Kn('#'),
          parse: function (t) {
            var e = '',
              n = '',
              r = '',
              o = ''
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (r = t.substr(5, 2)),
                  (o = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (o = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (o += o)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: o ? parseInt(o, 16) / 255 : 1
              }
            )
          },
          transform: tr.transform
        },
        nr = {
          test: Kn('hsl', 'hue'),
          parse: _n('hue', 'saturation', 'lightness'),
          transform: function (t) {
            var e = t.hue,
              n = t.saturation,
              r = t.lightness,
              o = t.alpha,
              i = void 0 === o ? 1 : o
            return (
              'hsla(' +
              Math.round(e) +
              ', ' +
              Ee.transform(me(n)) +
              ', ' +
              Ee.transform(me(r)) +
              ', ' +
              me(ke.transform(i)) +
              ')'
            )
          }
        },
        rr = function (t, e, n) {
          var r = t * t,
            o = e * e
          return Math.sqrt(Math.max(0, n * (o - r) + r))
        },
        or = [er, tr, nr],
        ir = function (t) {
          return or.find(function (e) {
            return e.test(t)
          })
        },
        ar = function (t) {
          return (
            "'" +
            t +
            "' is not an animatable color. Use the equivalent color code instead."
          )
        },
        ur = function (t, e) {
          var n = ir(t),
            r = ir(e)
          ar(t), ar(e), n.transform, r.transform
          var o = n.parse(t),
            i = r.parse(e),
            a = xt({}, o),
            u = n === nr ? Zn : rr
          return function (t) {
            for (var e in a) 'alpha' !== e && (a[e] = u(o[e], i[e], t))
            return (a.alpha = Zn(o.alpha, i.alpha, t)), n.transform(a)
          }
        },
        sr = {
          test: function (t) {
            return tr.test(t) || er.test(t) || nr.test(t)
          },
          parse: function (t) {
            return tr.test(t)
              ? tr.parse(t)
              : nr.test(t)
              ? nr.parse(t)
              : er.parse(t)
          },
          transform: function (t) {
            return Ae(t)
              ? t
              : t.hasOwnProperty('red')
              ? tr.transform(t)
              : nr.transform(t)
          }
        },
        cr = '${c}',
        lr = '${n}'
      function fr(t) {
        var e = [],
          n = 0,
          r = t.match(ye)
        r &&
          ((n = r.length),
          (t = t.replace(ye, cr)),
          e.push.apply(e, r.map(sr.parse)))
        var o = t.match(he)
        return (
          o && ((t = t.replace(he, lr)), e.push.apply(e, o.map(Ce.parse))),
          { values: e, numColors: n, tokenised: t }
        )
      }
      function dr(t) {
        return fr(t).values
      }
      function pr(t) {
        var e = fr(t),
          n = e.values,
          r = e.numColors,
          o = e.tokenised,
          i = n.length
        return function (t) {
          for (var e = o, n = 0; n < i; n++)
            e = e.replace(
              n < r ? cr : lr,
              n < r ? sr.transform(t[n]) : me(t[n])
            )
          return e
        }
      }
      var vr = function (t) {
        return 'number' == typeof t ? 0 : t
      }
      var mr = {
          test: function (t) {
            var e, n, r, o
            return (
              isNaN(t) &&
              Ae(t) &&
              (null !==
                (n =
                  null === (e = t.match(he)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (o =
                    null === (r = t.match(ye)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== o
                  ? o
                  : 0) >
                0
            )
          },
          parse: dr,
          createTransformer: pr,
          getAnimatableNone: function (t) {
            var e = dr(t)
            return pr(t)(e.map(vr))
          }
        },
        hr = function (t) {
          return 'number' == typeof t
        }
      function yr(t, e) {
        return hr(t)
          ? function (n) {
              return Zn(t, e, n)
            }
          : sr.test(t)
          ? ur(t, e)
          : br(t, e)
      }
      var gr = function (t, e) {
          var n = wt([], t),
            r = n.length,
            o = t.map(function (t, n) {
              return yr(t, e[n])
            })
          return function (t) {
            for (var e = 0; e < r; e++) n[e] = o[e](t)
            return n
          }
        },
        Ar = function (t, e) {
          var n = xt(xt({}, t), e),
            r = {}
          for (var o in n)
            void 0 !== t[o] && void 0 !== e[o] && (r[o] = yr(t[o], e[o]))
          return function (t) {
            for (var e in r) n[e] = r[e](t)
            return n
          }
        }
      function xr(t) {
        for (
          var e = mr.parse(t), n = e.length, r = 0, o = 0, i = 0, a = 0;
          a < n;
          a++
        )
          r || 'number' == typeof e[a] ? r++ : void 0 !== e[a].hue ? i++ : o++
        return { parsed: e, numNumbers: r, numRGB: o, numHSL: i }
      }
      var br = function (t, e) {
          var n = mr.createTransformer(e),
            r = xr(t),
            o = xr(e)
          return (
            r.numHSL === o.numHSL &&
              r.numRGB === o.numRGB &&
              (r.numNumbers, o.numNumbers),
            Dn(gr(r.parsed, o.parsed), n)
          )
        },
        Er = function (t, e) {
          return function (n) {
            return Zn(t, e, n)
          }
        }
      function wr(t, e, n) {
        for (
          var r,
            o = [],
            i =
              n ||
              ('number' == typeof (r = t[0])
                ? Er
                : 'string' == typeof r
                ? sr.test(r)
                  ? ur
                  : br
                : Array.isArray(r)
                ? gr
                : 'object' == typeof r
                ? Ar
                : void 0),
            a = t.length - 1,
            u = 0;
          u < a;
          u++
        ) {
          var s = i(t[u], t[u + 1])
          if (e) {
            var c = Array.isArray(e) ? e[u] : e
            s = Dn(c, s)
          }
          o.push(s)
        }
        return o
      }
      function Tr(t, e, n) {
        var r = void 0 === n ? {} : n,
          o = r.clamp,
          i = void 0 === o || o,
          a = r.ease,
          u = r.mixer,
          s = t.length
        e.length,
          !a || !Array.isArray(a) || a.length,
          t[0] > t[s - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse())
        var c = wr(e, a, u),
          l =
            2 === s
              ? (function (t, e) {
                  var n = t[0],
                    r = t[1],
                    o = e[0]
                  return function (t) {
                    return o(Gn(n, r, t))
                  }
                })(t, c)
              : (function (t, e) {
                  var n = t.length,
                    r = n - 1
                  return function (o) {
                    var i = 0,
                      a = !1
                    if (
                      (o <= t[0]
                        ? (a = !0)
                        : o >= t[r] && ((i = r - 1), (a = !0)),
                      !a)
                    ) {
                      for (var u = 1; u < n && !(t[u] > o || u === r); u++);
                      i = u - 1
                    }
                    var s = Gn(t[i], t[i + 1], o)
                    return e[i](s)
                  }
                })(t, c)
        return i
          ? function (e) {
              return l(Un(t[0], t[s - 1], e))
            }
          : l
      }
      var Pr,
        Sr = function (t) {
          return function (e) {
            return 1 - t(1 - e)
          }
        },
        Cr = function (t) {
          return function (e) {
            return e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          }
        },
        kr = function (t) {
          return function (e) {
            return e * e * ((t + 1) * e - t)
          }
        },
        Mr = function (t) {
          return t
        },
        Or =
          ((Pr = 2),
          function (t) {
            return Math.pow(t, Pr)
          }),
        Rr = Sr(Or),
        Lr = Cr(Or),
        jr = function (t) {
          return 1 - Math.sin(Math.acos(t))
        },
        Vr = Sr(jr),
        Dr = Cr(Vr),
        Br = kr(1.525),
        Ir = Sr(Br),
        Nr = Cr(Br),
        Ur = (function (t) {
          var e = kr(t)
          return function (t) {
            return (t *= 2) < 1
              ? 0.5 * e(t)
              : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))
          }
        })(1.525),
        Fr = function (t) {
          if (1 === t || 0 === t) return t
          var e = t * t
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72
        },
        Hr = Sr(Fr)
      function Yr(t, e) {
        return t
          .map(function () {
            return e || Lr
          })
          .splice(0, t.length - 1)
      }
      function Xr(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          r = t.to,
          o = void 0 === r ? 1 : r,
          i = t.ease,
          a = t.offset,
          u = t.duration,
          s = void 0 === u ? 300 : u,
          c = { done: !1, value: n },
          l = Array.isArray(o) ? o : [n, o],
          f = (function (t, e) {
            return t.map(function (t) {
              return t * e
            })
          })(
            a && a.length === l.length
              ? a
              : (function (t) {
                  var e = t.length
                  return t.map(function (t, n) {
                    return 0 !== n ? n / (e - 1) : 0
                  })
                })(l),
            s
          )
        function d() {
          return Tr(f, l, { ease: Array.isArray(i) ? i : Yr(l, i) })
        }
        var p = d()
        return {
          next: function (t) {
            return (c.value = p(t)), (c.done = t >= s), c
          },
          flipTarget: function () {
            l.reverse(), (p = d())
          }
        }
      }
      var zr = {
        keyframes: Xr,
        spring: Qn,
        decay: function (t) {
          var e = t.velocity,
            n = void 0 === e ? 0 : e,
            r = t.from,
            o = void 0 === r ? 0 : r,
            i = t.power,
            a = void 0 === i ? 0.8 : i,
            u = t.timeConstant,
            s = void 0 === u ? 350 : u,
            c = t.restDelta,
            l = void 0 === c ? 0.5 : c,
            f = t.modifyTarget,
            d = { done: !1, value: o },
            p = a * n,
            v = o + p,
            m = void 0 === f ? v : f(v)
          return (
            m !== v && (p = m - o),
            {
              next: function (t) {
                var e = -p * Math.exp(-t / s)
                return (
                  (d.done = !(e > l || e < -l)),
                  (d.value = d.done ? m : m + e),
                  d
                )
              },
              flipTarget: function () {}
            }
          )
        }
      }
      var Wr = (1 / 60) * 1e3,
        Qr =
          'undefined' != typeof performance
            ? function () {
                return performance.now()
              }
            : function () {
                return Date.now()
              },
        qr =
          'undefined' != typeof window
            ? function (t) {
                return window.requestAnimationFrame(t)
              }
            : function (t) {
                return setTimeout(function () {
                  return t(Qr())
                }, Wr)
              }
      var Gr = !0,
        Zr = !1,
        Kr = !1,
        _r = { delta: 0, timestamp: 0 },
        Jr = ['read', 'update', 'preRender', 'render', 'postRender'],
        $r = Jr.reduce(function (t, e) {
          return (
            (t[e] = (function (t) {
              var e = [],
                n = [],
                r = 0,
                o = !1,
                i = new WeakSet(),
                a = {
                  schedule: function (t, a, u) {
                    void 0 === a && (a = !1), void 0 === u && (u = !1)
                    var s = u && o,
                      c = s ? e : n
                    return (
                      a && i.add(t),
                      -1 === c.indexOf(t) &&
                        (c.push(t), s && o && (r = e.length)),
                      t
                    )
                  },
                  cancel: function (t) {
                    var e = n.indexOf(t)
                    ;-1 !== e && n.splice(e, 1), i.delete(t)
                  },
                  process: function (u) {
                    var s
                    if (
                      ((o = !0),
                      (e = (s = [n, e])[0]),
                      ((n = s[1]).length = 0),
                      (r = e.length))
                    )
                      for (var c = 0; c < r; c++) {
                        var l = e[c]
                        l(u), i.has(l) && (a.schedule(l), t())
                      }
                    o = !1
                  }
                }
              return a
            })(function () {
              return (Zr = !0)
            })),
            t
          )
        }, {}),
        to = Jr.reduce(function (t, e) {
          var n = $r[e]
          return (
            (t[e] = function (t, e, r) {
              return (
                void 0 === e && (e = !1),
                void 0 === r && (r = !1),
                Zr || io(),
                n.schedule(t, e, r)
              )
            }),
            t
          )
        }, {}),
        eo = Jr.reduce(function (t, e) {
          return (t[e] = $r[e].cancel), t
        }, {}),
        no = Jr.reduce(function (t, e) {
          return (
            (t[e] = function () {
              return $r[e].process(_r)
            }),
            t
          )
        }, {}),
        ro = function (t) {
          return $r[t].process(_r)
        },
        oo = function t(e) {
          ;(Zr = !1),
            (_r.delta = Gr ? Wr : Math.max(Math.min(e - _r.timestamp, 40), 1)),
            (_r.timestamp = e),
            (Kr = !0),
            Jr.forEach(ro),
            (Kr = !1),
            Zr && ((Gr = !1), qr(t))
        },
        io = function () {
          ;(Zr = !0), (Gr = !0), Kr || qr(oo)
        },
        ao = function () {
          return _r
        },
        uo = to
      function so(t, e, n) {
        return void 0 === n && (n = 0), t - e - n
      }
      var co = function (t) {
        var e = function (e) {
          var n = e.delta
          return t(n)
        }
        return {
          start: function () {
            return uo.update(e, !0)
          },
          stop: function () {
            return eo.update(e)
          }
        }
      }
      function lo(t) {
        var e,
          n,
          r,
          o,
          i,
          a = t.from,
          u = t.autoplay,
          s = void 0 === u || u,
          c = t.driver,
          l = void 0 === c ? co : c,
          f = t.elapsed,
          d = void 0 === f ? 0 : f,
          p = t.repeat,
          v = void 0 === p ? 0 : p,
          m = t.repeatType,
          h = void 0 === m ? 'loop' : m,
          y = t.repeatDelay,
          g = void 0 === y ? 0 : y,
          A = t.onPlay,
          x = t.onStop,
          b = t.onComplete,
          E = t.onRepeat,
          w = t.onUpdate,
          T = bt(t, [
            'from',
            'autoplay',
            'driver',
            'elapsed',
            'repeat',
            'repeatType',
            'repeatDelay',
            'onPlay',
            'onStop',
            'onComplete',
            'onRepeat',
            'onUpdate'
          ]),
          P = T.to,
          S = 0,
          C = T.duration,
          k = !1,
          M = !0,
          O = (function (t) {
            if (Array.isArray(t.to)) return Xr
            if (zr[t.type]) return zr[t.type]
            var e = new Set(Object.keys(t))
            return e.has('ease') ||
              (e.has('duration') && !e.has('dampingRatio'))
              ? Xr
              : e.has('dampingRatio') ||
                e.has('stiffness') ||
                e.has('mass') ||
                e.has('damping') ||
                e.has('restSpeed') ||
                e.has('restDelta')
              ? Qn
              : Xr
          })(T)
        ;(null === (n = (e = O).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, a, P)) &&
          ((i = Tr([0, 100], [a, P], { clamp: !1 })), (a = 0), (P = 100))
        var R = O(xt(xt({}, T), { from: a, to: P }))
        function L() {
          S++,
            'reverse' === h
              ? (d = (function (t, e, n, r) {
                  return (
                    void 0 === n && (n = 0),
                    void 0 === r && (r = !0),
                    r ? so(e + -t, e, n) : e - (t - e) + n
                  )
                })(d, C, g, (M = S % 2 == 0)))
              : ((d = so(d, C, g)), 'mirror' === h && R.flipTarget()),
            (k = !1),
            E && E()
        }
        function j(t) {
          if ((M || (t = -t), (d += t), !k)) {
            var e = R.next(Math.max(0, d))
            ;(o = e.value), i && (o = i(o)), (k = M ? e.done : d <= 0)
          }
          null == w || w(o),
            k &&
              (0 === S && (null != C || (C = d)),
              S < v
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n
                  })(d, C, g, M) && L()
                : (r.stop(), b && b()))
        }
        return (
          s && (null == A || A(), (r = l(j)).start()),
          {
            stop: function () {
              null == x || x(), r.stop()
            }
          }
        )
      }
      function fo(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      var po = function (t) {
          return 1e3 * t
        },
        vo = function (t, e) {
          return 1 - 3 * e + 3 * t
        },
        mo = function (t, e) {
          return 3 * e - 6 * t
        },
        ho = function (t) {
          return 3 * t
        },
        yo = function (t, e, n) {
          return ((vo(e, n) * t + mo(e, n)) * t + ho(e)) * t
        },
        go = function (t, e, n) {
          return 3 * vo(e, n) * t * t + 2 * mo(e, n) * t + ho(e)
        }
      var Ao = 0.1
      function xo(t, e, n, r) {
        if (t === e && n === r) return Mr
        for (var o = new Float32Array(11), i = 0; i < 11; ++i)
          o[i] = yo(i * Ao, t, n)
        function a(e) {
          for (var r = 0, i = 1; 10 !== i && o[i] <= e; ++i) r += Ao
          --i
          var a = r + ((e - o[i]) / (o[i + 1] - o[i])) * Ao,
            u = go(a, t, n)
          return u >= 0.001
            ? (function (t, e, n, r) {
                for (var o = 0; o < 8; ++o) {
                  var i = go(e, n, r)
                  if (0 === i) return e
                  e -= (yo(e, n, r) - t) / i
                }
                return e
              })(e, a, t, n)
            : 0 === u
            ? a
            : (function (t, e, n, r, o) {
                var i,
                  a,
                  u = 0
                do {
                  ;(i = yo((a = e + (n - e) / 2), r, o) - t) > 0
                    ? (n = a)
                    : (e = a)
                } while (Math.abs(i) > 1e-7 && ++u < 10)
                return a
              })(e, r, r + Ao, t, n)
        }
        return function (t) {
          return 0 === t || 1 === t ? t : yo(a(t), e, r)
        }
      }
      var bo = {
          linear: Mr,
          easeIn: Or,
          easeInOut: Lr,
          easeOut: Rr,
          circIn: jr,
          circInOut: Dr,
          circOut: Vr,
          backIn: Br,
          backInOut: Nr,
          backOut: Ir,
          anticipate: Ur,
          bounceIn: Hr,
          bounceInOut: function (t) {
            return t < 0.5
              ? 0.5 * (1 - Fr(1 - 2 * t))
              : 0.5 * Fr(2 * t - 1) + 0.5
          },
          bounceOut: Fr
        },
        Eo = function (t) {
          if (Array.isArray(t)) {
            t.length
            var e = Et(t, 4)
            return xo(e[0], e[1], e[2], e[3])
          }
          return 'string' == typeof t ? bo[t] : t
        },
        wo = function (t, e) {
          return (
            'zIndex' !== t &&
            (!('number' != typeof e && !Array.isArray(e)) ||
              !('string' != typeof e || !mr.test(e) || e.startsWith('url(')))
          )
        },
        To = function () {
          return {
            type: 'spring',
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10
          }
        },
        Po = function (t) {
          return {
            type: 'spring',
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restDelta: 0.01,
            restSpeed: 10
          }
        },
        So = function () {
          return { type: 'keyframes', ease: 'linear', duration: 0.3 }
        },
        Co = function (t) {
          return { type: 'keyframes', duration: 0.8, values: t }
        },
        ko = {
          x: To,
          y: To,
          z: To,
          rotate: To,
          rotateX: To,
          rotateY: To,
          rotateZ: To,
          scaleX: Po,
          scaleY: Po,
          scale: Po,
          opacity: So,
          backgroundColor: So,
          color: So,
          default: Po
        },
        Mo = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
      function Oo(t) {
        var e = t.slice(0, -1).split('('),
          n = e[0],
          r = e[1]
        if ('drop-shadow' === n) return t
        var o = (r.match(he) || [])[0]
        if (!o) return t
        var i = r.replace(o, ''),
          a = Mo.has(n) ? 1 : 0
        return o !== r && (a *= 100), n + '(' + a + i + ')'
      }
      var Ro = /([a-z-]*)\(.*?\)/g,
        Lo = xt(xt({}, mr), {
          getAnimatableNone: function (t) {
            var e = t.match(Ro)
            return e ? e.map(Oo).join(' ') : t
          }
        }),
        jo = xt(xt({}, Re), {
          color: sr,
          backgroundColor: sr,
          outlineColor: sr,
          fill: sr,
          stroke: sr,
          borderColor: sr,
          borderTopColor: sr,
          borderRightColor: sr,
          borderBottomColor: sr,
          borderLeftColor: sr,
          filter: Lo,
          WebkitFilter: Lo
        }),
        Vo = function (t) {
          return jo[t]
        }
      function Do(t, e) {
        var n,
          r = Vo(t)
        return (
          r !== Lo && (r = mr),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        )
      }
      function Bo(t) {
        var e = t.ease,
          n = t.times,
          r = t.yoyo,
          o = t.flip,
          i = t.loop,
          a = bt(t, ['ease', 'times', 'yoyo', 'flip', 'loop']),
          u = xt({}, a)
        return (
          n && (u.offset = n),
          a.duration && (u.duration = po(a.duration)),
          a.repeatDelay && (u.repeatDelay = po(a.repeatDelay)),
          e &&
            (u.ease = (function (t) {
              return Array.isArray(t) && 'number' != typeof t[0]
            })(e)
              ? e.map(Eo)
              : Eo(e)),
          'tween' === a.type && (u.type = 'keyframes'),
          (r || i || o) &&
            (!0,
            r
              ? (u.repeatType = 'reverse')
              : i
              ? (u.repeatType = 'loop')
              : o && (u.repeatType = 'mirror'),
            (u.repeat = i || r || o || a.repeat)),
          'spring' !== a.type && (u.type = 'keyframes'),
          u
        )
      }
      function Io(t, e, n) {
        var r, o, i, a
        return (
          Array.isArray(e.to) &&
            ((null !== (r = t.duration) && void 0 !== r) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = wt([], Et(t.to))), (t.to[0] = t.from))
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from
            var e = bt(t, [
              'when',
              'delay',
              'delayChildren',
              'staggerChildren',
              'staggerDirection',
              'repeat',
              'repeatType',
              'repeatDelay',
              'from'
            ])
            return !!Object.keys(e).length
          })(t) ||
            (t = xt(
              xt({}, t),
              ((o = n),
              (i = e.to),
              (a = rn(i) ? Co : ko[o] || ko.default),
              xt({ to: i }, a(i)))
            )),
          xt(xt({}, e), Bo(t))
        )
      }
      function No(t, e, n, r, o) {
        var i,
          a = Ho(r, t),
          u = null !== (i = a.from) && void 0 !== i ? i : e.get(),
          s = wo(t, n)
        'none' === u && s && 'string' == typeof n
          ? (u = Do(t, n))
          : Uo(u) && 'string' == typeof n
          ? (u = Fo(n))
          : !Array.isArray(n) && Uo(n) && 'string' == typeof u && (n = Fo(u))
        var c = wo(t, u)
        return c && s && !1 !== a.type
          ? function () {
              var r = {
                from: u,
                to: n,
                velocity: e.getVelocity(),
                onComplete: o,
                onUpdate: function (t) {
                  return e.set(t)
                }
              }
              return 'inertia' === a.type || 'decay' === a.type
                ? (function (t) {
                    var e,
                      n = t.from,
                      r = void 0 === n ? 0 : n,
                      o = t.velocity,
                      i = void 0 === o ? 0 : o,
                      a = t.min,
                      u = t.max,
                      s = t.power,
                      c = void 0 === s ? 0.8 : s,
                      l = t.timeConstant,
                      f = void 0 === l ? 750 : l,
                      d = t.bounceStiffness,
                      p = void 0 === d ? 500 : d,
                      v = t.bounceDamping,
                      m = void 0 === v ? 10 : v,
                      h = t.restDelta,
                      y = void 0 === h ? 1 : h,
                      g = t.modifyTarget,
                      A = t.driver,
                      x = t.onUpdate,
                      b = t.onComplete
                    function E(t) {
                      return (void 0 !== a && t < a) || (void 0 !== u && t > u)
                    }
                    function w(t) {
                      return void 0 === a
                        ? u
                        : void 0 === u || Math.abs(a - t) < Math.abs(u - t)
                        ? a
                        : u
                    }
                    function T(t) {
                      null == e || e.stop(),
                        (e = lo(
                          xt(xt({}, t), {
                            driver: A,
                            onUpdate: function (e) {
                              var n
                              null == x || x(e),
                                null === (n = t.onUpdate) ||
                                  void 0 === n ||
                                  n.call(t, e)
                            },
                            onComplete: b
                          })
                        ))
                    }
                    function P(t) {
                      T(
                        xt(
                          {
                            type: 'spring',
                            stiffness: p,
                            damping: m,
                            restDelta: y
                          },
                          t
                        )
                      )
                    }
                    if (E(r)) P({ from: r, velocity: i, to: w(r) })
                    else {
                      var S = c * i + r
                      void 0 !== g && (S = g(S))
                      var C,
                        k,
                        M = w(S),
                        O = M === a ? -1 : 1
                      T({
                        type: 'decay',
                        from: r,
                        velocity: i,
                        timeConstant: f,
                        power: c,
                        restDelta: y,
                        modifyTarget: g,
                        onUpdate: E(S)
                          ? function (t) {
                              ;(C = k),
                                (k = t),
                                (i = fo(t - C, ao().delta)),
                                ((1 === O && t > M) || (-1 === O && t < M)) &&
                                  P({ from: t, to: M, velocity: i })
                            }
                          : void 0
                      })
                    }
                    return {
                      stop: function () {
                        return null == e ? void 0 : e.stop()
                      }
                    }
                  })(xt(xt({}, r), a))
                : lo(
                    xt(xt({}, Io(a, r, t)), {
                      onUpdate: function (t) {
                        var e
                        r.onUpdate(t),
                          null === (e = a.onUpdate) ||
                            void 0 === e ||
                            e.call(a, t)
                      },
                      onComplete: function () {
                        var t
                        r.onComplete(),
                          null === (t = a.onComplete) ||
                            void 0 === t ||
                            t.call(a)
                      }
                    })
                  )
            }
          : function () {
              var t
              return (
                e.set(n),
                o(),
                null === (t = null == a ? void 0 : a.onComplete) ||
                  void 0 === t ||
                  t.call(a),
                { stop: function () {} }
              )
            }
      }
      function Uo(t) {
        return (
          0 === t ||
          ('string' == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(' '))
        )
      }
      function Fo(t) {
        return 'number' == typeof t ? 0 : Do('', t)
      }
      function Ho(t, e) {
        return t[e] || t.default || t
      }
      function Yo(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          e.start(function (o) {
            var i,
              a,
              u = No(t, e, n, r, o),
              s = (function (t, e) {
                var n
                return null !== (n = (Ho(t, e) || {}).delay) && void 0 !== n
                  ? n
                  : 0
              })(r, t),
              c = function () {
                return (a = u())
              }
            return (
              s ? (i = setTimeout(c, po(s))) : c(),
              function () {
                clearTimeout(i), null == a || a.stop()
              }
            )
          })
        )
      }
      function Xo(t, e) {
        ;-1 === t.indexOf(e) && t.push(e)
      }
      function zo(t, e) {
        var n = t.indexOf(e)
        n > -1 && t.splice(n, 1)
      }
      var Wo = (function () {
          function t() {
            this.subscriptions = []
          }
          return (
            (t.prototype.add = function (t) {
              var e = this
              return (
                Xo(this.subscriptions, t),
                function () {
                  return zo(e.subscriptions, t)
                }
              )
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length
              if (r)
                if (1 === r) this.subscriptions[0](t, e, n)
                else
                  for (var o = 0; o < r; o++) {
                    var i = this.subscriptions[o]
                    i && i(t, e, n)
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0
            }),
            t
          )
        })(),
        Qo = (function () {
          function t(t) {
            var e,
              n = this
            ;(this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new Wo()),
              (this.velocityUpdateSubscribers = new Wo()),
              (this.renderSubscribers = new Wo()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t)
                var r = ao(),
                  o = r.delta,
                  i = r.timestamp
                n.lastUpdated !== i &&
                  ((n.timeDelta = o),
                  (n.lastUpdated = i),
                  uo.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current)
              }),
              (this.scheduleVelocityCheck = function () {
                return uo.postRender(n.velocityCheck)
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()))
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))))
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t)
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear()
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t)
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e)
            }),
            (t.prototype.get = function () {
              return this.current
            }),
            (t.prototype.getPrevious = function () {
              return this.prev
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? fo(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0
            }),
            (t.prototype.start = function (t) {
              var e = this
              return (
                this.stop(),
                new Promise(function (n) {
                  ;(e.hasAnimated = !0), (e.stopAnimation = t(n))
                }).then(function () {
                  return e.clearAnimation()
                })
              )
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation()
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop()
            }),
            t
          )
        })()
      function qo(t) {
        return new Qo(t)
      }
      var Go = function (t) {
          return function (e) {
            return e.test(t)
          }
        },
        Zo = [
          Ce,
          we,
          Ee,
          be,
          Pe,
          Te,
          {
            test: function (t) {
              return 'auto' === t
            },
            parse: function (t) {
              return t
            }
          }
        ],
        Ko = function (t) {
          return Zo.find(Go(t))
        },
        _o = wt(wt([], Et(Zo)), [sr, mr]),
        Jo = function (t) {
          return _o.find(Go(t))
        }
      function $o(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, qo(n))
      }
      function ti(t, e) {
        var n = Qt(t, e),
          r = n ? t.makeTargetAnimatable(n, !1) : {},
          o = r.transitionEnd,
          i = void 0 === o ? {} : o
        r.transition
        var a,
          u = bt(r, ['transitionEnd', 'transition'])
        for (var s in (u = xt(xt({}, u), i))) {
          $o(t, s, ((a = u[s]), rn(a) ? a[a.length - 1] || 0 : a))
        }
      }
      function ei(t, e) {
        if (e) return (e[t] || e.default || e).from
      }
      function ni(t, e, n) {
        var r
        void 0 === n && (n = {})
        var o = Qt(t, e, n.custom),
          i = (o || {}).transition,
          a = void 0 === i ? t.getDefaultTransition() || {} : i
        n.transitionOverride && (a = n.transitionOverride)
        var u = o
            ? function () {
                return ri(t, o, n)
              }
            : function () {
                return Promise.resolve()
              },
          s = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0)
                var o = a.delayChildren,
                  i = void 0 === o ? 0 : o,
                  u = a.staggerChildren,
                  s = a.staggerDirection
                return (function (t, e, n, r, o, i) {
                  void 0 === n && (n = 0)
                  void 0 === r && (r = 0)
                  void 0 === o && (o = 1)
                  var a = [],
                    u = (t.variantChildren.size - 1) * r,
                    s =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * r
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), u - t * r
                          }
                  return (
                    Array.from(t.variantChildren)
                      .sort(oi)
                      .forEach(function (t, r) {
                        a.push(
                          ni(t, e, xt(xt({}, i), { delay: n + s(r) })).then(
                            function () {
                              return t.notifyAnimationComplete(e)
                            }
                          )
                        )
                      }),
                    Promise.all(a)
                  )
                })(t, e, i + r, u, s, n)
              }
            : function () {
                return Promise.resolve()
              },
          c = a.when
        if (c) {
          var l = Et('beforeChildren' === c ? [u, s] : [s, u], 2),
            f = l[0],
            d = l[1]
          return f().then(d)
        }
        return Promise.all([u(), s(n.delay)])
      }
      function ri(t, e, n) {
        var r,
          o = void 0 === n ? {} : n,
          i = o.delay,
          a = void 0 === i ? 0 : i,
          u = o.transitionOverride,
          s = o.type,
          c = t.makeTargetAnimatable(e),
          l = c.transition,
          f = void 0 === l ? t.getDefaultTransition() : l,
          d = c.transitionEnd,
          p = bt(c, ['transition', 'transitionEnd'])
        u && (f = u)
        var v = [],
          m =
            s &&
            (null === (r = t.animationState) || void 0 === r
              ? void 0
              : r.getState()[s])
        for (var h in p) {
          var y = t.getValue(h),
            g = p[h]
          if (!(!y || void 0 === g || (m && ii(m, h)))) {
            var A = Yo(h, y, g, xt({ delay: a }, f))
            v.push(A)
          }
        }
        return Promise.all(v).then(function () {
          d && ti(t, d)
        })
      }
      function oi(t, e) {
        return t.sortNodePosition(e)
      }
      function ii(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          o = n.hasOwnProperty(e) && !0 !== r[e]
        return (r[e] = !1), o
      }
      var ai = [ln.Animate, ln.Hover, ln.Tap, ln.Drag, ln.Focus, ln.Exit],
        ui = wt([], Et(ai)).reverse(),
        si = ai.length
      function ci(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options
              return (function (t, e, n) {
                var r
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(),
                  Array.isArray(e))
                ) {
                  var o = e.map(function (e) {
                    return ni(t, e, n)
                  })
                  r = Promise.all(o)
                } else if ('string' == typeof e) r = ni(t, e, n)
                else {
                  var i = 'function' == typeof e ? Qt(t, e, n.custom) : e
                  r = ri(t, i, n)
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e)
                })
              })(t, n, r)
            })
          )
        }
      }
      function li(t) {
        var e,
          n = ci(t),
          r =
            (((e = {})[ln.Animate] = fi(!0)),
            (e[ln.Hover] = fi()),
            (e[ln.Tap] = fi()),
            (e[ln.Drag] = fi()),
            (e[ln.Focus] = fi()),
            (e[ln.Exit] = fi()),
            e),
          o = {},
          i = !0,
          a = function (e, n) {
            var r = Qt(t, n)
            if (r) {
              r.transition
              var o = r.transitionEnd,
                i = bt(r, ['transition', 'transitionEnd'])
              e = xt(xt(xt({}, e), i), o)
            }
            return e
          }
        function u(e, u) {
          for (
            var s,
              c = t.getProps(),
              l = t.getVariantContext(!0) || {},
              f = [],
              d = new Set(),
              p = {},
              v = 1 / 0,
              m = function (n) {
                var o = ui[n],
                  m = r[o],
                  h = null !== (s = c[o]) && void 0 !== s ? s : l[o],
                  y = zt(h),
                  g = o === u ? m.isActive : null
                !1 === g && (v = n)
                var A = h === l[o] && h !== c[o] && y
                if (
                  (A && i && t.manuallyAnimateOnMount && (A = !1),
                  (m.protectedKeys = xt({}, p)),
                  (!m.isActive && null === g) ||
                    (!h && !m.prevProp) ||
                    nn(h) ||
                    'boolean' == typeof h)
                )
                  return 'continue'
                var x =
                    (function (t, e) {
                      if ('string' == typeof e) return e !== t
                      if (Xt(e)) return !Nn(e, t)
                      return !1
                    })(m.prevProp, h) ||
                    (o === u && m.isActive && !A && y) ||
                    (n > v && y),
                  b = Array.isArray(h) ? h : [h],
                  E = b.reduce(a, {})
                !1 === g && (E = {})
                var w = m.prevResolvedValues,
                  T = void 0 === w ? {} : w,
                  P = xt(xt({}, T), E),
                  S = function (t) {
                    ;(x = !0), d.delete(t), (m.needsAnimating[t] = !0)
                  }
                for (var C in P) {
                  var k = E[C],
                    M = T[C]
                  p.hasOwnProperty(C) ||
                    (k !== M
                      ? rn(k) && rn(M)
                        ? Nn(k, M)
                          ? (m.protectedKeys[C] = !0)
                          : S(C)
                        : void 0 !== k
                        ? S(C)
                        : d.add(C)
                      : void 0 !== k && d.has(C)
                      ? S(C)
                      : (m.protectedKeys[C] = !0))
                }
                ;(m.prevProp = h),
                  (m.prevResolvedValues = E),
                  m.isActive && (p = xt(xt({}, p), E)),
                  i && t.blockInitialAnimation && (x = !1),
                  x &&
                    !A &&
                    f.push.apply(
                      f,
                      wt(
                        [],
                        Et(
                          b.map(function (t) {
                            return { animation: t, options: xt({ type: o }, e) }
                          })
                        )
                      )
                    )
              },
              h = 0;
            h < si;
            h++
          )
            m(h)
          if (((o = xt({}, p)), d.size)) {
            var y = {}
            d.forEach(function (e) {
              var n = t.getBaseTarget(e)
              void 0 !== n && (y[e] = n)
            }),
              f.push({ animation: y })
          }
          var g = Boolean(f.length)
          return (
            i && !1 === c.initial && !t.manuallyAnimateOnMount && (g = !1),
            (i = !1),
            g ? n(f) : Promise.resolve()
          )
        }
        return {
          isAnimated: function (t) {
            return void 0 !== o[t]
          },
          animateChanges: u,
          setActive: function (e, n, o) {
            var i
            return r[e].isActive === n
              ? Promise.resolve()
              : (null === (i = t.variantChildren) ||
                  void 0 === i ||
                  i.forEach(function (t) {
                    var r
                    return null === (r = t.animationState) || void 0 === r
                      ? void 0
                      : r.setActive(e, n)
                  }),
                (r[e].isActive = n),
                u(o, e))
          },
          setAnimateFunction: function (e) {
            n = e(t)
          },
          getState: function () {
            return r
          }
        }
      }
      function fi(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
          }
        )
      }
      var di = {
          animation: Bn(function (t) {
            var e = t.visualElement,
              n = t.animate
            e.animationState || (e.animationState = li(e)),
              nn(n) &&
                (0, u.useEffect)(
                  function () {
                    return n.subscribe(e)
                  },
                  [n]
                )
          }),
          exit: Bn(function (t) {
            var e = t.custom,
              n = t.visualElement,
              r = Et(jt(), 2),
              o = r[0],
              i = r[1],
              a = (0, u.useContext)(Rt)
            ;(0, u.useEffect)(
              function () {
                var t,
                  r,
                  u =
                    null === (t = n.animationState) || void 0 === t
                      ? void 0
                      : t.setActive(ln.Exit, !o, {
                          custom:
                            null !== (r = null == a ? void 0 : a.custom) &&
                            void 0 !== r
                              ? r
                              : e
                        })
                !o && (null == u || u.then(i))
              },
              [o]
            )
          })
        },
        pi = function (t) {
          return t.hasOwnProperty('x') && t.hasOwnProperty('y')
        },
        vi = function (t) {
          return pi(t) && t.hasOwnProperty('z')
        },
        mi = function (t, e) {
          return Math.abs(t - e)
        }
      function hi(t, e) {
        if (hr(t) && hr(e)) return mi(t, e)
        if (pi(t) && pi(e)) {
          var n = mi(t.x, e.x),
            r = mi(t.y, e.y),
            o = vi(t) && vi(e) ? mi(t.z, e.z) : 0
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
        }
      }
      var yi = (function () {
        function t(t, e, n) {
          var r = this,
            o = (void 0 === n ? {} : n).transformPagePoint
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var t = xi(r.lastMoveEventInfo, r.history),
                  e = null !== r.startEvent,
                  n = hi(t.offset, { x: 0, y: 0 }) >= 3
                if (e || n) {
                  var o = t.point,
                    i = ao().timestamp
                  r.history.push(xt(xt({}, o), { timestamp: i }))
                  var a = r.handlers,
                    u = a.onStart,
                    s = a.onMove
                  e ||
                    (u && u(r.lastMoveEvent, t),
                    (r.startEvent = r.lastMoveEvent)),
                    s && s(r.lastMoveEvent, t)
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              ;(r.lastMoveEvent = t),
                (r.lastMoveEventInfo = gi(e, r.transformPagePoint)),
                vn(t) && 0 === t.buttons
                  ? r.handlePointerUp(t, e)
                  : uo.update(r.updatePoint, !0)
            }),
            (this.handlePointerUp = function (t, e) {
              r.end()
              var n = r.handlers,
                o = n.onEnd,
                i = n.onSessionEnd,
                a = xi(gi(e, r.transformPagePoint), r.history)
              r.startEvent && o && o(t, a), i && i(t, a)
            }),
            !(mn(t) && t.touches.length > 1))
          ) {
            ;(this.handlers = e), (this.transformPagePoint = o)
            var i = gi(An(t), this.transformPagePoint),
              a = i.point,
              u = ao().timestamp
            this.history = [xt(xt({}, a), { timestamp: u })]
            var s = e.onSessionStart
            s && s(t, xi(i, this.history)),
              (this.removeListeners = Dn(
                Tn(window, 'pointermove', this.handlePointerMove),
                Tn(window, 'pointerup', this.handlePointerUp),
                Tn(window, 'pointercancel', this.handlePointerUp)
              ))
          }
        }
        return (
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              eo.update(this.updatePoint)
          }),
          t
        )
      })()
      function gi(t, e) {
        return e ? { point: e(t.point) } : t
      }
      function Ai(t, e) {
        return { x: t.x - e.x, y: t.y - e.y }
      }
      function xi(t, e) {
        var n = t.point
        return {
          point: n,
          delta: Ai(n, Ei(e)),
          offset: Ai(n, bi(e)),
          velocity: wi(e, 0.1)
        }
      }
      function bi(t) {
        return t[0]
      }
      function Ei(t) {
        return t[t.length - 1]
      }
      function wi(t, e) {
        if (t.length < 2) return { x: 0, y: 0 }
        for (
          var n = t.length - 1, r = null, o = Ei(t);
          n >= 0 && ((r = t[n]), !(o.timestamp - r.timestamp > po(e)));

        )
          n--
        if (!r) return { x: 0, y: 0 }
        var i = (o.timestamp - r.timestamp) / 1e3
        if (0 === i) return { x: 0, y: 0 }
        var a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i }
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
      }
      function Ti(t) {
        return t
      }
      function Pi(t) {
        var e = t.top
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom }
        }
      }
      var Si = { translate: 0, scale: 1, origin: 0, originPoint: 0 }
      function Ci() {
        return { x: xt({}, Si), y: xt({}, Si) }
      }
      function ki(t) {
        return [t('x'), t('y')]
      }
      function Mi(t, e, n) {
        var r = e.min,
          o = e.max
        return (
          void 0 !== r && t < r
            ? (t = n ? Zn(r, t, n.min) : Math.max(t, r))
            : void 0 !== o &&
              t > o &&
              (t = n ? Zn(o, t, n.max) : Math.min(t, o)),
          t
        )
      }
      function Oi(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }
      function Ri(t, e) {
        var n,
          r = e.min - t.min,
          o = e.max - t.max
        return (
          e.max - e.min < t.max - t.min &&
            ((r = (n = Et([o, r], 2))[0]), (o = n[1])),
          { min: t.min + r, max: t.min + o }
        )
      }
      function Li(t, e, n) {
        return { min: ji(t, e), max: ji(t, n) }
      }
      function ji(t, e) {
        var n
        return 'number' == typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0
      }
      function Vi(t, e) {
        return Pi(
          (function (t, e) {
            var n = t.top,
              r = t.left,
              o = t.bottom,
              i = t.right
            void 0 === e && (e = Ti)
            var a = e({ x: r, y: n }),
              u = e({ x: i, y: o })
            return { top: a.y, left: a.x, bottom: u.y, right: u.x }
          })(t.getBoundingClientRect(), e)
        )
      }
      function Di(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = 0.01), hi(t, e) < n
      }
      function Bi(t) {
        return t.max - t.min
      }
      function Ii(t, e) {
        var n = 0.5,
          r = Bi(t),
          o = Bi(e)
        return (
          o > r
            ? (n = Gn(e.min, e.max - r, t.min))
            : r > o && (n = Gn(t.min, t.max - o, e.min)),
          Un(0, 1, n)
        )
      }
      function Ni(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = Zn(e.min, e.max, t.origin)),
          (t.scale = Bi(n) / Bi(e)),
          Di(t.scale, 1, 1e-4) && (t.scale = 1),
          (t.translate = Zn(n.min, n.max, t.origin) - t.originPoint),
          Di(t.translate) && (t.translate = 0)
      }
      function Ui(t, e, n, r) {
        Ni(t.x, e.x, n.x, Fi(r.originX)), Ni(t.y, e.y, n.y, Fi(r.originY))
      }
      function Fi(t) {
        return 'number' == typeof t ? t : 0.5
      }
      function Hi(t, e, n) {
        ;(t.min = n.min + e.min), (t.max = t.min + Bi(e))
      }
      var Yi = function (t, e) {
        return t.depth - e.depth
      }
      function Xi(t) {
        return t.projection.isEnabled || t.shouldResetTransform()
      }
      function zi(t, e) {
        void 0 === e && (e = [])
        var n = t.parent
        return n && zi(n, e), Xi(t) && e.push(t), e
      }
      function Wi(t) {
        if (!t.shouldResetTransform()) {
          var e,
            n = t.getLayoutState()
          t.notifyBeforeLayoutMeasure(n.layout),
            (n.isHydrated = !0),
            (n.layout = t.measureViewportBox()),
            (n.layoutCorrected =
              ((e = n.layout), { x: xt({}, e.x), y: xt({}, e.y) })),
            t.notifyLayoutMeasure(n.layout, t.prevViewportBox || n.layout),
            uo.update(function () {
              return t.rebaseProjectionTarget()
            })
        }
      }
      function Qi(t, e) {
        return { min: e.min - t.min, max: e.max - t.min }
      }
      function qi(t, e) {
        return { x: Qi(t.x, e.x), y: Qi(t.y, e.y) }
      }
      function Gi(t, e) {
        var n = t.getLayoutId(),
          r = e.getLayoutId()
        return n !== r || (void 0 === r && t !== e)
      }
      function Zi(t) {
        var e = t.getProps(),
          n = e.drag,
          r = e._dragX
        return n && !r
      }
      function Ki(t, e) {
        ;(t.min = e.min), (t.max = e.max)
      }
      function _i(t, e, n) {
        return n + e * (t - n)
      }
      function Ji(t, e, n, r, o) {
        return void 0 !== o && (t = _i(t, o, r)), _i(t, n, r) + e
      }
      function $i(t, e, n, r, o) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = Ji(t.min, e, n, r, o)),
          (t.max = Ji(t.max, e, n, r, o))
      }
      function ta(t, e) {
        var n = e.x,
          r = e.y
        $i(t.x, n.translate, n.scale, n.originPoint),
          $i(t.y, r.translate, r.scale, r.originPoint)
      }
      function ea(t, e, n, r) {
        var o = Et(r, 3),
          i = o[0],
          a = o[1],
          u = o[2]
        ;(t.min = e.min), (t.max = e.max)
        var s = void 0 !== n[u] ? n[u] : 0.5,
          c = Zn(e.min, e.max, s)
        $i(t, n[i], n[a], c, n.scale)
      }
      var na = ['x', 'scaleX', 'originX'],
        ra = ['y', 'scaleY', 'originY']
      function oa(t, e, n) {
        ea(t.x, e.x, n, na), ea(t.y, e.y, n, ra)
      }
      function ia(t, e, n, r, o) {
        return (
          (t = _i((t -= e), 1 / n, r)), void 0 !== o && (t = _i(t, 1 / o, r)), t
        )
      }
      function aa(t, e, n) {
        var r = Et(n, 3),
          o = r[0],
          i = r[1],
          a = r[2]
        !(function (t, e, n, r, o) {
          void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5)
          var i = Zn(t.min, t.max, r) - e
          ;(t.min = ia(t.min, e, n, i, o)), (t.max = ia(t.max, e, n, i, o))
        })(t, e[o], e[i], e[a], e.scale)
      }
      function ua(t, e) {
        aa(t.x, e, na), aa(t.y, e, ra)
      }
      var sa = new Set()
      function ca(t, e, n) {
        t[n] || (t[n] = []), t[n].push(e)
      }
      function la(t) {
        return (
          sa.add(t),
          function () {
            return sa.delete(t)
          }
        )
      }
      function fa() {
        if (sa.size) {
          var t = 0,
            e = [[]],
            n = [],
            r = function (n) {
              return ca(e, n, t)
            },
            o = function (e) {
              ca(n, e, t), t++
            }
          sa.forEach(function (e) {
            e(r, o), (t = 0)
          }),
            sa.clear()
          for (var i = n.length, a = 0; a <= i; a++)
            e[a] && e[a].forEach(pa), n[a] && n[a].forEach(pa)
        }
      }
      var da,
        pa = function (t) {
          return t()
        },
        va = new WeakMap(),
        ma = (function () {
          function t(t) {
            var e = t.visualElement
            ;(this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.elastic = { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }),
              (this.props = {}),
              (this.hasMutatedConstraints = !1),
              (this.cursorProgress = { x: 0.5, y: 0.5 }),
              (this.originPoint = {}),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.visualElement = e),
              this.visualElement.enableLayoutProjection(),
              va.set(e, this)
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = void 0 === e ? {} : e,
                o = r.snapToCursor,
                i = void 0 !== o && o,
                a = r.cursorProgress,
                u = this.props.transformPagePoint
              this.panSession = new yi(
                t,
                {
                  onSessionStart: function (t) {
                    var e
                    n.stopMotion()
                    var r = (function (t) {
                      return An(t, 'client')
                    })(t).point
                    null === (e = n.cancelLayout) || void 0 === e || e.call(n),
                      (n.cancelLayout = la(function (t, e) {
                        var o = zi(n.visualElement),
                          u = (function (t) {
                            var e = []
                            return (
                              t.children.forEach(function t(n) {
                                Xi(n) && e.push(n), n.children.forEach(t)
                              }),
                              e.sort(Yi)
                            )
                          })(n.visualElement),
                          s = wt(wt([], Et(o)), Et(u)),
                          c = !1
                        n.isLayoutDrag() &&
                          n.visualElement.lockProjectionTarget(),
                          e(function () {
                            s.forEach(function (t) {
                              return t.resetTransform()
                            })
                          }),
                          t(function () {
                            Wi(n.visualElement), u.forEach(Wi)
                          }),
                          e(function () {
                            s.forEach(function (t) {
                              return t.restoreTransform()
                            }),
                              i && (c = n.snapToCursor(r))
                          }),
                          t(function () {
                            Boolean(
                              n.getAxisMotionValue('x') && !n.isExternalDrag()
                            ) ||
                              n.visualElement.rebaseProjectionTarget(
                                !0,
                                n.visualElement.measureViewportBox(!1)
                              ),
                              n.visualElement.scheduleUpdateLayoutProjection()
                            var t = n.visualElement.projection
                            ki(function (e) {
                              if (!c) {
                                var o = t.target[e],
                                  i = o.min,
                                  u = o.max
                                n.cursorProgress[e] = a ? a[e] : Gn(i, u, r[e])
                              }
                              var s = n.getAxisMotionValue(e)
                              s && (n.originPoint[e] = s.get())
                            })
                          }),
                          e(function () {
                            no.update(),
                              no.preRender(),
                              no.render(),
                              no.postRender()
                          }),
                          t(function () {
                            return n.resolveDragConstraints()
                          })
                      }))
                  },
                  onStart: function (t, e) {
                    var r,
                      o,
                      i,
                      a = n.props,
                      u = a.drag,
                      s = a.dragPropagation
                    ;(!u ||
                      s ||
                      (n.openGlobalLock && n.openGlobalLock(),
                      (n.openGlobalLock = Mn(u)),
                      n.openGlobalLock)) &&
                      (fa(),
                      (n.isDragging = !0),
                      (n.currentDirection = null),
                      null === (o = (r = n.props).onDragStart) ||
                        void 0 === o ||
                        o.call(r, t, e),
                      null === (i = n.visualElement.animationState) ||
                        void 0 === i ||
                        i.setActive(ln.Drag, !0))
                  },
                  onMove: function (t, e) {
                    var r,
                      o,
                      i,
                      a,
                      u = n.props,
                      s = u.dragPropagation,
                      c = u.dragDirectionLock
                    if (s || n.openGlobalLock) {
                      var l = e.offset
                      if (c && null === n.currentDirection)
                        return (
                          (n.currentDirection = (function (t, e) {
                            void 0 === e && (e = 10)
                            var n = null
                            Math.abs(t.y) > e
                              ? (n = 'y')
                              : Math.abs(t.x) > e && (n = 'x')
                            return n
                          })(l)),
                          void (
                            null !== n.currentDirection &&
                            (null === (o = (r = n.props).onDirectionLock) ||
                              void 0 === o ||
                              o.call(r, n.currentDirection))
                          )
                        )
                      n.updateAxis('x', e.point, l),
                        n.updateAxis('y', e.point, l),
                        null === (a = (i = n.props).onDrag) ||
                          void 0 === a ||
                          a.call(i, t, e),
                        (da = t)
                    }
                  },
                  onSessionEnd: function (t, e) {
                    return n.stop(t, e)
                  }
                },
                { transformPagePoint: u }
              )
            }),
            (t.prototype.resolveDragConstraints = function () {
              var t = this,
                e = this.props,
                n = e.dragConstraints,
                r = e.dragElastic,
                o = this.visualElement.getLayoutState().layoutCorrected
              ;(this.constraints =
                !!n &&
                (Yt(n)
                  ? this.resolveRefConstraints(o, n)
                  : (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        o = e.bottom,
                        i = e.right
                      return { x: Oi(t.x, r, i), y: Oi(t.y, n, o) }
                    })(o, n))),
                (this.elastic = (function (t) {
                  return (
                    !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                    { x: Li(t, 'left', 'right'), y: Li(t, 'top', 'bottom') }
                  )
                })(r)),
                this.constraints &&
                  !this.hasMutatedConstraints &&
                  ki(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {}
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        )
                      })(o[e], t.constraints[e]))
                  })
            }),
            (t.prototype.resolveRefConstraints = function (t, e) {
              var n = this.props,
                r = n.onMeasureDragConstraints,
                o = n.transformPagePoint,
                i = e.current
              this.constraintsBox = Vi(i, o)
              var a = (function (t, e) {
                return { x: Ri(t.x, e.x), y: Ri(t.y, e.y) }
              })(t, this.constraintsBox)
              if (r) {
                var u = r(
                  (function (t) {
                    var e = t.x,
                      n = t.y
                    return {
                      top: n.min,
                      bottom: n.max,
                      left: e.min,
                      right: e.max
                    }
                  })(a)
                )
                ;(this.hasMutatedConstraints = !!u), u && (a = Pi(u))
              }
              return a
            }),
            (t.prototype.cancelDrag = function () {
              var t, e
              this.visualElement.unlockProjectionTarget(),
                null === (t = this.cancelLayout) ||
                  void 0 === t ||
                  t.call(this),
                (this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(ln.Drag, !1)
            }),
            (t.prototype.stop = function (t, e) {
              var n, r, o
              null === (n = this.panSession) || void 0 === n || n.end(),
                (this.panSession = null)
              var i = this.isDragging
              if ((this.cancelDrag(), i)) {
                var a = e.velocity
                this.animateDragEnd(a),
                  null === (o = (r = this.props).onDragEnd) ||
                    void 0 === o ||
                    o.call(r, t, e)
              }
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this
              return ki(function (n) {
                if (ha(n, e.props.drag, e.currentDirection)) {
                  var r = e.getAxisMotionValue(n)
                  if (!r) return (e.cursorProgress[n] = 0.5), !0
                  var o = e.visualElement.getLayoutState().layout,
                    i = o[n].max - o[n].min,
                    a = o[n].min + i / 2,
                    u = t[n] - a
                  ;(e.originPoint[n] = t[n]), r.set(u)
                }
              }).includes(!0)
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              if (ha(t, this.props.drag, this.currentDirection))
                return this.getAxisMotionValue(t)
                  ? this.updateAxisMotionValue(t, n)
                  : this.updateVisualElementAxis(t, e)
            }),
            (t.prototype.updateAxisMotionValue = function (t, e) {
              var n = this.getAxisMotionValue(t)
              if (e && n) {
                var r = this.originPoint[t] + e[t],
                  o = this.constraints
                    ? Mi(r, this.constraints[t], this.elastic[t])
                    : r
                n.set(o)
              }
            }),
            (t.prototype.updateVisualElementAxis = function (t, e) {
              var n,
                r = this.visualElement.getLayoutState().layout[t],
                o = r.max - r.min,
                i = this.cursorProgress[t],
                a = (function (t, e, n, r, o) {
                  var i = t - e * n
                  return r ? Mi(i, r, o) : i
                })(
                  e[t],
                  o,
                  i,
                  null === (n = this.constraints) || void 0 === n
                    ? void 0
                    : n[t],
                  this.elastic[t]
                )
              this.visualElement.setProjectionTargetAxis(t, a, a + o)
            }),
            (t.prototype.setProps = function (t) {
              var e = t.drag,
                n = void 0 !== e && e,
                r = t.dragDirectionLock,
                o = void 0 !== r && r,
                i = t.dragPropagation,
                a = void 0 !== i && i,
                u = t.dragConstraints,
                s = void 0 !== u && u,
                c = t.dragElastic,
                l = void 0 === c ? 0.35 : c,
                f = t.dragMomentum,
                d = void 0 === f || f,
                p = bt(t, [
                  'drag',
                  'dragDirectionLock',
                  'dragPropagation',
                  'dragConstraints',
                  'dragElastic',
                  'dragMomentum'
                ])
              this.props = xt(
                {
                  drag: n,
                  dragDirectionLock: o,
                  dragPropagation: a,
                  dragConstraints: s,
                  dragElastic: l,
                  dragMomentum: d
                },
                p
              )
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e = this.props,
                n = e.layout,
                r = e.layoutId,
                o = '_drag' + t.toUpperCase()
              return this.props[o]
                ? this.props[o]
                : n || void 0 !== r
                ? void 0
                : this.visualElement.getValue(t, 0)
            }),
            (t.prototype.isLayoutDrag = function () {
              return !this.getAxisMotionValue('x')
            }),
            (t.prototype.isExternalDrag = function () {
              var t = this.props,
                e = t._dragX,
                n = t._dragY
              return e || n
            }),
            (t.prototype.animateDragEnd = function (t) {
              var e = this,
                n = this.props,
                r = n.drag,
                o = n.dragMomentum,
                i = n.dragElastic,
                a = n.dragTransition,
                u = (function (t, e) {
                  void 0 === e && (e = !0)
                  var n,
                    r = t.getProjectionParent()
                  return (
                    !!r &&
                    (e
                      ? ua(
                          (n = qi(r.projection.target, t.projection.target)),
                          r.getLatestValues()
                        )
                      : (n = qi(
                          r.getLayoutState().layout,
                          t.getLayoutState().layout
                        )),
                    ki(function (e) {
                      return t.setProjectionTargetAxis(
                        e,
                        n[e].min,
                        n[e].max,
                        !0
                      )
                    }),
                    !0)
                  )
                })(
                  this.visualElement,
                  this.isLayoutDrag() && !this.isExternalDrag()
                ),
                s = this.constraints || {}
              if (u && Object.keys(s).length && this.isLayoutDrag()) {
                var c = this.visualElement.getProjectionParent()
                if (c) {
                  var l = qi(c.projection.targetFinal, s)
                  ki(function (t) {
                    var e = l[t],
                      n = e.min,
                      r = e.max
                    s[t] = {
                      min: isNaN(n) ? void 0 : n,
                      max: isNaN(r) ? void 0 : r
                    }
                  })
                }
              }
              var f = ki(function (n) {
                var c
                if (ha(n, r, e.currentDirection)) {
                  var l =
                      null !== (c = null == s ? void 0 : s[n]) && void 0 !== c
                        ? c
                        : {},
                    f = i ? 200 : 1e6,
                    d = i ? 40 : 1e7,
                    p = xt(
                      xt(
                        {
                          type: 'inertia',
                          velocity: o ? t[n] : 0,
                          bounceStiffness: f,
                          bounceDamping: d,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10
                        },
                        a
                      ),
                      l
                    )
                  return e.getAxisMotionValue(n)
                    ? e.startAxisValueAnimation(n, p)
                    : e.visualElement.startLayoutAnimation(n, p, u)
                }
              })
              return Promise.all(f).then(function () {
                var t, n
                null === (n = (t = e.props).onDragTransitionEnd) ||
                  void 0 === n ||
                  n.call(t)
              })
            }),
            (t.prototype.stopMotion = function () {
              var t = this
              ki(function (e) {
                var n = t.getAxisMotionValue(e)
                n ? n.stop() : t.visualElement.stopLayoutAnimation()
              })
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              var n = this.getAxisMotionValue(t)
              if (n) {
                var r = n.get()
                return n.set(r), n.set(r), Yo(t, n, 0, e)
              }
            }),
            (t.prototype.scalePoint = function () {
              var t = this,
                e = this.props,
                n = e.drag
              if (Yt(e.dragConstraints) && this.constraintsBox) {
                this.stopMotion()
                var r = { x: 0, y: 0 }
                ki(function (e) {
                  r[e] = Ii(
                    t.visualElement.projection.target[e],
                    t.constraintsBox[e]
                  )
                }),
                  this.updateConstraints(function () {
                    ki(function (e) {
                      if (ha(e, n, null)) {
                        var o = (function (t, e, n) {
                            var r = t.max - t.min,
                              o = Zn(e.min, e.max - r, n)
                            return { min: o, max: o + r }
                          })(
                            t.visualElement.projection.target[e],
                            t.constraintsBox[e],
                            r[e]
                          ),
                          i = o.min,
                          a = o.max
                        t.visualElement.setProjectionTargetAxis(e, i, a)
                      }
                    })
                  }),
                  setTimeout(fa, 1)
              }
            }),
            (t.prototype.updateConstraints = function (t) {
              var e = this
              this.cancelLayout = la(function (n, r) {
                var o = zi(e.visualElement)
                r(function () {
                  return o.forEach(function (t) {
                    return t.resetTransform()
                  })
                }),
                  n(function () {
                    return Wi(e.visualElement)
                  }),
                  r(function () {
                    return o.forEach(function (t) {
                      return t.restoreTransform()
                    })
                  }),
                  n(function () {
                    e.resolveDragConstraints()
                  }),
                  t && r(t)
              })
            }),
            (t.prototype.mount = function (t) {
              var e = this,
                n = Tn(t.getInstance(), 'pointerdown', function (t) {
                  var n = e.props,
                    r = n.drag,
                    o = n.dragListener
                  r && (void 0 === o || o) && e.start(t)
                }),
                r = dn(window, 'resize', function () {
                  e.scalePoint()
                }),
                o = t.onLayoutUpdate(function () {
                  e.isDragging && e.resolveDragConstraints()
                }),
                i = t.prevDragCursor
              return (
                i && this.start(da, { cursorProgress: i }),
                function () {
                  null == n || n(),
                    null == r || r(),
                    null == o || o(),
                    e.cancelDrag()
                }
              )
            }),
            t
          )
        })()
      function ha(t, e, n) {
        return !((!0 !== e && e !== t) || (null !== n && n !== t))
      }
      var ya,
        ga,
        Aa = {
          pan: Bn(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              o = t.onPanSessionStart,
              i = t.visualElement,
              a = e || n || r || o,
              s = (0, u.useRef)(null),
              c = (0, u.useContext)(Mt).transformPagePoint,
              l = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  ;(s.current = null), r && r(t, e)
                }
              }
            ;(0, u.useEffect)(function () {
              null !== s.current && s.current.updateHandlers(l)
            }),
              Pn(
                i,
                'pointerdown',
                a &&
                  function (t) {
                    s.current = new yi(t, l, { transformPagePoint: c })
                  }
              ),
              jn(function () {
                return s.current && s.current.end()
              })
          }),
          drag: Bn(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = (0, u.useContext)(Mt).transformPagePoint,
              o = Lt(function () {
                return new ma({ visualElement: n })
              })
            o.setProps(xt(xt({}, t), { transformPagePoint: r })),
              (0, u.useEffect)(
                function () {
                  return e && e.subscribe(o)
                },
                [o]
              ),
              (0, u.useEffect)(function () {
                return o.mount(n)
              }, [])
          })
        }
      function xa(t) {
        return 'string' == typeof t && t.startsWith('var(--')
      }
      !(function (t) {
        ;(t[(t.Entering = 0)] = 'Entering'),
          (t[(t.Present = 1)] = 'Present'),
          (t[(t.Exiting = 2)] = 'Exiting')
      })(ya || (ya = {})),
        (function (t) {
          ;(t[(t.Hide = 0)] = 'Hide'), (t[(t.Show = 1)] = 'Show')
        })(ga || (ga = {}))
      var ba = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
      function Ea(t, e, n) {
        void 0 === n && (n = 1)
        var r = Et(
            (function (t) {
              var e = ba.exec(t)
              if (!e) return [,]
              var n = Et(e, 3)
              return [n[1], n[2]]
            })(t),
            2
          ),
          o = r[0],
          i = r[1]
        if (o) {
          var a = window.getComputedStyle(e).getPropertyValue(o)
          return a ? a.trim() : xa(i) ? Ea(i, e, n + 1) : i
        }
      }
      function wa(t, e) {
        return (t / (e.max - e.min)) * 100
      }
      var Ta = '_$css'
      var Pa = {
          process: function (t, e, n) {
            var r = n.target
            if ('string' == typeof t) {
              if (!we.test(t)) return t
              t = parseFloat(t)
            }
            return wa(t, r.x) + '% ' + wa(t, r.y) + '%'
          }
        },
        Sa = {
          borderRadius: xt(xt({}, Pa), {
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius'
            ]
          }),
          borderTopLeftRadius: Pa,
          borderTopRightRadius: Pa,
          borderBottomLeftRadius: Pa,
          borderBottomRightRadius: Pa,
          boxShadow: {
            process: function (t, e) {
              var n = e.delta,
                r = e.treeScale,
                o = t,
                i = t.includes('var('),
                a = []
              i &&
                (t = t.replace(ba, function (t) {
                  return a.push(t), Ta
                }))
              var u = mr.parse(t)
              if (u.length > 5) return o
              var s = mr.createTransformer(t),
                c = 'number' != typeof u[0] ? 1 : 0,
                l = n.x.scale * r.x,
                f = n.y.scale * r.y
              ;(u[0 + c] /= l), (u[1 + c] /= f)
              var d = Zn(l, f, 0.5)
              'number' == typeof u[2 + c] && (u[2 + c] /= d),
                'number' == typeof u[3 + c] && (u[3 + c] /= d)
              var p = s(u)
              if (i) {
                var v = 0
                p = p.replace(Ta, function () {
                  var t = a[v]
                  return v++, t
                })
              }
              return p
            }
          }
        },
        Ca = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (
              (e.frameTarget = {
                x: { min: 0, max: 1 },
                y: { min: 0, max: 1 }
              }),
              (e.currentAnimationTarget = {
                x: { min: 0, max: 1 },
                y: { min: 0, max: 1 }
              }),
              (e.isAnimating = { x: !1, y: !1 }),
              (e.stopAxisAnimation = { x: void 0, y: void 0 }),
              (e.isAnimatingTree = !1),
              (e.animate = function (t, n, r) {
                void 0 === r && (r = {})
                var o = r.originBox,
                  i = r.targetBox,
                  a = r.visibilityAction,
                  u = r.shouldStackAnimate,
                  s = r.onComplete,
                  c = r.prevParent,
                  l = bt(r, [
                    'originBox',
                    'targetBox',
                    'visibilityAction',
                    'shouldStackAnimate',
                    'onComplete',
                    'prevParent'
                  ]),
                  f = e.props,
                  d = f.visualElement,
                  p = f.layout
                if (!1 === u) return (e.isAnimatingTree = !1), e.safeToRemove()
                if (!e.isAnimatingTree || !0 === u) {
                  u && (e.isAnimatingTree = !0), (n = o || n), (t = i || t)
                  var v = !1,
                    m = d.getProjectionParent()
                  if (m) {
                    var h = m.prevViewportBox,
                      y = m.getLayoutState().layout
                    c &&
                      (i && (y = c.getLayoutState().layout),
                      o &&
                        !Gi(c, m) &&
                        c.prevViewportBox &&
                        (h = c.prevViewportBox)),
                      h &&
                        ja(c, o, i) &&
                        ((v = !0), (n = qi(h, n)), (t = qi(y, t)))
                  }
                  var g = ka(n, t),
                    A = ki(function (r) {
                      var o, i
                      if ('position' === p) {
                        var u = t[r].max - t[r].min
                        n[r].max = n[r].min + u
                      }
                      if (!d.projection.isTargetLocked)
                        return void 0 === a
                          ? g
                            ? e.animateAxis(
                                r,
                                t[r],
                                n[r],
                                xt(xt({}, l), { isRelative: v })
                              )
                            : (null === (i = (o = e.stopAxisAnimation)[r]) ||
                                void 0 === i ||
                                i.call(o),
                              d.setProjectionTargetAxis(
                                r,
                                t[r].min,
                                t[r].max,
                                v
                              ))
                          : void d.setVisibility(a === ga.Show)
                    })
                  return (
                    d.syncRender(),
                    Promise.all(A).then(function () {
                      ;(e.isAnimatingTree = !1),
                        s && s(),
                        d.notifyLayoutAnimationComplete()
                    })
                  )
                }
              }),
              e
            )
          }
          return (
            At(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.props.visualElement
              ;(e.animateMotionValue = Yo),
                e.enableLayoutProjection(),
                (this.unsubLayoutReady = e.onLayoutUpdate(this.animate)),
                (e.layoutSafeToRemove = function () {
                  return t.safeToRemove()
                }),
                (function (t) {
                  for (var e in t) ee[e] = t[e]
                })(Sa)
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this
              this.unsubLayoutReady(),
                ki(function (e) {
                  var n, r
                  return null === (r = (n = t.stopAxisAnimation)[e]) ||
                    void 0 === r
                    ? void 0
                    : r.call(n)
                })
            }),
            (e.prototype.animateAxis = function (t, e, n, r) {
              var o,
                i,
                a = this,
                u = void 0 === r ? {} : r,
                s = u.transition,
                c = u.isRelative
              if (
                !this.isAnimating[t] ||
                !Ra(e, this.currentAnimationTarget[t])
              ) {
                null === (i = (o = this.stopAxisAnimation)[t]) ||
                  void 0 === i ||
                  i.call(o),
                  (this.isAnimating[t] = !0)
                var l = this.props.visualElement,
                  f = this.frameTarget[t],
                  d = l.getProjectionAnimationProgress()[t]
                d.clearListeners(), d.set(0), d.set(0)
                var p = function () {
                  var r = d.get() / 1e3
                  !(function (t, e, n, r) {
                    ;(t.min = Zn(e.min, n.min, r)),
                      (t.max = Zn(e.max, n.max, r))
                  })(f, n, e, r),
                    l.setProjectionTargetAxis(t, f.min, f.max, c)
                }
                p()
                var v = d.onChange(p)
                ;(this.stopAxisAnimation[t] = function () {
                  ;(a.isAnimating[t] = !1), d.stop(), v()
                }),
                  (this.currentAnimationTarget[t] = e)
                var m = s || l.getDefaultTransition() || La
                return Yo(
                  'x' === t ? 'layoutX' : 'layoutY',
                  d,
                  1e3,
                  m && Ho(m, 'layout')
                ).then(this.stopAxisAnimation[t])
              }
            }),
            (e.prototype.safeToRemove = function () {
              var t, e
              null === (e = (t = this.props).safeToRemove) ||
                void 0 === e ||
                e.call(t)
            }),
            (e.prototype.render = function () {
              return null
            }),
            e
          )
        })(u.Component)
      function ka(t, e) {
        return !(Oa(t) || Oa(e) || (Ra(t.x, e.x) && Ra(t.y, e.y)))
      }
      var Ma = { min: 0, max: 0 }
      function Oa(t) {
        return Ra(t.x, Ma) && Ra(t.y, Ma)
      }
      function Ra(t, e) {
        return t.min === e.min && t.max === e.max
      }
      var La = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }
      function ja(t, e, n) {
        return t || (!t && !(e || n))
      }
      var Va = {
        layoutReady: function (t) {
          return t.notifyLayoutReady()
        }
      }
      function Da() {
        var t = new Set()
        return {
          add: function (e) {
            return t.add(e)
          },
          flush: function (e) {
            var n = void 0 === e ? Va : e,
              r = n.layoutReady,
              o = n.parent
            la(function (e, n) {
              var i = Array.from(t).sort(Yi),
                a = o ? zi(o) : []
              n(function () {
                wt(wt([], Et(a)), Et(i)).forEach(function (t) {
                  return t.resetTransform()
                })
              }),
                e(function () {
                  i.forEach(Wi)
                }),
                n(function () {
                  a.forEach(function (t) {
                    return t.restoreTransform()
                  }),
                    i.forEach(r)
                }),
                e(function () {
                  i.forEach(function (t) {
                    t.isPresent && (t.presence = ya.Present)
                  })
                }),
                n(function () {
                  no.preRender(), no.render()
                }),
                e(function () {
                  uo.postRender(function () {
                    return i.forEach(Ba)
                  }),
                    t.clear()
                })
            }),
              fa()
          }
        }
      }
      function Ba(t) {
        t.prevViewportBox = t.projection.target
      }
      var Ia = (0, u.createContext)(Da()),
        Na = (0, u.createContext)(Da())
      function Ua(t) {
        return !!t.forceUpdate
      }
      var Fa = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return (
          At(e, t),
          (e.prototype.componentDidMount = function () {
            var t = this.props,
              e = t.syncLayout,
              n = t.framerSyncLayout,
              r = t.visualElement
            Ua(e) && e.register(r),
              Ua(n) && n.register(r),
              r.onUnmount(function () {
                Ua(e) && e.remove(r), Ua(n) && n.remove(r)
              })
          }),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            var t = this.props,
              e = t.syncLayout,
              n = t.visualElement
            return (
              Ua(e)
                ? e.syncUpdate()
                : (!(function (t) {
                    t.shouldResetTransform() ||
                      ((t.prevViewportBox = t.measureViewportBox(!1)),
                      t.rebaseProjectionTarget(!1, t.prevViewportBox))
                  })(n),
                  e.add(n)),
              null
            )
          }),
          (e.prototype.componentDidUpdate = function () {
            var t = this.props.syncLayout
            Ua(t) || t.flush()
          }),
          (e.prototype.render = function () {
            return null
          }),
          e
        )
      })(u.Component)
      var Ha = {
        measureLayout: function (t) {
          var e = (0, u.useContext)(Ia),
            n = (0, u.useContext)(Na)
          return u.createElement(
            Fa,
            xt({}, t, { syncLayout: e, framerSyncLayout: n })
          )
        },
        layoutAnimation: function (t) {
          var e = Et(jt(), 2)[1]
          return u.createElement(Ca, xt({}, t, { safeToRemove: e }))
        }
      }
      function Ya() {
        return {
          isHydrated: !1,
          layout: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
          layoutCorrected: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
          treeScale: { x: 1, y: 1 },
          delta: Ci(),
          deltaFinal: Ci(),
          deltaTransform: ''
        }
      }
      var Xa = Ya()
      function za(t, e, n) {
        var r = t.x,
          o = t.y,
          i =
            'translate3d(' +
            r.translate / e.x +
            'px, ' +
            o.translate / e.y +
            'px, 0) '
        if (n) {
          var a = n.rotate,
            u = n.rotateX,
            s = n.rotateY
          a && (i += 'rotate(' + a + ') '),
            u && (i += 'rotateX(' + u + ') '),
            s && (i += 'rotateY(' + s + ') ')
        }
        return (
          (i += 'scale(' + r.scale + ', ' + o.scale + ')'),
          n || i !== Qa ? i : ''
        )
      }
      function Wa(t) {
        var e = t.deltaFinal
        return 100 * e.x.origin + '% ' + 100 * e.y.origin + '% 0'
      }
      var Qa = za(Xa.delta, Xa.treeScale, { x: 1, y: 1 }),
        qa = [
          'LayoutMeasure',
          'BeforeLayoutMeasure',
          'LayoutUpdate',
          'ViewportBoxUpdate',
          'Update',
          'Render',
          'AnimationComplete',
          'LayoutAnimationComplete',
          'AnimationStart',
          'SetAxisTarget',
          'Unmount'
        ]
      function Ga(t, e, n, r) {
        var o,
          i,
          a = t.delta,
          u = t.layout,
          s = t.layoutCorrected,
          c = t.treeScale,
          l = e.target
        ;(i = u),
          Ki((o = s).x, i.x),
          Ki(o.y, i.y),
          (function (t, e, n) {
            var r = n.length
            if (r) {
              var o, i
              e.x = e.y = 1
              for (var a = 0; a < r; a++)
                (i = (o = n[a]).getLayoutState().delta),
                  (e.x *= i.x.scale),
                  (e.y *= i.y.scale),
                  ta(t, i),
                  Zi(o) && oa(t, t, o.getLatestValues())
            }
          })(s, c, n),
          Ui(a, s, l, r)
      }
      var Za = (function () {
        function t() {
          ;(this.children = []), (this.isDirty = !1)
        }
        return (
          (t.prototype.add = function (t) {
            Xo(this.children, t), (this.isDirty = !0)
          }),
          (t.prototype.remove = function (t) {
            zo(this.children, t), (this.isDirty = !0)
          }),
          (t.prototype.forEach = function (t) {
            this.isDirty && this.children.sort(Yi),
              (this.isDirty = !1),
              this.children.forEach(t)
          }),
          t
        )
      })()
      var Ka = function (t) {
        var e = t.treeType,
          n = void 0 === e ? '' : e,
          r = t.build,
          o = t.getBaseTarget,
          i = t.makeTargetAnimatable,
          a = t.measureViewportBox,
          u = t.render,
          s = t.readValueFromInstance,
          c = t.resetTransform,
          l = t.restoreTransform,
          f = t.removeValueFromRenderState,
          d = t.sortNodePosition,
          p = t.scrapeMotionValuesFromProps
        return function (t, e) {
          var v = t.parent,
            m = t.props,
            h = t.presenceId,
            y = t.blockInitialAnimation,
            g = t.visualState
          void 0 === e && (e = {})
          var A,
            x,
            b,
            E,
            w,
            T,
            P = g.latestValues,
            S = g.renderState,
            C = (function () {
              var t = qa.map(function () {
                  return new Wo()
                }),
                e = {},
                n = {
                  clearAllListeners: function () {
                    return t.forEach(function (t) {
                      return t.clear()
                    })
                  },
                  updatePropListeners: function (t) {
                    return qa.forEach(function (r) {
                      var o
                      null === (o = e[r]) || void 0 === o || o.call(e)
                      var i = 'on' + r,
                        a = t[i]
                      a && (e[r] = n[i](a))
                    })
                  }
                }
              return (
                t.forEach(function (t, e) {
                  ;(n['on' + qa[e]] = function (e) {
                    return t.add(e)
                  }),
                    (n['notify' + qa[e]] = function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n]
                      return t.notify.apply(t, wt([], Et(e)))
                    })
                }),
                n
              )
            })(),
            k = {
              isEnabled: !1,
              isHydrated: !1,
              isTargetLocked: !1,
              target: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
              targetFinal: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }
            },
            M = k,
            O = P,
            R = Ya(),
            L = !1,
            j = new Map(),
            V = new Map(),
            D = {},
            B = xt({}, P)
          function I() {
            A &&
              (Q.isProjectionReady() &&
                (oa(M.targetFinal, M.target, O),
                Ui(R.deltaFinal, R.layoutCorrected, M.targetFinal, P)),
              N(),
              u(A, S))
          }
          function N() {
            var t = P
            if (E && E.isActive()) {
              var n = E.getCrossfadeState(Q)
              n && (t = n)
            }
            r(Q, S, t, M, R, e, m)
          }
          function U() {
            C.notifyUpdate(P)
          }
          function F() {
            Q.layoutTree.forEach(Ja)
          }
          var H = p(m)
          for (var Y in H) {
            var X = H[Y]
            void 0 !== P[Y] && le(X) && X.set(P[Y], !1)
          }
          var z = qt(m),
            W = Gt(m),
            Q = xt(
              xt(
                {
                  treeType: n,
                  current: null,
                  depth: v ? v.depth + 1 : 0,
                  parent: v,
                  children: new Set(),
                  path: v ? wt(wt([], Et(v.path)), [v]) : [],
                  layoutTree: v ? v.layoutTree : new Za(),
                  presenceId: h,
                  projection: k,
                  variantChildren: W ? new Set() : void 0,
                  isVisible: void 0,
                  manuallyAnimateOnMount: Boolean(
                    null == v ? void 0 : v.isMounted()
                  ),
                  blockInitialAnimation: y,
                  isMounted: function () {
                    return Boolean(A)
                  },
                  mount: function (t) {
                    ;(A = Q.current = t),
                      Q.pointTo(Q),
                      W &&
                        v &&
                        !z &&
                        (T = null == v ? void 0 : v.addVariantChild(Q)),
                      null == v || v.children.add(Q)
                  },
                  unmount: function () {
                    eo.update(U),
                      eo.render(I),
                      eo.preRender(Q.updateLayoutProjection),
                      V.forEach(function (t) {
                        return t()
                      }),
                      Q.stopLayoutAnimation(),
                      Q.layoutTree.remove(Q),
                      null == T || T(),
                      null == v || v.children.delete(Q),
                      null == b || b(),
                      C.clearAllListeners()
                  },
                  addVariantChild: function (t) {
                    var e,
                      n = Q.getClosestVariantNode()
                    if (n)
                      return (
                        null === (e = n.variantChildren) ||
                          void 0 === e ||
                          e.add(t),
                        function () {
                          return n.variantChildren.delete(t)
                        }
                      )
                  },
                  sortNodePosition: function (t) {
                    return d && n === t.treeType
                      ? d(Q.getInstance(), t.getInstance())
                      : 0
                  },
                  getClosestVariantNode: function () {
                    return W
                      ? Q
                      : null == v
                      ? void 0
                      : v.getClosestVariantNode()
                  },
                  scheduleUpdateLayoutProjection: v
                    ? v.scheduleUpdateLayoutProjection
                    : function () {
                        return uo.preRender(
                          Q.updateTreeLayoutProjection,
                          !1,
                          !0
                        )
                      },
                  getLayoutId: function () {
                    return m.layoutId
                  },
                  getInstance: function () {
                    return A
                  },
                  getStaticValue: function (t) {
                    return P[t]
                  },
                  setStaticValue: function (t, e) {
                    return (P[t] = e)
                  },
                  getLatestValues: function () {
                    return P
                  },
                  setVisibility: function (t) {
                    Q.isVisible !== t && ((Q.isVisible = t), Q.scheduleRender())
                  },
                  makeTargetAnimatable: function (t, e) {
                    return void 0 === e && (e = !0), i(Q, t, m, e)
                  },
                  addValue: function (t, e) {
                    Q.hasValue(t) && Q.removeValue(t),
                      j.set(t, e),
                      (P[t] = e.get()),
                      (function (t, e) {
                        var n = e.onChange(function (e) {
                            ;(P[t] = e), m.onUpdate && uo.update(U, !1, !0)
                          }),
                          r = e.onRenderRequest(Q.scheduleRender)
                        V.set(t, function () {
                          n(), r()
                        })
                      })(t, e)
                  },
                  removeValue: function (t) {
                    var e
                    j.delete(t),
                      null === (e = V.get(t)) || void 0 === e || e(),
                      V.delete(t),
                      delete P[t],
                      f(t, S)
                  },
                  hasValue: function (t) {
                    return j.has(t)
                  },
                  getValue: function (t, e) {
                    var n = j.get(t)
                    return (
                      void 0 === n &&
                        void 0 !== e &&
                        ((n = qo(e)), Q.addValue(t, n)),
                      n
                    )
                  },
                  forEachValue: function (t) {
                    return j.forEach(t)
                  },
                  readValue: function (t) {
                    var n
                    return null !== (n = P[t]) && void 0 !== n ? n : s(A, t, e)
                  },
                  setBaseTarget: function (t, e) {
                    B[t] = e
                  },
                  getBaseTarget: function (t) {
                    if (o) {
                      var e = o(m, t)
                      if (void 0 !== e && !le(e)) return e
                    }
                    return B[t]
                  }
                },
                C
              ),
              {
                build: function () {
                  return N(), S
                },
                scheduleRender: function () {
                  uo.render(I, !1, !0)
                },
                syncRender: I,
                setProps: function (t) {
                  ;(m = t),
                    C.updatePropListeners(t),
                    (D = (function (t, e, n) {
                      var r
                      for (var o in e) {
                        var i = e[o],
                          a = n[o]
                        if (le(i)) t.addValue(o, i)
                        else if (le(a)) t.addValue(o, qo(i))
                        else if (a !== i)
                          if (t.hasValue(o)) {
                            var u = t.getValue(o)
                            !u.hasAnimated && u.set(i)
                          } else
                            t.addValue(
                              o,
                              qo(
                                null !== (r = t.getStaticValue(o)) &&
                                  void 0 !== r
                                  ? r
                                  : i
                              )
                            )
                      }
                      for (var o in n) void 0 === e[o] && t.removeValue(o)
                      return e
                    })(Q, p(m), D))
                },
                getProps: function () {
                  return m
                },
                getVariant: function (t) {
                  var e
                  return null === (e = m.variants) || void 0 === e
                    ? void 0
                    : e[t]
                },
                getDefaultTransition: function () {
                  return m.transition
                },
                getVariantContext: function (t) {
                  if ((void 0 === t && (t = !1), t))
                    return null == v ? void 0 : v.getVariantContext()
                  if (!z) {
                    var e = (null == v ? void 0 : v.getVariantContext()) || {}
                    return void 0 !== m.initial && (e.initial = m.initial), e
                  }
                  for (var n = {}, r = 0; r < eu; r++) {
                    var o = tu[r],
                      i = m[o]
                    ;(zt(i) || !1 === i) && (n[o] = i)
                  }
                  return n
                },
                enableLayoutProjection: function () {
                  ;(k.isEnabled = !0), Q.layoutTree.add(Q)
                },
                lockProjectionTarget: function () {
                  k.isTargetLocked = !0
                },
                unlockProjectionTarget: function () {
                  Q.stopLayoutAnimation(), (k.isTargetLocked = !1)
                },
                getLayoutState: function () {
                  return R
                },
                setCrossfader: function (t) {
                  E = t
                },
                isProjectionReady: function () {
                  return k.isEnabled && k.isHydrated && R.isHydrated
                },
                startLayoutAnimation: function (t, e, n) {
                  void 0 === n && (n = !1)
                  var r = Q.getProjectionAnimationProgress()[t],
                    o = n ? k.relativeTarget[t] : k.target[t],
                    i = o.min,
                    a = o.max - i
                  return (
                    r.clearListeners(),
                    r.set(i),
                    r.set(i),
                    r.onChange(function (e) {
                      Q.setProjectionTargetAxis(t, e, e + a, n)
                    }),
                    Q.animateMotionValue(t, r, 0, e)
                  )
                },
                stopLayoutAnimation: function () {
                  ki(function (t) {
                    return Q.getProjectionAnimationProgress()[t].stop()
                  })
                },
                measureViewportBox: function (t) {
                  void 0 === t && (t = !0)
                  var n = a(A, e)
                  return t || ua(n, P), n
                },
                getProjectionAnimationProgress: function () {
                  return w || (w = { x: qo(0), y: qo(0) }), w
                },
                setProjectionTargetAxis: function (t, e, n, r) {
                  var o
                  void 0 === r && (r = !1),
                    r
                      ? (k.relativeTarget ||
                          (k.relativeTarget = {
                            x: { min: 0, max: 1 },
                            y: { min: 0, max: 1 }
                          }),
                        (o = k.relativeTarget[t]))
                      : ((k.relativeTarget = void 0), (o = k.target[t])),
                    (k.isHydrated = !0),
                    (o.min = e),
                    (o.max = n),
                    (L = !0),
                    C.notifySetAxisTarget()
                },
                rebaseProjectionTarget: function (t, e) {
                  void 0 === e && (e = R.layout)
                  var n = Q.getProjectionAnimationProgress(),
                    r = n.x,
                    o = n.y,
                    i = !(
                      k.relativeTarget ||
                      k.isTargetLocked ||
                      r.isAnimating() ||
                      o.isAnimating()
                    )
                  ;(t || i) &&
                    ki(function (t) {
                      var n = e[t],
                        r = n.min,
                        o = n.max
                      Q.setProjectionTargetAxis(t, r, o)
                    })
                },
                notifyLayoutReady: function (t) {
                  !(function (t) {
                    var e = t.getProjectionParent()
                    if (e) {
                      var n = qi(
                        e.getLayoutState().layout,
                        t.getLayoutState().layout
                      )
                      ki(function (e) {
                        t.setProjectionTargetAxis(e, n[e].min, n[e].max, !0)
                      })
                    } else t.rebaseProjectionTarget()
                  })(Q),
                    Q.notifyLayoutUpdate(
                      R.layout,
                      Q.prevViewportBox || R.layout,
                      t
                    )
                },
                resetTransform: function () {
                  return c(Q, A, m)
                },
                restoreTransform: function () {
                  return l(A, S)
                },
                updateLayoutProjection: function () {
                  if (Q.isProjectionReady()) {
                    var t = R.delta,
                      e = R.treeScale,
                      n = e.x,
                      r = e.y,
                      o = R.deltaTransform
                    Ga(R, M, Q.path, P),
                      L && Q.notifyViewportBoxUpdate(M.target, t),
                      (L = !1)
                    var i = za(t, e)
                    ;(i === o && n === e.x && r === e.y) || Q.scheduleRender(),
                      (R.deltaTransform = i)
                  }
                },
                updateTreeLayoutProjection: function () {
                  Q.layoutTree.forEach(_a), uo.preRender(F, !1, !0)
                },
                getProjectionParent: function () {
                  if (void 0 === x) {
                    for (var t = !1, e = Q.path.length - 1; e >= 0; e--) {
                      var n = Q.path[e]
                      if (n.projection.isEnabled) {
                        t = n
                        break
                      }
                    }
                    x = t
                  }
                  return x
                },
                resolveRelativeTargetBox: function () {
                  var t = Q.getProjectionParent()
                  if (
                    k.relativeTarget &&
                    t &&
                    ((function (t, e) {
                      Hi(t.target.x, t.relativeTarget.x, e.target.x),
                        Hi(t.target.y, t.relativeTarget.y, e.target.y)
                    })(k, t.projection),
                    Zi(t))
                  ) {
                    var e = k.target
                    oa(e, e, t.getLatestValues())
                  }
                },
                shouldResetTransform: function () {
                  return Boolean(m._layoutResetTransform)
                },
                pointTo: function (t) {
                  ;(M = t.projection),
                    (O = t.getLatestValues()),
                    null == b || b(),
                    (b = Dn(
                      t.onSetAxisTarget(Q.scheduleUpdateLayoutProjection),
                      t.onLayoutAnimationComplete(function () {
                        var t
                        Q.isPresent
                          ? (Q.presence = ya.Present)
                          : null === (t = Q.layoutSafeToRemove) ||
                            void 0 === t ||
                            t.call(Q)
                      })
                    ))
                },
                isPresent: !0,
                presence: ya.Entering
              }
            )
          return Q
        }
      }
      function _a(t) {
        t.resolveRelativeTargetBox()
      }
      function Ja(t) {
        t.updateLayoutProjection()
      }
      var $a,
        tu = wt(['initial'], Et(ai)),
        eu = tu.length,
        nu = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y'
        ]),
        ru = function (t) {
          return nu.has(t)
        },
        ou = function (t, e) {
          t.set(e, !1), t.set(e)
        },
        iu = function (t) {
          return t === Ce || t === we
        }
      !(function (t) {
        ;(t.width = 'width'),
          (t.height = 'height'),
          (t.left = 'left'),
          (t.right = 'right'),
          (t.top = 'top'),
          (t.bottom = 'bottom')
      })($a || ($a = {}))
      var au = function (t, e) {
          return parseFloat(t.split(', ')[e])
        },
        uu = function (t, e) {
          return function (n, r) {
            var o = r.transform
            if ('none' === o || !o) return 0
            var i = o.match(/^matrix3d\((.+)\)$/)
            if (i) return au(i[1], e)
            var a = o.match(/^matrix\((.+)\)$/)
            return a ? au(a[1], t) : 0
          }
        },
        su = new Set(['x', 'y', 'z']),
        cu = re.filter(function (t) {
          return !su.has(t)
        })
      var lu = {
          width: function (t) {
            var e = t.x
            return e.max - e.min
          },
          height: function (t) {
            var e = t.y
            return e.max - e.min
          },
          top: function (t, e) {
            var n = e.top
            return parseFloat(n)
          },
          left: function (t, e) {
            var n = e.left
            return parseFloat(n)
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top
            return parseFloat(r) + (n.max - n.min)
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left
            return parseFloat(r) + (n.max - n.min)
          },
          x: uu(4, 13),
          y: uu(5, 14)
        },
        fu = function (t, e, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (e = xt({}, e)),
            (r = xt({}, r))
          var o = Object.keys(e).filter(ru),
            i = [],
            a = !1,
            u = []
          if (
            (o.forEach(function (o) {
              var s = t.getValue(o)
              if (t.hasValue(o)) {
                var c,
                  l = n[o],
                  f = e[o],
                  d = Ko(l)
                if (rn(f))
                  for (var p = f.length, v = null === f[0] ? 1 : 0; v < p; v++)
                    c ? Ko(f[v]) : (c = Ko(f[v])) === d || (iu(d) && iu(c))
                else c = Ko(f)
                if (d !== c)
                  if (iu(d) && iu(c)) {
                    var m = s.get()
                    'string' == typeof m && s.set(parseFloat(m)),
                      'string' == typeof f
                        ? (e[o] = parseFloat(f))
                        : Array.isArray(f) &&
                          c === we &&
                          (e[o] = f.map(parseFloat))
                  } else
                    (null == d ? void 0 : d.transform) &&
                    (null == c ? void 0 : c.transform) &&
                    (0 === l || 0 === f)
                      ? 0 === l
                        ? s.set(c.transform(l))
                        : (e[o] = d.transform(f))
                      : (a ||
                          ((i = (function (t) {
                            var e = []
                            return (
                              cu.forEach(function (n) {
                                var r = t.getValue(n)
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith('scale') ? 1 : 0))
                              }),
                              e.length && t.syncRender(),
                              e
                            )
                          })(t)),
                          (a = !0)),
                        u.push(o),
                        (r[o] = void 0 !== r[o] ? r[o] : e[o]),
                        ou(s, f))
              }
            }),
            u.length)
          ) {
            var s = (function (t, e, n) {
              var r = e.measureViewportBox(),
                o = e.getInstance(),
                i = getComputedStyle(o),
                a = i.display,
                u = {
                  top: i.top,
                  left: i.left,
                  bottom: i.bottom,
                  right: i.right,
                  transform: i.transform
                }
              'none' === a && e.setStaticValue('display', t.display || 'block'),
                e.syncRender()
              var s = e.measureViewportBox()
              return (
                n.forEach(function (n) {
                  var o = e.getValue(n)
                  ou(o, lu[n](r, u)), (t[n] = lu[n](s, i))
                }),
                t
              )
            })(e, t, u)
            return (
              i.length &&
                i.forEach(function (e) {
                  var n = Et(e, 2),
                    r = n[0],
                    o = n[1]
                  t.getValue(r).set(o)
                }),
              t.syncRender(),
              { target: s, transitionEnd: r }
            )
          }
          return { target: e, transitionEnd: r }
        }
      function du(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(ru)
        })(e)
          ? fu(t, e, n, r)
          : { target: e, transitionEnd: r }
      }
      var pu = function (t, e, n, r) {
        var o = (function (t, e, n) {
          var r,
            o = bt(e, []),
            i = t.getInstance()
          if (!(i instanceof HTMLElement))
            return { target: o, transitionEnd: n }
          for (var a in (n && (n = xt({}, n)),
          t.forEachValue(function (t) {
            var e = t.get()
            if (xa(e)) {
              var n = Ea(e, i)
              n && t.set(n)
            }
          }),
          o)) {
            var u = o[a]
            if (xa(u)) {
              var s = Ea(u, i)
              s &&
                ((o[a] = s),
                n && ((null !== (r = n[a]) && void 0 !== r) || (n[a] = u)))
            }
          }
          return { target: o, transitionEnd: n }
        })(t, e, r)
        return du(t, (e = o.target), n, (r = o.transitionEnd))
      }
      var vu = {
          treeType: 'dom',
          readValueFromInstance: function (t, e) {
            if (ae(e)) {
              var n = Vo(e)
              return (n && n.default) || 0
            }
            var r,
              o = ((r = t), window.getComputedStyle(r))
            return (de(e) ? o.getPropertyValue(e) : o[e]) || 0
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
          },
          getBaseTarget: function (t, e) {
            var n
            return null === (n = t.style) || void 0 === n ? void 0 : n[e]
          },
          measureViewportBox: function (t, e) {
            return Vi(t, e.transformPagePoint)
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate
            ;(e.style.transform = r ? r({}, '') : 'none'), t.scheduleRender()
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style
            delete n[t], delete r[t]
          },
          makeTargetAnimatable: function (t, e, n, r) {
            var o = n.transformValues
            void 0 === r && (r = !0)
            var i = e.transition,
              a = e.transitionEnd,
              u = bt(e, ['transition', 'transitionEnd']),
              s = (function (t, e, n) {
                var r,
                  o,
                  i = {}
                for (var a in t)
                  i[a] =
                    null !== (r = ei(a, e)) && void 0 !== r
                      ? r
                      : null === (o = n.getValue(a)) || void 0 === o
                      ? void 0
                      : o.get()
                return i
              })(u, i || {}, t)
            if ((o && (a && (a = o(a)), u && (u = o(u)), s && (s = o(s))), r)) {
              !(function (t, e, n) {
                var r,
                  o,
                  i,
                  a,
                  u = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e)
                  }),
                  s = u.length
                if (s)
                  for (var c = 0; c < s; c++) {
                    var l = u[c],
                      f = e[l],
                      d = null
                    Array.isArray(f) && (d = f[0]),
                      null === d &&
                        (d =
                          null !==
                            (o =
                              null !== (r = n[l]) && void 0 !== r
                                ? r
                                : t.readValue(l)) && void 0 !== o
                            ? o
                            : e[l]),
                      null != d &&
                        ('string' == typeof d && /^\-?\d*\.?\d+$/.test(d)
                          ? (d = parseFloat(d))
                          : !Jo(d) && mr.test(f) && (d = Do(l, f)),
                        t.addValue(l, qo(d)),
                        (null !== (i = (a = n)[l]) && void 0 !== i) ||
                          (a[l] = d),
                        t.setBaseTarget(l, d))
                  }
              })(t, u, s)
              var c = pu(t, u, s, a)
              ;(a = c.transitionEnd), (u = c.target)
            }
            return xt({ transition: i, transitionEnd: a }, u)
          },
          scrapeMotionValuesFromProps: tn,
          build: function (t, e, n, r, o, i, a) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? 'visible' : 'hidden')
            var u = r.isEnabled && o.isHydrated
            Le(
              e,
              n,
              r,
              o,
              i,
              a.transformTemplate,
              u ? za : void 0,
              u ? Wa : void 0
            )
          },
          render: _e
        },
        mu = Ka(vu),
        hu = Ka(
          xt(xt({}, vu), {
            getBaseTarget: function (t, e) {
              return t[e]
            },
            readValueFromInstance: function (t, e) {
              var n
              return ae(e)
                ? (null === (n = Vo(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = Je.has(e) ? e : Ke(e)), t.getAttribute(e))
            },
            scrapeMotionValuesFromProps: en,
            build: function (t, e, n, r, o, i, a) {
              var u = r.isEnabled && o.isHydrated
              We(
                e,
                n,
                r,
                o,
                i,
                a.transformTemplate,
                u ? za : void 0,
                u ? Wa : void 0
              )
            },
            render: $e
          })
        ),
        yu = function (t, e) {
          return te(t)
            ? hu(e, { enableHardwareAcceleration: !1 })
            : mu(e, { enableHardwareAcceleration: !0 })
        },
        gu = xt(xt(xt(xt({}, di), In), Aa), Ha),
        Au = Jt(function (t, e) {
          return (function (t, e, n, r) {
            var o = e.forwardMotionProps,
              i = void 0 !== o && o,
              a = te(t) ? cn : fn
            return xt(xt({}, a), {
              preloadedFeatures: n,
              useRender: Ge(i),
              createVisualElement: r,
              Component: t
            })
          })(t, e, gu, yu)
        })
      const xu = {
        show: {
          y: 0,
          transition: { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] }
        },
        hidden: { y: '-100%' }
      }
      var bu,
        Eu = () =>
          u.createElement(
            Au.nav,
            {
              className: 'container nav',
              variants: xu,
              initial: 'hidden',
              animate: 'show'
            },
            u.createElement(
              'a',
              { href: '#', className: 'nav-logo' },
              'tatpol s.'
            ),
            u.createElement(
              'ul',
              { className: 'nav-items' },
              u.createElement(
                'li',
                null,
                u.createElement('a', { href: '#' }, 'Experience')
              ),
              u.createElement(
                'li',
                null,
                u.createElement('a', { href: '#' }, 'Works')
              ),
              u.createElement(
                'li',
                null,
                u.createElement('a', { href: '#' }, 'Contact')
              )
            )
          ),
        wu = n(2359)
      function Tu(t, e, n) {
        n.set(t && e ? t / e : 0)
      }
      function Pu() {
        return {
          xOffset: window.pageXOffset,
          yOffset: window.pageYOffset,
          xMaxOffset: document.body.clientWidth - window.innerWidth,
          yMaxOffset: document.body.clientHeight - window.innerHeight
        }
      }
      var Su = !1
      function Cu() {
        if (((Su = !0), 'undefined' != typeof window)) {
          var t,
            e,
            n,
            r =
              ((t = bu),
              (e = Pu),
              (n = function () {
                var n = e(),
                  r = n.xOffset,
                  o = n.yOffset,
                  i = n.xMaxOffset,
                  a = n.yMaxOffset
                t.scrollX.set(r),
                  t.scrollY.set(o),
                  Tu(r, i, t.scrollXProgress),
                  Tu(o, a, t.scrollYProgress)
              })(),
              n)
          dn(window, 'scroll', r, { passive: !0 }), dn(window, 'resize', r)
        }
      }
      function ku() {
        return (
          bu ||
            (bu = {
              scrollX: qo(0),
              scrollY: qo(0),
              scrollXProgress: qo(0),
              scrollYProgress: qo(0)
            }),
          Ft(function () {
            !Su && Cu()
          }, []),
          bu
        )
      }
      var Mu = function (t) {
        return (function (t) {
          return 'object' == typeof t && t.mix
        })(t)
          ? t.mix
          : void 0
      }
      function Ou(t) {
        var e = Lt(function () {
          return qo(t)
        })
        if ((0, u.useContext)(Mt).isStatic) {
          var n = Et((0, u.useState)(t), 2)[1]
          ;(0, u.useEffect)(function () {
            return e.onChange(n)
          }, [])
        }
        return e
      }
      function Ru(t, e) {
        var n = Ou(e()),
          r = function () {
            return n.set(e())
          }
        return (
          r(),
          (function (t, e) {
            ;(0, u.useEffect)(function () {
              var n = t.map(function (t) {
                return t.onChange(e)
              })
              return function () {
                return n.forEach(function (t) {
                  return t()
                })
              }
            })
          })(t, function () {
            return uo.update(r, !1, !0)
          }),
          n
        )
      }
      function Lu(t, e, n, r) {
        var o =
          'function' == typeof e
            ? e
            : (function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e]
                var n = !Array.isArray(t[0]),
                  r = n ? 0 : -1,
                  o = t[0 + r],
                  i = t[1 + r],
                  a = t[2 + r],
                  u = t[3 + r],
                  s = Tr(i, a, xt({ mixer: Mu(a[0]) }, u))
                return n ? s(o) : s
              })(e, n, r)
        return Array.isArray(t)
          ? ju(t, o)
          : ju([t], function (t) {
              var e = Et(t, 1)[0]
              return o(e)
            })
      }
      function ju(t, e) {
        var n = Lt(function () {
          return []
        })
        return Ru(t, function () {
          n.length = 0
          for (var r = t.length, o = 0; o < r; o++) n[o] = t[o].get()
          return e(n)
        })
      }
      function Vu(t, e) {
        void 0 === e && (e = {})
        var n = (0, u.useContext)(Mt).isStatic,
          r = (0, u.useRef)(null),
          o = Ou(le(t) ? t.get() : t)
        return (
          (0, u.useMemo)(function () {
            return o.attach(function (t, i) {
              return n
                ? i(t)
                : (r.current && r.current.stop(),
                  (r.current = lo(
                    xt(
                      xt(
                        { from: o.get(), to: t, velocity: o.getVelocity() },
                        e
                      ),
                      { onUpdate: i }
                    )
                  )),
                  o.get())
            })
          }, Object.values(e)),
          (function (t, e) {
            ;(0, u.useEffect)(
              function () {
                if (le(t)) return t.onChange(e)
              },
              [e]
            )
          })(t, function (t) {
            return o.set(parseFloat(t))
          }),
          o
        )
      }
      var Du = ({
        children: t,
        inputRange: e,
        outputRange: n,
        isSpring: r,
        damping: o,
        stiffness: i,
        className: a,
        style: s
      }) => {
        const { scrollY: c } = ku()
        let l = Lu(c, e, n)
        return (
          r && (l = Vu(l, { damping: o, stiffness: i })),
          u.createElement(Au.div, { style: { y: l, ...s }, className: a }, t)
        )
      }
      const Bu = {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: [0.6, 0.01, -0.05, 0.9],
              delay: 0.25,
              delayChildren: 0.4
            }
          }
        },
        Iu = { show: { transition: { staggerChildren: 0.05 } } },
        Nu = {
          show: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
        },
        Uu = {
          hidden: { y: '100%' },
          show: { y: 0, transition: { duration: 0.4, ease: 'easeInOut' } }
        },
        Fu = ({ text: t, coloredWord: e, reversed: n }) =>
          u.createElement(
            Au.span,
            { variants: n ? Nu : Iu, className: 'animated-text' },
            t
              .split('')
              .map((t, n) =>
                u.createElement(
                  Au.span,
                  { key: n, className: e ? 'text-primary' : '', variants: Uu },
                  t
                )
              )
          )
      var Hu = () =>
        u.createElement(
          Au.div,
          {
            className: 'container hero',
            variants: Bu,
            initial: 'hidden',
            animate: 'show'
          },
          u.createElement(
            Du,
            { inputRange: [0, 300], outputRange: [0, -100] },
            u.createElement(
              Au.div,
              { className: 'hero-text' },
              u.createElement('h3', null, 'Hello,'),
              u.createElement(
                'h1',
                { className: 'hide' },
                "I'm ",
                u.createElement(Fu, { text: 'Tatpol', coloredWord: !0 }),
                ' ',
                u.createElement(Fu, { text: 'Samakpong', reversed: !0 })
              ),
              u.createElement('p', null, 'Software Engineering Student'),
              u.createElement('button', { className: 'button' }, 'Contact Me')
            )
          ),
          u.createElement(
            'div',
            { className: 'hero-img' },
            u.createElement(Du, {
              className: 'circle',
              style: { x: 90 },
              inputRange: [0, 300],
              outputRange: [40, 80],
              isSpring: !0,
              damping: 90,
              stiffness: 1e3
            }),
            u.createElement(
              Du,
              { inputRange: [0, 300], outputRange: [0, -100] },
              u.createElement(wu.S, {
                src: '../images/Tatpol.jpg',
                alt: 'tatpol pic',
                placeholder: 'blurred',
                width: 300,
                height: 300,
                layout: 'fixed',
                __imageData: n(8104)
              })
            )
          )
        )
      var Yu = () => {
        const t = (0, u.useRef)(null),
          [e, r] = (0, u.useState)(0)
        return (
          (0, u.useEffect)(() => {
            t.current && r(t.current.offsetTop)
          }, [t.current]),
          u.createElement(
            'div',
            { className: 'container experience', ref: t },
            u.createElement(
              Du,
              {
                inputRange: [0, e],
                outputRange: [0, -100],
                isSpring: !0,
                stiffness: 800,
                damping: 100
              },
              u.createElement(
                'h3',
                { className: 'text-shadow exp-text' },
                'Experience'
              )
            ),
            u.createElement(Du, {
              className: 'line',
              style: { x: -40 },
              inputRange: [200, e + 200],
              outputRange: [0, 200],
              isSpring: !0,
              stiffness: 1e3,
              damping: 100
            }),
            u.createElement(
              Du,
              {
                inputRange: [0, e],
                outputRange: [0, -20],
                isSpring: !0,
                stiffness: 400,
                damping: 100
              },
              u.createElement(
                'div',
                { className: 'work-list' },
                u.createElement(
                  'div',
                  { className: 'work-img' },
                  u.createElement(wu.S, {
                    src: '../images/sellsuki-intern.png',
                    alt: 'sellsuki pic',
                    placeholder: 'blurred',
                    width: 150,
                    height: 150,
                    layout: 'fixed',
                    __imageData: n(5390)
                  })
                ),
                u.createElement(
                  'div',
                  { className: 'work-text' },
                  u.createElement(
                    'h4',
                    { className: 'role' },
                    'Frontend Developer'
                  ),
                  u.createElement('p', null, 'Sellsuki · Internship'),
                  u.createElement(
                    'p',
                    { className: 'date' },
                    'May 2021 - Jul 2021'
                  ),
                  u.createElement(
                    'p',
                    { className: 'hashtag' },
                    u.createElement('span', { className: 'pill vue' }, '#Vue'),
                    u.createElement('span', { className: 'dot-spacer' }, '·'),
                    u.createElement(
                      'span',
                      { className: 'pill vuex' },
                      '#Vuex'
                    ),
                    u.createElement('span', { className: 'dot-spacer' }, '·'),
                    u.createElement(
                      'span',
                      { className: 'pill vuetify' },
                      '#Vuetify'
                    )
                  )
                )
              )
            )
          )
        )
      }
      var Xu = () =>
        u.createElement(
          'div',
          { className: 'container works' },
          u.createElement(
            Du,
            { inputRange: [700, 1e3], outputRange: [0, -100] },
            u.createElement(
              'h1',
              { className: 'text-shadow works-text' },
              'Works'
            )
          )
        )
      var zu = () =>
        u.createElement(
          'div',
          { className: 'app' },
          u.createElement(yt, null),
          u.createElement(Eu, null),
          u.createElement(Hu, null),
          u.createElement(Yu, null),
          u.createElement(Xu, null)
        )
    },
    8104: function (t) {
      'use strict'
      t.exports = JSON.parse(
        '{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQD/2gAMAwEAAhADEAAAAZTrdD1GWOURXXEn/8QAHBAAAwADAAMAAAAAAAAAAAAAAQIDABETEiIy/9oACAEBAAEFArsxnSnIayvrj1HiGJFvt3OkRef/xAAWEQEBAQAAAAAAAAAAAAAAAAAQATH/2gAIAQMBAT8BLp//xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8BK//EAB4QAAIBBAMBAAAAAAAAAAAAAAABAhEhIkEQElFh/9oACAEBAAY/AqS9Fi2uIXrsyVxPsx/IjI46P//EABsQAAMAAwEBAAAAAAAAAAAAAAABESExQVFh/9oACAEBAAE/IcerKwpTn4y1wTxQeqad30eiqKtLRHlfpt+UHEOZH6I8D//aAAwDAQACAAMAAAAQP+CA/8QAGBEBAAMBAAAAAAAAAAAAAAAAARAhYcH/2gAIAQMBAT8QoAYTTOR//8QAGBEBAQADAAAAAAAAAAAAAAAAAQAQEUH/2gAIAQIBAT8QVZB2Q1j/xAAcEAEBAAMBAAMAAAAAAAAAAAABEQAhMUFxgbH/2gAIAQEAAT8Q3rMD4l+8Q0kCieMulRBGYUxlXXbX5l3RNB4g5KIND5Y5IKm/OOWidLNre5RbCqb5n//Z"},"images":{"fallback":{"src":"/static/d647bc2c6f54b93f0fdc302a2e3fc7ff/0fdf4/Tatpol.jpg","srcSet":"/static/d647bc2c6f54b93f0fdc302a2e3fc7ff/0fdf4/Tatpol.jpg 300w,\\n/static/d647bc2c6f54b93f0fdc302a2e3fc7ff/a89ca/Tatpol.jpg 600w","sizes":"300px"},"sources":[{"srcSet":"/static/d647bc2c6f54b93f0fdc302a2e3fc7ff/078c3/Tatpol.webp 300w,\\n/static/d647bc2c6f54b93f0fdc302a2e3fc7ff/6d09e/Tatpol.webp 600w","type":"image/webp","sizes":"300px"}]},"width":300,"height":300}'
      )
    },
    5390: function (t) {
      'use strict'
      t.exports = JSON.parse(
        '{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEUUlEQVQ4y22Ue2wUVRTGvzt3Zndnu3b7oBXtBhboE0krQmtMVBKjLZhS+aOCtEqsiIkaBERILPURUHwQi5XwKgRsFbDZLlVLW4RWTNGC0vAwwcijkRj/MCbGxIQWO7v3M3e6W0rCSe5Mbs53fvPdxxwAQCgUws2QAASENPXESEsNwOfzwePxwO/3Iysz3RXpudYBhlv19CN3wvbbY4ibQJ30PgHYmyZlBGfrAvJ9mKbUYeh3UheanF4A+N8CvLVjOiIzLZDwJKUB+AD4S+4OgoUZIAAFWPU6byV8m8lFGJ6XAdyYngqGXa33MUA7NsbsijG9jld2PJdBXlo7sm3lbPosLRYnPEClCRR6gPkC6DYE+EZtHvnLayMd63L0xz/QxZMChkQwGIQQ48AtvZ+uZd/Ahdg7q5aoTCAG00c5JZdGQbFjhPMJO0AbiG1YXhE/3HPSGezaShM4kAKgJCQkcqdOgTSMJHD/h+sXsyQ37MDOIhr2KnQOxTAwGsOPijjlxND9ewzvHlTIzuNdaanORw11DEh05gggPwMSaRpjByx3j3z2ZxIgHih3vGfjCleoss7+w+avnleHDi9Re7+sUzmDfxKXqLwXqVD1rCMAWl7PMZE8rWkJazawQAB/ICOH6B+J4xwVTsWIQTI0cI1TB4YYGviNGFTETyTOOMR5OgjP0nvYm8AI4Oh1fYpN5kOPE55ULnp0cryrq5rRH7axvWcV29oWsjVay5ZoDVujNWyLLGKkYynbT+9mT99yZ1l1+FagBWwU65ooz6kR+LKctjqQLVDDHVWKkTxyO8hdE8YOkPstXu96hjwE59hKfROMXn2ppqZDwPSn7BD1Oyl3HSfMNJ5YDTW8Hcy2wZ5VINtNslVS7ZNkiyQjkj9vFAyaUNc2wzlTD5rSOJZmAVVFMBAEvCawzBdI2QJgqHdDNtm/KH50XUAN7zTY/qLBinsEK4vB+bMEP1kqONps8JtXLbJ3oXNqc5h+E0eyDeDBMCQC43+jG43RA7tI0uH5BsU94L46U+/R+KivtMjdIL+vVVr33fFOWga+8BvArIIpEn4pIGy/JwF8vbGx0QWO/PsXR7sXKLaAFzeZnDwplUdWe8lW0OkoUzf+vuICo9Go/tBWXewP3CExd+5cCGEkTZYvmF+hgaMxRaVIReequnqyWXlNqJPtm8nYrxqk/ovR1b2wYoUG1kxoVXDb04Tob2r6WItvxJzR+Lf9p9Wa9W+q6icXqxUvrVFfd/ep4eHrcZ2PRCK0bfsCxjoDvF7vGMHjsRKX0o0cABfmzLmPM4sK2dqyXzvSAO0pfujg56ogP4/3l5XRsqzLAGYke5BMdjfTvNmY9GPa9Bm6U74N4HJxcTFLS0vHR0lJiV7iEID3TMsKTqwzkjunO/GEGD/0efMe1uBiAAsBPAWgCsC9M4uKUm6nv4WjJ0II161t23r50rZt3C4SK9J5YVmWW1deXu4m/wcnlPrzu3K4uwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/c66bdffb99a411a7ea5fcf8f4a3661d9/de3a1/sellsuki-intern.png","srcSet":"/static/c66bdffb99a411a7ea5fcf8f4a3661d9/de3a1/sellsuki-intern.png 150w,\\n/static/c66bdffb99a411a7ea5fcf8f4a3661d9/30cdc/sellsuki-intern.png 300w","sizes":"150px"},"sources":[{"srcSet":"/static/c66bdffb99a411a7ea5fcf8f4a3661d9/c65bc/sellsuki-intern.webp 150w,\\n/static/c66bdffb99a411a7ea5fcf8f4a3661d9/078c3/sellsuki-intern.webp 300w","type":"image/webp","sizes":"150px"}]},"width":150,"height":150}'
      )
    }
  }
])
//# sourceMappingURL=component---src-pages-index-js-7eeb0a3a2bb0395fa08d.js.map
