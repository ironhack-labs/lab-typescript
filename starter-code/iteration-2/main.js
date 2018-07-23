"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.taskList = [];
    }
    //2. Adds a task
    Todo.prototype.addTask = function (task) {
        this.taskList.push(task);
        console.log("\n    =========== NEW TASK ===========\n    " + task + "\n    Number of items: " + this.taskList.length);
        return this.taskList.length;
    };
    //3. List all Task
    Todo.prototype.listAllTasks = function () {
        var tasks = this.taskList.forEach(function (tasks) {
            console.log("\n    =========== ALL TASKS ===========\n    " + tasks + "\n    ");
        });
    };
    //4. Deletes a task
    Todo.prototype.deleteTask = function (task) {
        var n = this.taskList.indexOf(task);
        this.taskList.splice(n, 1);
        console.log("\n    =========== DELETED TASK ===========\n    " + task + "\n    Number of items: " + this.taskList.length + "\n    ");
        return this.taskList.length;
    };
    return Todo;
}());
//Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask("This is our first task"));
console.log("Number of items:", myTodos.addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 3!! 🤓"));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 2!! 🤓"));
myTodos.listAllTasks();
