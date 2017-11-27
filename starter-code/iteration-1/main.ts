// Iteration 1
// 1. Create an array of strings
let tasks: Array<string> = []; // Array of strings


// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask (task: string): number{
 tasks.push(task);
 console.log(`==========NEW TASK==========\nTask ${task} inserted in the list
 \nNumber of items: ${tasks.length}`);
 let elements = tasks.length;
 return elements;
}

addTask('Do the laundry :-(');


// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
    tasks.forEach((item)=>{
        console.log(`-->${item}`);
    });
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task:string):number{
    let index = tasks.indexOf(task);
    if (index>-1){
        tasks.splice(index,1);
    }
    console.log(`The number of tasks is: ${tasks.length}`);
    console.log(`==========NEW REMOVED========\nTask ${task} deleted from the list
    \nNumber of items: ${tasks.length}`);
    return tasks.length;
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



