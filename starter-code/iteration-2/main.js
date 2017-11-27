"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
    }
    ;
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Tasks inserted: " + this.tasks.length + " | Last: " + task[this.tasks.length - 1]);
        return this.tasks.length;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (e) {
            console.log(e);
        });
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        console.log("Delete successful | Elements: " + this.tasks.length);
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
