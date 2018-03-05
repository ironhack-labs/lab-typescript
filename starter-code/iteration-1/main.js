var myArray = [];
function addTask(task) {
    myArray.push(task);
    return myArray.length;
}
function listAllTasks(item) {
    for (var index = 0; index < myArray.length; index++) {
        console.log(myArray[index]);
    }
}
function deleteTask(task) {
    myArray.splice(2, 1);
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
