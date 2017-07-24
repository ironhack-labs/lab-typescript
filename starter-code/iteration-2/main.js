"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(arr) {
        this.arr = arr;
    }
    Todo.prototype.addTask = function (x) {
        this.arr.push(x);
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i]);
        }
        ;
    };
    Todo.prototype.deleteTask = function (x) {
        for (var i = 0; i < this.arr.length; i++) {
            if (x === this.arr[i]) {
                delete this.arr[i];
            }
        }
        ;
    };
    return Todo;
}());
var myArray1 = [];
var myTodos = new Todo(myArray1);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
