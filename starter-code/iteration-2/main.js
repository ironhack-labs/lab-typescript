"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(task) {
        this.task = task;
        this.arr = [];
    }
    Todo.prototype.addTask = function (task) {
        this.arr.push(task);
        console.log(task + " inserted to Array");
        return this.arr.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.arr.forEach(function (e) {
            console.log(e);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        this.arr.pop();
        console.log(task + " deleted from Array");
        return this.arr.length;
    };
    return Todo;
}());
var myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
