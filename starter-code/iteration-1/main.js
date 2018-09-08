let tasks = [];
function addTask(task) {
    console.info('=========== NEW TASK ===========');
    console.info(` Task ${task} inserted in the list`);
    tasks.push(task);
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach(element => console.info(element));
}
function deleteTask(task) {
    tasks.splice(tasks.indexOf(task), 1);
    console.info('=========== TASK REMOVED ===========');
    console.info(`Task ${task} removed from the list`);
    return tasks.length;
}
console.log("Number of items:", addTask('This is our first taski'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
