let arr1 = [];
let addTask = task => {
    arr1.push(task);
};
let listAllTasks = () => {
    console.log(arr1);
};
let deleteTask = task => {
    if (arr1.indexOf(task) >= 0) {
        arr1.splice(arr1.indexOf(task), 1);
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
