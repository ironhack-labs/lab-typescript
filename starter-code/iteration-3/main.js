"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        if (title === void 0) { title = "New task"; }
        this.title = title;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toogleStatus = function () {
        throw new Error("Method not implemented.");
    };
    TodoItem.prototype.toggleStatus = function () {
        this.status != this.status;
        this.updatedAt = new Date();
    };
    ;
    ;
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("=========== NEW INSERTION ===========");
        console.log("Task \"" + task + "\" inserted in the list");
        return this.tasks.length;
    };
    TodoList.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index >= 0) {
            this.tasks.splice(index, 1);
            console.log("=========== NEW DELETION ===========");
            console.log("Task \"" + task + "\" removed from the list");
        }
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        console.log("=========== TASKS ===========");
        this.tasks.forEach(function (task) {
            console.log(task.title + ", " + task.updatedAt);
        });
    };
    TodoList.prototype.listIncomplete = function () {
        this.tasks.forEach(function (task) {
            if (!task.status) {
                console.log("Pending: " + task.title + ", " + task.updatedAt);
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
myTodos.listIncomplete();
