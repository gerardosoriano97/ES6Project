!function r(e,n,t){function o(a,i){if(!n[a]){if(!e[a]){var f="function"==typeof require&&require;if(!i&&f)return f(a,!0);if(u)return u(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(r){var n=e[a][1][r];return o(n||r)},c,c.exports,r,e,n,t)}return n[a].exports}for(var u="function"==typeof require&&require,a=0;a<t.length;a++)o(t[a]);return o}({1:[function(r,e,n){"use strict";var t=r("./class/Hola.js");alert(t.Hola.saludo())},{"./class/Hola.js":2}],2:[function(r,e,n){"use strict";function t(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function r(r,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}return function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}}(),u=function(){function r(){t(this,r)}return o(r,null,[{key:"saludo",value:function(){return"hola mundo"}}]),r}();n.Hola=u},{}]},{},[1]);
//# sourceMappingURL=maps/app.bundle.js.map
