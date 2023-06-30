import{a as h,i as x,o as a,b as l,e as t,f as c,F as m,r as u,j as d,t as s}from"./entry.c4810a77.js";const g={head(){return{title:"Visitors"}},data(){return{duration:"today",visitors:{}}},created(){this.getVisitors()},methods:{getVisitors(r){r?x.get(r,{params:{duration:this.duration}}).then(e=>this.visitors=e.data):x.get("http://localhost:8000/api/visitors",{params:{duration:this.duration}}).then(e=>this.visitors=e.data)},setWeek(r){this.duration=r,this.getVisitors()}}},_=t("h2",{class:"text-white text-4xl font-bold mb-10"},"Visitors",-1),y={class:"flex flex-col"},f={class:"flex text-white font-bold gap-x-2 px-4 py-2"},b={class:"overflow-x-auto"},v={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},w={class:"shadow overflow-hidden border-b border-gray-200 rounded-sm"},k={class:"min-w-full divide-y divide-gray-200"},C=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Country "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," IP "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," City "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Page ")])],-1),V={class:"bg-white divide-y divide-gray-200"},P={class:"px-6 py-4 whitespace-nowrap"},W={class:"flex items-center"},j={class:"flex-shrink-0 h-10 w-10 mr-3"},N=["src"],T={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},B={class:"ml-4"},z={class:"text-sm font-medium text-gray-900"},F={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},L={class:"px-6 py-4 whitespace-nowrap text-sm font-medium"},S=["href"],D={class:"px-4 py-3 flex items-center justify-between border-t sm:px-6"},E=t("div",{class:"flex-1 flex justify-between sm:hidden"},[t("a",{href:"#",class:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}," Previous "),t("a",{href:"#",class:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}," Next ")],-1),I={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},M={class:"text-sm text-white"},q={class:"font-medium"},A={class:"font-medium"},G={class:"font-medium"},H={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},J=t("i",{class:"bx bx-chevron-left text-xl mr-1","aria-hidden":"true"},null,-1),K=t("span",{class:"sr-only"},"Previous",-1),O=[J,K],Q=t("span",{class:"sr-only"},"Next",-1),R=t("i",{class:"bx bx-chevron-right text-xl ml-1","aria-hidden":"true"},null,-1),U=[Q,R];function X(r,e,Y,Z,o,n){return a(),l("div",null,[_,t("div",y,[t("div",f,[t("button",{type:"button",class:c(["bg-white p-2 rounded",o.duration=="today"?"bg-opacity-30":"bg-opacity-20"]),onClick:e[0]||(e[0]=i=>n.setWeek("today"))}," Today ",2),t("button",{type:"button",class:c(["bg-white p-2 rounded",o.duration=="week"?"bg-opacity-30":"bg-opacity-20"]),onClick:e[1]||(e[1]=i=>n.setWeek("week"))}," This Week ",2),t("button",{type:"button",class:c(["bg-white p-2 rounded",o.duration=="month"?"bg-opacity-30":"bg-opacity-20"]),onClick:e[2]||(e[2]=i=>n.setWeek("month"))}," This Month ",2)]),t("div",b,[t("div",v,[t("div",w,[t("table",k,[C,t("tbody",V,[(a(!0),l(m,null,u(o.visitors.data,(i,p)=>(a(),l("tr",{key:p},[t("td",P,[t("div",W,[t("div",j,[t("img",{class:"h-10 w-10 rounded-full",src:"https://cdn.ipwhois.io/flags/"+i.country_code.toLowerCase()+".svg",alt:""},null,8,N)]),d(" "+s(i.country),1)])]),t("td",T,[t("div",B,[t("div",z,s(i.ip),1)])]),t("td",F,s(i.city),1),t("td",L,[t("a",{href:"/"+i.page,class:"text-indigo-600 hover:text-indigo-900"},s(i.page),9,S)])]))),128))])])])])]),t("div",D,[E,t("div",I,[t("div",null,[t("p",M,[d(" Showing "+s(" ")+" "),t("span",q,s(o.visitors.from),1),d(" "+s(" ")+" to "+s(" ")+" "),t("span",A,s(o.visitors.to),1),d(" "+s(" ")+" of "+s(" ")+" "),t("span",G,s(o.visitors.total),1),d(" "+s(" ")+" results ")])]),t("div",null,[t("nav",H,[t("div",{class:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer",onClick:e[3]||(e[3]=i=>n.getVisitors(o.visitors.previous_page_url))},O),t("div",{class:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer",onClick:e[4]||(e[4]=i=>n.getVisitors(o.visitors.next_page_url))},U)])])])])])])}const tt=h(g,[["render",X]]);export{tt as default};