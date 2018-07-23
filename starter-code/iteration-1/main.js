let tasks;
function addTask(task) {
    tasks.push(task);
    console.log(`
    =========== NEW TASK ===========    \m
    Task ${task} inserted in the list   \n
    Number of items: ${tasks.length}    \n
    `);
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach((task, index) => {
        console.log(index + 1, ':', task);
    });
}
function deleteTask(task) {
    tasks.slice(tasks.indexOf(task), 1);
    console.log(`
    =========== TASK REMOVED ===========    \n
    Task "${task}" removed from the list    \n
    Number of items: ${tasks.length}        \n
    `);
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
