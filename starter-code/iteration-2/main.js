"use strict";
exports.__esModule = true;
// Add the reference to the "TodoInterface"
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.array = [];
    }
    Todo.prototype.addTask = function (task) {
        this.array.push(task);
    };
    Todo.prototype.listAllTasks = function () {
        this.array.forEach(function (elem) { return console.log(elem); });
    };
    Todo.prototype.deleteTask = function (task) {
        this.array.splice(this.array.indexOf(task), 1);
    };
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
