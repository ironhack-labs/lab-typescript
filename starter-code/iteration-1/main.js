let tasksList = [];
function addTask(task) {
    tasksList.push(task);
    return tasksList.length;
}
function listAllTasks() {
    tasksList.forEach((e) => {
        console.log(e);
    });
}
function deleteTask(task) {
    tasksList.splice(tasksList.indexOf(task), 1);
    return tasksList.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
