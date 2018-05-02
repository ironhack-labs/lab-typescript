// Iteration 1
// 1. Create an array of strings

let taskList: Array<string> = [];

function addTask(task: string) {
    taskList.push(task);
    console.log(`Added ${task} task`);
    console.log("Number of tasks " + taskList.length);
    return taskList.length;
}

function listAllTasks() {
    taskList.forEach((oneTask) => {
        console.log(oneTask);
    });
}

function deleteTask(task: string) {
    for(var i = 0; i < taskList.length; i++) {
        if(taskList[i] == task) {
            taskList.splice(i, 1);
        }
    }
    console.log(`Delete ${task} task`);
    console.log("Number of tasks " + taskList.length);
    return taskList.length;
}

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

// 3. Create a function to list all tasks, it must show in the console de task.

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

// Execution
// console.log("Number of items:", addTask('This is our first task'));
// console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
// console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
// console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
// listAllTasks();
// console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
// listAllTasks();

addTask('This is our first task');
addTask('Eat pizza 🍕 yummy!!!');
addTask('Finish this iteration 1!! 🤓');
addTask('Finish this iteration 2!! 🤓');
addTask('Finish this iteration 3!! 🤓');
listAllTasks();
deleteTask('Finish this iteration 1!! 🤓');
listAllTasks();
