"use strict";
exports.__esModule = true;
var Tareas = (function () {
    function Tareas(array) {
        this.array = array;
    }
    Tareas.prototype.addTask = function (string) {
        return array.length;
    };
    Tareas.prototype.listAllTasks = function () {
        array.forEach(function (e) { return console.log(e); });
    };
    Tareas.prototype.deleteTask = function (string) {
        return array.length;
    };
    return Tareas;
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
