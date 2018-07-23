// Iteration 1
// 1. Create an array of strings
const arrTask = ["tarea1", "tarea2"];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

  function addTask(newTask: string) {
    arrTask.push(newTask);
    console.log(`Nueva tarea ${newTask}`);
    console.log(arrTask.length);
    return arrTask.length;
  }

  function listAllTasks() {
    arrTask.forEach(e => console.log(e));
  }

  function deleteTask(task) {
    arrTask.splice(arrTask.indexOf(task), 1);
    console.log(`Eliminada tarea ${task}`);
    console.log(arrTask.length);
    return arrTask.length;
  }



// 3. Create a function to list all tasks, it must show in the console de task.

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

// Execution
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks();
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks();
