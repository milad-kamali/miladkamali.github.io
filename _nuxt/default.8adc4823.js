import{a as d,o as t,b as o,e as s,l as n,F as i,r as _,f as a,m as p,p as u,t as x,q as f}from"./entry.c4810a77.js";const b={data(){return{menuItems:[{icon:"home",link:"/",title:"Home",class:"sm:order-3 md:order-1"},{icon:"user",link:"about-me",title:"About Me",class:"sm:order-1 md:order-2"},{icon:"wrench",link:"skills",title:"Skills",class:"sm:order-2 md:order-3"},{icon:"briefcase",link:"portfolio",title:"Portfolio",class:"sm:order-4 md:order-4"},{icon:"envelope-open",link:"contact-me",title:"Contact Me",class:"sm:order-5 md:order-5"}]}}},h={class:"grid grid-cols-12 bg-primary sm:mb-20 md:mb-auto"},g={class:"sm:col-span-12 md:col-span-11 flex-col items-center bg-white bg-opacity-20 rounded-md sm:mx-4 md:ml-10 sm:my-4 md:my-10 sm:p-5 md:p-10 md:pb-auto"},k={class:"fixed sm:col-span-12 md:col-span-1 flex sm:flex-col md:flex-row sm:w-full md:w-auto md:h-full sm:right-auto md:right-2 lg:right-7 sm:bottom-0 md:bottom-auto sm:bg-primary items-center justify-center"},y={class:"sm:grid grid-cols-5 sm:w-full md:block text-3xl text-white whitespace-nowrap"},w={class:"block text-sm mt-1"};function v(l,$,N,B,r,C){const c=f,m=u;return t(),o("div",h,[s("main",g,[n(c)]),s("nav",k,[s("ul",y,[(t(!0),o(i,null,_(r.menuItems,e=>(t(),o("li",{key:e.link,class:a(["sm:mx-2 md:mx-auto my-3 px-1 py-2 rounded-2xl",l.$route.path=="/"+e.link||l.$route.path==e.link?"bg-white bg-opacity-30 "+e.class:e.class])},[n(m,{to:e.link,class:"flex flex-col text-center items-center"},{default:p(()=>[s("i",{class:a(["bx","bx-"+e.icon])},null,2),s("span",w,x(e.title),1)]),_:2},1032,["to"])],2))),128))])])])}const F=d(b,[["render",v],["__scopeId","data-v-3819e1e4"]]);export{F as default};