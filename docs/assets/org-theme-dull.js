(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();(function(){let c=document.querySelector("#table-of-contents");document.body.appendChild(c)})();(function(){document.querySelectorAll("pre").forEach(r=>{let o=document.createElement("span");o.classList.add("copy-block"),r.appendChild(o),o.addEventListener("click",n=>{navigator.clipboard.writeText(n.currentTarget.parentNode.innerText).then(()=>{o.classList.add("copyed"),setTimeout(()=>{o.classList.remove("copyed")},3e3)}).catch(e=>{console.log(e)})})})})();
