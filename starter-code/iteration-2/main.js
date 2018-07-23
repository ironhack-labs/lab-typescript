"use strict";
exports.__esModule = true;
// Add the reference to the "TodoInterface"
var Todo = /** @class */ (function () {
    function Todo() {
        this.arr = [];
    }
    Todo.prototype.addTask = function (task) {
        this.arr.push(task);
        console.log('insertion sucess');
        return this.arr.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.arr.forEach(function (element) {
            console.log(element);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        this.arr.splice(this.arr.indexOf(task), 1);
        console.log('removal sucess');
        console.log(this.arr.length);
        return this.arr.length;
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
