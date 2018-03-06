"use strict";
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status) {
            this.status = false;
        }
        else {
            this.status = true;
        }
    };
    ;
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        task.updatedAt = new Date;
        return this.tasks.push(task);
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log("Task: " + task.title + " was created at " + task.updatedAt);
        });
    };
    ;
    TodoList.prototype.deleteTask = function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
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
myTodos.listAllTasks();
