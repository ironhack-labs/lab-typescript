"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(tasks) {
        if (tasks === void 0) { tasks = []; }
        this.tasks = tasks;
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task " + task + " inserted in the list");
        console.log("Number of items: " + this.tasks.length);
        return this.tasks.length;
    };
    Todo.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] == task) {
                this.tasks.splice(i, 1);
                console.log("Task " + task + " removed from the list");
                console.log("Number of items: " + this.tasks.length);
                return this.tasks.length;
            }
        }
        ;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (e) {
            console.log(e);
        });
    };
    return Todo;
}());
// Execution
var myTodo = new Todo();
console.log("Number of items:", myTodo.addTask('This is our first task'));
console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 3!! 🤓'));
myTodo.listAllTasks();
console.log("Number of items:", myTodo.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodo.deleteTask('Finish this iteration 2!! 🤓'));
myTodo.listAllTasks();
