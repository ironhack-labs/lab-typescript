"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) { this.tasks.push(task); };
    ;
    Todo.prototype.listAllTasks = function () {
        document.body.innerHTML += "<ul>";
        this.tasks.forEach(function (t) {
            document.body.innerHTML += "<li>" + t + "</li>";
        });
        document.body.innerHTML += "</ul>";
    };
    ;
    Todo.prototype.deleteTask = function (task) { this.tasks.splice(this.tasks.indexOf(task), 1); };
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
