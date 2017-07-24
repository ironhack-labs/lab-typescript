var Task = (function () {
    function Task() {
    }
    // 2. Create a function to add a task in to the array, call it `addTask`, 
    //the function has to accept a string and don't have to return anything.
    Task.prototype.addTask = function (task) {
        // this.task = task;        
        arrToDo.push(task);
        console.log("=========== NEW TASK =========== \n        Task \"" + task + "\" inserted in the list ");
        console.log("Number of items: " + arrToDo.length);
    };
    // 3. Create a function to list all tasks, it must show in the console de task.
    Task.prototype.listAllTasks = function () {
        arrToDo.forEach(function (element, index) {
            console.log(element);
        });
    };
    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
    Task.prototype.deleteTask = function (task) {
        arrToDo.forEach(function (element, index) {
            if (element === task) {
                arrToDo.splice(index, 1);
                console.log("=========== NEW REMOVED =========== \n                Task \"" + task + "\" removed in the list ");
                console.log("Number of items: " + arrToDo.length);
            }
        });
    };
    return Task;
}());
// Iteration 1
// 1. Create an array of strings
var arrToDo = ['laundry', 'dishes', 'ironing clothes'];
var task = new Task();
// Execution
console.log("Number of items:", task.addTask('This is our first task'));
console.log("Number of items:", task.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", task.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", task.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", task.addTask('Finish this iteration 3!! 🤓'));
task.listAllTasks();
console.log("Number of items:", task.deleteTask('Finish this iteration 1!! 🤓'));
task.listAllTasks();
