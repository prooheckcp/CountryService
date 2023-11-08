"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,y=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return t?n.createElement(y,l(l({ref:r},u),{},{components:t})):n.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62730:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:1,sidebar_label:"\ud83d\udda5\ufe0f Server Example"},l="\ud83d\udda5\ufe0f Server Example",c={unversionedId:"example/Server",id:"example/Server",title:"\ud83d\udda5\ufe0f Server Example",description:"Result:",source:"@site/docs/example/Server.md",sourceDirName:"example",slug:"/example/Server",permalink:"/CountryService/docs/example/Server",draft:!1,editUrl:"https://github.com/prooheckcp/CountryService/edit/master/docs/example/Server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\ud83d\udda5\ufe0f Server Example"},sidebar:"defaultSidebar",previous:{title:"\ud83d\ude80Getting Started",permalink:"/CountryService/docs/gettingStarted"},next:{title:"\ud83d\udcf1 Client Example",permalink:"/CountryService/docs/example/Client"}},i={},p=[{value:"\ud83d\udca1 Example",id:"-example",level:2}],u={toc:p},s="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-server-example"},"\ud83d\udda5\ufe0f Server Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'--Set country tags\nPlayers.PlayerAdded:Connect(function(player: Player)\n\n    -- TESTING\n    print(CountryService:GetCountryByCode("PT"))\n    print(CountryService:GetPlayerCountry(player))\n    print(CountryService:GetPlayerCountryCode(player))\n\n    player.CharacterAdded:Connect(function(character: Model)\n        local playerCountry: CountryService.Country = CountryService:GetPlayerCountry(player)\n        local label: string = `{playerCountry.emoji} {player.Name} | {playerCountry.name}`\n        \n        local newGui: BillboardGui = Instance.new("BillboardGui")\n\n\n        local countryInfo: TextLabel = newGui:WaitForChild("CountryInfo") :: TextLabel\n        countryInfo.Text = label\n        newGui.Parent = character.PrimaryPart\n    end)\nend)\n')),(0,a.kt)("p",null,"Result:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/670023265455964198/1171800680210641006/image.png?ex=655dff6d&is=654b8a6d&hm=9e985cd77ed85489b1bb572d9afecba1764b3e3059eb0691d4092d9a89a35536&",alt:null})),(0,a.kt)("h2",{id:"-example"},"\ud83d\udca1 Example"),(0,a.kt)("p",null,"You can see an example place here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.roblox.com/games/13186743835/CountryService-Example-Place"},"https://www.roblox.com/games/13186743835/CountryService-Example-Place")))}m.isMDXComponent=!0}}]);