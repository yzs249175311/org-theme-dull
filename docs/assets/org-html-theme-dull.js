var _=Object.defineProperty;var H=(t,e,n)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var w=(t,e,n)=>(H(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerpolicy&&(c.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?c.credentials="include":l.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();class I{constructor(e){w(this,"_obj");this._obj=e}start(){for(let[e,n]of Object.entries(this._obj))if(n.length!=0)for(let o of n)console.log("run:"+e+"----"+o.name),o()}}function F(){let t=document.querySelector("#content"),e=document.querySelector("#content>h1.title"),n=document.querySelector("#postamble"),o=document.querySelector("#table-of-contents"),l=document.createElement("nav"),c=document.createElement("main");l.classList.add("nav"),document.querySelectorAll(".outline-2").forEach(k=>{var A;let S=document.createElement("span"),R=(A=k.querySelector("h2").lastChild)==null?void 0:A.nodeValue;S.innerText=R,S.classList.add("nav-node"),l.appendChild(S),c.appendChild(k)});let a=document.createElement("header");a.appendChild(e),a.appendChild(l),document.body.insertBefore(a,t),t==null||t.appendChild(c),o==null||o.appendChild(n)}function G(){document.querySelectorAll("pre").forEach(e=>{let n=document.createElement("div");n.classList.add("top-block"),n.appendChild(document.createElement("span")),n.appendChild(document.createElement("span")),n.appendChild(document.createElement("span")),e.insertAdjacentElement("afterbegin",n)})}let h,q,T,E;function x(t){var e,n,o;Z(),h=t,(e=q[t])==null||e.classList.add("active"),(n=T[t])==null||n.classList.add("active"),(o=E[t])==null||o.classList.add("active")}function Z(){var t,e,n;(t=q[h])==null||t.classList.remove("active"),(e=T[h])==null||e.classList.remove("active"),(n=E[h])==null||n.classList.remove("active")}function $(){h=0,q=document.querySelectorAll("main>.outline-2"),T=document.querySelectorAll("#text-table-of-contents>ul>li"),E=document.querySelectorAll("nav>.nav-node"),x(h),E.forEach((t,e)=>{t.addEventListener("click",()=>{x(e)})})}function P(){document.querySelectorAll("pre").forEach(e=>{let n=document.createElement("span");n.classList.add("copy-block"),e.appendChild(n),n.addEventListener("click",o=>{navigator.clipboard.writeText(o.currentTarget.parentNode.innerText).then(()=>{n.classList.add("copyed"),setTimeout(()=>{n.classList.remove("copyed")},3e3)}).catch(l=>{console.log(l)})})})}function D(){let t=document.querySelector("header .title"),e=document.querySelector("main"),n=!1;e.addEventListener("scroll",o=>{let l=o.currentTarget.scrollTop;l>=200&&!n?(setTimeout(()=>{t.classList.add("hidden")},400),n=!0):l<200&&n&&(setTimeout(()=>{t.classList.remove("hidden")},400),n=!1)})}let p=null,g=null,b=null,v=null;function K(t){if(b){let e=b.querySelector(`a[href="#${t}"]`);v&&v.classList.remove("current"),v=e,v.classList.add("current")}}function W(t){t.forEach(e=>{let n=e.boundingClientRect,o=e.rootBounds,l=e.target.getAttribute("id");n.top<=o.top&&K(l)})}function z(t){t.forEach(e=>{e.attributeName=="class"&&(X(),Q())})}let N=null,y=null,s=null;function J(){b=document.querySelector("#text-table-of-contents"),p=document.querySelector("main"),g=p.querySelector(".outline-2[class~=active]").querySelectorAll("h2,h3,h4,h5,h6"),N={root:p,rootMargin:"-20px 0px 0px 0px",threshold:[0,1]},y=new IntersectionObserver(W,N),g.forEach(e=>{y.observe(e)})}function Q(){b=document.querySelector("#text-table-of-contents"),p=document.querySelector("main"),g=p.querySelector(".outline-2[class~=active]").querySelectorAll("h2,h3,h4,h5,h6"),y&&y.disconnect(),g.forEach(e=>{y.observe(e)})}function U(){s&&s.disconnect(),s=new MutationObserver(z),document.querySelectorAll("main .outline-2[class~=active]").forEach(t=>{s==null||s.observe(t,{attributes:!0})})}function X(){s&&s.disconnect(),document.querySelectorAll("main .outline-2[class~=active]").forEach(t=>{s==null||s.observe(t,{attributes:!0})})}function Y(){J(),U()}function ee(){let t=document.querySelector("nav"),e=document.createElement("span"),n=document.documentElement,o=0,l=["light","dark"];e.classList.add("switchTheme"),e.innerHTML=`
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
</svg>`,e.addEventListener("click",()=>{o=++o%l.length,e.setAttribute("theme",l[o]),n.setAttribute("theme",l[o])}),t.appendChild(e),window.matchMedia("(prefers-color-scheme: dark)").matches&&(o=1),e.setAttribute("theme",l[o]),n.setAttribute("theme",l[o])}let d=null,M=null,i=null,f=null,r=null,m=null,u=null,C=null,L;function te(){i==null||i.classList.add("open"),d==null||d.classList.add("hidden")}function j(){i==null||i.classList.remove("open"),d==null||d.classList.remove("hidden")}function ne(){C=document.querySelectorAll("main>[id^=outline-container-org]"),M=document.createElement("div"),M.className="searchContainer",i=document.createElement("div"),i.className="searchResult",f=document.createElement("div"),f.className="searchCom",r=document.createElement("input"),r.className="searchInput",r.type="text",r.placeholder="请输入内容",m=document.createElement("button"),m.className="searchButton",m.innerHTML=`
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038ZM4.622,9.311a1,1,0,0,1,2,0A2.692,2.692,0,0,0,9.311,12a1,1,0,0,1,0,2A4.7,4.7,0,0,1,4.622,9.311Z"></path></g></svg>
`,f.appendChild(r),f.appendChild(m);let t=document.querySelector(".nav");t==null||t.appendChild(f),d=document.querySelector("#text-table-of-contents"),d==null||d.insertAdjacentElement("afterend",i)}function O(t,e){let n=[];return!e||!t?[]:(e.childNodes.forEach(o=>{var l;o.nodeType===3&&(l=o.nodeValue)!=null&&l.match(t)&&n.push({node:e,content:o.nodeValue}),o.nodeType===1&&(n=[...n,...O(t,o)])}),n)}function le(t,e){let n=[];return e==null||e.forEach(o=>{n.push(O(t,o))}),n}function oe(t){u==null||u.classList.remove("searched-item"),u=t.node,u.scrollIntoView(),u.classList.add("searched-item")}function ce(t,e,n){if(!e)return;let o=document.createElement("ul");t.map(l=>{let c=document.createElement("li"),a=document.createElement("span");a.innerHTML=l.content,c.appendChild(a),a.addEventListener("click",()=>{L==null||L.classList.remove("current"),L=a,a.classList.add("current"),n(l)}),o.appendChild(c)}),e==null||e.appendChild(o)}function B(){if(V(),(r==null?void 0:r.value)==""){j();return}le(r==null?void 0:r.value,C).forEach((e,n)=>{var l;if(e.length==0)return;let o=document.createElement("h4");o.innerText=(l=C[n].querySelector("h2"))==null?void 0:l.innerText,i==null||i.appendChild(o),ce(e,i,c=>{x(n),setTimeout(()=>{oe(c)})})}),te()}function re(){m==null||m.addEventListener("click",()=>{B()}),r==null||r.addEventListener("input",t=>{t.currentTarget.value==""&&V()}),r==null||r.addEventListener("keydown",t=>{t.key==="Enter"&&B()})}function V(){i.innerHTML='<div class="serchResult"></div>',u==null||u.classList.remove("searched-item"),j()}function ie(){ne(),re()}let ae=new I({layouts:[F,G],widgets:[ee,ie],events:[$,P,D,Y]});ae.start();
