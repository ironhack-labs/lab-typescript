"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        var _this = this;
        this.toogle = function () {
            _this.done = !_this.done;
            _this.updatedAt = new Date();
        };
        this.title = title;
        this.done = false;
        this.updatedAt = null;
    }
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        var _this = this;
        this.addTask = function (task) {
            _this.todoItems.push(task);
            console.log("Task \"" + task.title + "\" inserted in the list");
            return _this.todoItems.length;
        };
        this.listAllTasks = function () {
            _this.todoItems.forEach(function (task) {
                console.log(task.title, ', updatedDate: ', task.updatedAt);
            });
        };
        this.deleteTask = function (task) {
            for (var i = _this.todoItems.length - 1; i >= 0; i--) {
                if (_this.todoItems[i].title === task.title) {
                    _this.todoItems.splice(i, 1);
                    console.log("Task \"" + task.title + "\" removed from the list");
                    break;
                }
            }
            return _this.todoItems.length;
        };
        this.listUncomplete = function () {
            _this.todoItems.forEach(function (task) {
                if (task.done) {
                    console.log(task.title, ', updatedDate: ', task.updatedAt);
                }
            });
        };
        this.todoItems = [];
    }
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
