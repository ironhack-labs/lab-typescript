// Iteration 1
// 1. Create an array of strings
var vector = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
var addTask = function (task) {
    vector.push(task);
    console.log('=========== NEW TASK ===========');
    console.log("Task " + task + " inserted in the list");
    return vector.length;
};
// 3. Create a function to list all tasks, it must show in the console de task.
var listAllTasks = function () {
    console.log(vector);
};
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
var deleteTask = function (task) {
    for (var i = 0; task !== vector[i]; i++) {
        if (task === vector[i])
            vector.splice(i, 1);
        return vector.length;
    }
    console.log('=========== TASK REMOVED ===========');
    console.log("Task " + task + " removed from the list");
    return vector.length && console.log(vector.length);
};
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
