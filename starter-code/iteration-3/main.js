"use strict";
// Add the reference to the interface
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title, status, updatedAt) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === true) {
            return this.status = false;
        }
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.TodoList = [];
    }
    TodoList.prototype.addTask = function (TodoItem) {
        this.TodoList.push(TodoItem);
        return this.TodoList.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        for (var i = 0; i < this.TodoList.length; i++) {
            console.log(this.TodoList[i]);
        }
    };
    ;
    TodoList.prototype.deleteTask = function (TodoItem) {
        this.TodoList.splice(0, 1);
        console.log('deleted');
        return this.TodoList.length;
    };
    ;
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task', true, new Date);
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!', false, new Date);
var task3 = new TodoItem('Finish this iteration 1!! 🤓', true, new Date);
var task4 = new TodoItem('Finish this iteration 2!! 🤓', false, new Date);
var task5 = new TodoItem('Finish this iteration 3!! 🤓', false, new Date);
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
// myTodos.listUncomplete();
