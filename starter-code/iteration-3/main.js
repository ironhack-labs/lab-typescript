"use strict";
// exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        if (title === void 0) { title = "New task"; }
        this.title = title;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.isDone = function () {
        this.status != this.status;
        this.updatedAt = new Date;
    };
    ;
    ;
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log(task.title + " was added to the list.");
        return this.tasks.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        console.log("all task:");
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item.title + ", " + item.updatedAt);
        }
    };
    ;
    TodoList.prototype.listUncomplete = function () {
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.status) {
                console.log("Pending: " + item.title + ", " + item.updatedAt);
            }
        }
    };
    ;
    TodoList.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        console.log(task.title + " was deleted from the list.");
        return this.tasks.length;
    };
    ;
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
