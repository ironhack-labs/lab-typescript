let taskArray = [];
let addTask = function (task) {
    console.log("Task :" + task + "inserted in the list");
    taskArray.push(task);
    return taskArray.length;
};
let listAllTasks = function () {
    taskArray.forEach(e => {
        console.log(e);
    });
};
let deleteTask = function (task) {
    let index = taskArray.indexOf(task);
    taskArray.splice(index, 1);
    console.log("Task :" + task + "removed from the list");
    return taskArray.length;
};
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
