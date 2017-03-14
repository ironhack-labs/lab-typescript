"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        return this.tasks.length;
    };
    Todo.prototype.deleteTask = function (task) {
        var _this = this;
        this.tasks.forEach(function (oneTask, i) {
            if (oneTask === task) {
                _this.tasks.splice(i, 1);
            }
        });
        return this.tasks.length;
    };
    return Todo;
}());
// 1. Create a class Todo that implements the Interface created before.
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
