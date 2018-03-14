"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        var _this = this;
        this.tasks = [];
        this.addTask = function (task) {
            _this.tasks.push(task);
            console.log("Task \"" + task + "\" inserted in the list");
            return _this.tasks.length;
        };
        this.listAllTasks = function () {
            _this.tasks.forEach(function (task) {
                console.log(task);
            });
        };
        this.deleteTask = function (task) {
            for (var i = _this.tasks.length - 1; i >= 0; i--) {
                if (_this.tasks[i] === task) {
                    _this.tasks.splice(i, 1);
                    console.log("Task \"" + task + "\" removed from the list");
                    break;
                }
            }
            return _this.tasks.length;
        };
    }
    return Todo;
}());
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
