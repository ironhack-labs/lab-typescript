"use strict";
// Add the reference to the "TodoInterface"
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(arrayOfTasks) {
        this.arrayOfTasks = arrayOfTasks;
    }
    Todo.prototype.addTask = function (task) {
        this.arrayOfTasks.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task " + task + " inserted in the list");
        console.log("Number of items: " + this.arrayOfTasks.length);
        return this.arrayOfTasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.arrayOfTasks.length; i++) {
            console.log(this.arrayOfTasks[i]);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        this.arrayOfTasks = this.arrayOfTasks.filter(function (e) { return e !== task; });
        console.log("=========== REMOVE TASK ===========");
        console.log("Task " + task + " removed from the list");
        console.log("Number of items: " + this.arrayOfTasks.length);
        return this.arrayOfTasks.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo(this.Todo);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
