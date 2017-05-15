"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = (function () {
    function Todo() {
        this.arrayTasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.arrayTasks.push(task);
    };
    Todo.prototype.listAllTasks = function () {
        this.arrayTasks.forEach(function (element) {
            console.log(element);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.arrayTasks.lastIndexOf(task);
        this.arrayTasks.splice(index, 1);
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
