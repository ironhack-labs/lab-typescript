var array = [];
function addTask(string) {
    array.push(string);
    return array.length;
}
function listAllTasks() {
    array.forEach(function (task) {
        console.log(task);
    });
    return array.length;
}
function deleteTask(string) {
    array = array.filter(function (task) { return task !== string; });
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
