// Iteration 1
// 1. Create an array of strings
let myArray: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask (item:string) {
  myArray.push(item);
  console.log('=========== NEW TASK ===========')
  console.log(`Task "${item}" inserted in the list`);
  console.log('');
  return myArray.length;
}

// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
  myArray.forEach(oneElem => {
    console.log(oneElem);
  });
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask (task: string) {
  console.log('');
  let index = myArray.indexOf(task);
  if(index > -1) {
    myArray.splice(index, 1);

    console.log('=========== TASK REMOVED ===========')
    console.log(`Task "${task}" removed from the list`);
    console.log('');
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
