"use strict";
//exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.taskStatus = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        if (!this.taskStatus) {
            this.taskStatus = true;
            this.updatedAt = new Date();
        }
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (taskToInsert) {
        this.tasks.push(taskToInsert);
        console.log("Task " + taskToInsert + " inserted in the list");
        return (this.tasks.length);
    };
    TodoList.prototype.listAllTasks = function () {
        console.log('*********** LIST ALL TASK ****************');
        this.tasks.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    TodoList.prototype.deleteTask = function (taskToDelete) {
        var index = this.tasks.indexOf(taskToDelete);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        console.log("Task " + taskToDelete + " deleted from the list");
        return (this.tasks.length);
    };
    TodoList.prototype.listUncomplete = function () {
        console.log('*********** LIST UNCOMPLETE TASK ****************');
        this.tasks.forEach(function (oneTask) {
            if (!oneTask.taskStatus) {
                console.log(oneTask);
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
