"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        if (!this.status) {
            this.status = true;
            this.updatedAt = new Date();
        }
        else {
            this.status = false;
            this.updatedAt = new Date();
        }
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
;
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task \"" + task.title + "\" inserted in the list");
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) { return console.log(task); });
    };
    TodoList.prototype.deleteTask = function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        console.log("=========== TASK REMOVED ===========");
        console.log("Task \"" + task.title + "\" removed from the list");
        return this.tasks.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.tasks.forEach(function (task) { return task.toggleStatus(); });
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
myTodos.listUncomplete();
