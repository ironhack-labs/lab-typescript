// Iteration 1
// 1. Create an array of strings
var arr1 = [];
// 2. Create a function to add a task into the array, call it `addTask`, the function has to accept a string and doesn't have to return anything.
function addTask(task) {
    arr1.push(task);
    console.log('Added task');
    console.log(arr1.length);
    return arr1.length;
}
// 3. Create a function to list all tasks, it must show in the console of task.
function listAllTasks() {
    arr1.forEach(function (task) {
        console.log(task);
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    var index = arr1.indexOf(task, 0);
    if (index > -1) {
        arr1.splice(index, 1);
    }
    console.log('Task deleted');
    console.log(arr1.length);
    return arr1.length;
}
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
