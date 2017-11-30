"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.stringArray = [];
    }
    Todo.prototype.addTask = function (task) {
        this.stringArray.push(task);
        console.log(task + " inserted into list of tasks");
        console.log('Number of tasks: ', this.stringArray.length);
        return this.stringArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.stringArray.forEach(function (task) {
            console.log(task);
        });
        return;
    };
    Todo.prototype.deleteTask = function (task) {
        var taskIndex = this.stringArray.indexOf(task);
        this.stringArray.splice(taskIndex, 1);
        console.log("Deleted " + task + " at position " + taskIndex + " in our task list.");
        return this.stringArray.length;
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
