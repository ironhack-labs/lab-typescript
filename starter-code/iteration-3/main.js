"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        this.updatedAt = new Date();
        this.status = !this.status;
    };
    ;
    return TodoItem;
}());
exports.TodoItem = TodoItem;
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addTask = function (item) {
        this.items.push(item);
        console.log("Task " + item.title + " inserted in the list");
        console.log("Number of items: " + this.items.length);
        return this.items.length;
    };
    TodoList.prototype.deleteTask = function (item) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i] == item) {
                this.items.splice(i, 1);
                console.log("Task " + item.title + " removed from the list");
                console.log("Number of items: " + this.items.length);
                return this.items.length;
            }
        }
        ;
    };
    TodoList.prototype.listAllTasks = function () {
        this.items.forEach(function (e) {
            console.log(e.title);
        });
    };
    return TodoList;
}());
exports.TodoList = TodoList;
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
//myTodos.listUncomplete();
