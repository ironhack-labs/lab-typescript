var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log('=========== NEW TASK ===========');
    console.log(task);
    return myArray.length;
}
function listAllTasks() {
    myArray.forEach(function (oneTask) {
        console.log(oneTask);
    });
}
function deleteTask(task) {
    var removeTaskIndex = myArray.indexOf(task);
    myArray.splice(removeTaskIndex, 1);
    console.log('=========== TASK DELETED ===========');
    console.log(task);
    return myArray.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
