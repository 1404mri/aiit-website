"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
function Header() {
    return (react_1["default"].createElement("header", { id: "header", className: "header", style: { fontFamily: "Inter, Times, serif" } },
        react_1["default"].createElement("div", { className: "header-middle p-0 bg-lightest xs-text-center", style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start"
            } },
            react_1["default"].createElement("img", { src: "/header/AIIT_logo1.png", alt: "AIIT Logo", style: { height: "150px", objectFit: "contain" } })),
        react_1["default"].createElement("div", { className: "header-nav", style: { backgroundColor: "#0F4F7D", padding: "5px", color: "white" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "container", style: {
                        backgroundColor: "#0F4F7D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "white",
                        padding: "0"
                    } },
                    react_1["default"].createElement("nav", { style: { backgroundColor: "#0F4F7D", color: "white" } },
                        react_1["default"].createElement("ul", { style: {
                                fontFamily: "Inter, Times, serif",
                                display: "flex",
                                gap: "40px",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: 0,
                                color: "white",
                                flexWrap: "wrap",
                                padding: 0,
                                listStyle: "none"
                            } },
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(link_1["default"], { href: "/", style: { color: "white", textDecoration: "none" } }, "Home")),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(link_1["default"], { href: "/about_us", style: { color: "white", textDecoration: "none" } }, "About Us")),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(link_1["default"], { href: "/events", style: { color: "white", textDecoration: "none" } }, "Events")),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(link_1["default"], { href: "/courses", style: { color: "white", textDecoration: "none" } }, "Courses")),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(link_1["default"], { href: "/blog", style: { color: "white", textDecoration: "none" } }, "Blog")),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(link_1["default"], { href: "/trainer", style: { color: "white", textDecoration: "none" } }, "Trainers")),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(link_1["default"], { href: "/aiit_models", style: { color: "white", textDecoration: "none" } }, "AIIT Models")),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(link_1["default"], { href: "/contact_us", style: { color: "white", textDecoration: "none" } }, "Contact Us")),
                            react_1["default"].createElement("div", { style: { flex: 1, display: "flex", justifyContent: "flex-end" } },
                                react_1["default"].createElement("a", { className: "btn btn-cored btn-flat bg-theme-color-2 text-white font-14 bs-modal-ajax-load mt-0 p-25 pr-15 pl-15", "data-toggle": "modal", "data-target": "#BSParentModal", href: "#", style: { backgroundColor: "#a2dbeaff", borderRadius: "8px", width: "100px",
                                        height: "50px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "white",
                                        fontWeight: "600",
                                        textDecoration: "none",
                                        cursor: "pointer"
                                    } }, "Donate Us"))),
                        react_1["default"].createElement("ul", { style: {
                                marginLeft: "auto",
                                marginTop: "8px"
                            } }),
                        react_1["default"].createElement("div", { id: "top-search-bar", className: "collapse" },
                            react_1["default"].createElement("div", { className: "container" },
                                react_1["default"].createElement("form", { role: "search", action: "#", className: "search_form_top", method: "get" },
                                    react_1["default"].createElement("input", { type: "text", placeholder: "Type text and press Enter...", name: "s", className: "form-control", autoComplete: "off" }),
                                    react_1["default"].createElement("span", { className: "search-close" },
                                        react_1["default"].createElement("i", { className: "fa fa-search" })))))))))));
}
exports["default"] = Header;
