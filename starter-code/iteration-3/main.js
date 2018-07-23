"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.done = false;
    }
    TodoItem.prototype.toggleDone = function (bool) {
        this.done = bool;
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList(tasks) {
        if (tasks === void 0) { tasks = []; }
        this.tasks = tasks;
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        return this.tasks.length;
    };
    // 3. Create a function to list all tasks, it must show in the console de task.
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (theTask) {
            console.log(theTask.title);
        });
    };
    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
    TodoList.prototype.deleteTask = function (task) {
        //this.tasks.splice(this.tasks.indexOf(task), 1);
        var index = 0;
        while (task.title != this.tasks[index].title) {
            if (index < this.tasks.length)
                return this.tasks.length;
            index++;
        }
        this.tasks.splice(index, 1);
        return this.tasks.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.tasks.forEach(function (theTask) {
            console.log(theTask.title);
        });
    };
    return TodoList;
}());
// Create class TodoList that implements the corresponding interface
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
