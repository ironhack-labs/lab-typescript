"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem() {
        this.title = "";
        this.status = false;
    }
    ;
    TodoItem.prototype.toggleStatus = function () {
        this.status == false ? this.status = true : this.status = false;
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
    }
    ;
    TodoList.prototype.addTask = function (task) {
        this.TodoItem.push(task);
    };
    TodoList.prototype.listAllTasks = function () {
        this.TodoItem.forEach(function (item) {
            console.log(item);
        });
    };
    TodoList.prototype.deleteTask = function (item) {
        var _this = this;
        this.TodoItem.forEach(function (i) {
            if (i.title == item.title) {
                var ind = _this.TodoItem.indexOf(i);
                _this.TodoItem.splice(ind, 1);
            }
        });
    };
    TodoList.prototype.listUncompleted = function () {
        this.TodoItem.forEach(function (item) {
            item.status == false ? console.log(item)
                :
            ;
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
