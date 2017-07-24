var arrayOfStrings = [];
function addTask(task) {
    console.log("a new task is added and the new array lenght is: ");
    return arrayOfStrings.push(task);
}
console.log("Number of items:", addTask('This is our first task'));
