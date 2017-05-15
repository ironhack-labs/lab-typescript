"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(List) {
        if (List === void 0) { List = []; }
        this.List = List;
    }
    Todo.prototype.addTask = function (task) {
        this.List.push(task);
        return this.List.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log(this.List);
    };
    Todo.prototype.deleteTask = function (task) {
        var toRemove = this.List.indexOf(task);
        this.List.splice(toRemove, 1);
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
