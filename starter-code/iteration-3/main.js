"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.updatedAt = new Date();
        this.status = false;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.updatedAt = new Date();
        return this.status = (this.status) ? false : true;
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
var TodoList = (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (todoItem) {
        this.tasks.push(todoItem);
        console.log("Task \"" + todoItem.title + "\" inserted in the list");
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (todoItem) {
            console.log("task " + todoItem.title + " updated at: " + todoItem.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var _this = this;
        this.tasks.forEach(function (todoItem, i) {
            if (todoItem == task)
                _this.tasks.splice(i, 1);
        });
        console.log("Task \"" + task.title + "\" removed from the list");
        return this.tasks.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.tasks.forEach(function (todoItem) {
            if (todoItem.status == false)
                console.log(todoItem.title);
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
