var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log('Task inserted');
    return "Tasks inserted: " + tasks.length + " | Last: " + task[tasks.length - 1];
}
;
function listAllTasks() {
    tasks.forEach(function (e) {
        console.log(e);
    });
}
;
function deleteTask(task) {
    tasks.splice(tasks.indexOf(task), 1);
    console.log("Delete successful | Elements: " + tasks.length);
    return "Tasks after deleting: " + tasks.length;
}
;
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
