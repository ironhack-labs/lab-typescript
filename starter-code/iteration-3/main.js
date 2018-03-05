"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.status = this.status,
            this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === true) {
            this.status = false;
        }
        else if (this.status === false) {
            this.status = true;
        }
        this.updatedAt = new Date();
    };
    TodoItem.prototype.updateDate = function () {
        return this.updatedAt = new Date();
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(TodoItems) {
        this.TodoItems = TodoItems;
    }
    TodoList.prototype.addTask = function (item) {
        this.TodoItems.push(item);
        item.updateDate();
        return this.TodoItems.length;
    };
    TodoList.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.TodoItems; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    TodoList.prototype.deleteTask = function (item) {
        item.toggleStatus();
        var remove = this.TodoItems.indexOf(item);
        this.TodoItems.splice(remove, 1);
        return this.TodoItems.length;
    };
    TodoList.prototype.listUncomplete = function () {
        for (var _i = 0, _a = this.TodoItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.status === false) {
                console.log(item);
            }
        }
    };
    return TodoList;
}());
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList([]);
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
console.log(task1);
