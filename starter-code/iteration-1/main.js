var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("----- NEW TASK ------>  task \"" + task + "\" was added to the list.");
    return "" + tasks.length;
}
function listAllTasks(task) {
    tasks.forEach(function (task) {
        console.log("" + task);
    });
}
;
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index >= 0) {
        tasks.splice(index, 1);
        console.log('======== DELETE TASK ========');
    }
    return "" + tasks.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
