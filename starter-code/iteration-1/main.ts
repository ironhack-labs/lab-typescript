// Iteration 1
// 1. Create an array of strings
// let arrString: Array<string> = [];
let arrString: string[];
const l: any = console.log;

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask(task:string):number {
  arrString.push(task);
  l(`=========== NEW TASK ===========
  Task ${task} inserted in the list
  Number of items: ${arrString.length}`);
  return arrString.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
  l(...arrString);
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task:string) {
  let str: number = arrString.indexOf(task);
  arrString.splice(str,1);
  l(`=========== TASK REMOVED ===========
  Task "${task}" removed from the list`);
  l(`Number of items: ${arrString.length}`);
  return arrString.length;
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
