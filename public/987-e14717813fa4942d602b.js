'use strict'
;(self.webpackChunknicenicegame_github_io =
  self.webpackChunknicenicegame_github_io || []).push([
  [987],
  {
    4987: function (e, r, t) {
      t.r(r),
        t.d(r, {
          lazyHydrate: function () {
            return c
          }
        })
      var o = t(2359),
        n = t(7294),
        i = t(3935),
        a =
          (t(4041),
          t(1224),
          [
            'image',
            'loading',
            'isLoading',
            'isLoaded',
            'toggleIsLoaded',
            'ref',
            'imgClassName',
            'imgStyle',
            'objectPosition',
            'backgroundColor',
            'objectFit'
          ])
      function c(e, r, t, c) {
        var u = e.image,
          d = e.loading,
          g = e.isLoading,
          l = e.isLoaded,
          s = e.toggleIsLoaded,
          h = e.ref,
          b = e.imgClassName,
          m = e.imgStyle,
          f = void 0 === m ? {} : m,
          k = e.objectPosition,
          y = e.backgroundColor,
          C = e.objectFit,
          L = void 0 === C ? 'cover' : C,
          j = (0, o._)(e, a),
          v = u.width,
          w = u.height,
          _ = u.layout,
          p = u.images,
          N = u.placeholder,
          P = u.backgroundColor,
          E = JSON.stringify(p)
        f = (0, o.a)({ objectFit: L, objectPosition: k, backgroundColor: y }, f)
        var F = n.createElement(
          o.L,
          { layout: _, width: v, height: w },
          n.createElement(o.P, (0, o.a)({}, (0, o.g)(N, l, _, v, w, P, L, k))),
          n.createElement(
            o.M,
            (0, o.a)(
              {},
              j,
              { width: v, height: w, className: b },
              (0, o.b)(g, l, p, d, s, E, h, f)
            )
          )
        )
        return (
          r.current &&
            (i.createRoot
              ? (t.current || (t.current = i.createRoot(r.current)),
                t.current.render(F))
              : ((t.current || c.current ? i.render : i.hydrate)(F, r.current),
                (t.current = !0))),
          function () {
            r.current &&
              (i.createRoot
                ? t.current.render(null)
                : i.render(null, r.current))
          }
        )
      }
    }
  }
])
//# sourceMappingURL=987-e14717813fa4942d602b.js.map
