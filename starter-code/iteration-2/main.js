"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(taskList) {
        this.taskList = taskList;
    }
    Todo.prototype.addTask = function (task) {
        this.taskList.push(task);
        console.log(task + 'has been added to the task list');
        console.log('Number of tasks in list:', this.taskList.length);
        return this.taskList.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.taskList.forEach(function (task, index) {
            console.log('task', index + ':', task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var indexOfTask = this.taskList.indexOf(task);
        s;
        this.taskList.splice(indexOfTask, 1);
        console.log('Task', task, 'deleted.');
        console.log('Number of tasks in list:', this.taskList.length);
        return this.taskList.length;
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
