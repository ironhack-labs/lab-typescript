"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.isDone = false;
    }
    TodoItem.prototype.toggle = function () {
        this.isDone = !this.isDone;
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.todoItems = [];
    }
    ;
    TodoList.prototype.addTask = function (item) {
        this.todoItems.push(item);
        return this.todoItems.length;
    };
    TodoList.prototype.deleteTask = function (item) {
        this.todoItems.splice(this.todoItems.indexOf(item), 1);
        return this.todoItems.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.todoItems.forEach(function (item) {
            console.log(item);
        });
    };
    TodoList.prototype.listUncomplete = function () {
        var incompletes = this.todoItems.map(function (elem) {
            if (!elem.isDone)
                return elem;
        });
        incompletes.forEach(function (elem) {
            console.log(elem);
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
