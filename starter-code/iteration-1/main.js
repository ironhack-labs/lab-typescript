var tasks = [];
var addTask = function (task) {
    tasks.push(task);
    return tasks;
};
var listAllTasks = function (task) {
    tasks.forEach(function (task) {
        console.log(task);
    });
    return tasks;
};
var deleteTask = function (task) {
    tasks.splice(tasks.indexOf(task), 1);
    return tasks;
};
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
