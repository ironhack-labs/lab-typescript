"use strict";
// exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.tasks = [];
        this.task = "";
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Added " + task);
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("--------------- Task List -------------");
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var listItem = _a[_i];
            console.log(listItem);
        }
    };
    Todo.prototype.deleteTask = function (str) {
        var findTask = this.tasks.indexOf(str);
        console.log("Task # " + findTask);
        return this.tasks.length;
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
