"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTasks = function (task) {
        tasks.push(task);
        return tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        tasks.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        this.tasks = this.tasks.filter(function (t) {
            console.log();
        });
    };
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTasks('This is our first task'));
console.log("Number of items:", myTodos.addTasks('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTasks('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTasks('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTasks('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
