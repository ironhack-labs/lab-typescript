"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(taskTitle) {
        this.taskTitle = taskTitle;
        this.status = false;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === false) {
            this.status = true;
        }
        else {
            this.status = false;
        }
        this.updatedAt = new Date(new Date().getDate());
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.toDoArray = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.toDoArray.push(task);
        console.log("=========== NEW TASK ==========  Task " + task + " added to the list");
        console.log("Number of items: " + this.toDoArray.length);
    };
    TodoList.prototype.listAllTasks = function () {
        for (var i in this.toDoArray) {
            console.log(this.toDoArray[i]);
        }
    };
    TodoList.prototype.deleteTask = function (task) {
        var deleteItem = this.toDoArray.indexOf(task);
        this.toDoArray.splice(deleteItem, 1);
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
