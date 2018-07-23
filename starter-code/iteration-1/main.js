const todoArray = [];
function addTask(taskToAdd) {
    todoArray.push(taskToAdd);
    console.log(`
    =========== NEW TASK ===========
    Task "${taskToAdd}" inserted in the list
    Number of items: ${todoArray.length}`);
    return todoArray.length;
}
function listAllTasks() {
    todoArray.forEach(task => {
        console.log(task);
    });
}
function deleteTask(taskToDelete) {
    todoArray.forEach((task) => {
        if (task === taskToDelete) {
            todoArray.splice(todoArray.indexOf(task), 1);
            console.log(`
            =========== TASK REMOVED ===========
            Task "${taskToDelete}" removed from the list
            Number of items: ${todoArray.length}`);
        }
    });
    return todoArray.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
