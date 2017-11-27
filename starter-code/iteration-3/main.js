"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title, status, updatedAt) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function (task) {
        if (this.status == true) {
            return false;
        }
        else {
            return true;
        }
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(title, updatedAt, todoItem) {
        this.title = title;
        this.updatedAt = updatedAt;
        this.todoItem = todoItem;
    }
    TodoList.prototype.addTask = function (task) {
        this.todoItem.push(task);
        return array.length;
    };
    TodoList.prototype.listAllTasks = function () {
        console.log(this.title);
        console.log(this.updatedAt);
        this.todoItem.forEach(function (e) { return console.log(e); });
    };
    TodoList.prototype.deleteTask = function (task) {
        array.splice(array.indexOf(task), 1);
        console.log("The element deleted was: " + task);
        console.log(array.length);
        return array.length;
    };
    return TodoList;
}());
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
