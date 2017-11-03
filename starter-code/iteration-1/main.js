var taskList = [];
function addTask(task) {
    taskList.push(task);
    console.log("You've added \"" + task + "\" to your To Do List!");
}
;
function listAllTasks() {
    for (var i = 0; i < taskList.length; i++) {
        console.log(taskList[i]);
    }
}
;
function deleteTask(task) {
    var toBeDeleted = taskList.indexOf(task);
    if (toBeDeleted === -1) {
        console.log("That is not a valid task, please check your spelling!");
    }
    else {
        taskList.splice(toBeDeleted, 1);
        console.log("You've deleted \"" + task + "\" from your To Do List!");
    }
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finis this iteration 1!! 🤓'));
listAllTasks();
