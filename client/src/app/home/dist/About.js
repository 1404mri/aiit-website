"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var slideImages = [
    "/slideshow_images/Brochure_page01.png",
    "/slideshow_images/Brochure_page02.png",
];
function About(_a) {
    var _b = react_1.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            setCurrentIndex(function (prev) {
                return prev === slideImages.length - 1 ? 0 : prev + 1;
            });
        }, 3000);
        return function () { return clearInterval(interval); };
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("section", { style: { backgroundColor: "#456c8c" } },
            react_1["default"].createElement("div", { className: "container" },
                react_1["default"].createElement("div", { className: "section-content" },
                    react_1["default"].createElement("div", { className: "col-md-12", style: {
                            position: "relative",
                            width: "100%",
                            maxWidth: "100vw",
                            margin: "0 auto",
                            textAlign: "center"
                        } },
                        react_1["default"].createElement("div", { className: "video-popup", style: {
                                position: "relative",
                                width: "100%",
                                height: "700px",
                                maxWidth: "1400px",
                                margin: "0 auto"
                            } },
                            react_1["default"].createElement(image_1["default"], { src: slideImages[currentIndex], alt: "Slide " + (currentIndex + 1), fill: true, style: {
                                    objectFit: "contain",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    transition: "opacity 1s ease-in-out",
                                    opacity: 1,
                                    zIndex: 2
                                }, priority: true }),
                            react_1["default"].createElement("div", { style: {
                                    textAlign: "center",
                                    marginTop: 10,
                                    position: "absolute",
                                    bottom: 10,
                                    left: 0,
                                    right: 0
                                } }, slideImages.map(function (_, idx) { return (react_1["default"].createElement("span", { key: idx, onClick: function () { return setCurrentIndex(idx); }, style: {
                                    display: "inline-block",
                                    width: 12,
                                    height: 12,
                                    margin: "0 5px",
                                    backgroundColor: idx === currentIndex ? "#fcfcfcff" : "gray",
                                    borderRadius: "50%",
                                    cursor: "pointer"
                                } })); })))))))));
}
exports["default"] = About;
