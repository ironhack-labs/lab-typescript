// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(task) {
        this.task = task;
        this.taskArray = [];
    }
    Todo.prototype.addTask = function (task) {
        this.taskArray.push(task);
        return task;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.taskArray; _i < _a.length; _i++) {
            var task = _a[_i];
            console.log(task);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        var indexTask = this.taskArray.indexOf(task);
        this.taskArray.splice(indexTask, 1);
        return this.taskArray.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo('patatasllevonoes');
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
