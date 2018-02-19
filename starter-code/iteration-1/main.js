let myArray = [];
function addTask(task) {
    myArray.push(task);
    return myArray.length;
}
function listAllTasks() {
    myArray.forEach(function (i) {
        console.log(i);
    });
}
function deleteTask(task) {
    let index = myArray.indexOf(task);
    myArray.splice(index);
    return myArray.length;
}
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks();
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks();
