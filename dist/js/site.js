function toggleClassMenu(){myMenu.classList.add("menu--animatable"),myMenu.classList.contains("menu--visible")?myMenu.classList.remove("menu--visible"):myMenu.classList.add("menu--visible")}function OnTransitionEnd(){myMenu.classList.remove("menu--animatable")}$("#flickr-home").length>0&&$(function(){$.getJSON("https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=9d94815889f0602f1e71df77341f8445&tags=foo fighters live, -cover, -coverband, -tribute, -sauzakings&per_page=24&jsoncallback=?&extras=owner_name&media=photos&tag_mode=all",function(e){""!=e.photos.photo?$.each(e.photos.photo,function(e,t){var o="https://farm"+t.farm+".static.flickr.com/"+t.server+"/"+t.id+"_"+t.secret,n=o+"_q.jpg",i=(t.ownername,t.title,'<a class="show-photos-item" target="_blank" href="https://www.flickr.com/photos/'+t.owner+"/"+t.id+'"><img title="" class="show-photos-image" data-src="'+n+'" alt="'+t.title+'"/></a>;');$(i).appendTo("#flickr-home")}):$("<p>Sorry, no photos found.</p>").appendTo("#flickr-home")})}),"undefined"!=typeof flickr_tag&&null!==flickr_tag&&$(function(){var e=flickr_tag;$.getJSON("https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=9d94815889f0602f1e71df77341f8445&tags="+e+"&per_page=36&jsoncallback=?&extras=owner_name&media=photos&tag_mode=all",function(e){""!=e.photos.photo?$.each(e.photos.photo,function(e,t){var o="http://farm"+t.farm+".static.flickr.com/"+t.server+"/"+t.id+"_"+t.secret,n=o+"_q.jpg",i=(t.ownername,t.title,'<a class="show-photos-item" target="_blank" href="https://www.flickr.com/photos/'+t.owner+"/"+t.id+'"><img title="" class="show-photos-image" data-src="'+n+'" alt="'+t.title+'"/></a>;');$(i).appendTo("#flickr")}):$('<p class="bigger-pad">No images found for this performance.</p>').appendTo("#flickr")})}),function(e,t,o,n){function i(e,t){return e[t]===n?y[t]:e[t]}function a(){var e=t.pageYOffset;return e===n?v.scrollTop:e}function r(e,t){var o=y["on"+e];o&&(C(o)?o.call(t[0]):(o.addClass&&t.addClass(o.addClass),o.removeClass&&t.removeClass(o.removeClass))),t.trigger("lazy"+e,[t]),d()}function s(t){r(t.type,e(this).off(h,s))}function l(o){if(x.length){o=o||y.forceLoad,T=1/0;var n,i,l=a(),c=t.innerHeight||v.clientHeight,d=t.innerWidth||v.clientWidth;for(n=0,i=x.length;i>n;n++){var p,u=x[n],g=u[0],w=u[f],b=!1,k=o||_(g,m)<0;if(e.contains(v,g)){if(o||!w.visibleOnly||g.offsetWidth||g.offsetHeight){if(!k){var I=g.getBoundingClientRect(),E=w.edgeX,z=w.edgeY;k=l>=(p=I.top+l-z-c)&&I.bottom>-z&&I.left<=d+E&&I.right>-E}if(k){u.on(h,s),r("show",u);var S=w.srcAttr,A=C(S)?S(u):g.getAttribute(S);A&&(g.src=A),b=!0}else T>p&&(T=p)}}else b=!0;b&&(_(g,m,0),x.splice(n--,1),i--)}i||r("complete",e(v))}}function c(){I>1?(I=1,l(),setTimeout(c,y.throttle)):I=0}function d(e){x.length&&(e&&"scroll"===e.type&&e.currentTarget===t&&T>=a()||(I||setTimeout(c,0),I=2))}function p(){b.lazyLoadXT()}function u(){l(!0)}var f="lazyLoadXT",m="lazied",h="load error",g="lazy-hidden",v=o.documentElement||o.body,y={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:t.onscroll===n||!!t.operamini||!v.getBoundingClientRect,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"lazyloadall",oninit:{removeClass:"lazy"},onshow:{addClass:g},onload:{removeClass:g,addClass:"lazy-loaded"},onerror:{removeClass:g},checkDuplicates:!0},w={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},b=e(t),C=e.isFunction,k=e.extend,_=e.data||function(t,o){return e(t).data(o)},x=[],T=0,I=0;e[f]=k(y,w,e[f]),e.fn[f]=function(o){var n,a=i(o=o||{},"blankImage"),s=i(o,"checkDuplicates"),l=i(o,"scrollContainer"),c=i(o,"show"),p={};for(n in e(l).on("scroll",d),w)p[n]=i(o,n);return this.each(function(n,i){if(i===t)e(y.selector).lazyLoadXT(o);else{var l=s&&_(i,m),u=e(i).data(m,c?-1:1);if(l)return void d();a&&"IMG"===i.tagName&&!i.src&&(i.src=a),u[f]=k({},p),r("init",u),x.push(u),d()}})},e(o).ready(function(){r("start",b),b.on(y.updateEvent,d).on(y.forceEvent,u),e(o).on(y.updateEvent,d),y.autoInit&&(b.on(y.loadEvent,p),p())})}(window.jQuery||window.Zepto||window.$,window,document),$(function(){$(".rec-list li").matchHeight()}),$(function(){$(".news-sm-link").matchHeight()}),$(function(){$(".rec-card").matchHeight()}),$(function(){$(".members-entry").matchHeight()}),$(function(){$(".dl-card").matchHeight()}),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t=-1,o=-1,n=function(e){return parseFloat(e)||0},i=function(t){var o=e(t),i=null,a=[];return o.each(function(){var t=e(this),o=t.offset().top-n(t.css("margin-top")),r=a.length>0?a[a.length-1]:null;null===r?a.push(t):Math.floor(Math.abs(i-o))<=1?a[a.length-1]=r.add(t):a.push(t),i=o}),a},a=function(t){var o={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof t?e.extend(o,t):("boolean"==typeof t?o.byRow=t:"remove"===t&&(o.remove=!0),o)},r=e.fn.matchHeight=function(t){var o=a(t);if(o.remove){var n=this;return this.css(o.property,""),e.each(r._groups,function(e,t){t.elements=t.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="master",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,r._afterUpdate=null,r._rows=i,r._parse=n,r._parseOptions=a,r._apply=function(t,o){var s=a(o),l=e(t),c=[l],d=e(window).scrollTop(),p=e("html").outerHeight(!0),u=l.parents().filter(":hidden");return u.each(function(){var t=e(this);t.data("style-cache",t.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(l.each(function(){var t=e(this),o=t.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),t.data("style-cache",t.attr("style")),t.css({display:o,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),c=i(l),l.each(function(){var t=e(this);t.attr("style",t.data("style-cache")||"")})),e.each(c,function(t,o){var i=e(o),a=0;if(s.target)a=s.target.outerHeight(!1);else{if(s.byRow&&i.length<=1)return void i.css(s.property,"");i.each(function(){var t=e(this),o=t.attr("style"),n=t.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var i={display:n};i[s.property]="",t.css(i),t.outerHeight(!1)>a&&(a=t.outerHeight(!1)),o?t.attr("style",o):t.css("display","")})}i.each(function(){var t=e(this),o=0;s.target&&t.is(s.target)||("border-box"!==t.css("box-sizing")&&(o+=n(t.css("border-top-width"))+n(t.css("border-bottom-width")),o+=n(t.css("padding-top"))+n(t.css("padding-bottom"))),t.css(s.property,a-o+"px"))})}),u.each(function(){var t=e(this);t.attr("style",t.data("style-cache")||null)}),r._maintainScroll&&e(window).scrollTop(d/p*e("html").outerHeight(!0)),this},r._applyDataApi=function(){var t={};e("[data-match-height], [data-mh]").each(function(){var o=e(this),n=o.attr("data-mh")||o.attr("data-match-height");t[n]=n in t?t[n].add(o):o}),e.each(t,function(){this.matchHeight(!0)})};var s=function(t){r._beforeUpdate&&r._beforeUpdate(t,r._groups),e.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(t,r._groups)};r._update=function(n,i){if(i&&"resize"===i.type){var a=e(window).width();if(a===t)return;t=a}n?-1===o&&(o=setTimeout(function(){s(i),o=-1},r._throttle)):s(i)},e(r._applyDataApi),e(window).bind("load",function(e){r._update(!1,e)}),e(window).bind("resize orientationchange",function(e){r._update(!0,e)})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(window.jQuery||window.Zepto)}(function(e){var t,o,n,i,a,r,s="Close",l="BeforeClose",c="MarkupParse",d="Open",p=".mfp",u="mfp-ready",f="mfp-removing",m="mfp-prevent-close",h=function(){},g=!!window.jQuery,v=e(window),y=function(e,o){t.ev.on("mfp"+e+p,o)},w=function(t,o,n,i){var a=document.createElement("div");return a.className="mfp-"+t,n&&(a.innerHTML=n),i?o&&o.appendChild(a):(a=e(a),o&&a.appendTo(o)),a},b=function(o,n){t.ev.triggerHandler("mfp"+o,n),t.st.callbacks&&(o=o.charAt(0).toLowerCase()+o.slice(1),t.st.callbacks[o]&&t.st.callbacks[o].apply(t,e.isArray(n)?n:[n]))},C=function(o){return o===r&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),r=o),t.currTemplate.closeBtn},k=function(){e.magnificPopup.instance||((t=new h).init(),e.magnificPopup.instance=t)};h.prototype={constructor:h,init:function(){var o=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(o),t.isIOS=/iphone|ipad|ipod/gi.test(o),t.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),n=e(document),t.popupsCache={}},open:function(o){var i;if(!1===o.isObj){t.items=o.items.toArray(),t.index=0;var r,s=o.items;for(i=0;i<s.length;i++)if((r=s[i]).parsed&&(r=r.el[0]),r===o.el[0]){t.index=i;break}}else t.items=e.isArray(o.items)?o.items:[o.items],t.index=o.index||0;if(!t.isOpen){t.types=[],a="",o.mainEl&&o.mainEl.length?t.ev=o.mainEl.eq(0):t.ev=n,o.key?(t.popupsCache[o.key]||(t.popupsCache[o.key]={}),t.currTemplate=t.popupsCache[o.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,o),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=w("bg").on("click"+p,function(){t.close()}),t.wrap=w("wrap").attr("tabindex",-1).on("click"+p,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=w("container",t.wrap)),t.contentContainer=w("content"),t.st.preloader&&(t.preloader=w("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(i=0;i<l.length;i++){var f=l[i];f=f.charAt(0).toUpperCase()+f.slice(1),t["init"+f].call(t)}b("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(y(c,function(e,t,o,n){o.close_replaceWith=C(n.type)}),a+=" mfp-close-btn-in"):t.wrap.append(C())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:v.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:n.height(),position:"absolute"}),t.st.enableEscapeKey&&n.on("keyup"+p,function(e){27===e.keyCode&&t.close()}),v.on("resize"+p,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var m=t.wH=v.height(),h={};if(t.fixedContentPos&&t._hasScrollBar(m)){var g=t._getScrollbarSize();g&&(h.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):h.overflow="hidden");var k=t.st.mainClass;return t.isIE7&&(k+=" mfp-ie7"),k&&t._addClassToMFP(k),t.updateItemHTML(),b("BuildControls"),e("html").css(h),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(u),t._setFocus()):t.bgOverlay.addClass(u),n.on("focusin"+p,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(m),b(d),o}t.updateItemHTML()},close:function(){t.isOpen&&(b(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(f),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){b(s);var o=f+" "+u+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(o+=t.st.mainClass+" "),t._removeClassFromMFP(o),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}n.off("keyup.mfp focusin"+p),t.ev.off(p),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),t.st.showCloseBtn&&(!t.st.closeBtnInside||!0===t.currTemplate[t.currItem.type])&&t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,b("AfterClose")},updateSize:function(e){if(t.isIOS){var o=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*o;t.wrap.css("height",n),t.wH=n}else t.wH=e||v.height();t.fixedContentPos||t.wrap.css("height",t.wH),b("Resize")},updateItemHTML:function(){var o=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),o.parsed||(o=t.parseEl(t.index));var n=o.type;if(b("BeforeChange",[t.currItem?t.currItem.type:"",n]),t.currItem=o,!t.currTemplate[n]){var a=!!t.st[n]&&t.st[n].markup;b("FirstMarkupParse",a),t.currTemplate[n]=!a||e(a)}i&&i!==o.type&&t.container.removeClass("mfp-"+i+"-holder");var r=t["get"+n.charAt(0).toUpperCase()+n.slice(1)](o,t.currTemplate[n]);t.appendContent(r,n),o.preloaded=!0,b("Change",o),i=o.type,t.container.prepend(t.contentContainer),b("AfterChange")},appendContent:function(e,o){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[o]?t.content.find(".mfp-close").length||t.content.append(C()):t.content=e:t.content="",b("BeforeAppend"),t.container.addClass("mfp-"+o+"-holder"),t.contentContainer.append(t.content)},parseEl:function(o){var n,i=t.items[o];if(i.tagName?i={el:e(i)}:(n=i.type,i={data:i,src:i.src}),i.el){for(var a=t.types,r=0;r<a.length;r++)if(i.el.hasClass("mfp-"+a[r])){n=a[r];break}i.src=i.el.attr("data-mfp-src"),i.src||(i.src=i.el.attr("href"))}return i.type=n||t.st.type||"inline",i.index=o,i.parsed=!0,t.items[o]=i,b("ElementParse",i),t.items[o]},addGroup:function(e,o){var n=function(n){n.mfpEl=this,t._openClick(n,e,o)};o||(o={});var i="click.magnificPopup";o.mainEl=e,o.items?(o.isObj=!0,e.off(i).on(i,n)):(o.isObj=!1,o.delegate?e.off(i).on(i,o.delegate,n):(o.items=e,e.off(i).on(i,n)))},_openClick:function(o,n,i){if((void 0!==i.midClick?i.midClick:e.magnificPopup.defaults.midClick)||!(2===o.which||o.ctrlKey||o.metaKey||o.altKey||o.shiftKey)){var a=void 0!==i.disableOn?i.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(v.width()<a)return!0;o.type&&(o.preventDefault(),t.isOpen&&o.stopPropagation()),i.el=e(o.mfpEl),i.delegate&&(i.items=n.find(i.delegate)),t.open(i)}},updateStatus:function(e,n){if(t.preloader){o!==e&&t.container.removeClass("mfp-s-"+o),!n&&"loading"===e&&(n=t.st.tLoading);var i={status:e,text:n};b("UpdateStatus",i),e=i.status,n=i.text,t.preloader.html(n),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),o=e}},_checkIfClose:function(o){if(!e(o).hasClass(m)){var n=t.st.closeOnContentClick,i=t.st.closeOnBgClick;if(n&&i)return!0;if(!t.content||e(o).hasClass("mfp-close")||t.preloader&&o===t.preloader[0])return!0;if(o===t.content[0]||e.contains(t.content[0],o)){if(n)return!0}else if(i&&e.contains(document,o))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?n.height():document.body.scrollHeight)>(e||v.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(o){if(o.target!==t.wrap[0]&&!e.contains(t.wrap[0],o.target))return t._setFocus(),!1},_parseMarkup:function(t,o,n){var i;n.data&&(o=e.extend(n.data,o)),b(c,[t,o,n]),e.each(o,function(o,n){if(void 0===n||!1===n)return!0;if((i=o.split("_")).length>1){var a=t.find(p+"-"+i[0]);if(a.length>0){var r=i[1];"replaceWith"===r?a[0]!==n[0]&&a.replaceWith(n):"img"===r?a.is("img")?a.attr("src",n):a.replaceWith(e("<img>").attr("src",n).attr("class",a.attr("class"))):a.attr(i[1],n)}}else t.find(p+"-"+o).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:h.prototype,modules:[],open:function(t,o){return k(),(t=t?e.extend(!0,{},t):{}).isObj=!0,t.index=o||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,o){o.options&&(e.magnificPopup.defaults[t]=o.options),e.extend(this.proto,o.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(o){k();var n=e(this);if("string"==typeof o)if("open"===o){var i,a=g?n.data("magnificPopup"):n[0].magnificPopup,r=parseInt(arguments[1],10)||0;a.items?i=a.items[r]:(i=n,a.delegate&&(i=i.find(a.delegate)),i=i.eq(r)),t._openClick({mfpEl:i},n,a)}else t.isOpen&&t[o].apply(t,Array.prototype.slice.call(arguments,1));else o=e.extend(!0,{},o),g?n.data("magnificPopup",o):n[0].magnificPopup=o,t.addGroup(n,o);return n};var _;e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var o=t.st.image,n=".image";t.types.push("image"),y(d+n,function(){"image"===t.currItem.type&&o.cursor&&e(document.body).addClass(o.cursor)}),y(s+n,function(){o.cursor&&e(document.body).removeClass(o.cursor),v.off("resize"+p)}),y("Resize"+n,t.resizeImage),t.isLowIE&&y("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var o=0;t.isLowIE&&(o=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-o)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,_&&clearInterval(_),e.isCheckingImgSize=!1,b("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var o=0,n=e.img[0],i=function(a){_&&clearInterval(_),_=setInterval(function(){n.naturalWidth>0?t._onImageHasSize(e):(o>200&&clearInterval(_),3===++o?i(10):40===o?i(50):100===o&&i(500))},a)};i(1)},getImage:function(o,n){var i=0,a=function(){o&&(o.img[0].complete?(o.img.off(".mfploader"),o===t.currItem&&(t._onImageHasSize(o),t.updateStatus("ready")),o.hasSize=!0,o.loaded=!0,b("ImageLoadComplete")):++i<200?setTimeout(a,100):r())},r=function(){o&&(o.img.off(".mfploader"),o===t.currItem&&(t._onImageHasSize(o),t.updateStatus("error",s.tError.replace("%url%",o.src))),o.hasSize=!0,o.loaded=!0,o.loadError=!0)},s=t.st.image,l=n.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",o.el&&o.el.find("img").length&&(c.alt=o.el.find("img").attr("alt")),o.img=e(c).on("load.mfploader",a).on("error.mfploader",r),c.src=o.src,l.is("img")&&(o.img=o.img.clone()),(c=o.img[0]).naturalWidth>0?o.hasSize=!0:c.width||(o.hasSize=!1)}return t._parseMarkup(n,{title:function(o){if(o.data&&void 0!==o.data.title)return o.data.title;var n=t.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(t,o);if(o.el)return o.el.attr(n)||""}return""}(o),img_replaceWith:o.img},o),t.resizeImage(),o.hasSize?(_&&clearInterval(_),o.loadError?(n.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",o.src))):(n.removeClass("mfp-loading"),t.updateStatus("ready")),n):(t.updateStatus("loading"),o.loading=!0,o.hasSize||(o.imgHidden=!0,n.addClass("mfp-loading"),t.findImageSize(o)),n)}}});var x;e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,o=t.st.zoom,n=".zoom";if(o.enabled&&t.supportsTransition){var i,a,r=o.duration,c=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+o.duration/1e3+"s "+o.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return i["-webkit-"+a]=i["-moz-"+a]=i["-o-"+a]=i[a]=n,t.css(i),t},d=function(){t.content.css("visibility","visible")};y("BuildControls"+n,function(){if(t._allowZoom()){if(clearTimeout(i),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void d();(a=c(e)).css(t._getOffset()),t.wrap.append(a),i=setTimeout(function(){a.css(t._getOffset(!0)),i=setTimeout(function(){d(),setTimeout(function(){a.remove(),e=a=null,b("ZoomAnimationEnded")},16)},r)},16)}}),y(l+n,function(){if(t._allowZoom()){if(clearTimeout(i),t.st.removalDelay=r,!e){if(!(e=t._getItemToZoom()))return;a=c(e)}a.css(t._getOffset(!0)),t.wrap.append(a),t.content.css("visibility","hidden"),setTimeout(function(){a.css(t._getOffset())},16)}}),y(s+n,function(){t._allowZoom()&&(d(),a&&a.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(o){var n,i=(n=o?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)).offset(),a=parseInt(n.css("padding-top"),10),r=parseInt(n.css("padding-bottom"),10);i.top-=e(window).scrollTop()-a;var s={width:n.width(),height:(g?n.innerHeight():n[0].offsetHeight)-r-a};return void 0===x&&(x=void 0!==document.createElement("p").style.MozTransform),x?s["-moz-transform"]=s.transform="translate("+i.left+"px,"+i.top+"px)":(s.left=i.left,s.top=i.top),s}}});var T=function(e){var o=t.items.length;return e>o-1?e-o:e<0?o+e:e},I=function(e,t,o){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,o)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var o=t.st.gallery,i=".mfp-gallery";if(t.direction=!0,!o||!o.enabled)return!1;a+=" mfp-gallery",y(d+i,function(){o.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){if(t.items.length>1)return t.next(),!1}),n.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),y("UpdateStatus"+i,function(e,o){o.text&&(o.text=I(o.text,t.currItem.index,t.items.length))}),y(c+i,function(e,n,i,a){var r=t.items.length;i.counter=r>1?I(o.tCounter,a.index,r):""}),y("BuildControls"+i,function(){if(t.items.length>1&&o.arrows&&!t.arrowLeft){var n=o.arrowMarkup,i=t.arrowLeft=e(n.replace(/%title%/gi,o.tPrev).replace(/%dir%/gi,"left")).addClass(m),a=t.arrowRight=e(n.replace(/%title%/gi,o.tNext).replace(/%dir%/gi,"right")).addClass(m);i.click(function(){t.prev()}),a.click(function(){t.next()}),t.container.append(i.add(a))}}),y("Change"+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),y(s+i,function(){n.off(i),t.wrap.off("click"+i),t.arrowRight=t.arrowLeft=null})},next:function(){t.direction=!0,t.index=T(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=T(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,o=t.st.gallery.preload,n=Math.min(o[0],t.items.length),i=Math.min(o[1],t.items.length);for(e=1;e<=(t.direction?i:n);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?n:i);e++)t._preloadItem(t.index-e)},_preloadItem:function(o){if(o=T(o),!t.items[o].preloaded){var n=t.items[o];n.parsed||(n=t.parseEl(o)),b("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0,b("LazyLoadError",n)}).attr("src",n.src)),n.preloaded=!0}}}}),k()}),$(".show-photos-item").magnificPopup({type:"image",mainClass:"mfp-with-zoom",zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}},gallery:{enabled:!0}});var myMenu=document.querySelector(".menu"),oppMenu=document.querySelector(".menu-icon");function windowPopup(e,t,o){var n=screen.width/2-t/2,i=screen.height/2-o/2;window.open(e,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width="+t+",height="+o+",top="+i+",left="+n)}myMenu.addEventListener("transitionend",OnTransitionEnd,!1),oppMenu.addEventListener("click",toggleClassMenu,!1),myMenu.addEventListener("click",toggleClassMenu,!1),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";function t(e){var t=e.clone().css({height:"auto",width:e.width(),maxHeight:"none",overflow:"hidden"}).insertAfter(e),o=t.outerHeight(),n=parseInt(t.css({maxHeight:""}).css("max-height").replace(/[^-\d\.]/g,""),10),i=e.data("defaultHeight");t.remove();var a=n||e.data("collapsedHeight")||i;e.data({expandedHeight:o,maxHeight:n,collapsedHeight:a}).css({maxHeight:"none"})}function o(t,o){this.element=t,this.options=e.extend({},l,o),function(e){if(!c[e.selector]){var t=" ";e.embedCSS&&""!==e.blockCSS&&(t+=e.selector+" + [data-readmore-toggle], "+e.selector+"[data-readmore]{"+e.blockCSS+"}"),t+=e.selector+"[data-readmore]{transition: height "+e.speed+"ms;overflow: hidden;}",o=document,n=t,(i=o.createElement("style")).type="text/css",i.styleSheet?i.styleSheet.cssText=n:i.appendChild(o.createTextNode(n)),o.getElementsByTagName("head")[0].appendChild(i),c[e.selector]=!0}var o,n,i}(this.options),this._defaults=l,this._name=s,this.init(),window.addEventListener?(window.addEventListener("load",p),window.addEventListener("resize",p)):(window.attachEvent("load",p),window.attachEvent("resize",p))}var n,i,a,r,s="readmore",l={speed:100,collapsedHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,blockCSS:"display: block; width: 100%;",startOpen:!1,blockProcessed:function(){},beforeToggle:function(){},afterToggle:function(){}},c={},d=0,p=(n=function(){e("[data-readmore]").each(function(){var o=e(this),n="true"===o.attr("aria-expanded");t(o),o.css({height:o.data(n?"expandedHeight":"collapsedHeight")})})},i=100,function(){var e=this,t=arguments,o=a&&!r;clearTimeout(r),r=setTimeout(function(){r=null,a||n.apply(e,t)},i),o&&n.apply(e,t)});o.prototype={init:function(){var o=e(this.element);o.data({defaultHeight:this.options.collapsedHeight,heightMargin:this.options.heightMargin}),t(o);var n=o.data("collapsedHeight"),i=o.data("heightMargin");if(o.outerHeight(!0)<=n+i)return this.options.blockProcessed&&"function"==typeof this.options.blockProcessed&&this.options.blockProcessed(o,!1),!0;var a,r,s,l=o.attr("id")||(r=++d,String(null==a?"rmjs-":a)+r),c=this.options.startOpen?this.options.lessLink:this.options.moreLink;o.attr({"data-readmore":"","aria-expanded":this.options.startOpen,id:l}),o.after(e(c).on("click",(s=this,function(e){s.toggle(this,o[0],e)})).attr({"data-readmore-toggle":l,"aria-controls":l})),this.options.startOpen||o.css({height:n}),this.options.blockProcessed&&"function"==typeof this.options.blockProcessed&&this.options.blockProcessed(o,!0)},toggle:function(t,o,n){n&&n.preventDefault(),t||(t=e('[aria-controls="'+this.element.id+'"]')[0]),o||(o=this.element);var i,a,r=e(o),s="",l="",c=!1,d=r.data("collapsedHeight");r.height()<=d?(s=r.data("expandedHeight")+"px",l="lessLink",c=!0):(s=d,l="moreLink"),this.options.beforeToggle&&"function"==typeof this.options.beforeToggle&&this.options.beforeToggle(t,r,!c),r.css({height:s}),r.on("transitionend",(a=this,function(){a.options.afterToggle&&"function"==typeof a.options.afterToggle&&a.options.afterToggle(t,r,c),e(this).attr({"aria-expanded":c}).off("transitionend")})),e(t).replaceWith(e(this.options[l]).on("click",(i=this,function(e){i.toggle(this,o,e)})).attr({"data-readmore-toggle":r.attr("id"),"aria-controls":r.attr("id")}))},destroy:function(){e(this.element).each(function(){var t=e(this);t.attr({"data-readmore":null,"aria-expanded":null}).css({maxHeight:"",height:""}).next("[data-readmore-toggle]").remove(),t.removeData()})}},e.fn.readmore=function(t){var n=arguments,i=this.selector;return"object"==typeof(t=t||{})?this.each(function(){if(e.data(this,"plugin_"+s)){var n=e.data(this,"plugin_"+s);n.destroy.apply(n)}t.selector=i,e.data(this,"plugin_"+s,new o(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?this.each(function(){var i=e.data(this,"plugin_"+s);i instanceof o&&"function"==typeof i[t]&&i[t].apply(i,Array.prototype.slice.call(n,1))}):void 0}}),$(".readmore").readmore({speed:500,moreLink:'<a href="#" class="btn-solid btn-showmore">Read More</a>',lessLink:'<a href="#" class="btn-solid btn-showmore">Read Less</a>',collapsedHeight:800,beforeToggle:function(e,t,o){t.addClass("transitioning")},afterToggle:function(e,t,o){t.removeClass("transitioning")}}),$(".share-pop").on("click",function(e){e.preventDefault(),windowPopup($(this).attr("href"),500,300)}),$(document).ready(function(){$("#click-table tbody tr").click(function(){var e=$(this).find("a").attr("href");e&&(window.location=e)})}),$(".accordion").on("click",".accordion-header",function(){$(this).toggleClass("active").next().slideToggle()}),function(e,t,o,n,i,a,r){e.GoogleAnalyticsObject=i,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,a=t.createElement("script"),r=t.getElementsByTagName("script")[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(a,r)}(window,document,0,0,"ga"),ga("create","UA-22226621-1","auto"),ga("send","pageview"),function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.ContactForm=t()}(this,function(){"use strict";var e=function(t){if(!(this&&this instanceof e))return new e(t);this.form=t instanceof Node?t:document.querySelector(t),null!==this.form&&this.init()};return e.prototype={hasClass:function(e,t){return new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)},addClass:function(e,t){this.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},addError:function(e){return this.addClass(e.parentNode,"has-error")},removeClass:function(e,t){this.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(\\s|^)"+t+"(\\s|$)")," ").replace(/^\s+|\s+$/g,""))},validate:function(){var e=Array.prototype.slice.call(document.querySelectorAll(".form-control"));this.form.addEventListener("submit",function(t){if(!event.target.checkValidity()){t.preventDefault(),e.map(function(e){this.hasClass(e.parentNode,"has-error")&&this.removeClass(e.parentNode,"has-error")}.bind(this));var o=!1,n=document.querySelector("#form-name"),i=document.querySelector("#form-email"),a=document.querySelector("#form-subject"),r=document.querySelector("#form-message");""===n.value&&(o=!0,this.addError(n)),/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(i.value)||(o=!0,this.addError(i)),""===a.value&&(o=!0,this.addError(a)),""===r.value&&(o=!0,this.addError(r)),!1===o&&this.form.submit()}}.bind(this),!1)},init:function(){document.addEventListener("DOMContentLoaded",this.validate.bind(this),!1)}},e});