"use strict";
exports.__esModule = true;
var restaurants_js_1 = require("./restaurants.js");
var restaurants = new restaurants_js_1["default"]();
restaurants.add({
    category: "한식",
    name: "한식당",
    distance: 20,
    menu: "제육"
});
restaurants.add({
    category: "한식",
    name: "한식당2",
    distance: 20,
    menu: "제육2"
});
restaurants.add({
    category: "한식",
    name: "한식당3",
    distance: 20,
    menu: "제육3"
});
restaurants.add({
    category: "중식",
    name: "중식당",
    distance: 20,
    menu: "짜장면"
});
restaurants.add({
    category: "중식",
    name: "중식당1",
    distance: 20,
    menu: "짜장면1"
});
console.log(restaurants.filterByCategory("한식"));
