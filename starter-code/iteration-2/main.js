"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("=========== NEW TASK ===========\nTask \"" + task + "\" inserted on the list \n Number of items: " + this.tasks.length);
    };
    ;
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        var indexOfTask = this.tasks.indexOf(task);
        this.tasks.splice(indexOfTask, 1);
        console.log("=========== TASK REMOVED ===========\nTask \"" + task + "\" removed from the list\nNumber of items: " + this.tasks.length + "\nRemaining array: " + this.tasks);
    };
    return Todo;
}());
// Execution  (la he personalizado ^^)
var myTodos = new Todo();
myTodos.addTask('do homework');
myTodos.addTask('buy fruit');
myTodos.addTask('This is our first task');
myTodos.addTask('Eat pizza 🍕 yummy!!!');
myTodos.listAllTasks();
myTodos.deleteTask('do homework');
myTodos.deleteTask('This is our first task');
myTodos.listAllTasks();
