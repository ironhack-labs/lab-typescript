"use strict";
exports.__esModule = true;
// let TodoInterface = require('todointerface').default
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(list) {
        this.list = list;
    }
    Todo.prototype.addTask = function (newTask) {
        this.list.push(newTask);
    };
    Todo.prototype.listAllTasks = function () {
        console.log(this.list);
    };
    Todo.prototype.deleteTask = function (task) {
        for (var i = this.list.length - 1; i >= 0; i--) {
            if (this.list[i] === task) {
                //    const position = Number(tasks.indexOf(tasks[i]))
                return this.list.splice(i, 1);
            }
        }
    };
    return Todo;
}());
// Execution
var myTodos = new Todo(['cat', 'dog']);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
