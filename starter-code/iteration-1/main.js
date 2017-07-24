var arrayTasks = [];
function addTask(task) {
    arrayTasks.push(task);
}
function listAllTasks() {
    console.log(arrayTasks);
}
function deleteTask(task) {
    var i = arrayTasks.indexOf(task);
    if (i > -1) {
        arrayTasks.splice(i, 1);
    }
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
