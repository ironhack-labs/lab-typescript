// Iteration 1
// 1. Create an array of strings
var tasks = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    tasks.push(task);
    console.log("=========== NEW TASK ===========\nTask \"" + task + "\" inserted on the list \n Number of items: " + tasks.length);
    return tasks;
}
addTask('do homework');
addTask('buy fruit');
addTask('This is our first task');
addTask('Eat pizza 🍕 yummy!!!');
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    tasks.forEach(function (task) { console.log(task); });
}
listAllTasks();
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    var indexOfTask = tasks.indexOf(task);
    tasks.splice(indexOfTask, 1);
    console.log("=========== TASK REMOVED ===========\nTask \"" + task + "\" removed from the list\nNumber of items: " + tasks.length + "\nRemaining array: " + tasks);
}
deleteTask('do homework');
deleteTask('This is our first task');
listAllTasks();
