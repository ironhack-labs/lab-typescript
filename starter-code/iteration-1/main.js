// Iteration 1
// 1. Create an array of strings
var myArray = [];
// 2. Create a function to add a task in to the array, call it `addTask`, 
// the function has to accept a string and don't have to return anything.
function addTask(target) {
    console.log('=======NEW TASK======');
    myArray.push(target);
    console.log('Task: ' + myArray);
    console.log('Number of items: ' + myArray.length);
    return myArray;
}
// 3. Create a function to list all tasks, the task must show in the console .
function listAllTasks() {
    console.log(myArray);
    return myArray;
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(target) {
    var index = myArray.indexOf(target);
    if (index !== -1) {
        myArray.splice(index, 1);
    }
    return myArray;
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
