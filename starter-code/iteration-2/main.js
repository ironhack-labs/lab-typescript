// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasklist = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasklist.push(task);
        console.log("=========== NEW TASK ===========\nTask \"" + task + "\" inserted in the list");
        return this.tasklist.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasklist.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var _this = this;
        this.tasklist.forEach(function (taskToCheck, index) {
            if (taskToCheck === task) {
                _this.tasklist.splice(index, 1);
                console.log("=========== TASK REMOVED ===========\n        Task \"" + task + "\" removed from the list");
            }
        });
        return this.tasklist.length;
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
