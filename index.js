import{a as p,S as d,i as n}from"./assets/vendor-BkVuWn-o.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();function f(r){return p.get("https://pixabay.com/api/",{params:{key:"53324223-e08795bb9ae8d90e4ba564674",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits).catch(s=>console.log(s))}const m=new d(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),u=document.querySelector(".loader");function g(r){const s=r.map(t=>`<li class="gallery-item">
    <a href="${t.largeImageURL}" class="gallery-link"><img src="${t.webformatURL}" alt="${t.tags}" class="card-image"></a>
    
      <ul class="stats">
        <li class="stat">
          <span class="stat-label">Likes</span>
          <span class="stat-value">${t.likes}</span>
        </li>
        <li class="stat">
          <span class="stat-label">Views</span>
          <span class="stat-value">${t.views}</span>
        </li>
        <li class="stat">
          <span class="stat-label">Comments</span>
          <span class="stat-value">${t.comments}</span>
        </li>
        <li class="stat">
          <span class="stat-label">Downloads</span>
          <span class="stat-value">${t.downloads}</span>
        </li>
      </ul>
</li>`).join("");c.insertAdjacentHTML("beforeend",s),m.refresh()}function y(){c.textContent=""}function h(){u.classList.remove("hidden")}function i(){u.classList.add("hidden")}const b=document.querySelector("form");b.addEventListener("submit",r=>{r.preventDefault(),y(),h();const s=r.target.elements.search.value;if(!s){n.info({message:"Please enter value",position:"topRight",color:"yellow"}),i();return}f(s).then(t=>{t.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}):g(t)}).catch(t=>{console.log(t)}).finally(()=>{i()}),r.target.reset()});
//# sourceMappingURL=index.js.map
