"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(myArray) {
    }
    Todo.prototype.addTask = function (task) {
        myArray.push(task);
        console.log("Colocamos el elemento " + task);
        return myArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
            var counter = myArray_1[_i];
            console.log(counter);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        var i = myArray.indexOf(task);
        myArray.splice(i, 1);
        return myArray.length;
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
