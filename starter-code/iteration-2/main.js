"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task inserted " + task);
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (elem) { console.log(elem); });
    };
    Todo.prototype.deleteTask = function (task) {
        this.tasks = this.tasks.filter(function (elem) {
            return elem !== task;
        });
        console.log("task deleted: " + task);
        return this.tasks.length;
    };
    return Todo;
}());
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
