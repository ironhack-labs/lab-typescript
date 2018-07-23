"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function (status) {
        if (status) {
            return !status;
        }
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList(todoItem) {
        if (todoItem === void 0) { todoItem = []; }
        this.todoItem = todoItem;
    }
    TodoList.prototype.addTask = function (item) {
        this.todoItem.push(item);
        console.log('Task ' + item.title + 'inserted in the list');
        return this.todoItem.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.todoItem.forEach(function (item) {
            console.log(item);
        });
    };
    TodoList.prototype.deleteTask = function (item) {
        var index = this.todoItem.indexOf(item);
        this.todoItem.splice(index, 1);
        console.log('Task ' + item + 'removed from the list');
        return this.todoItem.length;
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
//myTodos.listUncomplete();
