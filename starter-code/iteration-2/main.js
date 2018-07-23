// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(tasks) {
        if (tasks === void 0) { tasks = []; }
        var _this = this;
        this.tasks = tasks;
        this.addTask = function (loquesea) {
            _this.tasks.push(loquesea);
        };
        this.listAllTasks = function () {
            console.log(_this.tasks);
        };
        this.deleteTask = function (el) {
            var pos = _this.tasks.indexOf(el);
            _this.tasks.splice(pos, 1);
        };
    }
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
