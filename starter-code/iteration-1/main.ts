// Iteration 1
// 1. Create an array of strings
let array: Array<string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
let addTask = (task: string) => {
  array.push(task);
  console.log("Added task");
  console.log(array.length);
  return array.length;
};
// 3. Create a function to list all tasks, it must show in the console the task.
let listAllTasks = () => {
  array.forEach(e => {
    console.log(e);
  });
};
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
let deleteTask = (task: string) => {
  array.forEach((e, i) => {
    if (task === e) {
      array.splice(i, 1);
      console.log(`Deleted item ${task}`);
    }
  });
  console.log(array.length);
  return array.length;
};
// Execution
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks();
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks();
