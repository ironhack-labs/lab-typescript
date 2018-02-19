// Iteration 1
// 1. Create an array of strings
var toDoList = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    toDoList.push(task);
    console.log("=====NEW TASK======\n    Task \"" + task + "\" insterted to the list\n    Number of items: " + toDoList.length);
    return toDoList.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    toDoList.forEach(function (item) {
        console.log(item);
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    var i = 0;
    toDoList.forEach(function (item) {
        if (item === task) {
            toDoList.splice(i, 1);
            console.log("The item " + task + " was deleted. Task left to do: " + toDoList.length);
        }
        i++;
    });
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
