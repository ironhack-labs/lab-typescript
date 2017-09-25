var taskArr = [];
function addTask(task) {
    taskArr.push(task);
    return task;
}
function listAllTasks() {
    console.log(taskArr);
}
function deleteTask(task) {
    var taskIndex = taskArr.indexOf(task);
    taskArr.splice(taskIndex, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
