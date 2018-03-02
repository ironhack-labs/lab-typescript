"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    ;
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        return tasks.length;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (tasks) {
            console.log(task);
        });
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        this.tasks = this.tasks.filter(function (t) {
            return t !== task;
        });
        console.log("task deleted: " + task);
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
