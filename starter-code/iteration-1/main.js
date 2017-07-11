var toDoList = [];
function addTask(todoItem) {
    this.toDoList.push(todoItem);
    console.log('Task' + todoItem + 'inserted in the list');
    return toDoList.length;
}
function listAllTasks() {
    toDoList.forEach(function (listItem) {
        console.log(listItem);
    });
}
function deleteTask(task) {
    var index = toDoList.indexOf(task);
    if (index !== -1) {
        toDoList.splice(index, 1);
    }
    console.log('Task' + task + 'deleted from the string');
    return toDoList.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
