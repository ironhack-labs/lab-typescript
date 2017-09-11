var tasks = new Array();
function addTask(task) {
    tasks.push(task);
    return tasks.length;
}
function listAllTasks() {
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        console.log(task);
    }
}
function deleteTask(task) {
    var taskIndex = tasks.indexOf(task);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }
    return tasks.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
