var toDos = [];
function addTask(task) {
    toDos.push(task);
    console.log("Se ha añadido la tarea " + task);
    return toDos.length;
}
function listAllTasks(todoArray) {
    todoArray.forEach(function (toDo) {
        console.log(toDo);
    });
}
function deleteTask(toDoToDelete) {
    var index = toDos.indexOf(toDoToDelete);
    console.log("Se ha eliminado la tarea " + toDos[index]);
    toDos.splice(index, 1);
    return toDos.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks(toDos);
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(toDos);
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks(toDos);
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(toDos);
