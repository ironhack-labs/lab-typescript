"use strict";
exports.__esModule = true;
var taskArr = [];
var Todo = (function () {
    function Todo(taskArr) {
        this.taskArr = taskArr;
    }
    Todo.prototype.addTask = function (task) {
        this.taskArr.push(task);
    };
    Todo.prototype.listAllTasks = function () {
        console.log(taskArr);
    };
    Todo.prototype.deleteTask = function (task) {
        var taskIndex = this.taskArr.indexOf(task);
        this.taskArr.splice(taskIndex, 1);
    };
    return Todo;
}());
var myTodos = new Todo(taskArr);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
