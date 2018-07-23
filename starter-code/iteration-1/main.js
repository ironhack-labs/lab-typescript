const taskArray = [];
function addTask(task) {
    taskArray.push(task);
    return taskArray.length;
}
;
function listAllTasks() {
    taskArray.forEach(function (eachTask) {
        console.log(eachTask);
    });
}
;
function deleteTask(task) {
    const theIndex = taskArray.indexOf(task);
    taskArray.splice(theIndex, 1);
    return taskArray.length;
}
;
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
