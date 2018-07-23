// Iteration 1
// 1. Create an array of strings

let emptyArray: Array<any> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask(task:string):any {
 emptyArray.push(task)
 let lgt = emptyArray.length;  
  console.log(`Task:${task}, with ${lgt} remaining`)
}


// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
  emptyArray.forEach(e => console.log(e))
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task:string){
   let remove = emptyArray.splice(emptyArray.indexOf(task),1)
   let lgt = emptyArray.length;
   console.log(`Removed the task:${task}, with ${lgt} remaining`)
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
