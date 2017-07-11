"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(todoList) {
        this.todoList = todoList;
    }
    Todo.prototype.addTask = function (task) {
        todoList.push(task);
        console.log('Task inserted');
        return todoList.length;
    };
    Todo.prototype.listAllTasks = function () {
        todoList.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var i = todoList.indexOf('Finish this iteration 1!! 🤓');
        if (i != -1) {
            todoList.splice(i, 1);
        }
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
