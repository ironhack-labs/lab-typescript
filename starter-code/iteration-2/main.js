var Todo = (function () {
    function Todo(toDoList) {
        if (toDoList === void 0) { toDoList = []; }
        this.toDoList = toDoList;
    }
    Todo.prototype.addTask = function (task) {
        this.toDoList.push(task);
        console.log("Task " + task + " inserted in the list");
        return this.toDoList.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.toDoList.forEach(function (task, index) {
            console.log("task " + (index + 1) + ": " + task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.toDoList.indexOf(task);
        if (index > -1) {
            this.toDoList.slice(index, 1);
            console.log("Task " + task + " deleted from the list");
            return this.toDoList.length;
        }
        console.log("The task " + task + " isn't in the list");
        return this.toDoList.length;
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
