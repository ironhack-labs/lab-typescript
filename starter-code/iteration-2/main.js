"use strict";
var Todo = (function () {
    function Todo() {
        this.myTask = [];
    }
    Todo.prototype.addTask = function (phrase) {
        return this.myTask.push(phrase);
    };
    Todo.prototype.listAllTasks = function () {
        this.myTask.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var _this = this;
        this.myTask.forEach(function (t) {
            if (t === task) {
                _this.myTask.splice(_this.myTask.indexOf(t), 1);
            }
        });
        return this.myTask.length;
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
