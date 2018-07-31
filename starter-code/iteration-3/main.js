"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(task) {
        this.task = task;
        this.updatedAt = Date["toDateString"];
        this.done = false;
        task = this.task;
    }
    TodoItem.prototype.toggleDone = function () {
        if (this.done === false) {
            this.done = true;
        }
        else {
            this.done = false;
        }
        this.updatedAt = Date["toDateString"];
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.listItems = [];
    }
    TodoList.prototype.addTask = function (item) {
        this.listItems.push(item);
        return this.listItems.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.listItems.forEach(function (e, i) {
            console.log("Item " + i + " is " + e.task);
        });
    };
    TodoList.prototype.deleteTask = function (item) {
        var index = this.listItems.indexOf(item);
        console.log("Number of items before deletion: " + this.listItems.length);
        this.listItems.splice(index, 1);
        return this.listItems.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.listItems.forEach(function (e) {
            if (e.done === false) {
                console.log(e.task + " is not done");
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
