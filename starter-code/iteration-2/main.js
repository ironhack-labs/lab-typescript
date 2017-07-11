var Todo = (function () {
    function Todo() {
        this.listOfTasks = [];
    }
    Todo.prototype.listAllTasks = function () {
        this.listOfTasks.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.addTask = function (task) {
        this.listOfTasks.push(task);
        console.log('Task ' + task + ' inserted in the list');
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.listOfTasks.indexOf(task);
        if (index) {
            this.listOfTasks.splice(index, 1);
            console.log('Task ' + task + ' removed from the list');
        }
        else {
            console.log('Task doesn\'t exist');
        }
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
var ToDo = (function () {
    function ToDo() {
    }
    return ToDo;
}());
