"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.isDone = function () {
        this.status != this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log('NEW TASK ADDED:');
        console.log(this.tasks[this.tasks.length - 1].title + " | " + this.tasks[this.tasks.length - 1].updatedAt);
        return this.tasks.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        console.log('YOUR TASKS:');
        this.tasks.forEach(function (task) {
            console.log(task.title + " | " + task.updatedAt);
        });
    };
    ;
    TodoList.prototype.deleteTask = function (task) {
        var taskIndex = this.tasks.indexOf(task);
        this.tasks.splice(0, taskIndex);
        console.log('THIS TASK WAS DELETED');
        console.log("" + taskIndex);
        return this.tasks.length;
    };
    ;
    TodoList.prototype.listUncomplete = function () {
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            if (!task.status) {
                console.log(task.title + " | " + task.updatedAt);
            }
        }
    };
    ;
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
