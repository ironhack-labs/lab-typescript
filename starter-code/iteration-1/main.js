let array = [];
let addTask = (task) => {
    array.push(task);
    console.log("=========== NEW TASK ===========");
    console.log(`Task "${task}" inserted in the list`);
    return array.length;
};
let listAllTasks = () => {
    console.log("This are all the tasks:");
    array.forEach(e => {
        console.log(e);
    });
};
let deleteTask = (task) => {
    var index = array.indexOf(task);
    array.splice(index, 1);
    console.log("=========== TASK REMOVED ===========");
    console.log(`Task ${task} removed from the list`);
    return array.length;
};
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
