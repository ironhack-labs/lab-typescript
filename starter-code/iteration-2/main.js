// Add the reference to the "TodoInterface"
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        for (var i = this.tasks.length - 1; i >= 0; i--) {
            if (this.tasks[i] === task)
                this.tasks.splice(i, 1);
        }
        console.log('Deleted ' + task);
        return this.tasks.length;
    };
    return Todo;
}());
// 1. Create a class Todo that implements the Interface created before.
// Execution
var myTodos = new Todo();
console.log("Number of items: ", myTodos.addTask('This is our first task'));
console.log("Number of items: ", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: ", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: ", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: ", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items: ", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: ", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
