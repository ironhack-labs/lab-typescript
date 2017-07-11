var newTaskList = [""];
newTaskList = ["eating Breakfast", "Doing Dishes", "Clean"];
console.log(newTaskList);
function addTask(newTask) {
    newTaskList.push(newTask);
    newTaskList.forEach(function (newTask) {
        console.log(newTaskList);
    });
}
;
addTask("laundry");
function deleteTask(num, pos) {
    newTaskList.splice(num, pos);
}
deleteTask(1, 2);
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
