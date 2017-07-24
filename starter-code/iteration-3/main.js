"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = (function () {
    function TodoItem(title, status, updatedAt) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status ? this.status = false : this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = (function () {
    function TodoList(arrayofItems) {
        this.arrayofItems = arrayofItems;
    }
    TodoList.prototype.addTask = function (item) {
        this.arrayofItems.push(item);
        console.log("\n    =========== NEW TASK ===========\n    Task " + item.title + " inserted in the list\n    ");
        return this.arrayofItems.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.arrayofItems.forEach(function (item) {
            console.log(item.title, item.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (item) {
        var index = this.arrayofItems.indexOf(item);
        if (index != -1) {
            this.arrayofItems.splice(index, 1);
        }
        return this.arrayofItems.length;
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task', false, new Date());
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!', false, new Date());
var task3 = new TodoItem('Finish this iteration 1!! 🤓', false, new Date());
var task4 = new TodoItem('Finish this iteration 2!! 🤓', false, new Date());
var task5 = new TodoItem('Finish this iteration 3!! 🤓', false, new Date());
var myTodos = new TodoList([]);
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
// myTodos.listUncomplete();
