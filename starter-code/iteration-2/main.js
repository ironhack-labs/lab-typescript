"use strict";

// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.myList = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myList.push(task);
        console.log("=========== NEW TASK ===========\n    Task \"" + task + "\" inserted in the list\n    Number of items: " + this.myList.length);
        return this.myList.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.myList.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        this.myList.splice(this.myList.indexOf(task), 1);
        console.log("=========== TASK REMOVED ===========\n    Task \"" + task + "\" removed from the list\n    Number of items: " + this.myList.length);
        return this.myList.length;
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
