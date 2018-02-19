let stringArray = [];
function addTask(task) {
    let itemNumer = 0;
    stringArray.push(task);
    itemNumer = stringArray.length;
    console.log("=========== NEW TASK ===========");
    console.log("Task " + task + " inserted in the list");
    console.log("Number of items: " + itemNumer);
    return itemNumer;
}
function listAllTasks() {
    stringArray.forEach(x => console.log(x));
}
function deleteTask(task) {
    let taskAux = stringArray.indexOf(task);
    stringArray.slice(taskAux, 1);
    let numElements = stringArray.length;
    console.log("=========== TASK REMOVED ===========");
    console.log(`Task  ${task} removed from the list`);
    console.log(`Number of items: ${numElements}`);
    return numElements;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
