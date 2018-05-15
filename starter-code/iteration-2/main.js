"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo(todoArray) {
        this.todoArray = todoArray;
    }
    Todo.prototype.addTask = function (task) {
        this.todoArray.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task: ", task);
        return this.todoArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.todoArray.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.todoArray.length; i++) {
            if (this.todoArray[i] === task) {
                this.todoArray.splice(i, 1);
            }
            ;
        }
        ;
        console.log("=========== REMOVED TASK ===========");
        console.log("Task: ", task);
        return this.todoArray.length;
    };
    return Todo;
}());
// 1. Create a class Todo that implements the Interface created before.
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
