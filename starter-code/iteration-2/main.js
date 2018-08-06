// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.arrOfStrings = [];
    }
    Todo.prototype.addTask = function (task) {
        this.arrOfStrings.push(task);
        console.log("Task " + task + " inserted to the list");
        return this.arrOfStrings.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.arrOfStrings.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var position = this.arrOfStrings.indexOf(task);
        this.arrOfStrings.splice(position, 1);
        console.log(task + " removed from the list");
        return this.arrOfStrings.length;
    };
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
