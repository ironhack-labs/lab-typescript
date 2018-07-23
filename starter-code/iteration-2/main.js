"use strict";
// Add the reference to the "TodoInterface"
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(tasks) {
        if (tasks === void 0) { tasks = []; }
        this.tasks = tasks;
        this.tasks = tasks;
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        var taskNum = this.tasks.length;
        console.log("Task" + task + "inserted in the list \n Number of items:" + taskNum);
        return taskNum;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (eachTask) {
            console.log(eachTask);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        var taskNum = this.tasks.length;
        console.log('Task' + task + 'removed from list \n Number of items:' + taskNum);
        return taskNum;
    };
    return Todo;
}());
// Execution
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
