"use strict";
// exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = this.title;
        this.isDone = false;
        this.updatedAt = new Date;
        this.title = title;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.isDone === true) {
            this.isDone = false;
        }
        else {
            this.isDone = true;
        }
    };
    return TodoItem;
}());
// exports.TodoItem = TodoItem;
var TodoList = (function () {
    function TodoList() {
        this.toDoArray = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.toDoArray.push(task);
        return this.toDoArray.length;
    };
    TodoList.prototype.listAllTasks = function () {
        console.log('========== All Tasks ==========');
        this.toDoArray.forEach(function (oneTask) {
            console.log(oneTask.title);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.toDoArray.length; i++) {
            if (this.toDoArray[i] === task) {
                this.toDoArray.splice(i, 1);
            }
        }
        return this.toDoArray.length;
    };
    TodoList.prototype.listIncomplete = function () {
        console.log('========== All Unfinished Tasks ==========');
        this.toDoArray.forEach(function (oneTask) {
            if (!oneTask.isDone) {
                console.log(oneTask.title);
            }
        });
        return;
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
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listAllTasks();
task1.toggleStatus();
task2.toggleStatus();
myTodos.listIncomplete();
