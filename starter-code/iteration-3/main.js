"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.updatedAt = new Date();
        this.status = false;
    }
    ;
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === false) {
            this.status = true;
        }
        else
            this.status = false;
    };
    ;
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.myArray = [];
    }
    ;
    TodoList.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log('=========== NEW TASK ===========');
        console.log(task);
        return this.myArray.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        this.myArray.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    ;
    TodoList.prototype.deleteTask = function (task) {
        var removeTaskIndex = this.myArray.indexOf(task);
        this.myArray.splice(removeTaskIndex, 1);
        task.toggleStatus();
        console.log('=========== TASK DELETED ===========');
        console.log(task);
        return this.myArray.length;
    };
    ;
    return TodoList;
}());
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
