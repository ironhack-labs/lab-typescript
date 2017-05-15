"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = (function () {
    function Todo(tasks) {
        if (tasks === void 0) { tasks = []; }
        this.tasks = tasks;
    }
    ;
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("=========== NEW TASK ===========");
        console.log('Task "' + task + '" inserted in the list');
        return this.tasks.length;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (t) {
            console.log(t);
        });
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        var i = this.tasks.indexOf(task);
        if (i != -1) {
            console.log("=========== TASK REMOVE ===========");
            console.log('Task "' + task + '" removed from the list');
            return this.tasks.splice(i, 1);
        }
    };
    ;
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
