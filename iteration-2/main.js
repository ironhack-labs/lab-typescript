"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var TodoList = (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.addTask = function (todo) {
        this.todos.push(todo);
    };
    TodoList.prototype.listAllTasks = function () {
        this.todos.forEach(function (todo) {
            console.log(todo.title);
        });
    };
    TodoList.prototype.deleteTask = function (todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    };
    return TodoList;
}());
// Execution
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
