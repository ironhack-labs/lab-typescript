"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        // constructor(public string: Array<string>){}
        this.tasks = [];
    }
    Todo.prototype.addTask = function (string) {
        this.tasks.push(string);
        console.log("Inserted \"" + string + "\" into Tasks");
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (e, i) {
            console.log("Task " + i + " is " + e);
        });
    };
    Todo.prototype.deleteTask = function (string) {
        var index = this.tasks.indexOf(string);
        console.log("Number of tasks before deletion: " + this.tasks.length);
        this.tasks.splice(index, 1);
        console.log("Deleted \"" + string + "\" from Tasks");
        return this.tasks.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
