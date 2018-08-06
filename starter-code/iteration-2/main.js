"use strict";
exports.__esModule = true;
var myArray1 = [];
var Todo = /** @class */ (function () {
    function Todo(myArray2) {
        this.myArray2 = myArray2;
    }
    Todo.prototype.addTask = function (target) {
        this.myArray2.push(target);
        console.log("\n    =========== NEW TASK =========== \n    Task \"" + target + "\" inserted in the list\n    \n    Number of items: " + this.myArray2.length);
        return this.myArray2.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log.apply(console, this.myArray2);
    };
    Todo.prototype.deleteTask = function (target) {
        var tempIndex = this.myArray2.indexOf(target);
        this.myArray2.splice(tempIndex, 1);
        console.log("\n    =========== TASK REMOVED ===========\n    Task \"" + target + "\" removed from the list\n    \n    Number of items: " + this.myArray2.length + "\n    ");
        return this.myArray2.length;
    };
    return Todo;
}());
var myTodos = new Todo(myArray1);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
