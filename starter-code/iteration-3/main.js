"use strict";
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title, updatedAt) {
        this.title = title;
        this.updatedAt = updatedAt;
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
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.myList = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.myList.push(task);
        console.log("=========== NEW TASK ===========\n    Task \"" + task.title + "\" inserted in the list\n    Number of items: " + this.myList.length);
        return this.myList.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.myList.forEach(function (task) {
            console.log(task.title);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        this.myList.splice(this.myList.indexOf(task), 1);
        console.log("=========== TASK REMOVED ===========\n    Task \"" + task.title + "\" removed from the list\n    Number of items: " + this.myList.length);
        return this.myList.length;
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task', new Date());
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
myTodos.listAllTasks();
