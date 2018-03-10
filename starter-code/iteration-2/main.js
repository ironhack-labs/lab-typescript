"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        var _this = this;
        this.myArray = [];
        this.addTask = function (task) {
            _this.myArray.push(task);
            return task;
        };
        this.listAllTasks = function () {
            return console.log(_this.myArray);
        };
        this.deleteTask = function (task) {
            _this.myArray.splice(_this.myArray.indexOf(task), 1);
            return _this.myArray.length;
        };
    }
    return Todo;
}());
;
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
