var arrayOfTasks = [];
function addTask(task) {
    console.log("a new task is added and the new array lenght is: ");
    return arrayOfTasks.push(task);
}
function listAllTasks() {
    for (var _i = 0, arrayOfTasks_1 = arrayOfTasks; _i < arrayOfTasks_1.length; _i++) {
        var task = arrayOfTasks_1[_i];
        console.log("Task listed : ", task);
    }
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
