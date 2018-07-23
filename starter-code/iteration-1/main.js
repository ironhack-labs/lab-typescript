// Iteration 1
// 1. Create an array of strings
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
// 3. Create a function to list all tasks, it must show in the console de task.
var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log('Task' + task + 'inserted in the list');
    console.log(tasks.length);
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach(function (element) {
        console.log(element);
    });
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    tasks.splice(index, 1);
    console.log("Task" + task + "removed from the list");
    console.log(tasks.length);
    return (tasks.length);
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
