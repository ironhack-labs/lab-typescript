var stringArray = [];
function addTask(task) {
    stringArray.push(task);
    console.log(task + " inserted into list of tasks");
    console.log('Number of tasks: ', stringArray.length);
    return stringArray.length;
}
function listAllTasks() {
    stringArray.forEach(function (task) {
        console.log(task);
    });
    return;
}
function deleteTask(task) {
    var taskIndex = stringArray.indexOf(task);
    stringArray.splice(taskIndex, 1);
    console.log("Deleted " + task + " at position " + taskIndex + " in our task list.");
    return stringArray.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
