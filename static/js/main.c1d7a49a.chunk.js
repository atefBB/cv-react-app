(this["webpackJsonpcv-frontend"] = this["webpackJsonpcv-frontend"] || []).push([
    [0],
    {
        11: function (e, t, n) {
            e.exports = n(27);
        },
        2: function (e, t, n) {
            e.exports = n.p + "static/media/logo.d809dc68.jpg";
        },
        25: function (e, t, n) {},
        26: function (e, t, n) {},
        27: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                l = n.n(a),
                r = n(10),
                o = n.n(r),
                i = n(2),
                c = n.n(i);
            function s() {
                return l.a.createElement(
                    "header",
                    { className: "app-header" },
                    l.a.createElement("img", {
                        src: c.a,
                        className: "app-logo",
                        alt: "Atef Ben Ali logo",
                    })
                );
            }
            var d = n(3);
            function u() {
                return l.a.createElement(
                    "h2",
                    { style: { color: "#fff", fontSize: "30px" } },
                    "Work & Education"
                );
            }
            function m(e) {
                var t = e.title,
                    n = e.address,
                    a = e.details,
                    r = e.icon,
                    o = e.iconStyle,
                    i = e.contentStyle,
                    c = e.contentArrowStyle,
                    s = e.date;
                return l.a.createElement(
                    d.VerticalTimelineElement,
                    {
                        className: "vertical-timeline-element--work",
                        contentStyle: void 0 !== i ? i : {},
                        contentArrowStyle: void 0 !== c ? c : {},
                        icon: r,
                        iconStyle: void 0 !== o ? o : {},
                        date: void 0 !== s ? s : "",
                    },
                    l.a.createElement(
                        "h3",
                        { className: "vertical-timeline-element-title" },
                        t
                    ),
                    l.a.createElement(
                        "h4",
                        { className: "vertical-timeline-element-subtitle" },
                        n
                    ),
                    l.a.createElement("p", null, a)
                );
            }
            function f() {
                return l.a.createElement("img", {
                    src: c.a,
                    className: "app-logo",
                    style: { width: "60px", height: "60px" },
                    alt: "Atef Ben Ali logo",
                });
            }
            var g = n(4),
                p = n(5);
            function E() {
                return l.a.createElement(g.a, { icon: p.b });
            }
            function b() {
                return l.a.createElement(g.a, { icon: p.a });
            }
            var S = [
                {
                    title: "Atef Ben Ali",
                    address: "Douz, Kebili, Tunisia",
                    details: "Muslim Engineer",
                    icon: l.a.createElement(f, null),
                    contentStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    },
                    contentArrowStyle: {
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    },
                },
                {
                    title: "Web Developer",
                    address: "Golaa, Kebili, Tunisia",
                    details:
                        "Web developer & Project Manager in Leader Solution Tactile",
                    icon: l.a.createElement(E, null),
                    iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    },
                    date: "11/2020 - present",
                },
                {
                    title: "Web Developer",
                    address: "Menzah 9, Ariana, Tunisia",
                    details:
                        "Web developer & Project Manager in DEVNET Company",
                    date: "02/2019 - 10/2020",
                    iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    },
                    icon: l.a.createElement(E, null),
                },
                {
                    title: "Web Developer",
                    address: "Sfax, Tunisia",
                    details: "Web developer in Novatis Web agency",
                    date: "06/2016 - 01/2019",
                    iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    },
                    icon: l.a.createElement(E, null),
                },
                {
                    title: "Engineer Student",
                    address: "ISIM, Sfax, Tunisia",
                    details: "",
                    date: "2013 - 2016",
                    iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    },
                    icon: l.a.createElement(b, null),
                },
                {
                    title: "Computer Sciences Licence",
                    address: "ISIM, Mahdia, Tunisia",
                    details: "",
                    date: "2009 - 2011",
                    iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    },
                    icon: l.a.createElement(b, null),
                },
                {
                    title: "Computer Sciences Baccalaureat",
                    address: "Douz, Kebili, Tunisia",
                    details: "",
                    date: "June 2008",
                    iconStyle: {
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    },
                    icon: l.a.createElement(b, null),
                },
            ];
            n(24);
            function y() {
                return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(u, null),
                    l.a.createElement(
                        d.VerticalTimeline,
                        null,
                        S.map(function (e, t) {
                            return l.a.createElement(m, {
                                key: t,
                                title: e.title,
                                address: e.address,
                                details: e.details,
                                icon: e.icon,
                                iconStyle: e.iconStyle,
                                contentStyle: e.contentStyle,
                                contentArrowStyle: e.contentArrowStyle,
                                date: e.date,
                            });
                        })
                    )
                );
            }
            n(25);
            function v() {
                return l.a.createElement(
                    "div",
                    { className: "app" },
                    l.a.createElement(s, null),
                    l.a.createElement(y, null)
                );
            }
            Boolean(
                "localhost" === window.location.hostname ||
                    "[::1]" === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            n(26);
            o.a.render(
                l.a.createElement(
                    l.a.StrictMode,
                    null,
                    l.a.createElement(v, null)
                ),
                document.getElementById("root")
            ),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready
                        .then(function (e) {
                            e.unregister();
                        })
                        .catch(function (e) {
                            console.error(e.message);
                        });
        },
    },
    [[11, 1, 2]],
]);
//# sourceMappingURL=main.c1d7a49a.chunk.js.map
