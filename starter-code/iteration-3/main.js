"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title, itsDone, updatedAt) {
        this.title = title;
        this.itsDone = itsDone;
        this.updatedAt = updatedAt;
        this.itsDone = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toogle = function () {
        if (this.itsDone) {
            this.itsDone = false;
        }
        else {
            this.itsDone = true;
        }
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
var TodoList = (function () {
    function TodoList(TodoItems) {
        this.TodoItems = TodoItems;
    }
    TodoList.prototype.addTask = function (TodoItem) {
        this.TodoItems.push(TodoItem);
        return this.TodoItems.length;
    };
    TodoList.prototype.listAllTasks = function () {
        for (var i = 0; i < this.TodoItems.length; i++) {
            console.log(this.TodoItems[i].title);
        }
    };
    TodoList.prototype.deleteTask = function (TodoItem) {
        for (var i = 0; i < this.TodoItems.length; i++) {
            if (TodoItem === this.TodoItems[i]) {
                delete this.TodoItems[i];
                return this.TodoItems.length;
            }
        }
    };
    TodoList.prototype.listUncomplete = function () {
        for (var i = 0; i < this.TodoItems.length; i++) {
            if (this.TodoItems[i].itsDone == false) {
                console.log(this.TodoItems[i]);
            }
            ;
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
myTodos.listUncomplete();
