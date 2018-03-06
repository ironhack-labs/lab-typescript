// Iteration 1
// 1. Create an array of strings
var tasks = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
// It receives a string as a parameter called task.
// It adds the task to the array.
// It prints a message indicating the insertion.
// It returns the number of elements in the list and prints that number in the console as well.
function addTask(task) {
    tasks.push(task);
    console.log(task + " added to tasks");
    var taskNumber = tasks.length;
    console.log("Number of tasks: " + taskNumber);
    return taskNumber;
}
// 3. Create a function to list all tasks, it must show in the console de task.
// It iterates over all the tasks in the list.
// It prints each list item in the console.
function listAllTasks() {
    tasks.forEach(function (task) {
        console.log("" + task);
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
// It receives a string as a parameter called task.
// It removes that string from the array.
// It returns the number of elements in the list after the deletion.
// It prints a message indicating the deletion.
// It returns the number of elements in the list and prints that number in the console as well.
function deleteTask(task) {
    // var taskIndex = array.indexOf(task);
    // if (taskIndex > -1) {
    //     array.splice(taskIndex, 1);
    //     console.log(`${task} deleted`);
    // }
    tasks = tasks.filter(function (t) {
        return t !== task;
    });
    console.log(task + " deleted");
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
