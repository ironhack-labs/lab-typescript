"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.myArray = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log('=========== NEW TASK ===========');
        console.log(task);
        return this.myArray.length;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        this.myArray.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        var removeTaskIndex = this.myArray.indexOf(task);
        this.myArray.splice(removeTaskIndex, 1);
        console.log('=========== TASK DELETED ===========');
        console.log(task);
        return this.myArray.length;
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
