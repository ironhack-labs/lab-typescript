"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === true) {
            this.status = false;
            this.updatedAt = new Date();
        }
        else {
            this.status = true;
        }
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (elem) { console.log(elem); });
    };
    TodoList.prototype.deleteTask = function (task) {
        var i = this.tasks.indexOf(task, 0);
        if (i > -1) {
            this.tasks.splice(i, 1);
        }
        return this.tasks.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.tasks;
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
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
