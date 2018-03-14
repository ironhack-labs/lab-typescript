var tasks = [];
var addTask = function (task) {
    tasks.push(task);
    console.log("Task \"" + task + "\" inserted in the list");
    return tasks.length;
};
var listAllTasks = function () {
    tasks.forEach(function (task) {
        console.log(task);
    });
};
var deleteTask = function (task) {
    for (var i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i] === task) {
            tasks.splice(i, 1);
            console.log("Task \"" + task + "\" removed from the list");
            break;
        }
    }
    return tasks.length;
};
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
