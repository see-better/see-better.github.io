(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aef65"],{"0bfc":function(t,r,e){"use strict";e.r(r),e.d(r,"scopeCss",(function(){return P}));var n=e("9ab4"),c=function(t){var r,e=[],n=0;t=t.replace(/(\[[^\]]*\])/g,(function(t,r){var c="__ph-"+n+"__";return e.push(r),n++,c})),r=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,r,c){var o="__ph-"+n+"__";return e.push(c),n++,r+o}));var c={content:r,placeholders:e};return c},o=function(t,r){return r.replace(/__ph-(\d+)__/g,(function(r,e){return t[+e]}))},s="-shadowcsshost",i="-shadowcssslotted",u="-shadowcsscontext",a=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+s+a,"gim"),p=new RegExp("("+u+a,"gim"),f=new RegExp("("+i+a,"gim"),h=s+"-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,v=[/::shadow/g,/::content/g],d="([>\\s~+[.,{:][\\s\\S]*)?$",m=/-shadowcsshost/gim,w=/:host/gim,_=/::slotted/gim,x=/:host-context/gim,b=/\/\*\s*[\s\S]*?\*\//g,O=function(t){return t.replace(b,"")},W=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,j=function(t){return t.match(W)||[]},k=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,E=/([{}])/g,R="{",S="}",C="%BLOCK%",L=function(t,r){var e=B(t),n=0;return e.escapedString.replace(k,(function(){for(var t=[],c=0;c<arguments.length;c++)t[c]=arguments[c];var o=t[2],s="",i=t[4],u="";i&&i.startsWith("{"+C)&&(s=e.blocks[n++],i=i.substring(C.length+1),u="{");var a={selector:o,content:s},l=r(a);return""+t[1]+l.selector+t[3]+u+l.content+i}))},B=function(t){for(var r=t.split(E),e=[],n=[],c=0,o=[],s=0;s<r.length;s++){var i=r[s];i===S&&c--,c>0?o.push(i):(o.length>0&&(n.push(o.join("")),e.push(C),o=[]),e.push(i)),i===R&&c++}o.length>0&&(n.push(o.join("")),e.push(C));var u={escapedString:e.join(""),blocks:n};return u},I=function(t){return t=t.replace(x,u).replace(w,s).replace(_,i),t},J=function(t,r,e){return t.replace(r,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){for(var n=t[2].split(","),c=[],o=0;o<n.length;o++){var s=n[o].trim();if(!s)break;c.push(e(h,s,t[3]))}return c.join(",")}return h+t[3]}))},K=function(t,r,e){return t+r.replace(s,"")+e},$=function(t){return J(t,l,K)},M=function(t,r,e){return r.indexOf(s)>-1?K(t,r,e):t+r+e+", "+r+" "+t+e},U=function(t,r){var e=f;return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){var n=t[2].trim(),c=t[3],o="."+r+" > "+n+c;return o}return h+t[3]}))},q=function(t){return J(t,p,M)},y=function(t){return v.reduce((function(t,r){return t.replace(r," ")}),t)},z=function(t){var r=/\[/g,e=/\]/g;return t=t.replace(r,"\\[").replace(e,"\\]"),new RegExp("^("+t+")"+d,"m")},A=function(t,r){var e=z(r);return!e.test(t)},D=function(t,r,e){if(m.lastIndex=0,m.test(t)){var n="."+e;return t.replace(g,(function(t,r){return r.replace(/([^:]*)(:*)(.*)/,(function(t,r,e,c){return r+n+e+c}))})).replace(m,n+" ")}return r+" "+t},F=function(t,r,e){var n=/\[is=([^\]]*)\]/g;r=r.replace(n,(function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return r[0]}));var s="."+r,i=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(h)>-1)n=D(t,r,e);else{var c=t.replace(m,"");if(c.length>0){var o=c.match(/([^:]*)(:*)(.*)/);o&&(n=o[1]+s+o[2]+o[3])}}return n},u=c(t);t=u.content;var a,l="",p=0,f=/( |>|\+|~(?!=))\s*/g,g=t.indexOf(h)>-1,v=!g;while(null!==(a=f.exec(t))){var d=a[1],w=t.slice(p,a.index).trim();v=v||w.indexOf(h)>-1;var _=v?i(w):w;l+=_+" "+d+" ",p=f.lastIndex}var x=t.substring(p);return v=v||x.indexOf(h)>-1,l+=v?i(x):x,o(u.placeholders,l)},G=function(t,r,e,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():A(t,r)?F(t,r,e).trim():t.trim()})).join(", ")},H=function(t,r,e,n,c){return L(t,(function(t){var c=t.selector,o=t.content;"@"!==t.selector[0]?c=G(t.selector,r,e,n):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(o=H(t.content,r,e,n));var s={selector:c.replace(/\s{2,}/g," ").trim(),content:o};return s}))},N=function(t,r,e,n,c){return t=I(t),t=$(t),t=q(t),t=U(t,n),t=y(t),r&&(t=H(t,r,e,n)),t=t.replace(/-shadowcsshost-no-combinator/g,"."+e),t=t.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),t.trim()},P=function(t,r,e){var c=r+"-h",o=r+"-s",s=j(t);t=O(t);var i=[];if(e){var u=function(t){var r="/*!@___"+i.length+"___*/",e="/*!@"+t.selector+"*/";return i.push({placeholder:r,comment:e}),t.selector=r+t.selector,t};t=L(t,(function(t){return"@"!==t.selector[0]?u(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=L(t.content,u),t):t}))}var a=N(t,r,c,o);return t=Object(n["d"])([a],s).join("\n"),e&&i.forEach((function(r){var e=r.placeholder,n=r.comment;t=t.replace(e,n)})),t};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */}}]);
//# sourceMappingURL=chunk-2d0aef65.ceb5043e.js.map