// Iteration 1
// 1. Create an array of strings
var myArray = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    myArray.push(task);
    return myArray.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    myArray.forEach(function (elem) { console.log(elem); });

}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    var position = myArray.indexOf(task);
    myArray.splice(position, 1);
    return myArray.length;
}
// Execution
// addTask('test');
// console.log(myArray);
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
// listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
