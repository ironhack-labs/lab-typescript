let taskArr = [];
let addTask = (task) => {
    taskArr.push(task);
    console.log(`Task ${task} inserted in the list`);
    console.log(`Number of items: ${taskArr.length}`);
};
let listAllTasks = () => {
    taskArr.forEach(elem => {
        console.log(elem);
    });
    console.log(taskArr);
};
let deleteTask = (task) => {
    let index = taskArr.indexOf(task);
    if (index !== -1) {
        taskArr.splice(index, 1);
    }
};
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
