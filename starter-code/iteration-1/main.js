const taskList = [];
function addTask(task) {
    taskList.push(task);
    console.log("the new task has been added to the list", taskList.length);
    return taskList.length;
}
function listAllTasks() {
    console.log(taskList);
}
function deleteTask(task) {
    let index = taskList.indexOf(task);
    taskList.splice(index, 1);
    console.log("the task has been deleted from the list", taskList.length);
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
