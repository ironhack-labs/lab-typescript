"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toogleStatus = function () {
        this.status === true ? this.status = false : this.status = true;
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.list = [];
    }
    ;
    TodoList.prototype.addTask = function (task) {
        this.list.push(task);
        return this.list.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.list.forEach(function (list) {
            console.log(list.title);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        this.list = this.list.filter(function (list) {
            return list === task;
        });
        return this.list.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.list.forEach(function (list) {
            if (list.status === false) {
                console.log(list.title);
            }
        });
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
myTodos.listUncomplete();
