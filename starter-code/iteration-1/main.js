let array = [];
let addTask = (task) => {
    array.push(task);
    console.log("Added task");
    console.log(array.length);
    return array.length;
};
let listAllTasks = () => {
    array.forEach(e => {
        console.log(e);
    });
};
let deleteTask = (task) => {
    array.forEach((e, i) => {
        if (task === e) {
            array.splice(i, 1);
            console.log(`Deleted item ${task}`);
        }
    });
    console.log(array.length);
    return array.length;
};
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks();
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks();
