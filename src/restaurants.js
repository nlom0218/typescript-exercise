"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Restaurants_restaurants;
exports.__esModule = true;
var Restaurants = /** @class */ (function () {
    function Restaurants() {
        _Restaurants_restaurants.set(this, []);
    }
    Restaurants.prototype.add = function (newRestaurant) {
        __classPrivateFieldGet(this, _Restaurants_restaurants, "f").push(newRestaurant);
    };
    Restaurants.prototype.filterByCategory = function (category) {
        return __classPrivateFieldGet(this, _Restaurants_restaurants, "f").filter(function (restaurant) { return restaurant.category === category; });
    };
    return Restaurants;
}());
_Restaurants_restaurants = new WeakMap();
exports["default"] = Restaurants;
