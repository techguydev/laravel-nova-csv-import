!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(s).concat([a]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(r[s]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=n(8),s={},o=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,c=0,u=!1,l=function(){},p=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(h(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(h(n.parts[a]));s[n.id]={id:n.id,refs:1,parts:o}}}}function m(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function h(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(f){var a=c++;r=i||(i=m()),t=b.bind(null,r,a,!1),n=b.bind(null,r,a,!0)}else r=m(),t=function(e,t){var n=t.css,r=t.media,a=t.sourceMap;r&&e.setAttribute("media",r);p.ssrId&&e.setAttribute(d,t.id);a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){u=n,p=r||{};var o=a(e,t);return v(o),function(t){for(var n=[],r=0;r<o.length;r++){var i=o[r];(c=s[i.id]).refs--,n.push(c)}t?v(o=a(e,t)):o=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete s[c.id]}}}};var _,g=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function b(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var s=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e,t,n,r,a,s){var o,i=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,i=e.default);var u,l="function"==typeof i?i.options:i;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId=a),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=u):r&&(u=r),u){var p=l.functional,d=p?l.render:l.beforeCreate;p?(l._injectStyles=u,l.render=function(e,t){return u.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:i,options:l}}},function(e,t,n){n(4),e.exports=n(21)},function(e,t,n){Nova.booting(function(e,t,r){t.addRoutes([{name:"csv-import",path:"/csv-import",component:n(5)},{name:"csv-import-preview",path:"/csv-import/preview/:file",component:n(11),props:function(e){return{file:e.params.file}}},{name:"csv-import-review",path:"/csv-import/review/:file",component:n(16),props:function(e){return{file:e.params.file}}}])})},function(e,t,n){var r=n(2)(n(9),n(10),!1,function(e){n(6)},null,null);e.exports=r.exports},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("15e4322f",r,!0,{})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var s=t[a],o=s[0],i={id:e+":"+a,css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(i):n.push(r[o]={id:o,parts:[i]})}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){},data:function(){return{file:""}},methods:{handleFile:function(e){this.file=this.$refs.file.files[0]},upload:function(e){var t=new FormData;t.append("file",this.file);var n=this;Nova.request().post("/nova-vendor/laravel-nova-csv-import/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){n.$router.push({name:"csv-import-preview",params:{file:e.data.file}})}).catch(function(e){n.$toasted.show(e.response.data.message,{type:"error"})})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("heading",{staticClass:"mb-6"},[e._v("Importación Masiva")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("card",{staticClass:"flex flex-col items-center justify-center",staticStyle:{"min-height":"300px"}},[n("input",{ref:"file",attrs:{type:"file",name:"file"},on:{change:e.handleFile}}),e._v(" "),n("button",{staticClass:"btn btn-default btn-primary",attrs:{type:"submit"},on:{click:e.upload}},[e._v("Importar")])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mb-6"},[t("a",{attrs:{target:"_blank",href:"https://www.youtube.com/watch?v=lvGoPc8lCHs"}},[this._v("Video tutorial")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mb-6"},[t("a",{attrs:{href:"https://sistrack.net/downloadtemplate"}},[this._v("Baja aqui la plantilla de ejemplo")])])}]}},function(e,t,n){var r=n(2)(n(14),n(15),!1,function(e){n(12)},null,null);e.exports=r.exports},function(e,t,n){var r=n(13);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("595ebe5f",r,!0,{})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){var e=this;Nova.request().get("/nova-vendor/laravel-nova-csv-import/preview/"+this.file).then(function(t){e.headings=t.data.headings,e.rows=t.data.sample,e.resources=t.data.resources,e.total_rows=t.data.total_rows,e.fields=t.data.fields,e.headings.forEach(function(t){e.$set(e.mappings,t,"")})})},data:function(){return{headings:[],rows:[],resources:[],fields:[],resource:"",mappings:{}}},props:["file"],watch:{resource:function(e){var t=this;this.headings.forEach(function(e){t.$set(t.mappings,e,"")}),""!==e&&this.fields[e].forEach(function(e){var n=e.attribute,r=t.headings.indexOf(n);if(!(r<0)){var a=t.headings[r];a===n&&t.$set(t.mappings,a,n)}})}},methods:{runImport:function(){var e=this;if(this.hasValidConfiguration()){var t=document.getElementById("run-import");t.innerHTML="Importing...",t.setAttribute("disabled","disabled");var n={resource:this.resource,mappings:this.mappings};Nova.request().post(this.url("import/"+this.file),n).then(function(n){if("success"===n.data.result)e.$toasted.show("¡Datos Importados!",{type:"success"}),e.$router.push({name:"csv-import-review",params:{file:e.file,resource:e.resource}});else{t.innerHTML="Import &rightarrow;",t.removeAttribute("disabled");var r=n.data.errors?n.data.errors.join(", "):"Tuvimos problemas importando la data, revisa el documento e intenalo nuevamente";e.$toasted.show(r,{type:"error"})}}).catch(function(n){t.innerHTML="Import &rightarrow;",t.removeAttribute("disabled");var r=n.response&&n.response.data&&n.response.data.message?n.response.data.message:"Tuvimos problemas importando la data, revisa el documento e intenalo nuevamente";e.$toasted.show(r,{type:"error"})})}},hasValidConfiguration:function(){var e=[],t=this.mappings;return Object.keys(t).forEach(function(n){""!==t[n]&&e.push(n)}),""!==this.resource&&e.length>0},url:function(e){return"/nova-vendor/laravel-nova-csv-import/"+e}},computed:{disabledImport:function(){return!this.hasValidConfiguration()}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("heading",{staticClass:"mb-6"},[e._v("Importación Masiva")]),e._v(" "),n("card",{staticClass:"flex flex-col",staticStyle:{"min-height":"300px"}},[n("div",{staticClass:"p-8"},[n("h2",{staticClass:"pb-4"},[e._v("Previsualización")]),e._v(" "),n("p",{staticClass:"pb-4"},[e._v("\n                Pudimos descubrir "),n("b",[e._v(e._s(e.headings.length))]),e._v(" Columnas(s) y "),n("b",[e._v(e._s(e.total_rows))]),e._v("\n                fila(s) en tus datos.\n            ")]),e._v(" "),n("p",{staticClass:"pb-4"},[e._v("\n                Seleccione un recurso para importar y hacer match con el encabezado de su archivo y los campos\n                apropiados de la base de datos, puede hacer scroll horizontal para ver todas los datos. A continuación mostramos\n                un ejemplo de como se verá la data importada.\n            ")]),e._v(" "),n("h2",{staticClass:"py-4"},[e._v("Recurso")]),e._v(" "),n("p",{staticClass:"pb-4"},[e._v(" Seleccione:")]),e._v(" "),n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.resource,expression:"resource"}],staticClass:"block form-control form-select",attrs:{name:"resource"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.resource=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[e._v("- Seleccione-")]),e._v(" "),e._l(e.resources,function(t,r){return n("option",{domProps:{value:r}},[e._v(e._s(t))])})],2)])]),e._v(" "),n("div",{staticStyle:{"overflow-x":"auto"}},[n("table",{staticClass:"table w-full"},[n("thead",[n("tr",e._l(e.headings,function(t){return n("th",[e._v(e._s(t))])}),0)]),e._v(" "),n("tbody",[n("tr",e._l(e.headings,function(t){return n("td",{staticClass:"text-center"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.mappings[t],expression:"mappings[heading]"}],staticClass:"w-auto form-control form-select",on:{change:function(n){var r=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.mappings,t,n.target.multiple?r:r[0])}}},[n("option",{attrs:{value:""}},[e._v("- Ignorar esta columna -")]),e._v(" "),e._l(e.fields[e.resource],function(t){return n("option",{domProps:{value:t.attribute}},[e._v(e._s(t.name))])})],2)])}),0),e._v(" "),e._l(e.rows,function(t){return n("tr",e._l(t,function(t){return n("td",[e._v(e._s(t))])}),0)})],2)])]),e._v(" "),n("div",{staticClass:"bg-30 flex px-8 py-4 justify-end"},[n("button",{staticClass:"btn btn-default btn-primary",attrs:{disabled:e.disabledImport,id:"run-import"},on:{click:e.runImport}},[e._v("Importar → ")])])])],1)},staticRenderFns:[]}},function(e,t,n){var r=n(2)(n(19),n(20),!1,function(e){n(17)},null,null);e.exports=r.exports},function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("6812dc89",r,!0,{})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){},data:function(){return{imported:""}},methods:{}}},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("heading",{staticClass:"mb-6"},[this._v("Importación Masiva")]),this._v(" "),t("card",{staticClass:"flex flex-col items-center justify-center",staticStyle:{"min-height":"300px"}},[t("h1",{staticClass:"pb-4"},[this._v("¡Hecho!")]),this._v(" "),t("p",{staticClass:"pb-4"},[this._v("Toda tu data fue importada, revisa las ordenes creadas en el área correspondiente.")])])],1)},staticRenderFns:[]}},function(e,t){}]);