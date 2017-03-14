"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = (function () {
    function Todo(myArray) {
        if (myArray === void 0) { myArray = []; }
        this.myArray = myArray;
    }
    Todo.prototype.addTask = function (item) {
        this.myArray.push(item);
        console.log('=========== NEW TASK ===========');
        console.log("Task \"" + item + "\" inserted in the list");
        console.log('');
        return this.myArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.myArray.forEach(function (oneElem) {
            console.log(oneElem);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        console.log('');
        var index = this.myArray.indexOf(task);
        if (index > -1) {
            this.myArray.splice(index, 1);
            console.log('=========== TASK REMOVED ===========');
            console.log("Task \"" + task + "\" removed from the list");
            console.log('');
            return this.myArray.length;
        }
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
