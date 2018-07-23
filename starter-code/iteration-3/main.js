"use strict";
exports.__esModule = true;
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === true) {
            this.status = false;
            var day = new Date();
            this.updateAt = day.getDate();
        }
        else {
            this.status = true;
        }
    };
    return TodoItem;
}());
// Create class TodoItem that implements the corresponding interface
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.Arr = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.Arr.push(task);
        document.body.innerHTML = "Insertion done";
        console.log(this.Arr.length);
        return this.Arr.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.Arr.forEach(function (e) {
            console.log(e.title, e.updateAt);
        });
    };
    TodoList.prototype.deleteTask = function (deleteTask) {
        this.Arr.splice(this.Arr.indexOf(deleteTask), 1);
        document.body.innerHTML = "Delete done";
        console.log(this.Arr.length);
        return this.Arr.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.Arr.forEach(function (e) {
            if (e.status === false) {
                console.log(e);
            }
        });
    };
    return TodoList;
}());
// Execution
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
