"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    // myArray: Array<string> = [];
    function TodoItem(title) {
        this.title = title;
        this.status = true;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === true)
            this.status = false;
        else
            this.status = true;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.myArray = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log(task);
        console.log(this.myArray.length);
        return this.myArray.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.myArray.forEach(function (element) {
            console.log(element);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.myArray.length; i++) {
            if (this.myArray[i] == task)
                this.myArray.splice(i, 1);
        }
        return this.myArray.length;
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
// myTodos.listUncomplete();
myTodos.listAllTasks();
