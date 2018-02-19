var list = [];
function addTask(task) {
    return list.push(task);
}
function listAllTasks() {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var entry = list_1[_i];
        console.log(entry);
    }
}
function deleteTask(task) {
    var index = list.indexOf(task);
    list.splice(index, 1);
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
