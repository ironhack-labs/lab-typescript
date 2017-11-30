<<<<<<< HEAD
"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        return this.tasks.length;
    };
    Todo.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] === task) {
                this.tasks.splice(i, 1);
            }
        }
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log('** ALL TASKS **');
        this.tasks.forEach(function (oneTask) {
            console.log(oneTask);
        });
        return this.tasks.length;
    };
    return Todo;
}());
=======
>>>>>>> accded598e1e09f0de7f6ed0771ce1a266bea0dd
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
