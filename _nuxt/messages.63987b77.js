import{a as h,i as l,o as a,b as i,e,F as m,r as u,t as o}from"./entry.1c5d1382.js";const _={head(){return{title:"Messages"}},data(){return{messages:[]}},created(){this.getMessages()},methods:{getMessages(){l.get("api/messages").then(t=>this.messages=t.data)},confirmDelete(t,r){confirm("Are you sure?")&&(l.delete("api/message",{params:{id:t}}),this.messages.splice(r,1))}}},g=e("h2",{class:"text-white text-4xl font-bold mb-10"},"Messages",-1),p={class:"flex flex-col"},f={class:"text-lg font-semibold -mt-2"},x=["href"],b=["onClick"];function v(t,r,k,y,n,c){return a(),i("div",null,[g,e("div",p,[(a(!0),i(m,null,u(n.messages,(s,d)=>(a(),i("div",{key:s.id,class:"relative bg-white bg-opacity-90 rounded p-3"},[e("div",f,o(s.name),1),e("div",null,[e("a",{href:s.email},o(s.email),9,x)]),e("p",null,o(s.message),1),e("i",{class:"bx bx-trash absolute right-1 top-1 text-lg cursor-pointer",onClick:M=>c.confirmDelete(s.id,d)},null,8,b)]))),128))])])}const D=h(_,[["render",v]]);export{D as default};
