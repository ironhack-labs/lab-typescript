var tasks = [];
function addTask(taskToInsert) {
    tasks.push(taskToInsert);
    console.log("Task " + taskToInsert + " inserted in the list");
    return (tasks.length);
}
function listAllTasks() {
    console.log('*********** LIST ALL TASK ****************');
    tasks.forEach(function (oneTask) {
        console.log(oneTask);
    });
}
function deleteTask(taskToDelete) {
    var index = tasks.indexOf(taskToDelete);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    console.log("Task " + taskToDelete + " deleted from the list");
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
