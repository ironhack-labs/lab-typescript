var tasksArray = [];
function addTask(task) {
    tasksArray.push(task);
}
function listAllTasks() {
    for (var _i = 0, tasksArray_1 = tasksArray; _i < tasksArray_1.length; _i++) {
        var string = tasksArray_1[_i];
        console.log(string);
    }
}
function deleteTask(task) {
    var index = tasksArray.indexOf("string", 0);
    if (index > -1) {
        tasksArray.splice(index, 1);
    }
    return;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
