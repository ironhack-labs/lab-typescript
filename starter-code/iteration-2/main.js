"use strict";
exports.__esModule = true;
var TodoList = (function () {
    function TodoList() {
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task " + task + " added to the list.");
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        console.log("=========== TASK REMOVED ===========");
        console.log("Task " + task + " deleted");
        return (this.tasks.length);
    };
    return TodoList;
}());
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
