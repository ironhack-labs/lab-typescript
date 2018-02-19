"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.array = [];
    }
    Todo.prototype.addTask = function (task) {
        this.array.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task \"" + task + "\" inserted in the list");
        return this.array.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("This ARE ALL THE TASKS IN THE ARRAY");
        this.array.forEach(function (e) {
            console.log(e);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.array.indexOf(task);
        this.array.splice(index, 1);
        console.log("=========== TASK REMOVED ===========");
        console.log("Task " + task + " removed from the list");
        return this.array.length;
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
