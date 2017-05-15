"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title, updatedAt) {
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === true) {
            this.status = false;
        }
        else {
            this.status = true;
        }
        this.updatedAt = New;
        Date;
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
    }
    TodoList.prototype.addTask = function (task) {
        console.log("Colocamos el elemento " + task);
        return ArrayTodoItem.length;
    };
    TodoList.prototype.listAllTasks = function () {
        for (var _i = 0, ArrayTodoItem_1 = ArrayTodoItem; _i < ArrayTodoItem_1.length; _i++) {
            var counter = ArrayTodoItem_1[_i];
            console.log(counter);
        }
        return ArrayTodoItem.length;
    };
    TodoList.prototype.deleteTask = function (task) {
        var i = ArrayTodoItem.indexOf(task);
        ArrayTodoItem.splice(i, 1);
        return ArrayTodoItem.length;
    };
    return TodoList;
}());
listAllTasks;
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
