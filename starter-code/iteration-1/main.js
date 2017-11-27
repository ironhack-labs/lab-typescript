var one = [];
function addTask(task) {
    one.push(task);
    console.log("=========== NEW TASK ===========");
    console.log("Task " + task + " inserted in the list");
    console.log("Number of items:" + one.length);
    return one.length;
}
function listAllTasks() {
    one.forEach(function (e) {
        console.log(e);
    });
}
function deleteTask(task) {
    var pos = one.indexOf(task);
    one.splice(pos, 1);
    console.log("=========== TASK REMOVED ===========");
    console.log("Task " + task + " removed from the list");
    console.log("Number of items:" + one.length);
    return one.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
