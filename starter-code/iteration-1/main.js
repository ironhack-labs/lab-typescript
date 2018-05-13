let tasks = [];
function addTask(task) {
    let outputString = "=========== NEW TASK ===========\n";
    tasks.push(task);
    outputString += `"Task "${task}" inserted in the list"\n`;
    outputString += `Number of items: ${tasks.length}`;
    console.log(outputString);
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach((task) => { console.log(task); });
}
function deleteTask(task) {
    let numberOfTasks;
    let outputString = "=========== TASK REMOVED ===========\n";
    tasks.splice(tasks.indexOf(task), 1);
    outputString += `Task "${task}" removed from the list\n`;
    outputString += `Number of items: ${tasks.length}`;
    console.log(outputString);
    return tasks.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
