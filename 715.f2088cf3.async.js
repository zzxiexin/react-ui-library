(self.webpackChunkyxhooks=self.webpackChunkyxhooks||[]).push([[715],{38645:function(e,t,r){"use strict";r(85045),r(67294),r(35532),r(67915)},35532:function(e,t,r){"use strict";r(67294)},16795:function(e,t,r){"use strict";r(36096),r(24422),r(45598),r(67294)},67915:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(93096),o=r.n(n),u=r(67294),l=["children"];function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,l,i=[],a=!0,c=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=u.call(r)).done)&&(i.push(n.value),i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{if(!a&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=function(e){var t=e.children,r=c(e,l),n=(0,u.useRef)(null),a=i((0,u.useState)(!1),2),f=a[0],s=a[1],d=i((0,u.useState)(!1),2),v=d[0],y=d[1];return(0,u.useEffect)((function(){var e=n.current;if(e){var t=o()((function(){s(e.scrollLeft>0),y(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}}),[]),u.createElement("div",{className:"dumi-default-table"},u.createElement("div",{className:"dumi-default-table-content",ref:n,"data-left-folded":f||void 0,"data-right-folded":v||void 0},u.createElement("table",r,t)))}},66313:function(e,t,r){"use strict";r(70593),r(67294)},45598:function(e,t,r){"use strict";var n=(0,r(64836).default)(r(67294)),o=r(11805)},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);