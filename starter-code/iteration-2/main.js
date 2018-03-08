"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.allTodos = [];
    }
    Todo.prototype.addTask = function (task) {
        this.allTodos.push(task);
        console.log(task + " was added to the list.");
        var numberOfTask = this.allTodos.length;
        return numberOfTask;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("all task:");
        for (var _i = 0, _a = this.allTodos; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.allTodos.indexOf(task);
        this.allTodos.splice(index, 1);
        var numberOfTask = this.allTodos.length;
        console.log(task + " was deleted from the list.");
        return numberOfTask;
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
