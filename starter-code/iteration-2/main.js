"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = (function () {
    function Todo(toDoArray) {
        if (toDoArray === void 0) { toDoArray = []; }
        this.toDoArray = toDoArray;
    }
    Todo.prototype.addToList = function (task) {
        this.toDoArray.push(task);
        return this.toDoArray.length;
    };
    Todo.prototype.listTasks = function () {
        this.toDoArray.forEach(function (element) {
            console.log(element);
        });
    };
    ;
    Todo.prototype.deleteOneTask = function (task) {
        var index = this.toDoArray.indexOf(task);
        this.toDoArray.splice(index, 1);
        return this.toDoArray.length;
    };
    ;
    return Todo;
}());
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addToList('This is our first task'));
console.log("Number of items:", myTodos.addToList('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addToList('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addToList('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addToList('Finish this iteration 3!! 🤓'));
myTodos.listTasks();
console.log("Number of items:", myTodos.deleteOneTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteOneTask('Finish this iteration 2!! 🤓'));
myTodos.listTasks();
