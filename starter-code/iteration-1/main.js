var taskList = [];
function addTask(task) {
    taskList.push(task);
    console.log(task + " added");
    return taskList.length;
}
function listAllTasks() {
    console.log(taskList);
}
function deleteTask(taskToDelete) {
    taskList.forEach(function (oneTask) {
        if (oneTask === taskToDelete) {
            var indexToDelete = taskList.indexOf(oneTask);
            console.log(oneTask);
            taskList.splice(indexToDelete, 1);
            console.log(oneTask + " removed");
        }
    });
    return taskList.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
