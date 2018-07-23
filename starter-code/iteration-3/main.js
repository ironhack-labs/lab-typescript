"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = true;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === true)
            this.status = false;
        else
            this.status = true;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.list = [];
        this.uncomplete = this.list;
        // deleteTask(task:TodoItem): number{
        //     let indexOf = null;
        //     this.list.forEach(function(element, index){
        //         if(element === task){
        //             this.list.splice(index, 1)
        //         }
        //     })
        //     return this.list.length;
        // }
    }
    TodoList.prototype.addTask = function (task) {
        this.list.push(task);
    };
    TodoList.prototype.listAllTasks = function () {
        console.log(this.list);
    };
    TodoList.prototype.deleteTask = function (task) {
        var _this = this;
        this.uncomplete.forEach(function (e, index) {
            if (e === task) {
                _this.uncomplete.splice(index, 1);
                return _this.uncomplete;
            }
            return _this.uncomplete;
        });
    };
    TodoList.prototype.listUncomplete = function () {
        console.log("nueva lista", this.uncomplete);
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
