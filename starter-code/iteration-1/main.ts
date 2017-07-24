// Iteration 1
// 1. Create an array of strings
let toDos: Array<String> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: String) {
  toDos.push(task);
  console.log ("Se ha añadido la tarea " + task);
  return toDos.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks (todoArray: Array<String>) {
  todoArray.forEach(toDo => {
  console.log(toDo);
  });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(toDoToDelete) {
  let index = toDos.indexOf(toDoToDelete);
  console.log ("Se ha eliminado la tarea " + toDos[index]);
  toDos.splice(index, 1);
  return toDos.length;
}

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks(toDos);
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(toDos);



// Iteration 1
// 1. Create an array of strings

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

// 3. Create a function to list all tasks, it must show in the console de task.

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks(toDos);
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(toDos);
