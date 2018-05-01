// Iteration 1
// 1. Create an array of strings
let arrayOfStrings:  Array<string> = []; //made array of strings (currently empty)

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and doesn't have to return anything.

function addTask (task: string){
    arrayOfStrings.push(task);
    console.log(`Task  ${task} +  inserted in the list`)
    console.log(`Number of items: ${arrayOfStrings.length}` )
    return arrayOfStrings.length;
};
// 3. Create a function to list all tasks, it must show in the console de task.

function listAllTasks (task: string){
    arrayOfStrings.forEach( function (oneTask) {
        console.log(`all tasks:  + ${oneTask}`);
    });

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask (task: string) {
    if (arrayOfStrings.indexOf(task) !== -1) {
        arrayOfStrings.splice(arrayOfStrings.indexOf(task), 1);
        console.log(`Task  ${task} +  deleted from the list`)
        console.log(`Number of items: ${arrayOfStrings.length}` )
        return arrayOfStrings.length;
    }
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
