// Add the reference to the "TodoInterface"
// import { TodoInterface } from './todoInterface.ts';
// let todoVar = TodoInterface;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Number of items: " + this.tasks.length);
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            console.log(task);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        console.log("Number of items: " + this.tasks.length);
        return this.tasks.length;
    };
    return Todo;
}());
// Execution
var myTodos1 = new Todo();
console.log("Number of items:", myTodos1.addTask('This is our first task'));
console.log("Number of items:", myTodos1.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 3!! 🤓'));
myTodos1.listAllTasks();
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 2!! 🤓'));
myTodos1.listAllTasks();
