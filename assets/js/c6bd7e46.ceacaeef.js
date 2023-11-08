"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},36957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>O,default:()=>V,frontMatter:()=>T,metadata:()=>I,toc:()=>P});var n=r(87462),a=r(67294),o=r(3905),l=r(86010),u=r(12466),i=r(16550),s=r(91980),c=r(67392),d=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function b(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=b(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,s]=f({queryString:r,groupId:n}),[c,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),y=(()=>{const e=i??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),p(e)}),[s,p,o]),tabValues:o}}var g=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:o,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==o&&(d(t),i(n))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:u}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:p},u,{className:(0,l.Z)("tabs__item",v.tabItem,u?.className,{"tabs__item--active":o===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=y(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function S(e){const t=(0,g.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}const C={tabItem:"tabItem_Ymn6"};function E(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(C.tabItem,n),hidden:r},t)}const T={sidebar_position:2,sidebar_label:"\ud83d\ude80Getting Started"},O="\ud83d\ude80Getting Started",I={unversionedId:"gettingStarted",id:"gettingStarted",title:"\ud83d\ude80Getting Started",description:"\ud83d\udce6 Installing",source:"@site/docs/gettingStarted.md",sourceDirName:".",slug:"/gettingStarted",permalink:"/CountryService/docs/gettingStarted",draft:!1,editUrl:"https://github.com/prooheckcp/CountryService/edit/master/docs/gettingStarted.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\ud83d\ude80Getting Started"},sidebar:"defaultSidebar",previous:{title:"\ud83e\udd14About",permalink:"/CountryService/docs/intro"},next:{title:"\ud83d\udda5\ufe0f Server Example",permalink:"/CountryService/docs/example/Server"}},x={},P=[{value:"\ud83d\udce6 Installing",id:"-installing",level:2}],j={toc:P},N="wrapper";function V(e){let{components:t,...r}=e;return(0,o.kt)(N,(0,n.Z)({},j,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"\ud83d\ude80Getting Started"),(0,o.kt)("h2",{id:"-installing"},"\ud83d\udce6 Installing"),(0,o.kt)("p",null,"CountryService can be installed in different ways, depending on your project's needs. Choose the method that suits you best:"),(0,o.kt)(S,{className:"unique-tabs",mdxType:"Tabs"},(0,o.kt)(E,{value:"wally",label:"\ud83d\udc36 Wally",default:!0,mdxType:"TabItem"},(0,o.kt)("a",{href:"https://wally.run/package/prooheckcp/countryservice"},"Watch wally's page"),(0,o.kt)("pre",null,(0,o.kt)("code",{className:"language-bash"},'countryservice = "prooheckcp/countryservice@>0.0.0, <10.0.0"'))),(0,o.kt)(E,{value:"studio",label:"\ud83d\udd28Studio",mdxType:"TabItem"},(0,o.kt)("a",{href:"https://www.roblox.com/library/13194747001"},"Get the Roblox Model")),(0,o.kt)(E,{value:"github",label:"\ud83d\udc19GitHub",mdxType:"TabItem"},(0,o.kt)("a",{href:"https://github.com/prooheckcp/CountryService/releases"},"Download from Github Releases"))),(0,o.kt)("h1",{id:"-basic-usage"},"\ud83d\ude80 Basic Usage"),(0,o.kt)("p",null,"Once you have CountryService installed, you can start using it in your project. Here's a basic example of how to use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local CountryService = require(ReplicatedStorage.CountryService)\n\nPlayers.PlayerAdded:Connect(function(player: Player)\n    print(CountryService:GetCountryByCode("PT")) -- Portugal\n    print(CountryService:GetPlayerCountry(player)) -- Portugal\n    print(CountryService:GetPlayerCountryCode(player)) -- PT\nend)\n')))}V.isMDXComponent=!0}}]);