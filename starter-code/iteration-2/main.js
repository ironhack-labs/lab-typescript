"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(myTask) {
        if (myTask === void 0) { myTask = []; }
        this.myTask = myTask;
    }
    Todo.prototype.addTask = function (task) {
        this.myTask.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task " + task + " inserted in the list");
        return this.myTask.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.myTask; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        for (var i in this.myTask) {
            if (this.myTask[i] === task) {
                this.myTask.splice(i, 1);
                console.log("=========== TASK REMOVED ===========");
                console.log("Task " + task + " removed from the list");
            }
        }
        return this.myTask.length;
    };
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
