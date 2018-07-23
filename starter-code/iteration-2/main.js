"use strict";
// Add the reference to the "TodoInterface"
exports.__esModule = true;
var list = [];
var Todo = /** @class */ (function () {
    function Todo() {
    }
    Todo.prototype.addTask = function (task) {
        list.push(task);
        return list.length;
    };
    Todo.prototype.listAllTasks = function () {
        list.forEach(function (elem) { console.log(elem); });
        console.log(list);
    };
    Todo.prototype.deleteTask = function (task) {
        var i = list.indexOf(task, 0);
        if (i > -1) {
            list.splice(i, 1);
        }
        return list.length;
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
