var L=Object.defineProperty;var x=(l,e,t)=>e in l?L(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var v=(l,e,t)=>(x(l,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=t(n);fetch(n.href,c)}})();class E{constructor(e){v(this,"_obj");this._obj=e}start(){for(let[e,t]of Object.entries(this._obj))if(t.length!=0)for(let o of t)console.log("run:"+e+"----"+o.name),o()}}function g(){let l=document.querySelector("#content"),e=document.querySelector("#content>h1.title"),t=document.querySelector("#postamble"),o=document.querySelector("#table-of-contents"),n=document.createElement("nav"),c=document.createElement("main");n.classList.add("nav"),document.querySelectorAll(".outline-2").forEach(d=>{var y;let s=document.createElement("span"),f=(y=d.querySelector("h2").lastChild)==null?void 0:y.nodeValue;s.innerText=f,s.classList.add("nav-node"),n.appendChild(s),c.appendChild(d)});let i=document.createElement("header");i.appendChild(e),i.appendChild(n),document.body.insertBefore(i,l),l==null||l.appendChild(c),o==null||o.appendChild(t)}function q(){document.querySelectorAll("pre").forEach(e=>{let t=document.createElement("div");t.classList.add("top-block"),t.appendChild(document.createElement("span")),t.appendChild(document.createElement("span")),t.appendChild(document.createElement("span")),e.insertAdjacentElement("afterbegin",t)})}function S(){let l=document.querySelector("nav"),e=document.createElement("span"),t=document.documentElement,o=0,n=["light","dark"];e.classList.add("switchTheme"),e.innerHTML=`
<svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
<mask class="moon" id="moon-mask">
<rect x="0" y="0" width="100%" height="100%" fill="white" />
<circle cx="24" cy="10" r="6" fill="black" />
</mask>
<circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
<g class="sun-beams" stroke="currentColor">
<line x1="12" y1="1" x2="12" y2="3" />
<line x1="12" y1="21" x2="12" y2="23" />
<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
<line x1="1" y1="12" x2="3" y2="12" />
<line x1="21" y1="12" x2="23" y2="12" />
<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
</g>
</svg>`,e.addEventListener("click",()=>{o=++o%n.length,e.setAttribute("theme",n[o]),t.setAttribute("theme",n[o])}),l.appendChild(e),window.matchMedia("(prefers-color-scheme: dark)").matches&&(o=1),e.setAttribute("theme",n[o]),t.setAttribute("theme",n[o])}const k=function(){function l(){let e=0,t=document.querySelectorAll("main>.outline-2"),o=document.querySelectorAll("#text-table-of-contents>ul>li"),n=document.querySelectorAll("nav>.nav-node");function c(){i(e),n.forEach((s,f)=>{s.addEventListener("click",()=>{d(),i(f)})})}function i(s){e=s,t[s].classList.add("active"),o[s].classList.add("active"),n[s].classList.add("active")}function d(){t[e].classList.remove("active"),o[e].classList.remove("active"),n[e].classList.remove("active")}c()}return{navEvent:l}}();function A(){document.querySelectorAll("pre").forEach(e=>{let t=document.createElement("span");t.classList.add("copy-block"),e.appendChild(t),t.addEventListener("click",o=>{navigator.clipboard.writeText(o.currentTarget.parentNode.innerText).then(()=>{t.classList.add("copyed"),setTimeout(()=>{t.classList.remove("copyed")},3e3)}).catch(n=>{console.log(n)})})})}function C(){let l=document.querySelector("header .title"),e=document.querySelector("main"),t=!1;e.addEventListener("scroll",o=>{let n=o.currentTarget.scrollTop;n>=200&&!t?(setTimeout(()=>{l.classList.add("hidden")},400),t=!0):n<200&&t&&(setTimeout(()=>{l.classList.remove("hidden")},400),t=!1)})}let a=null,h=null,p=null,m=null;function T(l){let e=p.querySelector(`a[href="#${l}"]`);m&&m.classList.remove("current"),m=e,m.classList.add("current")}function w(l){l.forEach(e=>{let t=e.boundingClientRect,o=e.rootBounds,n=e.target.getAttribute("id");t.top<=o.top&&T(n)})}function I(l){l.forEach(e=>{e.attributeName=="class"&&(O(),M())})}let b=null,u=null,r=null;function B(){p=document.querySelector("#text-table-of-contents"),a=document.querySelector("main"),h=a.querySelector(".outline-2[class~=active]").querySelectorAll("h2,h3,h4,h5,h6"),b={root:a,rootMargin:"-20px 0px 0px 0px",threshold:[0,1]},u=new IntersectionObserver(w,b),h.forEach(e=>{u.observe(e)})}function M(){p=document.querySelector("#text-table-of-contents"),a=document.querySelector("main"),h=a.querySelector(".outline-2[class~=active]").querySelectorAll("h2,h3,h4,h5,h6"),u&&u.disconnect(),h.forEach(e=>{u.observe(e)})}function N(){r&&r.disconnect(),r=new MutationObserver(I),document.querySelectorAll("main .outline-2[class~=active]").forEach(l=>{r==null||r.observe(l,{attributes:!0})})}function O(){r&&r.disconnect(),document.querySelectorAll("main .outline-2[class~=active]").forEach(l=>{r==null||r.observe(l,{attributes:!0})})}function j(){B(),N()}let R=new E({layouts:[g,q],widgets:[S],events:[k.navEvent,A,C,j]});R.start();
