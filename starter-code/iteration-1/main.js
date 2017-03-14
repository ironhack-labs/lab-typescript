var array = [];
function addTask(task) {
    array.push(task);
    console.log('=========== NEW TASK ===========');
    console.log(task);
    return array.length;
}
function listAllTasks() {
    console.log('=========== ALL TASKS: ===========');
    array.forEach(function (e) {
        console.log(e);
    });
}
function deleteTask(task) {
    var index = array.indexOf(task);
    if (index > -1) {
        console.log('=========== TASK REMOVED ===========');
        console.log(task);
        array.splice(index, 1);
        return array.length;
    }
    else {
        console.log('=========== TASK NOT FOUND ===========');
    }
}
console.log('Number of items:', addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
