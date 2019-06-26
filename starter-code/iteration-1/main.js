// Iteration 1
// 1. Create an array of strings
var taskList = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    taskList.push(task);
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    console.log(taskList.join());
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    taskList = taskList.filter(function (value) { return value !== task; });
}
// Execution
console.log("Number of items: " + taskList.length, addTask('This is our first task'));
console.log("Number of items: " + taskList.length, addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: " + taskList.length, addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: " + taskList.length, addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: " + taskList.length, addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items: " + taskList.length, deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
