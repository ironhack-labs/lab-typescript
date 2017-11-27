let myArray = [];
function addTask(task) {
    console.log(task);
    myArray.push(task);
    return (myArray.length);
}
function listAllTasks(myArray) {
    myArray.forEach(e => {
        return e;
    });
}
function deleteTask(task) {
    let index = myArray.indexOf(task);
    myArray.splice(index, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks(myArray);
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(myArray);
