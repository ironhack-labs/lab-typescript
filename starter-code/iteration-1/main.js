var taskList = [];
function addTask(task) {
    console.log("Task has been added.");
    return taskList.push(task);
}
function listAllTasks(taskList) {
    console.log(taskList);
}
function deleteTask(task) {
    taskList.forEach(function (oneTask, index) {
        if (task === oneTask) {
            taskList.splice(index, 1);
        }
    });
}
console.log("Number of items: ", addTask('This is our first task'));
console.log("Number of items: ", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: ", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: ", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: ", addTask('Finish this iteration 3!! 🤓'));
listAllTasks(taskList);
console.log("Number of items: " + taskList.length, deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(taskList);
