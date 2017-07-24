var tasks = [];
var addTask = function (task) {
    tasks.push(task);
    console.log("Task \"" + task + "\" inserted in the list");
    return tasks.length;
};
var listAllTasks = function () {
    tasks.forEach(function (listElement) { return console.log(listElement); });
};
var deleteTask = function (task) {
    tasks.forEach(function (listElement, i) {
        if (listElement == task)
            tasks.splice(i, 1);
    });
    console.log("Task \"" + task + "\" removed from the list");
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
