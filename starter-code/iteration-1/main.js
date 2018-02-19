let myTasks = [];
function addTask(task) {
    myTasks.push(task);
    console.log(`Task ${task} inserted in the list`);
    console.log(`Number of items: ${myTasks.length}`);
    return myTasks.length;
}
function listAllTasks() {
    myTasks.forEach(t => {
        console.log(t);
    });
}
function deleteTask(task) {
    myTasks.splice(myTasks.indexOf(task), 1);
    console.log(`Task ${task} removed from the list`);
    console.log(`Number of items: ${myTasks.length}`);
    return myTasks.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
