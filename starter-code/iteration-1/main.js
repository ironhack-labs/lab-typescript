let array = [];
function addTask(task) {
    array.push(task);
    console.log("=========== NEW TASK ===========");
    console.log("task add" + task);
    return array.length;
}
function listAllTasks() {
    array.forEach(element => {
        console.log("Task :" + element);
    });
}
function deleteTask(task) {
    array.splice(task.indexOf(task), 1);
    console.log("=========== TASK REMOVED ===========");
    console.log("task remove" + task);
    return array.length;
}
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks();
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks();
