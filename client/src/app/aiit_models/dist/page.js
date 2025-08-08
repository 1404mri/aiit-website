"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Home() {
    return (react_1["default"].createElement("main", null,
        react_1["default"].createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" } },
            react_1["default"].createElement("h2", { style: { color: "#0F4F7D", fontFamily: "Roboto", fontWeight: "bold", fontSize: "26px", paddingTop: "20px" } }, "Quran Analytics")),
        react_1["default"].createElement("div", { style: { backgroundColor: "#456c8cc7", padding: "20px", marginTop: "20px" } },
            react_1["default"].createElement("h2", { style: { color: "#ffffffff", fontFamily: "Roboto", fontWeight: "normal", textAlign: "center", fontSize: "26px" } },
                "Truth",
                " ",
                react_1["default"].createElement("span", { style: { color: "#0F4F7D", fontFamily: "Roboto", fontWeight: "bold" } }, " Matters ")))));
}
exports["default"] = Home;
