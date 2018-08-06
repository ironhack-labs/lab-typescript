// Iteration 1
// 1. Create an array of strings
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
// 3. Create a function to list all tasks, it must show in the console de task.
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
// Execution
var myArray = [];
function addTask(target) {
    myArray.push(target);
    console.log("\n  =========== NEW TASK ===========\n  Task \"" + target + "\" inserted in the list");
    console.log("Number of items: " + myArray.length);
}
function listAllTasks() {
    console.log.apply(console, myArray);
}
function deleteTask(target) {
    var tempIndex = myArray.indexOf(target);
    myArray.splice(tempIndex, 1);
    console.log("\n  =========== TASK REMOVED ===========\n  Task \"" + target + "\" removed from the list");
    console.log("Number of items: " + myArray.length);
}
addTask('This is our first task');
addTask('Eat pizza 🍕 yummy!!!');
addTask('Finish this iteration 1!! 🤓');
addTask('Finish this iteration 2!! 🤓');
addTask('Finish this iteration 3!! 🤓');
listAllTasks();
deleteTask('Finish this iteration 1!! 🤓');
listAllTasks();
