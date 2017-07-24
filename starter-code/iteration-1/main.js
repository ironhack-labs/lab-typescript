var taskList = [];
function addTask(task) {
    taskList.push(task);
    console.log(task + 'has been added to the task list');
    console.log('Number of tasks in list:', taskList.length);
    return taskList.length;
}
function listAllTasks() {
    taskList.forEach(function (task, index) {
        console.log('task', index + ':', task);
    });
}
function deleteTask(task) {
    var indexOfTask = taskList.indexOf(task);
    taskList.splice(indexOfTask, 1);
    console.log('Task', task, 'deleted.');
    console.log('Number of tasks in list:', taskList.length);
    return taskList.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
