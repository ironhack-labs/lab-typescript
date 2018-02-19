var tasks = ['This is our first task', 'Eat pizza 🍕 yummy!!!', 'Finish this iteration 1!! 🤓'];
function addTask(task) {
    tasks.push(task);
    console.log('=========== NEW TASK ===========');
    console.log('Task "' + task + '" inserted in the list');
    console.log('Number of items: ' + tasks.length);
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach(function (element) {
        console.log(element);
    });
}
;
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    console.log('=========== TASK REMOVED ===========');
    console.log('Task "' + task + '" removed from the list');
    console.log('Number of items: ' + tasks.length);
    return tasks.length;
}
addTask('test');
listAllTasks();
deleteTask('Eat pizza 🍕 yummy!!!');
