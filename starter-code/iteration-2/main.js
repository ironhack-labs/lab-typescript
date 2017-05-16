"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(strings) {
        if (strings === void 0) { strings = []; }
        this.strings = strings;
    }
    Todo.prototype.addTask = function (task) {
        this.strings.push(task);
        console.log("Task \"" + task + "\" inserted in the list!");
        return this.strings.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.strings.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        this.strings.splice(this.strings.indexOf(task), 1);
        console.log("Task \"" + task + "\" removed from list");
        return this.strings.length;
    };
    return Todo;
}());
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
