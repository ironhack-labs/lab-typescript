"use strict";
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.done = false;
        this.updatedAt = new Date;
    }
    ;
    TodoItem.prototype.checkDone = function (done) {
        done = this.done;
        if (done == false) {
            this.done = true;
        }
        else {
            this.done = false;
        }
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(list) {
        if (list === void 0) { list = []; }
        this.list = list;
    }
    TodoList.prototype.addTask = function (task) {
        this.list.push(task);
        return this.list.length;
    };
    TodoList.prototype.listAllTasks = function () {
        console.log(this.list);
    };
    TodoList.prototype.deleteTask = function (task) {
        var toRemove = this.list.indexOf(task);
        this.list.splice(toRemove, 1);
        return this.list.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.list.forEach(function (task) {
            if (task.done == false) {
                console.log(task);
            }
        });
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
