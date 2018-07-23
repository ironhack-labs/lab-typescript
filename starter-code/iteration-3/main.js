"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title, done, updatedAt) {
        if (done === void 0) { done = false; }
        if (updatedAt === void 0) { updatedAt = new Date(); }
        this.title = title;
        this.done = done;
        this.updatedAt = updatedAt;
        this.title = title;
        this.done = done;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggle = function () {
        if (this.done === true)
            this.done = false;
        this.done = true;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList(TodoItem) {
        this.TodoItem = TodoItem;
        this.TodoItem = TodoItem;
    }
    TodoList.prototype.listAllTasks = function () {
        console.log(this.TodoItem);
    };
    TodoList.prototype.addTask = function (task) {
        this.TodoItem.push(task);
        console.log(task);
    };
    TodoList.prototype.deleteTask = function (task) {
        console.log(task);
        var TodoItem = this.TodoItem;
        TodoItem.forEach(function (e) {
            if (e === task)
                TodoItem.splice(TodoItem.indexOf(e), 1);
        });
    };
    TodoList.prototype.listUncomplete = function () {
        console.log(this.TodoItem);
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var array = [];
var myTodos = new TodoList(array);
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
