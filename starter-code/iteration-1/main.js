let tasksArr = [];
function addTask(task) {
    tasksArr.push(task);
    console.log(`Task ${task} inserted in the list
  Number of items: ${tasksArr.length}`);
    return tasksArr.length;
}
function listAllTasks() {
    tasksArr.forEach(function (e) {
        console.log(e);
    });
}
function deleteTask(task) {
    let indice = tasksArr.indexOf(task);
    tasksArr.splice(indice, 1);
    console.log(`Task ${task} removed from the list
  Number of items ${tasksArr.length}`);
    return tasksArr.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
