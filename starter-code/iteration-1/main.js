let tasks = [];
function addTask(task) {
    return tasks.push(task);
}
function listAllTasks() {
    tasks.forEach(e => console.log(e));
}
function deleteTask(task) {
    let i = tasks.indexOf(task);
    tasks.splice(i, 1);
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
