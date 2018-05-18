"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(myArray) {
        this.myArray = myArray;
    }
    Todo.prototype.addTask = function (task1) {
        this.myArray.push(task1);
        return this.myArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.myArray; _i < _a.length; _i++) {
            var string = _a[_i];
            console.log(string);
        }
    };
    Todo.prototype.deleteTask = function (task2) {
        var remove = this.myArray.indexOf(task2);
        this.myArray.splice(remove, 1);
        return this.myArray.length;
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
