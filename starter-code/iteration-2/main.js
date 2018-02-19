// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(taskArray) {
        this.taskArray = taskArray;
    }
    Todo.prototype.addTask = function (task) {
        this.taskArray.push(task);
        console.log("=========== NEW TASK ===========\n            Task " + task + " inserted in the list\n            Number of items: " + this.taskArray.length);
        return this.taskArray.length;
    };
    // 3. Create a function to list all tasks, it must show in the console de task.
    Todo.prototype.listAllTasks = function () {
        this.taskArray.forEach(function (element) {
            console.log(element);
        });
    };
    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
    Todo.prototype.deleteTask = function (task) {
        var position = this.taskArray.indexOf(task);
        this.taskArray.splice(position, 1);
        console.log("=========== TASK REMOVED ===========\n            Task " + task + " removed from the list\n            Number of items: " + this.taskArray.length);
        return this.taskArray.length;
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
