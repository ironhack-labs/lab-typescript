"use strict";
exports.__esModule = true;
// Add the reference to the interface
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = true;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status,
            this.updatedAt = new Date();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.arr = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.arr.push(task);
        console.log('insertion sucess');
        return this.arr.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.arr.forEach(function (element) {
            console.log(element);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        this.arr.splice(this.arr.indexOf(task), 1);
        console.log('removal sucess');
        console.log(this.arr.length);
        return this.arr.length;
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
//myTodos.listUncomplete();
