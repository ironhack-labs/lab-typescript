"use strict";
//Importamos la clase TodoInterface del path "./todoInterface". 
//Para ello utilizamos el mismo nombre de la variable en el file de la que la importamos
//En ese documento la tendremos por el mismo nombre, TodoInterface
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = (function () {
    function Todo(tasks) {
        this.tasks = tasks;
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task " + task + " inserted in the list");
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        console.log("Task " + task + " removed in the list");
        return this.tasks.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
