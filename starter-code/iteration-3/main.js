"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
    }
    TodoItem.prototype.toggleDone = function () {
        if (this.done) {
            this.done = false;
        }
        else {
            this.done = true;
        }
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList(todoList) {
        if (todoList === void 0) { todoList = []; }
        this.todoList = todoList;
    }
    TodoList.prototype.addTask = function (task) {
        this.todoList.push(task);
        console.log("=========== NEW TASK =========== /n Task " + task.title + " inserted in the list /n\n          Number of items: " + this.todoList.length);
    };
    TodoList.prototype.listAllTasks = function () {
        this.todoList.forEach(function (task) {
            console.log(task.title);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.todoList.length; i++) {
            if (task === this.todoList[i]) {
                this.todoList.splice(i, 1);
            }
        }
        console.log("=========== TASK REMOVED =========== /n Task " + task.title + " removed the list /n\n      Number of items: " + this.todoList.length);
    };
    TodoList.prototype.listUncomplete = function () {
        this.todoList.forEach(function (task) {
            if (task.done != true) {
                console.log(task.title);
            }
        });
    };
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
