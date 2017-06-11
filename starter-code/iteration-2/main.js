"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (taskToInsert) {
        this.tasks.push(taskToInsert);
        console.log("Task " + taskToInsert + " inserted in the list");
        return (this.tasks.length);
    };
    Todo.prototype.listAllTasks = function () {
        console.log('*********** LIST ALL TASK ****************');
        this.tasks.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    Todo.prototype.deleteTask = function (taskToDelete) {
        var index = this.tasks.indexOf(taskToDelete);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        console.log("Task " + taskToDelete + " deleted from the list");
        return (this.tasks.length);
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
