"use strict";
exports.__esModule = true;
function addTask(task) {
    myArray.push(task);
    console.log("=========== NEW TASK ===========, Task " + task + " inserted in the list, Number of items: " + myArray.length);
}
function listAllTasks() {
    for (var i = 0; i < myArray.length; i++) {
        console.log("Task " + i + ": " + myArray[i]);
    }
}
function deleteTask(task) {
    var indexTask = myArray.indexOf(task);
    var removeTask = myArray.splice(indexTask, 1);
}
