(()=>{"use strict";var e={191:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(314),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".htmlCard__content p:not(:last-child){margin-bottom:1em}.htmlCard__basicStyles a{color:#009cde;text-decoration:none}.htmlCard__basicStyles a:hover{text-decoration:underline}.htmlCard__basicStyles blockquote,.htmlCard__basicStyles dl,.htmlCard__basicStyles ol,.htmlCard__basicStyles p,.htmlCard__basicStyles pre,.htmlCard__basicStyles table,.htmlCard__basicStyles ul{margin:15px 0}.htmlCard__basicStyles ol,.htmlCard__basicStyles ul{padding-left:30px}.htmlCard__basicStyles ul li{list-style:disc}.htmlCard__basicStyles ol li{list-style:decimal}.htmlCard__basicStyles h1{font-size:2.5em}.htmlCard__basicStyles h2{font-size:2em}.htmlCard__basicStyles h3{font-size:1.5em}.htmlCard__basicStyles h4{font-size:1.2em}.htmlCard__basicStyles h5,.htmlCard__basicStyles h6{font-size:1em}.htmlCard__basicStyles h1,.htmlCard__basicStyles h2,.htmlCard__basicStyles h3,.htmlCard__basicStyles h4,.htmlCard__basicStyles h5,.htmlCard__basicStyles h6{font-weight:700;line-height:1.7;margin-bottom:15px}.htmlCard__basicStyles h1+p,.htmlCard__basicStyles h2+p,.htmlCard__basicStyles h3+p{margin-top:10px}.htmlCard__basicStyles img{max-width:100%}.htmlCard__basicStyles code,.htmlCard__basicStyles pre{background-color:#f8f8f8;border:1px solid #ddd;border-radius:3px;font-family:Consolas,Liberation Mono,Courier,monospace;font-size:12px;margin:0 2px;padding:6px;white-space:pre}.htmlCard__basicStyles pre code{border:none;margin:0;padding:0;white-space:pre}.htmlCard__basicStyles hr{background-color:#f0f0f0;border:none;height:.2rem;margin:1.5rem 0}.htmlCard__basicStyles blockquote{border-left:5px solid #f0f0f0;padding-left:15px}",""]);const o=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},72:(e,t,n)=>{var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],l=t.base?o[0]+t.base:o[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var h=s(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==h?(i[h].references++,i[h].updater(u)):i.push({identifier:d,updater:_(u,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,h=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,p=0;function _(e,t){var n,r,a;if(t.singleton){var o=p++;n=f||(f=c(t)),r=u.bind(null,n,o,!1),a=u.bind(null,n,o,!0)}else n=c(t),r=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);i[a].references--}for(var o=l(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=o}}}},262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=Vue;var t={class:"px-3 py-3"};var r=["innerHTML"];const a={props:["content","withBasicStyles"]};var o=n(72),i=n.n(o),s=n(191),l={insert:"head",singleton:!1};i()(s.A,l);s.A.locals;var c=n(262);const d={components:{CardContent:(0,c.A)(a,[["render",function(t,n,a,o,i,s){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{innerHTML:a.content,class:(0,e.normalizeClass)(["htmlCard__content",{htmlCard__basicStyles:a.withBasicStyles}])},null,10,r)}]])},props:["card"],computed:{cardClassList:function(){var e="";return this.card.center&&(e+=" flex flex-col justify-center text-center"),e}}},h=(0,c.A)(d,[["render",function(n,r,a,o,i,s){var l=(0,e.resolveComponent)("CardContent"),c=(0,e.resolveComponent)("Card",!0);return a.card.withoutCardStyles?((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:0,class:(0,e.normalizeClass)(["htmlCard",s.cardClassList])},[(0,e.createVNode)(l,{content:a.card.content,"with-basic-styles":a.card.withBasicStyles},null,8,["content","with-basic-styles"])],2)):((0,e.openBlock)(),(0,e.createBlock)(c,{key:1,class:(0,e.normalizeClass)(["htmlCard",s.cardClassList])},{default:(0,e.withCtx)((function(){return[(0,e.createElementVNode)("div",t,[(0,e.createVNode)(l,{content:a.card.content,"with-basic-styles":a.card.withBasicStyles},null,8,["content","with-basic-styles"])])]})),_:1},8,["class"]))}]]);Nova.booting((function(e,t){e.component("html-card",h)}))})()})();