"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.allTodos = [];
    }
    Todo.prototype.addTask = function (task) {
        this.allTodos.push(task);
        console.log("=========== NEW TASK ===========\n    Task \"" + task + "\" inserted in the list");
        return this.allTodos.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("=========== ALL TASK ===========");
        for (var _i = 0, _a = this.allTodos; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.allTodos.indexOf(task);
        this.allTodos.splice(index, 1);
        console.log("=========== TASK REMOVED ===========\n      Task \"" + task + "\" removed from the list");
        return this.allTodos.length;
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
