"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status == false) {
            this.status = true;
        }
        else {
            this.status = false;
        }
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.array = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.array.push(task);
        console.log("Task " + task + " inserted in the list");
        console.log(this.array.length);
        return this.array.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.array.forEach(function (task) {
            console.log(task);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        this.array.splice(this.array.indexOf(task), 1);
        console.log("Task " + task + " removed from the list");
        console.log(this.array.length);
        return this.array.length;
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
