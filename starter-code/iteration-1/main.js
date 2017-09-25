let strings = [];
function addTask(task) {
    strings.push(task);
    console.log('It works');
    return strings.length;
}
function listAllTasks() {
    strings.forEach((el) => {
        console.log(el);
    });
}
function deleteTask(task) {
    let pos = strings.indexOf(task);
    strings.splice(pos, 1);
    console.log('delete works');
    return strings.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
