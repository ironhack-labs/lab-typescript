"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toogleStatus = function () {
        this.status === true ? this.status = false : this.status = true;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.items.push(task);
        return this.items.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.items.forEach(function (item) {
            console.log(item.title);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        this.items = this.items.filter(function (item) {
            return item === task;
        });
        return this.items.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.items.forEach(function (item) {
            if (item.status === false) {
                console.log(item.title);
            }
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
