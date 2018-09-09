let arrayTasks = [];
const addTask = (task) => {
    console.log(`=========== NEW TASK ===========`);
    arrayTasks.push(task);
    console.log(`${task}`);
    console.log(`Insertion done!!!!`);
    return arrayTasks.length;
};
const listAllTasks = () => {
    arrayTasks.forEach((task, i) => {
        console.log(`Task ${i}: ${task}`);
    });
};
const deleteTask = (task) => {
    console.log(`=========== DELETE TASK ===========`);
    arrayTasks.forEach((taskInArray, i) => {
        if (taskInArray === task)
            arrayTasks.splice(1, i);
    });
    console.log(`${task}`);
    console.log(`Deletion done!!!!`);
    return arrayTasks.length;
};
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
