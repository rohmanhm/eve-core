/*!
 * 
 *   Copyright (c) 2017 - present Habib Rohman (https://github.com/rohmanhm).
 *   All rights reserved.
 * 
 *   Licensed Under Apache License 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
 * 
 *   Card Maker @0.0.3
 *   
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CardMaker=t():e.CardMaker=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonpCardMaker;window.webpackJsonpCardMaker=function(r,a,i){for(var f,u,l,c=0,d=[];c<r.length;c++)u=r[c],o[u]&&d.push(o[u][0]),o[u]=0;for(f in a)Object.prototype.hasOwnProperty.call(a,f)&&(e[f]=a[f]);for(n&&n(r,a,i);d.length;)d.shift()();if(i)for(c=0;c<i.length;c++)l=t(t.s=i[c]);return l};var r={},o={1:0};return t.e=function(e){function n(){a.onerror=a.onload=null,clearTimeout(i);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}if(0===o[e])return Promise.resolve();if(o[e])return o[e][2];var r=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,t.nc&&a.setAttribute("nonce",t.nc),a.src=t.p+"../dist/"+e+".js";var i=setTimeout(n,12e4);a.onerror=a.onload=n;var f=new Promise(function(t,n){o[e]=[t,n]});return o[e][2]=f,r.appendChild(a),f},t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){throw console.error(e),e},t(t.s=3)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,f=e[Symbol.iterator]();!(r=(i=f.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&f.return&&f.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1);Promise.each=function(e,t){return e&&e.length?0===e.length?Promise.resolve():e.reduce(function(e,n){return e.then(function(){return t(n)})},Promise.resolve()):Promise.reject(new Error("Non array passed to each"))};var u=new WeakMap,l=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.renderText=function(){var e=t.getConfig("template").text;return Promise.each(e,function(e,n){setTimeout(function(){t.writeText(e.value,e.props)},1)})},u.set(this,{align:"left",background:void 0,canvas:void 0,color:"black",download:"",el:"#cardmaker",width:400,height:250,template:{}}),this.setConfig(n),this.putCanvas(),this.render(),this.enableDownload()}return i(e,[{key:"changeBackground",value:function(e,t){var n=this.getConfig(["width","height"]),r=this.getContext();switch(r.beginPath(),e){case"image":if(void 0==t.img)throw new Error("Make sure you set the background image");r.drawImage(t.img,0,0,n.width,n.height);break;case"color":if(void 0==t.color)throw new Error("Make sure you set the background color");r.fillStyle=t.color,r.rect(0,0,n.width,n.height),r.fill()}return r.closePath(),r}},{key:"enableDownload",value:function(){var e=this,t=this.getConfig("download");if(t.length>0){var n=document.querySelector(t);if(!n)throw new Error("Element "+t+" can't found in your DOM. Please check again, maybe you make a typo");n.addEventListener("click",function(t){t.preventDefault(),window.location.href=e.getImage()})}}},{key:"getConfig",value:function(e){var t=u.get(this);if(!e)return t;if("object"==("undefined"==typeof e?"undefined":a(e))){for(var n={},r=0;r<e.length;r++)n[e[r]]=t[e[r]];return n}if("string"==typeof e){if(""==t[e])throw new Error("Config with key '"+e+"' undefined, please check your key again");return t[e]}}},{key:"getContext",value:function(){if(this.getConfig("canvas"))return this.getConfig("canvas").getContext("2d")}},{key:"getImage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jpeg",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.getConfig("canvas").toDataURL("image/"+e,t)}},{key:"makeCanvas",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(void 0!=this.getConfig("canvas"))throw new Error("Cannot create canvas, You've already set the canvas");var t=(0,f.makeElement)("canvas",e);return this.setConfig("canvas",t),t}},{key:"putCanvas",value:function(){var e=this.getConfig(["el","width","height"]),t=void 0,n=void 0;if(n=this.makeCanvas({width:e.width,height:e.height}),t=document.querySelector(e.el),null!=t||void 0!=t)return t.appendChild(n);throw new Error("Cannot find "+t+" element in your DOM")}},{key:"render",value:function(){var e=this,t=this.getConfig(["background","template"]);!t.background&&t.template.background.length>0&&this.setConfig("background",t.template.background);var n=[this.renderBackground(),this.renderImage()];return Promise.all(n).then(function(){e.renderText()})}},{key:"renderBackground",value:function(){var e=this,t=this.getConfig("background");(0,f.isColor)(t)?this.changeBackground("color",{color:t}):void 0!=t&&""!=t?(0,f.makeImage)(t).then(function(t){e.changeBackground("image",{img:t})}):(this.changeBackground("color",{color:(0,f.colorNameToHex)("black")}),console.warn("You don't specified background image or color, so .. we give you black background"))}},{key:"renderImage",value:function(){var e=this,t=this.getConfig("template").images;return Promise.each(t,function(t){return(0,f.makeImage)(t.value).then(function(n){var r=e.getContext(),o=t.props;setTimeout(function(){r.drawImage(n,o.sx||0,o.sy||0,o.swidth||n.width,o.sheight||n.height,o.x||0,o.y||0,o.width||n.width,o.height||n.height)},1)})}).then(function(){return!0})}},{key:"setConfig",value:function(){for(var e=this.getConfig(),t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if(n){if("object"==a(n[0])){var i=n[0],f=[],u=!0,l=!1,c=void 0;try{for(var d,s=Object.entries(i)[Symbol.iterator]();!(u=(d=s.next()).done);u=!0){var g=o(d.value,2),h=g[0],b=g[1];e[h]=b,f.push(h)}}catch(e){l=!0,c=e}finally{try{!u&&s.return&&s.return()}finally{if(l)throw c}}return this.getConfig(f)}return e[n[0]]=n[1],this.getConfig([n[0]])}}},{key:"writeText",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getContext(),r=this.getConfig(["color","align"]);return""!=e&&void 0!=e||console.warn("We've found you insert an empty text, please make sure you make it valuable."),n.fillStyle=t.color||r.color,n.textAlign=t.align||r.align,n.font=(t.size||20)+"px "+(t.family||"Arial"),n.fillText(e,t.x||0,t.y||0),n}}]),e}();t.default=l,e.exports=t.default},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement(e);for(var r in t)n[r]=t[r];return n}function o(e){return u(e,{method:"GET",headers:new Headers,mode:"cors",cache:"default"}).then(function(t){return new Promise(function(n,r){var o=new Image;o.onload=function(){n(o)},o.onerror=function(){r(e+" can't load")},o.src=t})})}function a(e){var t=e?e.toLowerCase():"",n={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};return"undefined"!=typeof n[t]&&n[t]}function i(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)}function f(e){if(!i(e)){var t=a(e);if(!i(t))return!1}return!0}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,t).then(function(e){return e.blob()}).then(function(e){return new Promise(function(t,n){var r=new FileReader;r.onloadend=function(){t(r.result)},r.onerror=n,r.readAsDataURL(e)})})}Object.defineProperty(t,"__esModule",{value:!0}),t.makeElement=r,t.makeImage=o,t.colorNameToHex=a,t.checkHex=i,t.isColor=f,t.toDataURL=u},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o);t.default=a.default,e.exports=t.default}])});