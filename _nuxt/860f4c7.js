(window.webpackJsonp = window.webpackJsonp || []).push([
  [9, 2],
  {
    242: function (e, t, o) {
      var content = o(251);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals);
      (0, o(51).default)('ee8e4056', content, !0, { sourceMap: !1 });
    },
    250: function (e, t, o) {
      'use strict';
      o(242);
    },
    251: function (e, t, o) {
      var r = o(50)(!1);
      r.push([
        e.i,
        '.project-block[data-v-67a7f11b]{width:680px;height:360px;margin-top:34px;margin-bottom:34px;background-color:#fcfbfa;display:flex;box-shadow:-12px 12px 20px 0 rgba(0,0,0,.2)}@media(max-width:768px){.project-block[data-v-67a7f11b]{width:90vw}}.project-block .inblock[data-v-67a7f11b]{height:300px;width:620px;display:flex;text-align:left;flex-direction:column;margin:30px;flex:1}@media(max-width:768px){.project-block .inblock[data-v-67a7f11b]{width:calc(90vw - 20px);height:320px;margin:30px 10px}}.project-block .inblock .project-text[data-v-67a7f11b]{text-align:left;height:75px;line-height:1.5;padding-left:5%;padding-right:5%;bottom:0}@media(max-width:768px){.project-block .inblock .project-text[data-v-67a7f11b]{height:80px}}.project-block .inblock .preview-image[data-v-67a7f11b]{height:225px;margin:auto;position:relative;width:100%}@media(max-width:768px){.project-block .inblock .preview-image[data-v-67a7f11b]{height:240px}}.project-block .inblock .preview-image img[data-v-67a7f11b]{max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;cursor:pointer}',
        '',
      ]),
        (e.exports = r);
    },
    260: function (e, t, o) {
      'use strict';
      o.r(t);
      var r = {
          props: {
            description: { type: String, default: '' },
            previewImage: { type: String, default: '' },
            previewUrl: { type: String, default: '' },
          },
          methods: {
            openPreview: function () {
              this.$emit('openPreview', this.previewUrl);
            },
          },
        },
        n = (o(250), o(29)),
        component = Object(n.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o('div', { staticClass: 'project-block' }, [
              o('div', { staticClass: 'inblock' }, [
                o('div', { staticClass: 'project-text', domProps: { innerHTML: e._s(e.description) } }),
                e._v(' '),
                o('div', { staticClass: 'preview-image' }, [
                  o('img', {
                    attrs: { src: e.previewImage },
                    on: {
                      click: function (t) {
                        return e.openPreview();
                      },
                    },
                  }),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          '67a7f11b',
          null
        );
      t.default = component.exports;
    },
    290: function (e, t, o) {
      'use strict';
      o.r(t);
      var r = {
          layout: 'website',
          data: function () {
            return {
              projects: [
                {
                  text: '\n            開發一個 FB、Line 訊息共用的套件，<br />\n            搭配使用畫面產生 JSON 結構<br />\n            <a href="https://www.npmjs.com/package/@chi0307/transform-chatbot-message" target="_blank">\n              搭配套件\n            </a>\n          ',
                  previewImage: '/chatbot-json-toolbox-preview.png',
                  previewUrl: '/website-legacy-by-2024-10/side/chatbot-json-toolbox',
                },
                {
                  text: '\n            簡單的一個\n            <a href="https://chi0307.github.io/website-legacy-by-2024-10/chatbot" target="_blank">chatbot</a>\n            呈現畫面，<br />\n            嘗試用 PWA、Vue 3.0、TS 開發，<br />\n            目前僅用假資料，無串接後台。\n          ',
                  previewImage: '/chatbot-preview.png',
                  previewUrl: 'https://chi0307.github.io/website-legacy-by-2024-10/chatbot',
                },
                {
                  text: '\n            一個簡單的娛樂用 line bot<br />\n            嘗試串接 Google TTS、Google STT、Google Map<br />\n            部署在 heroku\n          ',
                  previewImage: '/linebot-preview.png',
                  previewUrl: 'https://line.me/R/ti/p/%40tyo2763z',
                },
              ],
              previewUrl: '',
            };
          },
          methods: {
            openPreview: function (e) {
              (this.previewUrl = e), this.$modal.show('project-preview-modal');
            },
          },
        },
        n = o(29),
        component = Object(n.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o(
              'div',
              [
                o(
                  'div',
                  { staticClass: 'project-page' },
                  [
                    o(
                      'p',
                      { staticClass: 'project-description-text' },
                      [
                        o('FontAwesomeIcon', { staticClass: 'icon', attrs: { icon: ['fas', 'dot-circle'] } }),
                        e._v('\n      點擊圖片可預覽網頁\n    '),
                      ],
                      1
                    ),
                    e._v(' '),
                    e._l(e.projects, function (t, r) {
                      return o(
                        'div',
                        { key: r },
                        [
                          o('ProjectBlock', {
                            attrs: { description: t.text, previewImage: t.previewImage, previewUrl: t.previewUrl },
                            on: { openPreview: e.openPreview },
                          }),
                        ],
                        1
                      );
                    }),
                  ],
                  2
                ),
                e._v(' '),
                o(
                  'modal',
                  {
                    attrs: {
                      name: 'project-preview-modal',
                      height: '90%',
                      width: '90%',
                      classes: 'project-preview-modal',
                    },
                  },
                  [o('iframe', { staticClass: 'preview', attrs: { src: e.previewUrl, frameborder: '0' } })]
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
      installComponents(component, { ProjectBlock: o(260).default });
    },
  },
]);
