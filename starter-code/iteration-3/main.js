"use strict";
// Add the reference to the interface
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
        this.updatedAt = new Date();
    };
    TodoItem.prototype.toString = function () {
        return this.title;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.list = [];
    }
    TodoList.prototype.addTask = function (task) {
        var l = this.list.push(task);
        console.log("Task \"" + task + "\" inserted in the list");
        return l;
    };
    TodoList.prototype.listAllTasks = function () {
        console.log(this.list);
    };
    TodoList.prototype.deleteTask = function (task) {
        var pos = this.list.indexOf(task);
        if (pos != -1) {
            this.list.splice(pos, 1);
            console.log("Task \"" + task + "\" removed from the list.");
        }
        return this.list.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.list.forEach(function (e) {
            if (!e.status) {
                console.log(e);
            }
        });
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem("This is our first task");
var task2 = new TodoItem("Eat pizza 🍕 yummy!!!");
var task3 = new TodoItem("Finish this iteration 1!! 🤓");
var task4 = new TodoItem("Finish this iteration 2!! 🤓");
var task5 = new TodoItem("Finish this iteration 3!! 🤓");
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
