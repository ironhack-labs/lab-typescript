"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log('Added task!');
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log("Task:" + task);
        });
    };
    Todo.prototype.deleteTask = function (string) {
        this.tasks = this.tasks.filter(function (task) { return task !== string; });
        console.log("Task deleted!");
        return this.tasks.length;
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
//# sourceMappingURL=main.js.map