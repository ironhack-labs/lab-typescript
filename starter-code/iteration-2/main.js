"use strict";
exports.__esModule = true;
;
var Todo = (function () {
    function Todo(tasks) {
        if (tasks === void 0) { tasks = []; }
        this.tasks = tasks;
    }
    Todo.prototype.addTask = function (item) {
        this.tasks.push(item);
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (element) {
            console.log(element);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var beautifulNumber = this.tasks.indexOf(task);
        this.tasks.splice(beautifulNumber, 1);
        return this.tasks.length;
    };
    return Todo;
}());
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
