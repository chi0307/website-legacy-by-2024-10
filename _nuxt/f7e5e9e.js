(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,o){"use strict";var n=o(0),c=o(167),r=o.n(c);n.default.use(r.a)},114:function(e,t,o){"use strict";var n=o(0),c=o(13),r=o(169),l=o(170),d=o(171),h=o(168);c.c.add(r.a),c.c.add(l.a),c.c.add(d.a),n.default.config.productionTip=!1,n.default.component("FontAwesomeIcon",h.a)},115:function(e,t,o){"use strict";var n=o(0),c=o(172),r=o.n(c);n.default.use(r.a)},116:function(e,t,o){"use strict";var n=o(0),c=o(173);n.default.component("CollapseTransition",c.CollapseTransition)},117:function(e,t,o){"use strict";var n=o(0),c=o(174);n.default.use(c.a)},176:function(e,t,o){"use strict";var n={created:function(){this.check100vh()},methods:{check100vh:function(){var e="".concat(window.innerHeight,"px");document.documentElement.style.setProperty("--real100vh",e)}}},c=o(29),component=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},177:function(e,t,o){"use strict";o(41),o(54);var n={data:function(){return{pages:[{name:"ABOUT ME",path:"aboutMe"},{name:"RESUME",path:"resume"},{name:"PROJECTS",path:"projects"}],showMobileMenu:!1,isMobile:!1}},mounted:function(){window.addEventListener("resize",this.checkMobile)},created:function(){this.checkMobile(),this.check100vh()},methods:{jumpPage:function(path){this.$route.path!==path&&this.$router.replace(path),this.showMobileMenu=!1},checkMobile:function(){this.isMobile=window.innerWidth<=768,this.showMobileMenu&&!this.isMobile&&(this.showMobileMenu=!1)},check100vh:function(){var e="".concat(window.innerHeight,"px");document.documentElement.style.setProperty("--real100vh",e)}}},c=o(29),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container",class:{"hide-scroll":e.showMobileMenu}},[o("div",{staticClass:"header"},[o("FontAwesomeIcon",{staticClass:"bar-icon",class:{hide:e.showMobileMenu},attrs:{icon:["fas","bars"]},on:{click:function(t){e.showMobileMenu=!0}}}),e._v(" "),o("FontAwesomeIcon",{staticClass:"close-icon",class:{hide:!e.showMobileMenu},attrs:{icon:["fas","times"]},on:{click:function(t){e.showMobileMenu=!1}}}),e._v(" "),o("div",{staticClass:"header-inbox"},[e._m(0),e._v(" "),o("div",{staticClass:"menu-block",class:{hide:e.isMobile&&!e.showMobileMenu}},[o("ul",{staticClass:"menu-list"},e._l(e.pages,(function(t,n){return o("li",{key:n,class:{"menu-item":!0,"menu-click":new RegExp("^/?"+t.path+"/?").test(e.$route.path)},on:{click:function(o){return e.jumpPage("/"+t.path)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),0)])])],1),e._v(" "),o("Nuxt",{staticClass:"content"})],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"title-block"},[o("h2",{staticClass:"title"},[e._v("\n          Website\n        ")])])}],!1,null,null,null);t.a=component.exports},181:function(e,t,o){o(182),e.exports=o(183)},222:function(e,t,o){var content=o(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(51).default)("a07579c2",content,!0,{sourceMap:!1})},223:function(e,t,o){var n=o(50)(!1);n.push([e.i,"h1,h2,h3,h4,h5,h6,p{margin:0}.hide{display:none!important}.show{display:block!important}:root{--real100vh:100vh}.container{margin:0;min-height:calc(100vh - 100px);min-height:calc(var(--real100vh) - 100px);justify-content:center;align-items:center;text-align:center;position:absolute;padding-top:100px;width:100%;background-color:#fcfbfa}.container.hide-scroll{max-height:calc(100vh - 100px);max-height:calc(var(--real100vh) - 100px);overflow:hidden}.container .header{position:fixed;right:0;top:0;width:100%;height:100px;background-color:#fcfbfa;z-index:10}.container .header .bar-icon,.container .header .close-icon{display:none}@media(max-width:768px){.container .header .bar-icon,.container .header .close-icon{display:block;height:40px;width:40px;color:#000;cursor:pointer;left:calc(100vw - 70px);position:absolute;z-index:20;top:30px}}.container .header .header-inbox{margin:0 auto;display:flex;height:100px;top:0;max-width:1280px;justify-content:space-between;padding-left:30px;padding-right:30px}@media(max-width:768px){.container .header .header-inbox{max-width:calc(100vw - 60px);margin:0;left:0}}.container .header .header-inbox .title-block{position:relative;flex:1}.container .header .header-inbox .title-block .title{line-height:100px;text-align:left}.container .header .header-inbox .menu-block{position:relative;flex:3;margin:0}@media(max-width:768px){.container .header .header-inbox .menu-block{position:fixed;top:0;left:0;width:100vw;height:100vh;height:var(--real100vh);background-color:#e6dacd}}.container .header .header-inbox .menu-block .menu-list{margin:0;float:right;max-height:100px}@media(max-width:768px){.container .header .header-inbox .menu-block .menu-list{margin-top:100px;width:100%;max-height:100vh;max-height:var(--real100vh);display:flex;flex-direction:column}}.container .header .header-inbox .menu-block .menu-list .menu-item{list-style:none;float:left;line-height:100px;margin:0 10px;cursor:pointer;border-top:1px solid #fcfbfa}.container .header .header-inbox .menu-block .menu-list .menu-item:hover{color:#5288fe}@media(max-width:768px){.container .header .header-inbox .menu-block .menu-list .menu-item:last-child{border-bottom:1px solid #fcfbfa}}.container .header .header-inbox .menu-block .menu-list .menu-click{color:#5288fe}.container .content:not(.index-page){background-color:#e6dacd;min-height:calc(100vh - 100px);min-height:calc(var(--real100vh) - 100px);width:100%;-webkit-animation:web-fade-in;animation:web-fade-in;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes web-fade-in{0%{opacity:0}40%{opacity:0}to{opacity:1}}@keyframes web-fade-in{0%{opacity:0}40%{opacity:0}to{opacity:1}}.container .about-me-page{justify-content:center;position:relative;height:800px}@media(max-width:768px){.container .about-me-page{height:1220px}}.container .about-me-page .white-block{background-color:#fcfbfa;position:absolute;width:66%;height:800px;right:0;min-height:calc(100vh - 100px);min-height:calc(var(--real100vh) - 100px)}@media(max-width:768px){.container .about-me-page .white-block{width:100%;min-height:300px;height:300px}}.container .about-me-page .message-block{height:600px;width:720px;position:absolute;top:100px;left:calc(50% - 360px);display:flex}@media(max-width:768px){.container .about-me-page .message-block{height:1200px;width:calc(100vw - 40px);padding-left:20px;padding-right:20px;left:auto;flex-direction:column;align-items:center;top:20px}}.container .about-me-page .message-block .present-block{flex:1;background-color:#f4ece6;box-shadow:-10px 10px 18px 0 rgba(0,0,0,.2);display:flex;flex-direction:column;height:600px;width:360px}@media(max-width:768px){.container .about-me-page .message-block .present-block{max-width:calc(100vw - 60px)}}.container .about-me-page .message-block .present-block .present-top-block{flex:9;position:relative}.container .about-me-page .message-block .present-block .present-top-block .about-me-image{top:80px;max-width:200px;max-height:200px;margin:auto;position:absolute;left:calc(50% - 100px)}.container .about-me-page .message-block .present-block .present-top-block .about-me-name{top:340px;left:calc(50% - 100px);width:200px;position:absolute;text-align:center}.container .about-me-page .message-block .present-block .present-top-block .about-me-line{position:absolute;top:420px;left:calc(50% - 30px);width:60px;border-bottom:3px solid #5288fe;border-radius:3px}.container .about-me-page .message-block .present-block .present-top-block .about-me-title{position:absolute;top:470px;left:calc(50% - 150px);width:300px;text-align:center}.container .about-me-page .message-block .present-block .present-bottom-block{background-color:#fcfbfa;flex:1;display:flex;justify-content:center;align-items:center}.container .about-me-page .message-block .present-block .present-bottom-block a{margin:0 5%}.container .about-me-page .message-block .present-block .present-bottom-block a *{width:30px;height:30px;color:#000}.container .about-me-page .message-block .description-block{flex:1;height:600px;width:360px}@media(max-width:768px){.container .about-me-page .message-block .description-block{max-width:calc(100vw - 60px);padding-left:0;padding-right:0}}.container .about-me-page .message-block .description-block .description-inblock{height:480px;padding:60px 36px;display:flex;text-align:left;flex-direction:column}@media(max-width:768px){.container .about-me-page .message-block .description-block .description-inblock{padding-left:0;padding-right:0}}.container .about-me-page .message-block .description-block .description-inblock .description-title{flex:1;font-size:3em;line-height:96px}.container .about-me-page .message-block .description-block .description-inblock .description-content{flex:2}.container .about-me-page .message-block .description-block .description-inblock .description-link{flex:2;display:flex;justify-content:center;align-items:center}.container .about-me-page .message-block .description-block .description-inblock .description-link button{flex:1;height:40px;width:100px;margin:8px;background-color:#fcfbfa;border-color:#000;border-width:1px;border-radius:40px;cursor:pointer}@media(max-width:768px){.container .about-me-page .message-block .description-block .description-inblock .description-link button{background-color:#e6dacd}}.container .about-me-page .message-block .description-block .description-inblock .description-link button:hover{background-color:#5288fe;border-width:0;color:#fcfbfa}.container .resume-page{padding-top:50px;padding-bottom:50px}.container .resume-page .resume-inbox{margin:0 auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:680px;max-width:680px}@media(max-width:768px){.container .resume-page .resume-inbox{width:100vw}}.container .resume-page .resume-inbox>div{width:100%;max-width:100%}.container .resume-page .resume-inbox .resume-title p{font-size:40px;font-weight:700}.container .resume-page .resume-inbox .education-title,.container .resume-page .resume-inbox .experience-title,.container .resume-page .resume-inbox .skill-title{margin-top:80px;display:flex;justify-content:space-between}.container .resume-page .resume-inbox .education-title p,.container .resume-page .resume-inbox .experience-title p,.container .resume-page .resume-inbox .skill-title p{font-size:28px;font-weight:700;text-align:left}.container .resume-page .resume-inbox .education-title .cv,.container .resume-page .resume-inbox .experience-title .cv,.container .resume-page .resume-inbox .skill-title .cv{background-color:#5288fe;border:2px solid #5288fe;color:#fcfbfa;width:120px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:50px;cursor:pointer}.container .resume-page .resume-inbox .education-title .cv:hover,.container .resume-page .resume-inbox .experience-title .cv:hover,.container .resume-page .resume-inbox .skill-title .cv:hover{background-color:#e6dacd;color:#000}@media(max-width:768px){.container .resume-page .resume-inbox .education-title,.container .resume-page .resume-inbox .experience-title,.container .resume-page .resume-inbox .skill-title{width:90vw;margin-top:30px}}.container .resume-page .resume-inbox .education,.container .resume-page .resume-inbox .experience{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.container .resume-page .resume-inbox .resume-card{display:inline-block;box-shadow:-12px 12px 20px 0 rgba(0,0,0,.2);background-color:#fcfbfa}.container .project-page{display:flex;flex-direction:column;align-items:center}.container .project-page .project-description-text{margin-top:20px;width:680px;text-align:right;color:rgba(0,0,0,.6)}@media(max-width:768px){.container .project-page .project-description-text{width:90vw}}.container .project-preview-modal{overflow:scroll}.container .project-preview-modal .preview{min-width:1440px;min-height:600px;width:100%;height:100%}",""]),e.exports=n}},[[181,12,1,13]]]);