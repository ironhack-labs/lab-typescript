"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var l = console.log;
var Todo = /** @class */ (function () {
    function Todo(myArray) {
        this.myArray = myArray;
    } // ====> como se que poner dentro?
    Todo.prototype.addTask = function (task) {
        this.myArray.push(task);
        l("=========== NEW TASK ===========\n  Task " + task + " inserted in the list\n  Number of items: " + this.myArray.length);
        return this.myArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        l.apply(void 0, this.myArray);
    };
    Todo.prototype.deleteTask = function (task) {
        var str = this.myArray.indexOf(task); //====> porque no asi?
        // let str:number = this.myArray.indexOf(task);
        this.myArray.splice(str, 1);
        l("=========== TASK REMOVED ===========\n      Task \"" + task + "\" removed from the list\n      \n      Number of items: " + this.myArray.length);
        return this.myArray.length;
    };
    return Todo;
}());
// Execution
var myArray = [];
var myTodos = new Todo(myArray); //====> como se que poner aqui?
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
