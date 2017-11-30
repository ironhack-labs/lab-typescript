var list = [];
function addTask(task) {
    list.push(task);
    return list.length;
}
function listAllTasks() {
    list.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var i = list.indexOf(task);
    list.splice(i, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
