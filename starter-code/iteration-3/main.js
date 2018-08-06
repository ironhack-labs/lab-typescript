"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title, updatedAt) {
        if (updatedAt === void 0) { updatedAt = new Date(); }
        this.title = title;
        this.updatedAt = updatedAt;
        this.status = false;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.updatedAt = new Date();
        this.status = !this.status;
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.list = [];
    }
    TodoList.prototype.addTask = function (target) {
        this.list.push(target);
        return this.list.length;
    };
    TodoList.prototype.listAllTasks = function () {
        console.log.apply(console, this.list);
    };
    TodoList.prototype.deleteTask = function (target) {
        var tempIndex = this.list.indexOf(target);
        this.list.splice(tempIndex, 1);
        return this.list.length;
    };
    return TodoList;
}());
// Create class TodoList that implements the corresponding interface
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
task3.toggleStatus();
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
task4.toggleStatus();
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
task5.toggleStatus();
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
