"use strict";
exports.__esModule = true;
// Add the reference to the "TodoInterface"
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("=========== NEW TASK =========== \n                Task " + task + " inserted in the list   \n                Number of items: " + task.length + "    \n                ");
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach = function (task) {
            console.log(task);
        };
    };
    Todo.prototype.deleteTask = function (tasks) {
        this.tasks.splice(tasks.indexOf(tasks), 1);
        console.log("=========== TASK REMOVED ===========\n        Task \"" + tasks + "\"\n        Number of items: " + Array.length);
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
