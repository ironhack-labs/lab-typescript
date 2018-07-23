"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(tasks) {
        this.tasks = tasks;
        this.tasks = tasks;
    }
    Todo.prototype.listAllTasks = function () {
        console.log(this.tasks);
    };
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log(task);
    };
    Todo.prototype.deleteTask = function (task) {
        console.log(task);
        var tasks = this.tasks;
        tasks.forEach(function (e) {
            if (e === task)
                tasks.splice(tasks.indexOf(e), 1);
        });
    };
    return Todo;
}());
// Execution
var array = [];
var myTodos = new Todo(array);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
