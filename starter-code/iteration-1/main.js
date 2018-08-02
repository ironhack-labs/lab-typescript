const tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log(`=========== NEW TASK ===========
    Task "${task}" inserted in the list`);
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach(task => {
        console.log(task);
    });
}
function deleteTask(task) {
    const taskIndex = tasks.indexOf(task);
    tasks.splice(taskIndex, 1);
    console.log(`=========== TASK REMOVED ===========
    Task "${task}" removed from the list`);
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
