"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.myArray = [];
    }
    ;
    Todo.prototype.addTask = function (message) {
        this.myArray.push(message);
    };
    ;
    Todo.prototype.listAllTasks = function () {
        console.log(this.myArray);
    };
    ;
    Todo.prototype.deleteTask = function (message) {
        this.myArray.splice(myArray.indexOf(message), 1);
    };
    ;
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
