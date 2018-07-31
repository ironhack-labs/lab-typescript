// Iteration 1
// 1. Create an array of strings
var tasks = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
// class addTask {
//     constructor(public task: string){
//         tasks.push(task);
//     }
// }
function addTask(string) {
    tasks.push(string);
    console.log("Task \"" + string + "\" added to the list");
    return tasks.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    tasks.forEach(function (e, i) {
        console.log("Task #" + i + " is \"" + e + "\"");
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(string) {
    var index = tasks.indexOf(string);
    tasks.splice(index, 1);
    console.log("Number of tasks before deletion: " + tasks.length);
    console.log("Deleted " + string + " from your tasks!");
    console.log("Deleted task number " + index);
    return tasks.length;
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
