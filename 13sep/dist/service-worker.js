if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const t=e=>i(e,c),o={module:{uri:c},exports:d,require:t};s[c]=Promise.all(r.map((e=>o[e]||t(e)))).then((e=>(n(...e),d)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/arrow.png",revision:"3b85542719570d55c5261161dc96b1ba"},{url:"assets/wheel.png",revision:"20b02e3dcedbaf5f7d00fcec0c51f9e0"},{url:"assets/wheel1.png",revision:"4d72e908e8a5d862024d27c18e856939"},{url:"assets/wheel2.png",revision:"f150e4111acba6ca3cade8128ecd30c4"},{url:"assets/wheel3.png",revision:"ad0c9b7fcdff468f7403c695e46f9d04"},{url:"index.html",revision:"13d2fe1b3dda797da34785b4ebdedd16"},{url:"main.css",revision:"7569ca25c7cee8344a220523160ee276"},{url:"main.js",revision:"649c102493f1cc87afeb2a30dbc82977"},{url:"main.js.LICENSE.txt",revision:"e1e6e9d894f2051db410e78bce6fd2d5"}],{})}));
