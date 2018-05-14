"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(doArray) {
        this.doArray = doArray;
    }
    Todo.prototype.addTask = function (task) {
        this.doArray.push(task);
        console.log("\n    =========== NEW TASK ===========\n    Task " + task + " inserted in the list\n    ");
        return this.doArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.doArray.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var _this = this;
        this.doArray.forEach(function (item, index) {
            if (task === item) {
                _this.doArray.splice(index, 1);
            }
        });
        console.log("\n    =========== TASK REMOVED ===========\n    Task " + task + " removed from the list\n    ");
        return this.doArray.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
