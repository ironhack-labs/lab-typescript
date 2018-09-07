"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title, status, updatedAt) {
        if (status === void 0) { status = false; }
        if (updatedAt === void 0) { updatedAt = new Date(); }
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function (task) {
        task.status = !this.status;
        console.log("Task \"" + task.title + " is finished\"");
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList(listItems, uncompletedTasks) {
        this.listItems = listItems;
        this.uncompletedTasks = uncompletedTasks;
    }
    TodoList.prototype.addTask = function (task) {
        this.listItems.push(task);
        return this.listItems.length;
    };
    TodoList.prototype.listAllTasks = function (tasks) {
        tasks.forEach(function (element) {
            console.log(element.title);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        this.listItems.splice(this.listItems.indexOf(task), 1);
        return this.listItems.length;
    };
    TodoList.prototype.listUncomplete = function (tasks) {
        return this.uncompletedTasks = tasks.filter(function (elem) {
            return elem.status !== true;
        });
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('first task');
var task2 = new TodoItem('second task');
var task3 = new TodoItem('third task');
var task4 = new TodoItem('fourth task');
var task5 = new TodoItem('fifth task');
var myTodos = new TodoList([], []);
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
console.log('----');
myTodos.listAllTasks(myTodos.listItems);
console.log('----');
console.log("Deleted item \"" + task1.title + "\", Number of items:", myTodos.deleteTask(task1));
console.log('----');
myTodos.listAllTasks(myTodos.listItems);
console.log('----');
task2.toggleStatus(task2);
task3.toggleStatus(task3);
console.log('----');
console.log("Uncompleted tasks:", myTodos.listUncomplete(myTodos.listItems));
// console.log(myTodos.listItems);
