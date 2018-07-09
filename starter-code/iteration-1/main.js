// Iteration 1
// 1. Create an array of strings
var array = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    array.push(task);
    console.log(array);
    return array;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(tasks) {
    var i = 0;
    for (i; i < array.length; i++) {
        console.log(tasks[i]);
    }
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(array, task) {
    if (array.indexOf(task) > -1) {
        array.splice(task, 1);
        console.log(array);
    }
}
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks(array);
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(array);
