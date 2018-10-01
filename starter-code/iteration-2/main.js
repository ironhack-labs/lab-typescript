// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.array = [];
    }
    Todo.prototype.addTask = function (task) {
        this.array.push(task);
        console.log(task + " has been added");
        console.log(task.length);
        return task.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log(this.array);
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.array.indexOf(task);
        this.array.splice(index, 1);
        console.log("the " + task + " has been deleted");
        return this.array.length;
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
