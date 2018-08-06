// Add the reference to the "TodoInterface"
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.arr = [];
    }
    Todo.prototype.addTask = function (task) {
        this.arr.push(task);
        console.log(task + " insert in the list");
        console.log("number of items:" + this.arr.length);
        return this.arr.length;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        this.arr.forEach(function (task) { console.log(task); });
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        var position = this.arr.indexOf(task);
        this.arr.splice(position, 1);
        console.log(task + " delete in the list");
        console.log("number of items:" + this.arr.length);
        return this.arr.length;
    };
    ;
    return Todo;
}());
// Execution
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
