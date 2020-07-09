(window.webpackJsonp = window.webpackJsonp || []).push([
    [17],
    {
        143: function (e, t, a) {
            "use strict";
            var r = a(3),
                n = a(4),
                l = a(6),
                o = a(5),
                s = a(7),
                i = a(0),
                c = a.n(i),
                m = a(15),
                d = a.n(m),
                u = a(144),
                g = a.n(u),
                p = (function (e) {
                    function t() {
                        return Object(r.a)(this, t), Object(l.a)(this, Object(o.a)(t).apply(this, arguments));
                    }
                    return (
                        Object(s.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    return c.a.createElement(
                                        c.a.Fragment,
                                        null,
                                        c.a.createElement(
                                            "div",
                                            { className: "col-12 p-0 fixed", style: { zIndex: "9" } },
                                            c.a.createElement(
                                                "div",
                                                { className: "block m-0" },
                                                c.a.createElement(
                                                    "div",
                                                    { className: "block-content p-0" },
                                                    c.a.createElement(
                                                        "div",
                                                        { className: "input-group ".concat(this.props.boxshadow && "search-box") },
                                                        !this.props.disable_back_button &&
                                                            c.a.createElement(
                                                                "div",
                                                                { className: "input-group-prepend" },
                                                                this.props.back_to_home &&
                                                                    c.a.createElement(
                                                                        "button",
                                                                        {
                                                                            type: "button",
                                                                            className: "btn search-navs-btns",
                                                                            style: { position: "relative" },
                                                                            onClick: function () {
                                                                                return e.context.router.history.push("/");
                                                                            },
                                                                        },
                                                                        c.a.createElement("i", { className: "si si-arrow-left" }),
                                                                        c.a.createElement(d.a, { duration: "500" })
                                                                    ),
                                                                this.props.goto_orders_page &&
                                                                    c.a.createElement(
                                                                        "button",
                                                                        {
                                                                            type: "button",
                                                                            className: "btn search-navs-btns",
                                                                            style: { position: "relative" },
                                                                            onClick: function () {
                                                                                return e.context.router.history.push("/my-orders");
                                                                            },
                                                                        },
                                                                        c.a.createElement("i", { className: "si si-arrow-left" }),
                                                                        c.a.createElement(d.a, { duration: "500" })
                                                                    ),
                                                                this.props.goto_accounts_page &&
                                                                    c.a.createElement(
                                                                        "button",
                                                                        {
                                                                            type: "button",
                                                                            className: "btn search-navs-btns",
                                                                            style: { position: "relative" },
                                                                            onClick: function () {
                                                                                return e.context.router.history.push("/my-account");
                                                                            },
                                                                        },
                                                                        c.a.createElement("i", { className: "si si-arrow-left" }),
                                                                        c.a.createElement(d.a, { duration: "500" })
                                                                    ),
                                                                !this.props.back_to_home &&
                                                                    !this.props.goto_orders_page &&
                                                                    !this.props.goto_accounts_page &&
                                                                    c.a.createElement(
                                                                        "button",
                                                                        { type: "button", className: "btn search-navs-btns", style: { position: "relative" }, onClick: this.context.router.history.goBack },
                                                                        c.a.createElement("i", { className: "si si-arrow-left" }),
                                                                        c.a.createElement(d.a, { duration: "500" })
                                                                    )
                                                            ),
                                                        c.a.createElement(
                                                            "p",
                                                            { className: "form-control search-input" },
                                                            this.props.logo && c.a.createElement("img", { src: "/assets/img/logos/logo.png", alt: localStorage.getItem("storeName"), width: "120" }),
                                                            this.props.has_title ? c.a.createElement("span", { className: "nav-page-title" }, this.props.title) : null,
                                                            this.props.has_delivery_icon &&
                                                                c.a.createElement(g.a, { left: !0 }, c.a.createElement("img", { src: "/assets/img/various/delivery-bike.png", alt: this.props.title, className: "nav-page-title" }))
                                                        ),
                                                        this.props.has_restaurant_info
                                                            ? c.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className: "fixed-restaurant-info hidden",
                                                                      ref: function (t) {
                                                                          e.heading = t;
                                                                      },
                                                                  },
                                                                  c.a.createElement("span", { className: "font-w700 fixedRestaurantName" }, this.props.restaurant.name),
                                                                  c.a.createElement("br", null),
                                                                  c.a.createElement(
                                                                      "span",
                                                                      { className: "font-w400 fixedRestaurantTime" },
                                                                      c.a.createElement("i", { className: "si si-clock" }),
                                                                      " ",
                                                                      this.props.restaurant.delivery_time,
                                                                      " ",
                                                                      localStorage.getItem("homePageMinsText")
                                                                  )
                                                              )
                                                            : null,
                                                        c.a.createElement(
                                                            "div",
                                                            { className: "input-group-append" },
                                                            !this.props.disable_search &&
                                                                c.a.createElement(
                                                                    "button",
                                                                    { type: "submit", className: "btn search-navs-btns", style: { position: "relative" } },
                                                                    c.a.createElement("i", { className: "si si-magnifier" }),
                                                                    c.a.createElement(d.a, { duration: "500" })
                                                                )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(i.Component);
            (p.contextTypes = {
                router: function () {
                    return null;
                },
            }),
                (t.a = p);
        },
        144: function (e, t, a) {
            "use strict";
            function r(e, t) {
                var a = t.left,
                    r = t.right,
                    n = t.mirror,
                    l = t.opposite,
                    o = (a ? 1 : 0) | (r ? 2 : 0) | (n ? 16 : 0) | (l ? 32 : 0) | (e ? 64 : 0);
                if (d.hasOwnProperty(o)) return d[o];
                if (!n != !(e && l)) {
                    var s = [r, a];
                    (a = s[0]), (r = s[1]);
                }
                var i = a ? "-100%" : r ? "100%" : "0",
                    m = e
                        ? "from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d(" + i + ", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    "
                        : "from {\n        transform: translate3d(" +
                          i +
                          ", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";
                return (d[o] = (0, c.animation)(m)), d[o];
            }
            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.defaults,
                    t = e.children,
                    a = (e.out, e.forever),
                    n = e.timeout,
                    l = e.duration,
                    o = void 0 === l ? c.defaults.duration : l,
                    i = e.delay,
                    m = void 0 === i ? c.defaults.delay : i,
                    d = e.count,
                    u = void 0 === d ? c.defaults.count : d,
                    g = (function (e, t) {
                        var a = {};
                        for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]));
                        return a;
                    })(e, ["children", "out", "forever", "timeout", "duration", "delay", "count"]),
                    p = { make: r, duration: void 0 === n ? o : n, delay: m, forever: a, count: u, style: { animationFillMode: "both" } };
                return g.left, g.right, g.mirror, g.opposite, (0, s.default)(g, p, p, t);
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l,
                o = a(53),
                s = (l = o) && l.__esModule ? l : { default: l },
                i = a(1),
                c = a(39),
                m = { out: i.bool, left: i.bool, right: i.bool, mirror: i.bool, opposite: i.bool, duration: i.number, timeout: i.number, delay: i.number, count: i.number, forever: i.bool },
                d = {};
            (n.propTypes = m), (t.default = n), (e.exports = t.default);
        },
        145: function (e, t, a) {
            "use strict";
            a.d(t, "d", function () {
                return s;
            }),
                a.d(t, "f", function () {
                    return i;
                }),
                a.d(t, "e", function () {
                    return c;
                }),
                a.d(t, "i", function () {
                    return m;
                }),
                a.d(t, "b", function () {
                    return d;
                }),
                a.d(t, "g", function () {
                    return u;
                }),
                a.d(t, "j", function () {
                    return g;
                }),
                a.d(t, "c", function () {
                    return p;
                }),
                a.d(t, "h", function () {
                    return f;
                }),
                a.d(t, "k", function () {
                    return v;
                }),
                a.d(t, "a", function () {
                    return h;
                });
            var r = a(17),
                n = a(11),
                l = a(10),
                o = a.n(l),
                s = function (e, t, a, l, s, i, c) {
                    return function (m) {
                        o.a
                            .post(n.L, { name: e, email: t, password: a, accessToken: l, phone: s, provider: i, address: c })
                            .then(function (e) {
                                var t = e.data;
                                return m({ type: r.c, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                i = function (e, t, a, l, s) {
                    return function (i) {
                        o.a
                            .post(n.S, { name: e, email: t, phone: a, password: l, address: s })
                            .then(function (e) {
                                var t = e.data;
                                return i({ type: r.e, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                c = function (e) {
                    return function (t) {
                        e = [];
                        localStorage.removeItem("userSetAddress"), localStorage.removeItem("geoLocation"), t({ type: r.d, payload: e }), t({ type: r.f, payload: !1 }), t({ type: r.b, payload: [] });
                    };
                },
                m = function (e, t, a) {
                    return function (l) {
                        return o.a
                            .post(n.ab, { token: t, user_id: e, unique_order_id: a })
                            .then(function (e) {
                                var t = e.data;
                                return l({ type: r.i, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                d = function (e, t) {
                    return function (a) {
                        o.a
                            .post(n.f, { token: t, user_id: e })
                            .then(function (e) {
                                var t = e.data;
                                return a({ type: r.f, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                u = function (e, t, a, l) {
                    return function (s) {
                        o.a
                            .post(n.W, { email: e, phone: t, accessToken: a, provider: l })
                            .then(function (e) {
                                var t = e.data;
                                return s({ type: r.g, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                g = function (e, t) {
                    return function (a) {
                        o.a
                            .post(n.bb, { phone: e, otp: t })
                            .then(function (e) {
                                var t = e.data;
                                return a({ type: r.j, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                p = function (e, t) {
                    return function (a) {
                        o.a
                            .post(n.J, { token: e, user_id: t })
                            .then(function (e) {
                                var t = e.data;
                                return a({ type: r.b, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                f = function (e) {
                    return function (t) {
                        o.a
                            .post(n.X, { email: e })
                            .then(function (e) {
                                var a = e.data;
                                return t({ type: r.h, payload: a });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                v = function (e, t) {
                    return function (a) {
                        o.a
                            .post(n.cb, { email: e, code: t })
                            .then(function (e) {
                                var t = e.data;
                                return a({ type: r.k, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                h = function (e, t, a) {
                    return function (l) {
                        o.a
                            .post(n.d, { email: e, code: t, password: a })
                            .then(function (e) {
                                var t = e.data;
                                return l({ type: r.a, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                };
        },
        155: function (e, t, a) {
            "use strict";
            a.d(t, "b", function () {
                return s;
            }),
                a.d(t, "a", function () {
                    return i;
                });
            var r = a(56),
                n = a(11),
                l = a(10),
                o = a.n(l),
                s = function (e, t, a, l, s) {
                    return function (i) {
                        o.a
                            .post(n.V, { token: e, user_id: t, delivery_lat: a, delivery_long: l, heading: s })
                            .then(function (e) {
                                var t = e.data;
                                return i({ type: r.b, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                i = function (e, t) {
                    return function (a) {
                        o.a
                            .post(n.m, { token: e, order_id: t })
                            .then(function (e) {
                                var t = e.data;
                                return a({ type: r.a, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                };
        },
        170: function (e) {
            e.exports = [
                { featureType: "poi.business", stylers: [{ visibility: "off" }] },
                { featureType: "poi.park", elementType: "labels.text", stylers: [{ visibility: "off" }] },
            ];
        },
        245: function (e, t, a) {
            "use strict";
            a.r(t);
            var r = a(3),
                n = a(4),
                l = a(6),
                o = a(5),
                s = a(7),
                i = a(0),
                c = a.n(i),
                m = a(143),
                d = a(14),
                u = a(155),
                g = a(176),
                p = a(170),
                f = a(29),
                v = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++) s[i] = arguments[i];
                        return ((a = Object(l.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).state = { zoom: 15 }), a;
                    }
                    return (
                        Object(s.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this,
                                        t = this.refs.deliveryRefIcon;
                                    t && ((t.style.transform = "rotate(50deg)"), (t.style.transition = "transform 1s linear")),
                                        setTimeout(function () {
                                            e.setState({ zoom: 18 });
                                        }, 1e3);
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    setTimeout(function () {
                                        document.querySelector('[src*="/assets/img/various/marker-delivery.png"]') &&
                                            e.delivery_gps_location.heading &&
                                            (console.log("Inside update delivery icon"),
                                            (document.querySelector('[src*="/assets/img/various/marker-delivery.png"]').style.transform = "rotate(" + e.delivery_gps_location.heading + "deg)"),
                                            (document.querySelector('[src*="/assets/img/various/marker-delivery.png"]').style.transition = "transform 0.25s linear"));
                                    }, 500);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    return c.a.createElement(
                                        g.Map,
                                        {
                                            ref: function (t) {
                                                e.map = t;
                                            },
                                            google: this.props.google,
                                            style: { width: "100%", height: "55vh" },
                                            initialCenter: { lat: JSON.parse(this.props.deliveryLocation).lat, lng: JSON.parse(this.props.deliveryLocation).lng },
                                            zoom: this.state.zoom,
                                            styles: p,
                                            zoomControl: !1,
                                            mapTypeControl: !1,
                                            scaleControl: !0,
                                            streetViewControl: !1,
                                            fullscreenControl: !1,
                                        },
                                        c.a.createElement(g.Marker, {
                                            position: { lat: JSON.parse(this.props.deliveryLocation).lat, lng: JSON.parse(this.props.deliveryLocation).lng },
                                            icon: { url: "/assets/img/various/marker-home.png", scaledSize: new this.props.google.maps.Size(34, 54) },
                                        }),
                                        c.a.createElement(g.Marker, {
                                            position: { lat: parseFloat(this.props.restaurant_latitude), lng: parseFloat(this.props.restaurant_longitude) },
                                            icon: { url: "/assets/img/various/marker-restaurant.png", scaledSize: new this.props.google.maps.Size(34, 54) },
                                        }),
                                        this.props.show_delivery_gps &&
                                            c.a.createElement(g.Marker, {
                                                position: { lat: parseFloat(this.props.delivery_gps_location.delivery_lat), lng: parseFloat(this.props.delivery_gps_location.delivery_long) },
                                                icon: { url: "/assets/img/various/marker-delivery.png", anchor: new this.props.google.maps.Point(32, 32), scaledSize: new this.props.google.maps.Size(54, 54) },
                                            })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(i.Component),
                h = Object(g.GoogleApiWrapper)({
                    apiKey: localStorage.getItem("googleApiKey"),
                    LoadingContainer: function () {
                        return c.a.createElement(
                            f.a,
                            { height: 400, width: window.innerWidth, speed: 1.2, primaryColor: "#f3f3f3", secondaryColor: "#ecebeb" },
                            c.a.createElement("rect", { x: "0", y: "0", rx: "0", ry: "0", width: window.innerWidth, height: "400" })
                        );
                    },
                })(v),
                y = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++) s[i] = arguments[i];
                        return (
                            ((a = Object(l.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).state = {
                                gps_latitude: null,
                                gps_longitude: null,
                                show_delivery_gps: !1,
                                delivery_guy_latitude: null,
                                delivery_guy_longitude: null,
                                loopStarted: !1,
                            }),
                            (a.__getDeliveryGuyLocationOnce = function () {
                                new Promise(function (e) {
                                    a.props.getDeliveryGuyGpsLocation(a.props.user.data.auth_token, a.props.order_id), e("done");
                                }).then(function () {
                                    a.setState({ show_delivery_gps: !0 });
                                });
                            }),
                            (a.gettingGpsLocationInterval = 0),
                            (a.__getDeliveryGuyGpsLocationLoop = function () {
                                console.log("This should be called only once"),
                                    a.setState({ loopStarted: !0 }),
                                    (a.gettingGpsLocationInterval = setInterval(function () {
                                        a.props.getDeliveryGuyGpsLocation(a.props.user.data.auth_token, a.props.order_id);
                                    }, 15e3));
                            }),
                            a
                        );
                    }
                    return (
                        Object(s.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    (3 !== this.props.orderstatus_id && 4 !== this.props.orderstatus_id) || this.__getDeliveryGuyLocationOnce();
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    (3 !== e.orderstatus_id && 4 !== e.orderstatus_id) || this.state.loopStarted || this.__getDeliveryGuyGpsLocationLoop(),
                                        this.props.delivery_gps_location !== e.delivery_gps_location && (this.state.show_delivery_gps || this.setState({ show_delivery_gps: !0 }));
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    clearInterval(this.gettingGpsLocationInterval);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return c.a.createElement(
                                        c.a.Fragment,
                                        null,
                                        c.a.createElement(h, {
                                            restaurant_latitude: this.props.restaurant_latitude,
                                            restaurant_longitude: this.props.restaurant_longitude,
                                            show_delivery_gps: this.state.show_delivery_gps,
                                            delivery_gps_location: this.props.delivery_gps_location,
                                            deliveryLocation: this.props.deliveryLocation,
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(i.Component),
                E = Object(d.b)(
                    function (e) {
                        return { user: e.user.user, delivery_gps_location: e.gps_location.get_delivery_guy_gps_location };
                    },
                    { getDeliveryGuyGpsLocation: u.a }
                )(y),
                b = a(25),
                N = a(253),
                _ = a(145),
                k = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++) s[i] = arguments[i];
                        return (
                            ((a = Object(l.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(s)))).state = { updatedUserInfo: !1, show_delivery_details: !1, sendBackToOrdersPage: !1 }),
                            (a.__refreshOrderStatus = function () {
                                var e = a.props.user;
                                e.success &&
                                    (a.refs.refreshButton.setAttribute("disabled", "disabled"),
                                    a.props.updateUserInfo(e.data.id, e.data.auth_token, a.props.match.params.unique_order_id),
                                    a.setState({ updatedUserInfo: !0 }),
                                    a.refs.btnSpinner.classList.remove("hidden"),
                                    setTimeout(function () {
                                        a.refs.refreshButton && a.refs.btnSpinner.classList.add("hidden");
                                    }, 2e3),
                                    setTimeout(function () {
                                        a.refs.refreshButton && a.refs.refreshButton.hasAttribute("disabled") && a.refs.refreshButton.removeAttribute("disabled");
                                    }, 2e3));
                            }),
                            (a.__getDirectionToRestaurant = function (e, t) {
                                var a = "http://maps.google.com/maps?q=" + e + "," + t;
                                window.open(a, "_blank");
                            }),
                            a
                        );
                    }
                    return (
                        Object(s.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this,
                                        t = this.props.user;
                                    t.success && this.props.updateUserInfo(t.data.id, t.data.auth_token, this.props.match.params.unique_order_id),
                                        (this.refreshSetInterval = setInterval(function () {
                                            e.__refreshOrderStatus();
                                        }, 15e3));
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    null === e.user.running_order && this.context.router.history.push("/my-orders"), null !== e.user.delivery_details && this.setState({ show_delivery_details: !0 });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    clearInterval(this.refreshSetInterval);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    if (window.innerWidth > 768) return c.a.createElement(N.a, { to: "/" });
                                    if (null === localStorage.getItem("storeColor")) return c.a.createElement(N.a, { to: "/" });
                                    var t = this.props.user;
                                    return t.success
                                        ? c.a.createElement(
                                              c.a.Fragment,
                                              null,
                                              c.a.createElement(b.a, {
                                                  seotitle: localStorage.getItem("seoMetaTitle"),
                                                  seodescription: localStorage.getItem("seoMetaDescription"),
                                                  ogtype: "website",
                                                  ogtitle: localStorage.getItem("seoOgTitle"),
                                                  ogdescription: localStorage.getItem("seoOgDescription"),
                                                  ogurl: window.location.href,
                                                  twittertitle: localStorage.getItem("seoTwitterTitle"),
                                                  twitterdescription: localStorage.getItem("seoTwitterDescription"),
                                              }),
                                              c.a.createElement(m.a, { boxshadow: !0, has_title: !0, title: t.running_order && t.running_order.unique_order_id, disable_search: !0, back_to_home: !1, goto_orders_page: !0 }),
                                              t.running_order &&
                                                  c.a.createElement(
                                                      c.a.Fragment,
                                                      null,
                                                      "true" === localStorage.getItem("showMap") &&
                                                          c.a.createElement(E, {
                                                              restaurant_latitude: t.running_order.restaurant.latitude,
                                                              restaurant_longitude: t.running_order.restaurant.longitude,
                                                              order_id: t.running_order.id,
                                                              orderstatus_id: t.running_order.orderstatus_id,
                                                              deliveryLocation: t.running_order.location,
                                                          }),
                                                      c.a.createElement(
                                                          "div",
                                                          { className: "bg-white height-100", style: { position: "absolute", top: "true" === localStorage.getItem("showMap") ? "26.3rem" : "4rem" } },
                                                          this.state.show_delivery_details &&
                                                              c.a.createElement(
                                                                  "div",
                                                                  { className: "block block-link-shadow pb-2 m-0 delivery-assigned-block" },
                                                                  c.a.createElement(
                                                                      "div",
                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "float-right" }
//                                                                          c.a.createElement("img", { src: "/assets/img/delivery/" + t.delivery_details.photo, className: "img-fluid img-avatar", alt: t.delivery_details.name })
                                                                      ),
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                          c.a.createElement("div", { className: "font-w600 font-size-h5 mb-5" }, t.delivery_details.name, " ", localStorage.getItem("deliveryGuyAfterName")),
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "font-size-sm text-muted" },
                                                                              t.delivery_details.description,
                                                                              " ",
                                                                              c.a.createElement("br", null),
                                                                              c.a.createElement("span", null, localStorage.getItem("vehicleText"), " ", t.delivery_details.vehicle_number)
                                                                          ),
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "" },
                                                                              c.a.createElement(
                                                                                  "a",
                                                                                  { className: "btn btn-get-direction mt-2", href: "tel:" + t.delivery_details.phone },
                                                                                  localStorage.getItem("callNowButton"),
                                                                                  " ",
                                                                                  c.a.createElement("i", { className: "si si-call-out" })
                                                                              )
                                                                          )
                                                                      )
                                                                  )
                                                              ),
                                                          c.a.createElement(
                                                              "div",
                                                              { className: "mt-15 mb-200" },
                                                              1 === t.running_order.orderstatus_id &&
                                                                  c.a.createElement(
                                                                      c.a.Fragment,
                                                                      null,
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-placed.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderPlacedTitle"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderPlacedTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderPlacedSub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" })
                                                                  ),
                                                              2 === t.running_order.orderstatus_id &&
                                                                  c.a.createElement(
                                                                      c.a.Fragment,
                                                                      null,
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-preparing.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderPreparingTitle"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderPreparingTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderPreparingSub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" }),
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-placed.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderPlacedTitle"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderPlacedTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderPlacedSub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" })
                                                                  ),
                                                              3 === t.running_order.orderstatus_id &&
                                                                  c.a.createElement(
                                                                      c.a.Fragment,
                                                                      null,
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-onway.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderDeliveryAssignedTitle"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderDeliveryAssignedTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderDeliveryAssignedSub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" }),
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-preparing.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderPreparingTitle"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderPreparingTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderPreparingSub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" }),
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-placed.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderPlacedTitle"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderPlacedTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderPlacedSub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" })
                                                                  ),
                                                              4 === t.running_order.orderstatus_id &&
                                                                  c.a.createElement(
                                                                      c.a.Fragment,
                                                                      null,
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              "true" === localStorage.getItem("enableDeliveryPin") &&
                                                                                  c.a.createElement(
                                                                                      c.a.Fragment,
                                                                                      null,
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "font-size-h4 mb-5 px-15 text-center" },
                                                                                          c.a.createElement(
                                                                                              "div",
                                                                                              { className: "font-w600 btn-deliverypin" },
                                                                                              c.a.createElement("span", { className: "text-muted" }, localStorage.getItem("runningOrderDeliveryPin"), " "),
                                                                                              this.props.user.data.delivery_pin
                                                                                          )
                                                                                      ),
                                                                                      c.a.createElement("hr", null)
                                                                                  ),
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-onway.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderOnwayTitle"),
                                                                                              style: { transform: "scaleX(-1)" },
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderOnwayTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderOnwaySub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" }),
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-onway.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderDeliveryAssignedTitle"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderDeliveryAssignedTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderDeliveryAssignedSub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" }),
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-preparing.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderPreparingTitle"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderPreparingTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderPreparingSub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" }),
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-placed.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderPlacedTitle"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderPlacedTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderPlacedSub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" })
                                                                  ),
                                                              6 === t.running_order.orderstatus_id &&
                                                                  c.a.createElement(
                                                                      "div",
                                                                      { className: "row" },
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "col-md-12" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "block block-link-shadow" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block-content block-content-full clearfix py-0" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "float-right" },
                                                                                      c.a.createElement("img", {
                                                                                          src: "/assets/img/order-canceled.png",
                                                                                          className: "img-fluid img-avatar",
                                                                                          alt: localStorage.getItem("runningOrderCanceledTitle"),
                                                                                          style: { transform: "scaleX(-1)" },
                                                                                      })
                                                                                  ),
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "float-left mt-20", style: { width: "75%" } },
                                                                                      c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderCanceledTitle")),
                                                                                      c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderCanceledSub"))
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" })
                                                                  ),
                                                              7 === t.running_order.orderstatus_id &&
                                                                  c.a.createElement(
                                                                      c.a.Fragment,
                                                                      null,
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/ready-for-selfpickup.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderReadyForPickup"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderReadyForPickup")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderReadyForPickupSub"))
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "button",
                                                                                          {
                                                                                              className: "btn btn-get-direction mt-2",
                                                                                              onClick: function () {
                                                                                                  return e.__getDirectionToRestaurant(t.running_order.restaurant.latitude, t.running_order.restaurant.longitude);
                                                                                              },
                                                                                          },
                                                                                          c.a.createElement("i", { className: "si si-action-redo mr-5" }),
                                                                                          localStorage.getItem("deliveryGetDirectionButton")
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" }),
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-preparing.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderPreparingTitle"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderPreparingTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderPreparingSub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" }),
                                                                      c.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          c.a.createElement(
                                                                              "div",
                                                                              { className: "col-md-12" },
                                                                              c.a.createElement(
                                                                                  "div",
                                                                                  { className: "block block-link-shadow" },
                                                                                  c.a.createElement(
                                                                                      "div",
                                                                                      { className: "block-content block-content-full clearfix py-0" },
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-right" },
                                                                                          c.a.createElement("img", {
                                                                                              src: "/assets/img/order-placed.gif",
                                                                                              className: "img-fluid img-avatar",
                                                                                              alt: localStorage.getItem("runningOrderPlacedTitle"),
                                                                                          })
                                                                                      ),
                                                                                      c.a.createElement(
                                                                                          "div",
                                                                                          { className: "float-left mt-20", style: { width: "75%" } },
                                                                                          c.a.createElement("div", { className: "font-w600 font-size-h4 mb-5" }, localStorage.getItem("runningOrderPlacedTitle")),
                                                                                          c.a.createElement("div", { className: "font-size-sm text-muted" }, localStorage.getItem("runningOrderPlacedSub"))
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      c.a.createElement("hr", { className: "m-0" })
                                                                  )
                                                          )
                                                      ),
                                                      c.a.createElement(
                                                          "div",
                                                          null,
                                                          c.a.createElement(
                                                              "button",
                                                              {
                                                                  className: "btn btn-lg btn-refresh-status",
                                                                  ref: "refreshButton",
                                                                  onClick: this.__refreshOrderStatus,
                                                                  style: { backgroundColor: localStorage.getItem("cartColorBg"), color: localStorage.getItem("cartColorText") },
                                                              },
                                                              localStorage.getItem("runningOrderRefreshButton"),
                                                              " ",
                                                              c.a.createElement("span", { ref: "btnSpinner", className: "hidden" }, c.a.createElement("i", { className: "fa fa-refresh fa-spin" }))
                                                          )
                                                      )
                                                  )
                                          )
                                        : c.a.createElement(N.a, { to: "/" });
                                },
                            },
                        ]),
                        t
                    );
                })(i.Component);
            k.contextTypes = {
                router: function () {
                    return null;
                },
            };
            t.default = Object(d.b)(
                function (e) {
                    return { user: e.user.user };
                },
                { updateUserInfo: _.i }
            )(k);
        },
    },
]);
