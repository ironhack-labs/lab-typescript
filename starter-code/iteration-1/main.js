var myTasks = [];
function addTask(task) {
    myTasks.push(task);
    console.log('Task ' + task + ' inserted in the list');
}
function listAllTasks() {
    myTasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = myTasks.indexOf(task);
    myTasks.splice(index, 1);
    console.log('Task ' + task + ' removed from the list');
    console.log(myTasks);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
