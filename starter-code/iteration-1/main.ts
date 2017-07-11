// Iteration 1
// 1. Create an array of strings
let myList: Array<String> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask (task: string) {
  return myList.push(task);
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks () {
  return myList.forEach((oneTask) => {
    console.log(oneTask);
  });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask (task: string) {
  myList.forEach((oneTask) => {
    myList.indexOf(oneTask);

    if (myList.indexOf(oneTask) === myList.indexOf(task)) {
      myList.splice(myList.indexOf(task), 1); // splice works only with Numbers use index of
      console.log('Task deleted: ' + task + 'great.')
  }
});
  return myList.length
};

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
