"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = (function () {
    function TodoItem(title, status, updatedAt) {
        if (status === void 0) { status = true; }
        if (updatedAt === void 0) { updatedAt = new Date(); }
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    //Algunos de los parámetros que va a recibir la clase los ponemos por defecto de forma que no son obligatorios cuando creemos instancias de esta clase
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === true) {
            this.updatedAt = new Date();
            return this.status = false;
        }
        else if (this.status === false) {
            this.updatedAt = new Date();
            return this.status = true;
        }
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = (function () {
    function TodoList(tasks) {
        this.tasks = tasks;
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task " + task.title + " inserted in the list");
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        console.log("Task " + task.title + " removed in the list");
        return this.tasks.length;
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
task1.toggleStatus();
console.log(task1.status);
var myTodos = new TodoList([]);
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
