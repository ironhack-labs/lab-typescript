"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = (function () {
    function TodoItem(title, status) {
        if (status === void 0) { status = false; }
        this.title = title;
        this.status = status;
    }
    TodoItem.prototype.completed = function () {
        status = !status;
        updatedAt = new Date;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = (function () {
    function TodoList(list) {
        this.list = list;
    }
    TodoList.prototype.addTask = function (task) {
        this.list.push(task);
        console.log(task);
        return this.list.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var task = _a[_i];
            console.log(task);
        }
    };
    ;
    TodoList.prototype.deleteTask = function (task) {
        this.list.splice(this.list.indexOf(task), 1);
        return this.list.length;
    };
    ;
    return TodoList;
}());
;
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList([]);
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
//myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
//myTodos.listUncomplete();
