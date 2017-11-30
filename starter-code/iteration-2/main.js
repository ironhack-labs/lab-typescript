"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(myTask) {
        if (myTask === void 0) { myTask = []; }
        this.myTask = myTask;
    }
    Todo.prototype.addTask = function (task) {
        this.myTask.push(task);
    };
    Todo.prototype.listAllTasks = function () {
        console.log(this.myTask);
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.myTask.indexOf(task);
        this.myTask.splice(index, 1);
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
