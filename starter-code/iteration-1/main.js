var myTask = [];
function addTask(task) {
    myTask.push(task);
    console.log("=========== NEW TASK =========== " + task);
    return myTask.length;
}
function listAllTasks() {
    for (var _i = 0, myTask_1 = myTask; _i < myTask_1.length; _i++) {
        var task = myTask_1[_i];
        console.log("list All Tasks: ", task);
    }
}
function deleteTask(task) {
    for (var i = myTask.length - 1; i--;) {
        if (myTask[i] === task)
            myTask.splice(i, 1);
        console.log("=========== DELETED TASK =========== " + task);
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
