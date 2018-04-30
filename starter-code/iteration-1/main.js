// Iteration 1
// 1. Create an array of strings
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
// 3. Create a function to list all tasks, it must show in the console de task.
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
// Execution
var Task = /** @class */ (function () {
    function Task() {
        this.taskArray = [];
    }
    Task.prototype.listAllTasks = function (taskArray) {
        taskArray.forEach(function (element) {
            console.log(element);
        });
    };
    Task.prototype.addTask = function (newTask) {
        this.taskArray.push(newTask);
        console.log("Task " + newTask + " inserted in the list");
        console.log("Number of items: " + this.taskArray.length);
        return this.taskArray.length;
    };
    Task.prototype.deleteTask = function (newTask) {
        this.taskArray.pop();
        console.log("Task " + newTask + " inserted in the list");
        console.log("Number of items: " + this.taskArray.length);
        return this.taskArray.length;
    };
    return Task;
}());
// console.log("Number of items:", addTask('This is our first task'));
// console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
// console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
// console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
// listAllTasks();
// console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
// listAllTasks();
