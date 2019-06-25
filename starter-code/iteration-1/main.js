let stringArrays = [];
function addTask(task) {
    stringArrays.push(task);
    console.log('=========== NEW TASK ===========');
    console.log('Task "' + task + '" inserted in the list');
    return stringArrays.length;
}
function listAllTasks() {
    console.log('=========== LISTADO DE TASKS ===========');
    for (const task of stringArrays) {
        console.log(task);
    }
}
function deleteTask(task) {
    for (let i = 0; i < stringArrays.length; i++) {
        if (stringArrays[i] == task) {
            stringArrays.splice(i, 1);
            console.log('=========== TASK REMOVED ===========');
            console.log('Task "' + task + '" removed from the list');
        }
    }
    return stringArrays.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
