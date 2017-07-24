var arr = [];
function addTask(task) {
    arr.push(task);
    console.log(task + " inserted to Array");
    return arr.length;
}
function listAllTasks() {
    arr.forEach(function (e) {
        console.log(e);
    });
}
function deleteTask(task) {
    arr.pop();
    console.log(task + " deleted from Array");
    return arr.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
