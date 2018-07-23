const tasks = [];
function addTask(task) {
    tasks.push(task);
    return tasks.length;
}
function listAllTasks() {
    for (let task of tasks) {
        console.log(task);
    }
}
function deleteTask(task) {
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);
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
