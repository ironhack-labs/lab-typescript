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
        this.status = !this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = (function () {
    function TodoList(myArray) {
        this.myArray = myArray;
    }
    TodoList.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log(task.title + " inserted");
        return this.myArray.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.myArray.forEach(function (task) {
            console.log(task.title + " - " + task.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        this.myArray = this.myArray.filter(function (currentTask) {
            currentTask !== task;
        });
        console.log(task.title + " delete");
        return this.myArray.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.myArray.forEach(function (task) {
            if (!task.status) {
                console.log("incompleted task: " + task.title + " - " + task.updatedAt);
            }
        });
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task', false, new Date());
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!', false, new Date());
task1.toggleStatus();
var task3 = new TodoItem('Finish this iteration 1!! 🤓', false, new Date());
var task4 = new TodoItem('Finish this iteration 2!! 🤓', false, new Date());
var task5 = new TodoItem('Finish this iteration 3!! 🤓', false, new Date());
task5.toggleStatus();
var todoArray = [];
todoArray.push(task1);
todoArray.push(task2);
todoArray.push(task3);
todoArray.push(task4);
todoArray.push(task5);
var myTodos = new TodoList(todoArray);
myTodos.listUncomplete();
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
