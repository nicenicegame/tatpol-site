;(self.webpackChunknicenicegame_github_io =
  self.webpackChunknicenicegame_github_io || []).push([
  [143],
  {
    2393: function (t, e) {
      'use strict'
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          },
        r = function (t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            a = e.origin,
            s = e.protocol,
            u = e.host,
            c = e.hostname,
            l = e.port,
            p = t.location.pathname
          !p && o && i && (p = new URL(o).pathname)
          return {
            pathname: encodeURI(decodeURI(p)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: s,
            host: u,
            hostname: c,
            port: l,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || 'initial'
          }
        },
        o = function (t, e) {
          var o = [],
            a = r(t),
            i = !1,
            s = function () {}
          return {
            get location() {
              return a
            },
            get transitioning() {
              return i
            },
            _onTransitionComplete: function () {
              ;(i = !1), s()
            },
            listen: function (e) {
              o.push(e)
              var n = function () {
                ;(a = r(t)), e({ location: a, action: 'POP' })
              }
              return (
                t.addEventListener('popstate', n),
                function () {
                  t.removeEventListener('popstate', n),
                    (o = o.filter(function (t) {
                      return t !== e
                    }))
                }
              )
            },
            navigate: function (e) {
              var u =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                c = u.state,
                l = u.replace,
                p = void 0 !== l && l
              if ('number' == typeof e) t.history.go(e)
              else {
                c = n({}, c, { key: Date.now() + '' })
                try {
                  i || p
                    ? t.history.replaceState(c, null, e)
                    : t.history.pushState(c, null, e)
                } catch (d) {
                  t.location[p ? 'replace' : 'assign'](e)
                }
              }
              ;(a = r(t)), (i = !0)
              var h = new Promise(function (t) {
                return (s = t)
              })
              return (
                o.forEach(function (t) {
                  return t({ location: a, action: 'PUSH' })
                }),
                h
              )
            }
          }
        },
        a = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '/',
            e = t.indexOf('?'),
            n = {
              pathname: e > -1 ? t.substr(0, e) : t,
              search: e > -1 ? t.substr(e) : ''
            },
            r = 0,
            o = [n],
            a = [null]
          return {
            get location() {
              return o[r]
            },
            addEventListener: function (t, e) {},
            removeEventListener: function (t, e) {},
            history: {
              get entries() {
                return o
              },
              get index() {
                return r
              },
              get state() {
                return a[r]
              },
              pushState: function (t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u
                r++,
                  o.push({ pathname: s, search: c.length ? '?' + c : c }),
                  a.push(t)
              },
              replaceState: function (t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u
                ;(o[r] = { pathname: s, search: c }), (a[r] = t)
              },
              go: function (t) {
                var e = r + t
                e < 0 || e > a.length - 1 || (r = e)
              }
            }
          }
        },
        i = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        s = o(i ? window : a()),
        u = s.navigate
      e.V5 = s
    },
    2098: function (t, e, n) {
      'use strict'
      ;(e.__esModule = !0),
        (e.shallowCompare =
          e.validateRedirect =
          e.insertParams =
          e.resolve =
          e.match =
          e.pick =
          e.startsWith =
            void 0)
      var r,
        o = n(1143),
        a = (r = o) && r.__esModule ? r : { default: r }
      var i = function (t, e) {
          return t.substr(0, e.length) === e
        },
        s = function (t, e) {
          for (
            var n = void 0,
              r = void 0,
              o = e.split('?')[0],
              i = d(o),
              s = '' === i[0],
              c = h(t),
              p = 0,
              f = c.length;
            p < f;
            p++
          ) {
            var g = !1,
              v = c[p].route
            if (v.default) r = { route: v, params: {}, uri: e }
            else {
              for (
                var y = d(v.path),
                  w = {},
                  b = Math.max(i.length, y.length),
                  P = 0;
                P < b;
                P++
              ) {
                var E = y[P],
                  R = i[P]
                if (l(E)) {
                  w[E.slice(1) || '*'] = i
                    .slice(P)
                    .map(decodeURIComponent)
                    .join('/')
                  break
                }
                if (void 0 === R) {
                  g = !0
                  break
                }
                var S = u.exec(E)
                if (S && !s) {
                  ;-1 === m.indexOf(S[1]) || (0, a.default)(!1)
                  var _ = decodeURIComponent(R)
                  w[S[1]] = _
                } else if (E !== R) {
                  g = !0
                  break
                }
              }
              if (!g) {
                n = { route: v, params: w, uri: '/' + i.slice(0, P).join('/') }
                break
              }
            }
          }
          return n || r || null
        },
        u = /^:(.+)/,
        c = function (t) {
          return u.test(t)
        },
        l = function (t) {
          return t && '*' === t[0]
        },
        p = function (t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : d(t.path).reduce(function (t, e) {
                  return (
                    (t += 4),
                    !(function (t) {
                      return '' === t
                    })(e)
                      ? c(e)
                        ? (t += 2)
                        : l(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  )
                }, 0),
            index: e
          }
        },
        h = function (t) {
          return t.map(p).sort(function (t, e) {
            return t.score < e.score
              ? 1
              : t.score > e.score
              ? -1
              : t.index - e.index
          })
        },
        d = function (t) {
          return t.replace(/(^\/+|\/+$)/g, '').split('/')
        },
        f = function (t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r]
          return (
            t +
            ((n = n.filter(function (t) {
              return t && t.length > 0
            })) && n.length > 0
              ? '?' + n.join('&')
              : '')
          )
        },
        m = ['uri', 'path']
      ;(e.startsWith = i),
        (e.pick = s),
        (e.match = function (t, e) {
          return s([{ path: t }], e)
        }),
        (e.resolve = function (t, e) {
          if (i(t, '/')) return t
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = e.split('?')[0],
            s = d(r),
            u = d(a)
          if ('' === s[0]) return f(a, o)
          if (!i(s[0], '.')) {
            var c = u.concat(s).join('/')
            return f(('/' === a ? '' : '/') + c, o)
          }
          for (var l = u.concat(s), p = [], h = 0, m = l.length; h < m; h++) {
            var g = l[h]
            '..' === g ? p.pop() : '.' !== g && p.push(g)
          }
          return f('/' + p.join('/'), o)
        }),
        (e.insertParams = function (t, e) {
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = void 0 === o ? '' : o,
            i =
              '/' +
              d(r)
                .map(function (t) {
                  var n = u.exec(t)
                  return n ? e[n[1]] : t
                })
                .join('/'),
            s = e.location,
            c = (s = void 0 === s ? {} : s).search,
            l = (void 0 === c ? '' : c).split('?')[1] || ''
          return (i = f(i, a, l))
        }),
        (e.validateRedirect = function (t, e) {
          var n = function (t) {
            return c(t)
          }
          return (
            d(t).filter(n).sort().join('/') === d(e).filter(n).sort().join('/')
          )
        }),
        (e.shallowCompare = function (t, e) {
          var n = Object.keys(t)
          return (
            n.length === Object.keys(e).length &&
            n.every(function (n) {
              return e.hasOwnProperty(n) && t[n] === e[n]
            })
          )
        })
    },
    4041: function () {
      'use strict'
      var t,
        e,
        n = (function () {
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
        r =
          ((t = ['', '']),
          (e = ['', '']),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          ))
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
      var a = (function () {
          function t() {
            for (
              var e = this, n = arguments.length, r = Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a]
            return (
              o(this, t),
              (this.tag = function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o]
                return 'function' == typeof t
                  ? e.interimTag.bind(e, t)
                  : 'string' == typeof t
                  ? e.transformEndResult(t)
                  : ((t = t.map(e.transformString.bind(e))),
                    e.transformEndResult(
                      t.reduce(e.processSubstitutions.bind(e, r))
                    ))
              }),
              r.length > 0 && Array.isArray(r[0]) && (r = r[0]),
              (this.transformers = r.map(function (t) {
                return 'function' == typeof t ? t() : t
              })),
              this.tag
            )
          }
          return (
            n(t, [
              {
                key: 'interimTag',
                value: function (t, e) {
                  for (
                    var n = arguments.length,
                      o = Array(n > 2 ? n - 2 : 0),
                      a = 2;
                    a < n;
                    a++
                  )
                    o[a - 2] = arguments[a]
                  return this.tag(r, t.apply(void 0, [e].concat(o)))
                }
              },
              {
                key: 'processSubstitutions',
                value: function (t, e, n) {
                  var r = this.transformSubstitution(t.shift(), e)
                  return ''.concat(e, r, n)
                }
              },
              {
                key: 'transformString',
                value: function (t) {
                  return this.transformers.reduce(function (t, e) {
                    return e.onString ? e.onString(t) : t
                  }, t)
                }
              },
              {
                key: 'transformSubstitution',
                value: function (t, e) {
                  return this.transformers.reduce(function (t, n) {
                    return n.onSubstitution ? n.onSubstitution(t, e) : t
                  }, t)
                }
              },
              {
                key: 'transformEndResult',
                value: function (t) {
                  return this.transformers.reduce(function (t, e) {
                    return e.onEndResult ? e.onEndResult(t) : t
                  }, t)
                }
              }
            ]),
            t
          )
        })(),
        i = a,
        s = { separator: '', conjunction: '', serial: !1 },
        u = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s
          return {
            onSubstitution: function (e, n) {
              if (Array.isArray(e)) {
                var r = e.length,
                  o = t.separator,
                  a = t.conjunction,
                  i = t.serial,
                  s = n.match(/(\n?[^\S\n]+)$/)
                if (
                  ((e = s ? e.join(o + s[1]) : e.join(o + ' ')), a && r > 1)
                ) {
                  var u = e.lastIndexOf(o)
                  e = e.slice(0, u) + (i ? o : '') + ' ' + a + e.slice(u + 1)
                }
              }
              return e
            }
          }
        }
      function c(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e]
          return n
        }
        return Array.from(t)
      }
      var l = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'initial'
          return {
            onEndResult: function (e) {
              if ('initial' === t) {
                var n = e.match(/^[^\S\n]*(?=\S)/gm),
                  r =
                    n &&
                    Math.min.apply(
                      Math,
                      c(
                        n.map(function (t) {
                          return t.length
                        })
                      )
                    )
                if (r) {
                  var o = new RegExp('^.{' + r + '}', 'gm')
                  return e.replace(o, '')
                }
                return e
              }
              if ('all' === t) return e.replace(/^[^\S\n]+/gm, '')
              throw new Error('Unknown type: ' + t)
            }
          }
        },
        p = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''
          return {
            onEndResult: function (e) {
              if ('' === t) return e.trim()
              if ('start' === (t = t.toLowerCase()) || 'left' === t)
                return e.replace(/^\s*/, '')
              if ('end' === t || 'right' === t) return e.replace(/\s*$/, '')
              throw new Error('Side not supported: ' + t)
            }
          }
        },
        h =
          (new i(u({ separator: ',' }), l, p),
          new i(u({ separator: ',', conjunction: 'and' }), l, p),
          new i(u({ separator: ',', conjunction: 'or' }), l, p),
          function (t) {
            return {
              onSubstitution: function (e, n) {
                if (null == t || 'string' != typeof t)
                  throw new Error(
                    'You need to specify a string character to split by.'
                  )
                return (
                  'string' == typeof e && e.includes(t) && (e = e.split(t)), e
                )
              }
            }
          }),
        d = function (t) {
          return null != t && !Number.isNaN(t) && 'boolean' != typeof t
        },
        f = function () {
          return {
            onSubstitution: function (t) {
              return Array.isArray(t) ? t.filter(d) : d(t) ? t : ''
            }
          }
        },
        m =
          (new i(h('\n'), f, u, l, p),
          function (t, e) {
            return {
              onSubstitution: function (n, r) {
                if (null == t || null == e)
                  throw new Error(
                    'replaceSubstitutionTransformer requires at least 2 arguments.'
                  )
                return null == n ? n : n.toString().replace(t, e)
              }
            }
          }),
        g =
          (new i(
            h('\n'),
            u,
            l,
            p,
            m(/&/g, '&amp;'),
            m(/</g, '&lt;'),
            m(/>/g, '&gt;'),
            m(/"/g, '&quot;'),
            m(/'/g, '&#x27;'),
            m(/`/g, '&#x60;')
          ),
          function (t, e) {
            return {
              onEndResult: function (n) {
                if (null == t || null == e)
                  throw new Error(
                    'replaceResultTransformer requires at least 2 arguments.'
                  )
                return n.replace(t, e)
              }
            }
          })
      new i(g(/(?:\n(?:\s*))+/g, ' '), p),
        new i(g(/(?:\n\s*)/g, ''), p),
        new i(u({ separator: ',' }), g(/(?:\s+)/g, ' '), p),
        new i(u({ separator: ',', conjunction: 'or' }), g(/(?:\s+)/g, ' '), p),
        new i(u({ separator: ',', conjunction: 'and' }), g(/(?:\s+)/g, ' '), p),
        new i(u, l, p),
        new i(u, g(/(?:\s+)/g, ' '), p),
        new i(l, p),
        new i(l('all'), p)
    },
    6494: function (t) {
      'use strict'
      t.exports = Object.assign
    },
    8037: function (t, e, n) {
      'use strict'
      var r = n(8580)
      ;(e.dq = m),
        (e.mc = function (t) {
          return m(t, g())
        }),
        (e.c4 = e.ZP = void 0)
      var o = r(n(3246)),
        a = r(n(5666)),
        i = r(n(3793)),
        s = r(n(4362)),
        u = r(n(5697)),
        c = r(n(7294)),
        l = n(9499),
        p = n(2098),
        h = n(1752)
      e.cP = h.parsePath
      var d = [
          'to',
          'getProps',
          'onClick',
          'onMouseEnter',
          'activeClassName',
          'activeStyle',
          'innerRef',
          'partiallyActive',
          'state',
          'replace',
          '_location'
        ],
        f = function (t) {
          return null == t ? void 0 : t.startsWith('/')
        }
      function m(t, e) {
        var n, r
        if ((void 0 === e && (e = v()), !y(t))) return t
        if (t.startsWith('./') || t.startsWith('../')) return t
        var o =
          null !== (n = null !== (r = e) && void 0 !== r ? r : g()) &&
          void 0 !== n
            ? n
            : '/'
        return (
          '' +
          (null != o && o.endsWith('/') ? o.slice(0, -1) : o) +
          (t.startsWith('/') ? t : '/' + t)
        )
      }
      var g = function () {
          return ''
        },
        v = function () {
          return ''
        },
        y = function (t) {
          return (
            t &&
            !t.startsWith('http://') &&
            !t.startsWith('https://') &&
            !t.startsWith('//')
          )
        }
      var w = function (t, e) {
          return 'number' == typeof t
            ? t
            : y(t)
            ? f(t)
              ? m(t)
              : (function (t, e) {
                  return f(t) ? t : (0, p.resolve)(t, e)
                })(t, e)
            : t
        },
        b = {
          activeClassName: u.default.string,
          activeStyle: u.default.object,
          partiallyActive: u.default.bool
        }
      function P(t) {
        return c.default.createElement(l.Location, null, function (e) {
          var n = e.location
          return c.default.createElement(
            E,
            (0, s.default)({}, t, { _location: n })
          )
        })
      }
      var E = (function (t) {
        function e(e) {
          var n
          ;(n = t.call(this, e) || this).defaultGetProps = function (t) {
            var e = t.isPartiallyCurrent,
              r = t.isCurrent
            return (n.props.partiallyActive ? e : r)
              ? {
                  className: [n.props.className, n.props.activeClassName]
                    .filter(Boolean)
                    .join(' '),
                  style: (0, s.default)({}, n.props.style, n.props.activeStyle)
                }
              : null
          }
          var r = !1
          return (
            'undefined' != typeof window &&
              window.IntersectionObserver &&
              (r = !0),
            (n.state = { IOSupported: r }),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          )
        }
        ;(0, i.default)(e, t)
        var n = e.prototype
        return (
          (n._prefetch = function () {
            var t = window.location.pathname
            this.props._location &&
              this.props._location.pathname &&
              (t = this.props._location.pathname)
            var e = w(this.props.to, t),
              n = (0, h.parsePath)(e).pathname
            t !== n && ___loader.enqueue(n)
          }),
          (n.componentDidUpdate = function (t, e) {
            this.props.to === t.to || this.state.IOSupported || this._prefetch()
          }),
          (n.componentDidMount = function () {
            this.state.IOSupported || this._prefetch()
          }),
          (n.componentWillUnmount = function () {
            if (this.io) {
              var t = this.io,
                e = t.instance,
                n = t.el
              e.unobserve(n), e.disconnect()
            }
          }),
          (n.handleRef = function (t) {
            var e,
              n,
              r,
              o = this
            this.props.innerRef && this.props.innerRef.hasOwnProperty('current')
              ? (this.props.innerRef.current = t)
              : this.props.innerRef && this.props.innerRef(t),
              this.state.IOSupported &&
                t &&
                (this.io =
                  ((e = t),
                  (n = function () {
                    o._prefetch()
                  }),
                  (r = new window.IntersectionObserver(function (t) {
                    t.forEach(function (t) {
                      e === t.target &&
                        (t.isIntersecting || t.intersectionRatio > 0) &&
                        (r.unobserve(e), r.disconnect(), n())
                    })
                  })).observe(e),
                  { instance: r, el: e }))
          }),
          (n.render = function () {
            var t = this,
              e = this.props,
              n = e.to,
              r = e.getProps,
              a = void 0 === r ? this.defaultGetProps : r,
              i = e.onClick,
              u = e.onMouseEnter,
              p =
                (e.activeClassName,
                e.activeStyle,
                e.innerRef,
                e.partiallyActive,
                e.state),
              f = e.replace,
              m = e._location,
              g = (0, o.default)(e, d)
            var v = w(n, m.pathname)
            return y(v)
              ? c.default.createElement(
                  l.Link,
                  (0, s.default)(
                    {
                      to: v,
                      state: p,
                      getProps: a,
                      innerRef: this.handleRef,
                      onMouseEnter: function (t) {
                        u && u(t),
                          ___loader.hovering((0, h.parsePath)(v).pathname)
                      },
                      onClick: function (e) {
                        if (
                          (i && i(e),
                          !(
                            0 !== e.button ||
                            t.props.target ||
                            e.defaultPrevented ||
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          ))
                        ) {
                          e.preventDefault()
                          var n = f,
                            r = encodeURI(v) === m.pathname
                          'boolean' != typeof f && r && (n = !0),
                            window.___navigate(v, { state: p, replace: n })
                        }
                        return !0
                      }
                    },
                    g
                  )
                )
              : c.default.createElement('a', (0, s.default)({ href: v }, g))
          }),
          e
        )
      })(c.default.Component)
      E.propTypes = (0, s.default)({}, b, {
        onClick: u.default.func,
        to: u.default.string.isRequired,
        replace: u.default.bool,
        state: u.default.object
      })
      var R = c.default.forwardRef(function (t, e) {
        return c.default.createElement(P, (0, s.default)({ innerRef: e }, t))
      })
      e.ZP = R
      e.c4 = function (t, e) {
        window.___navigate(w(t, window.location.pathname), e)
      }
    },
    1752: function (t, e) {
      'use strict'
      ;(e.__esModule = !0),
        (e.parsePath = function (t) {
          var e = t || '/',
            n = '',
            r = '',
            o = e.indexOf('#')
          ;-1 !== o && ((r = e.substr(o)), (e = e.substr(0, o)))
          var a = e.indexOf('?')
          ;-1 !== a && ((n = e.substr(a)), (e = e.substr(0, a)))
          return {
            pathname: e,
            search: '?' === n ? '' : n,
            hash: '#' === r ? '' : r
          }
        })
    },
    9679: function (t, e, n) {
      'use strict'
      e.p2 = e.$C = void 0
      var r = n(1432)
      e.$C = r.ScrollHandler
      var o = n(4855)
      e.p2 = o.useScrollRestoration
    },
    1432: function (t, e, n) {
      'use strict'
      var r = n(8580)
      ;(e.__esModule = !0), (e.ScrollHandler = e.ScrollContext = void 0)
      var o = r(n(5666)),
        a = r(n(3793)),
        i = (function (t, e) {
          if (!e && t && t.__esModule) return t
          if (null === t || ('object' != typeof t && 'function' != typeof t))
            return { default: t }
          var n = c(e)
          if (n && n.has(t)) return n.get(t)
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var a in t)
            if ('default' !== a && Object.prototype.hasOwnProperty.call(t, a)) {
              var i = o ? Object.getOwnPropertyDescriptor(t, a) : null
              i && (i.get || i.set)
                ? Object.defineProperty(r, a, i)
                : (r[a] = t[a])
            }
          ;(r.default = t), n && n.set(t, r)
          return r
        })(n(7294)),
        s = r(n(5697)),
        u = n(1142)
      function c(t) {
        if ('function' != typeof WeakMap) return null
        var e = new WeakMap(),
          n = new WeakMap()
        return (c = function (t) {
          return t ? n : e
        })(t)
      }
      var l = i.createContext(new u.SessionStorage())
      ;(e.ScrollContext = l), (l.displayName = 'GatsbyScrollContext')
      var p = (function (t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a]
          return (
            ((e = t.call.apply(t, [this].concat(r)) || this)._stateStorage =
              new u.SessionStorage()),
            (e._isTicking = !1),
            (e._latestKnownScrollY = 0),
            (e.scrollListener = function () {
              ;(e._latestKnownScrollY = window.scrollY),
                e._isTicking ||
                  ((e._isTicking = !0),
                  requestAnimationFrame(e._saveScroll.bind((0, o.default)(e))))
            }),
            (e.windowScroll = function (t, n) {
              e.shouldUpdateScroll(n, e.props) && window.scrollTo(0, t)
            }),
            (e.scrollToHash = function (t, n) {
              var r = document.getElementById(t.substring(1))
              r && e.shouldUpdateScroll(n, e.props) && r.scrollIntoView()
            }),
            (e.shouldUpdateScroll = function (t, n) {
              var r = e.props.shouldUpdateScroll
              return !r || r.call((0, o.default)(e), t, n)
            }),
            e
          )
        }
        ;(0, a.default)(e, t)
        var n = e.prototype
        return (
          (n._saveScroll = function () {
            var t = this.props.location.key || null
            t &&
              this._stateStorage.save(
                this.props.location,
                t,
                this._latestKnownScrollY
              ),
              (this._isTicking = !1)
          }),
          (n.componentDidMount = function () {
            var t
            window.addEventListener('scroll', this.scrollListener)
            var e = this.props.location,
              n = e.key,
              r = e.hash
            n && (t = this._stateStorage.read(this.props.location, n)),
              t
                ? this.windowScroll(t, void 0)
                : r && this.scrollToHash(decodeURI(r), void 0)
          }),
          (n.componentWillUnmount = function () {
            window.removeEventListener('scroll', this.scrollListener)
          }),
          (n.componentDidUpdate = function (t) {
            var e,
              n = this.props.location,
              r = n.hash,
              o = n.key
            o && (e = this._stateStorage.read(this.props.location, o)),
              r ? this.scrollToHash(decodeURI(r), t) : this.windowScroll(e, t)
          }),
          (n.render = function () {
            return i.createElement(
              l.Provider,
              { value: this._stateStorage },
              this.props.children
            )
          }),
          e
        )
      })(i.Component)
      ;(e.ScrollHandler = p),
        (p.propTypes = {
          shouldUpdateScroll: s.default.func,
          children: s.default.element.isRequired,
          location: s.default.object.isRequired
        })
    },
    1142: function (t, e) {
      'use strict'
      ;(e.__esModule = !0), (e.SessionStorage = void 0)
      var n = '___GATSBY_REACT_ROUTER_SCROLL',
        r = (function () {
          function t() {}
          var e = t.prototype
          return (
            (e.read = function (t, e) {
              var r = this.getStateKey(t, e)
              try {
                var o = window.sessionStorage.getItem(r)
                return o ? JSON.parse(o) : 0
              } catch (a) {
                return window && window[n] && window[n][r] ? window[n][r] : 0
              }
            }),
            (e.save = function (t, e, r) {
              var o = this.getStateKey(t, e),
                a = JSON.stringify(r)
              try {
                window.sessionStorage.setItem(o, a)
              } catch (i) {
                ;(window && window[n]) || (window[n] = {}),
                  (window[n][o] = JSON.parse(a))
              }
            }),
            (e.getStateKey = function (t, e) {
              var n = '@@scroll|' + t.pathname
              return null == e ? n : n + '|' + e
            }),
            t
          )
        })()
      e.SessionStorage = r
    },
    4855: function (t, e, n) {
      'use strict'
      ;(e.__esModule = !0),
        (e.useScrollRestoration = function (t) {
          var e = (0, a.useLocation)(),
            n = (0, o.useContext)(r.ScrollContext),
            i = (0, o.useRef)(null)
          return (
            (0, o.useLayoutEffect)(
              function () {
                if (i.current) {
                  var r = n.read(e, t)
                  i.current.scrollTo(0, r || 0)
                }
              },
              [e.key]
            ),
            {
              ref: i,
              onScroll: function () {
                i.current && n.save(e, t, i.current.scrollTop)
              }
            }
          )
        })
      var r = n(1432),
        o = n(7294),
        a = n(9499)
    },
    4999: function (t, e, n) {
      e.components = {
        'component---src-pages-index-js': () =>
          Promise.all([n.e(532), n.e(678)]).then(n.bind(n, 6135))
      }
    },
    5182: function (t, e, n) {
      t.exports = [
        { plugin: n(6988), options: { plugins: [] } },
        {
          plugin: n(992),
          options: {
            plugins: [],
            name: 'nicenicegame Porfolio',
            short_name: 'Portfolio',
            start_url: '/',
            display: 'standalone',
            icon: 'static/favicon.svg',
            legacy: !0,
            theme_color_in_head: !0,
            cache_busting_mode: 'query',
            crossOrigin: 'anonymous',
            include_favicon: !0,
            cacheDigest: 'e8e8f759ef0ad9a3fd65a2a7cb460431'
          }
        }
      ]
    },
    7343: function (t, e, n) {
      const r = n(5182),
        {
          getResourceURLsForPathname: o,
          loadPage: a,
          loadPageSync: i
        } = n(8741).jN
      ;(e.h = (t, e = {}, n, s) => {
        let u = r.map((n) => {
          if (!n.plugin[t]) return
          ;(e.getResourceURLsForPathname = o),
            (e.loadPage = a),
            (e.loadPageSync = i)
          const r = n.plugin[t](e, n.options)
          return r && s && (e = s({ args: e, result: r, plugin: n })), r
        })
        return (
          (u = u.filter((t) => void 0 !== t)), u.length > 0 ? u : n ? [n] : []
        )
      }),
        (e.I = (t, e, n) =>
          r.reduce(
            (n, r) =>
              r.plugin[t] ? n.then(() => r.plugin[t](e, r.options)) : n,
            Promise.resolve()
          ))
    },
    8110: function (t, e, n) {
      'use strict'
      n.d(e, {
        Z: function () {
          return r
        }
      })
      var r = (function (t) {
        return (
          (t = t || Object.create(null)),
          {
            on: function (e, n) {
              ;(t[e] || (t[e] = [])).push(n)
            },
            off: function (e, n) {
              t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1)
            },
            emit: function (e, n) {
              ;(t[e] || []).slice().map(function (t) {
                t(n)
              }),
                (t['*'] || []).slice().map(function (t) {
                  t(e, n)
                })
            }
          }
        )
      })()
    },
    2257: function (t, e, n) {
      'use strict'
      n.d(e, {
        UD: function () {
          return h
        },
        Cj: function () {
          return f
        },
        GA: function () {
          return d
        },
        DS: function () {
          return p
        }
      })
      var r = n(2098),
        o = n(1578),
        a = (t) =>
          void 0 === t
            ? t
            : '/' === t
            ? '/'
            : '/' === t.charAt(t.length - 1)
            ? t.slice(0, -1)
            : t,
        i = n(969)
      const s = new Map()
      let u = []
      const c = (t) => {
        const e = decodeURIComponent(t)
        return (0, o.Z)(e, decodeURIComponent('')).split('#')[0].split('?')[0]
      }
      function l(t) {
        return t.startsWith('/') ||
          t.startsWith('https://') ||
          t.startsWith('http://')
          ? t
          : new URL(
              t,
              window.location.href +
                (window.location.href.endsWith('/') ? '' : '/')
            ).pathname
      }
      const p = (t) => {
          u = t
        },
        h = (t) => {
          const e = m(t),
            n = u.map(({ path: t, matchPath: e }) => ({
              path: e,
              originalPath: t
            })),
            o = (0, r.pick)(n, e)
          return o ? a(o.route.originalPath) : null
        },
        d = (t) => {
          const e = m(t),
            n = u.map(({ path: t, matchPath: e }) => ({
              path: e,
              originalPath: t
            })),
            o = (0, r.pick)(n, e)
          return o ? o.params : {}
        },
        f = (t) => {
          const e = c(l(t))
          if (s.has(e)) return s.get(e)
          const n = (0, i.J)(t)
          if (n) return f(n.toPath)
          let r = h(e)
          return r || (r = m(t)), s.set(e, r), r
        },
        m = (t) => {
          let e = c(l(t))
          return '/index.html' === e && (e = '/'), (e = a(e)), e
        }
    },
    5444: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          Link: function () {
            return i.ZP
          },
          withAssetPrefix: function () {
            return i.mc
          },
          withPrefix: function () {
            return i.dq
          },
          graphql: function () {
            return m
          },
          parsePath: function () {
            return i.cP
          },
          navigate: function () {
            return i.c4
          },
          useScrollRestoration: function () {
            return s.p2
          },
          StaticQueryContext: function () {
            return p
          },
          StaticQuery: function () {
            return d
          },
          PageRenderer: function () {
            return c.a
          },
          useStaticQuery: function () {
            return f
          },
          prefetchPathname: function () {
            return l
          }
        })
      var r = n(7294),
        o = n(5697),
        a = n.n(o),
        i = n(8037),
        s = n(9679),
        u = n(861),
        c = n.n(u)
      const l = n(8741).ZP.enqueue,
        p = r.createContext({})
      function h({ staticQueryData: t, data: e, query: n, render: o }) {
        const a = e ? e.data : t[n] && t[n].data
        return r.createElement(
          r.Fragment,
          null,
          a && o(a),
          !a && r.createElement('div', null, 'Loading (StaticQuery)')
        )
      }
      const d = (t) => {
          const { data: e, query: n, render: o, children: a } = t
          return r.createElement(p.Consumer, null, (t) =>
            r.createElement(h, {
              data: e,
              query: n,
              render: o || a,
              staticQueryData: t
            })
          )
        },
        f = (t) => {
          var e
          r.useContext
          const n = r.useContext(p)
          if (isNaN(Number(t)))
            throw new Error(
              `useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql\`${t}\`);\n`
            )
          if (null !== (e = n[t]) && void 0 !== e && e.data) return n[t].data
          throw new Error(
            'The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues'
          )
        }
      function m() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      d.propTypes = {
        data: a().object,
        query: a().string.isRequired,
        render: a().func,
        children: a().func
      }
    },
    8741: function (t, e, n) {
      'use strict'
      n.d(e, {
        uQ: function () {
          return u
        },
        kL: function () {
          return f
        },
        ZP: function () {
          return y
        },
        hs: function () {
          return w
        },
        jN: function () {
          return v
        },
        N1: function () {
          return g
        }
      })
      const r = (function (t) {
          if ('undefined' == typeof document) return !1
          const e = document.createElement('link')
          try {
            if (e.relList && 'function' == typeof e.relList.supports)
              return e.relList.supports(t)
          } catch (n) {
            return !1
          }
          return !1
        })('prefetch')
          ? function (t, e) {
              return new Promise((n, r) => {
                if ('undefined' == typeof document) return void r()
                const o = document.createElement('link')
                o.setAttribute('rel', 'prefetch'),
                  o.setAttribute('href', t),
                  Object.keys(e).forEach((t) => {
                    o.setAttribute(t, e[t])
                  }),
                  (o.onload = n),
                  (o.onerror = r)
                ;(
                  document.getElementsByTagName('head')[0] ||
                  document.getElementsByName('script')[0].parentNode
                ).appendChild(o)
              })
            }
          : function (t) {
              return new Promise((e, n) => {
                const r = new XMLHttpRequest()
                r.open('GET', t, !0),
                  (r.onload = () => {
                    200 === r.status ? e() : n()
                  }),
                  r.send(null)
              })
            },
        o = {}
      var a = function (t, e) {
          return new Promise((n) => {
            o[t]
              ? n()
              : r(t, e)
                  .then(() => {
                    n(), (o[t] = !0)
                  })
                  .catch(() => {})
          })
        },
        i = n(8110),
        s = n(2257)
      const u = { Error: 'error', Success: 'success' },
        c = (t) => (t && t.default) || t,
        l = (t) =>
          `/page-data/${
            '/' === t
              ? 'index'
              : ((t) =>
                  (t = '/' === t[0] ? t.slice(1) : t).endsWith('/')
                    ? t.slice(0, -1)
                    : t)(t)
          }/page-data.json`
      function p(t, e = 'GET') {
        return new Promise((n, r) => {
          const o = new XMLHttpRequest()
          o.open(e, t, !0),
            (o.onreadystatechange = () => {
              4 == o.readyState && n(o)
            }),
            o.send(null)
        })
      }
      const h = (t, e = null) => {
        const n = {
          componentChunkName: t.componentChunkName,
          path: t.path,
          webpackCompilationHash: t.webpackCompilationHash,
          matchPath: t.matchPath,
          staticQueryHashes: t.staticQueryHashes
        }
        return { component: e, json: t.result, page: n }
      }
      const d = (t) => (window.___chunkMapping[t] || []).map((t) => '' + t)
      class f extends class {
        constructor(t, e) {
          var n, r, o
          ;(n = this),
            (r = 'inFlightNetworkRequests'),
            (o = new Map()),
            r in n
              ? Object.defineProperty(n, r, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (n[r] = o),
            (this.pageDb = new Map()),
            (this.inFlightDb = new Map()),
            (this.staticQueryDb = {}),
            (this.pageDataDb = new Map()),
            (this.prefetchTriggered = new Set()),
            (this.prefetchCompleted = new Set()),
            (this.loadComponent = t),
            (0, s.DS)(e)
        }
        memoizedGet(t) {
          let e = this.inFlightNetworkRequests.get(t)
          return (
            e || ((e = p(t, 'GET')), this.inFlightNetworkRequests.set(t, e)),
            e
              .then((e) => (this.inFlightNetworkRequests.delete(t), e))
              .catch((e) => {
                throw (this.inFlightNetworkRequests.delete(t), e)
              })
          )
        }
        setApiRunner(t) {
          ;(this.apiRunner = t),
            (this.prefetchDisabled = t('disableCorePrefetching').some((t) => t))
        }
        fetchPageDataJson(t) {
          const { pagePath: e, retries: n = 0 } = t,
            r = l(e)
          return this.memoizedGet(r).then((r) => {
            const { status: o, responseText: a } = r
            if (200 === o)
              try {
                const e = JSON.parse(a)
                if (void 0 === e.path)
                  throw new Error('not a valid pageData response')
                return Object.assign(t, { status: u.Success, payload: e })
              } catch (i) {}
            return 404 === o || 200 === o
              ? '/404.html' === e
                ? Object.assign(t, { status: u.Error })
                : this.fetchPageDataJson(
                    Object.assign(t, { pagePath: '/404.html', notFound: !0 })
                  )
              : 500 === o
              ? Object.assign(t, { status: u.Error })
              : n < 3
              ? this.fetchPageDataJson(Object.assign(t, { retries: n + 1 }))
              : Object.assign(t, { status: u.Error })
          })
        }
        loadPageDataJson(t) {
          const e = (0, s.Cj)(t)
          if (this.pageDataDb.has(e)) {
            const t = this.pageDataDb.get(e)
            return Promise.resolve(t)
          }
          return this.fetchPageDataJson({ pagePath: e }).then(
            (t) => (this.pageDataDb.set(e, t), t)
          )
        }
        findMatchPath(t) {
          return (0, s.UD)(t)
        }
        loadPage(t) {
          const e = (0, s.Cj)(t)
          if (this.pageDb.has(e)) {
            const t = this.pageDb.get(e)
            return t.error
              ? { error: t.error, status: t.status }
              : Promise.resolve(t.payload)
          }
          if (this.inFlightDb.has(e)) return this.inFlightDb.get(e)
          const n = Promise.all([
            this.loadAppData(),
            this.loadPageDataJson(e)
          ]).then((t) => {
            const n = t[1]
            if (n.status === u.Error) return { status: u.Error }
            let r = n.payload
            const { componentChunkName: o, staticQueryHashes: a = [] } = r,
              s = {},
              c = this.loadComponent(o).then((e) => {
                let o
                return (
                  (s.createdAt = new Date()),
                  !e || e instanceof Error
                    ? ((s.status = u.Error), (s.error = e))
                    : ((s.status = u.Success),
                      !0 === n.notFound && (s.notFound = !0),
                      (r = Object.assign(r, {
                        webpackCompilationHash: t[0]
                          ? t[0].webpackCompilationHash
                          : ''
                      })),
                      (o = h(r, e))),
                  o
                )
              }),
              l = Promise.all(
                a.map((t) => {
                  if (this.staticQueryDb[t]) {
                    const e = this.staticQueryDb[t]
                    return { staticQueryHash: t, jsonPayload: e }
                  }
                  return this.memoizedGet(`/page-data/sq/d/${t}.json`)
                    .then((e) => {
                      const n = JSON.parse(e.responseText)
                      return { staticQueryHash: t, jsonPayload: n }
                    })
                    .catch(() => {
                      throw new Error(
                        `We couldn't load "/page-data/sq/d/${t}.json"`
                      )
                    })
                })
              ).then((t) => {
                const e = {}
                return (
                  t.forEach(({ staticQueryHash: t, jsonPayload: n }) => {
                    ;(e[t] = n), (this.staticQueryDb[t] = n)
                  }),
                  e
                )
              })
            return Promise.all([c, l])
              .then(([t, n]) => {
                let r
                return (
                  t &&
                    ((r = { ...t, staticQueryResults: n }),
                    (s.payload = r),
                    i.Z.emit('onPostLoadPageResources', {
                      page: r,
                      pageResources: r
                    })),
                  this.pageDb.set(e, s),
                  s.error ? { error: s.error, status: s.status } : r
                )
              })
              .catch((t) => ({ error: t, status: u.Error }))
          })
          return (
            n
              .then(() => {
                this.inFlightDb.delete(e)
              })
              .catch((t) => {
                throw (this.inFlightDb.delete(e), t)
              }),
            this.inFlightDb.set(e, n),
            n
          )
        }
        loadPageSync(t, e = {}) {
          const n = (0, s.Cj)(t)
          if (this.pageDb.has(n)) {
            const t = this.pageDb.get(n)
            if (t.payload) return t.payload
            if (null != e && e.withErrorDetails)
              return { error: t.error, status: t.status }
          }
        }
        shouldPrefetch(t) {
          return (
            !!(() => {
              if (
                'connection' in navigator &&
                void 0 !== navigator.connection
              ) {
                if ((navigator.connection.effectiveType || '').includes('2g'))
                  return !1
                if (navigator.connection.saveData) return !1
              }
              return !0
            })() && !this.pageDb.has(t)
          )
        }
        prefetch(t) {
          if (!this.shouldPrefetch(t)) return !1
          if (
            (this.prefetchTriggered.has(t) ||
              (this.apiRunner('onPrefetchPathname', { pathname: t }),
              this.prefetchTriggered.add(t)),
            this.prefetchDisabled)
          )
            return !1
          const e = (0, s.Cj)(t)
          return (
            this.doPrefetch(e).then(() => {
              this.prefetchCompleted.has(t) ||
                (this.apiRunner('onPostPrefetchPathname', { pathname: t }),
                this.prefetchCompleted.add(t))
            }),
            !0
          )
        }
        doPrefetch(t) {
          const e = l(t)
          return a(e, { crossOrigin: 'anonymous', as: 'fetch' }).then(() =>
            this.loadPageDataJson(t)
          )
        }
        hovering(t) {
          this.loadPage(t)
        }
        getResourceURLsForPathname(t) {
          const e = (0, s.Cj)(t),
            n = this.pageDataDb.get(e)
          if (n) {
            const t = h(n.payload)
            return [...d(t.page.componentChunkName), l(e)]
          }
          return null
        }
        isPageNotFound(t) {
          const e = (0, s.Cj)(t),
            n = this.pageDb.get(e)
          return !n || n.notFound
        }
        loadAppData(t = 0) {
          return this.memoizedGet('/page-data/app-data.json').then((e) => {
            const { status: n, responseText: r } = e
            let o
            if (200 !== n && t < 3) return this.loadAppData(t + 1)
            if (200 === n)
              try {
                const t = JSON.parse(r)
                if (void 0 === t.webpackCompilationHash)
                  throw new Error('not a valid app-data response')
                o = t
              } catch (a) {}
            return o
          })
        }
      } {
        constructor(t, e, n) {
          super((e) => {
            if (!t.components[e])
              throw new Error(
                `We couldn't find the correct component chunk with the name ${e}`
              )
            return t.components[e]()
              .then(c)
              .catch((t) => t)
          }, e),
            n &&
              this.pageDataDb.set(n.path, {
                pagePath: n.path,
                payload: n,
                status: 'success'
              })
        }
        doPrefetch(t) {
          return super.doPrefetch(t).then((t) => {
            if (t.status !== u.Success) return Promise.resolve()
            const e = t.payload,
              n = e.componentChunkName,
              r = d(n)
            return Promise.all(r.map(a)).then(() => e)
          })
        }
        loadPageDataJson(t) {
          return super
            .loadPageDataJson(t)
            .then((e) =>
              e.notFound
                ? p(t, 'HEAD').then((t) =>
                    200 === t.status ? { status: u.Error } : e
                  )
                : e
            )
        }
      }
      let m
      const g = (t) => {
          m = t
        },
        v = {
          enqueue: (t) => m.prefetch(t),
          getResourceURLsForPathname: (t) => m.getResourceURLsForPathname(t),
          loadPage: (t) => m.loadPage(t),
          loadPageSync: (t, e = {}) => m.loadPageSync(t, e),
          prefetch: (t) => m.prefetch(t),
          isPageNotFound: (t) => m.isPageNotFound(t),
          hovering: (t) => m.hovering(t),
          loadAppData: () => m.loadAppData()
        }
      var y = v
      function w() {
        return m ? m.staticQueryDb : {}
      }
    },
    804: function (t, e, n) {
      'use strict'
      var r = n(7294),
        o = n(5697),
        a = n.n(o),
        i = n(7343),
        s = n(2257)
      class u extends r.Component {
        render() {
          const t = {
              ...this.props,
              params: {
                ...(0, s.GA)(this.props.location.pathname),
                ...this.props.pageResources.json.pageContext.__params
              }
            },
            e = (0, r.createElement)(this.props.pageResources.component, {
              ...t,
              key: this.props.path || this.props.pageResources.page.path
            })
          return (0, i.h)(
            'wrapPageElement',
            { element: e, props: t },
            e,
            ({ result: e }) => ({ element: e, props: t })
          ).pop()
        }
      }
      ;(u.propTypes = {
        location: a().object.isRequired,
        pageResources: a().object.isRequired,
        data: a().object,
        pageContext: a().object.isRequired
      }),
        (e.Z = u)
    },
    9917: function (t, e, n) {
      'use strict'
      var r = n(7343),
        o = n(7294),
        a = n(3935),
        i = n(9499),
        s = n(9679),
        u = n(5444),
        c = n(5697),
        l = n.n(c),
        p = n(8741),
        h = n(969),
        d = n(8110)
      const f = {
        id: 'gatsby-announcer',
        style: {
          position: 'absolute',
          top: 0,
          width: 1,
          height: 1,
          padding: 0,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0
        },
        'aria-live': 'assertive',
        'aria-atomic': 'true'
      }
      var m = n(2393),
        g = n(8037)
      function v() {
        return (
          (v =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
              }
              return t
            }),
          v.apply(this, arguments)
        )
      }
      function y(t) {
        const e = (0, h.J)(t),
          { hash: n, search: r } = window.location
        return null != e && (window.___replace(e.toPath + r + n), !0)
      }
      let w = ''
      window.addEventListener('unhandledrejection', (t) => {
        ;/loading chunk \d* failed./i.test(t.reason) &&
          w &&
          (window.location.pathname = w)
      })
      const b = (t, e) => {
          y(t.pathname) ||
            ((w = t.pathname),
            (0, r.h)('onPreRouteUpdate', { location: t, prevLocation: e }))
        },
        P = (t, e) => {
          y(t.pathname) ||
            (0, r.h)('onRouteUpdate', { location: t, prevLocation: e })
        },
        E = (t, e = {}) => {
          if ('number' == typeof t) return void m.V5.navigate(t)
          const { pathname: n, search: o, hash: a } = (0, g.cP)(t),
            s = (0, h.J)(n)
          if ((s && (t = s.toPath + o + a), window.___swUpdated))
            return void (window.location = n + o + a)
          const u = setTimeout(() => {
            d.Z.emit('onDelayedLoadPageResources', { pathname: n }),
              (0, r.h)('onRouteUpdateDelayed', { location: window.location })
          }, 1e3)
          p.ZP.loadPage(n).then((r) => {
            if (!r || r.status === p.uQ.Error)
              return (
                window.history.replaceState({}, '', location.href),
                (window.location = n),
                void clearTimeout(u)
              )
            r &&
              r.page.webpackCompilationHash !==
                window.___webpackCompilationHash &&
              ('serviceWorker' in navigator &&
                null !== navigator.serviceWorker.controller &&
                'activated' === navigator.serviceWorker.controller.state &&
                navigator.serviceWorker.controller.postMessage({
                  gatsbyApi: 'clearPathResources'
                }),
              (window.location = n + o + a)),
              (0, i.navigate)(t, e),
              clearTimeout(u)
          })
        }
      function R(t, { location: e }) {
        const { pathname: n, hash: o } = e,
          a = (0, r.h)('shouldUpdateScroll', {
            prevRouterProps: t,
            pathname: n,
            routerProps: { location: e },
            getSavedScrollPosition: (t) => [
              0,
              this._stateStorage.read(t, t.key)
            ]
          })
        if (a.length > 0) return a[a.length - 1]
        if (t) {
          const {
            location: { pathname: e }
          } = t
          if (e === n) return o ? decodeURI(o.slice(1)) : [0, 0]
        }
        return !0
      }
      class S extends o.Component {
        constructor(t) {
          super(t), (this.announcementRef = o.createRef())
        }
        componentDidUpdate(t, e) {
          requestAnimationFrame(() => {
            let t = `new page at ${this.props.location.pathname}`
            document.title && (t = document.title)
            const e = document.querySelectorAll('#gatsby-focus-wrapper h1')
            e && e.length && (t = e[0].textContent)
            const n = `Navigated to ${t}`
            if (this.announcementRef.current) {
              this.announcementRef.current.innerText !== n &&
                (this.announcementRef.current.innerText = n)
            }
          })
        }
        render() {
          return o.createElement('div', v({}, f, { ref: this.announcementRef }))
        }
      }
      const _ = (t, e) => {
        var n, r
        return (
          t.href !== e.href ||
          (null == t || null === (n = t.state) || void 0 === n
            ? void 0
            : n.key) !==
            (null == e || null === (r = e.state) || void 0 === r
              ? void 0
              : r.key)
        )
      }
      class C extends o.Component {
        constructor(t) {
          super(t), b(t.location, null)
        }
        componentDidMount() {
          P(this.props.location, null)
        }
        shouldComponentUpdate(t) {
          return (
            !!_(t.location, this.props.location) &&
            (b(this.props.location, t.location), !0)
          )
        }
        componentDidUpdate(t) {
          _(t.location, this.props.location) &&
            P(this.props.location, t.location)
        }
        render() {
          return o.createElement(
            o.Fragment,
            null,
            this.props.children,
            o.createElement(S, { location: location })
          )
        }
      }
      C.propTypes = { location: l().object.isRequired }
      var k = n(804),
        x = n(4999)
      function j(t, e) {
        for (var n in t) if (!(n in e)) return !0
        for (var r in e) if (t[r] !== e[r]) return !0
        return !1
      }
      class O extends o.Component {
        constructor(t) {
          super()
          const { location: e, pageResources: n } = t
          this.state = {
            location: { ...e },
            pageResources:
              n || p.ZP.loadPageSync(e.pathname, { withErrorDetails: !0 })
          }
        }
        static getDerivedStateFromProps({ location: t }, e) {
          if (e.location.href !== t.href) {
            return {
              pageResources: p.ZP.loadPageSync(t.pathname, {
                withErrorDetails: !0
              }),
              location: { ...t }
            }
          }
          return { location: { ...t } }
        }
        loadResources(t) {
          p.ZP.loadPage(t).then((e) => {
            e && e.status !== p.uQ.Error
              ? this.setState({
                  location: { ...window.location },
                  pageResources: e
                })
              : (window.history.replaceState({}, '', location.href),
                (window.location = t))
          })
        }
        shouldComponentUpdate(t, e) {
          return e.pageResources
            ? this.state.pageResources !== e.pageResources ||
                this.state.pageResources.component !==
                  e.pageResources.component ||
                this.state.pageResources.json !== e.pageResources.json ||
                !(
                  this.state.location.key === e.location.key ||
                  !e.pageResources.page ||
                  (!e.pageResources.page.matchPath &&
                    !e.pageResources.page.path)
                ) ||
                (function (t, e, n) {
                  return j(t.props, e) || j(t.state, n)
                })(this, t, e)
            : (this.loadResources(t.location.pathname), !1)
        }
        render() {
          return this.props.children(this.state)
        }
      }
      var L = O,
        D = n(1578)
      function T() {
        return (
          (T =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
              }
              return t
            }),
          T.apply(this, arguments)
        )
      }
      const U = new p.kL(x, [], window.pageData)
      ;(0, p.N1)(U),
        U.setApiRunner(r.h),
        (window.asyncRequires = x),
        (window.___emitter = d.Z),
        (window.___loader = p.jN),
        m.V5.listen((t) => {
          t.location.action = t.action
        }),
        (window.___push = (t) => E(t, { replace: !1 })),
        (window.___replace = (t) => E(t, { replace: !0 })),
        (window.___navigate = (t, e) => E(t, e)),
        y(window.location.pathname),
        (0, r.I)('onClientEntry').then(() => {
          ;(0, r.h)('registerServiceWorker').filter(Boolean).length > 0 &&
            n(154)
          const t = (t) =>
              o.createElement(
                i.BaseContext.Provider,
                { value: { baseuri: '/', basepath: '/' } },
                o.createElement(k.Z, t)
              ),
            e = o.createContext({})
          class c extends o.Component {
            render() {
              const { children: t } = this.props
              return o.createElement(i.Location, null, ({ location: n }) =>
                o.createElement(
                  L,
                  { location: n },
                  ({ pageResources: n, location: r }) => {
                    const a = (0, p.hs)()
                    return o.createElement(
                      u.StaticQueryContext.Provider,
                      { value: a },
                      o.createElement(
                        e.Provider,
                        { value: { pageResources: n, location: r } },
                        t
                      )
                    )
                  }
                )
              )
            }
          }
          class l extends o.Component {
            render() {
              return o.createElement(
                e.Consumer,
                null,
                ({ pageResources: e, location: n }) =>
                  o.createElement(
                    C,
                    { location: n },
                    o.createElement(
                      s.$C,
                      { location: n, shouldUpdateScroll: R },
                      o.createElement(
                        i.Router,
                        {
                          basepath: '',
                          location: n,
                          id: 'gatsby-focus-wrapper'
                        },
                        o.createElement(
                          t,
                          T(
                            {
                              path:
                                '/404.html' === e.page.path
                                  ? (0, D.Z)(n.pathname, '')
                                  : encodeURI(e.page.matchPath || e.page.path)
                            },
                            this.props,
                            { location: n, pageResources: e },
                            e.json
                          )
                        )
                      )
                    )
                  )
              )
            }
          }
          const { pagePath: h, location: d } = window
          h &&
            '' + h !== d.pathname &&
            !(
              U.findMatchPath((0, D.Z)(d.pathname, '')) ||
              '/404.html' === h ||
              h.match(/^\/404\/?$/) ||
              h.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            (0, i.navigate)('' + h + d.search + d.hash, { replace: !0 }),
            p.jN.loadPage(d.pathname).then((t) => {
              if (!t || t.status === p.uQ.Error) {
                const e = `page resources for ${d.pathname} not found. Not rendering React`
                if (t && t.error) throw (console.error(e), t.error)
                throw new Error(e)
              }
              window.___webpackCompilationHash = t.page.webpackCompilationHash
              const e = (0, r.h)(
                  'wrapRootElement',
                  { element: o.createElement(l, null) },
                  o.createElement(l, null),
                  ({ result: t }) => ({ element: t })
                ).pop(),
                n = function () {
                  const t = o.useRef(!1)
                  return (
                    o.useEffect(() => {
                      t.current ||
                        ((t.current = !0),
                        performance.mark &&
                          performance.mark('onInitialClientRender'),
                        (0, r.h)('onInitialClientRender'))
                    }, []),
                    o.createElement(c, null, e)
                  )
                },
                i = (0, r.h)(
                  'replaceHydrateFunction',
                  void 0,
                  a.hydrateRoot ? a.hydrateRoot : a.hydrate
                )[0]
              function s() {
                const t =
                  'undefined' != typeof window
                    ? document.getElementById('___gatsby')
                    : null
                i === a.hydrateRoot
                  ? i(t, o.createElement(n, null))
                  : i(o.createElement(n, null), t)
              }
              const u = document
              if (
                'complete' === u.readyState ||
                ('loading' !== u.readyState && !u.documentElement.doScroll)
              )
                setTimeout(function () {
                  s()
                }, 0)
              else {
                const t = function () {
                  u.removeEventListener('DOMContentLoaded', t, !1),
                    window.removeEventListener('load', t, !1),
                    s()
                }
                u.addEventListener('DOMContentLoaded', t, !1),
                  window.addEventListener('load', t, !1)
              }
            })
        })
    },
    6947: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n(7294),
        o = n(5697),
        a = n.n(o),
        i = n(8741),
        s = n(804)
      const u = ({ location: t }) => {
        const e = i.ZP.loadPageSync(t.pathname)
        return e
          ? r.createElement(s.Z, { location: t, pageResources: e, ...e.json })
          : null
      }
      ;(u.propTypes = {
        location: a().shape({ pathname: a().string.isRequired }).isRequired
      }),
        (e.default = u)
    },
    861: function (t, e, n) {
      var r
      t.exports = ((r = n(6947)) && r.default) || r
    },
    3639: function (t, e) {
      e.O = (t) => t
    },
    969: function (t, e, n) {
      'use strict'
      n.d(e, {
        J: function () {
          return a
        }
      })
      const r = new Map(),
        o = new Map()
      function a(t) {
        let e = r.get(t)
        return e || (e = o.get(t.toLowerCase())), e
      }
      ;[].forEach((t) => {
        t.ignoreCase ? o.set(t.fromPath, t) : r.set(t.fromPath, t)
      })
    },
    154: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n(7343)
      'https:' !== window.location.protocol &&
      'localhost' !== window.location.hostname
        ? console.error(
            'Service workers can only be used over HTTPS, or on localhost for development'
          )
        : 'serviceWorker' in navigator &&
          navigator.serviceWorker
            .register('/sw.js')
            .then(function (t) {
              t.addEventListener('updatefound', () => {
                ;(0, r.h)('onServiceWorkerUpdateFound', { serviceWorker: t })
                const e = t.installing
                console.log('installingWorker', e),
                  e.addEventListener('statechange', () => {
                    switch (e.state) {
                      case 'installed':
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            (0, r.h)('onServiceWorkerUpdateReady', {
                              serviceWorker: t
                            }),
                            window.___failedResources &&
                              (console.log(
                                'resources failed, SW updated - reloading'
                              ),
                              window.location.reload()))
                          : (console.log('Content is now available offline!'),
                            (0, r.h)('onServiceWorkerInstalled', {
                              serviceWorker: t
                            }))
                        break
                      case 'redundant':
                        console.error(
                          'The installing service worker became redundant.'
                        ),
                          (0, r.h)('onServiceWorkerRedundant', {
                            serviceWorker: t
                          })
                        break
                      case 'activated':
                        ;(0, r.h)('onServiceWorkerActive', { serviceWorker: t })
                    }
                  })
              })
            })
            .catch(function (t) {
              console.error('Error during service worker registration:', t)
            })
    },
    1578: function (t, e, n) {
      'use strict'
      function r(t, e = '') {
        return e
          ? t === e
            ? '/'
            : t.startsWith(`${e}/`)
            ? t.slice(e.length)
            : t
          : t
      }
      n.d(e, {
        Z: function () {
          return r
        }
      })
    },
    2359: function (t, e, n) {
      'use strict'
      n.d(e, {
        L: function () {
          return w
        },
        M: function () {
          return C
        },
        P: function () {
          return _
        },
        S: function () {
          return N
        },
        _: function () {
          return c
        },
        a: function () {
          return s
        },
        b: function () {
          return f
        },
        c: function () {
          return W
        },
        g: function () {
          return m
        }
      })
      var r = n(7294),
        o = (n(4041), n(1224), n(5697)),
        a = n.n(o),
        i = n(3935)
      function s() {
        return (s =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          }).apply(this, arguments)
      }
      function u(t, e) {
        return (u =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      function c(t, e) {
        if (null == t) return {}
        var n,
          r,
          o = {},
          a = Object.keys(t)
        for (r = 0; r < a.length; r++)
          e.indexOf((n = a[r])) >= 0 || (o[n] = t[n])
        return o
      }
      var l = new Set(),
        p = function () {
          return (
            'undefined' != typeof HTMLImageElement &&
            'loading' in HTMLImageElement.prototype
          )
        }
      function h(t) {
        t && l.add(t)
      }
      function d(t) {
        return l.has(t)
      }
      function f(t, e, r, o, a, i, u, c) {
        var l, p
        return (
          void 0 === c && (c = {}),
          null != u &&
            u.current &&
            !('objectFit' in document.documentElement.style) &&
            ((u.current.dataset.objectFit =
              null != (l = c.objectFit) ? l : 'cover'),
            (u.current.dataset.objectPosition =
              '' + (null != (p = c.objectPosition) ? p : '50% 50%')),
            (function (t) {
              try {
                var e = function () {
                    window.objectFitPolyfill(t.current)
                  },
                  r = (function () {
                    if (!('objectFitPolyfill' in window))
                      return Promise.resolve(
                        n.e(231).then(n.t.bind(n, 7231, 23))
                      ).then(function () {})
                  })()
                Promise.resolve(r && r.then ? r.then(e) : e())
              } catch (t) {
                return Promise.reject(t)
              }
            })(u)),
          s({}, r, {
            loading: o,
            shouldLoad: t,
            'data-main-image': '',
            style: s({}, c, { opacity: e ? 1 : 0 }),
            onLoad: function (t) {
              if (!e) {
                h(i)
                var n = t.currentTarget,
                  r = new Image()
                ;(r.src = n.currentSrc),
                  r.decode
                    ? r
                        .decode()
                        .catch(function () {})
                        .then(function () {
                          a(!0)
                        })
                    : a(!0)
              }
            },
            ref: u
          })
        )
      }
      function m(t, e, n, r, o, a, i, u) {
        var c = {}
        a &&
          ((c.backgroundColor = a),
          'fixed' === n
            ? ((c.width = r),
              (c.height = o),
              (c.backgroundColor = a),
              (c.position = 'relative'))
            : ('constrained' === n || 'fullWidth' === n) &&
              ((c.position = 'absolute'),
              (c.top = 0),
              (c.left = 0),
              (c.bottom = 0),
              (c.right = 0))),
          i && (c.objectFit = i),
          u && (c.objectPosition = u)
        var l = s({}, t, {
          'aria-hidden': !0,
          'data-placeholder-image': '',
          style: s(
            { opacity: e ? 0 : 1, transition: 'opacity 500ms linear' },
            c
          )
        })
        return l
      }
      var g,
        v = ['children'],
        y = function (t) {
          var e = t.layout,
            n = t.width,
            o = t.height
          return 'fullWidth' === e
            ? r.createElement('div', {
                'aria-hidden': !0,
                style: { paddingTop: (o / n) * 100 + '%' }
              })
            : 'constrained' === e
            ? r.createElement(
                'div',
                { style: { maxWidth: n, display: 'block' } },
                r.createElement('img', {
                  alt: '',
                  role: 'presentation',
                  'aria-hidden': 'true',
                  src:
                    "data:image/svg+xml;charset=utf-8,%3Csvg height='" +
                    o +
                    "' width='" +
                    n +
                    "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
                  style: {
                    maxWidth: '100%',
                    display: 'block',
                    position: 'static'
                  }
                })
              )
            : null
        },
        w = function (t) {
          var e = t.children,
            n = c(t, v)
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(y, s({}, n)),
            e,
            !1
          )
        },
        b = ['src', 'srcSet', 'loading', 'alt', 'shouldLoad', 'innerRef'],
        P = ['fallback', 'sources', 'shouldLoad'],
        E = function (t) {
          var e = t.src,
            n = t.srcSet,
            o = t.loading,
            a = t.alt,
            i = void 0 === a ? '' : a,
            u = t.shouldLoad,
            l = t.innerRef,
            p = c(t, b)
          return r.createElement(
            'img',
            s({}, p, {
              decoding: 'async',
              loading: o,
              src: u ? e : void 0,
              'data-src': u ? void 0 : e,
              srcSet: u ? n : void 0,
              'data-srcset': u ? void 0 : n,
              alt: i,
              ref: l
            })
          )
        },
        R = (0, r.forwardRef)(function (t, e) {
          var n = t.fallback,
            o = t.sources,
            a = void 0 === o ? [] : o,
            i = t.shouldLoad,
            u = void 0 === i || i,
            l = c(t, P),
            p = l.sizes || (null == n ? void 0 : n.sizes),
            h = r.createElement(
              E,
              s({}, l, n, { sizes: p, shouldLoad: u, innerRef: e })
            )
          return a.length
            ? r.createElement(
                'picture',
                null,
                a.map(function (t) {
                  var e = t.media,
                    n = t.srcSet,
                    o = t.type
                  return r.createElement('source', {
                    key: e + '-' + o + '-' + n,
                    type: o,
                    media: e,
                    srcSet: u ? n : void 0,
                    'data-srcset': u ? void 0 : n,
                    sizes: p
                  })
                }),
                h
              )
            : h
        })
      ;(E.propTypes = {
        src: o.string.isRequired,
        alt: o.string.isRequired,
        sizes: o.string,
        srcSet: o.string,
        shouldLoad: o.bool
      }),
        (R.displayName = 'Picture'),
        (R.propTypes = {
          alt: o.string.isRequired,
          shouldLoad: o.bool,
          fallback: o.exact({
            src: o.string.isRequired,
            srcSet: o.string,
            sizes: o.string
          }),
          sources: o.arrayOf(
            o.oneOfType([
              o.exact({
                media: o.string.isRequired,
                type: o.string,
                sizes: o.string,
                srcSet: o.string.isRequired
              }),
              o.exact({
                media: o.string,
                type: o.string.isRequired,
                sizes: o.string,
                srcSet: o.string.isRequired
              })
            ])
          )
        })
      var S = ['fallback'],
        _ = function (t) {
          var e = t.fallback,
            n = c(t, S)
          return e
            ? r.createElement(
                R,
                s({}, n, { fallback: { src: e }, 'aria-hidden': !0, alt: '' })
              )
            : r.createElement('div', s({}, n))
        }
      ;(_.displayName = 'Placeholder'),
        (_.propTypes = {
          fallback: o.string,
          sources: null == (g = R.propTypes) ? void 0 : g.sources,
          alt: function (t, e, n) {
            return t[e]
              ? new Error(
                  'Invalid prop `' +
                    e +
                    '` supplied to `' +
                    n +
                    '`. Validation failed.'
                )
              : null
          }
        })
      var C = (0, r.forwardRef)(function (t, e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(R, s({ ref: e }, t)),
          r.createElement(
            'noscript',
            null,
            r.createElement(R, s({}, t, { shouldLoad: !0 }))
          )
        )
      })
      ;(C.displayName = 'MainImage'), (C.propTypes = R.propTypes)
      var k = function (t, e, n) {
          return t.alt || '' === t.alt
            ? a().string.apply(
                a(),
                [t, e, n].concat([].slice.call(arguments, 3))
              )
            : new Error(
                'The "alt" prop is required in ' +
                  n +
                  '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html'
              )
        },
        x = { image: a().object.isRequired, alt: k },
        j = ['style', 'className'],
        O = (function (t) {
          var e, o
          function a(e) {
            var n
            return (
              ((n = t.call(this, e) || this).root = (0, r.createRef)()),
              (n.hydrated = { current: !1 }),
              (n.forceRender = { current: !1 }),
              (n.lazyHydrator = null),
              (n.ref = (0, r.createRef)()),
              (n.unobserveRef = void 0),
              (n.state = { isLoading: p(), isLoaded: !1 }),
              n
            )
          }
          ;(o = t),
            ((e = a).prototype = Object.create(o.prototype)),
            (e.prototype.constructor = e),
            u(e, o)
          var l = a.prototype
          return (
            (l._lazyHydrate = function (t, e) {
              var r = this,
                o = this.root.current.querySelector('[data-gatsby-image-ssr]')
              return p() && o && !this.hydrated.current
                ? ((this.hydrated.current = !0), Promise.resolve())
                : n
                    .e(987)
                    .then(n.bind(n, 4987))
                    .then(function (n) {
                      r.lazyHydrator = (0, n.lazyHydrate)(
                        s(
                          {
                            image: t.image.images,
                            isLoading: e.isLoading,
                            isLoaded: e.isLoaded,
                            toggleIsLoaded: function () {
                              null == t.onLoad || t.onLoad(),
                                r.setState({ isLoaded: !0 })
                            },
                            ref: r.ref
                          },
                          t
                        ),
                        r.root,
                        r.hydrated,
                        r.forceRender
                      )
                    })
            }),
            (l._setupIntersectionObserver = function (t) {
              var e = this
              void 0 === t && (t = !0),
                n
                  .e(175)
                  .then(n.bind(n, 7175))
                  .then(function (n) {
                    var r = (0, n.createIntersectionObserver)(function () {
                      if (e.root.current) {
                        var n = JSON.stringify(e.props.image.images)
                        null == e.props.onStartLoad ||
                          e.props.onStartLoad({ wasCached: t && d(n) }),
                          e.setState({ isLoading: !0, isLoaded: t && d(n) })
                      }
                    })
                    e.root.current && (e.unobserveRef = r(e.root))
                  })
            }),
            (l.shouldComponentUpdate = function (t, e) {
              var n = this,
                r = !1
              return (
                this.state.isLoading ||
                  !e.isLoading ||
                  e.isLoaded ||
                  (this.forceRender.current = !0),
                this.props.image.images !== t.image.images &&
                  (this.unobserveRef &&
                    (this.unobserveRef(),
                    this.hydrated.current &&
                      this.lazyHydrator &&
                      (0, i.render)(null, this.root.current)),
                  this.setState({ isLoading: !1, isLoaded: !1 }, function () {
                    n._setupIntersectionObserver(!1)
                  }),
                  (r = !0)),
                this.root.current && !r && this._lazyHydrate(t, e),
                !1
              )
            }),
            (l.componentDidMount = function () {
              if (this.root.current) {
                var t = this.root.current.querySelector(
                    '[data-gatsby-image-ssr]'
                  ),
                  e = JSON.stringify(this.props.image.images)
                if (p() && t) {
                  var n, r
                  if (
                    (null == (n = (r = this.props).onStartLoad) ||
                      n.call(r, { wasCached: !1 }),
                    t.complete)
                  ) {
                    var o, a
                    null == (o = (a = this.props).onLoad) || o.call(a), h(e)
                  } else {
                    var i = this
                    t.addEventListener('load', function n() {
                      t.removeEventListener('load', n),
                        null == i.props.onLoad || i.props.onLoad(),
                        h(e)
                    })
                  }
                  return
                }
                this._setupIntersectionObserver(!0)
              }
            }),
            (l.componentWillUnmount = function () {
              this.unobserveRef &&
                (this.unobserveRef(),
                this.hydrated.current &&
                  this.lazyHydrator &&
                  this.lazyHydrator())
            }),
            (l.render = function () {
              var t = this.props.as || 'div',
                e = this.props.image,
                n = e.width,
                o = e.height,
                a = e.layout,
                i = (function (t, e, n) {
                  var r = {},
                    o = 'gatsby-image-wrapper'
                  return (
                    'fixed' === n
                      ? ((r.width = t), (r.height = e))
                      : 'constrained' === n &&
                        (o =
                          'gatsby-image-wrapper gatsby-image-wrapper-constrained'),
                    { className: o, 'data-gatsby-image-wrapper': '', style: r }
                  )
                })(n, o, a),
                u = i.style,
                l = i.className,
                p = c(i, j),
                h = this.props.className
              this.props.class && (h = this.props.class)
              var d = (function (t, e, n) {
                var r = null
                return (
                  'fullWidth' === t &&
                    (r =
                      '<div aria-hidden="true" style="padding-top: ' +
                      (n / e) * 100 +
                      '%;"></div>'),
                  'constrained' === t &&
                    (r =
                      '<div style="max-width: ' +
                      e +
                      'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\'' +
                      n +
                      "' width='" +
                      e +
                      "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),
                  r
                )
              })(a, n, o)
              return r.createElement(
                t,
                s({}, p, {
                  style: s({}, u, this.props.style, {
                    backgroundColor: this.props.backgroundColor
                  }),
                  className: l + (h ? ' ' + h : ''),
                  ref: this.root,
                  dangerouslySetInnerHTML: { __html: d },
                  suppressHydrationWarning: !0
                })
              )
            }),
            a
          )
        })(r.Component),
        L = function (t) {
          if (!t.image) return null
          var e = t.image,
            n = JSON.stringify([
              e.width,
              e.height,
              e.layout,
              t.className,
              t.class,
              t.backgroundColor
            ])
          return r.createElement(O, s({ key: n }, t))
        }
      ;(L.propTypes = x), (L.displayName = 'GatsbyImage')
      var D,
        T = [
          'src',
          '__imageData',
          '__error',
          'width',
          'height',
          'aspectRatio',
          'tracedSVGOptions',
          'placeholder',
          'formats',
          'quality',
          'transformOptions',
          'jpgOptions',
          'pngOptions',
          'webpOptions',
          'avifOptions',
          'blurredOptions'
        ],
        U = function (t, e) {
          return 'fullWidth' !== t.layout ||
            ('width' !== e && 'height' !== e) ||
            !t[e]
            ? a().number.apply(a(), [t, e].concat([].slice.call(arguments, 2)))
            : new Error(
                '"' +
                  e +
                  '" ' +
                  t[e] +
                  ' may not be passed when layout is fullWidth.'
              )
        },
        q = new Set(['fixed', 'fullWidth', 'constrained']),
        M = {
          src: a().string.isRequired,
          alt: k,
          width: U,
          height: U,
          sizes: a().string,
          layout: function (t) {
            if (void 0 !== t.layout && !q.has(t.layout))
              return new Error(
                'Invalid value ' +
                  t.layout +
                  '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".'
              )
          }
        },
        N =
          ((D = L),
          function (t) {
            var e = t.src,
              n = t.__imageData,
              o = t.__error,
              a = c(t, T)
            return (
              o && console.warn(o),
              n
                ? r.createElement(D, s({ image: n }, a))
                : (console.warn('Image not loaded', e), null)
            )
          })
      function W(t) {
        var e = t.children
        return (
          r.useEffect(function () {
            n.e(987).then(n.bind(n, 4987))
          }, []),
          e
        )
      }
      ;(N.displayName = 'StaticImage'), (N.propTypes = M)
    },
    6988: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          wrapRootElement: function () {
            return a
          }
        })
      var r = n(7294),
        o = n(2359)
      function a(t) {
        var e = t.element
        return r.createElement(o.c, null, e)
      }
    },
    1224: function (t) {
      'use strict'
      var e = function (t, e) {
        if ('string' != typeof t && !Array.isArray(t))
          throw new TypeError('Expected the input to be `string | string[]`')
        e = Object.assign({ pascalCase: !1 }, e)
        var n
        return (
          (t = Array.isArray(t)
            ? t
                .map(function (t) {
                  return t.trim()
                })
                .filter(function (t) {
                  return t.length
                })
                .join('-')
            : t.trim()),
          0 === t.length
            ? ''
            : 1 === t.length
            ? e.pascalCase
              ? t.toUpperCase()
              : t.toLowerCase()
            : (t !== t.toLowerCase() &&
                (t = (function (t) {
                  for (var e = !1, n = !1, r = !1, o = 0; o < t.length; o++) {
                    var a = t[o]
                    e && /[a-zA-Z]/.test(a) && a.toUpperCase() === a
                      ? ((t = t.slice(0, o) + '-' + t.slice(o)),
                        (e = !1),
                        (r = n),
                        (n = !0),
                        o++)
                      : n && r && /[a-zA-Z]/.test(a) && a.toLowerCase() === a
                      ? ((t = t.slice(0, o - 1) + '-' + t.slice(o - 1)),
                        (r = n),
                        (n = !1),
                        (e = !0))
                      : ((e = a.toLowerCase() === a && a.toUpperCase() !== a),
                        (r = n),
                        (n = a.toUpperCase() === a && a.toLowerCase() !== a))
                  }
                  return t
                })(t)),
              (t = t
                .replace(/^[_.\- ]+/, '')
                .toLowerCase()
                .replace(/[_.\- ]+(\w|$)/g, function (t, e) {
                  return e.toUpperCase()
                })
                .replace(/\d+(\w|$)/g, function (t) {
                  return t.toUpperCase()
                })),
              (n = t),
              e.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
        )
      }
      ;(t.exports = e), (t.exports.default = e)
    },
    992: function (t, e, n) {
      'use strict'
      var r = n(8580)
      n(5444), r(n(1632))
    },
    1632: function (t, e) {
      'use strict'
      ;(e.__esModule = !0), (e.default = void 0)
      e.default = function (t, e) {
        var n = 'manifest.webmanifest'
        if (!Array.isArray(e)) return n
        var r = e.find(function (e) {
          return t.startsWith(e.start_url)
        })
        return r ? 'manifest_' + r.lang + '.webmanifest' : n
      }
    },
    9499: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          BaseContext: function () {
            return N
          },
          Link: function () {
            return $
          },
          Location: function () {
            return U
          },
          LocationProvider: function () {
            return q
          },
          Match: function () {
            return X
          },
          Redirect: function () {
            return Y
          },
          Router: function () {
            return W
          },
          ServerLocation: function () {
            return M
          },
          createHistory: function () {
            return E
          },
          createMemorySource: function () {
            return R
          },
          globalHistory: function () {
            return _
          },
          isRedirect: function () {
            return K
          },
          matchPath: function () {
            return c
          },
          navigate: function () {
            return C
          },
          redirectTo: function () {
            return B
          },
          useLocation: function () {
            return tt
          },
          useMatch: function () {
            return rt
          },
          useNavigate: function () {
            return et
          },
          useParams: function () {
            return nt
          }
        })
      var r = n(7294),
        o = n(1143),
        a = n.n(o),
        i = n(3639),
        s = function (t, e) {
          return t.substr(0, e.length) === e
        },
        u = function (t, e) {
          for (
            var n = void 0,
              r = void 0,
              o = e.split('?')[0],
              i = v(o),
              s = '' === i[0],
              u = g(t),
              c = 0,
              l = u.length;
            c < l;
            c++
          ) {
            var p = !1,
              d = u[c].route
            if (d.default) r = { route: d, params: {}, uri: e }
            else {
              for (
                var m = v(d.path),
                  y = {},
                  b = Math.max(i.length, m.length),
                  P = 0;
                P < b;
                P++
              ) {
                var E = m[P],
                  R = i[P]
                if (f(E)) {
                  y[E.slice(1) || '*'] = i
                    .slice(P)
                    .map(decodeURIComponent)
                    .join('/')
                  break
                }
                if (void 0 === R) {
                  p = !0
                  break
                }
                var S = h.exec(E)
                if (S && !s) {
                  ;-1 === w.indexOf(S[1]) || a()(!1)
                  var _ = decodeURIComponent(R)
                  y[S[1]] = _
                } else if (E !== R) {
                  p = !0
                  break
                }
              }
              if (!p) {
                n = { route: d, params: y, uri: '/' + i.slice(0, P).join('/') }
                break
              }
            }
          }
          return n || r || null
        },
        c = function (t, e) {
          return u([{ path: t }], e)
        },
        l = function (t, e) {
          if (s(t, '/')) return t
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = e.split('?')[0],
            i = v(r),
            u = v(a)
          if ('' === i[0]) return y(a, o)
          if (!s(i[0], '.')) {
            var c = u.concat(i).join('/')
            return y(('/' === a ? '' : '/') + c, o)
          }
          for (var l = u.concat(i), p = [], h = 0, d = l.length; h < d; h++) {
            var f = l[h]
            '..' === f ? p.pop() : '.' !== f && p.push(f)
          }
          return y('/' + p.join('/'), o)
        },
        p = function (t, e) {
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = void 0 === o ? '' : o,
            i =
              '/' +
              v(r)
                .map(function (t) {
                  var n = h.exec(t)
                  return n ? e[n[1]] : t
                })
                .join('/'),
            s = e.location,
            u = (s = void 0 === s ? {} : s).search,
            c = (void 0 === u ? '' : u).split('?')[1] || ''
          return (i = y(i, a, c))
        },
        h = /^:(.+)/,
        d = function (t) {
          return h.test(t)
        },
        f = function (t) {
          return t && '*' === t[0]
        },
        m = function (t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : v(t.path).reduce(function (t, e) {
                  return (
                    (t += 4),
                    !(function (t) {
                      return '' === t
                    })(e)
                      ? d(e)
                        ? (t += 2)
                        : f(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  )
                }, 0),
            index: e
          }
        },
        g = function (t) {
          return t.map(m).sort(function (t, e) {
            return t.score < e.score
              ? 1
              : t.score > e.score
              ? -1
              : t.index - e.index
          })
        },
        v = function (t) {
          return t.replace(/(^\/+|\/+$)/g, '').split('/')
        },
        y = function (t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r]
          return (
            t +
            ((n = n.filter(function (t) {
              return t && t.length > 0
            })) && n.length > 0
              ? '?' + n.join('&')
              : '')
          )
        },
        w = ['uri', 'path'],
        b =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          },
        P = function (t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            a = e.origin,
            i = e.protocol,
            s = e.host,
            u = e.hostname,
            c = e.port,
            l = t.location.pathname
          !l && o && S && (l = new URL(o).pathname)
          return {
            pathname: encodeURI(decodeURI(l)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: i,
            host: s,
            hostname: u,
            port: c,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || 'initial'
          }
        },
        E = function (t, e) {
          var n = [],
            r = P(t),
            o = !1,
            a = function () {}
          return {
            get location() {
              return r
            },
            get transitioning() {
              return o
            },
            _onTransitionComplete: function () {
              ;(o = !1), a()
            },
            listen: function (e) {
              n.push(e)
              var o = function () {
                ;(r = P(t)), e({ location: r, action: 'POP' })
              }
              return (
                t.addEventListener('popstate', o),
                function () {
                  t.removeEventListener('popstate', o),
                    (n = n.filter(function (t) {
                      return t !== e
                    }))
                }
              )
            },
            navigate: function (e) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                s = i.state,
                u = i.replace,
                c = void 0 !== u && u
              if ('number' == typeof e) t.history.go(e)
              else {
                s = b({}, s, { key: Date.now() + '' })
                try {
                  o || c
                    ? t.history.replaceState(s, null, e)
                    : t.history.pushState(s, null, e)
                } catch (p) {
                  t.location[c ? 'replace' : 'assign'](e)
                }
              }
              ;(r = P(t)), (o = !0)
              var l = new Promise(function (t) {
                return (a = t)
              })
              return (
                n.forEach(function (t) {
                  return t({ location: r, action: 'PUSH' })
                }),
                l
              )
            }
          }
        },
        R = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '/',
            e = t.indexOf('?'),
            n = {
              pathname: e > -1 ? t.substr(0, e) : t,
              search: e > -1 ? t.substr(e) : ''
            },
            r = 0,
            o = [n],
            a = [null]
          return {
            get location() {
              return o[r]
            },
            addEventListener: function (t, e) {},
            removeEventListener: function (t, e) {},
            history: {
              get entries() {
                return o
              },
              get index() {
                return r
              },
              get state() {
                return a[r]
              },
              pushState: function (t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u
                r++,
                  o.push({ pathname: s, search: c.length ? '?' + c : c }),
                  a.push(t)
              },
              replaceState: function (t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u
                ;(o[r] = { pathname: s, search: c }), (a[r] = t)
              },
              go: function (t) {
                var e = r + t
                e < 0 || e > a.length - 1 || (r = e)
              }
            }
          }
        },
        S = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        _ = E(S ? window : R()),
        C = _.navigate,
        k =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          }
      function x(t, e) {
        var n = {}
        for (var r in t)
          e.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]))
        return n
      }
      function j(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
      function O(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
      }
      function L(t, e) {
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
      }
      var D = function (t, e) {
          var n = (0, r.createContext)(e)
          return (n.displayName = t), n
        },
        T = D('Location'),
        U = function (t) {
          var e = t.children
          return r.createElement(T.Consumer, null, function (t) {
            return t ? e(t) : r.createElement(q, null, e)
          })
        },
        q = (function (t) {
          function e() {
            var n, r
            j(this, e)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (n = r = O(this, t.call.apply(t, [this].concat(a)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              O(r, n)
            )
          }
          return (
            L(e, t),
            (e.prototype.getContext = function () {
              var t = this.props.history
              return { navigate: t.navigate, location: t.location }
            }),
            (e.prototype.componentDidCatch = function (t, e) {
              if (!K(t)) throw t
              ;(0, this.props.history.navigate)(t.uri, { replace: !0 })
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              e.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete()
            }),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.state.refs,
                n = this.props.history
              n._onTransitionComplete(),
                (e.unlisten = n.listen(function () {
                  Promise.resolve().then(function () {
                    requestAnimationFrame(function () {
                      t.unmounted ||
                        t.setState(function () {
                          return { context: t.getContext() }
                        })
                    })
                  })
                }))
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.state.refs
              ;(this.unmounted = !0), t.unlisten()
            }),
            (e.prototype.render = function () {
              var t = this.state.context,
                e = this.props.children
              return r.createElement(
                T.Provider,
                { value: t },
                'function' == typeof e ? e(t) : e || null
              )
            }),
            e
          )
        })(r.Component)
      q.defaultProps = { history: _ }
      var M = function (t) {
          var e = t.url,
            n = t.children,
            o = e.indexOf('?'),
            a = void 0,
            i = ''
          return (
            o > -1 ? ((a = e.substring(0, o)), (i = e.substring(o))) : (a = e),
            r.createElement(
              T.Provider,
              {
                value: {
                  location: { pathname: a, search: i, hash: '' },
                  navigate: function () {
                    throw new Error("You can't call navigate on the server.")
                  }
                }
              },
              n
            )
          )
        },
        N = D('Base', { baseuri: '/', basepath: '/', navigate: _.navigate }),
        W = function (t) {
          return r.createElement(N.Consumer, null, function (e) {
            return r.createElement(U, null, function (n) {
              return r.createElement(A, k({}, e, n, t))
            })
          })
        },
        A = (function (t) {
          function e() {
            return j(this, e), O(this, t.apply(this, arguments))
          }
          return (
            L(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.location,
                n = t.navigate,
                o = t.basepath,
                a = t.primary,
                i = t.children,
                s = (t.baseuri, t.component),
                c = void 0 === s ? 'div' : s,
                p = x(t, [
                  'location',
                  'navigate',
                  'basepath',
                  'primary',
                  'children',
                  'baseuri',
                  'component'
                ]),
                h = r.Children.toArray(i).reduce(function (t, e) {
                  var n = at(o)(e)
                  return t.concat(n)
                }, []),
                d = e.pathname,
                f = u(h, d)
              if (f) {
                var m = f.params,
                  g = f.uri,
                  v = f.route,
                  y = f.route.value
                o = v.default ? o : v.path.replace(/\*$/, '')
                var w = k({}, m, {
                    uri: g,
                    location: e,
                    navigate: function (t, e) {
                      return n(l(t, g), e)
                    }
                  }),
                  b = r.cloneElement(
                    y,
                    w,
                    y.props.children
                      ? r.createElement(
                          W,
                          { location: e, primary: a },
                          y.props.children
                        )
                      : void 0
                  ),
                  P = a ? I : c,
                  E = a ? k({ uri: g, location: e, component: c }, p) : p
                return r.createElement(
                  N.Provider,
                  { value: { baseuri: g, basepath: o, navigate: w.navigate } },
                  r.createElement(P, E, b)
                )
              }
              return null
            }),
            e
          )
        })(r.PureComponent)
      A.defaultProps = { primary: !0 }
      var F = D('Focus'),
        I = function (t) {
          var e = t.uri,
            n = t.location,
            o = t.component,
            a = x(t, ['uri', 'location', 'component'])
          return r.createElement(F.Consumer, null, function (t) {
            return r.createElement(
              z,
              k({}, a, { component: o, requestFocus: t, uri: e, location: n })
            )
          })
        },
        H = !0,
        Q = 0,
        z = (function (t) {
          function e() {
            var n, r
            j(this, e)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (n = r = O(this, t.call.apply(t, [this].concat(a)))),
              (r.state = {}),
              (r.requestFocus = function (t) {
                !r.state.shouldFocus && t && t.focus()
              }),
              O(r, n)
            )
          }
          return (
            L(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              if (null == e.uri) return k({ shouldFocus: !0 }, t)
              var n = t.uri !== e.uri,
                r =
                  e.location.pathname !== t.location.pathname &&
                  t.location.pathname === t.uri
              return k({ shouldFocus: n || r }, t)
            }),
            (e.prototype.componentDidMount = function () {
              Q++, this.focus()
            }),
            (e.prototype.componentWillUnmount = function () {
              0 === --Q && (H = !0)
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              t.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus()
            }),
            (e.prototype.focus = function () {
              var t = this.props.requestFocus
              t
                ? t(this.node)
                : H
                ? (H = !1)
                : this.node &&
                  (this.node.contains(document.activeElement) ||
                    this.node.focus())
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.props,
                n = (e.children, e.style),
                o = (e.requestFocus, e.component),
                a = void 0 === o ? 'div' : o,
                i =
                  (e.uri,
                  e.location,
                  x(e, [
                    'children',
                    'style',
                    'requestFocus',
                    'component',
                    'uri',
                    'location'
                  ]))
              return r.createElement(
                a,
                k(
                  {
                    style: k({ outline: 'none' }, n),
                    tabIndex: '-1',
                    ref: function (e) {
                      return (t.node = e)
                    }
                  },
                  i
                ),
                r.createElement(
                  F.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              )
            }),
            e
          )
        })(r.Component)
      ;(0, i.O)(z)
      var Z = function () {},
        J = r.forwardRef
      void 0 === J &&
        (J = function (t) {
          return t
        })
      var $ = J(function (t, e) {
        var n = t.innerRef,
          o = x(t, ['innerRef'])
        return r.createElement(N.Consumer, null, function (t) {
          t.basepath
          var a = t.baseuri
          return r.createElement(U, null, function (t) {
            var i = t.location,
              u = t.navigate,
              c = o.to,
              p = o.state,
              h = o.replace,
              d = o.getProps,
              f = void 0 === d ? Z : d,
              m = x(o, ['to', 'state', 'replace', 'getProps']),
              g = l(c, a),
              v = encodeURI(g),
              y = i.pathname === v,
              w = s(i.pathname, v)
            return r.createElement(
              'a',
              k(
                { ref: e || n, 'aria-current': y ? 'page' : void 0 },
                m,
                f({
                  isCurrent: y,
                  isPartiallyCurrent: w,
                  href: g,
                  location: i
                }),
                {
                  href: g,
                  onClick: function (t) {
                    if ((m.onClick && m.onClick(t), it(t))) {
                      t.preventDefault()
                      var e = h
                      if ('boolean' != typeof h && y) {
                        var n = k({}, i.state),
                          r = (n.key, x(n, ['key']))
                        ;(o = k({}, p)),
                          (a = r),
                          (e =
                            (s = Object.keys(o)).length ===
                              Object.keys(a).length &&
                            s.every(function (t) {
                              return a.hasOwnProperty(t) && o[t] === a[t]
                            }))
                      }
                      u(g, { state: p, replace: e })
                    }
                    var o, a, s
                  }
                }
              )
            )
          })
        })
      })
      function G(t) {
        this.uri = t
      }
      $.displayName = 'Link'
      var K = function (t) {
          return t instanceof G
        },
        B = function (t) {
          throw new G(t)
        },
        V = (function (t) {
          function e() {
            return j(this, e), O(this, t.apply(this, arguments))
          }
          return (
            L(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this.props,
                e = t.navigate,
                n = t.to,
                r = (t.from, t.replace),
                o = void 0 === r || r,
                a = t.state,
                i = (t.noThrow, t.baseuri),
                s = x(t, [
                  'navigate',
                  'to',
                  'from',
                  'replace',
                  'state',
                  'noThrow',
                  'baseuri'
                ])
              Promise.resolve().then(function () {
                var t = l(n, i)
                e(p(t, s), { replace: o, state: a })
              })
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = (t.navigate, t.to),
                n = (t.from, t.replace, t.state, t.noThrow),
                r = t.baseuri,
                o = x(t, [
                  'navigate',
                  'to',
                  'from',
                  'replace',
                  'state',
                  'noThrow',
                  'baseuri'
                ]),
                a = l(e, r)
              return n || B(p(a, o)), null
            }),
            e
          )
        })(r.Component),
        Y = function (t) {
          return r.createElement(N.Consumer, null, function (e) {
            var n = e.baseuri
            return r.createElement(U, null, function (e) {
              return r.createElement(V, k({}, e, { baseuri: n }, t))
            })
          })
        },
        X = function (t) {
          var e = t.path,
            n = t.children
          return r.createElement(N.Consumer, null, function (t) {
            var o = t.baseuri
            return r.createElement(U, null, function (t) {
              var r = t.navigate,
                a = t.location,
                i = l(e, o),
                s = c(i, a.pathname)
              return n({
                navigate: r,
                location: a,
                match: s ? k({}, s.params, { uri: s.uri, path: e }) : null
              })
            })
          })
        },
        tt = function () {
          var t = (0, r.useContext)(T)
          if (!t)
            throw new Error(
              'useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
            )
          return t.location
        },
        et = function () {
          var t = (0, r.useContext)(N)
          if (!t)
            throw new Error(
              'useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
            )
          return t.navigate
        },
        nt = function () {
          var t = (0, r.useContext)(N)
          if (!t)
            throw new Error(
              'useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
            )
          var e = tt(),
            n = c(t.basepath, e.pathname)
          return n ? n.params : null
        },
        rt = function (t) {
          if (!t)
            throw new Error(
              'useMatch(path: string) requires an argument of a string to match against'
            )
          var e = (0, r.useContext)(N)
          if (!e)
            throw new Error(
              'useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
            )
          var n = tt(),
            o = l(t, e.baseuri),
            a = c(o, n.pathname)
          return a ? k({}, a.params, { uri: a.uri, path: t }) : null
        },
        ot = function (t) {
          return t.replace(/(^\/+|\/+$)/g, '')
        },
        at = function t(e) {
          return function (n) {
            if (!n) return null
            if (n.type === r.Fragment && n.props.children)
              return r.Children.map(n.props.children, t(e))
            var o, i, s
            if (
              (n.props.path || n.props.default || n.type === Y || a()(!1),
              n.type !== Y || (n.props.from && n.props.to) || a()(!1),
              n.type === Y &&
                ((o = n.props.from),
                (i = n.props.to),
                (s = function (t) {
                  return d(t)
                }),
                v(o).filter(s).sort().join('/') !==
                  v(i).filter(s).sort().join('/')) &&
                a()(!1),
              n.props.default)
            )
              return { value: n, default: !0 }
            var u = n.type === Y ? n.props.from : n.props.path,
              c = '/' === u ? e : ot(e) + '/' + ot(u)
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? ot(c) + '/*' : c
            }
          }
        },
        it = function (t) {
          return (
            !t.defaultPrevented &&
            0 === t.button &&
            !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
          )
        }
    },
    5666: function (t) {
      ;(t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return t
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    4362: function (t) {
      function e() {
        return (
          (t.exports = e =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
              }
              return t
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          e.apply(this, arguments)
        )
      }
      ;(t.exports = e),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    3793: function (t, e, n) {
      var r = n(4675)
      ;(t.exports = function (t, e) {
        ;(t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e)
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    8580: function (t) {
      ;(t.exports = function (t) {
        return t && t.__esModule ? t : { default: t }
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    3246: function (t) {
      ;(t.exports = function (t, e) {
        if (null == t) return {}
        var n,
          r,
          o = {},
          a = Object.keys(t)
        for (r = 0; r < a.length; r++)
          (n = a[r]), e.indexOf(n) >= 0 || (o[n] = t[n])
        return o
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    4675: function (t) {
      function e(n, r) {
        return (
          (t.exports = e =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          e(n, r)
        )
      }
      ;(t.exports = e),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    1143: function (t) {
      'use strict'
      t.exports = function (t, e, n, r, o, a, i, s) {
        if (!t) {
          var u
          if (void 0 === e)
            u = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            )
          else {
            var c = [n, r, o, a, i, s],
              l = 0
            ;(u = new Error(
              e.replace(/%s/g, function () {
                return c[l++]
              })
            )).name = 'Invariant Violation'
          }
          throw ((u.framesToPop = 1), u)
        }
      }
    }
  },
  function (t) {
    t.O(0, [774], function () {
      return (e = 9917), t((t.s = e))
      var e
    })
    t.O()
  }
])
//# sourceMappingURL=app-ba81d982e5c58b080a95.js.map
