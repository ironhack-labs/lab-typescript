"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
    }
    Todo.prototype.addTask = function (task) {
        tasks.push(task);
        console.log(task);
        return tasks.length;
    };
    Todo.prototype.listAllTasks = function (tasks) {
        return tasks.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        tasks.splice(tasks.indexOf(task), 1);
        console.log("Task deleted: " + task);
        return tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks(tasks);
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks(tasks);
