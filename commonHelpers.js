import{A as L,i as a,a as y,S as w}from"./assets/vendor-bb2cb194.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers");function o(s){const t=s.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function i(){o(e)?e.classList.add("animate"):e.classList.remove("animate")}window.addEventListener("scroll",i),window.addEventListener("resize",i),i()});const p=document.querySelector("#backdrop"),v=document.querySelector(".modal-title"),b=document.querySelector(".modal-text");function S(e,o){v.textContent=e.trim(),b.textContent=o.trim(),p.classList.add("modal-visible")}function m(){v.textContent="",b.textContent="",p.classList.remove("modal-visible")}const h=document.querySelector("#modal-close-btn"),E=document.querySelector("#backdrop");E.addEventListener("click",e=>{if(e.currentTarget===e.target)m();else return});h.addEventListener("click",()=>{m()});window.addEventListener("keydown",e=>{if(e.key==="Escape")m();else return});const d=new Swiper(".swiper2",{direction:"horizontal",watchSlidesProgress:!0,keyboard:{enabled:!0},mousewheel:!0,effect:"flip",flipEffect:{slideShadows:!0,limitRotation:!0},navigation:{nextEl:".project-button-next",prevEl:".project-button-prev"}});function g(){const e=document.querySelector(".project-button-next"),o=document.querySelector(".project-button-prev");d.isEnd?(e.classList.add("project-button-disabled"),e.setAttribute("disabled",!0)):(e.classList.remove("project-button-disabled"),e.removeAttribute("disabled")),d.isBeginning?(o.classList.add("project-button-disabled"),o.setAttribute("disabled",!0)):(o.classList.remove("project-button-disabled"),o.removeAttribute("disabled"))}d.on("slideChange",g);g();document.querySelectorAll(".swiper2 .swiper-slide img").forEach(e=>{e.addEventListener("click",()=>{d.slideNext()})});const q=document.querySelectorAll(".accordion");q.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mobile-menu"),o=document.querySelector(".mobile-nav-toggle"),i=document.querySelector(".mobile-menu-close-btn"),s=document.querySelector(".nav-menu"),t=document.querySelector(".menu-list");document.querySelector(".mobile-menu-elem");const r=document.querySelector(".mobile-nav-menu");o.addEventListener("click",n=>{e.classList.toggle("open")}),s.addEventListener("click",n=>{n.preventDefault(),t.classList.toggle("hidden")}),t.addEventListener("click",n=>{n.target===n.currentTarget&&t.classList.add("hidden")}),t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{t.classList.add("hidden")})}),e.addEventListener("click",n=>{if(n.target===n.currentTarget){n.preventDefault(),e.classList.remove("open");return}}),r.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{e.classList.remove("open")})}),i.addEventListener("click",n=>{e.classList.remove("open")})});const k=L.create({baseURL:"https://portfolio-js.b.goit.study/api",timeout:1e3}),I="/requests";function A(e,o){return k.post(I,{email:e.trim(),comment:o.trim()})}function O(e,o,i){const s={transitionOut:"fadeOutDown",position:"topRight",message:i,title:o,theme:"dark"};switch(e){case"error":a.error(s);break;case"success":a.success(s);break;case"info":a.info(s);break;default:a.show(s)}}const u=document.querySelector(".footer-form"),c=u.comment,l=u.email;async function P(){try{l.value=localStorage.getItem("email")||l.value,c.value=localStorage.getItem("comment")||c.value;const e=l.value,o=c.value,i=(await A(e,o)).data;S(i.title,i.message),localStorage.setItem("email",""),localStorage.setItem("comment",""),u.reset()}catch{O("error","Server Error","Please, try again.")}}u.addEventListener("submit",e=>{e.preventDefault(),localStorage.setItem("email",l.value.trim()),localStorage.setItem("comment",c.value.trim()),P()});window.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("email")&&(l.value=localStorage.getItem("email")),localStorage.getItem("comment")&&(c.value=localStorage.getItem("comment"))});const f=document.querySelector(".benefits-order-link");f.addEventListener("click",function(e){e.preventDefault();const o=f.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})});document.querySelectorAll(".swiper-slide img").forEach(e=>{e.onload=()=>{e.classList.add("loaded")}});new y(".accordion-container",{openOnInit:[0]});new w(".swiper1",{slidesPerView:6,spaceBetween:0,loop:!0,mousewheel:!0,keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:2},769:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".js-about-slider-arrow"}});
//# sourceMappingURL=commonHelpers.js.map
