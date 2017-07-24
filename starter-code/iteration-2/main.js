"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    Todo.prototype.listAllTasks = function () {
        console.log(this.tasks);
    };
    Todo.prototype.deleteTask = function (task) {
        var i = arrayTasks.indexOf(task);
        if (i > -1) {
            arrayTasks.splice(i, 1);
        }
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
