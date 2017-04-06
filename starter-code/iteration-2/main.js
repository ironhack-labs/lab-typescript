"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = (function () {
    function Todo() {
        this.todoList = [];
    }
    Todo.prototype.addTask = function (task) {
        this.todoList.push(task);
        console.log('Task' + task + 'inserted in the list');
        return this.todoList.length;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        this.todoList.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var deleted = task;
        this.todoList = this.todoList.filter(function (item) { return item !== deleted; });
        return this.todoList.length;
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
