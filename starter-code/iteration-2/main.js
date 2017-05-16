"use strict";
var Todo = (function () {
    function Todo() {
        this.ArrString = [];
    }
    Todo.prototype.addTask = function (task) {
        this.ArrString.push(task);
        console.log("Added" + task);
        return this.ArrString.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.ArrString.forEach(function (elem) { console.log(elem); });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.ArrString.indexOf(task);
        if (index !== -1) {
            this.ArrString.splice(index, 1);
            console.log("Removed" + task);
            return this.ArrString.length;
        }
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
