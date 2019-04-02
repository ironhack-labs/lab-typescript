let tasks = [];
const addTask = (task) => {
    tasks.push(task);
    console.log('Task Inserted');
    console.log(tasks.length);
    return tasks.length;
};
const listAllTasks = () => {
    tasks.forEach(e => console.log(e));
};
const deleteTask = (task) => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    console.log('Task Deleted');
    console.log(tasks.length);
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
