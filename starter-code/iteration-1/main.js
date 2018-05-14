let array = [];
let addTask = (task) => {
    array.push(task);
    console.log(`Task ${task} inserted in the list`);
    return array.length;
};
let listAllTasks = () => {
    array.forEach((element) => {
        console.log(element);
    });
};
let deleteTask = (task) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === task) {
            array.splice(i, 1);
            break;
        }
    }
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
