// Iteration 1
// 1. Create an array of strings
let array: Array<string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
let addTask = (task: string) => {
    array.push(task);
    console.log("=========== NEW TASK ===========")
    console.log(`Task "${task}" inserted in the list`)

    return array.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
let listAllTasks = () => {
    console.log("This are all the tasks:")
    array.forEach(e => {
        console.log(e)

    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
let deleteTask = (task: string) => {
    var index = array.indexOf(task)
    array.splice(index, 1);
    console.log("=========== TASK REMOVED ===========")
    console.log(`Task ${task} removed from the list`)
    return array.length;

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
