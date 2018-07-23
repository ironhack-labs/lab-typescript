// Iteration 1
// 1. Create an array of strings
var tasks = [];
// let tasks: string[] = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    tasks.push(task);
    var taskNum = tasks.length;
    console.log("Task" + task + "inserted in the list \n Number of items:" + taskNum);
    return taskNum;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    tasks.forEach(function (eachTask) {
        console.log(eachTask);
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    var index = tasks.indexOf(task);
    tasks.splice(index, 1);
    var taskNum = tasks.length;
    console.log('Task' + task + 'removed from list \n Number of items:' + taskNum);
    return taskNum;
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
