parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CdIA":[function(require,module,exports) {
"use strict";var e=document.querySelector(".video__modal"),t=document.querySelector(".video__play");t.addEventListener("click",function(){e.innerHTML='\n  <div class ="video__modal-content">\n  <button class="button video__close">close</button>\n  <iframe\n    width="1106"\n    height="632"\n    src="https://www.youtube.com/embed/G1QYS12bB58?list=PLy_eQOYJ5fx6USHVDEaAe173v1SkiwZtp"\n    title="Incredible iPhone X Mockups &amp; promo Video"\n    frameborder="0"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen\n  ></iframe>\n  </div>\n  ',e.style.display="flex",setTimeout(function(){e.style.opacity="1"},50)}),e.addEventListener("click",function(){e.innerHTML="",e.style.opacity="0",setTimeout(function(){e.style.display="none"},450)});
},{}]},{},["CdIA"], null)
//# sourceMappingURL=video.b539ad34.js.map