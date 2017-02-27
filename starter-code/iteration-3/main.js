"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var TodoItem = (function () {
    function TodoItem(title, status, updatedAt) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status = false) {
            this.status = true;
        }
        else if (this.status = true) {
            this.status = false;
        }
        this.updatedAt = today;
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(myArray) {
        if (myArray === void 0) { myArray = []; }
        this.myArray = myArray;
    }
    TodoList.prototype.addTask = function (task) {
        this.myArray.push(task);
        return this.myArray.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.myArray.forEach(function (elem) { console.log(elem.updatedAt), console.log(elem.title); });
    };
    TodoList.prototype.deleteTask = function (task) {
        var position = this.myArray.indexOf(task);
        this.myArray.splice(position, 1);
        return this.myArray.length;
    };
    return TodoList;
}());
// Create class TodoItem that implements the corresponding interface
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
