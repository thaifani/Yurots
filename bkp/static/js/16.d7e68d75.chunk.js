(window.webpackJsonp = window.webpackJsonp || []).push([
    [16],
    {
        143: function (e, t, a) {
            "use strict";
            var r = a(3),
                o = a(4),
                n = a(6),
                l = a(5),
                c = a(7),
                s = a(0),
                i = a.n(s),
                m = a(15),
                u = a.n(m),
                p = a(144),
                d = a.n(p),
                g = (function (e) {
                    function t() {
                        return Object(r.a)(this, t), Object(n.a)(this, Object(l.a)(t).apply(this, arguments));
                    }
                    return (
                        Object(c.a)(t, e),
                        Object(o.a)(t, [
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
                                                                        i.a.createElement(u.a, { duration: "500" })
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
                                                                        i.a.createElement(u.a, { duration: "500" })
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
                                                                        i.a.createElement(u.a, { duration: "500" })
                                                                    ),
                                                                !this.props.back_to_home &&
                                                                    !this.props.goto_orders_page &&
                                                                    !this.props.goto_accounts_page &&
                                                                    i.a.createElement(
                                                                        "button",
                                                                        { type: "button", className: "btn search-navs-btns", style: { position: "relative" }, onClick: this.context.router.history.goBack },
                                                                        i.a.createElement("i", { className: "si si-arrow-left" }),
                                                                        i.a.createElement(u.a, { duration: "500" })
                                                                    )
                                                            ),
                                                        i.a.createElement(
                                                            "p",
                                                            { className: "form-control search-input" },
                                                            this.props.logo && i.a.createElement("img", { src: "/assets/img/logos/logo.png", alt: localStorage.getItem("storeName"), width: "120" }),
                                                            this.props.has_title ? i.a.createElement("span", { className: "nav-page-title" }, this.props.title) : null,
                                                            this.props.has_delivery_icon &&
                                                                i.a.createElement(d.a, { left: !0 }, i.a.createElement("img", { src: "/assets/img/various/delivery-bike.png", alt: this.props.title, className: "nav-page-title" }))
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
                                                                    i.a.createElement(u.a, { duration: "500" })
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
            (g.contextTypes = {
                router: function () {
                    return null;
                },
            }),
                (t.a = g);
        },
        145: function (e, t, a) {
            "use strict";
            a.d(t, "d", function () {
                return c;
            }),
                a.d(t, "f", function () {
                    return s;
                }),
                a.d(t, "e", function () {
                    return i;
                }),
                a.d(t, "i", function () {
                    return m;
                }),
                a.d(t, "b", function () {
                    return u;
                }),
                a.d(t, "g", function () {
                    return p;
                }),
                a.d(t, "j", function () {
                    return d;
                }),
                a.d(t, "c", function () {
                    return g;
                }),
                a.d(t, "h", function () {
                    return h;
                }),
                a.d(t, "k", function () {
                    return y;
                }),
                a.d(t, "a", function () {
                    return f;
                });
            var r = a(17),
                o = a(11),
                n = a(10),
                l = a.n(n),
                c = function (e, t, a, n, c, s, i) {
                    return function (m) {
                        l.a
                            .post(o.L, { name: e, email: t, password: a, accessToken: n, phone: c, provider: s, address: i })
                            .then(function (e) {
                                var t = e.data;
                                return m({ type: r.c, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                s = function (e, t, a, n, c) {
                    return function (s) {
                        l.a
                            .post(o.S, { name: e, email: t, phone: a, password: n, address: c })
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
                m = function (e, t, a) {
                    return function (n) {
                        return l.a
                            .post(o.ab, { token: t, user_id: e, unique_order_id: a })
                            .then(function (e) {
                                var t = e.data;
                                return n({ type: r.i, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                u = function (e, t) {
                    return function (a) {
                        l.a
                            .post(o.f, { token: t, user_id: e })
                            .then(function (e) {
                                var t = e.data;
                                return a({ type: r.f, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                p = function (e, t, a, n) {
                    return function (c) {
                        l.a
                            .post(o.W, { email: e, phone: t, accessToken: a, provider: n })
                            .then(function (e) {
                                var t = e.data;
                                return c({ type: r.g, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                d = function (e, t) {
                    return function (a) {
                        l.a
                            .post(o.bb, { phone: e, otp: t })
                            .then(function (e) {
                                var t = e.data;
                                return a({ type: r.j, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                g = function (e, t) {
                    return function (a) {
                        l.a
                            .post(o.J, { token: e, user_id: t })
                            .then(function (e) {
                                var t = e.data;
                                return a({ type: r.b, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                h = function (e) {
                    return function (t) {
                        l.a
                            .post(o.X, { email: e })
                            .then(function (e) {
                                var a = e.data;
                                return t({ type: r.h, payload: a });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                y = function (e, t) {
                    return function (a) {
                        l.a
                            .post(o.cb, { email: e, code: t })
                            .then(function (e) {
                                var t = e.data;
                                return a({ type: r.k, payload: t });
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    };
                },
                f = function (e, t, a) {
                    return function (n) {
                        l.a
                            .post(o.d, { email: e, code: t, password: a })
                            .then(function (e) {
                                var t = e.data;
                                return n({ type: r.a, payload: t });
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
        148: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return n;
            });
            var r = a(69),
                o = a(146),
                n = function (e) {
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
                                    Object(o.a)(e),
                                    e
                                );
                            }, 0),
                        };
                        t({ type: r.a, payload: a });
                    };
                };
        },
        158: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return s;
            });
            var r = a(70),
                o = a(11),
                n = a(10),
                l = a.n(n),
                c = a(148),
                s = function (e, t, a, n, s, i, m, u, p, d) {
                    return function (g, h) {
                        l.a
                            .post(o.Q, { token: e.data.auth_token, user: e, order: t, coupon: a, location: n, order_comment: s, total: i, method: m, payment_token: u, delivery_type: p, partial_wallet: d })
                            .then(function (e) {
                                var t = e.data;
                                if (t.success) {
                                    g({ type: r.a, payload: t });
                                    var a = h().cart.products;
                                    localStorage.removeItem("orderComment");
                                    for (var o = a.length - 1; o >= 0; o--) a.splice(o, 1);
                                    g(Object(c.a)(a));
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
                return o;
            });
            var r = a(71),
                o = function () {
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
                function o(e) {
                    return (e * Math.PI) / 180;
                }
                var n = o(r - t),
                    l = o(a - e),
                    c = Math.sin(n / 2) * Math.sin(n / 2) + Math.cos(o(t)) * Math.cos(o(r)) * Math.sin(l / 2) * Math.sin(l / 2);
                return 6371 * (2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c)));
            };
        },
        244: function (e, t, a) {
            "use strict";
            a.r(t);
            var r = a(3),
                o = a(4),
                n = a(6),
                l = a(5),
                c = a(7),
                s = a(0),
                i = a.n(s),
                m = a(143),
                u = a(25),
                p = a(67),
                d = a(29),
                g = a(43),
                h = a(199),
                y = a.n(h),
                f = a(204),
                b = a.n(f),
                v = a(11),
                E = a(205),
                k = a.n(E),
                S = a(14),
                w = a(146),
                _ = a(86),
                I = a(10),
                N = a.n(I),
                x = a(158),
                C = a(145),
                F = a(168),
                P = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), s = 0; s < o; s++) c[s] = arguments[s];
                        return (
                            ((a = Object(n.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(c)))).state = {
                                loading: !0,
                                stripe_opened: !1,
                                delivery_charges: 0,
                                error: !1,
                                razorpay_opened: !1,
                                razorpay_success: !1,
                                canPayPartialWithWallet: !1,
                                walletChecked: !1,
                                canPayFullWithWallet: !1,
                                distance: 0,
                            }),
                            (a.__doesRestaurantOperatesAtThisLocation = function (e) {
                                var t = a.props.user;
                                if (t.success) {
                                    var r = Object(F.a)(e.longitude, e.latitude, t.data.default_address.longitude, t.data.default_address.latitude);
                                    "DELIVERY" === localStorage.getItem("userSelected") &&
                                        "DYNAMIC" === a.props.restaurant_info.delivery_charge_type &&
                                        a.setState({ distance: r }, function () {
                                            a.calculateDynamicDeliveryCharge();
                                        });
                                }
                            }),
                            (a.calculateDynamicDeliveryCharge = function () {
                                var e = a.props.restaurant_info,
                                    t = a.state.distance;
                                if ((console.log("Distance from user to restaurant: " + t + " km"), t > e.base_delivery_distance)) {
                                    var r = t - e.base_delivery_distance;
                                    console.log("Extra Distance: " + r + " km");
                                    var o = (r / e.extra_delivery_distance) * e.extra_delivery_charge;
                                    console.log("Extra Charge: " + o);
                                    var n = parseFloat(e.base_delivery_charge) + parseFloat(o);
                                    console.log("Total Charge: " + n), a.setState({ delivery_charges: n });
                                } else a.setState({ delivery_charges: e.base_delivery_charge });
                            }),
                            (a.onOpened = function () {
                                a.setState({ stripe_opened: !0 });
                            }),
                            (a.onToken = function (e) {
                                a.__placeOrder(e, "STRIPE");
                            }),
                            (a.onSuccess = function (e) {
                                a.__placeOrder("", "PAYPAL");
                            }),
                            (a.onCancel = function (e) {
                                console.log("Paypal Payment Canceled");
                            }),
                            (a.onError = function (e) {
                                console.log("Error!");
                            }),
                            (a.callback = function (e) {
                                if ("success" === e.status) {
                                    var t = e.reference;
                                    a.__placeOrder(t, "PAYSTACK");
                                } else console.log(e);
                            }),
                            (a.close = function () {
                                console.log("PayStack Payment Closed");
                            }),
                            (a.getReference = function () {
                                for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=", a = 0; a < 15; a++) e += t.charAt(Math.floor(Math.random() * t.length));
                                return e;
                            }),
                            (a.__placeOrder = function (e, t) {
                                for (var r = document.getElementsByClassName("paymentGatewayBlock"), o = 0; o < r.length; o++) r[o].classList.add("no-click");
                                var n = a.props,
                                    l = n.user,
                                    c = n.cartProducts,
                                    s = n.coupon,
                                    i = n.cartTotal;
                                if (l.success) {
                                    "SELFPICKUP" === localStorage.getItem("userSelected")
                                        ? a.props.placeOrder(l, c, s, JSON.parse(localStorage.getItem("userSetAddress")), localStorage.getItem("orderComment"), i, t, e, 2, a.state.walletChecked)
                                        : a.props.placeOrder(l, c, s, JSON.parse(localStorage.getItem("userSetAddress")), localStorage.getItem("orderComment"), i, t, e, 1, a.state.walletChecked);
                                    var m = document.getElementById("progressBar");
                                    m.classList.remove("hidden");
                                    var u = 0,
                                        p = setInterval(function () {
                                            u > 100 && clearInterval(p), (u += 1), (m.style.width = u + "%");
                                        }, 20);
                                    a.setState({ stripe_opened: !1 });
                                }
                            }),
                            (a.getTotalAfterCalculation = function () {
                                var e = a.props,
                                    t = e.coupon,
                                    r = e.restaurant_info,
                                    o = e.user,
                                    n = a.props.cartTotal.totalPrice,
                                    l = 0;
                                return (
                                    (l = t.code
                                        ? "PERCENTAGE" === t.discount_type
                                            ? Object(w.a)(
                                                  Object(w.a)(parseFloat(n) + parseFloat(r.restaurant_charges || 0) + parseFloat(a.state.delivery_charges || 0)) -
                                                      Object(w.a)((t.discount / 100) * (parseFloat(n) + parseFloat(r.restaurant_charges || 0) + parseFloat(a.state.delivery_charges || 0)))
                                              )
                                            : Object(w.a)(parseFloat(n) + (parseFloat(r.restaurant_charges) || 0) + (parseFloat(a.state.delivery_charges) || 0) - (parseFloat(t.discount) || 0))
                                        : Object(w.a)(parseFloat(n) + parseFloat(r.restaurant_charges || 0) + parseFloat(a.state.delivery_charges || 0))),
                                    "true" === localStorage.getItem("taxApplicable")
                                        ? ((l = Object(w.a)(parseFloat(parseFloat(l) + parseFloat(parseFloat(localStorage.getItem("taxPercentage")) / 100) * l))),
                                          a.state.walletChecked && o.data.wallet_balance < l && (l -= o.data.wallet_balance),
                                          l)
                                        : (a.state.walletChecked && o.data.wallet_balance < l && (l -= o.data.wallet_balance), l)
                                );
                            }),
                            (a.__handleRazorPay = function () {
                                var e = Object(p.a)(Object(p.a)(a));
                                a.setState({ razorpay_opened: !0 });
                                var t = Object(w.a)(parseFloat(100 * a.getTotalAfterCalculation())),
                                    r = {
                                        key: localStorage.getItem("razorpayKeyId"),
                                        amount: t,
                                        name: a.props.user.data.name,
                                        currency: localStorage.getItem("currencyId"),
                                        handler: function (a) {
                                            var r = a.razorpay_payment_id,
                                                o = v.R + r + "/" + t;
                                            fetch(o, { method: "get", headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" } })
                                                .then(function (e) {
                                                    return e.json();
                                                })
                                                .then(function (t) {
                                                    e.setState({ razorpay_opened: !1, razorpay_success: !0 });
                                                    e.__placeOrder("", "RAZORPAY");
                                                })
                                                .catch(function (t) {
                                                    e.setState({ razorpay_opened: !1, razorpay_success: !1 });
                                                });
                                        },
                                        modal: {
                                            ondismiss: function () {
                                                console.log("closed"), e.setState({ razorpay_opened: !1, razorpay_success: !1 });
                                            },
                                        },
                                    };
                                new window.Razorpay(r).open();
                            }),
                            a
                        );
                    }
                    return (
                        Object(c.a)(t, e),
                        Object(o.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this.props.user;
                                    this.props.getPaymentGateways(this.props.user.data.auth_token),
                                        e.success && this.props.updateUserInfo(e.data.id, e.data.auth_token, null),
                                        "SELFPICKUP" === localStorage.getItem("userSelected") ? this.setState({ delivery_charges: 0 }) : this.setState({ delivery_charges: this.props.restaurant_info.delivery_charges });
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    e.restaurant_info.id && this.__doesRestaurantOperatesAtThisLocation(e.restaurant_info),
                                        this.props.paymentgateways !== e.paymentgateways && this.setState({ loading: !1 }),
                                        e.checkout !== this.props.checkout && (localStorage.removeItem("appliedCoupon"), this.context.router.history.push("/running-order/" + e.checkout.data.unique_order_id)),
                                        e.user.data.wallet_balance > 0 && this.setState({ canPayPartialWithWallet: !0, canPayFullWithWallet: !1 }),
                                        e.user.data.wallet_balance >= parseFloat(this.getTotalAfterCalculation()) && this.setState({ canPayFullWithWallet: !0, canPayPartialWithWallet: !1 });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = { sandbox: localStorage.getItem("paypalSandboxKey"), production: localStorage.getItem("paypalProductionKey") };
                                    return i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        this.props.paymentgateways.some(function (e) {
                                            return "Razorpay" === e.name;
                                        }) && i.a.createElement(g.Helmet, null, i.a.createElement("script", { src: "https://checkout.razorpay.com/v1/checkout.js" })),
                                        this.state.stripe_opened ||
                                            (this.state.razorpay_opened &&
                                                i.a.createElement(
                                                    i.a.Fragment,
                                                    null,
                                                    i.a.createElement("div", { className: "height-80 overlay-loading ongoing-payment-spin" }, i.a.createElement("div", { className: "spin-load" })),
                                                    i.a.createElement("div", { className: "auth-error ongoing-payment" }, i.a.createElement("div", { className: "error-shake" }, localStorage.getItem("checkoutPaymentInProcess")))
                                                )),
                                        i.a.createElement(
                                            "div",
                                            { className: "col-12 mb-50" },
                                            this.state.loading
                                                ? i.a.createElement(
                                                      "div",
                                                      { className: "row" },
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "col-12" },
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "block block-link-shadow text-left shadow-light" },
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "block-content block-content-full clearfix py-3 payment-select-block" },
                                                                  i.a.createElement(
                                                                      d.a,
                                                                      { height: 70, width: window.innerWidth, speed: 1.2, primaryColor: "#f3f3f3", secondaryColor: "#ecebeb" },
                                                                      i.a.createElement("rect", { x: "0", y: "10", rx: "0", ry: "0", width: "55", height: "55" }),
                                                                      i.a.createElement("rect", { x: "320", y: "10", rx: "0", ry: "0", width: "85", height: "20" }),
                                                                      i.a.createElement("rect", { x: "250", y: "40", rx: "0", ry: "0", width: "190", height: "18" })
                                                                  )
                                                              )
                                                          )
                                                      ),
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "col-12" },
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "block block-link-shadow text-left shadow-light" },
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "block-content block-content-full clearfix py-3 payment-select-block" },
                                                                  i.a.createElement(
                                                                      d.a,
                                                                      { height: 70, width: window.innerWidth, speed: 1.2, primaryColor: "#f3f3f3", secondaryColor: "#ecebeb" },
                                                                      i.a.createElement("rect", { x: "0", y: "10", rx: "0", ry: "0", width: "55", height: "55" }),
                                                                      i.a.createElement("rect", { x: "320", y: "10", rx: "0", ry: "0", width: "85", height: "20" }),
                                                                      i.a.createElement("rect", { x: "250", y: "40", rx: "0", ry: "0", width: "190", height: "18" })
                                                                  )
                                                              )
                                                          )
                                                      )
                                                  )
                                                : i.a.createElement(
                                                      i.a.Fragment,
                                                      null,
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "text-center" },
                                                          i.a.createElement(
                                                              "h3",
                                                              { className: "btn btn-lg btn-outline-secondary btn-square d-block bg-white", style: { borderColor: "#eee" } },
                                                              localStorage.getItem("cartToPayText"),
                                                              " ",
                                                              i.a.createElement(
                                                                  "span",
                                                                  { style: { color: localStorage.getItem("storeColor") } },
                                                                  "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                                  Object(w.a)(parseFloat(this.getTotalAfterCalculation())),
                                                                  "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                              )
                                                          )
                                                      ),
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "row" },
                                                          this.state.canPayPartialWithWallet &&
                                                              i.a.createElement(
                                                                  i.a.Fragment,
                                                                  null,
                                                                  i.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className: "col-12",
                                                                          onClick: function () {
                                                                              return e.setState({ walletChecked: !e.state.walletChecked });
                                                                          },
                                                                      },
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "block block-link-shadow text-left shadow-light" },
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "block-content block-content-full clearfix py-3 payment-select-block" },
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "float-right mt-10" },
                                                                                  i.a.createElement("img", { src: "/assets/img/various/wallet.png", alt: localStorage.getItem("walletName"), className: "img-fluid" })
                                                                              ),
                                                                              i.a.createElement("input", { type: "checkbox", name: "walletcheckbox", defaultChecked: this.props.walletChecked, className: "wallet-checkbox" }),
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "font-size-h3 font-w600" },
                                                                                  this.state.walletChecked &&
                                                                                      i.a.createElement("i", { className: "si si-check mr-2", style: { color: localStorage.getItem("cartColorBg"), fontWeight: "900" } }),
                                                                                  localStorage.getItem("walletName"),
                                                                                  ":",
                                                                                  " ",
                                                                                  i.a.createElement(
                                                                                      "span",
                                                                                      { style: { color: localStorage.getItem("storeColor") } },
                                                                                      "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                                                      this.props.user.data.wallet_balance,
                                                                                      "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                                                  )
                                                                              ),
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "font-size-sm font-w600 text-muted" },
                                                                                  this.state.walletChecked
                                                                                      ? i.a.createElement(
                                                                                            i.a.Fragment,
                                                                                            null,
                                                                                            i.a.createElement(
                                                                                                "span",
                                                                                                { style: { color: localStorage.getItem("storeColor") } },
                                                                                                " ",
                                                                                                "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                                                                this.props.user.data.wallet_balance,
                                                                                                " ",
                                                                                                "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                                                            ),
                                                                                            " ",
                                                                                            localStorage.getItem("willbeDeductedText"),
                                                                                            " ",
                                                                                            "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                                                            this.props.user.data.wallet_balance,
                                                                                            "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                                                        )
                                                                                      : i.a.createElement(
                                                                                            i.a.Fragment,
                                                                                            null,
                                                                                            i.a.createElement("span", null, localStorage.getItem("payPartialWithWalletText")),
                                                                                            i.a.createElement(
                                                                                                "button",
                                                                                                { className: "btn btn-redeem mt-2", style: { color: localStorage.getItem("cartColorBg"), borderColor: localStorage.getItem("cartColorBg") } },
                                                                                                localStorage.getItem("walletRedeemBtnText")
                                                                                            )
                                                                                        )
                                                                              )
                                                                          )
                                                                      ),
                                                                      i.a.createElement("hr", { className: "mb-4" })
                                                                  )
                                                              ),
                                                          i.a.createElement("hr", null),
                                                          i.a.createElement("div", { className: "col-12 text-center mb-0 mt-4" }, i.a.createElement("h4", { className: "text-muted" }, localStorage.getItem("checkoutPaymentListTitle"))),
                                                          this.state.canPayFullWithWallet &&
                                                              i.a.createElement(
                                                                  i.a.Fragment,
                                                                  null,
                                                                  i.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className: "col-12",
                                                                          onClick: function () {
                                                                              return e.__placeOrder("", "WALLET");
                                                                          },
                                                                      },
                                                                      i.a.createElement("p", { className: "mb-1" }),
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "block block-link-shadow text-left shadow-light" },
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "block-content block-content-full clearfix py-3 payment-select-block" },
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "float-right mt-10" },
                                                                                  i.a.createElement("img", { src: "/assets/img/various/wallet.png", alt: localStorage.getItem("walletName"), className: "img-fluid" })
                                                                              ),
                                                                              i.a.createElement("div", { className: "font-size-h3 font-w600" }, localStorage.getItem("walletName")),
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "font-size-sm font-w600 text-muted" },
                                                                                  localStorage.getItem("payFullWithWalletText"),
                                                                                  i.a.createElement("br", null),
                                                                                  i.a.createElement(
                                                                                      "span",
                                                                                      { style: { color: localStorage.getItem("storeColor") } },
                                                                                      "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                                                      parseFloat(this.getTotalAfterCalculation()),
                                                                                      "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                                                  ),
                                                                                  " ",
                                                                                  localStorage.getItem("willbeDeductedText"),
                                                                                  " ",
                                                                                  "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"),
                                                                                  this.props.user.data.wallet_balance,
                                                                                  "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")
                                                                              )
                                                                          )
                                                                      )
                                                                  ),
                                                                  i.a.createElement("hr", null)
                                                              ),
                                                          this.props.paymentgateways.map(function (a) {
                                                              return i.a.createElement(
                                                                  i.a.Fragment,
                                                                  { key: a.id },
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "col-12 paymentGatewayBlock" },
                                                                      "Stripe" === a.name &&
                                                                          i.a.createElement(
                                                                              k.a,
                                                                              {
                                                                                  stripeKey: localStorage.getItem("stripePublicKey"),
                                                                                  ComponentClass: "div",
                                                                                  image: "".concat(window.location.origin.toString(), "/assets/img/logos/").concat(localStorage.getItem("storeLogo")),
                                                                                  locale: "auto",
                                                                                  name: localStorage.getItem("storeName"),
                                                                                  email: e.props.user.data.email,
                                                                                  token: e.onToken,
                                                                                  opened: e.onOpened,
                                                                              },
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "col-12 p-0" },
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "block block-link-shadow text-left shadow-light" },
                                                                                      i.a.createElement(
                                                                                          "div",
                                                                                          { className: "block-content block-content-full clearfix py-3 payment-select-block" },
                                                                                          i.a.createElement(
                                                                                              "div",
                                                                                              { className: "float-right mt-10" },
                                                                                              i.a.createElement("img", { src: "/assets/img/various/stripe.png", alt: a.name, className: "img-fluid" })
                                                                                          ),
                                                                                          i.a.createElement(
                                                                                              "div",
                                                                                              { className: "font-size-h3 font-w600" },
                                                                                              localStorage.getItem("checkoutStripeText"),
                                                                                              i.a.createElement("div", { className: "font-size-sm font-w600 text-muted" }, localStorage.getItem("checkoutStripeSubText"))
                                                                                          )
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                  ),
                                                                  "COD" === a.name &&
                                                                    
                                                                      i.a.createElement(
                                                                          "div",
                                                                          {
                                                                              className: "col-12 paymentGatewayBlock",
                                                                              onClick: function () {
                                                                                  localStorage.setItem("orderComment", localStorage.getItem("orderComment")+' Dinheiro - Troco para: '+document.querySelector('.troco').value)
                                                                                  return e.__placeOrder("", "COD");
                                                                              },
                                                                          },
                                                                          i.a.createElement( 
                                                                              "div",
                                                                              { className: "block block-link-shadow text-left shadow-light" },
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "block-content block-content-full clearfix py-3 payment-select-block" },
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "float-right mt-10" },
                                                                                      i.a.createElement("img", { src: "/assets/img/various/cod.png", alt: a.name, className: "img-fluid" })
                                                                                  ),
                                                                                  i.a.createElement("div", { className: "font-size-h3 font-w600" }, localStorage.getItem("checkoutCodText")),
                                                                                  i.a.createElement("div", { className: "font-size-sm font-w600 text-muted" }, localStorage.getItem("checkoutCodSubText"))
                                                                              )
                                                                          )
                                                                      ),
                                                                      i.a.createElement("input", { type: "number", name: "troco", className: "form-control troco", placeholder: "Troco para: " }),
                                                                      i.a.createElement(
                                                                          "div",
                                                                          {
                                                                              className: "col-12 paymentGatewayBlock",
                                                                              onClick: function () {
                                                                                  localStorage.setItem("orderComment", localStorage.getItem("orderComment")+'Cartão de Crédito - levar Máquina de cartão ')
                                                                                  return e.__placeOrder("", "COD");
                                                                              },
                                                                          },
                                                                          i.a.createElement( 
                                                                              "div",
                                                                              { className: "block block-link-shadow text-left shadow-light" },
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "block-content block-content-full clearfix py-3 payment-select-block" },
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "float-right mt-10" },
                                                                                      i.a.createElement("img", { src: "/assets/img/various/cod.png", alt: a.name, className: "img-fluid" })
                                                                                  ),
                                                                                  i.a.createElement("div", { className: "font-size-h3 font-w600" }, "Cartão de Crédito"),
                                                                                  i.a.createElement("div", { className: "font-size-sm font-w600 text-muted" }, "Entregador leverá a Máquina de cartão")
                                                                              )
                                                                          )
                                                                      ),
                                                                      i.a.createElement(
                                                                          "div",
                                                                          {
                                                                              className: "col-12 paymentGatewayBlock",
                                                                              onClick: function () {
                                                                                  localStorage.setItem("orderComment", localStorage.getItem("orderComment")+'Cartão de Débito - levar Máquina de cartão ')
                                                                                  return e.__placeOrder("", "COD");
                                                                              },
                                                                          },
                                                                          i.a.createElement( 
                                                                              "div",
                                                                              { className: "block block-link-shadow text-left shadow-light" },
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "block-content block-content-full clearfix py-3 payment-select-block" },
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "float-right mt-10" },
                                                                                      i.a.createElement("img", { src: "/assets/img/various/cod.png", alt: a.name, className: "img-fluid" })
                                                                                  ),
                                                                                  i.a.createElement("div", { className: "font-size-h3 font-w600" }, "Cartão de Débito"),
                                                                                  i.a.createElement("div", { className: "font-size-sm font-w600 text-muted" }, "Entregador leverá a Máquina de cartão")
                                                                              )
                                                                          )
                                                                      ),
                                                              
                                                                    "Razorpay" === a.name &&
                                                                      i.a.createElement(
                                                                          "div",
                                                                          {
                                                                              className: "col-12 paymentGatewayBlock",
                                                                              onClick: function () {
                                                                                  return e.__handleRazorPay();
                                                                              },
                                                                          },
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "block block-link-shadow text-left shadow-light" },
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "block-content block-content-full clearfix py-3 payment-select-block" },
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "float-right mt-10" },
                                                                                      i.a.createElement("img", { src: "/assets/img/various/razorpay.png", alt: a.name, className: "img-fluid" })
                                                                                  ),
                                                                                  i.a.createElement("div", { className: "font-size-h3 font-w600" }, localStorage.getItem("checkoutRazorpayText")),
                                                                                  i.a.createElement("div", { className: "font-size-sm font-w600 text-muted" }, localStorage.getItem("checkoutRazorpaySubText"))
                                                                              )
                                                                          )
                                                                      ),
                                                                  "PayStack" === a.name &&
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "col-12 mb-4 mt-4 paymentGatewayBlock" },
                                                                          i.a.createElement(b.a, {
                                                                              text: localStorage.getItem("paystackPayText"),
                                                                              class: "payButton",
                                                                              callback: e.callback,
                                                                              close: e.close,
                                                                              disabled: !1,
                                                                              embed: !1,
                                                                              reference: e.getReference(),
                                                                              email: e.props.user.data.email,
                                                                              amount: parseInt(parseFloat(100 * e.getTotalAfterCalculation())),
                                                                              paystackkey: localStorage.getItem("paystackPublicKey"),
                                                                              tag: "button",
                                                                          })
                                                                      ),
                                                                  "Paypal" === a.name &&
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "col-12 paymentGatewayBlock" },
                                                                          i.a.createElement(y.a, {
                                                                              env: localStorage.getItem("paypalEnv"),
                                                                              client: t,
                                                                              currency: localStorage.getItem("currencyId"),
                                                                              total: parseFloat(e.getTotalAfterCalculation()),
                                                                              shipping: 1,
                                                                              onError: e.onError,
                                                                              onSuccess: e.onSuccess,
                                                                              onCancel: e.onCancel,
                                                                              style: { size: "responsive", color: "silver", shape: "rect" },
                                                                          })
                                                                      )
                                                              );
                                                          })
                                                      )
                                                  )
                                        ),
                                        i.a.createElement(
                                            "div",
                                            { className: "progress push m-0 progress-transparent", style: { height: "8px" } },
                                            i.a.createElement("div", {
                                                className: "progress-bar progress-bar-striped progress-bar-animated hidden",
                                                role: "progressbar",
                                                id: "progressBar",
                                                style: { backgroundColor: localStorage.getItem("storeColor"), width: "10%" },
                                            })
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component);
            P.contextTypes = {
                router: function () {
                    return null;
                },
            };
            var O = Object(S.b)(
                    function (e) {
                        return {
                            user: e.user.user,
                            addresses: e.addresses.addresses,
                            cartProducts: e.cart.products,
                            cartTotal: e.total.data,
                            coupon: e.coupon.coupon,
                            checkout: e.checkout.checkout,
                            paymentgateways: e.paymentgateways.paymentgateways,
                            restaurant_info: e.items.restaurant_info,
                        };
                    },
                    {
                        getPaymentGateways: function (e) {
                            return function (t) {
                                N.a
                                    .post(v.t, { token: e })
                                    .then(function (e) {
                                        var a = e.data;
                                        return t({ type: _.a, payload: a });
                                    })
                                    .catch(function (e) {
                                        console.log(e);
                                    });
                            };
                        },
                        placeOrder: x.a,
                        updateUserInfo: C.i,
                    }
                )(P),
                T = a(253),
                A = a(167),
                j = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), s = 0; s < o; s++) c[s] = arguments[s];
                        return (
                            ((a = Object(n.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(c)))).__placeOrder = function () {
                                var e = a.props,
                                    t = e.user,
                                    r = e.cartProducts,
                                    o = e.coupon,
                                    n = e.cartTotal;
                                t.success && a.props.placeOrder(t, r, o, localStorage.getItem("currentLocation"), n);
                            }),
                            a
                        );
                    }
                    return (
                        Object(c.a)(t, e),
                        Object(o.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.props.cartProducts.length && document.getElementsByTagName("body")[0].classList.add("bg-grey-light");
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    document.getElementsByTagName("body")[0].classList.remove("bg-grey-light");
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return this.props.cartProducts.length
                                        ? window.innerWidth > 768
                                            ? i.a.createElement(T.a, { to: "/" })
                                            : this.props.confirmCart
                                            ? null === localStorage.getItem("storeColor")
                                                ? i.a.createElement(T.a, { to: "/" })
                                                : i.a.createElement(
                                                      i.a.Fragment,
                                                      null,
                                                      i.a.createElement(u.a, {
                                                          seotitle: localStorage.getItem("checkoutPageTitle"),
                                                          seodescription: localStorage.getItem("seoMetaDescription"),
                                                          ogtype: "website",
                                                          ogtitle: localStorage.getItem("seoOgTitle"),
                                                          ogdescription: localStorage.getItem("seoOgDescription"),
                                                          ogurl: window.location.href,
                                                          twittertitle: localStorage.getItem("seoTwitterTitle"),
                                                          twitterdescription: localStorage.getItem("seoTwitterDescription"),
                                                      }),
                                                      i.a.createElement(m.a, { boxshadow: !0, has_title: !0, title: localStorage.getItem("checkoutPageTitle"), disable_search: !0 }),
                                                      i.a.createElement("div", { className: "pt-50" }, i.a.createElement("div", { className: "pt-30" }), i.a.createElement(O, null))
                                                  )
                                            : i.a.createElement(T.a, { to: "/cart" })
                                        : i.a.createElement(T.a, { to: "/cart" });
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component);
            t.default = Object(S.b)(
                function (e) {
                    return { total: e.total.total, user: e.user.user, cartProducts: e.cart.products, cartTotal: e.total.data, coupon: e.coupon.coupon, confirmCart: e.confirmCart.confirmCart };
                },
                { checkConfirmCart: A.a, placeOrder: x.a }
            )(j);
        },
    },
]);
