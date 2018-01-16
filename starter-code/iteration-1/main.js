var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("=========== NEW TASK ===========");
    console.log("task " + task + " inserted in the list");
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach(function (t) {
        console.log(t);
    });
}
function deleteTask(task) {
    tasks.splice(tasks.indexOf(task), 1);
    console.log("=========== TASK REMOVED ===========");
    console.log("task removed: " + task);
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
