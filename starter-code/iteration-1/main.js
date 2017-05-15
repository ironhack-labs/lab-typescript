var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("=========== NEW TASK ==========  Task " + task + " added to the list");
    console.log("Number of items: " + tasks.length);
}
function listAllTasks() {
    for (var i in tasks) {
        console.log(tasks[i]);
    }
}
function deleteTask(task) {
    var deleteItem = tasks.indexOf(task);
    tasks.splice(deleteItem, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
