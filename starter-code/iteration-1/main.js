var arrayStrings = [];
var task;
function addTask(task) {
    arrayStrings.push(task);
    return arrayStrings.length;
}
function listAllTasks() {
    for (var i = 0; i < arrayStrings.length; i++) {
        console.log(i);
    }
}
function deleteTask(task) {
    var taskIndex = arrayStrings.indexOf(task);
    arrayStrings.splice(taskIndex, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
