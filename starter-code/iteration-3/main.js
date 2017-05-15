"use strict";

var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = "";
    }
    TodoItem.prototype.toggleStatus = function () {
        return this.status;
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(todoItems) {
        if (todoItems === void 0) { todoItems = []; }
        this.todoItems = todoItems;
    }
    TodoList.prototype.addTask = function (item) {
        this.todoItems.push(item);
        console.log("=========== NEW TASK ===========");
        console.log("Task " + item.title + " inserted in the list");
        return this.todoItems.length;
    };
    TodoList.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.todoItems; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
        }
    };
    TodoList.prototype.deleteTask = function (item) {
        for (var i in this.todoItems) {
            if (this.todoItems[i] === item) {
                this.todoItems.splice(i, 1);
                console.log("=========== TASK REMOVED ===========");
                console.log("Task " + item.title + " removed from the list");
            }
        }
        return this.todoItems.length;
    };
    TodoList.prototype.listUncomplete = function () {
        return this.todoItems.length === 0;
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
