"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.updatedAt = Date.now();
        this.status = false;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.arr = [];
    }
    TodoList.prototype.addTask = function (item) {
        this.arr.push(item);
        return this.arr.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.arr.forEach(function (item) {
            console.log(item.title);
        });
    };
    TodoList.prototype.deleteTask = function (item) {
        var index = this.arr.indexOf(item);
        this.arr.splice(index, 1);
        // console.log("Deleted: ", task + " length is ", myArr.length)
        return this.arr.length;
    };
    return TodoList;
}());
// Create class TodoList that implements the corresponding interface
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
myTodos.listAllTasks();
