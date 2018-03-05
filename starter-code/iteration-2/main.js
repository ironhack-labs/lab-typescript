"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.tasksList = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasksList.push(task);
        console.log("=========== NEW TASK ===========\n                " + task + "\n                ");
        return this.tasksList.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasksList.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var deleteIndex = this.tasksList.indexOf(task);
        if (deleteIndex !== -1) {
            this.tasksList.splice(deleteIndex, 1);
            console.log("=========== TASK REMOVED ===========\n                    " + task + "\n                    ");
        }
        return this.tasksList.length;
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
