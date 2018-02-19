"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.done = false;
    }
    TodoItem.prototype.doneToggle = function () {
        !this.done;
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.array = [];
    }
    ;
    TodoList.prototype.addTask = function (message) {
        this.array.push(message);
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        console.log(this.array);
    };
    ;
    TodoList.prototype.deleteTask = function (message) {
        this.array.forEach(function (a, index, arr) {
            if (a.title == message.title) {
                arr.splice(index, 1);
            }
        });
    };
    ;
    TodoList.prototype.listUncomplete = function () {
        this.array.forEach(function (a) {
            if (a.done == false) {
                console.log(a);
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
