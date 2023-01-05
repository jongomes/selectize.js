"use strict";(self.webpackChunkselectize_dev=self.webpackChunkselectize_dev||[]).push([[4369],{3636:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010),l=a(5742);function s(){return(0,n.useEffect)((()=>{const e=$(".theme-changer button");e.off("click").on("click",(function(){if($(this).hasClass("active"))return;const t=$(this).data("theme");e.removeClass("active"),$(this).addClass("active"),$("link[data-theme]").remove();0===$("link[data-theme="+t+"]").length&&$("head").append(`<link data-theme="${t}" href="/css/selectize.${t}.css" rel="stylesheet">`)}))})),n.createElement(n.Fragment,null,n.createElement(l.Z,null,n.createElement("link",{rel:"stylesheet",href:"/css/selectize.css"}),n.createElement("link",{rel:"stylesheet","data-theme":"default",href:"/css/selectize.default.css"})),n.createElement("span",{className:(0,r.Z)("theme-changer","isolate inline-flex rounded-md shadow-sm mb-6")},[{src:"default",label:"Selectize",icon:"fak fa-selectize"},{src:"bootstrap2",label:"Bootstrap 2",icon:"fa-duotone fa-square-b"},{src:"bootstrap3",label:"Bootstrap 3",icon:"fa-duotone fa-square-b"},{src:"bootstrap4",label:"Bootstrap 4",icon:"fa-duotone fa-square-b"},{src:"bootstrap5",label:"Bootstrap 5",icon:"fa-duotone fa-square-b"}].map(((e,t)=>{const a=0===t?"active":"";return n.createElement("button",{className:(0,r.Z)(a,"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"),key:t,type:"button","data-theme":e.src},n.createElement("span",{className:(0,r.Z)(e.icon,"pr-2")}),e.label)}))))}},8573:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),l=a(6010),s=a(2389),o=a(1170),i=a(5864);function c(e){let{children:t,...a}=e;const c=(0,s.Z)(),d=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),m="string"==typeof d?i.Z:o.Z;return r.createElement("div",{className:(0,l.Z)("mt-6","shadow-xl","shadow-glow","border","rounded-lg","border-gray-200")},r.createElement(m,(0,n.Z)({key:String(c)},a),d))}},7914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var n=a(7462),r=a(7294),l=a(3905),s=a(8573),o=a(3636);function i(){return(0,r.useEffect)((()=>{$("#select-beast").selectize({create:!0,sortField:{field:"text",direction:"asc"}})})),r.createElement(r.Fragment,null,r.createElement(o.Z,null),r.createElement("h4",null,"Required element"),r.createElement("div",{className:"control-group"},r.createElement("form",null,r.createElement("label",{htmlFor:"select-beast"},"Beast:"),r.createElement("select",{id:"select-beast",required:!0,className:"demo-default",placeholder:"Select a person...",name:"beast"},r.createElement("option",{value:""},"Select a person..."),r.createElement("option",{value:"4"},"Thomas Edison"),r.createElement("option",{value:"1"},"Nikola"),r.createElement("option",{value:"3"},"Nikola Tesla"),r.createElement("option",{value:"5"},"Arnold Schwarzenegger")),r.createElement("button",{style:{marginTop:"2em"},type:"submit"},"Submit"))),r.createElement(s.Z,{className:"language-html",title:"Html"},'<div class="control-group">\n<form>\n  <label for="select-beast">Beast:</label>\n  <select id="select-beast" required class="demo-default"\n    placeholder="Select a person..." name="beast">\n    <option value="">Select a person...</option>\n    <option value="4">Thomas Edison</option>\n    <option value="1">Nikola</option>\n    <option value="3">Nikola Tesla</option>\n    <option value="5">Arnold Schwarzenegger</option>\n  </select>\n    <button type="submit">Submit</button>\n</form>\n</div>'),r.createElement(s.Z,{className:"language-javascript",title:"Javascript"},"$('#select-beast').selectize({\n  create: true,\n  sortField: {\n    field: 'text',\n    direction: 'asc'\n  }\n});\n        "))}const c={id:"required",title:"Required Elements",description:"Examples of using a required element with selectize"},d=void 0,m={unversionedId:"demos/required",id:"demos/required",title:"Required Elements",description:"Examples of using a required element with selectize",source:"@site/docs/demos/required.mdx",sourceDirName:"demos",slug:"/demos/required",permalink:"/docs/demos/required",draft:!1,tags:[],version:"current",frontMatter:{id:"required",title:"Required Elements",description:"Examples of using a required element with selectize"},sidebar:"demoSidebar",previous:{title:"Performance and Scalability",permalink:"/docs/demos/performance"},next:{title:"Right-to-left Support",permalink:"/docs/demos/rtl"}},u={},p=[],f={toc:p};function b(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i,{mdxType:"Required"}))}b.isMDXComponent=!0}}]);