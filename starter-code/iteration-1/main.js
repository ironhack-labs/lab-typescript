var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Insert task");
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach(function (a) {
        console.log(a);
    });
}
function deleteTask(task) {
    var dtask = tasks.indexOf(task);
    return tasks.splice(dtask, 1).length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
