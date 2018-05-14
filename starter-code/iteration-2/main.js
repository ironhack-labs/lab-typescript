"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(arr) {
        this.arr = arr;
    }
    Todo.prototype.addTask = function (task) {
        this.arr.push(task);
        return this.arr.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i]);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.arr.indexOf(task);
        this.arr.splice(index, 1);
        // console.log("Deleted: ", task + " length is ", myArr.length)
        return this.arr.length;
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
