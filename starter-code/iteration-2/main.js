"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.myArrayList = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myArrayList.push(task);
        console.log("Task " + task + " inserted in the list");
        console.log(this.myArrayList.length);
        return this.myArrayList.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.myArrayList.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        this.myArrayList.splice(this.myArrayList.indexOf(task), 1);
        console.log("Task " + task + " removed from the list");
        console.log(this.myArrayList.length);
        return this.myArrayList.length;
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
