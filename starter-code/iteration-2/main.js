"use strict";
exports.__esModule = true;
var arrToDo = ['laundry', 'dishes', 'ironing clothes'];
var ToDo = (function () {
    // task: string;
    function ToDo() {
    }
    ToDo.prototype.addTask = function (task) {
        // this.task = task;        
        arrToDo.push(task);
        console.log("=========== NEW TASK =========== \n        Task \"" + task + "\" inserted in the list ");
        console.log("Number of items: " + arrToDo.length);
        return arrToDo.length;
    };
    ToDo.prototype.listAllTasks = function () {
        arrToDo.forEach(function (element, index) {
            console.log(element);
        });
    };
    ToDo.prototype.deleteTask = function (task) {
        arrToDo.forEach(function (element, index) {
            if (element === task) {
                arrToDo.splice(index, 1);
                console.log("=========== NEW REMOVED =========== \n                Task \"" + task + "\" removed in the list ");
                console.log("Number of items: " + arrToDo.length);
            }
        });
        return arrToDo.length;
    };
    return ToDo;
}());
// Add the reference to the "TodoInterface"
// 1. Create a class Todo that implements the Interface created before.
// Execution
var myTodos = new ToDo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
