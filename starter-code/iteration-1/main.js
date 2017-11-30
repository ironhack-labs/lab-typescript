var myTasks = [];
function addTask(task) {
    return myTasks.push(task);
}
function listAllTasks(arrayOfTasks) {
    console.log("These are our tasks: ");
    arrayOfTasks.forEach(function (oneTask) {
        console.log(oneTask);
    });
}
function deleteTask(taskToDelete) {
    var itemIndex = myTasks.indexOf(taskToDelete);
    console.log(itemIndex);
    myTasks.splice(itemIndex, 1);
    console.log(myTasks);
}
addTask("Go to school");
addTask("Do homework");
addTask("Buy Milk");
console.log(myTasks);
listAllTasks(myTasks);
deleteTask("Buy Milk");
