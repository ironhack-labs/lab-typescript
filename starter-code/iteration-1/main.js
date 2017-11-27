var list = [];
function addTask(task) {
    list.push(task);
    console.log("=========== NEW TASK ===========");
    console.log("Task" + task + "inserted in the list");
    return list.length;
}
function listAllTasks() {
    list.forEach(function (e) {
        console.log(e);
    });
}
function deleteTask(task) {
    list.splice(list.indexOf(task), 1);
    console.log("=========== TASK REMOVED ===========");
    console.log("Task" + task + "removed from the list");
    return list.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
