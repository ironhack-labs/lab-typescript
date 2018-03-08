var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Task inserted " + task);
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    tasks = tasks.filter(function (t) {
        return t !== task;
    });
    console.log("task deleted: " + task);
    return task.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
