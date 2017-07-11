var listOfTasks = [];
function addTask(task) {
    listOfTasks.push(task);
    return listOfTasks.length;
}
function listAllTasks() {
    listOfTasks.forEach(function (oneTask) {
        console.log(oneTask);
    });
}
function deleteTask(task) {
    var indexOfString = listOfTasks.indexOf(task);
    if (indexOfString) {
        listOfTasks.splice(indexOfString, 1);
        console.log(task + ' has been deleted');
    }
    else {
        console.log("Task does not exist");
    }
    return listOfTasks.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
