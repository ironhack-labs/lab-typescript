"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        // It adds the task to the array.
        this.tasks.push(task);
        // It prints a message indicating the insertion.
        console.log('===== New Task ====+');
        console.log("Task \"" + task + "\" inserted into the list");
        // It returns the number of elements in the list and prints that number in the console as well.
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log('_______Task List_______');
        this.tasks.forEach(function (task) {
            console.log("" + task);
        });
    };
    ;
    // - Method for delete a task where will receive a string, doesn't return anything.
    Todo.prototype.deleteTask = function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        console.log('====== TASK REMOVED ======');
        console.log("Task \"" + task + "\" removed from the list");
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
// myTodos.listAllTasks();
// console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
// myTodos.listAllTasks();
