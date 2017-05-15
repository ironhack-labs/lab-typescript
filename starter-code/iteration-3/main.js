"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(taskTitle) {
        this.taskTitle = taskTitle;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.done = this.done ? false : true;
        this.updatedAt = new Date(new Date().getTime());
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(tasks) {
        if (tasks === void 0) { tasks = []; }
        this.tasks = tasks;
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("=========== NEW TASK ===========\n      " + task.taskTitle);
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            console.log(task.taskTitle);
        }
    };
    TodoList.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        console.log("=========== TASK REMOVED ===========\n         " + task.taskTitle);
        return this.tasks.length;
    };
    TodoList.prototype.listUncomplete = function () {
        var counter = 0;
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            if (task.done)
                counter++;
        }
        console.log(counter);
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
