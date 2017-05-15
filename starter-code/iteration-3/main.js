"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status = true) {
            this.status = false;
        }
        else {
            this.status = true;
        }
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(todoItems) {
        if (todoItems === void 0) { todoItems = []; }
        this.todoItems = todoItems;
    }
    TodoList.prototype.addTask = function (task) {
        this.todoItems.push(task);
        return this.todoItems.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        this.todoItems.forEach(function (task) {
            console.log(task);
        });
    };
    ;
    TodoList.prototype.deleteTask = function (task) {
        var index = this.todoItems.indexOf(task);
        this.todoItems.splice(index, 1);
        return this.todoItems.length;
    };
    ;
    TodoList.prototype.listUncomplete = function () {
        this.todoItems.forEach(function (task) {
            if (task.status = false) {
                console.log(task);
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
