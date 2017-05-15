"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
    }
    TodoItem.prototype.toogle = function () {
        this.done = !this.done;
        this.updatedAt = new Date(Date.now());
    };
    ;
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.adding = function (task) {
        this.todos.push(task);
    };
    TodoList.prototype.listAllTasks = function () {
        this.todos.forEach(function (element) {
            console.log(element.title);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var index = this.todos.indexOf(task);
        this.todos.splice(index, 1);
    };
    TodoList.prototype.showNotDone = function () {
        this.todos.forEach(function (element) {
            if (element.done == false)
                console.log(element.title);
        });
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
console.log("Number of items:", myTodos.adding(task1));
console.log("Number of items:", myTodos.adding(task2));
console.log("Number of items:", myTodos.adding(task3));
console.log("Number of items:", myTodos.adding(task4));
console.log("Number of items:", myTodos.adding(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.showNotDone();
