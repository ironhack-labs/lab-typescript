"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(task) {
        this.task = task;
        this.toDoList = [];
    }
    Todo.prototype.addTask = function (todoItem) {
        this.toDoList.push(todoItem);
        console.log('Task' + todoItem + 'inserted in the list');
        return toDoList.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.toDoList.forEach(function (listItem) {
            console.log(listItem);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = toDoList.indexOf(task);
        if (index !== -1) {
            toDoList.splice(index, 1);
        }
        console.log('Task' + task + 'deleted from the string');
        return toDoList.length;
    };
    return Todo;
}());
var myTodos = new Todo('walk dog');
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
