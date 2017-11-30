// Iteration 1
// 1. Create an array of strings

const myArray: string[] = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask (oneItem: string) {
  return myArray.push(oneItem);
}

// 3. Create a function to list all tasks, it must show in the console de task.

function listAllTasks () {
  return console.log(myArray);
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask (theItem) {
  const deleteItem = myArray.indexOf(theItem);
  console.log(deleteItem);
  // splice takes two params, the first being where you want to start, the second is how many you want to delete
  myArray.splice(deleteItem, 1);
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
