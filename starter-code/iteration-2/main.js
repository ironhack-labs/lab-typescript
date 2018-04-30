// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.array = [];
    }
    Todo.prototype.addTask = function (task) {
        return this.array.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log('nothing');
    };
    Todo.prototype.deleteTask = function (task) {
        this.array.splice(this.array.indexOf(task), 1);
        return this.array.length;
    };
    return Todo;
}());
// Execution
var myTodo = new Todo();
console.log("Number of items:", myTodo.addTask('This is our first task'));
console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 3!! 🤓'));
myTodo.listAllTasks();
console.log("Number of items:", myTodo.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodo.deleteTask('Finish this iteration 2!! 🤓'));
myTodo.listAllTasks();
