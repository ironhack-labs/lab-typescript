// Iteration 1
// 1. Create an array of strings
let tasks: Array < string > = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask(task: string) {
  tasks.push(task);
  console.log(`=========== NEW TASK ===========\nTask "${task}" inserted on the list \n Number of items: ${tasks.length}`);
}

addTask('do homework');
addTask('buy fruit');
addTask('This is our first task');
addTask('Eat pizza 🍕 yummy!!!');

// 3. Create a function to list all tasks, it must show in the console de task.

function listAllTasks():void {
  tasks.forEach(task => {
    console.log(task);
  });
}

listAllTasks();


// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask(task: string) {
  let indexOfTask = tasks.indexOf(task);
  tasks.splice(indexOfTask, 1);
  console.log(`=========== NEW TASK ===========
  Task "${task}" inserted on the list
  Number of items: " + ${tasks.length}`);
}

//también se podría hacer con un filter

// function deleteTask(task: string):number {
//   tasks = tasks.filter(t=>{
//     return t!== task;
//   });
//   console.log(`task deleted: "${task}"`);
//   return tasks.length;
// }

deleteTask('do homework');
deleteTask('This is our first task');

listAllTasks();