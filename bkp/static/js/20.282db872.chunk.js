(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{156:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return c});var r=n(57),o=n(14),a=n(11),i=n.n(a),s=function(e,t,n,a,s){return function(c){i.a.post(o.S,{token:e,user_id:t,delivery_lat:n,delivery_long:a,heading:s}).then(function(e){var t=e.data;return c({type:r.b,payload:t})}).catch(function(e){console.log(e)})}},c=function(e,t){return function(n){i.a.post(o.l,{token:e,order_id:t}).then(function(e){var t=e.data;return n({type:r.a,payload:t})}).catch(function(e){console.log(e)})}}},171:function(e,t,n){"use strict";var r=n(3),o=n(4),a=n(6),i=n(5),s=n(7),c=n(0),l=n.n(c),u=n(13),d=n(156),p=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(n=Object(a.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={gpsAccessError:!1,lat:null,lng:null},n.__sendGpsLocation=function(e){n.props.sendDeliveryGuyGpsLocation(n.props.delivery_user.data.auth_token,n.props.delivery_user.data.id,e.coords.latitude,e.coords.longitude,e.coords.heading)},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=navigator&&navigator.geolocation;t&&(this.refreshSetInterval=setInterval(function(){t.getCurrentPosition(function(t){e.__sendGpsLocation(t)},function(t){console.log("Inside error"),console.log(t),e.setState({gpsAccessError:!0})},{enableHighAccuracy:!0})},15e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshSetInterval),console.log("Cleared API CALL")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"pt-50"},this.state.gpsAccessError&&l.a.createElement("div",{className:"auth-error location-error"},l.a.createElement("div",{className:"error-shake"},localStorage.getItem("allowLocationAccessMessage")))))}}]),t}(c.Component);t.a=Object(u.b)(function(e){return{delivery_user:e.delivery_user.delivery_user}},{sendDeliveryGuyGpsLocation:d.b})(p)},226:function(e,t,n){"use strict";n.r(t);var r=n(23),o=n.n(r),a=n(35),i=n(3),s=n(4),c=n(6),l=n(5),u=n(7),d=n(29),p=n(0),g=n.n(p),f=n(26),v=n(219),m=n(246),y=n(13),h=n(60),b=n(83),w=n(171),_=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(a.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector("#mainManifest")&&document.querySelector("#mainManifest").setAttribute("href","/delivery-manifest.json"),document.getElementsByTagName("body")&&document.getElementsByTagName("body")[0].classList.add("bg-grey"),(t=this.props.delivery_user).success&&d.messaging.isSupported()&&(n=this.props.saveNotificationToken,h.a.requestPermission().then(Object(a.a)(o.a.mark(function e(){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getToken();case 2:r=e.sent,n(r,t.data.id,t.data.auth_token);case 4:case"end":return e.stop()}},e,this)}))).catch(function(e){console.log("Unable to get permission to notify.",e)}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return window.innerWidth>768?g.a.createElement(m.a,{to:"/"}):this.props.delivery_user.success?g.a.createElement(g.a.Fragment,null,g.a.createElement(f.a,{seotitle:"Delivery Orders",seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:localStorage.getItem("seoOgTitle"),ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:localStorage.getItem("seoTwitterTitle"),twitterdescription:localStorage.getItem("seoTwitterDescription")}),g.a.createElement(v.default,null),g.a.createElement(w.a,null)):g.a.createElement(m.a,{to:"/delivery/login"})}}]),t}(p.Component);t.default=Object(y.b)(function(e){return{delivery_user:e.delivery_user.delivery_user}},{saveNotificationToken:b.a})(_)}}]);