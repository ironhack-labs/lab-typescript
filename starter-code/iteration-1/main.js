const tasks = [];
const addTask = (task) => {
    tasks.push(task);
    console.log(`=========== NEW TASK ===========
    Task ${task} inserted in the list
    Number of items: ${tasks.length}`);
};
const listAllTasks = () => {
    tasks.map((el, idx) => console.log(`${idx + 1} ${el}`));
};
const deleteTask = (task) => {
    if (tasks.indexOf(task) > -1) {
        tasks.splice(tasks.indexOf(task), 1);
        console.log(`=========== TASK REMOVED ===========
      Task ${task} removed from the list
      Number of items: ${tasks.length}`);
    }
    else {
        console.log(`=========== TASK NOT FOUND ===========
      Number of items: ${tasks.length}`);
    }
};
console.log(addTask('This is our first task'));
console.log(addTask('Eat pizza 🍕 yummy!!!'));
console.log(addTask('Finish this iteration 1!! 🤓'));
console.log(addTask('Finish this iteration 2!! 🤓'));
console.log(addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log(deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
