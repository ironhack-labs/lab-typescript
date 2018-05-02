let taskList = [];
function addTask(task) {
    taskList.push(task);
    console.log(`Added ${task} task`);
    console.log("Number of tasks " + taskList.length);
    return taskList.length;
}
function listAllTasks() {
    taskList.forEach((oneTask) => {
        console.log(oneTask);
    });
}
function deleteTask(task) {
    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i] == task) {
            taskList.splice(i, 1);
        }
    }
    console.log(`Delete ${task} task`);
    console.log("Number of tasks " + taskList.length);
    return taskList.length;
}
addTask('This is our first task');
addTask('Eat pizza 🍕 yummy!!!');
addTask('Finish this iteration 1!! 🤓');
addTask('Finish this iteration 2!! 🤓');
addTask('Finish this iteration 3!! 🤓');
listAllTasks();
deleteTask('Finish this iteration 1!! 🤓');
listAllTasks();
