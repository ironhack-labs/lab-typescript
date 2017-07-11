var taskList = [];
function addTask(task) {
    taskList.push(task);
}
function listAllTasks() {
    taskList.forEach(function (task) {
        console.log("listing", task);
    });
}
function deleteTask(task) {
    var taskLess = taskList.indexOf(task);
    if (taskLess > -1) {
        taskList.splice(taskLess, 1);
    }
}
;
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
