"use strict";
// Add the reference to the interface
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.done = false;
    }
    TodoItem.prototype.toggleUpdate = function () {
        return !this.done;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
    }
    TodoList.prototype.addTask = function (task) {
        console.log("Adding " + task.taskTitle);
        this.tasks.push(task);
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (oneTask) {
            console.log(oneTask.title);
        });
    };
    TodoList.prototype.deleteTask = function (taskToDelete) {
        var _this = this;
        this.tasks.forEach(function (oneTask) {
            if (oneTask === taskToDelete) {
                var indexToDelete = _this.tasks.indexOf(oneTask);
                _this.tasks.splice(indexToDelete, 1);
                console.log(oneTask.title + " removed");
            }
        });
        return this.tasks.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.tasks.forEach(function (oneTask) {
            if (oneTask.done === false) {
                console.log("Not Completed: " + oneTask.title);
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
