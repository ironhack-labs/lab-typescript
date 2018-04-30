// Iteration 1
// 1. Create an array of strings
var tasksArr = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    tasksArr.push(task);
    console.log("Task " + task + " inserted in the list\n  Number of itemsA: " + tasksArr.length);
    return tasksArr.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    tasksArr.forEach(function (e) {
        console.log(e);
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    var indice = tasksArr.indexOf(task);
    tasksArr.splice(indice, 1);
    console.log("Task " + task + " removed from the list\n  Number of items " + tasksArr.length);
    return tasksArr.length;
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
