let myList = [];
function addTask(task) {
    myList.push(task);
    console.log('=========== NEW TASK ===========');
    console.log(`Task ${task} inserted in the list`);
    return myList.length;
}
function listAllTasks() {
    myList.forEach(e => console.log(e));
}
function deleteTask(taskToDelete) {
    myList.splice(myList.indexOf(taskToDelete), 1);
    console.log('=========== TASK REMOVED ===========');
    console.log(`Task ${taskToDelete} removed from the list`);
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
