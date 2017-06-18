"use strict";
// exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.done = false;
        this.updatedAt = new Date;
        this.taskTitle = "";
        this.taskTitle = title;
        console.log("Created Item --> " + title);
    }
    TodoItem.prototype.toggle = function () {
        if (this.done == false) {
            this.done = true;
        }
        else if (this.done == true) {
            this.done = false;
        }
    };
    return TodoItem;
}());
// exports.TodoItem = TodoItem;
var TodoList = (function () {
    function TodoList() {
        this.itemList = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.itemList.push(task);
        console.log("Added --> " + task.taskTitle + " to the list ");
        return this.itemList.length;
    };
    TodoList.prototype.listAllTasks = function () {
        console.log("--------------- Task List -------------");
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var listItem = _a[_i];
            console.log(listItem.taskTitle);
        }
        return this.itemList.length;
    };
    TodoList.prototype.deleteTask = function (task) {
        var findTask = this.itemList.indexOf(task);
        console.log("Deleted " + findTask);
        this.itemList.splice(findTask, 1);
        return this.itemList.length;
    };
    TodoList.prototype.showPending = function () {
        console.log("-------------- Pending Items -------------");
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var listItem = _a[_i];
            if (listItem.done == false) {
                console.log(listItem.taskTitle + " is pending to do");
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
myTodos.showPending();
