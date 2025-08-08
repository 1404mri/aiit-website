"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Home() {
    return (react_1["default"].createElement("main", null,
        react_1["default"].createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" } },
            react_1["default"].createElement("h2", { style: { textAlign: "center", color: "#0F4F7D", fontFamily: "Roboto", fontWeight: "bold", fontSize: "26px", paddingTop: "20px" } }, "Our Mission, Vision and Modus Operandi"),
            react_1["default"].createElement("img", { src: "/AIIT_Intro.jpg", alt: "AIIT Introduction" })),
        react_1["default"].createElement("div", { style: { backgroundColor: "#456c8cc7", padding: "20px", marginTop: "20px" } },
            react_1["default"].createElement("h2", { style: { color: "#ffffffff", fontFamily: "Roboto", fontWeight: "normal", textAlign: "center", fontSize: "26px" } },
                "AIIT",
                " ",
                react_1["default"].createElement("span", { style: { color: "#0F4F7D", fontFamily: "Roboto", fontWeight: "bold" } }, "Team"))),
        react_1["default"].createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" } },
            react_1["default"].createElement("h2", { style: { textAlign: "center", color: "#0F4F7D", fontFamily: "Roboto", fontWeight: "bold", fontSize: "26px", paddingTop: "20px" } }, "Partnerships")),
        react_1["default"].createElement("div", { style: { backgroundColor: "#0F4F7D", padding: "20px", marginTop: "20px" } },
            react_1["default"].createElement("h2", { style: { color: "#ffffffff", fontFamily: "Roboto", fontWeight: "normal", textAlign: "center", fontSize: "26px" } }, "Performance Measures")),
        react_1["default"].createElement("div", { style: { padding: "20px", marginTop: "20px" } },
            react_1["default"].createElement("h2", { style: { color: "#98bdf5ff", fontFamily: "Roboto", fontWeight: "normal", textAlign: "center", fontSize: "26px" } },
                "Frequently Asked Questions",
                " ",
                react_1["default"].createElement("span", { style: { color: "#0F4F7D", fontFamily: "Roboto", fontWeight: "bold" } }, "(FAQs)")))));
}
exports["default"] = Home;
