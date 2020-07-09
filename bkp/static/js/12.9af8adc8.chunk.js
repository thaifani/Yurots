(window.webpackJsonp = window.webpackJsonp || []).push([
    [12],
    {
        143: function (e, t, a) {
            "use strict";
            var r = a(3),
                n = a(4),
                o = a(6),
                c = a(5),
                l = a(7),
                s = a(0),
                i = a.n(s),
                u = a(15),
                m = a.n(u),
                d = a(144),
                g = a.n(d),
                p = (function (e) {
                    function t() {
                        return Object(r.a)(this, t), Object(o.a)(this, Object(c.a)(t).apply(this, arguments));
                    }
                    return (
                        Object(l.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    return i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                            "div",
                                            { className: "col-12 p-0 fixed", style: { zIndex: "9" } },
                                            i.a.createElement(
                                                "div",
                                                { className: "block m-0" },
                                                i.a.createElement(
                                                    "div",
                                                    { className: "block-content p-0" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "input-group ".concat(this.props.boxshadow && "search-box") },
                                                        !this.props.disable_back_button &&
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "input-group-prepend" },
                                                                this.props.back_to_home &&
                                                                    i.a.createElement(
                                                                        "button",
                                                                        {
                                                                            type: "button",
                                                                            className: "btn search-navs-btns",
                                                                            style: { position: "relative" },
                                                                            onClick: function () {
                                                                                return e.context.router.history.push("/");
                                                                            },
                                                                        },
                                                                        i.a.createElement("i", { className: "si si-arrow-left" }),
                                                                        i.a.createElement(m.a, { duration: "500" })
                                                                    ),
                                                                this.props.goto_orders_page &&
                                                                    i.a.createElement(
                                                                        "button",
                                                                        {
                                                                            type: "button",
                                                                            className: "btn search-navs-btns",
                                                                            style: { position: "relative" },
                                                                            onClick: function () {
                                                                                return e.context.router.history.push("/my-orders");
                                                                            },
                                                                        },
                                                                        i.a.createElement("i", { className: "si si-arrow-left" }),
                                                                        i.a.createElement(m.a, { duration: "500" })
                                                                    ),
                                                                this.props.goto_accounts_page &&
                                                                    i.a.createElement(
                                                                        "button",
                                                                        {
                                                                            type: "button",
                                                                            className: "btn search-navs-btns",
                                                                            style: { position: "relative" },
                                                                            onClick: function () {
                                                                                return e.context.router.history.push("/my-account");
                                                                            },
                                                                        },
                                                                        i.a.createElement("i", { className: "si si-arrow-left" }),
                                                                        i.a.createElement(m.a, { duration: "500" })
                                                                    ),
                                                                !this.props.back_to_home &&
                                                                    !this.props.goto_orders_page &&
                                                                    !this.props.goto_accounts_page &&
                                                                    i.a.createElement(
                                                                        "button",
                                                                        { type: "button", className: "btn search-navs-btns", style: { position: "relative" }, onClick: this.context.router.history.goBack },
                                                                        i.a.createElement("i", { className: "si si-arrow-left" }),
                                                                        i.a.createElement(m.a, { duration: "500" })
                                                                    )
                                                            ),
                                                        i.a.createElement(
                                                            "p",
                                                            { className: "form-control search-input" },
                                                            this.props.logo && i.a.createElement("img", { src: "/assets/img/logos/logo.png", alt: localStorage.getItem("storeName"), width: "120" }),
                                                            this.props.has_title ? i.a.createElement("span", { className: "nav-page-title" }, this.props.title) : null,
                                                            this.props.has_delivery_icon &&
                                                                i.a.createElement(g.a, { left: !0 }, i.a.createElement("img", { src: "/assets/img/various/delivery-bike.png", alt: this.props.title, className: "nav-page-title" }))
                                                        ),
                                                        this.props.has_restaurant_info
                                                            ? i.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className: "fixed-restaurant-info hidden",
                                                                      ref: function (t) {
                                                                          e.heading = t;
                                                                      },
                                                                  },
                                                                  i.a.createElement("span", { className: "font-w700 fixedRestaurantName" }, this.props.restaurant.name),
                                                                  i.a.createElement("br", null),
                                                                  i.a.createElement(
                                                                      "span",
                                                                      { className: "font-w400 fixedRestaurantTime" },
                                                                      i.a.createElement("i", { className: "si si-clock" }),
                                                                      " ",
                                                                      this.props.restaurant.delivery_time,
                                                                      " ",
                                                                      localStorage.getItem("homePageMinsText")
                                                                  )
                                                              )
                                                            : null,
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "input-group-append" },
                                                            !this.props.disable_search &&
                                                                i.a.createElement(
                                                                    "button",
                                                                    { type: "submit", className: "btn search-navs-btns", style: { position: "relative" } },
                                                                    i.a.createElement("i", { className: "si si-magnifier" }),
                                                                    i.a.createElement(m.a, { duration: "500" })
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
                })(s.Component);
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
                    o = t.opposite,
                    c = (a ? 1 : 0) | (r ? 2 : 0) | (n ? 16 : 0) | (o ? 32 : 0) | (e ? 64 : 0);
                if (m.hasOwnProperty(c)) return m[c];
                if (!n != !(e && o)) {
                    var l = [r, a];
                    (a = l[0]), (r = l[1]);
                }
                var s = a ? "-100%" : r ? "100%" : "0",
                    u = e
                        ? "from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d(" + s + ", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    "
                        : "from {\n        transform: translate3d(" +
                          s +
                          ", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";
                return (m[c] = (0, i.animation)(u)), m[c];
            }
            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.defaults,
                    t = e.children,
                    a = (e.out, e.forever),
                    n = e.timeout,
                    o = e.duration,
                    c = void 0 === o ? i.defaults.duration : o,
                    s = e.delay,
                    u = void 0 === s ? i.defaults.delay : s,
                    m = e.count,
                    d = void 0 === m ? i.defaults.count : m,
                    g = (function (e, t) {
                        var a = {};
                        for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]));
                        return a;
                    })(e, ["children", "out", "forever", "timeout", "duration", "delay", "count"]),
                    p = { make: r, duration: void 0 === n ? c : n, delay: u, forever: a, count: d, style: { animationFillMode: "both" } };
                return g.left, g.right, g.mirror, g.opposite, (0, l.default)(g, p, p, t);
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o,
                c = a(53),
                l = (o = c) && o.__esModule ? o : { default: o },
                s = a(1),
                i = a(39),
                u = { out: s.bool, left: s.bool, right: s.bool, mirror: s.bool, opposite: s.bool, duration: s.number, timeout: s.number, delay: s.number, count: s.number, forever: s.bool },
                m = {};
            (n.propTypes = u), (t.default = n), (e.exports = t.default);
        },
        145: function (e, t, a) {
            "use strict";
            a.d(t, "d", function () {
                return l;
            }),
                a.d(t, "f", function () {
                    return s;
                }),
                a.d(t, "e", function () {
                    return i;
                }),
                a.d(t, "i", function () {
                    return u;
                }),
                a.d(t, "b", function () {
                    return m;
                }),
                a.d(t, "g", function () {
                    return d;
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
                    return h;
                }),
                a.d(t, "a", function () {
                    return y;
                });
            var r = a(17),
                n = a(11),
                o = a(10),
                c = a.n(o),
                l = function (e, t, a, o, l, s, i) {
                    return function (u) {
                        c.a
                            .post(n.L, { name: e, email: t, password: a, accessToken: o, phone: l, provider: s, address: i })
                            .then(function (e) {
                                var t = e.data;
                                return u({ type: r.c, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                s = function (e, t, a, o, l) {
                    return function (s) {
                        c.a
                            .post(n.S, { name: e, email: t, phone: a, password: o, address: l })
                            .then(function (e) {
                                var t = e.data;
                                return s({ type: r.e, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                i = function (e) {
                    return function (t) {
                        e = [];
                        localStorage.removeItem("userSetAddress"), localStorage.removeItem("geoLocation"), t({ type: r.d, payload: e }), t({ type: r.f, payload: !1 }), t({ type: r.b, payload: [] });
                    };
                },
                u = function (e, t, a) {
                    return function (o) {
                        return c.a
                            .post(n.ab, { token: t, user_id: e, unique_order_id: a })
                            .then(function (e) {
                                var t = e.data;
                                return o({ type: r.i, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                m = function (e, t) {
                    return function (a) {
                        c.a
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
                d = function (e, t, a, o) {
                    return function (l) {
                        c.a
                            .post(n.W, { email: e, phone: t, accessToken: a, provider: o })
                            .then(function (e) {
                                var t = e.data;
                                return l({ type: r.g, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                g = function (e, t) {
                    return function (a) {
                        c.a
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
                        c.a
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
                        c.a
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
                h = function (e, t) {
                    return function (a) {
                        c.a
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
                y = function (e, t, a) {
                    return function (o) {
                        c.a
                            .post(n.d, { email: e, code: t, password: a })
                            .then(function (e) {
                                var t = e.data;
                                return o({ type: r.a, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                };
        },
        146: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return r;
            });
            var r = function (e) {
                if (e) {
                    var t = parseFloat(e);
                    return (t = t.toFixed(2));
                }
                return 0;
            };
        },
        147: function (e, t, a) {
            "use strict";
            a.d(t, "b", function () {
                return n;
            }),
                a.d(t, "a", function () {
                    return o;
                }),
                a.d(t, "c", function () {
                    return c;
                });
            var r = a(42),
                n = function (e) {
                    return { type: r.b, payload: e };
                },
                o = function (e) {
                    return { type: r.a, payload: e };
                },
                c = function (e) {
                    return { type: r.c, payload: e };
                };
        },
        148: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return o;
            });
            var r = a(69),
                n = a(146),
                o = function (e) {
                    return function (t) {
                        var a = {
                            productQuantity: e.reduce(function (e, t) {
                                return ++e;
                            }, 0),
                            totalPrice: e.reduce(function (e, t) {
                                var a = 0;
                                return (
                                    t.selectedaddons &&
                                        t.selectedaddons.map(function (e) {
                                            return (a += parseFloat(e.price));
                                        }),
                                    (e += t.price * t.quantity + a * t.quantity),
                                    (e = parseFloat(e)),
                                    Object(n.a)(e),
                                    e
                                );
                            }, 0),
                        };
                        t({ type: r.a, payload: a });
                    };
                };
        },
        151: function (e, t, a) {
            "use strict";
            a.d(t, "b", function () {
                return s;
            }),
                a.d(t, "c", function () {
                    return i;
                }),
                a.d(t, "d", function () {
                    return u;
                }),
                a.d(t, "e", function () {
                    return m;
                }),
                a.d(t, "g", function () {
                    return d;
                }),
                a.d(t, "f", function () {
                    return g;
                }),
                a.d(t, "h", function () {
                    return p;
                }),
                a.d(t, "a", function () {
                    return f;
                });
            var r = a(66),
                n = a(19),
                o = a(11),
                c = a(10),
                l = a.n(c),
                s = function (e) {
                    return function (t) {
                        l.a
                            .post(o.A + "/" + e)
                            .then(function (e) {
                                var a = e.data;
                                return t({ type: n.b, payload: a });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                i = function (e) {
                    return function (t) {
                        l.a
                            .post(o.z + "/" + e)
                            .then(function (e) {
                                var a = e.data;
                                return t({ type: n.c, payload: a });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                u = function (e) {
                    return function (t) {
                        l.a
                            .post(o.B + "/" + e)
                            .then(function (e) {
                                var a = e.data;
                                return t({ type: n.d, payload: a });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                m = function (e) {
                    return function (t) {
                        l.a
                            .post(o.F, { id: e })
                            .then(function (e) {
                                var a = e.data;
                                return t({ type: n.h, payload: a });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                d = function () {
                    return function (e) {
                        return e({ type: n.f, payload: [] });
                    };
                },
                g = function () {
                    return function (e) {
                        return e({ type: n.e, payload: [] });
                    };
                },
                p = function (e, t, a, o) {
                    return function (c, l) {
                        var s = a + t,
                            i = o + t,
                            u = [],
                            m = [];
                        return (
                            e &&
                                [e].length >= 0 &&
                                Object.keys(e).forEach(function (a) {
                                    e[a].forEach(function (e) {
                                        u.push(e),
                                            (m = u.filter(function (e) {
                                                return -1 !== e.name.toLowerCase().indexOf(t.toLowerCase());
                                            }));
                                    });
                                }),
                            m.length > 0 ? c({ type: n.g, payload: { items: Object(r.a)({}, s, m) } }) : m.length <= 0 ? c({ type: n.g, payload: { items: Object(r.a)({}, i, m) } }) : void 0
                        );
                    };
                },
                f = function (e) {
                    return function (t) {
                        return t({ type: n.a, payload: e });
                    };
                };
        },
        158: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return s;
            });
            var r = a(70),
                n = a(11),
                o = a(10),
                c = a.n(o),
                l = a(148),
                s = function (e, t, a, o, s, i, u, m, d, g) {
                    return function (p, f) {
                        c.a
                            .post(n.Q, { token: e.data.auth_token, user: e, order: t, coupon: a, location: o, order_comment: s, total: i, method: u, payment_token: m, delivery_type: d, partial_wallet: g })
                            .then(function (e) {
                                var t = e.data;
                                if (t.success) {
                                    p({ type: r.a, payload: t });
                                    var a = f().cart.products;
                                    localStorage.removeItem("orderComment");
                                    for (var n = a.length - 1; n >= 0; n--) a.splice(n, 1);
                                    p(Object(l.a)(a));
                                }
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                };
        },
        167: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return n;
            });
            var r = a(71),
                n = function () {
                    return function (e) {
                        return e({ type: r.a, payload: !0 });
                    };
                };
        },
        168: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return r;
            });
            var r = function (e, t, a, r) {
                function n(e) {
                    return (e * Math.PI) / 180;
                }
                var o = n(r - t),
                    c = n(a - e),
                    l = Math.sin(o / 2) * Math.sin(o / 2) + Math.cos(n(t)) * Math.cos(n(r)) * Math.sin(c / 2) * Math.sin(c / 2);
                return 6371 * (2 * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l)));
            };
        },
        237: function (e, t, a) {
            "use strict";
            a.r(t);
            var r = a(3),
                n = a(4),
                o = a(6),
                c = a(5),
                l = a(7),
                s = a(0),
                i = a.n(s),
                u = a(147),
                m = a(145),
                d = a(143),
                g = a(14),
                p = a(146),
                f = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, l = new Array(n), s = 0; s < n; s++) l[s] = arguments[s];
                        return (
                            ((a = Object(o.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(l)))).state = { delivery_charges: 0, distance: 0 }),
                            (a.calculateDynamicDeliveryCharge = function () {
                                var e = a.props.restaurant_info,
                                    t = a.state.distance;
                                if ((console.log("Distance from user to restaurant: " + t + " km"), t > e.base_delivery_distance)) {
                                    var r = t - e.base_delivery_distance;
                                    console.log("Extra Distance: " + r + " km");
                                    var n = (r / e.extra_delivery_distance) * e.extra_delivery_charge;
                                    console.log("Extra Charge: " + n);
                                    var o = parseFloat(e.base_delivery_charge) + parseFloat(n);
                                    console.log("Total Charge: " + o), a.setState({ delivery_charges: o });
                                } else a.setState({ delivery_charges: e.base_delivery_charge });
                            }),
                            (a.getTotalAfterCalculation = function () {
                                var e = a.props,
                                    t = e.total,
                                    r = e.restaurant_info,
                                    n = e.coupon,
                                    o = 0;
                                return (
                                    (o = n.code
                                        ? "PERCENTAGE" === n.discount_type
                                            ? Object(p.a)(
                                                  Object(p.a)(parseFloat(t) + parseFloat(r.restaurant_charges || 0) + parseFloat(a.state.delivery_charges || 0)) -
                                                      Object(p.a)((n.discount / 100) * (parseFloat(t) + parseFloat(r.restaurant_charges || 0) + parseFloat(a.state.delivery_charges || 0)))
                                              )
                                            : Object(p.a)(parseFloat(t) + (parseFloat(r.restaurant_charges) || 0) + (parseFloat(a.state.delivery_charges) || 0) - (parseFloat(n.discount) || 0))
                                        : Object(p.a)(parseFloat(t) + parseFloat(r.restaurant_charges || 0) + parseFloat(a.state.delivery_charges || 0))),
                                    "true" === localStorage.getItem("taxApplicable") ? (o = Object(p.a)(parseFloat(parseFloat(o) + parseFloat(parseFloat(localStorage.getItem("taxPercentage")) / 100) * o))) : o
                                );
                            }),
                            a
                        );
                    }
                    return (
                        Object(l.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    "SELFPICKUP" === localStorage.getItem("userSelected") ? this.setState({ delivery_charges: 0 }) : this.setState({ delivery_charges: this.props.restaurant_info.delivery_charges });
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    var t = this;
                                    "DELIVERY" === localStorage.getItem("userSelected") &&
                                        this.props.restaurant_info.delivery_charges !== e.restaurant_info.delivery_charges &&
                                        this.setState({ delivery_charges: e.restaurant_info.delivery_charges }),
                                        e.distance &&
                                            "DELIVERY" === localStorage.getItem("userSelected") &&
                                            "DYNAMIC" === e.restaurant_info.delivery_charge_type &&
                                            this.setState({ distance: e.distance }, function () {
                                                t.calculateDynamicDeliveryCharge();
                                            });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.total,
                                        a = e.restaurant_info,
                                        r = e.coupon;
                                    return i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                            "div",
                                            { className: "bg-white bill-details mb-200" },
                                            i.a.createElement(
                                                "div",
                                                { className: "p-15" },
                                                i.a.createElement("h2", { className: "bill-detail-text m-0" }, localStorage.getItem("cartBillDetailsText")),
                                                i.a.createElement(
                                                    "div",
                                                    { className: "display-flex" },
                                                    i.a.createElement("div", { className: "flex-auto" }, localStorage.getItem("cartItemTotalText")),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "flex-auto text-right" },
                                                        "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                        Object(p.a)(t),
                                                        "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                    )
                                                ),
                                                "0.00" === a.restaurant_charges || null === a.restaurant_charges
                                                    ? null
                                                    : i.a.createElement(
                                                          "div",
                                                          { className: "display-flex" },
                                                          i.a.createElement("div", { className: "flex-auto" }, localStorage.getItem("cartRestaurantCharges")),
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "flex-auto text-right" },
                                                              "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                              a.restaurant_charges,
                                                              "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                          )
                                                      ),
                                                i.a.createElement("hr", null),
                                                0 === this.state.delivery_charges
                                                    ? i.a.createElement(
                                                          i.a.Fragment,
                                                          null,
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "display-flex" },
                                                              i.a.createElement("div", { className: "flex-auto" }, localStorage.getItem("cartDeliveryCharges")),
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "flex-auto text-right" },
                                                                  "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                                  "0",
                                                                  "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                              )
                                                          ),
                                                          i.a.createElement("hr", null)
                                                      )
                                                    : i.a.createElement(
                                                          i.a.Fragment,
                                                          null,
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "display-flex" },
                                                              i.a.createElement("div", { className: "flex-auto" }, localStorage.getItem("cartDeliveryCharges")),
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "flex-auto text-right" },
                                                                  "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                                  Object(p.a)(this.state.delivery_charges),
                                                                  "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                              )
                                                          ),
                                                          i.a.createElement("hr", null)
                                                      ),
                                                r.code &&
                                                    i.a.createElement(
                                                        i.a.Fragment,
                                                        null,
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "display-flex" },
                                                            i.a.createElement("div", { className: "flex-auto coupon-text" }, localStorage.getItem("cartCouponText")),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "flex-auto text-right coupon-text" },
                                                                i.a.createElement("span", null, "-"),
                                                                "PERCENTAGE" === r.discount_type
                                                                    ? r.discount + "%"
                                                                    : i.a.createElement(
                                                                          i.a.Fragment,
                                                                          null,
                                                                          "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat") + r.discount,
                                                                          "right" === localStorage.getItem("currencySymbolAlign") && r.discount + localStorage.getItem("currencyFormat")
                                                                      )
                                                            )
                                                        ),
                                                        i.a.createElement("hr", null)
                                                    ),
                                                "true" === localStorage.getItem("taxApplicable") &&
                                                    i.a.createElement(
                                                        i.a.Fragment,
                                                        null,
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "display-flex" },
                                                            i.a.createElement("div", { className: "flex-auto text-danger" }, localStorage.getItem("taxText")),
                                                            i.a.createElement("div", { className: "flex-auto text-right text-danger" }, i.a.createElement("span", null, "+"), localStorage.getItem("taxPercentage"), "%")
                                                        ),
                                                        i.a.createElement("hr", null)
                                                    ),
                                                i.a.createElement(
                                                    "div",
                                                    { className: "display-flex" },
                                                    i.a.createElement("div", { className: "flex-auto font-w700" }, localStorage.getItem("cartToPayText")),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "flex-auto text-right font-w700" },
                                                        "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                        this.getTotalAfterCalculation(),
                                                        "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                    )
                                                ),
                                                "SELFPICKUP" === localStorage.getItem("userSelected") && i.a.createElement("p", { className: "my-2 mt-3 text-danger font-weight-bold" }, localStorage.getItem("selectedSelfPickupMessage"))
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                h = Object(g.b)(function (e) {
                    return { coupon: e.coupon.coupon, restaurant_info: e.items.restaurant_info };
                }, {})(f),
                y = a(30),
                v = a(15),
                b = a.n(v),
                E = a(128),
                S = a(167),
                _ = a(158),
                N = (function (e) {
                    function t() {
                        return Object(r.a)(this, t), Object(o.a)(this, Object(c.a)(t).apply(this, arguments));
                    }
                    return (
                        Object(l.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    e.checkout !== this.props.checkout && this.context.router.history.push("/running-order");
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props.user;
                                    return i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                            "div",
                                            { className: "bg-white cart-checkout-block", style: { height: t.success && "SELFPICKUP" === localStorage.getItem("userSelected") ? "auto" : "auto" } },
                                            t.success
                                                ? null == t.data.default_address
                                                    ? i.a.createElement(
                                                          "div",
                                                          { className: "p-15" },
                                                          i.a.createElement("h2", { className: "almost-there-text m-0 pb-5" }, localStorage.getItem("cartSetYourAddress")),
                                                          i.a.createElement(
                                                              y.a,
                                                              { to: "/my-addresses", delay: 200, className: "btn btn-lg btn-continue", style: { position: "relative", backgroundColor: localStorage.getItem("storeColor") } },
                                                              localStorage.getItem("buttonNewAddress"),
                                                              i.a.createElement(b.a, { duration: 500 })
                                                          )
                                                      )
                                                    : i.a.createElement(
                                                          i.a.Fragment,
                                                          null,
                                                          "DELIVERY" === localStorage.getItem("userSelected") &&
                                                              i.a.createElement(
                                                                  i.a.Fragment,
                                                                  null,
                                                                  null
                                                              ),
                                                          i.a.createElement(
                                                              i.a.Fragment,
                                                              null,
                                                              this.props.is_operational
                                                                  ? i.a.createElement(
                                                                        "div",
                                                                        { style: { marginTop: "1.6rem" } },
                                                                        i.a.createElement(
                                                                            E.a,
                                                                            {
                                                                                onClick: function () {
                                                                                    return e.props.checkConfirmCart();
                                                                                },
                                                                                to: "/checkout",
                                                                                className: "btn btn-lg btn-make-payment",
                                                                                style: { backgroundColor: localStorage.getItem("cartColorBg"), color: localStorage.getItem("cartColorText"), position: "relative" },
                                                                            },
                                                                            localStorage.getItem("checkoutSelectPayment"),
                                                                            i.a.createElement(b.a, { duration: 400 })
                                                                        )
                                                                    )
                                                                  : i.a.createElement(
                                                                        "div",
                                                                        { className: "auth-error bg-danger" },
                                                                        i.a.createElement("div", { className: "error-shake" }, localStorage.getItem("cartRestaurantNotOperational"))
                                                                    )
                                                          )
                                                      )
                                                : i.a.createElement(
                                                      "div",
                                                      { className: "p-15" },
                                                      i.a.createElement("h2", { className: "almost-there-text m-0 pb-5" }, localStorage.getItem("cartLoginHeader")),
                                                      i.a.createElement("span", { className: "almost-there-sub text-muted" }, localStorage.getItem("cartLoginSubHeader")),
                                                      i.a.createElement(
                                                          y.a,
                                                          { to: "/login", delay: 200, className: "btn btn-lg btn-continue", style: { backgroundColor: localStorage.getItem("storeColor"), position: "relative" } },
                                                          localStorage.getItem("cartLoginButtonText"),
                                                          i.a.createElement(b.a, { duration: 500 })
                                                      )
                                                  )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component);
            N.contextTypes = {
                router: function () {
                    return null;
                },
            };
            var I = Object(g.b)(
                    function (e) {
                        return { user: e.user.user, addresses: e.addresses.addresses, cartProducts: e.cart.products, cartTotal: e.total.data, coupon: e.coupon.coupon, checkout: e.checkout.checkout, restaurant: e.restaurant };
                    },
                    { placeOrder: _.a, checkConfirmCart: S.a }
                )(N),
                x = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, l = new Array(n), s = 0; s < n; s++) l[s] = arguments[s];
                        return (
                            ((a = Object(o.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(l))))._getItemTotal = function (e) {
                                var t = 0,
                                    a = 0;
                                return (
                                    e.selectedaddons &&
                                        e.selectedaddons.map(function (e) {
                                            return (t += parseFloat(e.price));
                                        }),
                                    (a += e.price * e.quantity + t * e.quantity),
                                    (a = parseFloat(a)),
                                    "left" === localStorage.getItem("currencySymbolAlign") ? localStorage.getItem("currencyFormat") + Object(p.a)(a) : Object(p.a)(a) + localStorage.getItem("currencyFormat")
                                );
                            }),
                            (a._generateKey = function (e) {
                                var t = ""
                                    .concat(e, "_")
                                    .concat(new Date().getTime(), "_")
                                    .concat(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
                                return console.log(t), t;
                            }),
                            a
                        );
                    }
                    return (
                        Object(l.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.addProduct,
                                        a = e.removeProduct,
                                        r = e.item;
                                    return i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                            "div",
                                            { className: "cart-item-meta pt-15 pb-15 align-items-center" },
                                            i.a.createElement(
                                                "div",
                                                { className: "cart-item-name" },
                                                "true" === localStorage.getItem("showVegNonVegBadge") &&
                                                    null !== r.is_veg &&
                                                    i.a.createElement(
                                                        i.a.Fragment,
                                                        null,
                                                        r.is_veg
                                                            ? i.a.createElement("img", { src: "/assets/img/various/veg-icon.png", alt: "Veg", style: { width: "1rem" }, className: "mr-1" })
                                                            : i.a.createElement("img", { src: "/assets/img/various/non-veg-icon.png", alt: "Non-Veg", style: { width: "1rem" }, className: "mr-1" })
                                                    ),
                                                r.name,
                                                r.selectedaddons &&
                                                    i.a.createElement(
                                                        i.a.Fragment,
                                                        null,
                                                        i.a.createElement("br", null),
                                                        r.selectedaddons.map(function (e, t) {
                                                            return i.a.createElement(i.a.Fragment, { key: r.id + e.addon_id }, i.a.createElement("span", { style: { color: "#adadad", fontSize: "0.8rem" } }, (t ? ", " : "") + e.addon_name));
                                                        })
                                                    )
                                            ),
                                            i.a.createElement(
                                                "div",
                                                { className: "btn-group btn-group-sm cart-item-btn" },
                                                i.a.createElement(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        className: "btn btn-add-remove",
                                                        style: { color: localStorage.getItem("cartColor-bg") },
                                                        onClick: function () {
                                                            return a(r);
                                                        },
                                                    },
                                                    i.a.createElement("span", { className: "btn-dec" }, "-"),
                                                    i.a.createElement(b.a, { duration: "500" })
                                                ),
                                                i.a.createElement("button", { type: "button", className: "btn btn-quantity" }, r.quantity),
                                                i.a.createElement(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        className: "btn btn-add-remove",
                                                        style: { color: localStorage.getItem("cartColor-bg") },
                                                        onClick: function () {
                                                            return t(r);
                                                        },
                                                    },
                                                    i.a.createElement("span", { className: "btn-inc" }, "+"),
                                                    i.a.createElement(b.a, { duration: "500" })
                                                )
                                            ),
                                            i.a.createElement("div", { className: "cart-item-price" }, i.a.createElement(i.a.Fragment, null, this._getItemTotal(r)))
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                O = a(85),
                k = a(11),
                F = a(10),
                C = a.n(F),
                j = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, l = new Array(n), s = 0; s < n; s++) l[s] = arguments[s];
                        return (
                            ((a = Object(o.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(l)))).state = { inputCoupon: "", couponFailed: !0 }),
                            (a.handleInput = function (e) {
                                a.setState({ inputCoupon: e.target.value });
                            }),
                            (a.handleSubmit = function (e) {
                                e.preventDefault(), a.props.applyCoupon(a.state.inputCoupon, a.props.restaurant_info.id);
                            }),
                            a
                        );
                    }
                    return (
                        Object(l.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    localStorage.getItem("appliedCoupon") && this.props.applyCoupon(localStorage.getItem("appliedCoupon"), this.props.restaurant_info.id);
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    this.props.coupon !== e.coupon &&
                                        (e.coupon ? (localStorage.setItem("appliedCoupon", e.coupon.code), this.setState({ couponFailed: !0 })) : (localStorage.removeItem("appliedCoupon"), this.setState({ couponFailed: !1 })));
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.coupon;
                                    return i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                            "div",
                                            { className: "input-group mb-20" },
                                            i.a.createElement(
                                                "form",
                                                { className: "coupon-form", onSubmit: this.handleSubmit },
                                                i.a.createElement(
                                                    "div",
                                                    { className: "input-group" },
                                                    i.a.createElement("div", { className: "input-group-prepend" }, i.a.createElement("button", { className: "btn apply-coupon-btn" }, i.a.createElement("i", { className: "si si-tag" }))),
                                                    i.a.createElement("input", {
                                                        type: "text",
                                                        className: "form-control apply-coupon-input",
                                                        placeholder: localStorage.getItem("cartCouponText"),
                                                        onChange: this.handleInput,
                                                        style: { color: localStorage.getItem("storeColor") },
                                                        spellCheck: "false",
                                                    }),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "input-group-append" },
                                                        i.a.createElement(
                                                            "button",
                                                            { type: "submit", className: "btn apply-coupon-btn", onClick: this.handleSubmit },
                                                            i.a.createElement("i", { className: "si si-arrow-right" }),
                                                            i.a.createElement(b.a, { duration: "500" })
                                                        )
                                                    )
                                                )
                                            ),
                                            i.a.createElement(
                                                "div",
                                                { className: "coupon-status" },
                                                e.code &&
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "coupon-success pt-10 pb-10" },
                                                        '"' + e.code + '"',
                                                        " ",
                                                        localStorage.getItem("cartApplyCoupon"),
                                                        " ",
                                                        "PERCENTAGE" === e.discount_type
                                                            ? e.discount + "%"
                                                            : i.a.createElement(
                                                                  i.a.Fragment,
                                                                  null,
                                                                  "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat") + e.discount,
                                                                  "right" === localStorage.getItem("currencySymbolAlign") && e.discount + localStorage.getItem("currencyFormat"),
                                                                  localStorage.getItem("cartCouponOffText")
                                                              )
                                                    ),
                                                !this.state.couponFailed && i.a.createElement("div", { className: "coupon-fail pt-10 pb-10" }, localStorage.getItem("cartInvalidCoupon"))
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                w = Object(g.b)(
                    function (e) {
                        return { coupon: e.coupon.coupon, restaurant_info: e.items.restaurant_info };
                    },
                    {
                        applyCoupon: function (e, t) {
                            return function (a) {
                                C.a
                                    .post(k.c, { coupon: e, restaurant_id: t })
                                    .then(function (e) {
                                        var t = e.data;
                                        return a({ type: O.a, payload: t });
                                    })
                                    .catch(function (e) {
                                        console.log(e);
                                    });
                            };
                        },
                    }
                )(j),
                T = a(68),
                P = a(25),
                A = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, l = new Array(n), s = 0; s < n; s++) l[s] = arguments[s];
                        return (
                            ((a = Object(o.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(l)))).state = { comment: "" }),
                            (a.handleInput = function (e) {
                                a.setState({ comment: e.target.value }), localStorage.setItem("orderComment", e.target.value);
                            }),
                            a
                        );
                    }
                    return (
                        Object(l.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.setState({ comment: localStorage.getItem("orderComment") });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement("input", {
                                            className: "form-control order-comment mb-20",
                                            type: "text",
                                            placeholder: localStorage.getItem("cartSuggestionPlaceholder"),
                                            onChange: this.handleInput,
                                            value: this.state.comment || "",
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                M = a(253),
                R = a(29),
                D = (function (e) {
                    function t() {
                        return Object(r.a)(this, t), Object(o.a)(this, Object(c.a)(t).apply(this, arguments));
                    }
                    return (
                        Object(l.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.restaurant;
                                    return i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                            "div",
                                            { className: "bg-white" },
                                            0 === e.length
                                                ? i.a.createElement(
                                                      R.a,
                                                      { height: 150, width: 400, speed: 1.2, primaryColor: "#f3f3f3", secondaryColor: "#ecebeb" },
                                                      i.a.createElement("rect", { x: "20", y: "70", rx: "4", ry: "4", width: "80", height: "78" }),
                                                      i.a.createElement("rect", { x: "144", y: "85", rx: "0", ry: "0", width: "115", height: "18" }),
                                                      i.a.createElement("rect", { x: "144", y: "115", rx: "0", ry: "0", width: "165", height: "16" })
                                                  )
                                                : i.a.createElement(
                                                      i.a.Fragment,
                                                      null,
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "bg-light pb-10", style: { paddingTop: "5rem" } },
                                                          i.a.createElement("div", { className: "block-content block-content-full pt-2" }, i.a.createElement("img", { src: e.image, alt: e.name, className: "restaurant-image mt-0" })),
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "block-content block-content-full restaurant-info" },
                                                              i.a.createElement("h4", { className: "font-w600 mb-5 text-dark" }, e.name),
                                                              i.a.createElement("div", { className: "font-size-sm text-muted truncate-text text-muted" }, e.description),
                                                              1 === e.is_pureveg &&
                                                                  i.a.createElement(
                                                                      "p",
                                                                      { className: "mb-0" },
                                                                      i.a.createElement("span", { className: "font-size-sm pr-1 text-muted" }, localStorage.getItem("pureVegText")),
                                                                      i.a.createElement("img", { src: "/assets/img/various/pure-veg.png", alt: "PureVeg", style: { width: "20px" } })
                                                                  ),
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "text-center restaurant-meta mt-5 d-flex align-items-center justify-content-between text-muted" },
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "col-2 p-0 text-left" },
                                                                      i.a.createElement("i", { className: "fa fa-star", style: { color: localStorage.getItem("storeColor") } }),
                                                                      " ",
                                                                      e.rating
                                                                  ),
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "col-4 p-0 text-center" },
                                                                      i.a.createElement("i", { className: "si si-clock" }),
                                                                      " ",
                                                                      e.delivery_time,
                                                                      " ",
                                                                      localStorage.getItem("homePageMinsText")
                                                                  ),
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "col-6 p-0 text-center" },
                                                                      i.a.createElement("i", { className: "si si-wallet" }),
                                                                      " ",
                                                                      e.price_range,
                                                                      " ",
                                                                      localStorage.getItem("homePageForTwoText")
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
                })(s.Component),
                L = a(168),
                B = a(151),
                q = a(148),
                J = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, l = new Array(n), s = 0; s < n; s++) l[s] = arguments[s];
                        return (
                            ((a = Object(o.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(l)))).state = {
                                loading: !1,
                                alreadyRunningOrders: !1,
                                is_operational_loading: !0,
                                is_operational: !0,
                                distance: 0,
                                is_active: !1,
                                min_order_satisfied: !1,
                            }),
                            (a.addProduct = function (e) {
                                var t = a.props,
                                    r = t.cartProducts,
                                    n = t.updateCart,
                                    o = !1;
                                r.forEach(function (t) {
                                    t.id === e.id && JSON.stringify(t.selectedaddons) === JSON.stringify(e.selectedaddons) && ((t.quantity += 1), (o = !0));
                                }),
                                    o || r.push(e),
                                    n(r);
                            }),
                            (a.removeProduct = function (e) {
                                var t = a.props,
                                    r = t.cartProducts,
                                    n = t.updateCart,
                                    o = r.findIndex(function (t) {
                                        return t.id === e.id && JSON.stringify(t) === JSON.stringify(e);
                                    });
                                o >= 0 &&
                                    (r.forEach(function (t) {
                                        t.id === e.id && JSON.stringify(t) === JSON.stringify(e) && (1 === t.quantity ? r.splice(o, 1) : (t.quantity -= 1));
                                    }),
                                    n(r));
                            }),
                            (a.__doesRestaurantOperatesAtThisLocation = function (e) {
                                var t = a.props.user;
                                if (t.success) {
                                    var r = Object(L.a)(e.longitude, e.latitude, t.data.default_address.longitude, t.data.default_address.latitude);
                                    a.setState({ distance: r }), r <= e.delivery_radius ? a.setState({ is_operational: !0, is_operational_loading: !1 }) : a.setState({ is_operational: !1, is_operational_loading: !1 });
                                } else {
                                    var n = Object(L.a)(e.longitude, e.latitude, JSON.parse(localStorage.getItem("userSetAddress")).lng, JSON.parse(localStorage.getItem("userSetAddress")).lat);
                                    a.setState({ distance: n }), n <= e.delivery_radius ? a.setState({ is_operational: !0, is_operational_loading: !1 }) : a.setState({ is_operational: !1, is_operational_loading: !1 });
                                }
                            }),
                            (a.__isRestaurantActive = function (e) {
                                e.is_active && a.setState({ is_active: !0 });
                            }),
                            (a.__checkMinOrderSatisfied = function (e, t) {
                                if (e.min_order_price > 0) {
                                    var r = parseFloat(Object(p.a)(t.totalPrice)),
                                        n = parseFloat(Object(p.a)(e.min_order_price));
                                    r >= n ? (console.log("Order Can Be Placed", r + " -- " + n), a.setState({ min_order_satisfied: !0 })) : (console.log("Order CANNOT Be Placed", r + " -- " + n), a.setState({ min_order_satisfied: !1 }));
                                } else console.log("Min order price is not set"), a.setState({ min_order_satisfied: !0 });
                            }),
                            a
                        );
                    }
                    return (
                        Object(l.a)(t, e),
                        Object(n.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.props.cartProducts.length && document.getElementsByTagName("body")[0].classList.add("bg-grey"),
                                        null !== localStorage.getItem("activeRestaurant") && this.props.getRestaurantInfoById(localStorage.getItem("activeRestaurant"));
                                    var e = this.props.user;
                                    e.success
                                        ? (this.props.checkUserRunningOrder(e.data.id, e.data.auth_token),
                                          this.props.updateUserInfo(e.data.id, e.data.auth_token).then(function (e) {
                                              if ((console.log("THIS SHOULD BE CALLED: UPDATED USER", e), "undefined" !== typeof e)) {
                                                  var t = {
                                                      lat: e.payload.data.default_address.latitude,
                                                      lng: e.payload.data.default_address.longitude,
                                                      address: e.payload.data.default_address.address,
                                                      house: e.payload.data.default_address.house,
                                                      tag: e.payload.data.default_address.tag,
                                                  };
                                                  localStorage.setItem("userSetAddress", JSON.stringify(t));
                                              } else console.warn("Failed to fetch update user info... Solution: Reload Page");
                                          }))
                                        : this.setState({ alreadyRunningOrders: !1 });
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    e.restaurant_info.id && (this.__doesRestaurantOperatesAtThisLocation(e.restaurant_info), this.__isRestaurantActive(e.restaurant_info), this.__checkMinOrderSatisfied(e.restaurant_info, e.cartTotal)),
                                        e.running_order && this.setState({ alreadyRunningOrders: !0 });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    document.getElementsByTagName("body")[0].classList.remove("bg-grey");
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    if ((console.log("MIN ORDER SATISFIED?", this.state.min_order_satisfied), window.innerWidth > 768)) return i.a.createElement(M.a, { to: "/" });
                                    if (null === localStorage.getItem("storeColor")) return i.a.createElement(M.a, { to: "/" });
                                    this.props.cartProducts.length || document.getElementsByTagName("body")[0].classList.remove("bg-grey");
                                    var t = this.props,
                                        a = t.cartTotal,
                                        r = t.cartProducts,
                                        n = t.restaurant_info;
                                    return i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(P.a, {
                                            seotitle: localStorage.getItem("cartPageTitle"),
                                            seodescription: localStorage.getItem("seoMetaDescription"),
                                            ogtype: "website",
                                            ogtitle: localStorage.getItem("seoOgTitle"),
                                            ogdescription: localStorage.getItem("seoOgDescription"),
                                            ogurl: window.location.href,
                                            twittertitle: localStorage.getItem("seoTwitterTitle"),
                                            twitterdescription: localStorage.getItem("seoTwitterDescription"),
                                        }),
                                        this.state.loading
                                            ? i.a.createElement(
                                                  "div",
                                                  { className: "height-100 overlay-loading" },
                                                  i.a.createElement("div", null, i.a.createElement("img", { src: "/assets/img/loading-food.gif", alt: localStorage.getItem("pleaseWaitText") }))
                                              )
                                            : i.a.createElement(
                                                  i.a.Fragment,
                                                  null,
                                                  i.a.createElement(d.a, { boxshadow: !0, has_title: !0, title: localStorage.getItem("cartPageTitle"), disable_search: !0 }),
                                                  r.length
                                                      ? i.a.createElement(
                                                            i.a.Fragment,
                                                            null,
                                                            i.a.createElement(
                                                                "div",
                                                                null,
                                                                i.a.createElement(D, { restaurant: n }),
                                                                i.a.createElement(
                                                                    "div",
                                                                    { className: "block-content block-content-full bg-white pt-10 pb-5" },
                                                                    i.a.createElement("h2", { className: "item-text mb-10" }, localStorage.getItem("cartItemsInCartText")),
                                                                    r.map(function (t, a) {
                                                                        return i.a.createElement(x, { item: t, addProduct: e.addProduct, removeProduct: e.removeProduct, key: t.name + t.id + a });
                                                                    })
                                                                ),
                                                                i.a.createElement(A, null)
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                null,
                                                                i.a.createElement(w, null),
                                                                this.state.alreadyRunningOrders &&
                                                                    i.a.createElement(
                                                                        "div",
                                                                        { className: "auth-error ongoing-order-notify" },
                                                                        i.a.createElement(
                                                                            y.a,
                                                                            { to: "/my-orders", delay: 250, className: "ml-2" },
                                                                            localStorage.getItem("ongoingOrderMsg"),
                                                                            " ",
                                                                            i.a.createElement("i", { className: "si si-arrow-right ml-1", style: { fontSize: "0.7rem" } }),
                                                                            i.a.createElement(b.a, { duration: "500" })
                                                                        )
                                                                    )
                                                            ),
                                                            i.a.createElement("div", null, i.a.createElement(h, { total: a.totalPrice, distance: this.state.distance })),
                                                            this.state.is_operational_loading
                                                                ? i.a.createElement("img", { src: "/assets/img/various/spinner.svg", className: "location-loading-spinner", alt: "loading", style: { marginTop: "-1rem" } })
                                                                : i.a.createElement(
                                                                      i.a.Fragment,
                                                                      null,
                                                                      this.state.is_active
                                                                          ? i.a.createElement(
                                                                                i.a.Fragment,
                                                                                null,
                                                                                this.state.min_order_satisfied
                                                                                    ? i.a.createElement(I, {
                                                                                          restaurant_id: this.props.restaurant_info.id,
                                                                                          cart_page: this.context.router.route.location.pathname,
                                                                                          is_operational_loading: this.state.is_operational_loading,
                                                                                          is_operational: this.state.is_operational,
                                                                                      })
                                                                                    : i.a.createElement(
                                                                                          "div",
                                                                                          { className: "auth-error no-click" },
                                                                                          i.a.createElement(
                                                                                              "div",
                                                                                              { className: "error-shake" },
                                                                                              localStorage.getItem("restaurantMinOrderMessage"),
                                                                                              " ",
                                                                                              "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                                                              this.props.restaurant_info.min_order_price,
                                                                                              "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                                                          )
                                                                                      )
                                                                            )
                                                                          : i.a.createElement(
                                                                                "div",
                                                                                { className: "auth-error no-click" },
                                                                                i.a.createElement(
                                                                                    "div",
                                                                                    { className: "error-shake" },
                                                                                    this.props.restaurant_info && this.props.restaurant_info.name,
                                                                                    " :",
                                                                                    " ",
                                                                                    localStorage.getItem("notAcceptingOrdersMsg")
                                                                                )
                                                                            )
                                                                  )
                                                        )
                                                      : i.a.createElement(
                                                            "div",
                                                            { className: "bg-white cart-empty-block" },
                                                            i.a.createElement("img", { className: "cart-empty-img", src: "/assets/img/cart-empty.png", alt: localStorage.getItem("cartEmptyText") }),
                                                            i.a.createElement("h2", { className: "cart-empty-text mt-50 text-center" }, localStorage.getItem("cartEmptyText")),
                                                            this.state.alreadyRunningOrders &&
                                                                i.a.createElement(
                                                                    "div",
                                                                    { className: "auth-error ongoing-order-notify", style: { position: "fixed", bottom: "4.5rem" } },
                                                                    i.a.createElement(
                                                                        y.a,
                                                                        { to: "/my-orders", delay: 250, className: "ml-2" },
                                                                        localStorage.getItem("ongoingOrderMsg"),
                                                                        " ",
                                                                        i.a.createElement("i", { className: "si si-arrow-right ml-1", style: { fontSize: "0.7rem" } }),
                                                                        i.a.createElement(b.a, { duration: "500" })
                                                                    )
                                                                ),
                                                            i.a.createElement(T.a, { active_cart: !0 })
                                                        )
                                              )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component);
            J.contextTypes = {
                router: function () {
                    return null;
                },
            };
            t.default = Object(g.b)(
                function (e) {
                    return { restaurant_info: e.items.restaurant_info, cartProducts: e.cart.products, cartTotal: e.total.data, user: e.user.user, running_order: e.user.running_order, restaurant: e.restaurant };
                },
                { checkUserRunningOrder: m.b, updateCart: q.a, addProduct: u.a, removeProduct: u.c, getRestaurantInfoById: B.c, updateUserInfo: m.i }
            )(J);
        },
    },
]);
