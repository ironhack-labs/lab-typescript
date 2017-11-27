var array = [];
function addTask(task) {
    array.push(task);
    return array.length;
}
function listAllTasks() {
    array.forEach(function (e) { return console.log(e); });
}
function deleteTask(task) {
    array.splice(array.indexOf(task), 1);
    console.log("The element deleted was: " + task);
    console.log(array.length);
    return array.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
