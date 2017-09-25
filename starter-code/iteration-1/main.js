var tasksList = [];
function addTask(nameTask) {
    tasksList.push(nameTask);
    console.log("Task: " + nameTask + " inserted in the list");
    return tasksList.length;
}
function listAllTasks() {
    for (var i = 0; i < tasksList.length; i++) {
        console.log(tasksList[i]);
    }
}
function deleteTask(taskName) {
    var position = tasksList.indexOf(taskName);
    if (position === -1) {
        console.log("no match");
    }
    else {
        tasksList.splice(position, 1);
        console.log("Task: " + taskName + " deleted from the list");
        return tasksList.length;
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
