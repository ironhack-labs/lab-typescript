var taskList = [];
function addTask(task) {
    taskList.push(task);
    return taskList.length;
}
function listAllTasks() {
    taskList.forEach(e => console.log(e));
}
function deleteTask(task) {
    taskList.splice(taskList.indexOf(task), 1);
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
