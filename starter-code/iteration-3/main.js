"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = Date.now().toString();
    }
    TodoItem.prototype.toogle = function () {
        this.status === false ? this.status = true : this.status = false;
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log('=========== NEW TASK ===========');
        console.log("Task " + task.title + " inserted in the list");
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log('task --> ', task.title);
            console.log('updated at ---> ', task.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var index;
        this.tasks.forEach(function (t, i) {
            if (JSON.stringify(t) === JSON.stringify(task))
                index = i;
        });
        this.tasks.splice(index, 1);
        console.log('=========== TASK REMOVED ===========');
        console.log("Task " + task.title + " removed from the list");
        return this.tasks.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.tasks.forEach(function (task) { return console.log('Uncomplete --> ', task.title); });
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
