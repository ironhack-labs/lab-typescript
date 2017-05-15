var strings = [];
function addTask(task) {
    strings.push(task);
    console.log("Task \"" + task + "\" inserted in the list!");
    return "Number of items: " + strings.length;
}
function listAllTasks() {
    strings.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    strings.splice(strings.indexOf(task), 1);
    console.log("Task \"" + task + "\" removed from list");
    return "Number of items: " + strings.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
