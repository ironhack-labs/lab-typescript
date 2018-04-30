let oi = [];
function addTask(value) {
    oi.push(value);
    console.log("Element inserted");
}
function listAllTasks() { console.log(oi); }
function deleteTask(value) {
    oi.splice(oi.indexOf(value), 1);
    console.log("Element deleted");
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
