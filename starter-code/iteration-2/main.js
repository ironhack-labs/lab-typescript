"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        var _this = this;
        this.tasks = [];
        this.addTask = function (task) {
            _this.tasks.push(task);
            return task;
        };
        this.listAllTasks = function () {
            console.log(_this.tasks);
        };
        this.deleteTask = function (task) {
            var taskIndex = _this.tasks.indexOf(task);
            _this.tasks.splice(taskIndex, 1);
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
