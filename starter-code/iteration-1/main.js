var tasks = [];
function addTask(task) {
    tasks.push(task);
    return "add tasks " + tasks.length;
}
function listAllTasks() {
    tasks.forEach(function (task) { console.log(task); });
}
function deleteTask(deletetask) {
    tasks.forEach(function (task) {
        if (task == deletetask) {
            var index = tasks.indexOf(deletetask);
            tasks.splice(index, 1);
            console.log("Delete: " + task);
        }
    });
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
