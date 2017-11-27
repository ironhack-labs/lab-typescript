let arr = [];
let addTask = (e) => {
    arr.push(e);
    console.log(e);
    return arr.length;
};
let listAllTasks = () => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
let deleteTask = (a) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == a) {
            delete arr[i];
            console.log("arr ", i + "--> delete");
            return i;
        }
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
console.log(arr);
