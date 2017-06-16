"use strict";
// exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(titles) {
        this.done = false;
        this.titles = "";
        var itemTitle = titles;
        console.log("Created Item --> " + titles);
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
var TodoList = (function () {
    function TodoList() {
        this.itemList = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.itemList.push(task);
        console.log("Added + " + task.titles + " to the list ");
    };
    TodoList.prototype.listAllTasks = function () {
        console.log("--------------- Task List -------------");
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var listItem = _a[_i];
            console.log(listItem.titles);
        }
    };
    TodoList.prototype.deleteTask = function (task) {
        var findTask = this.itemList.indexOf(task.titles);
        console.log("Task # " + findTask);
        console.log("Deleted " + findTask);
    };
    TodoList.prototype.showPending = function () {
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var listItem = _a[_i];
            if (listItem.done == false) {
                console.log(listItem.titles + " is pending to do");
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
