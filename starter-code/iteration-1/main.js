let list = [];
function addTask(str) {
    list.push(str);
    console.log(list.length);
    return list.length;
}
function listAllTasks() {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
function deleteTask(task) {
    list.splice(list.indexOf(task), 1);
    console.log(list.length);
    console.log(task + " was deleted!");
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
