"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = (function () {
    function TodoItem(title, status, updatedAt) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
        this.deleteTaskItem = [];
    }
    TodoItem.prototype.toggle = function () {
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(arrayList) {
        this.arrayList = arrayList;
    }
    TodoList.prototype.addTask = function (task) {
        // this.task = task;        
        this.arrayList.push(task);
        console.log("=========== NEW TASK =========== \n        Task \"" + task.title + "\" inserted in the list ");
        console.log("Number of items: " + this.arrayList.length);
        return this.arrayList.length;
    };
    TodoList.prototype.listTask = function () {
        this.arrayList.forEach(function (element) {
            console.log(element.title, element.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var that = this;
        this.arrayList.forEach(function (element, index) {
            if (element === task) {
                that.arrayList.splice(index, 1);
                console.log("=========== NEW REMOVED =========== \n                Task \"" + task.title + "\" removed in the list ");
                console.log("Number of items: " + that.arrayList.length);
            }
        });
        return this.arrayList.length;
    };
    return TodoList;
}());
// Create class TodoList that implements the corresponding interface
// Execution
var task1 = new TodoItem('This is our first task', true, new Date());
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!', true, new Date());
var task3 = new TodoItem('Finish this iteration 1!! 🤓', true, new Date());
var task4 = new TodoItem('Finish this iteration 2!! 🤓', true, new Date());
var task5 = new TodoItem('Finish this iteration 3!! 🤓', true, new Date());
var myTodos = new TodoList([]);
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listTask();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
// myTodos.listUncomplete();
