var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log(task);
    return tasks.length;
}
function listAllTasks(tasks) {
    return tasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    tasks.splice(tasks.indexOf(task), 1);
    console.log("Task deleted: " + task);
    return tasks.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks(tasks);
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(tasks);
