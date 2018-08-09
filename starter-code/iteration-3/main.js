"use strict";
exports.__esModule = true;
var l = console.log;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title, updatedAt) {
        if (updatedAt === void 0) { updatedAt = new Date(); }
        this.title = title;
        this.updatedAt = updatedAt;
        this.status = false;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.list = [];
        // list: Array<TodoItemInterface>;
        // addTask(task:TodoItemInterface):number;
        // listAllTasks():void;
        // deleteTask(task:TodoItemInterface):number;
    }
    TodoList.prototype.addTask = function (task) {
        this.list.push(task);
        l("=========== NEW TASK ===========\n    Task ( " + task.title + " ) inserted in the list\n    Number of items: " + this.list.length);
        return this.list.length;
    };
    TodoList.prototype.listAllTasks = function () {
        l.apply(void 0, this.list);
    };
    TodoList.prototype.deleteTask = function (task) {
        var delIdex = this.list.indexOf(task);
        this.list.splice(delIdex, 1);
        l("=========== TASK REMOVED ===========\n    Task ( " + task.title + " ) inserted in the list\n    Number of items: " + this.list.length);
        return this.list.length;
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
task5.toggleStatus();
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
