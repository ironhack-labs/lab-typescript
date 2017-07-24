// Iteration 1
// 1. Create an array of strings
let myTasks: string[] = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
let addTask = function(task: string):number {
    console.log("added task and new length is: ");
    return myTasks.push(task);
  }
// 3. Create a function to list all tasks, it must show in the console de task.
let listAllTasks = function ():void {
  for(var task of myTasks){
    console.log(task);
    }
  }


// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask(task: string): number {
 let index = myTasks.indexOf(task);
   if(index > -1){
     myTasks.splice(index, 1);
   }
  return myTasks.length
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
