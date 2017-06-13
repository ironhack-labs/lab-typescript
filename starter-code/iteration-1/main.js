var tasks = [];
function addTasks(newTask) {
    tasks.push(newTask);
    console.log(newTask + " added to the list.");
    return tasks.length;
}
function listTasks(taskList) {
    tasks.forEach(function (oneTask) {
        console.log(oneTask);
    });
}
function deleteTask(deletedTask) {
    var index = tasks.indexOf(deletedTask);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    console.log(deletedTask + " deleted");
    return (tasks.length);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
