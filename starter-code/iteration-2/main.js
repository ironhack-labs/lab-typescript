"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.myArrayOfStrings = [];
    }
    Todo.prototype.addTask = function (task) {
        console.log('message inserted');
        return this.myArrayOfStrings.length;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        this.myArrayOfStrings.forEach(function (list) {
            console.log(list);
        });
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        var index = this.myArrayOfStrings.indexOf(task);
        this.myArrayOfStrings.splice(index, 1);
        return this.myArrayOfStrings.length;
    };
    ;
    return Todo;
}());
;
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
