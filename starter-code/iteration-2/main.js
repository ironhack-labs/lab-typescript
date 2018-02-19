"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.myTask = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTask.push(task);
        console.log("Task added!");
        return this.myTask.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.myTask.forEach(function (t) {
            console.log(t);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.myTask.length; i++) {
            if (this.myTask[i] == task) {
                this.myTask.splice(i, 1);
                console.log("Task deleted!");
            }
        }
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
