var tasks = [];
function addTask(task) {
    tasks.push(task);
}
;
function listAllTasks() {
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var item = tasks_1[_i];
        console.log(item);
    }
}
function deleteTask(item) {
    var index = tasks.indexOf(item);
    tasks.splice(index, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
