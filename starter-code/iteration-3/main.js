"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title, updatedAt) {
        this.title = title;
        this.updatedAt = updatedAt;
    }
    ;
    TodoItem.prototype.toggleStatus = function () {
        this.status = !status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.list = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.list.push(task);
        console.log('Added task!');
        return this.list.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.list.forEach(function (task) {
            console.log("Task " + task.title + " added on: " + task.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (deletedTask) {
        this.list = this.list.filter(function (task) { return task !== deletedTask; });
        console.log("Task deleted!");
        return this.list.length;
    };
    return TodoList;
}());
var task1 = new TodoItem('This is our first task', new Date());
task1.toggleStatus;
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!', new Date());
var task3 = new TodoItem('Finish this iteration 1!! 🤓', new Date());
var task4 = new TodoItem('Finish this iteration 2!! 🤓', new Date());
var task5 = new TodoItem('Finish this iteration 3!! 🤓', new Date());
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
