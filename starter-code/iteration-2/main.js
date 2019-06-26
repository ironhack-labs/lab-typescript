"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.taskList = [];
    }
    Todo.prototype.addTask = function (task) {
        this.taskList.push(task);
        return this.taskList.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log(this.taskList.join());
    };
    Todo.prototype.deleteTask = function (task) {
        this.taskList = this.taskList.filter(function (value) { return value !== task; });
        return this.taskList.length;
    };
    return Todo;
}());
// Execution
var myTodos1 = new Todo();
console.log("Number of items:", myTodos1.addTask('This is our first task'));
console.log("Number of items:", myTodos1.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 3!! 🤓'));
myTodos1.listAllTasks();
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 2!! 🤓'));
myTodos1.listAllTasks();
