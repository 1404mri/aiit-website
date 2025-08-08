"use strict";
exports.__esModule = true;
var About_1 = require("./home/About");
var Blog_1 = require("./home/Blog");
var Courses_1 = require("./home/Courses");
var Gallery_1 = require("./home/Gallery");
var HappyStudentAtAGlance_1 = require("./home/HappyStudentAtAGlance");
var OurTeachers_1 = require("./home/OurTeachers");
function Home() {
    return (React.createElement("main", null,
        React.createElement(About_1["default"], null),
        React.createElement(Courses_1["default"], null),
        React.createElement(OurTeachers_1["default"], null),
        React.createElement(HappyStudentAtAGlance_1["default"], null),
        React.createElement(Gallery_1["default"], null),
        React.createElement(Blog_1["default"], null)));
}
exports["default"] = Home;
