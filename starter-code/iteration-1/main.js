let myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log(`Add task ${task} inserted in the list`);
    return (myArray.length);
}
function listAllTasks() {
    myArray.forEach(e => {
        console.log(e);
    });
}
function deleteTask(task) {
    myArray.splice(myArray.indexOf(task), 1);
    console.log(`Deleted task ${task} inserted in the list`);
    return (myArray.length);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
