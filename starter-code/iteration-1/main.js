var taskList = [];
function addTask(task) {
    taskList.push(task);
}
function listAllTasks() {
    taskList.forEach(function (e) {
        console.log(e);
    });
}
function deleteTask(task) {
    taskList = taskList.filter(function (e) { return e !== task; });
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
