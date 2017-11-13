var task = [];
function addTask(task) {
    task.push(task);
    return task.length;
}
;
function listAllTasks() {
    console.log('all tasks');
    task.forEach(function (oneTask) {
        console.log(oneTask);
    });
    return task.length;
}
;
function deleteTask(task) {
    console.log('delete this', task);
    for (var i = 0; i < task.length; i++) {
        if (task[i] === task) {
            task.splice(i, 1);
        }
    }
    return task.length;
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
