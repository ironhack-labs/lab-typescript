// Iteration 1
// 1. Create an array of strings

const tasks: Array<string> = ['This is our first task', 'Eat pizza 🍕 yummy!!!', 'Finish this iteration 1!! 🤓'];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask(task: string) {
    tasks.push(task);
    console.log('=========== NEW TASK ===========')
    console.log('Task "' + task + '" inserted in the list');
    console.log('Number of items: ' + tasks.length);
    return tasks.length;
}

// 3. Create a function to list all tasks, it must show in the console de task.

function listAllTasks() {
    tasks.forEach((element: string) => {
        console.log(element);
    });
};

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask (task: string) {
    const index: number = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    console.log('=========== TASK REMOVED ===========')
    console.log('Task "' + task + '" removed from the list');
    console.log('Number of items: ' + tasks.length);
    return tasks.length;
}

// // Execution
// console.log("Number of items:", addTask('This is our first task'));
// console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
// console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
// console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
// listAllTasks();
// console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
// listAllTasks();

addTask('test');

listAllTasks();

deleteTask('Eat pizza 🍕 yummy!!!');