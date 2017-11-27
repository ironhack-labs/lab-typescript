var tasksList = [];
function addTask(task) {
    tasksList.push(task);
    console.log("=========== NEW TASK ===========\n\n              Task \"" + task + "\" inserted in the list\n\n              Number of items: " + tasksList.length);
    return tasksList.length;
}
function listAllTasks() {
    tasksList.forEach(function (task) {
        console.log("=========== TASK ===========\n\n                Task: \"" + task + "\"");
    });
}
function deleteTask(task) {
    tasksList.splice(tasksList.indexOf(task), 1);
    console.log("=========== TASK REMOVED ===========\n\n              Task \"" + task + "\" removed from the list\n\n              Number of items: " + tasksList.length);
    return tasksList.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
