"use strict";
exports.__esModule = true;
// Add the reference to the interface
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title, status, updatedAt) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function (status) {
        if (this.status) {
            this.status = Boolean("finished");
        }
        else {
            this.status = Boolean("unfinished");
        }
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    TodoList.prototype.addTask = function (task) {
        this.items.push(task);
        console.log(task);
        console.log(this.items.length);
        return this.items.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.items.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var index = this.items.indexOf(task);
        this.items.splice(index, 1);
        console.log(task);
        // console.log(`Deleted ${index} ${task}`);
        console.log("Tasks left " + this.items.length);
        return this.items.length;
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task', false, new Date());
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!', false, new Date());
var task3 = new TodoItem('Finish this iteration 1!! 🤓', false, new Date());
var task4 = new TodoItem('Finish this iteration 2!! 🤓', false, new Date());
var task5 = new TodoItem('Finish this iteration 3!! 🤓', false, new Date());
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
// myTodos.listUncomplete();
