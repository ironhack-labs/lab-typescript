let tasks = [];
const addTask = (task) => {
    tasks.push(task);
    console.log(`=========== NEW TASK ===========
  Task ${task} inserted in the list
  Number of items: ${tasks.length}`);
};
const listAllTasks = () => {
    tasks.forEach(e => {
        console.log(`TASK: ${e}`);
    });
};
const deleteTask = (task) => {
    let removedTask = tasks.splice(tasks.indexOf(task), 1);
    console.log(`=========== TASK REMOVED ===========
    Task ${removedTask} removed from the list
    Number of items: ${tasks.length}`);
};
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks();
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks();
