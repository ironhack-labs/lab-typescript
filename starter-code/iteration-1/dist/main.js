"use strict";
// Iteration 1
// 1. Create an array of strings
var tasks = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and return 
function addTask(task) {
    console.info('=========== NEW TASK ===========');
    console.info("Task \"" + task + "\" inserted in the list");
    tasks.push(task);
    return tasks.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    tasks.forEach(function (elem) {
        console.log(elem);
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    // tasks.splice(tasks);
    console.info('=========== TASK REMOVED ===========');
    tasks.splice(tasks.indexOf(task), 1);
    console.info("Task \"" + task + "\" removed from the list");
    return tasks.length;
}
// Execution 
console.log("Number of items:", addTask('first task'));
console.log("Number of items:", addTask('second task'));
console.log("Number of items:", addTask('third task'));
console.log("Number of items:", addTask('fourth task'));
console.log("Number of items:", addTask('fifth task'));
listAllTasks();
console.log("Number of items:", deleteTask('third task'));
listAllTasks();
