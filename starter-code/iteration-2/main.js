"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(task) {
        this.task = task;
        this.toDoList = [];
    }
    Todo.prototype.addTask = function (toDoItem) {
        this.toDoList.push(toDoItem);
        console.log("Task" + toDoItem + "inserted in the list");
        return this.toDoList.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.toDoList.forEach(function (listItem) {
            console.log("listItem");
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.toDoList.indexOf(task);
        if (index !== -1) {
            this.toDoList.splice(index, 1);
        }
        console.log("Task" + task + "deleted from the list");
        return this.toDoList.length;
    };
    return Todo;
}());
var myTodos = new Todo("Walk dog");
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
