"use strict";
//exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date(Date.now());
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
        this.updatedAt = new Date(Date.now());
    };
    return TodoItem;
}());
//exports.TodoItem = TodoItem;
var TodoList = (function () {
    function TodoList(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    TodoList.prototype.addTask = function (item) {
        console.log("Task \"" + item.title + "\" inserted in the list!");
        this.items.push(item);
        return this.items.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.items.forEach(function (item) {
            console.log("Task " + item.title + " Updated at " + item.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        console.log("Task \"" + item.title + "\" removed from list");
        return this.items.length;
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
