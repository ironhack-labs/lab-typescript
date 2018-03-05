var tasksList = [];
function addTask(task) {
    tasksList.push(task);
    console.log("========== NEW TASK ==========\n    " + task + "\n    Number of items: " + tasksList.length + "\n    ");
}
function listAllTasks() {
    tasksList.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var deleteIndex = tasksList.indexOf(task);
    if (deleteIndex !== -1) {
        tasksList.splice(deleteIndex, 1);
        console.log("========== TASK REMOVED ==========\n        " + task + "\n        Number of items: " + tasksList.length + "\n        ");
    }
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
