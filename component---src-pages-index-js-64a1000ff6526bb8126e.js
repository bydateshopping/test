(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),o=a("7oih"),r=a("obyI"),c=a.n(r),i=a("dwco"),s=a.n(i);var m=function(e){return e.children},d=function(e){var t,a;function l(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=l.prototype;return o.componentDidMount=function(){s.a.polyfill()},o.handleClick=function(e){e.preventDefault();var t=this.props.onClick,a=void 0===t?function(){}:t,l=0,n=!0,o=this.props,r=o.type,c=o.element,i=o.offset,s=o.timeout;if(r&&c)switch(r){case"class":n=!!(l=document.getElementsByClassName(c)[0]);break;case"id":n=!!(l=document.getElementById(c))}n?this.scrollTo(l,i,s):console.log("Element not found: "+c),a(e)},o.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var l=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:l+t,left:0,behavior:"smooth"})}),a):window.scroll({top:l+t,left:0,behavior:"smooth"})},o.render=function(){return n.a.createElement(m,null,"object"==typeof this.props.children?n.a.cloneElement(this.props.children,{onClick:this.handleClick}):n.a.createElement("span",{onClick:this.handleClick},this.props.children))},l}(n.a.Component);var p=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){a.setState({openMenu:e})},a.handleScroll=function(){var e=a.state.visibilityClass;window.pageYOffset>300?"navbar-shrink"!==e&&a.setState({visibilityClass:"navbar-shrink"}):"navbar-shrink"===e&&a.setState({visibilityClass:""})},a.state={openMenu:!1,visibilityClass:""},a}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=l.prototype;return o.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},o.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},o.render=function(){var e=this,t=this.state,a=t.openMenu,l=t.visibilityClass;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top "+l,id:"mainNav"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand",href:"#page-top"},c.a.siteTitle),n.a.createElement("button",{onClick:function(t){return e.toggleMenu(!a)},className:"navbar-toggler navbar-toggler-right "+(a?"":"collapsed"),type:"button","aria-controls":"navbarResponsive","aria-expanded":a,"aria-label":"Toggle navigation"},"Menu",n.a.createElement("i",{className:"fas fa-bars"})),n.a.createElement("div",{className:"collapse navbar-collapse "+(a?"show":""),id:"navbarResponsive"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(d,{onClick:function(t){return e.toggleMenu(!a)},type:"id",element:"download"},n.a.createElement("a",{className:"nav-link",href:"#download"},"Download"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d,{onClick:function(t){return e.toggleMenu(!a)},type:"id",element:"features"},n.a.createElement("a",{className:"nav-link",href:"#features"},"Features"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d,{onClick:function(t){return e.toggleMenu(!a)},type:"id",element:"contact"},n.a.createElement("a",{className:"nav-link",href:"#contact"},"Contact")))))))},l}(l.Component),u=a("JwsL");function f(){return n.a.createElement("ul",{className:"list-inline list-social"},c.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return n.a.createElement("li",{key:a,className:"list-inline-item  "},n.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("i",{className:"fab  "+t})))})))}var h=a("jM66"),v=a.n(h);t.default=function(){return n.a.createElement(o.a,null,n.a.createElement(p,null),n.a.createElement("header",{className:"masthead"},n.a.createElement("div",{className:"container h-100"},n.a.createElement("div",{className:"row h-100"},n.a.createElement("div",{className:"col-lg-7 my-auto"},n.a.createElement("div",{className:"header-content mx-auto"},n.a.createElement("h1",{className:"mb-5"},"By date shopping is an easy to use site to help you find available items to buy, sorted by delivery date. Search for the things you need and see the delivery date without endless scrolling."),n.a.createElement(d,{type:"id",element:"download"},n.a.createElement("a",{href:"#download",className:"btn btn-outline btn-xl"},"Start searching now")))),n.a.createElement("div",{className:"col-lg-5 my-auto"},n.a.createElement("div",{className:"device-container"},n.a.createElement("div",{className:"device-mockup iphone6_plus portrait white"},n.a.createElement("div",{className:"device"},n.a.createElement("div",{className:"screen"},n.a.createElement("img",{src:v.a,className:"img-fluid",alt:""})),n.a.createElement("div",{className:"button"})))))))),n.a.createElement("section",{className:"download bg-primary text-center",id:"download"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 mx-auto"},n.a.createElement("h2",{className:"section-heading"},"Want it now? By date shopping has you covered."),n.a.createElement("p",null,"By date shopping uses the power of amazon.com to help you find what you’re looking for. Items are displayed based on the closest available delivery date. Once you find that perfect item, click the buy now button to add it to your amazon cart. It’s that simple."))))),n.a.createElement("section",{className:"features",id:"features"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-heading text-center"},n.a.createElement("h2",null,"It’s free, and no credit card or account is needed."),n.a.createElement("p",{className:"text-muted"},"place holder text/items"),n.a.createElement("hr",null)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 my-auto"},n.a.createElement("div",{className:"device-container"},n.a.createElement("div",{className:"device-mockup iphone6_plus portrait white"},n.a.createElement("div",{className:"device"},n.a.createElement("div",{className:"screen"},n.a.createElement("img",{src:v.a,className:"img-fluid",alt:""})),n.a.createElement("div",{className:"button"}))))),n.a.createElement("div",{className:"col-lg-8 my-auto"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"feature-item"},n.a.createElement("i",{className:"icon-screen-smartphone text-primary"}),n.a.createElement("h3",null,"Device Mockups"),n.a.createElement("p",{className:"text-muted"},n.a.createElement("a",{href:"https://amzn.to/2KDyCW8"},"blah, blah")))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"feature-item"},n.a.createElement("i",{className:"icon-camera text-primary"}),n.a.createElement("h3",null,"Flexible Use"),n.a.createElement("p",{className:"text-muted"},"Put an image, video, animation, or anything else in the screen!")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"feature-item"},n.a.createElement("i",{className:"icon-present text-primary"}),n.a.createElement("h3",null,"Free to Use"),n.a.createElement("p",{className:"text-muted"},"As always, this theme is free to download and use for any purpose!"))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"feature-item"},n.a.createElement("i",{className:"icon-lock-open text-primary"}),n.a.createElement("h3",null,"Open Source"),n.a.createElement("p",{className:"text-muted"},"Since this theme is MIT licensed, you can use it commercially!"))))))))),n.a.createElement("section",{className:"cta"},n.a.createElement("div",{className:"cta-content"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Stop waiting.",n.a.createElement("br",null),"Start building."),n.a.createElement(d,{type:"id",element:"contact"},n.a.createElement("a",{href:"#contact",className:"btn btn-outline btn-xl"},"Let's Get Started!")))),n.a.createElement("div",{className:"overlay"})),n.a.createElement("section",{className:"contact bg-primary",id:"contact"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"We",n.a.createElement("i",{className:"fas fa-heart"}),"new friends!"),n.a.createElement(f,null))),n.a.createElement(u.a,null))}},dwco:function(e,t,a){a("Oyvg"),a("eM6i"),a("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,l=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:l.prototype.scroll||c,scrollIntoView:l.prototype.scrollIntoView},o=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?f.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var a=p(this),l=a.getBoundingClientRect(),o=this.getBoundingClientRect();a!==t.body?(f.call(this,a,a.scrollLeft+o.left-l.left,a.scrollTop+o.top-l.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function m(t,a){var l=e.getComputedStyle(t,null)["overflow"+a];return"auto"===l||"scroll"===l}function d(e){var t=s(e,"Y")&&m(e,"Y"),a=s(e,"X")&&m(e,"X");return t||a}function p(e){for(;e!==t.body&&!1===d(e);)e=e.parentNode||e.host;return e}function u(t){var a,l,n,r,c=(o()-t.startTime)/468;r=c=c>1?1:c,a=.5*(1-Math.cos(Math.PI*r)),l=t.startX+(t.x-t.startX)*a,n=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,l,n),l===t.x&&n===t.y||e.requestAnimationFrame(u.bind(e,t))}function f(a,l,r){var i,s,m,d,p=o();a===t.body?(i=e,s=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,d=n.scroll):(i=a,s=a.scrollLeft,m=a.scrollTop,d=c),u({scrollable:i,method:d,startTime:p,startX:s,startY:m,x:l,y:r})}}}}()},jM66:function(e,t,a){e.exports=a.p+"static/demo-screen-1-82bcf3c843c811de878424e8d8307250.jpg"},obyI:function(e,t){e.exports={siteTitle:"By Date Shopping",manifestName:"newage",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/test/",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/bydateshopping"},{icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/bydateshopping/"}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-64a1000ff6526bb8126e.js.map