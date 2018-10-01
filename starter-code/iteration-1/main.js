// Iteration 1
// 1. Create an array of strings
var strings = ["Buy eggs"];
// 2. Create a function to add a task in to the array, call it `addTask`, the function 
//has to accept a string and don't have to return anything.
var addTask = function (task) {
    strings.push(task);
    console.log("Task inserted");
    console.log(strings.length);
    return strings.length;
};
// 3. Create a function to list all tasks, it must show in the console dconst e task.
var listAllTasks = function () {
    strings.forEach(function (task) {
        console.log(task);
    });
};
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
var deleteTask = function (task) {
    strings.splice(0, 1, task);
    console.log(task + " have been removed");
    console.log("the current number of elements is " + task.length);
    return task.length;
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
