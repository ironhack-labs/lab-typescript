// Iteration 1
// 1. Create an array of strings

let list: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and  have to return a number.

function addTask(task: string): number {

  list.push(task);
  console.log(`=========== NEW TASK ===========
    Task ${task} inserted in the list
    Number of items: ${list.length}`);
  return list.length;

}


// 3. Create a function to list all tasks, it must show in the console de task.

function listAllTasks(): void {
  list.forEach((listItem) => console.log(listItem));
  // 4. Create a function to delete a task, you must find the task inside the array and delete it.

  function deleteTask(task: string): number {
    let index = list.indexOf(task);
    if (index > -1) {
      list.splice(index, 1);
      console.log(`=========== TASK REMOVED ===========
    Task ${task} removed in the list
    Number of items: ${list.length}`);
    }
    return list.length;
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
