// Iteration 1
var toDo = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    toDo.push(task);
    console.log(task);
    return toDo.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    toDo.forEach(function (task) {
        return console.log(task);
    });
}
// // 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    var index = toDo.indexOf(task);
    toDo.slice(toDo.indexOf(task), 1);
    return toDo.length;
}
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
