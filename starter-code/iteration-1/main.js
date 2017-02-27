var arrString = [];
function addTask(task) {
    arrString.push(task);
    console.log("Inserted " + task);
    return arrString.length;
}
function listAllTasks() {
    arrString.forEach(function (elem) { console.log(elem); });
}
function deleteTask(task) {
    var index = arrString.indexOf(task);
    if (index !== -1) {
        arrString.splice(index, 1);
        console.log("Erased " + task);
        return arrString.length;
    }
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
