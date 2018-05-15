"use strict";
exports.__esModule = true;
// Create a class TodoItem that implements the corresponding interface.
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.updatedAt = Date.now();
        this.status = false;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
        this.updatedAt = Date.now();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.TodoItems = [];
    }
    TodoList.prototype.addTask = function (theItem) {
        console.log(theItem.title);
        this.TodoItems.push(theItem); // Adds to the array.
        console.log("=========== NEW TASK ===========");
        console.log("Task: ", theItem);
        return this.TodoItems.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.TodoItems.forEach(function (task) {
            console.log(task.title);
        });
    };
    TodoList.prototype.deleteTask = function (theItem) {
        var theIndex = this.TodoItem.indexOf(theItem);
        console.log("=========== REMOVED TASK ===========");
        for (var i = 0; i < this.TodoItems.length; i++) {
            if (this.TodoItems[i] === theItem) {
                this.TodoItems.splice(i, 1);
            }
            ;
        }
        ;
        console.log("Task: ", theItem);
        return this.TodoItems.length;
        2;
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
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
myTodos.listUncomplete();
