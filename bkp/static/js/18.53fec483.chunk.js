(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{143:function(e,t,r){"use strict";var a=r(3),n=r(4),o=r(6),s=r(5),l=r(7),i=r(0),c=r.n(i),u=r(18),p=r.n(u),m=r(144),d=r.n(m),f=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-12 p-0 fixed",style:{zIndex:"9"}},c.a.createElement("div",{className:"block m-0"},c.a.createElement("div",{className:"block-content p-0"},c.a.createElement("div",{className:"input-group ".concat(this.props.boxshadow&&"search-box")},!this.props.disable_back_button&&c.a.createElement("div",{className:"input-group-prepend"},this.props.back_to_home&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/")}},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(p.a,{duration:"500"})),this.props.goto_orders_page&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-orders")}},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(p.a,{duration:"500"})),this.props.goto_accounts_page&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){return e.context.router.history.push("/my-account")}},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(p.a,{duration:"500"})),!this.props.back_to_home&&!this.props.goto_orders_page&&!this.props.goto_accounts_page&&c.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:this.context.router.history.goBack},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(p.a,{duration:"500"}))),c.a.createElement("p",{className:"form-control search-input"},this.props.logo&&c.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120"}),this.props.has_title?c.a.createElement("span",{className:"nav-page-title"},this.props.title):null,this.props.has_delivery_icon&&c.a.createElement(d.a,{left:!0},c.a.createElement("img",{src:"/assets/img/various/delivery-bike.png",alt:this.props.title,className:"nav-page-title"}))),this.props.has_restaurant_info?c.a.createElement("div",{className:"fixed-restaurant-info hidden",ref:function(t){e.heading=t}},c.a.createElement("span",{className:"font-w700 fixedRestaurantName"},this.props.restaurant.name),c.a.createElement("br",null),c.a.createElement("span",{className:"font-w400 fixedRestaurantTime"},c.a.createElement("i",{className:"si si-clock"})," ",this.props.restaurant.delivery_time," ",localStorage.getItem("homePageMinsText"))):null,c.a.createElement("div",{className:"input-group-append"},!this.props.disable_search&&c.a.createElement("button",{type:"submit",className:"btn search-navs-btns",style:{position:"relative"}},c.a.createElement("i",{className:"si si-magnifier"}),c.a.createElement(p.a,{duration:"500"}))))))))}}]),t}(i.Component);f.contextTypes={router:function(){return null}},t.a=f},146:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=function(e){if(e){var t=parseFloat(e);return t=t.toFixed(2)}return 0}},151:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(41);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?f(e):t}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t,r,a,n){var o=n.offsetX,s=n.offsetY,l=a?8:0,i=r.split(" "),c=e.top+e.height/2,u=e.left+e.width/2,p=t.height,m=t.width,d=c-p/2,f=u-m/2,g="",h="0%",y="0%";switch(i[0]){case"top":d-=p/2+e.height/2+l,g="rotate(45deg)",h="100%",y="50%";break;case"bottom":d+=p/2+e.height/2+l,g="rotate(225deg)",y="50%";break;case"left":f-=m/2+e.width/2+l,g=" rotate(-45deg)",y="100%",h="50%";break;case"right":f+=m/2+e.width/2+l,g="rotate(135deg)",h="50%"}switch(i[1]){case"top":d=e.top,h=e.height/2+"px";break;case"bottom":d=e.top-p+e.height,h=p-e.height/2+"px";break;case"left":f=e.left,y=e.width/2+"px";break;case"right":f=e.left-m+e.width,y=m-e.width/2+"px"}return{top:d="top"===i[0]?d-s:d+s,left:f="left"===i[0]?f-o:f+o,transform:g,arrowLeft:y,arrowTop:h}}var b={popupContent:{tooltip:{position:"absolute",zIndex:"2",width:"200px",background:"rgb(255, 255, 255)",border:"1px solid rgb(187, 187, 187)",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 3px",padding:"5px"},modal:{position:"relative",background:"rgb(255, 255, 255)",width:"50%",margin:"auto",border:"1px solid rgb(187, 187, 187)",padding:"5px"}},popupArrow:{height:"10px",width:"10px",position:"absolute",background:"rgb(255, 255, 255)",transform:"rotate(45deg)",margin:"-5px",zIndex:"-1",boxShadow:"rgba(0, 0, 0, 0.2) 1px 1px 1px"},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0"},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",background:"rgba(0, 0, 0,0.5)",display:"flex",zIndex:"999"}}},E=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],v=function(e){function t(e){var r;return s(this,t),c(f(f(r=g(this,m(t).call(this,e)))),"state",{isOpen:r.props.open||r.props.defaultOpen,modal:!!r.props.modal||!r.props.trigger}),c(f(f(r)),"repositionOnResize",function(){r.setPosition()}),c(f(f(r)),"onEscape",function(e){"Escape"===e.key&&r.closePopup()}),c(f(f(r)),"lockScroll",function(){r.state.modal&&r.props.lockScroll&&(document.getElementsByTagName("body")[0].style.overflow="hidden")}),c(f(f(r)),"resetScroll",function(){r.state.modal&&r.props.lockScroll&&(document.getElementsByTagName("body")[0].style.overflow="auto")}),c(f(f(r)),"togglePopup",function(){r.state.isOpen?r.closePopup():r.openPopup()}),c(f(f(r)),"openPopup",function(){r.state.isOpen||r.props.disabled||r.setState({isOpen:!0},function(){r.setPosition(),r.props.onOpen(),r.lockScroll()})}),c(f(f(r)),"closePopup",function(){r.state.isOpen&&(r.props.onClose(),r.setState({isOpen:!1},function(){r.resetScroll()}))}),c(f(f(r)),"onMouseEnter",function(){clearTimeout(r.timeOut);var e=r.props.mouseEnterDelay;r.timeOut=setTimeout(function(){return r.openPopup()},e)}),c(f(f(r)),"onMouseLeave",function(){clearTimeout(r.timeOut);var e=r.props.mouseLeaveDelay;r.timeOut=setTimeout(function(){return r.closePopup()},e)}),c(f(f(r)),"getTooltipBoundary",function(){var e=r.props.keepTooltipInside,t={top:0,left:0,width:window.innerWidth,height:window.innerHeight};"string"===typeof e&&(t=document.querySelector(e).getBoundingClientRect());return t}),c(f(f(r)),"setPosition",function(){var e=r.state,t=e.modal,a=e.isOpen;if(!t&&a){var n=r.props,o=n.arrow,s=n.position,l=n.offsetX,i=n.offsetY,c=n.keepTooltipInside,u=n.arrowStyle,p=r.HelperEl.getBoundingClientRect(),m=r.TriggerEl.getBoundingClientRect(),d=r.ContentEl.getBoundingClientRect(),f=r.getTooltipBoundary(),g=Array.isArray(s)?s:[s];(c||Array.isArray(s))&&(g=h(g).concat(E));var b=function(e,t,r,a,n,o){for(var s,l=n.offsetX,i=n.offsetY,c=0;c<r.length;){var u={top:(s=y(e,t,r[c],a,{offsetX:l,offsetY:i})).top,left:s.left,width:t.width,height:t.height};if(!(u.top<=o.top||u.left<=o.left||u.top+u.height>=o.top+o.height||u.left+u.width>=o.left+o.width))break;c++}return s}(m,d,g,o,{offsetX:l,offsetY:i},f);r.ContentEl.style.top=b.top-p.top+"px",r.ContentEl.style.left=b.left-p.left+"px",o&&(r.ArrowEl.style.transform=b.transform,r.ArrowEl.style["-ms-transform"]=b.transform,r.ArrowEl.style["-webkit-transform"]=b.transform,r.ArrowEl.style.top=u.top||b.arrowTop,r.ArrowEl.style.left=u.left||b.arrowLeft),"static"!=window.getComputedStyle(r.TriggerEl,null).getPropertyValue("position")&&""!=window.getComputedStyle(r.TriggerEl,null).getPropertyValue("position")||(r.TriggerEl.style.position="relative")}}),c(f(f(r)),"addWarperAction",function(){var e=r.props,t=e.contentStyle,a=e.className,n=e.on,o=r.state.modal,s=o?b.popupContent.modal:b.popupContent.tooltip,l={className:"popup-content ".concat(a),style:Object.assign({},s,t),ref:r.setContentRef,onClick:function(e){e.stopPropagation()}};return!o&&n.indexOf("hover")>=0&&(l.onMouseEnter=r.onMouseEnter,l.onMouseLeave=r.onMouseLeave),l}),c(f(f(r)),"renderTrigger",function(){for(var e={key:"T"},t=r.props,a=t.on,o=t.trigger,s=Array.isArray(a)?a:[a],l=0,i=s.length;l<i;l++)switch(s[l]){case"click":e.onClick=r.togglePopup;break;case"hover":e.onMouseEnter=r.onMouseEnter,e.onMouseLeave=r.onMouseLeave;break;case"focus":e.onFocus=r.onMouseEnter}return"function"===typeof o?n.a.cloneElement(o(r.state.isOpen),e):n.a.cloneElement(o,e)}),c(f(f(r)),"renderContent",function(){var e=r.props,t=e.arrow,a=e.arrowStyle,o=r.state.modal;return n.a.createElement("div",u({},r.addWarperAction(),{key:"C"}),t&&!o&&n.a.createElement("div",{ref:r.setArrowRef,style:Object.assign({},b.popupArrow,a)}),"function"===typeof r.props.children?r.props.children(r.closePopup,r.state.isOpen):r.props.children)}),r.setTriggerRef=function(e){return r.TriggerEl=e},r.setContentRef=function(e){return r.ContentEl=e},r.setArrowRef=function(e){return r.ArrowEl=e},r.setHelperRef=function(e){return r.HelperEl=e},r.timeOut=0,r}return p(t,n.a.PureComponent),i(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.closeOnEscape,r=e.defaultOpen,a=e.repositionOnResize;r&&this.setPosition(),t&&window.addEventListener("keyup",this.onEscape),a&&window.addEventListener("resize",this.repositionOnResize)}},{key:"componentWillReceiveProps",value:function(e){this.props.open!==e.open&&(e.open?this.openPopup():this.closePopup())}},{key:"componentDidUpdate",value:function(e){e.disabled!==this.props.disabled&&this.props.disabled&&this.state.isOpen&&this.closePopup()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeOut);var e=this.props,t=e.closeOnEscape,r=e.repositionOnResize;t&&window.removeEventListener("keyup",this.onEscape),r&&window.removeEventListener("resize",this.repositionOnResize)}},{key:"render",value:function(){var e=this.props,t=e.overlayStyle,r=e.closeOnDocumentClick,a=e.on,o=this.state.modal,s=this.state.isOpen&&!(a.indexOf("hover")>=0),l=o?b.overlay.modal:b.overlay.tooltip;return[!!this.props.trigger&&n.a.createElement(x,{innerRef:this.setTriggerRef,key:"R"},this.renderTrigger()),this.state.isOpen&&n.a.createElement("div",{key:"H",style:{position:"absolute",top:"0px",left:"0px"},ref:this.setHelperRef}),s&&n.a.createElement("div",{key:"O",className:"popup-overlay",style:Object.assign({},l,t),onClick:r?this.closePopup:void 0},o&&this.renderContent()),this.state.isOpen&&!o&&this.renderContent()]}}]),t}();c(v,"defaultProps",{children:function(){return n.a.createElement("span",null," Your Content Here !!")},trigger:null,onOpen:function(){},onClose:function(){},defaultOpen:!1,open:!1,disabled:!1,closeOnDocumentClick:!0,repositionOnResize:!0,closeOnEscape:!0,on:["click"],contentStyle:{},arrowStyle:{},overlayStyle:{},className:"",position:"bottom center",modal:!1,lockScroll:!1,arrow:!0,offsetX:0,offsetY:0,mouseEnterDelay:100,mouseLeaveDelay:100,keepTooltipInside:!1});var x=function(e){function t(){return s(this,t),g(this,m(t).apply(this,arguments))}return p(t,n.a.PureComponent),i(t,[{key:"componentDidMount",value:function(){var e=this.props.innerRef;e&&e(Object(o.findDOMNode)(this))}},{key:"render",value:function(){var e=this.props.children;return n.a.Children.only(e)}}]),t}();t.a=v},237:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r(4),o=r(6),s=r(5),l=r(7),i=r(0),c=r.n(i),u=r(62),p=r(14),m=r(11),d=r.n(m),f=r(143),g=r(25),h=r(33),y=r(18),b=r.n(y),E=r(149),v=r.n(E),x=r(151),w=r(146),O=function(e){function t(){var e,r;Object(a.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(r=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).__getOrderStatus=function(e){return 1===e?localStorage.getItem("orderPlacedStatusText"):2===e?localStorage.getItem("preparingOrderStatusText"):3===e?localStorage.getItem("deliveryGuyAssignedStatusText"):4===e?localStorage.getItem("orderPickedUpStatusText"):5===e?localStorage.getItem("deliveredStatusText"):6===e?localStorage.getItem("canceledStatusText"):7===e?localStorage.getItem("readyForPickupStatusText"):void 0},r._getTotalItemCost=function(e){var t=parseFloat(e.price)*e.quantity;return e.order_item_addons.length&&e.order_item_addons.map(function(r){return t+=parseFloat(r.addon_price)*e.quantity}),Object(w.a)(t)},r}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("body")[0].classList.add("bg-grey")}},{key:"componentWillUnmount",value:function(){document.getElementsByTagName("body")[0].classList.remove("bg-grey")}},{key:"render",value:function(){var e=this,t=this.props,r=t.order,a=t.user,n=t.cancelOrder;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mb-20 bg-white p-3",style:{borderRadius:"0.275rem"}},c.a.createElement("div",{className:"pull-right"},(1===r.orderstatus_id||2===r.orderstatus_id||3===r.orderstatus_id||4===r.orderstatus_id||7===r.orderstatus_id)&&c.a.createElement(h.a,{to:"/running-order/".concat(r.unique_order_id),className:"btn btn-square btn-outline-secondary mb-10 order-track-button",delay:250,style:{position:"relative"}},localStorage.getItem("trackOrderText"),c.a.createElement("span",{className:"pulse ml-2"}),c.a.createElement(b.a,{duration:"500"}))),c.a.createElement("div",{className:"display-flex"},c.a.createElement("div",{className:"flex-auto"},c.a.createElement("button",{className:"mr-5 btn btn-square btn-outline-secondary min-width-125 mb-10 order-status-button text-muted ".concat(6===r.orderstatus_id&&"text-danger"," ")},this.__getOrderStatus(r.orderstatus_id)))),c.a.createElement("span",{className:"text-muted pull-right",style:{fontSize:"0.9rem"}},c.a.createElement(v.a,{fromNow:!0},r.created_at)),c.a.createElement("div",{className:"flex-auto"},c.a.createElement("h6",{className:"font-w700",style:{color:localStorage.getItem("storeColor")}},r.unique_order_id)),c.a.createElement("hr",null),r.orderitems.map(function(t){return c.a.createElement("div",{className:"display-flex pb-5",key:t.id},c.a.createElement("span",{className:"order-item-quantity mr-10"},"x",t.quantity),c.a.createElement("div",{className:"flex-auto text-left"},t.name),c.a.createElement("div",{className:"flex-auto text-right"},localStorage.getItem("currencyFormat"),e._getTotalItemCost(t)))}),c.a.createElement(c.a.Fragment,null,r.coupon_name&&c.a.createElement("div",{className:"display-flex mt-10 font-w700"},c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"flex-auto"},"Coupon: "),c.a.createElement("div",{className:"flex-auto text-right"},r.coupon_name))),r.tax&&c.a.createElement("div",{className:"display-flex mt-10 font-w700"},c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"flex-auto"},localStorage.getItem("taxText"),": "),c.a.createElement("div",{className:"flex-auto text-right text-danger"},c.a.createElement("span",null,"+"),r.tax,"%"))),c.a.createElement("div",{className:"display-flex mt-10 font-w700"},c.a.createElement("div",{className:"flex-auto"},localStorage.getItem("orderTextTotal")),c.a.createElement("div",{className:"flex-auto text-right"},localStorage.getItem("currencyFormat")," ",r.total))),1===r.orderstatus_id&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pull-right"},c.a.createElement(x.a,{trigger:c.a.createElement("button",{className:"btn btn-square btn-sm btn-outline-danger mb-0 mt-15",style:{position:"relative",fontSize:"0.8rem"}},localStorage.getItem("cancelOrderMainButton"),c.a.createElement(b.a,{duration:"500"})),modal:!0,closeOnDocumentClick:!0},function(e){return c.a.createElement("div",{className:"pages-modal"},c.a.createElement("div",{onClick:e,className:"close-modal-header text-right"},c.a.createElement("span",{className:"close-modal-icon"},"\xd7")),c.a.createElement("div",{className:"text-center",style:{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)",width:"100%"}},c.a.createElement("div",{style:{fontSize:"1.2rem",fontWeight:"500"}},c.a.createElement("i",{className:"si si-info",style:{fontSize:"4rem",opacity:"0.3",color:"#FF9800"}}),c.a.createElement("p",null,r.unique_order_id),c.a.createElement("p",null,localStorage.getItem("orderCancellationConfirmationText")),1===r.orderstatus_id?c.a.createElement(c.a.Fragment,null,"COD"!==r.payment_mode&&c.a.createElement("p",{className:"text-muted font-w400"},localStorage.getItem("currencyFormat")," ",r.total," ",localStorage.getItem("willBeRefundedText")),"COD"===r.payment_mode&&r.total-r.payable!==0&&c.a.createElement("p",{className:"text-muted font-w400"},localStorage.getItem("currencyFormat")," ",Object(w.a)(r.total-r.payable)," ",localStorage.getItem("willBeRefundedText"))):c.a.createElement("p",{className:"text-muted font-w400"},localStorage.getItem("willNotBeRefundedText"))),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-lg btn-danger mr-3",onClick:function(){return n(a.data.auth_token,a.data.id,r.id)},style:{border:"0",borderRadius:"0",backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("yesCancelOrderBtn")),c.a.createElement("button",{onClick:e,className:"btn btn-lg",style:{border:"0",borderRadius:"0"}},localStorage.getItem("cancelGoBackBtn")))))})),c.a.createElement("div",{className:"clearfix"}))))}}]),t}(i.Component),k=r(245),N=r(13),_=function(e){function t(){var e,r;Object(a.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(r=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={no_orders:!1,cancelSuccess:!1},r}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.user;e.success&&this.props.getOrders(e.data.auth_token,e.data.id)}},{key:"componentWillReceiveProps",value:function(e){if(0===e.orders.length&&this.setState({no_orders:!0}),this.props.cancel!==e.cancel&&e.cancel.success){this.setState({cancelSuccess:!0});var t=this.props.user;t.success&&this.props.getOrders(t.data.auth_token,t.data.id)}}},{key:"render",value:function(){var e=this;if(window.innerWidth>768)return c.a.createElement(k.a,{to:"/"});var t=this.props,r=t.user,a=t.orders;return null===localStorage.getItem("storeColor")?c.a.createElement(k.a,{to:"/"}):r.success?c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{boxshadow:!0,has_title:!0,title:localStorage.getItem("accountMyOrders"),disable_search:!0,goto_accounts_page:!0}),this.state.cancelSuccess&&c.a.createElement("div",{className:"auth-error cancel-success"},c.a.createElement("div",{className:""},localStorage.getItem("orderCancelledText"))),c.a.createElement("div",{className:"block-content block-content-full pt-80 pb-80 height-100-percent px-15"},0===a.length&&!this.state.no_orders&&c.a.createElement(g.a,{height:600,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},c.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"75",height:"22"}),c.a.createElement("rect",{x:"0",y:"30",rx:"0",ry:"0",width:"350",height:"18"}),c.a.createElement("rect",{x:"0",y:"60",rx:"0",ry:"0",width:"300",height:"18"}),c.a.createElement("rect",{x:"0",y:"90",rx:"0",ry:"0",width:"100",height:"18"}),c.a.createElement("rect",{x:"0",y:170,rx:"0",ry:"0",width:"75",height:"22"}),c.a.createElement("rect",{x:"0",y:200,rx:"0",ry:"0",width:"350",height:"18"}),c.a.createElement("rect",{x:"0",y:230,rx:"0",ry:"0",width:"300",height:"18"}),c.a.createElement("rect",{x:"0",y:260,rx:"0",ry:"0",width:"100",height:"18"}),c.a.createElement("rect",{x:"0",y:340,rx:"0",ry:"0",width:"75",height:"22"}),c.a.createElement("rect",{x:"0",y:370,rx:"0",ry:"0",width:"350",height:"18"}),c.a.createElement("rect",{x:"0",y:400,rx:"0",ry:"0",width:"300",height:"18"}),c.a.createElement("rect",{x:"0",y:430,rx:"0",ry:"0",width:"100",height:"18"})),0===a.length&&c.a.createElement("div",{className:"text-center mt-50 font-w600 text-muted"},localStorage.getItem("noOrdersText")),a.map(function(t){return c.a.createElement(O,{key:t.id,order:t,user:r,cancelOrder:e.props.cancelOrder,cancel:e.props.cancel})}))):c.a.createElement(k.a,{to:"/login"})}}]),t}(i.Component);t.default=Object(N.b)(function(e){return{user:e.user.user,orders:e.orders.orders,cancel:e.orders.cancel}},{getOrders:function(e,t){return function(r){d.a.post(p.p,{token:e,user_id:t}).then(function(e){var t=e.data;return r({type:u.b,payload:t})}).catch(function(e){console.log(e)})}},cancelOrder:function(e,t,r){return function(a){d.a.post(p.q,{token:e,user_id:t,order_id:r}).then(function(e){var t=e.data;return a({type:u.a,payload:t})}).catch(function(e){console.log(e)})}}})(_)}}]);