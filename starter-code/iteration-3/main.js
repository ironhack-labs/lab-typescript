"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title, updatedAt) {
        this.title = title;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.list = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.list.push(task);
        console.log('===== ADDED TASK ======');
        return this.list.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.list.forEach(function (task) {
            console.log("Task " + task.title + " added on: " + task.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (deletedTask) {
        this.list = this.list.filter(function (task) { return task !== deletedTask; });
        console.log("====== TASK DELETED =====");
        return this.list.length;
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
