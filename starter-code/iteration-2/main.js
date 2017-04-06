
// 1. Create a class Todo that implements the Interface created before.
var Todo = (function () {
    function Todo(myArray) {
        if (myArray === void 0) { myArray = []; }
        this.myArray = myArray;
    }
    Todo.prototype.addTask = function (task) {
        this.myArray.push(task);
        return this.myArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.myArray.forEach(function (elem) { console.log(elem); });
    };
    Todo.prototype.deleteTask = function (task) {
        var position = this.myArray.indexOf(task);
        this.myArray.splice(position, 1);
        return this.myArray.length;
    };
    return Todo;
}());
// Execution
console.log('test');
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
