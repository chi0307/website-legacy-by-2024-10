(window.webpackJsonp = window.webpackJsonp || []).push([
  [6, 4],
  {
    241: function (t, e, n) {
      var content = n(249);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(51).default)('09dd3bcc', content, !0, { sourceMap: !1 });
    },
    245: function (t, e, n) {
      'use strict';
      var r = n(8),
        o = n(4),
        c = n(85),
        l = n(15),
        f = n(10),
        d = n(39),
        v = n(178),
        m = n(62),
        _ = n(5),
        h = n(64),
        C = n(63).f,
        I = n(30).f,
        k = n(14).f,
        N = n(246).trim,
        E = 'Number',
        w = o.Number,
        A = w.prototype,
        S = d(h(A)) == E,
        x = function (t) {
          var e,
            n,
            r,
            o,
            c,
            l,
            f,
            code,
            d = m(t, !1);
          if ('string' == typeof d && d.length > 2)
            if (43 === (e = (d = N(d)).charCodeAt(0)) || 45 === e) {
              if (88 === (n = d.charCodeAt(2)) || 120 === n) return NaN;
            } else if (48 === e) {
              switch (d.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (o = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (o = 55);
                  break;
                default:
                  return +d;
              }
              for (l = (c = d.slice(2)).length, f = 0; f < l; f++)
                if ((code = c.charCodeAt(f)) < 48 || code > o) return NaN;
              return parseInt(c, r);
            }
          return +d;
        };
      if (c(E, !w(' 0o1') || !w('0b1') || w('+0x1'))) {
        for (
          var y,
            T = function (t) {
              var e = arguments.length < 1 ? 0 : t,
                n = this;
              return n instanceof T &&
                (S
                  ? _(function () {
                      A.valueOf.call(n);
                    })
                  : d(n) != E)
                ? v(new w(x(e)), n, T)
                : x(e);
            },
            j = r
              ? C(w)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
                  ','
                ),
            F = 0;
          j.length > F;
          F++
        )
          f(w, (y = j[F])) && !f(T, y) && k(T, y, I(w, y));
        (T.prototype = A), (A.constructor = T), l(o, E, T);
      }
    },
    246: function (t, e, n) {
      var r = n(18),
        o = '[' + n(247) + ']',
        c = RegExp('^' + o + o + '*'),
        l = RegExp(o + o + '*$'),
        f = function (t) {
          return function (e) {
            var n = String(r(e));
            return 1 & t && (n = n.replace(c, '')), 2 & t && (n = n.replace(l, '')), n;
          };
        };
      t.exports = { start: f(1), end: f(2), trim: f(3) };
    },
    247: function (t, e) {
      t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
    },
    248: function (t, e, n) {
      'use strict';
      n(241);
    },
    249: function (t, e, n) {
      var r = n(50)(!1);
      r.push([
        t.i,
        '.img-circle[data-v-86afb5d6]{width:100%;margin:1%;text-align:center;position:relative;display:inline-block}.img-circle .circle-spacer[data-v-86afb5d6]{position:relative;padding-top:100%;float:none}.img-circle img[data-v-86afb5d6]{position:absolute;top:0;left:0;bottom:0;right:0;float:none;width:100%!important;height:100%!important;-o-object-fit:cover;object-fit:cover}',
        '',
      ]),
        (t.exports = r);
    },
    259: function (t, e, n) {
      'use strict';
      n.r(e);
      n(245);
      var r = { props: { src: { type: String, default: '' }, radius: { type: Number, default: 0 } } },
        o = (n(248), n(29)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'img-circle' }, [
              n('div', { staticClass: 'circle-spacer' }),
              t._v(' '),
              n('img', {
                staticClass: 'img-fluid',
                style: { 'border-radius': t.radius + '% !important' },
                attrs: { src: t.src },
              }),
            ]);
          },
          [],
          !1,
          null,
          '86afb5d6',
          null
        );
      e.default = component.exports;
    },
    288: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = {
          layout: 'website',
          data: function () {
            return {
              name: 'Benson',
              workPosition: 'FrontEnd Developer',
              personalImage: '/website-legacy-by-2024-10/aboutMe.jpeg',
              socials: [
                { icon: ['fab', 'instagram'], url: 'https://www.instagram.com/unni_0913' },
                { icon: ['fab', 'github'], url: 'https://github.com/chi0307' },
                { icon: ['fab', 'bitbucket'], url: 'https://bitbucket.org/junchi_0307' },
              ],
              descriptionTitle: 'Hello',
              descriptionContent: '這是我的個人網站，目前仍緩慢更新中。',
            };
          },
        },
        o = n(29),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'about-me-page' }, [
              n('div', { staticClass: 'white-block' }),
              t._v(' '),
              n('div', { staticClass: 'message-block' }, [
                n('div', { staticClass: 'present-block' }, [
                  n(
                    'div',
                    { staticClass: 'present-top-block' },
                    [
                      n('ShapeImage', { staticClass: 'about-me-image', attrs: { src: t.personalImage, radius: 50 } }),
                      t._v(' '),
                      n('div', { staticClass: 'about-me-name' }, [n('h1', [t._v(t._s(t.name))])]),
                      t._v(' '),
                      n('div', { staticClass: 'about-me-line' }),
                      t._v(' '),
                      n('div', { staticClass: 'about-me-title' }, [n('h3', [t._v(t._s(t.workPosition))])]),
                    ],
                    1
                  ),
                  t._v(' '),
                  n(
                    'div',
                    { staticClass: 'present-bottom-block' },
                    t._l(t.socials, function (t, e) {
                      return n(
                        'a',
                        { key: e, attrs: { href: t.url, target: '_blank' } },
                        [n('FontAwesomeIcon', { attrs: { icon: t.icon } })],
                        1
                      );
                    }),
                    0
                  ),
                ]),
                t._v(' '),
                n('div', { staticClass: 'description-block' }, [
                  n('div', { staticClass: 'description-inblock' }, [
                    n('h1', { staticClass: 'description-title' }, [
                      t._v('\n          ' + t._s(t.descriptionTitle) + '\n        '),
                    ]),
                    t._v(' '),
                    n('p', { staticClass: 'description-content' }, [
                      t._v('\n          ' + t._s(t.descriptionContent) + '\n        '),
                    ]),
                    t._v(' '),
                    n('div', { staticClass: 'description-link' }, [
                      n(
                        'button',
                        {
                          staticClass: 'resume-button',
                          on: {
                            click: function (e) {
                              return t.$router.replace({ path: '/resume' });
                            },
                          },
                        },
                        [t._v('\n            RESUME\n          ')]
                      ),
                      t._v(' '),
                      n(
                        'button',
                        {
                          staticClass: 'projects-button',
                          on: {
                            click: function (e) {
                              return t.$router.replace({ path: '/projects' });
                            },
                          },
                        },
                        [t._v('\n            PROJECTS\n          ')]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { ShapeImage: n(259).default });
    },
  },
]);