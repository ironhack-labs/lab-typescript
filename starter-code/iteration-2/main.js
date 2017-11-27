"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(tasksList) {
        this.tasksList = tasksList;
    }
    Todo.prototype.addTask = function (task) {
        this.tasksList.push(task);
        console.log("=========== NEW TASK ===========\n\n                Task \"" + task + "\" inserted in the list\n\n                Number of items: " + this.tasksList.length);
        return this.tasksList.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasksList.forEach(function (task) {
            console.log("=========== TASK ===========\n\n                  Task: \"" + task + "\"");
        });
    };
    Todo.prototype.deleteTask = function (task) {
        this.tasksList.splice(this.tasksList.indexOf(task), 1);
        console.log("=========== TASK REMOVED ===========\n\n                Task \"" + task + "\" removed from the list\n\n                Number of items: " + this.tasksList.length);
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
