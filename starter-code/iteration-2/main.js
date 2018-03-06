"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.myTasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTasks.push(task);
        console.log("\n=========== NEW TASK ===========\ntask " + '"' + task + '"' + " inserted in the list");
        return (this.myTasks.length);
    };
    Todo.prototype.listAllTasks = function () {
        console.log("\n=========== LIST TASKS ===========");
        this.myTasks.forEach(function (element) {
            console.log(element);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        this.myTasks.splice(this.myTasks.indexOf(task), 1);
        console.log("\n=========== TASK REMOVED ===========\ntask " + '"' + task + '"' + " removed from the list");
        return this.myTasks.length;
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
