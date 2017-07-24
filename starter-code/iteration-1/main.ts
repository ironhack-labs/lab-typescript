// Iteration 1
// 1. Create an array of strings
let toDoList: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: string) {
    toDoList.push(task);
    console.log(`=========== NEW TASK ===========\nTask "${task}" inserted in the list`);
    return toDoList.length;
}

// 3. Create a function to list all tasks, it must show in the console the task.
function listAllTasks() {
    toDoList.forEach(element => {
        console.log(element);
    })
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task: string) {
    let index = toDoList.findIndex(savedTask => {
        return savedTask === task
    });
    toDoList.splice(index, 1);
    console.log(`=========== TASK REMOVED ===========\nTask "${task}" removed from the list`);
    return toDoList.length;
}

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
