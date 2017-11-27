var Todo = (function () {
    function Todo() {
        this.arrayTasks = [];
    }
    Todo.prototype.addTask = function (task) {
        arrayStrings.push(task);
        return this.arrayTasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.arrayTasks.length; i++) {
            console.log(i);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        var taskIndex = this.arrayTasks.indexOf(task);
        this.arrayTasks.splice(taskIndex, 1);
        return this.arrayTasks.length;
    };
    return Todo;
}());
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
