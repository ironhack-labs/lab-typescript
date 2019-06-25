// Iteration 1
// 1. Create an array of strings

const tasks: Array<string> = []; 

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

const addTask = (task: string) => {
  tasks.push(task);
  console.log(
    `=========== NEW TASK ===========
    Task ${task} inserted in the list
    Number of items: ${tasks.length}`
  )
}

// 3. Create a function to list all tasks, it must show in the console de task.

const listAllTasks = () => {
  tasks.map((el, idx) => console.log(`${idx + 1} ${el}`))
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

const deleteTask = (task: string) => {
  if (tasks.indexOf(task) > -1) {
    tasks.splice(tasks.indexOf(task), 1)
    console.log(
      `=========== TASK REMOVED ===========
      Task ${task} removed from the list
      Number of items: ${tasks.length}`
    )
  } else {
    console.log(
      `=========== TASK NOT FOUND ===========
      Number of items: ${tasks.length}`
    )
  }
}

// Execution
console.log(addTask('This is our first task'));
console.log(addTask('Eat pizza 🍕 yummy!!!'));
console.log(addTask('Finish this iteration 1!! 🤓'));
console.log(addTask('Finish this iteration 2!! 🤓'));
console.log(addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log(deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
