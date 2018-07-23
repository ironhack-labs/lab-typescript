"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.list = [];
    }
    Todo.prototype.addTask = function (e) {
        this.list.push(e);
    };
    Todo.prototype.listAllTasks = function () {
        console.log(this.list);
    };
    Todo.prototype.deleteTask = function (task) {
        var _this = this;
        this.list.forEach(function (e) {
            if (e === task) {
                _this.list.splice(_this.list.indexOf(e), 1);
                return _this.list;
            }
            return _this.list;
        });
    };
    return Todo;
}());
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask("This is our first task"));
console.log("Number of items:", myTodos.addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 3!! 🤓"));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 2!! 🤓"));
myTodos.listAllTasks();
