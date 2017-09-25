"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title, status, updatedAt) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(TodoItems) {
        this.TodoItems = TodoItems;
    }
    TodoList.prototype.addTask = function (item) {
        this.TodoItems.push(item);
        console.log(this.TodoItems.length);
    };
    TodoList.prototype.listAllTasks = function () {
        console.log(this.TodoItems);
    };
    TodoList.prototype.deleteTask = function (item) {
        this.TodoItems.splice(this.TodoItems.indexOf(item), 1);
    };
    TodoList.prototype.listUncomplete = function () {
        TodoItems.forEach(function (item) {
            if (item.status === false) {
                console.log(item);
            }
        });
    };
    return TodoList;
}());
var TodoItems = [];
var task1 = new TodoItem('This is our first task', false, new Date());
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!', false, new Date());
var task3 = new TodoItem('Finish this iteration 1!! 🤓', false, new Date());
var task4 = new TodoItem('Finish this iteration 2!! 🤓', false, new Date());
var task5 = new TodoItem('Finish this iteration 3!! 🤓', false, new Date());
var myTodos = new TodoList(TodoItems);
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
