(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{242:function(t,e,o){var content=o(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("ee8e4056",content,!0,{sourceMap:!1})},250:function(t,e,o){"use strict";o(242)},251:function(t,e,o){var r=o(50)(!1);r.push([t.i,".project-block[data-v-67a7f11b]{width:680px;height:360px;margin-top:34px;margin-bottom:34px;background-color:#fcfbfa;display:flex;box-shadow:-12px 12px 20px 0 rgba(0,0,0,.2)}@media(max-width:768px){.project-block[data-v-67a7f11b]{width:90vw}}.project-block .inblock[data-v-67a7f11b]{height:300px;width:620px;display:flex;text-align:left;flex-direction:column;margin:30px;flex:1}@media(max-width:768px){.project-block .inblock[data-v-67a7f11b]{width:calc(90vw - 20px);height:320px;margin:30px 10px}}.project-block .inblock .project-text[data-v-67a7f11b]{text-align:left;height:75px;line-height:1.5;padding-left:5%;padding-right:5%;bottom:0}@media(max-width:768px){.project-block .inblock .project-text[data-v-67a7f11b]{height:80px}}.project-block .inblock .preview-image[data-v-67a7f11b]{height:225px;margin:auto;position:relative;width:100%}@media(max-width:768px){.project-block .inblock .preview-image[data-v-67a7f11b]{height:240px}}.project-block .inblock .preview-image img[data-v-67a7f11b]{max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;cursor:pointer}",""]),t.exports=r},260:function(t,e,o){"use strict";o.r(e);var r={props:{description:{type:String,default:""},previewImage:{type:String,default:""},previewUrl:{type:String,default:""}},methods:{openPreview:function(){this.$emit("openPreview",this.previewUrl)}}},c=(o(250),o(29)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-block"},[o("div",{staticClass:"inblock"},[o("div",{staticClass:"project-text",domProps:{innerHTML:t._s(t.description)}}),t._v(" "),o("div",{staticClass:"preview-image"},[o("img",{attrs:{src:t.previewImage},on:{click:function(e){return t.openPreview()}}})])])])}),[],!1,null,"67a7f11b",null);e.default=component.exports}}]);