(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7286:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(8143)}])},9779:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var l=t(5893);function s(e){let{color:n,noTopPad:t=!1,children:s}=e;return(0,l.jsx)("div",{className:"bg-".concat(n," ").concat(t?"px-6 md:px-12 lg:px-18 xl:px-24":"p-6 pt-9 md:p-12 lg:p-18 xl:p-24"),children:(0,l.jsx)("div",{className:"max-w-screen-2xl m-auto",children:s})})}},4683:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var l=t(5893);t(7294);var s=t(689),r=t(243),i=t(1799),a=t(9779);let c=[{name:"\xdcber uns",href:"/ueber-uns",current:!0},{name:"Mitwirken",href:"/mitwirken",current:!1},{name:"F\xf6rdern",href:"/foerdern",current:!1},{name:"Blog",href:"/blog",current:!1},{name:"Kontakt",href:"/kontakt",current:!1}];function o(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}function d(e){let{currentHref:n}=e;return(0,l.jsx)(s.p,{as:"nav",className:"sticky top-0 z-50 bg-green-light",children:e=>{let{open:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{color:"green-light",noTopPad:!0,children:(0,l.jsxs)("div",{className:"justify-right relative flex h-25 items-center",children:[(0,l.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center md:hidden",children:(0,l.jsxs)(s.p.Button,{className:"inline-flex items-center justify-center p-2 text-black",children:[(0,l.jsx)("span",{className:"text-md min-[400px]:text-xl mr-2 font-bold",children:t?"Schlie\xdfen":"Men\xfc"}),t?(0,l.jsx)(r,{className:"block h-6 min-[400px]:h-8 w-6 min-[400px]:w-8","aria-hidden":"true"}):(0,l.jsx)(i,{className:"block h-6 min-[400px]:h-8 w-6 min-[400px]:w-8","aria-hidden":"true"})]})}),(0,l.jsxs)("div",{className:"flex flex-1 items-center justify-start md:justify-between",children:[(0,l.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,l.jsx)("a",{href:"/",children:(0,l.jsx)("img",{className:"block h-12 min-[400px]:h-15 w-auto",src:"/svgs/amstart-logo.svg",alt:"Your Company"})})}),(0,l.jsx)("div",{className:"hidden md:ml-6 md:block",children:(0,l.jsx)("div",{className:"flex space-x-4 lg:space-x-8",children:c.map(e=>(0,l.jsx)("a",{href:e.href,className:o(e.href==n?"underline underline-offset-8":"hover:underline hover:decoration-green-secondary hover:underline-offset-8","rounded py-2 text-xl font-bold lg:text-2xl"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})})]})]})}),(0,l.jsx)(s.p.Panel,{className:"md:hidden h-full",children:(0,l.jsx)("div",{className:"space-y-1 px-2 pt-2 pb-3",children:c.map(e=>(0,l.jsx)(s.p.Button,{as:"a",href:e.href,className:o(e.current?"underline underline-offset-8":"hover:underline hover:decoration-green-secondary hover:underline-offset-8","block rounded-md px-3 py-2 text-xl font-bold"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})})]})}})}},6204:function(e,n,t){"use strict";t.d(n,{Z:function(){return m},y:function(){return d}});var l=t(5893);t(9008),t(5675);var s=t(4683),r=t(1664),i=t.n(r),a=t(9779);let c={links:[{title:"Kontakt",url:"/kontakt"},{title:"Newsletter",url:"/newsletter"},{title:"Notfallhilfe",url:"/notfaelle"},{title:"Datenschutzerkl\xe4rung",url:"/datenschutz"},{title:"Impressum",url:"/impressum"},{title:"Quellen",url:"/quellen"}],socialLinks:[{iconName:"social-instagram.svg",title:"Instagram",url:"https://www.instagram.com/gemeinsam_amstart/"},{iconName:"social-linkedin.svg",title:"LinkedIn",url:"https://www.linkedin.com/company/gemeinsamamstart/"},{iconName:"social-facebook.svg",title:"Facebook",url:"https://www.facebook.com/gemeinsamamstart"},{iconName:"social-spotify.svg",title:"Spotify",url:"https://open.spotify.com/show/3ri3cgAd3EKeCtNgFnv6yl"}]};function o(){return(0,l.jsx)(a.Z,{color:"green-light",children:(0,l.jsxs)("footer",{className:"flex flex-col items-center lg:flex-row lg:justify-between",children:[(0,l.jsxs)("div",{className:"flex-0 m-auto mb-5 w-2/3 justify-center sm:w-1/2 lg:m-0 lg:pl-[50px]",children:[(0,l.jsx)(i(),{href:"/",children:(0,l.jsx)("img",{src:"/svgs/amstart-logo.svg",alt:"aMStart Logo",className:"max-w-[450px] max-h-[200px]"})}),(0,l.jsx)("div",{className:"text-[min(5vw,60px)]  font-extrabold text-white",children:"mit Dir."})]}),(0,l.jsxs)("div",{className:"lg:w-1/3",children:[(0,l.jsx)("div",{className:"flex flex-wrap justify-center lg:justify-end",children:c.links.map(e=>(0,l.jsx)("a",{href:e.url,className:"mx-[21px] mb-[21px] text-lg font-bold md:text-2xl",children:e.title},e.menuSlug))}),(0,l.jsx)("div",{className:"mt-9 flex justify-center text-xl lg:justify-end",children:c.socialLinks.map(e=>(0,l.jsx)("a",{href:e.url,className:"mx-[21px] text-lg font-bold xl:text-2xl",children:(0,l.jsx)("img",{src:"/icons/".concat(e.iconName),alt:e.title})},e.iconName))})]})]})})}let d="aMStart - jung, digital, unabh\xe4ngig";function m(e){let{currentHref:n,children:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{currentHref:n}),(0,l.jsx)("main",{children:t}),(0,l.jsx)(o,{})]})}},8143:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return o}});var l=t(5893),s=t(1664),r=t.n(s),i=t(9779),a=t(6204);let c={WISSEN:"notion-item-blue",ERFAHRUNGSBERICHT:"notion-item-green",TEAM:"notion-item-purple"};var o=!0;n.default=function(e){let{posts:n}=e;return(0,l.jsx)(a.Z,{currentHref:"/blog",children:(0,l.jsxs)(i.Z,{color:"white",children:[(0,l.jsx)("h1",{className:"mb-6 text-2xl font-extrabold md:text-3xl",children:"Unser Kompass zur MS"}),(0,l.jsx)("h2",{className:"text-lg md:text-xl text-gray-600",children:"Hier findest Du die besten Tipps und Erfahrungsberichte zum Umgang mit Multipler Sklerose aus unserer Community:"}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{className:"notion-collection",children:(0,l.jsx)("div",{className:"notion-gallery",children:(0,l.jsx)("div",{className:"notion-gallery-view",children:(0,l.jsx)("div",{className:"notion-gallery-grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-3",children:n.map(e=>(0,l.jsx)("div",{children:(0,l.jsxs)(r(),{href:"blog/[slug]",as:"blog/".concat(e.slug),className:"notion-collection-card !h-full",children:[(0,l.jsx)("div",{className:"notion-collection-card-cover",children:(0,l.jsx)("img",{className:"object-cover object-center",src:e.cover,alt:"“Bin ich behindert mit der Diagnose MS?”",loading:"lazy",decoding:"async"})}),(0,l.jsxs)("div",{className:"notion-collection-card-body",children:[(0,l.jsx)("div",{className:"notion-collection-card-property",children:(0,l.jsx)("span",{className:"notion-property notion-property-title",children:(0,l.jsx)("span",{className:"notion-page-link",children:(0,l.jsx)("span",{className:"whitespace-normal text-lg font-bold leading-tight line-clamp-2",children:e.title})})})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"notion-collection-card-property",children:(0,l.jsx)("span",{className:"notion-property notion-property-multi_select",children:e.textArt.map(e=>(0,l.jsx)("div",{className:"notion-property-multi_select-item ".concat(c[e]),children:e},e))})}),(0,l.jsx)("div",{className:"notion-collection-card-property",children:(0,l.jsx)("span",{className:"notion-property notion-property-text",children:e.length})})]})]})]})},e.slug))})})})})]})})}}},function(e){e.O(0,[617,774,888,179],function(){return e(e.s=7286)}),_N_E=e.O()}]);