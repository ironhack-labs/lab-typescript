"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(task) {
        this.task = task;
    }
    Todo.prototype.addTask = function (task) {
        this.task.push(task);
        var numElements = this.task.length;
        console.log("=========== TASK REMOVED ===========");
        console.log("Task  " + task + " removed from the list");
        console.log("Number of items: " + numElements);
        return numElements;
    };
    Todo.prototype.listAllTasks = function () {
        this.task.forEach(function (x) { return console.log(x); });
    };
    return Todo;
}());
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
