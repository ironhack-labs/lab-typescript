var tasks = [];
function addTask(task) {
    tasks.push(task);
}
function listAllTasks() {
    tasks.forEach(function (task) {
        console.log(task);
    });
    return tasks.length;
}
function deleteTask(task) {
    for (var i = 0; i < tasks.length - 1; i++) {
        if (tasks[i] === task) {
            tasks.splice(i, 1);
        }
    }
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
