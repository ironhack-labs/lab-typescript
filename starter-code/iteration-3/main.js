"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
    }
    TodoItem.prototype.toggleDone = function () {
        this.isDone = !this.isDone;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList(ArrayTodoItem) {
        if (ArrayTodoItem === void 0) { ArrayTodoItem = []; }
        this.ArrayTodoItem = ArrayTodoItem;
    }
    TodoList.prototype.addTask = function (newtask) {
        this.ArrayTodoItem.push(newtask);
        return this.ArrayTodoItem.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.ArrayTodoItem.forEach(function (eachTask) {
            console.log(eachTask.title);
        });
    };
    TodoList.prototype.deleteTask = function (newtask) {
        this.ArrayTodoItem.splice(this.ArrayTodoItem.indexOf(newtask), 1);
        return this.ArrayTodoItem.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.ArrayTodoItem.forEach(function (thingy) {
            console.log(thingy.title);
        });
    };
    ;
    return TodoList;
}());
// Execution
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
