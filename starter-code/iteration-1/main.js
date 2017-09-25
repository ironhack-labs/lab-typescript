var TodoList = [];
function addTask(task) {
    TodoList.push(task);
    console.log("Task added!");
    return TodoList.length;
}
function listAllTasks() {
    for (var i = 0; i < TodoList.length; i++) {
        console.log(TodoList[i]);
    }
}
function deleteTask(task) {
    TodoList.splice(TodoList.indexOf(task), 1);
    console.log("Item deleted!");
    return TodoList.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
