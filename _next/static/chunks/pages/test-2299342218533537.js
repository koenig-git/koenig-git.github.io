(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{6574:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return t(1344)}])},1344:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var o=t(5893);function l(){return(0,o.jsxs)("div",{className:"bg-white py-9 s:px-6 lg:px-[52px]",children:[(0,o.jsx)("head",{children:(0,o.jsx)("style",{children:"\n          #target {\n            width: 400px;\n            height: 300px;\n            overflow-y: auto;\n            overflow-x: auto;\n            resize: both;\n            position: relative;\n            z-index: 2;\n          }\n          iframe {\n            width: 100%;\n            height: 100%;\n            border: none;\n          }"})}),(0,o.jsx)("div",{id:"target",children:(0,o.jsx)("iframe",{src:"https://calendly.com/amstart/neudiagnose"})})]})}t(7294),t(761)},761:function(n,e,t){"use strict";t.d(e,{KS:function(){return g}});var o,l,a=t(7294),i=t(3935),r=function(n,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)};function s(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var c=function(){return(c=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var l in e=arguments[t])Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n}).apply(this,arguments)};function d(n){return"#"===n.charAt(0)?n.slice(1):n}!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===t&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}}("/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}"),(o=l||(l={})).PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",o.EVENT_TYPE_VIEWED="calendly.event_type_viewed",o.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",o.EVENT_SCHEDULED="calendly.event_scheduled";var p=function(n){var e,t=n.url,o=n.prefill,l=void 0===o?{}:o,a=n.pageSettings,i=n.utm,r=void 0===i?{}:i,s=n.embedType,c=((null==(e=void 0===a?{}:a)?void 0:e.primaryColor)&&(e.primaryColor=d(e.primaryColor)),(null==e?void 0:e.textColor)&&(e.textColor=d(e.textColor)),(null==e?void 0:e.backgroundColor)&&(e.backgroundColor=d(e.backgroundColor)),e),p=c.backgroundColor,m=c.hideEventTypeDetails,y=c.hideLandingPageDetails,f=c.primaryColor,g=c.textColor,b=c.hideGdprBanner,C=l.customAnswers,v=l.date,x=l.email,w=l.firstName,_=l.guests,E=l.lastName,k=l.location,N=l.name,L=r.utmCampaign,O=r.utmContent,S=r.utmMedium,I=r.utmSource,T=r.utmTerm,P=r.salesforce_uuid,R=t.indexOf("?"),U=R>-1,j=t.slice(R+1);return(U?t.slice(0,R):t)+"?"+[U?j:null,p?"background_color="+p:null,m?"hide_event_type_details=1":null,y?"hide_landing_page_details=1":null,f?"primary_color="+f:null,g?"text_color="+g:null,b?"hide_gdpr_banner=1":null,N?"name="+encodeURIComponent(N):null,k?"location="+encodeURIComponent(k):null,w?"first_name="+encodeURIComponent(w):null,E?"last_name="+encodeURIComponent(E):null,_?"guests="+_.map(encodeURIComponent).join(","):null,x?"email="+encodeURIComponent(x):null,v&&v instanceof Date?"date="+u(v):null,L?"utm_campaign="+encodeURIComponent(L):null,O?"utm_content="+encodeURIComponent(O):null,S?"utm_medium="+encodeURIComponent(S):null,I?"utm_source="+encodeURIComponent(I):null,T?"utm_term="+encodeURIComponent(T):null,P?"salesforce_uuid="+encodeURIComponent(P):null,s?"embed_type="+s:null,"embed_domain=1"].concat(C?h(C):[]).filter(function(n){return null!==n}).join("&")},u=function(n){var e=n.getMonth()+1,t=n.getDate();return[n.getFullYear(),e<10?"0"+e:e,t<10?"0"+t:t].join("-")},m=/^a\d{1,2}$/,h=function(n){var e=Object.keys(n).filter(function(n){return n.match(m)});return e.length?e.map(function(e){return e+"="+encodeURIComponent(n[e])}):[]},y=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return s(e,n),e.prototype.render=function(){return(0,a.createElement)("div",{className:"calendly-spinner"},(0,a.createElement)("div",{className:"calendly-bounce1"}),(0,a.createElement)("div",{className:"calendly-bounce2"}),(0,a.createElement)("div",{className:"calendly-bounce3"}))},e}(a.Component),f={minWidth:"320px",height:"630px"},g=function(n){function e(e){var t=n.call(this,e)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return s(e,n),e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=p({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"});return(0,a.createElement)("div",{className:"calendly-inline-widget",style:this.props.styles||f},this.state.isLoading&&(0,a.createElement)(y,null),(0,a.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(a.Component),b=function(n){function e(e){var t=n.call(this,e)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return s(e,n),e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=p({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"});return(0,a.createElement)(a.Fragment,null,this.state.isLoading&&(0,a.createElement)(y,null),(0,a.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(a.Component),C=function(n){if(!n.open)return null;if(!n.rootElement)throw Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return(0,i.createPortal)((0,a.createElement)("div",{className:"calendly-overlay"},(0,a.createElement)("div",{onClick:n.onModalClose,className:"calendly-close-overlay"}),(0,a.createElement)("div",{className:"calendly-popup"},(0,a.createElement)("div",{className:"calendly-popup-content"},(0,a.createElement)(b,c({},n)))),(0,a.createElement)("button",{className:"calendly-popup-close",onClick:n.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),n.rootElement)};!function(n){function e(e){var t=n.call(this,e)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}s(e,n),e.prototype.onClick=function(n){n.preventDefault(),this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),(0,a.createElement)(C,c({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}}(a.Component),function(n){function e(e){var t=n.call(this,e)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}s(e,n),e.prototype.onClick=function(){this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return(0,a.createElement)("div",{className:"calendly-badge-widget",onClick:this.onClick},(0,a.createElement)("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&(0,a.createElement)("span",null,"powered by Calendly")),(0,a.createElement)(C,c({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}}(a.Component)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=6574)}),_N_E=n.O()}]);