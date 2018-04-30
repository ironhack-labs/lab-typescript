// Iteration 1
// 1. Create an array of strings
var toDoList = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept
// a string and don't have to return anything.
function addTask(task) {
    toDoList.push(task);
    console.log("Task " + task + " added! ");
    console.log(toDoList.length);
    return toDoList.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    toDoList.forEach(function (oneTask) {
        console.log(oneTask);
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    var index = toDoList.indexOf(task);
    toDoList.splice(index, 1);
    console.log("Deleted " + index + " " + task);
    console.log("Tasks left " + toDoList.length);
    return toDoList.length;
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
