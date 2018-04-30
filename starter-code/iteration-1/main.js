let toDo = [];
function addTask(task) {
    toDo.push(task);
    console.log(`${task} added to toDo array`);
    console.log(toDo.length);
    return toDo.length;
}
function listAllTasks() {
    toDo.map((one) => {
        console.log(one);
    });
}
function deleteTask(task) {
    let index = toDo.findIndex(task);
    toDo.splice(index, 1);
    console.log(`${task} has been removed from the list`);
    console.log(toDo.length);
    return toDo.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
