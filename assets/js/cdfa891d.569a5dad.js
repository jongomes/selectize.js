"use strict";(self.webpackChunkselectize_dev=self.webpackChunkselectize_dev||[]).push([[2388],{3636:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010),r=a(5742);function l(){return(0,n.useEffect)((()=>{const e=$(".theme-changer button");e.off("click").on("click",(function(){if($(this).hasClass("active"))return;const t=$(this).data("theme");e.removeClass("active"),$(this).addClass("active"),$("link[data-theme]").remove();0===$("link[data-theme="+t+"]").length&&$("head").append(`<link data-theme="${t}" href="/css/selectize.${t}.css" rel="stylesheet">`)}))})),n.createElement(n.Fragment,null,n.createElement(r.Z,null,n.createElement("link",{rel:"stylesheet",href:"/css/selectize.css"}),n.createElement("link",{rel:"stylesheet","data-theme":"default",href:"/css/selectize.default.css"})),n.createElement("span",{className:(0,o.Z)("theme-changer","isolate inline-flex rounded-md shadow-sm mb-6")},[{src:"default",label:"Selectize",icon:"fak fa-selectize"},{src:"bootstrap2",label:"Bootstrap 2",icon:"fa-duotone fa-square-b"},{src:"bootstrap3",label:"Bootstrap 3",icon:"fa-duotone fa-square-b"},{src:"bootstrap4",label:"Bootstrap 4",icon:"fa-duotone fa-square-b"},{src:"bootstrap5",label:"Bootstrap 5",icon:"fa-duotone fa-square-b"}].map(((e,t)=>{const a=0===t?"active":"";return n.createElement("button",{className:(0,o.Z)(a,"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"),key:t,type:"button","data-theme":e.src},n.createElement("span",{className:(0,o.Z)(e.icon,"pr-2")}),e.label)}))))}},8573:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),o=a(7294),r=a(6010),l=a(2389),i=a(1170),s=a(5864);function c(e){let{children:t,...a}=e;const c=(0,l.Z)(),m=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),d="string"==typeof m?s.Z:i.Z;return o.createElement("div",{className:(0,r.Z)("mt-6","shadow-xl","shadow-glow","border","rounded-lg","border-gray-200")},o.createElement(d,(0,n.Z)({key:String(c)},a),m))}},9187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=a(7462),o=a(7294),r=a(3905),l=a(8573),i=a(3636);function s(){return(0,o.useEffect)((()=>{$("#normalize").selectize({normalize:!0})})),o.createElement("div",null,o.createElement("div",{style:{marginBottom:"1rem"}},o.createElement(i.Z,null),o.createElement("h4",null,"Normalize string sent for search with any accent:"),o.createElement("pre",null,'"\xe0", "\xe8", "\xec", "\xf2", "\xf9", "\xc0", "\xc8", "\xcc", "\xd2", "\xd9", "\xe1", "\xe9", "\xed", "\xf3",',o.createElement("br",null),'"\xfa", "\xfd", "\xc1", "\xc9", "\xcd", "\xd3", "\xda", "\xdd", "\xe2", "\xea", "\xee", "\xf4", "\xfb", "\xc2",',o.createElement("br",null),'"\xca", "\xce", "\xd4", "\xdb", "\xe3", "\xf1", "\xf5", "\xd5", "\xc3", "\xd1", "\xe4", "\xeb", "\xef", "\xf6",',o.createElement("br",null),'"\xfc", "\xff", "\xc4", "\xcb", "\xcf", "\xd6", "\xdc", "\u0178", "\xe7", "\xc7", "\xe5", "\xc5"'),o.createElement("select",{id:"normalize"},o.createElement("option",{value:""}),o.createElement("option",{value:"1"},"Awsome"),o.createElement("option",{value:"2"},"Beast"),o.createElement("option",{value:"3"},"Compatible"),o.createElement("option",{value:"4"},"Thomas Edison"),o.createElement("option",{value:"5"},"Nikola"),o.createElement("option",{value:"6"},"Selectize"),o.createElement("option",{value:"7"},"Javascript"))),o.createElement(l.Z,{className:"language-html",title:"Html"},'<select id="normalize">\n  <option value=""></option>\n  <option value="1">Awesome</option>\n  <option value="2">Beast</option>\n  <option value="3">Compatible</option>\n  <option value="4">Thomas Edison</option>\n  <option value="5">Nikola</option>\n  <option value="6">Selectize</option>\n  <option value="7">Javascript</option>\n</select>\n        '),o.createElement(l.Z,{className:"language-javascript",title:"javascript"},"$('#normalize').selectize({ normalize: true });"))}const c={id:"normalize",title:"Normalize Options",description:"Normalize string sended for search with any accent"},m=void 0,d={unversionedId:"demos/normalize",id:"demos/normalize",title:"Normalize Options",description:"Normalize string sended for search with any accent",source:"@site/docs/demos/normalize.mdx",sourceDirName:"demos",slug:"/demos/normalize",permalink:"/docs/demos/normalize",draft:!1,tags:[],version:"current",frontMatter:{id:"normalize",title:"Normalize Options",description:"Normalize string sended for search with any accent"},sidebar:"demoSidebar",previous:{title:"Maximum number of items",permalink:"/docs/demos/max-items"},next:{title:"Option Groups",permalink:"/docs/demos/opt-groups"}},u={},p=[],f={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"Normalize"}))}h.isMDXComponent=!0}}]);