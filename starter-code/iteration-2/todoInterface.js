"use strict";
exports.__esModule = true;
// Write the interface for class Todo. It must have:
var inter = /** @class */ (function () {
    function inter() {
    }
    inter.prototype.addTask = function (task) { };
    inter.prototype.listAllTasks = function () { };
    inter.prototype.deleteTask = function (task) { };
    return inter;
}());
exports["default"] = inter;
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.
