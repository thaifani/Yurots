
localStorage.setItem("storeColor", "rgb(179, 51, 51)");
(window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    [, , , , , , , , , , , function(e, t, a) {
        "use strict";
        var n = "https://bembarato.app";
        a.d(t, "D", function() {
            return r
        }), a.d(t, "u", function() {
            return o
        }), a.d(t, "v", function() {
            return l
        }), a.d(t, "o", function() {
            return c
        }), a.d(t, "C", function() {
            return i
        }), a.d(t, "A", function() {
            return s
        }), a.d(t, "z", function() {
            return u
        }), a.d(t, "B", function() {
            return g
        }), a.d(t, "c", function() {
            return d
        }), a.d(t, "L", function() {
            return m
        }), a.d(t, "S", function() {
            return p
        }), a.d(t, "s", function() {
            return f
        }), a.d(t, "I", function() {
            return h
        }), a.d(t, "U", function() {
            return S
        }), a.d(t, "i", function() {
            return E
        }), a.d(t, "T", function() {
            return v
        }), a.d(t, "g", function() {
            return b
        }), a.d(t, "ab", function() {
            return y
        }), a.d(t, "Q", function() {
            return _
        }), a.d(t, "Y", function() {
            return I
        }), a.d(t, "q", function() {
            return O
        }), a.d(t, "t", function() {
            return w
        }), a.d(t, "O", function() {
            return N
        }), a.d(t, "W", function() {
            return k
        }), a.d(t, "bb", function() {
            return T
        }), a.d(t, "R", function() {
            return j
        }), a.d(t, "f", function() {
            return x
        }), a.d(t, "r", function() {
            return A
        }), a.d(t, "J", function() {
            return C
        }), a.d(t, "e", function() {
            return P
        }), a.d(t, "F", function() {
            return R
        }), a.d(t, "l", function() {
            return D
        }), a.d(t, "G", function() {
            return L
        }), a.d(t, "j", function() {
            return G
        }), a.d(t, "X", function() {
            return F
        }), a.d(t, "cb", function() {
            return U
        }), a.d(t, "d", function() {
            return V
        }), a.d(t, "x", function() {
            return M
        }), a.d(t, "p", function() {
            return W
        }), a.d(t, "y", function() {
            return Y
        }), a.d(t, "k", function() {
            return H
        }), a.d(t, "M", function() {
            return B
        }), a.d(t, "N", function() {
            return J
        }), a.d(t, "H", function() {
            return z
        }), a.d(t, "w", function() {
            return K
        }), a.d(t, "b", function() {
            return q
        }), a.d(t, "K", function() {
            return X
        }), a.d(t, "Z", function() {
            return Z
        }), a.d(t, "n", function() {
            return Q
        }), a.d(t, "E", function() {
            return $
        }), a.d(t, "V", function() {
            return ee
        }), a.d(t, "m", function() {
            return te
        }), a.d(t, "a", function() {
            return ae
        }), a.d(t, "P", function() {
            return ne
        }), a.d(t, "h", function() {
            return re
        });
        var r = n + "/public/api/get-settings",
            o = n + "/public/api/popular-geo-locations",
            l = n + "/public/api/promo-slider",
            c = n + "/public/api/get-delivery-restaurants",
            i = n + "/public/api/get-selfpickup-restaurants",
            s = n + "/public/api/get-restaurant-info",
            u = n + "/public/api/get-restaurant-info-by-id",
            g = n + "/public/api/get-restaurant-items",
            d = n + "/public/api/apply-coupon",
            m = n + "/public/api/login",
            p = n + "/public/api/register",
            f = n + "/public/api/get-pages",
            h = n + "/public/api/get-single-page",
            S = n + "/public/api/search-restaurants",
            E = n + "/public/api/get-addresses",
            v = n + "/public/api/save-address",
            b = n + "/public/api/delete-address",
            y = n + "/public/api/update-user-info",
            _ = n + "/public/api/place-order",
            I = n + "/public/api/set-default-address",
            O = n + "/public/api/get-orders",
            w = n + "/public/api/get-payment-gateways",
            N = n + "/public/api/save-notification-token",
            k = n + "/public/api/send-otp",
            T = n + "/public/api/verify-otp",
            j = n + "/public/api/payment/process-razor-pay/",
            x = n + "/public/api/check-running-order",
            A = n + "/public/api/cancel-order",
            C = n + "/public/api/get-wallet-transactions",
            P = n + "/public/api/check-restaurant-operation-service",
            R = n + "/public/api/get-single-item",
            D = n + "/public/api/get-all-languages",
            L = n + "/public/api/get-single-language",
            G = n + "/public/api/coordinate-to-address",
            F = n + "/public/api/send-password-reset-mail",
            U = n + "/public/api/verify-password-reset-otp",
            V = n + "/public/api/change-user-password",
            M = n + "/public/api/get-all-restaurants-categories",
            W = n + "/public/api/get-filtered-restaurants",
            Y = n + "/public/api/get-restaurant-category-slides",
            H = n + "/public/api/get-user-notifications",
            B = n + "/public/api/mark-all-notifications-read",
            J = n + "/public/api/mark-one-notification-read",
            z = n + "/public/api/single-ratable-order",
            K = n + "/public/api/get-ratable-order",
            q = n + "/public/api/save-new-rating",
            X = n + "/public/api/delivery/login",
            Z = n + "/public/api/delivery/update-user-info",
            Q = n + "/public/api/delivery/get-delivery-orders",
            $ = n + "/public/api/delivery/get-single-delivery-order",
            ee = n + "/public/api/delivery/set-delivery-guy-gps-location",
            te = n + "/public/api/delivery/get-delivery-guy-gps-location",
            ae = n + "/public/api/delivery/accept-to-deliver",
            ne = n + "/public/api/delivery/pickedup-order",
            re = n + "/public/api/delivery/deliver-order"
    }, , , , , , function(e, t, a) {
        "use strict";
        a.d(t, "c", function() {
            return n
        }), a.d(t, "e", function() {
            return r
        }), a.d(t, "d", function() {
            return o
        }), a.d(t, "i", function() {
            return l
        }), a.d(t, "g", function() {
            return c
        }), a.d(t, "j", function() {
            return i
        }), a.d(t, "f", function() {
            return s
        }), a.d(t, "b", function() {
            return u
        }), a.d(t, "h", function() {
            return g
        }), a.d(t, "k", function() {
            return d
        }), a.d(t, "a", function() {
            return m
        });
        var n = "LOGIN_USER",
            r = "REGISTER_USER",
            o = "LOGOUT_USER",
            l = "UPDATE_USER_INFO",
            c = "SEND_OTP",
            i = "VERIFY_OTP",
            s = "RUNNING_ORDER",
            u = "GET_WALLET_TRANSACTIONS",
            g = "SEND_PASSWORD_RESET_EMAIL",
            d = "VERIFY_PASSWORD_RESET_OTP",
            m = "CHANGE_USER_PASSWORD"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        }), a.d(t, "b", function() {
            return r
        });
        var n = "GET_ALERTS",
            r = "SET_ALERT_UNREAD_TOTAL"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "b", function() {
            return n
        }), a.d(t, "c", function() {
            return r
        }), a.d(t, "d", function() {
            return o
        }), a.d(t, "f", function() {
            return l
        }), a.d(t, "e", function() {
            return c
        }), a.d(t, "h", function() {
            return i
        }), a.d(t, "g", function() {
            return s
        }), a.d(t, "a", function() {
            return u
        });
        var n = "GET_RESTAURANT_INFO",
            r = "GET_RESTAURANT_INFO_BY_ID",
            o = "GET_RESTAURANT_ITEMS",
            l = "RESET_ITEMS",
            c = "RESET_INFO",
            i = "SINGLE_ITEM",
            s = "SEARCH_ITEM",
            u = "CLEAR_SEARCH"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return c
        }), a.d(t, "b", function() {
            return i
        });
        var n = a(28),
            r = a(10),
            o = a.n(r),
            l = a(11),
            c = function() {
                return function(e) {
                    o.a.post(l.l).then(function(t) {
                        var a = t.data;
                        return e({
                            type: n.a,
                            payload: a
                        })
                    }).catch(function(e) {
                        console.log(e)
                    })
                }
            },
            i = function(e) {
                return function(t) {
                    o.a.post(l.G, {
                        id: e
                    }).then(function(e) {
                        var a = e.data;
                        return t({
                            type: n.b,
                            payload: a
                        })
                    }).catch(function(e) {
                        console.log(e)
                    })
                }
            }
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return c
        });
        var n = a(46),
            r = a(11),
            o = a(10),
            l = a.n(o),
            c = function() {
                return function(e) {
                    l.a.post(r.D).then(function(t) {
                        var a = t.data;
                        return e({
                            type: n.a,
                            payload: a
                        })
                    }).catch(function(e) {
                        console.log(e)
                    })
                }
            }
    }, , , , function(e, t, a) {
        "use strict";
        var n = a(3),
            r = a(4),
            o = a(6),
            l = a(5),
            c = a(7),
            i = a(0),
            s = a.n(i),
            u = a(43),
            g = function(e) {
                function t() {
                    return Object(n.a)(this, t), Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
                }
                return Object(c.a)(t, e), Object(r.a)(t, [{
                    key: "render",
                    value: function() {
                        return s.a.createElement(s.a.Fragment, null, s.a.createElement(u.Helmet, null, s.a.createElement("title", null, this.props.seotitle), s.a.createElement("meta", {
                            name: "description",
                            content: this.props.seodescription
                        }), s.a.createElement("meta", {
                            property: "og:type",
                            content: this.props.ogtype
                        }), s.a.createElement("meta", {
                            property: "og:title",
                            content: this.props.ogtitle
                        }), s.a.createElement("meta", {
                            property: "og:description",
                            content: this.props.ogdescription
                        }), s.a.createElement("meta", {
                            property: "og:url",
                            content: this.props.ogurl
                        }), s.a.createElement("meta", {
                            property: "og:site_name",
                            content: localStorage.getItem("storeName")
                        }), s.a.createElement("meta", {
                            property: "og:image",
                            content: "/assets/img/social/ogimage.png"
                        }), s.a.createElement("meta", {
                            name: "twitter:card",
                            content: "summary"
                        }), s.a.createElement("meta", {
                            name: "twitter:title",
                            content: this.props.twittertitle
                        }), s.a.createElement("meta", {
                            name: "twitter:description",
                            content: this.props.twitterdescription
                        }), s.a.createElement("meta", {
                            name: "twitter:site",
                            content: "@".concat(localStorage.getItem("twitterUsername"))
                        }), s.a.createElement("meta", {
                            name: "twitter:image",
                            content: "/assets/img/social/twitterimage.png"
                        })))
                    }
                }]), t
            }(i.Component);
        t.a = g
    }, , , function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        }), a.d(t, "b", function() {
            return r
        });
        var n = "GET_ALL_LANGUAGES",
            r = "GET_SINGLE_LANGUAGE_DATA"
    }, , function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return g
        });
        var n = a(3),
            r = a(4),
            o = a(6),
            l = a(5),
            c = a(7),
            i = a(128),
            s = a(0),
            u = a.n(s),
            g = function(e) {
                function t(e) {
                    var a;
                    return Object(n.a)(this, t), (a = Object(o.a)(this, Object(l.a)(t).call(this, e))).handleClick = function(e) {
                        var t = a.props,
                            n = t.replace,
                            r = t.to,
                            o = t.delay,
                            l = t.onDelayStart,
                            c = t.onDelayEnd,
                            i = a.context.router.history;
                        a.props.clickAction && a.props.clickAction(), l(e, r), e.defaultPrevented || (e.preventDefault(), a.timeout = setTimeout(function() {
                            n ? i.replace(r) : i.push(r), c(e, r)
                        }, o))
                    }, a.timeout = null, a
                }
                return Object(c.a)(t, e), Object(r.a)(t, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.timeout && clearTimeout(this.timeout)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = Object.assign({}, this.props);
                        return delete e.delay, delete e.onDelayStart, delete e.onDelayEnd, delete e.clickAction, u.a.createElement(i.a, Object.assign({}, e, {
                            onClick: this.handleClick
                        }))
                    }
                }]), t
            }(u.a.Component);
        g.defaultProps = {
            delay: 0,
            onDelayStart: function() {},
            onDelayEnd: function() {}
        }, g.contextTypes = i.a.contextTypes
    }, , , function(e, t, a) {
        "use strict";
        a.d(t, "b", function() {
            return n
        }), a.d(t, "c", function() {
            return r
        }), a.d(t, "a", function() {
            return o
        }), a.d(t, "d", function() {
            return l
        });
        var n = "GET_ADDRESSES",
            r = "SAVE_ADDRESS",
            o = "DELETE_ADDRESS",
            l = "SET_DEFAULT"
    }, , function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        }), a.d(t, "b", function() {
            return r
        }), a.d(t, "d", function() {
            return o
        }), a.d(t, "c", function() {
            return l
        });
        var n = "LOGIN_DELIVERY_USER",
            r = "LOGOUT_DELIVERY_USER",
            o = "UPDATE_DELIVERY_USER_INFO",
            l = "UPDATE_DELIVERY_ORDER_HISTORY"
    }, , , , , , , function(e, t, a) {
        "use strict";
        a.d(t, "b", function() {
            return n
        }), a.d(t, "a", function() {
            return r
        }), a.d(t, "c", function() {
            return o
        });
        var n = "LOAD_CART",
            r = "ADD_PRODUCT",
            o = "REMOVE_PRODUCT"
    }, , function(e, t, a) {
        "use strict";
        var n = a(3),
            r = a(4),
            o = a(6),
            l = a(5),
            c = a(7),
            i = a(0),
            s = a.n(i),
            u = a(29),
            g = a(26),
            d = a.n(g),
            m = a(226),
            p = a(15),
            f = a.n(p),
            h = function(e) {
                function t() {
                    return Object(n.a)(this, t), Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
                }
                return Object(c.a)(t, e), Object(r.a)(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.slides,
                            a = e.size,
                            n = e.secondarySlider;
                        return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                            className: n ? "slider-wrapper secondary-slider-wrapper my-20" : "slider-wrapper bg-light py-20 my-0"
                        }, 0 === t.length ? s.a.createElement(u.a, {
                            height: 170,
                            width: 400,
                            speed: 1.2,
                            primaryColor: "#f3f3f3",
                            secondaryColor: "#ecebeb"
                        }, s.a.createElement("rect", {
                            x: "20",
                            y: "0",
                            rx: "4",
                            ry: "4",
                            width: "168",
                            height: "168"
                        }), s.a.createElement("rect", {
                            x: "228",
                            y: "0",
                            rx: "4",
                            ry: "4",
                            width: "168",
                            height: "168"
                        })) : t.map(function(e) {
                            return 0 === e.url.indexOf("http://") || 0 === e.url.indexOf("https://") ? s.a.createElement("a", {
                                href: e.url,
                                className: "slider-wrapper__img-wrapper",
                                key: e.id,
                                style: {
                                    position: "relative"
                                }
                            }, s.a.createElement(d.a, null, s.a.createElement("img", {
                                src: e.image,
                                alt: e.name,
                                className: "slider-wrapper__img slider-cust-img ".concat(!n && "slider-wrapper__img-shadow", " "),
                                style: {
                                    height: 2.4 * a + "rem",
                                    width: 2.4 * a + "rem"
                                }
                            })), s.a.createElement(f.a, {
                                duration: "500",
                                hasTouch: !0
                            })) : s.a.createElement(m.a, {
                                to: "../" + e.url,
                                className: "slider-wrapper__img-wrapper",
                                key: e.id,
                                style: {
                                    position: "relative"
                                }
                            }, s.a.createElement(d.a, null, s.a.createElement("img", {
                                src: e.image,
                                alt: e.name,
                                className: "slider-wrapper__img slider-cust-img ".concat(!n && "slider-wrapper__img-shadow", " "),
                                style: {
                                    height: 2.4 * a + "rem",
                                    width: 2.4 * a + "rem"
                                }
                            })), s.a.createElement(f.a, {
                                duration: "500",
                                hasTouch: !0
                            }))
                        })))
                    }
                }]), t
            }(i.Component);
        t.a = h
    }, function(e, t, a) {
        "use strict";
        a.d(t, "b", function() {
            return n
        }), a.d(t, "c", function() {
            return r
        }), a.d(t, "a", function() {
            return o
        });
        var n = "GET_PAGES",
            r = "GET_SINGLE_PAGE",
            o = "CLEAR_SINGLE_PAGE"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = "GET_SETTINGS"
    }, , , , function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = "NOTIFICATION_TOKEN"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        }), a.d(t, "b", function() {
            return r
        }), a.d(t, "c", function() {
            return o
        });
        var n = "CHECK_RESTAURANT_OPERATION_SERVICE",
            r = "GET_RESTAURANTS_BASED_ON_CATEGORY",
            o = "GET_RESTAURANTS_CATEGORIES"
    }, , , , , function(e, t, a) {
        "use strict";
        a.d(t, "b", function() {
            return n
        }), a.d(t, "a", function() {
            return r
        });
        var n = "SEND_DELIVERY_GUY_GPS_LOCATION",
            r = "GET_DELIVERY_GUY_GPS_LOCATION"
    }, , , function(e, t, a) {
        "use strict";
        a(142);
        var n, r = a(27);
        r.messaging.isSupported() && (null !== localStorage.getItem("firebasePublic") || null !== localStorage.getItem("firebaseSenderId") ? (n = r.initializeApp({
            messagingSenderId: localStorage.getItem("firebaseSenderId")
        }).messaging()).usePublicVapidKey(localStorage.getItem("firebasePublic")) : (n = r.initializeApp({
            messagingSenderId: "587656068333"
        }).messaging()).usePublicVapidKey("BH5L8XrGsNpki5uF1008FbZzgKKZN-NmhOwdWL5Lxh5r3nsgZ6N_Dged1IYXXCCJwpnrXzs52G_v3vM_naO0hxY"));
        t.a = n
    }, function(e, t, a) {
        "use strict";
        a.d(t, "b", function() {
            return n
        }), a.d(t, "a", function() {
            return r
        });
        var n = "SEARCH_RESTAURANTS",
            r = "CLEAR_SEARCH"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "b", function() {
            return n
        }), a.d(t, "a", function() {
            return r
        });
        var n = "GET_ORDERS",
            r = "CANCEL_ORDER"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        }), a.d(t, "b", function() {
            return r
        });
        var n = "ADD_RATING_FOR_ORDER",
            r = "GET_RATABLE_ORDER_DETAILS"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        }), a.d(t, "c", function() {
            return r
        }), a.d(t, "b", function() {
            return o
        });
        var n = "ACCEPT_TO_DELIVER",
            r = "PICKEDUP_ORDER",
            o = "DELIVER_ORDER"
    }, , , , , function(e, t, a) {
        "use strict";
        var n = a(3),
            r = a(4),
            o = a(6),
            l = a(5),
            c = a(7),
            i = a(0),
            s = a.n(i),
            u = a(226),
            g = a(14),
            d = function(e) {
                function t() {
                    var e, a;
                    Object(n.a)(this, t);
                    for (var r = arguments.length, c = new Array(r), i = 0; i < r; i++) c[i] = arguments[i];
                    return (a = Object(o.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(c)))).state = {
                        active_nearme: !1,
                        active_explore: !1,
                        active_cart: !1,
                        active_account: !1,
                        active_alerts: !1,
                        unread_alerts_count: null
                    }, a
                }
                return Object(c.a)(t, e), Object(r.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        !0 === this.props.active_nearme && this.setState({
                            active_nearme: !0
                        }), !0 === this.props.active_explore && this.setState({
                            active_explore: !0
                        }), !0 === this.props.active_cart && this.setState({
                            active_cart: !0
                        }), !0 === this.props.active_account && this.setState({
                            active_account: !0
                        }), !0 === this.props.active_alerts && this.setState({
                            active_alerts: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.cartTotal,
                            a = e.alertUnreadTotal;
                        return s.a.createElement(s.a.Fragment, null, s.a.createElement("p", null, this.state.active), s.a.createElement("div", {
                            className: "content pt-10 py-5 font-size-xs clearfix footer-fixed"
                        }, s.a.createElement(u.a, {
                            to: "/",
                            className: "col footer-links px-2 py-1"
                        }, s.a.createElement("i", {
                            className: "si si-home fa-2x"
                        }), " ", s.a.createElement("br", null), s.a.createElement("span", {
                            className: this.state.active_nearme ? "active-footer-tab" : ""
                        }, this.state.active_nearme ? localStorage.getItem("footerNearme") : s.a.createElement("span", null, " ", localStorage.getItem("footerNearme")))), s.a.createElement(u.a, {
                            to: "/alerts",
                            className: "col footer-links px-2 py-1"
                        }, s.a.createElement("span", {
                            className: "cart-quantity-badge",
                            style: {
                                backgroundColor: localStorage.getItem("storeColor")
                            }
                        }, a), s.a.createElement("i", {
                            className: "si si-bell fa-2x"
                        }), " ", s.a.createElement("br", null), s.a.createElement("span", {
                            className: this.state.active_alerts ? "active-footer-tab" : ""
                        }, this.state.active_alerts ? localStorage.getItem("footerAlerts") : s.a.createElement("span", null, " ", localStorage.getItem("footerAlerts")))), s.a.createElement(u.a, {
                            to: "/explore",
                            className: "col footer-links px-2 py-1"
                        }, s.a.createElement("i", {
                            className: "si si-magnifier fa-2x"
                        }), " ", s.a.createElement("br", null), s.a.createElement("span", {
                            className: this.state.active_explore ? "active-footer-tab" : ""
                        }, (this.state.active_explore, localStorage.getItem("footerExplore")))), s.a.createElement(u.a, {
                            to: "/cart",
                            className: "col footer-links px-2 py-1"
                        }, s.a.createElement("i", {
                            className: "si si-bag fa-2x"
                        }), " ", s.a.createElement("br", null), s.a.createElement("span", {
                            className: this.state.active_cart ? "active-footer-tab" : ""
                        }, (this.state.active_cart, localStorage.getItem("footerCart")), s.a.createElement("span", {
                            className: "cart-quantity-badge",
                            style: {
                                backgroundColor: localStorage.getItem("storeColor")
                            }
                        }, t.productQuantity))), s.a.createElement(u.a, {
                            to: "/my-account",
                            className: "col footer-links px-2 py-1"
                        }, s.a.createElement("i", {
                            className: "si si-user fa-2x"
                        }), " ", s.a.createElement("br", null), s.a.createElement("span", {
                            className: this.state.active_account ? "active-footer-tab" : ""
                        }, (this.state.active_account, localStorage.getItem("footerAccount"))))))
                    }
                }]), t
            }(i.Component);
        t.a = Object(g.b)(function(e) {
            return {
                cartTotal: e.total.data,
                alertUnreadTotal: e.alert.alertUnreadTotal
            }
        }, {})(d)
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = "UPDATE_CART"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = "PLACE_ORDER"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = "CONFIRM_CART"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = "GET_SINGLE_DELIVERY_ORDER"
    }, function(e, t, a) {
        "use strict";
        var n = a(3),
            r = a(4),
            o = a(6),
            l = a(5),
            c = a(7),
            i = a(0),
            s = a.n(i),
            u = function(e) {
                function t() {
                    return Object(n.a)(this, t), Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
                }
                return Object(c.a)(t, e), Object(r.a)(t, [{
                    key: "render",
                    value: function() {
                        return s.a.createElement(s.a.Fragment, null, s.a.createElement("footer", {
                            className: "desktop-footer bg-white opacity-1"
                        }, s.a.createElement("div", {
                            className: "container"
                        }, s.a.createElement("div", {
                            className: "content content-full"
                        }, s.a.createElement("div", {
                            className: "row items-push-2x mt-30",
                            style: {
                                marginLeft: "25rem"
                            }
                        }, s.a.createElement("div", {
                            className: "col-md-6"
                        }, s.a.createElement("img", {
                            src: "/assets/img/logos/logo.png",
                            alt: localStorage.getItem("storeName"),
                            className: "footer-logo mb-20"
                        }), s.a.createElement("div", {
                            className: "font-size-sm mb-30",
                            dangerouslySetInnerHTML: {
                                __html: localStorage.getItem("desktopFooterAddress")
                            }
                        })), s.a.createElement("div", {
                            className: "col-md-6"
                        }, s.a.createElement("h3", {
                            className: "h5 font-w700"
                        }, localStorage.getItem("desktopFooterSocialHeader")), "null" !== localStorage.getItem("desktopSocialFacebookLink") && s.a.createElement("a", {
                            href: localStorage.getItem("desktopSocialFacebookLink"),
                            className: "btn btn-sm btn-rounded btn-alt-secondary mr-10",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, s.a.createElement("i", {
                            className: "fa fa-fw fa-facebook"
                        })), "null" !== localStorage.getItem("desktopSocialGoogleLink") && s.a.createElement("a", {
                            href: localStorage.getItem("desktopSocialGoogleLink"),
                            className: "btn btn-sm btn-rounded btn-alt-secondary mr-10",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, s.a.createElement("i", {
                            className: "fa fa-fw fa-google-plus"
                        })), "null" !== localStorage.getItem("desktopSocialYoutubeLink") && s.a.createElement("a", {
                            href: localStorage.getItem("desktopSocialYoutubeLink"),
                            className: "btn btn-sm btn-rounded btn-alt-secondary mr-10",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, s.a.createElement("i", {
                            className: "fa fa-fw fa-youtube-play"
                        })), "null" !== localStorage.getItem("desktopSocialInstagramLink") && s.a.createElement("a", {
                            href: localStorage.getItem("desktopSocialInstagramLink"),
                            className: "btn btn-sm btn-rounded btn-alt-secondary mr-10",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, s.a.createElement("i", {
                            className: "fa fa-fw fa-instagram"
                        })), this.props.languages && this.props.languages.length > 1 && s.a.createElement("div", {
                            className: "mt-4 d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "mr-2"
                        }, localStorage.getItem("changeLanguageText")), s.a.createElement("select", {
                            onChange: this.props.handleOnChange,
                            defaultValue: localStorage.getItem("userPreferedLanguage") ? localStorage.getItem("userPreferedLanguage") : this.props.languages.filter(function(e) {
                                return 1 === e.is_default
                            })[0].id,
                            className: "form-control language-select"
                        }, this.props.languages.map(function(e) {
                            return s.a.createElement("option", {
                                value: e.id,
                                key: e.id
                            }, e.language_name)
                        })))))))))
                    }
                }]), t
            }(i.Component);
        t.a = u
    }, , , , , , , , function(e, t, a) {
        "use strict";
        var n = a(3),
            r = a(4),
            o = a(6),
            l = a(5),
            c = a(7),
            i = a(0),
            s = a.n(i),
            u = a(15),
            g = a.n(u),
            d = function(e) {
                function t() {
                    return Object(n.a)(this, t), Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
                }
                return Object(c.a)(t, e), Object(r.a)(t, [{
                    key: "render",
                    value: function() {
                        var e = this;
                        return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                            className: "col-12 p-0 sticky-top"
                        }, s.a.createElement("div", {
                            className: "block m-0"
                        }, s.a.createElement("div", {
                            className: "block-content p-0"
                        }, s.a.createElement("div", {
                            className: "input-group search-box"
                        }, !this.props.disable_back_button && s.a.createElement("div", {
                            className: "input-group-prepend"
                        }, s.a.createElement("button", {
                            type: "button",
                            className: "btn search-navs-btns",
                            style: {
                                position: "relative"
                            }
                        }, s.a.createElement("i", {
                            className: "si si-arrow-left"
                        }), s.a.createElement(g.a, {
                            duration: "500"
                        }))), s.a.createElement("p", {
                            className: "form-control search-input",
                            style: {
                                        background: "#B33333",
                                        "text-align": "center"
                                    },
                        }, this.props.logo && s.a.createElement("img", {
                            src: "/assets/img/logos/".concat(localStorage.getItem("storeLogo")),
                            alt: localStorage.getItem("storeName"),
                            className: "store-logo"
                        })), s.a.createElement("div", {
                            className: "input-group-append",
                            style: {
                                display: "none"
                            }
                        }, s.a.createElement("button", {
                            type: "submit",
                            className: "btn nav-location truncate-text", 
                            style: {
                                position: "relative",
                                background: "#B33333",
                                color: "white",
                                maxWidth: window.innerWidth - 130
                            },
                            onClick: function() {
                                e.props.loggedin ? e.context.router.history.push("/my-addresses") : e.context.router.history.push("/search-location")
                            }
                        }, localStorage.getItem("userSetAddress") && s.a.createElement(s.a.Fragment, null, s.a.createElement("span", null, null !== JSON.parse(localStorage.getItem("userSetAddress")).tag ? s.a.createElement("strong", {
                            className: "text-uppercase mr-1"
                        }, JSON.parse(localStorage.getItem("userSetAddress")).tag) : null, null !== JSON.parse(localStorage.getItem("userSetAddress")).house ? s.a.createElement("span", null, JSON.parse(localStorage.getItem("userSetAddress")).house.length > 18 ? "".concat(JSON.parse(localStorage.getItem("userSetAddress")).house.substring(0, 18), "...") : JSON.parse(localStorage.getItem("userSetAddress")).house) : s.a.createElement("span", null, JSON.parse(localStorage.getItem("userSetAddress")).address.length > 25 ? "".concat(JSON.parse(localStorage.getItem("userSetAddress")).address.substring(0, 25), "...") : JSON.parse(localStorage.getItem("userSetAddress")).address))), s.a.createElement("i", {
                            className: "si si-arrow-right nav-location-icon ml-1",
                            style: {
                                color: localStorage.getItem("storeColor")
                            }
                        }), s.a.createElement(g.a, {
                            duration: "500"
                        }))))))))
                    }
                }]), t
            }(i.Component);
        d.contextTypes = {
            router: function() {
                return null
            }
        }, t.a = d
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return c
        });
        var n = a(50),
            r = a(11),
            o = a(10),
            l = a.n(o),
            c = function(e, t, a) {
                return function(o) {
                    l.a.post(r.O, {
                        push_token: e,
                        user_id: t,
                        token: a
                    }).then(function(e) {
                        var t = e.data;
                        return o({
                            type: n.a,
                            payload: t
                        })
                    }).catch(function(e) {
                        console.log(e)
                    })
                }
            }
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return c
        }), a.d(t, "b", function() {
            return i
        }), a.d(t, "c", function() {
            return s
        });
        var n = a(18),
            r = a(11),
            o = a(10),
            l = a.n(o),
            c = function(e, t) {
                return function(a) {
                    l.a.post(r.k, {
                        user_id: e,
                        token: t
                    }).then(function(e) {
                        var t = e.data,
                            r = t.filter(function(e) {
                                return 0 === e.is_read
                            }).length;
                        return [a({
                            type: n.a,
                            payload: t
                        }), a({
                            type: n.b,
                            payload: r
                        })]
                    }).catch(function(e) {
                        console.log(e)
                    })
                }
            },
            i = function(e, t) {
                return function(a) {
                    l.a.post(r.M, {
                        user_id: e,
                        token: t
                    }).then(function(e) {
                        var t = e.data,
                            r = t.filter(function(e) {
                                return 0 === e.is_read
                            }).length;
                        return [a({
                            type: n.a,
                            payload: t
                        }), a({
                            type: n.b,
                            payload: r
                        })]
                    }).catch(function(e) {
                        console.log(e)
                    })
                }
            },
            s = function(e, t, a) {
                return function(o) {
                    return l.a.post(r.N, {
                        user_id: e,
                        notification_id: t,
                        token: a
                    }).then(function(e) {
                        var t = e.data,
                            a = t.filter(function(e) {
                                return 0 === e.is_read
                            }).length;
                        return [o({
                            type: n.a,
                            payload: t
                        }), o({
                            type: n.b,
                            payload: a
                        })]
                    }).catch(function(e) {
                        console.log(e)
                    })
                }
            }
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = "GET_POPULAR_LOCATIONS"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = "APPLY_COUPON"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = "GET_PAYMENT_GATEWAYS"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = "GET_DELIVERY_ORDERS"
    }, , , , , , , , function(e, t, a) {
        e.exports = a(141)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(246),
            r = a(130),
            o = a(252),
            l = a(3),
            c = a(4),
            i = a(6),
            s = a(5),
            u = a(7),
            g = a(0),
            d = a.n(g),
            m = a(73),
            p = function(e) {
                function t() {
                    var e, a;
                    Object(l.a)(this, t);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).__useApp = function() {
                        a.refs.phoneView && a.refs.phoneView.classList.remove("blured"), a.refs.phone && a.refs.phone.classList.add("phone-use")
                    }, a
                }
                return Object(u.a)(t, e), Object(c.a)(t, [{
                    key: "render",
                    value: function() {
                        return d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
                            className: "container-fluid p-0 main-container-desktop"
                        }, d.a.createElement("div", {
                            className: "container"
                        }, d.a.createElement("div", {
                            className: "row"
                        }, d.a.createElement("div", {
                            className: "col-md-6"
                        }, d.a.createElement("div", {
                            className: "col-md-12 left-col"
                        }, d.a.createElement("img", {
                            src: "/assets/img/logos/logo.png",
                            alt: localStorage.getItem("storeName"),
                            className: "desktop-logo"
                        }), d.a.createElement("h1", {
                            className: "desktop-title"
                        }, localStorage.getItem("desktopHeading")), d.a.createElement("h3", {
                            className: "desktop-subtitle",
                            dangerouslySetInnerHTML: {
                                __html: localStorage.getItem("desktopSubHeading")
                            }
                        }), d.a.createElement("div", {
                            className: "btn-unblur",
                            onClick: this.__useApp,
                            style: {
                                backgroundColor: localStorage.getItem("storeColor")
                            }
                        },localStorage.getItem("desktopUseAppButton")), d.a.createElement("a", {
                            href: '/public',
                            className: "btn-unblur",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                padding: "10px"
                            }
                        },'Cadastro de loja ou motoboy'))), d.a.createElement("div", {
                            className: "col-md-6 mt-50"
                        }, d.a.createElement("div", {
                            className: "col-md-12 blured",
                            ref: "phoneView"
                        }, d.a.createElement("div", {
                            className: "phone",
                            ref: "phone"
                        }, d.a.createElement("div", {
                            className: "notch"
                        }), d.a.createElement("div", {
                            className: "iframe-wrapper"
                        }, d.a.createElement("iframe", {
                            title: "appIframe",
                            src: window.location,
                            frameBorder: "0",
                            id: "appIframe"
                        })))))))))
                    }
                }]), t
            }(g.Component),
            f = a(25),
            h = a(32),
            S = a.n(h),
            E = a(54),
            v = a.n(E),
            b = a(38),
            y = a.n(b),
            _ = function(e) {
                function t() {
                    return Object(l.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                }
                return Object(u.a)(t, e), Object(c.a)(t, [{
                    key: "render",
                    value: function() {
                        return d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
                            className: "container-fluid",
                            style: {
                                backgroundColor: "#FBFBFD"
                            }
                        }, d.a.createElement("div", {
                            className: "container"
                        }, d.a.createElement("div", {
                            className: "row"
                        }, d.a.createElement(S.a, {
                            left: !0
                        }, d.a.createElement("div", {
                            className: "col-xl-3 d-table mt-50 mb-50"
                        }, d.a.createElement(y.a, {
                            className: "Tilt",
                            options: {
                                max: 40,
                                perspective: 650
                            }
                        }, d.a.createElement("div", {
                            className: "col-xl-12 text-center d-table-cell align-middle store-achievement"
                        }, "null" !== localStorage.getItem("desktopAchievementOneTitle") && d.a.createElement("h3", null, localStorage.getItem("desktopAchievementOneTitle")), "null" !== localStorage.getItem("desktopAchievementOneSub") && d.a.createElement("h4", {
                            className: "m-0"
                        }, localStorage.getItem("desktopAchievementOneSub")))))), d.a.createElement(v.a, {
                            top: !0
                        }, d.a.createElement("div", {
                            className: "col-xl-3 d-table mt-50 mb-50"
                        }, d.a.createElement(y.a, {
                            className: "Tilt",
                            options: {
                                max: 40,
                                perspective: 650
                            }
                        }, d.a.createElement("div", {
                            className: "col-xl-12 text-center d-table-cell align-middle store-achievement"
                        }, "null" !== localStorage.getItem("desktopAchievementTwoTitle") && d.a.createElement("h3", null, localStorage.getItem("desktopAchievementTwoTitle")), "null" !== localStorage.getItem("desktopAchievementTwoSub") && d.a.createElement("h4", {
                            className: "m-0"
                        }, localStorage.getItem("desktopAchievementTwoSub")))))), d.a.createElement(v.a, {
                            bottom: !0
                        }, d.a.createElement("div", {
                            className: "col-xl-3 d-table mt-50 mb-50"
                        }, d.a.createElement(y.a, {
                            className: "Tilt",
                            options: {
                                max: 40,
                                perspective: 650
                            }
                        }, d.a.createElement("div", {
                            className: "col-xl-12 text-center d-table-cell align-middle store-achievement"
                        }, "null" !== localStorage.getItem("desktopAchievementThreeTitle") && d.a.createElement("h3", null, localStorage.getItem("desktopAchievementThreeTitle")), "null" !== localStorage.getItem("desktopAchievementThreeSub") && d.a.createElement("h4", {
                            className: "m-0"
                        }, localStorage.getItem("desktopAchievementThreeSub")))))), d.a.createElement(S.a, {
                            right: !0
                        }, d.a.createElement("div", {
                            className: "col-xl-3 d-table mt-50 mb-50"
                        }, d.a.createElement(y.a, {
                            className: "Tilt",
                            options: {
                                max: 40,
                                perspective: 650
                            }
                        }, d.a.createElement("div", {
                            className: "col-xl-12 text-center d-table-cell align-middle store-achievement"
                        }, "null" !== localStorage.getItem("desktopAchievementFourTitle") && d.a.createElement("h3", null, localStorage.getItem("desktopAchievementFourTitle")), "null" !== localStorage.getItem("desktopAchievementFourSub") && d.a.createElement("h4", {
                            className: "m-0"
                        }, localStorage.getItem("desktopAchievementFourSub"))))))))))
                    }
                }]), t
            }(g.Component),
            I = a(14),
            O = a(21),
            w = a(20),
            N = function(e) {
                function t() {
                    var e, a;
                    Object(l.a)(this, t);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).state = {
                        showGdpr: !1
                    }, a.handleGdprClick = function() {
                        localStorage.setItem("gdprAccepted", "true"), a.setState({
                            showGdpr: !1
                        })
                    }, a.handleOnChange = function(e) {
                        a.props.getSingleLanguageData(e.target.value), localStorage.setItem("userPreferedLanguage", e.target.value)
                    }, a
                }
                return Object(u.a)(t, e), Object(c.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        localStorage.getItem("storeColor") || this.props.getSettings(), localStorage.getItem("gdprAccepted") || (localStorage.setItem("gdprAccepted", "false"), "true" === localStorage.getItem("showGdpr") && this.setState({
                            showGdpr: !0
                        })), "true" === localStorage.getItem("showGdpr") && "false" === localStorage.getItem("gdprAccepted") && this.setState({
                            showGdpr: !0
                        })
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        if (this.props.languages !== e.languages)
                            if (localStorage.getItem("userPreferedLanguage")) this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));
                            else if (e.languages.length) {
                            var t = e.languages.filter(function(e) {
                                return 1 === e.is_default
                            })[0].id;
                            this.props.getSingleLanguageData(t)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return d.a.createElement(d.a.Fragment, null, this.state.showGdpr && d.a.createElement("div", {
                            className: "fixed-gdpr"
                        }, d.a.createElement("span", {
                            dangerouslySetInnerHTML: {
                                __html: localStorage.getItem("gdprMessage")
                            }
                        }), d.a.createElement("span", null, d.a.createElement("button", {
                            className: "btn btn-sm ml-2",
                            style: {
                                backgroundColor: localStorage.getItem("storeColor")
                            },
                            onClick: this.handleGdprClick
                        }, localStorage.getItem("gdprConfirmButton")))), d.a.createElement(f.a, {
                            seotitle: localStorage.getItem("seoMetaTitle"),
                            seodescription: localStorage.getItem("seoMetaDescription"),
                            ogtype: "website",
                            ogtitle: localStorage.getItem("seoOgTitle"),
                            ogdescription: localStorage.getItem("seoOgDescription"),
                            ogurl: window.location.href,
                            twittertitle: localStorage.getItem("seoTwitterTitle"),
                            twitterdescription: localStorage.getItem("seoTwitterDescription")
                        }), d.a.createElement(p, null), d.a.createElement(_, null), d.a.createElement(m.a, {
                            languages: this.props.languages,
                            handleOnChange: this.handleOnChange
                        }))
                    }
                }]), t
            }(g.Component),
            k = Object(I.b)(function(e) {
                return {
                    settings: e.settings.settings,
                    languages: e.languages.languages,
                    language: e.languages.language
                }
            }, {
                getSettings: O.a,
                getSingleLanguageData: w.b
            })(N),
            T = a(30),
            j = a(15),
            x = a.n(j),
            A = a(226),
            C = a(89),
            P = a.n(C),
            R = a(253),
            D = function(e) {
                function t() {
                    var e, a;
                    Object(l.a)(this, t);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).removeSplashScreen = function() {
                        document.getElementById("firstScreenSplash") && document.getElementById("firstScreenSplash").remove(), document.getElementById("firstScreenMain") && document.getElementById("firstScreenMain").classList.remove("hidden")
                    }, a.handleOnChange = function(e) {
                        a.props.getSingleLanguageData(e.target.value), localStorage.setItem("userPreferedLanguage", e.target.value)
                    }, a
                }
                return Object(u.a)(t, e), Object(c.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        localStorage.getItem("storeColor") || this.props.getSettings(), localStorage.getItem("storeColor") && setTimeout(function() {
                            e.removeSplashScreen()
                        }, 1e3)
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        var t = this;
                        if (this.props.settings !== e.settings && setTimeout(function() {
                                t.removeSplashScreen()
                            }, 2e3), this.props.languages !== e.languages)
                            if (localStorage.getItem("userPreferedLanguage")) this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));
                            else if (e.languages.length) {
                            var a = e.languages.filter(function(e) {
                                return 1 === e.is_default
                            })[0].id;
                            this.props.getSingleLanguageData(a)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.user;
                        return null !== localStorage.getItem("userSetAddress") ? d.a.createElement(R.a, {
                            to: "/restaurants"
                        }) : d.a.createElement(d.a.Fragment, null, d.a.createElement(f.a, {
                            seotitle: localStorage.getItem("seoMetaTitle"),
                            seodescription: localStorage.getItem("seoMetaDescription"),
                            ogtype: "website",
                            ogtitle: localStorage.getItem("seoOgTitle"),
                            ogdescription: localStorage.getItem("seoOgDescription"),
                            ogurl: window.location.href,
                            twittertitle: localStorage.getItem("seoTwitterTitle"),
                            twitterdescription: localStorage.getItem("seoTwitterDescription")
                        }), d.a.createElement("div", null, d.a.createElement("div", {
                            className: "col-12 p-0",
                            id: "firstScreenSplash"
                        }, d.a.createElement("div", {
                            className: "block m-0"
                        }, d.a.createElement("div", {
                            className: "block-content p-0"
                        }, d.a.createElement("img", {
                            src: "/assets/img/splash/splash.jpg",
                            className: "img-fluid",
                            alt: localStorage.getItem("storeName"),
                            style: {
                                width: "100%"
                            }
                        })))), d.a.createElement("div", {
                            className: "col-12 p-0 hidden",
                            id: "firstScreenMain",
                            style: {
                                height: "".concat(window.innerHeight, "px")
                            }
                        }, d.a.createElement("div", {
                            className: "block m-0 "
                        }, d.a.createElement("div", {
                            className: "block-content p-0"
                        }, localStorage.getItem("firstScreenHeroImage") && d.a.createElement(P.a, {
                            delay: 100,
                            src: localStorage.getItem("firstScreenHeroImage"),
                            placeholder: localStorage.getItem("firstScreenHeroImageSm")
                        }, function(e, t) {
                            return d.a.createElement("img", {
                                src: e,
                                alt: localStorage.getItem("storeName"),
                                className: "img-fluid",
                                style: {
                                    filter: t ? "blur(1.2px) brightness(0.9)" : "none",
                                    width: "".concat(window.innerWidth, "px")
                                }
                            })
                        }))), d.a.createElement("div", {
                            className: "block m-0"
                        }, d.a.createElement("div", {
                            className: "block-content pt-10"
                        }, d.a.createElement("h1", {
                            className: "welcome-heading mt-10"
                        }, localStorage.getItem("firstScreenHeading")), d.a.createElement("h2", {
                            className: "welcome-subheading text-center mt-10 mb-10"
                        }, localStorage.getItem("firstScreenSubHeading")), d.a.createElement(T.a, {
                            to: "/search-location",
                            delay: 200,
                            className: "btn btn-lg btn-setup-location",
                            style: {
                                backgroundColor: localStorage.getItem("storeColor"),
                                position: "relative"
                            }
                        }, localStorage.getItem("firstScreenSetupLocation"), d.a.createElement(x.a, {
                            duration: "500",
                            hasTouch: "true"
                        })), e.success ? d.a.createElement("p", {
                            className: "login-block font-w500 mb-0"
                        }, localStorage.getItem("firstScreenWelcomeMessage"), " ", e.data.name) : d.a.createElement("p", {
                            className: "login-block mb-0"
                        }, localStorage.getItem("firstScreenLoginText"), " ", d.a.createElement(A.a, {
                            to: "/login",
                            style: {
                                color: localStorage.getItem("storeColor")
                            }
                        }, localStorage.getItem("firstScreenLoginBtn"))), this.props.languages && this.props.languages.length > 1 && d.a.createElement("div", {
                            className: "mt-4 d-flex align-items-center justify-content-center"
                        }, d.a.createElement("div", {
                            className: "mr-2"
                        }, localStorage.getItem("changeLanguageText")), d.a.createElement("select", {
                            onChange: this.handleOnChange,
                            defaultValue: localStorage.getItem("userPreferedLanguage") ? localStorage.getItem("userPreferedLanguage") : this.props.languages.filter(function(e) {
                                return 1 === e.is_default
                            })[0].id,
                            className: "form-control language-select"
                        }, this.props.languages.map(function(e) {
                            return d.a.createElement("option", {
                                value: e.id,
                                key: e.id
                            }, e.language_name)
                        }))))))))
                    }
                }]), t
            }(g.Component),
            L = Object(I.b)(function(e) {
                return {
                    settings: e.settings.settings,
                    user: e.user.user,
                    languages: e.languages.languages,
                    language: e.languages.language
                }
            }, {
                getSettings: O.a,
                getSingleLanguageData: w.b
            })(D),
            G = a(23),
            F = a.n(G),
            U = a(34),
            V = a(27),
            M = a(68),
            W = a(81),
            Y = a(44),
            H = a(37),
            B = a(11),
            J = a(29),
            z = a(26),
            K = a.n(z),
            q = a(251),
            X = a(10),
            Z = a.n(X),
            Q = a(90),
            $ = a.n(Q),
            ee = function(e) {
                function t() {
                    var e, a;
                    Object(l.a)(this, t);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).state = {
                        total: null,
                        restaurants: [],
                        loading: !1,
                        loading_more: !0,
                        selfpickup: !1,
                        userPreferredSelectionDelivery: !0,
                        userPreferredSelectionSelfPickup: !1,
                        no_restaurants: !1,
                        data: [],
                        review_data: []
                    }, a.getDeliveryRestaurants = function() {
                        if (localStorage.getItem("userSetAddress") && !a.state.loading) {
                            a.setState({
                                loading: !0
                            });
                            var e = JSON.parse(localStorage.getItem("userSetAddress"));
                            Z.a.post(B.o, {
                                latitude: e.lat,
                                longitude: e.lng
                            }).then(function(e) {
                                var t = e.data;
                                t.length ? a.setState({
                                    total: t.length,
                                    restaurants: [].concat(Object(H.a)(a.state.restaurants), Object(H.a)(t)),
                                    loading: !1,
                                    loading_more: !1,
                                    no_restaurants: !1
                                }) : a.setState({
                                    total: null,
                                    loading: !1,
                                    loading_more: !1,
                                    no_restaurants: !0
                                })
                            })
                        }
                    }, a.getSelfPickupRestaurants = function() {
                        if (localStorage.getItem("userSetAddress") && !a.state.loading) {
                            a.setState({
                                loading: !0
                            });
                            var e = JSON.parse(localStorage.getItem("userSetAddress"));
                            Z.a.post(B.C, {
                                latitude: e.lat,
                                longitude: e.lng
                            }).then(function(e) {
                                var t = e.data;
                                t.length ? a.setState({
                                    total: t.length,
                                    restaurants: [].concat(Object(H.a)(a.state.restaurants), Object(H.a)(t)),
                                    loading: !1,
                                    loading_more: !1,
                                    no_restaurants: !1
                                }) : a.setState({
                                    total: null,
                                    loading: !1,
                                    loading_more: !1,
                                    no_restaurants: !0
                                })
                            })
                        }
                    }, a.filterDelivery = function() {
                        a.setState(function() {
                            return {
                                selfpickup: !1,
                                restaurants: [],
                                userPreferredSelectionDelivery: !0,
                                userPreferredSelectionSelfPickup: !1
                            }
                        }, function() {
                            a.getDeliveryRestaurants()
                        }), localStorage.setItem("userPreferredSelection", "DELIVERY"), localStorage.getItem("showPromoSlider")
                    }, a.filterSelfPickup = function() {
                        a.setState(function() {
                            return {
                                selfpickup: !0,
                                restaurants: [],
                                userPreferredSelectionSelfPickup: !0,
                                userPreferredSelectionDelivery: !1
                            }
                        }, function() {
                            a.getSelfPickupRestaurants()
                        }), localStorage.setItem("userPreferredSelection", "SELFPICKUP"), localStorage.getItem("showPromoSlider")
                    }, a.getAllRestaurantSliders = function() {
                        Z.a.post(B.y).then(function(e) {
                            e.data && a.setState({
                                data: e.data
                            })
                        })
                    }, a.changeRouteToRestaurantsCategories = function(e) {
                        e.categories_ids && new Promise(function(t) {
                            localStorage.setItem("categorySelectOptions", JSON.stringify(e.categories_ids)), t("categorySelectOptions Saved")
                        }).then(function() {
                            a.props.history.push("categories/restaurants")
                        })
                    }, a.getRatableOrdersDetails = function() {
                        var e = a.props.user;
                        e.success && Z.a.post(B.H, {
                            user_id: e.data.id,
                            token: e.data.auth_token
                        }).then(function(e) {
                            a.setState({
                                review_data: e.data
                            })
                        })
                    }, a.animateStarIcon = function() {
                        for (var e = [], t = 1; t <= 5; t++) e.push(d.a.createElement($.a, {
                            top: !0,
                            delay: 100 * t,
                            key: t
                        }, d.a.createElement("i", {
                            className: "fa fa-star pr-1",
                            style: {
                                color: localStorage.getItem("rarModHomeBannerStarsColor")
                            }
                        })));
                        return e
                    }, a
                }
                return Object(u.a)(t, e), Object(c.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.getAllRestaurantSliders(), localStorage.getItem("enRAR"), "DELIVERY" === localStorage.getItem("userPreferredSelection") && (this.setState({
                            userPreferredSelectionDelivery: !0
                        }), this.filterDelivery()), "SELFPICKUP" === localStorage.getItem("userPreferredSelection") && "true" === localStorage.getItem("enSPU") ? (this.setState({
                            userPreferredSelectionSelfPickup: !0
                        }), this.filterSelfPickup()) : (localStorage.setItem("userPreferredSelection", "DELIVERY"), localStorage.setItem("userSelected", "DELIVERY"), this.setState({
                            userPreferredSelectionDelivery: !0
                        }), this.getDeliveryRestaurants())
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
                            className: "bg-white mb-100"
                        }, 0 === this.state.restaurants.length ? d.a.createElement(J.a, {
                            height: 378,
                            width: 400,
                            speed: 1.2,
                            primaryColor: "#f3f3f3",
                            secondaryColor: "#ecebeb"
                        }, d.a.createElement("rect", {
                            x: "20",
                            y: "20",
                            rx: "4",
                            ry: "4",
                            width: "80",
                            height: "78"
                        }), d.a.createElement("rect", {
                            x: "144",
                            y: "30",
                            rx: "0",
                            ry: "0",
                            width: "115",
                            height: "18"
                        }), d.a.createElement("rect", {
                            x: "144",
                            y: "60",
                            rx: "0",
                            ry: "0",
                            width: "165",
                            height: "16"
                        }), d.a.createElement("rect", {
                            x: "20",
                            y: "145",
                            rx: "4",
                            ry: "4",
                            width: "80",
                            height: "78"
                        }), d.a.createElement("rect", {
                            x: "144",
                            y: "155",
                            rx: "0",
                            ry: "0",
                            width: "115",
                            height: "18"
                        }), d.a.createElement("rect", {
                            x: "144",
                            y: "185",
                            rx: "0",
                            ry: "0",
                            width: "165",
                            height: "16"
                        }), d.a.createElement("rect", {
                            x: "20",
                            y: "270",
                            rx: "4",
                            ry: "4",
                            width: "80",
                            height: "78"
                        }), d.a.createElement("rect", {
                            x: "144",
                            y: "280",
                            rx: "0",
                            ry: "0",
                            width: "115",
                            height: "18"
                        }), d.a.createElement("rect", {
                            x: "144",
                            y: "310",
                            rx: "0",
                            ry: "0",
                            width: "165",
                            height: "16"
                        })) : this.state.restaurants.map(function(t, a) {
                            return d.a.createElement(d.a.Fragment, {
                                key: t.id
                            }, "true" === localStorage.getItem("enRestaurantCategorySlider") && d.a.createElement(d.a.Fragment, null, a === parseInt(localStorage.getItem("restaurantCategorySliderPosition")) - 1 && d.a.createElement(d.a.Fragment, null, e.state.data.length > 0 && d.a.createElement("div", {
                                className: "slider-wrapper secondary-slider-wrapper my-20",
                            }, e.state.data.map(function(t) {
                                return d.a.createElement("div", {
                                    className: "slider-wrapper__img-wrapper",
                                    key: t.id
                                }, d.a.createElement("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    onClick: function() {
                                        e.changeRouteToRestaurantsCategories(t)
                                    }
                                }, d.a.createElement("img", {
                                    src: t.image,
                                    alt: t.name,
                                    className: "slider-wrapper__img slider-cust-img",
                                    style: {
                                        height: 2.4 * parseInt(localStorage.getItem("restaurantCategorySliderSize")) + "rem",
                                        width: 2.4 * parseInt(localStorage.getItem("restaurantCategorySliderSize")) + "rem",
                                        borderRadius: parseFloat(localStorage.getItem("restaurantCategorySliderStyle")) + "rem"
                                    }
                                }), "true" === localStorage.getItem("showRestaurantCategorySliderLabel") && d.a.createElement("span", {
                                    className: "category-slider-name"
                                }, t.name), d.a.createElement(x.a, {
                                    duration: "500",
                                    hasTouch: !0
                                })))
                            })),
                        e.state.no_restaurants && d.a.createElement("div", {
                            className: "bg-light " + ("true" === localStorage.getItem("enSPU") ? "sticky-top" : "pt-3")
                        }, "true" === localStorage.getItem("enSPU") ? d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
                            className: "px-15 py-3 d-flex justify-content-between align-items-center"
                        }, d.a.createElement("h1", {
                            className: "restaurant-count mb-0 mr-2"
                        }, localStorage.getItem("noRestaurantMessage")), d.a.createElement("div", {
                            className: "d-flex"
                        }, d.a.createElement("button", {
                            onClick: e.filterDelivery,
                            className: "btn btn-preference mr-2 " + (e.state.userPreferredSelectionDelivery ? "user-preferred" : "")
                        }, localStorage.getItem("deliveryTypeDelivery"), e.state.userPreferredSelectionDelivery && d.a.createElement("i", {
                            className: "si si-check ml-2"
                        })), d.a.createElement("button", {
                            onClick: e.filterSelfPickup,
                            className: "btn btn-preference " + (e.state.userPreferredSelectionSelfPickup ? "user-preferred" : "")
                        }, localStorage.getItem("deliveryTypeSelfPickup"), e.state.userPreferredSelectionSelfPickup && d.a.createElement("i", {
                            className: "si si-check ml-2"
                        })))), d.a.createElement("hr", null)) : d.a.createElement("h1", {
                            className: "restaurant-count mb-0 mr-2 px-15"
                        }, localStorage.getItem("noRestaurantMessage")), d.a.createElement("hr", null)), e.state.total ? d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
                            className: "bg-light " + ("true" === localStorage.getItem("enSPU") ? "sticky-top" : "pt-3")
                        }, "true" === localStorage.getItem("enSPU") && d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
                            className: "px-15 py-3 d-flex justify-content-between align-items-center"
                        }, d.a.createElement("h1", {
                            className: "restaurant-count mb-0 mr-2"
                        }, e.state.total, " ", localStorage.getItem("restaurantCountText")), d.a.createElement("div", {
                            className: "d-flex"
                        }, d.a.createElement("button", {
                            onClick: e.filterDelivery,
                            className: "btn btn-preference mr-2 " + (e.state.userPreferredSelectionDelivery ? "user-preferred" : "")
                        }, localStorage.getItem("deliveryTypeDelivery"), e.state.userPreferredSelectionDelivery && d.a.createElement("i", {
                            className: "si si-check ml-2"
                        })), d.a.createElement("button", {
                            onClick: e.filterSelfPickup,
                            className: "btn btn-preference " + (e.state.userPreferredSelectionSelfPickup ? "user-preferred" : "")
                        }, localStorage.getItem("deliveryTypeSelfPickup"), e.state.userPreferredSelectionSelfPickup && d.a.createElement("i", {
                            className: "si si-check ml-2"
                        }))))))) : null)),
                            d.a.createElement(K.a, null, d.a.createElement("div", {
                                className: "col-xs-12 col-sm-12 restaurant-block"
                            }, d.a.createElement(T.a, {
                                to: "../restaurants/" + t.slug,
                                delay: 200,
                                className: "block text-center mb-3",
                                clickAction: function() {
                                    "DELIVERY" === localStorage.getItem("userPreferredSelection") && 1 === t.delivery_type && localStorage.setItem("userSelected", "DELIVERY"), "SELFPICKUP" === localStorage.getItem("userPreferredSelection") && 2 === t.delivery_type && localStorage.setItem("userSelected", "SELFPICKUP"), "DELIVERY" === localStorage.getItem("userPreferredSelection") && 3 === t.delivery_type && localStorage.setItem("userSelected", "DELIVERY"), "SELFPICKUP" === localStorage.getItem("userPreferredSelection") && 3 === t.delivery_type && localStorage.setItem("userSelected", "SELFPICKUP")
                                }
                            }, d.a.createElement("div", {
                                className: "block-content block-content-full ".concat(t.is_featured ? "ribbon ribbon-bookmark ribbon-warning pt-2" : "pt-2", " ")
                            }, t.is_featured ? d.a.createElement("div", {
                                className: "ribbon-box"
                            }, localStorage.getItem("restaurantFeaturedText")) : null, d.a.createElement(S.a, {
                                duration: 500
                            }, d.a.createElement("img", {
                                src: t.image,
                                alt: t.name,
                                className: "restaurant-image"
                            }))), d.a.createElement("div", {
                                className: "block-content block-content-full restaurant-info"
                            }, d.a.createElement("div", {
                                className: "font-w600 mb-5 text-dark"
                            }, t.name), d.a.createElement("div", {
                                className: "font-size-sm text-muted truncate-text text-muted"
                            }, t.description), d.a.createElement("hr", {
                                className: "my-10"
                            }), d.a.createElement("div", {
                                className: "text-center restaurant-meta mt-5 d-flex align-items-center justify-content-between text-muted"
                            }, d.a.createElement("div", {
                                className: "col-2 p-0 text-left"
                            }, d.a.createElement("i", {
                                className: "fa fa-star pr-1",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }), " ", t.rating), d.a.createElement("div", {
                                className: "col-4 p-0 text-center"
                            }, d.a.createElement("i", {
                                className: "si si-clock pr-1"
                            }), " ", t.delivery_time, " ", localStorage.getItem("homePageMinsText")), d.a.createElement("div", {
                                className: "col-6 p-0 text-center"
                            }, d.a.createElement("i", {
                                className: "si si-wallet pr-1"
                            }), " ", "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), t.price_range, " ", "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), localStorage.getItem("homePageForTwoText")))), d.a.createElement(x.a, {
                                duration: "500",
                                hasTouch: !1
                            })))), "true" === localStorage.getItem("showPromoSlider") && d.a.createElement(d.a.Fragment, null, e.props.slides && e.props.slides.length > 0 && d.a.createElement(d.a.Fragment, null, a === e.props.slides[0].promo_slider.position_id - 1 && d.a.createElement(Y.a, {
                                slides: e.props.slides,
                                size: e.props.slides[0].promo_slider.size,
                                secondarySlider: !0
                            }))),  e.state.review_data.ratable && "true" === localStorage.getItem("enRAR") && "true" === localStorage.getItem("rarModEnHomeBanner") && !1)
                        }), this.state.loading_more ? d.a.createElement("div", {
                            className: ""
                        }, d.a.createElement(J.a, {
                            height: 120,
                            width: 400,
                            speed: 1.2,
                            primaryColor: "#f3f3f3",
                            secondaryColor: "#ecebeb"
                        }, d.a.createElement("rect", {
                            x: "20",
                            y: "20",
                            rx: "4",
                            ry: "4",
                            width: "80",
                            height: "78"
                        }), d.a.createElement("rect", {
                            x: "144",
                            y: "35",
                            rx: "0",
                            ry: "0",
                            width: "115",
                            height: "18"
                        }), d.a.createElement("rect", {
                            x: "144",
                            y: "65",
                            rx: "0",
                            ry: "0",
                            width: "165",
                            height: "16"
                        }))) : null))
                    }
                }]), t
            }(g.Component),
            te = Object(q.a)(ee),
            ae = a(59),
            ne = a(82),
            re = a(83),
            oe = function(e) {
                function t() {
                    return Object(l.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                }
                return Object(u.a)(t, e), Object(c.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = Object(U.a)(F.a.mark(function e() {
                            var t, a, n;
                            return F.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t = this.props.user, null !== localStorage.getItem("userSetAddress") && (this.props.getPromoSlides(), (a = this.props.user).success && this.props.getUserNotifications(a.data.id, a.data.auth_token)), t.success && V.messaging.isSupported() && (n = this.props.saveNotificationToken, ae.a.requestPermission().then(Object(U.a)(F.a.mark(function e() {
                                            var a;
                                            return F.a.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, ae.a.getToken();
                                                    case 2:
                                                        a = e.sent, n(a, t.data.id, t.data.auth_token);
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e, this)
                                        }))).catch(function(e) {
                                            console.log("Unable to get permission to notify.", e)
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        if (this.props.languages !== e.languages)
                            if (localStorage.getItem("userPreferedLanguage")) this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));
                            else if (e.languages.length) {
                            console.log("Fetching Translation Data...");
                            var t = e.languages.filter(function(e) {
                                return 1 === e.is_default
                            })[0].id;
                            this.props.getSingleLanguageData(t)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        navigator.serviceWorker.removeEventListener("message", function(e) {
                            return console.log(e)
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (window.innerWidth > 768) return d.a.createElement(R.a, {
                            to: "/"
                        });
                        
                        if (null === localStorage.getItem("userSetAddress")) return console.log("Redirect to search location"), d.a.createElement(R.a, {
                            to: "/search-location"
                        });
                        var e = JSON.parse(localStorage.getItem("userSetAddress"));
                        if (0 === Object.keys(e).length && e.constructor === Object) return d.a.createElement(R.a, {
                            to: "/search-location"
                        });
                        var t = this.props,
                            a = t.history,
                            n = t.user,
                            r = t.promo_slides;
                        return d.a.createElement(d.a.Fragment, null, d.a.createElement(f.a, {
                            seotitle: localStorage.getItem("seoMetaTitle"),
                            seodescription: localStorage.getItem("seoMetaDescription"),
                            ogtype: "website",
                            ogtitle: localStorage.getItem("seoOgTitle"),
                            ogdescription: localStorage.getItem("seoOgDescription"),
                            ogurl: window.location.href,
                            twittertitle: localStorage.getItem("seoTwitterTitle"),
                            twitterdescription: localStorage.getItem("seoTwitterDescription")
                        }), d.a.createElement("div", {
                            className: "height-100-percent bg-white mb-50"
                        }, d.a.createElement(W.a, {
                            logo: !0,
                            active_nearme: !0,
                            disable_back_button: !0,
                            history: a,
                            loggedin: n.success
                        }), "true" === localStorage.getItem("showPromoSlider") && d.a.createElement(d.a.Fragment, null, r && r.mainSlides && r.mainSlides.length > 0 && d.a.createElement(Y.a, {
                            slides: r.mainSlides,
                            size: r.mainSlides[0].promo_slider.size
                        })), d.a.createElement(te, {
                            user: n,
                            slides: r.otherSlides
                        }), d.a.createElement(M.a, {
                            active_nearme: !0
                        })))
                    }
                }]), t
            }(g.Component);
        oe.contextTypes = {
            router: function() {
                return null
            }
        };
        var le = Object(I.b)(function(e) {
                return {
                    promo_slides: e.promo_slides.promo_slides,
                    user: e.user.user,
                    locations: e.locations.locations,
                    languages: e.languages.languages
                }
            }, {
                getPromoSlides: function(e) {
                    return function(t) {
                        Z.a.post(B.v, {
                            location_name: e
                        }).then(function(e) {
                            var a = e.data;
                            return t({
                                type: "GET_PROMO_SLIDER",
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                saveNotificationToken: ne.a,
                getSingleLanguageData: w.b,
                getUserNotifications: re.a
            })(oe),
            ce = function(e) {
                function t() {
                    var e, a;
                    Object(l.a)(this, t);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).state = {
                        showGdpr: !1
                    }, a.handleGdprClick = function() {
                        localStorage.setItem("gdprAccepted", "true"), a.setState({
                            showGdpr: !1
                        })
                    }, a
                }
                return Object(u.a)(t, e), Object(c.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        setTimeout(function() {
                            document.getElementsByClassName("popup-content")[0] && (document.getElementsByClassName("popup-content")[0].style.backgroundColor = "transparent")
                        }, 100), localStorage.getItem("gdprAccepted") || (localStorage.setItem("gdprAccepted", "false"), "true" === localStorage.getItem("showGdpr") && this.setState({
                            showGdpr: !0
                        })), "true" === localStorage.getItem("showGdpr") && "false" === localStorage.getItem("gdprAccepted") && this.setState({
                            showGdpr: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return d.a.createElement(d.a.Fragment, null, this.state.showGdpr && d.a.createElement("div", {
                            className: "fixed-gdpr-mobile"
                        }, d.a.createElement("span", {
                            dangerouslySetInnerHTML: {
                                __html: localStorage.getItem("gdprMessage")
                            }
                        }), d.a.createElement("span", null, d.a.createElement("button", {
                            className: "btn btn-sm ml-2",
                            style: {
                                backgroundColor: localStorage.getItem("storeColor")
                            },
                            onClick: this.handleGdprClick
                        }, localStorage.getItem("gdprConfirmButton")))), localStorage.getItem("userSetAddress") ? d.a.createElement("div", null, d.a.createElement(le, null)) : d.a.createElement(L, {
                            languages: this.props.languages
                        }))
                    }
                }]), t
            }(g.Component),
            ie = function(e) {
                function t() {
                    return Object(l.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                }
                return Object(u.a)(t, e), Object(c.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.getSettings(), this.props.getAllLanguages()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return d.a.createElement(d.a.Fragment, null, window.innerWidth <= 768 ? d.a.createElement(ce, {
                            languages: this.props.languages
                        }) : d.a.createElement(k, {
                            languages: this.props.languages
                        }))
                    }
                }]), t
            }(g.Component),
            se = Object(I.b)(function(e) {
                return {
                    settings: e.settings.settings,
                    user: e.user.user,
                    notification_token: e.notification_token.notification_token,
                    languages: e.languages.languages
                }
            }, {
                getSettings: O.a,
                getAllLanguages: w.a
            })(ie),
            ue = a(8),
            ge = a.n(ue),
            de = function(e) {
                function t() {
                    return Object(l.a)(this, t), Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
                }
                return Object(u.a)(t, e), Object(c.a)(t, [{
                    key: "render",
                    value: function() {
                        return d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
                            className: "height-100 overlay-loading"
                        }, d.a.createElement("div", null, d.a.createElement("img", {
                            src: "/assets/img/loading-food.gif",
                            alt: localStorage.getItem("pleaseWaitText")
                        }))))
                    }
                }]), t
            }(g.Component),
            me = a(40),
            pe = a.n(me),
            fe = Boolean("[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

        function he(e, t) {
            navigator.serviceWorker.register(e).then(function(e) {
                e.onupdatefound = function() {
                    var a = e.installing;
                    null != a && (a.onstatechange = function() {
                        "installed" === a.state && (navigator.serviceWorker.controller ? (console.log("Skiping wait.."), a.postMessage({
                            action: "skipWaiting"
                        }), window.location.reload(), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                    })
                }
            }).catch(function(e) {
                console.error("Error during service worker registration:", e)
            })
        }
        var Se = a(43),
            Ee = a(22),
            ve = a(92),
            be = a(2),
            ye = a(46),
            _e = {
                settings: []
            },
            Ie = {
                locations: []
            },
            Oe = a(84),
            we = {
                popular_locations: []
            },
            Ne = {
                promo_slides: []
            },
            ke = a(19),
            Te = {
                restaurant_info: [],
                restaurant_items: [],
                single_item: []
            },
            je = a(42),
            xe = {
                products: []
            },
            Ae = a(69),
            Ce = {
                data: {
                    productQuantity: 0,
                    totalPrice: 0
                }
            },
            Pe = a(85),
            Re = {
                coupon: []
            },
            De = a(17),
            Le = {
                user: [],
                running_order: !1,
                wallet: [],
                reset_mail: [],
                validate_email_otp: [],
                change_password: []
            },
            Ge = a(45),
            Fe = {
                pages: [],
                single_page: []
            },
            Ue = a(60),
            Ve = {
                restaurants: []
            },
            Me = a(33),
            We = {
                addresses: []
            },
            Ye = a(70),
            He = {
                checkout: []
            },
            Be = a(71),
            Je = {
                confirmCart: !1
            },
            ze = a(61),
            Ke = {
                orders: [],
                cancel: null
            },
            qe = a(86),
            Xe = {
                paymentgateways: []
            },
            Ze = a(50),
            Qe = {
                notification_token: []
            },
            $e = a(51),
            et = {
                is_operational: "",
                filtered_restaurants: [],
                restaurants_categories: []
            },
            tt = a(62),
            at = {
                done_rating: [],
                rating_details: []
            },
            nt = a(18),
            rt = {
                alerts: [],
                alertUnreadTotal: 0
            },
            ot = a(28),
            lt = {
                languages: [],
                language: []
            },
            ct = a(35),
            it = {
                delivery_user: [],
                order_history: []
            },
            st = a(87),
            ut = {
                delivery_orders: []
            },
            gt = a(72),
            dt = {
                single_delivery_order: []
            },
            mt = a(56),
            pt = {
                set_delivery_guy_gps_location: [],
                get_delivery_guy_gps_location: []
            },
            ft = a(63),
            ht = {
                accepted_order: [],
                pickedup_order: []
            },
            St = Object(Ee.c)({
                settings: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case ye.a:
                            return Object(be.a)({}, e, {
                                settings: t.payload
                            });
                        default:
                            return e
                    }
                },
                locations: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "SEARCH_LOCATIONS":
                            return Object(be.a)({}, e, {
                                locations: t.payload
                            });
                        default:
                            return e
                    }
                },
                popular_locations: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case Oe.a:
                            return Object(be.a)({}, e, {
                                popular_locations: t.payload
                            });
                        default:
                            return e
                    }
                },
                promo_slides: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "GET_PROMO_SLIDER":
                            return Object(be.a)({}, e, {
                                promo_slides: t.payload
                            });
                        default:
                            return e
                    }
                },
                items: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case ke.b:
                        case ke.c:
                            return Object(be.a)({}, e, {
                                restaurant_info: t.payload
                            });
                        case ke.d:
                        case ke.f:
                            return Object(be.a)({}, e, {
                                restaurant_items: t.payload
                            });
                        case ke.e:
                            return Object(be.a)({}, e, {
                                restaurant_info: t.payload
                            });
                        case ke.h:
                            return Object(be.a)({}, e, {
                                single_item: t.payload
                            });
                        case ke.g:
                        case ke.a:
                            return Object(be.a)({}, e, {
                                restaurant_items: t.payload
                            });
                        default:
                            return e
                    }
                },
                total: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case Ae.a:
                            return Object(be.a)({}, e, {
                                data: t.payload
                            });
                        default:
                            return e
                    }
                },
                cart: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case je.b:
                            return Object(be.a)({}, e, {
                                products: t.payload
                            });
                        case je.a:
                            return Object(be.a)({}, e, {
                                productToAdd: Object.assign({}, t.payload)
                            });
                        case je.c:
                            return Object(be.a)({}, e, {
                                productToRemove: Object.assign({}, t.payload)
                            });
                        default:
                            return e
                    }
                },
                coupon: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case Pe.a:
                            return Object(be.a)({}, e, {
                                coupon: t.payload
                            });
                        default:
                            return e
                    }
                },
                user: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case De.c:
                        case De.e:
                        case De.d:
                        case De.i:
                        case De.g:
                        case De.j:
                            return Object(be.a)({}, e, {
                                user: t.payload
                            });
                        case De.f:
                            return Object(be.a)({}, e, {
                                running_order: t.payload
                            });
                        case De.b:
                            return Object(be.a)({}, e, {
                                wallet: t.payload
                            });
                        case De.h:
                            return Object(be.a)({}, e, {
                                reset_mail: t.payload
                            });
                        case De.k:
                            return Object(be.a)({}, e, {
                                validate_email_otp: t.payload
                            });
                        case De.a:
                            return Object(be.a)({}, e, {
                                change_password: t.payload
                            });
                        default:
                            return e
                    }
                },
                pages: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case Ge.b:
                            return Object(be.a)({}, e, {
                                pages: t.payload
                            });
                        case Ge.c:
                        case Ge.a:
                            return Object(be.a)({}, e, {
                                single_page: t.payload
                            });
                        default:
                            return e
                    }
                },
                restaurants: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case Ue.b:
                        case Ue.a:
                            return Object(be.a)({}, e, {
                                restaurants: t.payload
                            });
                        default:
                            return e
                    }
                },
                addresses: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case Me.b:
                        case Me.c:
                        case Me.a:
                        case Me.d:
                            return Object(be.a)({}, e, {
                                addresses: t.payload
                            });
                        default:
                            return e
                    }
                },
                checkout: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case Ye.a:
                            return Object(be.a)({}, e, {
                                checkout: t.payload
                            });
                        default:
                            return e
                    }
                },
                confirmCart: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case Be.a:
                            return Object(be.a)({}, e, {
                                confirmCart: t.payload
                            });
                        default:
                            return e
                    }
                },
                orders: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case ze.b:
                            return Object(be.a)({}, e, {
                                orders: t.payload
                            });
                        case ze.a:
                            return Object(be.a)({}, e, {
                                cancel: t.payload
                            });
                        default:
                            return e
                    }
                },
                paymentgateways: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case qe.a:
                            return Object(be.a)({}, e, {
                                paymentgateways: t.payload
                            });
                        default:
                            return e
                    }
                },
                delivery_user: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case ct.a:
                        case ct.b:
                            return Object(be.a)({}, e, {
                                delivery_user: t.payload
                            });
                        case ct.d:
                            return Object(be.a)({}, e, {
                                delivery_user: t.payload.delivery_user,
                                order_history: t.payload.order_history
                            });
                        case ct.c:
                            return Object(be.a)({}, e, {
                                order_history: t.payload
                            });
                        default:
                            return e
                    }
                },
                delivery_orders: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case st.a:
                            return Object(be.a)({}, e, {
                                delivery_orders: t.payload
                            });
                        default:
                            return e
                    }
                },
                single_delivery_order: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dt,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case gt.a:
                            return Object(be.a)({}, e, {
                                single_delivery_order: t.payload
                            });
                        default:
                            return e
                    }
                },
                gps_location: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pt,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case mt.b:
                            return Object(be.a)({}, e, {
                                set_delivery_guy_gps_location: t.payload
                            });
                        case mt.a:
                            return Object(be.a)({}, e, {
                                get_delivery_guy_gps_location: t.payload
                            });
                        default:
                            return e
                    }
                },
                accepted_order: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ht,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case ft.a:
                            return Object(be.a)({}, e, {
                                accepted_order: t.payload
                            });
                        case ft.c:
                            return Object(be.a)({}, e, {
                                pickedup_order: t.payload
                            });
                        default:
                            return e
                    }
                },
                notification_token: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qe,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case Ze.a:
                            return Object(be.a)({}, e, {
                                notification_token: t.payload
                            });
                        default:
                            return e
                    }
                },
                restaurant: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : et,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case $e.a:
                            return Object(be.a)({}, e, {
                                is_operational: t.payload
                            });
                        case $e.b:
                            return Object(be.a)({}, e, {
                                filtered_restaurants: t.payload
                            });
                        case $e.c:
                            return Object(be.a)({}, e, {
                                restaurants_categories: t.payload
                            });
                        default:
                            return e
                    }
                },
                languages: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case ot.a:
                            return Object(be.a)({}, e, {
                                languages: t.payload
                            });
                        case ot.b:
                            return Object(be.a)({}, e, {
                                language: t.payload
                            });
                        default:
                            return e
                    }
                },
                rating: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : at,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case tt.a:
                            return Object(be.a)({}, e, {
                                done_rating: t.payload
                            });
                        case tt.b:
                            return Object(be.a)({}, e, {
                                rating_details: t.payload
                            });
                        default:
                            return e
                    }
                },
                alert: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rt,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case nt.a:
                            return Object(be.a)({}, e, {
                                alerts: t.payload
                            });
                        case nt.b:
                            return Object(be.a)({}, e, {
                                alertUnreadTotal: t.payload
                            });
                        default:
                            return e
                    }
                }
            }),
            Et = function(e) {
                e = JSON.parse(window.localStorage.getItem("state")) || e;
                var t = [ve.a],
                    a = Object(Ee.e)(St, e, Object(Ee.d)(Ee.a.apply(void 0, t)));
                return a.subscribe(function() {
                    var e = a.getState();
                    for (var t in e.settings.settings)
                        if (e.settings.settings.hasOwnProperty(t)) {
                            var n = e.settings.settings[t];
                            localStorage.setItem(n.key, n.value)
                        }
                    for (var r in e.languages.language)
                        if (e.languages.language.hasOwnProperty(r)) {
                            var o = e.languages.language[r];
                            localStorage.setItem(r, o)
                        }
                    var l = {
                        cart: e.cart,
                        total: e.total,
                        items: e.items,
                        pages: e.pages,
                        user: e.user,
                        addresses: e.addresses,
                        delivery_user: e.delivery_user,
                        languages: e.languages.languages
                    };
                    localStorage.setItem("state", JSON.stringify(l))
                }), a
            },
            vt = function(e) {
                function t() {
                    var e, a;
                    Object(l.a)(this, t);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).state = {
                        updating: !1
                    }, a
                }
                return Object(u.a)(t, e), Object(c.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        Z.a.get("/version.json").then(function(t) {
                            var a = t.data.forceNewSettingsVersion,
                                n = t.data.forceCacheClearVersion;
                            if (console.log("Client Settings Version: ", localStorage.getItem("forceNewSettingsVersion")), console.log("Server Settings Version: ", a), console.log("Client Cache Version: ", localStorage.getItem("forceCacheClearVersion")), console.log("Server Cache Version: ", n), null === localStorage.getItem("forceNewSettingsVersion") && null === localStorage.getItem("forceCacheClearVersion")) localStorage.setItem("forceNewSettingsVersion", a), localStorage.setItem("forceCacheClearVersion", n);
                            else if (localStorage.getItem("forceNewSettingsVersion") !== a && (console.warn("Getting New Settings"), e.props.getSettings(), localStorage.setItem("forceNewSettingsVersion", a)), localStorage.getItem("forceCacheClearVersion") !== n) {
                                var r = function() {
                                        var e = Object(U.a)(F.a.mark(function e() {
                                            return F.a.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, o();
                                                    case 2:
                                                        return e.next = 4, l();
                                                    case 4:
                                                        return e.next = 6, c();
                                                    case 6:
                                                        return e.next = 8, i();
                                                    case 8:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e, this)
                                        }));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    o = function() {
                                        return new Promise(function(e) {
                                            console.warn("Clear Local Storage"), localStorage.clear(), e("Completed clearLocalStorage")
                                        })
                                    },
                                    l = function() {
                                        return new Promise(function(e) {
                                            console.warn("Clear Cache Storage"), navigator.serviceWorker.getRegistrations().then(function(e) {
                                                var t = !0,
                                                    a = !1,
                                                    n = void 0;
                                                try {
                                                    for (var r, o = e[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                                                        r.value.unregister()
                                                    }
                                                } catch (l) {
                                                    a = !0, n = l
                                                } finally {
                                                    try {
                                                        t || null == o.return || o.return()
                                                    } finally {
                                                        if (a) throw n
                                                    }
                                                }
                                            }), caches && (console.log("CACHES:", caches), caches.keys().then(function(e) {
                                                var t = !0,
                                                    a = !1,
                                                    n = void 0;
                                                try {
                                                    for (var r, o = e[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                                                        var l = r.value;
                                                        caches.delete(l)
                                                    }
                                                } catch (c) {
                                                    a = !0, n = c
                                                } finally {
                                                    try {
                                                        t || null == o.return || o.return()
                                                    } finally {
                                                        if (a) throw n
                                                    }
                                                }
                                            })), e("Completed clearCacheStorage")
                                        })
                                    },
                                    c = function() {
                                        return new Promise(function(e) {
                                            console.warn("Update Client Version"), localStorage.setItem("forceNewSettingsVersion", a), localStorage.setItem("forceCacheClearVersion", n), e("Completed updateClientVersion")
                                        })
                                    },
                                    i = function() {
                                        return new Promise(function(t) {
                                            setTimeout(function() {
                                                e.setState({
                                                    updating: !1
                                                }, function() {
                                                    window.location.reload(!0), t("Completed reloadBrowser")
                                                })
                                            }, 3e3)
                                        })
                                    };
                                e.setState({
                                    updating: !0
                                }), r()
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state.updating;
                        return d.a.createElement(d.a.Fragment, null, e && d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
                            className: "update-full-notification",
                            style: {
                                zIndex: 99999
                            }
                        }, d.a.createElement("h1", {
                            className: "d-flex mb-0"
                        }, localStorage.getItem("updatingMessage"))), d.a.createElement("div", {
                            className: "update-full-notification"
                        }, d.a.createElement("img", {
                            src: "/assets/img/various/spinner.svg",
                            alt: "Updating System",
                            className: "d-flex"
                        }))))
                    }
                }]), t
            }(g.Component),
            bt = Object(I.b)(function(e) {
                return {
                    settings: e.settings.settings
                }
            }, {
                getSettings: O.a
            })(vt);
        ! function(e) {
            if ("serviceWorker" in navigator) {
                if (new URL("", window.location.href).origin !== window.location.origin) return;
                window.addEventListener("load", function() {
                    var t = "".concat("", "/service-worker.js");
                    fe ? (function(e, t) {
                        fetch(e).then(function(a) {
                            var n = a.headers.get("content-type");
                            404 === a.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then(function(e) {
                                e.unregister().then(function() {
                                    window.location.reload()
                                })
                            }) : he(e, t)
                        }).catch(function() {
                            console.log("No internet connection found. App is running in offline mode.")
                        })
                    }(t, e), navigator.serviceWorker.ready.then(function() {
                        console.log("PWA Activated")
                    })) : he(t, e), navigator.serviceWorker.ready.then(function() {
                        console.log("SW & event listener registered")
                    })
                })
            }
        }();
        var yt = function(e) {
                var t = e.children,
                    a = e.initialState,
                    n = void 0 === a ? {} : a;
                return d.a.createElement(d.a.Fragment, null, null !== localStorage.getItem("customCSS") && d.a.createElement(Se.Helmet, null, d.a.createElement("style", {
                    type: "text/css"
                }, localStorage.getItem("customCSS"))), d.a.createElement(I.a, {
                    store: Et(n)
                }, t, d.a.createElement(bt, null)))
            },
            _t = a(52),
            It = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = function(e) {
                        "true" === localStorage.getItem("enableGoogleAnalytics") && (_t.a.initialize(localStorage.getItem("googleAnalyticsId")), _t.a.set(Object(be.a)({
                            page: e
                        }, t)), _t.a.pageview(e))
                    };
                return function(t) {
                    function n() {
                        return Object(l.a)(this, n), Object(i.a)(this, Object(s.a)(n).apply(this, arguments))
                    }
                    return Object(u.a)(n, t), Object(c.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.location.pathname;
                            a(e)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            var t = this.props.location.pathname,
                                n = e.location.pathname;
                            t !== n && a(n)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return d.a.createElement(e, this.props)
                        }
                    }]), n
                }(g.Component)
            },
            Ot = ge()({
                loader: function() {
                    return a.e(7).then(a.bind(null, 227))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            wt = ge()({
                loader: function() {
                    return a.e(8).then(a.bind(null, 242))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Nt = ge()({
                loader: function() {
                    return Promise.all([a.e(1), a.e(32), a.e(9)]).then(a.bind(null, 243))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            kt = ge()({
                loader: function() {
                    return Promise.all([a.e(3), a.e(10)]).then(a.bind(null, 228))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Tt = ge()({
                loader: function() {
                    return Promise.all([a.e(3), a.e(11)]).then(a.bind(null, 229))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            jt = ge()({
                loader: function() {
                    return a.e(12).then(a.bind(null, 237))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            xt = ge()({
                loader: function() {
                    return Promise.all([a.e(1), a.e(13)]).then(a.bind(null, 239))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            At = ge()({
                loader: function() {
                    return a.e(14).then(a.bind(null, 238))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Ct = ge()({
                loader: function() {
                    return a.e(15).then(a.bind(null, 230))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Pt = ge()({
                loader: function() {
                    return Promise.all([a.e(31), a.e(16)]).then(a.bind(null, 244))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Rt = ge()({
                loader: function() {
                    return Promise.all([a.e(4), a.e(17)]).then(a.bind(null, 245))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Dt = ge()({
                loader: function() {
                    return Promise.all([a.e(0), a.e(1), a.e(18)]).then(a.bind(null, 241))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Lt = ge()({
                loader: function() {
                    return Promise.all([a.e(0), a.e(19)]).then(a.bind(null, 231))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Gt = ge()({
                loader: function() {
                    return Promise.all([a.e(0), a.e(5), a.e(2), a.e(20)]).then(a.bind(null, 232))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Ft = ge()({
                loader: function() {
                    return a.e(21).then(a.bind(null, 233))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Ut = ge()({
                loader: function() {
                    return Promise.all([a.e(0), a.e(5), a.e(2)]).then(a.bind(null, 225))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Vt = ge()({
                loader: function() {
                    return Promise.all([a.e(0), a.e(22)]).then(a.bind(null, 240))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Mt = ge()({
                loader: function() {
                    return Promise.all([a.e(4), a.e(23)]).then(a.bind(null, 247))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Wt = ge()({
                loader: function() {
                    return Promise.all([a.e(1), a.e(24)]).then(a.bind(null, 234))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Yt = ge()({
                loader: function() {
                    return a.e(25).then(a.bind(null, 235))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Ht = ge()({
                loader: function() {
                    return a.e(26).then(a.bind(null, 236))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Bt = ge()({
                loader: function() {
                    return a.e(27).then(a.bind(null, 248))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            Jt = ge()({
                loader: function() {
                    return a.e(28).then(a.bind(null, 249))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            }),
            zt = ge()({
                loader: function() {
                    return Promise.all([a.e(0), a.e(29)]).then(a.bind(null, 250))
                },
                loading: function() {
                    return d.a.createElement(de, null)
                }
            });
        pe.a.render(d.a.createElement(yt, null, d.a.createElement(n.a, null, d.a.createElement(d.a.Fragment, null, d.a.createElement(r.a, {
            component: function() {
                return window.scrollTo(0, 0), null
            }
        }), d.a.createElement(o.a, null, d.a.createElement(r.a, {
            path: "/",
            exact: !0,
            component: It(se)
        }), d.a.createElement(r.a, {
            path: "/search-location",
            exact: !0,
            component: It(wt)
        }), d.a.createElement(r.a, {
            path: "/my-location",
            exact: !0,
            component: It(Mt)
        }), d.a.createElement(r.a, {
            path: "/categories/restaurants",
            exact: !0,
            component: It(Bt)
        }), d.a.createElement(r.a, {
            path: "/restaurants/:restaurant",
            exact: !0,
            component: It(Nt)
        }), d.a.createElement(r.a, {
            path: "/restaurants/:restaurant/:id",
            exact: !0,
            component: It(Wt)
        }), d.a.createElement(r.a, {
            path: "/explore",
            exact: !0,
            component: It(At)
        }), d.a.createElement(r.a, {
            path: "/login",
            exact: !0,
            component: It(kt)
        }), d.a.createElement(r.a, {
            path: "/login/forgot-password",
            exact: !0,
            component: It(Ht)
        }), d.a.createElement(r.a, {
            path: "/register",
            exact: !0,
            component: It(Tt)
        }), d.a.createElement(r.a, {
            path: "/my-account",
            exact: !0,
            component: It(xt)
        }), d.a.createElement(r.a, {
            path: "/alerts",
            exact: !0,
            component: It(zt)
        }), d.a.createElement(r.a, {
            path: "/my-addresses",
            exact: !0,
            component: It(Ct)
        }), d.a.createElement(r.a, {
            path: "/my-wallet",
            exact: !0,
            component: It(Lt)
        }), d.a.createElement(r.a, {
            path: "/my-orders",
            exact: !0,
            component: It(Dt)
        }), d.a.createElement(r.a, {
            path: "/rate-and-review/:id",
            exact: !0,
            component: It(Jt)
        }), d.a.createElement(r.a, {
            path: "/checkout",
            exact: !0,
            component: It(Pt)
        }), d.a.createElement(r.a, {
            path: "/running-order/:unique_order_id",
            exact: !0,
            component: It(Rt)
        }), d.a.createElement(r.a, {
            path: "/cart",
            exact: !0,
            component: It(jt)
        }), d.a.createElement(r.a, {
            path: "/pages/:slug",
            exact: !0,
            component: It(Yt)
        }), d.a.createElement(r.a, {
            path: "/delivery",
            exact: !0,
            component: Gt
        }), d.a.createElement(r.a, {
            path: "/delivery/login",
            exact: !0,
            component: Ft
        }), d.a.createElement(r.a, {
            path: "/delivery/orders",
            exact: !0,
            component: Ut
        }), d.a.createElement(r.a, {
            path: "/delivery/orders/:unique_order_id",
            exact: !0,
            component: Vt
        }), d.a.createElement(r.a, {
            path: "/delivery/completed-orders",
            exact: !0,
            component: Gt
        }), d.a.createElement(r.a, {
            component: Ot
        }))))), document.getElementById("root"))
    }],
    [
        [95, 33, 30]
    ]
]);
