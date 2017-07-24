var tasks = ["start"];
function addTask(task) {
    tasks.push(task);
}
;
function listAllTasks() {
    tasks.forEach(function (task) { return console.log(task); });
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index >= 0) {
        tasks.splice(index, 1);
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
console.log("task not found", deleteTask("fake task"));
