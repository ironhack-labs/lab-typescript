"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(myArray) {
        this.myArray = myArray;
    }
    Todo.prototype.addTask = function (oneItem) {
        return this.myArray.push(oneItem);
    };
    Todo.prototype.listAllTasks = function () {
        return console.log(this.myArray);
    };
    Todo.prototype.deleteTask = function (oneItem) {
        var deleteItem = this.myArray.indexOf(oneItem);
        this.myArray.splice(deleteItem, 1);
        return this.myArray.length;
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
