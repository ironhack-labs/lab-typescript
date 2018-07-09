"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(list) {
        if (list === void 0) { list = []; }
        this.list = list;
    }
    Todo.prototype.addTask = function (task) {
        this.list.push(task);
        console.log("======== NEW TASK ==========");
        console.log("Task \"" + task + "\" inserted in the list");
        return this.list.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.list.forEach(function (element) {
            console.log("- " + element);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.list.indexOf(task);
        this.list.splice(index, 1);
        console.log("======== TASK REMOVED ==========");
        console.log("Task \"" + task + "\" removed from the list");
        return this.list.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask("This is our first task"));
console.log("Number of items:", myTodos.addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 3!! 🤓"));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 2!! 🤓"));
myTodos.listAllTasks();
