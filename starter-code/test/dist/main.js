"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var two_1 = require("./two");
var App = /** @class */ (function () {
    function App() {
        this.title = "Eggheads";
    }
    App.prototype.getUsers = function () {
        return [{ name: "bliss" }];
    };
    return App;
}());
new App();
new two_1.Two();
