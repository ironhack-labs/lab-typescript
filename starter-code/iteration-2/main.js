"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(taskList) {
        this.taskList = taskList;
    }
    Todo.prototype.addTask = function (task) {
        console.log("Task has been added.");
        return taskList.push(task);
    };
    Todo.prototype.listAllTasks = function (taskList) {
        console.log(taskList);
    };
    Todo.prototype.deleteTask = function (task) {
        taskList.forEach(function (oneTask, index) {
            if (task === oneTask) {
                taskList.splice(index, 1);
            }
        });
    };
    return Todo;
}());
var myTodos = new TodoInterface();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
