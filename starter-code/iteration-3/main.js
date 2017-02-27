"use strict";
//exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = (function () {
    function TodoItem(tittle) {
        this.tittle = tittle;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.UpdatedAt = new Date();
        return (!this.status);
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = (function () {
    function TodoList() {
        this.TodoItem = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.TodoItem.push(task);
        console.log(task);
        return this.TodoItem.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.TodoItem.forEach(function (task) { return console.log(task); });
    };
    TodoList.prototype.deleteTask = function (task) {
        var index = this.TodoItem.indexOf(task, 0);
        if (index > -1) {
            this.TodoItem.splice(index, 1);
        }
        console.log("delete an element");
        return this.TodoItem.length;
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
