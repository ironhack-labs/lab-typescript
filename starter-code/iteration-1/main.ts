// Iteration 1
// 1. Create an array of strings
let tasklist: string[] = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: string){
  tasklist.push(task);
  console.log(`=========== NEW TASK ===========
Task "${task}" inserted in the list`);
return tasklist.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
  tasklist.forEach(task => {
    console.log(task);
  });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task: string){
   tasklist.forEach((taskToCheck, index) => {
     if (taskToCheck === task){
       tasklist.splice(index, 1);
       console.log(tasklist);
       console.log(`=========== TASK REMOVED ===========
       Task "${task}" removed from the list`);
       
     }
     });
     return tasklist.length;
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
