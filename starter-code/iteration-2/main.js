"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.list = [];
    }
    ;
    Todo.prototype.addTask = function (task) {
        this.list.push(task);
        return this.list.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.list.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (item) {
        var ind = this.list.indexOf(item);
        this.list.splice(ind, 1);
        return this.list.length;
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
