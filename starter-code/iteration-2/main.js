"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    // constructor(){
    // this.tasks=tasks;
    // }
    Todo.prototype.addTask = function (task) {
        var l = this.tasks.push(task);
        console.log("Task \"" + task + "\" inserted in the list");
        return l;
    };
    Todo.prototype.listAllTasks = function () {
        console.log(this.tasks);
    };
    Todo.prototype.deleteTask = function (task) {
        var pos = this.tasks.indexOf(task);
        if (pos != -1) {
            this.tasks.splice(pos, 1);
            console.log("Task \"" + task + "\" removed from the list.");
        }
        return this.tasks.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask("This is our first task"));
console.log("Number of items:", myTodos.addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 3!! 🤓"));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 2!! 🤓"));
myTodos.listAllTasks();
