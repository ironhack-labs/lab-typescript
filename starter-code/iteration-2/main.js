// Add the reference to the "TodoInterface"
"use strict";

// 1. Create a class Todo that implements the Interface created before.
var Todo = (function () {
    function Todo() {
        this.myArray = [];
    }
    Todo.prototype.addTask = function (task) {
        console.log("=========== NEW INSERTION ===========");
        console.log("Task " + task + " inserted in the list");
        this.myArray.push(task);
        return this.myArray.length;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        this.myArray.map(function (item) {
            console.log(item);
        });
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        var _this = this;
        this.myArray.map(function (item, index) {
            if (item === task) {
                _this.myArray.splice(index, 1);
            }
        });
        console.log("=========== NEW DELETION ===========");
        console.log("Task " + task + " removed from the list");
        return this.myArray.length;
    };
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
