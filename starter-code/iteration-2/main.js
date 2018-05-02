"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(taskList) {
        if (taskList === void 0) { taskList = []; }
        this.taskList = taskList;
    }
    Todo.prototype.addTask = function (task) {
        this.taskList.push(task);
        console.log("Task \"" + task + " added from the list");
        console.log("Number of items " + this.taskList.length);
        return this.taskList.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.taskList.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        this.taskList.splice(this.taskList.indexOf(task), 1);
        console.log("Task \"" + task + " removed from the list");
        console.log("Number of items " + this.taskList.length);
        return this.taskList.length;
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
