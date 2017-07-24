"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
exports["default"] = TodoItem;
var TodoList = (function () {
    function TodoList() {
    }
    TodoList.prototype.addTask = function (item) {
        this.todoItems.push(item);
        console.log(this.todoItems);
        return this.todoItems.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.todoItems.forEach(function (item) {
            console.log(item);
        });
    };
    TodoList.prototype.deleteTask = function (item) {
        this.todoItems.splice(this.todoItems.indexOf(item), 1);
        console.log(item);
        return this.todoItems.length;
    };
    return TodoList;
}());
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
