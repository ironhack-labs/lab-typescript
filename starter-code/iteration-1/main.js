let todoList = [];
function addTask(task) {
    todoList.push(task);
    console.log("============== NEW TASK ==============");
    console.log(`Task "${task}" inseted in the list`);
    console.log(`${todoList.length}`);
}
function listAllTasks() {
    todoList.forEach(oneTask => {
        console.log(oneTask);
    });
}
function deleteTask(task) {
    todoList.splice(0, 1);
    console.log("========== TASK DELETED ===========");
    console.log(`Task "${task}" removed from the list`);
    console.log(`${todoList.length}`);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
