"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
    }
    Todo.prototype.addTask = function (task) {
        taskList.push(task);
        console.log("You've added \"" + task + "\" to your To Do List!");
        return taskList.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < taskList.length; i++) {
            console.log(taskList[i]);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        var toBeDeleted = taskList.indexOf(task);
        if (toBeDeleted === -1) {
            console.log("That is not a valid task, please check your spelling!");
        }
        else {
            taskList.splice(toBeDeleted, 1);
            console.log("You've deleted \"" + task + "\" from your To Do List!");
            return taskList.length;
        }
    };
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
