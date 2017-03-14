"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = (function () {
    function Todo(array) {
        this.array = array;
    }
    Todo.prototype.addTask = function (task) {
        this.array.push(task);
        console.log('=========== NEW TASK ===========');
        console.log(task);
        return this.array.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log('=========== ALL TASKS: ===========');
        this.array.forEach(function (e) {
            console.log(e);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.array.indexOf(task);
        if (index > -1) {
            console.log('=========== TASK REMOVED ===========');
            console.log(task);
            this.array.splice(index, 1);
            return this.array.length;
        }
        else {
            console.log('=========== TASK NOT FOUND ===========');
        }
    };
    return Todo;
}());
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
