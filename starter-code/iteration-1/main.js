var taskArray = [];
var addTask = function (task, taskArray) {
    console.log("Task :" + task + "inserted in the list");
    taskArray.push(task);
    return taskArray.length;
};
var listAllTasks = function (taskArray) {
    taskArray.forEach(function (e) {
        console.log(e);
    });
};
var deleteTask = function (task, taskArray) {
    var index = taskArray.indexOf(task);
    taskArray.splice(index, 1);
    console.log("Task :" + task + "removed from the list");
    return taskArray.length;
};
console.log("Number of items:", addTask('This is our first task', taskArray));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!', taskArray));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓', taskArray));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓', taskArray));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓', taskArray));
listAllTasks(taskArray);
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓', taskArray));
listAllTasks(taskArray);
