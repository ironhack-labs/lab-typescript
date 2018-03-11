var allTask = [];
function addTask(task) {
    allTask.push(task);
    console.log("=========== NEW TASK ===========\n    Task \"" + task + "\" inserted in the list");
    return allTask.length;
}
function listAllTasks() {
    console.log("=========== ALL TASK ===========");
    for (var _i = 0, _a = this.allTask; _i < _a.length; _i++) {
        var item = _a[_i];
        console.log(item);
    }
}
function deleteTask(task) {
    var index = allTask.indexOf(task);
    allTask.splice(index, 1);
    console.log("=========== TASK REMOVED ===========\n    Task \"" + task + "\" removed from the list");
    return allTask.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
