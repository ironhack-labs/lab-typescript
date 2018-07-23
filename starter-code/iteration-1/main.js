const arrTask = ["tarea1", "tarea2"];
function addTask(newTask) {
    arrTask.push(newTask);
    console.log(`Nueva tarea ${newTask}`);
    console.log(arrTask.length);
    return arrTask.length;
}
function listAllTasks() {
    arrTask.forEach(e => console.log(e));
}
function deleteTask(task) {
    arrTask.splice(arrTask.indexOf(task), 1);
    console.log(`Eliminada tarea ${task}`);
    console.log(arrTask.length);
    return arrTask.length;
}
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks();
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks();
