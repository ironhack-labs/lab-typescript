// Iteration 1
// 1. Create an array of strings
let arrayTasks: Array<string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
const addTask = (task: string): number => {
    console.log(`=========== NEW TASK ===========`);
    arrayTasks.push(task);
    console.log(`${task}`);
    console.log(`Insertion done!!!!`);
    return arrayTasks.length
}
// 3. Create a function to list all tasks, it must show in the console de task.
const listAllTasks = (): void => {
    arrayTasks.forEach((task: string, i: number) => {
        console.log(`Task ${i}: ${task}`);
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
const deleteTask = (task: string): number => {
    console.log(`=========== DELETE TASK ===========`);
    arrayTasks.forEach(
        (taskInArray: string, i: number) => {
            if (taskInArray === task) arrayTasks.splice(1, i);
        })
    ;
    console.log(`${task}`);
    console.log(`Deletion done!!!!`);
    return arrayTasks.length
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
