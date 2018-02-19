var myArray = [''];
function addTask(task) {
    myArray.push(task);
    console.log('Item inserted');
    return myArray.length;
}
function listAllTasks() {
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}
function deleteTask(task) {
    var index = myArray.indexOf(task);
    while (index !== -1) {
        myArray.splice(index, 1);
        index = myArray.indexOf(task);
    }
    console.log('Item deleted');
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
