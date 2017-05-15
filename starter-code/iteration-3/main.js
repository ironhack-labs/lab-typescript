"use strict";
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status) {
            this.status = false;
        }
        else {
            this.status = true;
        }
        this.updatedAt = Date();
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(tasks) {
        if (tasks === void 0) { tasks = []; }
        this.tasks = tasks;
    }
    ;
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("=========== NEW TASK ===========");
        console.log('Task "' + task.title + '" inserted in the list');
        return this.tasks.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (t) {
            console.log(t.title);
        });
    };
    ;
    TodoList.prototype.deleteTask = function (task) {
        var i = this.tasks.indexOf(task);
        console.log("indice=" + i);
        if (i != -1) {
            console.log("=========== TASK REMOVE ===========");
            console.log('Task "' + task.title + '" removed from the list');
            this.tasks.splice(i, 1);
            return this.tasks.length;
        }
    };
    ;
    TodoList.prototype.listIncomplete = function () {
        this.tasks.forEach(function (t) {
            if (!t.status) {
                console.log("INCOMPLETA: " + t.title);
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
myTodos.listIncomplete();
