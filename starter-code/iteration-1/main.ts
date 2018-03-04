// Iteration 1
// 1. Create an array of strings

let tasks: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
// It receives a string as a parameter called task.
// It adds the task to the array.
// It prints a message indicating the insertion.
// It returns the number of elements in the list.

function addTask(task:string):number {
  tasks.push(task);
  console.log(`Task inserted ${task}`);
  return tasks.length
}

// // 3. Create a function to list all tasks, it must show in the console de task.
// It iterates over all the tasks in the list.
// It prints each list item in the console
function listAllTasks():void{
  tasks.forEach((elem) => {console.log(elem)})
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
// It receives a string as a parameter called task.
// It removes that string from the array.
// It returns the number of elements in the list after the deletion.
// It prints a message indicating the deletion.
// It returns the number of elements in the list and prints that number in the console as well.
function deleteTask(task:string):number{
  tasks = tasks.filter(elem => {
    return elem !== task;
  });

  console.log(`task deleted: ${task}`);

  return tasks.length
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
