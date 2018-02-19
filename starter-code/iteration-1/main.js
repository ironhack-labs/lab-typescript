let myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log("Task added!");
    return myArray.length;
}
function listAllTasks() {
    myArray.forEach(t => {
        console.log(t);
    });
}
function deleteTask(task) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == task) {
            myArray.splice(i, 1);
            console.log("Task deleted!");
        }
    }
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
