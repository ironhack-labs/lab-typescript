var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("=========== NEW TASK ===========");
    console.log('Task "' + task + '" inserted in the list');
    return tasks.length;
}
;
function listAllTasks() {
    tasks.forEach(function (t) {
        console.log(t);
    });
}
;
function deleteTask(task) {
    var i = tasks.indexOf(task);
    if (i != -1) {
        console.log("=========== TASK REMOVE ===========");
        console.log('Task "' + task + '" removed from the list');
        return tasks.splice(i, 1);
    }
}
;
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
