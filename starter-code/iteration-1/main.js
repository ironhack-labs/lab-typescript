var myArray = [];
function addTask(oneItem) {
    return myArray.push(oneItem);
}
function listAllTasks() {
    return console.log(myArray);
}
function deleteTask(theItem) {
    var deleteItem = myArray.indexOf(theItem);
    console.log(deleteItem);
    myArray.splice(deleteItem, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
