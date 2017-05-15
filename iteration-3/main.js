"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.updatedAt = new Date();
        this.status = false;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status) {
            this.status = false;
        }
        else {
            this.status = true;
        }
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = (function () {
    function TodoList() {
        this.todoItems = [];
    }
    TodoList.prototype.addTask = function (todo) {
        this.todoItems.push(todo);
        console.log(todo + " was added to the array");
        return this.todoItems.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.todoItems.forEach(function (todo) {
            console.log(todo.title, todo.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (todo) {
        console.log(todo.title + " has been deleted");
        var index = this.todoItems.indexOf(todo);
        this.todoItems.splice(index, 1);
        return this.todoItems.length;
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
