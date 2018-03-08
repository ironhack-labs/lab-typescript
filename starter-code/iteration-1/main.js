var allTask = [];
function addTask(task) {
    allTask.push(task);
    var numberOfTask = allTask.length;
    console.log(task + " was added to the list.");
    return numberOfTask;
}
function listAllTasks() {
    console.log("all task:");
    for (var _i = 0, allTask_1 = allTask; _i < allTask_1.length; _i++) {
        var item = allTask_1[_i];
        console.log(item);
    }
}
function deleteTask(task) {
    var index = allTask.indexOf(task);
    allTask.splice(index, 1);
    var numberOfTask = allTask.length;
    console.log(task + " was deleted from the list.");
    return numberOfTask;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
