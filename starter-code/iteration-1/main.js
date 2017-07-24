let toDoList = [];
function addTask(task) {
    toDoList.push(task);
    console.log(`=========== NEW TASK ===========\nTask "${task}" inserted in the list`);
    return toDoList.length;
}
function listAllTasks() {
    toDoList.forEach(element => {
        console.log(element);
    });
}
function deleteTask(task) {
    let index = toDoList.findIndex(savedTask => {
        return savedTask === task;
    });
    toDoList.splice(index, 1);
    console.log(`=========== TASK REMOVED ===========\nTask "${task}" removed from the list`);
    return toDoList.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
