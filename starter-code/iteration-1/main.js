var toDoArray = [];
function addTask(task) {
    toDoArray.push(task);
    console.log("=========== NEW TASK ===========");
    console.log("Task " + task + " inserted in the list");
    return toDoArray.length;
}
function listAllTasks() {
    console.log("=========== LIST OF TASKS ===========");
    toDoArray.forEach(function (task) {
        console.log("- ", task);
    });
}
function deleteTask(task) {
    var taskIndex = toDoArray.indexOf(task);
    toDoArray.splice(taskIndex, 1);
    console.log("=========== TASK REMOVED ===========");
    console.log("Task " + task + " removed from the list");
}
console.log("Number of items: ", addTask('This is our first task'));
console.log("Number of items: ", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: ", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: ", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: ", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
