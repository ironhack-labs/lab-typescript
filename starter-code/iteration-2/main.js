// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(toDoArr, toDoListLength) {
        this.toDoArr = toDoArr;
        this.toDoListLength = toDoListLength;
    }
    Todo.prototype.addTask = function (task) {
        this.toDoArr.push(task);
        this.toDoListLength = this.toDoArr.length;
        console.log('Task ' + task + ' inserted in the list');
        return this.toDoListLength;
    };
    Todo.prototype.listAllTasks = function () {
        this.toDoArr.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.toDoArr.indexOf(task);
        if (index > -1) {
            this.toDoArr.splice(index, 1);
        }
        console.log('Task ' + task + ' was deleted');
        this.toDoListLength = this.toDoArr.length;
        return this.toDoListLength;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo([''], 0);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
