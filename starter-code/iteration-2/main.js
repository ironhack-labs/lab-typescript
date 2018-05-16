"use strict";
exports.__esModule = true;
// importing interface from todoInterface.ts
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
    }
    Todo.prototype.addTask = function (taskToBeAdded) {
        tasks.push(taskToBeAdded);
        console.log(taskToBeAdded + " has been added to the list!");
        console.log(tasks.length);
        return tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        tasks.forEach(function (singleTask) {
            console.log(singleTask);
        });
        //returns nothing
    };
    Todo.prototype.deleteTask = function (taskToBeDeleted) {
        var blah = tasks.indexOf(taskToBeDeleted);
        tasks.splice(blah, 1);
        console.log(taskToBeDeleted + " has been deleted from the list!");
        return tasks.length;
    };
    ;
    return Todo;
}());
// Execution
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
