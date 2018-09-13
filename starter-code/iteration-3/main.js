"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.status = false;
        this.title = title;
        this.updatedA = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = true;
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task inserted " + task);
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (elem) { console.log(elem); });
    };
    TodoList.prototype.deleteTask = function (task) {
        this.tasks = this.tasks.filter(function (elem) {
            return elem !== task;
        });
        console.log("task deleted: " + task);
        return this.tasks.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.tasks.forEach(function (elem) {
            console.log(elem);
            if (elem.status == false)
                console.log(elem);
        });
    };
    return TodoList;
}());
// Create class TodoList that implements the corresponding interface
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
