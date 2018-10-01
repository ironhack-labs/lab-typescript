// Iteration 1
// 1. Create an array of strings
var arrayOfStrings = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    arrayOfStrings.push(task);
    console.log(task + " has been added");
    var numberOfTasks = arrayOfStrings.length;
    console.log(numberOfTasks);
    return numberOfTasks;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    arrayOfStrings.forEach(function (element) {
        console.log(element);
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    var index = arrayOfStrings.indexOf(task);
    arrayOfStrings.splice(index, 1);
    console.log("the " + task + " has been deleted");
    return arrayOfStrings.length;
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
