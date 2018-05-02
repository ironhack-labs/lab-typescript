"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title, status, updatedAt) {
        if (status === void 0) { status = false; }
        if (updatedAt === void 0) { updatedAt = new Date(); }
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList(list) {
        if (list === void 0) { list = []; }
        this.list = list;
    }
    TodoList.prototype.addTask = function (task) {
        this.list.push(task);
        console.log("Taks " + task.title + " has been added to the list");
        console.log("Number of items: " + this.list.length);
        return this.list.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        this.list.forEach(function (task) {
            console.log("\n            " + task.title + "\n            " + task.updatedAt + "\n            ");
        });
    };
    ;
    TodoList.prototype.deleteTask = function (task) {
        this.list.splice(this.list.indexOf(task), 1);
        console.log("Task " + task.title + " has been removed from the list");
        console.log("Number of items: " + this.list.length);
        return this.list.length;
    };
    ;
    TodoList.prototype.listUncomplete = function () {
        this.list.forEach(function (task) {
            if (task.status !== true) {
                console.log(task.title);
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
