"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status) {
            this.status = false;
        }
        else {
            this.status = true;
        }
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(taskList) {
        this.taskList = taskList;
    }
    TodoList.prototype.addTask = function (task) {
        this.taskList.push(task);
        console.log(task + 'has been added to the task list');
        console.log('Number of tasks in list:', this.taskList.length);
        return this.taskList.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.taskList.forEach(function (task) {
            console.log('Task Title:', task.title, '\nTask Date:', task.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        console.log('Task', task, 'deleted.');
        console.log('Number of tasks in list:', this.taskList.length);
        return this.taskList.length;
    };
    return TodoList;
}());
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList([task1, task2, task3]);
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of i  tems:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
