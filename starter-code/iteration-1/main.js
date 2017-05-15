var myTask = [];
function addTask(task) {
    this.myTask.push(task);
    console.log("=========== NEW TASK ===========");
    console.log("Task " + task + " inserted in the list");
    return myTask.length;
}
function listAllTasks() {
    for (var _i = 0, _a = this.myTask; _i < _a.length; _i++) {
        var i = _a[_i];
        console.log(i);
    }
}
function deleteTask(task) {
    for (var i in this.myTask) {
        if (this.myTask[i] === task) {
            this.myTask.splice(i, 1);
            console.log("=========== TASK REMOVED ===========");
            console.log("Task " + task + " removed from the list");
        }
    }
    return myTask.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
