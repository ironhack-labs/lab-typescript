var tasks = [];
function addTask(task) {
    tasks.push(task);
    return tasks.length;
}
;
function listAllTasks() {
    console.log('========== ALL TASKS ==========');
    tasks.forEach(function (oneTask) {
        console.log(oneTask);
    });
    return tasks.length;
}
;
function deleteTask(task) {
    console.log('DELETE THISSSSSSSS', '\n', task);
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i] === task) {
            tasks.splice(i, 1);
        }
    }
    return tasks.length;
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
