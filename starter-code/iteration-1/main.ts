// Iteration 1
// 1. Create an array of strings
const todoArray:Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask(taskToAdd:string):number{
    todoArray.push(taskToAdd);
    console.log(`
    =========== NEW TASK ===========
    Task "${taskToAdd}" inserted in the list
    Number of items: ${todoArray.length}`);
    return todoArray.length;
}

// 3. Create a function to list all tasks, it must show in the console the task.
function listAllTasks():void{
    todoArray.forEach(task => {
        console.log(task);
    });
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(taskToDelete:string):number{
    todoArray.forEach((task) => {
        if(task===taskToDelete){
            todoArray.splice(todoArray.indexOf(task),1)
            console.log(`
            =========== TASK REMOVED ===========
            Task "${taskToDelete}" removed from the list
            Number of items: ${todoArray.length}`)
        }
    });

    return todoArray.length;
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
