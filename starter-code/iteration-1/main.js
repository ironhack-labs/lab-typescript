var taskArray = ['Complete assignment', 'Eat lunch'];
function addTask(newTask) {
    taskArray.push(newTask);
    console.log("============= NEW TASK ==============");
    console.log("Task: " + newTask + "inserted in the list");
    console.log("Number of items: " + taskArray.length);
}
function listAllTasks(array) {
    console.log("Printing task list");
    taskArray.forEach(function (eachTask) {
        console.log(eachTask);
    });
}
function deleteTask(task) {
    var eraseTask = taskArray.indexOf(task);
    console.log("=============== TASK REMOVED ================");
    console.log("Deleting task " + task);
    taskArray.splice(eraseTask, 1);
    console.log(taskArray.length);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
