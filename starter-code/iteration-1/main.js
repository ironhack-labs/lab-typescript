var myList = [];
function addTask(task) {
    myList.push(task);
    return myList.length;
}
function listAllTasks() {
    myList.forEach(function (e) { return console.log(e); });
}
function deleteTask(taskToDelete) {
    myList.splice(myList.indexOf(taskToDelete), 1);
    return myList.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
