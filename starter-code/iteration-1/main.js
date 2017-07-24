let toDoList = ['Sleep', 'Eat', 'Repeat'];
function addTask(task) {
    toDoList.push(task);
    console.log(toDoList);
    return toDoList.length;
}
;
function listAllTasks() {
    toDoList.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    for (let i = toDoList.length - 1; i >= 0; i--) {
        if (toDoList[i] === task) {
            toDoList.splice(i, 1);
            break;
        }
    }
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
