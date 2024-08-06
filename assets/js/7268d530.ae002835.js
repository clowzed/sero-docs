(self.webpackChunksero_docs_v_3=self.webpackChunksero_docs_v_3||[]).push([[634],{7379:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Collapsible:()=>g.z,ErrorBoundaryError:()=>R.aG,ErrorBoundaryTryAgainButton:()=>R.Cw,ErrorCauseBoundary:()=>R.QW,HtmlClassNameProvider:()=>k.FG,NavbarSecondaryMenuFiller:()=>w.Zo,PageMetadata:()=>k.d,ReactContextError:()=>v.i6,SkipToContentFallbackId:()=>j.u,SkipToContentLink:()=>j.l,ThemeClassNames:()=>h.k,composeProviders:()=>v.Qc,createStorageSlot:()=>r.WA,duplicates:()=>L.l,filterDocCardListItems:()=>l.MN,isMultiColumnFooterLinks:()=>S.a,isRegexpStringMatch:()=>P.F,listStorageKeys:()=>r._f,listTagsByLetters:()=>E,prefersReducedMotion:()=>b.n,processAdmonitionProps:()=>B,translateTagsPageTitle:()=>x,uniq:()=>L.j,useCollapsible:()=>g.u,useColorMode:()=>y.I,useContextualSearchFilters:()=>a._q,useCurrentSidebarCategory:()=>l.jA,useDocsPreferredVersion:()=>I.J,useEvent:()=>v.zX,useIsomorphicLayoutEffect:()=>v.LI,usePluralForm:()=>f,usePrevious:()=>v.D9,usePrismTheme:()=>O.p,useSearchLinkCreator:()=>M,useSearchQueryString:()=>A,useStorageSlot:()=>r.Nk,useThemeConfig:()=>n.L,useWindowSize:()=>_.i});var n=o(86668),r=o(50012),a=o(43320),l=o(53438),i=o(67294),s=o(52263),u=o(25108);const c=["zero","one","two","few","many","other"];function d(e){return c.filter((t=>e.includes(t)))}const p={locale:"en",pluralForms:d(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,s.default)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:d(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return u.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),p}}),[e])}function f(){const e=m();return{selectMessage:(t,o)=>function(e,t,o){const n=e.split("|");if(1===n.length)return n[0];n.length>o.pluralForms.length&&u.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=o.select(t),a=o.pluralForms.indexOf(r);return n[Math.min(a,n.length-1)]}(o,t,e)}}var g=o(86043),h=o(35281),b=o(91442),v=o(902),k=o(10833),y=o(92949),w=o(13102),_=o(87524),T=o(95999);const x=()=>(0,T.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function E(e){const t={};return Object.values(e).forEach((e=>{const o=function(e){return e[0].toUpperCase()}(e.label);t[o]??=[],t[o].push(e)})),Object.entries(t).sort(((e,t)=>{let[o]=e,[n]=t;return o.localeCompare(n)})).map((e=>{let[t,o]=e;return{letter:t,tags:o.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}var C=o(91980);function A(){return(0,C.Nc)("q")}function M(){const{siteConfig:{baseUrl:e,themeConfig:t}}=(0,s.default)(),{algolia:{searchPagePath:o}}=t;return(0,i.useCallback)((t=>`${e}${o}?q=${encodeURIComponent(t)}`),[e,o])}var S=o(42489),P=o(98022),L=o(67392),O=o(66412),I=o(60373);function B(e){const{mdxAdmonitionTitle:t,rest:o}=function(e){const t=i.Children.toArray(e),o=t.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),n=i.createElement(i.Fragment,null,t.filter((e=>e!==o)));return{mdxAdmonitionTitle:o?.props.children,rest:n}}(e.children),n=e.title??t;return{...e,...n&&{title:n},children:o}}var j=o(55225),R=o(69690)},3158:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(67294)),a=n(o(93162));t.default=function(e){let{url:t,proxy:o}=e;return r.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.default.createElement("ul",{className:"export-dropdown dropdown__menu"},r.default.createElement("li",null,r.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},39620:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(67294)),a=o(7379),l=n(o(44996)),i=n(o(50941));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:o,darkLogo:n}=e,s=()=>"dark"===t?n?.altText??o?.altText:o?.altText,u=(0,l.default)(o?.url),c=(0,l.default)(n?.url);return o&&n?r.default.createElement(i.default,{alt:s(),sources:{light:u,dark:c},className:"openapi__logo"}):o||n?r.default.createElement(i.default,{alt:s(),sources:{light:u??c,dark:u??c},className:"openapi__logo"}):void 0}},94128:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=o(87462),r=(o(67294),o(3905)),a=(o(39620),o(9472)),l=o(85162),i=o(3158),s=o.n(i);const u={id:"sero",title:"sero",description:"Muiltidomain static site hosting",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},c=void 0,d={unversionedId:"OpenAPI/sero",id:"OpenAPI/sero",title:"sero",description:"Muiltidomain static site hosting",source:"@site/docs/OpenAPI/sero.info.mdx",sourceDirName:"OpenAPI",slug:"/OpenAPI/sero",permalink:"/sero-docs/docs/OpenAPI/sero",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"sero",title:"sero",description:"Muiltidomain static site hosting",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"OpenAPI",permalink:"/sero-docs/docs/category/sero"}},p={},m=[],f={toc:m};function g(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 0.2.7"),(0,r.kt)(s(),{url:"https://raw.githubusercontent.com/clowzed/sero/master/openapi.json",proxy:void 0,mdxType:"Export"}),(0,r.kt)("h1",{className:"openapi__heading"},"sero"),(0,r.kt)("p",null,"Muiltidomain static site hosting"),(0,r.kt)("div",{style:{marginBottom:"2rem"}},(0,r.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,r.kt)(a.default,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,r.kt)(l.default,{label:"HTTP: Bearer Auth",value:"Bearer-JWT",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Security Scheme Type:"),(0,r.kt)("td",null,"http")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"HTTP Authorization Scheme:"),(0,r.kt)("td",null,"bearer")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Bearer format:"),(0,r.kt)("td",null,"JWT")))))))),(0,r.kt)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,r.kt)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,r.kt)("span",null,"clowzed: ",(0,r.kt)("a",{href:"mailto:clowzed.work@gmail.com"},"clowzed.work@gmail.com"))),(0,r.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,r.kt)("h3",{style:{marginBottom:"0.25rem"}},"License")))}g.isMDXComponent=!0},93162:function(e,t,o){var n,r,a,l=o(25108);r=[],void 0===(a="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(l.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){u(n.response,t,o)},n.onerror=function(){l.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,s=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,o){var l=i.URL||i.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):r(s.href)?n(e,t,o):a(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,l){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,l),o);else if(r(e))n(e,o,l);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){a(i)}))}}:function(e,t,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var a="application/octet-stream"===e.type,l=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&l||s)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,p=d.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});i.saveAs=u.saveAs=u,e.exports=u})?n.apply(t,r):n)||(e.exports=a)}}]);