"use strict";
// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
    }
    Todo.prototype.addTask = function (task) {
        this.tasksList.push(task);
    };
    Todo.prototype.listAllTasks = function () {
        this.tasksList.forEach(function (element) {
            console.log(element);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasksList.indexOf(task);
        this.tasksList.splice(index, 1);
    };
    return Todo;
}());
exports.Todo = Todo;
