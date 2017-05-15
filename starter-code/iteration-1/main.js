var arrayOfStrings = [];
function addTask(item) {
    arrayOfStrings.push(item);
    return arrayOfStrings.length;
}
function listAllTasks() {
    arrayOfStrings.forEach(function (element) {
        console.log(element);
    });
}
function deleteTask(task) {
    var beautifulNumber = arrayOfStrings.indexOf(task);
    arrayOfStrings.splice(beautifulNumber, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
